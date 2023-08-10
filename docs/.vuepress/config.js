import { defineUserConfig } from "vuepress";
const themeConfig = require('./config/theme/index')
const pluginsConf = require('./config/plugins/index')
export default defineUserConfig({
  //base:'/kenyonli.blog.github.io/',
  //dest: './dist',
  //lang: 'zh-CN',
  port: "8080",
  title: "Kenyon Li 随笔 ",
  description: "欢迎您，来到 Kenyon Li 世界！",
  pagePatterns: ["**/*.md", "!.vuepress", "!node_modules"],
  head: [
    ["link", { rel: "icon", href: "/images/logo_v.png" }],
    ["meta", { name: "keywords", content: "kenyonli" }],
  ],
  markdown: {
    anchor: true,
    links: true,
  },
  theme: themeConfig,
  plugins:pluginsConf,
});
