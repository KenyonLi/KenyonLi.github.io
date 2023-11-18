---
title: '微服务配置中心-Nacos'
date: 2023-09-28  
tags:
- '微服务配置中心'
- 'abp'
- 'dotnet'
- 'Nacos'
categories:
- '技术'

---

## 目录
[[toc]]

## 微服务注配置中心-Nacos

### 什么是配置中心
配置是用来动态修改程序执行状态的一种机制  
### 为什么要使用配置中心  
安全性：配置跟随源代码保存在代码库中，容易造成配置泄漏。    
时效性：修改配置，需要重启服务才能生效。  
局限性：无法支持动态调整：例如日志开关、功能开关。  
因此，分布配置中心应运而生！


### 配置中心类型方式   
`Apollo`,`java`开发  ——运维成本比高  
`Apollo`分为`Mysql`,`config` `Server`,`Admin Seriver`,`Portal`四个模块，`MySql`存储`Apollo`元数据和用户配置数据：`Config Server`提供配置的读取、推送等功能，客户端请求都是落到`Config Server`上；`Admin Service `提供配置的修改、发布等功能、`Portal`操作的服务就是`Admin Service`；`Portal`提供给用户配置管理界面；功能强大，社区活跃，但较为复杂，部署组件较多，运维成本比高。

`Nacos`,`go`开发   
依赖：不依赖其他组件  
应用内/外：属于外部应用，侵入性小  
ACP原则：遵循cp原则（一致性+分离容忍）服务注册稍慢，由于其一致性导致了在leader挂掉时重新选举真个Nacos不可用。    
版本迭代：目前仍然进行版本迭代。  
集成支持：支持`SpingCloud K8s`集成   
访问协议：Http/Dns  
雪崩保护：不支持雪崩保护  
集成： spingCloud集成，k8s集成     
自动注销实例： 不支持   
界面：英文界面，不符合国人习惯
上手：复杂一点

Nacos,依赖：`mysql` —–

依赖：mysql
应用内/外：属于外部应用，侵入性小
ACP原则：通知遵循CP原则（一致性+分离容忍） 和AP原则（可用性+分离容忍）
版本迭代：目前仍然进行版本迭代，最近的提交是几天前
集成支持：支持`Dubbo` 、`SpringCloud`、`K8S`集成
访问协议：`HTTP`/动态`DNS`/`UDP`
雪崩保护：支持雪崩保护

`Spring cloud config java`开发 —– Net支持比较差

自动注销实例：支持
界面：国产服务，中文界面，符合国人习惯
上手：极易，中文文档，案例，社区活跃
`Nacos`实际上是和`Nacos`比较相似的产品，虽然`Nacos`目前的主要发展方向放在了`Service Mesh`，但是`Nacos`最初支持的服务发现和配置管理，也是`Nacos`的两大功能。虽然`Nacos`在`Nacos`之后以与之相似的部署架构开源，但这并不意味着`Nacos`在功能和架构上也模仿`Nacos`，`Nacos`的架构和功能是由阿里巴巴内部十年的运行演进经验得来，所以二者的比较也一定会让大家更加了解他们的定位和演进方向是完全不一样的。

微服务中如何使用`Nacos`配置中心
`Nacos`配置中心下载地址 [nacos-server-2.2.3.zip 下载](https://github.com/alibaba/nacos/releases/download/2.2.3/nacos-server-2.2.3.zip)
`Nacos`地址已经使用过




`Nacos`做配置中心运行原理
见图
![Alt text](/images/abpmicroservices/micro005/abpmicroservices0005_0000image.png)

`Nacos` 文档  https://nacos.io/zh-cn/docs/what-is-nacos.html

### java jdk windows 配置  
![Alt text](/images/abpmicroservices/micro005/abpmicroservices0005_0001image.png)
``` bash
%Java_Home%\bin
%Java_Home%\jre\bin
```

### Nacos 单应用启用  
登录文件配置
[Nacos 登录配置参考](https://blog.csdn.net/lianghecai52171314/article/details/132182119)、
``` yml
nacos.core.auth.enabled=true
nacos.core.auth.server.identity.key=nacos
nacos.core.auth.server.identity.value=nacos
nacos.core.auth.plugin.nacos token.secret.key=VGhpc0lzTXIDdXN0b21TZWNyZXRLZXkwMTIZNDU2Nzg=
```


``` bash
D:\test\ABP\nacos-server-2.2.3\nacos\bin>startup.cmd -m standalone
```
![Alt text](/images/abpmicroservices/micro005/abpmicroservices0005_0002image.png)

`Nacos`使用单服务单配置
条件

1、微服务系统

2、`Nacos`

3、`nacos-sdk-csharp.Extensions.Configuration`

步骤

1、`LKN.Order.HttpApi.Host` 项目中Nuget下载 `nacos-sdk-csharp.Extensions.Configuration`

2、配置文件中配置Nacos地址

``` json
"Nacos": {
    "Namespace": "", // Please set the value of Namespace ID !!!!!!!!
    "ServerAddresses": [ "http://localhost:8848/" ],
    "UserName": "nacos",
    "Password": "nacos",
    "AccessKey": "",
    "SecretKey": "",
    "ConfigUseRpc": false,
    "NamingUseRpc": false,
    "Listeners": [
      {
        "Optional": false,
        "DataId": "appsettings.json",
        "Group": "OrderService"
      }
    ]
  }
```

3、Program文件中配置
 

``` C# 
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using Serilog.Events;

namespace LKN.Order;

public class Program
{
    public async static Task<int> Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration()
#if DEBUG
            .MinimumLevel.Debug()
#else
            .MinimumLevel.Information()
#endif
            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
            .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Warning)
            .Enrich.FromLogContext()
            .WriteTo.Async(c => c.File("Logs/logs.txt"))
            .WriteTo.Async(c => c.Console())
            .CreateLogger();

        try
        {
            Log.Information("Starting web host.");
            var builder = WebApplication.CreateBuilder(args);
            builder.Host.AddAppSettingsSecretsJson()
                .ConfigureAppConfiguration(build =>
                     {
                         var configuration = build.Build();
                         build.AddNacosV2Configuration(configuration.GetSection("Nacos"));
                 })
                .UseAutofac()
                .UseSerilog();
            await builder.AddApplicationAsync<OrderHttpApiHostModule>();
            var app = builder.Build();
            await app.InitializeApplicationAsync();
            await app.RunAsync();
            return 0;
        }
        catch (Exception ex)
        {
            if (ex is HostAbortedException)
            {
                throw;
            }

            Log.Fatal(ex, "Host terminated unexpectedly!");
            return 1;
        }
        finally
        {
            Log.CloseAndFlush();
        }
    }
}
```