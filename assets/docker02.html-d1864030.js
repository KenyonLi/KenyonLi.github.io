import{_ as c,r as l,o,c as r,a as n,b as a,w as i,d as s,e as d}from"./app-c1c3c937.js";const p="/images/docker/02/docker02_0001.png",t="/images/docker/02/docker02_0002.png",u={},v=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),m={class:"table-of-contents"},k=d('<h2 id="docker-集群" tabindex="-1"><a class="header-anchor" href="#docker-集群" aria-hidden="true">#</a> Docker-集群</h2><h2 id="什么是docker集群" tabindex="-1"><a class="header-anchor" href="#什么是docker集群" aria-hidden="true">#</a> 什么是docker集群</h2><h3 id="什么是集群" tabindex="-1"><a class="header-anchor" href="#什么是集群" aria-hidden="true">#</a> 什么是集群</h3><p>1、先生活中集群</p><p>2、再软件中集群</p><p>3、最后总结</p><p>总结：不同服务实例，来共同提供服务的一组集合就是集群</p><h3 id="集群类型" tabindex="-1"><a class="header-anchor" href="#集群类型" aria-hidden="true">#</a> 集群类型</h3><p>1、先看两个集群例子：nginx集群，redis集群</p><p>2、然后总结</p><p>1、对称集群</p><p>​ 不同服务实例，功能地位相等(每一个实例提供的功能机会相同)</p><p>​ 定位：数据计算</p><p>2、非对称集群</p><p>​ 不同服务实例，功能地位不相等(每一个实例提供功能的机会不相同)</p><p>​ 定位：数据存储</p><h3 id="什么是docker集群-1" tabindex="-1"><a class="header-anchor" href="#什么是docker集群-1" aria-hidden="true">#</a> 什么是docker集群</h3><p>总结</p><p>1、docker集群是非对称集群 <img src="'+p+`" alt="Alt text"> ​ 见图进行解析</p><p>为什么要使用docker集群 ​ 从<code>docker</code>集群图来进行分析，<code>docker</code>里面运行着容器，如果<code>docker</code>宕机？</p><p><code>docker</code>容器对外提供 访问，如果访问量越大，一台<code>docker</code>的并发量毕竟有限</p><p>总结：</p><p>​ 1、单点故障问题</p><p>​ 2、性能问题</p><p>所以为了解决这两个问题，就出现了<code>docker</code>集群</p><h2 id="实现docker集群方式" tabindex="-1"><a class="header-anchor" href="#实现docker集群方式" aria-hidden="true">#</a> 实现docker集群方式</h2><p>​ 1、<code>swarm</code></p><p>​ 2、<code>k8s</code></p><p>​ 但是我们今天只会讲解<code>swarm</code>,今天我们选择<code>swarm</code></p><p>选择原因</p><p>1、<code>swarm</code>是<code>docker</code>官方提供的集群工具</p><p>2、<code>k8s</code>是谷歌开发的</p><p>3、<code>k8s</code>理解使用起来比较难</p><h2 id="swarm如何管理docker集群" tabindex="-1"><a class="header-anchor" href="#swarm如何管理docker集群" aria-hidden="true">#</a> swarm如何管理docker集群</h2><h3 id="swarm是什么-怎么理解" tabindex="-1"><a class="header-anchor" href="#swarm是什么-怎么理解" aria-hidden="true">#</a> swarm是什么，怎么理解？</h3><p><code>swarm</code> 就好比是地铁购票机安装员。同理<code>swarm</code>就是地铁购票机安装员</p><p><code>Docker Swarm </code>是 <code>Docker</code> 的集群管理工具。它将 <code>Docker</code> 主机池转变为单个虚拟 <code>Docker</code> 主机。 <code>Docker Swarm</code> 提供了标准的 <code>Docker API</code>，所有任何已经与 <code>Docker</code> 守护程序通信的工具都可以使用 <code>Swarm</code> 轻松地扩展到多个主机。</p><h3 id="swarm内部概念" tabindex="-1"><a class="header-anchor" href="#swarm内部概念" aria-hidden="true">#</a> swarm内部概念</h3><p>1、<code>node</code>节点概念</p><p>2、<code>task</code>概念 — 运行的容器</p><p>3、<code>service</code>概念 — 服务</p><p>4、<code>stack</code>概念 批量运行 服务</p><p>就是将集群的<code>docker</code>通过<code>node</code>分配角色的方式进行维护</p><p><code>node</code> 就是<code>docker</code>的别名，就好比，我们去公司上班，每一个人都有一个工号，工号就是我们的别名，那么<code>node</code>就是<code>docker</code>的别名，但是<code>node</code>有两个类型，<code>manager</code> 和<code>work</code>，就是讲<code>docker</code>分成了两类，就好比，公司里面有老板和员工，<code>manager</code>就是老板，<code>work</code>就是员工，老板是管理的，员工是干事的。有时候人工不够的时候，老板也过来干事。</p><p>1、<code>node</code> ：<code>docker</code>主机</p><p>2、管理节点（<code>manager</code>）</p><p>​ 管理<code>docker</code>集群</p><p>​ 1、集群配置</p><p>​ 2、容器服务管理。</p><p>​ 3、负载均衡</p><p>​ 4、集群管理？</p><p>3、工作节点 (<code>worker</code>)</p><p>​ 1、提供容器服务</p><h3 id="swarm是如何操作集群节点容器的" tabindex="-1"><a class="header-anchor" href="#swarm是如何操作集群节点容器的" aria-hidden="true">#</a> swarm是如何操作集群节点容器的？</h3><p>在使用之前我们必须要准备一些概念，这些概念是<code>swarm</code>的核心，掌握了这些概念，就已经理解了<code>swarm</code> 50%</p><p>后面都是基于这些概念的操作</p><p><code>service</code>是什么？</p><p>​ 是指不同节点容器集合，用来维护容器</p><p><code>task</code>是什么？</p><p>​ 在集群环境中，用来运行容器</p><p><code>stack</code>是什么？</p><p>​ 是指<code>stack</code>的集合，用来维护<code>service</code></p><h3 id="swarm如何创建docker集群" tabindex="-1"><a class="header-anchor" href="#swarm如何创建docker集群" aria-hidden="true">#</a> swarm如何创建docker集群</h3><p>条件</p><p>1、两台以上<code>docker</code>主机</p><p>2、<code>docker swarm</code></p><p>步骤</p><p>1、安装两台<code>docker</code>主机，使用<code>linux</code>或者<code>centos9.0</code>以上</p><p>​ 安装 24.0.7 版本以上的<code>docker</code>，会在主机上默认提供支持</p><p>2、如何使用<code>docker swarm</code>？</p><p>​ 1、输出<code>docker</code>命令，会看到有一个<code>swarm</code>管理命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> swarm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2、然后输入<code>docker swarm</code> 命令</p><p>​ 可以看到很多的帮助命令</p><p>​ 3、创建集群管理节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> swarm init –advertise-addr <span class="token number">192.168</span>.3.62
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 4、创建工作节点,另一台服务器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> swarm <span class="token function">join</span> <span class="token parameter variable">--token</span> SWMTKN-1-5fcwmt9yenjdfagt96o3l101p7nqg63z2uz3w4er9kwejb6kue-c61kc6cquf67lj9qspbf01wn0 <span class="token number">192.168</span>.3.62:2377
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 5、查看集群消息，查看工作节点和管理节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker-swarm运行商品微服务镜像" tabindex="-1"><a class="header-anchor" href="#docker-swarm运行商品微服务镜像" aria-hidden="true">#</a> docker swarm运行商品微服务镜像</h3><p>​ 条件</p><p>​ 1、<code>productservice_micro</code>镜像</p><p>​ 2、<code>docker service</code></p><p>​ 步骤</p><p>​ 1、查看<code>productservice_micro</code>镜像</p><p>​ 输入命令：<code>docker images</code></p><p>2、如何使用<code>docker service</code>?</p><p>​ 2.1、输出<code>docker</code>命令，会看到有一个service管理命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.2、然后输入<code>docker service</code>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker service </span>

Usage:  <span class="token function">docker</span> <span class="token function">service</span> COMMAND

Manage Swarm services

Commands:
  create      Create a new <span class="token function">service</span>
  inspect     Display detailed information on one or <span class="token function">more</span> services
  logs        Fetch the logs of a <span class="token function">service</span> or task
  <span class="token function">ls</span>          List services
  <span class="token function">ps</span>          List the tasks of one or <span class="token function">more</span> services
  <span class="token function">rm</span>          Remove one or <span class="token function">more</span> services
  rollback    Revert changes to a <span class="token function">service</span><span class="token string">&#39;s configuration
  scale       Scale one or multiple replicated services
  update      Update a service

Run &#39;</span><span class="token function">docker</span> <span class="token function">service</span> COMMAND --help&#39; <span class="token keyword">for</span> <span class="token function">more</span> information on a command.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3、创建服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span>   <span class="token function">service</span>  create <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">--name</span> productservice_service productservice_micro

​ <span class="token parameter variable">--replicas</span> 配置服务副本<span class="token punctuation">(</span>容器在不同节点启动<span class="token punctuation">)</span>

​ <span class="token parameter variable">--name</span> 服务名称

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker   service  create --replicas=1 --name productservice_service productservice_micro</span>
image productservice_micro:latest could not be accessed on a registry to record
its digest. Each <span class="token function">node</span> will access productservice_micro:latest independently,
possibly leading to different nodes running different
versions of the image.

9au92dsos65u5vcagaz4wabf1
overall progress: <span class="token number">1</span> out of <span class="token number">1</span> tasks 
<span class="token number">1</span>/1: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token punctuation">]</span> 
verify: Service converged 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.1 暴露服务(修改服务)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> update --publish-add <span class="token number">7077</span>:80 productservice_service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.4、列表服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.5、查看服务运行在哪个节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ps</span> productservice_service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.6、查看服务部署详细信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> inspect <span class="token parameter variable">--pretty</span> productservice_service

<span class="token punctuation">[</span>root@localhost microservice<span class="token punctuation">]</span><span class="token comment"># docker service  inspect --pretty  productservice_service</span>

ID:		26xji25mh5iftdmt1k7rrsck8
Name:		productservice_service
Service Mode:	Replicated
 Replicas:	<span class="token number">2</span>
Placement:
UpdateConfig:
 Parallelism:	<span class="token number">1</span>
 On failure:	pause
 Monitoring Period: 5s
 Max failure ratio: <span class="token number">0</span>
 Update order:      stop-first
RollbackConfig:
 Parallelism:	<span class="token number">1</span>
 On failure:	pause
 Monitoring Period: 5s
 Max failure ratio: <span class="token number">0</span>
 Rollback order:    stop-first
ContainerSpec:
 Image:		productservice_micro:latest
 Init:		<span class="token boolean">false</span>
Resources:
Endpoint Mode:	vip

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.7、服务动态伸缩（向其他节点添加服务副本）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> scale <span class="token assign-left variable">productservice_service</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.8、删除服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">rm</span> productservice_service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.9、服务如何进行外部访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> create <span class="token parameter variable">--replicas</span> <span class="token number">1</span>  <span class="token parameter variable">--publish</span> <span class="token number">7077</span>:80 <span class="token parameter variable">--name</span> lknproductservice_service  productservice_mirco 

​ <span class="token parameter variable">--publish</span> 发布端口例如 <span class="token number">7077</span>:80
 <span class="token parameter variable">--name</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.10、进行网络访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token number">192.168</span>.3.62:7077

​ <span class="token number">192.168</span>.3.61:7077
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-swarm运行nginx镜像" tabindex="-1"><a class="header-anchor" href="#docker-swarm运行nginx镜像" aria-hidden="true">#</a> docker swarm运行Nginx镜像</h3><p>​ 条件</p><p>​ 1、<code>lknnginx</code>镜像</p><p>​ 2、<code>docker service</code></p><p>​ 步骤</p><p>​ 1、查看<code>lknnginx</code>镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ 输入命令：<span class="token variable"><span class="token variable">\`</span><span class="token function">docker</span> images<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、如何使用 <code>docker service</code> ?</p><p>​ 2.1、输出<code>docker</code>命令，会看到有一个<code>service</code>管理命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.2、然后输入<code>docker service</code>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker service </span>

Usage:  <span class="token function">docker</span> <span class="token function">service</span> COMMAND

Manage Swarm services

Commands:
  create      Create a new <span class="token function">service</span>
  inspect     Display detailed information on one or <span class="token function">more</span> services
  logs        Fetch the logs of a <span class="token function">service</span> or task
  <span class="token function">ls</span>          List services
  <span class="token function">ps</span>          List the tasks of one or <span class="token function">more</span> services
  <span class="token function">rm</span>          Remove one or <span class="token function">more</span> services
  rollback    Revert changes to a <span class="token function">service</span><span class="token string">&#39;s configuration
  scale       Scale one or multiple replicated services
  update      Update a service

Run &#39;</span><span class="token function">docker</span> <span class="token function">service</span> COMMAND --help&#39; <span class="token keyword">for</span> <span class="token function">more</span> information on a command.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.3、创建服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> create <span class="token parameter variable">--replicas</span> <span class="token number">1</span>  <span class="token parameter variable">--name</span> lknnginx_service lknnginx

​ <span class="token parameter variable">--replicas</span> 配置服务副本<span class="token punctuation">(</span>容器在不同节点启动<span class="token punctuation">)</span>

​ <span class="token parameter variable">--name</span> 服务名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3.1 暴露服务(修改服务)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> update --publish-add <span class="token number">6066</span>:80 lknnginx_service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.4、列表服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.5、查看服务运行在哪个节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ps</span> lknnginx_service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.6、查看服务部署详细信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> inspect <span class="token parameter variable">--pretty</span> lknnginx_service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.7、服务动态伸缩（向其他节点添加服务副本）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> scale <span class="token assign-left variable">lknnginx_service</span><span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.8、删除服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">rm</span> lknnginx_service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2.9、服务如何进行外部访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> <span class="token function">service</span> create <span class="token parameter variable">--replicas</span> <span class="token number">1</span> <span class="token parameter variable">--publish</span> <span class="token number">6066</span>:80  <span class="token parameter variable">--name</span> lknnginx_service lknnginx  

​ <span class="token parameter variable">--publish</span> 发布端口例如 <span class="token number">6066</span>:80
 <span class="token parameter variable">--name</span> 服务名称
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 2.10、进行网络访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token number">192.168</span>.3.61:6066

​ <span class="token number">192.168</span>.3.62:6066
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-swarm批量运行-商品微服务镜像-nginx镜像" tabindex="-1"><a class="header-anchor" href="#docker-swarm批量运行-商品微服务镜像-nginx镜像" aria-hidden="true">#</a> docker swarm批量运行(商品微服务镜像/Nginx镜像)</h3><p>条件</p><p>​ 1、商品微服务镜像</p><p>​ 2、<code>Nginx</code>镜像</p><p>​ 3、<code>docker-compose.yml</code></p><p>​ 4、<code>stack</code></p><p>1、查看<code>productservice_micro</code>镜像和<code>lknnginx</code>镜像</p><p>​ 使用<code>productservice_micro</code>镜像来进行集群服务部署</p><p>2、如何使用<code>docker stack</code>?</p><p>​ 1、输出<code>docker</code>命令，会看到有一个<code>service</code>管理命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> stack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2、然后输入<code>docker stack</code>命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker stack </span>

Usage:  <span class="token function">docker</span> stack COMMAND

Manage Swarm stacks

Commands:
  config      Outputs the final config file, after doing merges and interpolations
  deploy      Deploy a new stack or update an existing stack
  <span class="token function">ls</span>          List stacks
  <span class="token function">ps</span>          List the tasks <span class="token keyword">in</span> the stack
  <span class="token function">rm</span>          Remove one or <span class="token function">more</span> stacks
  services    List the services <span class="token keyword">in</span> the stack

Run <span class="token string">&#39;docker stack COMMAND --help&#39;</span> <span class="token keyword">for</span> <span class="token function">more</span> information on a command.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 有很多的帮助命令</p><p>​ 3、创建堆栈(服务集合)</p><p>​ 1、创建一个<code>stack</code>目录(在当前目录/root下创建一个stack)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">mkdir</span> stack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2、配置yml文件</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>​ 在原有docker.compose.yml增加配置

<span class="token key atrule">​ version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>

<span class="token key atrule">​ deploy</span><span class="token punctuation">:</span> <span class="token comment">#集群模式配置</span>
<span class="token key atrule">​ mode</span><span class="token punctuation">:</span>

​ replicated <span class="token comment">#配置副本模式，gloab</span>
<span class="token key atrule">​ replicas</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token comment"># 副本份数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 3、创建stack</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> stack deploy <span class="token parameter variable">-c</span> docker-compose.yml rmstack

​ <span class="token parameter variable">-c</span> 是指定docker-compose.yml文件

​ rmcorestack 指定stack 标识<span class="token punctuation">(</span>名称<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 4、查看stack列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> stack <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 5、查看stack 服务列表信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> stack <span class="token function">ps</span> rmstack

​ 或者 <span class="token function">docker</span> <span class="token function">service</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、删除stack</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker</span> stack <span class="token function">rm</span> rmstack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 通过两个节点查看，所有的信息是否删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3.7&#39;</span>
services:
  lknnginx:
    image: lknnginx
    ports:
     - <span class="token number">8088</span>:80
    deploy:
      mode:
       replicated
      replicas: <span class="token number">2</span>
  productservice:
    image: productservice_micro
    ports:
     - <span class="token number">8090</span>:80
    deploy:
      mode:
       replicated
      replicas: <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 6、进行网络访问</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">192.168</span>.3.62 主节点

​ <span class="token number">192.168</span>.3.61 子节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-swarm-service之间通信" tabindex="-1"><a class="header-anchor" href="#docker-swarm-service之间通信" aria-hidden="true">#</a> docker swarm service之间通信</h3><p>条件</p><p>1、configs</p><p>2、docker-compose.yml</p><p>步骤</p><p>1、修改配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknnginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lknnginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6066<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span>
        replicated
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
  <span class="token key atrule">lknproductservice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> productservice_micro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 7077<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span>
        replicated
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、 批量运行<code>stack</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker stack  deploy  -c docker-stack-compose.yml  lknmicroservice</span>
Creating <span class="token function">service</span> lknmicroservice_lknproductservice
Creating <span class="token function">service</span> lknmicroservice_lknnginx
<span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker service ls</span>
ID             NAME                                MODE         REPLICAS   IMAGE                         PORTS
j8lkfx3p4n08   lknmicroservice_lknnginx            replicated   <span class="token number">2</span>/2        lknnginx:latest               *:6066-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp
qbjgonuvoynj   lknmicroservice_lknproductservice   replicated   <span class="token number">2</span>/2        productservice_micro:latest   *:7077-<span class="token operator">&gt;</span><span class="token number">80</span>/tcp
// 查看服务 个数
<span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker stack ls</span>
NAME              SERVICES
lknmicroservice   <span class="token number">2</span>

//删除
<span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker stack rm lknmicroservice</span>
Removing <span class="token function">service</span> lknmicroservice_lknnginx
Removing <span class="token function">service</span> lknmicroservice_lknproductservice
Removing network lknmicroservice_default

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-swarm-config实战" tabindex="-1"><a class="header-anchor" href="#docker-swarm-config实战" aria-hidden="true">#</a> docker swarm config实战</h3><p>1、创建config</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker config create lknnginx_config /root/microservice/compose/nginx.conf</span>
0z65o78rekq9marcx4htq29o9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、查看config</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker config ls</span>
ID                          NAME              CREATED          UPDATED
0z65o78rekq9marcx4htq29o9   lknnginx_config   <span class="token number">12</span> seconds ago   <span class="token number">12</span> seconds ago
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、使用config</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>在conf配置中，将nginx的监听端口改成了88，替换掉nginx中的默认80端口的配置文件，创建service时，将容器内部端口88端口映射成主机上90端口
 <span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker service create --replicas 2 --name lknnginx_nginx --publish  6066:80 --config source=lknnginx_config,target=/usr/local/nginx/conf/nginx.conf lknnginx</span>

 image lknnginx:latest could not be accessed on a registry to record
its digest. Each <span class="token function">node</span> will access lknnginx:latest independently,
possibly leading to different nodes running different
versions of the image.

jpye65gjt7b3vsskj9eifr1sw
overall progress: <span class="token number">1</span> out of <span class="token number">1</span> tasks 
<span class="token number">1</span>/1: running   <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token punctuation">]</span> 
verify: Service converged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-stack-deploy-配置" tabindex="-1"><a class="header-anchor" href="#docker-stack-deploy-配置" aria-hidden="true">#</a> docker stack deploy 配置</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknnginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lknnginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6066<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span>
        replicated
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token key atrule">configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span> lknnginx_config1
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /usr/local/nginx/conf/nginx.conf
  <span class="token key atrule">lknproductservice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> productservice_micro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 7077<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span>
        replicated
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token key atrule">configs</span><span class="token punctuation">:</span>
  <span class="token comment">#lknnginx_config:</span>
    <span class="token comment">#external: true</span>
   <span class="token key atrule">lknnginx_config1</span><span class="token punctuation">:</span>
     <span class="token key atrule">file</span><span class="token punctuation">:</span> /root/microservice/compose/nginx.conf


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3.7&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknnginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lknnginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 6066<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span>
        replicated
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
    <span class="token key atrule">configs</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">source</span><span class="token punctuation">:</span> lknnginx_config
        <span class="token key atrule">target</span><span class="token punctuation">:</span> /usr/local/nginx/conf/nginx.conf
  <span class="token key atrule">lknproductservice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> productservice_micro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 7077<span class="token punctuation">:</span><span class="token number">80</span>
    <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
      <span class="token key atrule">mode</span><span class="token punctuation">:</span>
        replicated
      <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token key atrule">configs</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknnginx_config</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker stack  deploy -c docker-stack-compose.yml lknmicroservice</span>
Creating config lknmicroservice_lknnginx_config1
Creating <span class="token function">service</span> lknmicroservice_lknnginx
Creating <span class="token function">service</span> lknmicroservice_lknproductservice

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记" aria-hidden="true">#</a> 笔记</h2><h2 id="一、主节点部署" tabindex="-1"><a class="header-anchor" href="#一、主节点部署" aria-hidden="true">#</a> 一、主节点部署</h2><h2 id="查linux-安装的docker-信息" tabindex="-1"><a class="header-anchor" href="#查linux-安装的docker-信息" aria-hidden="true">#</a> 查linux 安装的docker 信息</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+t+`" alt="Alt text"></p><p>看当前docker Swarm状态 inactive 不是集群状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker swarm  init --advertise-addr 192.168.3.62</span>
Swarm initialized: current <span class="token function">node</span> <span class="token punctuation">(</span>dho9rzjfgyubig5qvyb5e35bg<span class="token punctuation">)</span> is now a manager.

To <span class="token function">add</span> a worker to this swarm, run the following command:

    <span class="token function">docker</span> swarm <span class="token function">join</span> <span class="token parameter variable">--token</span> SWMTKN-1-5fcwmt9yenjdfagt96o3l101p7nqg63z2uz3w4er9kwejb6kue-c61kc6cquf67lj9qspbf01wn0 <span class="token number">192.168</span>.3.62:2377

To <span class="token function">add</span> a manager to this swarm, run <span class="token string">&#39;docker swarm join-token manager&#39;</span> and follow the instructions.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 docker node ls 查看是否启动成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker node  ls</span>
ID                            <span class="token environment constant">HOSTNAME</span>                STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
dho9rzjfgyubig5qvyb5e35bg *   localhost.localdomain   Ready     Active         Leader           <span class="token number">24.0</span>.7

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 docker info,查看集群节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
Swarm: active
  NodeID: dho9rzjfgyubig5qvyb5e35bg
  Is Manager: <span class="token boolean">true</span>
  ClusterID: 7crzflf8x2ma218wfg9oou8ke
  Managers: <span class="token number">1</span>
  Nodes: <span class="token number">1</span>
  Default Address Pool: <span class="token number">10.0</span>.0.0/8  
  SubnetSize: <span class="token number">24</span>
  Data Path Port: <span class="token number">4789</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、子节点部署" tabindex="-1"><a class="header-anchor" href="#二、子节点部署" aria-hidden="true">#</a> 二、子节点部署</h2><p>1、在子节服务器，输入主节点docker join 连接地址，执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> swarm <span class="token function">join</span> <span class="token parameter variable">--token</span> SWMTKN-1-5fcwmt9yenjdfagt96o3l101p7nqg63z2uz3w4er9kwejb6kue-c61kc6cquf67lj9qspbf01wn0 <span class="token number">192.168</span>.3.62:2377
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、查看 docker info ，只能在主节点操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker node ls</span>
ID                            <span class="token environment constant">HOSTNAME</span>                STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
dho9rzjfgyubig5qvyb5e35bg *   localhost.localdomain   Ready     Active         Leader           <span class="token number">24.0</span>.7
dpasxse42lnrudsd2dm0cdka9     localhost.localdomain   Ready     Active                          <span class="token number">24.0</span>.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、子节点是不能操作 node 的,只能在主节点上进行操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker node ls</span>
Error response from daemon: This <span class="token function">node</span> is not a swarm manager. Use <span class="token string">&quot;docker swarm init&quot;</span> or <span class="token string">&quot;docker swarm join&quot;</span> to connect this <span class="token function">node</span> to swarm and try again.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="raft算法" tabindex="-1"><a class="header-anchor" href="#raft算法" aria-hidden="true">#</a> raft算法</h2><p>选举算法</p><p>1、三个端口： 主机端口：8088 service端口：80 容器端口：80</p><h2 id="如何理解service和容器关系" tabindex="-1"><a class="header-anchor" href="#如何理解service和容器关系" aria-hidden="true">#</a> 如何理解service和容器关系</h2><p>1、一对多关系<br> 2、service 相当于网关容器相当于具体实例<br> 3、service和容器之间：最小活跃数算法。 实现负载均衡。</p><p>docker service ps &lt;容器&gt; 查看日志</p><h2 id="service调度容器" tabindex="-1"><a class="header-anchor" href="#service调度容器" aria-hidden="true">#</a> service调度容器</h2><p>如何调度的？ 任务调度算法<br> 作用：自动选择容器运行到什么节点<br> 容器在主机环境<br> 1、cpu<br> 2、内存<br> 3、磁盘<br> 4、带宽<br> 5、容器数量<br> 主要参考的环境：cpu 、内存。</p><p>1、先检查当前节点容器数量<br> 2、然后容器分别分配在哪些节点，以及节点容器数量<br> 3.61 ------------ 3.62<br> 100 80 容器放到 3.62 节点去运行。合理利用资源。<br> 如果容器放到了3.62去运行<br> 1、cpu 内存满了。 swarm缺陷<br> 2、如果容器运行失败。 调度算法：最小活跃数，轮询算法。 3、如果容器节点数量一样。 调度算法：轮询算法</p><p>总结：主要是对象：容器。根据：容器数量。</p><p>K8s调度容器，可以解决。 可以根据： 1、容器数量<br> 2、cpu 使用量<br> 3、内存使用量</p><p>Service 是靠什么来实现调度 。 Task（线程）----&gt;运行一个容器</p><p>service---task--容器</p><p>总结：一个service调度多个容器</p><h2 id="主机文件挂载到容器" tabindex="-1"><a class="header-anchor" href="#主机文件挂载到容器" aria-hidden="true">#</a> 主机文件挂载到容器</h2><p>docker sawrm config 挂载</p><h2 id="service-编排" tabindex="-1"><a class="header-anchor" href="#service-编排" aria-hidden="true">#</a> service 编排</h2><h2 id="service-之间通信" tabindex="-1"><a class="header-anchor" href="#service-之间通信" aria-hidden="true">#</a> service 之间通信</h2><p>1、stack<br> 2、docker-compose.yml<br> 3、docker-compose文件内置的名称通信<br> 4、config管理集群配置文件</p>`,228);function b(h,g){const e=l("router-link");return o(),r("div",null,[v,n("nav",m,[n("ul",null,[n("li",null,[a(e,{to:"#目录"},{default:i(()=>[s("目录")]),_:1})]),n("li",null,[a(e,{to:"#docker-集群"},{default:i(()=>[s("Docker-集群")]),_:1})]),n("li",null,[a(e,{to:"#什么是docker集群"},{default:i(()=>[s("什么是docker集群")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#什么是集群"},{default:i(()=>[s("什么是集群")]),_:1})]),n("li",null,[a(e,{to:"#集群类型"},{default:i(()=>[s("集群类型")]),_:1})]),n("li",null,[a(e,{to:"#什么是docker集群-1"},{default:i(()=>[s("什么是docker集群")]),_:1})])])]),n("li",null,[a(e,{to:"#实现docker集群方式"},{default:i(()=>[s("实现docker集群方式")]),_:1})]),n("li",null,[a(e,{to:"#swarm如何管理docker集群"},{default:i(()=>[s("swarm如何管理docker集群")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#swarm是什么-怎么理解"},{default:i(()=>[s("swarm是什么，怎么理解？")]),_:1})]),n("li",null,[a(e,{to:"#swarm内部概念"},{default:i(()=>[s("swarm内部概念")]),_:1})]),n("li",null,[a(e,{to:"#swarm是如何操作集群节点容器的"},{default:i(()=>[s("swarm是如何操作集群节点容器的？")]),_:1})]),n("li",null,[a(e,{to:"#swarm如何创建docker集群"},{default:i(()=>[s("swarm如何创建docker集群")]),_:1})]),n("li",null,[a(e,{to:"#docker-swarm运行商品微服务镜像"},{default:i(()=>[s("docker swarm运行商品微服务镜像")]),_:1})]),n("li",null,[a(e,{to:"#docker-swarm运行nginx镜像"},{default:i(()=>[s("docker swarm运行Nginx镜像")]),_:1})]),n("li",null,[a(e,{to:"#docker-swarm批量运行-商品微服务镜像-nginx镜像"},{default:i(()=>[s("docker swarm批量运行(商品微服务镜像/Nginx镜像)")]),_:1})]),n("li",null,[a(e,{to:"#docker-swarm-service之间通信"},{default:i(()=>[s("docker swarm service之间通信")]),_:1})]),n("li",null,[a(e,{to:"#docker-swarm-config实战"},{default:i(()=>[s("docker swarm config实战")]),_:1})])])]),n("li",null,[a(e,{to:"#docker-stack-deploy-配置"},{default:i(()=>[s("docker stack deploy 配置")]),_:1})]),n("li",null,[a(e,{to:"#笔记"},{default:i(()=>[s("笔记")]),_:1})]),n("li",null,[a(e,{to:"#一、主节点部署"},{default:i(()=>[s("一、主节点部署")]),_:1})]),n("li",null,[a(e,{to:"#查linux-安装的docker-信息"},{default:i(()=>[s("查linux 安装的docker 信息")]),_:1})]),n("li",null,[a(e,{to:"#二、子节点部署"},{default:i(()=>[s("二、子节点部署")]),_:1})]),n("li",null,[a(e,{to:"#raft算法"},{default:i(()=>[s("raft算法")]),_:1})]),n("li",null,[a(e,{to:"#如何理解service和容器关系"},{default:i(()=>[s("如何理解service和容器关系")]),_:1})]),n("li",null,[a(e,{to:"#service调度容器"},{default:i(()=>[s("service调度容器")]),_:1})]),n("li",null,[a(e,{to:"#主机文件挂载到容器"},{default:i(()=>[s("主机文件挂载到容器")]),_:1})]),n("li",null,[a(e,{to:"#service-编排"},{default:i(()=>[s("service 编排")]),_:1})]),n("li",null,[a(e,{to:"#service-之间通信"},{default:i(()=>[s("service 之间通信")]),_:1})])])]),k])}const x=c(u,[["render",b],["__file","docker02.html.vue"]]);export{x as default};