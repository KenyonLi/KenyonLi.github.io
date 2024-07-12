## .NET 8 ASP.NET Core 中，可以结合 Exceptionless 和 Serilog来实现日志管理



在 .NET 8 ASP.NET Core 中，可以结合 Exceptionless 和 Serilog 来实现全面的日志管理。这种组合能够利用 Serilog 强大的日志功能和 Exceptionless 提供的错误跟踪和日志管理平台。

### 1. 创建 ASP.NET Core 项目并添加依赖项

首先，创建一个新的 ASP.NET Core 项目并添加必要的包。

```sh
dotnet new webapi -n MyApi
cd MyApi
dotnet add package Serilog.AspNetCore
dotnet add package Serilog.Sinks.Exceptionless
dotnet add package Exceptionless.AspNetCore
```

### 2. 配置 Serilog 和 Exceptionless

在 `Program.cs` 中配置 Serilog 和 Exceptionless。

```csharp
using Exceptionless;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// 配置 Serilog
Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .WriteTo.Exceptionless("<YOUR_EXCEPTIONLESS_API_KEY>") // 替换为你的 Exceptionless API 密钥
    .CreateLogger();

builder.Host.UseSerilog();

// 添加 Exceptionless 服务
builder.Services.AddExceptionless(config =>
{
    config.ApiKey = "<YOUR_EXCEPTIONLESS_API_KEY>"; // 替换为你的 Exceptionless API 密钥
    config.ServerUrl = "https://collector.exceptionless.io"; // 可选：替换为你的 Exceptionless 服务器地址
});

// 添加控制器服务
builder.Services.AddControllers();

var app = builder.Build();

app.UseExceptionless();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
```

### 3. 创建一个控制器进行日志测试

创建一个示例控制器来测试日志记录功能。

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace MyApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            _logger.LogInformation("This is an information log.");
            _logger.LogWarning("This is a warning log.");
            _logger.LogError("This is an error log.");

            // 模拟异常
            try
            {
                throw new InvalidOperationException("This is a test exception.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred.");
            }

            return Ok(new { Message = "Logs have been sent to Exceptionless and Serilog." });
        }
    }
}
```

### 4. 运行应用程序

运行应用程序：

```sh
dotnet run
```

访问 `https://localhost:5001/home`，您应该会在控制台和 Exceptionless 中看到日志和错误信息。

### 总结

通过以上步骤，您已经成功地在 .NET 8 ASP.NET Core 项目中结合 Exceptionless 和 Serilog 实现了日志管理。这包括：

1. 创建 ASP.NET Core 项目并添加必要的包。
2. 配置 Serilog 和 Exceptionless。
3. 创建一个控制器来测试日志功能。
4. 运行并验证应用程序。

这样，您就可以利用 Serilog 和 Exceptionless 提供的强大日志功能来更好地管理和跟踪您的应用程序日志。