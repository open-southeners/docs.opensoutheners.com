import { defineUserConfig } from 'vuepress'
import { configure } from '../../../../commonConfig'

export default defineUserConfig(configure('laravel-apiable', {
  config: {
    title: 'Laravel Apiable',
    description: 'Integrate JSON:API resources on your Laravel API',
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
          '/guide/requests.md',
          '/guide/responses.md',
          '/guide/testing.md',
        ],
      },
      {
        text: 'API',
        link: '/guide/api.md'
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
              text: 'Requests',
              link: '/guide/requests.md'
            },
            {
              text: 'Responses',
              link: '/guide/responses.md'
            },
          ]
        },
        {
          text: 'Digging deeper',
          children: [
            {
              text: 'Testing',
              link: '/guide/testing.md'
            },
            {
              text: 'Frontend',
              link: '/guide/frontend.md'
            },
            {
              text: 'Comparison',
              link: '/guide/comparison.md'
            },
          ]
        },
        {
          text: 'API',
          link: '/guide/api.md'
        },
        // {
        //   text: 'Upgrading',
        //   link: '/guide/upgrading.md'
        // },
      ],
    },
  },
}))
