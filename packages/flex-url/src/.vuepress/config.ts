import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  dest: '../../dist/flex-url',

  base: '/flex-url/',
  
  lang: 'en-US',
  title: 'Flex URL',
  description: 'Zero-dependency utility for parsing and modifying URL params',

  plugins: [
    searchPlugin({
      maxSuggestions: 10
    }),
  ],

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',

    repo: 'open-southeners/flex-url',

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
      {
        text: 'Discord',
        link: 'https://discord.gg/tyMUxvMnvh'
      },
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
  }),
})
