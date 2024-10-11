import{_ as s,r as a,o as r,c as v,a as e,b as l,w as d,d as n,e as o}from"./app-c1c3c937.js";const t={},c=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),u={class:"table-of-contents"},b=o(`<h1 id="核心根基模块化" tabindex="-1"><a class="header-anchor" href="#核心根基模块化" aria-hidden="true">#</a> 核心根基模块化</h1><h2 id="什么是abp-vnnext" tabindex="-1"><a class="header-anchor" href="#什么是abp-vnnext" aria-hidden="true">#</a> 什么是ABP vNnext</h2><p>ABP vNnext是一个基于Asp.Net Core Web应用程序框架。主要目的是用来快速开发Web应用。</p><p>可以用于开发任何Web应用程序。为什么Abp.Vnext可以快速开发Web应用？</p><p>2个原因：</p><p>​ 1、ABP.Vnext提供完整Web应用程序开发模板。</p><p>​ 2、ABP.Vnext提供Web应用程序开发所需要的一些基础设施功能。</p><p>应用程序：运行在操作系统之上的程序都叫应用程序。例如：QQ 微信，淘宝。这些都是应用程序，应用程序分3类：桌面应用程序，Web应用程序，移动应用程序</p><h2 id="什么是框架" tabindex="-1"><a class="header-anchor" href="#什么是框架" aria-hidden="true">#</a> 什么是框架</h2><p>应用程序组件规范。简单讲就是给应用程序取一个共同的名字</p><p>例如：支付宝付款，微信付款。这是两个组件，取一个规范。就是支付。</p><h2 id="什么是asp-net-core-web应用程序框架" tabindex="-1"><a class="header-anchor" href="#什么是asp-net-core-web应用程序框架" aria-hidden="true">#</a> 什么是Asp.Net Core Web应用程序框架</h2><p>就把aspnetcore web相关的所有组件规范起来。</p><p>所以：ABP.Vnext就是把aspnetcore web相关的所有的组件规范了。</p><p>通俗点：给相识的组件取一个共同的名字</p><p>例如：AspNetCore mvc ioc autofac redis.....会用到很多组件。所以会取一个共同的名字，名字叫做模块。都叫组件也可以。</p><p>但是在ABP.Vnext中。叫做Module。</p><p>所以：Abp.Vnext中就以Module作为规范了。</p><p>大家把模块理解了，就理解了ABP.Vnext的核心了。</p><h2 id="什么是module" tabindex="-1"><a class="header-anchor" href="#什么是module" aria-hidden="true">#</a> 什么是Module?</h2><p>就是对所有组件和业务模块的抽象。取的一个共同的名字。</p><h2 id="module好处" tabindex="-1"><a class="header-anchor" href="#module好处" aria-hidden="true">#</a> Module好处</h2><p>目的：快速快发 Web应用程序</p><p>要想知道Module的好处，我们先要做一件事情，通过用来体现</p><h2 id="如何使用module" tabindex="-1"><a class="header-anchor" href="#如何使用module" aria-hidden="true">#</a> 如何使用Module?</h2><p>1、Console</p><p>2、Web</p><p>3、Wpf</p><h3 id="console项目使用module" tabindex="-1"><a class="header-anchor" href="#console项目使用module" aria-hidden="true">#</a> Console项目使用Module</h3><p>条件</p><p>1、Volo.Abp.Core</p><p>步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、项目准备

使用Vs2019创建一个创建一个新的Console项目使用Abp.Vnext

LKN.ABP.Console

2、然后在项目中安装Volo.Abp.Core

​    Nuget Volo.Abp.Core

3、然后创建ABP模块类

ABP是一个模块化框架,它需要一个**启动 (根) 模块**继承自AbpModule:

class ConsoleModule : AbpModule
  {
​    public override void ConfigureServices(ServiceConfigurationContext context)

​    {

​      /*var configuration = context.Services.GetConfiguration();

​      var hostEnvironment = context.Services.GetSingletonInstance&lt;IHostEnvironment&gt;();

 ​      context.Services.AddHostedService&lt;MyConsoleAppHostedService&gt;();

​      context.Services.AddSingleton&lt;TonyService&gt;();*/

​      var configuration = context.Services.GetConfiguration();

​      var hostEnvironment = context.Services.GetSingletonInstance&lt;IHostEnvironment&gt;();

​      context.Services.AddHostedService&lt;MyConsoleAppHostedService&gt;();

​      context.Services.AddSingleton&lt;TonyService&gt;();

​    }

  }
  4、ABP模块加载
4.1 修改Progarm类
class Program

  {

​    static void Main(string[] args)

​    {

​      Console.WriteLine(&quot;Hello World!&quot;);

​       CreateHostBuilder(args).RunConsoleAsync().Wait();

​    }


​    internal static IHostBuilder CreateHostBuilder(string[] args) =&gt;

​      Host.CreateDefaultBuilder(args)

​        .ConfigureAppConfiguration((context, config) =&gt;

​        {

​          //setup your additional configuration sources
​        })

​        .ConfigureServices((hostContext, services) =&gt;

​        {

​          services.AddApplication&lt;ConsoleModule&gt;();

​        });

  } 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何使用ioc" tabindex="-1"><a class="header-anchor" href="#如何使用ioc" aria-hidden="true">#</a> 如何使用IOC?</h3><p>条件</p><p>1、HelloWorldService</p><p>步骤</p><h3 id="如何使用第三方模块autofac" tabindex="-1"><a class="header-anchor" href="#如何使用第三方模块autofac" aria-hidden="true">#</a> 如何使用第三方模块Autofac？</h3><p>条件</p><p>1、Volo.Abp.Autofac</p><p>​ 步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、通过nuget引入Volo.Abp.Autofac

2、然后在ConsoleModule上添加
[DependsOn(
​  typeof(AbpAutofacModule)
  )]
3、然后在Program中使用代码
  internal static IHostBuilder CreateHostBuilder(string[] args) =&gt;
​      Host.CreateDefaultBuilder(args)
​        .UseAutofac()
​        .ConfigureAppConfiguration((context, config) =&gt;
​        {
​          //setup your additional configuration sources
​        })
​        .ConfigureServices((hostContext, services) =&gt;
​        {
​          services.AddApplication&lt;ConsoleModule&gt;();
​        });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何调用自定义模块" tabindex="-1"><a class="header-anchor" href="#如何调用自定义模块" aria-hidden="true">#</a> 如何调用自定义模块？</h3><p>条件</p><p>1、LKN.ABP.Console.Common</p><p>2、Volo.Abp.Core</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、使用vs创建LKN.ABP.Console.Common

2、然后在项目中引入Volo.Abp.Core

3、然后在LKN.ABP.Console引入LKN.ABP.Console.Common

4、然后开始使用LKN.ABP.Console开始使用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何调用插件模块" tabindex="-1"><a class="header-anchor" href="#如何调用插件模块" aria-hidden="true">#</a> 如何调用插件模块？</h3><p>条件</p><p>1、LKN.ABP.Console.PlugIn</p><p>2、LKN.ABP.Console</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤
1、使用vs创建插件项目LKN.ABP.Console.PlugIn

2、然后创建插件目录
MyPlugIns

3、然后将LKN.ABP.Console.PlugIn.dll复制到MyPlugIns目录中

4、然后在LKN.ABP.Console项目中加载MyPlugIns
services.AddApplication&lt;ConsoleModule&gt;(options =&gt;
{
// 1、加载插件
options.PlugInSources.AddFolder(@&quot;D:\\work\\net-project\\ABP专题\\1、核心根基-模块化\\MyPlugIns&quot;);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何在项目中使用插件" tabindex="-1"><a class="header-anchor" href="#如何在项目中使用插件" aria-hidden="true">#</a> 如何在项目中使用插件</h3><p>条件</p><p>1、LKN.ABP.Consul.Plugin.Abstract</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤
1、使用vs创建插件项目LKN.ABP.Consul.Plugin.Abstract

2、然后创建插件插件接口IPluginService
3、然后其他项目引用插件接口项目即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web项目如何使用abp-vnext-module" tabindex="-1"><a class="header-anchor" href="#web项目如何使用abp-vnext-module" aria-hidden="true">#</a> Web项目如何使用Abp vNext(Module)</h3><p>​ 条件</p><p>1、Volo.Abp.AspNetCore.Mvc</p><p>步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、项目准备

1.1 使用Vs2019创建一个新的AspNet Core Web Application:

2、然后在项目中安装Volo.Abp.AspNetCore.Mvc

​    Nuget Volo.Abp.AspNetCore.Mvc

3、然后创建ABP模块

ABP是一个模块化框架,它需要一个**启动 (根) 模块**继承自AbpModule:

using Microsoft.AspNetCore.Builder;using Microsoft.Extensions.Hosting;

using Volo.Abp;using Volo.Abp.AspNetCore.Mvc;using Volo.Abp.Modularity;

namespace BasicAspNetCoreApplication{
  [DependsOn(typeof(AbpAspNetCoreMvcModule))]
  public class AppModule : AbpModule
  {

​    public override void OnApplicationInitialization(
​      ApplicationInitializationContext context)
​    {

​      var app = context.GetApplicationBuilder();

​      var env = context.GetEnvironment();

 

​      if (env.IsDevelopment())
​      {
​        app.UseDeveloperExceptionPage();

​      }
​      else
​      {
​        app.UseExceptionHandler(&quot;/Error&quot;);
​      }


​      app.UseStaticFiles();

​      app.UseRouting();

​      app.UseConfiguredEndpoints();

​    }

  }}

AppModule 是应用程序启动模块的好名称.

ABP的包定义了这个模块类,模块可以依赖其它模块.在上面的代码中 AppModule 依赖于 AbpAspNetCoreMvcModule (模块存在于[Volo.Abp.AspNetCore.Mvc](https://www.nuget.org/packages/Volo.Abp.AspNetCore.Mvc)包中). 安装新的ABP的包后添加DependsOn是很常见的做法.

我们在此模块类中配置ASP.NET Core管道,而不是Startup类中.

4、修改启动类StartUp.cs

接下来修改启动类集成ABP模块系统:

using Microsoft.AspNetCore.Builder;using Microsoft.Extensions.DependencyInjection;

 BasicAspNetCoreApplication{
  public class Startup
  {

​    public void ConfigureServices(IServiceCollection services)
​    {

​      services.AddApplication&lt;AppModule&gt;();

​    }
​    public void Configure(IApplicationBuilder app)
​    {
​      app.InitializeApplication();
​    }

namespace

  }}

services.AddApplication&lt;AppModule&gt;()添加了所有AppModule模块中定义的全部服务.

Configure方法中的app.InitializeApplication()完成初始化并启动应用程序
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web项目如何使用autofac" tabindex="-1"><a class="header-anchor" href="#web项目如何使用autofac" aria-hidden="true">#</a> Web项目如何使用Autofac</h3><p>条件</p><p>1、Volo.Abp.Autofac</p><p>步骤</p><h3 id="web项目如何引用自定义模块项目" tabindex="-1"><a class="header-anchor" href="#web项目如何引用自定义模块项目" aria-hidden="true">#</a> Web项目如何引用自定义模块项目</h3><p>条件</p><p>1、LKN.ABP.Console.Common</p><h3 id="web模块如何被其他模块依赖" tabindex="-1"><a class="header-anchor" href="#web模块如何被其他模块依赖" aria-hidden="true">#</a> Web模块如何被其他模块依赖</h3><p>条件</p><p>1、使用方式是一样的</p><h3 id="web模块被依赖的应用场景" tabindex="-1"><a class="header-anchor" href="#web模块被依赖的应用场景" aria-hidden="true">#</a> Web模块被依赖的应用场景</h3><p>场景一：Ocelot应用场景</p><p>场景二：IndetityServer4应用场景</p><p>场景三：身份认证登录模块</p><h3 id="模块执行原理-volo-abp-core如何执行模块" tabindex="-1"><a class="header-anchor" href="#模块执行原理-volo-abp-core如何执行模块" aria-hidden="true">#</a> 模块执行原理？Volo.Abp.Core如何执行模块</h3><p>条件</p><p>1、反射</p><p>2、递归</p><h3 id="模块执行原理分析" tabindex="-1"><a class="header-anchor" href="#模块执行原理分析" aria-hidden="true">#</a> 模块执行原理分析</h3><p>条件</p><p>1、ModuleLoader</p><p>2、AbpApplicationWithExternalServiceProvider</p><h3 id="模块总结" tabindex="-1"><a class="header-anchor" href="#模块总结" aria-hidden="true">#</a> 模块总结：</h3><p><strong>·</strong> <em><strong>*框架模块*</strong></em>: 这些是****框架的核心模块**** 如缓存, 邮件, 主题, 安全, 序列化, 验证, EF Core集成, MongoDB集成... 等. 它们没有应用/业务功能,它们提供了日常开发经常用到的通用基础设施,集成和抽象.</p><p><strong>·</strong> <em><strong>*应用程序模块*</strong></em>: 这些模块实现了 <em><strong>*特定的应用/业务功能*</strong></em> 像博客, 文档管理, 身份管理, 租户管理... 等等4</p><p>结论：做架构一定要会业务。然后才是技术</p><p>技术：通用的业务：就是技术</p><h3 id="如何快速创建abp-vnext项目" tabindex="-1"><a class="header-anchor" href="#如何快速创建abp-vnext项目" aria-hidden="true">#</a> 如何快速创建Abp vNext项目</h3><p>条件</p><p>1、ABP CLI</p><p>条件</p><p>1、ABP CLI</p><p>步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、ABP CLI安装

 dotnet tool install -g Volo.Abp.Cli

2、ABP CLI 版本更新

 dotnet tool update -g Volo.Abp.Cli

3、Web模板项目创建

默认MVC项目

abp new LKN.Project.Web -o D:\\work\\net-project\\ABP专题\\1、核心根基模块化\\LKN.Project.Web

Mysql mvc项目

abp new LKN.Project.Web --dbms mysql -o D:\\work\\net-project\\ABP专题\\1、核心根基模块化\\LKN.Project.Web

Mysql web api项目

abp new LKN.Project.Web --dbms mysql -u none -o D:\\work\\net-project\\ABP专题\\1、核心根基模块化\\LKN.Project.Web.Api

4、Console模板项目创建

  abp new LKN.Project.Console -t console -o D:\\work\\net-project\\ABP专题\\1、核心根基模块化\\LKN.Project.Console

5、Module模板项目创建

abp new LKN.Project.Module -t module -o D:\\work\\net-project\\ABP专题\\1、核心根基模块化\\LKN.Project.Module

Module+无用户界面

abp new LKN.Project.Module.NoUi -t module --no-ui -o D:\\work\\net-project\\ABP专题\\1、核心根基模块化\\LKN.Project.Module.NoUi

模块+mysql

abp new LKN.Project.Module.NoUi -t module --no-ui --dbms mysql -o D:\\work\\net-project\\ABP专题\\1、核心根基模块化\\LKN.Project.Module.NoUi

6、ABP CLI详细用法

  请参考文档。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何运行abp-vnext-web项目" tabindex="-1"><a class="header-anchor" href="#如何运行abp-vnext-web项目" aria-hidden="true">#</a> 如何运行Abp vNext Web项目</h3><p>条件</p><p>1、数据迁移LKN.Project.Web.DbMigrator</p><p>2、运行项目LKN.Project.Web.Web</p><h3 id="如何快速创建abp-vnnext-web-api项目" tabindex="-1"><a class="header-anchor" href="#如何快速创建abp-vnnext-web-api项目" aria-hidden="true">#</a> 如何快速创建Abp vNnext Web Api项目</h3><p>条件</p><p>1、ABP CLI</p><p>步骤</p><p>1、</p><h3 id="如何运行abp-vnnext-web-api项目" tabindex="-1"><a class="header-anchor" href="#如何运行abp-vnnext-web-api项目" aria-hidden="true">#</a> 如何运行Abp vNnext Web Api项目</h3><p>​ 条件</p><p>1、数据迁移LKN.Project.Web.DbMigrator</p><p>2、运行项目LKN.Project.Web.HttpApi.Host</p><h3 id="如何快速创建abp-vnnext-console项目" tabindex="-1"><a class="header-anchor" href="#如何快速创建abp-vnnext-console项目" aria-hidden="true">#</a> 如何快速创建Abp vNnext Console项目</h3><p>条件</p><p>1、ABP CLI</p><h3 id="abp-vnnext-web项目运行原理" tabindex="-1"><a class="header-anchor" href="#abp-vnnext-web项目运行原理" aria-hidden="true">#</a> Abp vNnext Web项目运行原理</h3><p>条件</p><h3 id="abp-vnnext-web-api设计思想" tabindex="-1"><a class="header-anchor" href="#abp-vnnext-web-api设计思想" aria-hidden="true">#</a> Abp vNnext Web Api设计思想？</h3><p>条件</p><p>1、DDD</p><p>步骤</p><p>1、次再讲</p>`,118);function p(m,h){const i=a("router-link");return r(),v("div",null,[c,e("nav",u,[e("ul",null,[e("li",null,[l(i,{to:"#目录"},{default:d(()=>[n("目录")]),_:1})]),e("li",null,[l(i,{to:"#什么是abp-vnnext"},{default:d(()=>[n("什么是ABP vNnext")]),_:1})]),e("li",null,[l(i,{to:"#什么是框架"},{default:d(()=>[n("什么是框架")]),_:1})]),e("li",null,[l(i,{to:"#什么是asp-net-core-web应用程序框架"},{default:d(()=>[n("什么是Asp.Net Core Web应用程序框架")]),_:1})]),e("li",null,[l(i,{to:"#什么是module"},{default:d(()=>[n("什么是Module?")]),_:1})]),e("li",null,[l(i,{to:"#module好处"},{default:d(()=>[n("Module好处")]),_:1})]),e("li",null,[l(i,{to:"#如何使用module"},{default:d(()=>[n("如何使用Module?")]),_:1}),e("ul",null,[e("li",null,[l(i,{to:"#console项目使用module"},{default:d(()=>[n("Console项目使用Module")]),_:1})]),e("li",null,[l(i,{to:"#如何使用ioc"},{default:d(()=>[n("如何使用IOC?")]),_:1})]),e("li",null,[l(i,{to:"#如何使用第三方模块autofac"},{default:d(()=>[n("如何使用第三方模块Autofac？")]),_:1})]),e("li",null,[l(i,{to:"#如何调用自定义模块"},{default:d(()=>[n("如何调用自定义模块？")]),_:1})]),e("li",null,[l(i,{to:"#如何调用插件模块"},{default:d(()=>[n("如何调用插件模块？")]),_:1})]),e("li",null,[l(i,{to:"#如何在项目中使用插件"},{default:d(()=>[n("如何在项目中使用插件")]),_:1})]),e("li",null,[l(i,{to:"#web项目如何使用abp-vnext-module"},{default:d(()=>[n("Web项目如何使用Abp vNext(Module)")]),_:1})]),e("li",null,[l(i,{to:"#web项目如何使用autofac"},{default:d(()=>[n("Web项目如何使用Autofac")]),_:1})]),e("li",null,[l(i,{to:"#web项目如何引用自定义模块项目"},{default:d(()=>[n("Web项目如何引用自定义模块项目")]),_:1})]),e("li",null,[l(i,{to:"#web模块如何被其他模块依赖"},{default:d(()=>[n("Web模块如何被其他模块依赖")]),_:1})]),e("li",null,[l(i,{to:"#web模块被依赖的应用场景"},{default:d(()=>[n("Web模块被依赖的应用场景")]),_:1})]),e("li",null,[l(i,{to:"#模块执行原理-volo-abp-core如何执行模块"},{default:d(()=>[n("模块执行原理？Volo.Abp.Core如何执行模块")]),_:1})]),e("li",null,[l(i,{to:"#模块执行原理分析"},{default:d(()=>[n("模块执行原理分析")]),_:1})]),e("li",null,[l(i,{to:"#模块总结"},{default:d(()=>[n("模块总结：")]),_:1})]),e("li",null,[l(i,{to:"#如何快速创建abp-vnext项目"},{default:d(()=>[n("如何快速创建Abp vNext项目")]),_:1})]),e("li",null,[l(i,{to:"#如何运行abp-vnext-web项目"},{default:d(()=>[n("如何运行Abp vNext Web项目")]),_:1})]),e("li",null,[l(i,{to:"#如何快速创建abp-vnnext-web-api项目"},{default:d(()=>[n("如何快速创建Abp vNnext Web Api项目")]),_:1})]),e("li",null,[l(i,{to:"#如何运行abp-vnnext-web-api项目"},{default:d(()=>[n("如何运行Abp vNnext Web Api项目")]),_:1})]),e("li",null,[l(i,{to:"#如何快速创建abp-vnnext-console项目"},{default:d(()=>[n("如何快速创建Abp vNnext Console项目")]),_:1})]),e("li",null,[l(i,{to:"#abp-vnnext-web项目运行原理"},{default:d(()=>[n("Abp vNnext Web项目运行原理")]),_:1})]),e("li",null,[l(i,{to:"#abp-vnnext-web-api设计思想"},{default:d(()=>[n("Abp vNnext Web Api设计思想？")]),_:1})])])])])]),b])}const x=s(t,[["render",p],["__file","abp002.html.vue"]]);export{x as default};
