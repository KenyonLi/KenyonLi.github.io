---
title: '微服务通信'
date: 2023-09-19  
tags:
- '微服务'
- 'abp'
- 'dotnet'
categories:
- '技术'
---
## 目录

[[toc]]


## 微服务通信  

### 什么是通信    

通信：各个微服务之间互相建立连接    

如图片所示：  

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0001.png)   

微服务1和微服务2之间建立连接，然后通过连接，微服务1向微服务2请求数据。这就是连接   

### 电商微服务中为什么要使用通信  
### 电商微服务项目  
电商微服务项目已经落地，目前的状态结构  
如图所示：  

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0002.png)   

目前有3个角色组成：
1、订单详细聚合服务  
2、订单、商品、支付、用户微服务  
3、订单、商品，支付，用户数据库

客户端发起查询订单的请求，大致路径，如下：   
客户端——>订单详情聚合服务——>订单微服务——>订单数据库。  
目前，遇到一个问题，订单详情聚合服务和订单微服务之间如何通信？  
所以：使用http进行通信   

### 电商微服务项目-通信  

订单详情聚合服务和订单微服务之间通信，
如图所示：

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0003.png)   

订单详情和订单微服务之间使用http进行通信   

### 电商微服务如何落地通信  

#### 基础前提  
1、LKN.OrderDetailsServices   
2、LKN.Order.HttpApi.Client   

##### `LKN.Order.HttpApi.Client` 项目准备  
1、先创建电商详情聚合服务项目`LKN.Order.HttpApi.Client` 
如图所示：

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0004.png)   

2、然后在`LKN.Order.HttpApi.Client`项目中，修改`OrderHttpApiClientModule`类代码，如下：
``` c# 
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace LKN.Order;

[DependsOn(
    typeof(OrderApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class OrderHttpApiClientModule : AbpModule
{
    public const string RemoteServiceName = "Order";

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(OrderApplicationContractsModule).Assembly,
             RemoteServiceName
        );

        Configure<AbpVirtualFileSystemOptions>(options =>
        {
            options.FileSets.AddEmbedded<OrderHttpApiClientModule>();
        });

    }
}

```

注意核心代码：`public const string RemoteServiceName = "Order"` 为订单微服务名称   


### LKN.OrderDetailsServices项目准备  
1、先创建电商详情聚合服务项目`LkN.orderDetailsServices`,
如图所示：  

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0005.png)   

2、然后在`LKN.OrderDetailsServices`项目中，引入`LKN.Order.HttpApi.Client`项目   

如图所示：

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0006.png)   

3、然后在`LKN.OrderDetailsService`项目中，修改为`appsettings.json`配置文件内容，新配置内容，如下：

``` js
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*",
  "RemoteServices": {
    "Order": {
      "BaseUrl": "http://localhost:44365/"
    }
  }
}

```

核心配置：  
1、RemoteServices:配置订单微服务地址   
2、Order:为订单微服务名称   
3、BaseUrl:"http://localhost:44365/": 为订单微服务个具体地址   

### 查询订单业务场景落地   
条件   
1、LKN.Order.HttpApi.Host  
2、LKN.OrderDetailsServices  

#### 订单微服务启动  
1、先进入`LKN.Order.HttpApi.Host`项目cmd控制台   
输入命令：
``` bash
dotnet run 
```

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0007.png)   
![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0008.png)   

#### 普通项目修改为简单Abp项目  

1、需要引入`Volo.Abp.AspNetCore.Mvc` 、`Volo.Abp.AspNetCore.Mvc`  v 7.3.0   

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0009.png)     


2、创建`OrderDetailsServicesModule` 类，重写两个方法`ConfigureServices`,`OnApplicationInitialization` 写配置
```C# 
   
    [DependsOn(typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(typeof(AbpAutofacModule))]
    public class OrderDetailsServicesModule: AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            context.Services.AddEndpointsApiExplorer();
            context.Services.AddSwaggerGen(c=>c.SwaggerDoc("v1",new OpenApiInfo { Title = "LKN.OrderDetailsServices", Version = "v1" }));
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();
            var env = context.GetEnvironment();
            // Configure the HTTP request pipeline.
            if (env.IsDevelopment())
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();

                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "LKN.OrderDetailsServices v1"));
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseConfiguredEndpoints();
        }
    }
```
3、修改`Program`类，写入代码  

``` c# 
var builder = WebApplication.CreateBuilder(args);

builder.Host.AddAppSettingsSecretsJson()
               .UseAutofac();
               //.UseSerilog();
await builder.AddApplicationAsync<OrderDetailsServicesModule>();

var app = builder.Build();
await app.InitializeApplicationAsync();
await app.RunAsync();

```


#### 创建订单查询接口  
1、先在`LKN.OrderDetailsService`项目中，创建`controllers`文件夹，然后在`controllers`中，创建`OrderDetailController`类   
如图所示：

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0010.png)   

2、然后在OrderDetailsController类中添加代码，如下：
``` c#  
 /// <summary>
    /// 订单详情控制器
    /// </summary>
    [ApiController]
    [Route("api/OrderDetailsServices/OrderDetails")]
    public class OrderDetailsController : ControllerBase
    {
        private readonly ILogger<OrderDetailsController> _logger;

        public IOrderAppService _OrderAppService { set; get; }

        public OrderDetailsController(ILogger<OrderDetailsController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// 获取订单详情
        /// </summary>
        /// <returns></returns>
        [HttpGet("{id}")]
        public async Task<OrderDto> Get(Guid id)
        {
            // 1、查询订单
            OrderDto orderDto  = await _OrderAppService.GetAsync(id);
            // 2、返回订单
            return orderDto;
        }
    }
```

核心代码：

1、`IOrderAppService`：由`LKN.Order.HttpApi.Client`提供的订单控制器操作接口。订单微服务提供

2、`Get(Guid id)`：查询订单接口

创建订单接口访问
1、先进入`LKN.OrderDetailsServices`项目CMD控制台

​ 输入命令：`dotnet run`  

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0011.png)   
![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0012.png)   



2、然后在浏览器中，输入`http://localhost:5128/swagger/index.html`地址，

如图所示：  

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0013.png)     


核心解释：   

​ 1、`OrderDetails`：为订单详情模块  

​ 2、`/api/OrderDetailsServices/OrderDetails/{id}`：为订单查询接口   

3、然后访问`/api/OrderDetailsServices/OrderDetails/{id}`，输入订单Id：`3a0dbf83-57d7-8168-e91a-0b94fbd83c1a`。查询订单结果  

如图所示：   

![Alt text](/images/abpmicroservices/micro002/abpmicroservices0002_0014.png)     

