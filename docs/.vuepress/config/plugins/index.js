import { searchPlugin } from "@vuepress/plugin-search";
import { pwaPlugin } from "@vuepress/plugin-pwa";
import { pwaPopupPlugin } from "@vuepress/plugin-pwa-popup";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { nprogressPlugin } from "@vuepress/plugin-nprogress";
import { containerPlugin } from "@vuepress/plugin-container";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { tocPlugin } from '@vuepress/plugin-toc'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { palettePlugin } from '@vuepress/plugin-palette'
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
 
module.exports = [ 
  searchPlugin({
    locales: {
      "/": {
        placeholder: "搜索",
      },
    },
    maxSuggestions: 10,
    // 允许搜索 Frontmatter 中的 `tags`
    //getExtraFields: (page) => page.frontmatter.tags ?? [],
  }),
  pwaPlugin(),
  pwaPopupPlugin({
    // 配置项
    skipWaiting: true,
    locales: {
      "/": {
        message: "发现新内容可用",
        buttonText: "刷新",
      },
    },
  }),
  backToTopPlugin(),
  mediumZoomPlugin({
    // 配置项
  }),
  nprogressPlugin(),

  containerPlugin({
    // 配置项
    type: "tip",
    locales: {
      "/": {
        defaultInfo: "提示",
      },
    },
  }),
  activeHeaderLinksPlugin({
    // 配置项
  }),
  tocPlugin({
    // 配置项
  }),
  googleAnalyticsPlugin({
    id: 'G-78HEE87XEQ',
    debug: true,
  }),
  palettePlugin({ preset: 'sass' }),
  mdEnhancePlugin({
    // 你的选项
    mark: true,
     // 启用自定义对齐
     align: true,
      // 启用 mermaid
      mermaid: true,
      // 添加选项卡支持
      tabs: true,
       // 启用任务列表
       tasklist: true,
  }),
]