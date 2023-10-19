---
title: '微服务分布式权限'
date: 2023-10-17  
tags:
- '微服务分布式权限'
- 'abp'
- 'dotnet'
- 'Id'
categories:
- '技术'
---

## 目录
[[toc]]

## 分布式权限核心概念
**什么是权限**  
权限：就是一个字符串   
服务端限制客户端能够做什么事情。  

**什么是分布式权限**   
我们由一个地方统一管理权限的权限就叫分布式管理权限。  

就是分布式系统中多个节点通信时，对各请求的身份验证。然后这些各个节点身份验证，我们单独提出一个节点（微服务）来做统一的验证，从而降低了维护成本，提高效率。
核心就是统一管理各节点的请求验证，并采用AOP模式实现分布式系统的权限，来确保系统的安全。   

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0001image.png)    


## 分布式权限应用

分布式权限主要应用在微服务系统中，各节点通信请求身份验证。

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0002image.png)    

## 分布式权限-权限微服务创建 
条件   
1、电商微服务系统   
2、LKN.AuthMicroService  

步骤     
1、权限微服务创建   
   采用abp CLI 指令创建DDD权限微服务项目
   ``` bash
    abp new LKN.AuthMicroService -t module --dbms mysql -no-ui  -o  moduls\LKN.AuthMicroService -v 7.3.0
   ```  
![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0003image.png)    


2、权限微服务导入    

 权限微服务导入项目中

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0004image.png)    

3、权限微服务集成IdentityServer4（作用：帮助所有微服务实现权限校验）   

abp已经封装好IdentityServer4,只需对应模块引用即可。

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0005image.png)    

4、权限微服务迁移IdentityServer4对应的表。     
   abpCLI默认生成的 `LKN.AuthMicroService.HttpApi.Host` 的数据库是Sqlserver, 我们需要自己添加mysql   
   nuget 引用 `Volo.Abp.EntityFrameworkCore.MySQL`,修改 `AuthMicroServiceHttpApiHostModule` 类 DependsOn中添加mysql依赖注入 ，并修改相应的配置。   

   项目中集成abp  IdentityServerEntittyFrameworkCore, 需要在项目EF模块中找到`AuthMicoServiceEntityFrameworkCoreModule.cs`文件 ，并在DepensOn依赖注入“`AbpIdentityServerEntityFrameworkCoreModule`”

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0006image.png)    

   EntityFrameworkCore 目录下，找到 `AuthMicroServiceDbContextModelCreatingExtensions` 添加 id4表  
   
![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0007image.png)    

   让在AuthMicoServiceDbContext 类，实现abp接口`IIdentityServerDbContext` ,这里可以从源中copy

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0008image.png)    
    
   如果不想使用abp的EF上下文本对象类，也可以替换AuthMicroServiceDBContext

  ![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0009image.png)  
   
   去掉IdentityServer4前缀
 
  ![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0010image.png)  

   1、生成迁移文件    
   打开项目目录使用cmd,dotnet ef 生成迁移文件
   ``` bash
   dotnet ef migrations add authmicroservices
  
   ```
   2、执行迁移文件，生成了权限服务表   
   ``` bash
    dotnet ef database update
   ```
  ![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0011image.png)  

5、落地权限微服务，创建表对应的接口   

1、ApiScope:API作用域，具体的每一个微服务   
2、ApiResource:微服务API资源，微服务每一个接口     
    增删改查接口

3、Client:客户端，访问微服务一端   
4、IdentityResource:身份资源，用户身份权限管理   
5、PersistedGrant:配置表，持续化认证，认证类型  
   oicd auth2 jwt code   
6、DeviceFlowCodes: 配置表，设备码，作用不大。  


## 分布式权限-IdentityServer4集成  

项目模块`LKN.AuthMicroService.Domain`、 `LKN.AuthMicroService.Domain.Shared`、`LKN.AuthMicroService.EntityFrameworkCore` 集成 IdentityServer4 ，使用nuget修改包之后,分别在Module文件中依赖注册id4的module文件。

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0012image.png)  

1、`LKN.AuthMicroService.Domain`中的`AuthMicroServiceDomainModule` 文件添加 ` typeof(AbpIdentityServerDomainModule)`

``` c# 
[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(AuthMicroServiceDomainSharedModule),
    typeof(AbpIdentityServerDomainModule)
)]
public class AuthMicroServiceDomainModule : AbpModule
{

}
```

2、`LKN.AuthMicroService.Domain.Shared`中的 `AuthMicroServiceDomainSharedModule` 添加 `typeof(AbpIdentityServerDomainSharedModule)`  

``` c# 
[DependsOn(
    typeof(AbpValidationModule),
    typeof(AbpDddDomainSharedModule),
    typeof(AbpIdentityServerDomainSharedModule)
)]
public class AuthMicroServiceDomainSharedModule : AbpModule
{
```

3、`LKN.AuthMicroService.EntityFrameworkCore`中的 `AbpIdentityServerEntityFrameworkCoreModule` 添加 ` typeof(AbpIdentityServerEntityFrameworkCoreModule)`

``` c#
[DependsOn(
    typeof(AuthMicroServiceDomainModule),
    typeof(AbpEntityFrameworkCoreModule),
    typeof(AbpIdentityServerEntityFrameworkCoreModule)// 集成
)]
public class AuthMicroServiceEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext<AuthMicroServiceDbContext>(options =>
        {
                /* Add custom repositories here. Example:
                 * options.AddRepository<Question, EfCoreQuestionRepository>();
                 */
        });
    }
}

```

## 分布式权限微服务落地

分布式权限微服务项目已经创建成功，并且集成了identiytserver4,现在我们根据自己的需求实现`ApiResources`的添加服务。

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0013image.png)    

IdentityServer4 EFCore 上下文对象的`IIdentityServerDbContext`设置，之前我们在自己的`AuthMicroServiceDbContext`类，已经继承`IIdentityServerDbContext`接口，并已经实现，
但是运行调用接口时:
1、报错异常：  

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0014image.png)  

1.1、解决方式在`appsettings.json`  添加 数据库连接`AbpIdentityServer`。
 
![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0015image.png)  

为什么是这个名称呢，需要查看源码。

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0016image.png)  
![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0017image.png)  

1.2、解决方式基于原有数据库连接字符串，可以`AuthMicroServiceDbContext`添加特替换`IIdentityServerDbContext`

``` c#
[ConnectionStringName(AuthMicroServiceDbProperties.ConnectionStringName)]
[ReplaceDbContext(typeof(IIdentityServerDbContext))] // 替换IIdentityServerDbContext
public class AuthMicroServiceDbContext : AbpDbContext<AuthMicroServiceDbContext>, IAuthMicroServiceDbContext, IIdentityServerDbContext
{
   ....
}
```
2、异常
调用接口时，发现数据库表名称不存在，仔细观察发现多个前缀`IdentityServer`
![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0018image.png)  

解决方式去掉`IdentityServer`的前缀，我们需要在`LKN.AuthMicroService.HttpApi.Host`模块中，找到`AuthMicroServiceHttpApiHostModule`文件，并在`ConfigureServices` 添加 `AbpIdentityServerDbProperties.DbTablePrefix = "";`  即可

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0019image.png)  

修改以问题，调用接口执行成功   

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0020image.png)  


## 单点登录

## 分布式权限校验

## 微服务校验
分布式权限校验分析图
![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0000image.png)  


## 分布式权限AuthMicoService落地

检查IdentityServer4是否可以成功访问`https://localhost:44386/.well-known/openid-configuration`
                                  

![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0021image.png)  

不能访问，表示配置没有成功。

1、需要引用身份模块`identity`集成到项目中： `Volo.Abp.Identity.EntityFrameworkCore`、`Volo.Abp.Identity.Application.Contracts`   
可以按模块引用，也可以单独在`LKN.AuthMicroService.HttpApi.Host`模块项目引用（也可以通过nuget包添加）。  

``` c# 
	  <PackageReference Include="Volo.Abp.Identity.EntityFrameworkCore" Version="7.3.0" />
	  <PackageReference Include="Volo.Abp.Identity.Application.Contracts" Version="7.3.0" />
	  <PackageReference Include=" Volo.Abp.PermissionManagement.Domain.Identity" Version="7.3.0" />
```
在`AuthMicroServiceHttpApiHostModule` 依赖注入 `typeof(AbpIdentityEntityFrameworkCoreModule)`,    `typeof(AbpIdentityApplicationContractsModule)`,`  typeof(AbpPermissionManagementDomainIdentityModule)`
``` c#
[DependsOn(
 ....
    typeof(AbpIdentityEntityFrameworkCoreModule),
    typeof(AbpIdentityApplicationContractsModule),
    typeof(AbpPermissionManagementDomainIdentityModule),
  ....
    )]
public class AuthMicroServiceHttpApiHostModule : AbpModule
{
   ...
}
```
2、需要引用账号模块`account`集成到项目中,主要功能登录、注册、退出，集成项目`Volo.Abp.Account.Web.IdentityServer` 、`Volo.Abp.Account.Application`
 在`LKN.AuthMicroService.HttpApi.Host`模块项目引用（也可以通过nuget包添加）
 ```c#
 	  <PackageReference Include="Volo.Abp.Account.Web.IdentityServer" Version="7.3.0" />
	  <PackageReference Include="Volo.Abp.Account.Application" Version="7.3.0" />
 ```
在`AuthMicroServiceHttpApiHostModule` 依赖注入 `typeof(AbpAccountWebIdentityServerModule)`,    `typeof(AbpAccountApplicationModule)`
``` c#
[DependsOn(
 ....
    typeof(AbpAccountWebIdentityServerModule),
    typeof(AbpAccountApplicationModule),
  ....
    )]
public class AuthMicroServiceHttpApiHostModule : AbpModule
{
   ...
}
```
注意：`AuthMicroServiceHttpApiHostModule` 中需要添加 `app.UseIdentityServer()`,`app.UseAuthentication()`,` app.UseAuthorization()` 否则启动 identityServer4会失败。  

``` c#
 
    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var app = context.GetApplicationBuilder();
        var env = context.GetEnvironment();

        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseHsts();
        }

        app.UseHttpsRedirection();
        app.UseCorrelationId();
        app.UseStaticFiles();
        app.UseRouting();
        app.UseCors();
        app.UseAuthentication();
        //if (MultiTenancyConsts.IsEnabled)
        //{
        //    app.UseMultiTenancy();
        //}
        //app.UseAbpRequestLocalization();
        app.UseIdentityServer(); // 增加IdentityServer4
        app.UseAuthorization();
        app.UseSwagger();
        app.UseAbpSwaggerUI(options =>
        {
            options.SwaggerEndpoint("/swagger/v1/swagger.json", "Support APP API");

            var configuration = context.GetConfiguration();
            options.OAuthClientId(configuration["AuthServer:SwaggerClientId"]);
            options.OAuthScopes("AuthMicroService");
        });
        app.UseAuditing();
        app.UseAbpSerilogEnrichers();
        app.UseConfiguredEndpoints();
    }

```
``` bash
 启用identityserver4成功   https://localhost:44386/.well-known/openid-configuration
```
![Alt text](image-1.png)
![Alt text](/images/abpmicroservices/micro010/abpmicroservices0010_0022image.png)  

## 分布式权限AuthMicoService应用