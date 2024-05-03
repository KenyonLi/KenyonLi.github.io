//C# 语法特性
const csharpConf = require('./back_end/csharp')
//C/C++ 语法
const csharpConf = require('./back_end/cppreferenceConf')

//dotnet core
const dotnetcoreConf = require('./back_end/dotnetcore')

//ABP vNnext 
const abpConf = require('./back_end/abp')

//Apb微服务项目
const abpmicroservicesConf = require('./back_end/abpmicroservices')

//分布式中间件-RabbitMQ
const rabbitmqConf = require('./back_end/rabbitmq')

//分布式中间件-Kafka
const kafkaConf = require('./back_end/kafka')

//分布式中间件-ElasticSearch
const elasticsearchConf = require('./back_end/elasticsearch')

//schedule_master 分布式任务调度中间件
const sharding_sphere_proxyConf = require('./back_end/sharding_sphere_proxy')

//分布式中间件-ScheduleMaster
const schedule_masterConf = require('./back_end/schedule_master')

//分布式中间件-minio
const schedule_masterConf = require('./back_end/minio')

//性能调优
const tuningConf = require('./back_end/tuning')

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
    text: 'C/C++',
    collapsible: true,
    activeMatch: "/",
    children:  cppreferenceConf
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
    text: '分布式消息中间件-RabbitMQ',
    collapsible: true,
    children:  rabbitmqConf
  },
  {
    text: '分布式消息中间件-Kafka',
    collapsible: true,
    children:  kafkaConf
  },
  {
    text: '分布式中间件-ShardingSphere-Proxy',
    collapsible: true,
    children:  sharding_sphere_proxyConf
  },
  {
    text: '分布式中间件-ElasticSearch',
    collapsible: true,
    children:  elasticsearchConf
  },
  {
    text: '分布式中间件-Minio',
    collapsible: true,
    children:  minioConf
  },
  {
    text: '分布式任务调度中间件-ScheduleMaster',
    collapsible: true,
    children:  schedule_masterConf
  },
  {
    text: '性能调优',
    collapsible: true,
    children:  tuningConf
  },
]
