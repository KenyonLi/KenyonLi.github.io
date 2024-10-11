import{_ as i,r as l,o,c as u,a as n,b as a,w as t,d as s,e as c}from"./app-c1c3c937.js";const r={},k=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),d={class:"table-of-contents"},m=c(`<h2 id="微服务部署-k8s-二-应用" tabindex="-1"><a class="header-anchor" href="#微服务部署-k8s-二-应用" aria-hidden="true">#</a> 微服务部署-k8s(二)-应用</h2><h2 id="k8s运行nginx镜像" tabindex="-1"><a class="header-anchor" href="#k8s运行nginx镜像" aria-hidden="true">#</a> k8s运行Nginx镜像</h2><p>条件<br> 1、nginx.yml 步骤<br> 1、先创建nginx.yml文件<br> 2、然后在nginx.yml文件中添加内容。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1  <span class="token comment">## 版本，能够有多少关键字，有多少参数</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod  <span class="token comment"># 资源类型。 Pod Service deployment  </span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>  <span class="token comment"># 元数据 当前资源基本信息</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pd <span class="token comment"># 名称：表示唯一 </span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span> <span class="token comment"># 标签 版本 </span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 特殊 k8s 具体要操作什么  </span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>  <span class="token comment">#</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> lknnginx  <span class="token comment">#具体镜像</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>container <span class="token comment"># 容器名称  </span>
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent <span class="token comment"># 先走本地，然后远程拉取镜像</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment">#端口号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后运行nginx.yml 3.1、输入命令：kubectl apply -f nginx.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lkn66 pod<span class="token punctuation">]</span><span class="token comment"># kubectl  create -f nginx.yml </span>
pod/nginx-pd created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.2、输入命令：kubectl get pod</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lkn66 pod<span class="token punctuation">]</span><span class="token comment"># kubectl  get pod</span>
NAME       READY   STATUS             RESTARTS   AGE
nginx-pd   <span class="token number">0</span>/1     ImagePullBackOff   <span class="token number">0</span>          92s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s暴露-nginx-pod" tabindex="-1"><a class="header-anchor" href="#k8s暴露-nginx-pod" aria-hidden="true">#</a> k8s暴露 Nginx Pod</h2><p>条件<br> 1、service.yml<br> 步骤<br> 1、先创建nginx.yml文件 2、然后在nginx.yml文件中添加内容<br> 如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> ngnix<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 选择器，选择什么pod去运行  </span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx   
 <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># service 端口号</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span> <span class="token comment"># 容器端口号</span>
 <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort  <span class="token comment"># 暴露给外网访问</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后运行nginx.yml<br> 3.1 输入命令：kubectl apply -f nginx.yml</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lkn66 service<span class="token punctuation">]</span><span class="token comment"># kubectl  create -f nginx.yml </span>
Error from server <span class="token punctuation">(</span>AlreadyExists<span class="token punctuation">)</span>: error when creating <span class="token string">&quot;nginx.yml&quot;</span><span class="token builtin class-name">:</span> services <span class="token string">&quot;ngnix-service&quot;</span> already exists
<span class="token punctuation">[</span>root@lkn66 service<span class="token punctuation">]</span><span class="token comment"># kubectl  get servic</span>
error: the server doesn&#39;t have a resource <span class="token builtin class-name">type</span> <span class="token string">&quot;servic&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.2 输入命令： kubectl get service</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lkn66 service<span class="token punctuation">]</span><span class="token comment"># kubectl  get service</span>
NAME            TYPE        CLUSTER-IP    EXTERNAL-IP   PORT<span class="token punctuation">(</span>S<span class="token punctuation">)</span>        AGE
kubernetes      ClusterIP   <span class="token number">10.1</span>.0.1      <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">443</span>/TCP        11d
ngnix-service   NodePort    <span class="token number">10.1</span>.19.175   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>        <span class="token number">80</span>:31572/TCP   53m
<span class="token comment"># 删除 </span>
kubectl delete <span class="token function">service</span> ngnix-service 
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s运行商品微服务镜像" tabindex="-1"><a class="header-anchor" href="#k8s运行商品微服务镜像" aria-hidden="true">#</a> k8s运行商品微服务镜像</h2><p>条件</p><p>1、productservice.yml</p><p>步骤</p><p>1、先创建productservice.yml文件<br> 2、然后在productservice.yml文件中添加内容，如下所示</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> productservice<span class="token punctuation">-</span>pd
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> productservice
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> ydtproductservice
    <span class="token key atrule">name</span><span class="token punctuation">:</span> productservice<span class="token punctuation">-</span>container
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s暴露productservice-pod" tabindex="-1"><a class="header-anchor" href="#k8s暴露productservice-pod" aria-hidden="true">#</a> k8s暴露productservice Pod</h2><p>条件</p><p>1、productservice.yml</p><p>步骤</p><p>1、先创建productservice.yml文件</p><p>2、然后在productservice.yml文件中添加内容，</p><p>如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> productservice<span class="token punctuation">-</span>service
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token key atrule">selector</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span> productservice
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 10.1.9.87
 <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">30009</span>
 <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后运行nginx.yml</p><p>​ 1、输入命令：kubectl create -f productservice.yml</p><p>​\`\`\` bash [root@lkn66 service]# vim productservice.yml [root@lkn66 service]# kubectl create -f productservice.yml service/productservice-service created</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>

2、输入命令：kubectl get service
\`\`\`bash
[root@lkn66 service]# kubectl  get service
NAME                     TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE
kubernetes               ClusterIP   10.1.0.1       &lt;none&gt;        443/TCP        11d
ngnix-service            NodePort    10.1.160.251   &lt;none&gt;        80:30009/TCP   18m
productservice-service   NodePort    10.1.183.40    &lt;none&gt;        80:30731/TCP   13s
[root@lkn66 service]# 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="k8s运行nginx-镜像复制集" tabindex="-1"><a class="header-anchor" href="#k8s运行nginx-镜像复制集" aria-hidden="true">#</a> k8s运行Nginx 镜像复制集</h2><p>条件</p><p>1、nginx.yml</p><p>步骤</p><p>1、先创建nginx.yml文件</p><p>2、然后在nginx.yml文件中添加内容 如下所示</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
 <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>yml
 <span class="token key atrule">template</span><span class="token punctuation">:</span>
  <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
   <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>yml
  <span class="token key atrule">spec</span><span class="token punctuation">:</span>
   <span class="token key atrule">containers</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx
      <span class="token key atrule">image</span><span class="token punctuation">:</span> nginx
      <span class="token key atrule">ports</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后运行nginx.yml 3.1 输入命令： kubectl apply -f nginx.yml 3.2 输入命令： kubectl get deployment</p><h2 id="k8s暴露-nginx-deployment" tabindex="-1"><a class="header-anchor" href="#k8s暴露-nginx-deployment" aria-hidden="true">#</a> k8s暴露 Nginx deployment</h2><p>条件<br> 1、service.yml<br> 步骤<br> 1、先创建nginx.yml文件<br> 2、然后在nginx.yml文件中添加内容，如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>service
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> 10.1.47.97
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP
      <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">31323</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> tcp
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后运行nginx.yml 3.1 输入命令：kubectl apply -f nginx.yml<br> 3.2 输入命令： kubectl get service</p><h2 id="k8s运行商品微服务镜像-1" tabindex="-1"><a class="header-anchor" href="#k8s运行商品微服务镜像-1" aria-hidden="true">#</a> k8s运行商品微服务镜像</h2><p>条件</p><p>1、productservice.yml</p><p>步骤</p><p>1、先创建productservice.yml文件</p><p>2、然后在productservice.yml文件中添加内容，</p><p>如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> productservice<span class="token punctuation">-</span>pd
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> productservice
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> lknproductservice
    <span class="token key atrule">name</span><span class="token punctuation">:</span> productservice<span class="token punctuation">-</span>container
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
     <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后运行productservice.yml 3.1 输入命令：kubectl create -f productservice.yml<br> 3.2 输入命令： kubectl get service</p><h2 id="商品微服务-deployment-配置" tabindex="-1"><a class="header-anchor" href="#商品微服务-deployment-配置" aria-hidden="true">#</a> 商品微服务 Deployment 配置</h2><p>条件</p><p>1、productservice.yml</p><p>步骤</p><p>1、先创建productservice.yml文件</p><p>2、然后在productservice.yml文件中添加内容，</p><p>如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment 
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> productservice
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default  
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment"># 代表运行多少pod </span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token comment"># 选择器，pod和容器通信</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> productservice
  <span class="token key atrule">template</span><span class="token punctuation">:</span> <span class="token comment"># 模板，运行什么镜像，就是什么模板</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span> 
     <span class="token key atrule">labels</span><span class="token punctuation">:</span>
       <span class="token key atrule">app</span><span class="token punctuation">:</span> productservice <span class="token comment"># 代表pod版本</span>
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>  <span class="token comment"># 代表运行啥镜像</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> lknproductservice
         <span class="token key atrule">name</span><span class="token punctuation">:</span> productservice<span class="token punctuation">-</span>container
         <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
         <span class="token key atrule">ports</span><span class="token punctuation">:</span>
          <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后运行productservice.yml 3.1 输入命令：kubectl create -f productservice.yml 3.2 输入命令： kubectl get deployment</p><h3 id="手动-动态-scale-实际动态伸缩" tabindex="-1"><a class="header-anchor" href="#手动-动态-scale-实际动态伸缩" aria-hidden="true">#</a> 手动 动态 scale 实际动态伸缩</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>kubectl scale <span class="token punctuation">-</span><span class="token punctuation">-</span>replicas=2 <span class="token punctuation">-</span>f productservice.yml 

kubectl  get deployment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手动方式： 1、无法确定资源是否利用完美。 2、资源利用过度，出现性能瓶颈</p><p>度的范围之内。最好的方式，自动根据资源情况，进行调度。<br> 20G,100个<br> 10G，50个<br> 10核 1000个容器<br> 4核 50个容器</p><h3 id="autoscale-自动动态伸缩" tabindex="-1"><a class="header-anchor" href="#autoscale-自动动态伸缩" aria-hidden="true">#</a> autoscale 自动动态伸缩</h3><p>方案<br> 1、实例范围方案</p><p>商品微服务，最小多个个：2 最大多少个：10 1、根据什么，cpu自动策略80%<br> 并发量大小。会反应到cpu使用率<br> 并发量小，会反应到cpu使用率<br> cpu 是谁的？<br> 1、pod,独立的cpu资源消耗。80%<br> 就会启动实例，最大启动10个<br> 如果pod,cpu 使用率资源减低<br> 最小可以缩小为2个</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lkn66 deployment<span class="token punctuation">]</span><span class="token comment"># kubectl  autoscale -f productservice.yml  --min=2 --max=10</span>
horizontalpodautoscaler.autoscaling/productservice autoscaled

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="商品微服务、nginx之间通信" tabindex="-1"><a class="header-anchor" href="#商品微服务、nginx之间通信" aria-hidden="true">#</a> 商品微服务、Nginx之间通信</h2><p>条件 1、数据挂载 2、命令空间 Nginx Pod挂载nginx.conf<br> 条件<br> 1、nginx.conf 2、nginx.yml 步骤<br> 1、先创建nginx.conf<br> 2、然后在nginx.conf添加内容<br> 如下所示：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#user  nobody;</span>
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
   listen       80;
   server_name  localhost;

   <span class="token comment">#charset koi8-r;</span>

   <span class="token comment">#access_log  logs/host.access.log  main;</span>

   location / <span class="token punctuation">{</span>
       proxy_pass  http<span class="token punctuation">:</span>//productservice<span class="token punctuation">:</span>80;
   <span class="token punctuation">}</span>

   <span class="token comment">#error_page  404              /404.html;</span>

   <span class="token comment"># redirect server error pages to the static page /50x.html</span>
   <span class="token comment">#</span>
   error_page   500 502 503 504  /50x.html;
   location = /50x.html <span class="token punctuation">{</span>
       root   html;
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、然后修改nginx.yml文件<br> 内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>pd
 <span class="token key atrule">labels</span><span class="token punctuation">:</span>
   <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
 <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token key atrule">containers</span><span class="token punctuation">:</span>
 <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> ydtnginx
   <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>container
   <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent
   <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
   <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/nginx/conf/
      <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>conf
 <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>conf
    <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> nginxfig
      <span class="token key atrule">items</span><span class="token punctuation">:</span>
       <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> nginxconfig
         <span class="token key atrule">path</span><span class="token punctuation">:</span> config/nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解析：</p><p>关于type的值的一点说明： DirectoryOrCreate 目录存在就使用，不存在就先创建后使用 Directory 目录必须存在 FileOrCreate 文件存在就使用，不存在就先创建后使用 File 文件必须存在 Socket unix套接字必须存在 CharDevice 字符设备必须存在 BlockDevice 块设备必须存在</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 注意，该配置 node 上必须有这个文件，主节创建才会成功</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> nginx<span class="token punctuation">-</span>conf
<span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
<span class="token key atrule">path</span><span class="token punctuation">:</span> /root/k8s/config/nginx.conf
<span class="token key atrule">type</span><span class="token punctuation">:</span> File
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、然后运行nginx.yml</p><p>​ 1、输入命令：kubectl apply -f nginx.yml</p><p>2、输入命令：kubectl get pod</p><h3 id="修改service-nginx-yml文件" tabindex="-1"><a class="header-anchor" href="#修改service-nginx-yml文件" aria-hidden="true">#</a> 修改service nginx.yml文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> ngnix<span class="token punctuation">-</span>service
 <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token key atrule">selector</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span> nginx
 <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
 <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改service-productservice-yml文件" tabindex="-1"><a class="header-anchor" href="#修改service-productservice-yml文件" aria-hidden="true">#</a> 修改service productservice.yml文件</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
 <span class="token key atrule">name</span><span class="token punctuation">:</span> productservice<span class="token punctuation">-</span>service
 <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
 <span class="token key atrule">selector</span><span class="token punctuation">:</span>
  <span class="token key atrule">app</span><span class="token punctuation">:</span> productservice
 <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">80</span>
 <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="附件" tabindex="-1"><a class="header-anchor" href="#附件" aria-hidden="true">#</a> 附件</h2><h3 id="pod所有配置" tabindex="-1"><a class="header-anchor" href="#pod所有配置" aria-hidden="true">#</a> pod所有配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># yaml格式的pod定义文件完整内容：</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1       <span class="token comment">#必选，版本号，例如v1</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod       <span class="token comment">#必选，Pod</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>       <span class="token comment">#必选，元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> string       <span class="token comment">#必选，Pod名称</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> string    <span class="token comment">#必选，Pod所属的命名空间</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>      <span class="token comment">#自定义标签</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string     <span class="token comment">#自定义标签名字</span>
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>       <span class="token comment">#自定义注释列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
<span class="token key atrule">spec</span><span class="token punctuation">:</span>         <span class="token comment">#必选，Pod中容器的详细定义</span>
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>      <span class="token comment">#必选，Pod中容器列表</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string     <span class="token comment">#必选，容器名称</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> string    <span class="token comment">#必选，容器的镜像名称</span>
    <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Always <span class="token punctuation">|</span> Never <span class="token punctuation">|</span> IfNotPresent<span class="token punctuation">]</span> <span class="token comment">#获取镜像的策略 Alawys表示下载镜像 IfnotPresent表示优先使用本地镜像，否则下载镜像，Nerver表示使用本地镜像</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>    <span class="token comment">#容器的启动命令列表，如不指定，使用打包时使用的启动命令</span>
    <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>     <span class="token comment">#容器的启动命令参数列表</span>
    <span class="token key atrule">workingDir</span><span class="token punctuation">:</span> string     <span class="token comment">#容器的工作目录</span>
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>    <span class="token comment">#挂载到容器内部的存储卷配置</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string     <span class="token comment">#引用pod定义的共享存储卷的名称，需用volumes[]部分定义的的卷名</span>
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> string    <span class="token comment">#存储卷在容器内mount的绝对路径，应少于512字符</span>
      <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> boolean    <span class="token comment">#是否为只读模式</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>       <span class="token comment">#需要暴露的端口库号列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string     <span class="token comment">#端口号名称</span>
      <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> int   <span class="token comment">#容器需要监听的端口号</span>
      <span class="token key atrule">hostPort</span><span class="token punctuation">:</span> int    <span class="token comment">#容器所在主机需要监听的端口号，默认与Container相同</span>
      <span class="token key atrule">protocol</span><span class="token punctuation">:</span> string     <span class="token comment">#端口协议，支持TCP和UDP，默认TCP</span>
    <span class="token key atrule">env</span><span class="token punctuation">:</span>       <span class="token comment">#容器运行前需设置的环境变量列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string     <span class="token comment">#环境变量名称</span>
      <span class="token key atrule">value</span><span class="token punctuation">:</span> string    <span class="token comment">#环境变量的值</span>
    <span class="token key atrule">resources</span><span class="token punctuation">:</span>       <span class="token comment">#资源限制和请求的设置</span>
      <span class="token key atrule">limits</span><span class="token punctuation">:</span>      <span class="token comment">#资源限制的设置</span>
        <span class="token key atrule">cpu</span><span class="token punctuation">:</span> string    <span class="token comment">#Cpu的限制，单位为core数，将用于docker run --cpu-shares参数</span>
        <span class="token key atrule">memory</span><span class="token punctuation">:</span> string     <span class="token comment">#内存限制，单位可以为Mib/Gib，将用于docker run --memory参数</span>
      <span class="token key atrule">requests</span><span class="token punctuation">:</span>      <span class="token comment">#资源请求的设置</span>
        <span class="token key atrule">cpu</span><span class="token punctuation">:</span> string    <span class="token comment">#Cpu请求，容器启动的初始可用数量</span>
        <span class="token key atrule">memory</span><span class="token punctuation">:</span> string     <span class="token comment">#内存清楚，容器启动的初始可用数量</span>
    <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>     <span class="token comment">#对Pod内个容器健康检查的设置，当探测无响应几次后将自动重启该容器，检查方法有exec、httpGet和tcpSocket，对一个容器只需设置其中一种方法即可</span>
      <span class="token key atrule">exec</span><span class="token punctuation">:</span>      <span class="token comment">#对Pod容器内检查方式设置为exec方式</span>
        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">]</span>  <span class="token comment">#exec方式需要制定的命令或脚本</span>
      <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>       <span class="token comment">#对Pod内个容器健康检查方法设置为HttpGet，需要制定Path、port</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> string
        <span class="token key atrule">port</span><span class="token punctuation">:</span> number
        <span class="token key atrule">host</span><span class="token punctuation">:</span> string
        <span class="token key atrule">scheme</span><span class="token punctuation">:</span> string
        <span class="token key atrule">HttpHeaders</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
          <span class="token key atrule">value</span><span class="token punctuation">:</span> string
      <span class="token key atrule">tcpSocket</span><span class="token punctuation">:</span>     <span class="token comment">#对Pod内个容器健康检查方式设置为tcpSocket方式</span>
         <span class="token key atrule">port</span><span class="token punctuation">:</span> number
       <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>  <span class="token comment">#容器启动完成后首次探测的时间，单位为秒</span>
       <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>   <span class="token comment">#对容器健康检查探测等待响应的超时时间，单位秒，默认1秒</span>
       <span class="token key atrule">periodSeconds</span><span class="token punctuation">:</span> <span class="token number">0</span>    <span class="token comment">#对容器监控检查的定期探测时间设置，单位秒，默认10秒一次</span>
       <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">0</span>
       <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">0</span>
       <span class="token key atrule">securityContext</span><span class="token punctuation">:</span>
         privileged<span class="token punctuation">:</span><span class="token boolean important">false</span>
    <span class="token key atrule">restartPolicy</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>Always <span class="token punctuation">|</span> Never <span class="token punctuation">|</span> OnFailure<span class="token punctuation">]</span><span class="token comment">#Pod的重启策略，Always表示一旦不管以何种方式终止运行，kubelet都将重启，OnFailure表示只有Pod以非0退出码退出才重启，Nerver表示不再重启该Pod</span>
    <span class="token key atrule">nodeSelector</span><span class="token punctuation">:</span> obeject  <span class="token comment">#设置NodeSelector表示将该Pod调度到包含这个label的node上，以key：value的格式指定</span>
    <span class="token key atrule">imagePullSecrets</span><span class="token punctuation">:</span>    <span class="token comment">#Pull镜像时使用的secret名称，以key：secretkey格式指定</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
    hostNetwork<span class="token punctuation">:</span><span class="token boolean important">false</span>      <span class="token comment">#是否使用主机网络模式，默认为false，如果设置为true，表示使用宿主机网络</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>       <span class="token comment">#在该pod上定义共享存储卷列表</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string     <span class="token comment">#共享存储卷名称 （volumes类型有很多种）</span>
      <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>     <span class="token comment">#类型为emtyDir的存储卷，与Pod同生命周期的一个临时目录。为空值</span>
      <span class="token key atrule">hostPath</span><span class="token punctuation">:</span> string     <span class="token comment">#类型为hostPath的存储卷，表示挂载Pod所在宿主机的目录</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> string     <span class="token comment">#Pod所在宿主机的目录，将被用于同期中mount的目录</span>
      <span class="token key atrule">secret</span><span class="token punctuation">:</span>      <span class="token comment">#类型为secret的存储卷，挂载集群与定义的secre对象到容器内部</span>
        <span class="token key atrule">scretname</span><span class="token punctuation">:</span> string  
        <span class="token key atrule">items</span><span class="token punctuation">:</span>     
        <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> string
          <span class="token key atrule">path</span><span class="token punctuation">:</span> string
      <span class="token key atrule">configMap</span><span class="token punctuation">:</span>     <span class="token comment">#类型为configMap的存储卷，挂载预定义的configMap对象到容器内部</span>
        <span class="token key atrule">name</span><span class="token punctuation">:</span> string
        <span class="token key atrule">items</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> string <span class="token comment">#文件名</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> /root/k8s/config/nginx.conf <span class="token comment">#文件路径</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="service所有配置" tabindex="-1"><a class="header-anchor" href="#service所有配置" aria-hidden="true">#</a> service所有配置</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
<span class="token comment">#元数据</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> string
  <span class="token comment">#Service名称</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> string
  <span class="token comment">#命名空间，不指定时默认为default命名空间</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
  <span class="token comment">#自定义标签属性列表     </span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
  <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
  <span class="token comment">#自定义注解属性列表    </span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
<span class="token comment">#详细描述    </span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">#Label Selector配置，选择具有指定label标签的pod作为管理范围</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> string
  <span class="token comment">#service的类型，指定service的访问方式，默认ClusterIP</span>
  <span class="token comment">#ClusterIP：虚拟的服务ip地址，用于k8s集群内部的pod访问，在Node上kube-porxy通过设置的iptables规则进行转发</span>
  <span class="token comment">#NodePort：使用宿主机端口，能够访问各Node的外部客户端通过Node的IP和端口就能访问服务器</span>
  <span class="token comment">#LoadBalancer：使用外部负载均衡器完成到服务器的负载分发，</span>
  <span class="token comment">#需要在spec.status.loadBalancer字段指定外部负载均衡服务器的IP，并同时定义nodePort和clusterIP用于公有云环境。</span>
  <span class="token key atrule">clusterIP</span><span class="token punctuation">:</span> string
  <span class="token comment">#虚拟服务IP地址，当type=ClusterIP时，如不指定，则系统会自动进行分配，也可以手动指定。当type=loadBalancer，需要指定</span>
  <span class="token key atrule">sessionAffinity</span><span class="token punctuation">:</span> string
  <span class="token comment">#是否支持session，可选值为ClietIP，默认值为空</span>
  <span class="token comment">#ClientIP表示将同一个客户端(根据客户端IP地址决定)的访问请求都转发到同一个后端Pod</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token comment">#service需要暴露的端口列表    </span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> string
    <span class="token comment">#端口名称</span>
    <span class="token key atrule">protocol</span><span class="token punctuation">:</span> string
    <span class="token comment">#端口协议，支持TCP或UDP，默认TCP</span>
     <span class="token key atrule">port</span><span class="token punctuation">:</span> int
    <span class="token comment">#服务监听的端口号</span>
     <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> int
    <span class="token comment">#需要转发到后端的端口号</span>
     <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> int
    <span class="token comment">#当type=NodePort时，指定映射到物理机的端口号</span>
  <span class="token key atrule">status</span><span class="token punctuation">:</span>
  <span class="token comment">#当type=LoadBalancer时，设置外部负载均衡的地址，用于公有云环境    </span>
    <span class="token key atrule">loadBalancer</span><span class="token punctuation">:</span>
    <span class="token comment">#外部负载均衡器    </span>
      <span class="token key atrule">ingress</span><span class="token punctuation">:</span>
      <span class="token comment">#外部负载均衡器 </span>
      <span class="token key atrule">ip</span><span class="token punctuation">:</span> string
      <span class="token comment">#外部负载均衡器的IP地址</span>
      <span class="token key atrule">hostname</span><span class="token punctuation">:</span> string
     <span class="token comment">#外部负载均衡器的机主机</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="deployment所有配置" tabindex="-1"><a class="header-anchor" href="#deployment所有配置" aria-hidden="true">#</a> deployment所有配置</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1   <span class="token comment">#接口版本</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment                 <span class="token comment">#接口类型</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> cango<span class="token punctuation">-</span>demo               <span class="token comment">#Deployment名称</span>
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> cango<span class="token punctuation">-</span>prd           <span class="token comment">#命名空间</span>
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> cango<span class="token punctuation">-</span>demo              <span class="token comment">#标签</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span>
   <span class="token key atrule">strategy</span><span class="token punctuation">:</span>
    <span class="token key atrule">rollingUpdate</span><span class="token punctuation">:</span>  <span class="token comment">##由于replicas为3,则整个升级,pod个数在2-4个之间</span>
      <span class="token key atrule">maxSurge</span><span class="token punctuation">:</span> <span class="token number">1</span>      <span class="token comment">#滚动升级时会先启动1个pod</span>
      <span class="token key atrule">maxUnavailable</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token comment">#滚动升级时允许的最大Unavailable的pod个数</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>         
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> cango<span class="token punctuation">-</span>demo  <span class="token comment">#模板名称必填</span>
    <span class="token key atrule">sepc</span><span class="token punctuation">:</span> <span class="token comment">#定义容器模板，该模板可以包含多个容器</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>                                                                   
        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> cango<span class="token punctuation">-</span>demo                                                           <span class="token comment">#镜像名称</span>
          <span class="token key atrule">image</span><span class="token punctuation">:</span> swr.cn<span class="token punctuation">-</span>east<span class="token punctuation">-</span>2.myhuaweicloud.com/cango<span class="token punctuation">-</span>prd/cango<span class="token punctuation">-</span>demo<span class="token punctuation">:</span>0.0.1<span class="token punctuation">-</span>SNAPSHOT <span class="token comment">#镜像地址</span>
          <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;-c&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;cat /etc/config/path/to/special-key&quot;</span> <span class="token punctuation">]</span>    <span class="token comment">#启动命令</span>
          <span class="token key atrule">args</span><span class="token punctuation">:</span>                                                                <span class="token comment">#启动参数</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;-storage.local.retention=$(STORAGE_RETENTION)&#39;</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;-storage.local.memory-chunks=$(STORAGE_MEMORY_CHUNKS)&#39;</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;-config.file=/etc/prometheus/prometheus.yml&#39;</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;-alertmanager.url=http://alertmanager:9093/alertmanager&#39;</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;-web.external-url=$(EXTERNAL_URL)&#39;</span>
    <span class="token comment">#如果command和args均没有写，那么用Docker默认的配置。</span>
    <span class="token comment">#如果command写了，但args没有写，那么Docker默认的配置会被忽略而且仅仅执行.yaml文件的command（不带任何参数的）。</span>
    <span class="token comment">#如果command没写，但args写了，那么Docker默认配置的ENTRYPOINT的命令行会被执行，但是调用的参数是.yaml中的args。</span>
    <span class="token comment">#如果如果command和args都写了，那么Docker默认的配置被忽略，使用.yaml的配置。</span>
          <span class="token key atrule">imagePullPolicy</span><span class="token punctuation">:</span> IfNotPresent  <span class="token comment">#如果不存在则拉取</span>
          <span class="token key atrule">livenessProbe</span><span class="token punctuation">:</span>       <span class="token comment">#表示container是否处于live状态。如果LivenessProbe失败，LivenessProbe将会通知kubelet对应的container不健康了。随后kubelet将kill掉container，并根据RestarPolicy进行进一步的操作。默认情况下LivenessProbe在第一次检测之前初始化值为Success，如果container没有提供LivenessProbe，则也认为是Success；</span>
            <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
              <span class="token key atrule">path</span><span class="token punctuation">:</span> /health <span class="token comment">#如果没有心跳检测接口就为/</span>
              <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
              <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP
            <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">60</span> <span class="token comment">##启动后延时多久开始运行检测</span>
            <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
            <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
            <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">5</span>
            <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
          <span class="token key atrule">readinessProbe</span><span class="token punctuation">:</span>
            <span class="token key atrule">httpGet</span><span class="token punctuation">:</span>
              <span class="token key atrule">path</span><span class="token punctuation">:</span> /health <span class="token comment">#如果没有心跳检测接口就为/</span>
              <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span>
              <span class="token key atrule">scheme</span><span class="token punctuation">:</span> HTTP
            <span class="token key atrule">initialDelaySeconds</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment">##启动后延时多久开始运行检测</span>
            <span class="token key atrule">timeoutSeconds</span><span class="token punctuation">:</span> <span class="token number">5</span>
            <span class="token key atrule">successThreshold</span><span class="token punctuation">:</span> <span class="token number">1</span>
            <span class="token key atrule">failureThreshold</span><span class="token punctuation">:</span> <span class="token number">5</span>
          <span class="token key atrule">resources</span><span class="token punctuation">:</span>              <span class="token comment">##CPU内存限制</span>
            <span class="token key atrule">requests</span><span class="token punctuation">:</span>
              <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token number">2</span>
              <span class="token key atrule">memory</span><span class="token punctuation">:</span> 2048Mi
            <span class="token key atrule">limits</span><span class="token punctuation">:</span>
              <span class="token key atrule">cpu</span><span class="token punctuation">:</span> <span class="token number">2</span>
              <span class="token key atrule">memory</span><span class="token punctuation">:</span> 2048Mi
          <span class="token key atrule">env</span><span class="token punctuation">:</span>                    <span class="token comment">##通过环境变量的方式，直接传递pod=自定义Linux OS环境变量</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> LOCAL_KEY     <span class="token comment">#本地Key</span>
              <span class="token key atrule">value</span><span class="token punctuation">:</span> value
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> CONFIG_MAP_KEY  <span class="token comment">#局策略可使用configMap的配置Key，</span>
              <span class="token key atrule">valueFrom</span><span class="token punctuation">:</span>
                <span class="token key atrule">configMapKeyRef</span><span class="token punctuation">:</span>
                  <span class="token key atrule">name</span><span class="token punctuation">:</span> special<span class="token punctuation">-</span>config   <span class="token comment">#configmap中找到name为special-config</span>
                  <span class="token key atrule">key</span><span class="token punctuation">:</span> special.type      <span class="token comment">#找到name为special-config里data下的key</span>
          <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> http
              <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token comment">#对service暴露端口</span>
          <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>     <span class="token comment">#挂载volumes中定义的磁盘</span>
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> log<span class="token punctuation">-</span>cache
            <span class="token key atrule">mount</span><span class="token punctuation">:</span> /tmp/log
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> sdb       <span class="token comment">#普通用法，该卷跟随容器销毁，挂载一个目录</span>
            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /data/media    
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>root    <span class="token comment">#直接挂载硬盘方法，如挂载下面的nfs目录到/mnt/nfs</span>
            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /mnt/nfs
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> example<span class="token punctuation">-</span>volume<span class="token punctuation">-</span>config  <span class="token comment">#高级用法第1种，将ConfigMap的log-script,backup-script分别挂载到/etc/config目录下的一个相对路径path/to/...下，如果存在同名文件，直接覆盖。</span>
            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /etc/config       
          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> rbd<span class="token punctuation">-</span>pvc                <span class="token comment">#高级用法第2中，挂载PVC(PresistentVolumeClaim)</span>

<span class="token comment">#使用volume将ConfigMap作为文件或目录直接挂载，其中每一个key-value键值对都会生成一个文件，key为文件名，value为内容，</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>  <span class="token comment"># 定义磁盘给上面volumeMounts挂载</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> log<span class="token punctuation">-</span>cache
    <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> sdb  <span class="token comment">#挂载宿主机上面的目录</span>
    <span class="token key atrule">hostPath</span><span class="token punctuation">:</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /any/path/it/will/be/replaced
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> example<span class="token punctuation">-</span>volume<span class="token punctuation">-</span>config  <span class="token comment"># 供ConfigMap文件内容到指定路径使用</span>
    <span class="token key atrule">configMap</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> example<span class="token punctuation">-</span>volume<span class="token punctuation">-</span>config  <span class="token comment">#ConfigMap中名称</span>
      <span class="token key atrule">items</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> log<span class="token punctuation">-</span>script           <span class="token comment">#ConfigMap中的Key</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> path/to/log<span class="token punctuation">-</span>script  <span class="token comment">#指定目录下的一个相对路径path/to/log-script</span>
      <span class="token punctuation">-</span> <span class="token key atrule">key</span><span class="token punctuation">:</span> backup<span class="token punctuation">-</span>script        <span class="token comment">#ConfigMap中的Key</span>
        <span class="token key atrule">path</span><span class="token punctuation">:</span> path/to/backup<span class="token punctuation">-</span>script  <span class="token comment">#指定目录下的一个相对路径path/to/backup-script</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nfs<span class="token punctuation">-</span>client<span class="token punctuation">-</span>root         <span class="token comment">#供挂载NFS存储类型</span>
    <span class="token key atrule">nfs</span><span class="token punctuation">:</span>
      <span class="token key atrule">server</span><span class="token punctuation">:</span> 10.42.0.55          <span class="token comment">#NFS服务器地址</span>
      <span class="token key atrule">path</span><span class="token punctuation">:</span> /opt/public           <span class="token comment">#showmount -e 看一下路径</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> rbd<span class="token punctuation">-</span>pvc                 <span class="token comment">#挂载PVC磁盘</span>
    <span class="token key atrule">persistentVolumeClaim</span><span class="token punctuation">:</span>
      <span class="token key atrule">claimName</span><span class="token punctuation">:</span> rbd<span class="token punctuation">-</span>pvc1         <span class="token comment">#挂载已经申请的pvc磁盘</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数据挂载总结" tabindex="-1"><a class="header-anchor" href="#数据挂载总结" aria-hidden="true">#</a> 数据挂载总结</h2><p>总结</p><p>1、k8s数据挂载</p><p>hostPath ：直接指定主机路径</p><p>configmap：直接目录挂载</p><p>hostPath</p><p>优势：</p><p>1、hostPath 可以指定具体的文件。主机替换容器</p><p>缺陷：</p><p>1、容器运行在哪一个主机，就必须在主机上有这个文件</p><p>configmap：</p><p>优势：</p><p>1、只需要在主机上创建文件就可以了。可以自动同步到所有节点</p><p>缺陷：</p><p>1、是目录挂载。</p><p>主机上可以把多个文件，容器要对应是一个目录。</p><h2 id="ip地址中-16或者-24的意义" tabindex="-1"><a class="header-anchor" href="#ip地址中-16或者-24的意义" aria-hidden="true">#</a> IP地址中/16或者/24的意义</h2>`,110),v={href:"https://blog.csdn.net/weixin_40880213/article/details/120670910",target:"_blank",rel:"noopener noreferrer"},b=n("p",null,"实际上，IPv4地址是由32位二进制数组成的。以192.168.0.0/16为例，它的二进制表示是11000000.10101000.00000000.00000000。/16表示前16位是网络地址，后16位是主机地址，即从1000000.10101000.00000000.00000000到11000000.10101000.11111111.11111111，所表示的IP地址范围是从192.168.0.0到192.168.255.255，其中最后一个地址为广播地址，因此可用IP地址数量为65534。",-1),y={href:"https://www.sojson.com/convert/subnetmask.html",target:"_blank",rel:"noopener noreferrer"},g=c(`<h2 id="k8s-网络检查" tabindex="-1"><a class="header-anchor" href="#k8s-网络检查" aria-hidden="true">#</a> k8s 网络检查</h2><h3 id="pod-资料解析" tabindex="-1"><a class="header-anchor" href="#pod-资料解析" aria-hidden="true">#</a> pod 资料解析</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl  get pod <span class="token parameter variable">-o</span> wide

<span class="token punctuation">[</span>root@lkn66 k8s<span class="token punctuation">]</span><span class="token comment"># kubectl  get pod -o wide</span>
NAME                              READY   STATUS    RESTARTS   AGE   IP            NODE    NOMINATED NODE   READINESS GATES
nginx                             <span class="token number">1</span>/1     Running   <span class="token number">1</span>          17h   <span class="token number">10.244</span>.1.16   lkn65   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
productservice                    <span class="token number">1</span>/1     Running   <span class="token number">1</span>          17h   <span class="token number">10.244</span>.1.19   lkn65   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
productservice-6c877bccf4-k7br4   <span class="token number">1</span>/1     Running   <span class="token number">1</span>          17h   <span class="token number">10.244</span>.1.17   lkn65   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>
productservice-6c877bccf4-vqnkg   <span class="token number">1</span>/1     Running   <span class="token number">1</span>          17h   <span class="token number">10.244</span>.1.18   lkn65   <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>           <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(x,P){const e=l("router-link"),p=l("ExternalLinkIcon");return o(),u("div",null,[k,n("nav",d,[n("ul",null,[n("li",null,[a(e,{to:"#目录"},{default:t(()=>[s("目录")]),_:1})]),n("li",null,[a(e,{to:"#微服务部署-k8s-二-应用"},{default:t(()=>[s("微服务部署-k8s(二)-应用")]),_:1})]),n("li",null,[a(e,{to:"#k8s运行nginx镜像"},{default:t(()=>[s("k8s运行Nginx镜像")]),_:1})]),n("li",null,[a(e,{to:"#k8s暴露-nginx-pod"},{default:t(()=>[s("k8s暴露 Nginx Pod")]),_:1})]),n("li",null,[a(e,{to:"#k8s运行商品微服务镜像"},{default:t(()=>[s("k8s运行商品微服务镜像")]),_:1})]),n("li",null,[a(e,{to:"#k8s暴露productservice-pod"},{default:t(()=>[s("k8s暴露productservice Pod")]),_:1})]),n("li",null,[a(e,{to:"#k8s运行nginx-镜像复制集"},{default:t(()=>[s("k8s运行Nginx 镜像复制集")]),_:1})]),n("li",null,[a(e,{to:"#k8s暴露-nginx-deployment"},{default:t(()=>[s("k8s暴露 Nginx deployment")]),_:1})]),n("li",null,[a(e,{to:"#k8s运行商品微服务镜像-1"},{default:t(()=>[s("k8s运行商品微服务镜像")]),_:1})]),n("li",null,[a(e,{to:"#商品微服务-deployment-配置"},{default:t(()=>[s("商品微服务 Deployment 配置")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#手动-动态-scale-实际动态伸缩"},{default:t(()=>[s("手动 动态 scale 实际动态伸缩")]),_:1})]),n("li",null,[a(e,{to:"#autoscale-自动动态伸缩"},{default:t(()=>[s("autoscale 自动动态伸缩")]),_:1})])])]),n("li",null,[a(e,{to:"#商品微服务、nginx之间通信"},{default:t(()=>[s("商品微服务、Nginx之间通信")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#修改service-nginx-yml文件"},{default:t(()=>[s("修改service nginx.yml文件")]),_:1})]),n("li",null,[a(e,{to:"#修改service-productservice-yml文件"},{default:t(()=>[s("修改service productservice.yml文件")]),_:1})])])]),n("li",null,[a(e,{to:"#附件"},{default:t(()=>[s("附件")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#pod所有配置"},{default:t(()=>[s("pod所有配置")]),_:1})])])]),n("li",null,[a(e,{to:"#service所有配置"},{default:t(()=>[s("service所有配置")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#deployment所有配置"},{default:t(()=>[s("deployment所有配置")]),_:1})])])]),n("li",null,[a(e,{to:"#数据挂载总结"},{default:t(()=>[s("数据挂载总结")]),_:1})]),n("li",null,[a(e,{to:"#ip地址中-16或者-24的意义"},{default:t(()=>[s("IP地址中/16或者/24的意义")]),_:1})]),n("li",null,[a(e,{to:"#k8s-网络检查"},{default:t(()=>[s("k8s 网络检查")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#pod-资料解析"},{default:t(()=>[s("pod 资料解析")]),_:1})])])])])]),m,n("p",null,[n("a",v,[s("参考"),a(p)]),s(" 当创建vpc专有网络时，许多人会遇到填写IPv4地址情况，通常使用的格式是xxx.xxx.xxx.xxx/16或xxx.xxx.xxx.xxx/24 那么这个斜杠后面的数字代表什么意思呢？")]),b,n("p",null,[s("如果是/24，它表示前24位是网络地址，后8位是主机地址。例如，192.168.0.0/24表示的IP地址范围是从1000000.10101000.00000000.00000000到11000000.10101000.00000000.11111111，所表示的IP地址为192.168.0.0到192.168.0.255，其中最后一个地址为广播地址，因此可用IP地址数量为254。 子网掩码还决定了网络的大小。因此，在选择子网掩码时，需要考虑所需的IP地址数量和网络规模. 更加详细的地址算法可以参考:"),n("a",y,[s("在线网络计算器|TCP/IP子网掩码计算换算 一在线工具"),a(p)])]),g])}const _=i(r,[["render",h],["__file","docker04.html.vue"]]);export{_ as default};
