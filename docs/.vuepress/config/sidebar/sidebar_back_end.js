
const csharpConf = require('./back_end/csharp')
const dotnetcoreConf = require('./back_end/dotnetcore')
const abpConf = require('./back_end/abp')
const abpmicroservicesConf = require('./back_end/abpmicroservices')

// sidebar_back_end 后端设计与分析
//SidebarItem
module.exports = [
  {
    text: 'C#语法特性',
    collapsible: true,
    activeMatch: "/",
    children:  csharpConf
  },
  {
    text: 'dotnet Core',
    collapsible: true,
    activeMatch: "/",
    children:  dotnetcoreConf
  },
  {
    text: 'ABP vNnext',
    collapsible: true,
    activeMatch: "/",
    children:  abpConf
  },
  {
    text: 'Apb微服务项目',
    activeMatch: "/",
    collapsible: true,
    children:  abpmicroservicesConf
  },
  {
    text: '分布式消息中间件',
    collapsible: true,
    children:  abpmicroservicesConf
  },
]
