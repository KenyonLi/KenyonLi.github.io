import{_ as l,r as p,o,c as r,a as n,b as a,w as t,d as s,e as i}from"./app-c1c3c937.js";const d="/images/frp/01/frp001_001.png",u={},m=n("h2",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),v={class:"table-of-contents"},b=i('<h2 id="frp-网络穿透工具" tabindex="-1"><a class="header-anchor" href="#frp-网络穿透工具" aria-hidden="true">#</a> frp 网络穿透工具</h2><h2 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备" aria-hidden="true">#</a> 前置准备</h2><p>1、外网服务一台（或者有公网ip的机器如阿里、华为、腾讯） 2、内网服务器一台（win10电脑）;</p><h2 id="下载脚本部署文件" tabindex="-1"><a class="header-anchor" href="#下载脚本部署文件" aria-hidden="true">#</a> 下载脚本部署文件</h2>',4),h={href:"https://github.com/fatedier/frp/releases",target:"_blank",rel:"noopener noreferrer"},k=i('<p>https://github.com/fatedier/frp/releases</p><p><img src="'+d+`" alt="Alt text"></p><p>或者百度云盘下载：https://pan.baidu.com/s/1yLXRrIE6Zlxebx8Ym22v2Q 提取码：q5dp 注意事项： 1）服务器端和内网机器端下载的版本要相同，否则可能会影响内网穿透 2）根据服务器系统选择合适的脚本</p><p>脚本主要分为服务端与客户端文件 1.外网服务器端用到的是Frps和Frps.ini 2.win10电脑用到的是Frpc和Frpc.ini</p><p>注： 服务端部署，可以只保留服务端文件 <code>frps</code> ​客户端部署，可以只保留客户端文件 <code>frpc</code></p><h2 id="外网服务器" tabindex="-1"><a class="header-anchor" href="#外网服务器" aria-hidden="true">#</a> 外网服务器</h2><h2 id="解压压缩包" tabindex="-1"><a class="header-anchor" href="#解压压缩包" aria-hidden="true">#</a> 解压压缩包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> frp
<span class="token function">tar</span>  xzvf  frp_0.33.0_linux_386.tar.gz
<span class="token function">mv</span>  frp_0.33.0_linux_386  frp

创建frp文件夹，然后上传linux压缩包至文件夹并解压
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="外网服务端配置" tabindex="-1"><a class="header-anchor" href="#外网服务端配置" aria-hidden="true">#</a> 外网服务端配置</h2><p>2.1配置Frps.ini文件 1.进入frp文件夹下：<code>cd frp</code>，修改<code>frps.ini</code>文件 （<code>vim frps.ini</code>） 2.修改完成，:wq 退出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
<span class="token comment"># 内网穿透服务器端监听的IP地址，可以省略，默认为127.0.0.1</span>
bind_addr <span class="token operator">=</span> <span class="token number">0.0</span>.0.0
<span class="token comment">#服务器端监听的端口，默认是7000，可自定义</span>
bind_port <span class="token operator">=</span> <span class="token number">7002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.2启动命令 注：需要切换到文件目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./frps <span class="token parameter variable">-c</span> frps.ini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ctrl+C停止服务</p><p>3.3启动日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2019</span>/03/23 <span class="token number">17</span>:27:41 <span class="token punctuation">[</span>I<span class="token punctuation">]</span> <span class="token punctuation">[</span>service.go:136<span class="token punctuation">]</span> frps tcp listen on <span class="token number">0.0</span>.0.0:7001
<span class="token number">2019</span>/03/23 <span class="token number">17</span>:27:41 <span class="token punctuation">[</span>I<span class="token punctuation">]</span> <span class="token punctuation">[</span>service.go:178<span class="token punctuation">]</span> http <span class="token function">service</span> listen on <span class="token number">0.0</span>.0.0:8006
<span class="token number">2019</span>/03/23 <span class="token number">17</span>:27:41 <span class="token punctuation">[</span>I<span class="token punctuation">]</span> <span class="token punctuation">[</span>root.go:204<span class="token punctuation">]</span> Start frps success
则说明服务器端已经启动Frp服务，监听的端口是7001。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="win10客户端配置" tabindex="-1"><a class="header-anchor" href="#win10客户端配置" aria-hidden="true">#</a> win10客户端配置</h2><p>解压压缩包 创建frp文件夹，然后下载的windows压缩包至文件夹并解压</p><p>内网服务配置 2.1内网机器配置<code>Frpc.ini</code> 1.进入frp文件夹下找到<code>frpc.ini</code>右击<code>Notepade++</code>打开 2.修改完成，保存退出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>common<span class="token punctuation">]</span>
<span class="token comment">#外网-服务器端ip</span>
server_addr <span class="token operator">=</span> <span class="token number">148.70</span>.12.345
<span class="token comment">#外网-服务器端监听的端口(必须与Frps.ini中的配置一致)</span>
server_port <span class="token operator">=</span> <span class="token number">7002</span>

<span class="token punctuation">[</span>ssh<span class="token punctuation">]</span>
<span class="token comment">#配置类型为http协议</span>
<span class="token builtin class-name">type</span> <span class="token operator">=</span> tcp
<span class="token comment">#内网机器的IP</span>
local_ip <span class="token operator">=</span> <span class="token number">192.168</span>.44.4
<span class="token comment">#内网需要监听的端口（win10所启服务端口）</span>
local_port <span class="token operator">=</span> <span class="token number">8080</span>
remote_port <span class="token operator">=</span> <span class="token number">8080</span>
use_encryption <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment"># if true, message will be compressed</span>
use_compression <span class="token operator">=</span> <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动命令" tabindex="-1"><a class="header-anchor" href="#启动命令" aria-hidden="true">#</a> 启动命令</h2><p>注：Ctrl+R 执行cmd 需要再frp文件路径下执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>frpc <span class="token parameter variable">-c</span> frpc.ini
Ctrl+C停止服务
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>启动日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">2019</span>/03/23 <span class="token number">17</span>:28:21 **<span class="token punctuation">[</span>I<span class="token punctuation">]</span> <span class="token punctuation">[</span>service.go:221<span class="token punctuation">]</span> login to server success, get run <span class="token function">id</span> <span class="token punctuation">[</span>3435ffb8820dbcf1<span class="token punctuation">]</span>, server udp port <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>**

<span class="token number">2019</span>/03/23 <span class="token number">17</span>:28:21 **<span class="token punctuation">[</span>I<span class="token punctuation">]</span> <span class="token punctuation">[</span>proxy_manager.go:137<span class="token punctuation">]</span> <span class="token punctuation">[</span>3435ffb8820dbcf1<span class="token punctuation">]</span> proxy added: <span class="token punctuation">[</span>web<span class="token punctuation">]</span>**

<span class="token number">2019</span>/03/23 <span class="token number">17</span>:28:21 **<span class="token punctuation">[</span>I<span class="token punctuation">]</span> <span class="token punctuation">[</span>control.go:144<span class="token punctuation">]</span> <span class="token punctuation">[</span>web<span class="token punctuation">]</span> start proxy success**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="访问内网http服务" tabindex="-1"><a class="header-anchor" href="#访问内网http服务" aria-hidden="true">#</a> 访问内网http服务</h2><p>1、启动服务端<code>frps</code>服务成功 2、启动win10客户<code>frpc</code>服务成功 3、启动需要映射本机服务成功 <code>server_addr:local_port</code></p><p>示例：http://148.70.12.345:8080 访问成功，至此搭建成功！</p>`,28);function f(_,g){const e=p("router-link"),c=p("ExternalLinkIcon");return o(),r("div",null,[m,n("nav",v,[n("ul",null,[n("li",null,[a(e,{to:"#目录"},{default:t(()=>[s("目录")]),_:1})]),n("li",null,[a(e,{to:"#frp-网络穿透工具"},{default:t(()=>[s("frp 网络穿透工具")]),_:1})]),n("li",null,[a(e,{to:"#前置准备"},{default:t(()=>[s("前置准备")]),_:1})]),n("li",null,[a(e,{to:"#下载脚本部署文件"},{default:t(()=>[s("下载脚本部署文件")]),_:1})]),n("li",null,[a(e,{to:"#外网服务器"},{default:t(()=>[s("外网服务器")]),_:1})]),n("li",null,[a(e,{to:"#解压压缩包"},{default:t(()=>[s("解压压缩包")]),_:1})]),n("li",null,[a(e,{to:"#外网服务端配置"},{default:t(()=>[s("外网服务端配置")]),_:1})]),n("li",null,[a(e,{to:"#win10客户端配置"},{default:t(()=>[s("win10客户端配置")]),_:1})]),n("li",null,[a(e,{to:"#启动命令"},{default:t(()=>[s("启动命令")]),_:1})]),n("li",null,[a(e,{to:"#访问内网http服务"},{default:t(()=>[s("访问内网http服务")]),_:1})])])]),b,n("p",null,[s("下载地址： "),n("a",h,[s("GitHub地址"),a(c)])]),k])}const w=l(u,[["render",f],["__file","frp001.html.vue"]]);export{w as default};
