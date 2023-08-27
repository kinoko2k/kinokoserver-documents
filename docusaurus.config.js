// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} 1*/
const config = {
  title: 'KinokoServer Wiki',
  tagline: 'Minecraft Java & BE Server - 楽しく雑談できるサバイバルサーバー！',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://kinokoserver.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documents/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KinokoNetWork', // Usually your GitHub org/user name.
  projectName: 'KinokoServer', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/KinokoServer/documents/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/KinokoServer/documents/edit/main/',
        },
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
      image: 'img/2022-10-22_15.01.43.jpg',
      navbar: {
        title: 'KinokoServer',
        logo: {
          alt: 'KinokoServer Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '初めての方へ',
          },
          {
            type: 'doc',
            docId: 'admin/index_admin',
            position: 'left',
            label: '他鯖の管理者向け',
          },
          {
            href: 'https://discord.gg/VdzXx892Zq',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://github.com/KinokoServer/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '記事',
            items: [
              {
                label: '初めての方へ',
                to: '/docs/intro',
              },
              {
                label: '運営向け記事',
                to: '/docs/admin/index_admin'
              }
            ],
          },
          {
            title: 'コミュニティ',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/Qs6q3mhz2S',
              },
              {
                label: 'mcjp',
                href: 'https://minecraft.jp/servers/kinoko.ddns.net',
              },
              {
                label: 'monocraft.net',
                href: 'https://monocraft.net/servers/FdUeE0ngde7PKAAI98GJ',
              },
            ],
          },
          {
            title: 'その他',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/KinokoServer/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KinokoServer, Group. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
