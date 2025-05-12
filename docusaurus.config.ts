import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import 'dotenv/config';

const siteId = process.env.MATOMO_SITE_ID;

const config: Config = {
  title: 'Polymesh Documentation Portal',
  tagline: 'The perfect place to discover the open source Polymesh universe',
  url: 'https://developers.polymesh.network',
  // url: 'https://docs.polymesh.network',
  // url: 'https://polymeshassociation.github.io',
  baseUrl: '/',
  // baseUrl: '/polymesh-documentation-site/',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'polymeshassociation', // Usually your GitHub org/user name.
  projectName: 'polymesh-documentation-site', // Usually your repo name.
  // deploymentBranch: '', // The name of the branch to deploy the static files to.
  trailingSlash: true,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          // path: 'docs',
          routeBasePath: '/', // Defaults to "docs"
          sidebarPath: require.resolve('./docs-sidebars.ts'), // Defaults to sidebars.js

          editUrl:
            'https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop',
        },
        blog: false, // disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
        // googleTagManager: {
        //   containerId: process.env.GTM_CONTAINER_ID,
        // },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'polymesh-docs',
    //     path: 'polymesh-docs',
    //     routeBasePath: '/polymesh-docs',
    //     sidebarPath: require.resolve('./polymesh-docs-sidebar.ts'),
    //     // ... other options
    //     editUrl:
    //       'https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop',
    //   },
    // ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk-docs',
        path: 'sdk-docs',
        routeBasePath: '/sdk-docs',
        includeCurrentVersion: false,
        // versions: {
        //   current: {
        //     label: '26.0.0-beta.2',
        //     path: '26.0.0-beta.2',
        //   },
        // },
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // Main docs index
          { from: '/docs/', to: '/' },
          { from: '/docs/introduction/', to: '/' },
          { from: '/docs/introduction/governance/', to: '/governance/' },
          { from: '/docs/introduction/identity/', to: '/identity/' },
          { from: '/docs/introduction/polyx/', to: '/polyx/' },
          { from: '/docs/introduction/why-polymesh/', to: '/' },
          { from: '/docs/actions/', to: '/corporate-actions/' },
          {
            from: '/docs/actions/actions-sdk/',
            to: '/development/tooling/sdk/',
          },
          {
            from: '/docs/community/bug-bounty/',
            to: '/development/bug-bounty/',
          },
          {
            from: '/docs/community/bug-bounty-rules/',
            to: '/development/bug-bounty/rules/',
          },
          // Distribute
          {
            from: '/docs/distribute/distributing-assets/',
            to: '/corporate-actions/distributions/',
          },
          {
            from: '/docs/distribute/distribution-process/',
            to: '/corporate-actions/distributions/',
          },
          // KYC
          {
            from: '/docs/kyc/know-your-customer/',
            to: '/identity/verification/',
          },
          // Originate
          { from: '/docs/originate/compliance/', to: '/compliance/' },
          { from: '/docs/originate/creating-asset/', to: '/core/assets/' },
          { from: '/docs/originate/origination-process/', to: '/core/assets/' },
          {
            from: '/docs/originate/secondary-keys/',
            to: '/identity/advanced/secondary-keys/',
          },
          // Quickstart
          { from: '/docs/quickstart/quickstart-polyx/', to: '/polyx/' },
          {
            from: '/docs/quickstart/up-in-ten-minutes/',
            to: '/getting-started/',
          },
          {
            from: '/docs/quickstart/verification-with-cdd/',
            to: '/identity/verification/',
          },
          {
            from: '/docs/quickstart/wallet/',
            to: '/getting-started/keys/polymesh-wallet/',
          },
          // Resources
          {
            from: '/docs/resources/github-repositories/',
            to: '/developer-resources/links/',
          },
          { from: '/docs/resources/glossary/', to: '/glossary/' },
          // Settlement
          {
            from: '/docs/settlement/settlement-agents/',
            to: '/settlement/mediators/',
          },
          { from: '/docs/settlement/settlement-process/', to: '/settlement/' },
          { from: '/docs/settlement/transferring-assets/', to: '/settlement/' },
          // Polymesh Docs (old)
          { from: '/polymesh-docs/', to: '/core-concepts/' },
          {
            from: '/polymesh-docs/network/architecture/',
            to: '/architecture/',
          },
          { from: '/polymesh-docs/network/consensus/', to: '/architecture/' },
          { from: '/polymesh-docs/network/fees/', to: '/polyx/fees/' },
          { from: '/polymesh-docs/network/governance/', to: '/governance/' },
          {
            from: '/polymesh-docs/network/ledger/',
            to: '/getting-started/keys/ledger/',
          },
          {
            from: '/polymesh-docs/network/permissioned-roles/',
            to: '/identity/roles/',
          },
          { from: '/polymesh-docs/network/polyx/', to: '/polyx/' },
          {
            from: '/polymesh-docs/network/running-a-node-docker/',
            to: '/node/docker/',
          },
          {
            from: '/polymesh-docs/network/tokenomics/',
            to: '/polyx/tokenomics/',
          },
          {
            from: '/polymesh-docs/polymesh-private/',
            to: '/polymesh-private/',
          },
          {
            from: '/polymesh-docs/polymesh-private/confidential-assets/',
            to: '/confidential-assets/overview/',
          },
          {
            from: '/polymesh-docs/polymesh-private/confidential-assets/diagrams/',
            to: '/confidential-assets/sequence-diagrams/',
          },
          {
            from: '/polymesh-docs/polymesh-private/confidential-assets/settlement/',
            to: '/confidential-assets/settlement/',
          },
          {
            from: '/polymesh-docs/polymesh-private/tooling/',
            to: '/polymesh-private/developer-tooling/',
          },
          {
            from: '/polymesh-docs/polymesh-private/tutorials/walkthrough-confidential-assets-rest-api/',
            to: '/tutorials/confidential-assets-walkthrough/',
          },
          { from: '/polymesh-docs/primitives/assets/', to: '/core/assets/' },
          {
            from: '/polymesh-docs/primitives/assets/fungible_assets/',
            to: '/core/assets/fungible/',
          },
          {
            from: '/polymesh-docs/primitives/assets/nfts/',
            to: '/core/assets/nft/',
          },
          {
            from: '/polymesh-docs/primitives/authorisations/',
            to: '/authorizations/',
          },
          {
            from: '/polymesh-docs/primitives/cdd/',
            to: '/identity/verification/',
          },
          { from: '/polymesh-docs/primitives/compliance/', to: '/compliance/' },
          {
            from: '/polymesh-docs/primitives/corporate-actions/',
            to: '/corporate-actions/',
          },
          { from: '/polymesh-docs/primitives/identity/', to: '/identity/' },
          {
            from: '/polymesh-docs/primitives/multisig/',
            to: '/identity/advanced/multisig/',
          },
          {
            from: '/polymesh-docs/primitives/portfolios-custody/',
            to: '/portfolios/custody/',
          },
          { from: '/polymesh-docs/primitives/settlement/', to: '/settlement/' },
          {
            from: '/polymesh-docs/primitives/settlement/settlement-diagrams/',
            to: '/core-concepts/settlement/settlement-diagrams/',
          },
          {
            from: '/polymesh-docs/primitives/smart-contracts/',
            to: '/development/smart-contracts/',
          },
        ],
      },
    ],
    ...(siteId ? ['docusaurus-plugin-matomo'] : []), // Add Matomo plugin only if siteId exists
  ],

  themeConfig: {
    ...(siteId
      ? {
          matomo: {
            matomoUrl: 'https://matomo.polymesh.network/',
            siteId: siteId,
            phpLoader: 'matomo.php',
            jsLoader: 'matomo.js',
          },
        }
      : {}),

    algolia: {
      // The application ID provided by Algolia
      appId: 'K25SRS7O1D',

      // Public API key: it is safe to commit it
      apiKey: '900353d5b5743c87de51a42fbcb266de',

      indexName: 'polymeshassociation',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    navbar: {
      title: '',
      logo: { width: '150px', alt: 'Polymesh Logo', src: 'img/logo.svg' },

      items: [
        // {
        //   type: 'doc',
        //   docId: 'documentation/docs-index',
        //   position: 'left',
        //   label: 'Developer Docs',
        // },
        // {
        //   to: 'polymesh-docs',
        //   position: 'left',
        //   label: 'Polymesh Docs',
        // },
        {
          to: 'sdk-docs',
          position: 'left',
          label: 'SDK API Docs',
        },
        {
          type: 'docsVersionDropdown',
          position: 'left',
          label: 'Dropdown',
          dropdownItemsBefore: [
            { type: 'html', value: '<div>SDK Docs Version</div>' },
          ],
          docsPluginId: 'sdk-docs',
          dropdownActiveClassDisabled: false,
        },
        {
          type: 'dropdown',
          position: 'left',
          label: 'Rust Docs',
          items: [
            {
              label: 'Polymesh Runtime',
              href: 'https://docs.polymesh.live/polymesh',
            },
            {
              label: 'Polymesh Private Runtime',
              href: 'https://private-docs.polymesh.live/polymesh_private',
            },
            {
              label: 'Polymesh Client API',
              href: 'https://docs.rs/polymesh-api/latest/polymesh_api/',
            },
            {
              label: 'ink! Contracts API',
              href: 'https://docs.rs/polymesh-ink/latest/polymesh_ink/',
            },
          ],
        },
        {
          href: 'https://github.com/PolymeshAssociation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        // {
        //   label: 'Developer Docs',
        //   to: '/docs/introduction',
        // },
        // {
        //   label: 'Network Docs',
        //   to: '/polymesh-docs#network',
        // },
        // {
        //   label: 'Polymesh Primitive Docs',
        //   to: '/polymesh-docs#primitives',
        // },
        //   ],
        // },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Stack Overflow',
            //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            // },
            {
              label: 'Discord',
              href: 'https://discord.gg/9TdzKbKgSU',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/PolymeshNetwork',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/polymeshnetwork/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/c/PolymeshNetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Polymesh Website',
              href: 'https://polymesh.network/',
            },
            {
              label: 'Blog',
              href: 'https://polymesh.network/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/PolymeshAssociation',
            },
            {
              label: 'Contact Us',
              href: 'https://polymesh.network/contact-us',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Polymesh Association, All Rights Reserved`,
      logo: {
        width: '150px',
        alt: 'Polymesh Logo',
        src: '/img/logo.svg',
      },
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: ['rust', 'json', 'bash', 'toml', 'ini'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
      options: {
        sequence: { showSequenceNumbers: true },
      },
    },
  } satisfies Preset.ThemeConfig,
  markdown: { mermaid: true },
  themes: ['@docusaurus/theme-mermaid'],
};
export default config;
