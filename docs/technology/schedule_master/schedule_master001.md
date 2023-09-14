---
title: "分布式任务调度中间件ScheduleMaster"
date: 2023-09-13
tags:
  - "dotnet core"
  - "C#"
  - "中间件"
  - "分布式任务调度中间件ScheduleMaster"
categories:
  - "C#"
---

## 目录

[[toc]]

## 分布式任务调度中间件 ScheduleMaster

[分布式任务调度 ScheduleMaster ](https://www.cnblogs.com/yuxl01/archive/2022/05/28/16311534.html)

### 什么是 ScheduleMaster

[ScheduleMaster](https://github.com/hey-hoho/ScheduleMasterCore)是分布式任务调度系统,是国内的一位开发者写的。简称：集中任务调度系统，最简单的理解 ScheduleMaster，就是对不同的系统里面的调度任务做统一管理的框架。

例如我们现在有多个系统，每个系统针对自己处理不同的业务场景。衍生出自己的调度任务，想象一下，如果每个系统人为去维护，那随着调度任务越来越多，人是崩溃的吧，可见维护和技术成本是巨大的，这时我们需要选择分布式任务系统框架做统一的管理

![Alt text](/images/schedulemaster/schedule_master001_001image.png)

### 什么地方使用 ScheduleMaster

ScheduleMaster 主要用在微服务系统中。单体系统中，图片资源是比较少的，所以，没有必要使用分布式文件系统

### 微服务系统中为什么要使用 ScheduleMaster

微服务系统有很多，包含电商微服务系统，包含 OA 微服务系统，以及其他不同微服务系统。主要通过电商微服务系统来进行举例说明为什么要使用 ScheduleMaster？先得到一个电商微服务系统。

### 电商微服务系统

![Alt text](/images/schedulemaster/schedule_master001_002image.png)

在微服务电商系统中，我们主要看一个业务场景，创建订单业务场景。

创建订单实现过程，客户端发起创建订单请求—>电商系统—->订单微服务—>订单数据库。

我们再看另外一个业务场景，创建支付业务场景。

创建支付实现过程，客户端发起创建支付请求—>电商网站—->支付微服务—>支付数据库。

每创建一个订单会消耗一个商品库存，所以订单会有一个过期时间。用来回收商品库存，以便其他人使用。一般订单过期时间为 30 分钟。订单超过 30 分钟为超时订单。

每根据一个订单创建一个支付。不管是用微信支付还是支付宝支付，支付都是有过期时间的，一般支付过期时间为 30 分钟。支付超过 30 分钟则为超时支付。

所以：

1、如何回收超时订单数据

2、如何回收超时支付数据

方案：定时任务

### 电商微服务系统-定时任务

为了方便业务系统更好的接入调度系统，创建任务不仅可以在控制台中实现，系统也提供了 WebAPI 供业务系统使用代码接入，这种方式对延时任务来说尤其重要。

![Alt text](/images/schedulemaster/schedule_master001_003image.png)

图中展示：订单微服务、支付微服务中，都会集成定时任务框架，然后分别使用定时任务框架进行超时订单回收，超时支付回收

如果微服务数量过多，每一个微服务都需要定时回收任务，那么就需要在每一个微服务中集成定时任务框架，然后在每一个微服务中实现定时任务的代码。就会导致维护量增大。因为所有微服务定时任务代码，都需要独立维护。如何降低维护量？

方案：ScheduleMaster

### 电商微服务系统-ScheduleMaster

![Alt text](/images/schedulemaster/schedule_master001_004image.png)

图中展示：订单微服务、支付微服务中集成的定时任务框架，独立抽取出来，放到独立进程 ScheduleMaster 中。然后让 ScheduleMaster 对订单微服务的超时订单进行定时回收、对支付微服务的超时支付进行定时回收

总结：这就是我们在电商系统中使用 ScheduleMaster 原因

1、先从单体电商系统分析

2、然后再从电商微服务系统分析

3、最后引入 ScheduleMaster

4、由此得到微服务系统中为什么要使用 ScheduleMaster

### 微服务系统中如何落地 ScheduleMaster

前提：

1、电商微服务系统

2、ScheduleMaster

3、MySQL8.0.23

步骤

1、电商微服务系统准备

​ 通过 VS 创建.Net7 电商微服务系统

![Alt text](/images/schedulemaster/schedule_master001_005image.png)

2、ScheduleMaster 准备

​ 下载地址：https://gitee.com/hey-hoho/ScheduleMaster.git

​ 如图所示
![Alt text](/images/schedulemaster/schedule_master001_006image.png)

​ 文档地址：https://github.com/hey-hoho/ScheduleMaster/wiki  
3、MySQL8.准备

略....

### 超时订单回收业务场景落地

条件

1、订单微服务 LKN.Order.Service

2、Hos.ScheduleMaster.Web

3、Hos.ScheduleMaster.QuartzHost

4、客户端访问

步骤

1、先进入到电商微服务系统 LKN.Order.Service

​ 1.1 先在电商网站中创建 ProductController 类

![Alt text](/images/schedulemaster/schedule_master001_007image.png)

1.2 然后在 ProductController 类中添加代码

```C#
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LKN.Order.Service.Controllers
{
   [ApiController]
   [Route("[controller]")]
   public class OrderController : ControllerBase
   {

       private readonly ILogger<OrderController> _logger;

       public OrderController(ILogger<OrderController> logger)
       {
           _logger = logger;
       }

       /// <summary>
       /// 超时订单回收
       /// </summary>
       /// <returns></returns>
       [HttpPost]
       public IActionResult OrderCancel()
       {
           //1、超时订单回收
           _logger.LogInformation("回收超时订单");

           return Ok();
       }
   }
}
```

​ 1.3 然后通过 CMD 启动 LKN.Order.Service

```bash
dotnet run
```

![Alt text](/images/schedulemaster/schedule_master001_008image.png)

2、Hos.ScheduleMaster.Web 准备

​ 2.1、进入到 Hos.ScheduleMaster.Web publish 目录中

![Alt text](/images/schedulemaster/schedule_master001_009image.png)

2.2、进入到 appsetting.json 文件中，增加配置

```yml
{
  "Logging":
    {
      "LogLevel":
        {
          "Default": "Information",
          "Microsoft": "Warning",
          "Microsoft.Hosting.Lifetime": "Information",
        },
    },
  "AllowedHosts": "*",
  ? /*
    Provider的可选值：sqlserver、postgresql、mysql，默认为mysql
    ConnectionString是对应数据库类型的连接字符串，格式示例：
    - sqlserver："Persist Security Info = False; User ID =sa; Password =123456; Initial Catalog =schedule_master; Server =."
    - postgresql："Server=localhost;Port=5432;Database=schedule_master;User Id=postgres;Password=123456;Pooling=true;MaxPoolSize=20;"
    - mysql："Data Source=localhost;Database=schedule_master;User ID=root;Password=123456;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true"
    */
    "DbConnector"
  : {
      "Provider": "mysql",
      "ConnectionString": "Data Source=localhost;Database=schedule_master;User ID=root;Password=root;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true",
    },
  "AppSettings": { "AdminDefaultPwd": "111111" },
  "NodeSetting":
    {
      "IdentityName": "master-node",
      "Role": "master",
      "Protocol": "http",
      "IP": "localhost",
      "Port": 30000,
    },
}
```

​ 2.3、进入到`Hos.ScheduleMaster.Web publish`目录中

![Alt text](/images/schedulemaster/schedule_master001_010image.png)  
2.4、然后使用 CMD 启动`Hos.ScheduleMaster.Web`

​ 在 CMD 中输入命令：`dotnet Hos.ScheduleMaster.Web.dll`

2.5、ScheduleMaster 启动是否成功

​ 进入浏览器访问 ScheduleMaster 后台管理系统

​ 1、然后进入浏览器访问 http://localhost:30000

![Alt text](/images/schedulemaster/schedule_master001_011image.png)

​ 2、输入 Hos.ScheduleMaster.Web 用户名和密码

​ 用户名：admin 密码：111111

![Alt text](/images/schedulemaster/schedule_master001_012image.png)

3、Hos.ScheduleMaster.QuartzHost 准备

​ 3.1、进入到 Hos.ScheduleMaster.QuartzHost publish 目录中

![Alt text](/images/schedulemaster/schedule_master001_013image.png)

​ 3.2、进入到 appsetting.json 文件中，增加配置

```yml
{
  "Logging":
    {
      "LogLevel":
        {
          "Default": "Information",
          "Microsoft": "Warning",
          "Microsoft.Hosting.Lifetime": "Information",
        },
    },
  "AllowedHosts": "*",
  ? /*
    Provider的可选值：sqlserver、postgresql、mysql，默认为mysql
    ConnectionString是对应数据库类型的连接字符串，格式示例：
    - sqlserver："Persist Security Info = False; User ID =sa; Password =123456; Initial Catalog =schedule_master; Server =."
    - postgresql："Server=localhost;Port=5432;Database=schedule_master;User Id=postgres;Password=123456;Pooling=true;MaxPoolSize=20;"
    - mysql："Data Source=localhost;Database=schedule_master;User ID=root;Password=123456;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true"
    */
    "DbConnector"
  : {
      "Provider": "mysql",
      "ConnectionString": "Data Source=localhost;Database=schedule_master;User ID=root;Password=root;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true",
    },
  "NodeSetting":
    {
      "IdentityName": "worker1",
      "Role": "worker",
      "Protocol": "http",
      "IP": "localhost",
      "Port": 30001,
      "Priority": 3,
      "MaxConcurrency": 20,
    },
}
```

​ 3.3、进入到 Hos.ScheduleMaster.QuartzHost publish 目录中

![Alt text](/images/schedulemaster/schedule_master001_014image.png)

3.2、然后使用 CMD 启动 Hos.ScheduleMaster.QuartzHost

​ 在 CMD 中输入命令：`dotnet Hos.ScheduleMaster.QuartzHost.dll –urls http://*:30001`

3.3、Hos.ScheduleMaster.Web 启动是否成功

​ 进入浏览器访问 Hos.ScheduleMaster.Web 后台管理系统节点管理

![Alt text](/images/schedulemaster/schedule_master001_015image.png)

​ 如图所示：work1 节点状态运行状态，意味着成功

4、超时订单任务设置

​ 4.1、进入到 Hos.ScheduleMaster.Web 后台管理系统，任务列表

![Alt text](/images/schedulemaster/schedule_master001_016image.png)

​ 4.2、然后点击创建任务，创建 HTTP 任务，基础信息

![Alt text](/images/schedulemaster/schedule_master001_017image.png)

​ 4.3、然后创建 Http 接口信息

![Alt text](/images/schedulemaster/schedule_master001_018image.png)

4.4、进人任务列表，查看任务状态

![Alt text](/images/schedulemaster/schedule_master001_019image.png)

5、任务执行结果

​ 5.1、Hos.ScheduleMaster.Web 查看结果

​ 5.1.1、进入到任务列表，点击订单任务日志

![Alt text](/images/schedulemaster/schedule_master001_020image.png)

5.1.2、然后查看运行结果

![Alt text](/images/schedulemaster/schedule_master001_021image.png)

5.2、订单微服务查看结果

![Alt text](/images/schedulemaster/schedule_master001_022image.png)

### 超时订单回收执行原理

如图所示：

![Alt text](/images/schedulemaster/schedule_master001_023image.png)

任务全局执行流程：客户端—–>master——>work—–>订单微服务

1、master 节点主要做了两件事情

​ 1、选择 work 节点

​ 2、指定 work 执行任务

​ 除了这两件事情之外，还做了另外两件事情

​ 3、对 work 节点进行健康检查

​ 4、对任务进行故障转移

2、work 节点主要做了两件事情

​ 1、取出任务配置信息

​ 2、使用 Quartz 根据配置运行任务

​ 2.1、使用反射调用程序集

​ 2.2、使用 httpclient 调用 http 接口

##### 数据库

![Alt text](/images/schedulemaster/schedule_master001_024image.png)

如图所示：

​ 表结构设计为 3 大块组成

​ 1、任务表 ：任务表以 schedules 表为代表

​ 2、节点表：节点表以 servernodes 表为代表

​ 3、系统表：系统表以系 systemusers 为代表

​ 这三个表为主表，这三个表在启动 Hos.ScheduleMaster.Web 项目的时候，会启动进行创建。记录了任务信息，节点信息，用户信息。

#### 添加任务原理

#### 源码结构

订单超时任务如何添加到数据库中，源码结构如图所示

![Alt text](/images/schedulemaster/schedule_master001_025image.png)

1、进入到 Hos.ScheduleMaster.Web 项目中，找到 ScheduleController

![Alt text](/images/schedulemaster/schedule_master001_026image.png)

2、进入 ScheduleController 控制器中，找到 Create 方法

```c#
/// <summary>
       /// 创建任务
       /// </summary>
       /// <param name="task"></param>
       /// <returns></returns>
       [HttpPost]
       public async Task<ActionResult> Create(ScheduleInfo task)
       {
           if (!ModelState.IsValid)
           {
               return this.JsonNet(false, "数据验证失败！");
           }
           var admin = CurrentAdmin;
           ScheduleEntity main = new ScheduleEntity
           {
               MetaType = task.MetaType,
               CronExpression = task.CronExpression,
               EndDate = task.EndDate,
               Remark = task.Remark,
               StartDate = task.StartDate,
               Title = task.Title,
               Status = (int)ScheduleStatus.Stop,
               CustomParamsJson = task.CustomParamsJson,
               RunLoop = task.RunLoop,
               TotalRunCount = 0,
               CreateUserName = admin.UserName
           };
           if (task.MetaType == (int)ScheduleMetaType.Assembly)
           {
               main.AssemblyName = task.AssemblyName;
               main.ClassName = task.ClassName;
           }
           ScheduleHttpOptionEntity httpOption = null;
           if (task.MetaType == (int)ScheduleMetaType.Http)
           {
               httpOption = new ScheduleHttpOptionEntity
               {
                   RequestUrl = task.HttpRequestUrl,
                   Method = task.HttpMethod,
                   ContentType = task.HttpContentType,
                   Headers = task.HttpHeaders,
                   Body = task.HttpBody
               };
           }
           var result = _scheduleService.Add(main, httpOption, task.Keepers, task.Nexts, task.Executors);
           if (result.Status == ResultStatus.Success)
           {
               if (task.RunNow)
               {
                   var start = await _scheduleService.Start(main);
                   return this.JsonNet(true, "任务创建成功！启动状态为：" + (start.Status == ResultStatus.Success ? "成功" : "失败"), Url.Action("Index"));
               }
               return this.JsonNet(true, "任务创建成功！", Url.Action("Index"));
           }
           return this.JsonNet(false, "任务创建失败！");
       }
```

3、进入 Create 方法中，找到 IScheduleService，IScheduleService 实现类在 Hos.ScheduleMaster.Core 项目中

![Alt text](/images/schedulemaster/schedule_master001_027image.png)

​4、进入 ScheduleService 类中，找到 Add 方法

```C#
/// <summary>
        /// 添加一个任务
        /// </summary>
        /// <param name="model"></param>
        /// <param name="httpOption"></param>
        /// <param name="keepers"></param>
        /// <param name="nexts"></param>
        /// <param name="executors"></param>
        /// <returns></returns>
        public ServiceResponseMessage Add(ScheduleEntity model, ScheduleHttpOptionEntity httpOption, List<int> keepers, List<Guid> nexts, List<string> executors = null)
        {
            if (executors == null || !executors.Any())
            {
                //没有指定worker就根据权重选择2个
                executors = _nodeService.GetAvaliableWorkerByPriority(null, 2).Select(x => x.NodeName).ToList();
            }
            if (!executors.Any())
            {
                return ServiceResult(ResultStatus.Failed, "没有可用节点!");
            }
            model.CreateTime = DateTime.Now;
            var user = _repositoryFactory.SystemUsers.FirstOrDefault(x => x.UserName == model.CreateUserName);
            if (user != null)
            {
                model.CreateUserId = user.Id;
            }
            //保存主信息
            _repositoryFactory.Schedules.Add(model);
            //创建并保存任务锁
            _repositoryFactory.ScheduleLocks.Add(new ScheduleLockEntity { ScheduleId = model.Id, Status = 0 });
            //保存http数据
            if (httpOption != null)
            {
                httpOption.ScheduleId = model.Id;
                _repositoryFactory.ScheduleHttpOptions.Add(httpOption);
            }
            //保存运行节点
            _repositoryFactory.ScheduleExecutors.AddRange(executors.Select(x => new ScheduleExecutorEntity
            {
                ScheduleId = model.Id,
                WorkerName = x
            }));
            //保存监护人
            if (keepers != null && keepers.Count > 0)
            {
                _repositoryFactory.ScheduleKeepers.AddRange(keepers.Select(x => new ScheduleKeeperEntity
                {
                    ScheduleId = model.Id,
                    UserId = x
                }));
            }
            //保存子任务
            if (nexts != null && nexts.Count > 0)
            {
                _repositoryFactory.ScheduleReferences.AddRange(nexts.Select(x => new ScheduleReferenceEntity
                {
                    ScheduleId = model.Id,
                    ChildId = x
                }));
            }
            //事务提交
            if (_unitOfWork.Commit() > 0)
            {
                return ServiceResult(ResultStatus.Success, "任务创建成功!", model.Id);
            }
            return ServiceResult(ResultStatus.Failed, "数据保存失败!");
        }

```

​5、进入 Add 方法中，找到 RepositoryFactory 类

![Alt text](/images/schedulemaster/schedule_master001_028image.png)

​ 6、进入 RepositoryFactory 类中，找到

```C#
//------------------------------------------------------------------------------
// <auto-generated>
// 此文件由T4模板生成，请勿手动修改
// by hoho
// 06/18/2020 11:40:59
// </auto-generated>
//------------------------------------------------------------------------------


using Hos.ScheduleMaster.Core.Models;

namespace Hos.ScheduleMaster.Core.Repository
{
	[ServiceMapTo(typeof(RepositoryFactory))]
    public class RepositoryFactory
    {
        private SmDbContext _context;

        public RepositoryFactory(SmDbContext context)
        {
            _context = context;
        }


	public BaseRepository<ScheduleDelayedEntity> ScheduleDelayeds => new BaseRepository<ScheduleDelayedEntity>(_context);


	public BaseRepository<ScheduleEntity> Schedules => new BaseRepository<ScheduleEntity>(_context);
    ......
  }
  }
```

#### 任务启动原理

1、进入 ScheduleController 控制器中，找到\_scheduleService.Add()方法

![Alt text](/images/schedulemaster/schedule_master001_029image.png)

2、然后进入到 IScheduleService 中，找到 Start 方法

```c#
/// <summary>
        /// 启动一个任务
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public async Task<ServiceResponseMessage> Start(ScheduleEntity model)
        {
            if (model == null) return ServiceResult(ResultStatus.Failed, "任务信息不能为空！");
            if (model.Status != (int)ScheduleStatus.Stop)
            {
                return ServiceResult(ResultStatus.Failed, "任务在停止状态下才能启动！");
            }
            if (model.EndDate.HasValue && model.EndDate < DateTime.Now)
            {
                return ServiceResult(ResultStatus.Failed, "任务结束时间不能小于当前时间！");
            }
            return await InnerStart(model.Id);
        }
```

3、然后在 Start 方法中，找到 InnerStart 方法

```c#
private async Task<ServiceResponseMessage> InnerStart(Guid sid)
        {
            //启动任务
            bool success = await _workerDispatcher.ScheduleStart(sid);
            if (success)
            {
                //启动成功后更新任务状态为运行中
                _repositoryFactory.Schedules.UpdateBy(m => m.Id == sid, m => new ScheduleEntity
                {
                    Status = (int)ScheduleStatus.Running
                });
                if (await _unitOfWork.CommitAsync() > 0)
                {
                    return ServiceResult(ResultStatus.Success, "任务启动成功!");
                }
                return ServiceResult(ResultStatus.Failed, "更新任务状态失败!");
            }
            else
            {
                await _workerDispatcher.ScheduleStop(sid);
                _repositoryFactory.Schedules.UpdateBy(m => m.Id == sid, m => new ScheduleEntity
                {
                    Status = (int)ScheduleStatus.Stop,
                    NextRunTime = null
                });
                await _unitOfWork.CommitAsync();
                return ServiceResult(ResultStatus.Failed, "任务启动失败!");
            }
        }
```

4、然后在 InnerStart 方法中，找到 WorkerDispatcher 类

![Alt text](/images/schedulemaster/schedule_master001_030image.png)

5、然后在 WorkerDispatcher 类中，找到 ScheduleStart 方法

```C#
public async Task<bool> ScheduleStart(Guid sid)
        {
            return await DispatcherHandler(sid, async (ServerNodeEntity node) =>
             {
                 _scheduleClient.Server = node;
                 return await _scheduleClient.Start(sid);
             });
        }
```

​ 5.1、然后在 ScheduleStart 方法中，找到 DispatcherHandler

```C#
private async Task<bool> DispatcherHandler(Guid sid, RequestDelegate func)
        {
            var nodeList = _nodeService.GetAvaliableWorkerForSchedule(sid);
            if (nodeList.Any())
            {
                foreach (var item in nodeList)
                {
                    if (!await func(item))
                    {
                        return false;
                    }
                }
                return true;
            }
            throw new InvalidOperationException("running worker not found.");
        }

```

​ 5.2、然后在 ScheduleStart 方法中，找到 ScheduleServiceClient 类

![Alt text](/images/schedulemaster/schedule_master001_031image.png)

6、然后在 ScheduleServiceClient 类中，找到 Start 方法

```C#
public async Task<bool> Start(Guid sid)
        {
            return await PostRequest("/api/quartz/start", sid);
        }

```

​ 7、进入到 Hos.ScheduleMaster.QuartzHost 项目中，找到 QuartzController 类

![Alt text](/images/schedulemaster/schedule_master001_032image.png)

​ 8、进入到 QuartzController 类中，找到 Start 方法

```C#
[HttpPost]
        public async Task<IActionResult> Start([FromForm]Guid sid)
        {
            bool success = await QuartzManager.StartWithRetry(sid);
            if (success) return Ok();
            return BadRequest();
        }
```

​ 9、进入到 Start 方法中，找到 QuartzManager 类

![Alt text](/images/schedulemaster/schedule_master001_033image.png)

​ 10、进入到 QuartzManager 类，找到 StartWithRetry 方法

``` C#
/// <summary>
        /// 启动一个任务，带重试机制
        /// </summary>
        /// <param name="task"></param>
        /// <returns></returns>
        public static async Task<bool> StartWithRetry(Guid sid)
        {
            var jk = new JobKey(sid.ToString().ToLower());
            if (await _scheduler.CheckExists(jk))
            {
                return true;
            }
            ScheduleContext context = GetScheduleContext(sid);
            IHosSchedule schedule = await HosScheduleFactory.GetHosSchedule(context);
            try
            {
                for (int i = 0; i < 3; i++)
                {
                    try
                    {
                        await Start(schedule);
                        return true;
                    }
                    catch (SchedulerException sexp)
                    {
                        LogHelper.Error($"任务启动失败！开始第{i + 1}次重试...", sexp, context.Schedule.Id);
                    }
                }
                //最后一次尝试
                await Start(schedule);
                return true;
            }
            catch (SchedulerException sexp)
            {
                LogHelper.Error($"任务所有重试都失败了，已放弃启动！", sexp, context.Schedule.Id);
                return false;
            }
            catch (Exception exp)
            {
                LogHelper.Error($"任务启动失败！", exp, context.Schedule.Id);
                return false;
            }
        }
```
​10.1、进入到StartWithRetry方法中，找到HosScheduleFactory类 

![Alt text](/images/schedulemaster/schedule_master001_034image.png)


10.2、进入到HosScheduleFactory类中，找到GetHosSchedule方法
```C#
public static async Task<IHosSchedule> GetHosSchedule(ScheduleContext context)
        {
            IHosSchedule result;
            switch ((ScheduleMetaType)context.Schedule.MetaType)
            {
                case ScheduleMetaType.Assembly:
                    {
                        result = new AssemblySchedule();
                        await LoadPluginFile(context.Schedule);
                        break;
                    }
                case ScheduleMetaType.Http:
                    {
                        result = new HttpSchedule();
                        break;
                    }
                default: throw new InvalidOperationException("unknown schedule type.");
            }
            result.Main = context.Schedule;
            result.CustomParams = ConvertParamsJson(context.Schedule.CustomParamsJson);
            result.Keepers = context.Keepers;
            result.Children = context.Children;
            result.CancellationTokenSource = new System.Threading.CancellationTokenSource();
            result.CreateRunnableInstance(context);
            result.RunnableInstance.TaskId = context.Schedule.Id;
            result.RunnableInstance.CancellationToken = result.CancellationTokenSource.Token;
            result.RunnableInstance.Initialize();
            return result;
        }
 ```
11、进入到QuartzManager类，找到Start方法

``` C#
private static async Task Start(IHosSchedule schedule)
        {
            JobDataMap map = new JobDataMap
            {
                new KeyValuePair<string, object> ("instance",schedule),
            };
            string jobKey = schedule.Main.Id.ToString();
            try
            {
                IJobDetail job = JobBuilder.Create().OfType(schedule.GetQuartzJobType()).WithIdentity(jobKey).UsingJobData(map).Build();
			//添加监听器
            var listener = new JobRunListener(jobKey);
            listener.OnSuccess += StartedEvent;
            _scheduler.ListenerManager.AddJobListener(listener, KeyMatcher<JobKey>.KeyEquals(new JobKey(jobKey)));

            ITrigger trigger = GetTrigger(schedule.Main);
            await _scheduler.ScheduleJob(job, trigger, schedule.CancellationTokenSource.Token);

            using (var scope = new Core.ScopeDbContext())
            {
                var db = scope.GetDbContext();
                var task = db.Schedules.FirstOrDefault(x => x.Id == schedule.Main.Id);
                if (task != null)
                {
                    task.NextRunTime = TimeZoneInfo.ConvertTimeFromUtc(trigger.GetNextFireTimeUtc().Value.UtcDateTime, TimeZoneInfo.Local);
                    await db.SaveChangesAsync();
                }
            }
        }
        catch (Exception ex)
        {
            throw new SchedulerException(ex);
        }
        LogHelper.Info($"任务[{schedule.Main.Title}]启动成功！", schedule.Main.Id);

        _ = Task.Run(async () =>
          {
              while (true)
              {
                  if (schedule.RunnableInstance == null) break;
                  var log = schedule.RunnableInstance.ReadLog();
                  if (log != null)
                  {
                      LogManager.Queue.Write(new SystemLogEntity
                      {
                          Category = log.Category,
                          Message = log.Message,
                          ScheduleId = log.ScheduleId,
                          Node = log.Node,
                          StackTrace = log.StackTrace,
                          TraceId = log.TraceId,
                          CreateTime = log.CreateTime
                      });
                  }
                  else
                  {
                      await Task.Delay(3000);
                  }
              }
          });
    }
```
​ 12、Start方法为最核心方法。使用Quartz框架进行任务调度

![Alt text](/images/schedulemaster/schedule_master001_035image.png)


### 超时订单回收程序集场景






















## API自定义任务
### API Server 对接流程

对于开放接口来说，使用签名验证已经是必不可少的一环，这是保证系统安全性的重要手段。看一下核心对接流程：

- 在控制台中创建好专用的API对接用户账号。

- 使用对接账号的用户名设置为http header中的`ms_auth_user`值。

- 使用经过哈希运算过的秘钥设置为http header中的`ms_auth_secret值`，计算规则：按{用户名}{hash(密码)}{用户名}的格式拼接得到字符串str，然后再对str做一次hash运算即得到最终秘钥，hash函数是小写的32位MD5算法。

- 使用form格式发起http调用，如果非法用户会返回401-Unauthorized。


代码示例：
```c#
    HttpClient client = new HttpClient();
    client.DefaultRequestHeaders.Add("ms_auth_user", "admin");
    client.DefaultRequestHeaders.Add("ms_auth_secret", SecurityHelper.MD5($"admin{SecurityHelper.MD5("111111")}}admin"));
````

> 签名验证这块设计的比较简单，具体源码逻辑可以参考`Hos.ScheduleMaster.Web.Filters.AccessControlFilter`。

<br />

#### API 返回格式

所有接口采用统一的返回格式，字段如下：

| 参数名称 | 参数类型 | 说明                                                             |
| -------- | -------- | ---------------------------------------------------------------- |
| Success  | bool     | 是否成功                                                         |
| Status   | int      | 结果状态，0-请求失败 1-请求成功 2-登录失败 3-参数异常 4-数据异常 |
| Message  | string   | 返回的消息                                                       |
| Data     | object   | 返回的数据                                                       |

<br />

#### 创建程序集任务

- 接口地址：`http://yourip:30000/api/task/create`

- 请求类型：`POST`

- 参数格式：`application/x-www-form-urlencoded`

- 返回结果：创建成功返回任务 id

- 参数列表：

| 参数名称       | 参数类型                  | 是否必填 | 说明                                                                   |
| -------------- | ------------------------- | -------- | ---------------------------------------------------------------------- |
| MetaType       | int                       | 是       | 任务类型，这里固定是 1                                                 |
| Title          | string                    | 是       | 任务名称                                                               |
| RunLoop        | bool                      | 是       | 是否按周期执行                                                         |
| CronExpression | string                    | 否       | cron 表达式，如果 RunLoop 为 true 则必填                               |
| AssemblyName   | string                    | 是       | 程序集名称                                                             |
| ClassName      | string                    | 是       | 执行类名称，包含完整命名空间                                           |
| StartDate      | DateTime                  | 是       | 任务开始时间                                                           |
| EndDate        | DateTime                  | 否       | 任务停止时间，为空表示不限停止时间                                     |
| Remark         | string                    | 否       | 任务描述说明                                                           |
| Keepers        | List&lt;int&gt;           | 否       | 监护人 id                                                              |
| Nexts          | List&lt;guid&gt;          | 否       | 子级任务 id                                                            |
| Executors      | List&lt;string&gt;        | 否       | 执行节点名称                                                           |
| RunNow         | bool                      | 否       | 创建成功是否立即启动                                                   |
| Params         | List&lt;ScheduleParam&gt; | 否       | 自定义参数列表，也可以通过 CustomParamsJson 字段直接传 json 格式字符串 |

ScheduleParam：

| 参数名称    | 参数类型 | 是否必填 | 说明     |
| ----------- | -------- | -------- | -------- |
| ParamKey    | string   | 是       | 参数名称 |
| ParamValue  | string   | 是       | 参数值   |
| ParamRemark | string   | 否       | 参数说明 |

代码示例：

```c#
    HttpClient client = new HttpClient();
    List<KeyValuePair<string, string>> args = new List<KeyValuePair<string, string>>();
    args.Add(new KeyValuePair<string, string>("MetaType", "1"));
    args.Add(new KeyValuePair<string, string>("RunLoop", "true"));
    args.Add(new KeyValuePair<string, string>("CronExpression", "33 0/8 * * * ?"));
    args.Add(new KeyValuePair<string, string>("Remark", "By Xunit Tester Created"));
    args.Add(new KeyValuePair<string, string>("StartDate", DateTime.Today.ToString("yyyy-MM-dd HH:mm:ss")));
    args.Add(new KeyValuePair<string, string>("Title", "程序集接口测试任务"));
    args.Add(new KeyValuePair<string, string>("AssemblyName", "Hos.ScheduleMaster.Demo"));
    args.Add(new KeyValuePair<string, string>("ClassName", "Hos.ScheduleMaster.Demo.Simple"));
    args.Add(new KeyValuePair<string, string>("CustomParamsJson", "[{\"ParamKey\":\"k1\",\"ParamValue\":\"1111\",\"ParamRemark\":\"r1\"},{\"ParamKey\":\"k2\",\"ParamValue\":\"2222\",\"ParamRemark\":\"r2\"}]"));
    args.Add(new KeyValuePair<string, string>("Keepers", "1"));
    args.Add(new KeyValuePair<string, string>("Keepers", "2"));
    //args.Add(new KeyValuePair<string, string>("Nexts", ""));
    //args.Add(new KeyValuePair<string, string>("Executors", ""));
    HttpContent reqContent = new FormUrlEncodedContent(args);
    var response = await client.PostAsync("http://localhost:30000/api/Task/Create", reqContent);
    var content = await response.Content.ReadAsStringAsync();
    Debug.WriteLine(content);
```

> 要提一下的是，使用 API 创建任务的方式不支持上传程序包，所以在任务需要启动时要确保程序包已通过其他方式上传，否则会启动失败。

<br />

#### 创建 HTTP 任务

- 接口地址：`http://yourip:30000/api/task/create`

- 请求类型：`POST`

- 参数格式：`application/x-www-form-urlencoded`

- 返回结果：创建成功返回任务 id

- 参数列表：

| 参数名称        | 参数类型           | 是否必填 | 说明                                                                                                                |
| --------------- | ------------------ | -------- | ------------------------------------------------------------------------------------------------------------------- |
| MetaType        | int                | 是       | 任务类型，这里固定是 2                                                                                              |
| Title           | string             | 是       | 任务名称                                                                                                            |
| RunLoop         | bool               | 是       | 是否按周期执行                                                                                                      |
| CronExpression  | string             | 否       | cron 表达式，如果 RunLoop 为 true 则必填                                                                            |
| StartDate       | DateTime           | 是       | 任务开始时间                                                                                                        |
| EndDate         | DateTime           | 否       | 任务停止时间，为空表示不限停止时间                                                                                  |
| Remark          | string             | 否       | 任务描述说明                                                                                                        |
| HttpRequestUrl  | string             | 是       | 请求地址                                                                                                            |
| HttpMethod      | string             | 是       | 请求方式，仅支持 GET\POST\PUT\DELETE                                                                                |
| HttpContentType | string             | 是       | 参数格式，仅支持 application/json 和 application/x-www-form-urlencoded                                              |
| HttpHeaders     | string             | 否       | 自定义请求头，ScheduleParam 列表的 json 字符串                                                                      |
| HttpBody        | string             | 是       | 如果是 json 格式参数，则是对应参数的 json 字符串；如果是 form 格式参数，则是对应 ScheduleParam 列表的 json 字符串。 |
| Keepers         | List&lt;int&gt;    | 否       | 监护人 id                                                                                                           |
| Nexts           | List&lt;guid&gt;   | 否       | 子级任务 id                                                                                                         |
| Executors       | List&lt;string&gt; | 否       | 执行节点名称                                                                                                        |
| RunNow          | bool               | 否       | 创建成功是否立即启动                                                                                                |

代码示例：

```c#
    HttpClient client = new HttpClient();
    List<KeyValuePair<string, string>> args = new List<KeyValuePair<string, string>>();
    args.Add(new KeyValuePair<string, string>("MetaType", "2"));
    args.Add(new KeyValuePair<string, string>("RunLoop", "true"));
    args.Add(new KeyValuePair<string, string>("CronExpression", "22 0/8 * * * ?"));
    args.Add(new KeyValuePair<string, string>("Remark", "By Xunit Tester Created"));
    args.Add(new KeyValuePair<string, string>("StartDate", DateTime.Today.ToString("yyyy-MM-dd HH:mm:ss")));
    args.Add(new KeyValuePair<string, string>("Title", "Http接口测试任务"));
    args.Add(new KeyValuePair<string, string>("HttpRequestUrl", "http://localhost:56655/api/1.0/value/jsonpost"));
    args.Add(new KeyValuePair<string, string>("HttpMethod", "POST"));
    args.Add(new KeyValuePair<string, string>("HttpContentType", "application/json"));
    args.Add(new KeyValuePair<string, string>("HttpHeaders", "[]"));
    args.Add(new KeyValuePair<string, string>("HttpBody", "{ \"Posts\": [{ \"PostId\": 666, \"Title\": \"tester\", \"Content\":\"testtesttest\" }], \"BlogId\": 111, \"Url\":\"qweqrrttryrtyrtrtrt\" }"));
    HttpContent reqContent = new FormUrlEncodedContent(args);
    var response = await client.PostAsync("http://localhost:30000/api/Task/Create", reqContent);
    var content = await response.Content.ReadAsStringAsync();
    Debug.WriteLine(content);
```

<br />

#### 创建延时任务

- 接口地址：`http://yourip:30000/api/delaytask/create`

- 请求类型：`POST`

- 参数格式：`application/x-www-form-urlencoded`

- 返回结果：创建成功返回任务 id

- 参数列表：

| 参数名称          | 参数类型 | 是否必填 | 说明                                                                       |
| ----------------- | -------- | -------- | -------------------------------------------------------------------------- |
| SourceApp         | string   | 是       | 来源                                                                       |
| Topic             | string   | 是       | 主题                                                                       |
| ContentKey        | string   | 是       | 业务关键字                                                                 |
| DelayTimeSpan     | int      | 是       | 延迟相对时间                                                               |
| DelayAbsoluteTime | DateTime | 是       | 延迟绝对时间                                                               |
| NotifyUrl         | string   | 是       | 回调地址                                                                   |
| NotifyDataType    | string   | 是       | 回调参数格式，仅支持 application/json 和 application/x-www-form-urlencoded |
| NotifyBody        | string   | 是       | 回调参数，json 格式字符串                                                  |

代码示例：

```c#
    for (int i = 0; i < 5; i++)
    {
        int rndNum = new Random().Next(20, 500);
        List<KeyValuePair<string, string>> args = new List<KeyValuePair<string, string>>();
        args.Add(new KeyValuePair<string, string>("SourceApp", "TestApp"));
        args.Add(new KeyValuePair<string, string>("Topic", "TestApp.Trade.TimeoutCancel"));
        args.Add(new KeyValuePair<string, string>("ContentKey", i.ToString()));
        args.Add(new KeyValuePair<string, string>("DelayTimeSpan", rndNum.ToString()));
        args.Add(new KeyValuePair<string, string>("DelayAbsoluteTime", DateTime.Now.AddSeconds(rndNum).ToString("yyyy-MM-dd HH:mm:ss")));
        args.Add(new KeyValuePair<string, string>("NotifyUrl", "http://localhost:56655/api/1.0/value/delaypost"));
        args.Add(new KeyValuePair<string, string>("NotifyDataType", "application/json"));
        args.Add(new KeyValuePair<string, string>("NotifyBody", "{ \"Posts\": [{ \"PostId\": 666, \"Title\": \"tester\", \"Content\":\"testtesttest\" }], \"BlogId\": 111, \"Url\":\"qweqrrttryrtyrtrtrt\" }"));
        HttpContent reqContent = new FormUrlEncodedContent(args);
        var response = await client.PostAsync("http://localhost:30000/api/DelayTask/Create", reqContent);
        var content = await response.Content.ReadAsStringAsync();
        Debug.WriteLine(content);
    }
```
