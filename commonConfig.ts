import type { UserConfig } from 'vuepress'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import deepmerge from 'deepmerge'

interface ConfigReplacements {
  themeConfig?: DefaultThemeOptions
  config?: UserConfig
}

export function configure(id: string, { themeConfig = {}, config = {} }: ConfigReplacements): UserConfig {
  themeConfig = deepmerge({
    repo: `open-southeners/${id}`,
    docsRepo: 'open-southeners/docs.opensoutheners.com',

    editLinkPattern: `:repo/edit/:branch/packages/${id}/src/:path`,
  }, themeConfig)

  return deepmerge({
    dest: `../../dist/${id}`,
    base: `/${id}/`,
    lang: 'en-US',

    plugins: [
      searchPlugin({
        maxSuggestions: 10
      }),
    ],

    theme: defaultTheme(themeConfig),
  }, config)
}
