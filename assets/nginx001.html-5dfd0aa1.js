import{_ as p,a as r,b as u,c as d,d as v,e as o,f as m,g as b}from"./nginx_008image-20af4478.js";import{_ as k,r as c,o as _,c as h,a as n,b as a,w as i,d as s,e as l}from"./app-c1c3c937.js";const g={},x=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),q={class:"table-of-contents"},f=l('<h2 id="分布式中间件-nginx" tabindex="-1"><a class="header-anchor" href="#分布式中间件-nginx" aria-hidden="true">#</a> 分布式中间件-Nginx</h2><h3 id="什么是nginx" tabindex="-1"><a class="header-anchor" href="#什么是nginx" aria-hidden="true">#</a> 什么是Nginx</h3><blockquote><p>Nginx是高性能HTTP服务器，反向代理服务器，邮件代理服务器，TCP/UDP反向代理服务器<br><a href="/file/nginx/Nginx%E5%AE%8C%E6%95%B4%E8%AF%BE%E4%BB%B6.pdf">Nginx完整课件.pdf</a></p></blockquote><h3 id="什么地方使用nginx" tabindex="-1"><a class="header-anchor" href="#什么地方使用nginx" aria-hidden="true">#</a> 什么地方使用Nginx</h3><blockquote><p>Nginx主要用在集群系统中。</p></blockquote><h3 id="集群系统中为什么要使用nginx" tabindex="-1"><a class="header-anchor" href="#集群系统中为什么要使用nginx" aria-hidden="true">#</a> 集群系统中为什么要使用Nginx</h3><blockquote><p>单个系统，主要用来处理客户端的请求，一个系统处理客户端的请求量是有限的，当客户端的并发量，操过了系统处理的并发能力，就会导致系统处理速度变慢，也就是所谓的性能下降。所以，为了提升性能。 因此我们需要通过多个实例来分离。所以， 我们会创建多个系统实例，形成的系统就叫做集群系统。可以，集群系统，如何均衡处理客户端的请求？<br> 分流代表技术，就是Nginx。</p></blockquote><blockquote><p>在什么样的集群系统中使用Nginx呢？用的比较多的就是电商集群系统。那么，在电商集群系统中如何落地Nginx？</p></blockquote><blockquote><p>业务场景：创建商品业务场景</p></blockquote><h3 id="集群系统中如何落地nginx" tabindex="-1"><a class="header-anchor" href="#集群系统中如何落地nginx" aria-hidden="true">#</a> 集群系统中如何落地Nginx</h3><blockquote><p>前提：</p></blockquote><ul><li><p>1、电商系统</p></li><li><p>2、Nginx</p></li></ul><blockquote><p>步骤</p></blockquote><ul><li>1、电商集群系统准备</li></ul><blockquote><p>通过VS创建.Net7电商系统 <img src="'+p+'" alt="Alt text"></p></blockquote><blockquote><p>2、Nginx准备</p></blockquote>',16),y={href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"},$=l(`<h3 id="查询商品分流场景落地" tabindex="-1"><a class="header-anchor" href="#查询商品分流场景落地" aria-hidden="true">#</a> 查询商品分流场景落地</h3><p>条件</p><ul><li><p>1、电商集群系统LKN.EBusiness</p></li><li><p>2、Nginx启动</p></li><li><p>3、客户端访问</p></li></ul><blockquote><p>步骤</p></blockquote><blockquote><ul><li>1、先进入到电商集群系统LKN.EBusiness</li></ul></blockquote><blockquote><blockquote><p>1.1 先在电商网站微服务中创建ProductController类</p></blockquote></blockquote><blockquote><blockquote><p>​ 1.2、然后在ProductController类添加代码</p></blockquote></blockquote><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>        /// &lt;summary&gt;
        /// 创建商品
        /// &lt;/summary&gt;
        /// &lt;param name=&quot;productCreateDto&quot;&gt;&lt;/param&gt;
        /// &lt;returns&gt;&lt;/returns&gt;
        [HttpPost]
        public Product CreateProduct(ProductCreateDto productCreateDto)
        {
            Console.WriteLine(&quot;查询商品&quot;);
            return new Product() ;
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>1.3、然后启动电商系统实例一</p></blockquote></blockquote><blockquote><blockquote><p>​ 1.4、然后再启动电商系统实例二</p></blockquote></blockquote><blockquote><p>2、Nginx准备</p></blockquote><blockquote><blockquote><p>​ 2.1 先进入到Nginx中</p></blockquote></blockquote><p><img src="`+r+`" alt="Alt text"></p><blockquote><blockquote><p>2.2 然后打开nginx.conf配置，在里面添加</p></blockquote></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
        server localhost:5001<span class="token punctuation">;</span>
        server localhost:5002<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><blockquote><p>2.3、然后启动Nginx <img src="`+u+'" alt="Alt text"></p></blockquote></blockquote><blockquote><p>3、客户端访问</p></blockquote><blockquote><blockquote><p>​ 3.1、进入到浏览器进行访问</p></blockquote></blockquote><h2 id="查询商品分流nginx原理" tabindex="-1"><a class="header-anchor" href="#查询商品分流nginx原理" aria-hidden="true">#</a> 查询商品分流Nginx原理</h2><h3 id="模块化设计" tabindex="-1"><a class="header-anchor" href="#模块化设计" aria-hidden="true">#</a> 模块化设计</h3><blockquote><p>高度模块化的设计是 Nginx 的架构基础。在 Nginx 中，除了少量的核心代码，其他一切皆为模块。<br> 所有模块间是分层次、分类别的，Nginx 官方共有五大类型的模块：核心模块、配置模块、事件模块、HTTP 模块、mail 模块、stream模块。它们之间的关系如下：</p></blockquote><p><img src="'+d+'" alt="Alt text"></p><blockquote><p>在这 5 种模块中，配置模块和核心模块是与 Nginx 框架密切相关的。而事件模块则是 HTTP 模块和 mail 模块的基础。HTTP 模块和 mail 模块的“地位”类似，它们都是更关注于应用层面。</p></blockquote><h3 id="多进程模型" tabindex="-1"><a class="header-anchor" href="#多进程模型" aria-hidden="true">#</a> 多进程模型</h3><blockquote><p>Nginx之所以为广大码农喜爱，除了其高性能外，还有其优雅的系统架构。与Memcached的经典多线程模型相比，Nginx是经典的多进程模型。Nginx启动后以daemon的方式在后台运行，后台进程包含一个master进程和多个worker进程，具体如下图：</p></blockquote><p><img src="'+v+'" alt="Alt text"></p><h3 id="事件驱动架构" tabindex="-1"><a class="header-anchor" href="#事件驱动架构" aria-hidden="true">#</a> 事件驱动架构</h3><p>Nginx 处理事件的简单模型： <img src="'+o+`" alt="Alt text"></p><blockquote><p>由上图可以看出，处理请求事件时，Nginx 的事件消费者只是被事件分发者进程短期调用而已，这种设计使得网络性能、用户感知的请求时延都得到了提升，每个用户的请求所产生的事件会及时响应，整个服务器的网络吞吐量都会由于事件的及时响应而增大。当然，这也带来一定的要求，即每个事件消费者都不能有阻塞行为，否则将会由于长时间占用事件分发者进程而导致其他事件得不到及时响应，Nginx 的非阻塞特性就是由于它的模块都是满足这个要求的。</p></blockquote><h3 id="虚拟主机" tabindex="-1"><a class="header-anchor" href="#虚拟主机" aria-hidden="true">#</a> 虚拟主机</h3><p><code>ngx_http_core_module</code></p><blockquote><p>​ 作用：虚拟主机就是为了对所有应用系统进行反向代理</p></blockquote><blockquote><p>反向代理 <code>ngx_http_proxy_module</code></p></blockquote><blockquote><p>​ 作用：代理后端服务器。</p></blockquote><blockquote><p>负载均衡 <code>ngx_http_upstream_module</code></p></blockquote><blockquote><p>作用：将流量均分到指定后端实例</p></blockquote><h2 id="查询商品分流场景落地-情况1" tabindex="-1"><a class="header-anchor" href="#查询商品分流场景落地-情况1" aria-hidden="true">#</a> 查询商品分流场景落地-情况1</h2><blockquote><p>情况1：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果5002处理请求比较慢，会导致请求堆积在5002。如何解决请求堆积问题？<br> 方案：最小活跃数算法</p></blockquote><h3 id="如何落地最小活跃数算法" tabindex="-1"><a class="header-anchor" href="#如何落地最小活跃数算法" aria-hidden="true">#</a> 如何落地最小活跃数算法</h3><blockquote><p>条件</p></blockquote><blockquote><p>1、least_conn</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
        least_conn<span class="token punctuation">;</span>
        server localhost:5001<span class="token punctuation">;</span>
        server localhost:5002<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询商品分流场景落地-情况2" tabindex="-1"><a class="header-anchor" href="#查询商品分流场景落地-情况2" aria-hidden="true">#</a> 查询商品分流场景落地-情况2</h3><blockquote><p>情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果5001和5002分别都有缓存，会导致缓存命中下降，请求会回源到数据库中去查询数据，导致性能下降。如何提升性能?</p></blockquote><blockquote><p>方案：<code>Hash一致性算法</code></p></blockquote><h3 id="如何落地hash一致性算法" tabindex="-1"><a class="header-anchor" href="#如何落地hash一致性算法" aria-hidden="true">#</a> 如何落地hash一致性算法？</h3><blockquote><p>条件</p></blockquote><blockquote><p>1、ip_hash</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
        ip_hash<span class="token punctuation">;</span>
        server localhost:5001<span class="token punctuation">;</span>
        server localhost:5002<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询商品分流场景落地-情况3" tabindex="-1"><a class="header-anchor" href="#查询商品分流场景落地-情况3" aria-hidden="true">#</a> 查询商品分流场景落地-情况3</h3><blockquote><p>情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001的时候，5001零时宕机了，会导致请求失败。如何保证请求成功<br> 方案：失败重试</p></blockquote><blockquote><p>如何落地失败重试？<br> 条件<br> 1、max_fails=2 fail_timeout=10s;</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
    
        server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询商品分流场景落地-情况4" tabindex="-1"><a class="header-anchor" href="#查询商品分流场景落地-情况4" aria-hidden="true">#</a> 查询商品分流场景落地-情况4</h3><blockquote><p>情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001的时候，5001永久宕机了，会导致请求失败。如何保证请求成功<br> 方案：<code>故障转移</code></p></blockquote><blockquote><p>如何落地故障转移？<br> 条件<br> 1、自动失败重试</p></blockquote><h3 id="查询商品分流场景落地-情况5" tabindex="-1"><a class="header-anchor" href="#查询商品分流场景落地-情况5" aria-hidden="true">#</a> 查询商品分流场景落地-情况5</h3><blockquote><p>情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001和5002，两个实例同时宕机了，会导致系统不可用，如何保证系统高度可用？<br> 方案：主机备份<br> 如何落地主机备份？<br> 条件</p><blockquote><p>1、backup</p></blockquote></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
    
        server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5003 backup<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询商品分流场景落地-情况6" tabindex="-1"><a class="header-anchor" href="#查询商品分流场景落地-情况6" aria-hidden="true">#</a> 查询商品分流场景落地-情况6</h3><blockquote><p>情况2：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001和5002，两个实例处理能力达到极限的时候，导致系统可能宕机的风险。所以，在有限资源的情况下。我们应如何保证系统不宕机？</p></blockquote><blockquote><p>方案：<code>限流</code></p></blockquote><blockquote><p>如何落地限流？<br> 条件</p></blockquote><blockquote><p>1、ngx_http_limit_conn_module</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    limit_conn_zone <span class="token variable">$server_name</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            limit_conn perserver <span class="token number">1</span><span class="token punctuation">;</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
    
        server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5003 backup<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>和客户端无关</p></blockquote><blockquote><p>缺陷：导致正常客户端无法使用</p></blockquote><h3 id="限流-情况1" tabindex="-1"><a class="header-anchor" href="#限流-情况1" aria-hidden="true">#</a> 限流-情况1</h3><blockquote><p>缺陷：服务端被限制只能允许访问10个请求，那么就会限制请求数量进行访问，请求数可能来至于多个客户端，如果一个客户端都把请求数占用了。就会导致其他客户端无法进行请求，导致恶意攻击。</p></blockquote><blockquote><p>方案：客户端限流</p></blockquote><blockquote><p>如何落地客户端限流？<br> 条件 1、binary_remote_addr 步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    limit_conn_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            limit_conn perserver <span class="token number">1</span><span class="token punctuation">;</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
    
        server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5003 backup<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="限流-情况2" tabindex="-1"><a class="header-anchor" href="#限流-情况2" aria-hidden="true">#</a> 限流-情况2</h3><blockquote><p>注意：$binary_remote_addr 是 获取客户端ip地址的变量，长度为 4 字节，会话信息的长度为 32 字节。 1048576 /32 = 32768个会话</p></blockquote><blockquote><p>缺陷：</p></blockquote><blockquote><p>1、如果客户端非常多，每个IP都限制请求处理1次，如果出现了100万个客户端，那么就有非常多的客户端徐亚需要进行处理，那么就会导致系统被压垮。所以，这个时候，就需要使用平滑处理</p></blockquote><blockquote><p>方案：客户端IP平滑限流</p></blockquote><blockquote><p>如何落地客户端IP平滑限流？<br> 条件</p></blockquote><blockquote><p>1、ngx_http_limit_req_module</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    limit_req_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>addr:10m <span class="token assign-left variable">rate</span><span class="token operator">=</span>2r/s<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            limit_req <span class="token assign-left variable">zone</span><span class="token operator">=</span>addr<span class="token punctuation">;</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
    
        server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5003 backup<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理：</h4><ul><li><p>1、令牌桶算法</p></li><li><p>2、漏桶算法</p></li></ul><h3 id="限流-情况3" tabindex="-1"><a class="header-anchor" href="#限流-情况3" aria-hidden="true">#</a> 限流-情况3</h3><blockquote><p>缺陷：</p></blockquote><blockquote><p>1、如果客户端请求非常多，1s处理2个是 每500ms 处理一个，就会导致并发性能下降。这个时候把不能处理的，排除掉，然后再来处理。所以需要加缓存来处理。缓冲几个，以提升性能。</p></blockquote><blockquote><p>方案：客户端IP平滑限流-突发</p></blockquote><blockquote><p>如何落地客户端IP平滑限流？<br> 条件</p></blockquote><blockquote><p>1、ngx_http_limit_req_module</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    limit_req_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>addr:10m <span class="token assign-left variable">rate</span><span class="token operator">=</span>2r/s<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            limit_req <span class="token assign-left variable">zone</span><span class="token operator">=</span>addr <span class="token assign-left variable">burst</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
    
        server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5003 backup<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="限流-情况4" tabindex="-1"><a class="header-anchor" href="#限流-情况4" aria-hidden="true">#</a> 限流-情况4</h3><blockquote><p>缺陷：<br> 1、如果客户端请求非常多，1s处理2个是 每500ms 处理一个，就会导致并发性能下降。这个时候把不能处理的，排除掉，然后再来处理。所以需要加缓存来处理。缓冲几个，以提升性能。<br> 方案：客户端IP平滑限流-突发<br> 如何落地客户端IP平滑限流？<br> 条件</p></blockquote><blockquote><p>1、ngx_http_limit_req_module</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    limit_req_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>addr:10m <span class="token assign-left variable">rate</span><span class="token operator">=</span>2r/s<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            limit_req <span class="token assign-left variable">zone</span><span class="token operator">=</span>addr <span class="token assign-left variable">burst</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
    
        server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5003 backup<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="限流-情况5" tabindex="-1"><a class="header-anchor" href="#限流-情况5" aria-hidden="true">#</a> 限流-情况5</h3><blockquote><p>缺陷：</p></blockquote><blockquote><p>1、如果客户端请求非常多，1s处理2个是 每500ms 处理一个，就会导致并发性能下降。这个时候把不能处理的，排除掉，然后再来处理。所以需要加缓存来处理。缓冲几个，以提升性能。</p></blockquote><blockquote><p>方案：客户端IP平滑限流-立即突发</p></blockquote><blockquote><p>如何落地客户端IP平滑限流立即突发？ 条件</p></blockquote><blockquote><p>1、ngx_http_limit_req_module</p></blockquote><blockquote><p>步骤 1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    limit_req_zone <span class="token variable">$binary_remote_addr</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>addr:10m <span class="token assign-left variable">rate</span><span class="token operator">=</span>2r/s<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            limit_req <span class="token assign-left variable">zone</span><span class="token operator">=</span>addr <span class="token assign-left variable">burst</span><span class="token operator">=</span><span class="token number">5</span> nodelay<span class="token punctuation">;</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
    
        server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5003 backup<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询商品缓存场景落地-情况7" tabindex="-1"><a class="header-anchor" href="#查询商品缓存场景落地-情况7" aria-hidden="true">#</a> 查询商品缓存场景落地-情况7</h3><blockquote><p>情况7：当客户端给Nginx发送查询商品的请求时，Nginx把请求转发给5001 和 5002 ,如果转发到5001和5002，两个实例处理能力达到极限的时候，如何更高提升系统性能场景？</p></blockquote><blockquote><p>方案：代理缓存</p></blockquote><blockquote><p>如何落地代理缓存？<br> 条件</p></blockquote><blockquote><p>1、ngx_http_proxy_module</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    proxy_cache_path /cache/nginx/ <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>mycache:64m<span class="token punctuation">;</span>
    limit_conn_zone <span class="token variable">$server_name</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">80</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        location / <span class="token punctuation">{</span>
            limit_conn perserver <span class="token number">1</span><span class="token punctuation">;</span>
            proxy_cache mycache<span class="token punctuation">;</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_cache_methods GET HEAD<span class="token punctuation">;</span>
            proxy_cache_revalidate on<span class="token punctuation">;</span>
            proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 10m<span class="token punctuation">;</span>
            proxy_cache_valid <span class="token number">404</span> 1m<span class="token punctuation">;</span>
            proxy_cache_valid any 1m<span class="token punctuation">;</span>
            proxy_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
            proxy_cache_use_stale error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#动态负载均衡配置</span>
    upstream LKN.EBusiness<span class="token punctuation">{</span>
    
        server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
        server localhost:5003 backup<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数详解" tabindex="-1"><a class="header-anchor" href="#参数详解" aria-hidden="true">#</a> 参数详解</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>proxy_cache_path /cache/nginx/ <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>mycache:64m<span class="token punctuation">;</span>
<span class="token comment">#proxy_cache_path 为缓存存放路径;</span>
<span class="token comment">#levels的第一位表示使用1级子目录冒号隔开第二位表示使用2级子目录,其最多使用三级,1表示每个一级子目录的名字只能使用1个字符;</span>
<span class="token comment">#key_zone中的mycache为缓存名字,可以在location或者server中通过proxy_cache引用;64m表示用多少内存空间存储nginx key;</span>

proxy_cache mycache<span class="token punctuation">;</span>
<span class="token comment">#引用mycache缓存空间;</span>

proxy_pass http://LKN.EBusiness<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token comment">#将来自 / 的请求代理至192.168.123.34:80 该服务器,后面的 ‘/’ 是必须的;</span>

proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
<span class="token comment">#用于后端的real server区分不同的虚拟主机;</span>

proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
<span class="token comment">#记录客户端真实ip地址,而不是代理服务器地址,需要后端web服务器开启日志相应功能接收;</span>

proxy_cache_methods GET HEAD<span class="token punctuation">;</span>
<span class="token comment">#表示对客户端请求的GET 和 HEAD方法进行缓存;</span>

proxy_cache_revalidate on<span class="token punctuation">;</span>
<span class="token comment">#本地缓存过期会检查后端服务器该缓存是否存在，避免后端重传占据带宽;</span>

proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 10m<span class="token punctuation">;</span>
proxy_cache_valid <span class="token number">404</span> 1m<span class="token punctuation">;</span>
proxy_cache_valid any 1m<span class="token punctuation">;</span>
<span class="token comment">#针对于不同的响应码进行缓存不同的时间设定;</span>

proxy_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token comment">#某一个请求被响应多少次才会被缓存,默认是1,可以将该值设置为大一些;</span>

proxy_cache_use_stale error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
<span class="token comment">#指明哪种场景可以使用过期缓存,提升用户体验;</span>

补充:
proxy_hide_header<span class="token punctuation">;</span>
<span class="token comment">#隐藏由proxy响应客户端时指定的首部;</span>

proxy_buffer <span class="token number">4</span><span class="token operator">|</span>8k
<span class="token comment">#为了响应客户端更快,服务器端响应客户端可能分成多个ip报文响应,也可以整合在一起再一次响应;</span>

Nginx缓存是键值存储，URL是键，文件路径是值。键值存储的速度就是加快在文件系统中查找的速度。所以，存储的key是哈希过的值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询商品https应用场景" tabindex="-1"><a class="header-anchor" href="#查询商品https应用场景" aria-hidden="true">#</a> 查询商品Https应用场景</h3><blockquote><p>为了保证查询商品是安全的，所以需要使用Https通信。</p></blockquote><blockquote><p>条件</p></blockquote><blockquote><p>1、server-cert.pem证书</p></blockquote><blockquote><p>2、server-key.pem证书</p></blockquote><blockquote><p>步骤</p></blockquote>`,134),N=n("p",null,"1、证书生成",-1),w={href:"https://slproweb.com/products/Win32OpenSSL.html",target:"_blank",rel:"noopener noreferrer"},E=n("blockquote",null,[n("p",null,[s("1.1.1 下载openSSL地址：https://slproweb.com/download/Win64OpenSSL-3_1_2.msi"),n("br"),s(" 1.1.2 证书生成地址：https://jingyan.baidu.com/article/6c67b1d6be538c2787bb1e06.html"),n("br"),s(" 1.1.3 证书生成地址: https://blog.csdn.net/weixin_44454510/article/details/126939208")])],-1),L=l('<blockquote><blockquote><p>1.2 证书路径：</p></blockquote></blockquote><p><img src="'+o+`" alt="Alt text"></p><blockquote><p>2、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;  </span>
events <span class="token punctuation">{</span>
   worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>
access_log  logs/access.log  main<span class="token punctuation">;</span>

sendfile        on<span class="token punctuation">;</span>
<span class="token comment">#tcp_nopush     on;</span>

<span class="token comment">#keepalive_timeout  0;</span>
keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

<span class="token comment">#gzip  on;</span>
proxy_cache_path /cache/nginx/ <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>mycache:64m<span class="token punctuation">;</span>
limit_conn_zone <span class="token variable">$server_name</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>

    <span class="token comment">#access_log  logs/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        limit_conn perserver <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache mycache<span class="token punctuation">;</span>
        proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_cache_methods GET HEAD<span class="token punctuation">;</span>
        proxy_cache_revalidate on<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 10m<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">404</span> 1m<span class="token punctuation">;</span>
        proxy_cache_valid any 1m<span class="token punctuation">;</span>
        proxy_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache_use_stale error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># https 虚拟主机</span>
	server <span class="token punctuation">{</span>
        listen       <span class="token number">4435</span> ssl<span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

		ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem<span class="token punctuation">;</span>
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem<span class="token punctuation">;</span>

        ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#动态负载均衡配置</span>
upstream LKN.EBusiness<span class="token punctuation">{</span>

    server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5003 backup<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http转https" tabindex="-1"><a class="header-anchor" href="#http转https" aria-hidden="true">#</a> Http转Https</h3><blockquote><p>缺陷：系统当中总是有很多默认的Http请求，如何将保证http请求转换成https呢？</p></blockquote><blockquote><p>条件</p></blockquote><blockquote><p>1、ngx_http_rewrite_module</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>2、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;  </span>
    events <span class="token punctuation">{</span>
        worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>
    access_log  logs/access.log  main<span class="token punctuation">;</span>

    sendfile        on<span class="token punctuation">;</span>
    <span class="token comment">#tcp_nopush     on;</span>

    <span class="token comment">#keepalive_timeout  0;</span>
    keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

    <span class="token comment">#gzip  on;</span>
    proxy_cache_path /cache/nginx/ <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>mycache:64m<span class="token punctuation">;</span>
    limit_conn_zone <span class="token variable">$server_name</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>
    server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>

    <span class="token comment">#access_log  logs/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        limit_conn perserver <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache mycache<span class="token punctuation">;</span>
        proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_cache_methods GET HEAD<span class="token punctuation">;</span>
        proxy_cache_revalidate on<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 10m<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">404</span> 1m<span class="token punctuation">;</span>
        proxy_cache_valid any 1m<span class="token punctuation">;</span>
        proxy_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache_use_stale error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># https 虚拟主机</span>
	server <span class="token punctuation">{</span>
        listen       <span class="token number">4435</span> ssl<span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

		ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem<span class="token punctuation">;</span>
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem<span class="token punctuation">;</span>

        ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#动态负载均衡配置</span>
upstream LKN.EBusiness<span class="token punctuation">{</span>

    server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5003 backup<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询商品数据库应用场景" tabindex="-1"><a class="header-anchor" href="#查询商品数据库应用场景" aria-hidden="true">#</a> 查询商品数据库应用场景</h3><blockquote><p>问题：查询商品并发量非常大，导致一个数据库无法正常处理客户端请求，所以需要使用数据库集群来解决并发量问题？如何对数据库进行代理呢？</p></blockquote><blockquote><p>条件</p></blockquote><blockquote><p>1、ngx_stream_core_module</p></blockquote><blockquote><p>2、ngx_stream_proxy_module</p></blockquote><blockquote><p>3、ngx_stream_upstream_module</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;    </span>
    events <span class="token punctuation">{</span>
        worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>
access_log  logs/access.log  main<span class="token punctuation">;</span>

sendfile        on<span class="token punctuation">;</span>
<span class="token comment">#tcp_nopush     on;</span>

<span class="token comment">#keepalive_timeout  0;</span>
keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

<span class="token comment">#gzip  on;</span>
proxy_cache_path /cache/nginx/ <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>mycache:64m<span class="token punctuation">;</span>
limit_conn_zone <span class="token variable">$server_name</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>

    <span class="token comment">#access_log  logs/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        limit_conn perserver <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache mycache<span class="token punctuation">;</span>
        proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_cache_methods GET HEAD<span class="token punctuation">;</span>
        proxy_cache_revalidate on<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 10m<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">404</span> 1m<span class="token punctuation">;</span>
        proxy_cache_valid any 1m<span class="token punctuation">;</span>
        proxy_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache_use_stale error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># https 虚拟主机</span>
	server <span class="token punctuation">{</span>
        listen       <span class="token number">4435</span> ssl<span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

		ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem<span class="token punctuation">;</span>
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem<span class="token punctuation">;</span>

        ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#动态负载均衡配置</span>
upstream LKN.EBusiness<span class="token punctuation">{</span>
    server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5003 backup<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#数据库代理</span>
stream <span class="token punctuation">{</span>

	server <span class="token punctuation">{</span>
       listen <span class="token number">13306</span><span class="token punctuation">;</span> 
       proxy_connect_timeout 1s<span class="token punctuation">;</span>
       proxy_timeout 3s<span class="token punctuation">;</span>
       proxy_pass localhost:3306<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>

    upstream mysql <span class="token punctuation">{</span>
       server localhost:3306<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查询商品web应用场景" tabindex="-1"><a class="header-anchor" href="#查询商品web应用场景" aria-hidden="true">#</a> 查询商品Web应用场景</h3><blockquote><p>如果商品是在电商Web网站中，这个时候从电商网站当中查询商品的时候，会同时加载两类数据，静态 数据和动态数据，静态数据：js css 图片，视频，音频等等，动态资源：商品数据。如果访问js css 并发量比较大，会出现cpu，内存等资源全部被耗尽，导致动态数据加载没有资源可用，所以，导致动态资源请求导致性能下降问题？如何提升性能？</p></blockquote><blockquote><p>方案：动静分离</p></blockquote><blockquote><p>前提</p></blockquote><blockquote><p>1、电商web系统</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、使用vs2022创建电商web系统</p></blockquote><p><img src="`+m+'" alt="Alt text"> ​</p><p>如何落地动静分离 条件</p><p>1、LKN.EBusiness.Web</p><p>2、Nginx</p><p>步骤</p><p>1、先进入到LKN.EBusiness.Web中</p><p>​ 将wwwroot文件拆分到放到LKN.EBusiness.StaticResource目录中</p><p><img src="'+b+`" alt="Alt text"></p><p>1、然后进入Nginx中，在nginx.conf文件中添加</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>

​    events <span class="token punctuation">{</span>
​        worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
​    <span class="token punctuation">}</span>
​    
    http <span class="token punctuation">{</span>
        include       mime.types<span class="token punctuation">;</span>
        default_type  application/octet-stream<span class="token punctuation">;</span>
        log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
        <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
        <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>
    access_log  logs/access.log  main<span class="token punctuation">;</span>

sendfile        on<span class="token punctuation">;</span>
<span class="token comment">#tcp_nopush     on;</span>

<span class="token comment">#keepalive_timeout  0;</span>
keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

<span class="token comment">#gzip  on;</span>
proxy_cache_path /cache/nginx/ <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>mycache:64m<span class="token punctuation">;</span>
limit_conn_zone <span class="token variable">$server_name</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>

    <span class="token comment">#access_log  logs/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        limit_conn perserver <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache mycache<span class="token punctuation">;</span>
        proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_cache_methods GET HEAD<span class="token punctuation">;</span>
        proxy_cache_revalidate on<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 10m<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">404</span> 1m<span class="token punctuation">;</span>
        proxy_cache_valid any 1m<span class="token punctuation">;</span>
        proxy_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache_use_stale error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#静态资源</span>
    location ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>ico<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token operator">|</span>png<span class="token operator">|</span>jpg<span class="token operator">|</span>mp4<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
        root D:/work/net-project/分布式中间件专题/网关中间件Nginx/LKN.EBusiness.StaticResource/wwwroot<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment"># https 虚拟主机</span>
    server <span class="token punctuation">{</span>
        listen       <span class="token number">4435</span> ssl<span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

       ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem<span class="token punctuation">;</span>
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem<span class="token punctuation">;</span>

        ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#动态负载均衡配置</span>
upstream LKN.EBusiness<span class="token punctuation">{</span>

    server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5003 backup<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#数据库代理</span>
stream <span class="token punctuation">{</span>

    server <span class="token punctuation">{</span>
       listen <span class="token number">13306</span><span class="token punctuation">;</span> 
       proxy_connect_timeout 1s<span class="token punctuation">;</span>
       proxy_timeout 3s<span class="token punctuation">;</span>
       proxy_pass localhost:3306<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>

    upstream mysql <span class="token punctuation">{</span>
       server localhost:3306<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3、客户端进行访问</p></blockquote><blockquote><p>动静分离-情况1 缺陷：如果动静资源在一个虚拟主机中，那么静态资源和动态资源共享同一个资源，如果静态或者动态资源访问量比较大，把资源消耗殆尽，动态和静态资源互相会进行影响，导致系统整体上性能下降，如何提升性能？</p></blockquote><blockquote><p>方案：动静不同虚拟主机</p></blockquote><blockquote><p>如何落地动静不同虚拟主机 条件</p></blockquote><blockquote><p>1、server</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、然后进入Nginx中，在nginx.conf文件中添加</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
error_log  logs/error.log  info<span class="token punctuation">;</span>

<span class="token comment">#pid        logs/nginx.pid;    </span>
​    events <span class="token punctuation">{</span>
​        worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
​    <span class="token punctuation">}</span>
​    
    http <span class="token punctuation">{</span>
        include       mime.types<span class="token punctuation">;</span>
        default_type  application/octet-stream<span class="token punctuation">;</span>
    	log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
        <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
        <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>
    access_log  logs/access.log  main<span class="token punctuation">;</span>
sendfile        on<span class="token punctuation">;</span>
<span class="token comment">#tcp_nopush     on;</span>

<span class="token comment">#keepalive_timeout  0;</span>
keepalive_timeout  <span class="token number">65</span><span class="token punctuation">;</span>

<span class="token comment">#gzip  on;</span>
proxy_cache_path /cache/nginx/ <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>mycache:64m<span class="token punctuation">;</span>
limit_conn_zone <span class="token variable">$server_name</span> <span class="token assign-left variable">zone</span><span class="token operator">=</span>perserver:10m<span class="token punctuation">;</span>
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name  localhost<span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>

    <span class="token comment">#access_log  logs/host.access.log  main;</span>

    location / <span class="token punctuation">{</span>
        limit_conn perserver <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache mycache<span class="token punctuation">;</span>
        proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
        proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
        proxy_cache_methods GET HEAD<span class="token punctuation">;</span>
        proxy_cache_revalidate on<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 10m<span class="token punctuation">;</span>
        proxy_cache_valid <span class="token number">404</span> 1m<span class="token punctuation">;</span>
        proxy_cache_valid any 1m<span class="token punctuation">;</span>
        proxy_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
        proxy_cache_use_stale error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">#静态资源</span>
    <span class="token comment">#location ~ \\.(ico|js|css|png|jpg|mp4)$ {</span>
    <span class="token comment">#	root D:/work/net-project/分布式中间件专题/网关中间件Nginx/LKN.EBusiness.StaticResource/wwwroot;</span>
    <span class="token comment">#}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    server <span class="token punctuation">{</span>
        listen       <span class="token number">8089</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token comment">#location / {</span>
        <span class="token comment">#    root   html;</span>
        <span class="token comment">#    index  index.html index.htm;</span>
        <span class="token comment">#}</span>
				
		location / <span class="token punctuation">{</span>
            proxy_pass  http://localhost:5007<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		
		<span class="token comment">#静态资源</span>
		<span class="token comment">#location ~ \\.(ico|js|css|png|jpg|mp4)$ {</span>
        <span class="token comment">#    root D:/work/net-project/分布式中间件专题/网关中间件Nginx/LKN.EBusiness.StaticResource/wwwroot;</span>
        <span class="token comment">#}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
	
	server <span class="token punctuation">{</span>
        listen       <span class="token number">8090</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token comment">#location / {</span>
        <span class="token comment">#    root   html;</span>
        <span class="token comment">#    index  index.html index.htm;</span>
        <span class="token comment">#}</span>
				
		<span class="token comment">#location / {</span>
        <span class="token comment">#    proxy_pass  http://localhost:5007;</span>
        <span class="token comment">#}</span>
		
		<span class="token comment">#静态资源</span>
		location ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>ico<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token operator">|</span>png<span class="token operator">|</span>jpg<span class="token operator">|</span>mp4<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
            root D:/work/net-project/分布式中间件专题/网关中间件Nginx/LKN.EBusiness.StaticResource/wwwroot<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
	
	proxy_cache_path cache/nginx/ <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">1</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>mycache:64m<span class="token punctuation">;</span>
	server <span class="token punctuation">{</span>
        listen       <span class="token number">8091</span><span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

        <span class="token comment">#charset koi8-r;</span>

        <span class="token comment">#access_log  logs/host.access.log  main;</span>

        <span class="token comment">#location / {</span>
        <span class="token comment">#    root   html;</span>
        <span class="token comment">#    index  index.html index.htm;</span>
        <span class="token comment">#}</span>
				
		location / <span class="token punctuation">{</span>
			proxy_cache mycache<span class="token punctuation">;</span>
            proxy_set_header Host <span class="token variable">$host</span><span class="token punctuation">;</span>
            proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
            proxy_cache_methods GET HEAD<span class="token punctuation">;</span>
            proxy_cache_revalidate on<span class="token punctuation">;</span>
            proxy_cache_valid <span class="token number">200</span> <span class="token number">302</span> 10m<span class="token punctuation">;</span>
            proxy_cache_valid <span class="token number">404</span> 1m<span class="token punctuation">;</span>
            proxy_cache_valid any 1m<span class="token punctuation">;</span>
            proxy_cache_min_uses <span class="token number">1</span><span class="token punctuation">;</span>
            proxy_cache_use_stale error <span class="token function">timeout</span> invalid_header http_500 http_502 http_503 http_504<span class="token punctuation">;</span>
            proxy_pass  http://localhost:8089<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
		
		<span class="token comment">#静态资源</span>
		location ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>ico<span class="token operator">|</span>js<span class="token operator">|</span>css<span class="token operator">|</span>png<span class="token operator">|</span>jpg<span class="token operator">|</span>mp4<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
            proxy_pass  http://localhost:8090<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">#error_page  404              /404.html;</span>

        <span class="token comment"># redirect server error pages to the static page /50x.html</span>
        <span class="token comment">#</span>
        error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
        location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
            root   html<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># https 虚拟主机</span>
	server <span class="token punctuation">{</span>
        listen       <span class="token number">4435</span> ssl<span class="token punctuation">;</span>
        server_name  localhost<span class="token punctuation">;</span>

		ssl_certificate      D:/work/net/grpc-cluster/server-cert.pem<span class="token punctuation">;</span>
        ssl_certificate_key  D:/work/net/grpc-cluster/server-key.pem<span class="token punctuation">;</span>

        ssl_session_cache    shared:SSL:1m<span class="token punctuation">;</span>
        ssl_session_timeout  5m<span class="token punctuation">;</span>

    <span class="token comment">#    ssl_ciphers  HIGH:!aNULL:!MD5;</span>
    <span class="token comment">#    ssl_prefer_server_ciphers  on;</span>

        location / <span class="token punctuation">{</span>
            proxy_pass  http://LKN.EBusiness<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#动态负载均衡配置</span>
upstream LKN.EBusiness<span class="token punctuation">{</span>

    server localhost:5001 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5002 <span class="token assign-left variable">max_fails</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">fail_timeout</span><span class="token operator">=</span>10s<span class="token punctuation">;</span>
    server localhost:5003 backup<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">#数据库代理</span>
stream <span class="token punctuation">{</span>

	server <span class="token punctuation">{</span>
       listen <span class="token number">13306</span><span class="token punctuation">;</span> 
       proxy_connect_timeout 1s<span class="token punctuation">;</span>
       proxy_timeout 3s<span class="token punctuation">;</span>
       proxy_pass localhost:3306<span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>

    upstream mysql <span class="token punctuation">{</span>
       server localhost:3306<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动静分离-情况2" tabindex="-1"><a class="header-anchor" href="#动静分离-情况2" aria-hidden="true">#</a> 动静分离-情况2</h3><blockquote><p>缺陷：如果动静资源在一个虚拟主机中，那么静态资源和动态资源共享同一个资源，如果静态或者动态资源访问量比较大，把资源消耗殆尽，动态和静态资源互相会进行影响，导致系统整体上性能下降，如何提升性能？</p></blockquote><blockquote><p>方案：Include</p></blockquote><h2 id="nginx集群场景" tabindex="-1"><a class="header-anchor" href="#nginx集群场景" aria-hidden="true">#</a> Nginx集群场景</h2><blockquote><p>项目中如何落地Nginx集群 条件</p></blockquote><ul><li><p>1、linux</p></li><li><p>2、 nginx</p></li><li><p>3、keepalived</p></li></ul><blockquote><p>步骤</p></blockquote><h3 id="虚拟机准备" tabindex="-1"><a class="header-anchor" href="#虚拟机准备" aria-hidden="true">#</a> 虚拟机准备：</h3><blockquote><p>1、先通过vwworkstation创建2台linux主机</p></blockquote><blockquote><p>地址：192.168.44.3</p></blockquote><blockquote><p>​ 地址：192.168.44.4</p></blockquote><blockquote><p>nginx准备：</p></blockquote><blockquote><p>2、然后分别在2台主机上安装nginx</p></blockquote><p>192.168.44.3：</p><blockquote><p>1 安装 nginx需要工具</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	 yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc <span class="token function">make</span> pcre-devel zlib-devel <span class="token function">tar</span> zlib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>2 下载nginx</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	 <span class="token function">wget</span>  http://nginx.org/download/nginx-1.17.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>3 nginx解压/nginx目录</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  nginx-1.17.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>4 切换到/nginx/nginx-1.17.1</p><blockquote><p>执行./configure<br> make<br> make install 进行安装 5 切换到/usr/local/nginx/sbin 执行 ./nginx 启动nginx 6 添加 SSL模块</p></blockquote></blockquote><h3 id="新增ssl模块进行重新配置" tabindex="-1"><a class="header-anchor" href="#新增ssl模块进行重新配置" aria-hidden="true">#</a> 新增SSL模块进行重新配置：</h3><p>[root@xxx nginx]# ./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module</p><blockquote><p>yum方式</p></blockquote><blockquote><p>192.168.44.4：</p></blockquote><h3 id="_1-安装-nginx需要工具" tabindex="-1"><a class="header-anchor" href="#_1-安装-nginx需要工具" aria-hidden="true">#</a> 1 安装 nginx需要工具</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	 yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc <span class="token function">make</span> pcre-devel zlib-devel <span class="token function">tar</span> zlib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-下载nginx" tabindex="-1"><a class="header-anchor" href="#_2-下载nginx" aria-hidden="true">#</a> 2 下载nginx</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	 <span class="token function">wget</span>  http://nginx.org/download/nginx-1.24.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-nginx解压-nginx目录" tabindex="-1"><a class="header-anchor" href="#_3-nginx解压-nginx目录" aria-hidden="true">#</a> 3 nginx解压/nginx目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  nginx-1.24.0.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-切换到-nginx-nginx-1-24-0" tabindex="-1"><a class="header-anchor" href="#_4-切换到-nginx-nginx-1-24-0" aria-hidden="true">#</a> 4 切换到/nginx/nginx-1.24.0</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	执行./configure  
		make  
		make install 进行安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-切换到-usr-local-nginx-sbin" tabindex="-1"><a class="header-anchor" href="#_5-切换到-usr-local-nginx-sbin" aria-hidden="true">#</a> 5 切换到/usr/local/nginx/sbin</h3><blockquote><p>执行 ./nginx 启动nginx</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-禁用-nginx" tabindex="-1"><a class="header-anchor" href="#_6-禁用-nginx" aria-hidden="true">#</a> 6 禁用 nginx</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx  <span class="token parameter variable">-s</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-重启-nginx" tabindex="-1"><a class="header-anchor" href="#_7-重启-nginx" aria-hidden="true">#</a> 7 重启 nginx</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="yum方式安装" tabindex="-1"><a class="header-anchor" href="#yum方式安装" aria-hidden="true">#</a> yum方式安装</h3><blockquote><p>3、然后配置分别将秒杀项目部署到Nginx中</p></blockquote><blockquote><p>在192.168.44.4主机中进行部署</p></blockquote><blockquote><p>4、然后在192.168.44.3配置秒杀项目地址</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>

     listen       <span class="token number">8081</span><span class="token punctuation">;</span>
     server_name  localhost<span class="token punctuation">;</span>
     <span class="token comment">#charset koi8-r;</span>
     <span class="token comment">#access_log  logs/host.access.log  main;</span>
     location / <span class="token punctuation">{</span>
        proxy_pass http://192.168.44.4:5000<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>keepalived</code>准备</p></blockquote><blockquote><p>1、先分别在2台主机上安装keepalived</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>2、然后启动keepalived</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl start keepalived.service
systemctl stop keepalived.service
systemctl restart keepalived.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3、然后在192.168.44.4配置Keepalive</p></blockquote><blockquote><p>进入到cd /etc/keepalived/keepalived.conf配置文件</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code> global_defs <span class="token punctuation">{</span>

   notification_email <span class="token punctuation">{</span> <span class="token comment"># keepalived服务宕机异常出现的时候，发送通知邮件 可以是多个   acassen@firewall.loc  #  收件人邮箱1</span>

 failover@firewall.loc <span class="token comment">#  收件人邮箱2</span>

 sysadmin@firewall.loc <span class="token comment">#  收件人邮箱3</span>
   <span class="token punctuation">}</span>

   notification_email_from Alexandre.Cassen@firewall.loc  <span class="token comment">#邮件发件人</span>

   smtp_server 192.168.200.1  <span class="token comment"># 邮件服务器地址</span>

   smtp_connect_timeout 30   <span class="token comment"># 超时时间</span>

   router_id LVS_DEVEL   <span class="token comment"># 机器标识 局域网内唯一即可</span>

   vrrp_skip_check_adv_addr <span class="token comment"># 默认是不跳过检查。检查收到的VRRP通告中的所有地址可能会比较耗时，设置此命令的意思是，如果通告与接收的上一个通告来自相同的master路由器，则不执行检查(跳过检查)。</span>

   <span class="token comment">#vrrp_strict   # 严格遵守VRRP协议。下列情况将会阻止启动Keepalived：1. 没有VIP地址。2. 单播邻居。3. 在VRRP版本2中有IPv6地址。</span>

   vrrp_garp_interval 0  <span class="token comment"># 小数类型，单位秒，在一个网卡上每组gratuitous arp消息之间的延迟时间，默认为0，一个发送的消息=n组 arp报文</span>

   vrrp_gna_interval 0 <span class="token comment"># 小数类型，单位秒， 在一个网卡上每组na消息之间的延迟时间，默认为0</span>

<span class="token punctuation">}</span>
vrrp_instance VI_1 <span class="token punctuation">{</span>
state MASTER  <span class="token comment"># 服务器状态 MASTER是主服务器  BACKUP是备份服务器 主服务器的priority要比备份服务器大</span>

interface ens33 <span class="token comment"># 通信端口 通过ip addr可以看到 根据自己的机器配置</span>

virtual_router_id 51  <span class="token comment"># vrrp实例id  keepalived集群，实例id必须一致</span>

priority 100  <span class="token comment"># 权重比 主服务器的priority要比备份服务器大</span>

advert_int 1  <span class="token comment"># 心跳间隔  单位秒  keepalived多机器集群 通过心跳检测，如果发送心跳没反应 就立刻接管；</span>

authentication <span class="token punctuation">{</span> <span class="token comment"># 服务器之间通信密码</span>

    auth_type PASS

    auth_pass 1111

<span class="token punctuation">}</span>

virtual_ipaddress <span class="token punctuation">{</span> <span class="token comment"># 自定义虚拟IP </span>

    192.168.91.199

<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3、然后在192.168.44.3配置Keepalive</p></blockquote><blockquote><p>进入到cd /etc/keepalived/keepalived.conf配置文件</p></blockquote><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code> global_defs <span class="token punctuation">{</span>

   notification_email <span class="token punctuation">{</span> <span class="token comment"># keepalived服务宕机异常出现的时候，发送通知邮件 可以是多个   acassen@firewall.loc  #  收件人邮箱1</span>

 failover@firewall.loc <span class="token comment">#  收件人邮箱2</span>

 sysadmin@firewall.loc <span class="token comment">#  收件人邮箱3</span>
   <span class="token punctuation">}</span>

   notification_email_from Alexandre.Cassen@firewall.loc  <span class="token comment">#邮件发件人</span>

   smtp_server 192.168.200.1  <span class="token comment"># 邮件服务器地址</span>

   smtp_connect_timeout 30   <span class="token comment"># 超时时间</span>

   router_id LVS_DEVEL   <span class="token comment"># 机器标识 局域网内唯一即可</span>

   vrrp_skip_check_adv_addr <span class="token comment"># 默认是不跳过检查。检查收到的VRRP通告中的所有地址可能会比较耗时，设置此命令的意思是，如果通告与接收的上一个通告来自相同的master路由器，则不执行检查(跳过检查)。</span>

   <span class="token comment">#vrrp_strict   # 严格遵守VRRP协议。下列情况将会阻止启动Keepalived：1. 没有VIP地址。2. 单播邻居。3. 在VRRP版本2中有IPv6地址。</span>

   vrrp_garp_interval 0  <span class="token comment"># 小数类型，单位秒，在一个网卡上每组gratuitous arp消息之间的延迟时间，默认为0，一个发送的消息=n组 arp报文</span>

   vrrp_gna_interval 0 <span class="token comment"># 小数类型，单位秒， 在一个网卡上每组na消息之间的延迟时间，默认为0</span>

<span class="token punctuation">}</span>
vrrp_instance VI_1 <span class="token punctuation">{</span>
state BACKUP  <span class="token comment"># 服务器状态 MASTER是主服务器  BACKUP是备份服务器 主服务器的priority要比备份服务器大</span>

interface ens33 <span class="token comment"># 通信端口 通过ip addr可以看到 根据自己的机器配置</span>

virtual_router_id 51  <span class="token comment"># vrrp实例id  keepalived集群，实例id必须一致</span>

priority 99  <span class="token comment"># 权重比 主服务器的priority要比备份服务器大</span>

advert_int 1  <span class="token comment"># 心跳间隔  单位秒  keepalived多机器集群 通过心跳检测，如果发送心跳没反应 就立刻接管；</span>

authentication <span class="token punctuation">{</span> <span class="token comment"># 服务器之间通信密码</span>
auth_type PASS
auth_pass 1111
<span class="token punctuation">}</span>

virtual_ipaddress <span class="token punctuation">{</span> <span class="token comment"># 自定义虚拟IP </span>
192.168.91.199
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>4、然后重启Keepalived</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart keepalived.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>5、日志查看</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tail -f /usr/local/nginx/logs/access.log
tail -f /var/log/messages
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>2、查看进程</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> keep
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nginx自动重启-手动" tabindex="-1"><a class="header-anchor" href="#nginx自动重启-手动" aria-hidden="true">#</a> Nginx自动重启-手动</h2><blockquote><p>条件</p></blockquote><blockquote><p>1、nginx_check.sh</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、先创建nginx_check.sh</p></blockquote><blockquote><p>2、然后添加内容</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;xxxxxx&#39;</span>
<span class="token assign-left variable">count_nginx</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-w</span> nginx<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$count_nginx</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$count_nginx</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
/usr/local/nginx/sbin/nginx
<span class="token function">sleep</span> <span class="token number">2</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -ef<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-w</span> nginx<span class="token operator">|</span><span class="token function">grep</span> <span class="token parameter variable">-v</span> <span class="token function">grep</span><span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    systemctl stop keepalived.service
<span class="token keyword">fi</span>  
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>3、然后重启Nginx</p></blockquote><h3 id="nginx自动重启-启动" tabindex="-1"><a class="header-anchor" href="#nginx自动重启-启动" aria-hidden="true">#</a> Nginx自动重启-启动</h3><blockquote><p>条件</p></blockquote><blockquote><p>1、keepalived</p></blockquote><blockquote><p>步骤</p></blockquote><blockquote><p>1、在keepalived.conf中添加内容</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>vrrp_script chk_http_port <span class="token punctuation">{</span>
     script <span class="token string">&quot;/root/nginx_check.sh&quot;</span> <span class="token comment">#脚本地址</span>
     interval <span class="token number">2</span> <span class="token comment">#检测脚本执行的间隔</span>
     weight <span class="token number">2</span> <span class="token comment">#比重</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="socket-配置" tabindex="-1"><a class="header-anchor" href="#socket-配置" aria-hidden="true">#</a> socket 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token comment">#数据库代理</span>
stream <span class="token punctuation">{</span>
    server <span class="token punctuation">{</span>
       listen <span class="token number">8181</span><span class="token punctuation">;</span> 
       proxy_connect_timeout 1s<span class="token punctuation">;</span>
       proxy_timeout 3s<span class="token punctuation">;</span>
       proxy_pass rfidConn<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    upstream rfidConn <span class="token punctuation">{</span>
       server localhost:8182<span class="token punctuation">;</span>
       server localhost:8183<span class="token punctuation">;</span>
       server localhost:8184<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,123);function z(B,K){const e=c("router-link"),t=c("ExternalLinkIcon");return _(),h("div",null,[x,n("nav",q,[n("ul",null,[n("li",null,[a(e,{to:"#目录"},{default:i(()=>[s("目录")]),_:1})]),n("li",null,[a(e,{to:"#分布式中间件-nginx"},{default:i(()=>[s("分布式中间件-Nginx")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#什么是nginx"},{default:i(()=>[s("什么是Nginx")]),_:1})]),n("li",null,[a(e,{to:"#什么地方使用nginx"},{default:i(()=>[s("什么地方使用Nginx")]),_:1})]),n("li",null,[a(e,{to:"#集群系统中为什么要使用nginx"},{default:i(()=>[s("集群系统中为什么要使用Nginx")]),_:1})]),n("li",null,[a(e,{to:"#集群系统中如何落地nginx"},{default:i(()=>[s("集群系统中如何落地Nginx")]),_:1})]),n("li",null,[a(e,{to:"#查询商品分流场景落地"},{default:i(()=>[s("查询商品分流场景落地")]),_:1})])])]),n("li",null,[a(e,{to:"#查询商品分流nginx原理"},{default:i(()=>[s("查询商品分流Nginx原理")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#模块化设计"},{default:i(()=>[s("模块化设计")]),_:1})]),n("li",null,[a(e,{to:"#多进程模型"},{default:i(()=>[s("多进程模型")]),_:1})]),n("li",null,[a(e,{to:"#事件驱动架构"},{default:i(()=>[s("事件驱动架构")]),_:1})]),n("li",null,[a(e,{to:"#虚拟主机"},{default:i(()=>[s("虚拟主机")]),_:1})])])]),n("li",null,[a(e,{to:"#查询商品分流场景落地-情况1"},{default:i(()=>[s("查询商品分流场景落地-情况1")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#如何落地最小活跃数算法"},{default:i(()=>[s("如何落地最小活跃数算法")]),_:1})]),n("li",null,[a(e,{to:"#查询商品分流场景落地-情况2"},{default:i(()=>[s("查询商品分流场景落地-情况2")]),_:1})]),n("li",null,[a(e,{to:"#如何落地hash一致性算法"},{default:i(()=>[s("如何落地hash一致性算法？")]),_:1})]),n("li",null,[a(e,{to:"#查询商品分流场景落地-情况3"},{default:i(()=>[s("查询商品分流场景落地-情况3")]),_:1})]),n("li",null,[a(e,{to:"#查询商品分流场景落地-情况4"},{default:i(()=>[s("查询商品分流场景落地-情况4")]),_:1})]),n("li",null,[a(e,{to:"#查询商品分流场景落地-情况5"},{default:i(()=>[s("查询商品分流场景落地-情况5")]),_:1})]),n("li",null,[a(e,{to:"#查询商品分流场景落地-情况6"},{default:i(()=>[s("查询商品分流场景落地-情况6")]),_:1})]),n("li",null,[a(e,{to:"#限流-情况1"},{default:i(()=>[s("限流-情况1")]),_:1})]),n("li",null,[a(e,{to:"#限流-情况2"},{default:i(()=>[s("限流-情况2")]),_:1})]),n("li",null,[a(e,{to:"#限流-情况3"},{default:i(()=>[s("限流-情况3")]),_:1})]),n("li",null,[a(e,{to:"#限流-情况4"},{default:i(()=>[s("限流-情况4")]),_:1})]),n("li",null,[a(e,{to:"#限流-情况5"},{default:i(()=>[s("限流-情况5")]),_:1})]),n("li",null,[a(e,{to:"#查询商品缓存场景落地-情况7"},{default:i(()=>[s("查询商品缓存场景落地-情况7")]),_:1})]),n("li",null,[a(e,{to:"#参数详解"},{default:i(()=>[s("参数详解")]),_:1})]),n("li",null,[a(e,{to:"#查询商品https应用场景"},{default:i(()=>[s("查询商品Https应用场景")]),_:1})]),n("li",null,[a(e,{to:"#http转https"},{default:i(()=>[s("Http转Https")]),_:1})]),n("li",null,[a(e,{to:"#查询商品数据库应用场景"},{default:i(()=>[s("查询商品数据库应用场景")]),_:1})]),n("li",null,[a(e,{to:"#查询商品web应用场景"},{default:i(()=>[s("查询商品Web应用场景")]),_:1})]),n("li",null,[a(e,{to:"#动静分离-情况2"},{default:i(()=>[s("动静分离-情况2")]),_:1})])])]),n("li",null,[a(e,{to:"#nginx集群场景"},{default:i(()=>[s("Nginx集群场景")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#虚拟机准备"},{default:i(()=>[s("虚拟机准备：")]),_:1})]),n("li",null,[a(e,{to:"#新增ssl模块进行重新配置"},{default:i(()=>[s("新增SSL模块进行重新配置：")]),_:1})]),n("li",null,[a(e,{to:"#_1-安装-nginx需要工具"},{default:i(()=>[s("1 安装 nginx需要工具")]),_:1})]),n("li",null,[a(e,{to:"#_2-下载nginx"},{default:i(()=>[s("2 下载nginx")]),_:1})]),n("li",null,[a(e,{to:"#_3-nginx解压-nginx目录"},{default:i(()=>[s("3 nginx解压/nginx目录")]),_:1})]),n("li",null,[a(e,{to:"#_4-切换到-nginx-nginx-1-24-0"},{default:i(()=>[s("4 切换到/nginx/nginx-1.24.0")]),_:1})]),n("li",null,[a(e,{to:"#_5-切换到-usr-local-nginx-sbin"},{default:i(()=>[s("5 切换到/usr/local/nginx/sbin")]),_:1})]),n("li",null,[a(e,{to:"#_6-禁用-nginx"},{default:i(()=>[s("6 禁用 nginx")]),_:1})]),n("li",null,[a(e,{to:"#_7-重启-nginx"},{default:i(()=>[s("7 重启 nginx")]),_:1})]),n("li",null,[a(e,{to:"#yum方式安装"},{default:i(()=>[s("yum方式安装")]),_:1})])])]),n("li",null,[a(e,{to:"#nginx自动重启-手动"},{default:i(()=>[s("Nginx自动重启-手动")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#nginx自动重启-启动"},{default:i(()=>[s("Nginx自动重启-启动")]),_:1})])])]),n("li",null,[a(e,{to:"#socket-配置"},{default:i(()=>[s("socket 配置")]),_:1})])])]),f,n("blockquote",null,[n("blockquote",null,[n("p",null,[s("2.1 Nginx前提准备 "),n("a",y,[s("Nginx下载"),a(t)]),s(" ​ Nginx下载地址：https://nginx.org/download/nginx-1.24.0.zip")])])]),$,n("blockquote",null,[N,n("blockquote",null,[n("p",null,[s("1.1 使用openSSL工具生成 "),n("a",w,[s("下载openSSL"),a(t)])]),E])]),L])}const H=k(g,[["render",z],["__file","nginx001.html.vue"]]);export{H as default};
