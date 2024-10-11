import{_ as r,r as l,o,c,a as e,b as n,w as s,d as i,e as t}from"./app-c1c3c937.js";const u={},p=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),h={class:"table-of-contents"},b=t('<h2 id="核心组件-用户组件-用户身份模块" tabindex="-1"><a class="header-anchor" href="#核心组件-用户组件-用户身份模块" aria-hidden="true">#</a> 核心组件-用户组件-用户身份模块</h2><h2 id="什么是用户身份模块" tabindex="-1"><a class="header-anchor" href="#什么是用户身份模块" aria-hidden="true">#</a> 什么是用户身份模块</h2><p>在ABP vNext项目中集成用户身份，就叫做用户身份模块</p><p>目的：在项目中使用用户身份模块，保证系统的安全。</p><p>如果没有用户，我们的系统可以被任何人访问，谁都可以进行攻击。</p><h2 id="在abp-vnext电商项目中如何集成用户身份模块" tabindex="-1"><a class="header-anchor" href="#在abp-vnext电商项目中如何集成用户身份模块" aria-hidden="true">#</a> 在ABP vNext电商项目中如何集成用户身份模块</h2><h3 id="用户身份模块源码" tabindex="-1"><a class="header-anchor" href="#用户身份模块源码" aria-hidden="true">#</a> 用户身份模块源码</h3><p>下载地址：</p>',8),v={href:"https://github.com/abpframework/abp/tree/dev/modules/identity",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>源码介绍：</p><h3 id="lkn-ebusiness-domain-shared如何集成用户身份模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain-shared如何集成用户身份模块" aria-hidden="true">#</a> LKN.EBusiness.Domain.Shared如何集成用户身份模块</h3><p>条件</p><p>1、Volo.Abp.Identity.Domain.Shared</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.Identity.Domain.Shared

2、然后在EBusinessDomainSharedModule文件上增加

[DependsOn(
        typeof(AbpIdentityDomainSharedModule)
        )]
    public class EBusinessDomainSharedModule : AbpModule

 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-domain如何集成用户身份模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-domain如何集成用户身份模块" aria-hidden="true">#</a> LKN.EBusiness.Domain如何集成用户身份模块</h3><p>条件</p><p>1、Volo.Abp.Identity.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.Identity.Domain

2、然后在EBusinessDomainModule文件上增加

[DependsOn(
  typeof(AbpIdentityDomainModule)
 )]
 public class EBusinessDomainSharedModule : AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-entityframeworkcore如何集成用户身份模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-entityframeworkcore如何集成用户身份模块" aria-hidden="true">#</a> LKN.EBusiness.EntityFrameworkCore如何集成用户身份模块</h3><p>条件</p><p>1、Volo.Abp.Identity.Domain</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.Identity.EntityFrameworkCore

2、然后在EBusinessEntityFrameworkCoreModule文件上增加

[DependsOn(
        typeof(AbpIdentityEntityFrameworkCoreModule)
        )]
    public class EBusinessEntityFrameworkCoreModule: AbpModule

 {}
 3、然后在EBusinessDbContext类上实现IIdentityDbContext上下文
 public DbSet&lt;IdentityUser&gt; Users { get; set; }
 public DbSet&lt;IdentityRole&gt; Roles { get; set; }
 public DbSet&lt;IdentityClaimType&gt; ClaimTypes { get; set; }
 public DbSet&lt;OrganizationUnit&gt; OrganizationUnits { get; set; }
 public DbSet&lt;IdentitySecurityLog&gt; SecurityLogs { get; set; }
 public DbSet&lt;IdentityLinkUser&gt; LinkUsers { get; set; }
 
 4、然后在EBusinessDbContext类上添加
 [ReplaceDbContext(typeof(IIdentityDbContext))]
    [ConnectionStringName(&quot;Default&quot;)]
    public class EBusinessDbContext : 
        AbpDbContext&lt;EBusinessDbContext&gt;,
        IIdentityDbContext
    {}
    
 5、然后在OnModelCreating方法中添加
 protected override void OnModelCreating(ModelBuilder builder)
 {
 	base.OnModelCreating(builder);

    /* Include modules to your migration db context */
    .....          
    builder.ConfigureIdentity();
    .....
 }
 
 6、然后在LKN.EBusiness.EntityFrameworkCore生成迁移文件
 使用PCM生成迁移文件
 Add-Migration Created_Product_Entity -c EBusinessDbContext
 Update-Database
 
 7、查询数据表生成了很多用户表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-application-contracts如何集成用户身份模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application-contracts如何集成用户身份模块" aria-hidden="true">#</a> LKN.EBusiness.Application.Contracts如何集成用户身份模块</h3><p>条件</p><p>1、Volo.Abp.Identity.Application.Contracts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤
1、先在项目中通过Nuget下载

Volo.Abp.Identity.Application.Contracts

2、然后在EBusinessApplicationContractsModule文件上增加

[DependsOn(
        typeof(AbpIdentityApplicationContractsModule)
        )]
    public class EBusinessApplicationContractsModule: AbpModule

 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-application如何集成用户身份模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-application如何集成用户身份模块" aria-hidden="true">#</a> LKN.EBusiness.Application如何集成用户身份模块</h3><p>条件</p><p>1、Volo.Abp.Identity.Application</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在项目中通过Nuget下载

Volo.Abp.Identity.Application.Contracts

2、然后在EBusinessApplicationModule文件上增加

[DependsOn(
        typeof(AbpIdentityApplicationModule)
        )]
    public class EBusinessApplicationContractsModule: AbpModule

 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="lkn-ebusiness-httpapi如何集成用户身份模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-httpapi如何集成用户身份模块" aria-hidden="true">#</a> LKN.EBusiness.HttpApi如何集成用户身份模块</h3><p>条件</p><p>1、Volo.Abp.Identity.HttpApi</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先在项目中通过Nuget下载

Volo.Abp.Identity.Application.Contracts

2、然后在EBusinessHttpApiModule文件上增加

[DependsOn(
        typeof(AbpIdentityHttpApiModule)
        )]
    public class EBusinessApplicationContractsModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接口如何访问用户身份模块" tabindex="-1"><a class="header-anchor" href="#接口如何访问用户身份模块" aria-hidden="true">#</a> 接口如何访问用户身份模块？</h3><p>条件</p><p>1、LKN.EBusiness.HttpApi.Host</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤

1、先启动LKN.EBusiness.HttpApi.Host

dotnet run 

2、或者直接vs启动
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用户身份模块如何查询用户" tabindex="-1"><a class="header-anchor" href="#用户身份模块如何查询用户" aria-hidden="true">#</a> 用户身份模块如何查询用户？</h4><p>条件</p><p>1、IdentityUserController</p><p>2、IIdentityUserAppService</p><p>3、IIdentityUserRepository</p><p>步骤</p><p>1、直接查询</p><h4 id="扩展-用户身份模块其他数据查询" tabindex="-1"><a class="header-anchor" href="#扩展-用户身份模块其他数据查询" aria-hidden="true">#</a> 扩展：用户身份模块其他数据查询？</h4><p>类似于原理如上</p><h3 id="lkn-ebusiness-web页面如何访问用户身份模块" tabindex="-1"><a class="header-anchor" href="#lkn-ebusiness-web页面如何访问用户身份模块" aria-hidden="true">#</a> LKN.EBusiness.Web页面如何访问用户身份模块？</h3><p>条件</p><p>1、Volo.Abp.Identity.Web如何集成用户身份模块</p><p>条件</p><p>1、Volo.Abp.Identity.Web</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、先在项目中通过Nuget下载
Volo.Abp.Identity.Web

2、然后在EBusinessApplicationModule文件上增加
[DependsOn(
	typeof(AbpIdentityWebModule)
)]
 public class EBusinessWebModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用户身份模块如何在页面上展示用户数据" tabindex="-1"><a class="header-anchor" href="#用户身份模块如何在页面上展示用户数据" aria-hidden="true">#</a> 用户身份模块如何在页面上展示用户数据？</h4><p>条件</p><p>1、Index.cshtml</p><p>2、index.js</p><p>步骤</p><h4 id="扩展-用户身份模块如何在页面上展示用其他数据" tabindex="-1"><a class="header-anchor" href="#扩展-用户身份模块如何在页面上展示用其他数据" aria-hidden="true">#</a> 扩展：用户身份模块如何在页面上展示用其他数据？</h4><h3 id="oa系统如何调用用户模块" tabindex="-1"><a class="header-anchor" href="#oa系统如何调用用户模块" aria-hidden="true">#</a> OA系统如何调用用户模块</h3><p>条件</p><p>1、LKN.EBusiness.HttpApi.Client</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>步骤
1、先在项目中通过Nuget下载
LKN.EBusiness.HttpApi.Client

2、然后在LKN.OA文件上增加
 [DependsOn(
	typeof(AbpIdentityHttpApiClientModule)
 )]
 public class OAModule: AbpModule
 {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="oa系统调用用户模块原理" tabindex="-1"><a class="header-anchor" href="#oa系统调用用户模块原理" aria-hidden="true">#</a> OA系统调用用户模块原理？</h4><p>条件</p><p>1、动态代理</p><p>2、IOC</p><h2 id="用户身份模块设计思想" tabindex="-1"><a class="header-anchor" href="#用户身份模块设计思想" aria-hidden="true">#</a> 用户身份模块设计思想</h2><p>abp 把 用户功能模块独立好处？</p><p>1、做微服务</p><p>2、项目复用</p><h3 id="用户身份模块表设计" tabindex="-1"><a class="header-anchor" href="#用户身份模块表设计" aria-hidden="true">#</a> 用户身份模块表设计</h3><h3 id="用户身份模块层次设计" tabindex="-1"><a class="header-anchor" href="#用户身份模块层次设计" aria-hidden="true">#</a> 用户身份模块层次设计</h3><h4 id="domain-layer" tabindex="-1"><a class="header-anchor" href="#domain-layer" aria-hidden="true">#</a> Domain layer</h4><h4 id="aggregates" tabindex="-1"><a class="header-anchor" href="#aggregates" aria-hidden="true">#</a> Aggregates</h4><h5 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> User</h5><p>A user is generally a person logins to and uses the application.</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IdentityUser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(aggregate root): Represents a user in the system.</p><ul><li><code>IdentityUserRole</code> (collection): Roles to the user.</li><li><code>IdentityUserClaim</code> (collection): Custom claims of the user.</li><li><code>IdentityUserLogin</code> (collection): External logins of the user.</li><li><code>IdentityUserToken</code> (collection): Tokens of the user (used by the Microsoft Identity services).</li></ul></li></ul><h5 id="role" tabindex="-1"><a class="header-anchor" href="#role" aria-hidden="true">#</a> Role</h5><p>A role is typically a group of permissions to assign to the users.</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IdentityRole
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(aggregate root): Represents a role in the system.</p><ul><li><code>IdentityRoleClaim</code> (collection): Custom claims of the role.</li></ul></li></ul><h5 id="claim-type" tabindex="-1"><a class="header-anchor" href="#claim-type" aria-hidden="true">#</a> Claim Type</h5><p>A claim type is a definition of a custom claim that can be assigned to other entities (like roles and users) in the system.</p><ul><li><code>IdentityClaimType</code> (aggregate root): Represents a claim type definition. It contains some properties (e.g. Required, Regex, Description, ValueType) to define the claim type and the validation rules.</li></ul><h5 id="identity-security-log" tabindex="-1"><a class="header-anchor" href="#identity-security-log" aria-hidden="true">#</a> Identity Security Log</h5><p>A <code>IdentitySecurityLog</code> object represents an authentication related operation (like <em>login</em>) in the system.</p><ul><li><code>IdentitySecurityLog</code> (aggregate root): Represents a security log in the system.</li></ul><h5 id="organizationunit" tabindex="-1"><a class="header-anchor" href="#organizationunit" aria-hidden="true">#</a> OrganizationUnit</h5><p>An Organization unit is a entity in a hierarchical structure.</p><ul><li><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>OrganizationUnit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(aggregate root): Represents an organization unit in the system.</p><ul><li><code>Roles</code> (collection): Roles of the organization unit.</li></ul></li></ul><h4 id="repositories" tabindex="-1"><a class="header-anchor" href="#repositories" aria-hidden="true">#</a> Repositories</h4><p>Following custom repositories are defined for this module:</p><ul><li><code>IIdentityUserRepository</code></li><li><code>IIdentityRoleRepository</code></li><li><code>IIdentityClaimTypeRepository</code></li><li><code>IIdentitySecurityLogRepository</code></li><li><code>IOrganizationUnitRepository</code></li></ul><h4 id="domain-services" tabindex="-1"><a class="header-anchor" href="#domain-services" aria-hidden="true">#</a> Domain services</h4><h5 id="user-manager" tabindex="-1"><a class="header-anchor" href="#user-manager" aria-hidden="true">#</a> User manager</h5><p><code>IdentityUserManager</code> is used to manage users, their roles, claims, passwords, emails, etc. It is derived from Microsoft Identity&#39;s <code>UserManager&lt;T&gt;</code> class where <code>T</code> is <code>IdentityUser</code>.</p><h5 id="role-manager" tabindex="-1"><a class="header-anchor" href="#role-manager" aria-hidden="true">#</a> Role manager</h5><p><code>IdentityRoleManager</code> is used to manage roles and their claims. It is derived from Microsoft Identity&#39;s <code>RoleManager&lt;T&gt;</code> class where <code>T</code> is <code>IdentityRole</code>.</p><h5 id="claim-type-manager" tabindex="-1"><a class="header-anchor" href="#claim-type-manager" aria-hidden="true">#</a> Claim type manager</h5><p><code>IdenityClaimTypeManager</code> is used to perform some operations for the <code>IdentityClaimType</code> aggregate root.</p><h5 id="organization-unit-manager" tabindex="-1"><a class="header-anchor" href="#organization-unit-manager" aria-hidden="true">#</a> Organization unit manager</h5><p><code>OrganizationUnitManager</code> is used to perform some operations for the <code>OrganizationUnit</code> aggregate root.</p><h5 id="security-log-manager" tabindex="-1"><a class="header-anchor" href="#security-log-manager" aria-hidden="true">#</a> Security log manager</h5><p><code>IdentitySecurityLogManager</code> is used to save security logs.</p><h3 id="application-layer" tabindex="-1"><a class="header-anchor" href="#application-layer" aria-hidden="true">#</a> Application Layer</h3><h4 id="application-services" tabindex="-1"><a class="header-anchor" href="#application-services" aria-hidden="true">#</a> Application Services</h4><ul><li><code>IdentityUserAppService</code> (implements <code>IIdentityUserAppService</code>): Implements the use cases of the user management UI.</li><li><code>IdentityRoleAppService</code> (implement <code>IIdentityRoleAppService</code>): Implements the use cases of the role management UI.</li><li><code>IdentityClaimTypeAppService</code> (implements <code>IIdentityClaimTypeAppService</code>): Implements the use cases of the claim type management UI.</li><li><code>IdentitySettingsAppService</code> (implements <code>IIdentitySettingsAppService</code>): Used to get and update settings for the Identity module.</li><li><code>IdentityUserLookupAppService</code> (implements <code>IIdentityUserLookupAppService</code>): Used to get information for a user by <code>id</code> or <code>userName</code>. It is aimed to be used internally by the ABP framework.</li><li><code>ProfileAppService</code> (implements <code>IProfileAppService</code>): Used to change a user&#39;s profile and the password.</li><li><code>IdentitySecurityLogAppService</code> (implements <code>IIdentitySecurityLogAppService</code>): Implements the use cases of the security logs UI.</li><li><code>OrganizationUnitAppService</code> (implements <code>OrganizationUnitAppService</code>): Implements the use cases of the organization unit management UI.</li></ul><h3 id="database-providers" tabindex="-1"><a class="header-anchor" href="#database-providers" aria-hidden="true">#</a> Database Providers</h3>`,99),g={href:"https://docs.abp.io/en/abp/latest/Entity-Framework-Core",target:"_blank",rel:"noopener noreferrer"},y={href:"https://docs.abp.io/en/abp/latest/MongoDB",target:"_blank",rel:"noopener noreferrer"},f=e("h4",{id:"entity-framework-core",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#entity-framework-core","aria-hidden":"true"},"#"),i(" Entity Framework Core")],-1),x={href:"https://www.nuget.org/packages/Volo.Abp.Identity.EntityFrameworkCore",target:"_blank",rel:"noopener noreferrer"},A=t('<h5 id="database-tables" tabindex="-1"><a class="header-anchor" href="#database-tables" aria-hidden="true">#</a> Database Tables</h5><ul><li>AbpRoles <ul><li>AbpRoleClaims</li></ul></li><li>AbpUsers <ul><li>AbpUserClaims</li><li>AbpUserLogins</li><li>AbpUserRoles</li><li>AbpUserTokens</li></ul></li><li><strong>AbpClaimTypes</strong></li><li>AbpOrganizationUnits <ul><li>AbpOrganizationUnitRoles</li><li>AbpUserOrganizationUnits</li></ul></li><li><strong>AbpSecurityLogs</strong></li></ul><h4 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h4>',3),I={href:"https://www.nuget.org/packages/Volo.Abp.Identity.MongoDB",target:"_blank",rel:"noopener noreferrer"},_=t('<h5 id="database-collections" tabindex="-1"><a class="header-anchor" href="#database-collections" aria-hidden="true">#</a> Database Collections</h5><ul><li><strong>AbpRoles</strong></li><li><strong>AbpUsers</strong></li><li><strong>AbpClaimTypes</strong></li><li><strong>AbpOrganizationUnits</strong></li><li><strong>AbpSecurityLogs</strong></li></ul><h3 id="用户身份模块模型设计" tabindex="-1"><a class="header-anchor" href="#用户身份模块模型设计" aria-hidden="true">#</a> 用户身份模块模型设计</h3><h4 id="用户表设计思想" tabindex="-1"><a class="header-anchor" href="#用户表设计思想" aria-hidden="true">#</a> 用户表设计思想</h4><p>User</p><p>模仿：人去车站上车</p><p>​ 人去动物园来动物</p><p>​ .....</p><p>需要一张票据，这个票据就是用户。</p><p>门票就是用户</p><p>不同的场景，用户的信息不一样，门票也不一样，为了适应不用的门票场景</p><p>所以：出现了用户声明，</p><h4 id="用户声明表设计思想" tabindex="-1"><a class="header-anchor" href="#用户声明表设计思想" aria-hidden="true">#</a> 用户声明表设计思想</h4><p>userclaims</p><p>在动物园，一张门票，只能访问大象，不能看老虎。</p><p>所以：就是对动物园各个动物设置了权限</p><p>同理：用户拿票访问系统，也需要做一些权限限制。</p><p>所以：就出现了角色表</p><h4 id="用户角色表设计思想" tabindex="-1"><a class="header-anchor" href="#用户角色表设计思想" aria-hidden="true">#</a> 用户角色表设计思想</h4><p>userroles</p><p>由于不同用户可能是相同的角色。所以就把用户角色抽出来，</p><p>形成了独立的角色表。为了能够复用</p><h4 id="角色表设计" tabindex="-1"><a class="header-anchor" href="#角色表设计" aria-hidden="true">#</a> 角色表设计</h4><p>roles</p><p>动物园的角色信息，可能会有一些时间限制，显示：管理员，最多只能人质3年。</p><p>所以：就使用roleclaims表</p><h4 id="角色声明表设计" tabindex="-1"><a class="header-anchor" href="#角色声明表设计" aria-hidden="true">#</a> 角色声明表设计</h4><p>roleclaims</p><p>再进行思考一下，用户也有声明，角色也有声明，用户和角色可能会共享一些角色</p><p>所以：就有了claimtypes表</p><h4 id="声明类型表设计" tabindex="-1"><a class="header-anchor" href="#声明类型表设计" aria-hidden="true">#</a> 声明类型表设计</h4><p>claimtypes</p><p>对于组织用户而言，公司用户都有相应的部门</p><p>所以：就有了用户部分表</p><p>由于不同用户可能属于同一个部门，所以，就有了部门表</p><h4 id="部门表" tabindex="-1"><a class="header-anchor" href="#部门表" aria-hidden="true">#</a> 部门表</h4><p>organizationunits</p><p>公司部门，去公司里面处理什么，都是有权限控制的。</p><p>所以：就有了部分角色表</p><h4 id="部门角色表" tabindex="-1"><a class="header-anchor" href="#部门角色表" aria-hidden="true">#</a> 部门角色表</h4><p>organizationunitroles</p><h4 id="扩展表-身份安全日志表" tabindex="-1"><a class="header-anchor" href="#扩展表-身份安全日志表" aria-hidden="true">#</a> 扩展表：身份安全日志表</h4><h4 id="扩展表-用户关联表" tabindex="-1"><a class="header-anchor" href="#扩展表-用户关联表" aria-hidden="true">#</a> 扩展表：用户关联表</h4><h3 id="如何根据表模型使用ddd进行设计" tabindex="-1"><a class="header-anchor" href="#如何根据表模型使用ddd进行设计" aria-hidden="true">#</a> 如何根据表模型使用DDD进行设计</h3><p>聚合根：</p><ul><li><strong>AbpRoles</strong></li><li><strong>AbpUsers</strong></li><li><strong>AbpClaimTypes</strong></li><li><strong>AbpOrganizationUnits</strong></li><li>AbpSecurityLogs</li></ul><p>每个根下面都有很多实体：</p>',47);function C(k,D){const a=l("router-link"),d=l("ExternalLinkIcon");return o(),c("div",null,[p,e("nav",h,[e("ul",null,[e("li",null,[n(a,{to:"#目录"},{default:s(()=>[i("目录")]),_:1})]),e("li",null,[n(a,{to:"#核心组件-用户组件-用户身份模块"},{default:s(()=>[i("核心组件-用户组件-用户身份模块")]),_:1})]),e("li",null,[n(a,{to:"#什么是用户身份模块"},{default:s(()=>[i("什么是用户身份模块")]),_:1})]),e("li",null,[n(a,{to:"#在abp-vnext电商项目中如何集成用户身份模块"},{default:s(()=>[i("在ABP vNext电商项目中如何集成用户身份模块")]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#用户身份模块源码"},{default:s(()=>[i("用户身份模块源码")]),_:1})]),e("li",null,[n(a,{to:"#lkn-ebusiness-domain-shared如何集成用户身份模块"},{default:s(()=>[i("LKN.EBusiness.Domain.Shared如何集成用户身份模块")]),_:1})]),e("li",null,[n(a,{to:"#lkn-ebusiness-domain如何集成用户身份模块"},{default:s(()=>[i("LKN.EBusiness.Domain如何集成用户身份模块")]),_:1})]),e("li",null,[n(a,{to:"#lkn-ebusiness-entityframeworkcore如何集成用户身份模块"},{default:s(()=>[i("LKN.EBusiness.EntityFrameworkCore如何集成用户身份模块")]),_:1})]),e("li",null,[n(a,{to:"#lkn-ebusiness-application-contracts如何集成用户身份模块"},{default:s(()=>[i("LKN.EBusiness.Application.Contracts如何集成用户身份模块")]),_:1})]),e("li",null,[n(a,{to:"#lkn-ebusiness-application如何集成用户身份模块"},{default:s(()=>[i("LKN.EBusiness.Application如何集成用户身份模块")]),_:1})]),e("li",null,[n(a,{to:"#lkn-ebusiness-httpapi如何集成用户身份模块"},{default:s(()=>[i("LKN.EBusiness.HttpApi如何集成用户身份模块")]),_:1})]),e("li",null,[n(a,{to:"#接口如何访问用户身份模块"},{default:s(()=>[i("接口如何访问用户身份模块？")]),_:1})]),e("li",null,[n(a,{to:"#lkn-ebusiness-web页面如何访问用户身份模块"},{default:s(()=>[i("LKN.EBusiness.Web页面如何访问用户身份模块？")]),_:1})]),e("li",null,[n(a,{to:"#oa系统如何调用用户模块"},{default:s(()=>[i("OA系统如何调用用户模块")]),_:1})])])]),e("li",null,[n(a,{to:"#用户身份模块设计思想"},{default:s(()=>[i("用户身份模块设计思想")]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#用户身份模块表设计"},{default:s(()=>[i("用户身份模块表设计")]),_:1})]),e("li",null,[n(a,{to:"#用户身份模块层次设计"},{default:s(()=>[i("用户身份模块层次设计")]),_:1})]),e("li",null,[n(a,{to:"#application-layer"},{default:s(()=>[i("Application Layer")]),_:1})]),e("li",null,[n(a,{to:"#database-providers"},{default:s(()=>[i("Database Providers")]),_:1})]),e("li",null,[n(a,{to:"#用户身份模块模型设计"},{default:s(()=>[i("用户身份模块模型设计")]),_:1})]),e("li",null,[n(a,{to:"#如何根据表模型使用ddd进行设计"},{default:s(()=>[i("如何根据表模型使用DDD进行设计")]),_:1})])])])])]),b,e("p",null,[i("https://github.com/abpframework/abp/tree/dev/modules/identity "),e("a",v,[i("账户模块源码下载"),n(d)])]),m,e("p",null,[i("This module provides "),e("a",g,[i("Entity Framework Core"),n(d)]),i(" and "),e("a",y,[i("MongoDB"),n(d)]),i(" options for the database.")]),f,e("p",null,[e("a",x,[i("Volo.Abp.Identity.EntityFrameworkCore"),n(d)]),i(" NuGet package implements the EF Core integration.")]),A,e("p",null,[e("a",I,[i("Volo.Abp.Identity.MongoDB"),n(d)]),i(" NuGet package implements the MongoDB integration.")]),_])}const U=r(u,[["render",C],["__file","abp008.html.vue"]]);export{U as default};
