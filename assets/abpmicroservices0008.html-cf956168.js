import{_ as p,r as i,o as l,c,a as n,b as t,w as e,d as s,e as o}from"./app-c1c3c937.js";const u="/images/abpmicroservices/micro008/abpmicroservices0008_0001image.png",d="/images/abpmicroservices/micro008/abpmicroservices0008_0002image.png",r="/images/abpmicroservices/micro008/abpmicroservices0008_0003image.png",v="/images/abpmicroservices/micro008/abpmicroservices0008_0004image.png",m={},k=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),b={class:"table-of-contents"},g=o('<h2 id="微服务日志中心" tabindex="-1"><a class="header-anchor" href="#微服务日志中心" aria-hidden="true">#</a> 微服务日志中心</h2><h3 id="什么是日志中心" tabindex="-1"><a class="header-anchor" href="#什么是日志中心" aria-hidden="true">#</a> 什么是日志中心</h3><p>举例说明：在做的各位有没有在读小学的，都是读过小学的，我们读小学的时候，经常做一个事情，老师要求我们写日记，我们感觉非常烦，那么，日记记录的是什么，是我们每一天做的事情。专业表述，日记是不是用来记录每天小活动状态，<br> 同理，在软件中，为了记录软件的运行状态，那么记录这种状态的叫做日志<br> 日记是用来记录人的状态，那么日志是用来记录软件系统的状态。<br> 日记组成：时间，地点，做了什么，（条件和结果）<br> 日志组成：时间，类，方法信息（输入参数和输出结果）</p><p><strong>什么是日志中心</strong> 就是统一记录多个系统运行日志，就叫做日志中心。</p><h3 id="为什么要使用日志中心" tabindex="-1"><a class="header-anchor" href="#为什么要使用日志中心" aria-hidden="true">#</a> 为什么要使用日志中心</h3><p>微服务系统中使用日志中心<br> 1、微服务系统运行正常，一切正常的情况下，不需要使用日志中心。<br> 2、微服务系统运行异常<br> 2.1 微服务系统内部出现了异常，无法进行排查 2.2 微服务系统调用过程出现了异常，定位日志问题非常麻烦，一会在这个地方用，一会在那个地方，不是非常好维护，在这两种情况下，所以就出现了日志中心，来统一排查问题。</p><h3 id="日志中心框架" tabindex="-1"><a class="header-anchor" href="#日志中心框架" aria-hidden="true">#</a> 日志中心框架</h3><p>ELK:ELK 是三个开源软件的缩写，分表表示：Elasticsearch,Logstash,Kibana</p><p><strong>为什么选择 ELK</strong><br> 比较不同的日志框架<br> 对于目前 ELK 成为了微服务系统和分布式系统的主流，在市面上还没有其他的日志中心可选。<br> 这个时候需要和其他对比，只有对比才有效果，就是他的优势在哪里，其他日志中心框架的缺陷在哪里</p><h2 id="微服务中如何使用-elk" tabindex="-1"><a class="header-anchor" href="#微服务中如何使用-elk" aria-hidden="true">#</a> 微服务中如何使用 ELK</h2><p><strong>ELK 组成</strong> Logstash:日志收集，处理器<br> Elasticserach:日志存储器<br> Kibana:日志可视化分析器（webui）<br> 在这三个组里面，Logstash 是核心地位</p><p><strong>Logstash 组成</strong><br> 客户端：收集日志=====客户端有哪些 NLog,Log4<br> 服务端：接受客户端收集来的日志进行进行处理。</p><p><strong>微服务集成 ELK 集成架构图</strong></p><p><img src="'+u+'" alt="Alt text"></p><p><img src="'+d+`" alt="Alt text"></p><h2 id="微服务中使用-elk" tabindex="-1"><a class="header-anchor" href="#微服务中使用-elk" aria-hidden="true">#</a> 微服务中使用 ELK</h2><p>条件<br> 1、微服务系统<br> 2、Elasticsearch 7.10.1<br> 3、Logstash 7.10.1<br> 4、Kibana 7.10.1<br> 5、NLog<br> 步骤<br> 1、微服务系统操作<br> 1.1 微服务系统已经准备好<br> 2、Elasticsearch 7.10.1 操作<br> 2.1 Elasticsearch 下载<br> ​ 下载地址：https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-10-1<br> ​ 文档地址：https://www.elastic.co/guide/en/elasticsearch/reference/6.6/index.html</p><p>2.2 Elasticsearch 7.10.1 下载<br> ​ 解压后，在 elasticsearch-7.10.1/config 目录下，在 elasticsearch.yml 内配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>network.host: <span class="token number">0.0</span>.0.0
增加
 // thread_pool.bulk.queue_size: <span class="token number">1000</span>    <span class="token number">6.0</span>版本的配置，7.0已经去掉   参考配置：  https://discuss.elastic.co/t/unknown-setting-thread-pool-bulk-queue-size/180120

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​2.3 Elasticsearch 7.10.1 启动</p><p>解压后，在 elasticsearch-7.10.1/bin 目录下，双击启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	elasticsearch.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.4 Elasticsearch 7.10.1 访问</p><p>​ 浏览器输入：http://localhost:9200,显示结果，启动成功</p><p>3、Logstash 7.10.1 操作</p><p>​ 3.1 Logstash 7.10.1 下载</p><p>​ 下载地址：https://www.elastic.co/cn/downloads/past-releases/logstash-7-10-1</p><p>​ 文档地址：https://www.elastic.co/guide/en/logstash/7.10/index.html</p><p>​ 3.2 Logstash 7.10.1 配置</p><p>​ 解压后，在 logstash-7.10.1/config 目录下，创建 logstash.conf 文件，在其中添加配置信息</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>input <span class="token punctuation">{</span>
    tcp <span class="token punctuation">{</span>
        port =<span class="token punctuation">&gt;</span> &quot;9900&quot;
        type =<span class="token punctuation">&gt;</span> &quot;microservice<span class="token punctuation">-</span>log&quot;
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
output <span class="token punctuation">{</span>
  elasticsearch <span class="token punctuation">{</span>
        hosts =<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9200&quot;</span><span class="token punctuation">]</span>
        index =<span class="token punctuation">&gt;</span> &quot;microservice<span class="token punctuation">-</span>%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
        document_id =<span class="token punctuation">&gt;</span> &quot;%<span class="token punctuation">{</span>@timestamp<span class="token punctuation">}</span>&quot;
		<span class="token comment">#user =&gt; &quot;elastic&quot;</span>
		<span class="token comment">#password =&gt; &quot;changeme&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.3 Logstash 7.10.1 启动 ，进入 bin 目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>logstash <span class="token parameter variable">-f</span>  <span class="token punctuation">..</span>/config/logstash.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 3.4 Logstash 7.10.1 访问</p><p>​ 浏览器输入：http://localhost:9600,显示结果，启动成功</p><p>4、Kibana 7.10.1 操作</p><p>​ 4.1 Kibana 7.10.1 下载</p><p>​ 下载地址：https://www.elastic.co/cn/downloads/past-releases/kibana-6-6-0</p><p>​ 文档地址：https://www.elastic.co/guide/en/kibana/6.6/index.html</p><p>​ 4.2 Kibana 7.10.1 配置</p><p>​ 解压后，在 kibana-7.10.1-windows-x86_64/config 目录下，打开 kibana.yml 文件，在其中添加配置信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server.port: <span class="token number">5601</span>
server.host: <span class="token string">&quot;localhost&quot;</span>
elasticsearch.hosts: <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9200&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.3 Kibana 7.10.1 启动</p><p>在 kibana-7.10.1-windows-x86_64/bin 目录下,双击</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kibana.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​3.4 Logstash 7.10.1 访问</p><p>​ 浏览器输入：http://localhost:5601,显示结果，启动成功</p><p>5、微服务系统操作</p><p>​ 5.1 NLog 操作</p><p>​ 5.1.1 NLog 下载</p><p>​ 在 LKN.MicroService.Core 微服务使用 Nuegt 安装 NLog.Web.AspNetCore</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Nuget NLog.Web.AspNetCore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​5.1.2 NLog 配置</p><p>在 LKN.MicroService.AggregateService 微服务中创建 nlog.config 文件，内容为</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nlog</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.nlog-project.org/schemas/NLog.xsd<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">autoReload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">internalLogLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Warn<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">internalLogFile</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>internal-nlog.txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--define various log targets--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>targets</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logstash<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xsi:</span>type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Network<span class="token punctuation">&quot;</span></span> <span class="token attr-name">address</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tcp://127.0.0.1:9900<span class="token punctuation">&quot;</span></span> <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${longdate}|\${logger}|\${uppercase:\${level}}|\${message} \${exception}<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>targets</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rules</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">writeTo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logstash<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rules</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nlog</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 5.1.3 NLog 加载</p><p>​ 在 LKN.MicroService.AggregateService 微服务中打开 Program.cs,配置内容为</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code> public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =&gt;
                {

                    webBuilder.UseStartup&lt;Startup&gt;().UseNLog();
                    // 1、使用NlLog 默认加载 nlog.config
                }).UseNLog();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何将-kibaba-设置成为中文显示" tabindex="-1"><a class="header-anchor" href="#如何将-kibaba-设置成为中文显示" aria-hidden="true">#</a> 如何将 Kibaba 设置成为中文显示</h2><p>条件</p><p>1、logstash.yml</p><p>步骤</p><p>1、先打开 logstash.yml 文件 2、然后在 logstash.yml 文件地步增加</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>        i18n.locale: <span class="token string">&quot;zh-CN&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、然后重启 kibana</p><h2 id="kibaba-如何区分正常日志和异常日志" tabindex="-1"><a class="header-anchor" href="#kibaba-如何区分正常日志和异常日志" aria-hidden="true">#</a> Kibaba 如何区分正常日志和异常日志</h2><p>正常日志 Info</p><p>异常日志 Error</p><p>条件</p><p>1、Message 字段编辑</p><div class="custom-container tip"><p class="custom-container-title">步骤</p><p>1、进入 Kibaba 工作区，选择索引模式</p><p>2、创建索引模式，输入日志索引，</p><p>例如 microservice-*，匹配索引，然后创建该索引模式，方便搜索</p><p>3、然后选择创建好的索引，选择 message 字段(存储日志信息)</p><p>4、然后选择编辑该字段(格式化字段)，将 Error 日志设置成为红色</p></div><p>设置 Error 配置成红色</p><p><img src="`+r+`" alt="Alt text"></p><p>5、最后保存字段设置</p><h2 id="kibana将日志进行报表展示-可视化" tabindex="-1"><a class="header-anchor" href="#kibana将日志进行报表展示-可视化" aria-hidden="true">#</a> Kibana将日志进行报表展示(可视化)</h2><p>条件</p><p>1、仪表盘</p><p>步骤</p><p>1、先进入kibana首页</p><p>2、然后创建新的仪表盘，选择折线图报表可视化</p><p>3、然后选择其中一个索引</p><pre><code>例如： microservice-*索引
</code></pre><p>4、然后对于折线图的X轴和Y轴进行字段设置</p><pre><code>字段为数据字段

统计一段时间内的平均值
</code></pre><h2 id="logstash如何收集微服务系统日志" tabindex="-1"><a class="header-anchor" href="#logstash如何收集微服务系统日志" aria-hidden="true">#</a> Logstash如何收集微服务系统日志</h2><p>条件</p><p>1、logstash.conf文件</p><p>步骤</p><p>1、Teamservice，MemberService增加NLog配置</p><p>先在Teamservice，MemberService分别加入nlog.config配置</p><p>然后在Progarm文件中增加</p><div class="language-c# line-numbers-mode" data-ext="c#"><pre class="language-c#"><code>  public static IHostBuilder CreateHostBuilder(string[] args) =&gt;
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =&gt;
                { 
 				webBuilder.UseStartup&lt;Startup&gt;().UseNLog();
                // 1、使用NlLog 默认加载 nlog.config
            }).UseNLog();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、logstash配置</p><p>1、打开logstash.conf文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>input <span class="token punctuation">{</span>
   tcp <span class="token punctuation">{</span>
       port =<span class="token punctuation">&gt;</span> &quot;9900&quot;
       type =<span class="token punctuation">&gt;</span> &quot;aggregateservice<span class="token punctuation">-</span>log&quot;
   <span class="token punctuation">}</span>
    tcp <span class="token punctuation">{</span>
       port =<span class="token punctuation">&gt;</span> &quot;9901&quot;
       type =<span class="token punctuation">&gt;</span> &quot;teamservice<span class="token punctuation">-</span>log&quot;
   <span class="token punctuation">}</span> 
    tcp <span class="token punctuation">{</span>
       port =<span class="token punctuation">&gt;</span> &quot;9902&quot;
       type =<span class="token punctuation">&gt;</span> &quot;memberservice<span class="token punctuation">-</span>log&quot;
   <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
   
output <span class="token punctuation">{</span>
if <span class="token punctuation">[</span>type<span class="token punctuation">]</span> == &quot;aggregateservice<span class="token punctuation">-</span>log&quot; <span class="token punctuation">{</span>
   elasticsearch <span class="token punctuation">{</span> 
       hosts =<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9200&quot;</span><span class="token punctuation">]</span>
       index =<span class="token punctuation">&gt;</span> &quot;aggregateservice<span class="token punctuation">-</span>%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
        document_id =<span class="token punctuation">&gt;</span> &quot;%<span class="token punctuation">{</span>@timestamp<span class="token punctuation">}</span>&quot;
   	<span class="token comment">#user =&gt; &quot;elastic&quot;</span>
   	<span class="token comment">#password =&gt; &quot;changeme&quot;</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 if <span class="token punctuation">[</span>type<span class="token punctuation">]</span> == &quot;teamservice<span class="token punctuation">-</span>log&quot; <span class="token punctuation">{</span>
   elasticsearch <span class="token punctuation">{</span> 
       hosts =<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9200&quot;</span><span class="token punctuation">]</span>
       index =<span class="token punctuation">&gt;</span> &quot;teamservice<span class="token punctuation">-</span>%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
        document_id =<span class="token punctuation">&gt;</span> &quot;%<span class="token punctuation">{</span>@timestamp<span class="token punctuation">}</span>&quot;
   	<span class="token comment">#user =&gt; &quot;elastic&quot;</span>
   	<span class="token comment">#password =&gt; &quot;changeme&quot;</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
 if <span class="token punctuation">[</span>type<span class="token punctuation">]</span> == &quot;memberservice<span class="token punctuation">-</span>log&quot; <span class="token punctuation">{</span>
   elasticsearch <span class="token punctuation">{</span> 
       hosts =<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9200&quot;</span><span class="token punctuation">]</span>
       index =<span class="token punctuation">&gt;</span> &quot;memberservice<span class="token punctuation">-</span>%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
        document_id =<span class="token punctuation">&gt;</span> &quot;%<span class="token punctuation">{</span>@timestamp<span class="token punctuation">}</span>&quot;
   	<span class="token comment">#user =&gt; &quot;elastic&quot;</span>
   	<span class="token comment">#password =&gt; &quot;changeme&quot;</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、然后启动logstash,进入logstash的bin目录 cmd执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>logstash.bat <span class="token parameter variable">-f</span> <span class="token punctuation">..</span>/config/logstash.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、在kibana中展示效果</p><h2 id="nlog如何保证微服务日志高并发-高可用" tabindex="-1"><a class="header-anchor" href="#nlog如何保证微服务日志高并发-高可用" aria-hidden="true">#</a> NLog如何保证微服务日志高并发/高可用</h2><p>条件</p><p>1、RabbitMQ</p><p>2、Nlog.RabbitMQ.Target</p><p>步骤</p><p>1、先启动RabbitMQ，进入sbin目录</p><p>直接双击启动<code>rabbitmq-server.bat</code></p><p>2、在微服务里面通过nuget安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Nlog.RabbitMQ.Target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、进入微服务项目nlog.conf文件</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;utf-8&quot; ?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nlog</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.nlog-project.org/schemas/NLog.xsd<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">autoReload</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">internalLogLevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Warn<span class="token punctuation">&quot;</span></span>
       <span class="token attr-name">internalLogFile</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>log/internal-nlog.txt<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>extensions</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>add</span> <span class="token attr-name">assembly</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Nlog.RabbitMQ.Target<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>extensions</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!--define various log targets--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>targets</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!---最小配置--&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RabbitMQTarget<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name"><span class="token namespace">xsi:</span>type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RabbitMQ<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name">username</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>guest<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name">password</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>guest<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name">hostname</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>localhost<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name">exchange</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>aggregateservice-log2<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name">exchangeType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>direct<span class="token punctuation">&quot;</span></span>
				      <span class="token attr-name">topic</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>logstash<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5672<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name">vhost</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name">layout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\${longdate}|\${logger}|\${uppercase:\${level}}|\${message} \${exception}<span class="token punctuation">&quot;</span></span>
					  <span class="token attr-name">UseLayoutAsMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>targets</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rules</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>logger</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>*<span class="token punctuation">&quot;</span></span> <span class="token attr-name">minlevel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Info<span class="token punctuation">&quot;</span></span> <span class="token attr-name">writeTo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>RabbitMQTarget<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rules</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nlog</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后进入logstash里面的config目录</p><p>然后创建<code>logstash-rabbitmq.conf</code></p><p>编辑内容</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>input <span class="token punctuation">{</span>
    rabbitmq <span class="token punctuation">{</span>
        <span class="token comment"># 队列的主机</span>
            host =<span class="token punctuation">&gt;</span> &quot;localhost&quot;
            <span class="token comment"># 默认为guest</span>
            password =<span class="token punctuation">&gt;</span> &quot;guest&quot;
            <span class="token comment"># 消息服务器端口，默认为5672</span>
            port =<span class="token punctuation">&gt;</span> 5672
            <span class="token comment"># 默认为&quot;&quot;</span>
            queue =<span class="token punctuation">&gt;</span> &quot;&quot;
            <span class="token comment"># 默认值为true</span>
            ack =<span class="token punctuation">&gt;</span> true
            <span class="token comment"># 默认值为{}</span>
            arguments =<span class="token punctuation">&gt;</span> <span class="token punctuation">{</span> &quot;x<span class="token punctuation">-</span>ha<span class="token punctuation">-</span>policy&quot; =<span class="token punctuation">&gt;</span> &quot;all&quot; <span class="token punctuation">}</span>
            <span class="token comment"># 默认值为false</span>
            auto_delete =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 默认值为true</span>
            automatic_recovery =<span class="token punctuation">&gt;</span> true
            <span class="token comment"># 默认值为1秒</span>
            connect_retry_interval =<span class="token punctuation">&gt;</span> 1
            <span class="token comment"># 没有默认值，超时时间为无限</span>
            connection_timeout =<span class="token punctuation">&gt;</span> 1000
            <span class="token comment"># 默认值为false</span>
            durable =<span class="token punctuation">&gt;</span> true
            <span class="token comment"># 队列的交换器信息</span>
            exchange =<span class="token punctuation">&gt;</span> &quot;orderservice&quot;
            <span class="token comment"># 队列的交换器信息</span>
            exchange_type =<span class="token punctuation">&gt;</span> &quot;topic&quot;
            <span class="token comment"># 默认值为false</span>
            exclusive =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 没有默认值，但是不指定的时候未60秒，秒为单位</span>
            heartbeat =<span class="token punctuation">&gt;</span> 60
            <span class="token comment"># 默认值为logstash，路由键</span>
            key =<span class="token punctuation">&gt;</span> &quot;orderservicekey&quot;
            <span class="token comment"># 默认值为false，启动此功能保存元数据会影响性能</span>
            metadata_enabled =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 默认值为false，当设置true的时候表明为被动队列，则在消息服务器上，此队列已经存在</span>
            passive =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 默认为256</span>
            prefetch_count =<span class="token punctuation">&gt;</span> 256
            <span class="token comment"># 下面是公共配置</span>
            <span class="token comment"># 设置了type为system</span>
            type =<span class="token punctuation">&gt;</span> &quot;orderservice&quot; 
            <span class="token comment"># 默认line</span>
            codec =<span class="token punctuation">&gt;</span> &quot;json&quot;
            <span class="token comment"># 默认值为true</span>
            enable_metric =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 指定此数据输入id为input1</span>
            id =<span class="token punctuation">&gt;</span> input1
            <span class="token comment"># 添加了键位key值为value的数据到时间</span>
            add_field =<span class="token punctuation">&gt;</span> <span class="token punctuation">{</span>
              &quot;key&quot; =<span class="token punctuation">&gt;</span> &quot;value&quot;
            <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    rabbitmq <span class="token punctuation">{</span>
        <span class="token comment"># 队列的主机</span>
            host =<span class="token punctuation">&gt;</span> &quot;localhost&quot;
            <span class="token comment"># 默认为guest</span>
            password =<span class="token punctuation">&gt;</span> &quot;guest&quot;
            <span class="token comment"># 消息服务器端口，默认为5672</span>
            port =<span class="token punctuation">&gt;</span> 5672
            <span class="token comment"># 默认为&quot;&quot;</span>
            queue =<span class="token punctuation">&gt;</span> &quot;&quot;
            <span class="token comment"># 默认值为true</span>
            ack =<span class="token punctuation">&gt;</span> true
            <span class="token comment"># 默认值为{}</span>
            arguments =<span class="token punctuation">&gt;</span> <span class="token punctuation">{</span> &quot;x<span class="token punctuation">-</span>ha<span class="token punctuation">-</span>policy&quot; =<span class="token punctuation">&gt;</span> &quot;all&quot; <span class="token punctuation">}</span>
            <span class="token comment"># 默认值为false</span>
            auto_delete =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 默认值为true</span>
            automatic_recovery =<span class="token punctuation">&gt;</span> true
            <span class="token comment"># 默认值为1秒</span>
            connect_retry_interval =<span class="token punctuation">&gt;</span> 1
            <span class="token comment"># 没有默认值，超时时间为无限</span>
            connection_timeout =<span class="token punctuation">&gt;</span> 1000
            <span class="token comment"># 默认值为false</span>
            durable =<span class="token punctuation">&gt;</span> true
            <span class="token comment"># 队列的交换器信息</span>
            exchange =<span class="token punctuation">&gt;</span> &quot;internalgateway&quot;
            <span class="token comment"># 队列的交换器信息</span>
            exchange_type =<span class="token punctuation">&gt;</span> &quot;topic&quot;
            <span class="token comment"># 默认值为false</span>
            exclusive =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 没有默认值，但是不指定的时候未60秒，秒为单位</span>
            heartbeat =<span class="token punctuation">&gt;</span> 60
            <span class="token comment"># 默认值为logstash，路由键</span>
            key =<span class="token punctuation">&gt;</span> &quot;internalgatewaykey&quot;
            <span class="token comment"># 默认值为false，启动此功能保存元数据会影响性能</span>
            metadata_enabled =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 默认值为false，当设置true的时候表明为被动队列，则在消息服务器上，此队列已经存在</span>
            passive =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 默认为256</span>
            prefetch_count =<span class="token punctuation">&gt;</span> 256
            <span class="token comment"># 下面是公共配置</span>
            <span class="token comment"># 设置了type为system</span>
            type =<span class="token punctuation">&gt;</span> &quot;internalgateway&quot; 
            <span class="token comment"># 默认line</span>
            codec =<span class="token punctuation">&gt;</span> &quot;json&quot;
            <span class="token comment"># 默认值为true</span>
            enable_metric =<span class="token punctuation">&gt;</span> false
            <span class="token comment"># 指定此数据输入id为input1</span>
            id =<span class="token punctuation">&gt;</span> input2
            <span class="token comment"># 添加了键位key值为value的数据到时间</span>
            add_field =<span class="token punctuation">&gt;</span> <span class="token punctuation">{</span>
              &quot;key&quot; =<span class="token punctuation">&gt;</span> &quot;value&quot;
            <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
    
output <span class="token punctuation">{</span>
   <span class="token comment"># elasticsearch { </span>
  <span class="token comment">#      hosts =&gt; [&quot;http://localhost:9200&quot;]</span>
   <span class="token comment">#     index =&gt; &quot;microservice-%{+YYYY.MM.dd}&quot;</span>
		<span class="token comment">#document_id =&gt; &quot;%{@timestamp}&quot;</span>
		<span class="token comment">#user =&gt; &quot;elastic&quot;</span>
		<span class="token comment">#password =&gt; &quot;changeme&quot;</span>
  <span class="token comment">#}</span>

  if <span class="token punctuation">[</span>type<span class="token punctuation">]</span> == &quot;orderservice&quot; <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span> 
        hosts =<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9200&quot;</span><span class="token punctuation">]</span>
        index =<span class="token punctuation">&gt;</span> &quot;orderservice<span class="token punctuation">-</span>%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
        document_id =<span class="token punctuation">&gt;</span> &quot;%<span class="token punctuation">{</span>@timestamp<span class="token punctuation">}</span>&quot;
        <span class="token comment">#user =&gt; &quot;elastic&quot;</span>
        <span class="token comment">#password =&gt; &quot;changeme&quot;</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  if <span class="token punctuation">[</span>type<span class="token punctuation">]</span> == &quot;internalgateway&quot; <span class="token punctuation">{</span>
    elasticsearch <span class="token punctuation">{</span> 
        hosts =<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span><span class="token string">&quot;http://localhost:9200&quot;</span><span class="token punctuation">]</span>
        index =<span class="token punctuation">&gt;</span> &quot;internalgateway<span class="token punctuation">-</span>%<span class="token punctuation">{</span>+YYYY.MM.dd<span class="token punctuation">}</span>&quot;
        document_id =<span class="token punctuation">&gt;</span> &quot;%<span class="token punctuation">{</span>@timestamp<span class="token punctuation">}</span>&quot;
        <span class="token comment">#user =&gt; &quot;elastic&quot;</span>
        <span class="token comment">#password =&gt; &quot;changeme&quot;</span>
     <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h2><p>kibana直接操作Elasticsearch 7</p><p>NLog详细文档地址：https://nlog-project.org/config/</p><p>logstash文档地址：</p><p>logstash文档官网地址：https://www.elastic.co/guide/en/logstash/7.10/index.html</p><p>Elasticsearch 7使用地址：https://www.letianbiji.com/elasticsearch/es7-quick-start.html</p><p>kibana文档地址：https://www.elastic.co/guide/en/kibana/7.10/index.html</p><h2 id="微服务阶段性总结" tabindex="-1"><a class="header-anchor" href="#微服务阶段性总结" aria-hidden="true">#</a> 微服务阶段性总结</h2><p>1、微服务的核心概念：理解，应用场景，微服务拆分，微服务架构类型，微服务落地的技术ABP vNext DDD .Net5。</p><p>​ 2、微服务电商项目落地。</p><p>​ 1、 ABP vNext DDD .Net5</p><p>​ 2、如何创建微服务</p><p>​ 3、微服务调用</p><p>​ 4、module模块</p><p>​ 5、microservices模块</p><p>​ 总结:从0到1 构建一个微服务 ，从1基础运行微服务</p><p>​ 3、微服务通信。</p><p>​ 1、创建聚合层服务</p><p>​ 2、聚合服务和危微服务之间通信。HttpClient。</p><p>​ 4、微服务内部网关</p><p>​ 1、微服务之间通信。</p><p>​ 2、聚合和微服务之间通信。</p><p>​ ocelot</p><p>​ 1、路由</p><p>​ 2、负载均衡</p><p>​ 3、限流</p><p>​ 4、熔断</p><p>​ 5、缓存</p><p>​ 5、微服务注册中心</p><p>​ 1、consul</p><p>​ 2、内部api网关集成</p><p>​ 3、consul集群</p><p>​ 6、微服务外部网关</p><p>​ 1、外部网关概念</p><p>​ 2、ocelot</p><p>​ 1、路由</p><p>​ 2、负载均衡</p><p>​ 3、限流</p><p>​ 4、熔断</p><p>​ 5、缓存</p><p>​ 3、集成了consul</p><p>​ 7、微服务配置中心</p><p>​ 1、配置中心概念及nacos</p><p>​ 2、管理所有appsetting.json文件</p><p>​ 3、nacos集群</p><p>​ 8、微服务事件总线(2次课件)</p><p>​ 1、事件总线的概念(异步)</p><p>​ 2、cap</p><p>​ 3、发布消息失败</p><p>​ 4、消费消息失败</p><p>​ 5、人工消息</p><p>​ 9、微服务-支付微服务落地</p><p>​ 1、从0到1构建支付微服务</p><p>​ 2、从1到一步一步运行支付微服务</p><p>​ abp vnext DDD .net5</p><p>​ 10、微服务链路监控(执行时间—&gt;性能)</p><p>​ 1、链路监控概念</p><p>​ 2、skywalking apache</p><p>​ 3、ES</p><p>​ 4、同步微服务链路监控</p><p>​ 5、异步微服务链路监控</p><p>​ 11、微服务日志中心(执行过程—&gt;日志)—执行过程(出现了异常，快速解决)</p><p>​ 1、日志中心概念</p><p>​ 2、ELK elasticsearch logstash kibana</p><p>​ 3、同步日志 nlog tcp</p><p>​ 4、异步日志 nlog rabbitmq</p><p>​ 5、如何收集所有微服务的日志。</p><p>还没有讲下周</p><p>​ 12、微服务资源监控。(CPU 内存 磁盘)。监控</p><p>​ 13、微服务分布式权限。 ids4</p><p>​ 14、微服务分布式事务。同步分布式(同时成功，同时失败)</p><p>下下周：docker /k8s，CI/CD</p><p>下下下周：mongodb redis es</p><p>大家代码建议</p><p>1、备课分支</p><p>2、开始讲课分支</p><p>3、课程完成后分支</p><p>做事：不断精讲。掌握未来。</p><p>做成某意见事情。精讲（优化，持续进步）</p><p>​ 精讲：内卷。只专注于做.net。排斥外界新事物。</p><p>​ 精讲时候：原则1、先把自己的事情不断进步 2、接触新事物。</p><p>​ 空调。 降温 。1、扇子（类型非常多。精讲—&gt; 100种类型。变成了内卷）。2、电风扇(100多种)。3、空调(不断精讲)—。架构。单体(100种类型)–分布式–微服务—。</p><p>​ 跳槽：一直不跳槽，没有发展，一直跳槽，减低信誉度。</p><p>​ 总结：事务是发展的，持续精讲(学习+进步)，未来潜力无限。懒惰之心。意志力。阻碍，苦难，挫折。</p><p>​ 任何事情(行为)都是发展的。做预测了。</p><p>​ 扫地(精讲过程)保洁公司。做验证码–(精讲过程)–验证码公司</p><p>​ 写代码–(精讲过程)–代码公司</p><p>代码维护：coding 理解成github gitee</p><h2 id="微服务阶段性答疑" tabindex="-1"><a class="header-anchor" href="#微服务阶段性答疑" aria-hidden="true">#</a> 微服务阶段性答疑</h2><p>skywaking中的服务、实例、端点分别是什么 服务：微服务名称(分组)</p><p>实例：微服务实例(运行实例)</p><p>端点：微服务实例接口(断点)</p><p>consul一个服务重复注册(同一个服务实例，同一个端口)，就是老师上课的consul代码，如何解决？ 方案：1、实例ID相同。</p><p>​ 2、关闭实例，实例注销。</p><p>Java和Go都是跨平台的，Java开发出来的框架需要安装jdk环境；Go貌似不需要诶（例如：Consul）这是为什么呢 原因：语言的精讲结果导致的。</p><p>面向对象，Go已经把环境打包了。</p><p>4、微服务远程接口，client类库中，可以加用户权限吗？如果要加的话，令牌怎么传呢？ 答案：可以加</p><p>内部网关中路由匹配为什么使用这样的呢，</p><p><img src="`+v+'" alt="Alt text"></p><p>是为使用自动api控制器，所以才有。</p><p>如果没有，自动api控制器，就无法发现微服务的接口(端点)</p><p>从链路中看consul太消耗时间了，那如何优化，你上次说用cache，但是具体怎么使用，不知道。 原因：consul消耗时间，http直接调用导致的。</p><p>方案：修改源码，或者增加扩展代码。</p><p>cap 是通过发布订阅消息来实现异步通信的，cap 发布消息之后，如果订阅消息的服务有多个节点，cap 是怎么保证只有一个节点处理消息的，是cap 内置的 rabbit mq 实现的吗？ 答案：是的。</p><p>原因：如何，同一个服务启动的不同实例，监听的是同一个队列</p><p>从链路中看，nacos加载配置太消耗时间，具体怎么优化？ 方案：启动的时候，就加载了。</p><p>老师，讲事件总线的时候，应用场景有点不太明白，它跳过了网关，请问一下什么时候应该使用事件总线？什么时候不用，而让访问经过网关？ 答案：异步 ，同步。</p><p>什么时候，并发量大小</p><p>如果并发量比较小，就使用同步。</p><p>小于一个微服务实例的最高并发处理能力。例如：聚合服务。200 &gt; 150</p><p>如果并发量比较大，就使用异步。</p><p>大于一个微服务实例的最高并发处理能力。例如：聚合服务。200 &lt; 300</p><p>如何压测出微服务并发处理能力</p><p>1、压测工具。ab jmeter</p><p>所以：实现异步自动降级成为同步。</p><p>创建订单。如果并发量比较小，默认就使用同步</p><p>如果并发量比较大，升级成为异步</p><p>如果并发量变小，降级成为同步</p><p>工具：配置中心，来进行实现。</p><p>结合elk，微服务监控如何做到有异常发信息给相关的负责人呢 elk，发生了异常。elk没有实现。</p><p>skywalking ，性能，可以实现发送。</p><p>资源监控，就会进行发送。短信，进行发送。</p><p>日志中心我遇到一个问题，就是如果logstash,rabbitmq,elasticsearch都启动的情况下，日志可以正常写到elsticsearch,如果把logstash停止了，然后运行程序，日志写到rabbitmq,然后再启动logstash，日志不会写到elasticsearch，不知什么原因？ 答案：仔细检查一下配置</p><p>怎么将系统当前登录的信息也写到日志里面呢 答案：集成了nlog，loginfo logdebugger。开放级别。</p><p>事件总线 cap 的订阅发布是不是直接使用 rabbitmq 的广播模式也能实现？ cap 的优点是能够持久化received 和 处理的消息么 答案：主题模式，不是广播模式，只集成了主题。</p><p>​ 优点是的。</p><p>网页登录的coding,但没有克隆的时候，没有下载按钮，是我没有下载或克隆权限吗？ 答疑：</p><p>才说只专注于做.net会内卷，那老师是建议学习其它编程语言吗？比如JAVA、phyton? 前提：.net做成为了架构。然后再接触新事物。</p><p>老师，跳槽面试的时候，不会的知识点就说不会吗？还是说一点这个知识关联的知识 答案：原则：不要说不会。如果你说了，面试官，会觉得你不善于思考。排斥新事物。</p><p>虽然没有做过，但是我有思路。面试官看到你的自信。</p><p>新问题。说一下思路，即时说错了，不要怕，你也要尝试去优化，去解决。</p><p>1、自信。</p><p>2、不服输。</p><p>但是，尽量提出好的思路。</p><p>人生：10件事，9件是痛苦，1件是幸福</p><p>持续精讲。</p><p>分布式任务调度会讲解吗 答案：中间件里面讲解过，</p><p>老师就是P1P2P3P6架构2110班的课程，老师能给个不重复的章节列表不，因为不知道后面的课程和之前的课程是否有哪些是重复的， 但是总有不同的知识点。</p><p>微服务调度 hangfire</p>',252);function h(q,f){const a=i("router-link");return l(),c("div",null,[k,n("nav",b,[n("ul",null,[n("li",null,[t(a,{to:"#目录"},{default:e(()=>[s("目录")]),_:1})]),n("li",null,[t(a,{to:"#微服务日志中心"},{default:e(()=>[s("微服务日志中心")]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#什么是日志中心"},{default:e(()=>[s("什么是日志中心")]),_:1})]),n("li",null,[t(a,{to:"#为什么要使用日志中心"},{default:e(()=>[s("为什么要使用日志中心")]),_:1})]),n("li",null,[t(a,{to:"#日志中心框架"},{default:e(()=>[s("日志中心框架")]),_:1})])])]),n("li",null,[t(a,{to:"#微服务中如何使用-elk"},{default:e(()=>[s("微服务中如何使用 ELK")]),_:1})]),n("li",null,[t(a,{to:"#微服务中使用-elk"},{default:e(()=>[s("微服务中使用 ELK")]),_:1})]),n("li",null,[t(a,{to:"#如何将-kibaba-设置成为中文显示"},{default:e(()=>[s("如何将 Kibaba 设置成为中文显示")]),_:1})]),n("li",null,[t(a,{to:"#kibaba-如何区分正常日志和异常日志"},{default:e(()=>[s("Kibaba 如何区分正常日志和异常日志")]),_:1})]),n("li",null,[t(a,{to:"#kibana将日志进行报表展示-可视化"},{default:e(()=>[s("Kibana将日志进行报表展示(可视化)")]),_:1})]),n("li",null,[t(a,{to:"#logstash如何收集微服务系统日志"},{default:e(()=>[s("Logstash如何收集微服务系统日志")]),_:1})]),n("li",null,[t(a,{to:"#nlog如何保证微服务日志高并发-高可用"},{default:e(()=>[s("NLog如何保证微服务日志高并发/高可用")]),_:1})]),n("li",null,[t(a,{to:"#扩展"},{default:e(()=>[s("扩展")]),_:1})]),n("li",null,[t(a,{to:"#微服务阶段性总结"},{default:e(()=>[s("微服务阶段性总结")]),_:1})]),n("li",null,[t(a,{to:"#微服务阶段性答疑"},{default:e(()=>[s("微服务阶段性答疑")]),_:1})])])]),g])}const _=p(m,[["render",h],["__file","abpmicroservices0008.html.vue"]]);export{_ as default};
