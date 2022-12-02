// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Intelligent Critical Care Center Online Documentation',
  tagline: 'We are idealists, problem-solvers, and explorers of digital health and AI',
  url: 'https://ic3.center.ufl.edu',
  baseUrl: '/',
  markdown: {
    mermaid: true,
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Prisma-pResearch', // Usually your GitHub org/user name.
  projectName: 'IC3-Documentation', // Usually your repo name.

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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          exclude:['summary.mdx']
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
          blogTitle: 'Innovative Ideas!',
					blogDescription: 'Innovative ideas and discovers',
					blogSidebarTitle: 'Latest posts',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],//,require.resolve('./src/css/blog-layout.scss')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  themes:[
    'live-codeblock'
  ],
  plugins:[
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-multi-codetabs',
    'docusaurus-plugin-sass',
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // options
        maxSearchResults: 8,
      }
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 1030, 
        min: 640,
        steps: 2,
        disableInDev: true
      }
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'resources',
        path: 'resources',
        routeBasePath: 'resources',
        breadcrumbs: true,
        sidebarPath: require.resolve('./sidebarResources.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/resources/intro',
            label: 'Resources',
            position: 'left',
            activeBaseRegex: `/resources/`,
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/Prisma-pResearch',
            className: 'header-github-link',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Projects',
                to: '/docs/projects',
              },
              {
                label: 'Datasets',
                to: '/docs/datasets',
              },
              {
                label: 'Tutorials',
                to: '/docs/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'UF Health',
                href: 'https://ufhealth.org/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/UF_IC3',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        logo: {
          alt: 'ic3 logo',
          src: '/img/Intelligent Critical Care Center.png',
          href: 'https://ic3.center.ufl.edu',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Intelligent Critical Care Center, Inc. Built with Docusaurus.`,
      },
      announcementBar: {
        id: 'announcementBar', // Increment on change
        content: `⭐️ The documen is in development`,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'python',
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
