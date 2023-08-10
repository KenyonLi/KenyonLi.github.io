module.exports = [
  // SidebarItem
  {
    text: '技术',
    collapsible: true,
    children: [
      // SidebarItem
      {
        text: 'dotnet core',
        collapsible: true,
        children: [
        {
          text: 'EF Core',
          link: '/technology/dotnetcore/index.md',
        },
        {
          text: 'Socket网络编程',
          link: '/technology/dotnetcore/socket001.md',
        },
        {
          text: 'ABP CLI',
          link: '/technology/dotnetcore/abp001.md',
        },
        {
          text: 'ABP vNnext  核心根基模块化',
          link: '/technology/dotnetcore/abp002.md',
        },
        {
          text: 'ABP核心项目-电商项目(一)-落地实战',
          link: '/technology/dotnetcore/abp003.md',
        },
        {
          text: 'ABP核心项目-电商项目落地实战(二)-领域层优化',
          link: '/technology/dotnetcore/abp004.md',
        },
        {
          text: 'ABP核心项目-电商项目落地实战(三)-仓储、服务层优化',
          link: '/technology/dotnetcore/abp005.md',
        },
        {
          text: 'ABP核心项目-电商项目落地实战(四)-应用、web层优化、原理',
          link: '/technology/dotnetcore/abp006.md',
        },
        {
          text: 'ABP核心项目-电商项目(五)-动态c#API客户端模块',
          link: '/technology/dotnetcore/abp007.md',
        },
        {
          text: 'ABP核心项目-电商项目(六)-用户组件-用户身份模块',
          link: '/technology/dotnetcore/abp008.md',
        },
        {
          text: 'ABP核心项目-电商项目(七)-用户组件-账户模块',
          link: '/technology/dotnetcore/abp009.md',
        },
        {
          text: 'ABP核心项目-电商项目(八)-用户组件-权限模块',
          link: '/technology/dotnetcore/abp010.md',
        },
        {
          text: 'ABP核心项目-电商项目(九)-用户组件-多租户模块',
          link: '/technology/dotnetcore/abp011.md',
        },
        {
          text: 'ABP核心项目-电商项目(十)-疑问记录',
          link: '/technology/dotnetcore/abp012.md',
        },
        {
          text: 'ABP核心项目-电商项目(十一)-设置模块',
          link: '/technology/dotnetcore/abp013.md',
        },
        {
          text: 'ABP核心项目-电商项目(十二)-特征模块',
          link: '/technology/dotnetcore/abp014.md',
        },
        {
          text: 'ABP核心项目-电商项目(十三)-异常/认证/本地化模块',
          link: '/technology/dotnetcore/abp015.md',
        },
        {
          text: 'ABP核心项目-电商项目(十四)-虚拟文件系统',
          link: '/technology/dotnetcore/abp016.md',
        },
        {
          text: '消息中间件RabbitMQ 简介（一）',
          link: '/technology/dotnetcore/rabbitmq01.md',
        },
        {
          text: '分布式中间件-RabbitMQ（二）',
          link: '/technology/dotnetcore/rabbitmq02.md',
        },
        {
          text: '分布式中间件-消息中间件Kafka介绍（一）',
          link: '/technology/dotnetcore/kafka01.md',
        }
       ]
     },
      {
        text: 'c/c++',
        //link: '/technology/cppreference/',
        collapsible: true,
        children: [{
          text: 'c/c++',
          link: '/technology/cppreference/index.md',
        }],
      },
      {
        text: "linux",
        //link: "/technology/linux/",
        collapsible: true,
        children: [{
          text: 'linux基础',
          link: '/technology/linux/index.md',
        },
        {
          text: 'Ubuntu20.4 搭建vpn服务器',
          link: '/technology/linux/vpn.md',
        }
      ],
      },
      {
        text: 'Mysql',
        collapsible: true,
        children: [
          {
            text: 'Mysql 基础',
            link: '/technology/mysql/index.md',
          },
          {
            text: 'Mysql 架构体系详解',
            link: '/technology/mysql/01mysql_info.md',
          },
          {
            text: 'InnoDB架构详解、事务介绍',
            link: '/technology/mysql/02mysql_info.md',
          },
          {
            text: 'InnoDB事务',
            link: '/technology/mysql/03mysql_innoDB.md',
          },
          {
            text: 'InnoDB索引',
            link: '/technology/mysql/04mysql_info.md',
          },
          {
            text: 'Mysql InnoDB锁',
            link: '/technology/mysql/05InnoDB_lock.md',
          },
          {
            text: 'Mysql 性能优化',
            link: '/technology/mysql/06mysql_info.md',
          },
          {
            text: 'MySQL分库分表',
            link: '/technology/mysql/07mysql_info.md',
          },
          {
            text: 'MySQL集群篇',
            link: '/technology/mysql/08mysql_info.md',
          },
        ],
      },
      {
        text: "javascript",
        //link: "/technology/javascript/",
        collapsible: true,
        children: [{
          text: 'javascript',
          link: '/technology/javascript/index.html',
        }],
      },
      {
        text: "vue ",
        link: "/technology/vue/",
        collapsible: true,
        children: [{
          text: 'vue 基础',
          link: '/technology/vue/index.html',
        }],
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "markdown",
        //link: "/technology/markdown/",
        collapsible: true,
        children: [{
          text: 'markdown 基础 ',
          link: '/technology/markdown/index.html',
        }],
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      }
    ],
  },
]