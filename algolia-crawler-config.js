/**
 * Algolia Crawler configuration for developers.polymesh.network
 * =============================================================
 *
 * REFERENCE COPY ONLY -- editing this file changes nothing on its own.
 *
 * The live configuration is held by Algolia, not by this repo:
 *   https://crawler.algolia.com/admin/crawlers -> polymeshassociation -> Editor
 * This file exists so the config is reviewable in PRs and recoverable if the
 * dashboard copy is lost. Keep the two in sync: after changing the crawler in
 * the dashboard, paste the result back here in the same commit.
 *
 *
 * TO APPLY
 * --------
 * 1. Paste the body below into the dashboard Editor, leaving the real `appId`
 *    and `apiKey` in place -- they are redacted here, and the crawler API key
 *    is NOT the public search key in docusaurus.config.ts. Never commit it.
 * 2. "Save" then "Restart crawling" (or "Run test" on a single URL first).
 * 3. Check the crawl log for "Extractors returned N records, the maximum is
 *    750". Any page listed there needs an exact-URL entry in exclusionPatterns.
 *
 *
 * IMPORTANT: initialIndexSettings is applied ONLY when the crawler creates an
 * index. The `polymeshassociation` index already exists, so nothing in that
 * block will take effect from here. Those settings must be pushed separately
 * via the Algolia dashboard (Search -> Index -> Configuration) or the API.
 *
 *
 * SITE COUPLING -- things here that break if the site changes
 * -----------------------------------------------------------
 * - renderJavaScript is false, so extraction relies on Docusaurus' SSR output.
 *   The `lvl0` selector reads the active sidebar category from the server-
 *   rendered `.menu__link--active` class. A Docusaurus major upgrade that
 *   changes those class names silently degrades every lvl0 to "Documentation".
 * - Only the current SDK version is indexed. When a new version is cut,
 *   `sdk-docs_versions.json` gains an entry and the newly-archived version
 *   needs adding to the "superseded SDK versions" block below.
 * - themeConfig.algolia.contextualSearch (docusaurus.config.ts) filters queries
 *   by the `docusaurus_tag` facet, which is read from the page's
 *   `<meta name="docsearch:docusaurus_tag">`. That facet must stay in
 *   attributesForFaceting or site search returns nothing.
 */
new Crawler({
  appId: '***',
  apiKey: '***',
  indexPrefix: '',
  rateLimit: 4,
  maxDepth: 10,
  startUrls: ['https://developers.polymesh.network/'],
  sitemaps: ['https://developers.polymesh.network/sitemap.xml'],
  renderJavaScript: false,
  discoveryPatterns: ['https://developers.polymesh.network/**'],
  schedule: 'on friday',

  // Abort the crawl rather than publish a gutted index if a build/deploy breaks.
  safetyChecks: {
    beforeIndexPublishing: { maxLostRecordsPercentage: 30 },
  },

  exclusionPatterns: [
    // --- Not content -------------------------------------------------------
    // Cloudflare Email Obfuscation rewrites the mailto: links on the bug-bounty
    // pages into /cdn-cgi/l/email-protection#<hash>, which 404s for a bare GET.
    'https://developers.polymesh.network/cdn-cgi/**',
    // Docusaurus' own search page.
    'https://developers.polymesh.network/search/',
    // Tag listing pages: navigational only, their text is just the titles of
    // docs that are already indexed in their own right (~120 URLs).
    'https://developers.polymesh.network/tags/',
    'https://developers.polymesh.network/tags/**',
    'https://developers.polymesh.network/**/tags/',
    'https://developers.polymesh.network/**/tags/**',
    // Agent/LLM artefacts from docusaurus-plugin-llms. Not linked from the SSR
    // HTML today (the "Copy page" button is client-rendered and we run with
    // renderJavaScript:false), so these are belt-and-braces.
    'https://developers.polymesh.network/**/*.md',
    'https://developers.polymesh.network/llms.txt',
    'https://developers.polymesh.network/llms-full.txt',

    // --- Superseded SDK versions ------------------------------------------
    // Only the current SDK version (30.0.x, served unversioned at /sdk-docs/)
    // is indexed. 28.0.x + 29.0.x are ~1,244 of the 2,236 sitemap URLs and,
    // because contextualSearch filters on docusaurus_tag, their records are
    // only ever reachable while browsing an old-version page.
    // Re-add a version here (both lines) when it needs to be searchable again.
    'https://developers.polymesh.network/sdk-docs/28.0.x/',
    'https://developers.polymesh.network/sdk-docs/28.0.x/**',
    'https://developers.polymesh.network/sdk-docs/29.0.x/',
    'https://developers.polymesh.network/sdk-docs/29.0.x/**',

    // --- Current-version TypeDoc dumps over the 750-record cap -------------
    // NOTE: these are exact-URL patterns, not prefixes. A pattern ending in a
    // trailing slash matches only that one page; use /** to match a subtree.
    // These are the ONLY three pages in the current SDK tree with more than
    // 150 headings; each generates roughly 950-1100 records. Everything else
    // under /sdk-docs/ is comfortably within the cap.
    // If a future SDK release pushes another page over the limit, the crawl
    // log names it -- add it here as an exact URL.
    'https://developers.polymesh.network/sdk-docs/types/', // 494 headings
    'https://developers.polymesh.network/sdk-docs/types/enumerations/CallIdEnum/', // 556
    'https://developers.polymesh.network/sdk-docs/types/enumerations/EventIdEnum/', // 471
    // Deliberately NOT excluded: the per-entity TypeDoc barrel pages
    // (/sdk-docs/api/procedures/types/, /sdk-docs/api/entities/Account/types/,
    // ...22 in total). A previous `/sdk-docs/**/types/` wildcard swept all of
    // them out, but the largest is ~244 records and most are under 20. They
    // carry the SDK's parameter and interface names, so they are worth having.
  ],

  actions: [
    {
      // ---- Conceptual / developer docs -----------------------------------
      indexName: 'polymeshassociation',
      pathsToMatch: [
        'https://developers.polymesh.network/**',
        '!https://developers.polymesh.network/sdk-docs/**',
      ],
      recordExtractor: ({ $, helpers }) => {
        const lvl0 =
          $(
            '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'
          )
            .last()
            .text() || 'Documentation';
        return helpers.docsearch({
          recordProps: {
            lvl0: { selectors: '', defaultValue: lvl0 },
            lvl1: ['header h1', 'article h1'],
            lvl2: 'article h2',
            lvl3: 'article h3',
            lvl4: 'article h4',
            lvl5: 'article h5',
            lvl6: 'article h6',
            // Table cells are indexed as *content*, not as a heading level.
            // Promoting td:first-child to lvl5 created one record per table
            // row, which is what pushed the v8 pallet API reference to 910
            // records (476 rows). It also produced useless hierarchies there,
            // since column 1 of those tables is a status flag ("Added",
            // "Removed"), not a name.
            content: 'article p, article li, article td',
            pageRank: '10',
          },
          indexHeadings: true,
          aggregateContent: true,
          recordVersion: 'v3',
        });
      },
    },
    {
      // ---- SDK API reference (current version only) ----------------------
      indexName: 'polymeshassociation',
      pathsToMatch: ['https://developers.polymesh.network/sdk-docs/**'],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl0: { selectors: '', defaultValue: 'SDK Documentation' },
            lvl1: ['header h1', 'article h1'],
            lvl2: 'article h2',
            lvl3: 'article h3',
            content: 'article p, article li, article td',
            // Ranked below the conceptual docs so a query like "compliance"
            // surfaces the guide before the generated API surface.
            pageRank: '0',
          },
          indexHeadings: true,
          aggregateContent: true,
          recordVersion: 'v3',
        });
      },
    },
  ],

  // NOTE: initialIndexSettings is applied only when the crawler *creates* the
  // index. Because `polymeshassociation` already exists, changes below must be
  // pushed from the Algolia dashboard (Index > Configuration) or via the API.
  initialIndexSettings: {
    polymeshassociation: {
      attributesForFaceting: [
        'type',
        'lang',
        'language',
        'version',
        'docusaurus_tag', // required by themeConfig.algolia.contextualSearch
      ],
      attributesToRetrieve: [
        'hierarchy',
        'content',
        'anchor',
        'url',
        'url_without_anchor',
        'type',
      ],
      attributesToHighlight: ['hierarchy', 'content'],
      attributesToSnippet: ['content:10'],
      camelCaseAttributes: ['hierarchy', 'content'],
      searchableAttributes: [
        'unordered(hierarchy.lvl0)',
        'unordered(hierarchy.lvl1)',
        'unordered(hierarchy.lvl2)',
        'unordered(hierarchy.lvl3)',
        'unordered(hierarchy.lvl4)',
        'unordered(hierarchy.lvl5)',
        'unordered(hierarchy.lvl6)',
        // content_camel lets a query like "getidentity" match camelCase SDK
        // symbol names (getIdentity) that appear in body prose, not just headings.
        'content_camel',
        'content',
      ],
      distinct: true,
      attributeForDistinct: 'url',
      customRanking: [
        'desc(weight.pageRank)',
        'desc(weight.level)',
        'asc(weight.position)',
      ],
      ranking: [
        'words',
        'filters',
        'typo',
        'attribute',
        'proximity',
        'exact',
        'custom',
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: '</span>',
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: 'allOptional',
    },
  },
});
