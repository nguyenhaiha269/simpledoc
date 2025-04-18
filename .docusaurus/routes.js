import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/simpledoc/blog',
    component: ComponentCreator('/simpledoc/blog', 'b9e'),
    exact: true
  },
  {
    path: '/simpledoc/blog/archive',
    component: ComponentCreator('/simpledoc/blog/archive', '22e'),
    exact: true
  },
  {
    path: '/simpledoc/blog/authors',
    component: ComponentCreator('/simpledoc/blog/authors', '70c'),
    exact: true
  },
  {
    path: '/simpledoc/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/simpledoc/blog/authors/all-sebastien-lorber-articles', '611'),
    exact: true
  },
  {
    path: '/simpledoc/blog/authors/haiha',
    component: ComponentCreator('/simpledoc/blog/authors/haiha', '10b'),
    exact: true
  },
  {
    path: '/simpledoc/blog/Chu-de-tu-vung-tieng-Anh',
    component: ComponentCreator('/simpledoc/blog/Chu-de-tu-vung-tieng-Anh', 'b6c'),
    exact: true
  },
  {
    path: '/simpledoc/blog/first-blog-post',
    component: ComponentCreator('/simpledoc/blog/first-blog-post', '4bb'),
    exact: true
  },
  {
    path: '/simpledoc/blog/long-blog-post',
    component: ComponentCreator('/simpledoc/blog/long-blog-post', 'a9d'),
    exact: true
  },
  {
    path: '/simpledoc/blog/mdx-blog-post',
    component: ComponentCreator('/simpledoc/blog/mdx-blog-post', 'd64'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags',
    component: ComponentCreator('/simpledoc/blog/tags', '438'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/chinese',
    component: ComponentCreator('/simpledoc/blog/tags/chinese', 'fb4'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/deck',
    component: ComponentCreator('/simpledoc/blog/tags/deck', '93d'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/docusaurus',
    component: ComponentCreator('/simpledoc/blog/tags/docusaurus', '2c1'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/english',
    component: ComponentCreator('/simpledoc/blog/tags/english', '980'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/facebook',
    component: ComponentCreator('/simpledoc/blog/tags/facebook', 'ca1'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/hello',
    component: ComponentCreator('/simpledoc/blog/tags/hello', '477'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tags/hola',
    component: ComponentCreator('/simpledoc/blog/tags/hola', '300'),
    exact: true
  },
  {
    path: '/simpledoc/blog/tu-vung-va-Han-tu-HSK-1-6',
    component: ComponentCreator('/simpledoc/blog/tu-vung-va-Han-tu-HSK-1-6', 'e97'),
    exact: true
  },
  {
    path: '/simpledoc/blog/welcome',
    component: ComponentCreator('/simpledoc/blog/welcome', 'eca'),
    exact: true
  },
  {
    path: '/simpledoc/demo/about',
    component: ComponentCreator('/simpledoc/demo/about', '73c'),
    exact: true
  },
  {
    path: '/simpledoc/demo/image-gallery',
    component: ComponentCreator('/simpledoc/demo/image-gallery', '97c'),
    exact: true
  },
  {
    path: '/simpledoc/demo/text-reveal',
    component: ComponentCreator('/simpledoc/demo/text-reveal', '9c4'),
    exact: true
  },
  {
    path: '/simpledoc/markdown-page',
    component: ComponentCreator('/simpledoc/markdown-page', 'a0a'),
    exact: true
  },
  {
    path: '/simpledoc/docs',
    component: ComponentCreator('/simpledoc/docs', 'e3a'),
    routes: [
      {
        path: '/simpledoc/docs',
        component: ComponentCreator('/simpledoc/docs', '008'),
        routes: [
          {
            path: '/simpledoc/docs/tags',
            component: ComponentCreator('/simpledoc/docs/tags', '481'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/cad',
            component: ComponentCreator('/simpledoc/docs/tags/cad', '057'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/day-trung-tinh',
            component: ComponentCreator('/simpledoc/docs/tags/day-trung-tinh', '285'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/fa',
            component: ComponentCreator('/simpledoc/docs/tags/fa', '04d'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/hvac',
            component: ComponentCreator('/simpledoc/docs/tags/hvac', '3e0'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/khoang-cach-dau-bao-chay',
            component: ComponentCreator('/simpledoc/docs/tags/khoang-cach-dau-bao-chay', '46c'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/khoang-cach-den-mieng-gio',
            component: ComponentCreator('/simpledoc/docs/tags/khoang-cach-den-mieng-gio', 'ce6'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/nontag',
            component: ComponentCreator('/simpledoc/docs/tags/nontag', '8e8'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/nut-an-bao-chay',
            component: ComponentCreator('/simpledoc/docs/tags/nut-an-bao-chay', '7bf'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/table',
            component: ComponentCreator('/simpledoc/docs/tags/table', '0ec'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/tcvn-5738',
            component: ComponentCreator('/simpledoc/docs/tags/tcvn-5738', '7b3'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/tip',
            component: ComponentCreator('/simpledoc/docs/tags/tip', '6a6'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/tran-gia',
            component: ComponentCreator('/simpledoc/docs/tags/tran-gia', 'c07'),
            exact: true
          },
          {
            path: '/simpledoc/docs/tags/vrv',
            component: ComponentCreator('/simpledoc/docs/tags/vrv', 'c45'),
            exact: true
          },
          {
            path: '/simpledoc/docs',
            component: ComponentCreator('/simpledoc/docs', '31d'),
            routes: [
              {
                path: '/simpledoc/docs/250417',
                component: ComponentCreator('/simpledoc/docs/250417', 'f17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/access-control',
                component: ComponentCreator('/simpledoc/docs/access-control', 'a1a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/Copy giá trị tăng dần trong auto cad',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/Copy giá trị tăng dần trong auto cad', 'fdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/kiểm tra diện tích của một hình bất kỳ bằng lips cad',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/kiểm tra diện tích của một hình bất kỳ bằng lips cad', 'd31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/MTEX-CHE-DOI-TUONG-AUTO-CAD',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/MTEX-CHE-DOI-TUONG-AUTO-CAD', 'cd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/Vẽ máy biến áp bằng lips cad',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/Vẽ máy biến áp bằng lips cad', 'd0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/Vẽ ống Conduit trong auto cad bằng lips',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/Vẽ ống Conduit trong auto cad bằng lips', '7da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/Vẽ thang máng cáp trong Auto cad bằng lips',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/Vẽ thang máng cáp trong Auto cad bằng lips', '17a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/CAD TIP/WIPEOUT',
                component: ComponentCreator('/simpledoc/docs/CAD TIP/WIPEOUT', 'ad8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/category/elt',
                component: ComponentCreator('/simpledoc/docs/category/elt', '9d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/category/tutorial---extras',
                component: ComponentCreator('/simpledoc/docs/category/tutorial---extras', 'f0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/day-trung tính',
                component: ComponentCreator('/simpledoc/docs/day-trung tính', '953'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/decks/chinese',
                component: ComponentCreator('/simpledoc/docs/decks/chinese', '60c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/decks/english',
                component: ComponentCreator('/simpledoc/docs/decks/english', 'e2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/decks/french',
                component: ComponentCreator('/simpledoc/docs/decks/french', 'aba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/decks/japanese',
                component: ComponentCreator('/simpledoc/docs/decks/japanese', '0b9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/decks/medical',
                component: ComponentCreator('/simpledoc/docs/decks/medical', '606'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/decks/thcs',
                component: ComponentCreator('/simpledoc/docs/decks/thcs', 'd3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/decks/thpt',
                component: ComponentCreator('/simpledoc/docs/decks/thpt', '57e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/demo',
                component: ComponentCreator('/simpledoc/docs/demo', '675'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/congratulations',
                component: ComponentCreator('/simpledoc/docs/ELT/congratulations', 'c62'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/create-a-blog-post',
                component: ComponentCreator('/simpledoc/docs/ELT/create-a-blog-post', 'b89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/create-a-document',
                component: ComponentCreator('/simpledoc/docs/ELT/create-a-document', '024'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/create-a-page',
                component: ComponentCreator('/simpledoc/docs/ELT/create-a-page', '50a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/deploy-your-site',
                component: ComponentCreator('/simpledoc/docs/ELT/deploy-your-site', 'b46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/FA/bao-chay-phong-dieu-khien-chua-chay-tu-dong',
                component: ComponentCreator('/simpledoc/docs/ELT/FA/bao-chay-phong-dieu-khien-chua-chay-tu-dong', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/FA/bao-chay-tren-tran-gia',
                component: ComponentCreator('/simpledoc/docs/ELT/FA/bao-chay-tren-tran-gia', '3d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/FA/khoảng cách đầu báo cháy',
                component: ComponentCreator('/simpledoc/docs/ELT/FA/khoảng cách đầu báo cháy', 'ab6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/FA/khoang-cach-dau-bao-den-mieng-gio',
                component: ComponentCreator('/simpledoc/docs/ELT/FA/khoang-cach-dau-bao-den-mieng-gio', 'f9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/FA/NUT-AN-BAO-CHAY',
                component: ComponentCreator('/simpledoc/docs/ELT/FA/NUT-AN-BAO-CHAY', '335'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ELT/markdown-features',
                component: ComponentCreator('/simpledoc/docs/ELT/markdown-features', 'f5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ENGLISH/LINH/Book Gold A2',
                component: ComponentCreator('/simpledoc/docs/ENGLISH/LINH/Book Gold A2', 'e7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/ENGLISH/LINH/Unit_1',
                component: ComponentCreator('/simpledoc/docs/ENGLISH/LINH/Unit_1', 'e70'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/HVAC/Hệ điều hòa VRV',
                component: ComponentCreator('/simpledoc/docs/HVAC/Hệ điều hòa VRV', 'ab4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/HVAC/Untitled',
                component: ComponentCreator('/simpledoc/docs/HVAC/Untitled', '628'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/intro',
                component: ComponentCreator('/simpledoc/docs/intro', '072'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/Solar _ PV/Untitled',
                component: ComponentCreator('/simpledoc/docs/Solar _ PV/Untitled', 'f2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/TCVN7114-1-2008',
                component: ComponentCreator('/simpledoc/docs/TCVN7114-1-2008', 'f4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/simpledoc/docs/tutorial-extras/manage-docs-versions', 'cc2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/simpledoc/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/simpledoc/docs/tutorial-extras/translate-your-site', '22e'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/simpledoc/',
    component: ComponentCreator('/simpledoc/', '7a0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
