

##   在net8 中使用 Serilog.Sinks.RabbitMQ  

在 .NET 8 中使用 `Serilog.Sinks.RabbitMQ` 将日志记录发送到 RabbitMQ，您可以按照以下步骤进行设置和配置。

### 步骤 1: 安装必要的包

首先，通过 NuGet 安装 `Serilog` 和 `Serilog.Sinks.RabbitMQ` 包：

```bash
dotnet add package Serilog
dotnet add package Serilog.Sinks.RabbitMQ
```

### 步骤 2: 配置 Serilog 和 RabbitMQ

在 `Program.cs` 文件中配置 Serilog 和 RabbitMQ。以下是一个完整的示例代码：

```csharp
using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using Serilog.Sinks.RabbitMQ;

var builder = WebApplication.CreateBuilder(args);

// 配置 Serilog
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console() // 可选：将日志输出到控制台
    .WriteTo.RabbitMQ((clientConfiguration, sinkConfiguration) =>
    {
        clientConfiguration.Username = "guest";
        clientConfiguration.Password = "guest";
       // clientConfiguration.Exchange = "logs";
       // clientConfiguration.ExchangeType = "direct";
        
        
         clientConfiguration. Exchange = "logs_topic",
        clientConfiguration.  ExchangeType = "topic",
        
        clientConfiguration.DeliveryMode = RabbitMQDeliveryMode.Durable;
       // clientConfiguration.RouteKey = "serilog";
        clientConfiguration. RouteKey = "serilog.routing.key",
        clientConfiguration.Hostnames.Add("localhost"); // RabbitMQ 服务器地址
        clientConfiguration.Port = 5672; // RabbitMQ 端口
        clientConfiguration.VHost = "/"; // 虚拟主机
    })
    .CreateLogger();

builder.Host.UseSerilog();

var app = builder.Build();

// 配置 HTTP 请求管道
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseRouting();

app.UseEndpoints(endpoints =>
{
    endpoints.MapGet("/", async context =>
    {
        Log.Information("Handling request for {Path}", context.Request.Path);
        await context.Response.WriteAsync("Hello, world!");
    });
});

app.Run();
```

### 解释配置

- **WriteTo.Console()**: 将日志输出到控制台，便于调试和测试。
- **WriteTo.RabbitMQ**: 配置将日志发送到 RabbitMQ 的 sink。

#### RabbitMQ 配置参数

- `Username` 和 `Password`: RabbitMQ 的用户名和密码。
- `Exchange`: 使用的交换机名称。
- `ExchangeType`: 交换机类型，例如 "direct"、"topic" 等。
- `DeliveryMode`: 消息传递模式，通常使用 `RabbitMQDeliveryMode.Durable` 以确保消息持久化。
- `RouteKey`: 路由键，用于消息路由。
- `Hostnames`: RabbitMQ 服务器地址列表。
- `Port`: RabbitMQ 端口，默认是 5672。
- `VHost`: 虚拟主机，通常使用 `/`。

### 步骤 3: 配置 RabbitMQ

确保 RabbitMQ 服务器已经启动，并且配置了相应的交换机和队列。您可以使用 RabbitMQ 管理控制台或命令行工具来创建交换机和队列。

### 步骤 4: 运行应用程序

编写好代码后，运行应用程序，测试日志是否能够正确发送到 RabbitMQ。

```bash
dotnet run
```

访问您的应用程序，触发日志记录操作，并检查 RabbitMQ 控制台以确认日志消息是否已经发送并接收。

### 注意事项

1. **依赖注入**：确保 Serilog 的配置在应用程序启动时完成，并且在整个应用程序生命周期中可用。
2. **错误处理**：在生产环境中，建议添加错误处理和重试逻辑，以确保在 RabbitMQ 不可用时日志不会丢失。
3. **性能优化**：根据日志量和 RabbitMQ 配置，可能需要调整 RabbitMQ 的连接和批量发送配置，以优化性能。

通过上述步骤，您可以在 .NET 8 应用程序中使用 `Serilog.Sinks.RabbitMQ` 将日志发送到 RabbitMQ。