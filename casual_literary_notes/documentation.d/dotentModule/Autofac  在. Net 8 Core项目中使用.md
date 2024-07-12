## Autofac  在. Net 8 Core项目中使用

Autofac 是一个强大的依赖注入容器，可以用于 .NET 8 Core 项目中，以便于实现依赖注入。下面是如何在 .NET 8 Core 项目中使用 Autofac 的完整指南，包括项目设置、配置和示例代码。

### 1. 创建 .NET 8 Core 项目

首先，创建一个新的 .NET 8 Core 项目：

```sh
dotnet new webapi -n MyApi
cd MyApi
```

### 2. 添加 Autofac 包

在项目中添加 Autofac 和 Autofac.Extensions.DependencyInjection 包：

```sh
dotnet add package Autofac
dotnet add package Autofac.Extensions.DependencyInjection
```

### 3. 配置 Autofac

打开 `Program.cs` 文件，并配置 Autofac 作为依赖注入容器：

```csharp
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// 添加服务到 IServiceCollection
builder.Services.AddControllers();

// 配置 Autofac 作为 DI 容器
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

// 配置 Autofac 容器
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
{
    // 注册服务
    containerBuilder.RegisterModule(new MyApplicationModule());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
```

### 4. 创建 Autofac 模块

创建一个 Autofac 模块，用于注册服务。在项目根目录中创建一个新的类文件 `MyApplicationModule.cs`：

```csharp
using Autofac;
using MyApi.Services;

public class MyApplicationModule : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        // 在此注册您的服务
        builder.RegisterType<MyService>().As<IMyService>().InstancePerLifetimeScope();
    }
}
```

### 5. 创建服务接口和实现

在 `Services` 文件夹中创建服务接口和实现类：

```csharp
// IMyService.cs
namespace MyApi.Services
{
    public interface IMyService
    {
        string GetMessage();
    }
}

// MyService.cs
namespace MyApi.Services
{
    public class MyService : IMyService
    {
        public string GetMessage()
        {
            return "Hello from MyService!";
        }
    }
}
```

### 6. 使用服务

在控制器中使用依赖注入来使用服务：

```csharp
using Microsoft.AspNetCore.Mvc;
using MyApi.Services;

namespace MyApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyController : ControllerBase
    {
        private readonly IMyService _myService;

        public MyController(IMyService myService)
        {
            _myService = myService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var message = _myService.GetMessage();
            return Ok(message);
        }
    }
}
```

### 7. 运行应用程序

运行应用程序：

```sh
dotnet run
```

访问 `https://localhost:5001/My`，您应该会看到 `Hello from MyService!` 的响应。

### 总结

通过以上步骤，您已经成功地在 .NET 8 Core 项目中集成并使用了 Autofac 进行依赖注入。这包括：

1. 创建 .NET 8 Core 项目。
2. 添加 Autofac 包。
3. 配置 Autofac。
4. 创建 Autofac 模块并注册服务。
5. 创建服务接口和实现。
6. 在控制器中使用服务。
7. 运行并验证应用程序。

这样，您就可以在项目中使用 Autofac 提供的高级依赖注入功能，以便更好地管理和组织您的代码。



##  Autofac 批量注入容器



在 Autofac 中，批量注入容器可以通过扫描程序集和批量注册实现。这可以显著减少手动注册的工作量，特别是在有大量服务的情况下。以下是如何使用 Autofac 实现批量注入容器的步骤和示例。

### 1. 创建项目和添加 Autofac

首先，确保您已经创建了一个 .NET 8 Core 项目并添加了 Autofac 包。

```sh
dotnet new webapi -n MyApi
cd MyApi
dotnet add package Autofac
dotnet add package Autofac.Extensions.DependencyInjection
```

### 2. 定义服务接口和实现

创建一些示例服务接口和实现，分布在不同的文件中。

```csharp
// Services/IMyService.cs
namespace MyApi.Services
{
    public interface IMyService
    {
        string GetMessage();
    }
}

// Services/MyService.cs
namespace MyApi.Services
{
    public class MyService : IMyService
    {
        public string GetMessage()
        {
            return "Hello from MyService!";
        }
    }
}

// Services/IOtherService.cs
namespace MyApi.Services
{
    public interface IOtherService
    {
        string GetOtherMessage();
    }
}

// Services/OtherService.cs
namespace MyApi.Services
{
    public class OtherService : IOtherService
    {
        public string GetOtherMessage()
        {
            return "Hello from OtherService!";
        }
    }
```

### 3. 配置 Autofac 批量注册

在 `Program.cs` 中配置 Autofac，使用程序集扫描和批量注册服务。

```csharp
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// 添加服务到 IServiceCollection
builder.Services.AddControllers();

// 配置 Autofac 作为 DI 容器
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

// 配置 Autofac 容器
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
{
    // 批量注册实现某接口的所有类型
    containerBuilder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
        .AsImplementedInterfaces()
        .InstancePerLifetimeScope();
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
```

### 4. 使用批量注册的服务

在控制器中使用依赖注入来使用批量注册的服务。

```csharp
using Microsoft.AspNetCore.Mvc;
using MyApi.Services;

namespace MyApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyController : ControllerBase
    {
        private readonly IMyService _myService;
        private readonly IOtherService _otherService;

        public MyController(IMyService myService, IOtherService otherService)
        {
            _myService = myService;
            _otherService = otherService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var message = _myService.GetMessage();
            var otherMessage = _otherService.GetOtherMessage();
            return Ok(new { message, otherMessage });
        }
    }
}
```

### 5. 运行应用程序

运行应用程序：

```sh
dotnet run
```

访问 `https://localhost:5001/My`，您应该会看到来自两个服务的响应。

### 总结

通过以上步骤，您已经成功地在 .NET 8 Core 项目中使用 Autofac 实现了批量注入容器。这包括：

1. **创建项目和添加 Autofac**：创建一个 .NET 8 Core 项目并添加 Autofac 包。
2. **定义服务接口和实现**：创建一些示例服务接口和实现。
3. **配置 Autofac 批量注册**：在 `Program.cs` 中配置 Autofac，使用程序集扫描和批量注册服务。
4. **使用批量注册的服务**：在控制器中使用依赖注入来使用批量注册的服务。
5. **运行应用程序**：运行并验证应用程序。

这样，您就可以在项目中使用 Autofac 提供的高级依赖注入功能，以便更好地管理和组织您的代码。批量注册使得代码更简洁，维护更方便。



## Autofac 如何使用泛型模板注入容器，即能批量注入，又能自定义注入，还支持特性注入。



在 Autofac 中，可以结合泛型模板注入、批量注入、自定义注入和特性注入来实现复杂的依赖注入需求。以下是实现这些功能的详细步骤和示例代码。

### 1. 创建项目并添加 Autofac

首先，确保您已经创建了一个 .NET 8 Core 项目并添加了 Autofac 包。

```sh
dotnet new webapi -n MyApi
cd MyApi
dotnet add package Autofac
dotnet add package Autofac.Extensions.DependencyInjection
```

### 2. 定义泛型服务接口和实现

定义一些泛型服务接口和实现类。

```csharp
// Services/IGenericService.cs
namespace MyApi.Services
{
    public interface IGenericService<T>
    {
        string GetMessage();
    }
}

// Services/GenericService.cs
namespace MyApi.Services
{
    public class GenericService<T> : IGenericService<T>
    {
        public string GetMessage()
        {
            return $"Hello from GenericService<{typeof(T).Name}>!";
        }
    }
}
```

### 3. 定义普通服务接口和实现

定义一些普通服务接口和实现类。

```csharp
// Services/IMyService.cs
namespace MyApi.Services
{
    public interface IMyService
    {
        string GetMessage();
    }
}

// Services/MyService.cs
namespace MyApi.Services
{
    public class MyService : IMyService
    {
        public string GetMessage()
        {
            return "Hello from MyService!";
        }
    }
}
```

### 4. 配置 Autofac 批量注册和自定义注册

在 `Program.cs` 中配置 Autofac，使用程序集扫描和批量注册服务，并结合自定义注册和特性注入。

```csharp
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// 添加服务到 IServiceCollection
builder.Services.AddControllers();

// 配置 Autofac 作为 DI 容器
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

// 配置 Autofac 容器
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
{
    // 批量注册实现某接口的所有类型
    containerBuilder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
        .AsImplementedInterfaces()
        .InstancePerLifetimeScope();

    // 注册泛型服务
    containerBuilder.RegisterGeneric(typeof(GenericService<>))
        .As(typeof(IGenericService<>))
        .InstancePerLifetimeScope();

    // 自定义注册服务
    containerBuilder.RegisterType<MyService>()
        .As<IMyService>()
        .SingleInstance(); // 使用单例模式注册
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();
```

### 5. 使用批量注册和泛型服务

在控制器中使用依赖注入来使用批量注册的服务和泛型服务。

```csharp
using Microsoft.AspNetCore.Mvc;
using MyApi.Services;

namespace MyApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyController : ControllerBase
    {
        private readonly IMyService _myService;
        private readonly IGenericService<string> _genericService;

        public MyController(IMyService myService, IGenericService<string> genericService)
        {
            _myService = myService;
            _genericService = genericService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var message = _myService.GetMessage();
            var genericMessage = _genericService.GetMessage();
            return Ok(new { message, genericMessage });
        }
    }
}
```

### 6. 运行应用程序

运行应用程序：

```sh
dotnet run
```

访问 `https://localhost:5001/My`，您应该会看到来自普通服务和泛型服务的响应。

### 7. 使用特性注入

特性注入可以通过 Autofac 的 `WithAttributeFiltering` 方法来实现。首先，定义一个自定义特性类，然后在需要使用特性注入的地方使用该特性。

```csharp
using System;

// 自定义特性
[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
public class CustomAttribute : Attribute
{
    public string Name { get; }

    public CustomAttribute(string name)
    {
        Name = name;
    }
}
```

然后在服务实现上应用该特性：

```csharp
using MyApi.Services;

// 使用特性标记服务实现
[Custom("SpecialService")]
public class SpecialService : IMyService
{
    public string GetMessage()
    {
        return "Hello from SpecialService!";
    }
}
```

在 Autofac 配置中启用特性过滤：

```csharp
using Autofac;
using Autofac.Extensions.DependencyInjection;
using Autofac.Features.AttributeFilters;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System.Reflection;

var builder = WebApplication.CreateBuilder(args);

// 添加服务到 IServiceCollection
builder.Services.AddControllers();

// 配置 Autofac 作为 DI 容器
builder.Host.UseServiceProviderFactory(new AutofacServiceProviderFactory());

// 配置 Autofac 容器
builder.Host.ConfigureContainer<ContainerBuilder>(containerBuilder =>
{
    // 启用特性过滤
    containerBuilder.RegisterModule(new AutofacModuleWithAttributes());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

app.Run();

public class AutofacModuleWithAttributes : Module
{
    protected override void Load(ContainerBuilder builder)
    {
        // 批量注册实现某接口的所有类型，并启用特性过滤
        builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly())
            .AsImplementedInterfaces()
            .WithAttributeFiltering()
            .InstancePerLifetimeScope();

        // 注册泛型服务
        builder.RegisterGeneric(typeof(GenericService<>))
            .As(typeof(IGenericService<>))
            .WithAttributeFiltering()
            .InstancePerLifetimeScope();

        // 自定义注册服务
        builder.RegisterType<MyService>()
            .As<IMyService>()
            .WithAttributeFiltering()
            .SingleInstance(); // 使用单例模式注册
    }
}
```

在控制器中使用特性注入的服务：

```csharp
using Microsoft.AspNetCore.Mvc;
using MyApi.Services;

namespace MyApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MyController : ControllerBase
    {
        private readonly IMyService _myService;
        private readonly IGenericService<string> _genericService;
        private readonly IMyService _specialService;

        public MyController(
            IMyService myService,
            IGenericService<string> genericService,
            [KeyFilter("SpecialService")] IMyService specialService)
        {
            _myService = myService;
            _genericService = genericService;
            _specialService = specialService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var message = _myService.GetMessage();
            var genericMessage = _genericService.GetMessage();
            var specialMessage = _specialService.GetMessage();
            return Ok(new { message, genericMessage, specialMessage });
        }
    }
}
```

### 运行应用程序

运行应用程序：

```sh
dotnet run
```

访问 `https://localhost:5001/My`，您应该会看到来自普通服务、泛型服务和特性注入服务的响应。

### 总结

通过以上步骤，您已经成功地在 .NET 8 Core 项目中使用 Autofac 实现了泛型模板注入、批量注入、自定义注入和特性注入。这包括：

1. 创建项目并添加 Autofac。
2. 定义泛型服务接口和实现。
3. 定义普通服务接口和实现。
4. 配置 Autofac 批量注册和自定义注册。
5. 使用批量注册和泛型服务。
6. 使用特性注入。
7. 运行并验证应用程序。

这样，您就可以在项目中使用 Autofac 提供的高级依赖注入功能，以便更好地管理和组织您的代码。