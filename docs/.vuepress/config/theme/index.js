import { defaultTheme } from "@vuepress/theme-default";
const navConf = require('../nav')
const sidebarConf = require('../sidebar')

module.exports = defaultTheme({
    sidebar: sidebarConf,
    //sidebar: 'auto',
    sidebarDepth:2,
    activeHeaderLinks: true,
    lastUpdated: false,
    lastUpdatedText: "最近更新时间",
    contributors: false,
    contributorsText: "贡献者",
    logo: "/images/home_logo_v.png",
    navbar: navConf,
    displayAllHeaders: true,
  })