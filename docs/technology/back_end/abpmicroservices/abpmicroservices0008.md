---
title: "微服务日志中心"
date: 2023-10-08
tags:
  - "微服务日志中心"
  - "abp"
  - "dotnet"
  - "skywalking"
categories:
  - "技术"
---

## 目录

[[toc]]

## 微服务日志中心

### 什么是日志中心

举例说明：在做的各位有没有在读小学的，都是读过小学的，我们读小学的时候，经常做一个事情，老师要求我们写日记，我们感觉非常烦，那么，日记记录的是什么，是我们每一天做的事情。专业表述，日记是不是用来记录每天小活动状态，  
同理，在软件中，为了记录软件的运行状态，那么记录这种状态的叫做日志  
日记是用来记录人的状态，那么日志是用来记录软件系统的状态。  
日记组成：时间，地点，做了什么，（条件和结果）  
日志组成：时间，类，方法信息（输入参数和输出结果）

**什么是日志中心**
就是统一记录多个系统运行日志，就叫做日志中心。

### 为什么要使用日志中心

微服务系统中使用日志中心  
1、微服务系统运行正常，一切正常的情况下，不需要使用日志中心。  
2、微服务系统运行异常  
2.1 微服务系统内部出现了异常，无法进行排查
2.2 微服务系统调用过程出现了异常，定位日志问题非常麻烦，一会在这个地方用，一会在那个地方，不是非常好维护，在这两种情况下，所以就出现了日志中心，来统一排查问题。

### 日志中心框架

ELK:ELK 是三个开源软件的缩写，分表表示：Elasticsearch,Logstash,Kibana

**为什么选择 ELK**  
比较不同的日志框架  
对于目前 ELK 成为了微服务系统和分布式系统的主流，在市面上还没有其他的日志中心可选。  
这个时候需要和其他对比，只有对比才有效果，就是他的优势在哪里，其他日志中心框架的缺陷在哪里

## 微服务中如何使用 ELK

**ELK 组成**
Logstash:日志收集，处理器  
Elasticserach:日志存储器  
Kibana:日志可视化分析器（webui）  
在这三个组里面，Logstash 是核心地位

**Logstash 组成**  
 客户端：收集日志=====客户端有哪些 NLog,Log4  
 服务端：接受客户端收集来的日志进行进行处理。

**微服务集成 ELK 集成架构图**

![Alt text](/images/abpmicroservices/micro008/abpmicroservices0008_0001image.png)

![Alt text](/images/abpmicroservices/micro008/abpmicroservices0008_0002image.png)

## 微服务中使用 ELK

条件  
1、微服务系统  
2、Elasticsearch 7.10.1  
3、Logstash 7.10.1  
4、Kibana 7.10.1  
5、NLog  
步骤  
1、微服务系统操作  
1.1 微服务系统已经准备好  
2、Elasticsearch 7.10.1 操作  
 2.1 Elasticsearch 下载  
 ​ 下载地址：https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-10-1  
​ 文档地址：https://www.elastic.co/guide/en/elasticsearch/reference/6.6/index.html

2.2 Elasticsearch 7.10.1 下载  
​ 解压后，在 elasticsearch-7.10.1/config 目录下，在 elasticsearch.yml 内配置

```bash
network.host: 0.0.0.0
增加
 // thread_pool.bulk.queue_size: 1000    6.0版本的配置，7.0已经去掉   参考配置：  https://discuss.elastic.co/t/unknown-setting-thread-pool-bulk-queue-size/180120

```

​2.3 Elasticsearch 7.10.1 启动

解压后，在 elasticsearch-7.10.1/bin 目录下，双击启动

```bash
	elasticsearch.bat
```

2.4 Elasticsearch 7.10.1 访问

​ 浏览器输入：http://localhost:9200,显示结果，启动成功

3、Logstash 7.10.1 操作

​ 3.1 Logstash 7.10.1 下载

​ 下载地址：https://www.elastic.co/cn/downloads/past-releases/logstash-7-10-1

​ 文档地址：https://www.elastic.co/guide/en/logstash/7.10/index.html

​ 3.2 Logstash 7.10.1 配置

​ 解压后，在 logstash-7.10.1/config 目录下，创建 logstash.conf 文件，在其中添加配置信息

```yml
input {
    tcp {
        port => "9900"
        type => "microservice-log"
    }
}
output {
  elasticsearch {
        hosts => ["http://localhost:9200"]
        index => "microservice-%{+YYYY.MM.dd}"
        document_id => "%{@timestamp}"
		#user => "elastic"
		#password => "changeme"
  }
}

```

​ 3.3 Logstash 7.10.1 启动 ，进入 bin 目录

```bash
logstash -f  ../config/logstash.conf
```

​ 3.4 Logstash 7.10.1 访问

​ 浏览器输入：http://localhost:9600,显示结果，启动成功

4、Kibana 7.10.1 操作

​ 4.1 Kibana 7.10.1 下载

​ 下载地址：https://www.elastic.co/cn/downloads/past-releases/kibana-6-6-0

​ 文档地址：https://www.elastic.co/guide/en/kibana/6.6/index.html

​ 4.2 Kibana 7.10.1 配置

​ 解压后，在 kibana-7.10.1-windows-x86_64/config 目录下，打开 kibana.yml 文件，在其中添加配置信息

```bash
server.port: 5601
server.host: "localhost"
elasticsearch.hosts: ["http://localhost:9200"]
```

​ 3.3 Kibana 7.10.1 启动

在 kibana-7.10.1-windows-x86_64/bin 目录下,双击

```bash
kibana.bat
```

​3.4 Logstash 7.10.1 访问

​ 浏览器输入：http://localhost:5601,显示结果，启动成功

5、微服务系统操作

​ 5.1 NLog 操作

​ 5.1.1 NLog 下载

​ 在 LKN.MicroService.Core 微服务使用 Nuegt 安装 NLog.Web.AspNetCore

```bash
Nuget NLog.Web.AspNetCore
```

​5.1.2 NLog 配置

在 LKN.MicroService.AggregateService 微服务中创建 nlog.config 文件，内容为

```xml
<?xml version="1.0" encoding="utf-8" ?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     autoReload="true"
       internalLogLevel="Warn"
       internalLogFile="internal-nlog.txt">
  <!--define various log targets-->
  <targets>
    <target name="logstash" xsi:type="Network" address="tcp://127.0.0.1:9900" layout="${longdate}|${logger}|${uppercase:${level}}|${message} ${exception}"/>
  </targets>
  <rules>
    <logger name="*" level="Info" writeTo="logstash" />
  </rules>
</nlog>
```

​ 5.1.3 NLog 加载

​ 在 LKN.MicroService.AggregateService 微服务中打开 Program.cs,配置内容为

```c#
 public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {

                    webBuilder.UseStartup<Startup>().UseNLog();
                    // 1、使用NlLog 默认加载 nlog.config
                }).UseNLog();
```

## 如何将 Kibaba 设置成为中文显示   
条件

1、logstash.yml

步骤

1、先打开 logstash.yml 文件
2、然后在 logstash.yml 文件地步增加
```bash
        i18n.locale: "zh-CN"
``` 
3、然后重启 kibana


## Kibaba 如何区分正常日志和异常日志   
正常日志 Info

异常日志 Error

条件

1、Message 字段编辑


::: tip 步骤
1、进入 Kibaba 工作区，选择索引模式

2、创建索引模式，输入日志索引，

例如 microservice-\*，匹配索引，然后创建该索引模式，方便搜索

3、然后选择创建好的索引，选择 message 字段(存储日志信息)

4、然后选择编辑该字段(格式化字段)，将 Error 日志设置成为红色
::: 
设置 Error 配置成红色

![Alt text](/images/abpmicroservices/micro008/abpmicroservices0008_0003image.png)


5、最后保存字段设置

## Kibana将日志进行报表展示(可视化)
条件

1、仪表盘

步骤

1、先进入kibana首页

2、然后创建新的仪表盘，选择折线图报表可视化

3、然后选择其中一个索引

	例如： microservice-*索引

4、然后对于折线图的X轴和Y轴进行字段设置

	字段为数据字段

	统计一段时间内的平均值


## Logstash如何收集微服务系统日志
条件

1、logstash.conf文件

步骤

1、Teamservice，MemberService增加NLog配置

先在Teamservice，MemberService分别加入nlog.config配置

然后在Progarm文件中增加
``` c# 
  public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                { 
 				webBuilder.UseStartup<Startup>().UseNLog();
                // 1、使用NlLog 默认加载 nlog.config
            }).UseNLog();
```
2、logstash配置

1、打开logstash.conf文件
 ``` yml
 input {
    tcp {
        port => "9900"
        type => "aggregateservice-log"
    }
     tcp {
        port => "9901"
        type => "teamservice-log"
    } 
     tcp {
        port => "9902"
        type => "memberservice-log"
    } 
}
    
output {
 if [type] == "aggregateservice-log" {
    elasticsearch { 
        hosts => ["http://localhost:9200"]
        index => "aggregateservice-%{+YYYY.MM.dd}"
         document_id => "%{@timestamp}"
		#user => "elastic"
		#password => "changeme"
     }
  }
  if [type] == "teamservice-log" {
    elasticsearch { 
        hosts => ["http://localhost:9200"]
        index => "teamservice-%{+YYYY.MM.dd}"
         document_id => "%{@timestamp}"
		#user => "elastic"
		#password => "changeme"
     }
  }
  
  if [type] == "memberservice-log" {
    elasticsearch { 
        hosts => ["http://localhost:9200"]
        index => "memberservice-%{+YYYY.MM.dd}"
         document_id => "%{@timestamp}"
		#user => "elastic"
		#password => "changeme"
     }
  }
  
}
```
2、然后启动logstash,进入logstash的bin目录
cmd执行 
``` bash
logstash.bat -f ../config/logstash.conf
```
3、在kibana中展示效果

## NLog如何保证微服务日志高并发/高可用
条件

1、RabbitMQ

2、Nlog.RabbitMQ.Target

步骤

1、先启动RabbitMQ，进入sbin目录

直接双击启动`rabbitmq-server.bat`

2、在微服务里面通过nuget安装
``` bash
Nlog.RabbitMQ.Target
``` 
3、进入微服务项目nlog.conf文件
``` xml
<?xml version="1.0" encoding="utf-8" ?>
<nlog xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     autoReload="true"
       internalLogLevel="Warn"
       internalLogFile="log/internal-nlog.txt">
<extensions>
			<add assembly="Nlog.RabbitMQ.Target" />
</extensions>
 <!--define various log targets-->
<targets>
		<!---最小配置-->
		<target name="RabbitMQTarget"
					  xsi:type="RabbitMQ"
					  username="guest"
					  password="guest"
					  hostname="localhost"
					  exchange="aggregateservice-log2"
					  exchangeType="direct"
				      topic="logstash"
					  port="5672"
					  vhost="/"
					  layout="${longdate}|${logger}|${uppercase:${level}}|${message} ${exception}"
					  UseLayoutAsMessage="true"/>
  </targets>
  <rules>
    <logger name="*" minlevel="Info" writeTo="RabbitMQTarget" />
  </rules>
</nlog>
```
3、然后进入logstash里面的config目录

然后创建`logstash-rabbitmq.conf`

编辑内容
``` yml
input {
    rabbitmq {
        # 队列的主机
            host => "localhost"
            # 默认为guest
            password => "guest"
            # 消息服务器端口，默认为5672
            port => 5672
            # 默认为""
            queue => ""
            # 默认值为true
            ack => true
            # 默认值为{}
            arguments => { "x-ha-policy" => "all" }
            # 默认值为false
            auto_delete => false
            # 默认值为true
            automatic_recovery => true
            # 默认值为1秒
            connect_retry_interval => 1
            # 没有默认值，超时时间为无限
            connection_timeout => 1000
            # 默认值为false
            durable => true
            # 队列的交换器信息
            exchange => "orderservice"
            # 队列的交换器信息
            exchange_type => "topic"
            # 默认值为false
            exclusive => false
            # 没有默认值，但是不指定的时候未60秒，秒为单位
            heartbeat => 60
            # 默认值为logstash，路由键
            key => "orderservicekey"
            # 默认值为false，启动此功能保存元数据会影响性能
            metadata_enabled => false
            # 默认值为false，当设置true的时候表明为被动队列，则在消息服务器上，此队列已经存在
            passive => false
            # 默认为256
            prefetch_count => 256
            # 下面是公共配置
            # 设置了type为system
            type => "orderservice" 
            # 默认line
            codec => "json"
            # 默认值为true
            enable_metric => false
            # 指定此数据输入id为input1
            id => input1
            # 添加了键位key值为value的数据到时间
            add_field => {
              "key" => "value"
            }
    }
    
    rabbitmq {
        # 队列的主机
            host => "localhost"
            # 默认为guest
            password => "guest"
            # 消息服务器端口，默认为5672
            port => 5672
            # 默认为""
            queue => ""
            # 默认值为true
            ack => true
            # 默认值为{}
            arguments => { "x-ha-policy" => "all" }
            # 默认值为false
            auto_delete => false
            # 默认值为true
            automatic_recovery => true
            # 默认值为1秒
            connect_retry_interval => 1
            # 没有默认值，超时时间为无限
            connection_timeout => 1000
            # 默认值为false
            durable => true
            # 队列的交换器信息
            exchange => "internalgateway"
            # 队列的交换器信息
            exchange_type => "topic"
            # 默认值为false
            exclusive => false
            # 没有默认值，但是不指定的时候未60秒，秒为单位
            heartbeat => 60
            # 默认值为logstash，路由键
            key => "internalgatewaykey"
            # 默认值为false，启动此功能保存元数据会影响性能
            metadata_enabled => false
            # 默认值为false，当设置true的时候表明为被动队列，则在消息服务器上，此队列已经存在
            passive => false
            # 默认为256
            prefetch_count => 256
            # 下面是公共配置
            # 设置了type为system
            type => "internalgateway" 
            # 默认line
            codec => "json"
            # 默认值为true
            enable_metric => false
            # 指定此数据输入id为input1
            id => input2
            # 添加了键位key值为value的数据到时间
            add_field => {
              "key" => "value"
            }
    }
}
    
output {
   # elasticsearch { 
  #      hosts => ["http://localhost:9200"]
   #     index => "microservice-%{+YYYY.MM.dd}"
		#document_id => "%{@timestamp}"
		#user => "elastic"
		#password => "changeme"
  #}

  if [type] == "orderservice" {
    elasticsearch { 
        hosts => ["http://localhost:9200"]
        index => "orderservice-%{+YYYY.MM.dd}"
        document_id => "%{@timestamp}"
        #user => "elastic"
        #password => "changeme"
     }
  }

  if [type] == "internalgateway" {
    elasticsearch { 
        hosts => ["http://localhost:9200"]
        index => "internalgateway-%{+YYYY.MM.dd}"
        document_id => "%{@timestamp}"
        #user => "elastic"
        #password => "changeme"
     }
  }
}

  ```
## 扩展
kibana直接操作Elasticsearch 7

NLog详细文档地址：https://nlog-project.org/config/

logstash文档地址：

logstash文档官网地址：https://www.elastic.co/guide/en/logstash/7.10/index.html

Elasticsearch 7使用地址：https://www.letianbiji.com/elasticsearch/es7-quick-start.html

kibana文档地址：https://www.elastic.co/guide/en/kibana/7.10/index.html


## 微服务阶段性总结


1、微服务的核心概念：理解，应用场景，微服务拆分，微服务架构类型，微服务落地的技术ABP vNext DDD .Net5。

​ 2、微服务电商项目落地。

​ 1、 ABP vNext DDD .Net5

​ 2、如何创建微服务

​ 3、微服务调用

​ 4、module模块

​ 5、microservices模块

​ 总结:从0到1 构建一个微服务 ，从1基础运行微服务

​ 3、微服务通信。

​ 1、创建聚合层服务

​ 2、聚合服务和危微服务之间通信。HttpClient。

​ 4、微服务内部网关

​ 1、微服务之间通信。

​ 2、聚合和微服务之间通信。

​ ocelot

​ 1、路由

​ 2、负载均衡

​ 3、限流

​ 4、熔断

​ 5、缓存

​ 5、微服务注册中心

​ 1、consul

​ 2、内部api网关集成

​ 3、consul集群

​ 6、微服务外部网关

​ 1、外部网关概念

​ 2、ocelot

​ 1、路由

​ 2、负载均衡

​ 3、限流

​ 4、熔断

​ 5、缓存

​ 3、集成了consul

​ 7、微服务配置中心

​ 1、配置中心概念及nacos

​ 2、管理所有appsetting.json文件

​ 3、nacos集群

​ 8、微服务事件总线(2次课件)

​ 1、事件总线的概念(异步)

​ 2、cap

​ 3、发布消息失败

​ 4、消费消息失败

​ 5、人工消息

​ 9、微服务-支付微服务落地

​ 1、从0到1构建支付微服务

​ 2、从1到一步一步运行支付微服务

​ abp vnext DDD .net5

​ 10、微服务链路监控(执行时间—>性能)

​ 1、链路监控概念

​ 2、skywalking apache

​ 3、ES

​ 4、同步微服务链路监控

​ 5、异步微服务链路监控

​ 11、微服务日志中心(执行过程—>日志)—执行过程(出现了异常，快速解决)

​ 1、日志中心概念

​ 2、ELK elasticsearch logstash kibana

​ 3、同步日志 nlog tcp

​ 4、异步日志 nlog rabbitmq

​ 5、如何收集所有微服务的日志。

还没有讲下周

​ 12、微服务资源监控。(CPU 内存 磁盘)。监控

​ 13、微服务分布式权限。 ids4

​ 14、微服务分布式事务。同步分布式(同时成功，同时失败)

下下周：docker /k8s，CI/CD

下下下周：mongodb redis es

大家代码建议

1、备课分支

2、开始讲课分支

3、课程完成后分支

做事：不断精讲。掌握未来。

做成某意见事情。精讲（优化，持续进步）

​ 精讲：内卷。只专注于做.net。排斥外界新事物。

​ 精讲时候：原则1、先把自己的事情不断进步 2、接触新事物。

​ 空调。 降温 。1、扇子（类型非常多。精讲—> 100种类型。变成了内卷）。2、电风扇(100多种)。3、空调(不断精讲)—。架构。单体(100种类型)–分布式–微服务—。

​ 跳槽：一直不跳槽，没有发展，一直跳槽，减低信誉度。

​ 总结：事务是发展的，持续精讲(学习+进步)，未来潜力无限。懒惰之心。意志力。阻碍，苦难，挫折。

​ 任何事情(行为)都是发展的。做预测了。

​ 扫地(精讲过程)保洁公司。做验证码–(精讲过程)–验证码公司

​ 写代码–(精讲过程)–代码公司

代码维护：coding 理解成github gitee

## 微服务阶段性答疑

skywaking中的服务、实例、端点分别是什么
服务：微服务名称(分组)

实例：微服务实例(运行实例)

端点：微服务实例接口(断点)

consul一个服务重复注册(同一个服务实例，同一个端口)，就是老师上课的consul代码，如何解决？
方案：1、实例ID相同。

​ 2、关闭实例，实例注销。

Java和Go都是跨平台的，Java开发出来的框架需要安装jdk环境；Go貌似不需要诶（例如：Consul）这是为什么呢
原因：语言的精讲结果导致的。

面向对象，Go已经把环境打包了。

4、微服务远程接口，client类库中，可以加用户权限吗？如果要加的话，令牌怎么传呢？
答案：可以加

内部网关中路由匹配为什么使用这样的呢，

![Alt text](/images/abpmicroservices/micro008/abpmicroservices0008_0004image.png)


是为使用自动api控制器，所以才有。

如果没有，自动api控制器，就无法发现微服务的接口(端点)

从链路中看consul太消耗时间了，那如何优化，你上次说用cache，但是具体怎么使用，不知道。
原因：consul消耗时间，http直接调用导致的。

方案：修改源码，或者增加扩展代码。

cap 是通过发布订阅消息来实现异步通信的，cap 发布消息之后，如果订阅消息的服务有多个节点，cap 是怎么保证只有一个节点处理消息的，是cap 内置的 rabbit mq 实现的吗？
答案：是的。

原因：如何，同一个服务启动的不同实例，监听的是同一个队列

从链路中看，nacos加载配置太消耗时间，具体怎么优化？
方案：启动的时候，就加载了。

老师，讲事件总线的时候，应用场景有点不太明白，它跳过了网关，请问一下什么时候应该使用事件总线？什么时候不用，而让访问经过网关？
答案：异步 ，同步。

什么时候，并发量大小

如果并发量比较小，就使用同步。

小于一个微服务实例的最高并发处理能力。例如：聚合服务。200 > 150

如果并发量比较大，就使用异步。

大于一个微服务实例的最高并发处理能力。例如：聚合服务。200 < 300

如何压测出微服务并发处理能力

1、压测工具。ab jmeter

所以：实现异步自动降级成为同步。

创建订单。如果并发量比较小，默认就使用同步

如果并发量比较大，升级成为异步

如果并发量变小，降级成为同步

工具：配置中心，来进行实现。

结合elk，微服务监控如何做到有异常发信息给相关的负责人呢
elk，发生了异常。elk没有实现。

skywalking ，性能，可以实现发送。

资源监控，就会进行发送。短信，进行发送。

日志中心我遇到一个问题，就是如果logstash,rabbitmq,elasticsearch都启动的情况下，日志可以正常写到elsticsearch,如果把logstash停止了，然后运行程序，日志写到rabbitmq,然后再启动logstash，日志不会写到elasticsearch，不知什么原因？
答案：仔细检查一下配置

怎么将系统当前登录的信息也写到日志里面呢
答案：集成了nlog，loginfo logdebugger。开放级别。

事件总线 cap 的订阅发布是不是直接使用 rabbitmq 的广播模式也能实现？ cap 的优点是能够持久化received 和 处理的消息么
答案：主题模式，不是广播模式，只集成了主题。

​ 优点是的。

网页登录的coding,但没有克隆的时候，没有下载按钮，是我没有下载或克隆权限吗？
答疑：
 

才说只专注于做.net会内卷，那老师是建议学习其它编程语言吗？比如JAVA、phyton?
前提：.net做成为了架构。然后再接触新事物。

老师，跳槽面试的时候，不会的知识点就说不会吗？还是说一点这个知识关联的知识
答案：原则：不要说不会。如果你说了，面试官，会觉得你不善于思考。排斥新事物。

虽然没有做过，但是我有思路。面试官看到你的自信。

新问题。说一下思路，即时说错了，不要怕，你也要尝试去优化，去解决。

1、自信。

2、不服输。

但是，尽量提出好的思路。

人生：10件事，9件是痛苦，1件是幸福

持续精讲。

分布式任务调度会讲解吗
答案：中间件里面讲解过，

老师就是P1P2P3P6架构2110班的课程，老师能给个不重复的章节列表不，因为不知道后面的课程和之前的课程是否有哪些是重复的，
但是总有不同的知识点。

微服务调度
hangfire