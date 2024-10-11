import{_ as r,r as c,o,c as p,a as n,b as a,w as i,d as s,e as t}from"./app-c1c3c937.js";const d="/images/docker/03/docker03_001.png",u="/images/docker/03/docker03_002.png",m={},v=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),k={class:"table-of-contents"},b=t('<h2 id="微服务部署-k8s" tabindex="-1"><a class="header-anchor" href="#微服务部署-k8s" aria-hidden="true">#</a> 微服务部署-k8s</h2><h3 id="k8s介绍" tabindex="-1"><a class="header-anchor" href="#k8s介绍" aria-hidden="true">#</a> k8s介绍</h3><h3 id="什么是docker" tabindex="-1"><a class="header-anchor" href="#什么是docker" aria-hidden="true">#</a> 什么是docker</h3><p>1、先举出定义，然后画图<br> 2、最后通过形象例子解释<br> 我们开发一个项目，部署到linux系统，需要配置环境，相当复杂。如果我们想部署到不同的linux服务器，又需要准备linux环境，如果是更多呢？我们维护量会非常大，这个时候，我们解决这个环境变量复杂的问题，所以我们出现了docker,用一个docker来解决，所以定义docker:容器引擎技术。<br> 就好比，我们美了很多农虾，我们需要把这些农虾去买到餐馆一样，我们需要讨价还价。一个餐馆还好，如果我们需要和很多餐馆讨价还价呢？非常麻烦，不仅虾子，导致虾子全部死了。所以我们出现了收虾人，收虾人就是docker.</p><h3 id="什么是docker内部概念" tabindex="-1"><a class="header-anchor" href="#什么是docker内部概念" aria-hidden="true">#</a> 什么是docker内部概念</h3><p>举小区构造房子的例子<br> 房子是容器<br> 设计院是仓库<br> 设计院设计的房屋模板镜像<br> 物业就是docker<br> 小区就是pod<br> 开发商就是k8s<br> 总结<br> 1、容器：规范运行项目<br> 2、镜像：容器移植<br> 3、仓库：存储镜像</p><h3 id="三个问题" tabindex="-1"><a class="header-anchor" href="#三个问题" aria-hidden="true">#</a> 三个问题？</h3><p>如果一次性要运行上千项目呢？<br> 如何实现一个项目运行在不同docker上，也就是docker集群？<br> 如果项目宕机了，如何检测到呢？ 形象例子：<br> 如果docker是一艘大船，那么k8s就是船长，指引方向的人，可以让这艘船随便的开向哪里。 其实k8s还有一个同父异母兄弟swarm,两兄弟都可以解决这些问题？</p><h3 id="什么是k8s" tabindex="-1"><a class="header-anchor" href="#什么是k8s" aria-hidden="true">#</a> 什么是k8s</h3><p>就是管理这些房子的大管家<br> Kubernetes(k8s)是google开源的容器集群管理系统（谷歌内部：Borg）,它主要用于容器编排启动容器、自动化部署、扩展和管理容器应用和回收容器。k8s的目标是让部署容器化的应用简单并且高效，k8s提供了应用部署、规划、更新、维护的一种机制！<br> 要理解k8s必须首先要知道k8s和docker关系。<br> k8s是一个舵手，专门用来进行给docker掌管方向的。<br> 可能你们没有接触过这样的一个场景，不是很好理解，咱们再来说一个，公司场景。在座的各位应该都是上班的吧，有没有没上班的，上了那么久的班，公司里面应该有老板和员工。这个都不否认吧老板是干嘛的呢？员工是干嘛的？<br> 老板定方向和协调员工做事的，员工是做事的，这些都是他们的职责。那么docker 和 k8s的关系，k8s是老板，docker呢就是员工。作用是一样的，k8s就是让docker来干事的。</p><p>咱们在看一个非常形象的例子：我想大家都是非常喜欢坐顺风车的，滴滴，顺风车司机。k8s就是滴滴，docker就是司机<br> 总结：k8s是一个专门的容器编制引擎。k8s就是让应用在docker上运行。</p><h3 id="为什么要使用k8s" tabindex="-1"><a class="header-anchor" href="#为什么要使用k8s" aria-hidden="true">#</a> 为什么要使用k8s</h3><p>有学习过docker的同学，可能会第一时间问，我们不是有了swarm,为什么还要学习k8s呢？能有这样思考的同学，我觉得非常棒，只有思考，才能让我们体会技术的魅力。成为技术的主人。而不是客人。 咱们只要看一下swarm 和 k8s的优缺点，这个问题才会明白了。 因为当docker容器异常的时候，docker无法将容器进行重启，如果容器数量比较大<br> swarm 优点<br> 1、架构简单，部署运维成本低<br> docker swarm 集群模式由于原生态集成到docker-engine中，所以首先学习成本低，对于使用docker-engine 1.12版本及以上可以平滑过渡，service服务可以满足动态增减容器个数，同时具备自身的负载均衡，swarm 管理者多台设定保证了机器在出错后有一个良好的容灾机制<br> 2、启动速度快<br> swarm集群只会有两层交互，容器启动是毫秒级<br> swarm缺点<br> 1、无法提供更精细的管理<br> swarm API兼容docker API,所以使得swarm无法提供集群的更加精细的管理<br> 2、网络问题<br> 在网络方面，默认docker容器是通过桥接与NAT和主机外网络通信，这样就出现2个问题，一个是因为是NAT,外部主机无法主动访问容器内（除了端口映射），另外默认桥接IP是一样的，这样会出现不同主机的容器 有相同的ip的情况。这样两个容器更加不能通信。同时网络性能方面，有人测试经过桥接的网络性能只有主机网络性能的70%。当然以上问题通过其他工具解决，比如用Flannel或OVS网桥</p><p>3、容器可靠性 在容器可靠性方面，相较于Kubernetes的Replication Controllers可以监控并维持容器的生命，swarm 在启动时刻可以控制容器启动，在启动后，如果容器或者主机崩溃，swarm没有机制来保证容器的运行。<br> kubernetes优点：<br> 1、管理更趋于完善稳定<br> kubernetes集群管理更趋于完善稳定，同时pod功能上比swarm的service更加强大<br> 2、健康机制完善<br> Replication Contoller可以监控并维持容器的生命<br> 3、轻松应对复杂的网络环境<br> kubernetes默认使用Flannel作为overlay网络。 Flannel是CorOS团队针对Kubernetes设计的一个覆盖网络（OverlayNetwork）工具，其目的在于帮助每个使用Kuberentes的CoreOS主机拥有一个完整的子网。 kubernetes劣势： 1、配置、搭建稍显复杂，学习成本高 由于配置复杂，学习成本相对较高，对应运维的成本相对高点<br> 2、启动速度稍逊<br> kubernetes会有五层交互，启动是秒级，启动速度慢于swarm</p>',14),h={id:"官网地址",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#官网地址","aria-hidden":"true"},"#",-1),f={href:"https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/",target:"_blank",rel:"noopener noreferrer"},y=t('<p>https://kubernetes.io/zh/docs/tutorials/kubernetes-basics/</p><h2 id="k8s集群概念" tabindex="-1"><a class="header-anchor" href="#k8s集群概念" aria-hidden="true">#</a> k8s集群概念</h2><h3 id="什么是集群" tabindex="-1"><a class="header-anchor" href="#什么是集群" aria-hidden="true">#</a> 什么是集群</h3><p>多个实例组成的集合<br> 例如：多个nginx实例</p><h2 id="k8s集群角色" tabindex="-1"><a class="header-anchor" href="#k8s集群角色" aria-hidden="true">#</a> k8s集群角色</h2><p>node:负责运行应用程序<br> master:负责管理node</p><p><img src="'+d+`" alt="Alt text"></p><h2 id="k8s集群内部概念" tabindex="-1"><a class="header-anchor" href="#k8s集群内部概念" aria-hidden="true">#</a> k8s集群内部概念</h2><p>swarm 内部和k8s内部对比<br> service pod项目经理<br> stack deployment 项目总监</p><h2 id="k8s-集群操作概念" tabindex="-1"><a class="header-anchor" href="#k8s-集群操作概念" aria-hidden="true">#</a> k8s 集群操作概念</h2><p>kubeadm:k8s集群管理组件<br> kubectl:操作k8s集群客户端<br> kubelet:运行每个节点容器</p><h2 id="k8s-集群搭建" tabindex="-1"><a class="header-anchor" href="#k8s-集群搭建" aria-hidden="true">#</a> k8s 集群搭建</h2><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意：</h3><p>k8s有硬件要求，必须运行cpu为2核，内存为2G以上</p><h3 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件：</h3><p><code>docker</code>:k8s运行用来运行容器<br><code>kubeadm</code>:k8s集群搭建<br><code>kubectl</code>:操作k8s集群客户端<br><code>kubelet</code>:运行每个节点容器</p><h3 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h3><h4 id="_1-8-除了4-在所有节点执行" tabindex="-1"><a class="header-anchor" href="#_1-8-除了4-在所有节点执行" aria-hidden="true">#</a> 1-8（除了4）在所有节点执行</h4><h4 id="_1、关闭防火墙-配置免密码登录" tabindex="-1"><a class="header-anchor" href="#_1、关闭防火墙-配置免密码登录" aria-hidden="true">#</a> 1、关闭防火墙，配置免密码登录</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
systemctl stop firewall <span class="token comment">#防止端口不开放，k8s集群无法启动</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、关闭-selinux" tabindex="-1"><a class="header-anchor" href="#_2、关闭-selinux" aria-hidden="true">#</a> 2、关闭 selinux</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>setenforce <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、关闭swap" tabindex="-1"><a class="header-anchor" href="#_3、关闭swap" aria-hidden="true">#</a> 3、关闭swap</h4><p><img src="`+u+`" alt="Alt text"></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>swapoff <span class="token parameter variable">-a</span>  <span class="token comment">#临时关闭</span>
<span class="token function">free</span>        <span class="token comment"># 可以通过这个命令查看swap 是否关闭了</span>
<span class="token function">vim</span> /etc/fstab <span class="token comment"># 永久关闭  注释swap那一行（访问内存分区，k8s无法启动）</span>

<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/.*swap.*/#&amp;/&#39;</span> /etc/fstab

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># systemctl stop firewalld</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># setenforce  0</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># swapoff  -a</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># free </span>
               total        used        <span class="token function">free</span>      shared  buff/cache   available
Mem:         <span class="token number">1806068</span>      <span class="token number">703704</span>      <span class="token number">844676</span>       <span class="token number">11692</span>      <span class="token number">423952</span>     <span class="token number">1102364</span>
Swap:              <span class="token number">0</span>           <span class="token number">0</span>           <span class="token number">0</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、添加主机名与ip对应的关系-免密-这一步可以只在master执行-这一步我为后面传输网络做准备" tabindex="-1"><a class="header-anchor" href="#_4、添加主机名与ip对应的关系-免密-这一步可以只在master执行-这一步我为后面传输网络做准备" aria-hidden="true">#</a> 4、添加主机名与ip对应的关系，免密（这一步可以只在master执行），这一步我为后面传输网络做准备</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>修改主机名称
hostnamectl set-hostname lk64 <span class="token operator">&amp;&amp;</span> <span class="token function">bash</span>

<span class="token function">vim</span> /etc/hosts
<span class="token number">192.168</span>.3.66       lkn01
<span class="token number">192.168</span>.3.64       lkn02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>免密</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen
<span class="token function">cat</span> .ssh/id_rsa.pub <span class="token operator">&gt;&gt;</span> .ssh/authorized_keys
<span class="token function">chmod</span> <span class="token number">600</span> .ssh/authorized_keys

<span class="token comment"># 可以在master生成，然后拷贝到node节点(免密登录，主机之间互相传文件)</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> .ssh root@192.168.44.4:/root

<span class="token comment"># 使用 xhe远程 拷贝密钥</span>
 ssh-copy-id lkn65
<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># ssh-copy-id lkn66</span>
/usr/bin/ssh-copy-id: INFO: Source of key<span class="token punctuation">(</span>s<span class="token punctuation">)</span> to be installed: <span class="token string">&quot;/root/.ssh/id_rsa.pub&quot;</span>
The authenticity of <span class="token function">host</span> <span class="token string">&#39;lkn66 (192.168.3.66)&#39;</span> can<span class="token string">&#39;t be established.
ED25519 key fingerprint is SHA256:1enlDYahcD8aoSNDodKcoL8wxFmYDurvyZny5/kmyC4.
This host key is known by the following other names/addresses:
    ~/.ssh/known_hosts:1: 192.168.3.66
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes   
/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
/usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
root@lkn66&#39;</span>s password: 
Permission denied, please try again.
root@lkn66<span class="token string">&#39;s password: 

Number of key(s) added: 1

Now try logging into the machine, with:   &quot;ssh &#39;</span>lkn66&#39;&quot;


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-将桥接的ipv4流量传递到iptables的链" tabindex="-1"><a class="header-anchor" href="#_5-将桥接的ipv4流量传递到iptables的链" aria-hidden="true">#</a> 5.将桥接的IPV4流量传递到iptables的链</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、先加载模块
modprobe br_netfilter

<span class="token function">vi</span> /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-ip6tables <span class="token operator">=</span> <span class="token number">1</span>
net.bridge.bridge-nf-call-iptables <span class="token operator">=</span> <span class="token number">1</span>
<span class="token assign-left variable">net.ipv4.ip_forward</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token comment"># 重新加载</span>
<span class="token function">sysctl</span> <span class="token parameter variable">--system</span>

<span class="token function">sysctl</span> <span class="token parameter variable">-p</span> /etc/sysctl.d/k8s.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-安装基础软件包" tabindex="-1"><a class="header-anchor" href="#_5-1-安装基础软件包" aria-hidden="true">#</a> 5.1 安装基础软件包</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment">#  yum install -y yum-utils device-mapper-persistent-data lvm2wget net-tools nfs-utils lrzsz gcc gcc-c++ make cmake libxml2-devel openssl-devel curlcurl-devel unzip sudo ntp libaio-devel wget vim ncurses-devel autoconf automake zlibdevel python-devel epel-release openssh-server socat ipvsadm conntrack ntpdate telnete</span>

未找到 lvm2wget curlcurl-devel ntp zlibdevel ntpdate telnete

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-安装docker及同步时间" tabindex="-1"><a class="header-anchor" href="#_6-安装docker及同步时间" aria-hidden="true">#</a> 6.安装Docker及同步时间</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo -O/etc/yum.repos.d/docker-ce.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce-20.10.15 docker-ce-cli-20.10.15 containerd.io
<span class="token comment"># yum -y install docker-ce</span>

<span class="token comment">#设置开机启动</span>

systemctl start <span class="token function">docker</span> <span class="token operator">&amp;&amp;</span> systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment">#配置 docker 驱动</span>
 <span class="token function">tee</span> /etc/docker/daemonjson <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;registry-mirrors&quot;:[&quot;https://vh3bm52y.mirror.aliyuncs.com&quot;,&quot;https://registry.dockercn.com&quot;,&quot;https://docker.mirrors.ustc.edu.cn&quot;,&quot;https://dockerhub.azk8s.cn&quot;,&quot;http://hub.mirror.c.163.com&quot;]
  &quot;exec-opts&quot;:[&quot;native.cgroupdriver=systemd&quot;]
}
EOF</span>

<span class="token comment">#淘汰了 centos 7 同步时间（这一步必须做，否则后面安装flannel可能会有证书错误）</span>
yum <span class="token function">install</span> ntpdate <span class="token parameter variable">-y</span>
ntpdate cn.pool.ntp.org



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启 docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># vim /etc/docker/daemonjson </span>
<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># systemctl daemon-reload </span>
<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># systemctl restart  docker</span>
<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># systemctl  enable  docker</span>
Created symlink /etc/systemd/system/multi-user.target.wants/docker.service → /usr/lib/systemd/system/docker.service.
<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># systemctl  status  docker</span>
● docker.service - Docker Application Container Engine
     Loaded: loaded <span class="token punctuation">(</span>/usr/lib/systemd/system/docker.service<span class="token punctuation">;</span> enabled<span class="token punctuation">;</span> preset: disabled<span class="token punctuation">)</span>
     Active: active <span class="token punctuation">(</span>running<span class="token punctuation">)</span> since Thu <span class="token number">2023</span>-12-07 <span class="token number">19</span>:42:23 CST<span class="token punctuation">;</span> 35s ago

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37),x={href:"https://wiki.crowncloud.net/?How_to_Sync_Time_in_CentOS_Stream_9_using_Chrony",target:"_blank",rel:"noopener noreferrer"},_=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#要安装Chrony，请使用以下命令：</span>
yum <span class="token function">install</span> chrony <span class="token parameter variable">-y</span>
<span class="token comment">#使用以下命令启动chronyd服务并将chronyd设置为在重新引导时自动启动，</span>
systemctl <span class="token builtin class-name">enable</span>  chronyd <span class="token parameter variable">--now</span> <span class="token comment"># 设置chronyd 开机开启并立即启动</span>

<span class="token comment"># 编辑 chronyd 配置文件，使用中国的时间服务器同步时间，速度更快</span>
<span class="token function">vim</span> /etc/chrony.conf

删除:
server <span class="token number">0</span>.centos.pool.ntp.org iburst
server <span class="token number">1</span>.centos.pool.ntp.org iburst
server <span class="token number">2</span>.centos.pool.ntp.org iburst
server <span class="token number">3</span>.centos.pool.ntp.org iburst
在原来的位置，插入国内 NTP 服务器地址
server ntp1.aliyun.com iburst
server ntp2.aliyun.com iburst
server ntp1.tencent.com iburst
server ntp2.tencent.com iburst

<span class="token comment"># 重启</span>
systemctl  restart chronyd
<span class="token comment"># 查看当前时间同步源</span>
chronyc sources

<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># chronyc sources</span>
MS Name/IP address         Stratum Poll Reach LastRx Last sample               
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
^* <span class="token number">120.25</span>.115.20                 <span class="token number">2</span>   <span class="token number">6</span>   <span class="token number">121</span>    <span class="token number">48</span>    +21us<span class="token punctuation">[</span>+1179us<span class="token punctuation">]</span> +/- 3607us
^- <span class="token number">203.107</span>.6.88                  <span class="token number">2</span>   <span class="token number">6</span>    <span class="token number">63</span>    <span class="token number">52</span>  -2342us<span class="token punctuation">[</span>-1184us<span class="token punctuation">]</span> +/-   31ms
^- <span class="token number">106.55</span>.184.199                <span class="token number">2</span>   <span class="token number">6</span>    <span class="token number">17</span>    <span class="token number">57</span>  -1183us<span class="token punctuation">[</span>  -25us<span class="token punctuation">]</span> +/-   17ms
^- <span class="token number">111.230</span>.189.174               <span class="token number">2</span>   <span class="token number">6</span>    <span class="token number">17</span>    <span class="token number">57</span>   +791us<span class="token punctuation">[</span>+1329us<span class="token punctuation">]</span> +/-   36ms
<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># </span>

从上面结果可以看到: 这里总共输出 <span class="token number">8</span> 列信息，分别对应含义如下，重点看: Poll 列M 表示授时时钟源，^表示服务器，<span class="token operator">=</span> 表示二级时钟源，<span class="token comment">#表示本地连接的参考时钟S指示源的状态，*当前同步的源，+表示其他可接受的源，?表示连接丢失的源，x 表示一个认为是falseticker 的时钟(即它的时间与大多数其他来源不一致)，~表示其时间似乎具有太多可变性的来源Name/lPaddress表示源的名称或IP地址e</span>
Stratum表示源的层级，层级1表示本地连接的参考时钟，第2层表示通过第1层级计算机的时钟实现同步，依此类推。“
Poll 表示源轮询的频率，以秒为单位，值是2指数幂，例如值 <span class="token number">6</span>，表示每 <span class="token number">2</span>^6<span class="token operator">=</span><span class="token number">64</span> 秒，进行一次时问同步，chronvd 会很据当时的情况自动改变轮询频Reach 表示源的可达性的锁存值 <span class="token punctuation">(</span>八进制数值<span class="token punctuation">)</span>，该锁存值有 <span class="token number">8</span> 位，并在当接收或丢失一次时进行一




systemctl start chronyd
systemctl <span class="token builtin class-name">enable</span> chronyd
<span class="token comment">#检查你的系统的时间是同步使用chrony现在。</span>
chronyc tracking

<span class="token comment">#列出chronyd使用的时间源。</span>
chronyc sources
<span class="token comment">#列出chronyd使用的每个源的漂移速度和偏移估计</span>
chronyc sourcestats <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-添加阿里云yum软件源" tabindex="-1"><a class="header-anchor" href="#_7-添加阿里云yum软件源" aria-hidden="true">#</a> 7.添加阿里云YUM软件源</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>安装yum 工具
yum <span class="token function">install</span> yum-utils <span class="token parameter variable">-y</span>

 yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repoe



<span class="token function">vim</span> /etc/yum.repos.d/kubernetes.repo

<span class="token punctuation">[</span>kubernetes<span class="token punctuation">]</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span>Kubernetes
<span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64
<span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">repo_gpgcheck</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8、安装-kubeadm-kubelet和kubectl" tabindex="-1"><a class="header-anchor" href="#_8、安装-kubeadm-kubelet和kubectl" aria-hidden="true">#</a> 8、安装 kubeadm,kubelet和kubectl</h4>`,4),w={href:"https://www.cnblogs.com/zengqinglei/p/17131046.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://developer.aliyun.com/article/1071066",target:"_blank",rel:"noopener noreferrer"},S=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#centos7 刷新缓存</span>
yum makecache fast
<span class="token comment">#centos 9 </span>
yum makecache <span class="token parameter variable">--timer</span>

yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubectl-1.20.0 kubeadm-1.20.0 kubelet-1.20.0 <span class="token parameter variable">--nogpgcheck</span>

<span class="token comment"># 版本  </span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> kubelet-1.23.1 kubeadm-1.23.1 kubectl-1.23.1 

<span class="token comment"># 启动kubelet服务</span>
systemctl <span class="token builtin class-name">enable</span> kubelet <span class="token operator">&amp;&amp;</span> systemctl start kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每个软件包的作用</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">kubelet</span> <span class="token punctuation">:</span> 运行在集群所有节点上，用于启动 Pod 和容器等对象的工具
<span class="token key atrule">kubeadm</span> <span class="token punctuation">:</span> 用于初始化集群，启动集群的命令工具
<span class="token key atrule">kubectl</span> <span class="token punctuation">:</span> 用于和集群通信的命令行，通过 kubectl 可以部署和管理应用，查看各种资源，创建、删除和更新各种组件(
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、部署kubernetes-master" tabindex="-1"><a class="header-anchor" href="#_9、部署kubernetes-master" aria-hidden="true">#</a> 9、部署kubernetes Master</h4><p>初始化makecache</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 第一次初始化比较慢，需要拉取镜像</span>
kubeadm init <span class="token punctuation">\\</span>
--apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.3.65 <span class="token punctuation">\\</span>   <span class="token comment"># 换成自己master的IP</span>
--image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
--kubernetes-version v1.20.0 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.1</span>.0.0/16 <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16  <span class="token comment"># 使用flannel网络必须设置成这个cidrKUB</span>

kubeadm init <span class="token punctuation">\\</span>
--apiserver-advertise-address<span class="token operator">=</span><span class="token number">192.168</span>.3.66 <span class="token punctuation">\\</span>
--image-repository registry.aliyuncs.com/google_containers <span class="token punctuation">\\</span>
--kubernetes-version v1.20.0 <span class="token punctuation">\\</span>
--service-cidr<span class="token operator">=</span><span class="token number">10.1</span>.0.0/16 <span class="token punctuation">\\</span>
--pod-network-cidr<span class="token operator">=</span><span class="token number">10.244</span>.0.0/16

接下来，将初始化结果中的命令复制出来执行：
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.3.66:6443 <span class="token parameter variable">--token</span> eml8id.1yoangisuwgtgyoy  --discovery-token-ca-cert-hash sha256:1c408baadb6783d343d5bd480453411d310c007147bdf19e84903692724ca29b 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证状态，发现前两个是<code>pending</code>，<code>get pods</code> 发现是<code>not ready</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl get pods --all-namespaces
NAMESPACE     NAME                             READY   STATUS   RESTARTS   AGE
kube-system   coredns-9d85f5447-fhdmx         <span class="token number">0</span>/1     Pending   <span class="token number">0</span>         100d
kube-system   coredns-9d85f5447-x5wfq         <span class="token number">0</span>/1     Pending   <span class="token number">0</span>         100d
kube-system   etcd-local1                     <span class="token number">1</span>/1     Running   <span class="token number">0</span>         100d
kube-system   kube-apiserver-local1           <span class="token number">1</span>/1     Running   <span class="token number">0</span>         100d
kube-system   kube-controller-manager-local1   <span class="token number">1</span>/1     Running   <span class="token number">0</span>         100d
kube-system   kube-proxy-2trv9                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>         100d
kube-system   kube-scheduler-local1           <span class="token number">1</span>/1     Running   <span class="token number">0</span>         100d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="需要安装flannel" tabindex="-1"><a class="header-anchor" href="#需要安装flannel" aria-hidden="true">#</a> 需要安装<code>flannel</code></h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装flannel（在master执行）/</span>
 // <span class="token number">1</span>、在线安装（一定要在线安装）
 配置： <span class="token function">vi</span> /etc/hosts 
 <span class="token number">199.232</span>.28.133  raw.githubusercontent.com

kubectl apply <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
下载文件在本地安装
kubectl apply <span class="token parameter variable">-f</span> kube-flannel.yml
// <span class="token number">1</span>、离线安装（导致节点之间无法通信）
如果kube-flannel.yml无法下载
手动配置网路地址
<span class="token function">mkdir</span> /run/flannel/
 
<span class="token comment">#  FLANNEL_NETWORK=10.244.0.0/16   需要根据 kubeamd init 的参数据pod-network-cidr=10.244.0.0/16 一样</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /run/flannel/subnet.env
<span class="token assign-left variable">FLANNEL_NETWORK</span><span class="token operator">=</span><span class="token number">10.244</span>.0.0/16 
<span class="token assign-left variable">FLANNEL_SUBNET</span><span class="token operator">=</span><span class="token number">10.244</span>.1.0/24
<span class="token assign-left variable">FLANNEL_MTU</span><span class="token operator">=</span><span class="token number">1450</span>
<span class="token assign-left variable">FLANNEL_IPMASQ</span><span class="token operator">=</span>true
EOF

<span class="token comment"># 安装完flannel，将配置拷到node节点，否则添加节点之后状态不对</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /etc/cni root@192.168.3.65:/etc

<span class="token comment"># 这一步也要拷贝，否则节点看着正常，但是pod由于网络原因无法创建</span>
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /run/flannel/ root@192.168.3.65:/run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="再次初始化" tabindex="-1"><a class="header-anchor" href="#再次初始化" aria-hidden="true">#</a> 再次初始化</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 执行第9步的命令</span>
kubeadm init <span class="token punctuation">..</span>.

参数
--kubernetes-version 指定Kubernetes版本
--apiserver-advertise-address 指定apiserver的监听地址
--pod-network-cidr <span class="token number">10.244</span>.0.0/16 指定使用flanneld网络
--apiserver-bind-port api-server <span class="token number">6443</span>的端口
--ignore-preflight-errors all 跳过之前已安装部分（出问题时，问题解决后加上继续运行）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),R={id:"卸载k8s-参考",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#卸载k8s-参考","aria-hidden":"true"},"#",-1),N={href:"https://www.orchome.com/16614",target:"_blank",rel:"noopener noreferrer"},A=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum remove <span class="token parameter variable">-y</span> kubeadm kubectl kubelet kubernetes-cni kube*   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="查看集群状态-master正常" tabindex="-1"><a class="header-anchor" href="#查看集群状态-master正常" aria-hidden="true">#</a> 查看集群状态，master正常</h5><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get cs</span>
Warning: v1 ComponentStatus is deprecated <span class="token keyword">in</span> v1.19+
NAME                 STATUS      MESSAGE                                                                                       ERROR
scheduler            Unhealthy   Get <span class="token string">&quot;http://127.0.0.1:10251/healthz&quot;</span><span class="token builtin class-name">:</span> dial tcp <span class="token number">127.0</span>.0.1:10251: connect: connection refused   
controller-manager   Unhealthy   Get <span class="token string">&quot;http://127.0.0.1:10252/healthz&quot;</span><span class="token builtin class-name">:</span> dial tcp <span class="token number">127.0</span>.0.1:10252: connect: connection refused   
etcd-0               Healthy     <span class="token punctuation">{</span><span class="token string">&quot;health&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">}</span>   

<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get pods --all-namespaces</span>
NAMESPACE      NAME                            READY   STATUS             RESTARTS   AGE
kube-flannel   kube-flannel-ds-7r99t           <span class="token number">1</span>/1     Running            <span class="token number">0</span>          10h
kube-flannel   kube-flannel-ds-vv9r2           <span class="token number">1</span>/1     Running            <span class="token number">0</span>          11h
kube-system    coredns-7f89b7bc75-dbb9d        <span class="token number">1</span>/1     Running            <span class="token number">0</span>          12h
kube-system    coredns-7f89b7bc75-tzdjq        <span class="token number">1</span>/1     Running            <span class="token number">0</span>          12h
kube-system    etcd-lkn66                      <span class="token number">1</span>/1     Running            <span class="token number">0</span>          12h
kube-system    kube-apiserver-lkn66            <span class="token number">1</span>/1     Running            <span class="token number">0</span>          12h
kube-system    kube-controller-manager-lkn66   <span class="token number">0</span>/1     CrashLoopBackOff   <span class="token number">114</span>        12h
kube-system    kube-proxy-9shnb                <span class="token number">1</span>/1     Running            <span class="token number">0</span>          12h
kube-system    kube-proxy-cq2fx                <span class="token number">1</span>/1     Running            <span class="token number">0</span>          10h
kube-system    kube-scheduler-lkn66            <span class="token number">0</span>/1     CrashLoopBackOff   <span class="token number">111</span>        12h

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10、node工作节点加载" tabindex="-1"><a class="header-anchor" href="#_10、node工作节点加载" aria-hidden="true">#</a> 10、node工作节点加载</h4><p>node节点执行1-8，如果第五步不执行，会添加失败</p><p>在node节点执行上面初始化时生成的join命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.3.66:6443 <span class="token parameter variable">--token</span> 3d33ro.m3jy3f3yq1o05q0y  --discovery-token-ca-cert-hash sha256:7288dab1719003c8be4dbfd2f916e7bc6e1703e7ac650701683a71535a7eb43c 

<span class="token comment"># 输出</span>
This <span class="token function">node</span> has joined the cluster:
* Certificate signing request was sent to apiserver and a response was received.
* The Kubelet was informed of the new secure connection details.

Run <span class="token string">&#39;kubectl get nodes&#39;</span> on the control-plane to see this <span class="token function">node</span> <span class="token function">join</span> the cluster.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在master查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@local1 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>
NAME     STATUS     ROLES    AGE     VERSION
local1   Ready      master   4m58s   v1.18.3
local2   Ready      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   3m36s   v1.18.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在node节点查看</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@local3 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>
Unable to connect to the server: x509: certificate signed by unknown authority <span class="token punctuation">(</span>possibly because of <span class="token string">&quot;crypto/rsa: verification error&quot;</span> <span class="token keyword">while</span> trying to verify candidate authority certificate <span class="token string">&quot;kubernetes&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># 如果报错，需要将master的admin.conf拷贝过来</span>
<span class="token comment"># master执行</span>
<span class="token function">scp</span> /etc/kubernetes/admin.conf root@local3:/etc/kubernetes/

<span class="token comment"># 然后在node执行下面三步</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token environment constant">$HOME</span>/.kube
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-i</span> /etc/kubernetes/admin.conf <span class="token environment constant">$HOME</span>/.kube/config
<span class="token function">sudo</span> <span class="token function">chown</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-u</span><span class="token variable">)</span></span><span class="token builtin class-name">:</span><span class="token variable"><span class="token variable">$(</span><span class="token function">id</span> <span class="token parameter variable">-g</span><span class="token variable">)</span></span> <span class="token environment constant">$HOME</span>/.kube/config

再次在node查看
<span class="token punctuation">[</span>root@local3 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>
NAME     STATUS   ROLES    AGE     VERSION
local1   Ready    master   6m36s   v1.18.0
local2   Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   31s     v1.18.0
local3   Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>   5m43s   v1.18.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11、如果节点出错-可以移除节点" tabindex="-1"><a class="header-anchor" href="#_11、如果节点出错-可以移除节点" aria-hidden="true">#</a> 11、如果节点出错，可以移除节点</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#重置节点</span>
kubeadm reset

<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># kubectl get nodes</span>
NAME    STATUS   ROLES                  AGE   VERSION
lkn65   Ready    <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>                 11h   v1.20.0
lkn66   Ready    control-plane,master   12h   v1.20.0

<span class="token comment">#删除节点，删除后 数据就从etcd中清除了(可运行kubectl的任一节点中执行)</span>
kubectl delete <span class="token function">node</span> lkn65
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12、如果加入节点时-token过期-可以重新生成" tabindex="-1"><a class="header-anchor" href="#_12、如果加入节点时-token过期-可以重新生成" aria-hidden="true">#</a> 12、如果加入节点时，token过期，可以重新生成</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>、查看token
<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># kubeadm token list</span>
TOKEN                     TTL         EXPIRES                     USAGES                   DESCRIPTION                                                EXTRA <span class="token environment constant">GROUPS</span>
3d33ro.m3jy3f3yq1o05q0y   11h         <span class="token number">2023</span>-11-25T01:26:15+08:00   authentication,signing   The default bootstrap token generated by <span class="token string">&#39;kubeadm init&#39;</span><span class="token builtin class-name">.</span>   system:bootstrappers:kubeadm:default-node-token

<span class="token number">2</span>、默认生成的token有效期是一天，生成永不过期的token
<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># kubeadm token create --ttl 0</span>
05402u.jb7a47xpzewhcrrt

<span class="token number">3</span>、创建token
<span class="token punctuation">[</span>root@lkn66 ~<span class="token punctuation">]</span><span class="token comment"># openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2&gt;/dev/null | openssl dgst -sha256 -hex | sed &#39;s/^.* //&#39;</span>
<span class="token comment">#token</span>
7288dab1719003c8be4dbfd2f916e7bc6e1703e7ac650701683a71535a7eb43c
 
<span class="token number">4</span>、在worker节点执行join

kubeadm <span class="token function">join</span> <span class="token number">192.168</span>.3.66:6443 <span class="token parameter variable">--token</span> 05402u.jb7a47xpzewhcrrt --discovery-token-ca-cert-hash sha256:7288dab1719003c8be4dbfd2f916e7bc6e1703e7ac650701683a71535a7eb43c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-查看-安装状态" tabindex="-1"><a class="header-anchor" href="#_13-查看-安装状态" aria-hidden="true">#</a> 13 查看 安装状态</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl get pods --all-namespaces
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_14-卸载flannel网络步骤" tabindex="-1"><a class="header-anchor" href="#_14-卸载flannel网络步骤" aria-hidden="true">#</a> 14 卸载flannel网络步骤：</h4>`,18),T={href:"https://dandelioncloud.cn/article/details/1576406630231404545",target:"_blank",rel:"noopener noreferrer"},O=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#第一步，在master节点删除flannel</span>
kubectl delete <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
<span class="token comment">#第二步，在node节点清理flannel网络留下的文件</span>
<span class="token function">ifconfig</span> cni0 down
<span class="token function">ip</span> <span class="token function">link</span> delete cni0
<span class="token function">ifconfig</span> flannel.1 down
<span class="token function">ip</span> <span class="token function">link</span> delete flannel.1
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/cni/
<span class="token function">rm</span> <span class="token parameter variable">-f</span> /etc/cni/net.d/*
注：执行完上面的操作，重启kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_15-卸载-k8s" tabindex="-1"><a class="header-anchor" href="#_15-卸载-k8s" aria-hidden="true">#</a> 15 卸载 k8s</h4>`,2),P={href:"https://blog.csdn.net/qq_14910065/article/details/133824738",target:"_blank",rel:"noopener noreferrer"},M=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl delete <span class="token function">node</span> <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、使用脚本停止所有k8s服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">service</span> <span class="token keyword">in</span> kube-apiserver kube-controller-manager kubectl kubelet etcd kube-proxy kube-scheduler<span class="token punctuation">;</span> 
<span class="token keyword">do</span>
    systemctl stop <span class="token variable">$service</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、使用命令卸载k8s</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubeadm reset <span class="token parameter variable">-f</span>  <span class="token comment">#卸载所有节点的K8S</span>


<span class="token comment">#谨慎操作</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span>    <span class="token comment">#docker中 删除所有的容器命令</span>
<span class="token function">docker</span> rmi <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span> <span class="token operator">|</span><span class="token function">tail</span> <span class="token parameter variable">-n</span> +2<span class="token variable">)</span></span> <span class="token comment"># docker中 删除所有的镜像</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、卸载k8s相关程序</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> remove kube*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5、删除相关的配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>modprobe <span class="token parameter variable">-r</span> ipip
lsmod

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、然后手动删除配置文件和flannel网络配置和flannel网口：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/cni
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /root/.kube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>7.删除cni网络</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span> cni0 down
<span class="token function">ip</span> <span class="token function">link</span> delete cni0
<span class="token function">ifconfig</span> flannel.1 down
<span class="token function">ip</span> <span class="token function">link</span> delete flannel.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>8、删除残留的配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> ~/.kube/
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/kubernetes/
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/systemd/system/kubelet.service.d
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/systemd/system/kubelet.service
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/systemd/system/multi-user.target.wants/kubelet.service
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/kubelet
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/libexec/kubernetes/kubelet-plugins
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /usr/bin/kube*
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /opt/cni
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/etcd
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/etcd

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>9、 更新镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum clean all
yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s-运行" tabindex="-1"><a class="header-anchor" href="#k8s-运行" aria-hidden="true">#</a> k8s 运行</h2><h2 id="基础命令" tabindex="-1"><a class="header-anchor" href="#基础命令" aria-hidden="true">#</a> 基础命令</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>获取节点

kubectl get node

获取相信节点

kubectl get node <span class="token punctuation">-</span>o wide

运行nginx pod(这个时候只是容器在pod内部使用，还不能给外界进行访问)

kubectl run nginx <span class="token punctuation">-</span><span class="token punctuation">-</span>image=nginx <span class="token punctuation">-</span><span class="token punctuation">-</span>port=80

查看nginx pod信息(显示demo是否成功或者失败信息)

kubectl describe pod nginx<span class="token punctuation">-</span>pod

暴露nginx pod(暴露给外界进行访问)

kubectl expose pod nginx<span class="token punctuation">-</span>pod <span class="token punctuation">-</span><span class="token punctuation">-</span>port=80 <span class="token punctuation">-</span><span class="token punctuation">-</span>target<span class="token punctuation">-</span>port=80 <span class="token punctuation">-</span><span class="token punctuation">-</span>type=NodePort

查看暴露nginx副本deployment service

 kubectl get service <span class="token punctuation">-</span>o wide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="副本命令-伸缩命令" tabindex="-1"><a class="header-anchor" href="#副本命令-伸缩命令" aria-hidden="true">#</a> 副本命令(伸缩命令)</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>创建副本集deployment

kubectl create 命令

创建nginx副本deployment

kubectl create deployment nginx<span class="token punctuation">-</span>deployment <span class="token punctuation">-</span><span class="token punctuation">-</span>image=nginx

查看nginx副本deployment

kubectl create deployment <span class="token punctuation">-</span>o wide

暴露nginx副本deployment

kubectl expose deployment nginx<span class="token punctuation">-</span>deployment <span class="token punctuation">-</span><span class="token punctuation">-</span>port=80 <span class="token punctuation">-</span><span class="token punctuation">-</span>target<span class="token punctuation">-</span>port=8000 <span class="token punctuation">-</span><span class="token punctuation">-</span>type=NodePort

查看暴露nginx副本deployment service

 kubectl get service <span class="token punctuation">-</span>o wide

动态扩容nginx副本deployment



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="yaml文件命令" tabindex="-1"><a class="header-anchor" href="#yaml文件命令" aria-hidden="true">#</a> yaml文件命令</h3><h4 id="nginx副本集部署-deployment" tabindex="-1"><a class="header-anchor" href="#nginx副本集部署-deployment" aria-hidden="true">#</a> nginx副本集部署 deployment</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1 <span class="token comment">#k8s版本号</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment <span class="token comment">#部署类型（资源类型）</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment">#元数据(用于定义资源信息)</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deployment<span class="token punctuation">-</span>tony5 <span class="token comment">#资源名称</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment">#资源标签(版本号)</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx 
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment">#资源相关信息规范</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment">#副本数</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment">#选择哪一个版本</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
  <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token comment">#模板</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment">#资源的元数据/属性</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment">#设置资源的标签</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment">#资源规范字段(规范容器配置)</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span> <span class="token comment">#指定容器</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx <span class="token comment">#容器名称</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx <span class="token comment">#容器使用的镜像</span>
        <span class="token key atrule">ports</span><span class="token punctuation">:</span> <span class="token comment">#端口号</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment">#容器对应的端口号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx暴露-service" tabindex="-1"><a class="header-anchor" href="#nginx暴露-service" aria-hidden="true">#</a> nginx暴露 service</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1 <span class="token comment"># 指定api版本，此值必须在kubectl api-versions中</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service <span class="token comment"># 指定创建资源的角色/类型</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span> <span class="token comment"># 资源的元数据/属性</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> service<span class="token punctuation">-</span>tony <span class="token comment"># 资源的名字，在同一个namespace中必须唯一</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default <span class="token comment"># 部署在哪个namespace中</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># 设定资源的标签</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> demo
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 资源规范字段</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort <span class="token comment"># ClusterIP 类型</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token comment"># service 端口</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># 容器暴露的端口</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP <span class="token comment"># 协议</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> http <span class="token comment"># 端口名称</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 选择器(选择什么资源进行发布给外界进行访问：pod deployment 等等资源)</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nginx运行service-configmap" tabindex="-1"><a class="header-anchor" href="#nginx运行service-configmap" aria-hidden="true">#</a> nginx运行Service configmap</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>configmap
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>configmap
    <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span>volume4
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> <span class="token string">&quot;/tmp/config4&quot;</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> config<span class="token punctuation">-</span>volume4
    <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-删除" tabindex="-1"><a class="header-anchor" href="#docker-删除" aria-hidden="true">#</a> docker 删除</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
                    docker-client <span class="token punctuation">\\</span>
                    docker-client-latest <span class="token punctuation">\\</span>
                    docker-common <span class="token punctuation">\\</span>
                    docker-latest <span class="token punctuation">\\</span>
                    docker-latest-logrotate <span class="token punctuation">\\</span>
                    docker-logrotate <span class="token punctuation">\\</span>
                    docker-selinux <span class="token punctuation">\\</span>
                    docker-engine-selinux <span class="token punctuation">\\</span>
                   docker-engine
                   
 <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /etc/systemd/system/docker.service.d 
 <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
 
 <span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/run/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kubernetes-报scheduler-unhealthy的错误解决" tabindex="-1"><a class="header-anchor" href="#kubernetes-报scheduler-unhealthy的错误解决" aria-hidden="true">#</a> kubernetes 报scheduler Unhealthy的错误解决</h2>`,32),L={href:"https://blog.csdn.net/xgysimida/article/details/122129087",target:"_blank",rel:"noopener noreferrer"},C=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl  get cs

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
yum <span class="token function">install</span> epel-release <span class="token parameter variable">-y</span>

yum <span class="token function">install</span> nginx <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function I(U,z){const e=c("router-link"),l=c("ExternalLinkIcon");return o(),p("div",null,[v,n("nav",k,[n("ul",null,[n("li",null,[a(e,{to:"#目录"},{default:i(()=>[s("目录")]),_:1})]),n("li",null,[a(e,{to:"#微服务部署-k8s"},{default:i(()=>[s("微服务部署-k8s")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#k8s介绍"},{default:i(()=>[s("k8s介绍")]),_:1})]),n("li",null,[a(e,{to:"#什么是docker"},{default:i(()=>[s("什么是docker")]),_:1})]),n("li",null,[a(e,{to:"#什么是docker内部概念"},{default:i(()=>[s("什么是docker内部概念")]),_:1})]),n("li",null,[a(e,{to:"#三个问题"},{default:i(()=>[s("三个问题？")]),_:1})]),n("li",null,[a(e,{to:"#什么是k8s"},{default:i(()=>[s("什么是k8s")]),_:1})]),n("li",null,[a(e,{to:"#为什么要使用k8s"},{default:i(()=>[s("为什么要使用k8s")]),_:1})])])]),n("li",null,[a(e,{to:"#官网地址"},{default:i(()=>[s("官网地址")]),_:1})]),n("li",null,[a(e,{to:"#k8s集群概念"},{default:i(()=>[s("k8s集群概念")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#什么是集群"},{default:i(()=>[s("什么是集群")]),_:1})])])]),n("li",null,[a(e,{to:"#k8s集群角色"},{default:i(()=>[s("k8s集群角色")]),_:1})]),n("li",null,[a(e,{to:"#k8s集群内部概念"},{default:i(()=>[s("k8s集群内部概念")]),_:1})]),n("li",null,[a(e,{to:"#k8s-集群操作概念"},{default:i(()=>[s("k8s 集群操作概念")]),_:1})]),n("li",null,[a(e,{to:"#k8s-集群搭建"},{default:i(()=>[s("k8s 集群搭建")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#注意"},{default:i(()=>[s("注意：")]),_:1})]),n("li",null,[a(e,{to:"#前提条件"},{default:i(()=>[s("前提条件：")]),_:1})]),n("li",null,[a(e,{to:"#步骤"},{default:i(()=>[s("步骤")]),_:1})])])]),n("li",null,[a(e,{to:"#k8s-运行"},{default:i(()=>[s("k8s 运行")]),_:1})]),n("li",null,[a(e,{to:"#基础命令"},{default:i(()=>[s("基础命令")]),_:1})]),n("li",null,[a(e,{to:"#副本命令-伸缩命令"},{default:i(()=>[s("副本命令(伸缩命令)")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#yaml文件命令"},{default:i(()=>[s("yaml文件命令")]),_:1})])])]),n("li",null,[a(e,{to:"#docker-删除"},{default:i(()=>[s("docker 删除")]),_:1})]),n("li",null,[a(e,{to:"#kubernetes-报scheduler-unhealthy的错误解决"},{default:i(()=>[s("kubernetes 报scheduler Unhealthy的错误解决")]),_:1})]),n("li",null,[a(e,{to:"#安装-nginx"},{default:i(()=>[s("安装 nginx")]),_:1})])])]),b,n("h2",h,[g,s(),n("a",f,[s("官网地址"),a(l)])]),y,n("p",null,[s("6.1 centos9 同步时间工具安装"),n("a",x,[s("参考文档"),a(l)])]),_,n("p",null,[n("a",w,[s("在centos stream 9上搭建k8s最新版本"),a(l)]),n("a",E,[s("【云原生-K8s】kubeadm搭建k8s集群1.25版本完整教程【docker、网络插件calico、中间层cri-docker】"),a(l)])]),S,n("h5",R,[q,s(" 卸载k8s "),n("a",N,[s("参考"),a(l)])]),A,n("p",null,[n("a",T,[s("参考"),a(l)])]),O,n("p",null,[n("a",P,[s("参考"),a(l)]),s(" 1、首先清理运行到k8s群集中的pod，使用")]),M,n("p",null,[n("a",L,[s("参考解决"),a(l)])]),C])}const $=r(m,[["render",I],["__file","docker03.html.vue"]]);export{$ as default};
