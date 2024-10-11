import{_ as c,r as o,o as d,c as p,a as e,b as s,w as a,d as n,e as l}from"./app-c1c3c937.js";const u="/images/abpmicroservices/micro010/abpmicroservices0010_0001image.png",v="/images/abpmicroservices/micro010/abpmicroservices0010_0002image.png",m="/images/abpmicroservices/micro010/abpmicroservices0010_0003image.png",b="/images/abpmicroservices/micro010/abpmicroservices0010_0004image.png",g="/images/abpmicroservices/micro010/abpmicroservices0010_0005image.png",k="/images/abpmicroservices/micro010/abpmicroservices0010_0006image.png",q="/images/abpmicroservices/micro010/abpmicroservices0010_0007image.png",A="/images/abpmicroservices/micro010/abpmicroservices0010_0008image.png",h="/images/abpmicroservices/micro010/abpmicroservices0010_0009image.png",y="/images/abpmicroservices/micro010/abpmicroservices0010_0010image.png",S="/images/abpmicroservices/micro010/abpmicroservices0010_0011image.png",C="/images/abpmicroservices/micro010/abpmicroservices0010_0012image.png",_="/images/abpmicroservices/micro010/abpmicroservices0010_0013image.png",M="/images/abpmicroservices/micro010/abpmicroservices0010_0014image.png",f="/images/abpmicroservices/micro010/abpmicroservices0010_0015image.png",I="/images/abpmicroservices/micro010/abpmicroservices0010_0016image.png",x="/images/abpmicroservices/micro010/abpmicroservices0010_0017image.png",D="/images/abpmicroservices/micro010/abpmicroservices0010_0018image.png",O="/images/abpmicroservices/micro010/abpmicroservices0010_0019image.png",P="/images/abpmicroservices/micro010/abpmicroservices0010_0020image.png",w="/images/abpmicroservices/micro010/abpmicroservices0010_0021image.png",V="/images/abpmicroservices/micro010/abpmicroservices0010_0022image.png",H="/images/abpmicroservices/micro010/abpmicroservices0010_0023image.png",E="/images/abpmicroservices/micro010/abpmicroservices0010_0030image.png",R="/images/abpmicroservices/micro010/abpmicroservices0010_0024image.png",N="/images/abpmicroservices/micro010/abpmicroservices0010_0025image.png",T="/images/abpmicroservices/micro010/abpmicroservices0010_0026image.png",L="/images/abpmicroservices/micro010/abpmicroservices0010_0027image.png",F="/images/abpmicroservices/micro010/abpmicroservices0010_0028image.png",j="/images/abpmicroservices/micro010/abpmicroservices0010_0029image.png",U="/images/abpmicroservices/micro010/abpmicroservices0010_0032image.png",G="/images/abpmicroservices/micro010/abpmicroservices0010_0031image.png",K="/images/abpmicroservices/micro010/abpmicroservices0010_0033image.png",B="/images/abpmicroservices/micro010/abpmicroservices0010_0000image.png",z="/images/abpmicroservices/micro010/abpmicroservices0010_0035image.png",W="/images/abpmicroservices/micro010/abpmicroservices0010_0034image.png",Q="/images/abpmicroservices/micro010/abpmicroservices0010_0036image.png",J="/images/abpmicroservices/micro010/abpmicroservices0010_0037image.png",Y="/images/abpmicroservices/micro010/abpmicroservices0010_0038image.png",$="/images/abpmicroservices/micro010/abpmicroservices0010_0039image.png",X="/images/abpmicroservices/micro010/abpmicroservices0010_0040image.png",Z="/images/abpmicroservices/micro010/abpmicroservices0010_0041image.png",ee="/images/abpmicroservices/micro010/abpmicroservices0010_0042image.png",ne="/images/abpmicroservices/micro010/abpmicroservices0010_0043image.png",se="/images/abpmicroservices/micro010/abpmicroservices0010_0044image.png",ie="/images/abpmicroservices/micro010/abpmicroservices0010_0048image.png",ae="/images/abpmicroservices/micro010/abpmicroservices0010_0049image.png",te="/images/abpmicroservices/micro010/abpmicroservices0010_0045image.png",oe="/images/abpmicroservices/micro010/abpmicroservices0010_0046image.png",re="/images/abpmicroservices/micro010/abpmicroservices0010_0047image.png",le="/images/abpmicroservices/micro010/abpmicroservices0010_0050image.png",ce="/images/abpmicroservices/micro010/abpmicroservices0010_0051image.png",de="/images/abpmicroservices/micro010/abpmicroservices0010_0052image.png",pe="/images/abpmicroservices/micro010/abpmicroservices0010_0053image.png",r="/images/abpmicroservices/micro010/abpmicroservices0010_0054image.png",ue="/images/abpmicroservices/micro010/abpmicroservices0010_0056image.png",ve="/images/abpmicroservices/micro010/abpmicroservices0010_0057image.png",me="/images/abpmicroservices/micro010/abpmicroservices0010_0058image.png",be="/images/abpmicroservices/micro010/abpmicroservices0010_0059image.png",ge={},ke=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),qe={class:"table-of-contents"},Ae=l('<h2 id="分布式权限核心概念" tabindex="-1"><a class="header-anchor" href="#分布式权限核心概念" aria-hidden="true">#</a> 分布式权限核心概念</h2><p><strong>什么是权限</strong><br> 权限：就是一个字符串<br> 服务端限制客户端能够做什么事情。</p><p><strong>什么是分布式权限</strong><br> 我们由一个地方统一管理权限的权限就叫分布式管理权限。</p><p>就是分布式系统中多个节点通信时，对各请求的身份验证。然后这些各个节点身份验证，我们单独提出一个节点（微服务）来做统一的验证，从而降低了维护成本，提高效率。 核心就是统一管理各节点的请求验证，并采用AOP模式实现分布式系统的权限，来确保系统的安全。</p><p><img src="'+u+'" alt="Alt text"></p><h2 id="分布式权限应用" tabindex="-1"><a class="header-anchor" href="#分布式权限应用" aria-hidden="true">#</a> 分布式权限应用</h2><p>分布式权限主要应用在微服务系统中，各节点通信请求身份验证。</p><p><img src="'+v+`" alt="Alt text"></p><h2 id="分布式权限-权限微服务创建" tabindex="-1"><a class="header-anchor" href="#分布式权限-权限微服务创建" aria-hidden="true">#</a> 分布式权限-权限微服务创建</h2><p>条件<br> 1、电商微服务系统<br> 2、LKN.AuthMicroService</p><p>步骤<br> 1、权限微服务创建<br> 采用abp CLI 指令创建DDD权限微服务项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> abp new LKN.AuthMicroService <span class="token parameter variable">-t</span> module <span class="token parameter variable">--dbms</span> mysql -no-ui  <span class="token parameter variable">-o</span>  moduls<span class="token punctuation">\\</span>LKN.AuthMicroService <span class="token parameter variable">-v</span> <span class="token number">7.3</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+'" alt="Alt text"></p><p>2、权限微服务导入</p><p>权限微服务导入项目中</p><p><img src="'+b+'" alt="Alt text"></p><p>3、权限微服务集成IdentityServer4（作用：帮助所有微服务实现权限校验）</p><p>abp已经封装好IdentityServer4,只需对应模块引用即可。</p><p><img src="'+g+'" alt="Alt text"></p><p>4、权限微服务迁移IdentityServer4对应的表。<br> abpCLI默认生成的 <code>LKN.AuthMicroService.HttpApi.Host</code> 的数据库是Sqlserver, 我们需要自己添加mysql<br> nuget 引用 <code>Volo.Abp.EntityFrameworkCore.MySQL</code>,修改 <code>AuthMicroServiceHttpApiHostModule</code> 类 DependsOn中添加mysql依赖注入 ，并修改相应的配置。</p><p>项目中集成abp IdentityServerEntittyFrameworkCore, 需要在项目EF模块中找到<code>AuthMicoServiceEntityFrameworkCoreModule.cs</code>文件 ，并在DepensOn依赖注入“<code>AbpIdentityServerEntityFrameworkCoreModule</code>”</p><p><img src="'+k+'" alt="Alt text"></p><p>EntityFrameworkCore 目录下，找到 <code>AuthMicroServiceDbContextModelCreatingExtensions</code> 添加 id4表</p><p><img src="'+q+'" alt="Alt text"></p><p>让在AuthMicoServiceDbContext 类，实现abp接口<code>IIdentityServerDbContext</code> ,这里可以从源中copy</p><p><img src="'+A+'" alt="Alt text"></p><p>如果不想使用abp的EF上下文本对象类，也可以替换AuthMicroServiceDBContext</p><p><img src="'+h+'" alt="Alt text"></p><p>去掉IdentityServer4前缀</p><p><img src="'+y+`" alt="Alt text"></p><p>1、生成迁移文件<br> 打开项目目录使用cmd,dotnet ef 生成迁移文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet ef migrations <span class="token function">add</span> authmicroservices

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、执行迁移文件，生成了权限服务表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> dotnet ef database update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+S+'" alt="Alt text"></p><p>5、落地权限微服务，创建表对应的接口</p><p>1、ApiScope:API作用域，具体的每一个微服务<br> 2、ApiResource:微服务API资源，微服务每一个接口<br> 增删改查接口</p><p>3、Client:客户端，访问微服务一端<br> 4、IdentityResource:身份资源，用户身份权限管理<br> 5、PersistedGrant:配置表，持续化认证，认证类型<br> oicd auth2 jwt code<br> 6、DeviceFlowCodes: 配置表，设备码，作用不大。</p><h2 id="分布式权限-identityserver4集成" tabindex="-1"><a class="header-anchor" href="#分布式权限-identityserver4集成" aria-hidden="true">#</a> 分布式权限-IdentityServer4集成</h2><p>项目模块<code>LKN.AuthMicroService.Domain</code>、 <code>LKN.AuthMicroService.Domain.Shared</code>、<code>LKN.AuthMicroService.EntityFrameworkCore</code> 集成 IdentityServer4 ，使用nuget修改包之后,分别在Module文件中依赖注册id4的module文件。</p><p><img src="'+C+`" alt="Alt text"></p><p>1、<code>LKN.AuthMicroService.Domain</code>中的<code>AuthMicroServiceDomainModule</code> 文件添加 <code> typeof(AbpIdentityServerDomainModule)</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(AuthMicroServiceDomainSharedModule),
    typeof(AbpIdentityServerDomainModule)
)]
public class AuthMicroServiceDomainModule : AbpModule
{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、<code>LKN.AuthMicroService.Domain.Shared</code>中的 <code>AuthMicroServiceDomainSharedModule</code> 添加 <code>typeof(AbpIdentityServerDomainSharedModule)</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[DependsOn(
    typeof(AbpValidationModule),
    typeof(AbpDddDomainSharedModule),
    typeof(AbpIdentityServerDomainSharedModule)
)]
public class AuthMicroServiceDomainSharedModule : AbpModule
{
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、<code>LKN.AuthMicroService.EntityFrameworkCore</code>中的 <code>AbpIdentityServerEntityFrameworkCoreModule</code> 添加 <code> typeof(AbpIdentityServerEntityFrameworkCoreModule)</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[DependsOn(
    typeof(AuthMicroServiceDomainModule),
    typeof(AbpEntityFrameworkCoreModule),
    typeof(AbpIdentityServerEntityFrameworkCoreModule)// 集成
)]
public class AuthMicroServiceEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext&lt;AuthMicroServiceDbContext&gt;(options =&gt;
        {
                /* Add custom repositories here. Example:
                 * options.AddRepository&lt;Question, EfCoreQuestionRepository&gt;();
                 */
        });
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分布式权限微服务落地" tabindex="-1"><a class="header-anchor" href="#分布式权限微服务落地" aria-hidden="true">#</a> 分布式权限微服务落地</h2><p>分布式权限微服务项目已经创建成功，并且集成了identiytserver4,现在我们根据自己的需求实现<code>ApiResources</code>的添加服务。</p><p><img src="`+_+'" alt="Alt text"></p><p>IdentityServer4 EFCore 上下文对象的<code>IIdentityServerDbContext</code>设置，之前我们在自己的<code>AuthMicroServiceDbContext</code>类，已经继承<code>IIdentityServerDbContext</code>接口，并已经实现， 但是运行调用接口时: 1、报错异常：</p><p><img src="'+M+'" alt="Alt text"></p><p>1.1、解决方式在<code>appsettings.json</code> 添加 数据库连接<code>AbpIdentityServer</code>。</p><p><img src="'+f+'" alt="Alt text"></p><p>为什么是这个名称呢，需要查看源码。</p><p><img src="'+I+'" alt="Alt text"><br><img src="'+x+`" alt="Alt text"></p><p>1.2、解决方式基于原有数据库连接字符串，可以<code>AuthMicroServiceDbContext</code>添加特替换<code>IIdentityServerDbContext</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[ConnectionStringName(AuthMicroServiceDbProperties.ConnectionStringName)]
[ReplaceDbContext(typeof(IIdentityServerDbContext))] // 替换IIdentityServerDbContext
public class AuthMicroServiceDbContext : AbpDbContext&lt;AuthMicroServiceDbContext&gt;, IAuthMicroServiceDbContext, IIdentityServerDbContext
{
   ....
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、异常 调用接口时，发现数据库表名称不存在，仔细观察发现多个前缀<code>IdentityServer</code><img src="`+D+'" alt="Alt text"></p><p>解决方式去掉<code>IdentityServer</code>的前缀，我们需要在<code>LKN.AuthMicroService.HttpApi.Host</code>模块中，找到<code>AuthMicroServiceHttpApiHostModule</code>文件，并在<code>ConfigureServices</code> 添加 <code>AbpIdentityServerDbProperties.DbTablePrefix = &quot;&quot;;</code> 即可</p><p><img src="'+O+'" alt="Alt text"></p><p>修改以问题，调用接口执行成功</p><p><img src="'+P+'" alt="Alt text"></p><h2 id="分布式权限authmicoservice落地" tabindex="-1"><a class="header-anchor" href="#分布式权限authmicoservice落地" aria-hidden="true">#</a> 分布式权限AuthMicoService落地</h2><p>检查IdentityServer4是否可以成功访问<code>https://localhost:44386/.well-known/openid-configuration</code></p><p><img src="'+w+`" alt="Alt text"></p><p>不能访问，表示配置没有成功。</p><p>1、需要引用身份模块<code>identity</code>集成到项目中： <code>Volo.Abp.Identity.EntityFrameworkCore</code>、<code>Volo.Abp.Identity.Application.Contracts</code><br> 可以按模块引用，也可以单独在<code>LKN.AuthMicroService.HttpApi.Host</code>模块项目引用（也可以通过nuget包添加）。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	  &lt;PackageReference Include=&quot;Volo.Abp.Identity.EntityFrameworkCore&quot; Version=&quot;7.3.0&quot; /&gt;
	  &lt;PackageReference Include=&quot;Volo.Abp.Identity.Application.Contracts&quot; Version=&quot;7.3.0&quot; /&gt;
	  &lt;PackageReference Include=&quot; Volo.Abp.PermissionManagement.Domain.Identity&quot; Version=&quot;7.3.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>AuthMicroServiceHttpApiHostModule</code> 依赖注入 <code>typeof(AbpIdentityEntityFrameworkCoreModule)</code>, <code>typeof(AbpIdentityApplicationContractsModule)</code>,<code> typeof(AbpPermissionManagementDomainIdentityModule)</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[DependsOn(
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、需要引用账号模块<code>account</code>集成到项目中,主要功能登录、注册、退出，集成项目<code>Volo.Abp.Account.Web.IdentityServer</code> 、<code>Volo.Abp.Account.Application</code> 在<code>LKN.AuthMicroService.HttpApi.Host</code>模块项目引用（也可以通过nuget包添加）</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	  &lt;PackageReference Include=&quot;Volo.Abp.Account.Web.IdentityServer&quot; Version=&quot;7.3.0&quot; /&gt;
     &lt;PackageReference Include=&quot;Volo.Abp.Account.Application&quot; Version=&quot;7.3.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>AuthMicroServiceHttpApiHostModule</code> 依赖注入 <code>typeof(AbpAccountWebIdentityServerModule)</code>, <code>typeof(AbpAccountApplicationModule)</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[DependsOn(
 ....
    typeof(AbpAccountWebIdentityServerModule),
    typeof(AbpAccountApplicationModule),
  ....
    )]
public class AuthMicroServiceHttpApiHostModule : AbpModule
{
   ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>AuthMicroServiceHttpApiHostModule</code> 中需要添加 <code>app.UseIdentityServer()</code>,<code>app.UseAuthentication()</code>,<code> app.UseAuthorization()</code> 否则启动 identityServer4会失败。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> 
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
        app.UseAbpSwaggerUI(options =&gt;
        {
            options.SwaggerEndpoint(&quot;/swagger/v1/swagger.json&quot;, &quot;Support APP API&quot;);

            var configuration = context.GetConfiguration();
            options.OAuthClientId(configuration[&quot;AuthServer:SwaggerClientId&quot;]);
            options.OAuthScopes(&quot;AuthMicroService&quot;);
        });
        app.UseAuditing();
        app.UseAbpSerilogEnrichers();
        app.UseConfiguredEndpoints();
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> 启用identityserver4成功   https://localhost:44386/.well-known/openid-configuration
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+V+`" alt="Alt text"></p><p>返回 json 数据的目的是什么</p><p>1、作用，如何使用</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token comment">//接口</span>
    <span class="token property">&quot;issuer&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jwks_uri&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386/.well-known/openid-configuration/jwks&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;authorization_endpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386/connect/authorize&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;token_endpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386/connect/token&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;userinfo_endpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386/connect/userinfo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;end_session_endpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386/connect/endsession&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;check_session_iframe&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386/connect/checksession&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;revocation_endpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386/connect/revocation&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;introspection_endpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386/connect/introspect&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;device_authorization_endpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://localhost:44386/connect/deviceauthorization&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;frontchannel_logout_supported&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;frontchannel_logout_session_supported&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;backchannel_logout_supported&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;backchannel_logout_session_supported&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">//作用域</span>
    <span class="token property">&quot;scopes_supported&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;offline_access&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;claims_supported&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>

    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//认证类型</span>
    <span class="token property">&quot;grant_types_supported&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;authorization_code&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;refresh_token&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;implicit&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;urn:ietf:params:oauth:grant-type:device_code&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//响应值</span>
    <span class="token property">&quot;response_types_supported&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;code&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;token&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;id_token&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;id_token token&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;code id_token&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;code token&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;code id_token token&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;response_modes_supported&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;form_post&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;query&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;fragment&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;token_endpoint_auth_methods_supported&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;client_secret_basic&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client_secret_post&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//加密算法</span>
    <span class="token property">&quot;id_token_signing_alg_values_supported&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;RS256&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;subject_types_supported&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;public&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code_challenge_methods_supported&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;plain&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;S256&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;request_parameter_supported&quot;</span><span class="token operator">:</span><span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分布式权限authmicoservice应用" tabindex="-1"><a class="header-anchor" href="#分布式权限authmicoservice应用" aria-hidden="true">#</a> 分布式权限AuthMicoService应用</h2><p>1、业务场景：查询订单详细的业务，需要3个微服务，一个订单聚合微服务，另一个是订单微服务，还有一个商品微服务。 目前情况微服务之前请求没有身份验证，任何一个人都可以访问，这给我们的微服务系统带来了风险了，如果是黑客攻击，那么导致服务宕机，影响使用。<br> 我们为了防止被攻击，当服务请求时做一个验证，验证当时的请求是否合法，以保证微服务系统的安全。</p><p>怎么添加验证呢<br> 如：订单微服务，我们只需在<code>LKN.Order.HttpApi</code> 模块层，找到订单控制器，在对应的查询订单方法上添加一个特性<code>[Authorize]</code>，同时，开启身份认证,在<code>OrderHttpApiHostModule</code>中 <code>OnApplicationInitialization</code>里添加<code>app.UseAuthentication(); // 1、开启身份权限</code>,<code> app.UseAuthorization(); // 2、开始身份授权</code>.</p><p>调用时会返回401,没有权限</p><p><img src="`+H+`" alt="Alt text"></p><p>如何把请求转发给AuthMircoServer权限验证呢？</p><p>我们需要在OrderService微服务，添加IdentityServer4 中的账号验证 ，通过nuget引用包 <code>IdentityServer4.AccessTokenValidation</code>（对版本有要求，net5是可以这配置没有问题，net6\\net7就要问题了）。 在<code>OrderHttpApiHostModule</code> 中配置</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> public override void ConfigureServices(ServiceConfigurationContext context)
 {
       .....   
          // 2、认证中心身份认证
      context.Services.AddAuthentication(&quot;Bearer&quot;)
               .AddIdentityServerAuthentication(options =&gt;
               {
                  options.Authority = &quot;https://localhost:44386&quot;; // 1、认证中心地址
                  options.ApiName = &quot;OrderService&quot;; // 2、api名称(项目具体名称)
                  options.RequireHttpsMetadata = false; // 3、https元数据，不需要
               });
      ...
 }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>联调时异常信息</p><p><img src="`+E+'" alt="Alt text"></p>',92),he={href:"https://qa.1r1g.com/sf/ask/4898505461/",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://stackoverflow.com/questions/69978649/migration-to-net6",target:"_blank",rel:"noopener noreferrer"},Se=l(`<div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>  context.Services.AddAuthentication(options =&gt; {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =&gt;
            {
                options.Authority = configuration[&quot;AuthServer:Authority&quot;]; //
                options.RequireHttpsMetadata = Convert.ToBoolean(configuration[&quot;AuthServer:RequireHttpsMetadata&quot;]);
                options.Audience = &quot;OrderService&quot;;
            });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读取配置appsetting.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token property">&quot;AuthServer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:44386/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RequireHttpsMetadata&quot;</span><span class="token operator">:</span> <span class="token string">&quot;false&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;SwaggerClientId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Order_Swagger&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;SwaggerClientSecret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1q2w3e*&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结-用户实现登录之后-会得到一个什么结果" tabindex="-1"><a class="header-anchor" href="#总结-用户实现登录之后-会得到一个什么结果" aria-hidden="true">#</a> 总结：用户实现登录之后，会得到一个什么结果？</h2><p>身份证</p><p>Authorze :本质上就是校验身份证。</p><p>身份证：token(令牌)</p><p>1、订单详情聚合服务得到一个身份证token.</p><h2 id="token如何得到呢" tabindex="-1"><a class="header-anchor" href="#token如何得到呢" aria-hidden="true">#</a> Token如何得到呢？</h2><p>1、AuthMicroServer得到一个Token<br> AuthMicroServer根据什么得到？<br> 1、根据订单详情聚合服务信息。</p><h2 id="authmicroserver认证中心配置" tabindex="-1"><a class="header-anchor" href="#authmicroserver认证中心配置" aria-hidden="true">#</a> AuthMicroServer认证中心配置</h2><p>1、需要分布式认证中心，添加客户信息 Client 相当注册用户</p><p><img src="`+R+`" alt="Alt text"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;clientName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderDetailsServices-Client&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//订单详细聚合服务</span>
  <span class="token property">&quot;secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345&quot;</span><span class="token punctuation">,</span> <span class="token comment">//密码</span>
  <span class="token property">&quot;redirectUri&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;postLogoutRedirectUri&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;OrderService&quot;</span> <span class="token comment">//作用域  订单微服务,相当于授权</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;grantTypes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;client_credentials&quot;</span>  <span class="token comment">//认证类型 client认证  </span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、创建token,先在<code>LKN.OrderDetailService</code> 订单详细聚合服务项目，引用abp架构中<code> Volo.Abp.Http.Client.IdentityModel</code>包（nuget） ,或者项目引用</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>&lt;PackageReference Include=&quot;Volo.Abp.Http.Client.IdentityModel&quot; Version=&quot;7.3.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 <code>OrderDetailsServicesModule</code> 类中依赖注入</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> [DependsOn(typeof(AbpHttpClientIdentityModelModule))]// 配置AbpIdentityModel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并在<code>OrderDetailsController</code>类中的采用属性依赖注入获取<code>IIdentityModelAuthenticationService</code>实例,作用是生成identityService</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> /// &lt;summary&gt;
    /// 订单详情控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;api/OrderDetailsServices/OrderDetails&quot;)]
    public class OrderDetailsController : ControllerBase
    {
        //属性依赖注入
        public IIdentityModelAuthenticationService _authenticationService { get; set; }
    ....
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、获取订单详情聚合微服务身份证（token）</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>       /// &lt;summary&gt;
        ///  获取订单详情聚合服务身份证(Token)
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;id&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;GetToken&quot;)]
        public string GetToken()
        {
            IdentityClientConfiguration identityClient = new IdentityClientConfiguration();
            identityClient.Authority = &quot;https://localhost:44386&quot;;
            identityClient.ClientId = &quot;OrderDetailsServices-Client&quot;;
            identityClient.ClientSecret = &quot;12345&quot;;
            identityClient.GrantType = &quot;client_credentials&quot;;
            return _authenticator.GetAccessTokenAsync(identityClient).Result;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们调用GetToken方法获取接口时报错</p><p><img src="`+N+'" alt="Alt text"></p><p>apiSopes API作用域没有注册&#39;微服务数据&#39;，查看数据库<code>ApiScopes</code>表为空</p><p><img src="'+T+`" alt="Alt text"></p><p>这个时候我们通过api的<code>ApiScope</code>接口，添加微服务数据</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderService&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderService1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后查看数据库表</p><p><img src="`+L+'" alt="Alt text"></p><p>AuthMircoService微服务日志显示获取token成功</p><p><img src="'+F+'" alt="Alt text"></p><p>OrderDetailsService 微服务，调用获取token接口,并成功生成了token</p><p><img src="'+j+'" alt="Alt text"></p><h2 id="总结-token生成思路" tabindex="-1"><a class="header-anchor" href="#总结-token生成思路" aria-hidden="true">#</a> 总结 token生成思路</h2><p>1、先注册订单微服务 2、然后注册订单详情客户信息 3、然后生成订单详情客户的身份证</p><h2 id="查询添加一个select权限" tabindex="-1"><a class="header-anchor" href="#查询添加一个select权限" aria-hidden="true">#</a> 查询添加一个Select权限</h2><p>1、定义权限<br> 1.1、给接口授权<br> 2、添加客户权限<br> 2.1、生成迁移文件<br> 2.2、创建权限表<br> 3、创建权限添加接口<br> 4、校验分两步完成<br> 4.1 先校验是否登录，Authorize（认证）<br> 委托：AuthMicroService<br> 4.2 然后校验权限 select(鉴权)<br> 委托：OrderService<br> abp:Volo.Abp.Authorization</p><h2 id="用token-访问接口" tabindex="-1"><a class="header-anchor" href="#用token-访问接口" aria-hidden="true">#</a> 用token 访问接口</h2><p>token获取成功，根据订单id,查询订单详情聚合接口，报错异常</p><p><img src="'+U+`" alt="Alt text"></p><p>ApiResource 中没有注册订单微服务资源，我们需要在AuthMicroServer微服务接口，添加“OrderService”</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderService&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderService1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderService&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;claims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;admin&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+G+'" alt="Alt text"></p><p>即可添加</p><p><img src="'+K+'" alt="Alt text"></p><h3 id="总结认证中心的思路" tabindex="-1"><a class="header-anchor" href="#总结认证中心的思路" aria-hidden="true">#</a> 总结认证中心的思路</h3><p><img src="'+B+`" alt="Alt text"></p><h2 id="分布式权限-自定义策略权限" tabindex="-1"><a class="header-anchor" href="#分布式权限-自定义策略权限" aria-hidden="true">#</a> 分布式权限-自定义策略权限</h2><p>根据订单详情聚合微服务的订单查询业务，我们已经对订单微服务进行了身份验证，同时也创建了AuthMicroServive认证中心，也把权限认证做在AuthMicroServive微服务（这样做是不合理，应该做到各自的微服务中进行管理并授权），现在我们需要调整这块授权移到订单微服务中，自己的授权自己服务管理。</p><p>步骤<br> 1、OrderService 对应领域集成 abp PermissionManagement 服务 源码进行集成。并在 Module类中添加相对应的依赖注入特性。</p><p>项目引用，也可以nuget修改包添加。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>  // LKN.Order.Domain
 &lt;PackageReference Include=&quot;Volo.Abp.PermissionManagement.Domain&quot; Version=&quot;7.3.0&quot; /&gt;
 &lt;PackageReference Include=&quot;Volo.Abp.PermissionManagement.Domain.IdentityServer&quot; Version=&quot;7.3.0&quot; /&gt;
 &lt;PackageReference Include=&quot;Volo.Abp.PermissionManagement.Domain.Identity&quot; Version=&quot;7.3.0&quot; /&gt;
 // LKN.Order.Domain.Shared
 
 &lt;PackageReference Include=&quot;Volo.Abp.PermissionManagement.Domain.Shared&quot; Version=&quot;7.3.0&quot; /&gt;
 &lt;PackageReference Include=&quot;Volo.Abp.Identity.Domain.Shared&quot; Version=&quot;7.3.0&quot; /&gt;

 // LKN.Order.EntityFrameworkCore
 &lt;PackageReference Include=&quot;Volo.Abp.PermissionManagement.EntityFrameworkCore&quot; Version=&quot;7.3.0&quot; /&gt;
 &lt;PackageReference Include=&quot;Volo.Abp.Identity.EntityFrameworkCore&quot; Version=&quot;7.3.0&quot; /&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、OrederService微服务 OrderDomainModule、OrderDomainSharedModule,OrderEntityFrameworkCoreModule 添加特性</p><p>OrderDomainModule添加 typeof(AbpPermissionManagementDomainModule)，typeof(AbpPermissionManagementDomainIdentityModule)， typeof(AbpPermissionManagementDomainIdentityServerModule) 特性</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Volo.Abp.Domain;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.Identity;
using Volo.Abp.PermissionManagement.IdentityServer;

namespace LKN.Order;
[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(OrderDomainSharedModule),
    typeof(AbpPermissionManagementDomainModule),
    typeof(AbpPermissionManagementDomainIdentityModule),
    typeof(AbpPermissionManagementDomainIdentityServerModule)
)]
public class OrderDomainModule : AbpModule
{

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果缺少 <code>Volo.Abp.PermissionManagement.Domain.Identity</code> 引用会报以下错误</p><p><img src="`+z+`" alt="Alt text"></p><p>OrderDomainSharedModule 添加 typeof(AbpPermissionManagementDomainSharedModule)</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace LKN.Order;
[DependsOn(
   ...
    typeof(AbpPermissionManagementDomainSharedModule)
)]
public class OrderDomainSharedModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        ....
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OrderEntityFrameworkCoreModule 添加 typeof(AbpPermissionManagementEntityFrameworkCoreModule) 特性</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.MySQL;
using Volo.Abp.Modularity;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;

namespace LKN.Order.EntityFrameworkCore;

[DependsOn(
    typeof(OrderDomainModule),
    typeof(AbpEntityFrameworkCoreMySQLModule),
    typeof(AbpPermissionManagementEntityFrameworkCoreModule),
    typeof(AbpEntityFrameworkCoreModule)
)]
public class OrderEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext&lt;OrderDbContext&gt;(options =&gt;
        {
                /* Add custom repositories here. Example:
                 * options.AddRepository&lt;Question, EfCoreQuestionRepository&gt;();
                 */
        });
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、实现权限服务应用层 OrderServicePermissionsAppService类、IOrderServicePermissionsAppService接口</p><p><img src="`+W+`" alt="Alt text"></p><p>OrderServicePermissionsAppService 实现</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using LKN.Order.Orders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.PermissionManagement;

namespace LKN.Order.Permissions
{
    public class OrderServicePermissionsAppService : OrderAppService, IOrderServicePermissionsAppService
    {
        private readonly IPermissionManager _permissionManager;

        public OrderServicePermissionsAppService(IPermissionManager permissionManager)
        {
            _permissionManager = permissionManager;
        }


        public async Task AddRolePermissionAsync(string roleName, string permission)
        {
            await _permissionManager.SetAsync(permission, RolePermissionValueProvider.ProviderName, roleName, true);
        }

        public async Task AddUserPermissionAsync(Guid userId, string permission)
        {
            await _permissionManager.SetAsync(permission, UserPermissionValueProvider.ProviderName, userId.ToString(), true);
        }
        public async Task AddClientPermissionAsync(string ClientName, string permission)
        {
            await _permissionManager.SetAsync(permission, ClientPermissionValueProvider.ProviderName, ClientName, true);
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IOrderServicePermissionsAppService 定义接口</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>  /// &lt;summary&gt;
    /// 授权接口
    /// &lt;/summary&gt;
    public interface IOrderServicePermissionsAppService
    {
        public Task AddRolePermissionAsync(string roleName, string permission);

        public Task AddUserPermissionAsync(Guid userId, string permission);

        public Task AddClientPermissionAsync(string ClientName, string permission);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OrderPermissionDefinitionProvider 添加权限类型</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using LKN.Order.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace LKN.Order.Permissions;

public class OrderPermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        //var myGroup = context.AddGroup(OrderPermissions.GroupName, L(&quot;Permission:Order&quot;));
        var myGroup = context.AddGroup(OrderPermissions.GroupName);

        var permissionDefinition = myGroup.AddPermission(OrderPermissions.Orders.Default);
        permissionDefinition.AddChild(OrderPermissions.Orders.Update);
        permissionDefinition.AddChild(OrderPermissions.Orders.Create);
        permissionDefinition.AddChild(OrderPermissions.Orders.Delete);
        permissionDefinition.AddChild(OrderPermissions.Orders.Select);

        permissionDefinition.AddChild(&quot;select&quot;);
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create&lt;OrderResource&gt;(name);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码实现已经到这里了，运行订单详情聚合微服务和订单微服务，我们再次通过订单详情聚合微服务查询订单详情接口，看看能否能查询到订单详情信息。 通过浏览器直接访问</p><p><img src="`+Q+'" alt="Alt text"></p><p>如果订单微服务中没有对该客户端授权的话，就会报以下错误。</p><p><img src="'+J+'" alt="Alt text"></p><p>需要在订单微服务端给指定的客户账号（OrderDetailsServices-Client）给予授权（select权限）。</p><p><img src="'+Y+'" alt="Alt text"></p><p>此时，再访问<code>LKN.OrderDetailsServices</code> 聚合服务微服务，调用订单详情接口，认证和授权通过。</p><p><img src="'+$+'" alt="Alt text"></p><h3 id="总结-分布式流程分析" tabindex="-1"><a class="header-anchor" href="#总结-分布式流程分析" aria-hidden="true">#</a> 总结：分布式流程分析</h3><p><img src="'+X+`" alt="Alt text"></p><h2 id="分布式权限-动态c-客户端权限" tabindex="-1"><a class="header-anchor" href="#分布式权限-动态c-客户端权限" aria-hidden="true">#</a> 分布式权限-动态C#客户端权限</h2><p>动态c#客户端权限，就是通过反向代理的原理，来实现客户调用接口是时，动态添加token。<br> 我们基于abp 架构来实现，自己的实现动态C#客户端权限。代码如下： 步骤： 1、创建abp console 项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>abp new LKN.Mircroservices.ClientHttps <span class="token parameter variable">-t</span> console <span class="token parameter variable">-o</span> ./LKN.Mircroservices.ClientHttps <span class="token parameter variable">-v</span> <span class="token number">7.3</span>.0 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>nuget/项目 添加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>	  &lt;PackageReference Include=&quot;Volo.Abp.Http.Client.IdentityModel&quot; Version=&quot;7.3.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Module的文件添加 <code>ClientHttpsModule</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>[DependsOn(
   ...
    typeof(AbpHttpClientIdentityModelModule) // 配置AbpIdentityModel
  ...
)]
public class ClientHttpsModule : AbpModule
{
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>appsettings.json 配置文件，需要添加 IdentityClients 节点信息，需要在微服务网站端配置。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;IdentityClients&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//&quot;Default&quot;: {</span>
    <span class="token comment">//  /*&quot;GrantType&quot;: &quot;client_credentials&quot;,*/</span>
    <span class="token comment">//  &quot;GrantType&quot;: &quot;password&quot;,</span>
    <span class="token comment">//  &quot;ClientId&quot;: &quot;OrderDetailService-Client-password&quot;,</span>
    <span class="token comment">//  &quot;ClientSecret&quot;: &quot;123456&quot;,</span>
    <span class="token comment">//  &quot;Authority&quot;: &quot;https://localhost:44315&quot;,</span>
    <span class="token comment">//  &quot;UserName&quot;: &quot;Regex2&quot;,</span>
    <span class="token comment">//  &quot;UserPassword&quot;: &quot;zjh123WTR!&quot;</span>
    <span class="token comment">//},</span>
    <span class="token property">&quot;Default&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;GrantType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span> <span class="token comment">//类型</span>
      <span class="token property">&quot;ClientId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderDetailsServices-Client&quot;</span><span class="token punctuation">,</span><span class="token comment">// 客户id</span>
      <span class="token property">&quot;ClientSecret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:44386&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;OrderService&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;GrantType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ClientId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderDetailService-Client&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ClientSecret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:44315&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ProductService&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;GrantType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ClientId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderDetailService-Client&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;ClientSecret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Authority&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:44315&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、添加聚合微服务端，C#动态客户服务，Module文件 添加注册。如： LKN.OrderDetailsServices订单聚合微服务中OrderDetailsServicesModule添加 typeof(ClientHttpsModule) 特性。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    ....
    [DependsOn(typeof(ClientHttpsModule))]// 配置AbpIdentityModel
    public class OrderDetailsServicesModule: AbpModule
    {
        .....
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RemoteServiceHttpClientAuthenticator 代码实现</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Http.Client.Authentication;
using Volo.Abp.IdentityModel;

namespace LKN.Microservices.ClientHttps.Https
{
    /// &lt;summary&gt;
    /// 动态C#客户端设置请求头
    /// &lt;/summary&gt;
    [Dependency(ServiceLifetime.Singleton)]
    public class RemoteServiceHttpClientAuthenticator : IRemoteServiceHttpClientAuthenticator, ISingletonDependency
    {
        private string accessToken { set; get; }
        public IIdentityModelAuthenticationService _authenticator { set; get; }
        public Task Authenticate(RemoteServiceHttpClientAuthenticateContext context)
        {
            HttpClient httpClient = context.Client;
            //bool flag = _authenticator.TryAuthenticateAsync(httpClient, &quot;OrderService&quot;).Result;
            bool flag = _authenticator.TryAuthenticateAsync(httpClient).Result;

            // 2、使用accessToken
            //context.Client.SetBearerToken(accessToken);
            // 1、创建accessToken
            /*if (string.IsNullOrEmpty(accessToken))
            {
                IdentityClientConfiguration identityClient = new IdentityClientConfiguration();
                identityClient.Authority = &quot;https://localhost:44315&quot;;
                identityClient.ClientId = &quot;OrderDetailService-Client&quot;;
                identityClient.ClientSecret = &quot;123456&quot;;
                identityClient.GrantType = &quot;client_credentials&quot;;
                accessToken = _authenticator.GetAccessTokenAsync(identityClient).Result;
            }*/
            IdentityClientConfiguration identityClient = new IdentityClientConfiguration();
            return Task.CompletedTask;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、接口端就可以按照平的调用了，不需要额外重新获取token,然后在接口中再通过<code>HttpClient</code>，设置请求token了。</p><p>实例代码：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
        /// 获取订单详情
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;{id}&quot;)]
        public async Task&lt;OrderDto&gt; Get(Guid id, string AccessToken)
        {
            //原有的方式：

            //HttpClient apiClient = new HttpClient();
            //apiClient.SetBearerToken(AccessToken); // 1、设置token到请求头
            //HttpResponseMessage response = await apiClient.GetAsync(&quot;https://localhost:44397/api/OrderService/order/&quot; + id);
            //if (!response.IsSuccessStatusCode)
            //{
            //    throw new Exception($&quot;API Request Error, StatusCode is : {response.StatusCode} + {response.Content}&quot;);
            //}
            //else
            //{
            //    string content = await response.Content.ReadAsStringAsync();
            //    return JsonConvert.DeserializeObject&lt;OrderDto&gt;(content);
            //}


            //正常调用的方式  动态客户端实现token获取与传输
            // 1、查询订单
            OrderDto orderDto = await _OrderAppService.GetAsync(id);

            // 2、查询商品
            OrderItemDto[] orderItemDtos = orderDto.OrderItems;
            foreach (var orderItem in orderItemDtos)
            {
                ProductDto productDto = await _ProductAppService.GetAsync(orderItem.ProductId);

                //3、设置商品名称
                orderItem.ProductName = productDto.ProductTitle;
            }
            // 2、查询商品
            return orderDto;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+Z+`" alt="Alt text"></p><h2 id="分布式权限-分布式登录-单点登录" tabindex="-1"><a class="header-anchor" href="#分布式权限-分布式登录-单点登录" aria-hidden="true">#</a> 分布式权限-分布式登录（单点登录）</h2><p>分布式登录，需要创建网站项目。我们创建一个<code>LKN.EbusinessWebSite</code> ,并修改AuthMircoService 认证中心服务，添加单点登录页面。</p><p>步骤 1、修改AuthMircoService、添加单点登录页面 2、创建 LKN.EbusinessWebSite 网站</p><p>落地</p><p>认证中心，添加单点登录页面 添加引用 apb 的 Identity 模块、Account模块、AspNetCore.Mvc.UI模块的包</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//B:LKN.AuthMicroService.HttpApi.Host
//Identity 模块
&lt;PackageReference Include=&quot;Volo.Abp.Identity.EntityFrameworkCore&quot; Version=&quot;7.3.0&quot; /&gt;
&lt;PackageReference Include=&quot;Volo.Abp.Identity.Application.Contracts&quot; Version=&quot;7.3.0&quot; /&gt;
&lt;PackageReference Include=&quot;Volo.Abp.Identity.HttpApi&quot; Version=&quot;7.3.0&quot; /&gt;
//Acount模块
&lt;PackageReference Include=&quot;Volo.Abp.Account.HttpApi&quot; Version=&quot;7.3.0&quot; /&gt;
&lt;PackageReference Include=&quot;Volo.Abp.Account.Web.IdentityServer&quot; Version=&quot;7.3.0&quot; /&gt;
&lt;PackageReference Include=&quot;Volo.Abp.Account.Application&quot; Version=&quot;7.3.0&quot; /&gt;
//UI 模块（单点登录界面）
&lt;PackageReference Include=&quot;Volo.Abp.AspNetCore.Mvc&quot; Version=&quot;7.3.0&quot; /&gt;
&lt;PackageReference Include=&quot;Volo.Abp.AspNetCore.Mvc.UI&quot; Version=&quot;7.3.0&quot; /&gt;
&lt;PackageReference Include=&quot;Volo.Abp.AspNetCore.Mvc.UI.Bootstrap&quot; Version=&quot;7.3.0&quot; /&gt;
&lt;PackageReference Include=&quot;Volo.Abp.AspNetCore.Mvc.UI.Bundling&quot; Version=&quot;7.3.0&quot; /&gt;
&lt;PackageReference Include=&quot;Volo.Abp.AspNetCore.Mvc.UI.Theme.Basic&quot; Version=&quot;7.3.0&quot; /&gt;
//E:LKN.AuthMicroService.HttpApi.Host

//B:LKN.AuthMicroService.EntityFrameworkCore 下需要添加
&lt;PackageReference Include=&quot;Volo.Abp.Identity.EntityFrameworkCore&quot; Version=&quot;7.3.0&quot; /&gt;
//E:LKN.AuthMicroService.EntityFrameworkCore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在项目中找Module文件，添加引用 AuthMicroServiceHttpApiHostModule</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>
[DependsOn(
    typeof(AuthMicroServiceApplicationModule),
    typeof(AuthMicroServiceEntityFrameworkCoreModule),
    typeof(AuthMicroServiceHttpApiModule),

    typeof(AbpAutofacModule),
    typeof(AbpEntityFrameworkCoreMySQLModule),
    typeof(AbpPermissionManagementEntityFrameworkCoreModule),
    //Identiy模块 
    typeof(AbpIdentityApplicationModule),
    typeof(AbpIdentityEntityFrameworkCoreModule),
    typeof(AbpIdentityApplicationContractsModule),
    //账号模块

    typeof(AbpAccountWebIdentityServerModule),
    typeof(AbpAccountApplicationModule),

    typeof(AbpAspNetCoreSerilogModule),
    typeof(AbpSwashbuckleModule),

    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpAspNetCoreMvcUiBasicThemeModule)
    
    )]
public class AuthMicroServiceHttpApiHostModule : AbpModule
{
    ....
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并在EntityFrameworkCore文件目录中找到 AuthMicroServiceHttpApiHostMigrationsDbContext 添加用户 &quot;ConfigureIdentity&quot; 表，生成迁移文件创建用表。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer;
using Volo.Abp.PermissionManagement;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;

namespace LKN.AuthMicroService.EntityFrameworkCore;

public class AuthMicroServiceHttpApiHostMigrationsDbContext : AbpDbContext&lt;AuthMicroServiceHttpApiHostMigrationsDbContext&gt;
{
    public AuthMicroServiceHttpApiHostMigrationsDbContext(DbContextOptions&lt;AuthMicroServiceHttpApiHostMigrationsDbContext&gt; options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // 1、去掉IdentityServer4前缀
        AbpIdentityServerDbProperties.DbTablePrefix = &quot;&quot;;
        // 去掉
        AbpIdentityDbProperties.DbTablePrefix = &quot;&quot;;
       // AbpPermissionManagementDbProperties.DbTablePrefix = &quot;&quot;;

        base.OnModelCreating(modelBuilder);

        // 2、创建用户表
        modelBuilder.ConfigureAuthMicroService();
        //创建用户表
        modelBuilder.ConfigureIdentity(); 
        //权限表
       // modelBuilder.ConfigurePermissionManagement();
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LKN.AuthMicroService.EntityFrameworkCore 模块, <code>AuthMicroServiceEntityFrameworkCoreModule</code>类中添加 <code> typeof(AbpIdentityEntityFrameworkCoreModule)</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.Identity;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.IdentityServer.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace LKN.AuthMicroService.EntityFrameworkCore;

[DependsOn(
    typeof(AuthMicroServiceDomainModule),
    typeof(AbpEntityFrameworkCoreModule),
    typeof(AbpIdentityServerEntityFrameworkCoreModule),// 集成 IdentityServer
    typeof(AbpIdentityEntityFrameworkCoreModule) // 集成权限管理
)]
public class AuthMicroServiceEntityFrameworkCoreModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddAbpDbContext&lt;AuthMicroServiceDbContext&gt;(options =&gt;
        {
                /* Add custom repositories here. Example:
                 * options.AddRepository&lt;Question, EfCoreQuestionRepository&gt;();
                 */
        });
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、创建 LKN.EbusinessWebSite Mvc 网站 身份认证器 <code> Microsoft.AspNetCore.Authentication.OpenIdConnect</code> 进行页面跳转</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    &lt;PackageReference Include=&quot;Microsoft.AspNetCore.Authentication.OpenIdConnect&quot; Version=&quot;7.0.12&quot; /&gt;
    // abp  
    &lt;PackageReference Include=&quot;Volo.Abp.AspNetCore.Mvc&quot; Version=&quot;7.3.0&quot; /&gt;
    &lt;PackageReference Include=&quot;Volo.Abp.Autofac&quot; Version=&quot;7.3.0&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 EbusinessWebSiteModule</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using LKN.Microservices.ClientHttps;
using LKN.Order;
using LKN.Product;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Volo.Abp;
using Volo.Abp.AspNetCore.Mvc;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace LKN.EbusinessWebSite
{
    [DependsOn(typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(typeof(AbpAutofacModule))]
    [DependsOn(typeof(ClientHttpsModule))]

    [DependsOn(typeof(OrderHttpApiClientModule))]
    [DependsOn(typeof(ProductHttpApiClientModule))]
    public class EbusinessWebSiteModule: AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();
            context.Services.AddControllersWithViews();

            context.Services.AddAuthentication(options =&gt;
            {
                options.DefaultScheme = &quot;Cookies&quot;;
                options.DefaultChallengeScheme = &quot;oidc&quot;;
            })
                .AddCookie(&quot;Cookies&quot;, options =&gt;
                {
                    options.ExpireTimeSpan = TimeSpan.FromDays(365);
                })
                .AddOpenIdConnect(&quot;oidc&quot;, options =&gt;
                {
                    options.Authority = &quot;https://localhost:44386&quot;;
                    options.ClientId = &quot;EbusinessWebSite-Client&quot;;
                    options.ClientSecret = &quot;12345&quot;;
                    options.RequireHttpsMetadata = false;
                    options.ResponseType = OpenIdConnectResponseType.Code;
                    options.SaveTokens = true;// Token（身份证）
                    options.Scope.Add(&quot;openid&quot;);
                    options.Scope.Add(&quot;profile&quot;);
                    options.Scope.Add(&quot;OrderService&quot;);
                    options.Scope.Add(&quot;InternalGateway&quot;);
                });
        }

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
                app.UseExceptionHandler(&quot;/Home/Error&quot;);
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
            // 2、开启身份验证(开启登录认证)
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =&gt;
            {
                endpoints.MapControllerRoute(
                    name: &quot;default&quot;,
                    pattern: &quot;{controller=Home}/{action=Index}/{id?}&quot;);
            });
        }

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、在AuthMicroService认证中心配置Client客户信息 、ApiScopes作用域、ApiResources的API资源信息，同时需要添加用户信息。<br> 添加Client客户端json数据</p><p><img src="`+ee+`" alt="Alt text"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;clientName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EbusinessWebSite-Client&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;redirectUri&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:7132/signin-oidc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;postLogoutRedirectUri&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:7132/signout-callback-oidc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;openid&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;profile&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;OrderService&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;InternalGateway&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;grantTypes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;authorization_code&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 ApiScopes 作用域json 数据</p><p><img src="`+ne+`" alt="Alt text"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//第二个作用域 openid</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;openid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;openid&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">//第二个作用域 profile</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;profile&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;profile&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加 ApiResources的API资源信息</p><p><img src="`+se+`" alt="Alt text"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//第一个api资源 openid  name名称 必须 跟作用域名称一样 </span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;openid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;openid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;openid&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;claims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;admin&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">//第二个api资源 profile  name名称 必须 跟作用域名称一样 </span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;profile&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;profile&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;profile&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;claims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;admin&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当网站转到AuthMicorService认证中心登录时</strong>，一直在报错<code>[500] invalid_scope</code>信息时:<br> 第一种解决方案：注意检查客户端配置的作用域信息，是否在ApiScopes表和ApiResouces表有对应的配置，如果没有需要添加，即可解决。</p><p><img src="`+ie+'" alt="Alt text"></p><p>第二种解决方案： 在IdentityService4生成的IdentityResources表中，需要添加<code>openid</code>、<code>profile</code> 认证资源，这里功能也是在AuthMicroService认证中心实现 <code>IdentityResourcesAppService</code> 服务。参考【ApiResourceAppService】实现，同基于 abp identiytService源码来实现。</p><p><img src="'+ae+'" alt="Alt text"></p><p>账号注册，便于单点登录<br> Account<br><img src="'+te+`" alt="Alt text"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;userName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kenyonli&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emailAddress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;kenyonli@example.com&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Lkn12345.&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;appName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单点登录流程分析" tabindex="-1"><a class="header-anchor" href="#单点登录流程分析" aria-hidden="true">#</a> 单点登录流程分析</h3><p>1、访问网站首页时，诺没有登录，就转到认证中心登录页面。</p><p><img src="`+oe+'" alt="Alt text"></p><p>2、登录成功后，即跳转到网站首页。</p><p><img src="'+re+'" alt="Alt text"></p><h3 id="网站中调用orderservice接口时-报异常" tabindex="-1"><a class="header-anchor" href="#网站中调用orderservice接口时-报异常" aria-hidden="true">#</a> 网站中调用OrderService接口时，报异常</h3><p>以下异常，属于认证中心的授权问题，请检查客户端的作用域及接口授权问题。<br> 如：案例中的 EbusinessWebSite-Client客户端作用域没有配置OrderServer报错，配置好后需求退出登录后，再次登录。</p><p><img src="'+le+'" alt="Alt text"></p><p>如：案例中的 LKN.EbusinessWebSite网站，前端和后端错误信息，从错误日志中根据找不到真正的原因，需要在调用OrderService微服务端找原因。</p><p>前端：</p><p><img src="'+ce+'" alt="Alt text"></p><p>后台：</p><p><img src="'+de+'" alt="Alt text"></p><p>OrderService微服务端日志中看到<code> Authorization failed. These requirements were not met</code> ，意思说：授权失败。未满足这些要求</p><p><img src="'+pe+`" alt="Alt text"></p><h2 id="登录-分析" tabindex="-1"><a class="header-anchor" href="#登录-分析" aria-hidden="true">#</a> 登录 分析</h2><p>1、id_token 登录 token<br> 下次登录全验证<br> 2、access_token 访问微服务token<br> 访问微服务token</p><h2 id="分布式权限-网关权限" tabindex="-1"><a class="header-anchor" href="#分布式权限-网关权限" aria-hidden="true">#</a> 分布式权限-网关权限</h2><p>网关权限，需要认证中心，先配置API资源和作用域相关信息,以及添加扩展方法，需要注意的是，客户端中添加的作用域名称，也要跟ApiScope、ApiResources的名称一样才行。<br> 应用场景：以订单微服务中查询订单业务为例，网站通过内部网关访问订单微服务，来实现查询服务。 步骤<br> 1、在AuthMicroService认证中心微服务，通过接口添加作用域和API资源信息 2、在内部网关配置权限验证 3、网站中EbusinessWebSiteModule类中需要添加作用域，IRemoteServiceHttpClientAuthenticator 接口实现C#动态客户端调用</p><p>落地实现</p><p>1、AuthMircoService 认证中心接口添加 API资源、作用域</p><p>ApiResource 接口添加数据</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//ApiResource</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;InternalGateway&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;InternalGateway&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;InternalGateway&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;claims&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;ad&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="Alt text"></p><p>ApiScope 接口添加数据</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//ApiScope</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;InternalGateway&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;displayName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;InternalGateway&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt="Alt text"></p><p>客户端需要修改一下作用域信息</p><p>Client</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;clientName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EbusinessWebSite-Client&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12345&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;redirectUri&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:7132/signin-oidc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;postLogoutRedirectUri&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:7132/signout-callback-oidc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;openid&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;profile&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;OrderService&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;InternalGateway&quot;</span><span class="token punctuation">,</span> <span class="token comment">//新添加的</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;grantTypes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;authorization_code&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+ue+'" alt="Alt text"></p><p>查看认证中心数据库表结果：</p><p><img src="'+ve+'" alt="Alt text"><br><img src="'+me+'" alt="Alt text"><br><img src="'+be+`" alt="Alt text"></p><p>关于网关的信息已经添加成功</p><p>2、内部网关微服务实现权限验证</p><p>基于之前的内部网关微服务，在<code>InternalGatewayHostModule</code> 类中添加如下代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>     // 1、添加添加身份验证
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            .....
            // 1、添加添加身份验证
            context.Services.AddAuthentication(options =&gt; {
                                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                            })
                            .AddJwtBearer(options =&gt;
                            {
                                options.Authority = configuration[&quot;AuthServer:Authority&quot;];// 1、认证中心地址
                                options.Audience = &quot;InternalGateway&quot;; //2、api名称(项目具体名称)
                                // 3、https元数据，不需要
                                options.RequireHttpsMetadata = Convert.ToBoolean(configuration[&quot;AuthServer:RequireHttpsMetadata&quot;]);
                            });
            ....
        }
      //2、开启权限验证
        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();

            ....
            app.UseAuthentication();//2、开启权限验证
            ....
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、在网站中配置C#动态客户端调用远程连参数 <code>appsettings.json</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;RemoteServices&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/*&quot;Order&quot;: {
      &quot;BaseUrl&quot;: &quot;https://localhost:44397/&quot;
    },*/</span>
    <span class="token comment">//内部网关调用</span>
    <span class="token property">&quot;Order&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:7171/&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Product&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:44370/&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Payment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:44357/&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并引用C#动态客户端扩展方法类<code>RemoteServiceHttpClientAuthenticator</code></p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>namespace LKN.Microservices.ClientHttps.Https
{
    /// &lt;summary&gt;
    /// 动态C#客户端设置请求头
    /// &lt;/summary&gt;
    [Dependency(ServiceLifetime.Singleton)]
    public class RemoteServiceHttpClientAuthenticator : IRemoteServiceHttpClientAuthenticator, ISingletonDependency
    {
        private string accessToken { set; get; }
        public IIdentityModelAuthenticationService _authenticator { set; get; }
        public IHttpContextAccessor _accessor { set; get; }
        public Task Authenticate(RemoteServiceHttpClientAuthenticateContext context)
        {

            HttpClient httpClient = context.Client;

            //1、使用accessToken
            try
            {
                accessToken = _accessor.HttpContext.GetTokenAsync(&quot;access_token&quot;).Result;
            }
            catch (Exception)
            {
                // 不作异常处理
                accessToken = &quot;&quot;;
            }

            if (!string.IsNullOrEmpty(accessToken))
            {
                httpClient.SetBearerToken(accessToken);
                return Task.CompletedTask;
            }
            //Task.WaitAll();
            //1、使用 配置文件获取token
            //bool flag = _authenticator.TryAuthenticateAsync(httpClient, &quot;OrderService&quot;).Result;
            bool flag = _authenticator.TryAuthenticateAsync(httpClient).Result;

            return Task.CompletedTask;
        }
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>EbusinessWebSiteModule</code>中添加 <code> [DependsOn(typeof(ClientHttpsModule))]</code> 引用，并在 <code>ConfigureServices</code> 配置 网关作用域信息。</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>
            context.Services.AddAuthentication(options =&gt;
            {
                options.DefaultScheme = &quot;Cookies&quot;;
                options.DefaultChallengeScheme = &quot;oidc&quot;;
            })
                .AddCookie(&quot;Cookies&quot;, options =&gt;
                {
                    options.ExpireTimeSpan = TimeSpan.FromDays(365);
                })
                .AddOpenIdConnect(&quot;oidc&quot;, options =&gt;
                {
                    options.Authority = &quot;https://localhost:44386&quot;;
                    options.ClientId = &quot;EbusinessWebSite-Client&quot;;
                    options.ClientSecret = &quot;12345&quot;;
                    options.RequireHttpsMetadata = false;
                    options.ResponseType = OpenIdConnectResponseType.Code;
                    options.SaveTokens = true;// Token（身份证）
                    options.Scope.Add(&quot;openid&quot;);
                    options.Scope.Add(&quot;profile&quot;);
                    options.Scope.Add(&quot;OrderService&quot;);
                    options.Scope.Add(&quot;InternalGateway&quot;);// 添加网关信息
                });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意一下，所有微服务（根据业务场景，这里用到的订单微服务、内部网关、认证微服务、网站）都启动成功后，访问时还会出现访问不成功的情况，请清除浏览器的缓存，重新登录试试看。</p>`,172);function Ce(_e,Me){const i=o("router-link"),t=o("ExternalLinkIcon");return d(),p("div",null,[ke,e("nav",qe,[e("ul",null,[e("li",null,[s(i,{to:"#目录"},{default:a(()=>[n("目录")]),_:1})]),e("li",null,[s(i,{to:"#分布式权限核心概念"},{default:a(()=>[n("分布式权限核心概念")]),_:1})]),e("li",null,[s(i,{to:"#分布式权限应用"},{default:a(()=>[n("分布式权限应用")]),_:1})]),e("li",null,[s(i,{to:"#分布式权限-权限微服务创建"},{default:a(()=>[n("分布式权限-权限微服务创建")]),_:1})]),e("li",null,[s(i,{to:"#分布式权限-identityserver4集成"},{default:a(()=>[n("分布式权限-IdentityServer4集成")]),_:1})]),e("li",null,[s(i,{to:"#分布式权限微服务落地"},{default:a(()=>[n("分布式权限微服务落地")]),_:1})]),e("li",null,[s(i,{to:"#分布式权限authmicoservice落地"},{default:a(()=>[n("分布式权限AuthMicoService落地")]),_:1})]),e("li",null,[s(i,{to:"#分布式权限authmicoservice应用"},{default:a(()=>[n("分布式权限AuthMicoService应用")]),_:1})]),e("li",null,[s(i,{to:"#总结-用户实现登录之后-会得到一个什么结果"},{default:a(()=>[n("总结：用户实现登录之后，会得到一个什么结果？")]),_:1})]),e("li",null,[s(i,{to:"#token如何得到呢"},{default:a(()=>[n("Token如何得到呢？")]),_:1})]),e("li",null,[s(i,{to:"#authmicroserver认证中心配置"},{default:a(()=>[n("AuthMicroServer认证中心配置")]),_:1})]),e("li",null,[s(i,{to:"#总结-token生成思路"},{default:a(()=>[n("总结 token生成思路")]),_:1})]),e("li",null,[s(i,{to:"#查询添加一个select权限"},{default:a(()=>[n("查询添加一个Select权限")]),_:1})]),e("li",null,[s(i,{to:"#用token-访问接口"},{default:a(()=>[n("用token 访问接口")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#总结认证中心的思路"},{default:a(()=>[n("总结认证中心的思路")]),_:1})])])]),e("li",null,[s(i,{to:"#分布式权限-自定义策略权限"},{default:a(()=>[n("分布式权限-自定义策略权限")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#总结-分布式流程分析"},{default:a(()=>[n("总结：分布式流程分析")]),_:1})])])]),e("li",null,[s(i,{to:"#分布式权限-动态c-客户端权限"},{default:a(()=>[n("分布式权限-动态C#客户端权限")]),_:1})]),e("li",null,[s(i,{to:"#分布式权限-分布式登录-单点登录"},{default:a(()=>[n("分布式权限-分布式登录（单点登录）")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#单点登录流程分析"},{default:a(()=>[n("单点登录流程分析")]),_:1})]),e("li",null,[s(i,{to:"#网站中调用orderservice接口时-报异常"},{default:a(()=>[n("网站中调用OrderService接口时，报异常")]),_:1})])])]),e("li",null,[s(i,{to:"#登录-分析"},{default:a(()=>[n("登录 分析")]),_:1})]),e("li",null,[s(i,{to:"#分布式权限-网关权限"},{default:a(()=>[n("分布式权限-网关权限")]),_:1})])])]),Ae,e("p",null,[n("解决方案如下，就可以了。"),e("a",he,[n("解决参考地址"),s(t)]),n(" / "),e("a",ye,[n("解决方案"),s(t)])]),Se])}const Ie=c(ge,[["render",Ce],["__file","abpmicroservices0010.html.vue"]]);export{Ie as default};
