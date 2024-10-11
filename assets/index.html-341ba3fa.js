import{_ as r,r as d,o,c,a as e,b as l,w as t,d as s,e as a}from"./app-c1c3c937.js";const u="/images/mysql/ae0d4f5761a76527da2438c614e91f17.png",m="/images/mysql/image00.png",v={},b=e("h2",{id:"目录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),h={class:"table-of-contents"},p=a(`<div class="custom-container tip"><p class="custom-container-title">环境安装</p><blockquote><ul><li>mysql: ubunto 20. 安装 mysql 8.0</li><li>安装：</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt install mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><h2 id="一、-mysql-密码重置" tabindex="-1"><a class="header-anchor" href="#一、-mysql-密码重置" aria-hidden="true">#</a> 一、 Mysql 密码重置</h2><blockquote><ul><li>1、 跳过验证，修改密码,找安装配置文件“mysqld.cnf” , 在配置中添加 “skip-grant-tables”</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+u+`" alt="Alt text"></p><blockquote><ul><li>2、重启服务</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo service mysql restart 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>3、使用 root 用户,密码直接按回车键登录即可。</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ul><li>4、重置root用户密码为空</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>update user set authentication_string=&#39;&#39; where user=&#39;root&#39;
# 修改其密码格式
update user set plugin=&#39;mysql_native_password&#39; where user=&#39;root&#39;; 
# 查询其用户
select host,user,plugin,authentication_string from user;
# 刷新权限
flush privileges;



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>5、设置密码长度</li></ul></blockquote>`,12),_={class:"custom-container tip"},q=e("p",{class:"custom-container-title"},"参考",-1),g={href:"https://www.cnblogs.com/wjs2019/p/14963752.html",target:"_blank",rel:"noopener noreferrer"},y=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//查看
SHOW VARIABLES LIKE &#39;validate_password%&#39;;
//设置密码长度
set global validate_password.policy=LOW; 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>6、修改配置“mysqld.cnf”，注释掉“skip-grant-tables”，重新登录mysql,然后再执行“修改密码”语句</li></ul></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use mysql ; // 数据库
select host,user from user where user = &#39;root&#39;; //查表 
update user set plugin=&#39;mysql_native_password&#39; where user=&#39;root&#39;;  //修改密码的格式
flush privileges; //刷新权限
alter user &#39;root&#39;@&#39;%&#39; identified by &#39;skceDBd010993.&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><ul><li>7、设置 host</li></ul></blockquote>`,4),x={class:"custom-container tip"},f=e("p",{class:"custom-container-title"},"参考 远程连接失败",-1),k={href:"https://blog.csdn.net/Pluton_1/article/details/128107753",target:"_blank",rel:"noopener noreferrer"},w=e("img",{src:m,alt:"Alt text"},null,-1),L=e("blockquote",null,[e("ul",null,[e("li",null,"mysql 的数据配置文件(sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf) bind-address = 127.0.0.1 导致，修改为0.0.0.0 ok.")]),e("blockquote",null,[e("p",null,"查询用户的密格式 update user set plugin='mysql_native_password' where user='root';")])],-1),M=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>use mysql
select host,user from user where user = &#39;root&#39;; //查表 
select host,user,authentication_string,plugin from user where user = &#39;root&#39;;
update user set Host=&#39;%&#39; where User=&#39;root&#39;; //设置 host
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、mysql-8-0-16-mysql-infoschema-不存在问题" tabindex="-1"><a class="header-anchor" href="#二、mysql-8-0-16-mysql-infoschema-不存在问题" aria-hidden="true">#</a> 二、Mysql-8.0.16 mysql.infoschema 不存在问题</h2>`,2),B={class:"custom-container tip"},E=e("p",{class:"custom-container-title"},"参考",-1),V=e("pre",null,[e("code",null,`The user specified as a definer ('mysql.infoschema'@'localhost') does not exist
`)],-1),A={href:"https://www.codenong.com/jsf2c381991309/",target:"_blank",rel:"noopener noreferrer"},I=e("h2",{id:"三、mysql-接口编程-需要安装的-包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#三、mysql-接口编程-需要安装的-包","aria-hidden":"true"},"#"),s(" 三、mysql 接口编程 需要安装的 包")],-1),N={class:"custom-container tip"},S=e("p",{class:"custom-container-title"},"参考",-1),j={href:"https://zhidao.baidu.com/question/373299024207919004.html",target:"_blank",rel:"noopener noreferrer"},C=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ubuntu上安装MySQL非常简单只需要几条命令就可以完成。

　　1. sudo apt-get install mysql-server

　　2. sudo apt-get isntall mysql-client

　　3. sudo apt-get install libmysqlclient-dev

　　安装过程中会提示设置密码什么的，注意设置了不要忘了，安装完成之后可以使用如下命令来检查是否安装成功：

　　sudo netstat -tap | grep mysql

　　通过上述命令检查之后，如果看到有mysql 的socket处于 listen 状态则表示安装成功。

　　登陆mysql数据库可以通过如下命令：

　　mysql -u root -p

　　-u 表示选择登陆的用户名， -p 表示登陆的用户密码，上面命令输入之后会提示输入密码，此时输入密码就可以登录到mysql。

　　

　　然后通过 show databases; 就可以查看当前的数据库。
　　我们选择 mysql数据库就行下一步操作，使用use mysql 命令，显示当前数据库的表单：show tables
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function H(O,T){const n=d("router-link"),i=d("ExternalLinkIcon");return o(),c("div",null,[b,e("nav",h,[e("ul",null,[e("li",null,[l(n,{to:"#目录"},{default:t(()=>[s("目录")]),_:1})]),e("li",null,[l(n,{to:"#一、-mysql-密码重置"},{default:t(()=>[s("一、 Mysql 密码重置")]),_:1})]),e("li",null,[l(n,{to:"#二、mysql-8-0-16-mysql-infoschema-不存在问题"},{default:t(()=>[s("二、Mysql-8.0.16 mysql.infoschema 不存在问题")]),_:1})]),e("li",null,[l(n,{to:"#三、mysql-接口编程-需要安装的-包"},{default:t(()=>[s("三、mysql 接口编程 需要安装的 包")]),_:1})])])]),p,e("div",_,[q,e("p",null,[e("a",g,[s("mysql 更改密码设置强度"),l(i)])]),y,e("div",x,[f,e("p",null,[e("a",k,[s("远程连接失败"),l(i)]),w]),L])]),M,e("div",B,[E,V,e("p",null,[e("a",A,[s("Mysql-8.0.16 mysql.infoschema 不存在问题"),l(i)])])]),I,e("div",N,[S,e("p",null,[e("a",j,[s("ubuntu mysql 怎么看安装成功"),l(i)])])]),C])}const z=r(v,[["render",H],["__file","index.html.vue"]]);export{z as default};
