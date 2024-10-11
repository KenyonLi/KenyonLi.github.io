import{_ as c,r as d,o as t,c as r,a,b as n,w as i,d as e,e as u}from"./app-c1c3c937.js";const o={},m=a("h2",{id:"目录",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),e(" 目录")],-1),p={class:"table-of-contents"},v=a("h2",{id:"yum及yum-config-manager命令详解",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#yum及yum-config-manager命令详解","aria-hidden":"true"},"#"),e(" yum及yum-config-manager命令详解")],-1),h={href:"https://blog.csdn.net/duansamve/article/details/128366593",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/weixin_43930641/article/details/119450824",target:"_blank",rel:"noopener noreferrer"},g=u(`<p><code>yum</code>命令是在<code>Fedora</code>和<code>RedHat</code>以及<code>SUSE</code>中基于<code>rpm</code>的软件包管理器，它可以使系统管理人员交互和自动化地更细与管理<code>RPM</code>软件包，能够从指定的服务器自动下载<code>RPM</code>包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。</p><p><code>yum</code>提供了查找、安装、删除某一个、一组甚至全部软件包的命令，而且命令简洁而又好记。</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum<span class="token punctuation">(</span>选项<span class="token punctuation">)</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选项" tabindex="-1"><a class="header-anchor" href="#选项" aria-hidden="true">#</a> 选项</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>-h：显示帮助信息；
-y：对所有的提问都回答“yes”；
-c：指定配置文件；
-q：安静模式；
-v：详细模式；
-d：设置调试等级（0-10）；
-e：设置错误等级（0-10）；
-R：设置yum处理一个命令的最大等待时间；
-C：完全从缓存中运行，而不去下载或者更新任何头文件。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>install：安装rpm软件包；
update：更新rpm软件包；
check-update：检查是否有可用的更新rpm软件包；
remove：删除指定的rpm软件包；
list：显示软件包的信息；
search：检查软件包的信息；
info：显示指定的rpm软件包的描述信息和概要信息；
clean：清理yum过期的缓存；
shell：进入yum的shell提示符；
resolvedep：显示rpm软件包的依赖关系；
localinstall：安装本地的rpm软件包；
localupdate：显示本地rpm软件包进行更新；
deplist：显示rpm软件包的所有依赖关系。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h3><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span>      <span class="token comment">#全部安装</span>
yum <span class="token function">install</span> package1      <span class="token comment">#安装指定的安装包package1</span>
yum groupinsall group1      <span class="token comment">#安装程序组group1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新和升级" tabindex="-1"><a class="header-anchor" href="#更新和升级" aria-hidden="true">#</a> 更新和升级</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum update      <span class="token comment">#全部更新</span>
yum update package1      <span class="token comment">#更新指定程序包package1</span>
yum check-update      <span class="token comment">#检查可更新的程序</span>
yum upgrade package1      <span class="token comment">#升级指定程序包package1</span>
yum groupupdate group1      <span class="token comment">#升级程序组group1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找和显示" tabindex="-1"><a class="header-anchor" href="#查找和显示" aria-hidden="true">#</a> 查找和显示</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum info package1      <span class="token comment">#显示安装包信息package1</span>
yum list      <span class="token comment">#显示所有已经安装和可以安装的程序包</span>
yum list package1      <span class="token comment">#显示指定程序包安装情况package1</span>

yum list installed      <span class="token comment">#查看已经安装的软件包</span>

yum list installed <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">java</span>      <span class="token comment">#查看已经安装的软件包，并搜索 java 记录</span>
yum groupinfo group1      <span class="token comment">#显示程序组group1信息yum search string 根据关键字string查找安装包</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除程序" tabindex="-1"><a class="header-anchor" href="#删除程序" aria-hidden="true">#</a> 删除程序</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove package1      <span class="token comment">#删除程序包package1</span>
yum groupremove group1      <span class="token comment">#删除程序组group1</span>
yum deplist package1      <span class="token comment">#查看程序package1依赖情况</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum makecache
<span class="token comment"># 把服务器的包信息下载到本地电脑缓存起来，makecache建立一个缓存</span>
<span class="token comment"># 以后用install时就在缓存中搜索，提高了速度。</span>
<span class="token comment"># 配合yum -C search xxx使用，不用联网检索就能查找软件信息</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清除缓存" tabindex="-1"><a class="header-anchor" href="#清除缓存" aria-hidden="true">#</a> 清除缓存</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum clean packages      <span class="token comment">#清除缓存目录下的软件包</span>
yum clean headers      <span class="token comment">#清除缓存目录下的 headers</span>
yum clean oldheaders      <span class="token comment">#清除缓存目录下旧的 headers</span>

yum clean all

yum-config-manager命令 – 管理软件仓库
yum-config-manager命令的功能是用于管理软件仓库，可以调整yum的主要配置参数，启动或关闭指定软件源，删除已有软件仓库等工作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="语法格式" tabindex="-1"><a class="header-anchor" href="#语法格式" aria-hidden="true">#</a> 语法格式：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum-config-manager <span class="token punctuation">[</span>参数<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数：</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token punctuation">-</span>e&lt;错误级别<span class="token punctuation">&gt;</span>	错误输出级别
<span class="token punctuation">-</span>d&lt;调试级别<span class="token punctuation">&gt;</span>	调试输出级别
<span class="token punctuation">-</span>c&lt;配置文件<span class="token punctuation">&gt;</span>	指定配置文件的位置
<span class="token punctuation">-</span>t	错误宽容
<span class="token punctuation">-</span><span class="token punctuation">-</span>enable	启用软件仓库
<span class="token punctuation">-</span><span class="token punctuation">-</span>disable	禁用软件仓库
<span class="token punctuation">-</span><span class="token punctuation">-</span>add<span class="token punctuation">-</span>repo=&lt;软件仓库<span class="token punctuation">&gt;</span>	从指定文件或URL添加（和启用）软件仓库
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="显示指定软件仓库的配置信息" tabindex="-1"><a class="header-anchor" href="#显示指定软件仓库的配置信息" aria-hidden="true">#</a> 显示指定软件仓库的配置信息：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum-config-manager ItemName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="添加指定的软件仓库来源" tabindex="-1"><a class="header-anchor" href="#添加指定的软件仓库来源" aria-hidden="true">#</a> 添加指定的软件仓库来源：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum-config-manager --add-repo <span class="token operator">&lt;</span>file<span class="token operator">|</span>url<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="显示当前已启用的软件仓库信息" tabindex="-1"><a class="header-anchor" href="#显示当前已启用的软件仓库信息" aria-hidden="true">#</a> 显示当前已启用的软件仓库信息：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum-config-manager <span class="token parameter variable">--enable</span> ItemName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31);function k(f,y){const s=d("router-link"),l=d("ExternalLinkIcon");return t(),r("div",null,[m,a("nav",p,[a("ul",null,[a("li",null,[n(s,{to:"#目录"},{default:i(()=>[e("目录")]),_:1})]),a("li",null,[n(s,{to:"#yum及yum-config-manager命令详解"},{default:i(()=>[e("yum及yum-config-manager命令详解")]),_:1}),a("ul",null,[a("li",null,[n(s,{to:"#语法"},{default:i(()=>[e("语法")]),_:1})]),a("li",null,[n(s,{to:"#选项"},{default:i(()=>[e("选项")]),_:1})]),a("li",null,[n(s,{to:"#参数"},{default:i(()=>[e("参数")]),_:1})]),a("li",null,[n(s,{to:"#实例"},{default:i(()=>[e("实例")]),_:1})]),a("li",null,[n(s,{to:"#安装"},{default:i(()=>[e("安装")]),_:1})]),a("li",null,[n(s,{to:"#更新和升级"},{default:i(()=>[e("更新和升级")]),_:1})]),a("li",null,[n(s,{to:"#查找和显示"},{default:i(()=>[e("查找和显示")]),_:1})]),a("li",null,[n(s,{to:"#删除程序"},{default:i(()=>[e("删除程序")]),_:1})]),a("li",null,[n(s,{to:"#缓存"},{default:i(()=>[e("缓存")]),_:1})]),a("li",null,[n(s,{to:"#清除缓存"},{default:i(()=>[e("清除缓存")]),_:1})]),a("li",null,[n(s,{to:"#语法格式"},{default:i(()=>[e("语法格式：")]),_:1})]),a("li",null,[n(s,{to:"#常用参数"},{default:i(()=>[e("常用参数：")]),_:1})]),a("li",null,[n(s,{to:"#显示指定软件仓库的配置信息"},{default:i(()=>[e("显示指定软件仓库的配置信息：")]),_:1})]),a("li",null,[n(s,{to:"#添加指定的软件仓库来源"},{default:i(()=>[e("添加指定的软件仓库来源：")]),_:1})]),a("li",null,[n(s,{to:"#显示当前已启用的软件仓库信息"},{default:i(()=>[e("显示当前已启用的软件仓库信息：")]),_:1})])])])])]),v,a("p",null,[a("a",h,[e("yum参考"),n(l)]),a("a",b,[e("yum 仓库管理命令参考"),n(l)])]),g])}const x=c(o,[["render",k],["__file","linux001.html.vue"]]);export{x as default};
