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
            text: 'dotnet 安装 CLI/SDK',
            link: '/technology/dotnetcore/dotnet01.md',
          },
         {
          text: 'EFCore数据库迁移命令',
          link: '/technology/dotnetcore/index.md',
         },
         {
          text: 'Socket网络编程',
          link: '/technology/dotnetcore/socket001.md',
         },
         {
          text: 'Net 后台代码模拟浏览器请求 Get、Post、Put的扩展方法',
          link: '/technology/dotnetcore/dotnet02.md',
         }
        ]
      },
      {
        text: 'ABP vNnext',
        collapsible: true,
        children: [
        {
          text: 'ABP CLI',
          link: '/technology/abp/abp001.md',
        },
        {
          text: 'ABP vNnext  核心根基模块化',
          link: '/technology/abp/abp002.md',
        },
        {
          text: 'ABP核心项目-电商项目(一)-落地实战',
          link: '/technology/abp/abp003.md',
        },
        {
          text: 'ABP核心项目-电商项目落地实战(二)-领域层优化',
          link: '/technology/abp/abp004.md',
        },
        {
          text: 'ABP核心项目-电商项目落地实战(三)-仓储、服务层优化',
          link: '/technology/abp/abp005.md',
        },
        {
          text: 'ABP核心项目-电商项目落地实战(四)-应用、web层优化、原理',
          link: '/technology/abp/abp006.md',
        },
        {
          text: 'ABP核心项目-电商项目(五)-动态c#API客户端模块',
          link: '/technology/abp/abp007.md',
        },
        {
          text: 'ABP核心项目-电商项目(六)-用户组件-用户身份模块',
          link: '/technology/abp/abp008.md',
        },
        {
          text: 'ABP核心项目-电商项目(七)-用户组件-账户模块',
          link: '/technology/abp/abp009.md',
        },
        {
          text: 'ABP核心项目-电商项目(八)-用户组件-权限模块',
          link: '/technology/abp/abp010.md',
        },
        {
          text: 'ABP核心项目-电商项目(九)-用户组件-多租户模块',
          link: '/technology/abp/abp011.md',
        },
        {
          text: 'ABP核心项目-电商项目(十)-疑问记录',
          link: '/technology/abp/abp012.md',
        },
        {
          text: 'ABP核心项目-电商项目(十一)-设置模块',
          link: '/technology/abp/abp013.md',
        },
        {
          text: 'ABP核心项目-电商项目(十二)-特征模块',
          link: '/technology/abp/abp014.md',
        },
        {
          text: 'ABP核心项目-电商项目(十三)-异常/认证/本地化模块',
          link: '/technology/abp/abp015.md',
        },
        {
          text: 'ABP核心项目-电商项目(十四)-虚拟文件系统',
          link: '/technology/abp/abp016.md',
        },
       ]
     },
     {
      text: "分布式消息中间件",
      //link: "/technology/linux/",
      collapsible: true,
      children: [ 
        {
          text: '分布式中间件-RabbitMQ简介（一）',
          link: '/technology/rabbitmq/rabbitmq01.md',
        },
        {
          text: '分布式中间件-RabbitMQ（二）',
          link: '/technology/rabbitmq/rabbitmq02.md',
        },
        {
          text: '分布式中间件-Kafka介绍（一）',
          link: '/technology/kafka/kafka01.md',
        },
        {
          text: '分布式中间件-Nginx',
          link: '/technology/nginx/nginx001.md',
        },
        {
          text: '分布式中间件-ShardingSphere-Proxy',
          link: "/technology/sharding_sphere_proxy/sharding_sphere_proxy001.md",
        },
        {
          text: '分布式中间件-Redis',
          link: "/technology/redis/redis001.md",
        }
        ,
        {
          text: '分布式中间件-MongoDB',
          link: "/technology/mongodb/mongodb001.md",
        },
        {
          text: "分布式中间件-ElasticSearch",
          link: "/technology/elasticsearch/elasticsearch001.md",
        },
        {
          text: "分布式中间件-ElasticSearch-分词器",
          link: "/technology/elasticsearch/elasticsearch002.md",
        },
        {
          text: "分布式中间件-Minio",
          link: "/technology/minio/minio001.md",
        },
        {
          text: "分布式任务调度中间件-ScheduleMaster",
          link: "/technology/schedule_master/schedule_master001.md",
        },
      ]
    },
    {
      text:'Apb微服务项目',
      collapsible:true,
      children:[
        {
        text:'微服务电商项目落地',
        link:'/technology/abpmicroservices/abpmicroservices0001.md'
        },
        {
          text:'微服务通信',
          link:'/technology/abpmicroservices/abpmicroservices0002.md'
         },
         {
          text:'微服务网关-Ocelot',
          link:'/technology/abpmicroservices/abpmicroservices0003.md'
         } ,
         {
          text:'微服务注册中心-Consul',
          link:'/technology/abpmicroservices/abpmicroservices0004.md'
         },
         {
          text:'微服务注配置中心-Nacos',
          link:'/technology/abpmicroservices/abpmicroservices0005.md'
         },
         {
          text:'微服务事件总线-CAP',
          link:'/technology/abpmicroservices/abpmicroservices0006.md'
         },
         {
          text:'微服务链路监控-skywalking',
          link:'/technology/abpmicroservices/abpmicroservices0007.md'
         }, 
         {
          text:'微服务日志中心',
          link:'/technology/abpmicroservices/abpmicroservices0008.md'
         },
         {
          text:'微服务分布式事务',
          link:'/technology/abpmicroservices/abpmicroservices0009.md'
         },  
         {
          text:'微服务分布式权限',
          link:'/technology/abpmicroservices/abpmicroservices0010.md'
         },
         {
          text:'微服务分布式文件系统、分布式缓存、分布式锁',
          link:'/technology/abpmicroservices/abpmicroservices0011.md'
         },
         {
          text:'微服务大数据库MongoDB、任务调度Hangfire',
          link:'/technology/abpmicroservices/abpmicroservices0012.md'
         }
        ]},
        {
          text: 'Docker',
          collapsible: true,
          children: [{
            text: '微服务部署Docker',
            link: '/technology/docker/docker01.md',
          },
          {
            text: 'Docker集群',
            link: '/technology/docker/docker02.md',
          },
          {
            text: '微服务部署-k8s(一)',
            link: '/technology/docker/docker03.md',
          },
          {
            text: '微服务部署-k8s(二)-应用',
            link: '/technology/docker/docker04.md',
          }
          ],
      },
      {
        text: 'Jenkins',
        //link: '/technology/cppreference/',
        collapsible: true,
        children: [{
          text: 'Jenkins 安装部署',
          link: '/technology/jenkins/jenkins001.md',
        }],
      },
      {
        text: 'Frp',
        //link: '/technology/cppreference/',
        collapsible: true,
        children: [{
          text: 'Frp网络穿透工具',
          link: '/technology/frp/frp001.md',
        }],
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
          text: 'linux（centos9）root密码忘记了，怎么重置或修改密码',
          link: '/technology/linux/centos9_001.md',
        },
        {
          text: 'Ubuntu20.4 搭建vpn服务器',
          link: '/technology/linux/vpn01.md',
        },
        {
          text: 'Linux实现socks终端代理、全局代理',
          link: '/technology/linux/vpn02.md',
        },
        {
          text: '搭建 vpn 使用 x-ui 部署配置',
          link: '/technology/linux/vpn03.md',
        },
        {
          text: 'yum及yum-config-manager命令详解',
          link: '/technology/linux/linux001.md',
        },
        {
          text: 'dnf命令详解',
          link: '/technology/linux/linux002.md',
        },
        {
          text: 'linux 运行 AppImage 应用',
          link: '/technology/linux/linux003.md',
        }
       ]
      },
      {
        text: 'git工具',
        //link: '/technology/cppreference/',
        collapsible: true,
        children: [{
          text: 'git 常用命令',
          link: '/technology/git/index.md',
        }],
      },
      {
        text: 'Mysql',
        collapsible: true,
        children: [
          {
            text: 'Mysql8.0 Ubuntu 20.4 安装',
            link: '/technology/mysql/index.md',
          },
          {
            text: 'Mysql8.0 CentOS Stream 9 安装',
            link: '/technology/mysql/09mysql_centos.md',
          },
          {
            text: 'Mysql 8.0 主从部署-读写分离',
            link: '/technology/mysql/10mysql_write_read.md',
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
        text: "css ",
        collapsible: true,
        children: [{
          text: 'css 基础',
          link: '/technology/css/index.html',
        }],
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "EA建模工具",
        //link: "/technology/markdown/",
        collapsible: true,
        children: [{
          text: 'EA 工具 UML、类图、顺序图 ',
          link: '/technology/enterprise_architect/ea001.md',
        }],
        // 该元素在当前路由路径是 /foo/ 开头时激活
        // 支持正则表达式
        activeMatch: "/",
      },
      {
        text: "设计模式",
        //link: "/technology/markdown/",
        collapsible: true,
        children: [{
          text: '工厂、抽象工厂、策略模式',
          link: '/technology/design/design001.md',
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