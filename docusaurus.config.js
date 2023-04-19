// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ODF FERNS',
  tagline: 'Get the answers to any of your FERNS questions here.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ferns.tofu.skin',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ODF Ferns',
        logo: {
          alt: 'ODF Logo',
          src: 'img/ferns-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Help documents',
          },
          {
            label: 'ODF Website',
            href: 'https://www.oregon.gov/odf/pages/index.aspx',
          },
          {
            label: 'FERNS System',
            href: 'https://ferns.odf.oregon.gov/E-Notification/',
          },
          {
            href: 'https://github.com/brennanbutler01/ferns-help',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Read Help',
                to: '/category/help-resources',
              },
              {label: 'System Requirements', to: '/category/system-requirements'},
              {label: 'Subscription', to: '/category/subscription'}
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'ODF Website',
                href: 'https://www.oregon.gov/odf/pages/index.aspx',
              },
              {
                label: 'FERNS System',
                href: 'https://ferns.odf.oregon.gov/E-Notification/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ORDeptForestry',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/brennanbutler01/ferns-help',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Oregon Department of Forestry. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {// The application ID provided by Algolia
        appId: 'Q47RQXP0LQ',

        // Public API key: it is safe to commit it
        apiKey: 'b5949d8584294474a4071594199e6ba3',

        indexName: 'ferns-tofu',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      }
    }),
};

module.exports = config;
