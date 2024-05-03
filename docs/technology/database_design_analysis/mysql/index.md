---
title: 'Mysql 基础'
date: 2023-07-10
tags:
- 'mysql'
- '数据库'
categories:
- '技术'
---

## 目录
[[toc]]
::: tip 环境安装
>*  mysql: ubunto 20. 安装 mysql 8.0
>* 安装：
```
sudo apt install mysql-server
```
:::

##   一、 Mysql 密码重置
>* 1、 跳过验证，修改密码,找安装配置文件“mysqld.cnf” , 在配置中添加 “skip-grant-tables”
```
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf 
```
![Alt text](/images/mysql/ae0d4f5761a76527da2438c614e91f17.png)
>* 2、重启服务
```
sudo service mysql restart 
```
>* 3、使用 root 用户,密码直接按回车键登录即可。
```
sudo mysql -u root -p
```
>* 4、重置root用户密码为空
```
update user set authentication_string='' where user='root'
# 修改其密码格式
update user set plugin='mysql_native_password' where user='root'; 
# 查询其用户
select host,user,plugin,authentication_string from user;
# 刷新权限
flush privileges;



```
>* 5、设置密码长度
::: tip 参考
[mysql 更改密码设置强度](https://www.cnblogs.com/wjs2019/p/14963752.html)
```
//查看
SHOW VARIABLES LIKE 'validate_password%';
//设置密码长度
set global validate_password.policy=LOW; 

```
>* 6、修改配置“mysqld.cnf”，注释掉“skip-grant-tables”，重新登录mysql,然后再执行“修改密码”语句
```
use mysql ; // 数据库
select host,user from user where user = 'root'; //查表 
update user set plugin='mysql_native_password' where user='root';  //修改密码的格式
flush privileges; //刷新权限
alter user 'root'@'%' identified by 'skceDBd010993.';
```
>* 7、设置 host 
::: tip 参考 远程连接失败
[远程连接失败](https://blog.csdn.net/Pluton_1/article/details/128107753)
![Alt text](/images/mysql/image00.png)
>* mysql 的数据配置文件(sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf) bind-address = 127.0.0.1 导致，修改为0.0.0.0 ok. 
>> 查询用户的密格式 
update user set plugin='mysql_native_password' where user='root'; 

:::
```
use mysql
select host,user from user where user = 'root'; //查表 
select host,user,authentication_string,plugin from user where user = 'root';
update user set Host='%' where User='root'; //设置 host
```
## 二、Mysql-8.0.16 mysql.infoschema 不存在问题
::: tip 参考
    The user specified as a definer ('mysql.infoschema'@'localhost') does not exist
   [Mysql-8.0.16 mysql.infoschema 不存在问题](https://www.codenong.com/jsf2c381991309/)
:::

## 三、mysql 接口编程 需要安装的 包
::: tip 参考
[ubuntu mysql 怎么看安装成功](https://zhidao.baidu.com/question/373299024207919004.html)
:::
```
ubuntu上安装MySQL非常简单只需要几条命令就可以完成。

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
```

