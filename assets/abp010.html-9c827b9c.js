import{_ as d,r as l,o as r,c as t,a as e,b as s,w as a,d as i,e as u}from"./app-c1c3c937.js";const o={},c=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),v={class:"table-of-contents"},p=u(`<h1 id="核心组件-用户组件-权限模块" tabindex="-1"><a class="header-anchor" href="#核心组件-用户组件-权限模块" aria-hidden="true">#</a> 核心组件-用户组件-权限模块</h1><h2 id="什么是权限" tabindex="-1"><a class="header-anchor" href="#什么是权限" aria-hidden="true">#</a> 什么是权限</h2><p>权限就是权利，权力是限制人能够做什么事，权限就是限制用户能够在系统中做什么事</p><h2 id="为什么要使用权限" tabindex="-1"><a class="header-anchor" href="#为什么要使用权限" aria-hidden="true">#</a> 为什么要使用权限</h2><p>目的：在项目中使用权限模块，保证系统的安全。</p><p>如果没有用户，我们的系统可以被任何人访问，谁都可以进行攻击。</p><h3 id="什么是权限模块" tabindex="-1"><a class="header-anchor" href="#什么是权限模块" aria-hidden="true">#</a> 什么是权限模块</h3><p>管理权限的模块就是权限模块。例如：对于权限的增删改查</p><h2 id="电商项目中如何集成权限模块" tabindex="-1"><a class="header-anchor" href="#电商项目中如何集成权限模块" aria-hidden="true">#</a> 电商项目中如何集成权限模块</h2><h3 id="权限模块源码" tabindex="-1"><a class="header-anchor" href="#权限模块源码" aria-hidden="true">#</a> 权限模块源码</h3><p>下载地址：</p><p>https://github.com/abpframework/abp/tree/dev/modules/PermissionManagement</p><p>源码介绍：</p><h3 id="lkn-ebusiness-domain-shared如何集成权限模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain-shared如何集成权限模块" aria-hidden="true">#</a> LKN.EBusiness.Domain.Shared如何集成权限模块</h3><p>条件</p><p>1、Volo.Abp.PermissionManagement.Domain.Shared</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.PermissionManagement.Domain.Shared

2、然后在EBusinessDomainSharedModule文件上增加

[DependsOn(
        typeof(AbpPermissionManagementDomainSharedModule)
        )]
 public class EBusinessDomainSharedModule : AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-domain如何集成权限模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain如何集成权限模块" aria-hidden="true">#</a> LKN.EBusiness.Domain如何集成权限模块</h3><p>条件</p><p>1、Volo.Abp.PermissionManagement.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.PermissionManagement.Domain

2、然后在EBusinessDomainModule文件上增加

[DependsOn(
        typeof(AbpPermissionManagementDomainModule)
        )]
    public class EBusinessDomainSharedModule : AbpModule

 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-entityframeworkcore如何集成权限模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-entityframeworkcore如何集成权限模块" aria-hidden="true">#</a> LKN.EBusiness.EntityFrameworkCore如何集成权限模块</h3><p>条件</p><p>1、Volo.Abp.PermissionManagement.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.PermissionManagement.EntityFrameworkCore

2、然后在EBusinessEntityFrameworkCoreModule文件上增加

[DependsOn(
        typeof(AbpPermissionManagementEntityFrameworkCoreModule)
        )]
    public class EBusinessEntityFrameworkCoreModule: AbpModule

 {}
 3、然后在EBusinessDbContext类上实现IPermissionManagementDbContext上下文
 public DbSet&lt;PermissionGrant&gt; PermissionGrants { get; }
 
 4、然后在EBusinessDbContext类上添加
 [ReplaceDbContext(typeof(IPermissionManagementDbContext))]
    [ConnectionStringName(&quot;Default&quot;)]
    public class EBusinessDbContext : 
        AbpDbContext&lt;EBusinessDbContext&gt;,
        IPermissionManagementDbContext
    {}
    
 5、然后在OnModelCreating方法中添加
 protected override void OnModelCreating(ModelBuilder builder)
 {
 	base.OnModelCreating(builder);

    /* Include modules to your migration db context */
    .....          
    builder.ConfigurePermissionManagement();
    .....
 }
 
 6、然后在LKN.EBusiness.EntityFrameworkCore生成迁移文件
 使用PCM生成迁移文件
 Add-Migration Created_Product_Entity -c EBusinessDbContext
 Update-Database
 
 7、查询数据表生成了很多用户表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-application-contracts如何集成权限模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application-contracts如何集成权限模块" aria-hidden="true">#</a> LKN.EBusiness.Application.Contracts如何集成权限模块</h3><p>条件</p><p>1、Volo.Abp.PermissionManagement.Application.Contracts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.PermissionManagement.Application.Contracts

2、然后在EBusinessApplicationContractsModule文件上增加

[DependsOn(
        typeof(AbpPermissionManagementApplicationContractsModule)
        )]
    public class EBusinessApplicationContractsModule: AbpModule

 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-application如何集成权限模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application如何集成权限模块" aria-hidden="true">#</a> LKN.EBusiness.Application如何集成权限模块</h3><p>条件</p><p>1、Volo.Abp.PermissionManagement.Application</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在项目中通过Nuget下载

Volo.Abp.PermissionManagement.Application.Contracts

2、然后在EBusinessApplicationModule文件上增加

[DependsOn(
        typeof(AbpPermissionManagementApplicationModule)
        )]
    public class EBusinessApplicationContractsModule: AbpModule

 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-httpapi如何集成权限模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-httpapi如何集成权限模块" aria-hidden="true">#</a> LKN.EBusiness.HttpApi如何集成权限模块</h3><p>条件</p><p>1、Volo.Abp.PermissionManagement.HttpApi</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.PermissionManagement.Application.Contracts

2、然后在EBusinessHttpApiModule文件上增加

[DependsOn(
        typeof(AbpPermissionManagementHttpApiModule)
 )]
 public class EBusinessApplicationContractsModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-httpapi-host如何集成权限模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-httpapi-host如何集成权限模块" aria-hidden="true">#</a> LKN.EBusiness.HttpApi.Host如何集成权限模块</h3><p>条件</p><p>1、LKN.EBusiness.HttpApi.Host</p><p>2、Volo.Abp.Authorization</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤
1、先进入到EBusinessHttpApiHostModule中
2、然后在类中OnApplicationInitialization方法中添加
public override void ConfigureServices(ServiceConfigurationContext context)
{
    context.Services.AddAuthorizationCore();
}
3、然后在类中OnApplicationInitialization方法中添加
public override void ConfigureServices(ServiceConfigurationContext context)
{
    context.Services.AddAuthorizationCore();
}
public override void OnApplicationInitialization(ApplicationInitializationContext context)
{
     app.UseAuthorization();
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="电商项目中权限应用" tabindex="-1"><a class="header-anchor" href="#电商项目中权限应用" aria-hidden="true">#</a> 电商项目中权限应用</h2><h3 id="业务场景介绍" tabindex="-1"><a class="header-anchor" href="#业务场景介绍" aria-hidden="true">#</a> 业务场景介绍</h3><p>业务场景：查询商品，普通用户可以随时查询。无法区分是注册用户还是普通用户，如果不区分，会导致系统不安全。</p><p>所以。需要使用是否登录来区分。</p><h3 id="商品添加添加登录权限" tabindex="-1"><a class="header-anchor" href="#商品添加添加登录权限" aria-hidden="true">#</a> 商品添加添加登录权限</h3><p>条件</p><p>1、ProductAppService</p><p>2、Authorize</p><p>步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、在ProductAppService类添加Authorize特性
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="商品登录权限执行原理" tabindex="-1"><a class="header-anchor" href="#商品登录权限执行原理" aria-hidden="true">#</a> 商品登录权限执行原理</h3><p>条件</p><p>1、</p><h3 id="商品接口添加权限" tabindex="-1"><a class="header-anchor" href="#商品接口添加权限" aria-hidden="true">#</a> 商品接口添加权限</h3><p>条件</p><p>1、LKN.EBusiness.Application.Contracts</p><p>2、EBusinessPermissionDefinitionProvider</p><p>3、EBusinessPermissions</p><p>步骤</p><p>1、先在LKN.EBusiness.Application.Contracts项目中EBusinessPermissionDefinitionProvider类中添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class EBusinessPermissionDefinitionProvider : PermissionDefinitionProvider
    {
        public override void Define(IPermissionDefinitionContext context)
        {
            var myGroup = context.AddGroup(&quot;EBusiness&quot;);
            var permissionDefinition = myGroup.AddPermission(&quot;EBusiness.Products&quot;);
       /* permissionDefinition.AddChild(EBusinessPermissions.Products.Select);
        permissionDefinition.AddChild(EBusinessPermissions.Products.Update);
        permissionDefinition.AddChild(EBusinessPermissions.Products.Create);
        permissionDefinition.AddChild(EBusinessPermissions.Products.Delete);*/
    	}
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="商品如何授权" tabindex="-1"><a class="header-anchor" href="#商品如何授权" aria-hidden="true">#</a> 商品如何授权</h4><p>条件</p><p>1、LKN.EBusiness.Application</p><p>2、ProductAppService</p><p>步骤</p><p>1、先在LKN.EBusiness.Application.Contracts项目中EBusinessPermissionDefinitionProvider类中添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> [Authorize(&quot;EBusiness.Products&quot;)]
    public class ProductAppService : CrudAppService&lt;
                                    Product, 
                                    ProductDto, 
                                    Guid, 
                                    PagedAndSortedResultRequestDto,
                                    CreateProductDto, 
                                    UpdateProductDto&gt;, IProductAppService

}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用户如何授权" tabindex="-1"><a class="header-anchor" href="#用户如何授权" aria-hidden="true">#</a> 用户如何授权</h4><p>条件</p><p>1、EBusinessPermissionsAppService</p><p>2、IEBusinessPermissionsAppService</p><p>步骤</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先创建IEBusinessPermissionsAppService接口
public interface IEBusinessPermissionsAppService
    {
        public  Task AddRolePermissionAsync(string roleName, string permission);

        public  Task AddUserPermissionAsync(Guid userId, string permission);
    }
2、然后创建EBusinessPermissionsAppService实现类
3、然后调用调用接口进行授权

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="商品接口授权子权限-增删改查" tabindex="-1"><a class="header-anchor" href="#商品接口授权子权限-增删改查" aria-hidden="true">#</a> 商品接口授权子权限（增删改查）</h3><p>条件</p><p>1、EBusinessPermissionDefinitionProvider</p><p>步骤</p><p>1、先在EBusinessPermissionDefinitionProvider类中添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class EBusinessPermissionDefinitionProvider : PermissionDefinitionProvider
{
        public override void Define(IPermissionDefinitionContext context)
        {
     
         var myGroup = context.AddGroup(&quot;EBusiness&quot;);
         var permissionDefinition = myGroup.AddPermission(&quot;EBusiness.Products&quot;);

         permissionDefinition.AddChild(&quot;EBusiness.Products.Select&quot;);
     }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="商品如何授子权" tabindex="-1"><a class="header-anchor" href="#商品如何授子权" aria-hidden="true">#</a> 商品如何授子权</h4><p>原理同上。</p><h4 id="用户如何授权-1" tabindex="-1"><a class="header-anchor" href="#用户如何授权-1" aria-hidden="true">#</a> 用户如何授权</h4><p>原理同上。</p><h4 id="商品接口权限复用" tabindex="-1"><a class="header-anchor" href="#商品接口权限复用" aria-hidden="true">#</a> 商品接口权限复用</h4><p>条件</p><p>1、EBusinessPermissions</p><p>步骤</p><p>1、先在EBusinessPermissions类中把权限定义全部复制</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public static class EBusinessPermissions
    {
        public const string GroupName = &quot;EBusiness&quot;;
    //Add your own permission names. Example:
    public const string ProductPermission = GroupName + &quot;.Products&quot;;
    
   public static class Products
    {
        public const string Default = GroupName + &quot;.Products&quot;;
        public const string Select = Default + &quot;.Select&quot;;
        public const string Create = Default + &quot;.Create&quot;;
        public const string Update = Default + &quot;.Update&quot;;
        public const string Delete = Default + &quot;.Delete&quot;;
        public const string ManagePermissions = Default + &quot;.ManagePermissions&quot;;
    }

    public static class Orders
    {
        public const string Default = GroupName + &quot;.Orders&quot;;
        public const string Select = Default + &quot;.Select&quot;;
        public const string Create = Default + &quot;.Create&quot;;
        public const string Update = Default + &quot;.Update&quot;;
        public const string Delete = Default + &quot;.Delete&quot;;
        public const string ManagePermissions = Default + &quot;.ManagePermissions&quot;;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后在EBusinessPermissionDefinitionProvider和商品接口中引用</p><h2 id="电商项目中权限原理" tabindex="-1"><a class="header-anchor" href="#电商项目中权限原理" aria-hidden="true">#</a> 电商项目中权限原理</h2><h3 id="权限定义原理" tabindex="-1"><a class="header-anchor" href="#权限定义原理" aria-hidden="true">#</a> 权限定义原理</h3><p>条件</p><p>1、PermissionDefinition</p><p>2、PermissionDefinitionProvider</p><p>3、PermissionDefinitionManager</p><p>步骤</p><p>1、PermissionDefinition执行定义</p><p>2、PermissionDefinitionProvider提供权限。</p><p>3、PermissionDefinitionManager 核心执行</p><h3 id="权限授权原理" tabindex="-1"><a class="header-anchor" href="#权限授权原理" aria-hidden="true">#</a> 权限授权原理</h3><p>条件</p><p>1、PermissionManager</p><p>2、PermissionManagementProvider</p><p>3、IPermissionGrantRepository</p><p>步骤</p><p>1、</p><h3 id="权限校验-鉴权-原理" tabindex="-1"><a class="header-anchor" href="#权限校验-鉴权-原理" aria-hidden="true">#</a> 权限校验(鉴权)原理</h3><p>条件</p><p>1、AuthorizationInterceptor</p><p>2、MethodInvocationAuthorizationService</p><p>3、AbpAuthorizationService</p><p>4、PermissionRequirementHandler</p><p>5、PermissionChecker</p><p>6、UserPermissionValueProvider</p><p>步骤</p><h2 id="电商项目中权限自定义" tabindex="-1"><a class="header-anchor" href="#电商项目中权限自定义" aria-hidden="true">#</a> 电商项目中权限自定义</h2><h3 id="权限授权自定义" tabindex="-1"><a class="header-anchor" href="#权限授权自定义" aria-hidden="true">#</a> 权限授权自定义</h3><p>条件</p><p>1、UserEmailPermissionManagementProvider</p><p>步骤</p><h3 id="权限校验自定义" tabindex="-1"><a class="header-anchor" href="#权限校验自定义" aria-hidden="true">#</a> 权限校验自定义</h3><p>条件</p><p>1、UserEmailPermissionValueProvider</p><p>步骤</p><h2 id="电商项目中web应用权限" tabindex="-1"><a class="header-anchor" href="#电商项目中web应用权限" aria-hidden="true">#</a> 电商项目中Web应用权限</h2><p>条件</p><p>1、Volo.Abp.PermissionManagement.Web如何集成权限模块</p><p>条件</p><p>1、Volo.Abp.PermissionManagement.Web</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在项目中通过Nuget下载
Volo.Abp.PermissionManagement.Web

2、然后在EBusinessApplicationModule文件上增加
[DependsOn(
	typeof(AbpPermissionManagementWebModule)
)]
 public class EBusinessWebModule: AbpModule
 {}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="权限模块如何在页面上展示用户数据" tabindex="-1"><a class="header-anchor" href="#权限模块如何在页面上展示用户数据" aria-hidden="true">#</a> 权限模块如何在页面上展示用户数据？</h3><p>条件</p><p>1、Index.cshtml</p><p>2、index.js</p><p>步骤</p><h3 id="扩展-权限模块如何在页面上展示用其他数据" tabindex="-1"><a class="header-anchor" href="#扩展-权限模块如何在页面上展示用其他数据" aria-hidden="true">#</a> 扩展：权限模块如何在页面上展示用其他数据？</h3><h3 id="oa系统如何调用用户模块" tabindex="-1"><a class="header-anchor" href="#oa系统如何调用用户模块" aria-hidden="true">#</a> OA系统如何调用用户模块</h3><p>条件</p><p>1、LKN.EBusiness.HttpApi.Client</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤
1、先在项目中通过Nuget下载
LKN.EBusiness.HttpApi.Client

2、然后在LKN.OA文件上增加
 [DependsOn(
	typeof(AbpPermissionManagementHttpApiClientModule)
 )]
 public class OAModule: AbpModule
 {}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="oa系统调用用户模块原理" tabindex="-1"><a class="header-anchor" href="#oa系统调用用户模块原理" aria-hidden="true">#</a> OA系统调用用户模块原理？</h4><p>条件</p><p>1、动态代理</p><p>2、IOC</p><h3 id="如何在javascript添加权限" tabindex="-1"><a class="header-anchor" href="#如何在javascript添加权限" aria-hidden="true">#</a> 如何在JavaScript添加权限</h3><p>条件</p><p>1、abp.auth.isGranted(&#39;MyPermissionName&#39;);</p><h3 id="如何手动添加鉴权" tabindex="-1"><a class="header-anchor" href="#如何手动添加鉴权" aria-hidden="true">#</a> 如何手动添加鉴权</h3><p>条件</p><p>1、await AuthorizationService.CheckAsync(&quot;Author_Management_Create_Books&quot;);</p><h2 id="扩展-如何做数据权限" tabindex="-1"><a class="header-anchor" href="#扩展-如何做数据权限" aria-hidden="true">#</a> 扩展：如何做数据权限</h2><h2 id="扩展-如何做数据权限-1" tabindex="-1"><a class="header-anchor" href="#扩展-如何做数据权限-1" aria-hidden="true">#</a> 扩展：如何做数据权限</h2>`,156);function m(b,h){const n=l("router-link");return r(),t("div",null,[c,e("nav",v,[e("ul",null,[e("li",null,[s(n,{to:"#目录"},{default:a(()=>[i("目录")]),_:1})]),e("li",null,[s(n,{to:"#什么是权限"},{default:a(()=>[i("什么是权限")]),_:1})]),e("li",null,[s(n,{to:"#为什么要使用权限"},{default:a(()=>[i("为什么要使用权限")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#什么是权限模块"},{default:a(()=>[i("什么是权限模块")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中如何集成权限模块"},{default:a(()=>[i("电商项目中如何集成权限模块")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#权限模块源码"},{default:a(()=>[i("权限模块源码")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-domain-shared如何集成权限模块"},{default:a(()=>[i("LKN.EBusiness.Domain.Shared如何集成权限模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-domain如何集成权限模块"},{default:a(()=>[i("LKN.EBusiness.Domain如何集成权限模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-entityframeworkcore如何集成权限模块"},{default:a(()=>[i("LKN.EBusiness.EntityFrameworkCore如何集成权限模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-application-contracts如何集成权限模块"},{default:a(()=>[i("LKN.EBusiness.Application.Contracts如何集成权限模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-application如何集成权限模块"},{default:a(()=>[i("LKN.EBusiness.Application如何集成权限模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-httpapi如何集成权限模块"},{default:a(()=>[i("LKN.EBusiness.HttpApi如何集成权限模块")]),_:1})]),e("li",null,[s(n,{to:"#lkn-ebusiness-httpapi-host如何集成权限模块"},{default:a(()=>[i("LKN.EBusiness.HttpApi.Host如何集成权限模块")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中权限应用"},{default:a(()=>[i("电商项目中权限应用")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#业务场景介绍"},{default:a(()=>[i("业务场景介绍")]),_:1})]),e("li",null,[s(n,{to:"#商品添加添加登录权限"},{default:a(()=>[i("商品添加添加登录权限")]),_:1})]),e("li",null,[s(n,{to:"#商品登录权限执行原理"},{default:a(()=>[i("商品登录权限执行原理")]),_:1})]),e("li",null,[s(n,{to:"#商品接口添加权限"},{default:a(()=>[i("商品接口添加权限")]),_:1})]),e("li",null,[s(n,{to:"#商品接口授权子权限-增删改查"},{default:a(()=>[i("商品接口授权子权限（增删改查）")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中权限原理"},{default:a(()=>[i("电商项目中权限原理")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#权限定义原理"},{default:a(()=>[i("权限定义原理")]),_:1})]),e("li",null,[s(n,{to:"#权限授权原理"},{default:a(()=>[i("权限授权原理")]),_:1})]),e("li",null,[s(n,{to:"#权限校验-鉴权-原理"},{default:a(()=>[i("权限校验(鉴权)原理")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中权限自定义"},{default:a(()=>[i("电商项目中权限自定义")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#权限授权自定义"},{default:a(()=>[i("权限授权自定义")]),_:1})]),e("li",null,[s(n,{to:"#权限校验自定义"},{default:a(()=>[i("权限校验自定义")]),_:1})])])]),e("li",null,[s(n,{to:"#电商项目中web应用权限"},{default:a(()=>[i("电商项目中Web应用权限")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#权限模块如何在页面上展示用户数据"},{default:a(()=>[i("权限模块如何在页面上展示用户数据？")]),_:1})]),e("li",null,[s(n,{to:"#扩展-权限模块如何在页面上展示用其他数据"},{default:a(()=>[i("扩展：权限模块如何在页面上展示用其他数据？")]),_:1})]),e("li",null,[s(n,{to:"#oa系统如何调用用户模块"},{default:a(()=>[i("OA系统如何调用用户模块")]),_:1})]),e("li",null,[s(n,{to:"#如何在javascript添加权限"},{default:a(()=>[i("如何在JavaScript添加权限")]),_:1})]),e("li",null,[s(n,{to:"#如何手动添加鉴权"},{default:a(()=>[i("如何手动添加鉴权")]),_:1})])])]),e("li",null,[s(n,{to:"#扩展-如何做数据权限"},{default:a(()=>[i("扩展：如何做数据权限")]),_:1})]),e("li",null,[s(n,{to:"#扩展-如何做数据权限-1"},{default:a(()=>[i("扩展：如何做数据权限")]),_:1})])])]),p])}const g=d(o,[["render",m],["__file","abp010.html.vue"]]);export{g as default};
