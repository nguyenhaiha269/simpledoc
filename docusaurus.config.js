// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Electric source',
  tagline: 'Electrical!',
  favicon: 'img/favicon.ico',

  // Cấu hình URL chính xác để deploy trên GitHub Pages
  url: 'https://nguyenhaiha269.github.io',
  baseUrl: '/simpledoc/',

  // Cấu hình GitHub Pages để deploy đúng
  organizationName: 'nguyenhaiha269', // GitHub username của bạn
  projectName: 'simpledoc', // Tên repo của bạn
  deploymentBranch: 'gh-pages', // Nhánh được dùng để deploy

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false, // Tránh lỗi trang 404 khi truy cập đường dẫn

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve('docusaurus-lunr-search')],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/nguyenhaiha269/simpledoc/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/nguyenhaiha269/simpledoc/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'image_banner',
        content:
          '<a href="https://vnstocks.com/lp-khoa-hoc-python-chung-khoan"><img src="https://vnstocks.com/img/python_chung_khoan_banner.png" alt="Banner" class="announcement-bar-image" /></a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },

      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Awesome Docusaurus',
        logo: {
          alt: 'Awesome Docusaurus Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/docs/intro', position: 'left', label: 'Tutorial' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/docs/demo/', label: 'Thư viện mẫu', position: 'left' },
          { to: '/markdown-page', label: 'Trang Markdown', position: 'left' },
          {
            href: 'https://github.com/nguyenhaiha269/simpledoc',
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
            items: [{ label: 'Tutorial', to: '/docs/intro' }],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Blog', to: '/blog' },
              {
                label: 'GitHub',
                href: 'https://github.com/nguyenhaiha269/simpledoc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Awesome Docusaurus, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
