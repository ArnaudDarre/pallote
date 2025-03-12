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
  favicon: '/favicon.ico',
  url: 'https://pallote.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
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
      image: 'images/og-image.jpg',
      navbar: {
        title: 'Pallote',
        logo: {
          alt: 'Logo for Pallote',
          src: 'logos/pallote-logo.svg',
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
            href: 'https://github.com/ArnaudDarre/pallote',
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
          // {
          //   title: 'Other links',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'Contact',
          //       to: '/contact',
          //     },
          //   ],
          // },
          {
            title: 'External resources',
            items: [
              {
                label: 'Storybook',
                href: 'https://react.pallote.com/',
                className: 'footer__link-item nav-item-custom nav-item-custom-storybook',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ArnaudDarre/pallote',
                className: 'footer__link-item nav-item-custom nav-item-custom-github',
              },
              {
                label: 'Figma',
                href: 'https://www.figma.com/design/bEeQ97jqZFWepD0x4oU5k7/Pallote?node-id=2416-5497&p=f&t=HNPTcIwHCvEtWVsQ-11',
                className: 'footer__link-item nav-item-custom nav-item-custom-figma',
              },
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
