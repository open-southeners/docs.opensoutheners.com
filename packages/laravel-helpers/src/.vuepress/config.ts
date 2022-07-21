import { defineUserConfig } from 'vuepress'
import { configure, navbarSocialLinks } from '../../../../commonConfig'

export default defineUserConfig(configure('laravel-helpers', {
  config: {
    title: 'Laravel Helpers',
    description: 'Laravel extended helpers for PHP and framework features',
  },

  themeConfig: {
    navbar: [
      {
        text: 'Home',
        link: '/README.md',
      },
      {
        text: 'API',
        children: [
          '/guide/strings.md',
          '/guide/classes.md',
          '/guide/enums.md',
          '/guide/models.md',
        ],
      },

      ...navbarSocialLinks,
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Installation',
          link: '/guide/README.md'
        },
        '/guide/strings.md',
        '/guide/classes.md',
        '/guide/enums.md',
        '/guide/models.md',
      ],
    },
  },
}))
