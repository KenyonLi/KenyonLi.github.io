---
title: 'MySQL集群篇'
date: 2023-07-10
tags:
- 'mysql'
- '数据库'
categories:
- '技术'

# NavLink - 外部 URL
prev:
  text: MySQL分库分表
  link: /technology/database_design_analysis/mysql/07mysql_info.md

#next:
 # text: InnoDB锁
  #link: /technology/mysql/InnoDB_lock.md
---
## 目录
[[toc]]
## 一、MySQL集群篇
::: tip 参考
> [08.MySQL集群篇](/file/mysql/08.MySQL集群篇.pdf)
:::
<embed id="pdfPlayer" src="/file/mysql/08.MySQL集群篇.pdf" type="application/pdf" width="100%" height="700" >


##二、环境配置
### ubuntu20.04 缺少libssl.so.1.0.0的解决方法
::: tip 参考
>[ubuntu20.04缺少libssl.so.1.0.0的解决方法](https://blog.csdn.net/m0_38086244/article/details/121512894)
:::
```
sudo wget http://security.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.0.0_1.0.2g-1ubuntu4.20_amd64.deb
sudo dpkg -i libssl1.0.0_1.0.2g-1ubuntu4.20_amd64.deb
```
### ubuntu20.04 安装 Altas在Ubuntu系统上的安装部署步骤

::: tip 参考
[Altas在Ubuntu系统上的安装部署步骤](https://blog.51cto.com/webseven/1746368)
:::

```
1.下载安装:

sudo wget https://github.com/Qihoo360/Atlas/releases/download/2.2/Atlas-2.2-debian7.0-x86_64.deb

sudo dpkg   --instdir=/srv/Altas-2.2 -i Atlas-2.2-debian7.0-x86_64.deb

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

root@ebj-rd-02:/usr/local/mysql-proxy/bin# netstat -tnlp|grep 234

tcp        0      0 0.0.0.0:1234            0.0.0.0:*               LISTEN      14247/mysql-proxy

tcp        0      0 0.0.0.0:2345            0.0.0.0:*               LISTEN      14247/mysql-proxy

5）.登录管理端:

mysql -h127.0.0.1 -P2345 -uuser -ppwd，进入后执行:select * from help;查看管理DB的各类命令

6）.登录客户端:
mysql -h127.0.0.1 -P1234 -u用户名 -p密码，如果能连上则证明Atlas初步测试正常，可以再尝试发几条SQL语句看看执行结果是否正确

```


