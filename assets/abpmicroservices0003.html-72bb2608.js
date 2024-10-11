import{_ as i,r as c,o as l,c as u,a as n,b as e,w as t,d as s,e as r}from"./app-c1c3c937.js";const d="/images/abpmicroservices/micro003/abpmicroservices0003_0001.png",v="/images/abpmicroservices/micro003/abpmicroservices0003_0002.png",k="/images/abpmicroservices/micro003/abpmicroservices0003_0003.png",m="/images/abpmicroservices/micro003/abpmicroservices0003_0004.png",o="/images/abpmicroservices/micro003/abpmicroservices0003_0005.png",b="/images/abpmicroservices/micro003/abpmicroservices0003_0006.png",q="/images/abpmicroservices/micro003/abpmicroservices0003_0007.png",p="/images/abpmicroservices/micro003/abpmicroservices0003_0008.png",g="/images/abpmicroservices/micro003/abpmicroservices0003_0009.png",y="/images/abpmicroservices/micro003/abpmicroservices0003_0010.png",h="/images/abpmicroservices/micro003/abpmicroservices0003_0011.png",A="/images/abpmicroservices/micro003/abpmicroservices0003_0012.png",S={},C=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),w={class:"table-of-contents"},P=r('<h2 id="微服务内部网关" tabindex="-1"><a class="header-anchor" href="#微服务内部网关" aria-hidden="true">#</a> 微服务内部网关</h2><h3 id="什么是api内部网关" tabindex="-1"><a class="header-anchor" href="#什么是api内部网关" aria-hidden="true">#</a> 什么是API内部网关</h3><p>根据 wiki 中的定义。</p><p>在计算机网络中，<strong>网关</strong>（英语：Gateway）是转发其他服务器通信数据的服务器，接收从客户端发送来的请求时，它就像自己拥有资源的源服务器一样对请求进行处理</p><p>由于wiki中介绍的网关过于抽象，所以需要进行通俗理解。</p><p>如何图所示：</p><p><img src="'+d+'" alt="Alt text"></p><p>微服务1向微服务2获取，请求过程如下</p><p>微服务1——&gt;内部网关——&gt;微服务2</p><p>微服务1 通过内部网关获取微服务2数据，通过内部网关进行通信。</p><p>微服务之间进行通信的网关就是API内部网关</p><p>能够完成两个微服务之间进行交互数据通信的技术就是API内部网关。</p><h3 id="电商微服务系统中为什么要使用内部网关" tabindex="-1"><a class="header-anchor" href="#电商微服务系统中为什么要使用内部网关" aria-hidden="true">#</a> 电商微服务系统中为什么要使用内部网关</h3><h4 id="电商微服务系统目前" tabindex="-1"><a class="header-anchor" href="#电商微服务系统目前" aria-hidden="true">#</a> 电商微服务系统目前</h4><p>如图所示：</p><p><img src="'+v+'" alt="Alt text"></p><p>查询订单业务场景实现思路，如下：</p><p>客户端——&gt;订单详情聚合服务——&gt;订单微服务——&gt;订单数据库<br> 如果订单微服务最高负载能力为600（cpu,内存，磁盘资源是有限的），意味着客户端只能发起600个查询订单的并发请求，如果客户端发起了1200查询商品并发，超过了600并发，就会导致订单微服务压力过大，订单微服务宕机的问题。</p><p>如何解决客户端查询商品并发量大的问题？</p><p>方案：商品微服务集群</p><h4 id="电商微服务系统-集群" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-集群" aria-hidden="true">#</a> 电商微服务系统-集群</h4><p>电商微服务集群，如图所示：</p><p><img src="'+k+'" alt="Alt text"></p><p>客户端发起1200查询商品并发，订单微服务启动2个实例，来处理并发请求。订单详情聚合需要发生修改，需要在订单详情聚合服务中，增加订单微服务2地址。会导致订单详情聚合服务违背开闭原则，会进一步导致订单详情聚合服务不稳定。而且，还需要在订单详情聚合服务增加负载均衡的代码，因为需要将客户端发起的请求，均分到订单微服务实例1、订单微服务实例2，也会导致订单详情聚合服务违背了开闭原则。</p><p>如何保证订单详情聚合服务遵守开闭？<br> 方案：内部网关</p><h4 id="电商微服务系统-集群-内部网关" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-集群-内部网关" aria-hidden="true">#</a> 电商微服务系统-集群-内部网关</h4><p>电商微服务集群，内部网关系统，如图所示：</p><p><img src="'+m+'" alt="Alt text"></p><p>客户端发起查询订单请求，路径如下：</p><p>客户端——&gt;订单详情聚合服务——&gt;内部网关——&gt;订单微服务——&gt;订单数据库<br> 内部网关：将客户请求均分到多个订单微服务实例<br> 当订单微服务增加实例，出现了新的实例地址，新的实例地址只需要加载到内部网关即可，订单详情聚合不用做任何修改，保证了订单详情聚合服务遵守了开闭原则。</p><h3 id="电商微服务系统中如何落地内部网关" tabindex="-1"><a class="header-anchor" href="#电商微服务系统中如何落地内部网关" aria-hidden="true">#</a> 电商微服务系统中如何落地内部网关</h3><p>微服务网关技术选项</p><p><img src="'+o+`" alt="Alt text"></p><p>核心解释： 1、<code>Netfilx Zuul + java</code>实现<br> 2、<code>Kong nginx + lua</code>脚本实现<br> 3、<code>thk go</code>语言开发，收费版本 4、<code>Ocelot aspnetcore</code> 开发的</p><h3 id="电商微服务系统中使用ocelot" tabindex="-1"><a class="header-anchor" href="#电商微服务系统中使用ocelot" aria-hidden="true">#</a> 电商微服务系统中使用Ocelot</h3><h4 id="ocelot是什么" tabindex="-1"><a class="header-anchor" href="#ocelot是什么" aria-hidden="true">#</a> Ocelot是什么</h4><p>简单的来说<code>Ocelot</code>是一堆的<code>asp.net core middleware</code>组成的一个管道。当它拿到请求之后会用到一个<code>request builder</code>来构造一个<code>httpRequestMesssage</code>发到下游的真实服务器， 等下游的服务返回<code>response</code>之后再由一个<code>middleware</code>将它返回的<code>HttpResponseMessage</code>映射到<code>HttpResponse</code>上。</p><h4 id="ocelot内部概念" tabindex="-1"><a class="header-anchor" href="#ocelot内部概念" aria-hidden="true">#</a> Ocelot内部概念</h4><h5 id="上游" tabindex="-1"><a class="header-anchor" href="#上游" aria-hidden="true">#</a> 上游</h5><p><code>Ocelot</code>为上游：<code>Upstream</code></p><h5 id="下游" tabindex="-1"><a class="header-anchor" href="#下游" aria-hidden="true">#</a> 下游</h5><p><code>Ocelot</code> 下面映射的服务为下游：<code>Downstream</code></p><p>形象例子</p><h5 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h5><p>1、路由<br> 1.1、接受客户端请求<br> 1.2、将客户端请求转转为下游地址<br> 1.3、调用下游服务，并返回结果<br> 1.4、将下服务返回的结果返回到前端</p><p>2、认证<br> 3、授权<br> 4、负载均衡<br> 5、链路监控<br> 6、限流<br> 7、熔断降级<br> 8、请求聚合<br> 9、Service Fabric<br> 等其他功能</p><p><code>Ocelot</code>文档地址</p><p>英文文档：<code>https://ocelot.readthedocs.io/en/latest/introduction/gettingstarted.html</code></p><p><code>Ocelot</code>如何使用</p><p>条件</p><p>1、<code>aspnetcore7</code></p><p>2、<code>Ocelot</code></p><p>3、团队微服务</p><p>4、<code>ocelot.json</code>文件</p><p>步骤</p><p>1、创建一个空的<code>asp.netcore7</code>项目</p><p>2、通过nuget安装<code>Ocelot</code></p><p>3、创建<code>Ocelot</code>配置文件<code>ocelot.json</code></p><p>要特别注意一下BaseUrl是我们外部暴露的Url，比如我们的Ocelot运行在http://123.111.1.1的一个地址上，但是前面有一个 nginx绑定了域名http://api.jessetalk.cn，那这里我们的BaseUrl就是 http://api.jessetalk.cn。</p><p>4、加载<code>ocelot.json</code>配置文件</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {
                    webBuilder.UseStartup&lt;Startup&gt;();
                    webBuilder.ConfigureAppConfiguration((hostingContext, config) =&gt;
                    {
                        // 1、加载ocelot配置文件
                        config.AddJsonFile(&quot;ocelot.aggregate.json&quot;);
                    });
                });	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、配置<code>Ocelot</code>依赖注入并加载配置文件</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public void ConfigureServices(IServiceCollection services)
{
	services.AddOcelot()
}	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、配置<code>Ocelot</code>中间件</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
if (env.IsDevelopment())
{
app.UseDeveloperExceptionPage();
}
app.UseOcelot().Wait();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Ocelot</code>如何使用路由</p><p>一个路由完整配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   	 <span class="token string">&quot;Get&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AddHeadersToRequest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AddClaimsToRequest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RouteClaimsRequirement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AddQueriesToRequest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RequestIdKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;FileCacheOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;TtlSeconds&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
       <span class="token property">&quot;Region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ReRouteIsCaseSensitive&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ServiceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">51876</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;QoSOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ExceptionsAllowedBeforeBreaking&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;DurationOfBreak&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;TimeoutValue&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LoadBalancer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RateLimitOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ClientWhitelist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;EnableRateLimiting&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Period&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;PeriodTimespan&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Limit&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AuthenticationOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;AuthenticationProviderKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AllowedScopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HttpHandlerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">&quot;AllowAutoRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;UseCookieContainer&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;UseTracing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UseServiceDiscovery&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Downstream</code>是下游服务配置<br><code>UpStream</code>是上游服务配置<br><code>Aggregates</code> 服务聚合配置<br><code>ServiceName</code>, <code>LoadBalancer</code>, <code>UseServiceDiscovery</code> 配置服务发现<br><code>AuthenticationOptions</code> 配置服务认证<br><code>RouteClaimsRequirement</code> 配置<code>Claims</code>鉴权<br><code>RateLimitOptions</code>为限流配置<br><code>FileCacheOptions</code> 缓存配置<br><code>QosOptions</code> 服务质量与熔断<br><code>DownstreamHeaderTransform</code>头信息转发<br> 路由基本使用</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
   <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/Teams&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   <span class="token punctuation">{</span>
     <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5001</span><span class="token punctuation">,</span>
   <span class="token punctuation">}</span>
   <span class="token punctuation">]</span><span class="token punctuation">,</span>
   <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/AggregateService&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Get&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>DownstreamPathTemplate</code>：下游路径模板<br><code>DownstreamScheme</code>：下游服务<code>http schema</code><br><code>DownstreamHostAndPorts</code>：下游服务的地址，如果使用<code>LoadBalancer</code>的话这里可以填多项<br><code>UpstreamPathTemplate</code>: 上游也就是用户输入的请求Url模板<br><code>UpstreamHttpMethod</code>: 上游请求http方法，可使用数组<br> 路由负载均衡</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
 <span class="token punctuation">{</span>
    <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/Teams&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5005</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5003</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LeastConnection&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/AggregateService&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Put&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Delete&quot;</span> <span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">]</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>LoadBalancer</code>将决定负载均衡的算法</p><p><code>LeastConnection</code> – 最小活跃数算法<br><code>RoundRobin</code> – 轮询算法<br><code>NoLoadBalance</code> – 总是发往第一个请求或者是服务发现<br> 路由<code>Consul</code>负载均衡<br> 条件：</p><p>1、<code>Ocelot.Provider.Consul</code></p><p>2、<code>Consul</code></p><p>3、<code>Ocelot</code></p><p>步骤</p><p>1、通过<code>nuget</code>下载<code>Ocelot.Provider.Consul</code></p><p>2、添加<code>consul</code>依赖注入</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public void ConfigureServices(IServiceCollection services)
        {
            // 1、添加网关Ocelot到ioc容器
            services.AddOcelot().AddConsul();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、路由<code>consul</code>配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
        <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/teams&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/AggregateService&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Get&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ServiceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AggregateService&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LeastConnection&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个路由配置(多项目)<br> 条件</p><p>1、<code>TeamService</code>,<code>MemberService</code></p><p>2、<code>ocelot.team.json，ocelot.member.json</code></p><p>步骤</p><p>1、创建<code>ocelot.team.json</code>，<code>ocelot.member.json</code>文件</p><p>2、配置动态加载<code>ocelot.json</code>配置文件</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>webBuilder.ConfigureAppConfiguration((hostingContext, config) =&gt;
                    {
                        config
                            // .SetBasePath(hostingContext.HostingEnvironment.ContentRootPath)
                            // .AddJsonFile(&quot;appsettings.json&quot;, true, true)
                            // .AddJsonFile($&quot;appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json&quot;, true, true)
                            .AddOcelot(hostingContext.HostingEnvironment);
                        // .AddEnvironmentVariables();
                    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会自动的加载配置文件，然后进行合并，主要用于大项目配置</p><p>3、<code>ocelot</code>依赖注入配置</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public void ConfigureServices(IServiceCollection services)
        {
            // 1、添加网关Ocelot到ioc容器
            services.AddOcelot()；
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由聚合请求</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
    <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/laura&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Get&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">51881</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Laura&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/tom&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Get&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span>
          <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">51882</span>
       <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Aggregates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        <span class="token property">&quot;ReRouteKeys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Laura&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们请求/的时候，会将<code>/tom</code>和<code>/laura</code>两个结果合并到一个<code>response</code>返回</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token string-property property">&quot;Tom&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;Age&quot;</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token string-property property">&quot;Laura&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">&quot;Age&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是：</p><p>聚合服务目前只支持返回json<br> 目前只支持Get方式请求下游服务<br> 任何下游的<code>response header</code>并会被丢弃 如果下游服务返回<code>404</code>，聚合服务只是这个<code>key</code>的<code>value</code>为空，它不会返回<code>404</code><br> 有一些其它的功能会在将来实现</p><p>下游服务很慢的处理<br> 做一些像 <code>GraphQL</code>的处理对下游服务返回结果进行处理<br><code>404</code>的处理<br> 路由服务质量与熔断<br> 条件</p><p>1、<code>Ocelot.Provider.Polly</code></p><p>步骤</p><p>1、在<code>ocelot</code>上添加熔断</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public void ConfigureServices(IServiceCollection services)
        {
            // 1、添加网关Ocelot到ioc容器
            services.AddOcelot(new ConfigurationBuilder().AddJsonFile(&quot;ocelot.aggregate.json&quot;).Build())
                .AddConsul()
                .AddPolly();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、添加熔断配置</p><p>熔断的意思是停止将请求转发到下游服务。当下游服务已经出现故障的时候再请求也是功而返，并且增加下游服务器和API网关的负担。这个功能是用的Pollly来实现的，我们只需要为路由做一些简单配置即可</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token string-property property">&quot;QoSOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;ExceptionsAllowedBeforeBreaking&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;DurationOfBreak&quot;</span><span class="token operator">:</span><span class="token number">500</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;TimeoutValue&quot;</span><span class="token operator">:</span><span class="token number">5000</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ExceptionsAllowedBeforeBreaking</code> 允许多少个异常请求<br><code>DurationOfBreak</code> 熔断的时间，单位为毫秒<br><code>TimeoutValue</code> 如果下游请求的处理时间超过多少则自动将请求设置为超时<br> 路由限流</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token property">&quot;RateLimitOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ClientWhitelist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;EnableRateLimiting&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Period&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5m&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PeriodTimespan&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Limit&quot;</span><span class="token operator">:</span> <span class="token number">1</span>

<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ClientWihteList</code> 白名单</p><p><code>EnableRateLimiting</code> 是否启用限流</p><p><code>Period</code> 统计时间段：<code>1s</code>, <code>5m</code>, <code>1h</code>, <code>1d</code> 多长时间内只能请求多少次</p><p><code>PeroidTimeSpan</code> 多少秒之后客户端可以重试</p><p><code>Limit</code> 在统计时间段内允许的最大请求数量</p><p>在 <code>GlobalConfiguration</code>下我们还可以进行以下配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;RateLimitOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;DisableRateLimitHeaders&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;QuotaExceededMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Customize Tips!&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;HttpStatusCode&quot;</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ClientIdHeader&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Http</code>头 <code>X-Rate-Limit</code> 和 <code>Retry-After</code> 是否禁用<br><code>QuotaExceedMessage</code> 当请求过载被截断时返回的消息<br><code>HttpStatusCode</code> 当请求过载被截断时返回的<code>http status</code><br><code>ClientIdHeader</code> 用来识别客户端的请求头，默认是 <code>ClientId</code><br> 路由缓存<br><code>Ocelot</code>可以对下游请求结果进行缓存 ，目前缓存的功能还不是很强大。它主要是依赖于<code>CacheManager</code> 来实现的，我们只需要在路由下添加以下配置即可</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token property">&quot;FileCacheOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;TtlSeconds&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token property">&quot;Region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;somename&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Region</code>是对缓存进行的一个分区，我们可以调用<code>Ocelot</code>的 <code>administration API</code>来移除某个区下面的缓存 。</p><p>路由认证(Identity Server4)</p><p>步骤</p><p><code>Identity Server Bearer Tokens</code></p><p>添加<code>Identity Server</code>的认证也是一样</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public void ConfigureServices(IServiceCollection services)
{
    var authenticationProviderKey = &quot;TestKey&quot;;
    var options = o =&gt;
        {
            o.Authority = &quot;https://whereyouridentityserverlives.com&quot;;
            o.ApiName = &quot;api&quot;;
            o.SupportedTokens = SupportedTokens.Both;
            o.ApiSecret = &quot;secret&quot;;
        };

    services.AddAuthentication()
        .AddIdentityServerAuthentication(authenticationProviderKey, options);

    services.AddOcelot();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Allowed Scopes</code></p><p>这里的<code>Scopes</code>将从当前 <code>token</code> 中的 <code>claims</code>中来获取，我们的鉴权服务将依靠于它来实现 。当前路由的下游API需要某个权限时，我们需要在这里声明 。和<code>oAuth2</code>中的 <code>scope</code>意义一致。</p><p>路由鉴权<br> 我们通过认证中的<code>AllowedScopes</code> 拿到<code>claims</code>之后，如果要进行权限的鉴别需要添加以下配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;RouteClaimsRequirement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;UserType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;registered&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前请求上下文的<code>token</code>中所带的<code>claims</code>如果没有 <code>name=”UserType”</code> 并且 <code>value=”registered”</code> 的话将无法访问下游服务。</p><p>路由请求头转化<br> 请求头转发分两种：转化之后传给下游和从下游接收转化之后传给客户端。在<code>Ocelot</code>的配置里面叫做<code>Pre Downstream Request</code>和<code>Post Downstream Request</code>。目前的转化只支持查找和替换。我们用到的配置主要是 <code>UpstreamHeaderTransform 和 DownstreamHeaderTransform</code></p><p>Pre Downstream Request</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.bbc.co.uk/, http://ocelot.com/&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如我们将客户端传过来的Header中的 Test 值改为 http://ocelot.com/之后再传给下游</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token property">&quot;UpstreamHeaderTransform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.bbc.co.uk/, http://ocelot.com/&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Post Downstream Request</p><p>而我们同样可以将下游Header中的Test再转为 http://www.bbc.co.uk/之后再转给客户端。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;DownstreamHeaderTransform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.bbc.co.uk/, http://ocelot.com/&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token punctuation">{</span>
 <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Aggregates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token property">&quot;GlobalConfiguration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;RequestIdKey&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
     <span class="token property">&quot;ServiceDiscoveryProvider&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.80.100&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Consul Service IP</span>
       <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">8500</span> <span class="token comment">// Consul Service Port\`</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>\`
      <span class="token property">&quot;RateLimitOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;DisableRateLimitHeaders&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Http头  X-Rate-Limit 和 Retry-After 是否禁用\`</span>
        <span class="token property">&quot;QuotaExceededMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;你的访问过于频繁请稍后在试&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 当请求过载被截断时返回的消息\`</span>
        <span class="token property">&quot;HttpStatusCode&quot;</span><span class="token operator">:</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token comment">// 当请求过载被截断时返回的http status\`</span>
        <span class="token property">&quot;ClientIdHeader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_id&quot;</span> <span class="token comment">// 用来识别客户端的请求头，默认是 ClientId\`</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;QoSOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ExceptionsAllowedBeforeBreaking&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;DurationOfBreak&quot;</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;TimeoutValue&quot;</span><span class="token operator">:</span> <span class="token number">5000</span>\`
      <span class="token punctuation">}</span><span class="token punctuation">,</span>\`
      <span class="token property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LeastConnection&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Key&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Expiry&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HttpHandlerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;AllowAutoRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
     <span class="token property">&quot;UseCookieContainer&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
     <span class="token property">&quot;UseTracing&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>\`
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>万能模板</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
      <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/{url}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5002</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/{url}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Get&quot;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态路由</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
 <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token property">&quot;Aggregates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token property">&quot;GlobalConfiguration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;ServiceDiscoveryProvider&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">8500</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Consul&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Token&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
     <span class="token property">&quot;ConfigurationKey&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LeastConnection&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Key&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Expiry&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微服务外部网关" tabindex="-1"><a class="header-anchor" href="#微服务外部网关" aria-hidden="true">#</a> 微服务外部网关</h2><p>概念——为什么——如何使用oclet—–内部概念(上游和下游)、路由—–ocelot内部运行原理—–如何做步骤—–ocelot配置文件介绍—-路由基本使用—-路由负载均衡——路由consul支持—–路由多个服务操作—–路由多个服务聚合—-路由限流—-路由熔断—-路由缓存—-路由身份验证。</p><h3 id="什么是api外部网关" tabindex="-1"><a class="header-anchor" href="#什么是api外部网关" aria-hidden="true">#</a> 什么是API外部网关</h3><p>客户端和微服务端之间进行的网关就是API外部网关<br> 如图所示：</p><p><img src="`+b+'" alt="Alt text"></p><p>客户端把请求给API内部网关，然后再把请求给微服务</p><h4 id="电商微服务中为什么使用api外部网关" tabindex="-1"><a class="header-anchor" href="#电商微服务中为什么使用api外部网关" aria-hidden="true">#</a> 电商微服务中为什么使用API外部网关</h4><h4 id="电商微服务项目" tabindex="-1"><a class="header-anchor" href="#电商微服务项目" aria-hidden="true">#</a> 电商微服务项目</h4><p>如图所示：</p><p><img src="'+q+'" alt="Alt text"></p><p>在图中的电商微服务系统中，如果我们想实现查询订单。具体实现流程如下：</p><p>客户端—-&gt;发起查询订单请求—-&gt;订单聚合微服务—-&gt;API内部网关—–&gt;consul中获取订单微服务地址—-&gt;查询订单微服务—-&gt;查询订单数据库。</p><p>如果订单详情聚合微服务，不管使用什么语言开发，处理客户端并发量有限，例如：订单详情微服务只能处理600个查询请求，意味着客户端只能发起600查询订单的请求达到订单详情微服务。</p><p>这个时候，如果客户端发起了1200查询订单的请求，就会导致订单详情微服务由于并发压力过大，导致订单详情微服务出现宕机的问题。如何解决订单详情微服务不宕机？所以：需要使用订单详情聚合微服务集群解决。</p><p>电商微服务项目集群 如图所示：</p><p><img src="'+p+'" alt="Alt text"></p><p>图中展示了两个订单详情聚合微服务实例。一个实例能够处理600个查询订单的请求，2个实例加起来就是1200。理论上可以处理1200查询订单并发请求。但是，1200个请求如何将请求均分到实例1和实例2呢？</p><p>所以：需要使用API网关解决。因此，就在客户端和订单详情聚合微服务之间增加了API外部网关</p><p>电商微服务中如何落地API外部网关</p><p>API外部网关选项 根据网关的功能特征。</p><p>如图所示：</p><p><img src="'+o+'" alt="Alt text"></p><p>kong是基于ngnix+lua的，它借助于Nginx的事件驱动模型和非阻塞IO，性能方面是非常棒的，但是从公司的角度比较难于找到能去维护这种架构产品的人。 需求评估当前公司是否有这个能力去维护这个产品。</p><p>SpringCloud-Zuul 社区活跃,基于 SrpingCloud 完整生态，但因为架构的原因（zull基于 Servlet 框架构建，采用的是阻塞和多线程方式，即一个线程处理一次连接请求，当出现问题时，如后端延迟或设备错误重试，活跃的连接和线程数量会增加，这会加大服务器负载并可能使集群无法承受）在高并发的情况下性能不高，同时需要去基于研究整合开源的适配zuul的监控和管理系统。较新的Spring cloud Gateway和zuul2倒是不错</p><p>Tyk用Golang编写，并发性能较好，但一切均导向收费版本,免费版本第一次申请有一年的使用授权.没找到明确表示是否可以免费继续使用的说明.</p><p>扩展Tyk需要会Go语言，扩展Kong需要会写lua脚本，使用 zuul 还得会Java 目前以上都不是.net语言开发的网关，如果想使用.net语言开发的网关，就需要使用ocelot，这个网关使用是非常简单的。</p><p>选择ocelot。</p><h3 id="电商微服务中如何落地ocelot" tabindex="-1"><a class="header-anchor" href="#电商微服务中如何落地ocelot" aria-hidden="true">#</a> 电商微服务中如何落地Ocelot</h3><h4 id="电商微服务落地ocelot前提" tabindex="-1"><a class="header-anchor" href="#电商微服务落地ocelot前提" aria-hidden="true">#</a> 电商微服务落地Ocelot前提</h4><p>前提条件：</p><p>1、电商微服务系统</p><p>2、<code>PublicWebSiteGateway.Host</code></p><p>3、<code>Ocelot</code></p><p>步骤</p><p>1、电商微服务系统准备</p><p>​ 如图所示： <img src="'+p+'" alt="Alt text"></p><p>2、<code>PublicWebSiteGateway.Hos</code>t准备</p><p>​ 2.1、通过<code>vs2022</code> 在<code>gateways</code>文件夹中创建<code>PublicWebSiteGateway.Host</code>项目</p><p>​ 如图所示：</p><p><img src="'+g+'" alt="Alt text"></p><p>​ 2.2、然后在PublicWebSiteGateway.Host项目引入，Volo.Abp.Autofac，Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy包</p><p>​ 如图所示：</p><p><img src="'+y+'" alt="Alt text"></p><p>2.3、然后在PublicWebSiteGateway.Host项目中创建PublicWebSiteGatewayHostModule类</p><p>​ 如图所示：</p><p><img src="'+h+`" alt="Alt text"></p><p>​ 2.3.1、然后在<code>PublicWebSiteGatewayHostModule</code>类添加代码如下</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.DependencyInjection;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using StackExchange.Redis;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Swagger;
using Volo.Abp;
using Volo.Abp.AspNetCore.MultiTenancy;
using Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;
using Volo.Blogging;

namespace PublicWebSiteGateway.Host
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AbpAspNetCoreMvcUiMultiTenancyModule)
        )]
    public class PublicWebSiteGatewayHostModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();

            context.Services.AddSwaggerGen(options =&gt;
            {
                options.SwaggerDoc(&quot;v1&quot;, new OpenApiInfo { Title = &quot;PublicWebSite Gateway API&quot;, Version = &quot;v1&quot; });
                options.DocInclusionPredicate((docName, description) =&gt; true);
                options.CustomSchemaIds(type =&gt; type.FullName);
            });

        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();

            app.UseCorrelationId();
            app.UseStaticFiles();
            app.UseRouting();
           // app.UseAuthentication();
            app.UseAbpClaimsMap();
            app.UseSwagger();
            app.UseSwaggerUI(options =&gt;
            {
                options.SwaggerEndpoint(&quot;/swagger/v1/swagger.json&quot;, &quot;PublicWebSite Gateway API&quot;);
            });

            app.MapWhen(
                ctx =&gt; ctx.Request.Path.ToString().StartsWith(&quot;/api/abp/&quot;) ||
                       ctx.Request.Path.ToString().StartsWith(&quot;/Abp/&quot;),
                app2 =&gt;
                {
                    app2.UseRouting();
                    app2.UseConfiguredEndpoints();
                }
            );
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3.2、然后在<code>Program</code>类中添加代码如下</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using Serilog.Events;
using Serilog;
using PublicWebSiteGateway.Host;

Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .MinimumLevel.Override(&quot;Microsoft&quot;, LogEventLevel.Information)
    .MinimumLevel.Override(&quot;Microsoft.EntityFrameworkCore&quot;, LogEventLevel.Warning)
    .Enrich.WithProperty(&quot;Application&quot;, &quot;InternalGateway&quot;)
    .Enrich.FromLogContext()
    // .WriteTo.File(&quot;Logs/logs.txt&quot;)
    .WriteTo.Console()
    /*.WriteTo.Elasticsearch(
        new ElasticsearchSinkOptions(new Uri(configuration[&quot;ElasticSearch:Url&quot;]))
        {
            AutoRegisterTemplate = true,
            AutoRegisterTemplateVersion = AutoRegisterTemplateVersion.ESv6,
            IndexFormat = &quot;msdemo-log-{0:yyyy.MM}&quot;
        })*/
    .CreateLogger();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Host.AddAppSettingsSecretsJson()
               .ConfigureAppConfiguration(build =&gt; {
                   // 1、加载nacos配置
                   var configuration = build.Build();
                   build.AddNacosV2Configuration(configuration.GetSection(&quot;Nacos&quot;));
               })
               .UseAutofac();

builder.Services.AddApplication&lt;PublicWebSiteGatewayHostModule&gt;();

var app = builder.Build();
app.InitializeApplication();
await app.RunAsync();

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3、最后在<code>PublicWebSiteGateway.Host</code>项目中通过<code>nuget</code>引入<code>Ocelot</code></p><p>​ 如图所示：</p><p><img src="`+A+`" alt="Alt text"></p><p>​ 2.3.1、<code>Ocelot</code>文档地址</p><p>​ 英文文档：https://ocelot.readthedocs.io/en/latest/introduction/gettingstarted.html</p><p>查询订单业务场景落地 条件</p><p>1、<code>PublicWebSiteGateway.Host</code>网关项目</p><p>2、<code>LKN.OrderDetailsServices</code>订单详情微服务项目</p><p>3、<code>InternalGateway.Host</code>内部网关项目</p><p>4、<code>LKN.Order.HttpApi.Host</code>订单微服务项目</p><p>步骤</p><p>1、先在<code>PublicWebSiteGateway.Host</code>项目中<code>appsettings.json</code>配置文件中，添加配置如下</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/OrderDetailsServices/{everything}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">44344</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/OrderDetailsServices/{everything}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Put&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Delete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Post&quot;</span> <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;GlobalConfiguration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:44397&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Routes</code>：是路由</p><p>作用：接受客户端请求，转发到微服务</p><p><code>UpstreamPathTemplate</code>：上游路径，客户端访问的路径</p><p><code>UpstreamHttpMethod</code>：上游方法，客户端访问的方法</p><p><code>DownstreamPathTemplate</code>：下游路由，指订单微服务uri地址</p><p><code>DownstreamScheme</code>：下游服务器协议，下游微服务协议https 或 http</p><p><code>DownstreamHostAndPorts</code>：ip和端口</p><p><code>GlobalConfiguration</code>：全局配置</p><p>2、然后在<code>PublicWebSiteGateway.Host</code>项目中<code>PublicWebSiteGatewayHostModule</code>类中，添加如下设置</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.Extensions.DependencyInjection;
using Ocelot.DependencyInjection;
using Ocelot.Middleware;
using StackExchange.Redis;
using Microsoft.OpenApi.Models;
using Swashbuckle.AspNetCore.Swagger;
using Volo.Abp;
using Volo.Abp.AspNetCore.MultiTenancy;
using Volo.Abp.AspNetCore.Mvc.UI.MultiTenancy;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Security.Claims;
using Volo.Blogging;

namespace PublicWebSiteGateway.Host
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(AbpAspNetCoreMvcModule)
        )]
    public class PublicWebSiteGatewayHostModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var configuration = context.Services.GetConfiguration();

            context.Services.AddSwaggerGen(options =&gt;
            {
                options.SwaggerDoc(&quot;v1&quot;, new OpenApiInfo { Title = &quot;PublicWebSite Gateway API&quot;, Version = &quot;v1&quot; });
                options.DocInclusionPredicate((docName, description) =&gt; true);
                options.CustomSchemaIds(type =&gt; type.FullName);
            });

            context.Services.AddOcelot(context.Services.GetConfiguration());

        }

        public override void OnApplicationInitialization(ApplicationInitializationContext context)
        {
            var app = context.GetApplicationBuilder();

            app.UseCorrelationId();
            app.UseStaticFiles();
            app.UseRouting();
           // app.UseAuthentication();
            app.UseAbpClaimsMap();
            app.UseSwagger();
            app.UseSwaggerUI(options =&gt;
            {
                options.SwaggerEndpoint(&quot;/swagger/v1/swagger.json&quot;, &quot;PublicWebSite Gateway API&quot;);
            });

            app.MapWhen(
                ctx =&gt; ctx.Request.Path.ToString().StartsWith(&quot;/api/abp/&quot;) ||
                       ctx.Request.Path.ToString().StartsWith(&quot;/Abp/&quot;),
                app2 =&gt;
                {
                    app2.UseRouting();
                    app2.UseConfiguredEndpoints();
                }
            );

            app.UseOcelot().Wait();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后使用<code>cmd</code>启动<code>PublicWebSiteGateway.Host</code>项目</p><p>查询订单集群业务场景落地 条件</p><p>1、<code>PublicWebSiteGateway.Host</code>网关项目</p><p>2、<code>LKN.OrderDetailsServices</code>订单详情微服务项目</p><p>步骤</p><p>1、<code>LKN.OrderDetailsServices</code>项目准备</p><p>2、<code>PublicWebSiteGateway.Host</code>网关准备</p><p>​ 2.1、先在<code>PublicWebSiteGateway.Host</code>项目中<code>appsettings.json</code>配置文件中，添加配置如下</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/OrderDetailsServices/{everything}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Put&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Delete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Post&quot;</span> <span class="token punctuation">]</span>
      <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/OrderDetailsServices/{everything}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">44344</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">44345</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RoundRobin&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;GlobalConfiguration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:44397&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询订单集群服务发现业务场景落地 条件</p><p>1、<code>PublicWebSiteGateway.Host</code>网关项目</p><p>2、<code>consul</code></p><p>步骤</p><p>1、<code>consul</code>准备</p><p>2、<code>LKN.OrderDetailsServices</code>订单详情微服务项目</p><p>3、<code>PublicWebSiteGateway.Host</code>项目准备</p><p>​ 3.1、先在<code>PublicWebSiteGateway.Host</code>项目中<code>appsettings.json</code>配置文件中，添加配置如下</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/OrderDetailsServices/{everything}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Put&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Delete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Post&quot;</span> <span class="token punctuation">]</span>
      <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/OrderDetailsServices/{everything}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span>
      <span class="token property">&quot;ServiceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderServices&quot;</span>  
      <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RoundRobin&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;GlobalConfiguration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://localhost:44397&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询商品业务场景落地 条件</p><p>1、<code>PublicWebSiteGateway.Host</code>网关项目</p><p>步骤</p><p>1、</p><p><code>Ocelot</code>如何使用路由 一个路由完整配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   	 <span class="token string">&quot;Get&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AddHeadersToRequest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AddClaimsToRequest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RouteClaimsRequirement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AddQueriesToRequest&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RequestIdKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;FileCacheOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;TtlSeconds&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ReRouteIsCaseSensitive&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ServiceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">51876</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;QoSOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ExceptionsAllowedBeforeBreaking&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DurationOfBreak&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TimeoutValue&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LoadBalancer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RateLimitOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ClientWhitelist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;EnableRateLimiting&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Period&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PeriodTimespan&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Limit&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AuthenticationOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;AuthenticationProviderKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AllowedScopes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HttpHandlerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;AllowAutoRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UseCookieContainer&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UseTracing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UseServiceDiscovery&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Downstream</code>是下游服务配置 <code>UpStream</code>是上游服务配置 <code>Aggregates</code> 服务聚合配置 <code>ServiceName</code>, <code>LoadBalancer</code>, <code>UseServiceDiscovery</code> 配置服务发现 <code>AuthenticationOptions</code> 配置服务认证 <code>RouteClaimsRequirement</code> 配置Claims鉴权 <code>RateLimitOptions</code>为限流配置 <code>FileCacheOptions</code> 缓存配置 <code>QosOptions</code> 服务质量与熔断 <code>DownstreamHeaderTransform</code>头信息转发 路由基本使用</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/Teams&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token punctuation">{</span>
<span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5001</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/AggregateService&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Get&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>DownstreamPathTemplate</code>：下游路径模板 <code>DownstreamScheme</code>：下游服务http schema <code>DownstreamHostAndPorts</code>：下游服务的地址，如果使用LoadBalancer的话这里可以填多项 <code>UpstreamPathTemplate</code>: 上游也就是用户输入的请求Url模板 <code>UpstreamHttpMethod</code>: 上游请求http方法，可使用数组 路由负载均衡</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/Teams&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5005</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5003</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LeastConnection&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/AggregateService&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Put&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Delete&quot;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>LoadBalancer</code>将决定负载均衡的算法</p><p><code>LeastConnection </code>– 最小活跃数算法 <code>RoundRobin</code> – 轮询算法 <code>NoLoadBalance</code> – 总是发往第一个请求或者是服务发现 路由<code>Consul</code>负载均衡 条件：</p><p>1、<code>Ocelot.Provider.Consul</code></p><p>2、<code>Consul</code></p><p>3、<code>Ocelot</code></p><p>步骤</p><p>1、通过<code>nuget</code>下载<code>Ocelot.Provider.Consul</code></p><p>2、添加<code>consul</code>依赖注入</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public void ConfigureServices(IServiceCollection services)
        {
            // 1、添加网关Ocelot到ioc容器
            services.AddOcelot().AddConsul();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、路由<code>consul</code>配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
	<span class="token punctuation">{</span>
        <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/api/teams&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/AggregateService&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Get&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;ServiceName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AggregateService&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LeastConnection&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多个路由配置(多项目) 条件</p><p>1、<code>TeamService</code>,<code>MemberService</code></p><p>2、<code>ocelot.team.json</code>，<code>ocelot.member.json</code></p><p>步骤</p><p>1、创建<code>ocelot.team.json</code>，<code>ocelot.member.json</code>文件</p><p>2、配置动态加载<code>ocelot.json</code>配置文件</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>webBuilder.ConfigureAppConfiguration((hostingContext, config) =&gt;
                    {
                        config
                            // .SetBasePath(hostingContext.HostingEnvironment.ContentRootPath)
                            // .AddJsonFile(&quot;appsettings.json&quot;, true, true)
                            // .AddJsonFile($&quot;appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json&quot;, true, true)
                            .AddOcelot(hostingContext.HostingEnvironment);
                        // .AddEnvironmentVariables();
                    });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>会自动的加载配置文件，然后进行合并，主要用于大项目配置</p><p>3、ocelot依赖注入配置</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public void ConfigureServices(IServiceCollection services)
        {
            // 1、添加网关Ocelot到ioc容器
            services.AddOcelot()；
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由聚合请求</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
    <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/laura&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
   		 <span class="token string">&quot;Get&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">51881</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Laura&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
    <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/tom&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;Get&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">51882</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tom&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Aggregates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        <span class="token property">&quot;ReRouteKeys&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Tom&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Laura&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们请求/的时候，会将<code>/tom</code>和<code>/laura</code>两个结果合并到一个<code>response</code>返回</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;Tom&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;Age&quot;</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">&quot;Laura&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;Age&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是：</p><p>聚合服务目前只支持返回<code>json</code> 目前只支持Get方式请求下游服务 任何下游的<code>response header</code>并会被丢弃 如果下游服务返回404，聚合服务只是这个key的value为空，它不会返回404 有一些其它的功能会在将来实现</p><p>下游服务很慢的处理 做一些像 <code>GraphQL</code>的处理对下游服务返回结果进行处理 404的处理 路由服务质量与熔断 条件</p><p>1、<code>Ocelot.Provider.Polly</code></p><p>步骤</p><p>1、在<code>ocelot</code>上添加熔断</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>public void ConfigureServices(IServiceCollection services)
        {
            // 1、添加网关Ocelot到ioc容器
            services.AddOcelot(new ConfigurationBuilder().AddJsonFile(&quot;ocelot.aggregate.json&quot;).Build())
                .AddConsul()
                .AddPolly();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、添加熔断配置</p><p>熔断的意思是停止将请求转发到下游服务。当下游服务已经出现故障的时候再请求也是功而返，并且增加下游服务器和API网关的负担。这个功能是用的Pollly来实现的，我们只需要为路由做一些简单配置即可</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token property">&quot;QoSOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ExceptionsAllowedBeforeBreaking&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DurationOfBreak&quot;</span><span class="token operator">:</span><span class="token number">500</span><span class="token punctuation">,</span>
    <span class="token property">&quot;TimeoutValue&quot;</span><span class="token operator">:</span><span class="token number">5000</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ExceptionsAllowedBeforeBreaking</code> 允许多少个异常请求 <code>DurationOfBreak</code> 熔断的时间，单位为毫秒 <code>TimeoutValue</code> 如果下游请求的处理时间超过多少则自动将请求设置为超时 路由限流</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token property">&quot;RateLimitOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;ClientWhitelist&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;EnableRateLimiting&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Period&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5m&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PeriodTimespan&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Limit&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ClientWihteList</code> 白名单</p><p><code>EnableRateLimiting</code> 是否启用限流</p><p><code>Period</code> 统计时间段：<code>1s</code>, <code>5m</code>, <code>1h</code>, <code>1d</code> 多长时间内只能请求多少次</p><p><code>PeroidTimeSpan</code> 多少秒之后客户端可以重试</p><p>Limit 在统计时间段内允许的最大请求数量</p><p>在 <code>GlobalConfiguration</code>下我们还可以进行以下配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;RateLimitOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;DisableRateLimitHeaders&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;QuotaExceededMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Customize Tips!&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;HttpStatusCode&quot;</span><span class="token operator">:</span> <span class="token number">999</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ClientIdHeader&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Test&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Http</code>头 <code>X-Rate-Limit</code> 和 <code>Retry-After</code> 是否禁用 <code>QuotaExceedMessage</code> 当请求过载被截断时返回的消息 <code>HttpStatusCode</code> 当请求过载被截断时返回的http status <code>ClientIdHeader</code> 用来识别客户端的请求头，默认是 ClientId 路由缓存 <code>Ocelot</code>可以对下游请求结果进行缓存 ，目前缓存的功能还不是很强大。它主要是依赖于<code>CacheManager</code> 来实现的，我们只需要在路由下添加以下配置即可</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
<span class="token property">&quot;FileCacheOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;TtlSeconds&quot;</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token property">&quot;Region&quot;</span><span class="token operator">:</span> <span class="token string">&quot;somename&quot;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Region</code>是对缓存进行的一个分区，我们可以调用<code>Ocelot</code>的 <code>administration</code> <code>API</code>来移除某个区下面的缓存 。</p><p>路由认证(<code>Identity Server4</code>) 条件</p><p>1、</p><p>2、</p><p>3、</p><p>步骤</p><p><code>Identity Server Bearer Tokens</code></p><p>添加<code>Identity Server</code>的认证也是一样</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public void ConfigureServices(IServiceCollection services)
{
    var authenticationProviderKey = &quot;TestKey&quot;;
    var options = o =&gt;
        {
            o.Authority = &quot;https://whereyouridentityserverlives.com&quot;;
            o.ApiName = &quot;api&quot;;
            o.SupportedTokens = SupportedTokens.Both;
            o.ApiSecret = &quot;secret&quot;;
        };

    services.AddAuthentication()
        .AddIdentityServerAuthentication(authenticationProviderKey, options);

    services.AddOcelot();
}
Allowed Scopes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的<code>Scopes</code>将从当前 <code>token</code> 中的 <code>claims</code>中来获取，我们的鉴权服务将依靠于它来实现 。当前路由的下游<code>API</code>需要某个权限时，我们需要在这里声明 。和<code>oAuth2</code>中的 <code>scope</code>意义一致。</p><p>路由鉴权 我们通过认证中的<code>AllowedScopes</code> 拿到<code>claims</code>之后，如果要进行权限的鉴别需要添加以下配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;RouteClaimsRequirement&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;UserType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;registered&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前请求上下文的token中所带的claims如果没有 name=”UserType” 并且 value=”registered” 的话将无法访问下游服务。</p><p>路由请求头转化 请求头转发分两种：转化之后传给下游和从下游接收转化之后传给客户端。在Ocelot的配置里面叫做<code>Pre Downstream Request</code>和<code>Post Downstream Request</code>。目前的转化只支持查找和替换。我们用到的配置主要是 <code>UpstreamHeaderTransform</code> 和 <code>DownstreamHeaderTransform</code></p><p><code>Pre Downstream Request</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.bbc.co.uk/, http://ocelot.com/&quot;</span>
比如我们将客户端传过来的Header中的 Test 值改为 http<span class="token operator">:</span><span class="token comment">//ocelot.com/之后再传给下游</span>

 <span class="token property">&quot;UpstreamHeaderTransform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.bbc.co.uk/, http://ocelot.com/&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Post Downstream Request</code></p><p>而我们同样可以将下游Header中的Test再转为 http://www.bbc.co.uk/之后再转给客户端。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;DownstreamHeaderTransform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.bbc.co.uk/, http://ocelot.com/&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局配置</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token property">&quot;Aggregates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;GlobalConfiguration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;RequestIdKey&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ServiceDiscoveryProvider&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192.168.80.100&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Consul Service IP\`</span>
     <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">8500</span> <span class="token comment">// Consul Service Port\`</span>
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;RateLimitOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;DisableRateLimitHeaders&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Http头  X-Rate-Limit 和 Retry-After 是否禁用\`</span>
      <span class="token property">&quot;QuotaExceededMessage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;你的访问过于频繁请稍后在试&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 当请求过载被截断时返回的消息\`</span>
      <span class="token property">&quot;HttpStatusCode&quot;</span><span class="token operator">:</span> <span class="token number">253</span><span class="token punctuation">,</span> <span class="token comment">// 当请求过载被截断时返回的http status\`</span>
      <span class="token property">&quot;ClientIdHeader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;client_id&quot;</span> <span class="token comment">// 用来识别客户端的请求头，默认是 ClientId\`</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;QoSOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;ExceptionsAllowedBeforeBreaking&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DurationOfBreak&quot;</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;TimeoutValue&quot;</span><span class="token operator">:</span> <span class="token number">5000</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;BaseUrl&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LeastConnection&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Key&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
      <span class="token property">&quot;Expiry&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;HttpHandlerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;AllowAutoRedirect&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UseCookieContainer&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UseTracing&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>万能模板</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
     <span class="token property">&quot;DownstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/{url}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;DownstreamHostAndPorts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">5002</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamPathTemplate&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/{url}&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;UpstreamHttpMethod&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;Get&quot;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态路由 c#</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>   <span class="token punctuation">{</span>
 <span class="token property">&quot;Routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token property">&quot;Aggregates&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
 <span class="token property">&quot;GlobalConfiguration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token property">&quot;ServiceDiscoveryProvider&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Port&quot;</span><span class="token operator">:</span> <span class="token number">8500</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Consul&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Token&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
     <span class="token property">&quot;ConfigurationKey&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;LoadBalancerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;Type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LeastConnection&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Key&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
     <span class="token property">&quot;Expiry&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token property">&quot;DownstreamScheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https&quot;</span>
 <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,315);function f(T,x){const a=c("router-link");return l(),u("div",null,[C,n("nav",w,[n("ul",null,[n("li",null,[e(a,{to:"#目录"},{default:t(()=>[s("目录")]),_:1})]),n("li",null,[e(a,{to:"#微服务内部网关"},{default:t(()=>[s("微服务内部网关")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#什么是api内部网关"},{default:t(()=>[s("什么是API内部网关")]),_:1})]),n("li",null,[e(a,{to:"#电商微服务系统中为什么要使用内部网关"},{default:t(()=>[s("电商微服务系统中为什么要使用内部网关")]),_:1})]),n("li",null,[e(a,{to:"#电商微服务系统中如何落地内部网关"},{default:t(()=>[s("电商微服务系统中如何落地内部网关")]),_:1})]),n("li",null,[e(a,{to:"#电商微服务系统中使用ocelot"},{default:t(()=>[s("电商微服务系统中使用Ocelot")]),_:1})])])]),n("li",null,[e(a,{to:"#微服务外部网关"},{default:t(()=>[s("微服务外部网关")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#什么是api外部网关"},{default:t(()=>[s("什么是API外部网关")]),_:1})]),n("li",null,[e(a,{to:"#电商微服务中如何落地ocelot"},{default:t(()=>[s("电商微服务中如何落地Ocelot")]),_:1})])])])])]),P])}const j=i(S,[["render",f],["__file","abpmicroservices0003.html.vue"]]);export{j as default};
