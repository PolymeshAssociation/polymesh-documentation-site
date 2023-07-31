// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');
// const draculaTheme = require('prism-react-renderer/themes/dracula');
// const duotoneDarkTheme = require('prism-react-renderer/themes/duotoneDark');
// const duotoneLightTheme = require('prism-react-renderer/themes/duotoneLight');
// const githubTheme = require('prism-react-renderer/themes/github');
// const nightOwlLightTheme = require('prism-react-renderer/themes/nightOwlLight');
const nightOwlTheme = require('prism-react-renderer/themes/nightOwl');
// const oceanicNextTheme = require('prism-react-renderer/themes/oceanicNext');
// const okaidiaTheme = require('prism-react-renderer/themes/okaidia');
// const shadesOfPurpleTheme = require('prism-react-renderer/themes/shadesOfPurple');
// const ultraminTheme = require('prism-react-renderer/themes/ultramin');
const vsDarkTheme = require('prism-react-renderer/themes/vsDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Polymesh Documentation Portal',
  tagline: 'The perfect place to discover the open source Polymesh universe',
  url: 'https://developers.polymesh.network',
  // url: 'https://docs.polymesh.network',
  // url: 'https://polymeshassociation.github.io',
  baseUrl: '/',
  // baseUrl: '/polymesh-documentation-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/polymesh-symbol.svg',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          // routeBasePath: '/docs', // Defaults to "docs"
          // sidebarPath: require.resolve('./sidebars.js'), // Defaults to sidebars.js

          editUrl:
            'https://github.com/PolymeshAssociation/polymesh-documentation-site/edit/develop',
        },
        blog: false, // disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'polymesh-docs',
        path: 'polymesh-docs',
        routeBasePath: '/polymesh-docs',
        // sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk-docs',
        path: 'sdk-docs',
        routeBasePath: '/sdk-docs',
        includeCurrentVersion: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Developer Docs',
          },
          {
            to: 'polymesh-docs',
            position: 'left',
            label: 'Polymesh Docs',
          },
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
            label: 'Polymesh Rust Docs',
            href: 'https://docs.polymesh.live/polymesh/index.html',
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
          {
            title: 'Docs',
            items: [
              {
                label: 'Developer Docs',
                to: '/docs/introduction',
              },
              {
                label: 'Network Docs',
                to: '/polymesh-docs#network',
              },
              {
                label: 'Polymesh Primitive Docs',
                to: '/polymesh-docs#primitives',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              {
                label: 'Discord',
                href: 'https://discord.gg/ud2deWAnyt',
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
        copyright: `Copyright © ${new Date().getFullYear()} Polymesh Association, All Right Reserved`,
        logo: {
          width: '150px',
          alt: 'Polymesh Logo',
          src: '/img/logo.svg',
        },
      },
      prism: {
        theme: vsDarkTheme,
        darkTheme: nightOwlTheme,
      },
    }),
};

module.exports = config;
