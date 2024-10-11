import{_ as o,r,o as c,c as l,a,b as s,w as t,d as n,e as i}from"./app-c1c3c937.js";const d={},p=a("h2",{id:"目录",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),h={class:"table-of-contents"},u=i(`<h2 id="trojan-go" tabindex="-1"><a class="header-anchor" href="#trojan-go" aria-hidden="true">#</a> Trojan-go</h2><h2 id="bbr-加速" tabindex="-1"><a class="header-anchor" href="#bbr-加速" aria-hidden="true">#</a> bbr 加速</h2><p>参考视频 https://v2rayssr.com/bbr.html</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;net.core.default_qdisc=fq&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;net.ipv4.tcp_congestion_control=bbr&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf
<span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
lsmod <span class="token operator">|</span> <span class="token function">grep</span> bbr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一键搭建trojan-go面板-trojan-go支持websocket-免费开启cdn隐藏自己vps的真实ip-从而实现不被墙" tabindex="-1"><a class="header-anchor" href="#一键搭建trojan-go面板-trojan-go支持websocket-免费开启cdn隐藏自己vps的真实ip-从而实现不被墙" aria-hidden="true">#</a> 一键搭建Trojan-Go面板，Trojan-Go支持WebSocket，免费开启CDN隐藏自己VPS的真实IP，从而实现不被墙！</h2><p>https://v2rayssr.com/trojancdn.html</p><h2 id="配置-trojan-go" tabindex="-1"><a class="header-anchor" href="#配置-trojan-go" aria-hidden="true">#</a> 配置 trojan-go</h2><p>路径：/usr/local/etc/trojan/config.json</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token parameter variable">-N</span> --no-check-certificate <span class="token string">&quot;https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x tcp.sh <span class="token operator">&amp;&amp;</span> ./tcp.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装后直接选 4 启动 BBR 加速；然后再次运行 ./tcp.sh 运行后，选择 10 优化配置；然后重启 VPS 后，测试速度, 够用了。</p>`,10);function b(g,m){const e=r("router-link");return c(),l("div",null,[p,a("nav",h,[a("ul",null,[a("li",null,[s(e,{to:"#目录"},{default:t(()=>[n("目录")]),_:1})]),a("li",null,[s(e,{to:"#trojan-go"},{default:t(()=>[n("Trojan-go")]),_:1})]),a("li",null,[s(e,{to:"#bbr-加速"},{default:t(()=>[n("bbr 加速")]),_:1})]),a("li",null,[s(e,{to:"#一键搭建trojan-go面板-trojan-go支持websocket-免费开启cdn隐藏自己vps的真实ip-从而实现不被墙"},{default:t(()=>[n("一键搭建Trojan-Go面板，Trojan-Go支持WebSocket，免费开启CDN隐藏自己VPS的真实IP，从而实现不被墙！")]),_:1})]),a("li",null,[s(e,{to:"#配置-trojan-go"},{default:t(()=>[n("配置 trojan-go")]),_:1})])])]),u])}const _=o(d,[["render",b],["__file","vpn04.html.vue"]]);export{_ as default};
