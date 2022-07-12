import { defineUserConfig } from 'vuepress'
import { configure, navbarSocialLinks } from '../../../../commonConfig'

export default defineUserConfig(configure('flex-url', {
  config: {
    title: 'Flex URL',
    description: 'Zero-dependency utility for parsing and modifying URL params',
  },

  themeConfig: {
    navbar: [
      {
        text: 'Home',
        link: '/README.md',
      },
      {
        text: 'Guide',
        children: [
          {
            text: 'Installation',
            link: '/guide/README.md'
          },
          '/guide/usage.md',
        ],
      },
      
      ...navbarSocialLinks,
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          children: [
            {
              text: 'Installation',
              link: '/guide/README.md'
            },
            {
              text: 'Usage',
              link: '/guide/usage.md'
            },
          ]
        },
        // {
        //   text: 'Advanced topics',
        //   children: [
        //     {
        //       text: 'TypeScript',
        //       link: '/guide/typescript.md'
        //     },
        //   ]
        // },
        // {
        //   text: 'Upgrading',
        //   link: '/guide/upgrading.md'
        // },
      ],
    },
  },
}))
