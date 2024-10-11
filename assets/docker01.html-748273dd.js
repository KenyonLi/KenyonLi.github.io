import{_ as o,r as c,o as p,c as r,a as n,b as a,w as i,d as s,e as t}from"./app-c1c3c937.js";const d="/images/docker/01/docker01_0001.png",u="/images/docker/01/docker01_0002.png",v="/images/docker/01/docker01_0003.png",m="/images/docker/01/docker01_0004.png",k={},b=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),g={class:"table-of-contents"},h=t('<h2 id="微服务部署docker" tabindex="-1"><a class="header-anchor" href="#微服务部署docker" aria-hidden="true">#</a> 微服务部署Docker</h2><h2 id="docker核心概念" tabindex="-1"><a class="header-anchor" href="#docker核心概念" aria-hidden="true">#</a> Docker核心概念</h2><h3 id="为什么要学习docker" tabindex="-1"><a class="header-anchor" href="#为什么要学习docker" aria-hidden="true">#</a> 为什么要学习docker</h3><p>最近你几年容器技术异常火热，作为容器技术代表的docker自然也炙手可热，简直就是软件界的网红，这么火的docker早就已经应用在生产环境中，国内容圈内最具有代表性的大厂就是阿里京东。<br> 京东从14年开始在生产环境进行容器化部署，15年618，京东跑了15万个docker实例，到目前为止已经实现了100%应用容器化部署，根据CNCF(Cloud Native Computing Foundation) 数据统计，世界上最大的docker集群部署在京东！</p><blockquote><p>京东首席架构师刘海锋：京东是Kubernetes最早期采用者之一。公司目前管理世界上最大的Kubernetes集群，多集群超过20,000多个裸机服务分布在多个地区的数据中心。</p></blockquote><h3 id="什么是docker" tabindex="-1"><a class="header-anchor" href="#什么是docker" aria-hidden="true">#</a> 什么是Docker</h3><p><img src="'+d+`" alt="Alt text"><br> 咱们先来看一张图,这就是docker,这个图片上面给我展示几个信息。那么该如何理解呢？ 接平来我们先看一下这个图出现的场景，我们就会明白了，大家或多或少的听说过码头场景，那么没有接触过码头的场景同学，那么我们有必要介绍一下，在码头场景里面会存在着几个角色：</p><p>1、货物<br> 2、码头，码头工人，大船</p><p>码头工人将货物从码头上放到大船上，最后由大船运送另一个码头<br> 如果这个时候货物水果，化学药品，木材。那么需要使用三条船进行运输，传导致新的问题，增加了成本<br> 如果放在一条船上，水果、化学物品、木材、三种货物之间会相互受影响导致货物损坏。<br> 正是这个两个原因导致了新事物的诞生，大家知道是什么吗？<br> 就是集装箱，集装箱之间没有任何影响。就算放到一条船上没有任何问题，所以既节约成本，又解决了货物损坏的问题。<br> docker就是大船和集装箱组成的整体<br> 接下来，我们看一下docker在软件中的情况，为什么会出现docker呢？我们要搞清楚这个问题，必须要了解docker背景，要了解docker背景，必须从单机开始，好的，那么接下来，咋们来看一下单机</p><p>Docker 就是容器的集合<br> Docker:主机集合<br> 1、主机：mac windows linux<br> Linux集合</p><h2 id="为什么使用docker" tabindex="-1"><a class="header-anchor" href="#为什么使用docker" aria-hidden="true">#</a> 为什么使用docker</h2><p>docer使用的时机是开发微服务时候。如果是单机系统开发，没有必要，想要跨平台，直接使用linux就可以了， 那对于高并发，高可用的系统呢，微服务就是为高并发，高可用做准备的。</p><h2 id="docker使用时机" tabindex="-1"><a class="header-anchor" href="#docker使用时机" aria-hidden="true">#</a> docker使用时机</h2><p>微服务或者SOA的时候就使用docker<br> 单机时代缺点<br> 如果我们开发一个电商微服务，里面有三个服务，商品服务、订单服务，支付服务，我们部署的情况是这样的。<br> 商品、订单、支付三个服务同时部署在单机环境。那么，这个时候，如果三个服务分别由不同的语言开发，例如：c#,java,python 会出现什么问题。<br> 1、环境冲突<br> 2、端口冲突<br> 3、不允许宕机<br> 为了解决这个问题，所以我们出现了虚拟机，那么虚拟机是如何解决的呢？<br> 虚拟机时代缺点<br> 增加了两个角色，虚拟机管理器和虚拟机，虚拟机管理器创建不同的虚拟机，虚拟机之间是隔离的。不管用什么语言开发服务，只要部署在不同的虚拟机，就能解决环境冲突和端口冲突的问题。但是， 会导致什么新的问题呢？<br> 总结：<br> 1、耗硬件资源<br> 占用空闲内存<br> 2、启动非常耗时<br> 3、虚拟机版本问题</p><p>容器时代<br> 为了解决这个问题，所以出现了容器时代，那么容器是如何解决的呢？首先虚拟机管理器和虚拟机全部剔除，然后就新增2个角色，容器和docker.那么是如何解决的，容器之间是隔离的，容器启动速度和关闭速度非常快，而且资源占用率非常低，不管用什么语言开发的服务，那么依然都不会互相影响。</p><h2 id="docker-总结" tabindex="-1"><a class="header-anchor" href="#docker-总结" aria-hidden="true">#</a> docker 总结</h2><p>1、docker 是一个开源的应用容器引擎<br> 2、docker 可以打包应用到容器中，并且可以进行移植。<br> 3、容器之间完全隔离<br> 4、容器性能开销极低。</p><h2 id="docker-如何使用" tabindex="-1"><a class="header-anchor" href="#docker-如何使用" aria-hidden="true">#</a> docker 如何使用？</h2><p>docker概念介绍<br> 在docker里有几个非常重要的概念，需要理解，如何理解了，就理解了docker 80%内容，那到底是什么呢？<br> 1、容器：标准化的应用（集装箱）<br> 2、镜像：创建容器的模板（集装箱模板）<br> 3、仓库：存储镜像（码头）<br> 4、docker主机：管理容器和镜像（集装箱和大船）<br> 5、docker-客户端：操作容器和镜像（码头工人）</p><p>这此地方我们可以进行类比一下就可以知道：容器 === 集装箱,货物 === 容器内部服务，码头 === 仓库，码头工人=== docker主机，但是大家发现，还是无法从程序的世界进行理解，我们再看一下web应用场景<br> 客户端 === doocker 客户端<br> 服务端 === docker -主机 数据库 === 仓库 数据表 === 镜像<br> 数据 === 容器 所以我们docker基本运行架构图就是这样的。</p><h2 id="docker概念之间关系" tabindex="-1"><a class="header-anchor" href="#docker概念之间关系" aria-hidden="true">#</a> Docker概念之间关系</h2><h3 id="docker下载安装" tabindex="-1"><a class="header-anchor" href="#docker下载安装" aria-hidden="true">#</a> Docker下载安装</h3><p>1、Docker版本 20.03版本之后 1、CE（Community Edition: 社区版） ---- 免费 2、EE（Enterprise Edition: 企业版）---- 收费</p><p>2、windows 安装 条件 1、windows 10</p><pre><code>2、开启Hyper-V

3、安装Toolbox

最新版 Toolbox 下载地址： https://www.docker.com/get-docker
点击 Download Desktop and Take a Tutorial，并下载 Windows 的版本
</code></pre><p>3、linux安装</p><pre><code>1、centos9.0 以上的版本

2、安装docker 版本仓库 docker版本

	2.1 设置仓库
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      <span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>	2.2  稳定仓库
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      <span class="token function">sudo</span> yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>3、安装docker(默认安装最新版本)
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      <span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="如果要安装其他版本" tabindex="-1"><a class="header-anchor" href="#如果要安装其他版本" aria-hidden="true">#</a> 如果要安装其他版本</h3><p>要安装特定版本的 Docker Engine-Community，请在存储库中列出可用版本，然后选择并安装：</p><p>1、列出并排序您存储库中可用的版本。此示例按版本号（从高到低）对结果进行排序。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>              yum list docker-ce <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>

                    docker-ce.x86_64  <span class="token number">3</span>:18.09.1-3.el7                     docker-ce-stable
                    docker-ce.x86_64  <span class="token number">3</span>:18.09.0-3.el7                     docker-ce-stable
                    docker-ce.x86_64  <span class="token number">18.06</span>.1.ce-3.el7                    docker-ce-stable
                    docker-ce.x86_64  <span class="token number">18.06</span>.0.ce-3.el7                    docker-ce-stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>2、通过其完整的软件包名称安装特定版本，该软件包名称是软件包名称（docker-ce）加上版本字符串（第二列），        
</code></pre><p>从第一个冒号（:）一直到第一个连字符，并用连字符（-）分隔。例如：docker-ce-18.09.1。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>      <span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span> docker-ce-cli-<span class="token operator">&lt;</span>VERSION_STRING<span class="token operator">&gt;</span> containerd.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>4、docker启动
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>     <span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
     <span class="token comment"># 设置为开机启动</span>
     <span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>5、docker 运行(判断是否安装成功)
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、docker 管理命令介绍</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  builder     Manage builds 管理构建
  config      Manage Docker configs 管理配置
  container   Manage containers 管理容器
  context     Manage contexts 管理上下文
  engine      Manage the <span class="token function">docker</span> engine 管理引擎
  image       Manage images 管理镜像
  network     Manage networks 管理网络
  <span class="token function">node</span>        Manage Swarm nodes 管理节点<span class="token punctuation">(</span>集群<span class="token punctuation">)</span>
  plugin      Manage plugins 管理插件
  secret      Manage Docker secrets 管理密钥
  <span class="token function">service</span>     Manage services 管理服务
  stack       Manage Docker stacks 管理
  swarm       Manage Swarm 管理集群
  system      Manage Docker管理系统
  trust       Manage trust on Docker images 管理信任
  volume      Manage volumes 管理数据挂载<span class="token punctuation">(</span>数据持久化 <span class="token operator">==</span><span class="token operator">=</span> 永久保存<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-删除镜像-命令" tabindex="-1"><a class="header-anchor" href="#docker-删除镜像-命令" aria-hidden="true">#</a> docker 删除镜像 命令</h2>`,46),f={href:"https://blog.51cto.com/u_16213322/7576793",target:"_blank",rel:"noopener noreferrer"},x=t(`<h3 id="docker-删除镜像命令详解" tabindex="-1"><a class="header-anchor" href="#docker-删除镜像命令详解" aria-hidden="true">#</a> Docker 删除镜像命令详解</h3><p>Docker是一种流行的容器化平台，它允许开发者打包、分发和运行应用程序及其依赖项。在使用Docker进行开发和测试时，我们可能会创建许多镜像，有时我们需要删除不再使用的镜像以释放磁盘空间。本文将详细介绍如何使用Docker删除镜像的命令。</p><h3 id="docker-删除镜像的命令" tabindex="-1"><a class="header-anchor" href="#docker-删除镜像的命令" aria-hidden="true">#</a> Docker 删除镜像的命令</h3><p>Docker提供了多个命令来删除镜像，以下是一些常用的命令：</p><p><code>docker rmi</code>：用于删除一个或多个本地镜像。 <code>docker image prune</code>：删除未被任何容器使用的镜像。 <code>docker image prune -a</code>：删除所有未被使用的镜像，包括标签为none的镜像。 接下来我们将逐个介绍这些命令的使用方法。</p><ol><li>docker rmi命令 使用docker rmi命令可以删除一个或多个本地镜像。其基本语法为：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>IMAGE<span class="token punctuation">..</span>.<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li></li></ol><p>其中，IMAGE为要删除的镜像的名称或ID，可以一次指定多个。</p><p>以下是一些常见的docker rmi命令的示例：</p><p>删除单个镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi ubuntu:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li></li></ol><p>删除多个镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi ubuntu:latest nginx:1.19.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li></li></ol><p>注意：如果删除的镜像正在被容器使用，则会出现错误。如果确实需要强制删除镜像，请添加-f选项。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> ubuntu:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li></li><li>docker image prune命令 使用docker image prune命令可以删除未被任何容器使用的镜像。其基本语法为：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> image prune <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li></li></ol><p>以下是一些常见的docker image prune命令的示例：</p><p>删除未被任何容器使用的镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> image prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li></li></ol><p>删除所有未被使用的镜像，包括标签为none的镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> image prune <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li></li><li>docker container prune命令 使用<code>docker container prune</code>命令可以删除未运行的容器。其基本语法为：</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container prune <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li></li></ol><p>以下是一些常见的docker container prune命令的示例：</p><p>删除所有未运行的容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li></li></ol><p>删除所有未运行的容器，并同时删除关联的网络：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> container prune <span class="token parameter variable">--volumes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">containerId</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> lkn.devops <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$containerId</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$containerId</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token function">docker</span> stop <span class="token variable">$containerId</span>
   <span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable">$containerId</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>镜像的常用命令，包括docker rmi、docker image prune和docker container prune。根据实际 来删除镜像以释放磁盘空间。在使用这些命令时，务必小心，以免误删重要的镜像或容器。</p><h3 id="centos9-安装异常处理" tabindex="-1"><a class="header-anchor" href="#centos9-安装异常处理" aria-hidden="true">#</a> Centos9 安装异常处理</h3><h4 id="_1、emulate-docker-cli-using-podman-create-etc-containers-nodocker-to-quiet-msg-error-open-proc-sel" tabindex="-1"><a class="header-anchor" href="#_1、emulate-docker-cli-using-podman-create-etc-containers-nodocker-to-quiet-msg-error-open-proc-sel" aria-hidden="true">#</a> 1、Emulate Docker CLI using podman. Create /etc/containers/nodocker to quiet msg. Error: open /proc/sel</h4>`,41),q={href:"https://blog.csdn.net/marc_chen/article/details/117869572",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove <span class="token function">docker</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2、error-cannot-connect-to-the-docker-daemon-at-unix-var-run-docker-sock-is-the-docker-daemon-runn" tabindex="-1"><a class="header-anchor" href="#_2、error-cannot-connect-to-the-docker-daemon-at-unix-var-run-docker-sock-is-the-docker-daemon-runn" aria-hidden="true">#</a> 2、ERROR: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon runn</h4>`,2),_={href:"http://www.manongjc.com/detail/64-yincbyewmhuovor.html",target:"_blank",rel:"noopener noreferrer"},D=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> systemctl daemon-reload <span class="token operator">&amp;&amp;</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker基本使用" tabindex="-1"><a class="header-anchor" href="#docker基本使用" aria-hidden="true">#</a> docker基本使用</h2><p>查看 docker 是否安装成功<br> docker version/docker -version/docker-v<br> 查看docker安装地址<br> cd/var/lib/docker<br> 查询docker如何使用<br> docker<br> 至于其他的一些命令，可以百度</p><h2 id="docker运行商品微服务" tabindex="-1"><a class="header-anchor" href="#docker运行商品微服务" aria-hidden="true">#</a> Docker运行商品微服务</h2><p>条件：<br> 1、电商微服务系统<br> 2、Dockerfile文件<br> 步骤<br> 1、先创建电商微服务系统<br> 2、然后发布商品微服务到Linux<br> 3、然后创建Dockerfile文件<br> 4、然后配置Dockerfile</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>FROM mcr.microsoft.com/dotnet/aspnet<span class="token punctuation">:</span><span class="token number">7.0</span>
WORKDIR /publish
EXPOSE 80
EXPOSE 443
COPY publish/ /publish
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;dotnet&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;lkn.microservice.productservice.dl.dll&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、生成商品微服务镜像<br> 输入命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> productservice_micro <span class="token builtin class-name">.</span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6、启动镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> run   productservice_micro 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一种：启动成功，但是外网是不无法访问 <img src="`+u+`" alt="Alt text"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># curl  http://192.168.3.61:80</span>
curl: <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span> Failed to connect to <span class="token number">192.168</span>.3.61 port <span class="token number">80</span>: 拒绝连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第二种：启动方法，但报错。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost microservice<span class="token punctuation">]</span><span class="token comment"># docker run -P  productservice_micro </span>
docker: Error response from daemon: driver failed programming external connectivity on endpoint nifty_ganguly <span class="token punctuation">(</span>d07bad7f448bfa562865ac781a0a21e20724489d30b8e94596233d556ab1a9e9<span class="token punctuation">)</span>:  <span class="token punctuation">(</span>iptables failed: iptables <span class="token parameter variable">--wait</span> <span class="token parameter variable">-t</span> nat <span class="token parameter variable">-A</span> DOCKER <span class="token parameter variable">-p</span> tcp <span class="token parameter variable">-d</span> <span class="token number">0</span>/0 <span class="token parameter variable">--dport</span> <span class="token number">32797</span> <span class="token parameter variable">-j</span> DNAT --to-destination <span class="token number">172.17</span>.0.2:443 <span class="token operator">!</span> <span class="token parameter variable">-i</span> docker0: iptables: No chain/target/match by that name.
 <span class="token punctuation">(</span>exit status <span class="token number">1</span><span class="token punctuation">))</span>.
ERRO<span class="token punctuation">[</span>0000<span class="token punctuation">]</span> error waiting <span class="token keyword">for</span> container:  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="处理方法-只需重启docke" tabindex="-1"><a class="header-anchor" href="#处理方法-只需重启docke" aria-hidden="true">#</a> 处理方法，只需重启docke</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost microservice<span class="token punctuation">]</span><span class="token comment"># service docker restart</span>
Redirecting to /bin/systemctl restart docker.service

<span class="token comment">## 查看 docker 状态</span>
systemctl status docker.service 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次运行,可以启动成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost microservice<span class="token punctuation">]</span><span class="token comment"># docker run -P  productservice_micro </span>
warn: Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span>
      Storing keys <span class="token keyword">in</span> a directory <span class="token string">&#39;/root/.aspnet/DataProtection-Keys&#39;</span> that may not be persisted outside of the container. Protected data will be unavailable when container is destroyed.
warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager<span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">]</span>
      No XML encryptor configured. Key <span class="token punctuation">{</span>99a9343f-aeab-4107-801c-a72adc920a7d<span class="token punctuation">}</span> may be persisted to storage <span class="token keyword">in</span> unencrypted form.
info: Microsoft.Hosting.Lifetime<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span>
      Now listening on: http://<span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80
info: Microsoft.Hosting.Lifetime<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      Application started. Press Ctrl+C to shut down.
info: Microsoft.Hosting.Lifetime<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      Hosting environment: Production
info: Microsoft.Hosting.Lifetime<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker镜像使用" tabindex="-1"><a class="header-anchor" href="#docker镜像使用" aria-hidden="true">#</a> Docker镜像使用</h2><p>首先我们必须知道镜像如何使用</p><p>1、镜像管理命令介绍</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、镜像获取 2.1 先搜索镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> search <span class="token operator">&lt;</span>镜像<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>2.2 然后下载镜像
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>        <span class="token function">docker</span> image pull 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、镜像列表</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">docker</span> image <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、镜像列表基本状态解析 各个选项说明:</p><ul><li>**REPOSITORY：**表示镜像的仓库源</li><li>**TAG：**镜像的标签</li><li>**IMAGE ID：**镜像ID</li><li>**CREATED：**镜像创建时间</li><li>**SIZE：**镜像大小 5、镜像详细</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">docker</span> image inspect <span class="token operator">&lt;</span>镜像id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6、镜像删除</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">docker</span> image <span class="token function">rm</span> <span class="token operator">&lt;</span>镜像id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7、镜像删除构建失败的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">docker</span> image prune
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>7.1 清理未使用的镜像
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> image prune <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>7.2 强制删除镜像
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token operator">&lt;</span>镜像id<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>8、镜像设置标签,也叫镜像设置版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">docker</span> image tag productservice_micro  productservice_micro:1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost microservice<span class="token punctuation">]</span><span class="token comment"># docker image tag productservice_micro  productservice_micro:1.0.0</span>
<span class="token comment">## 查看镜像 修改版本</span>
<span class="token punctuation">[</span>root@localhost microservice<span class="token punctuation">]</span><span class="token comment"># docker image</span>
image   images  
<span class="token punctuation">[</span>root@localhost microservice<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY             TAG       IMAGE ID       CREATED        SIZE
productservice_micro   <span class="token number">1.0</span>.0     0dbf03c78b79   <span class="token number">28</span> hours ago   220MB <span class="token comment">## 已经修改的版本</span>
productservice_micro   latest    0dbf03c78b79   <span class="token number">28</span> hours ago   220MB
hello-world            latest    9c7a54a9a43c   <span class="token number">6</span> months ago   <span class="token number">13</span>.3kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、镜像历史（了解镜像的操作记录）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">docker</span> image <span class="token function">history</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token operator">&lt;</span>IMAGEid<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>10、导出镜像导入导出</p><pre><code>  10.1 镜像导入
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">docker</span> image <span class="token function">import</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> <span class="token function">file</span><span class="token operator">|</span>URL<span class="token operator">|</span>- <span class="token punctuation">[</span>REPOSITORY<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>   10.2 镜像导入
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">docker</span> image load <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>

       Options:
               -i, <span class="token parameter variable">--input</span> string   Read from <span class="token function">tar</span> archive file, instead of STDIN
              -q, <span class="token parameter variable">--quiet</span>          Suppress the load output	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code> 10.3 镜像导出，备份
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> image save <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>IMAGE<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker容器使用" tabindex="-1"><a class="header-anchor" href="#docker容器使用" aria-hidden="true">#</a> docker容器使用</h2><p>1、容器命令介绍</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> container   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>容器的修改和增删</p><pre><code>2、运行容器rmcore  
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> run rmcore  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>3、查看容器列表
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>3、后台运行rmcore
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span>  run <span class="token parameter variable">-d</span> rmcore

		<span class="token parameter variable">-d</span> 后台执行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>4、暴露rmcore端口
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> rmcore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>	4.1 自定义端口暴露
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">2020</span>:80 <span class="token number">2021</span>:443 rmcore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code> 5、进入容器
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> rmcore /bin/bash

		<span class="token parameter variable">-i</span> :交互式操作

		 t <span class="token builtin class-name">:</span> 终端

		/bin/bash 放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash，就好比xshell一样
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code> 6、退出容器
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code>7、停止容器
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> stop rmcore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><pre><code> 8、启动容器
</code></pre><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>		<span class="token function">docker</span> start rmcore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">unrar</span> x asp.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker容器结构" tabindex="-1"><a class="header-anchor" href="#docker容器结构" aria-hidden="true">#</a> Docker容器结构</h2><h3 id="docker-镜像容器总结" tabindex="-1"><a class="header-anchor" href="#docker-镜像容器总结" aria-hidden="true">#</a> docker 镜像容器总结</h3><p>总结：<br> 1、镜像和容器是一对多关系<br> 2、容器内部好像是一个linux系统<br> 3、从主机可以进入到容器内部，进行命令操作<br> 4、镜像不可写，容器可以读写<br> 大家现在有一个问题，如果我们想构建一个自己的镜像改怎么做呢？ 那么现在我们开始学习Dockerfile,那么Dockerfile有什么作用呢？就是构建我们想要的任何镜像，现在，我们已经运行了一个aspnetcore项目，但是如果我想给aspnetcore做负载均衡，那么我该怎么做呢？是不是必须有一个nginx,可以nginx镜像不像aspnetcore有vs工具，如果我们想构建一个nginx,那么我们怎么办呢？有办法，那就是Dockerfile.现在，如果搭建想构建一个nginx镜像，那么，我们先了解一下Dockerfile.</p><h4 id="docker-dockerfile" tabindex="-1"><a class="header-anchor" href="#docker-dockerfile" aria-hidden="true">#</a> Docker Dockerfile</h4><p>Dockerfile是什么<br> Dockerfile是一个用来构建镜像的文本文件，文本内容包含了一条条构建镜像所需的指令和说明。</p><h4 id="dockerfile文件指令" tabindex="-1"><a class="header-anchor" href="#dockerfile文件指令" aria-hidden="true">#</a> Dockerfile文件指令</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>dockerfile的指令：

　　FROM：指定基础镜像（FROM是必备的指令，并且必须为第一条指令）。

　　RUN<span class="token punctuation">:</span> 用来执行命令行命令。其基本格式：

　　　　　　shell格式： RUN  &lt;命令<span class="token punctuation">&gt;</span>  ，输入在bash环境中的命令即可，一个dockerfile允许使用RUN不得超过127层，所以，使用一次RUN， 使用 ‘ \\ ’ 换行，使用‘ <span class="token important">&amp;&amp;</span> ’执行下一条命令。一般使用此种格式；

　　　　　　exec格式： RUN  &lt;&quot;可执行文件&quot;<span class="token punctuation">,</span> <span class="token string">&quot;参数1&quot;</span><span class="token punctuation">,</span> &quot;参数2&quot;<span class="token punctuation">&gt;</span>，此种方式像是函数调用中的格式；

　　COPY<span class="token punctuation">:</span>  复制文件。 其基本格式：

　　　　　　格式1：COPY &lt;源路径<span class="token punctuation">&gt;</span><span class="token punctuation">...</span>&lt;目标路径<span class="token punctuation">&gt;</span>

　　　　　　格式2：COPY <span class="token punctuation">[</span>“&lt;源路径1<span class="token punctuation">&gt;</span>”<span class="token punctuation">,</span><span class="token punctuation">...</span>..&quot;&lt;目标路径<span class="token punctuation">&gt;</span>&quot;<span class="token punctuation">]</span>

　　ADD<span class="token punctuation">:</span> 更高级的复制文件，在COPY的基础上增加了一些功能，如果复制的是压缩包的话，会直接解压，而不需要在使用RUN解压；

　　CMD：容器启动命令。其基本格式：

　　　　　　shell格式： CMD &lt;命令<span class="token punctuation">&gt;</span>

　　　　　　exec格式： CMD <span class="token punctuation">[</span><span class="token string">&quot;可执行文件&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;参数1&quot;</span><span class="token punctuation">,</span> &quot;参数2&quot;<span class="token punctuation">...</span><span class="token punctuation">]</span>

　　　　　　参数列表格式： CMD <span class="token punctuation">[</span>“参数1”<span class="token punctuation">,</span> “参数2”<span class="token punctuation">...</span><span class="token punctuation">]</span>，在指定了ENTRYPOINT指令后，用CMD指定具体的参数

　　ENTRYPOINT<span class="token punctuation">:</span> 入口点。其基本格式分为exec和shell，

　　　　　　ENTRYPOINT的目的和CMD一样，都是在指定容器启动程序及参数。ENTRYPOINT在运行中可以替代，不过比CMD繁琐，需要通过docker run 的参数<span class="token punctuation">-</span><span class="token punctuation">-</span>entrypoint 来指定。当指定了ENTRYPOINT后，CMD的含义就发生了改变，不在是直接运行其命令，而是将CMD的内容作为参数传递给ENTRYPOINT指令。其执行时就变成了：  &lt;ENTRYPOINT<span class="token punctuation">&gt;</span> &quot;&lt;CMD<span class="token punctuation">&gt;</span>&quot;

　　ENV： 设置环境变量。（都可以使用这里使用的变量）其基本格式：

　　　　　　格式1：ENV &lt;key<span class="token punctuation">&gt;</span> &lt;value<span class="token punctuation">&gt;</span>

　　　　　　格式2：ENV &lt;key1<span class="token punctuation">&gt;</span>=&lt;value1<span class="token punctuation">&gt;</span> &lt;key2<span class="token punctuation">&gt;</span>=&lt;value<span class="token punctuation">&gt;</span><span class="token punctuation">...</span>

　　ARG<span class="token punctuation">:</span> 构建参数。构建参数和ENV的效果一样，都是设置环境变量，所不同的是ARG所构建的环境变量在将来容器运行时是不存在的。其基本格式：

　　　　　　格式1： ARG &lt;参数名<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span>=&lt;默认值<span class="token punctuation">&gt;</span><span class="token punctuation">]</span>

　　　　　　格式2： 该默认值可以在构建命令 docker build  中用 <span class="token punctuation">-</span><span class="token punctuation">-</span>build<span class="token punctuation">-</span>arg &lt;参数名<span class="token punctuation">&gt;</span>=&lt;值<span class="token punctuation">&gt;</span> 来覆盖

　　VOLUME<span class="token punctuation">:</span> 定义匿名卷。 其基本格式：

　　　　　　格式1： VOLUME <span class="token punctuation">[</span><span class="token string">&quot;&lt;路径1&gt;&quot;</span><span class="token punctuation">,</span> &quot;&lt;路径2<span class="token punctuation">&gt;</span>&quot;<span class="token punctuation">...</span><span class="token punctuation">]</span>

　　　　　　格式2： VOLUME &lt;路径<span class="token punctuation">&gt;</span>

　　EXPOSE<span class="token punctuation">:</span>  暴露端口。EXPOSE指令是声明运行时容器所提供的端口，在启动容器时不会在因为这个声明而开启端口。 其基本格式：

　　　　　　格式1： EXPOSE &lt;端口1<span class="token punctuation">&gt;</span> <span class="token punctuation">[</span>&lt;端口2<span class="token punctuation">&gt;</span><span class="token punctuation">...</span><span class="token punctuation">]</span>

　　WORKDIR： 指定工作目录。其基本格式：

　　　　　　格式1： WORKDIR &lt;工作目录路径<span class="token punctuation">&gt;</span>

　　USER： 指定当前用户。USER是帮助你切换到指定用户。 其基本格式：

　　　　　　格式1： USER &lt;用户名<span class="token punctuation">&gt;</span>

　　HEALTCHECK： 健康检查，判断容器的状态是否正常。 其基本格式：

　　　　　　格式1： HEALTCHECK <span class="token punctuation">[</span>选项<span class="token punctuation">]</span> CMD &lt;命令<span class="token punctuation">&gt;</span> ：设置检查容器健康状况的命令

　　　　　　格式2： HEALTCHECK NONE： 如果基础镜像有健康检查指令，使用此格式可以屏蔽掉其健康检查指令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="dockerfile-文件核心指令" tabindex="-1"><a class="header-anchor" href="#dockerfile-文件核心指令" aria-hidden="true">#</a> Dockerfile 文件核心指令</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>Dockerfile核心命令
	1、FROM 指定基础镜像构建
		写法：
		FROM 指定基础镜像

	2、COPY 复制命令。从上下文目录中复制文件或者目录到容器里指定路径。

		写法：

		COPY 源路径，目标路径

		COPY <span class="token punctuation">[</span>&quot;源路径&quot;，&quot;目标路径&quot;<span class="token punctuation">]</span>	

	3、RUN运行指令。构建的时候运行的指令

		主要在于镜像构建的时候运行，运行build命令的时候 

		后面接的命令就是shell输入的命令
	
		写法

		RUN  shell命令 参数1 参数2

		RUN <span class="token punctuation">[</span><span class="token string">&quot;shell命令 &quot;</span><span class="token punctuation">,</span><span class="token string">&quot;参数1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot; 参数2&quot;</span><span class="token punctuation">]</span>

		例如：

		RUN <span class="token punctuation">[</span><span class="token string">&quot;echo&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot; /usr/share/index.html&quot;</span><span class="token punctuation">]</span>

	4、CMD运行指令。运行容器时候运行的指令

		主要在于镜像运行容器的时候生成，运行run的时候运行

		写法

		CMD &lt;shell 命令<span class="token punctuation">&gt;</span> 
		CMD <span class="token punctuation">[</span><span class="token string">&quot;&lt;可执行文件或命令&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;param1&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;param2&gt;&quot;</span><span class="token punctuation">,</span><span class="token punctuation">...</span><span class="token punctuation">]</span> 

		例如：

		CMD <span class="token punctuation">[</span><span class="token string">&quot;dotnet&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;rmcore.dll&quot;</span><span class="token punctuation">]</span>

		缺点：在run 命令后面可以进行覆盖

		docker run <span class="token punctuation">-</span>d <span class="token punctuation">-</span>P  rmcore dotnet rmcore.dll 进行覆盖掉

	5 ENTRYPOINT运行指令。运行容器时候运行的指令(不会被覆盖)

		写法

		ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;&lt;executeable&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;param1&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;param2&gt;&quot;</span><span class="token punctuation">,</span><span class="token punctuation">...</span><span class="token punctuation">]</span>

		可以和CMD动态结合，设置动态的配置参数

		例如 

		ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;nginx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">]</span> 定参

		CMD <span class="token punctuation">[</span><span class="token string">&quot;/etc/nginx/nginx.conf&quot;</span><span class="token punctuation">]</span>变参

    6、EXPOSE暴露端口指令

		仅仅声明端口，就是指定镜像暴露的端口

		在run 的时候，通过docker run <span class="token punctuation">-</span>p 会自动随机映射到EXPOSE端口

		写法

		EXPOSE 端口

		EXPOSE 端口

		例如 

		EXPOSE 5000

		EXPOSE 5001

	7、WORKDIR工作目录指令
		用于应用在容器内的工作目录，就好比<span class="token punctuation">:</span>ruanmou目录
	
		写法

		WORKDIR &lt;工作目录路径<span class="token punctuation">&gt;</span>

		例如

		WORKDIR /rmcore

		或者

		WORKDIR /nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-如何构建-nginx-镜像" tabindex="-1"><a class="header-anchor" href="#docker-如何构建-nginx-镜像" aria-hidden="true">#</a> Docker 如何构建 nginx 镜像</h2><p>条件：<br> 1、nginx-1.15.2.tar.gz<br> 2、基础镜像 centos<br> 3、nginx安装命令<br> 4、Dockerfile 文件<br> 步骤<br> 1、从仓库中心下载centos默认是最新的镜像<br> 使用docker pull centos<br> 2、创建nginx目录<br> mkdir nginx<br> 创建 Dockerfile 文件<br> vim Dockerfile<br> 3、配置Dockerfile<br> 3.1 nginx安装命令<br> 1 安装 nginx需要工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	 yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc <span class="token function">make</span> pcre-devel zlib-devel <span class="token function">tar</span> zlib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2 下载nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	 <span class="token function">wget</span>  http://nginx.org/download/nginx-1.15.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3 nginx解压/nginx目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span>  nginx-1.15.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4 切换到/nginx/nginx-1.15.2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	执行./configure
		<span class="token function">make</span>
		<span class="token function">make</span> <span class="token function">install</span> 进行安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5 切换到/usr/local/nginx/sbin</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>	执行 ./nginx 启动nginx	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.2 Nginx 脚本文件 nginx.sh</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/sh</span>
/usr/local/nginx/sbin/nginx
/bin/bash <span class="token parameter variable">-c</span> <span class="token string">&#39;while true; do sleep 200; done&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.3 Dockerfile文件配置nginx</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>FROM centos
RUN yum <span class="token punctuation">-</span>y install gcc make pcre<span class="token punctuation">-</span>devel zlib<span class="token punctuation">-</span>devel tar zlib
WORKDIR /nginx
COPY nginx<span class="token punctuation">-</span>1.15.2.tar.gz /nginx
RUN tar <span class="token punctuation">-</span>zxvf  nginx<span class="token punctuation">-</span>1.15.2.tar.gz
RUN cd nginx<span class="token punctuation">-</span>1.15.2 <span class="token important">&amp;&amp;</span> ./configure <span class="token important">&amp;&amp;</span> make <span class="token important">&amp;&amp;</span> make install
EXPOSE 80
COPY nginx.sh /nginx.sh
RUN chmod 755 /nginx.sh
CMD <span class="token punctuation">[</span><span class="token string">&quot;/nginx.sh&quot;</span><span class="token punctuation">]</span>	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.4 Dockerfile构建镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> nginx <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.5 运行nginx镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span> 先启动容器<span class="token punctuation">(</span>后台运行<span class="token punctuation">)</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> nginx
<span class="token number">2</span> 进入容器
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> nginx /bin/bash
<span class="token number">3</span> 退出容器
exit命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.6 浏览器进行访问</p><h2 id="容器编排-docker-compose" tabindex="-1"><a class="header-anchor" href="#容器编排-docker-compose" aria-hidden="true">#</a> 容器编排 Docker-Compose</h2><p>什么docker-compose<br> 批量创建多个镜像，和多个容器就是docker-compose<br> 目的：是方便镜像和容器的管理<br> docker-compose.yml文件介绍<br> yml文件类似于json文件，将所有的命令通过配置文件配置起来，可以用于配置多个 。</p><h3 id="yml文件介绍" tabindex="-1"><a class="header-anchor" href="#yml文件介绍" aria-hidden="true">#</a> yml文件介绍</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code> yml文件配置
	  类似：json文件配置
      yml文件配置参考地址：https<span class="token punctuation">:</span>//www.runoob.com/w3cnote/yaml<span class="token punctuation">-</span>intro.html
	   2.1.2 yml文件配置
		  1、对象  
				例如
				companies<span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token key atrule">name</span><span class="token punctuation">:</span> company1<span class="token punctuation">,</span><span class="token key atrule">price</span><span class="token punctuation">:</span> 200W<span class="token punctuation">}</span>
				或
				<span class="token key atrule">companies</span><span class="token punctuation">:</span>
					<span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">1</span>
					<span class="token key atrule">name</span><span class="token punctuation">:</span> company1 
					<span class="token key atrule">price</span><span class="token punctuation">:</span> 200W	
		  2、数组
			例如
			<span class="token key atrule">companies</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token key atrule">name</span><span class="token punctuation">:</span> company1<span class="token punctuation">,</span><span class="token key atrule">price</span><span class="token punctuation">:</span> 200W<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span><span class="token key atrule">name</span><span class="token punctuation">:</span> company2<span class="token punctuation">,</span><span class="token key atrule">price</span><span class="token punctuation">:</span> 500W<span class="token punctuation">}</span><span class="token punctuation">]</span>
			或
			<span class="token key atrule">companies</span><span class="token punctuation">:</span> 
				  <span class="token punctuation">-</span>
					<span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">1</span> 
					<span class="token key atrule">name</span><span class="token punctuation">:</span> company1
					<span class="token key atrule">price</span><span class="token punctuation">:</span> 200W
				  <span class="token punctuation">-</span>
					<span class="token key atrule">id</span><span class="token punctuation">:</span> <span class="token number">2</span>
					<span class="token key atrule">name</span><span class="token punctuation">:</span> company2
					<span class="token key atrule">price</span><span class="token punctuation">:</span> 500W
         3、基本变量类型 int float string boolean date datetime null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose核心配置" tabindex="-1"><a class="header-anchor" href="#docker-compose核心配置" aria-hidden="true">#</a> docker-compose核心配置</h3><p>1、参考地址<br> https://docs.docker.com/compose/compose-file/ 2 核心配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>    version 指定compose版本 最好是3.0以上版本 目前最新是3.8版本
    services 配置容器<span class="token punctuation">[</span>容器列表<span class="token punctuation">]</span>
        nginx： <span class="token comment">#配置容器标识(唯一编号)</span>
            <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token comment">#配置容器镜像</span>
            <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment">#配置容器映射端口号[数组]</span>
            <span class="token key atrule">networks</span><span class="token punctuation">:</span> <span class="token comment">#配置容器网络[数组]</span>
    networks 网络指定配置
        <span class="token key atrule">nginx-rmcore</span><span class="token punctuation">:</span> <span class="token comment">#配置网络名称</span>
            <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#网络自定义</span>
    volumes 数据挂载配置
    extensions 扩展配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用docker-compose操作容器" tabindex="-1"><a class="header-anchor" href="#使用docker-compose操作容器" aria-hidden="true">#</a> 使用docker-compose操作容器</h2><p>条件</p><p>1、<code>docker-compose</code> 工具</p><p>2、<code>docker-compose.yml</code>配置文件</p><p>3、<code>nginx</code>镜像<code> Dockerfile</code>文件</p><p>4、商品微服务镜像 <code>Dockerfile</code>文件</p><p>步骤</p><p>1、下载<code>docker-compose</code>工具</p><p>​ 1、下载地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">curl</span> <span class="token parameter variable">-L</span> <span class="token string">&quot;https://github.com/docker/compose/releases/download/1.24.1/docker-compose-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-s</span><span class="token variable">)</span></span>-<span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> <span class="token parameter variable">-m</span><span class="token variable">)</span></span>&quot;</span> <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 2、增加Compose权限</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> ​sudo <span class="token function">chmod</span> +x /usr/local/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 3、创建compose快捷方式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/docker-compose /usr/bin/docker-compose
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 4、测试安装是否成功 ​ <code>docker-compose --version</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">[</span>root@localhost bin<span class="token punctuation">]</span><span class="token comment"># docker-compose --version</span>
<span class="token function">docker-compose</span> version <span class="token number">1.24</span>.1, build 4667896b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、创建<code>rmcore</code>镜像和<code>nginx</code>镜像</p><p>​ 课程已经准备好</p><p>3、<code>docker-compose.yml</code>文件配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknnginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lknnginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> 8088<span class="token punctuation">:</span><span class="token number">80</span>
  <span class="token key atrule">productservice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> productservice_micro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> 8090<span class="token punctuation">:</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、运行<code>docker-compose.yml</code>文件</p><p>​ 1、切换<code>docker-compose.yml</code>目录</p><p>​ 2、运行yml文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>​ 3、批量删除容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">docker-compose</span> down
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、运行是否搭建成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ <span class="token function">curl</span> 访问链接即可
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用<code>docker-compose</code>构建镜像<br> //指定端口，它的缺陷是不能自由的动态伸缩。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknnginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mynginx
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8088<span class="token punctuation">:</span><span class="token number">80</span>
  <span class="token key atrule">lknproductservice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> productservice_micro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8090<span class="token punctuation">:</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在compose目录当中，直接加载 <code>docker-compose.yml</code> ,运行容器 <code>docker-compose up -d</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker-compose up -d</span>
Creating network <span class="token string">&quot;compose_default&quot;</span> with the default driver
Creating compose_lknproductservice_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating compose_lknnginx_1          <span class="token punctuation">..</span>. <span class="token keyword">done</span>

<span class="token comment">#批量 停止</span>
<span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker-compose stop</span>
Stopping compose_lknnginx_1          <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Stopping compose_lknproductservice_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-compose-动态伸缩-scale" tabindex="-1"><a class="header-anchor" href="#docker-compose-动态伸缩-scale" aria-hidden="true">#</a> docker-compose 动态伸缩 scale</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker-compose scale lknnginx=3  # lknnginx 这里是指docker-compose中的服务名称</span>
WARNING: The scale <span class="token builtin class-name">command</span> is deprecated. Use the up <span class="token builtin class-name">command</span> with the <span class="token parameter variable">--scale</span> flag instead.
WARNING: The <span class="token string">&quot;lknnginx&quot;</span> <span class="token function">service</span> specifies a port on the host. If multiple containers <span class="token keyword">for</span> this <span class="token function">service</span> are created on a single host, the port will clash.
Starting compose_lknnginx_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating compose_lknnginx_2 <span class="token punctuation">..</span>. error
Creating compose_lknnginx_3 <span class="token punctuation">..</span>. error

ERROR: <span class="token keyword">for</span> compose_lknnginx_3  Cannot start <span class="token function">service</span> lknnginx: driver failed programming external connectivity on endpoint compose_lknnginx_3 <span class="token punctuation">(</span>ea584e2230e67dde0516ddc8779c3ca1fa575f86e3b3c357298c5416819b6f87<span class="token punctuation">)</span>: Bind <span class="token keyword">for</span> <span class="token number">0.0</span>.0.0:8088 failed: port is already allocated

ERROR: <span class="token keyword">for</span> compose_lknnginx_2  Cannot start <span class="token function">service</span> lknnginx: driver failed programming external connectivity on endpoint compose_lknnginx_2 <span class="token punctuation">(</span>76341f073a8fb8af0bf37779e68ecf88d4e904e460eb9acd483444d8fba71468<span class="token punctuation">)</span>: Bind <span class="token keyword">for</span> <span class="token number">0.0</span>.0.0:8088 failed: port is already allocated
ERROR: Cannot start <span class="token function">service</span> lknnginx: driver failed programming external connectivity on endpoint compose_lknnginx_3 <span class="token punctuation">(</span>ea584e2230e67dde0516ddc8779c3ca1fa575f86e3b3c357298c5416819b6f87<span class="token punctuation">)</span>: Bind <span class="token keyword">for</span> <span class="token number">0.0</span>.0.0:8088 failed: port is already allocated
<span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker-compose scale lkn_nginx=3</span>
WARNING: The scale <span class="token builtin class-name">command</span> is deprecated. Use the up <span class="token builtin class-name">command</span> with the <span class="token parameter variable">--scale</span> flag instead.
ERROR: No such service: lkn_nginx
//异常信息，说明端口被占用，需要修改docker-compose.yml配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态伸缩，创建容器</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknnginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mynginx
  <span class="token key atrule">lknproductservice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> productservice_micro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8090<span class="token punctuation">:</span><span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>之前已经创建了3个容器，现在删除2个。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> scale <span class="token assign-left variable">lknnginx</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker-compose  scale lknnginx=1</span>
WARNING: The scale <span class="token builtin class-name">command</span> is deprecated. Use the up <span class="token builtin class-name">command</span> with the <span class="token parameter variable">--scale</span> flag instead.
Stopping and removing compose_lknnginx_2 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Stopping and removing compose_lknnginx_3 <span class="token punctuation">..</span>. <span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动-docker-compose-的日志" tabindex="-1"><a class="header-anchor" href="#启动-docker-compose-的日志" aria-hidden="true">#</a> 启动 docker-compose 的日志</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker-compose  -f /root/microservice/compose/docker-compose.yml logs</span>
Attaching to compose_lknproductservice_1, compose_lknnginx_1
lknproductservice_1  <span class="token operator">|</span> warn: Microsoft.AspNetCore.DataProtection.Repositories.FileSystemXmlRepository<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span>
lknproductservice_1  <span class="token operator">|</span>       Storing keys <span class="token keyword">in</span> a directory <span class="token string">&#39;/root/.aspnet/DataProtection-Keys&#39;</span> that may not be persisted outside of the container. Protected data will be unavailable when container is destroyed.
lknproductservice_1  <span class="token operator">|</span> warn: Microsoft.AspNetCore.DataProtection.KeyManagement.XmlKeyManager<span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">]</span>
lknproductservice_1  <span class="token operator">|</span>       No XML encryptor configured. Key <span class="token punctuation">{</span>25e80828-d97b-4e6f-8a58-a81766746b6c<span class="token punctuation">}</span> may be persisted to storage <span class="token keyword">in</span> unencrypted form.
lknproductservice_1  <span class="token operator">|</span> info: Microsoft.Hosting.Lifetime<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span>
lknproductservice_1  <span class="token operator">|</span>       Now listening on: http://<span class="token punctuation">[</span>::<span class="token punctuation">]</span>:80
lknproductservice_1  <span class="token operator">|</span> info: Microsoft.Hosting.Lifetime<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
lknproductservice_1  <span class="token operator">|</span>       Application started. Press Ctrl+C to shut down.
lknproductservice_1  <span class="token operator">|</span> info: Microsoft.Hosting.Lifetime<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
lknproductservice_1  <span class="token operator">|</span>       Hosting environment: Production
lknproductservice_1  <span class="token operator">|</span> info: Microsoft.Hosting.Lifetime<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
lknproductservice_1  <span class="token operator">|</span>       Content root path: /publish

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-network-网络" tabindex="-1"><a class="header-anchor" href="#docker-network-网络" aria-hidden="true">#</a> Docker network 网络</h2><h3 id="什么是network" tabindex="-1"><a class="header-anchor" href="#什么是network" aria-hidden="true">#</a> 什么是network</h3><p><code>network</code> 类型<br><code>brigde</code>类似虚拟机桥接模式NAT模式<br><code>host</code>类似虚拟机桥接模式<br><code>none</code> 无网络模式，只能和主机通信类似于虚拟机仅主机模式</p><p><img src="`+v+'" alt="Alt text"></p><h3 id="容器中网络分析" tabindex="-1"><a class="header-anchor" href="#容器中网络分析" aria-hidden="true">#</a> 容器中网络分析</h3><p>1、通过 <code>ifconfig</code> 指令查看 当前linux的ip,不然发现<code>br-73c53ebd4c27</code>的网段，这个网段是docker-compos 自动帮我们创建的。</p><p><img src="'+m+`" alt="Alt text"></p><p>通过 <code>docker network ls</code> 查看当前docke的网格情况，找到 compose_default的网段下的服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker network  ls</span>
NETWORK ID     NAME              DRIVER    SCOPE
135f6bd6a817   bridge            bridge    <span class="token builtin class-name">local</span>
73c53ebd4c27   compose_default   bridge    <span class="token builtin class-name">local</span>
5d46f2b37b92   <span class="token function">host</span>              <span class="token function">host</span>      <span class="token builtin class-name">local</span>
1164d1413a7a   none              null      <span class="token builtin class-name">local</span>
<span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># docker network  inspect 73c53ebd4c27</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;compose_default&quot;</span>,
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;73c53ebd4c277be017508844a4b2eda878e4f4519c85de7ede46078f54aeca25&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-11-20T16:32:47.212724167+08:00&quot;</span>,
        <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bridge&quot;</span>,
        <span class="token string">&quot;EnableIPv6&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;IPAM&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> null,
            <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;Subnet&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.18.0.0/16&quot;</span>, // 子网地址范围
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.18.0.1&quot;</span> // 网关
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Internal&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Attachable&quot;</span><span class="token builtin class-name">:</span> true,
        <span class="token string">&quot;Ingress&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;ConfigFrom&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Network&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;ConfigOnly&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Containers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;182860d867a8715ca564462c44ae4be73f4c671d1c88824cd7c15f6b74ecc767&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;compose_lknproductservice_1&quot;</span>,//关联的微服务
                <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bd87629ec33f58719493ad7d311531a047d06d16493108c5f654982309122b05&quot;</span>,
                <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:12:00:02&quot;</span>,
                <span class="token string">&quot;IPv4Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.18.0.2/16&quot;</span>,// <span class="token function">ip</span> 
                <span class="token string">&quot;IPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;97729d0d32c852fd9dc8da97593c8a94cc5d3f34a36f5bd80ecfca35c086bd58&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;compose_lknnginx_1&quot;</span>, //关联的微服务
                <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ef57b780ef1adac1521ad8efee88db6cfc94aaa4332b7617498583d7222beaa5&quot;</span>,
                <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:12:00:03&quot;</span>,
                <span class="token string">&quot;IPv4Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.18.0.3/16&quot;</span>,<span class="token comment"># ip</span>
                <span class="token string">&quot;IPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;com.docker.compose.network&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;com.docker.compose.project&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;compose&quot;</span>,
            <span class="token string">&quot;com.docker.compose.version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.24.1&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、docker 虚拟机 默认指定桥接模式，通过主机ip进行通信的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create <span class="token parameter variable">-d</span>  bridge lknmicroservice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后 查看网络</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># ifconfig</span>
br-73c53ebd4c27: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">172.18</span>.0.1  netmask <span class="token number">255.255</span>.0.0  broadcast <span class="token number">172.18</span>.255.255
        inet6 fe80::42:2ff:fe0f:4d17  prefixlen <span class="token number">64</span>  scopeid 0x2<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>link<span class="token operator">&gt;</span>
        ether 02:42:02:0f:4d:17  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">34362</span>  bytes <span class="token number">2788649</span> <span class="token punctuation">(</span><span class="token number">2.6</span> MiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">79555</span>  bytes <span class="token number">169649516</span> <span class="token punctuation">(</span><span class="token number">161.7</span> MiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

br-fe0704eb7d4f: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">409</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,BROADCAST,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">172.19</span>.0.1  netmask <span class="token number">255.255</span>.0.0  broadcast <span class="token number">172.19</span>.255.255
        ether 02:42:cc:74:54:b8  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">320</span>  bytes <span class="token number">388680</span> <span class="token punctuation">(</span><span class="token number">379.5</span> KiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">429</span>  bytes <span class="token number">397728</span> <span class="token punctuation">(</span><span class="token number">388.4</span> KiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

docker0: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">409</span><span class="token operator"><span class="token file-descriptor important">9</span>&lt;</span>UP,BROADCAST,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">172.17</span>.0.1  netmask <span class="token number">255.255</span>.0.0  broadcast <span class="token number">172.17</span>.255.255
        inet6 fe80::42:51ff:fe19:a0c0  prefixlen <span class="token number">64</span>  scopeid 0x2<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>link<span class="token operator">&gt;</span>
        ether 02:42:51:19:a0:c0  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">34362</span>  bytes <span class="token number">2788649</span> <span class="token punctuation">(</span><span class="token number">2.6</span> MiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">79555</span>  bytes <span class="token number">169649516</span> <span class="token punctuation">(</span><span class="token number">161.7</span> MiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

enp0s3: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">10.0</span>.2.15  netmask <span class="token number">255.255</span>.255.0  broadcast <span class="token number">10.0</span>.2.255
        inet6 fe80::a00:27ff:fe79:eb7  prefixlen <span class="token number">64</span>  scopeid 0x2<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>link<span class="token operator">&gt;</span>
        ether 08:00:27:79:0e:b7  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">731365</span>  bytes <span class="token number">914731582</span> <span class="token punctuation">(</span><span class="token number">872.3</span> MiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">222033</span>  bytes <span class="token number">71034595</span> <span class="token punctuation">(</span><span class="token number">67.7</span> MiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

enp0s8: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet <span class="token number">192.168</span>.3.61  netmask <span class="token number">255.255</span>.255.0  broadcast <span class="token number">192.168</span>.3.255
        inet6 fe80::a00:27ff:fe39:fea  prefixlen <span class="token number">64</span>  scopeid 0x2<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>link<span class="token operator">&gt;</span>
        ether 08:00:27:39:0f:ea  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">34325</span>  bytes <span class="token number">2148898</span> <span class="token punctuation">(</span><span class="token number">2.0</span> MiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">3353</span>  bytes <span class="token number">1981686</span> <span class="token punctuation">(</span><span class="token number">1.8</span> MiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

lo: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">7</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,LOOPBACK,RUNNING<span class="token operator">&gt;</span>  mtu <span class="token number">65536</span>
        inet <span class="token number">127.0</span>.0.1  netmask <span class="token number">255.0</span>.0.0
        inet6 ::1  prefixlen <span class="token number">128</span>  scopeid 0x1<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>host<span class="token operator">&gt;</span>
        loop  txqueuelen <span class="token number">1000</span>  <span class="token punctuation">(</span>Local Loopback<span class="token punctuation">)</span>
        RX packets <span class="token number">49</span>  bytes <span class="token number">9743</span> <span class="token punctuation">(</span><span class="token number">9.5</span> KiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">49</span>  bytes <span class="token number">9743</span> <span class="token punctuation">(</span><span class="token number">9.5</span> KiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

vetha76453b: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet6 fe80::a8c4:ebff:fec4:99b9  prefixlen <span class="token number">64</span>  scopeid 0x2<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>link<span class="token operator">&gt;</span>
        ether aa:c4:eb:c4:99:b9  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">232</span>  bytes <span class="token number">393444</span> <span class="token punctuation">(</span><span class="token number">384.2</span> KiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">289</span>  bytes <span class="token number">30903</span> <span class="token punctuation">(</span><span class="token number">30.1</span> KiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>

vethcab32a5: <span class="token assign-left variable">flags</span><span class="token operator">=</span><span class="token number">416</span><span class="token operator"><span class="token file-descriptor important">3</span>&lt;</span>UP,BROADCAST,RUNNING,MULTICAST<span class="token operator">&gt;</span>  mtu <span class="token number">1500</span>
        inet6 fe80::186b:d1ff:fec4:a3e4  prefixlen <span class="token number">64</span>  scopeid 0x2<span class="token operator"><span class="token file-descriptor important">0</span>&lt;</span>link<span class="token operator">&gt;</span>
        ether 1a:6b:d1:c4:a3:e4  txqueuelen <span class="token number">0</span>  <span class="token punctuation">(</span>Ethernet<span class="token punctuation">)</span>
        RX packets <span class="token number">320</span>  bytes <span class="token number">388680</span> <span class="token punctuation">(</span><span class="token number">379.5</span> KiB<span class="token punctuation">)</span>
        RX errors <span class="token number">0</span>  dropped <span class="token number">0</span>  overruns <span class="token number">0</span>  frame <span class="token number">0</span>
        TX packets <span class="token number">429</span>  bytes <span class="token number">397728</span> <span class="token punctuation">(</span><span class="token number">388.4</span> KiB<span class="token punctuation">)</span>
        TX errors <span class="token number">0</span>  dropped <span class="token number">0</span> overruns <span class="token number">0</span>  carrier <span class="token number">0</span>  collisions <span class="token number">0</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可能通过<code> docker network ls</code> ，docker network 网格创建成功了。</p><h3 id="为什么要进行容器互联" tabindex="-1"><a class="header-anchor" href="#为什么要进行容器互联" aria-hidden="true">#</a> 为什么要进行容器互联</h3><p>容器之间由于是隔离的，导致网络是不通的。<br> 如何解决呢？<br> 1、查看容器网络</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect lknnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>网络信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token string">&quot;Networks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;compose_default&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                    <span class="token string">&quot;IPAMConfig&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Links&quot;</span><span class="token builtin class-name">:</span> null,
                    <span class="token string">&quot;Aliases&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                        <span class="token string">&quot;8af9c6c40298&quot;</span>,
                        <span class="token string">&quot;lknnginx&quot;</span>
                    <span class="token punctuation">]</span>,
                    <span class="token string">&quot;NetworkID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;73c53ebd4c277be017508844a4b2eda878e4f4519c85de7ede46078f54aeca25&quot;</span>,
                    <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;d5514e303cfae8bae7723d5634b727ed21af51886b6255bb2e3a55199e318053&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.18.0.1&quot;</span>,
                    <span class="token string">&quot;IPAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.18.0.3&quot;</span>,
                    <span class="token string">&quot;IPPrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">16</span>,
                    <span class="token string">&quot;IPv6Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
                    <span class="token string">&quot;GlobalIPv6PrefixLen&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
                    <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:12:00:03&quot;</span>,
                    <span class="token string">&quot;DriverOpts&quot;</span><span class="token builtin class-name">:</span> null
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、进入nginx容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> lknnginx /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、修改nginx配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  1、 切换到nginx配置目录 cd /user/local/nginx/conf
  2、编辑 vi nginx.conf ,输入容器IP   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改容器中的nginx.conf 文件 ，把微服务的代理地址配置即可。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">...</span>.
第一种通过Ip
location / <span class="token punctuation">{</span>
	 proxy_pass  http<span class="token punctuation">:</span>//172.18.0.2<span class="token punctuation">:</span>80; <span class="token comment"># 端口是容器端口 80，不需要指定 8090 端口（linux 映射接口）</span>
<span class="token punctuation">}</span>
第二种通过 容器名称
location / <span class="token punctuation">{</span>
	 proxy_pass  http<span class="token punctuation">:</span>//lknproductservice<span class="token punctuation">:</span>80; <span class="token comment"># 端口是容器端口 80，不需要指定 8090 端口（linux 映射接口）</span>
<span class="token punctuation">}</span>
<span class="token punctuation">...</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、然后进行访问 出现了网络异常问题，如何解决？<br> 使用网络<code>network</code>来解决，内部使用<code>Bridge</code>桥接网络来解决！<br> 条件<br> 1、<code>nginx</code>镜像<br> 2、商品微服务镜像<br> 3、容器网络<code>network </code> 步骤<br> 1、使用<code>network</code>设置网络<br> 1.2 查看<code>network</code>使用 1.2.1 输入<code>docker</code>命令，查看<code>network</code>如何使用<br> 1.2.2 输入<code>docker network</code>,查看network使用<br> 1.3 创建网络</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create lknmicoservice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指定创建</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> network create <span class="token parameter variable">-d</span> bridge lknmicoservice 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.4 选择驱动版本（默认为桥接版本）<br> 1.4.1 桥接网络模式（<code>brigde</code>） 覆盖网络模式（<code>overlay</code>）主机网络模式（<code>host</code>）MAC网络模式（<code>macvlan</code>）:禁用网络模式（none）:其它模式（网络插件） 1.4.2 如何在<code>docker-compose.yml</code>文件内使用<code>network </code> 已经有镜像的配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">[</span>root@localhost compose<span class="token punctuation">]</span><span class="token comment"># cat docker-compose.yml </span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknnginx</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mynginx  
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> lknmicroservice
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8088<span class="token punctuation">:</span><span class="token number">80</span>
  <span class="token key atrule">lknproductservice</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> productservice_micro
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> lknmicroservice
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8090<span class="token punctuation">:</span><span class="token number">80</span>    
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknmicroservice</span><span class="token punctuation">:</span> 
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

\`\`
没有镜像，批量生成镜像配置

\`\`\` yml
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknnginx</span><span class="token punctuation">:</span>
    <span class="token comment">#image: mynginx</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> /root/microservice/nginx <span class="token comment"># 生成镜像文件目录,指定Dockerfile文件目录即可</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> lknmicroservice
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8088<span class="token punctuation">:</span><span class="token number">80</span>
  <span class="token key atrule">lknproductservice</span><span class="token punctuation">:</span>
    <span class="token comment">#image: productservice_micro</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span> /root/microservice/productservice
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> lknmicroservice
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8090<span class="token punctuation">:</span><span class="token number">80</span>    
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">lknmicroservice</span><span class="token punctuation">:</span> 
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、更新compose.yml配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、查询 <code>docker network inspect lknmicroservice</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># docker network inspect lknmicroservice</span>
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;lknmicroservice&quot;</span>,
        <span class="token string">&quot;Id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;fe0704eb7d4f0fd4e5aabba834e73289b11e924b0a5d0c084f51ec76900294e3&quot;</span>,
        <span class="token string">&quot;Created&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2023-11-21T10:39:04.66342572+08:00&quot;</span>,
        <span class="token string">&quot;Scope&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;local&quot;</span>,
        <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;bridge&quot;</span>,
        <span class="token string">&quot;EnableIPv6&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;IPAM&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Driver&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
            <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
            <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;Subnet&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.19.0.0/16&quot;</span>,
                    <span class="token string">&quot;Gateway&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.19.0.1&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Internal&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Attachable&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Ingress&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;ConfigFrom&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;Network&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;ConfigOnly&quot;</span><span class="token builtin class-name">:</span> false,
        <span class="token string">&quot;Containers&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;5bd3e0e89c7729086ee5042e7a3126ac9d7dfadc46034d1d8273b09203255dc5&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;compose_lknnginx_1&quot;</span>,
                <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;6b8c65bc45402310c3e9ae7190635a904e2eaf8e56d7f7c07de6c36f6d6775e2&quot;</span>,
                <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:13:00:02&quot;</span>,
                <span class="token string">&quot;IPv4Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.19.0.2/16&quot;</span>,
                <span class="token string">&quot;IPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>,
            <span class="token string">&quot;a1b2bdc5c1d7a18a168fb3fe41c2162ee0f06c4d711b4e265c0598cafa9c551d&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;compose_lknproductservice_1&quot;</span>,
                <span class="token string">&quot;EndpointID&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;e2c9c3085af75aa71c15237edfd499aa3c101359fa4aff82108fc1b2279e5596&quot;</span>,
                <span class="token string">&quot;MacAddress&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;02:42:ac:13:00:03&quot;</span>,
                <span class="token string">&quot;IPv4Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;172.19.0.3/16&quot;</span>,
                <span class="token string">&quot;IPv6Address&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;Options&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
        <span class="token string">&quot;Labels&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看docker 网络得知，docker-compose自定义网络成功。</p><h2 id="docker-volume-数据卷" tabindex="-1"><a class="header-anchor" href="#docker-volume-数据卷" aria-hidden="true">#</a> Docker volume 数据卷</h2><h3 id="什么是volume" tabindex="-1"><a class="header-anchor" href="#什么是volume" aria-hidden="true">#</a> 什么是volume</h3><p>数据卷就是将容器的数据存储到主机上，方便进行持久化存储</p><h4 id="如何使用volume" tabindex="-1"><a class="header-anchor" href="#如何使用volume" aria-hidden="true">#</a> 如何使用volume</h4><p>条件<br> 1、nginx.conf<br> 步骤<br> 1、先创建nginx.conf文件<br> 2、然后输入nginx.conf内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#user  nobody;</span>
worker_processes  <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">#error_log  logs/error.log;</span>
<span class="token comment">#error_log  logs/error.log  notice;</span>
<span class="token comment">#error_log  logs/error.log  info;</span>

<span class="token comment">#pid        logs/nginx.pid;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>
    include       mime.types<span class="token punctuation">;</span>
    default_type  application/octet-stream<span class="token punctuation">;</span>
<span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
<span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
<span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

<span class="token comment">#access_log  logs/access.log  main;</span>

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
        proxy_pass  http://lknproductservice:80<span class="token punctuation">;</span> //lknproductservice  是 docker-compose.yml 配置中的服务名称
    <span class="token punctuation">}</span>

    <span class="token comment">#error_page  404              /404.html;</span>

    <span class="token comment"># redirect server error pages to the static page /50x.html</span>
    <span class="token comment">#</span>
    error_page   <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span>  /50x.html<span class="token punctuation">;</span>
    location <span class="token operator">=</span> /50x.html <span class="token punctuation">{</span>
        root   html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后在<code>docker-compose.yml</code>文件中配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>version: <span class="token string">&#39;3&#39;</span>
services:
  lknnginx:
    <span class="token comment">#image: mynginx</span>
    build: /root/microservice/nginx
    ports:
      - <span class="token number">8088</span>:80
    networks:
      - lknmicroservice
    volumes:
      - /root/microservice/compose/nginx.conf:/usr/local/nginx/conf/nginx.conf
  lknproductservice:  //容器名称 可以用于通信，相当DNS ,容器内部的域名
    <span class="token comment">#image: productservice_micro</span>
    build: /root/microservice/productservice
    ports:
      - <span class="token number">8090</span>:80
    networks:
      - lknmicroservice
networks:
  lknmicroservice:
    external: <span class="token boolean">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>备注：</p><p>1、volumes：数据卷指令</p><p>2、/root/lkn/compose/nginx.conf ：Linux主机nginx.conf文件地址</p><p>3、/usr/local/nginx/conf/nginx.conf ：nginx容器nginx.conf地址</p><h2 id="笔记" tabindex="-1"><a class="header-anchor" href="#笔记" aria-hidden="true">#</a> 笔记</h2><p>总结</p><h3 id="docker部署微服务思路" tabindex="-1"><a class="header-anchor" href="#docker部署微服务思路" aria-hidden="true">#</a> docker部署微服务思路</h3><p>1、项目发布</p><p>2、项目发布上传</p><p>3、项目镜像生成</p><p>4、镜像运行</p><h3 id="商品列表查询过程原理" tabindex="-1"><a class="header-anchor" href="#商品列表查询过程原理" aria-hidden="true">#</a> 商品列表查询过程原理</h3><p>浏览器—&gt;Linux—-&gt;Docker—–&gt;容器—-&gt;应用</p><p>​ 32772 80 80</p><p>​ 65535</p><p>性能是否会底下？</p><p>1、基本上可以忽然不计</p><p>镜像 ：没有启动Linux</p><h3 id="常识" tabindex="-1"><a class="header-anchor" href="#常识" aria-hidden="true">#</a> 常识</h3><p>1、一个项目一个镜像，一 一对应关系。</p><p>2、镜像命令，增删改查</p><p>容器 ：启动的Linux</p><h3 id="镜像和容器区别" tabindex="-1"><a class="header-anchor" href="#镜像和容器区别" aria-hidden="true">#</a> 镜像和容器区别</h3><p>1、镜像不可改变，容器可以修改。</p><p>2、镜像可以多次运行。容器只能运行一次。</p><p>​ 镜像可以生成多个容器。</p><p>​ 容器只能运行一次。</p><p>关系：</p><p>1、镜像和容器 ：1对多</p><p>就是：类和对象的关系。</p><p>作用：</p><p>好处：快速启动集群</p><p>​ 1、容器之间互相隔离的</p><h3 id="容器操作" tabindex="-1"><a class="header-anchor" href="#容器操作" aria-hidden="true">#</a> 容器操作</h3><p><code>dockerfile</code></p><p>作用：生成镜像。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /publish  //工作目录 相当于站点根据目录
EXPOSE <span class="token number">80</span>
EXPOSE <span class="token number">443</span>
COPY publish/ /publish
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;dotnet&quot;</span>, <span class="token string">&quot;lkn.microservice.productservice.dl.dll&quot;</span><span class="token punctuation">]</span> //运行指令的位置，是要工作目录下运行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1、把一个项目生成一个镜像 思路</p><p>1、父镜像(基础镜像)</p><p>2、基本操作</p><p>运行一个微服务基本步骤。</p><p>步骤</p><p>1、准备Linux主机</p><p>2、安装.Net7 环境</p><p>3、发布应用</p><p>​ publish</p><p>3、运行应用：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>​ dotnet lkn.microservice.productservice.dl.dll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Docker</code> 运行环境</p><p>1、Linux运行。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>FROM mcr.microsoft.com/dotnet/aspnet:6.0

<span class="token punctuation">(</span>Linux镜像+.NetSDK镜像<span class="token punctuation">)</span>

WORKDIR /publish
EXPOSE <span class="token number">80</span>
EXPOSE <span class="token number">443</span>
COPY publish/ /publish
ENTRYPOINT <span class="token punctuation">[</span><span class="token string">&quot;dotnet&quot;</span>, <span class="token string">&quot;lkn.microservice.productservice.dl.dll&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="思考问题" tabindex="-1"><a class="header-anchor" href="#思考问题" aria-hidden="true">#</a> 思考问题：</h3><p>1、根基础镜像是谁？</p><p>​ Linux</p><p>镜像之间是否可以复用？</p><p>1、可以复用</p><h3 id="使用dockerfile-自定义一个nginx镜像" tabindex="-1"><a class="header-anchor" href="#使用dockerfile-自定义一个nginx镜像" aria-hidden="true">#</a> 使用Dockerfile 自定义一个Nginx镜像</h3><p>1、步骤</p><h3 id="nginx运行需要的步骤" tabindex="-1"><a class="header-anchor" href="#nginx运行需要的步骤" aria-hidden="true">#</a> Nginx运行需要的步骤</h3><h4 id="基本步骤阶段" tabindex="-1"><a class="header-anchor" href="#基本步骤阶段" aria-hidden="true">#</a> 基本步骤阶段</h4><p>1、Linux主机</p><p>2、下载</p><p>3、编译</p><p>4、运行</p><p>1 安装 nginx需要工具</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc <span class="token function">make</span> pcre-devel zlib-devel <span class="token function">tar</span> zlib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2 下载nginx</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> http://nginx.org/download/nginx-1.15.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3 nginx解压/nginx目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.15.2.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4 切换到/nginx/nginx-1.15.2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>执行./configure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span> 进行安装
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5 切换到/usr/local/nginx/sbin</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>执行 ./nginx 启动nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="改造阶段" tabindex="-1"><a class="header-anchor" href="#改造阶段" aria-hidden="true">#</a> 改造阶段</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">##基础镜像模板</span>
FROM centos<span class="token punctuation">:</span><span class="token number">7</span>  <span class="token comment">## 原始镜像</span>
RUN yum <span class="token punctuation">-</span>y install gcc make pcre<span class="token punctuation">-</span>devel zlib<span class="token punctuation">-</span>devel tar zlib
WORKDIR /nginx
COPY nginx<span class="token punctuation">-</span>1.15.2.tar.gz /nginx
RUN tar <span class="token punctuation">-</span>zxvf nginx<span class="token punctuation">-</span>1.15.2.tar.gz
RUN cd nginx<span class="token punctuation">-</span>1.15.2 <span class="token important">&amp;&amp;</span> ./configure <span class="token important">&amp;&amp;</span> make <span class="token important">&amp;&amp;</span> make install
EXPOSE 80
COPY nginx.sh /nginx.sh
RUN chmod 755 /nginx.sh
CMD <span class="token punctuation">[</span><span class="token string">&quot;/nginx.sh&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义镜像：效率很低</p><p>Consul skywalking。</p><p>1、全球中央镜像仓库</p><p>缺陷：下载速度慢。</p><p>搭建：私有仓库。</p><p>问题：</p><p>1、官方镜像是否可以做基础镜像？</p><p>可以。什么时候用。</p><p>公司业务需要定制化的时候用。</p><p>容器编排 批量操作容器 镜像编排 批量操作镜像</p><h2 id="docker-compose-工具" tabindex="-1"><a class="header-anchor" href="#docker-compose-工具" aria-hidden="true">#</a> <code>Docker-compose</code> 工具</h2><h2 id="linux-系统重启后-docker-服务器以及容器设置自启动" tabindex="-1"><a class="header-anchor" href="#linux-系统重启后-docker-服务器以及容器设置自启动" aria-hidden="true">#</a> Linux 系统重启后 Docker 服务器以及容器设置自启动</h2><h2 id="重启【reboot】-linux-系统后-docker-服务及容器没有自动启动" tabindex="-1"><a class="header-anchor" href="#重启【reboot】-linux-系统后-docker-服务及容器没有自动启动" aria-hidden="true">#</a> 重启【reboot】 linux 系统后，docker 服务及容器没有自动启动</h2><p>1、设置Docker 服务自动启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> docker.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、设置Docker的容器自动启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、容器还没有创建，在运行容器的时候加入--restart=always参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-id</span> <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">9999</span>:9999 <span class="token parameter variable">-v</span> xxxx:xxxx 镜像名称:tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、容器已经运行的情况，运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>always 容器名字或者容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、如果想停止自动启动，运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> update <span class="token parameter variable">--restart</span><span class="token operator">=</span>no 容器名字或者容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>--restart具体参数值详细信息：

no - 容器退出时，不重启容器；

on-failure - 只有在非0状态退出时才从新启动容器；

always - 无论退出状态是如何，都重启容器；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="卸载-docke" tabindex="-1"><a class="header-anchor" href="#卸载-docke" aria-hidden="true">#</a> 卸载 docke</h2>`,296),R={href:"https://blog.csdn.net/qq_43479188/article/details/133125597",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#停用</span>
<span class="token punctuation">[</span>root@lkn65 ~<span class="token punctuation">]</span><span class="token comment"># sudo systemctl stop docker.socket</span>
<span class="token comment"># 查docker 包文件</span>
<span class="token punctuation">[</span>root@lkn65 ~<span class="token punctuation">]</span><span class="token comment"># yum list installed |grep docker</span>
containerd.io.x86_64                             <span class="token number">1.6</span>.25-3.1.el9                   @docker-ce-stable
docker-buildx-plugin.x86_64                      <span class="token number">0.11</span>.2-1.el9                     @docker-ce-stable
docker-ce.x86_64                                 <span class="token number">3</span>:24.0.7-1.el9                   @docker-ce-stable
docker-ce-cli.x86_64                             <span class="token number">1</span>:24.0.7-1.el9                   @docker-ce-stable
docker-ce-rootless-extras.x86_64                 <span class="token number">24.0</span>.7-1.el9                     @docker-ce-stable
docker-compose-plugin.x86_64                     <span class="token number">2.21</span>.0-1.el9                     @docker-ce-stable
<span class="token comment"># 删除</span>
<span class="token punctuation">[</span>root@lkn65 ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa |grep docker</span>
docker-compose-plugin-2.21.0-1.el9.x86_64
docker-buildx-plugin-0.11.2-1.el9.x86_64
docker-ce-cli-24.0.7-1.el9.x86_64
docker-ce-rootless-extras-24.0.7-1.el9.x86_64
docker-ce-24.0.7-1.el9.x86_64
<span class="token punctuation">[</span>root@lkn65 ~<span class="token punctuation">]</span><span class="token comment"># rm -rf /var/lib/docker</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#删除所有安装的docker文件包</span>
yum <span class="token parameter variable">-y</span> remove <span class="token operator">&lt;</span>此处粘贴上一步所有的rpm源文件名用空格间隔<span class="token operator">&gt;</span>
<span class="token comment">#检查是否卸载干净</span>
<span class="token function">rpm</span> <span class="token parameter variable">-qa</span> <span class="token operator">|</span><span class="token function">grep</span> <span class="token function">docker</span>
<span class="token comment">#删除docker的镜像文件，默认在/var/lib/docker目录下 </span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
<span class="token comment">#卸载结束</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定版本安装docker" tabindex="-1"><a class="header-anchor" href="#指定版本安装docker" aria-hidden="true">#</a> 指定版本安装docker</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装所需要的软件包</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils  device-mapper-persistent-data  lvm2
<span class="token comment">#设置稳定的仓库（选择的阿里云）。</span>
<span class="token function">sudo</span> yum-config-manager  --add-repo  http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
<span class="token comment">#安装特定版本的 Docker Engine-Community，请在存储库中列出可用版本，然后选择并安装：</span>
yum list docker-ce <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
yum list docker-ce-cli <span class="token parameter variable">--showduplicates</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-r</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#此处为兼容K8s选择20.10.3</span>
<span class="token comment">#安装docker服务</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce-20.10.15 docker-ce-cli-20.10.15 containerd.io
<span class="token comment">#安装完成后启动服务</span>
systemctl start <span class="token function">docker</span>
<span class="token comment">#测试docker是否安装成功</span>
<span class="token function">docker</span> run hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function N(E,O){const e=c("router-link"),l=c("ExternalLinkIcon");return p(),r("div",null,[b,n("nav",g,[n("ul",null,[n("li",null,[a(e,{to:"#目录"},{default:i(()=>[s("目录")]),_:1})]),n("li",null,[a(e,{to:"#微服务部署docker"},{default:i(()=>[s("微服务部署Docker")]),_:1})]),n("li",null,[a(e,{to:"#docker核心概念"},{default:i(()=>[s("Docker核心概念")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#为什么要学习docker"},{default:i(()=>[s("为什么要学习docker")]),_:1})]),n("li",null,[a(e,{to:"#什么是docker"},{default:i(()=>[s("什么是Docker")]),_:1})])])]),n("li",null,[a(e,{to:"#为什么使用docker"},{default:i(()=>[s("为什么使用docker")]),_:1})]),n("li",null,[a(e,{to:"#docker使用时机"},{default:i(()=>[s("docker使用时机")]),_:1})]),n("li",null,[a(e,{to:"#docker-总结"},{default:i(()=>[s("docker 总结")]),_:1})]),n("li",null,[a(e,{to:"#docker-如何使用"},{default:i(()=>[s("docker 如何使用？")]),_:1})]),n("li",null,[a(e,{to:"#docker概念之间关系"},{default:i(()=>[s("Docker概念之间关系")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#docker下载安装"},{default:i(()=>[s("Docker下载安装")]),_:1})]),n("li",null,[a(e,{to:"#如果要安装其他版本"},{default:i(()=>[s("如果要安装其他版本")]),_:1})])])]),n("li",null,[a(e,{to:"#docker-删除镜像-命令"},{default:i(()=>[s("docker 删除镜像 命令")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#docker-删除镜像命令详解"},{default:i(()=>[s("Docker 删除镜像命令详解")]),_:1})]),n("li",null,[a(e,{to:"#docker-删除镜像的命令"},{default:i(()=>[s("Docker 删除镜像的命令")]),_:1})]),n("li",null,[a(e,{to:"#centos9-安装异常处理"},{default:i(()=>[s("Centos9 安装异常处理")]),_:1})])])]),n("li",null,[a(e,{to:"#docker基本使用"},{default:i(()=>[s("docker基本使用")]),_:1})]),n("li",null,[a(e,{to:"#docker运行商品微服务"},{default:i(()=>[s("Docker运行商品微服务")]),_:1})]),n("li",null,[a(e,{to:"#docker镜像使用"},{default:i(()=>[s("Docker镜像使用")]),_:1})]),n("li",null,[a(e,{to:"#docker容器使用"},{default:i(()=>[s("docker容器使用")]),_:1})]),n("li",null,[a(e,{to:"#docker容器结构"},{default:i(()=>[s("Docker容器结构")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#docker-镜像容器总结"},{default:i(()=>[s("docker 镜像容器总结")]),_:1})])])]),n("li",null,[a(e,{to:"#docker-如何构建-nginx-镜像"},{default:i(()=>[s("Docker 如何构建 nginx 镜像")]),_:1})]),n("li",null,[a(e,{to:"#容器编排-docker-compose"},{default:i(()=>[s("容器编排 Docker-Compose")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#yml文件介绍"},{default:i(()=>[s("yml文件介绍")]),_:1})]),n("li",null,[a(e,{to:"#docker-compose核心配置"},{default:i(()=>[s("docker-compose核心配置")]),_:1})])])]),n("li",null,[a(e,{to:"#使用docker-compose操作容器"},{default:i(()=>[s("使用docker-compose操作容器")]),_:1})]),n("li",null,[a(e,{to:"#docker-compose-动态伸缩-scale"},{default:i(()=>[s("docker-compose 动态伸缩 scale")]),_:1})]),n("li",null,[a(e,{to:"#启动-docker-compose-的日志"},{default:i(()=>[s("启动 docker-compose 的日志")]),_:1})]),n("li",null,[a(e,{to:"#docker-network-网络"},{default:i(()=>[s("Docker network 网络")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#什么是network"},{default:i(()=>[s("什么是network")]),_:1})]),n("li",null,[a(e,{to:"#容器中网络分析"},{default:i(()=>[s("容器中网络分析")]),_:1})]),n("li",null,[a(e,{to:"#为什么要进行容器互联"},{default:i(()=>[s("为什么要进行容器互联")]),_:1})])])]),n("li",null,[a(e,{to:"#docker-volume-数据卷"},{default:i(()=>[s("Docker volume 数据卷")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#什么是volume"},{default:i(()=>[s("什么是volume")]),_:1})])])]),n("li",null,[a(e,{to:"#笔记"},{default:i(()=>[s("笔记")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#docker部署微服务思路"},{default:i(()=>[s("docker部署微服务思路")]),_:1})]),n("li",null,[a(e,{to:"#商品列表查询过程原理"},{default:i(()=>[s("商品列表查询过程原理")]),_:1})]),n("li",null,[a(e,{to:"#常识"},{default:i(()=>[s("常识")]),_:1})]),n("li",null,[a(e,{to:"#镜像和容器区别"},{default:i(()=>[s("镜像和容器区别")]),_:1})]),n("li",null,[a(e,{to:"#容器操作"},{default:i(()=>[s("容器操作")]),_:1})]),n("li",null,[a(e,{to:"#思考问题"},{default:i(()=>[s("思考问题：")]),_:1})]),n("li",null,[a(e,{to:"#使用dockerfile-自定义一个nginx镜像"},{default:i(()=>[s("使用Dockerfile 自定义一个Nginx镜像")]),_:1})]),n("li",null,[a(e,{to:"#nginx运行需要的步骤"},{default:i(()=>[s("Nginx运行需要的步骤")]),_:1})])])]),n("li",null,[a(e,{to:"#docker-compose-工具"},{default:i(()=>[s("Docker-compose 工具")]),_:1})]),n("li",null,[a(e,{to:"#linux-系统重启后-docker-服务器以及容器设置自启动"},{default:i(()=>[s("Linux 系统重启后 Docker 服务器以及容器设置自启动")]),_:1})]),n("li",null,[a(e,{to:"#重启【reboot】-linux-系统后-docker-服务及容器没有自动启动"},{default:i(()=>[s("重启【reboot】 linux 系统后，docker 服务及容器没有自动启动")]),_:1})]),n("li",null,[a(e,{to:"#卸载-docke"},{default:i(()=>[s("卸载 docke")]),_:1})]),n("li",null,[a(e,{to:"#指定版本安装docker"},{default:i(()=>[s("指定版本安装docker")]),_:1})])])]),h,n("p",null,[n("a",f,[s("参考"),a(l)])]),x,n("p",null,[n("a",q,[s("Centos8参考"),a(l)]),s(" contos9 卸载 重新安装")]),y,n("p",null,[n("a",_,[s("Centos7参考"),a(l)])]),D,n("p",null,[n("a",R,[s("参考"),a(l)])]),w])}const C=o(k,[["render",N],["__file","docker01.html.vue"]]);export{C as default};
