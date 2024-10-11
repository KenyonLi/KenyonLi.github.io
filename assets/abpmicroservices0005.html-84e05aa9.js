import{_ as d,r as t,o as l,c as r,a as n,b as s,w as o,d as e,e as i}from"./app-c1c3c937.js";const p="/images/abpmicroservices/micro005/abpmicroservices0005_0000image.png",u="/images/abpmicroservices/micro005/abpmicroservices0005_0001image.png",v="/images/abpmicroservices/micro005/abpmicroservices0005_0002image.png",m={},b=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),e(" 目录")],-1),g={class:"table-of-contents"},h=i('<h2 id="微服务注配置中心-nacos" tabindex="-1"><a class="header-anchor" href="#微服务注配置中心-nacos" aria-hidden="true">#</a> 微服务注配置中心-Nacos</h2><h3 id="什么是配置中心" tabindex="-1"><a class="header-anchor" href="#什么是配置中心" aria-hidden="true">#</a> 什么是配置中心</h3><p>配置是用来动态修改程序执行状态的一种机制</p><h3 id="为什么要使用配置中心" tabindex="-1"><a class="header-anchor" href="#为什么要使用配置中心" aria-hidden="true">#</a> 为什么要使用配置中心</h3><p>安全性：配置跟随源代码保存在代码库中，容易造成配置泄漏。<br> 时效性：修改配置，需要重启服务才能生效。<br> 局限性：无法支持动态调整：例如日志开关、功能开关。<br> 因此，分布配置中心应运而生！</p><h3 id="配置中心类型方式" tabindex="-1"><a class="header-anchor" href="#配置中心类型方式" aria-hidden="true">#</a> 配置中心类型方式</h3><p><code>Apollo</code>,<code>java</code>开发 ——运维成本比高<br><code>Apollo</code>分为<code>Mysql</code>,<code>config</code> <code>Server</code>,<code>Admin Seriver</code>,<code>Portal</code>四个模块，<code>MySql</code>存储<code>Apollo</code>元数据和用户配置数据：<code>Config Server</code>提供配置的读取、推送等功能，客户端请求都是落到<code>Config Server</code>上；<code>Admin Service </code>提供配置的修改、发布等功能、<code>Portal</code>操作的服务就是<code>Admin Service</code>；<code>Portal</code>提供给用户配置管理界面；功能强大，社区活跃，但较为复杂，部署组件较多，运维成本比高。</p><p><code>Nacos</code>,<code>go</code>开发<br> 依赖：不依赖其他组件<br> 应用内/外：属于外部应用，侵入性小<br> ACP原则：遵循cp原则（一致性+分离容忍）服务注册稍慢，由于其一致性导致了在leader挂掉时重新选举真个Nacos不可用。<br> 版本迭代：目前仍然进行版本迭代。<br> 集成支持：支持<code>SpingCloud K8s</code>集成<br> 访问协议：Http/Dns<br> 雪崩保护：不支持雪崩保护<br> 集成： spingCloud集成，k8s集成<br> 自动注销实例： 不支持<br> 界面：英文界面，不符合国人习惯 上手：复杂一点</p><p>Nacos,依赖：<code>mysql</code> —–</p><p>依赖：mysql 应用内/外：属于外部应用，侵入性小 ACP原则：通知遵循CP原则（一致性+分离容忍） 和AP原则（可用性+分离容忍） 版本迭代：目前仍然进行版本迭代，最近的提交是几天前 集成支持：支持<code>Dubbo</code> 、<code>SpringCloud</code>、<code>K8S</code>集成 访问协议：<code>HTTP</code>/动态<code>DNS</code>/<code>UDP</code> 雪崩保护：支持雪崩保护</p><p><code>Spring cloud config java</code>开发 —– Net支持比较差</p><p>自动注销实例：支持 界面：国产服务，中文界面，符合国人习惯 上手：极易，中文文档，案例，社区活跃 <code>Nacos</code>实际上是和<code>Nacos</code>比较相似的产品，虽然<code>Nacos</code>目前的主要发展方向放在了<code>Service Mesh</code>，但是<code>Nacos</code>最初支持的服务发现和配置管理，也是<code>Nacos</code>的两大功能。虽然<code>Nacos</code>在<code>Nacos</code>之后以与之相似的部署架构开源，但这并不意味着<code>Nacos</code>在功能和架构上也模仿<code>Nacos</code>，<code>Nacos</code>的架构和功能是由阿里巴巴内部十年的运行演进经验得来，所以二者的比较也一定会让大家更加了解他们的定位和演进方向是完全不一样的。</p>',12),k=n("code",null,"Nacos",-1),f=n("code",null,"Nacos",-1),q={href:"https://github.com/alibaba/nacos/releases/download/2.2.3/nacos-server-2.2.3.zip",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"Nacos",-1),N=i('<p><code>Nacos</code>做配置中心运行原理 见图 <img src="'+p+'" alt="Alt text"></p><p><code>Nacos</code> 文档 https://nacos.io/zh-cn/docs/what-is-nacos.html</p><h3 id="java-jdk-windows-配置" tabindex="-1"><a class="header-anchor" href="#java-jdk-windows-配置" aria-hidden="true">#</a> java jdk windows 配置</h3><p><img src="'+u+`" alt="Alt text"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>%Java_Home%<span class="token punctuation">\\</span>bin
%Java_Home%<span class="token punctuation">\\</span>jre<span class="token punctuation">\\</span>bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nacos-单应用启用" tabindex="-1"><a class="header-anchor" href="#nacos-单应用启用" aria-hidden="true">#</a> Nacos 单应用启用</h3>`,6),y={href:"https://blog.csdn.net/lianghecai52171314/article/details/132182119",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>nacos.core.auth.enabled=true
nacos.core.auth.server.identity.key=nacos
nacos.core.auth.server.identity.value=nacos
nacos.core.auth.plugin.nacos token.secret.key=VGhpc0lzTXIDdXN0b21TZWNyZXRLZXkwMTIZNDU2Nzg=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>D:<span class="token punctuation">\\</span>test<span class="token punctuation">\\</span>ABP<span class="token punctuation">\\</span>nacos-server-2.2.3<span class="token punctuation">\\</span>nacos<span class="token punctuation">\\</span>bin<span class="token operator">&gt;</span>startup.cmd <span class="token parameter variable">-m</span> standalone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+v+`" alt="Alt text"></p><p><code>Nacos</code>使用单服务单配置 条件</p><p>1、微服务系统</p><p>2、<code>Nacos</code></p><p>3、<code>nacos-sdk-csharp.Extensions.Configuration</code></p><p>步骤</p><p>1、<code>LKN.Order.HttpApi.Host</code> 项目中Nuget下载 <code>nacos-sdk-csharp.Extensions.Configuration</code></p><p>2、配置文件中配置Nacos地址</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;Nacos&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Namespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// Please set the value of Namespace ID !!!!!!!!</span>
    <span class="token property">&quot;ServerAddresses&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;http://localhost:8848/&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;UserName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nacos&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nacos&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;AccessKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;SecretKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ConfigUseRpc&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;NamingUseRpc&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Listeners&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;Optional&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;DataId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;appsettings.json&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;Group&quot;</span><span class="token operator">:</span> <span class="token string">&quot;OrderService&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、Program文件中配置</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Serilog;
using Serilog.Events;

namespace LKN.Order;

public class Program
{
    public async static Task&lt;int&gt; Main(string[] args)
    {
        Log.Logger = new LoggerConfiguration()
#if DEBUG
            .MinimumLevel.Debug()
#else
            .MinimumLevel.Information()
#endif
            .MinimumLevel.Override(&quot;Microsoft&quot;, LogEventLevel.Information)
            .MinimumLevel.Override(&quot;Microsoft.EntityFrameworkCore&quot;, LogEventLevel.Warning)
            .Enrich.FromLogContext()
            .WriteTo.Async(c =&gt; c.File(&quot;Logs/logs.txt&quot;))
            .WriteTo.Async(c =&gt; c.Console())
            .CreateLogger();

        try
        {
            Log.Information(&quot;Starting web host.&quot;);
            var builder = WebApplication.CreateBuilder(args);
            builder.Host.AddAppSettingsSecretsJson()
                .ConfigureAppConfiguration(build =&gt;
                     {
                         var configuration = build.Build();
                         build.AddNacosV2Configuration(configuration.GetSection(&quot;Nacos&quot;));
                 })
                .UseAutofac()
                .UseSerilog();
            await builder.AddApplicationAsync&lt;OrderHttpApiHostModule&gt;();
            var app = builder.Build();
            await app.InitializeApplicationAsync();
            await app.RunAsync();
            return 0;
        }
        catch (Exception ex)
        {
            if (ex is HostAbortedException)
            {
                throw;
            }

            Log.Fatal(ex, &quot;Host terminated unexpectedly!&quot;);
            return 1;
        }
        finally
        {
            Log.CloseAndFlush();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function A(C,S){const a=t("router-link"),c=t("ExternalLinkIcon");return l(),r("div",null,[b,n("nav",g,[n("ul",null,[n("li",null,[s(a,{to:"#目录"},{default:o(()=>[e("目录")]),_:1})]),n("li",null,[s(a,{to:"#微服务注配置中心-nacos"},{default:o(()=>[e("微服务注配置中心-Nacos")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#什么是配置中心"},{default:o(()=>[e("什么是配置中心")]),_:1})]),n("li",null,[s(a,{to:"#为什么要使用配置中心"},{default:o(()=>[e("为什么要使用配置中心")]),_:1})]),n("li",null,[s(a,{to:"#配置中心类型方式"},{default:o(()=>[e("配置中心类型方式")]),_:1})]),n("li",null,[s(a,{to:"#java-jdk-windows-配置"},{default:o(()=>[e("java jdk windows 配置")]),_:1})]),n("li",null,[s(a,{to:"#nacos-单应用启用"},{default:o(()=>[e("Nacos 单应用启用")]),_:1})])])])])]),h,n("p",null,[e("微服务中如何使用"),k,e("配置中心 "),f,e("配置中心下载地址 "),n("a",q,[e("nacos-server-2.2.3.zip 下载"),s(c)]),_,e("地址已经使用过")]),N,n("p",null,[e("登录文件配置 "),n("a",y,[e("Nacos 登录配置参考"),s(c)]),e("、")]),x])}const L=d(m,[["render",A],["__file","abpmicroservices0005.html.vue"]]);export{L as default};
