---
title: '微服务事件总线-CAP'
date: 2023-10-08  
tags:
- '微服务事件总线-CAP'
- 'abp'
- 'dotnet'
- 'CAP'
categories:
- '技术'
---

## 目录
[[toc]]

## 微服务事件总线-CAP

### 事件总线 
#### 什么是事物  
例如：事物所有看到的一切都是事物，不能看到的也是事物
例如：团队微服务，成员微服务，聚合微服务，网关api,认证中心等等包括类，对象所有的事件都是事物变化的结果  
大家接触事件最早就是在js或者是C#高级特性。大家对于事件不默认，但是对于事件不是很好理解

#### 什么是事件  
事件就是事物状态的变化，每一次事物变化的结果都称作为事件  
#### 什么是事件总线  
就是用来管理所有的事件的一种机制就称作为事件总线
包括事件发布，事件存储，事件订阅，事件处理的统称  
作用：
事件总线是一种机制，它允许不同的组件彼此通信而不彼此了解。组件可以将事件发送到Eventbus,而无需知道是谁来接听或有多少其他人来接听。组件也可以侦听Eventbus上的事件，而无需知道是谁发送了事件。这样，组件可以相互通信而无需相互依赖。同样，很容易替换一个组件。只要新组件了解正在发送和接收的事件，其他组件就永远不会知道。

#### 为什么要使用事件总线
将微服务系统各组件之间进行解耦   
使用业务的发展来说  

### 事件总线架构
CAP  
masstransit  

#### CAP内部概念  
事件：就是一些状态信息   
发布者：发布事件的角色cap     
订阅:消费事件的角色cap   
消息传输器： 传输事件   
消息存储器：存储事件   

#### CAP存储事件消息队列类型 Transport  

Azure  
rabbitmq  
kafaka  
in Memory Queue  

#### CAP存储事件持久化类型  

Sql Server
Mysql   
PostgreSQL   
MongoDB   
InMemoryStorage   
#### CAP事件监控  
Dashboard  
### 微服务系统中如何使用CAP  
条件  
1、微服务系统  
2、RabbitMQ  
3、Mysql 
4、CAP
步骤  
1、微服务系统准备  

2、RabbitMQ准备   
  2.1 环境准备   
  [分布式中间件-RabbitMQ（二）-参考该章节安装部署环境](../rabbitmq/rabbitmq02.md)
  2.2 RabbitMQ启动  
  2.2.1、在安装目录添加可视化插件    
``` bash 
    rabbitmq-plugins enable rabbitmq_management
```
   2.2.2、在安装目录下启动
```bash
	rabbitmq-server 
```
​ 2.2.3、查看rabbitmq状态
``` bash
    rabbitmqctl status
```
​ 2.2.4、在浏览器输入http://127.0.0.1:15672   
​ 访问rabbitmq后台系统  

3、Mysql准备    
​ Mysql启动，安装   

4、CAP准备   

​ 4.1 CAP环境   

​ CAP官网地址：https://cap.dotnetcore.xyz/user-guide/zh/monitoring/dashboard/   
 
​ 4.2 CPA配置   

​ 1、在`LKN.MicroService.Core`项目中添加依赖
``` bash
CAP Nuget DotNetCore.CAP
CAP传输器Nuget DotNetCore.CAP.RabbitMQ
CAP持久化DotNetCore.CAP.InMemoryStorage
```
​ 2、在`LKN.MicroService.AggregateService`服务中`startup.cs`中添加
``` C#
 // 8、添加事件总线cap
            services.AddCap(x => {
                // 8.1 使用内存存储消息(消息发送失败处理)
                x.UseInMemoryStorage();

                // 8.2 使用RabbitMQ进行事件中心处理
                x.UseRabbitMQ(rb => {
                    rb.HostName = "localhost";
                    rb.UserName = "guest";
                    rb.Password = "guest";
                    rb.Port = 5672;
                    rb.VirtualHost = "/";
                });
            });
```
​ 2.1 在`AggregateController.cs`中注入`ICapPublisher`
``` C#
private readonly ICapPublisher capPublisher;
public TeamsController(ICapPublisher capPublisher)
    {
        this.capPublisher = capPublisher;
    }	
```
​ 3、在`LKN.MicroService.VideoService`服务`startup.cs`中添加
``` C# 
 // 8、添加事件总线cap
            services.AddCap(x => {
                // 8.1 使用RabbitMQ进行事件中心处理
                x.UseRabbitMQ(rb => {
                    rb.HostName = "localhost";
                    rb.UserName = "guest";
                    rb.Password = "guest";
                    rb.Port = 5672;
                    rb.VirtualHost = "/";
                });
            });	
````​ 
3.1 在`VideoController.cs` 中方法上添加特性`[CapSubscribe]`
```C# 
       /// <summary>
        /// 视频添加(异步添加)
        /// </summary>
        /// <param name="Video"></param>
        /// <returns></returns>
        [NonAction]
        [CapSubscribe("tontcap")]
        public ActionResult<Video> PostVideo(Video Video)
        {
            videoService.Create(Video);
       return CreatedAtAction("GetVideo", new { id = Video.Id }, Video);
    }	
```
4、效果展示   ​
  CAP发布原理   
  CAP消费原理   
  RabbitMQ宕机情况    
步骤  

1、将`RabbitMQ`直接关闭  

事件消息无法发送，存储到内存缓存中   

2、当将`RabbitMQ`启动后，消息正常发送  

​ 内部使用定时器轮询机制实现   

`AggregateService`宕机情况   
`AggregateService` 执行业务成功，发送消息前宕机   
使用本地消息表解决(思想：持久化操作)    

条件    

1、本地消息表    
 
2、`DotNetCore.CAP.MySql` 依赖   

步骤   

1、在`LKN.MicroService.Core`项目中    

​ 1.1 安装`mysql`程序集
``` bash
Nuget DotNetCore.CAP.MySql
```
1、在`LKN.MicroService.AggregateService`服务中

​ 1.1 创建`Context`文件，然后在`Context`文件夹内创建`AggregateContext`
``` C#
    /// <summary>
    /// Aggregate服务上下文
    /// </summary>
    public class AggregateContext : DbContext
    {
        public AggregateContext(DbContextOptions<AggregateContext> options) : base(options)
        {
        }
}
```
​ 1.2 在`appsettings.json`中添加
``` json
{
  "ConnectionStrings": {
    "DefaultConnection": "server=localhost;port=3306;database=aggregateservice;uid=root;pwd=root;CharSet=utf8"
  }
}
```
​ 1.3 在`startup.cs`中添加消息持久化
``` C# 
         // 9、注册上下文到IOC容器
            services.AddDbContext<AggregateContext>(options =>
            {
                options.UseMySQL(Configuration.GetConnectionString("DefaultConnection"));
            });
        // 8、添加事件总线cap
        services.AddCap(x => {
            // 8.1 使用EntityFramework进行存储操作
            x.UseEntityFramework<AggregateContext>();
            // 8.2 使用sqlserver进行事务处理
            x.UseMySQL(Configuration.GetConnectionString("DefaultConnection"));
        // 8.2 使用RabbitMQ进行事件中心处理
        x.UseRabbitMQ(rb => {
            rb.HostName = "localhost";
            rb.UserName = "guest";
            rb.Password = "guest";
            rb.Port = 5672;
            rb.VirtualHost = "/";
        });
    });
```
​ 1.4测试演示效果   

​ 数据库中多了两张表   

![Alt text](/images/abpmicroservices/micro006/abpmicroservices0006_0001image.png)   

​ 当业务执行成功，发送消息时，聚合微服务宕机，消息被持久化到数据库  

​ 当重启聚合微服务时，消息发送成功，被成功消费  

​ 1.5 原理  

​ 1、定时器 消息重试   

​ 2、幂等性 一个函数每次都是相同的结果，状态只有一个   

`VideoService`宕机情况  
`VideoService`接受消息失败   
当`VideoService`直接宕机的时候接受消息失败，  
然后重启`VideoService`消息消费成功   

`VideoService`接受消息成功执行失败   
条件   

1、本地消息表  

步骤  

1、在LKN.MicroService.Core项目中  

​ 1.1 安装mysql程序集   
``` bash 
Nuget DotNetCore.CAP.MySql
```
2、在`LKN.MicroService.VideoService`项目中

​ 2.1 在`startup.cs`中添加消息持久化
``` C# 
    // 8、添加事件总线cap
    services.AddCap(x => {
        // 8.1 使用EntityFramework进行存储操作
        x.UseEntityFramework<AggregateContext>();
        // 8.2 使用sqlserver进行事务处理
        x.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
    // 8.2 使用RabbitMQ进行事件中心处理
    x.UseRabbitMQ(rb => {
        rb.HostName = "localhost";
        rb.UserName = "guest";
        rb.Password = "guest";
        rb.Port = 5672;
        rb.VirtualHost = "/";
    });
});
```
​ 2.2 效果展示   

​ 数据库多了两张表   

![Alt text](/images/abpmicroservices/micro006/abpmicroservices0006_0001image.png)     

​ 2.3 原理   

​ 1、定时器 消息重试   

​ 2、幂等性 一个函数每次都是相同的结果，状态只有一个   

 3、消息重试完还是消费失败情况 ，使用人工干预实现    



条件  

1、`Dashboard` – 后台管理页面  

步骤

1、在`LKN.MicroService.Core`项目中  

​ 1.1 安装`Dashboard`  
``` bash
Nuget DotNetCore.CAP.Dashboard
``` 
2、在`LKN.MicroService.VideoService`项目中

​ 2.1 在`startup.cs`中添加`Dashboard`
``` C#
// 8、添加事件总线cap
services.AddCap(x => {
    // 8.1 使用EntityFramework进行存储操作
    x.UseEntityFramework<AggregateContext>();
    // 8.2 使用sqlserver进行事务处理
    x.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
// 8.3 使用RabbitMQ进行事件中心处理
x.UseRabbitMQ(rb => {
    rb.HostName = "localhost";
    rb.UserName = "guest";
    rb.Password = "guest";
    rb.Port = 5672;
    rb.VirtualHost = "/";
});

// 8.4添加cap后台监控页面
    x.UseDashboard();
});
```
​ 2.2 运行打开`cap`后台监控页面

​    http://localhost:5007/cap   
   ![Alt text](/images/abpmicroservices/micro006/abpmicroservices0006_0002image.png)     

​ 对于发送失败的消息进行重复发送     

​ 对于消费失败的消息进行重复消费   

### 订阅消息队列  

实现类需要继承cap的`ICapSubscribe`接口,并在该实现类中的方法，添加特性`[CapSubscribe("OrderService.#")]`
``` C# 
 /// <summary>
    /// 订单服务实现
    /// </summary>
    [RemoteService(IsEnabled = false)]
    public class OrderAppService : CrudAppService<
                                            Orders,
                                            OrderDto,
                                            Guid,
                                            PagedAndSortedResultRequestDto,
                                            CreateOrderDto,
                                            UpdateOrderDto>,IOrderAppService, ICapSubscribe
    {
        public IOrderRepository _OrderRepository;

        public OrderAppService(IOrderRepository repository)
            : base(repository)
        {
            this._OrderRepository = repository;
        }

        /// <summary>
        /// 接受创建订单的事件
        /// </summary>
        /// <param name="createOrderDto"></param>
        // [CapSubscribe("OrderService.CreateOrder")]
        // OrderService.# === OrderService.CreateOrder / OrderService.123 / OrderService.4546
        [CapSubscribe("OrderService.#")]
        public void CreateOrderEvent(CreateOrderDto createOrderDto)
        {
            Console.WriteLine($"创建订单：{createOrderDto}");
            // throw new Exception("创建订单失败");
            var orderDto = this.CreateAsync(createOrderDto).Result;
            Console.WriteLine($"创建成功：{createOrderDto}");
        }

```




### CAP如何在微服务中实现高并发/高可用   
条件   

1、RabbitMQ集群  

步骤

1、安装Rabbitmq集群  

### CAP集群如何在微服务中实现负载均衡    
条件   

1、Nginx    

步骤  

1、Nginx 层负载均衡配置  

#### CAP集群如何在微服务中实现动态伸缩  
条件  

1、Docker 或者 k8S  

步骤  

1、在docker中搭建RabbitMQ集群  