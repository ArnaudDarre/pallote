// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your w config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pallote',
  tagline: 'Pallote is a handcrafted, simple and stylish CSS and React component library, built with passion and care',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pallote.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/styles/pallote-docs.scss',
        },
      }),
    ],
  ],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    'docusaurus-plugin-sass',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
        // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Pallote',
        logo: {
          alt: 'Logo for Pallote',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          // {
          //   to: 'blog',
          //   label: 'Blog',
          //   position: 'right'
          // },
          {
            href: 'https://github.com/sponsors/ArnaudDarre',
            label: 'Sponsor',
            position: 'right',
            className: 'navbar__item navbar__link nav-item-custom nav-item-custom-sponsor',
          },
          {
            href: 'https://react.pallote.com/',
            label: 'Storybook',
            position: 'right',
            className: 'navbar__item navbar__link nav-item-custom nav-item-custom-storybook',
          },
          {
            href: 'https://github.com/ArnaudDarre/pallote-docs',
            label: 'GitHub',
            position: 'right',
            className: 'navbar__item navbar__link nav-item-custom nav-item-custom-github',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting started',
                to: '/docs/category/getting-started',
              },
              {
                label: 'Variables',
                to: '/docs/category/variables',
              },
              {
                label: 'Utilities',
                to: '/docs/category/utilities',
              },
              {
                label: 'Components',
                to: '/docs/category/components',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: 'Documentation',
                href: 'https://github.com/ArnaudDarre/pallote-docs',
                className: 'footer__link-item nav-item-custom nav-item-custom-github',
              },
              {
                label: 'React',
                href: 'https://github.com/ArnaudDarre/pallote-react',
                className: 'footer__link-item nav-item-custom nav-item-custom-github',
              },
              {
                label: 'CSS',
                href: 'https://github.com/ArnaudDarre/pallote-css',
                className: 'footer__link-item nav-item-custom nav-item-custom-github',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Storybook',
                href: 'https://react.pallote.com/',
                className: 'footer__link-item nav-item-custom nav-item-custom-storybook',
              },
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arnaud Darré`,
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.vsDark,
      },
    }),
};

export default config;
