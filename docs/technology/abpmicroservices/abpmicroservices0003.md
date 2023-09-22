---
title: '微服务内部网关'
date: 2023-09-22  
tags:
- '微服务内部网关'
- 'abp'
- 'dotnet'
- 'Ocelot'
categories:
- '技术'
---

## 目录
[[toc]]

如何图所示：  

![Alt text](/images/abpmicroservices/micro003/abpmicroservices0003_0001.png)   

微服务1向微服务2获取，请求过程如下   

微服务1——>内部网关——>微服务2   

微服务1 通过内部网关获取微服务2数据，通过内部网关进行通信。   

###  电商微服务系统中为什么要使用内部网关  
#### 电商微服务系统目前  

如图所示：  

![Alt text](/images/abpmicroservices/micro003/abpmicroservices0003_0002.png)   

查询订单业务场景实现思路，如下：    

客户端——>订单详情聚合服务——>订单微服务——>订单数据库  
如果订单微服务最高负载能力为600（cpu,内存，磁盘资源是有限的），意味着客户端只能发起600个查询订单的并发请求，如果客户端发起了1200查询商品并发，超过了600并发，就会导致订单微服务压力过大，订单微服务宕机的问题。   

如何解决客户端查询商品并发量大的问题？  

方案：商品微服务集群   

#### 电商微服务系统-集群  
电商微服务集群，如图所示：

![Alt text](/images/abpmicroservices/micro003/abpmicroservices0003_0003.png)   

客户端发起1200查询商品并发，订单微服务启动2个实例，来处理并发请求。订单详情聚合需要发生修改，需要在订单详情聚合服务中，增加订单微服务2地址。会导致订单详情聚合服务违背开闭原则，会进一步导致订单详情聚合服务不稳定。而且，还需要在订单详情聚合服务增加负载均衡的代码，因为需要将客户端发起的请求，均分到订单微服务实例1、订单微服务实例2，也会导致订单详情聚合服务违背了开闭原则。  

如何保证订单详情聚合服务遵守开闭？  
方案：内部网关    

#### 电商微服务系统-集群-内部网关 

电商微服务集群，内部网关系统，如图所示：   


![Alt text](/images/abpmicroservices/micro003/abpmicroservices0003_0004.png)     

客户端发起查询订单请求，路径如下：   

客户端——>订单详情聚合服务——>内部网关——>订单微服务——>订单数据库   
内部网关：将客户请求均分到多个订单微服务实例   
当订单微服务增加实例，出现了新的实例地址，新的实例地址只需要加载到内部网关即可，订单详情聚合不用做任何修改，保证了订单详情聚合服务遵守了开闭原则。

### 电商微服务系统中如何落地内部网关    

微服务网关技术选项


![Alt text](/images/abpmicroservices/micro003/abpmicroservices0003_0005.png)     


核心解释：
1、`Netfilx Zuul + java`实现   
2、`Kong nginx + lua`脚本实现  
3、`thk go`语言开发，收费版本
4、`Ocelot aspnetcore` 开发的   

### 电商微服务系统中使用Ocelot  

#### Ocelot是什么   
简单的来说`Ocelot`是一堆的`asp.net core middleware`组成的一个管道。当它拿到请求之后会用到一个`request builder`来构造一个`httpRequestMesssage`发到下游的真实服务器，
等下游的服务返回`response`之后再由一个`middleware`将它返回的`HttpResponseMessage`映射到`HttpResponse`上。   
#### Ocelot内部概念   
##### 上游 

`Ocelot`为上游：`Upstream`   

##### 下游   

`Ocelot` 下面映射的服务为下游：`Downstream`  

形象例子  
##### 主要功能  
1、路由   
1.1、接受客户端请求    
1.2、将客户端请求转转为下游地址   
1.3、调用下游服务，并返回结果    
1.4、将下服务返回的结果返回到前端   

2、认证   
3、授权  
4、负载均衡   
5、链路监控  
6、限流  
7、熔断降级   
8、请求聚合   
9、Service Fabric   
等其他功能    

`Ocelot`文档地址    

英文文档：`https://ocelot.readthedocs.io/en/latest/introduction/gettingstarted.html`

`Ocelot`如何使用

条件

1、`aspnetcore7`

2、`Ocelot`

3、团队微服务

4、`ocelot.json`文件

步骤

1、创建一个空的`asp.netcore7`项目

2、通过nuget安装`Ocelot`

3、创建`Ocelot`配置文件`ocelot.json`

要特别注意一下BaseUrl是我们外部暴露的Url，比如我们的Ocelot运行在http://123.111.1.1的一个地址上，但是前面有一个 nginx绑定了域名http://api.jessetalk.cn，那这里我们的BaseUrl就是 http://api.jessetalk.cn。

4、加载`ocelot.json`配置文件
``` C# 
 public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                    webBuilder.ConfigureAppConfiguration((hostingContext, config) =>
                    {
                        // 1、加载ocelot配置文件
                        config.AddJsonFile("ocelot.aggregate.json");
                    });
                });	
```
5、配置`Ocelot`依赖注入并加载配置文件
``` c# 
public void ConfigureServices(IServiceCollection services)
{
	services.AddOcelot()
}	
```
6、配置`Ocelot`中间件
``` C# 
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
if (env.IsDevelopment())
{
app.UseDeveloperExceptionPage();
}
app.UseOcelot().Wait();
}
```
`Ocelot`如何使用路由

一个路由完整配置

``` js
{
    "DownstreamPathTemplate": "/",
    "UpstreamPathTemplate": "/",
    "UpstreamHttpMethod": [
   	 "Get"
    ],
    "AddHeadersToRequest": {},
    "AddClaimsToRequest": {},
    "RouteClaimsRequirement": {},
    "AddQueriesToRequest": {},
    "RequestIdKey": "",
    "FileCacheOptions": {
    "TtlSeconds": 0,
    "Region": ""
    },
    "ReRouteIsCaseSensitive": false,
    "ServiceName": "",
    "DownstreamScheme": "http",
    "DownstreamHostAndPorts": [
    {
    "Host": "localhost",
    "Port": 51876,
    }
    ],
    "QoSOptions": {
    "ExceptionsAllowedBeforeBreaking": 0,
    "DurationOfBreak": 0,
    "TimeoutValue": 0
    },
    "LoadBalancer": "",
    "RateLimitOptions": {
    "ClientWhitelist": [],
    "EnableRateLimiting": false,
    "Period": "",
    "PeriodTimespan": 0,
    "Limit": 0
    },
    "AuthenticationOptions": {
    "AuthenticationProviderKey": "",
    "AllowedScopes": []
    },
    "HttpHandlerOptions": {
    "AllowAutoRedirect": true,
    "UseCookieContainer": true,
    "UseTracing": true
    },
    "UseServiceDiscovery": false
}
```
`Downstream`是下游服务配置    
`UpStream`是上游服务配置    
`Aggregates` 服务聚合配置    
`ServiceName`, `LoadBalancer`, `UseServiceDiscovery` 配置服务发现   
`AuthenticationOptions` 配置服务认证    
`RouteClaimsRequirement` 配置`Claims`鉴权    
`RateLimitOptions`为限流配置   
`FileCacheOptions` 缓存配置   
`QosOptions` 服务质量与熔断    
`DownstreamHeaderTransform`头信息转发   
路由基本使用   
``` js
"Routes":[
{
"DownstreamPathTemplate": "/api/Teams",
"DownstreamScheme": "https",
"DownstreamHostAndPorts": [
{
"Host": "localhost",
"Port": 5001,
}
],
"UpstreamPathTemplate": "/AggregateService",
"UpstreamHttpMethod": [ "Get"]
}
]
```
`DownstreamPathTemplate`：下游路径模板   
`DownstreamScheme`：下游服务`http schema`    
`DownstreamHostAndPorts`：下游服务的地址，如果使用`LoadBalancer`的话这里可以填多项      
`UpstreamPathTemplate`: 上游也就是用户输入的请求Url模板     
`UpstreamHttpMethod`: 上游请求http方法，可使用数组     
路由负载均衡     
``` js
"Routes":[
{
    "DownstreamPathTemplate": "/api/Teams",
    "DownstreamScheme": "https",
    "DownstreamHostAndPorts": [
            {
                "Host": "localhost",
                "Port": 5005,
            },
            {
                "Host": "localhost",
                "Port": 5003,
            }
        ],
    "LoadBalancerOptions": {
        "Type": "LeastConnection"
    },
    "UpstreamPathTemplate": "/AggregateService",
    "UpstreamHttpMethod": [ "Put", "Delete" ]
}
]    
```
`LoadBalancer`将决定负载均衡的算法    

`LeastConnection` – 最小活跃数算法    
`RoundRobin` – 轮询算法    
`NoLoadBalance` – 总是发往第一个请求或者是服务发现    
路由`Consul`负载均衡   
条件：   

1、`Ocelot.Provider.Consul`  

2、`Consul`  

3、`Ocelot`  

步骤   

1、通过`nuget`下载`Ocelot.Provider.Consul`   

2、添加`consul`依赖注入   
``` c# 
public void ConfigureServices(IServiceCollection services)
        {
            // 1、添加网关Ocelot到ioc容器
            services.AddOcelot().AddConsul();
        }
```
3、路由`consul`配置
``` js
"Routes":[
	{
        "DownstreamPathTemplate": "/api/teams",
        "DownstreamScheme": "https",
        "UpstreamPathTemplate": "/AggregateService",
        "UpstreamHttpMethod": [ "Get" ],
        "ServiceName": "AggregateService",
        "LoadBalancerOptions": {
            "Type": "LeastConnection"
        },
	}
]
```
多个路由配置(多项目)   
条件   

1、`TeamService`,`MemberService`   

2、`ocelot.team.json，ocelot.member.json`   

步骤  

1、创建`ocelot.team.json`，`ocelot.member.json`文件  

2、配置动态加载`ocelot.json`配置文件   
```c#
webBuilder.ConfigureAppConfiguration((hostingContext, config) =>
                    {
                        config
                            // .SetBasePath(hostingContext.HostingEnvironment.ContentRootPath)
                            // .AddJsonFile("appsettings.json", true, true)
                            // .AddJsonFile($"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json", true, true)
                            .AddOcelot(hostingContext.HostingEnvironment);
                        // .AddEnvironmentVariables();
                    });
```
会自动的加载配置文件，然后进行合并，主要用于大项目配置   

3、`ocelot`依赖注入配置   

``` C#
public void ConfigureServices(IServiceCollection services)
        {
            // 1、添加网关Ocelot到ioc容器
            services.AddOcelot()；
        }
```

路由聚合请求    

``` c#
{
    "Routes": [
    {
    "DownstreamPathTemplate": "/",
    "UpstreamPathTemplate": "/laura",
    "UpstreamHttpMethod": [
   		 "Get"
    ],
    "DownstreamScheme": "http",
    "DownstreamHostAndPorts": [
        {
            "Host": "localhost",
            "Port": 51881
        }
    ],
    "Key": "Laura"
    },
    {
    "DownstreamPathTemplate": "/",
    "UpstreamPathTemplate": "/tom",
    "UpstreamHttpMethod": [
    "Get"
    ],
    "DownstreamScheme": "http",
    "DownstreamHostAndPorts": [
    {
    "Host": "localhost",
    "Port": 51882
    }
    ],
    "Key": "Tom"
    }
    ],
    "Aggregates": [
        {
        "ReRouteKeys": [
            "Tom",
            "Laura"
        ],
        "UpstreamPathTemplate": "/"
        }
    ]
}

```

当我们请求/的时候，会将`/tom`和`/laura`两个结果合并到一个`response`返回      

``` js
{"Tom":{"Age": 19},"Laura":{"Age": 25}}
```

需要注意的是：    

聚合服务目前只支持返回json    
目前只支持Get方式请求下游服务   
任何下游的`response header`并会被丢弃
如果下游服务返回`404`，聚合服务只是这个`key`的`value`为空，它不会返回`404`   
有一些其它的功能会在将来实现    

下游服务很慢的处理   
做一些像 `GraphQL`的处理对下游服务返回结果进行处理    
`404`的处理    
路由服务质量与熔断   
条件   
 
1、`Ocelot.Provider.Polly`   

步骤   

1、在`ocelot`上添加熔断    

``` C# 
public void ConfigureServices(IServiceCollection services)
        {
            // 1、添加网关Ocelot到ioc容器
            services.AddOcelot(new ConfigurationBuilder().AddJsonFile("ocelot.aggregate.json").Build())
                .AddConsul()
                .AddPolly();
        }
```

2、添加熔断配置    

熔断的意思是停止将请求转发到下游服务。当下游服务已经出现故障的时候再请求也是功而返，并且增加下游服务器和API网关的负担。这个功能是用的Pollly来实现的，我们只需要为路由做一些简单配置即可
   
``` js
"Routes": [
"QoSOptions": {
    "ExceptionsAllowedBeforeBreaking":3,
    "DurationOfBreak":500,
    "TimeoutValue":5000
}
]    
```
`ExceptionsAllowedBeforeBreaking` 允许多少个异常请求    
`DurationOfBreak` 熔断的时间，单位为毫秒    
`TimeoutValue` 如果下游请求的处理时间超过多少则自动将请求设置为超时    
路由限流    

``` js
"Routes": [
"RateLimitOptions": {
    "ClientWhitelist": [],
    "EnableRateLimiting": true,
    "Period": "5m",
    "PeriodTimespan": 1,
    "Limit": 1
}
]
```

`ClientWihteList` 白名单    

`EnableRateLimiting` 是否启用限流    

`Period` 统计时间段：`1s`, `5m`, `1h`, `1d` 多长时间内只能请求多少次    

`PeroidTimeSpan` 多少秒之后客户端可以重试    

`Limit` 在统计时间段内允许的最大请求数量    

在 `GlobalConfiguration`下我们还可以进行以下配置    

``` js
"RateLimitOptions": {
  "DisableRateLimitHeaders": false,
  "QuotaExceededMessage": "Customize Tips!",
  "HttpStatusCode": 999,
  "ClientIdHeader" : "Test"
}
```

`Http`头 `X-Rate-Limit` 和 `Retry-After` 是否禁用     
`QuotaExceedMessage` 当请求过载被截断时返回的消息    
`HttpStatusCode` 当请求过载被截断时返回的`http status`    
`ClientIdHeader` 用来识别客户端的请求头，默认是 `ClientId`    
路由缓存    
`Ocelot`可以对下游请求结果进行缓存 ，目前缓存的功能还不是很强大。它主要是依赖于`CacheManager` 来实现的，我们只需要在路由下添加以下配置即可     
``` js
"Routes": [
"FileCacheOptions": { "TtlSeconds": 15, "Region": "somename" }
}
```
`Region`是对缓存进行的一个分区，我们可以调用`Ocelot`的 `administration API`来移除某个区下面的缓存 。     

路由认证(Identity Server4)     

步骤    

`Identity Server Bearer Tokens`      

添加`Identity Server`的认证也是一样        
``` C#
public void ConfigureServices(IServiceCollection services)
{
    var authenticationProviderKey = "TestKey";
    var options = o =>
        {
            o.Authority = "https://whereyouridentityserverlives.com";
            o.ApiName = "api";
            o.SupportedTokens = SupportedTokens.Both;
            o.ApiSecret = "secret";
        };

    services.AddAuthentication()
        .AddIdentityServerAuthentication(authenticationProviderKey, options);

    services.AddOcelot();
}
```

`Allowed Scopes`

这里的`Scopes`将从当前 `token` 中的 `claims`中来获取，我们的鉴权服务将依靠于它来实现 。当前路由的下游API需要某个权限时，我们需要在这里声明 。和`oAuth2`中的 `scope`意义一致。    

路由鉴权   
我们通过认证中的`AllowedScopes` 拿到`claims`之后，如果要进行权限的鉴别需要添加以下配置   

``` js
"RouteClaimsRequirement": {
    "UserType": "registered"
}
``` 

当前请求上下文的`token`中所带的`claims`如果没有 `name=”UserType”` 并且 `value=”registered”` 的话将无法访问下游服务。   

路由请求头转化   
请求头转发分两种：转化之后传给下游和从下游接收转化之后传给客户端。在`Ocelot`的配置里面叫做`Pre Downstream Request`和`Post Downstream Request`。目前的转化只支持查找和替换。我们用到的配置主要是 `UpstreamHeaderTransform 和 DownstreamHeaderTransform`

Pre Downstream Request

``` js
"Test": "http://www.bbc.co.uk/, http://ocelot.com/"
``` 
比如我们将客户端传过来的Header中的 Test 值改为 http://ocelot.com/之后再传给下游

``` js
 "UpstreamHeaderTransform": {
    "Test": "http://www.bbc.co.uk/, http://ocelot.com/"
},
```
Post Downstream Request

而我们同样可以将下游Header中的Test再转为 http://www.bbc.co.uk/之后再转给客户端。
``` js
"DownstreamHeaderTransform": {
    "Test": "http://www.bbc.co.uk/, http://ocelot.com/"
},
```
全局配置
``` C# 
 {
 "Routes": [],
      "Aggregates": [],
       "GlobalConfiguration": {
     "RequestIdKey": null,
     "ServiceDiscoveryProvider": {
       "Host": "192.168.80.100", // Consul Service IP
       "Port": 8500 // Consul Service Port`
     },`
      "RateLimitOptions": {
        "DisableRateLimitHeaders": false, // Http头  X-Rate-Limit 和 Retry-After 是否禁用`
        "QuotaExceededMessage": "你的访问过于频繁请稍后在试", // 当请求过载被截断时返回的消息`
        "HttpStatusCode": 253, // 当请求过载被截断时返回的http status`
        "ClientIdHeader": "client_id" // 用来识别客户端的请求头，默认是 ClientId`
      },
      "QoSOptions": {
        "ExceptionsAllowedBeforeBreaking": 3,
        "DurationOfBreak": 5000,
        "TimeoutValue": 5000`
      },`
      "BaseUrl": null,
      "LoadBalancerOptions": {
        "Type": "LeastConnection",
        "Key": null,
        "Expiry": 0
      },
  "DownstreamScheme": "http",
    "HttpHandlerOptions": {
     "AllowAutoRedirect": false,
     "UseCookieContainer": false,
     "UseTracing": false`
     }
   }
 }

```

万能模板
``` js
{
      ``"DownstreamPathTemplate": "/{url}",
      ``"DownstreamScheme": "http",
      ``"DownstreamHostAndPorts": [
        ``{
          ``"Host": "localhost",
          ``"Port": 5002
        ``}
      ``],
      ``"UpstreamPathTemplate": "/{url}",
      ``"UpstreamHttpMethod": [ "Get" ]
}
```
动态路由
``` C# 
{
 "Routes": [],
 "Aggregates": [],
 "GlobalConfiguration": {
   "ServiceDiscoveryProvider": {
     "Host": "localhost",
     "Port": 8500,
     "Type": "Consul",
     "Token": null,
     "ConfigurationKey": null
   },
   "LoadBalancerOptions": {
     "Type": "LeastConnection",
     "Key": null,
     "Expiry": 0
   },
   "DownstreamScheme": "https"
 }
}
```  