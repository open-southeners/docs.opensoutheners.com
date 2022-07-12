import type { UserConfig } from 'vuepress'
import type { DefaultThemeOptions, NavbarConfig } from '@vuepress/theme-default'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import deepmerge from 'deepmerge'

interface ConfigReplacements {
  themeConfig?: DefaultThemeOptions
  config?: UserConfig
}

export const navbarSocialLinks: NavbarConfig = [
  {
    text: 'Discord',
    link: 'https://discord.gg/tyMUxvMnvh'
  },
  {
    text: 'Telegram',
    link: 'https://t.me/opensoutheners'
  },
];

export function configure(id: string, { themeConfig = {}, config = {} }: ConfigReplacements): UserConfig {
  themeConfig = deepmerge({
    repo: `open-southeners/${id}`,
    docsRepo: 'open-southeners/docs.opensoutheners.com',

    editLinkPattern: `:repo/edit/:branch/packages/${id}/src/:path`,
  } as DefaultThemeOptions, themeConfig)

  return deepmerge({
    dest: `../../dist/${id}`,
    base: `/${id}/`,
    lang: 'en-US',

    plugins: [
      searchPlugin({
        maxSuggestions: 10
      }),

      copyCodePlugin(),
    ],

    theme: defaultTheme(themeConfig),
  }, config)
}
