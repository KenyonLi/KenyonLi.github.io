import{_ as u,r as a,o as r,c,a as e,b as s,w as l,d as n,e as t}from"./app-c1c3c937.js";const o={},v=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),n(" 目录")],-1),b={class:"table-of-contents"},m=t('<h2 id="一、mysql集群篇" tabindex="-1"><a class="header-anchor" href="#一、mysql集群篇" aria-hidden="true">#</a> 一、MySQL集群篇</h2><div class="custom-container tip"><p class="custom-container-title">参考</p><blockquote><p><a href="/file/mysql/08.MySQL%E9%9B%86%E7%BE%A4%E7%AF%87.pdf">08.MySQL集群篇</a></p></blockquote></div><embed id="pdfPlayer" src="/file/mysql/08.MySQL集群篇.pdf" type="application/pdf" width="100%" height="700"><p>##二、环境配置</p><h3 id="ubuntu20-04-缺少libssl-so-1-0-0的解决方法" tabindex="-1"><a class="header-anchor" href="#ubuntu20-04-缺少libssl-so-1-0-0的解决方法" aria-hidden="true">#</a> ubuntu20.04 缺少libssl.so.1.0.0的解决方法</h3>',5),p={class:"custom-container tip"},h=e("p",{class:"custom-container-title"},"参考",-1),_={href:"https://blog.csdn.net/m0_38086244/article/details/121512894",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo wget http://security.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.0.0_1.0.2g-1ubuntu4.20_amd64.deb
sudo dpkg -i libssl1.0.0_1.0.2g-1ubuntu4.20_amd64.deb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ubuntu20-04-安装-altas在ubuntu系统上的安装部署步骤" tabindex="-1"><a class="header-anchor" href="#ubuntu20-04-安装-altas在ubuntu系统上的安装部署步骤" aria-hidden="true">#</a> ubuntu20.04 安装 Altas在Ubuntu系统上的安装部署步骤</h3>`,2),f={class:"custom-container tip"},x=e("p",{class:"custom-container-title"},"参考",-1),g={href:"https://blog.51cto.com/webseven/1746368",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.下载安装:

sudo wget https://github.com/Qihoo360/Atlas/releases/download/2.2/Atlas-2.2-debian7.0-x86_64.deb

sudo dpkg   --instdir=/srv/Altas-2.2 -i Atlas-2.2-debian7.0-x86_64.deb

2.配置atlas

Vi /usr/local/mysql-proxy/conf/test.cnf

3.atlas的管理维护
1）.启动:

/usr/local/mysql-proxy/bin/mysql-proxyd test start

mysql -h127.0.0.1 -uuser -ppwd -P2345;

2）.重启:

mysql-proxyd test restart

3）.停止

mysql-proxyd test stop

4）.检查

root@ebj-rd-02:/usr/local/mysql-proxy/bin# netstat -tnlp|grep 234

tcp        0      0 0.0.0.0:1234            0.0.0.0:*               LISTEN      14247/mysql-proxy

tcp        0      0 0.0.0.0:2345            0.0.0.0:*               LISTEN      14247/mysql-proxy

5）.登录管理端:

mysql -h127.0.0.1 -P2345 -uuser -ppwd，进入后执行:select * from help;查看管理DB的各类命令

6）.登录客户端:
mysql -h127.0.0.1 -P1234 -u用户名 -p密码，如果能连上则证明Atlas初步测试正常，可以再尝试发几条SQL语句看看执行结果是否正确

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(A,L){const i=a("router-link"),d=a("ExternalLinkIcon");return r(),c("div",null,[v,e("nav",b,[e("ul",null,[e("li",null,[s(i,{to:"#目录"},{default:l(()=>[n("目录")]),_:1})]),e("li",null,[s(i,{to:"#一、mysql集群篇"},{default:l(()=>[n("一、MySQL集群篇")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#ubuntu20-04-缺少libssl-so-1-0-0的解决方法"},{default:l(()=>[n("ubuntu20.04 缺少libssl.so.1.0.0的解决方法")]),_:1})]),e("li",null,[s(i,{to:"#ubuntu20-04-安装-altas在ubuntu系统上的安装部署步骤"},{default:l(()=>[n("ubuntu20.04 安装 Altas在Ubuntu系统上的安装部署步骤")]),_:1})])])])])]),m,e("div",p,[h,e("blockquote",null,[e("p",null,[e("a",_,[n("ubuntu20.04缺少libssl.so.1.0.0的解决方法"),s(d)])])])]),y,e("div",f,[x,e("p",null,[e("a",g,[n("Altas在Ubuntu系统上的安装部署步骤"),s(d)])])]),q])}const E=u(o,[["render",k],["__file","08mysql_info.html.vue"]]);export{E as default};
