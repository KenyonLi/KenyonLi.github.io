import{_ as d,r as l,o as r,c as u,a as e,b as s,w as i,d as n,e as o}from"./app-c1c3c937.js";const c="/images/schedulemaster/schedule_master001_001image.png",v="/images/schedulemaster/schedule_master001_002image.png",p="/images/schedulemaster/schedule_master001_003image.png",m="/images/schedulemaster/schedule_master001_004image.png",b="/images/schedulemaster/schedule_master001_005image.png",g="/images/schedulemaster/schedule_master001_006image.png",h="/images/schedulemaster/schedule_master001_007image.png",q="/images/schedulemaster/schedule_master001_008image.png",S="/images/schedulemaster/schedule_master001_009image.png",k="/images/schedulemaster/schedule_master001_010image.png",_="/images/schedulemaster/schedule_master001_011image.png",y="/images/schedulemaster/schedule_master001_012image.png",x="/images/schedulemaster/schedule_master001_013image.png",C="/images/schedulemaster/schedule_master001_014image.png",w="/images/schedulemaster/schedule_master001_015image.png",f="/images/schedulemaster/schedule_master001_016image.png",A="/images/schedulemaster/schedule_master001_017image.png",M="/images/schedulemaster/schedule_master001_018image.png",T="/images/schedulemaster/schedule_master001_019image.png",H="/images/schedulemaster/schedule_master001_020image.png",P="/images/schedulemaster/schedule_master001_021image.png",I="/images/schedulemaster/schedule_master001_022image.png",D="/images/schedulemaster/schedule_master001_023image.png",R="/images/schedulemaster/schedule_master001_024image.png",N="/images/schedulemaster/schedule_master001_025image.png",L="/images/schedulemaster/schedule_master001_026image.png",W="/images/schedulemaster/schedule_master001_027image.png",K="/images/schedulemaster/schedule_master001_028image.png",E="/images/schedulemaster/schedule_master001_029image.png",U="/images/schedulemaster/schedule_master001_030image.png",V="/images/schedulemaster/schedule_master001_031image.png",F="/images/schedulemaster/schedule_master001_032image.png",O="/images/schedulemaster/schedule_master001_033image.png",B="/images/schedulemaster/schedule_master001_034image.png",z="/images/schedulemaster/schedule_master001_035image.png",J="/images/schedulemaster/schedule_master001_036image.png",j="/images/schedulemaster/schedule_master001_037image.png",Q="/images/schedulemaster/schedule_master001_038image.png",G="/images/schedulemaster/schedule_master001_039image.png",$="/images/schedulemaster/schedule_master001_040image.png",X="/images/schedulemaster/schedule_master001_041image.png",Y="/images/schedulemaster/schedule_master001_042image.png",Z="/images/schedulemaster/schedule_master001_043image.png",ee="/images/schedulemaster/schedule_master001_044image.png",ne="/images/schedulemaster/schedule_master001_045image.png",se="/images/schedulemaster/schedule_master001_046image.png",te="/images/schedulemaster/schedule_master001_047image.png",ie="/images/schedulemaster/schedule_master001_048image.png",ae="/images/schedulemaster/schedule_master001_049image.png",le="/images/schedulemaster/schedule_master001_050image.png",de="/images/schedulemaster/schedule_master001_051image.png",re="/images/schedulemaster/schedule_master001_052image.png",ue="/images/schedulemaster/schedule_master001_053image.png",oe="/images/schedulemaster/schedule_master001_054image.png",ce="/images/schedulemaster/schedule_master001_055image.png",ve="/images/schedulemaster/schedule_master001_056image.png",pe="/images/schedulemaster/schedule_master001_057image.png",me="/images/schedulemaster/schedule_master001_058image.png",be="/images/schedulemaster/schedule_master001_059image.png",ge="/images/schedulemaster/schedule_master001_060image.png",he="/images/schedulemaster/schedule_master001_061image.png",qe="/images/schedulemaster/schedule_master001_062image.png",Se="/images/schedulemaster/schedule_master001_063image.png",ke="/images/schedulemaster/schedule_master001_064image.png",_e="/images/schedulemaster/schedule_master001_065image.png",ye="/images/schedulemaster/schedule_master001_066image.png",xe="/images/schedulemaster/schedule_master001_067image.png",Ce="/images/schedulemaster/schedule_master001_068image.png",we="/images/schedulemaster/schedule_master001_069image.png",fe="/images/schedulemaster/schedule_master001_070image.png",Ae={},Me=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),Te={class:"table-of-contents"},He=e("h2",{id:"分布式任务调度中间件-schedulemaster",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#分布式任务调度中间件-schedulemaster","aria-hidden":"true"},"#"),n(" 分布式任务调度中间件 ScheduleMaster")],-1),Pe={href:"https://www.cnblogs.com/yuxl01/archive/2022/05/28/16311534.html",target:"_blank",rel:"noopener noreferrer"},Ie=e("h3",{id:"什么是-schedulemaster",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#什么是-schedulemaster","aria-hidden":"true"},"#"),n(" 什么是 ScheduleMaster")],-1),De={href:"https://github.com/hey-hoho/ScheduleMasterCore",target:"_blank",rel:"noopener noreferrer"},Re=o('<p>例如我们现在有多个系统，每个系统针对自己处理不同的业务场景。衍生出自己的调度任务，想象一下，如果每个系统人为去维护，那随着调度任务越来越多，人是崩溃的吧，可见维护和技术成本是巨大的，这时我们需要选择分布式任务系统框架做统一的管理</p><p><img src="'+c+'" alt="Alt text"></p><h3 id="什么地方使用-schedulemaster" tabindex="-1"><a class="header-anchor" href="#什么地方使用-schedulemaster" aria-hidden="true">#</a> 什么地方使用 ScheduleMaster</h3><p>ScheduleMaster 主要用在微服务系统中。单体系统中，图片资源是比较少的，所以，没有必要使用分布式文件系统</p><h3 id="微服务系统中为什么要使用-schedulemaster" tabindex="-1"><a class="header-anchor" href="#微服务系统中为什么要使用-schedulemaster" aria-hidden="true">#</a> 微服务系统中为什么要使用 ScheduleMaster</h3><p>微服务系统有很多，包含电商微服务系统，包含 OA 微服务系统，以及其他不同微服务系统。主要通过电商微服务系统来进行举例说明为什么要使用 ScheduleMaster？先得到一个电商微服务系统。</p><h3 id="电商微服务系统" tabindex="-1"><a class="header-anchor" href="#电商微服务系统" aria-hidden="true">#</a> 电商微服务系统</h3><p><img src="'+v+'" alt="Alt text"></p><p>在微服务电商系统中，我们主要看一个业务场景，创建订单业务场景。</p><p>创建订单实现过程，客户端发起创建订单请求—&gt;电商系统—-&gt;订单微服务—&gt;订单数据库。</p><p>我们再看另外一个业务场景，创建支付业务场景。</p><p>创建支付实现过程，客户端发起创建支付请求—&gt;电商网站—-&gt;支付微服务—&gt;支付数据库。</p><p>每创建一个订单会消耗一个商品库存，所以订单会有一个过期时间。用来回收商品库存，以便其他人使用。一般订单过期时间为 30 分钟。订单超过 30 分钟为超时订单。</p><p>每根据一个订单创建一个支付。不管是用微信支付还是支付宝支付，支付都是有过期时间的，一般支付过期时间为 30 分钟。支付超过 30 分钟则为超时支付。</p><p>所以：</p><p>1、如何回收超时订单数据</p><p>2、如何回收超时支付数据</p><p>方案：定时任务</p><h3 id="电商微服务系统-定时任务" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-定时任务" aria-hidden="true">#</a> 电商微服务系统-定时任务</h3><p>为了方便业务系统更好的接入调度系统，创建任务不仅可以在控制台中实现，系统也提供了 WebAPI 供业务系统使用代码接入，这种方式对延时任务来说尤其重要。</p><p><img src="'+p+'" alt="Alt text"></p><p>图中展示：订单微服务、支付微服务中，都会集成定时任务框架，然后分别使用定时任务框架进行超时订单回收，超时支付回收</p><p>如果微服务数量过多，每一个微服务都需要定时回收任务，那么就需要在每一个微服务中集成定时任务框架，然后在每一个微服务中实现定时任务的代码。就会导致维护量增大。因为所有微服务定时任务代码，都需要独立维护。如何降低维护量？</p><p>方案：ScheduleMaster</p><h3 id="电商微服务系统-schedulemaster" tabindex="-1"><a class="header-anchor" href="#电商微服务系统-schedulemaster" aria-hidden="true">#</a> 电商微服务系统-ScheduleMaster</h3><p><img src="'+m+'" alt="Alt text"></p><p>图中展示：订单微服务、支付微服务中集成的定时任务框架，独立抽取出来，放到独立进程 ScheduleMaster 中。然后让 ScheduleMaster 对订单微服务的超时订单进行定时回收、对支付微服务的超时支付进行定时回收</p><p>总结：这就是我们在电商系统中使用 ScheduleMaster 原因</p><p>1、先从单体电商系统分析</p><p>2、然后再从电商微服务系统分析</p><p>3、最后引入 ScheduleMaster</p><p>4、由此得到微服务系统中为什么要使用 ScheduleMaster</p><h3 id="微服务系统中如何落地-schedulemaster" tabindex="-1"><a class="header-anchor" href="#微服务系统中如何落地-schedulemaster" aria-hidden="true">#</a> 微服务系统中如何落地 ScheduleMaster</h3><p>前提：</p><p>1、电商微服务系统</p><p>2、ScheduleMaster</p><p>3、MySQL8.0.23</p><p>步骤</p><p>1、电商微服务系统准备</p><p>​ 通过 VS 创建.Net7 电商微服务系统</p><p><img src="'+b+'" alt="Alt text"></p><p>2、ScheduleMaster 准备</p><p>​ 下载地址：https://gitee.com/hey-hoho/ScheduleMaster.git</p><p>​ 如图所示 <img src="'+g+'" alt="Alt text"></p><p>​ 文档地址：https://github.com/hey-hoho/ScheduleMaster/wiki<br> 3、MySQL8.准备</p><p>略....</p><h3 id="超时订单回收业务场景落地" tabindex="-1"><a class="header-anchor" href="#超时订单回收业务场景落地" aria-hidden="true">#</a> 超时订单回收业务场景落地</h3><p>条件</p><p>1、订单微服务 LKN.Order.Service</p><p>2、Hos.ScheduleMaster.Web</p><p>3、Hos.ScheduleMaster.QuartzHost</p><p>4、客户端访问</p><p>步骤</p><p>1、先进入到电商微服务系统 LKN.Order.Service</p><p>​ 1.1 先在电商网站中创建 ProductController 类</p><p><img src="'+h+`" alt="Alt text"></p><p>1.2 然后在 ProductController 类中添加代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LKN.Order.Service.Controllers
{
   [ApiController]
   [Route(&quot;[controller]&quot;)]
   public class OrderController : ControllerBase
   {

       private readonly ILogger&lt;OrderController&gt; _logger;

       public OrderController(ILogger&lt;OrderController&gt; logger)
       {
           _logger = logger;
       }

       /// &lt;summary&gt;
       /// 超时订单回收
       /// &lt;/summary&gt;
       /// &lt;returns&gt;&lt;/returns&gt;
       [HttpPost]
       public IActionResult OrderCancel()
       {
           //1、超时订单回收
           _logger.LogInformation(&quot;回收超时订单&quot;);

           return Ok();
       }
   }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 1.3 然后通过 CMD 启动 LKN.Order.Service</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dotnet run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+q+'" alt="Alt text"></p><p>2、Hos.ScheduleMaster.Web 准备</p><p>​ 2.1、进入到 Hos.ScheduleMaster.Web publish 目录中</p><p><img src="'+S+`" alt="Alt text"></p><p>2.2、进入到 appsetting.json 文件中，增加配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">&quot;Logging&quot;</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;LogLevel&quot;</span><span class="token punctuation">:</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;Default&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;Microsoft&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Warning&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;Microsoft.Hosting.Lifetime&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;AllowedHosts&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">?</span> /*
    Provider的可选值：sqlserver、postgresql、mysql，默认为mysql
    ConnectionString是对应数据库类型的连接字符串，格式示例：
    <span class="token punctuation">-</span> sqlserver：&quot;Persist Security Info = False; User ID =sa; Password =123456; Initial Catalog =schedule_master; Server =.&quot;
    <span class="token punctuation">-</span> postgresql：&quot;Server=localhost;Port=5432;Database=schedule_master;User Id=postgres;Password=123456;Pooling=true;MaxPoolSize=20;&quot;
    <span class="token punctuation">-</span> mysql：&quot;Data Source=localhost;Database=schedule_master;User ID=root;Password=123456;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true&quot;
    <span class="token important">*/</span>
    <span class="token key atrule">&quot;DbConnector&quot;</span>
  <span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;Provider&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;ConnectionString&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Data Source=localhost;Database=schedule_master;User ID=root;Password=root;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;AppSettings&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> <span class="token key atrule">&quot;AdminDefaultPwd&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;111111&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;NodeSetting&quot;</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;IdentityName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;master-node&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;Role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;master&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;Protocol&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;IP&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;Port&quot;</span><span class="token punctuation">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3、进入到<code>Hos.ScheduleMaster.Web publish</code>目录中</p><p><img src="`+k+'" alt="Alt text"><br> 2.4、然后使用 CMD 启动<code>Hos.ScheduleMaster.Web</code></p><p>​ 在 CMD 中输入命令：<code>dotnet Hos.ScheduleMaster.Web.dll</code></p><p>2.5、ScheduleMaster 启动是否成功</p><p>​ 进入浏览器访问 ScheduleMaster 后台管理系统</p><p>​ 1、然后进入浏览器访问 http://localhost:30000</p><p><img src="'+_+'" alt="Alt text"></p><p>​ 2、输入 Hos.ScheduleMaster.Web 用户名和密码</p><p>​ 用户名：admin 密码：111111</p><p><img src="'+y+'" alt="Alt text"></p><p>3、Hos.ScheduleMaster.QuartzHost 准备</p><p>​ 3.1、进入到 Hos.ScheduleMaster.QuartzHost publish 目录中</p><p><img src="'+x+`" alt="Alt text"></p><p>​ 3.2、进入到 appsetting.json 文件中，增加配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">&quot;Logging&quot;</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;LogLevel&quot;</span><span class="token punctuation">:</span>
        <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;Default&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;Microsoft&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Warning&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;Microsoft.Hosting.Lifetime&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Information&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;AllowedHosts&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">?</span> /*
    Provider的可选值：sqlserver、postgresql、mysql，默认为mysql
    ConnectionString是对应数据库类型的连接字符串，格式示例：
    <span class="token punctuation">-</span> sqlserver：&quot;Persist Security Info = False; User ID =sa; Password =123456; Initial Catalog =schedule_master; Server =.&quot;
    <span class="token punctuation">-</span> postgresql：&quot;Server=localhost;Port=5432;Database=schedule_master;User Id=postgres;Password=123456;Pooling=true;MaxPoolSize=20;&quot;
    <span class="token punctuation">-</span> mysql：&quot;Data Source=localhost;Database=schedule_master;User ID=root;Password=123456;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true&quot;
    <span class="token important">*/</span>
    <span class="token key atrule">&quot;DbConnector&quot;</span>
  <span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;Provider&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;ConnectionString&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Data Source=localhost;Database=schedule_master;User ID=root;Password=root;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;NodeSetting&quot;</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;IdentityName&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;worker1&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;Role&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;worker&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;Protocol&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;IP&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;Port&quot;</span><span class="token punctuation">:</span> <span class="token number">30001</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;Priority&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;MaxConcurrency&quot;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.3、进入到 Hos.ScheduleMaster.QuartzHost publish 目录中</p><p><img src="`+C+'" alt="Alt text"></p><p>3.2、然后使用 CMD 启动 Hos.ScheduleMaster.QuartzHost</p><p>​ 在 CMD 中输入命令：<code>dotnet Hos.ScheduleMaster.QuartzHost.dll –urls http://*:30001</code></p><p>3.3、Hos.ScheduleMaster.Web 启动是否成功</p><p>​ 进入浏览器访问 Hos.ScheduleMaster.Web 后台管理系统节点管理</p><p><img src="'+w+'" alt="Alt text"></p><p>​ 如图所示：work1 节点状态运行状态，意味着成功</p><p>4、超时订单任务设置</p><p>​ 4.1、进入到 Hos.ScheduleMaster.Web 后台管理系统，任务列表</p><p><img src="'+f+'" alt="Alt text"></p><p>​ 4.2、然后点击创建任务，创建 HTTP 任务，基础信息</p><p><img src="'+A+'" alt="Alt text"></p><p>​ 4.3、然后创建 Http 接口信息</p><p><img src="'+M+'" alt="Alt text"></p><p>4.4、进人任务列表，查看任务状态</p><p><img src="'+T+'" alt="Alt text"></p><p>5、任务执行结果</p><p>​ 5.1、Hos.ScheduleMaster.Web 查看结果</p><p>​ 5.1.1、进入到任务列表，点击订单任务日志</p><p><img src="'+H+'" alt="Alt text"></p><p>5.1.2、然后查看运行结果</p><p><img src="'+P+'" alt="Alt text"></p><p>5.2、订单微服务查看结果</p><p><img src="'+I+'" alt="Alt text"></p><h3 id="超时订单回收执行原理" tabindex="-1"><a class="header-anchor" href="#超时订单回收执行原理" aria-hidden="true">#</a> 超时订单回收执行原理</h3><p>如图所示：</p><p><img src="'+D+'" alt="Alt text"></p><p>任务全局执行流程：客户端—–&gt;master——&gt;work—–&gt;订单微服务</p><p>1、master 节点主要做了两件事情</p><p>​ 1、选择 work 节点</p><p>​ 2、指定 work 执行任务</p><p>​ 除了这两件事情之外，还做了另外两件事情</p><p>​ 3、对 work 节点进行健康检查</p><p>​ 4、对任务进行故障转移</p><p>2、work 节点主要做了两件事情</p><p>​ 1、取出任务配置信息</p><p>​ 2、使用 Quartz 根据配置运行任务</p><p>​ 2.1、使用反射调用程序集</p><p>​ 2.2、使用 httpclient 调用 http 接口</p><h5 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h5><p><img src="'+R+'" alt="Alt text"></p><p>如图所示：</p><p>​ 表结构设计为 3 大块组成</p><p>​ 1、任务表 ：任务表以 schedules 表为代表</p><p>​ 2、节点表：节点表以 servernodes 表为代表</p><p>​ 3、系统表：系统表以系 systemusers 为代表</p><p>​ 这三个表为主表，这三个表在启动 Hos.ScheduleMaster.Web 项目的时候，会启动进行创建。记录了任务信息，节点信息，用户信息。</p><h4 id="添加任务原理" tabindex="-1"><a class="header-anchor" href="#添加任务原理" aria-hidden="true">#</a> 添加任务原理</h4><h4 id="源码结构" tabindex="-1"><a class="header-anchor" href="#源码结构" aria-hidden="true">#</a> 源码结构</h4><p>订单超时任务如何添加到数据库中，源码结构如图所示</p><p><img src="'+N+'" alt="Alt text"></p><p>1、进入到 Hos.ScheduleMaster.Web 项目中，找到 ScheduleController</p><p><img src="'+L+`" alt="Alt text"></p><p>2、进入 ScheduleController 控制器中，找到 Create 方法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
       /// 创建任务
       /// &lt;/summary&gt;
       /// &lt;param name=&quot;task&quot;&gt;&lt;/param&gt;
       /// &lt;returns&gt;&lt;/returns&gt;
       [HttpPost]
       public async Task&lt;ActionResult&gt; Create(ScheduleInfo task)
       {
           if (!ModelState.IsValid)
           {
               return this.JsonNet(false, &quot;数据验证失败！&quot;);
           }
           var admin = CurrentAdmin;
           ScheduleEntity main = new ScheduleEntity
           {
               MetaType = task.MetaType,
               CronExpression = task.CronExpression,
               EndDate = task.EndDate,
               Remark = task.Remark,
               StartDate = task.StartDate,
               Title = task.Title,
               Status = (int)ScheduleStatus.Stop,
               CustomParamsJson = task.CustomParamsJson,
               RunLoop = task.RunLoop,
               TotalRunCount = 0,
               CreateUserName = admin.UserName
           };
           if (task.MetaType == (int)ScheduleMetaType.Assembly)
           {
               main.AssemblyName = task.AssemblyName;
               main.ClassName = task.ClassName;
           }
           ScheduleHttpOptionEntity httpOption = null;
           if (task.MetaType == (int)ScheduleMetaType.Http)
           {
               httpOption = new ScheduleHttpOptionEntity
               {
                   RequestUrl = task.HttpRequestUrl,
                   Method = task.HttpMethod,
                   ContentType = task.HttpContentType,
                   Headers = task.HttpHeaders,
                   Body = task.HttpBody
               };
           }
           var result = _scheduleService.Add(main, httpOption, task.Keepers, task.Nexts, task.Executors);
           if (result.Status == ResultStatus.Success)
           {
               if (task.RunNow)
               {
                   var start = await _scheduleService.Start(main);
                   return this.JsonNet(true, &quot;任务创建成功！启动状态为：&quot; + (start.Status == ResultStatus.Success ? &quot;成功&quot; : &quot;失败&quot;), Url.Action(&quot;Index&quot;));
               }
               return this.JsonNet(true, &quot;任务创建成功！&quot;, Url.Action(&quot;Index&quot;));
           }
           return this.JsonNet(false, &quot;任务创建失败！&quot;);
       }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、进入 Create 方法中，找到 IScheduleService，IScheduleService 实现类在 Hos.ScheduleMaster.Core 项目中</p><p><img src="`+W+`" alt="Alt text"></p><p>​4、进入 ScheduleService 类中，找到 Add 方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
        /// 添加一个任务
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;model&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;httpOption&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;keepers&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;nexts&quot;&gt;&lt;/param&gt;
        /// &lt;param name=&quot;executors&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public ServiceResponseMessage Add(ScheduleEntity model, ScheduleHttpOptionEntity httpOption, List&lt;int&gt; keepers, List&lt;Guid&gt; nexts, List&lt;string&gt; executors = null)
        {
            if (executors == null || !executors.Any())
            {
                //没有指定worker就根据权重选择2个
                executors = _nodeService.GetAvaliableWorkerByPriority(null, 2).Select(x =&gt; x.NodeName).ToList();
            }
            if (!executors.Any())
            {
                return ServiceResult(ResultStatus.Failed, &quot;没有可用节点!&quot;);
            }
            model.CreateTime = DateTime.Now;
            var user = _repositoryFactory.SystemUsers.FirstOrDefault(x =&gt; x.UserName == model.CreateUserName);
            if (user != null)
            {
                model.CreateUserId = user.Id;
            }
            //保存主信息
            _repositoryFactory.Schedules.Add(model);
            //创建并保存任务锁
            _repositoryFactory.ScheduleLocks.Add(new ScheduleLockEntity { ScheduleId = model.Id, Status = 0 });
            //保存http数据
            if (httpOption != null)
            {
                httpOption.ScheduleId = model.Id;
                _repositoryFactory.ScheduleHttpOptions.Add(httpOption);
            }
            //保存运行节点
            _repositoryFactory.ScheduleExecutors.AddRange(executors.Select(x =&gt; new ScheduleExecutorEntity
            {
                ScheduleId = model.Id,
                WorkerName = x
            }));
            //保存监护人
            if (keepers != null &amp;&amp; keepers.Count &gt; 0)
            {
                _repositoryFactory.ScheduleKeepers.AddRange(keepers.Select(x =&gt; new ScheduleKeeperEntity
                {
                    ScheduleId = model.Id,
                    UserId = x
                }));
            }
            //保存子任务
            if (nexts != null &amp;&amp; nexts.Count &gt; 0)
            {
                _repositoryFactory.ScheduleReferences.AddRange(nexts.Select(x =&gt; new ScheduleReferenceEntity
                {
                    ScheduleId = model.Id,
                    ChildId = x
                }));
            }
            //事务提交
            if (_unitOfWork.Commit() &gt; 0)
            {
                return ServiceResult(ResultStatus.Success, &quot;任务创建成功!&quot;, model.Id);
            }
            return ServiceResult(ResultStatus.Failed, &quot;数据保存失败!&quot;);
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​5、进入 Add 方法中，找到 RepositoryFactory 类</p><p><img src="`+K+`" alt="Alt text"></p><p>​ 6、进入 RepositoryFactory 类中，找到</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>//------------------------------------------------------------------------------
// &lt;auto-generated&gt;
// 此文件由T4模板生成，请勿手动修改
// by hoho
// 06/18/2020 11:40:59
// &lt;/auto-generated&gt;
//------------------------------------------------------------------------------


using Hos.ScheduleMaster.Core.Models;

namespace Hos.ScheduleMaster.Core.Repository
{
	[ServiceMapTo(typeof(RepositoryFactory))]
    public class RepositoryFactory
    {
        private SmDbContext _context;

        public RepositoryFactory(SmDbContext context)
        {
            _context = context;
        }


	public BaseRepository&lt;ScheduleDelayedEntity&gt; ScheduleDelayeds =&gt; new BaseRepository&lt;ScheduleDelayedEntity&gt;(_context);


	public BaseRepository&lt;ScheduleEntity&gt; Schedules =&gt; new BaseRepository&lt;ScheduleEntity&gt;(_context);
    ......
  }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="任务启动原理" tabindex="-1"><a class="header-anchor" href="#任务启动原理" aria-hidden="true">#</a> 任务启动原理</h4><p>1、进入 ScheduleController 控制器中，找到_scheduleService.Add()方法</p><p><img src="`+E+`" alt="Alt text"></p><p>2、然后进入到 IScheduleService 中，找到 Start 方法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>/// &lt;summary&gt;
        /// 启动一个任务
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;model&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public async Task&lt;ServiceResponseMessage&gt; Start(ScheduleEntity model)
        {
            if (model == null) return ServiceResult(ResultStatus.Failed, &quot;任务信息不能为空！&quot;);
            if (model.Status != (int)ScheduleStatus.Stop)
            {
                return ServiceResult(ResultStatus.Failed, &quot;任务在停止状态下才能启动！&quot;);
            }
            if (model.EndDate.HasValue &amp;&amp; model.EndDate &lt; DateTime.Now)
            {
                return ServiceResult(ResultStatus.Failed, &quot;任务结束时间不能小于当前时间！&quot;);
            }
            return await InnerStart(model.Id);
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后在 Start 方法中，找到 InnerStart 方法</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>private async Task&lt;ServiceResponseMessage&gt; InnerStart(Guid sid)
        {
            //启动任务
            bool success = await _workerDispatcher.ScheduleStart(sid);
            if (success)
            {
                //启动成功后更新任务状态为运行中
                _repositoryFactory.Schedules.UpdateBy(m =&gt; m.Id == sid, m =&gt; new ScheduleEntity
                {
                    Status = (int)ScheduleStatus.Running
                });
                if (await _unitOfWork.CommitAsync() &gt; 0)
                {
                    return ServiceResult(ResultStatus.Success, &quot;任务启动成功!&quot;);
                }
                return ServiceResult(ResultStatus.Failed, &quot;更新任务状态失败!&quot;);
            }
            else
            {
                await _workerDispatcher.ScheduleStop(sid);
                _repositoryFactory.Schedules.UpdateBy(m =&gt; m.Id == sid, m =&gt; new ScheduleEntity
                {
                    Status = (int)ScheduleStatus.Stop,
                    NextRunTime = null
                });
                await _unitOfWork.CommitAsync();
                return ServiceResult(ResultStatus.Failed, &quot;任务启动失败!&quot;);
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、然后在 InnerStart 方法中，找到 WorkerDispatcher 类</p><p><img src="`+U+`" alt="Alt text"></p><p>5、然后在 WorkerDispatcher 类中，找到 ScheduleStart 方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public async Task&lt;bool&gt; ScheduleStart(Guid sid)
        {
            return await DispatcherHandler(sid, async (ServerNodeEntity node) =&gt;
             {
                 _scheduleClient.Server = node;
                 return await _scheduleClient.Start(sid);
             });
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 5.1、然后在 ScheduleStart 方法中，找到 DispatcherHandler</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>private async Task&lt;bool&gt; DispatcherHandler(Guid sid, RequestDelegate func)
        {
            var nodeList = _nodeService.GetAvaliableWorkerForSchedule(sid);
            if (nodeList.Any())
            {
                foreach (var item in nodeList)
                {
                    if (!await func(item))
                    {
                        return false;
                    }
                }
                return true;
            }
            throw new InvalidOperationException(&quot;running worker not found.&quot;);
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 5.2、然后在 ScheduleStart 方法中，找到 ScheduleServiceClient 类</p><p><img src="`+V+`" alt="Alt text"></p><p>6、然后在 ScheduleServiceClient 类中，找到 Start 方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public async Task&lt;bool&gt; Start(Guid sid)
        {
            return await PostRequest(&quot;/api/quartz/start&quot;, sid);
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 7、进入到 Hos.ScheduleMaster.QuartzHost 项目中，找到 QuartzController 类</p><p><img src="`+F+`" alt="Alt text"></p><p>​ 8、进入到 QuartzController 类中，找到 Start 方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>[HttpPost]
        public async Task&lt;IActionResult&gt; Start([FromForm]Guid sid)
        {
            bool success = await QuartzManager.StartWithRetry(sid);
            if (success) return Ok();
            return BadRequest();
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 9、进入到 Start 方法中，找到 QuartzManager 类</p><p><img src="`+O+`" alt="Alt text"></p><p>​ 10、进入到 QuartzManager 类，找到 StartWithRetry 方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>/// &lt;summary&gt;
        /// 启动一个任务，带重试机制
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;task&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        public static async Task&lt;bool&gt; StartWithRetry(Guid sid)
        {
            var jk = new JobKey(sid.ToString().ToLower());
            if (await _scheduler.CheckExists(jk))
            {
                return true;
            }
            ScheduleContext context = GetScheduleContext(sid);
            IHosSchedule schedule = await HosScheduleFactory.GetHosSchedule(context);
            try
            {
                for (int i = 0; i &lt; 3; i++)
                {
                    try
                    {
                        await Start(schedule);
                        return true;
                    }
                    catch (SchedulerException sexp)
                    {
                        LogHelper.Error($&quot;任务启动失败！开始第{i + 1}次重试...&quot;, sexp, context.Schedule.Id);
                    }
                }
                //最后一次尝试
                await Start(schedule);
                return true;
            }
            catch (SchedulerException sexp)
            {
                LogHelper.Error($&quot;任务所有重试都失败了，已放弃启动！&quot;, sexp, context.Schedule.Id);
                return false;
            }
            catch (Exception exp)
            {
                LogHelper.Error($&quot;任务启动失败！&quot;, exp, context.Schedule.Id);
                return false;
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​10.1、进入到StartWithRetry方法中，找到HosScheduleFactory类</p><p><img src="`+B+`" alt="Alt text"></p><p>10.2、进入到HosScheduleFactory类中，找到GetHosSchedule方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public static async Task&lt;IHosSchedule&gt; GetHosSchedule(ScheduleContext context)
        {
            IHosSchedule result;
            switch ((ScheduleMetaType)context.Schedule.MetaType)
            {
                case ScheduleMetaType.Assembly:
                    {
                        result = new AssemblySchedule();
                        await LoadPluginFile(context.Schedule);
                        break;
                    }
                case ScheduleMetaType.Http:
                    {
                        result = new HttpSchedule();
                        break;
                    }
                default: throw new InvalidOperationException(&quot;unknown schedule type.&quot;);
            }
            result.Main = context.Schedule;
            result.CustomParams = ConvertParamsJson(context.Schedule.CustomParamsJson);
            result.Keepers = context.Keepers;
            result.Children = context.Children;
            result.CancellationTokenSource = new System.Threading.CancellationTokenSource();
            result.CreateRunnableInstance(context);
            result.RunnableInstance.TaskId = context.Schedule.Id;
            result.RunnableInstance.CancellationToken = result.CancellationTokenSource.Token;
            result.RunnableInstance.Initialize();
            return result;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>11、进入到QuartzManager类，找到Start方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>private static async Task Start(IHosSchedule schedule)
        {
            JobDataMap map = new JobDataMap
            {
                new KeyValuePair&lt;string, object&gt; (&quot;instance&quot;,schedule),
            };
            string jobKey = schedule.Main.Id.ToString();
            try
            {
                IJobDetail job = JobBuilder.Create().OfType(schedule.GetQuartzJobType()).WithIdentity(jobKey).UsingJobData(map).Build();
			//添加监听器
            var listener = new JobRunListener(jobKey);
            listener.OnSuccess += StartedEvent;
            _scheduler.ListenerManager.AddJobListener(listener, KeyMatcher&lt;JobKey&gt;.KeyEquals(new JobKey(jobKey)));

            ITrigger trigger = GetTrigger(schedule.Main);
            await _scheduler.ScheduleJob(job, trigger, schedule.CancellationTokenSource.Token);

            using (var scope = new Core.ScopeDbContext())
            {
                var db = scope.GetDbContext();
                var task = db.Schedules.FirstOrDefault(x =&gt; x.Id == schedule.Main.Id);
                if (task != null)
                {
                    task.NextRunTime = TimeZoneInfo.ConvertTimeFromUtc(trigger.GetNextFireTimeUtc().Value.UtcDateTime, TimeZoneInfo.Local);
                    await db.SaveChangesAsync();
                }
            }
        }
        catch (Exception ex)
        {
            throw new SchedulerException(ex);
        }
        LogHelper.Info($&quot;任务[{schedule.Main.Title}]启动成功！&quot;, schedule.Main.Id);

        _ = Task.Run(async () =&gt;
          {
              while (true)
              {
                  if (schedule.RunnableInstance == null) break;
                  var log = schedule.RunnableInstance.ReadLog();
                  if (log != null)
                  {
                      LogManager.Queue.Write(new SystemLogEntity
                      {
                          Category = log.Category,
                          Message = log.Message,
                          ScheduleId = log.ScheduleId,
                          Node = log.Node,
                          StackTrace = log.StackTrace,
                          TraceId = log.TraceId,
                          CreateTime = log.CreateTime
                      });
                  }
                  else
                  {
                      await Task.Delay(3000);
                  }
              }
          });
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 12、Start方法为最核心方法。使用Quartz框架进行任务调度</p><p><img src="`+z+'" alt="Alt text"></p><h3 id="超时订单回收程序集场景" tabindex="-1"><a class="header-anchor" href="#超时订单回收程序集场景" aria-hidden="true">#</a> 超时订单回收程序集场景</h3><p>在微服务系统中，默认使用http接口进行任务处理，如果需要处理的任务不能提供http,希望能够使用ScheduleMaster<br> 如何处理？</p><p>方案：程序集任务</p><h4 id="如何落地程序集任务" tabindex="-1"><a class="header-anchor" href="#如何落地程序集任务" aria-hidden="true">#</a> 如何落地程序集任务</h4><p>条件</p><p>1、LKN.ScheduleService</p><p>步骤<br> 1、LKN.ScheduleService准备</p><p>1.1 LKN.ScheuleService项目创建，并引入<code>ScheduleMaster</code></p><p><img src="'+J+`" alt="Alt text"></p><p>1.2 创建 <code>OrderCancelTask</code> 类，并写入代码</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>using Hos.ScheduleMaster.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LKN.ScheduleService
{
    public class OrderCancelTask : TaskBase
    {
        public override void Run(TaskContext context)
        {
            // 1、超时定时逻辑
            context.WriteLog(&quot;回收超时订单......成功&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.3、<code>LKN.ScheduleService</code>编译，进入到<code>bin</code> 发布目录，然后再打包成<code>LKN.ScheduleService.zip</code>文件</p><p><img src="`+j+'" alt="Alt text"></p><p>注意：<code>Hos.ScheduleMaster.Base.dll</code> 不要打包到<code>zip</code>文件中，防止冲突问题</p><p><img src="'+Q+'" alt="Alt text"></p><p>2、LKN.ScheduleService.zip上传 2.1、进入到ScheduleMaster后台控制台界面，选择任务列表</p><p><img src="'+G+'" alt="Alt text"></p><p>2.2、然后点击创建任务，创建程序集任务</p><p><img src="'+$+'" alt="Alt text"></p><p>2.3、然后进入到元数据配置，上传程序集</p><p><img src="'+X+'" alt="Alt text"></p><p>2.4、查看程序集任务</p><p><img src="'+Y+'" alt="Alt text"></p><p>2.5、在程序集任务上点击日志按钮</p><p><img src="'+Z+'" alt="Alt text"></p><p>3、LKN.ScheduleService.zip结果</p><p>​ 3.1、进入到Hos.ScheduleMaster.Web项目中(发布运行程序目录中)</p><p><img src="'+ee+'" alt="Alt text"></p><p>3.2、然后进入到wwwroot/plugins目录中</p><p><img src="'+ne+'" alt="Alt text"></p><h3 id="schedulemaster集群" tabindex="-1"><a class="header-anchor" href="#schedulemaster集群" aria-hidden="true">#</a> ScheduleMaster集群</h3><p>目前，我们只启动了一个Master，Worker节点，节点名称为Worker1，订单取消任务是在Worker节点中进行运行的，如果Worker1节点宕机了，会导致订单取消任务无法运行！如何保证订单取消任务在这种情况下能够运行？</p><p>方案：Worker节点集群</p><h4 id="如何落地worker节点集群" tabindex="-1"><a class="header-anchor" href="#如何落地worker节点集群" aria-hidden="true">#</a> 如何落地Worker节点集群</h4><p>条件</p><p>1、Hos.ScheduleMaster.QuartzHost</p><p>步骤</p><p>1、进入到Hos.ScheduleMaster.QuartzHost publish目录中</p><p><img src="'+se+`" alt="Alt text"></p><p>​2、进入到appsetting.json文件中，增加配置</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Information&quot;,
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  },
  &quot;AllowedHosts&quot;: &quot;*&quot;,
  /*
  Provider的可选值：sqlserver、postgresql、mysql，默认为mysql
  ConnectionString是对应数据库类型的连接字符串，格式示例：
    - sqlserver：&quot;Persist Security Info = False; User ID =sa; Password =123456; Initial Catalog =schedule_master; Server =.&quot;
    - postgresql：&quot;Server=localhost;Port=5432;Database=schedule_master;User Id=postgres;Password=123456;Pooling=true;MaxPoolSize=20;&quot;
    - mysql：&quot;Data Source=localhost;Database=schedule_master;User ID=root;Password=123456;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true&quot;
  */
  &quot;DbConnector&quot;: {
    &quot;Provider&quot;: &quot;mysql&quot;,
    &quot;ConnectionString&quot;: &quot;Data Source=localhost;Database=schedule_master;User ID=root;Password=root;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true&quot;
  },
  &quot;NodeSetting&quot;: {
    &quot;IdentityName&quot;: &quot;worker2&quot;,
    &quot;Role&quot;: &quot;worker&quot;,
    &quot;Protocol&quot;: &quot;http&quot;,
    &quot;IP&quot;: &quot;localhost&quot;,
    &quot;Port&quot;: 30002,
    &quot;Priority&quot;: 3,
    &quot;MaxConcurrency&quot;: 20
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、进入到Hos.ScheduleMaster.QuartzHost publish目录中</p><p><img src="`+te+'" alt="Alt text"></p><p>4、然后使用CMD启动Hos.ScheduleMaster.QuartzHost</p><p>​ 在CMD中输入命令：<code>dotnet Hos.ScheduleMaster.QuartzHost.dll –-urls http://*:30002</code></p><p><img src="'+ie+'" alt="Alt text"></p><p>5、Hos.ScheduleMaster.Web启动是否成功</p><p>​ 进入浏览器访问Hos.ScheduleMaster.Web后台管理系统节点管理</p><p><img src="'+ae+'" alt="Alt text"></p><p>如图所示：worker1 worker2节点状态运行状态，意味着成功</p><h3 id="worker节点集群应用" tabindex="-1"><a class="header-anchor" href="#worker节点集群应用" aria-hidden="true">#</a> Worker节点集群应用</h3><h4 id="超时订单集群任务设置" tabindex="-1"><a class="header-anchor" href="#超时订单集群任务设置" aria-hidden="true">#</a> 超时订单集群任务设置</h4><p>1、进入到Hos.ScheduleMaster.Web后台管理系统，任务列表</p><p>2、​然后点击创建任务，创建HTTP任务，基础信息</p><p><img src="'+le+'" alt="Alt text"></p><p>3、然后创建Http接口信息</p><p><img src="'+de+'" alt="Alt text"></p><p>4、进人任务列表，查看任务状态</p><p><img src="'+re+'" alt="Alt text"></p><p>5、任务执行结果</p><p>​ 5.1、Hos.ScheduleMaster.Web查看结果</p><p>​ 5.1.1、进入到任务列表，点击订单任务日志</p><p><img src="'+ue+'" alt="Alt text"></p><p>5.1.2、然后查看运行结果</p><p><img src="'+oe+'" alt="Alt text"></p><p>5.2、订单微服务查看结果</p><p><img src="'+ce+'" alt="Alt text"></p><h4 id="超时订单集群任务关闭worker1" tabindex="-1"><a class="header-anchor" href="#超时订单集群任务关闭worker1" aria-hidden="true">#</a> 超时订单集群任务关闭worker1</h4><p>1、worker1关闭</p><p><img src="'+ve+'" alt="Alt text"></p><p>2、查看任务日志，worker2开始执行任务</p><p><img src="'+pe+'" alt="Alt text"></p><h4 id="超时订单集群任务关闭worker2" tabindex="-1"><a class="header-anchor" href="#超时订单集群任务关闭worker2" aria-hidden="true">#</a> 超时订单集群任务关闭worker2</h4><p>1、worker2关闭</p><p><img src="'+me+'" alt="Alt text"></p><p>2、查看任务日志，worker1开始执行任务</p><p><img src="'+be+'" alt="Alt text"></p><h3 id="schedulemaster集群原理" tabindex="-1"><a class="header-anchor" href="#schedulemaster集群原理" aria-hidden="true">#</a> ScheduleMaster集群原理</h3><p>当worker1宕机，任务会自动切换到worker2上面运行，</p><p>当worker2宕机，任务会自动切换到worker1上面运行，主要依靠什么什么做到的？核心：健康检测，故障转移</p><p>条件</p><p>1、健康检测</p><p>2、故障转移</p><p>步骤</p><p>1、进入到Hos.ScheduleMaster.Web项目中，找到SystemSchedulerRegistry类</p><p><img src="'+ge+`" alt="Alt text"></p><p>2、然后SystemSchedulerRegistry找到WorkerCheckJob类</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>internal class WorkerCheckJob : IJob
    {
        /// &lt;summary&gt;
        /// 执行计划
        /// &lt;/summary&gt;
        public void Execute()
        {
            using (var scope = ConfigurationCache.RootServiceProvider.CreateScope())
            {
                Core.Interface.INodeService service = scope.ServiceProvider.GetService&lt;Core.Interface.INodeService&gt;();
                AutowiredServiceProvider provider = new AutowiredServiceProvider();
                provider.PropertyActivate(service, scope.ServiceProvider);
                service.WorkerHealthCheck();
            }
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后在WorkerCheckJob类中找到NodeService，进入到Hos.ScheduleMaster.Core项目</p><p><img src="`+he+`" alt="Alt text"></p><p>4、然后进入到NodeService类中，找到WorkerHealthCheck方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>
        /// &lt;summary&gt;
        /// worker健康检查
        /// &lt;/summary&gt;
        public void WorkerHealthCheck()
        {
            var workers = _repositoryFactory.ServerNodes.Where(x =&gt; x.NodeType == &quot;worker&quot; &amp;&amp; x.Status != 0).ToList();
            if (!workers.Any())
            {
                return;
            }
            //允许最大失败次数
            int allowMaxFailed = ConfigurationCache.GetField&lt;int&gt;(&quot;System_WorkerUnHealthTimes&quot;);
            if (allowMaxFailed &lt;= 0) allowMaxFailed = 3;
            //遍历处理
            workers.ForEach(async (w) =&gt;
            {
                using (var scope = new Core.ScopeDbContext())
                {
                    var db = scope.GetDbContext();
                    _serverClient.Server = w;
                    //初始化计数器
                    ConfigurationCache.WorkerUnHealthCounter.TryAdd(w.NodeName, 0);
                    var success = await _serverClient.HealthCheck();
                    if (success)
                    {
                        w.LastUpdateTime = DateTime.Now;
                        db.ServerNodes.Update(w);
                        await db.SaveChangesAsync();
                        ConfigurationCache.WorkerUnHealthCounter[w.NodeName] = 0;
                    }
                    else
                    {
                        //获取已失败次数
                        int failedCount = ConfigurationCache.WorkerUnHealthCounter[w.NodeName];
                        System.Threading.Interlocked.Increment(ref failedCount);
                        if (failedCount &gt;= allowMaxFailed)
                        {
                            w.Status = 0;//标记下线，实际上可能存在因为网络抖动等原因导致检查失败但worker进程还在运行的情况
                            db.ServerNodes.Update(w);
                            //释放该节点占据的锁
                            var locks = db.ScheduleLocks.Where(x =&gt; x.LockedNode == w.NodeName &amp;&amp; x.Status == 1).ToList();
                            locks.ForEach(x =&gt;
                            {
                                x.Status = 0;
                                x.LockedNode = null;
                                x.LockedTime = null;
                            });
                            db.ScheduleLocks.UpdateRange(locks);
                            await db.SaveChangesAsync();
                            //重置计数器
                            ConfigurationCache.WorkerUnHealthCounter[w.NodeName] = 0;
                        }
                        else
                        {
                            ConfigurationCache.WorkerUnHealthCounter[w.NodeName] = failedCount;
                        }
                    }
                }
            });
        }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、然后在WorkerHealthCheck方法中，找到ServerClient类</p><p><img src="`+qe+`" alt="Alt text"></p><p>6、然后在ServerClient类中，找到HealthCheck方法</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>public async Task&lt;bool&gt; HealthCheck()
        {
            HttpClient client = CreateClient();
            try
            {
                var response = await client.GetAsync(&quot;/health&quot;);
                return await ClientResponse(response);
            }
            catch (Exception ex)
            {
                Log.LogHelper.Warn($&quot;请求地址：{client.BaseAddress.ToString()}/health，响应消息：{(ex.InnerException ?? ex).Message}&quot;);
                return false;
            }
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、在Hos.ScheduleMaster.QuartzHost项目中，找到Startup类 ,然后在Startup类中，进入ConfigureServices方法中，找到AddHealthChecks方法</p><p><img src="`+Se+'" alt="Alt text"></p><p>7.1、然后在Startup类中，进入Configure方法中，找到MapHealthChecks方法</p><p><img src="'+ke+'" alt="Alt text"></p><p>目前，我们只启动了一个Master,Worker节点，节点名称为Worker1,订单取消任务是在Worker节点中进行运行的，如果Worker1节点宕机了，会导致订单取消任务无法运行！如何保证订单取消任务在这种情况下能够运行？<br> 方案： Worker节点集群</p><h4 id="如何落地master节点集群" tabindex="-1"><a class="header-anchor" href="#如何落地master节点集群" aria-hidden="true">#</a> 如何落地Master节点集群</h4><p>目前，我们只启动了一个Master，Worker节点，节点名称为Worker1，订单取消任务是在Worker节点中进行运行的，如果Worker1节点宕机了，可以使用Worker集群解决， 如果Master宕机，也会导致整个集群不可用</p><p>方案：Master节点集群</p><p>条件</p><p>1、Hos.ScheduleMaster.Web</p><p>步骤</p><p>2、Hos.ScheduleMaster.Web准备</p><p>​ 2.1、进入到Hos.ScheduleMaster.Web publish目录中</p><p><img src="'+_e+`" alt="Alt text"></p><p>2.2、进入到appsetting.json文件中，增加配置</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>{
  &quot;Logging&quot;: {
    &quot;LogLevel&quot;: {
      &quot;Default&quot;: &quot;Information&quot;,
      &quot;Microsoft&quot;: &quot;Warning&quot;,
      &quot;Microsoft.Hosting.Lifetime&quot;: &quot;Information&quot;
    }
  },
  &quot;AllowedHosts&quot;: &quot;*&quot;,
  /*
  Provider的可选值：sqlserver、postgresql、mysql，默认为mysql
  ConnectionString是对应数据库类型的连接字符串，格式示例：
    - sqlserver：&quot;Persist Security Info = False; User ID =sa; Password =123456; Initial Catalog =schedule_master; Server =.&quot;
    - postgresql：&quot;Server=localhost;Port=5432;Database=schedule_master;User Id=postgres;Password=123456;Pooling=true;MaxPoolSize=20;&quot;
    - mysql：&quot;Data Source=localhost;Database=schedule_master;User ID=root;Password=123456;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true&quot;
  */
  &quot;DbConnector&quot;: {
    &quot;Provider&quot;: &quot;mysql&quot;,
    &quot;ConnectionString&quot;: &quot;Data Source=localhost;Database=schedule_master;User ID=root;Password=root;pooling=true;CharSet=utf8mb4;port=3306;sslmode=none;TreatTinyAsBoolean=true&quot;
  },
  &quot;AppSettings&quot;: {
    &quot;AdminDefaultPwd&quot;: &quot;111111&quot;
  },
  &quot;NodeSetting&quot;: {
    &quot;IdentityName&quot;: &quot;master-node1&quot;,
    &quot;Role&quot;: &quot;master&quot;,
    &quot;Protocol&quot;: &quot;http&quot;,
    &quot;IP&quot;: &quot;localhost&quot;,
    &quot;Port&quot;: 30003
  }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.3、进入到Hos.ScheduleMaster.Web publish目录中</p><p><img src="`+ye+'" alt="Alt text"></p><p>2.4、然后使用CMD启动Hos.ScheduleMaster.Web</p><p>​ 在CMD中输入命令：<code>dotnet Hos.ScheduleMaster.Web.dll -–urls http://*:30003</code></p><p><img src="'+xe+'" alt="Alt text"></p><p>2.5、Hos.ScheduleMaster.Web启动是否成功</p><p>​ 进入浏览器访问Hos.ScheduleMaster.Web后台管理系统节点管理</p><p><img src="'+Ce+'" alt="Alt text"></p><p>如图所示：master-node master-node1节点状态运行状态，意味着成功</p><h3 id="master节点集群应用" tabindex="-1"><a class="header-anchor" href="#master节点集群应用" aria-hidden="true">#</a> Master节点集群应用</h3><p>条件</p><p>1、Nginx</p><p>步骤</p><p>​ 1、Nginx下载：http://nginx.org/download/nginx-1.20.2.zip</p><p>​ 2、Nginx配置ScheduleMaster</p><p>​ 2.1、进入到Nginx conf目录中</p><p><img src="'+we+`" alt="Alt text"></p><p>​ 2.2、在nginx.conf目录中配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#user  nobody;</span>
worker_processes  1;

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>

events <span class="token punctuation">{</span>
    worker_connections  1024;
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
	include       mime.types;
    default_type  application/octet<span class="token punctuation">-</span>stream;

    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment">#access_log  logs/access.log  main;</span>

    sendfile        on;
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  65;

    <span class="token comment">#gzip  on;</span>
    server <span class="token punctuation">{</span>
        listen       8081;
        server_name  localhost;

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

		location / <span class="token punctuation">{</span>
            proxy_pass  http<span class="token punctuation">:</span>//YDT.ScheduleMaster;
        <span class="token punctuation">}</span>

     
    <span class="token punctuation">}</span>
	
	<span class="token comment">#ScheduleMaster负载均衡配置</span>
    upstream YDT.ScheduleMaster<span class="token punctuation">{</span>
        server localhost<span class="token punctuation">:</span>30000;
        server localhost<span class="token punctuation">:</span>30003;
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.2.1、nginx启动</p><p>​ 使用cmd输入命令：nginx</p><p><img src="`+fe+`" alt="Alt text"></p><h2 id="api自定义任务" tabindex="-1"><a class="header-anchor" href="#api自定义任务" aria-hidden="true">#</a> API自定义任务</h2><h3 id="api-server-对接流程" tabindex="-1"><a class="header-anchor" href="#api-server-对接流程" aria-hidden="true">#</a> API Server 对接流程</h3><p>对于开放接口来说，使用签名验证已经是必不可少的一环，这是保证系统安全性的重要手段。看一下核心对接流程：</p><ul><li><p>在控制台中创建好专用的API对接用户账号。</p></li><li><p>使用对接账号的用户名设置为http header中的<code>ms_auth_user</code>值。</p></li><li><p>使用经过哈希运算过的秘钥设置为http header中的<code>ms_auth_secret值</code>，计算规则：按{用户名}{hash(密码)}{用户名}的格式拼接得到字符串str，然后再对str做一次hash运算即得到最终秘钥，hash函数是小写的32位MD5算法。</p></li><li><p>使用form格式发起http调用，如果非法用户会返回401-Unauthorized。</p></li></ul><p>代码示例：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    HttpClient client = new HttpClient();
    client.DefaultRequestHeaders.Add(&quot;ms_auth_user&quot;, &quot;admin&quot;);
    client.DefaultRequestHeaders.Add(&quot;ms_auth_secret&quot;, SecurityHelper.MD5($&quot;admin{SecurityHelper.MD5(&quot;111111&quot;)}}admin&quot;));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>签名验证这块设计的比较简单，具体源码逻辑可以参考<code>Hos.ScheduleMaster.Web.Filters.AccessControlFilter</code>。</p></blockquote><br><h4 id="api-返回格式" tabindex="-1"><a class="header-anchor" href="#api-返回格式" aria-hidden="true">#</a> API 返回格式</h4><p>所有接口采用统一的返回格式，字段如下：</p><table><thead><tr><th>参数名称</th><th>参数类型</th><th>说明</th></tr></thead><tbody><tr><td>Success</td><td>bool</td><td>是否成功</td></tr><tr><td>Status</td><td>int</td><td>结果状态，0-请求失败 1-请求成功 2-登录失败 3-参数异常 4-数据异常</td></tr><tr><td>Message</td><td>string</td><td>返回的消息</td></tr><tr><td>Data</td><td>object</td><td>返回的数据</td></tr></tbody></table><br><h4 id="创建程序集任务" tabindex="-1"><a class="header-anchor" href="#创建程序集任务" aria-hidden="true">#</a> 创建程序集任务</h4><ul><li><p>接口地址：<code>http://yourip:30000/api/task/create</code></p></li><li><p>请求类型：<code>POST</code></p></li><li><p>参数格式：<code>application/x-www-form-urlencoded</code></p></li><li><p>返回结果：创建成功返回任务 id</p></li><li><p>参数列表：</p></li></ul><table><thead><tr><th>参数名称</th><th>参数类型</th><th>是否必填</th><th>说明</th></tr></thead><tbody><tr><td>MetaType</td><td>int</td><td>是</td><td>任务类型，这里固定是 1</td></tr><tr><td>Title</td><td>string</td><td>是</td><td>任务名称</td></tr><tr><td>RunLoop</td><td>bool</td><td>是</td><td>是否按周期执行</td></tr><tr><td>CronExpression</td><td>string</td><td>否</td><td>cron 表达式，如果 RunLoop 为 true 则必填</td></tr><tr><td>AssemblyName</td><td>string</td><td>是</td><td>程序集名称</td></tr><tr><td>ClassName</td><td>string</td><td>是</td><td>执行类名称，包含完整命名空间</td></tr><tr><td>StartDate</td><td>DateTime</td><td>是</td><td>任务开始时间</td></tr><tr><td>EndDate</td><td>DateTime</td><td>否</td><td>任务停止时间，为空表示不限停止时间</td></tr><tr><td>Remark</td><td>string</td><td>否</td><td>任务描述说明</td></tr><tr><td>Keepers</td><td>List&lt;int&gt;</td><td>否</td><td>监护人 id</td></tr><tr><td>Nexts</td><td>List&lt;guid&gt;</td><td>否</td><td>子级任务 id</td></tr><tr><td>Executors</td><td>List&lt;string&gt;</td><td>否</td><td>执行节点名称</td></tr><tr><td>RunNow</td><td>bool</td><td>否</td><td>创建成功是否立即启动</td></tr><tr><td>Params</td><td>List&lt;ScheduleParam&gt;</td><td>否</td><td>自定义参数列表，也可以通过 CustomParamsJson 字段直接传 json 格式字符串</td></tr></tbody></table><p>ScheduleParam：</p><table><thead><tr><th>参数名称</th><th>参数类型</th><th>是否必填</th><th>说明</th></tr></thead><tbody><tr><td>ParamKey</td><td>string</td><td>是</td><td>参数名称</td></tr><tr><td>ParamValue</td><td>string</td><td>是</td><td>参数值</td></tr><tr><td>ParamRemark</td><td>string</td><td>否</td><td>参数说明</td></tr></tbody></table><p>代码示例：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    HttpClient client = new HttpClient();
    List&lt;KeyValuePair&lt;string, string&gt;&gt; args = new List&lt;KeyValuePair&lt;string, string&gt;&gt;();
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;MetaType&quot;, &quot;1&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;RunLoop&quot;, &quot;true&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;CronExpression&quot;, &quot;33 0/8 * * * ?&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;Remark&quot;, &quot;By Xunit Tester Created&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;StartDate&quot;, DateTime.Today.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;)));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;Title&quot;, &quot;程序集接口测试任务&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;AssemblyName&quot;, &quot;Hos.ScheduleMaster.Demo&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;ClassName&quot;, &quot;Hos.ScheduleMaster.Demo.Simple&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;CustomParamsJson&quot;, &quot;[{\\&quot;ParamKey\\&quot;:\\&quot;k1\\&quot;,\\&quot;ParamValue\\&quot;:\\&quot;1111\\&quot;,\\&quot;ParamRemark\\&quot;:\\&quot;r1\\&quot;},{\\&quot;ParamKey\\&quot;:\\&quot;k2\\&quot;,\\&quot;ParamValue\\&quot;:\\&quot;2222\\&quot;,\\&quot;ParamRemark\\&quot;:\\&quot;r2\\&quot;}]&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;Keepers&quot;, &quot;1&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;Keepers&quot;, &quot;2&quot;));
    //args.Add(new KeyValuePair&lt;string, string&gt;(&quot;Nexts&quot;, &quot;&quot;));
    //args.Add(new KeyValuePair&lt;string, string&gt;(&quot;Executors&quot;, &quot;&quot;));
    HttpContent reqContent = new FormUrlEncodedContent(args);
    var response = await client.PostAsync(&quot;http://localhost:30000/api/Task/Create&quot;, reqContent);
    var content = await response.Content.ReadAsStringAsync();
    Debug.WriteLine(content);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>要提一下的是，使用 API 创建任务的方式不支持上传程序包，所以在任务需要启动时要确保程序包已通过其他方式上传，否则会启动失败。</p></blockquote><br><h4 id="创建-http-任务" tabindex="-1"><a class="header-anchor" href="#创建-http-任务" aria-hidden="true">#</a> 创建 HTTP 任务</h4><ul><li><p>接口地址：<code>http://yourip:30000/api/task/create</code></p></li><li><p>请求类型：<code>POST</code></p></li><li><p>参数格式：<code>application/x-www-form-urlencoded</code></p></li><li><p>返回结果：创建成功返回任务 id</p></li><li><p>参数列表：</p></li></ul><table><thead><tr><th>参数名称</th><th>参数类型</th><th>是否必填</th><th>说明</th></tr></thead><tbody><tr><td>MetaType</td><td>int</td><td>是</td><td>任务类型，这里固定是 2</td></tr><tr><td>Title</td><td>string</td><td>是</td><td>任务名称</td></tr><tr><td>RunLoop</td><td>bool</td><td>是</td><td>是否按周期执行</td></tr><tr><td>CronExpression</td><td>string</td><td>否</td><td>cron 表达式，如果 RunLoop 为 true 则必填</td></tr><tr><td>StartDate</td><td>DateTime</td><td>是</td><td>任务开始时间</td></tr><tr><td>EndDate</td><td>DateTime</td><td>否</td><td>任务停止时间，为空表示不限停止时间</td></tr><tr><td>Remark</td><td>string</td><td>否</td><td>任务描述说明</td></tr><tr><td>HttpRequestUrl</td><td>string</td><td>是</td><td>请求地址</td></tr><tr><td>HttpMethod</td><td>string</td><td>是</td><td>请求方式，仅支持 GET\\POST\\PUT\\DELETE</td></tr><tr><td>HttpContentType</td><td>string</td><td>是</td><td>参数格式，仅支持 application/json 和 application/x-www-form-urlencoded</td></tr><tr><td>HttpHeaders</td><td>string</td><td>否</td><td>自定义请求头，ScheduleParam 列表的 json 字符串</td></tr><tr><td>HttpBody</td><td>string</td><td>是</td><td>如果是 json 格式参数，则是对应参数的 json 字符串；如果是 form 格式参数，则是对应 ScheduleParam 列表的 json 字符串。</td></tr><tr><td>Keepers</td><td>List&lt;int&gt;</td><td>否</td><td>监护人 id</td></tr><tr><td>Nexts</td><td>List&lt;guid&gt;</td><td>否</td><td>子级任务 id</td></tr><tr><td>Executors</td><td>List&lt;string&gt;</td><td>否</td><td>执行节点名称</td></tr><tr><td>RunNow</td><td>bool</td><td>否</td><td>创建成功是否立即启动</td></tr></tbody></table><p>代码示例：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    HttpClient client = new HttpClient();
    List&lt;KeyValuePair&lt;string, string&gt;&gt; args = new List&lt;KeyValuePair&lt;string, string&gt;&gt;();
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;MetaType&quot;, &quot;2&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;RunLoop&quot;, &quot;true&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;CronExpression&quot;, &quot;22 0/8 * * * ?&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;Remark&quot;, &quot;By Xunit Tester Created&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;StartDate&quot;, DateTime.Today.ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;)));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;Title&quot;, &quot;Http接口测试任务&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;HttpRequestUrl&quot;, &quot;http://localhost:56655/api/1.0/value/jsonpost&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;HttpMethod&quot;, &quot;POST&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;HttpContentType&quot;, &quot;application/json&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;HttpHeaders&quot;, &quot;[]&quot;));
    args.Add(new KeyValuePair&lt;string, string&gt;(&quot;HttpBody&quot;, &quot;{ \\&quot;Posts\\&quot;: [{ \\&quot;PostId\\&quot;: 666, \\&quot;Title\\&quot;: \\&quot;tester\\&quot;, \\&quot;Content\\&quot;:\\&quot;testtesttest\\&quot; }], \\&quot;BlogId\\&quot;: 111, \\&quot;Url\\&quot;:\\&quot;qweqrrttryrtyrtrtrt\\&quot; }&quot;));
    HttpContent reqContent = new FormUrlEncodedContent(args);
    var response = await client.PostAsync(&quot;http://localhost:30000/api/Task/Create&quot;, reqContent);
    var content = await response.Content.ReadAsStringAsync();
    Debug.WriteLine(content);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h4 id="创建延时任务" tabindex="-1"><a class="header-anchor" href="#创建延时任务" aria-hidden="true">#</a> 创建延时任务</h4><ul><li><p>接口地址：<code>http://yourip:30000/api/delaytask/create</code></p></li><li><p>请求类型：<code>POST</code></p></li><li><p>参数格式：<code>application/x-www-form-urlencoded</code></p></li><li><p>返回结果：创建成功返回任务 id</p></li><li><p>参数列表：</p></li></ul><table><thead><tr><th>参数名称</th><th>参数类型</th><th>是否必填</th><th>说明</th></tr></thead><tbody><tr><td>SourceApp</td><td>string</td><td>是</td><td>来源</td></tr><tr><td>Topic</td><td>string</td><td>是</td><td>主题</td></tr><tr><td>ContentKey</td><td>string</td><td>是</td><td>业务关键字</td></tr><tr><td>DelayTimeSpan</td><td>int</td><td>是</td><td>延迟相对时间</td></tr><tr><td>DelayAbsoluteTime</td><td>DateTime</td><td>是</td><td>延迟绝对时间</td></tr><tr><td>NotifyUrl</td><td>string</td><td>是</td><td>回调地址</td></tr><tr><td>NotifyDataType</td><td>string</td><td>是</td><td>回调参数格式，仅支持 application/json 和 application/x-www-form-urlencoded</td></tr><tr><td>NotifyBody</td><td>string</td><td>是</td><td>回调参数，json 格式字符串</td></tr></tbody></table><p>代码示例：</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>    for (int i = 0; i &lt; 5; i++)
    {
        int rndNum = new Random().Next(20, 500);
        List&lt;KeyValuePair&lt;string, string&gt;&gt; args = new List&lt;KeyValuePair&lt;string, string&gt;&gt;();
        args.Add(new KeyValuePair&lt;string, string&gt;(&quot;SourceApp&quot;, &quot;TestApp&quot;));
        args.Add(new KeyValuePair&lt;string, string&gt;(&quot;Topic&quot;, &quot;TestApp.Trade.TimeoutCancel&quot;));
        args.Add(new KeyValuePair&lt;string, string&gt;(&quot;ContentKey&quot;, i.ToString()));
        args.Add(new KeyValuePair&lt;string, string&gt;(&quot;DelayTimeSpan&quot;, rndNum.ToString()));
        args.Add(new KeyValuePair&lt;string, string&gt;(&quot;DelayAbsoluteTime&quot;, DateTime.Now.AddSeconds(rndNum).ToString(&quot;yyyy-MM-dd HH:mm:ss&quot;)));
        args.Add(new KeyValuePair&lt;string, string&gt;(&quot;NotifyUrl&quot;, &quot;http://localhost:56655/api/1.0/value/delaypost&quot;));
        args.Add(new KeyValuePair&lt;string, string&gt;(&quot;NotifyDataType&quot;, &quot;application/json&quot;));
        args.Add(new KeyValuePair&lt;string, string&gt;(&quot;NotifyBody&quot;, &quot;{ \\&quot;Posts\\&quot;: [{ \\&quot;PostId\\&quot;: 666, \\&quot;Title\\&quot;: \\&quot;tester\\&quot;, \\&quot;Content\\&quot;:\\&quot;testtesttest\\&quot; }], \\&quot;BlogId\\&quot;: 111, \\&quot;Url\\&quot;:\\&quot;qweqrrttryrtyrtrtrt\\&quot; }&quot;));
        HttpContent reqContent = new FormUrlEncodedContent(args);
        var response = await client.PostAsync(&quot;http://localhost:30000/api/DelayTask/Create&quot;, reqContent);
        var content = await response.Content.ReadAsStringAsync();
        Debug.WriteLine(content);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,344);function Ne(Le,We){const t=l("router-link"),a=l("ExternalLinkIcon");return r(),u("div",null,[Me,e("nav",Te,[e("ul",null,[e("li",null,[s(t,{to:"#目录"},{default:i(()=>[n("目录")]),_:1})]),e("li",null,[s(t,{to:"#分布式任务调度中间件-schedulemaster"},{default:i(()=>[n("分布式任务调度中间件 ScheduleMaster")]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#什么是-schedulemaster"},{default:i(()=>[n("什么是 ScheduleMaster")]),_:1})]),e("li",null,[s(t,{to:"#什么地方使用-schedulemaster"},{default:i(()=>[n("什么地方使用 ScheduleMaster")]),_:1})]),e("li",null,[s(t,{to:"#微服务系统中为什么要使用-schedulemaster"},{default:i(()=>[n("微服务系统中为什么要使用 ScheduleMaster")]),_:1})]),e("li",null,[s(t,{to:"#电商微服务系统"},{default:i(()=>[n("电商微服务系统")]),_:1})]),e("li",null,[s(t,{to:"#电商微服务系统-定时任务"},{default:i(()=>[n("电商微服务系统-定时任务")]),_:1})]),e("li",null,[s(t,{to:"#电商微服务系统-schedulemaster"},{default:i(()=>[n("电商微服务系统-ScheduleMaster")]),_:1})]),e("li",null,[s(t,{to:"#微服务系统中如何落地-schedulemaster"},{default:i(()=>[n("微服务系统中如何落地 ScheduleMaster")]),_:1})]),e("li",null,[s(t,{to:"#超时订单回收业务场景落地"},{default:i(()=>[n("超时订单回收业务场景落地")]),_:1})]),e("li",null,[s(t,{to:"#超时订单回收执行原理"},{default:i(()=>[n("超时订单回收执行原理")]),_:1})]),e("li",null,[s(t,{to:"#超时订单回收程序集场景"},{default:i(()=>[n("超时订单回收程序集场景")]),_:1})]),e("li",null,[s(t,{to:"#schedulemaster集群"},{default:i(()=>[n("ScheduleMaster集群")]),_:1})]),e("li",null,[s(t,{to:"#worker节点集群应用"},{default:i(()=>[n("Worker节点集群应用")]),_:1})]),e("li",null,[s(t,{to:"#schedulemaster集群原理"},{default:i(()=>[n("ScheduleMaster集群原理")]),_:1})]),e("li",null,[s(t,{to:"#master节点集群应用"},{default:i(()=>[n("Master节点集群应用")]),_:1})])])]),e("li",null,[s(t,{to:"#api自定义任务"},{default:i(()=>[n("API自定义任务")]),_:1}),e("ul",null,[e("li",null,[s(t,{to:"#api-server-对接流程"},{default:i(()=>[n("API Server 对接流程")]),_:1})])])])])]),He,e("p",null,[e("a",Pe,[n("分布式任务调度 ScheduleMaster "),s(a)])]),Ie,e("p",null,[e("a",De,[n("ScheduleMaster"),s(a)]),n("是分布式任务调度系统,是国内的一位开发者写的。简称：集中任务调度系统，最简单的理解 ScheduleMaster，就是对不同的系统里面的调度任务做统一管理的框架。")]),Re])}const Ee=d(Ae,[["render",Ne],["__file","schedule_master001.html.vue"]]);export{Ee as default};
