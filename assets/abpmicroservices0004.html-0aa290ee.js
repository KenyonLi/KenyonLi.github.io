import{_ as t,r as o,o as l,c,a as n,b as e,w as i,d as s,e as p}from"./app-c1c3c937.js";const r="/images/abpmicroservices/micro004/abpmicroservices0004_0001image.png",d="/images/abpmicroservices/micro004/abpmicroservices0004_0002image.png",u="/images/abpmicroservices/micro004/abpmicroservices0004_0003image.png",v="/images/abpmicroservices/micro004/abpmicroservices0004_0004image.png",m="/images/abpmicroservices/micro004/abpmicroservices0004_0005image.png",b="/images/abpmicroservices/micro004/abpmicroservices0004_0006image.png",k={},g=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),h={class:"table-of-contents"},q=p(`<h2 id="微服务注册中心" tabindex="-1"><a class="header-anchor" href="#微服务注册中心" aria-hidden="true">#</a> 微服务注册中心</h2><h3 id="什么是注册中心" tabindex="-1"><a class="header-anchor" href="#什么是注册中心" aria-hidden="true">#</a> 什么是注册中心</h3><p>我们需要搞定这个问题，咱们得从一个实际场景中去学习，我们以购物场景为例说明，在购物和场景中，总共涉及到三个角色，消费者，商店，商场。<br> 在这个场景中，我们以画图平解决</p><h4 id="为什么要使用注册中心" tabindex="-1"><a class="header-anchor" href="#为什么要使用注册中心" aria-hidden="true">#</a> 为什么要使用注册中心</h4><p>图解析<br> 优点<br> 1、解耦</p><p>服务消费者个服务提供解耦，各自变化，不互相影响</p><p>2、扩展</p><p>服务消费者和服务提供者增加和删除新的服务，对于双方没有任务影响</p><p>3、中介者设计模式<br> 这是一种多对多关系的典范</p><h4 id="注册中心类型" tabindex="-1"><a class="header-anchor" href="#注册中心类型" aria-hidden="true">#</a> 注册中心类型</h4><p><code>zookeeper</code></p><p>一个被广泛使用的分布式的高性能服务</p><p><code>consul</code></p><p>一个发现和配置服务的工具，提供API注册和发现服务，为了确保操作性，<code>consul</code>会执行健康检查</p><p><code>etcd</code></p><p>一个高可用，分布式的，一致性key-value结构，用于共享配置信息服务和服务发现k8s使用了etcd</p><p><code>eureka</code></p><p>这个注册中心已经闭源了，建议不要使用了</p><h3 id="在微服务中如何使用consul" tabindex="-1"><a class="header-anchor" href="#在微服务中如何使用consul" aria-hidden="true">#</a> 在微服务中如何使用consul</h3><h4 id="什么是consul" tabindex="-1"><a class="header-anchor" href="#什么是consul" aria-hidden="true">#</a> 什么是Consul</h4><p>Consul是一个用来实现分布式系统的服务发现与配置的开源工具。是由go语言开发。他主要由多个组成部分：</p><ul><li>服务发现：客户端通过Consul提供服务，类似于API,Mysql，或者其他客户端可以使用Consul发现服务的提供者。使用类似DNS或者HTTP,应用程序和可以很轻松的发现他们依赖的服务。</li><li>检查健康： Consul客户端可以提供与给定服务相关的健康检查（Web服务器返回200 ok）或者本地节点（内存利用率低于90%）。这些信息可以监控集群的运行情况，并且使访问远离不健康主机的组件。</li><li>键值对存储： 应用程序可以使用Cousul的层级键值对。</li><li>多数据中心： Consul有开箱及用的多数据中心。</li></ul><h3 id="consul-的角色" tabindex="-1"><a class="header-anchor" href="#consul-的角色" aria-hidden="true">#</a> Consul 的角色</h3><p><code>client</code>:客户端，无状态，将Htpp和DNS接口请求转发给局域网内的服务端集群。<br><code>server</code>:服务端，保存配置信息，高可用集群，在局域网内与本地客户端通讯，通过广域网与其他数据中心通讯，每个数据中心的<code>server</code>数量推荐为3 个或者5个。</p><p><code>agent</code> 组成<code>Consul</code>集群的每个成员上都要运行一个 <code>agent</code>,可以通过 <code>consul agent</code> 命令来启动。 <code>agent</code> 可以运行在 <code>server</code> 状态。自然的，运行在 <code>server</code> 状态的节点被称为<code>server</code>节点; 运行在<code>client</code> 状态的节点被称为<code>client</code>节点。</p><p><code>client</code> 节点<br> 负责转发所有的<code>RPC</code>到<code>server</code>节点。 本身无状态，且轻量级，因此，可以部署大量的client节点。</p><p><code>server</code> 节点<br> 负责组成cluster的复杂工作（选举、状态维护、转发请求到<code>lead</code>）,以及consul提供服务（响应RCP请求）。考虑到容错和收敛，一般部署3~5个比较合适。</p><h6 id="consul内幕" tabindex="-1"><a class="header-anchor" href="#consul内幕" aria-hidden="true">#</a> Consul内幕</h6><p>术语：</p><ul><li>代理（agent）:代理是<code>Consul</code>集群上每个成员的守护进程，它是由<code>consul agent</code> 开始运行。 代理能够以客户端或服务器模式运行。由于所有点节都必须运行代理，所以将节点引用这客户端或服务器更为简单，但还有其他实例的代理。所有代理都可以运行DNS或Http接口，并负责运行检查和保持服务同步。</li><li>客户端：客户端可以将所有RPC请求转发到服务器的代理。客户端是相对无状态的。客户端执行的唯一后台活动是<code>LAN goosip</code>池。它消耗最小的资源开销和少量的网络带宽。</li><li>服务器端： 服务器具有功能扩展的代理，它主要参与维护集群状态，响应<code>RPC</code>查询，与其他数据中心交换<code>WAN goosip</code>,以及向上级或远程服务中心转发查询。</li><li>数据中心：虽然数据中心定义似乎很明显，但仍然有一些细微的细节需要考虑。我们将一个数据中心定义为一个私有、低延迟和高带宽的网络环境。这不包括通过公共互联网的通信，但是为了我们的，单个EC2区域内的多个可用区域将被视为单个数据中心的一部分。</li><li><code>Gossip</code>: <code>consul</code>是建立在<code>serf</code>之上的，它提供了一个完整的<code>gossip</code>协议,用在很多地方。Serf提供了成员，故障检测和事件广播。<code>Gossip</code>的节点到节点之间的通信使用了UDP协议。</li><li><code>LAN Gossip</code>:指在同一个局域网或数据中心的节点上的LAN Gossip池。</li><li><code>WAN Gossip</code>:指包含服务器的WAN Gossip池，这些服务在不同的数据中心。通过网络进行通信。</li><li>一致性协议采用Raft算法用来保证服务的高可用。</li><li>成员管理和消息广播采用Gossip协议，支持ACL访问控制。</li></ul><p>ACL技术在路由器中被广泛采用，它是一种基于包过滤的流控制技术。控制列表通过把源地址、目的地址及端口号作为数据包检查的基本元素，并可以规定符合条件的数据包是否允许通过。</p><p>gossip就是p2p协议。他主要要做的事情是，去中心化。</p><p>这个协议就是模拟人类中传播谣言的行为而来。首先要传播谣言就要有种子节点。种子节点每秒都会随机向其他节点发送自己所拥有的节点列表，以及需要传播的消息。任何新加入的节点，就在这种传播方式下很快地被全网所知道。</p><p>Consul运行流程图 结合图进行讲解，请看图</p><h4 id="consul微服务中实践-如何注册-发现" tabindex="-1"><a class="header-anchor" href="#consul微服务中实践-如何注册-发现" aria-hidden="true">#</a> Consul微服务中实践(如何注册，发现)</h4><p>Consul如何注册，发现服务？ ​ 步骤</p><p>​ 1、Consul下载地址</p><p>​ 官网地址: <code>https://www.consul.io/</code></p><p>​ 下载地址: <code>https://releases.hashicorp.com/consul/1.16.2/consul_1.16.2_windows_amd64.zip</code> 或 <code>https://www.consul.io/downloads.html</code></p><p>​ 2、服务端启动</p><p>​ 1.1 开发模式启动命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>consul.exe agent <span class="token parameter variable">-dev</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+r+`" alt="Alt text"></p><p>Version ：consul版本</p><p>​ Node ID : consul当前启动节点编号(guid)</p><p>​ Node Name:节点名称(默认为电脑名称)</p><p>​ Datacenter：数据中心</p><p>​ Server:启动是服务端模式，否则就为客户端模式</p><p>​ Client Addr:客户端连接地址，支持http,https,gRPC,DNS。默认我们使用HTTP方式</p><p>​ Cluster Addr:集群地址，就是Server模式下 启动方式</p><p>​ Encrypt:安全</p><p>​ 1.2 生产模式启动命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>consul agent <span class="token parameter variable">-server</span> -bootstrap-expect <span class="token number">1</span>  -data-dir ./consul/data   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.2.1 会出现错误：提示</p><p><img src="`+d+`" alt="Alt text"></p><p>主要原因：服务端模式启动的时候，默认绑定的地址是<code>0.0.0.0</code>希望绑定默认的ip地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>consul agent <span class="token parameter variable">-server</span> <span class="token parameter variable">-bind</span><span class="token operator">=</span><span class="token number">127.0</span>.0.1  -bootstrap-expect  <span class="token number">1</span>  -data-dir ./consul/data 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+u+`" alt="Alt text"></p><p>1.3 客户端模式启动</p><p>​ 直接使用<code>net</code>程序来进行启动</p><p>​ 1.4 总结：</p><p><code>consul</code>启动重要参数<code>-bind</code>需要是私有<code>ip</code>地址，默认其实就是<code>0.0.0.0</code>。当遇到问题的时候一定要先从环境差异性或根源上原因，如果根源上找不到知道问题，可以采用试探法解决问题。</p><p><code>consul</code>有三种模式运行，<code>client</code>, <code>server</code>,<code>dev</code>。</p><p>注意：<code>dev</code>模式运行是不会持久化数据，也就重启之后保存的配置信息会丢失。</p><p>下面配上<code>consul</code>启动参数简单说明：</p><p><code>agent</code> 　　 <code>Consul</code>的核心命令，主要作用有维护成员信息、运行状态检测、声明服务以及处理请求等<br><code>-server</code>　　 就是代表<code>server</code>模式<br><code>-ui </code>　　 代表开启web 控制台<br><code>-bootstrap-expect </code>代表想要创建的集群数目，官方建议3或者5<br><code>-data-dir</code> 数据存储目录 <code>-node</code> 代表当前<code>node</code>的名称 <code>-client</code> 应该是一个客户端服务注册的地址，可以和当前<code>server</code>的一致也可以是其他主机地址，系统默认是<code>127.0.0.1</code><code>-bind</code> 集群通讯地址</p><p>运行<code>cosnul agent</code>以<code>server</code>模式： ​ <code>-server</code> ： 定义agent运行在<code>server</code>模式<br> ​ <code>-bootstrap-expect</code> ：在一个<code>datacenter</code>中期望提供的<code>server</code>节点数目，当该值提供的时候，<code>consul</code>一直等到达到指定<code>sever</code>数目的时候才会引导整个集群，该标记不能和<code>bootstrap</code>共用<br> ​ <code>-bind</code>：该地址用来在集群内部的通讯，集群内的所有节点到地址都必须是可达的，默认是0.0.0.0<br> ​ <code>-node</code>：节点在集群中的名称，在一个集群中必须是唯一的，默认是该节点的主机名<br> ​ <code>-ui-dir</code>： 提供存放<code>web ui</code>资源的路径，该目录必须是可读的<br> ​ <code>-rejoin</code>：使<code>consul</code>忽略先前的离开，在再次启动后仍旧尝试加入集群中。<br><code>​ -config-dir</code>：配置文件目录，里面所有以.json结尾的文件都会被加载<br> ​ <code>-client：consul</code>服务侦听地址，这个地址提供<code>HTTP</code>、<code>DNS</code>、<code>RPC</code>等服务，默认是<code>127.0.0.1</code>所以不对外提供服务，如果你要对外提供服务改成<code>0.0.0.0</code></p><p>​ 2、先下载<code>consul</code>包</p><p>​ <code>aspnetcore nuget</code>中进行下载</p><p>​ 3、然后微服务提供者进行注册，代码如下</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code> // 1、创建consul客户端连接
            var consulClient = new ConsulClient(configuration =&gt;
            {
                //1.1 建立客户端和服务端连接
                configuration.Address = new Uri(&quot;http://127.0.0.1:8500&quot;);
            });
        // 2、获取服务内部地址

        // 3、创建consul服务注册对象
        var registration = new AgentServiceRegistration()
        {
            ID =  Guid.NewGuid().ToString(),
            Name = &quot;teamservice&quot;,
            Address = &quot;http://localhos&quot;,
            Port = &quot;5001&quot;,
            Tags = new string[],
            Check = new AgentServiceCheck
            {
                // 3.1、consul健康检查超时间
                Timeout = TimeSpan.FromSeconds(10),
                // 3.2、服务停止5秒后注销服务
                DeregisterCriticalServiceAfter = TimeSpan.FromSeconds(5),
                // 3.3、consul健康检查地址
                HTTP = serviceNode.HealthCheckAddress,
                // 3.4 consul健康检查间隔时间
                Interval = TimeSpan.FromSeconds(10),
            }
        };

        // 4、注册服务
        consulClient.Agent.ServiceRegister(registration).Wait();    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、最后微服务发现者进行获取,服务发现代码如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  // <span class="token number">1</span>、创建consul客户端连接
       var consulClient <span class="token operator">=</span> new ConsulClient<span class="token punctuation">(</span>configuration <span class="token operator">=</span><span class="token operator">&gt;</span>
       <span class="token punctuation">{</span>
           //1.1 建立客户端和服务端连接
           configuration.Address <span class="token operator">=</span> new Uri<span class="token punctuation">(</span><span class="token string">&quot;http://127.0.0.1:8500&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       // <span class="token number">2</span>、consul查询服务,根据具体的服务名称查询
        var queryResult <span class="token operator">=</span> await consulClient.Catalog.Service<span class="token punctuation">(</span><span class="token string">&quot;teamservice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        // <span class="token number">3</span>、将服务进行拼接
        var list <span class="token operator">=</span> new List<span class="token operator">&lt;</span>ServiceUrl<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        foreach <span class="token punctuation">(</span>var <span class="token function">service</span> <span class="token keyword">in</span> queryResult.Response<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            list.Add<span class="token punctuation">(</span>new ServiceUrl <span class="token punctuation">{</span> Url <span class="token operator">=</span> service.ServiceAddress + <span class="token string">&quot;:&quot;</span> + service.ServicePort <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="consul如何做心跳检测" tabindex="-1"><a class="header-anchor" href="#consul如何做心跳检测" aria-hidden="true">#</a> consul如何做心跳检测？</h4><p>步骤</p><p>1、使用AgentServiceCheck来实现，代码配置如下</p><div class="language-C# line-numbers-mode" data-ext="C#"><pre class="language-C#"><code>new AgentServiceCheck
     {
                // 3.1、consul健康检查超时间
                Timeout = TimeSpan.FromSeconds(10),
                // 3.2、服务停止5秒后注销服务
                DeregisterCriticalServiceAfter = TimeSpan.FromSeconds(5),
                // 3.3、consul健康检查地址
                HTTP = serviceNode.HealthCheckAddress,
                // 3.4 consul健康检查间隔时间
                Interval = TimeSpan.FromSeconds(10),
     }	
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="如何封装consul" tabindex="-1"><a class="header-anchor" href="#如何封装consul" aria-hidden="true">#</a> 如何封装Consul？</h5><p>步骤</p><p>1、首先根据服务角色，将服务抽象为提供者和发现者</p><p><img src="`+v+`" alt="Alt text"></p><p>2、然后使用ioc容器进行条件准备，使用app构建器进行服务注册</p><h3 id="consul如何搭建集群" tabindex="-1"><a class="header-anchor" href="#consul如何搭建集群" aria-hidden="true">#</a> Consul如何搭建集群</h3><p>参数解释</p><p>命令行参数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-bind:为该节点绑定一个地址  
-enable-script-checks<span class="token operator">=</span>tue:设置检查服务可用   
-join:加入到已有的集群中  
<span class="token parameter variable">-server</span> 表示当前使用sever模式  
-node: 指定当前节点在集群中的名称
-config-file - 要加载的配置文件   
-config-dir: 指定配置文件目录，定义服务的，默认所有的.json结尾的文件都会读
-datacenter:数据中心没名称，不设置的话，默认为dc 
-client:客户端模式  
-ui: 使用consul自带的界面
-data-dir consul 存储的目录
-bootstrap: 用来控制一个server是否在bootstrap模式，在一个datacenter中只能有一个server处于bootstrap模式，当一个server处于bootstrap模式时，可以自己选举为raft leader.
-boosstrap-expect:在一个datacenter中期望提供的server节点数目，当该值提供的时候，consul一直等到达到指定server数目的时候才会引导整个集群，该标记不能和bootstrap公用。

这两个参数十分重要，二选一，如果两个参数不使用的话，会出现就算你使用join将agent加入集群仍然会报<span class="token variable"><span class="token variable">\`</span>agent: failed to <span class="token function">sync</span> remote state: No cluster leader<span class="token variable">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="配置文件参数" tabindex="-1"><a class="header-anchor" href="#配置文件参数" aria-hidden="true">#</a> 配置文件参数</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ui: 相当于-ui 命令行标志。
acl_token：agent会使用这个token和consul server进行请求
acl_ttl：控制TTL的cache，默认是30s
addresses：一个嵌套对象，可以设置以下key：dns、http、rpc
advertise_addr：等同于-advertise
bootstrap：等同于-bootstrap
bootstrap_expect：等同于-bootstrap-expect
bind_addr：等同于-bindca_file：提供CA文件路径，用来检查客户端或者服务端的链接
cert_file：必须和key_file一起
check_update_interval：
client_addr：等同于-client
datacenter：等同于-dc
data_dir：等同于-data-dir
disable_anonymous_signature：在进行更新检查时禁止匿名签名
enable_debug：开启debug模式
enable_syslog：等同于-syslog
encrypt：等同于-encrypt
key_file：提供私钥的路径
leave_on_terminate：默认是false，如果为true，当agent收到一个<span class="token environment constant">TERM</span>信号的时候，它会发送leave信息到集群中的其他节点上。
log_level：等同于-log-level node_name:等同于-node 
ports：这是一个嵌套对象，可以设置以下key：dns<span class="token punctuation">(</span>dns地址：8600<span class="token punctuation">)</span>、http<span class="token punctuation">(</span>http api地址：8500<span class="token punctuation">)</span>、rpc<span class="token punctuation">(</span>rpc:8400<span class="token punctuation">)</span>、serf_lan<span class="token punctuation">(</span>lan port:8301<span class="token punctuation">)</span>、serf_wan<span class="token punctuation">(</span>wan port:8302<span class="token punctuation">)</span>、server<span class="token punctuation">(</span>server rpc:8300<span class="token punctuation">)</span> 
protocol：等同于-protocol
rejoin_after_leave：等同于-rejoin
retry_join：等同于-retry-join
retry_interval：等同于-retry-interval 
server：等同于-server
syslog_facility：当enable_syslog被提供后，该参数控制哪个级别的信息被发送，默认Local0
ui_dir：等同于-ui-dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="集群搭建-单机" tabindex="-1"><a class="header-anchor" href="#集群搭建-单机" aria-hidden="true">#</a> 集群搭建（单机）</h4><blockquote><p>因为没有资源,只能在一台机器上装伪集群,如果是三台服务器来做的话, 不需要写json配置文件,直接用命令行启动就可以</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建节点数据目录$ mkdir -pv ./data/{node1,node2,node3} </span>

ubuntu@VM-20-13-ubuntu consul.d % <span class="token function">mkdir</span> <span class="token parameter variable">-pv</span> ./data/<span class="token punctuation">{</span>node1,node2,node3<span class="token punctuation">}</span>                                                                                <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
mkdir: created directory <span class="token string">&#39;./data&#39;</span>
mkdir: created directory <span class="token string">&#39;./data/node1&#39;</span>
mkdir: created directory <span class="token string">&#39;./data/node2&#39;</span>
mkdir: created directory <span class="token string">&#39;./data/node3&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="节点1配置" tabindex="-1"><a class="header-anchor" href="#节点1配置" aria-hidden="true">#</a> 节点1配置</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">vim</span> ./data/node1/basic.json
<span class="token punctuation">{</span>  
    <span class="token string">&quot;datacenter&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;dc1&quot;</span>,
    <span class="token string">&quot;data_dir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./data/node1&quot;</span>,
    <span class="token string">&quot;log_level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;INFO&quot;</span>,
    <span class="token string">&quot;server&quot;</span><span class="token builtin class-name">:</span> true, 
    <span class="token string">&quot;node_name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node1&quot;</span>,
    <span class="token string">&quot;ui&quot;</span><span class="token builtin class-name">:</span> true, 
    <span class="token string">&quot;bind_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.0.20.13&quot;</span>, 
    <span class="token string">&quot;client_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.0.20.13&quot;</span>,
    <span class="token string">&quot;advertise_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.0.20.13&quot;</span>,
    <span class="token string">&quot;bootstrap_expect&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>, 
    <span class="token string">&quot;ports&quot;</span>:<span class="token punctuation">{</span>  
        <span class="token string">&quot;http&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8500</span>,
        <span class="token string">&quot;dns&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8600</span>,  
        <span class="token string">&quot;grpc_tls&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8503</span>,
        <span class="token string">&quot;server&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8300</span>,
        <span class="token string">&quot;serf_lan&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8301</span>, 
        <span class="token string">&quot;serf_wan&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8302</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">nohup</span> ./consul agent -config-file<span class="token operator">=</span>./data/node1/basic.json <span class="token operator">&gt;</span> ./data/node1/consul.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token function">tail</span> <span class="token parameter variable">-100f</span> ./data/node1/consul.log 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="节点2配置" tabindex="-1"><a class="header-anchor" href="#节点2配置" aria-hidden="true">#</a> 节点2配置</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> ./data/node2/basic.json

<span class="token punctuation">{</span> 
 <span class="token string">&quot;datacenter&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;dc1&quot;</span>,
 <span class="token string">&quot;data_dir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./data/node2&quot;</span>,
 <span class="token string">&quot;log_level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;INFO&quot;</span>,
 <span class="token string">&quot;server&quot;</span><span class="token builtin class-name">:</span> true,
 <span class="token string">&quot;node_name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node2&quot;</span>,
 <span class="token string">&quot;bind_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.0.20.13&quot;</span>,
 <span class="token string">&quot;client_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.0.20.13&quot;</span>, 
 <span class="token string">&quot;advertise_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.0.20.13&quot;</span>,
 <span class="token string">&quot;ports&quot;</span>:<span class="token punctuation">{</span> 
     <span class="token string">&quot;http&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8510</span>,   
     <span class="token string">&quot;grpc_tls&quot;</span>:8513,
     <span class="token string">&quot;dns&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8610</span>,  
     <span class="token string">&quot;server&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8310</span>,
     <span class="token string">&quot;serf_lan&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8311</span>,
     <span class="token string">&quot;serf_wan&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8312</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token function">nohup</span> ./consul agent -config-file<span class="token operator">=</span>./data/node2/basic.json  -retry-join<span class="token operator">=</span><span class="token number">10.0</span>.20.13:8301 <span class="token operator">&gt;</span> ./data/node2/consul.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token function">tail</span> <span class="token parameter variable">-100f</span> ./data/node2/consul.log 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="节点3配置" tabindex="-1"><a class="header-anchor" href="#节点3配置" aria-hidden="true">#</a> 节点3配置</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">vim</span> ./data/node3/basic.json

<span class="token punctuation">{</span>  
    <span class="token string">&quot;datacenter&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;dc1&quot;</span>,
    <span class="token string">&quot;data_dir&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;./data/node3&quot;</span>,
    <span class="token string">&quot;log_level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;INFO&quot;</span>,
    <span class="token string">&quot;server&quot;</span><span class="token builtin class-name">:</span> true, 
    <span class="token string">&quot;node_name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;node3&quot;</span>,
    <span class="token string">&quot;bind_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.0.20.13&quot;</span>, 
    <span class="token string">&quot;client_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.0.20.13&quot;</span>,
    <span class="token string">&quot;advertise_addr&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;10.0.20.13&quot;</span>,
    <span class="token string">&quot;ports&quot;</span>:<span class="token punctuation">{</span>  
        <span class="token string">&quot;http&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8520</span>,
        <span class="token string">&quot;dns&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8620</span>,  
        <span class="token string">&quot;grpc_tls&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8523</span>,
        <span class="token string">&quot;server&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8320</span>,
        <span class="token string">&quot;serf_lan&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8321</span>, 
        <span class="token string">&quot;serf_wan&quot;</span><span class="token builtin class-name">:</span> <span class="token number">8322</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">nohup</span> ./consul agent -config-file<span class="token operator">=</span>./data/node3/basic.json  -retry-join<span class="token operator">=</span><span class="token number">10.0</span>.20.13:8301 <span class="token operator">&gt;</span> ./data/node3/consul.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>

<span class="token function">tail</span> <span class="token parameter variable">-100f</span> ./data/node3/consul.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看集群信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ubuntu@VM-20-13-ubuntu consul.d % ./consul members -http-addr<span class="token operator">=</span><span class="token number">10.0</span>.20.13:8500                                                                         <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
Node   Address          Status  Type    Build   Protocol  DC   Partition  Segment
node1  <span class="token number">10.0</span>.20.13:8301  alive   server  <span class="token number">1.16</span>.2  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
node2  <span class="token number">10.0</span>.20.13:8311  alive   server  <span class="token number">1.16</span>.2  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
node3  <span class="token number">10.0</span>.20.13:8321  alive   server  <span class="token number">1.16</span>.2  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ubuntu@VM-20-13-ubuntu consul.d % ./consul info -http-addr<span class="token operator">=</span><span class="token number">10.0</span>.20.13:8500                                                                            <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
agent:
	check_monitors <span class="token operator">=</span> <span class="token number">0</span>
	check_ttls <span class="token operator">=</span> <span class="token number">0</span>
	checks <span class="token operator">=</span> <span class="token number">0</span>
	services <span class="token operator">=</span> <span class="token number">0</span>
build:
	prerelease <span class="token operator">=</span> 
	revision <span class="token operator">=</span> 68f81912
	version <span class="token operator">=</span> <span class="token number">1.16</span>.2
	version_metadata <span class="token operator">=</span> 
consul:
	acl <span class="token operator">=</span> disabled
	bootstrap <span class="token operator">=</span> <span class="token boolean">false</span>
	known_datacenters <span class="token operator">=</span> <span class="token number">1</span>
	leader <span class="token operator">=</span> <span class="token boolean">true</span>
	leader_addr <span class="token operator">=</span> <span class="token number">10.0</span>.20.13:8300
	server <span class="token operator">=</span> <span class="token boolean">true</span>
raft:
	applied_index <span class="token operator">=</span> <span class="token number">50</span>
	commit_index <span class="token operator">=</span> <span class="token number">50</span>
	fsm_pending <span class="token operator">=</span> <span class="token number">0</span>
	last_contact <span class="token operator">=</span> <span class="token number">0</span>
	last_log_index <span class="token operator">=</span> <span class="token number">50</span>
	last_log_term <span class="token operator">=</span> <span class="token number">2</span>
	last_snapshot_index <span class="token operator">=</span> <span class="token number">0</span>
	last_snapshot_term <span class="token operator">=</span> <span class="token number">0</span>
	latest_configuration <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>Suffrage:Voter ID:a3b66e75-97bd-97c5-1aaa-864679701777 Address:10.0.20.13:8300<span class="token punctuation">}</span> <span class="token punctuation">{</span>Suffrage:Voter ID:bcd4f567-233b-2388-9862-50c7967c9c83 Address:10.0.20.13:8310<span class="token punctuation">}</span> <span class="token punctuation">{</span>Suffrage:Voter ID:9743eebc-9536-d39b-fffa-943155976ff3 Address:10.0.20.13:8320<span class="token punctuation">}</span><span class="token punctuation">]</span>
	latest_configuration_index <span class="token operator">=</span> <span class="token number">0</span>
	num_peers <span class="token operator">=</span> <span class="token number">2</span>
	protocol_version <span class="token operator">=</span> <span class="token number">3</span>
	protocol_version_max <span class="token operator">=</span> <span class="token number">3</span>
	protocol_version_min <span class="token operator">=</span> <span class="token number">0</span>
	snapshot_version_max <span class="token operator">=</span> <span class="token number">1</span>
	snapshot_version_min <span class="token operator">=</span> <span class="token number">0</span>
	state <span class="token operator">=</span> Leader
	term <span class="token operator">=</span> <span class="token number">2</span>
runtime:
	arch <span class="token operator">=</span> amd64
	cpu_count <span class="token operator">=</span> <span class="token number">2</span>
	goroutines <span class="token operator">=</span> <span class="token number">190</span>
	max_procs <span class="token operator">=</span> <span class="token number">2</span>
	os <span class="token operator">=</span> linux
	version <span class="token operator">=</span> go1.20.8
serf_lan:
	coordinate_resets <span class="token operator">=</span> <span class="token number">0</span>
	encrypted <span class="token operator">=</span> <span class="token boolean">false</span>
	event_queue <span class="token operator">=</span> <span class="token number">0</span>
	event_time <span class="token operator">=</span> <span class="token number">2</span>
	failed <span class="token operator">=</span> <span class="token number">0</span>
	health_score <span class="token operator">=</span> <span class="token number">0</span>
	intent_queue <span class="token operator">=</span> <span class="token number">0</span>
	left <span class="token operator">=</span> <span class="token number">0</span>
	member_time <span class="token operator">=</span> <span class="token number">3</span>
	members <span class="token operator">=</span> <span class="token number">3</span>
	query_queue <span class="token operator">=</span> <span class="token number">0</span>
	query_time <span class="token operator">=</span> <span class="token number">1</span>
serf_wan:
	coordinate_resets <span class="token operator">=</span> <span class="token number">0</span>
	encrypted <span class="token operator">=</span> <span class="token boolean">false</span>
	event_queue <span class="token operator">=</span> <span class="token number">0</span>
	event_time <span class="token operator">=</span> <span class="token number">1</span>
	failed <span class="token operator">=</span> <span class="token number">0</span>
	health_score <span class="token operator">=</span> <span class="token number">0</span>
	intent_queue <span class="token operator">=</span> <span class="token number">0</span>
	left <span class="token operator">=</span> <span class="token number">0</span>
	member_time <span class="token operator">=</span> <span class="token number">4</span>
	members <span class="token operator">=</span> <span class="token number">3</span>
	query_queue <span class="token operator">=</span> <span class="token number">0</span>
	query_time <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问UI</p><p>1、服务搭建成功 <img src="`+m+'" alt="Alt text"></p><p><img src="'+b+'" alt="Alt text"></p>',103);function _(f,x){const a=o("router-link");return l(),c("div",null,[g,n("nav",h,[n("ul",null,[n("li",null,[e(a,{to:"#目录"},{default:i(()=>[s("目录")]),_:1})]),n("li",null,[e(a,{to:"#微服务注册中心"},{default:i(()=>[s("微服务注册中心")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#什么是注册中心"},{default:i(()=>[s("什么是注册中心")]),_:1})]),n("li",null,[e(a,{to:"#在微服务中如何使用consul"},{default:i(()=>[s("在微服务中如何使用consul")]),_:1})]),n("li",null,[e(a,{to:"#consul-的角色"},{default:i(()=>[s("Consul 的角色")]),_:1})]),n("li",null,[e(a,{to:"#consul如何搭建集群"},{default:i(()=>[s("Consul如何搭建集群")]),_:1})])])])])]),q])}const S=t(k,[["render",_],["__file","abpmicroservices0004.html.vue"]]);export{S as default};
