import{_ as a,r as t,o as d,c as l,a as e,b as s,w as r,d as i,e as c}from"./app-c1c3c937.js";const o="/images/abpmicroservices/micro002/abpmicroservices0002_0001.png",p="/images/abpmicroservices/micro002/abpmicroservices0002_0002.png",v="/images/abpmicroservices/micro002/abpmicroservices0002_0003.png",u="/images/abpmicroservices/micro002/abpmicroservices0002_0004.png",m="/images/abpmicroservices/micro002/abpmicroservices0002_0005.png",b="/images/abpmicroservices/micro002/abpmicroservices0002_0006.png",g="/images/abpmicroservices/micro002/abpmicroservices0002_0007.png",h="/images/abpmicroservices/micro002/abpmicroservices0002_0008.png",_="/images/abpmicroservices/micro002/abpmicroservices0002_0009.png",A="/images/abpmicroservices/micro002/abpmicroservices0002_0010.png",f="/images/abpmicroservices/micro002/abpmicroservices0002_0011.png",O="/images/abpmicroservices/micro002/abpmicroservices0002_0012.png",x="/images/abpmicroservices/micro002/abpmicroservices0002_0013.png",q="/images/abpmicroservices/micro002/abpmicroservices0002_0014.png",k={},S=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),i(" 目录")],-1),C={class:"table-of-contents"},D=c('<h2 id="微服务通信" tabindex="-1"><a class="header-anchor" href="#微服务通信" aria-hidden="true">#</a> 微服务通信</h2><h3 id="什么是通信" tabindex="-1"><a class="header-anchor" href="#什么是通信" aria-hidden="true">#</a> 什么是通信</h3><p>通信：各个微服务之间互相建立连接</p><p>如图片所示：</p><p><img src="'+o+'" alt="Alt text"></p><p>微服务1和微服务2之间建立连接，然后通过连接，微服务1向微服务2请求数据。这就是连接</p><h3 id="电商微服务中为什么要使用通信" tabindex="-1"><a class="header-anchor" href="#电商微服务中为什么要使用通信" aria-hidden="true">#</a> 电商微服务中为什么要使用通信</h3><h3 id="电商微服务项目" tabindex="-1"><a class="header-anchor" href="#电商微服务项目" aria-hidden="true">#</a> 电商微服务项目</h3><p>电商微服务项目已经落地，目前的状态结构<br> 如图所示：</p><p><img src="'+p+'" alt="Alt text"></p><p>目前有3个角色组成： 1、订单详细聚合服务<br> 2、订单、商品、支付、用户微服务<br> 3、订单、商品，支付，用户数据库</p><p>客户端发起查询订单的请求，大致路径，如下：<br> 客户端——&gt;订单详情聚合服务——&gt;订单微服务——&gt;订单数据库。<br> 目前，遇到一个问题，订单详情聚合服务和订单微服务之间如何通信？<br> 所以：使用http进行通信</p><h3 id="电商微服务项目-通信" tabindex="-1"><a class="header-anchor" href="#电商微服务项目-通信" aria-hidden="true">#</a> 电商微服务项目-通信</h3><p>订单详情聚合服务和订单微服务之间通信， 如图所示：</p><p><img src="'+v+'" alt="Alt text"></p><p>订单详情和订单微服务之间使用http进行通信</p><h3 id="电商微服务如何落地通信" tabindex="-1"><a class="header-anchor" href="#电商微服务如何落地通信" aria-hidden="true">#</a> 电商微服务如何落地通信</h3><h4 id="基础前提" tabindex="-1"><a class="header-anchor" href="#基础前提" aria-hidden="true">#</a> 基础前提</h4><p>1、LKN.OrderDetailsServices<br> 2、LKN.Order.HttpApi.Client</p><h5 id="lkn-order-httpapi-client-项目准备" tabindex="-1"><a class="header-anchor" href="#lkn-order-httpapi-client-项目准备" aria-hidden="true">#</a> <code>LKN.Order.HttpApi.Client</code> 项目准备</h5><p>1、先创建电商详情聚合服务项目<code>LKN.Order.HttpApi.Client</code> 如图所示：</p><p><img src="'+u+`" alt="Alt text"></p><p>2、然后在<code>LKN.Order.HttpApi.Client</code>项目中，修改<code>OrderHttpApiClientModule</code>类代码，如下：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using Microsoft.Extensions.DependencyInjection;
using Volo.Abp.Http.Client;
using Volo.Abp.Modularity;
using Volo.Abp.VirtualFileSystem;

namespace LKN.Order;

[DependsOn(
    typeof(OrderApplicationContractsModule),
    typeof(AbpHttpClientModule))]
public class OrderHttpApiClientModule : AbpModule
{
    public const string RemoteServiceName = &quot;Order&quot;;

    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        context.Services.AddHttpClientProxies(
            typeof(OrderApplicationContractsModule).Assembly,
             RemoteServiceName
        );

        Configure&lt;AbpVirtualFileSystemOptions&gt;(options =&gt;
        {
            options.FileSets.AddEmbedded&lt;OrderHttpApiClientModule&gt;();
        });

    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意核心代码：<code>public const string RemoteServiceName = &quot;Order&quot;</code> 为订单微服务名称</p><h3 id="lkn-orderdetailsservices项目准备" tabindex="-1"><a class="header-anchor" href="#lkn-orderdetailsservices项目准备" aria-hidden="true">#</a> LKN.OrderDetailsServices项目准备</h3><p>1、先创建电商详情聚合服务项目<code>LkN.orderDetailsServices</code>, 如图所示：</p><p><img src="`+m+'" alt="Alt text"></p><p>2、然后在<code>LKN.OrderDetailsServices</code>项目中，引入<code>LKN.Order.HttpApi.Client</code>项目</p><p>如图所示：</p><p><img src="'+b+`" alt="Alt text"></p><p>3、然后在<code>LKN.OrderDetailsService</code>项目中，修改为<code>appsettings.json</code>配置文件内容，新配置内容，如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;Logging&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;LogLevel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;Default&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;Microsoft&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Warning&quot;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&quot;Microsoft.Hosting.Lifetime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Information&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;AllowedHosts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;RemoteServices&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;Order&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:44365/&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心配置：<br> 1、RemoteServices:配置订单微服务地址<br> 2、Order:为订单微服务名称<br> 3、BaseUrl:&quot;http://localhost:44365/&quot;: 为订单微服务个具体地址</p><h3 id="查询订单业务场景落地" tabindex="-1"><a class="header-anchor" href="#查询订单业务场景落地" aria-hidden="true">#</a> 查询订单业务场景落地</h3><p>条件<br> 1、LKN.Order.HttpApi.Host<br> 2、LKN.OrderDetailsServices</p><h4 id="订单微服务启动" tabindex="-1"><a class="header-anchor" href="#订单微服务启动" aria-hidden="true">#</a> 订单微服务启动</h4><p>1、先进入<code>LKN.Order.HttpApi.Host</code>项目cmd控制台<br> 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet run 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+g+'" alt="Alt text"><br><img src="'+h+'" alt="Alt text"></p><h4 id="普通项目修改为简单abp项目" tabindex="-1"><a class="header-anchor" href="#普通项目修改为简单abp项目" aria-hidden="true">#</a> 普通项目修改为简单Abp项目</h4><p>1、需要引入<code>Volo.Abp.AspNetCore.Mvc</code> 、<code>Volo.Abp.AspNetCore.Mvc</code> v 7.3.0</p><p><img src="'+_+`" alt="Alt text"></p><p>2、创建<code>OrderDetailsServicesModule</code> 类，重写两个方法<code>ConfigureServices</code>,<code>OnApplicationInitialization</code> 写配置</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>   
    [DependsOn(typeof(AbpAspNetCoreMvcModule))]
    [DependsOn(typeof(AbpAutofacModule))]
    public class OrderDetailsServicesModule: AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            context.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            context.Services.AddEndpointsApiExplorer();
            context.Services.AddSwaggerGen(c=&gt;c.SwaggerDoc(&quot;v1&quot;,new OpenApiInfo { Title = &quot;LKN.OrderDetailsServices&quot;, Version = &quot;v1&quot; }));
        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();
            var env = context.GetEnvironment();
            // Configure the HTTP request pipeline.
            if (env.IsDevelopment())
            {
                app.UseExceptionHandler(&quot;/Error&quot;);
                app.UseHsts();

                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c =&gt; c.SwaggerEndpoint(&quot;/swagger/v1/swagger.json&quot;, &quot;LKN.OrderDetailsServices v1&quot;));
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseConfiguredEndpoints();
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、修改<code>Program</code>类，写入代码</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>var builder = WebApplication.CreateBuilder(args);

builder.Host.AddAppSettingsSecretsJson()
               .UseAutofac();
               //.UseSerilog();
await builder.AddApplicationAsync&lt;OrderDetailsServicesModule&gt;();

var app = builder.Build();
await app.InitializeApplicationAsync();
await app.RunAsync();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建订单查询接口" tabindex="-1"><a class="header-anchor" href="#创建订单查询接口" aria-hidden="true">#</a> 创建订单查询接口</h4><p>1、先在<code>LKN.OrderDetailsService</code>项目中，创建<code>controllers</code>文件夹，然后在<code>controllers</code>中，创建<code>OrderDetailController</code>类<br> 如图所示：</p><p><img src="`+A+`" alt="Alt text"></p><p>2、然后在OrderDetailsController类中添加代码，如下：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> /// &lt;summary&gt;
    /// 订单详情控制器
    /// &lt;/summary&gt;
    [ApiController]
    [Route(&quot;api/OrderDetailsServices/OrderDetails&quot;)]
    public class OrderDetailsController : ControllerBase
    {
        private readonly ILogger&lt;OrderDetailsController&gt; _logger;

        public IOrderAppService _OrderAppService { set; get; }

        public OrderDetailsController(ILogger&lt;OrderDetailsController&gt; logger)
        {
            _logger = logger;
        }

        /// &lt;summary&gt;
        /// 获取订单详情
        /// &lt;/summary&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpGet(&quot;{id}&quot;)]
        public async Task&lt;OrderDto&gt; Get(Guid id)
        {
            // 1、查询订单
            OrderDto orderDto  = await _OrderAppService.GetAsync(id);
            // 2、返回订单
            return orderDto;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>核心代码：</p><p>1、<code>IOrderAppService</code>：由<code>LKN.Order.HttpApi.Client</code>提供的订单控制器操作接口。订单微服务提供</p><p>2、<code>Get(Guid id)</code>：查询订单接口</p><p>创建订单接口访问 1、先进入<code>LKN.OrderDetailsServices</code>项目CMD控制台</p><p>​ 输入命令：<code>dotnet run</code></p><p><img src="`+f+'" alt="Alt text"><br><img src="'+O+'" alt="Alt text"></p><p>2、然后在浏览器中，输入<code>http://localhost:5128/swagger/index.html</code>地址，</p><p>如图所示：</p><p><img src="'+x+'" alt="Alt text"></p><p>核心解释：</p><p>​ 1、<code>OrderDetails</code>：为订单详情模块</p><p>​ 2、<code>/api/OrderDetailsServices/OrderDetails/{id}</code>：为订单查询接口</p><p>3、然后访问<code>/api/OrderDetailsServices/OrderDetails/{id}</code>，输入订单Id：<code>3a0dbf83-57d7-8168-e91a-0b94fbd83c1a</code>。查询订单结果</p><p>如图所示：</p><p><img src="'+q+'" alt="Alt text"></p>',67);function y(N,L){const n=t("router-link");return d(),l("div",null,[S,e("nav",C,[e("ul",null,[e("li",null,[s(n,{to:"#目录"},{default:r(()=>[i("目录")]),_:1})]),e("li",null,[s(n,{to:"#微服务通信"},{default:r(()=>[i("微服务通信")]),_:1}),e("ul",null,[e("li",null,[s(n,{to:"#什么是通信"},{default:r(()=>[i("什么是通信")]),_:1})]),e("li",null,[s(n,{to:"#电商微服务中为什么要使用通信"},{default:r(()=>[i("电商微服务中为什么要使用通信")]),_:1})]),e("li",null,[s(n,{to:"#电商微服务项目"},{default:r(()=>[i("电商微服务项目")]),_:1})]),e("li",null,[s(n,{to:"#电商微服务项目-通信"},{default:r(()=>[i("电商微服务项目-通信")]),_:1})]),e("li",null,[s(n,{to:"#电商微服务如何落地通信"},{default:r(()=>[i("电商微服务如何落地通信")]),_:1})]),e("li",null,[s(n,{to:"#lkn-orderdetailsservices项目准备"},{default:r(()=>[i("LKN.OrderDetailsServices项目准备")]),_:1})]),e("li",null,[s(n,{to:"#查询订单业务场景落地"},{default:r(()=>[i("查询订单业务场景落地")]),_:1})])])])])]),D])}const M=a(k,[["render",y],["__file","abpmicroservices0002.html.vue"]]);export{M as default};
