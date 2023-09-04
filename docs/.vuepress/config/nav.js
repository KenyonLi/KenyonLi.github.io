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
        text: "ABP vNnext",
        link: "/technology/abp/abp001",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "RabbitMQ",
        link: "/technology/rabbitmq/rabbitmq01",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "Kafka",
        link: "/technology/kafka/kafka01",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "Nginx",
        link: "/technology/Nginx/Nginx001",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "ShardingSphere-Proxy",
        link: "/technology/sharding_sphere_proxy/sharding_sphere_proxy001.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "Redis",
        link: "/technology/redis/redis001.md",
        // 该元素将一直处于激活状态
        activeMatch: "/",
      },
      {
        text: "MongoDB",
        link: "/technology/mongodb/mongodb001.md",
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
        text: "git 工具",
        link: "/technology/git/",
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
        text: "css",
        link: "/technology/css/",
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
      {
        text: "狼道",
        link: "/read/lan_dao.md",
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "墨菲定律",
        link: "/read/mo_fei_din_lu.md",
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