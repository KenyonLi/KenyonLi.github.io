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
        text: "前端设计与分析",
        link: "/technology/front_end/vue/index.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "后端设计与分析",
        link: "/technology/back_end/csharp/csharp01.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "数据库设计与分析",
        link: "/technology/database_design_analysis/mysql/01mysql_info.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "架构设计与分析",
        link: "/technology/architecture_design_analysis/enterprise_architect/ea001.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "部署与运维技术",
        link: "/technology/deployment_operations/docker/docker01.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "产品设计与分析",
        link: "/technology/product_design_analysis/axure_rp_10_001.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "代码管理",
        link: "/technology/code_management/git/index.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "项目管理",
        link: "/technology/project_management/project_management_0001.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      }
  ]},
  {
    text: "阅读",
    children: [
      {
        text: "羊皮卷",
        link: "/read/social_interaction/yan_pi_juen.md",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "狼道",
        link: "/read/social_interaction/lan_dao.md",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "墨菲定律",
        link: "/read/social_interaction/mo_fei_din_lu.md",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "什么反刍思维",
        link: "/read/social_interaction/read01.md",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "面向对象分析与设计",
        link: "/read/technology/object_oriented_analysis.md",
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