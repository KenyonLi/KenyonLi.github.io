module.exports = [ 
  // NavbarItem
  {
    text: "首页",
    link: "/",
  },
  // NavbarGroup
  {
    text: "生活",
    collapsible: true,
    children: [
      {
        text: "生活之旅",
        link: "/life/index.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
    ],
  },
  {
    text: "技术",
    collapsible: true,
    link: '/technology/',
    children: [
      {
        text: "dotnet core",
        link: "/technology/dotnetcore/",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "c/c++",
        link: "/technology/cppreference/",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "linux",
        link: "/technology/linux/",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "mysql",
        link: "/technology/mysql/01mysql_info",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "javascript",
        link: "/technology/javascript/",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "vue",
        link: "/technology/vue/",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "markdown",
        link: "/technology/markdown/",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
    ],
  },
  {
    text: "阅读",
    children: [
      {
        text: "羊皮卷",
        link: "/read/yan_pi_juen.md",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
    ],
  },
  {
    text: "收藏",
    children: [
      {
        text: "浏览器书签",
        link: "/collect/index.md",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
    ],
  },
]