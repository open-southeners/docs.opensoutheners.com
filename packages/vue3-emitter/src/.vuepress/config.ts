import { defineUserConfig } from 'vuepress'
import { configure, navbarSocialLinks } from '../../../../commonConfig';

export default defineUserConfig(configure('vue3-emitter', {
  config: {
    title: 'Vue 3 Emitter',
    description: 'A very simple mitt wrapper for Vue 3',
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
          '/guide/components.md',
          '/guide/typescript.md',
          '/guide/upgrading.md',
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
            {
              text: 'Components',
              link: '/guide/components.md'
            },
          ]
        },
        {
          text: 'Advanced topics',
          children: [
            {
              text: 'TypeScript',
              link: '/guide/typescript.md'
            },
          ]
        },
        {
          text: 'Upgrading',
          link: '/guide/upgrading.md'
        },
      ],
    },
  },
}));
