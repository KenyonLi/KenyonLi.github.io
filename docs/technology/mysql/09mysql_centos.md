---
title: 'Mysql8.0 centos stream 9 '
date: 2023-08-17
tags:
- 'mysql'
- '数据库'
categories:
- '技术'
---

## 目录
[[toc]]

## CentOS stream 9 安装MySQL8
   [参考](https://blog.csdn.net/moli_Y/article/details/127895970)
::: tip 环境安装
>*  mysql: centos stream 9  安装 mysql 8.0
>* 1、 yum 安装：
```
yum install mysql-server
```
>* 2、 下载包 安装
[下载地址：mysql-8.0.31-1.el9.x86_64.rpm-bundle.tar](https://cdn.mysql.com//Downloads/MySQL-8.0/mysql-8.0.31-1.el9.x86_64.rpm-bundle.tar)   
解压文件  
```bash
 tar -xvf mysql-8.0.31-1.el9.x86_64.rpm-bundle.tar
```

`安装`
>* 需要注意按照对应顺序安装
```bash
rpm -ivh mysql-community-common-8.0.31-1.el9.x86_64.rpm
rpm -ivh mysql-community-libs-8.0.31-1.el9.x86_64.rpm --nodeps --force
rpm -ivh mysql-community-client-8.0.31-1.el9.x86_64.rpm --nodeps --force
rpm -ivh mysql-community-server-8.0.31-1.el9.x86_64.rpm --nodeps --force 
```
>* 检查安装  
```bash
[root@localhost ~]# rpm -qa | grep mysql
mysql-common-8.0.32-1.el9.x86_64
mysql-8.0.32-1.el9.x86_64
mysql-selinux-1.0.5-1.el9.noarch
mysql-errmsg-8.0.32-1.el9.x86_64
mysql-server-8.0.32-1.el9.x86_64

```
:::


>### 初始化mysqld 
```bash
[root@localhost]~# mysqld --initialize

# 修改表名，忽略大小配置 lower_case_table_names=1 
mysqld --user=mysql --lower_case_table_names=1 --initialize-insecure
```

>### 启动mysql 数据库

``` bash 
[root@localhost]~# systemctl start mysqld.service
Job for mysqld.service failed because the control process exited with error code.
See "systemctl status mysqld.service" and "journalctl -xeu mysqld.service" for details.
```
* 注意，这里启动时报异常了，查看状态结果

``` bash
[root@localhost]~# systemctl status mysqld.service
× mysqld.service - MySQL 8.0 database server
     Loaded: loaded (/usr/lib/systemd/system/mysqld.service; disabled; preset: disabled)
     Active: failed (Result: exit-code) since Tue 2023-08-15 10:03:12 CST; 41s ago
    Process: 34490 ExecStartPre=/usr/libexec/mysql-check-socket (code=exited, status=0/SUCCESS)
    Process: 34512 ExecStartPre=/usr/libexec/mysql-prepare-db-dir mysqld.service (code=exited, status=0/SUCCESS)
    Process: 34546 ExecStart=/usr/libexec/mysqld --basedir=/usr (code=exited, status=1/FAILURE)
    Process: 34547 ExecStopPost=/usr/libexec/mysql-wait-stop (code=exited, status=0/SUCCESS)
   Main PID: 34546 (code=exited, status=1/FAILURE)
     Status: "Server shutdown complete"
      Error: 13 (权限不够)
        CPU: 430ms
8月 15 10:03:11 localhost.localdomain systemd[1]: Starting MySQL 8.0 database server...
8月 15 10:03:12 localhost.localdomain systemd[1]: mysqld.service: Main process exited, code=exited, status=1/FAILURE
8月 15 10:03:12 localhost.localdomain systemd[1]: mysqld.service: Failed with result 'exit-code'.
8月 15 10:03:12 localhost.localdomain systemd[1]: Failed to start MySQL 8.0 database server.

```
* 这里提示 `/var/lib/mysql`

``` bash

[root@localhost]~# cd /var/lib/mysql
[root@localhost]/var/lib/mysql# ll
总用量 78268
-rw-r-----. 1 root  root        56  8月 15 10:02  auto.cnf
-rw-r-----. 1 mysql mysql        0  8月 15 10:03  binlog.index
-rw-------. 1 root  root      1709  8月 15 10:02  ca-key.pem
-rw-r--r--. 1 root  root      1112  8月 15 10:02  ca.pem
-rw-r--r--. 1 root  root      1112  8月 15 10:02  client-cert.pem
-rw-------. 1 root  root      1705  8月 15 10:02  client-key.pem
-rw-r-----. 1 root  root    196608  8月 15 10:02 '#ib_16384_0.dblwr'
-rw-r-----. 1 root  root   8585216  8月 15 10:02 '#ib_16384_1.dblwr'
-rw-r-----. 1 root  root      5618  8月 15 10:02  ib_buffer_pool
-rw-r-----. 1 root  root  12582912  8月 15 10:02  ibdata1
drwxr-x---. 2 root  root      4096  8月 15 10:02 '#innodb_redo'
drwxr-x---. 2 root  root         6  8月 15 10:02 '#innodb_temp'
drwxr-x---. 2 root  root       143  8月 15 10:02  mysql
-rw-r-----. 1 root  root  25165824  8月 15 10:02  mysql.ibd
drwxr-x---. 2 root  root      8192  8月 15 10:02  performance_schema
-rw-------. 1 root  root      1705  8月 15 10:02  private_key.pem
-rw-r--r--. 1 root  root       452  8月 15 10:02  public_key.pem
-rw-r--r--. 1 root  root      1112  8月 15 10:02  server-cert.pem
-rw-------. 1 root  root      1705  8月 15 10:02  server-key.pem
drwxr-x---. 2 root  root        28  8月 15 10:02  sys
-rw-r-----. 1 root  root  16777216  8月 15 10:02  undo_001
-rw-r-----. 1 root  root  16777216  8月 15 10:02  undo_002

```

* 查看`/var/lib/mysql`目录，发现有的文件时`root`权限,有的是`mysql`权限。  
### 修改权限

``` bash 
[root@localhost mysql]# chown  -R mysql:mysql /var/lib/mysql
[root@localhost mysql]# ll
总用量 78268
-rw-r-----. 1 mysql mysql       56  8月 15 10:02  auto.cnf
-rw-r-----. 1 mysql mysql        0  8月 15 10:03  binlog.index
-rw-------. 1 mysql mysql     1709  8月 15 10:02  ca-key.pem
-rw-r--r--. 1 mysql mysql     1112  8月 15 10:02  ca.pem
-rw-r--r--. 1 mysql mysql     1112  8月 15 10:02  client-cert.pem
-rw-------. 1 mysql mysql     1705  8月 15 10:02  client-key.pem
-rw-r-----. 1 mysql mysql   196608  8月 15 10:02 '#ib_16384_0.dblwr'
-rw-r-----. 1 mysql mysql  8585216  8月 15 10:02 '#ib_16384_1.dblwr'
-rw-r-----. 1 mysql mysql     5618  8月 15 10:02  ib_buffer_pool
-rw-r-----. 1 mysql mysql 12582912  8月 15 10:02  ibdata1
drwxr-x---. 2 mysql mysql     4096  8月 15 10:02 '#innodb_redo'
drwxr-x---. 2 mysql mysql        6  8月 15 10:02 '#innodb_temp'
drwxr-x---. 2 mysql mysql      143  8月 15 10:02  mysql
-rw-r-----. 1 mysql mysql 25165824  8月 15 10:02  mysql.ibd
drwxr-x---. 2 mysql mysql     8192  8月 15 10:02  performance_schema
-rw-------. 1 mysql mysql     1705  8月 15 10:02  private_key.pem
-rw-r--r--. 1 mysql mysql      452  8月 15 10:02  public_key.pem
-rw-r--r--. 1 mysql mysql     1112  8月 15 10:02  server-cert.pem
-rw-------. 1 mysql mysql     1705  8月 15 10:02  server-key.pem
drwxr-x---. 2 mysql mysql       28  8月 15 10:02  sys
-rw-r-----. 1 mysql mysql 16777216  8月 15 10:02  undo_001
-rw-r-----. 1 mysql mysql 16777216  8月 15 10:02  undo_002
```


```bash
[root@localhost mysql]# chmod -R 777 /var/lib/mysql
[root@localhost mysql]# ll
总用量 78268
-rwxrwxrwx. 1 mysql mysql       56  8月 15 10:02  auto.cnf
-rwxrwxrwx. 1 mysql mysql        0  8月 15 10:03  binlog.index
-rwxrwxrwx. 1 mysql mysql     1709  8月 15 10:02  ca-key.pem
-rwxrwxrwx. 1 mysql mysql     1112  8月 15 10:02  ca.pem
-rwxrwxrwx. 1 mysql mysql     1112  8月 15 10:02  client-cert.pem
-rwxrwxrwx. 1 mysql mysql     1705  8月 15 10:02  client-key.pem
-rwxrwxrwx. 1 mysql mysql   196608  8月 15 10:02 '#ib_16384_0.dblwr'
-rwxrwxrwx. 1 mysql mysql  8585216  8月 15 10:02 '#ib_16384_1.dblwr'
-rwxrwxrwx. 1 mysql mysql     5618  8月 15 10:02  ib_buffer_pool
-rwxrwxrwx. 1 mysql mysql 12582912  8月 15 10:02  ibdata1
drwxrwxrwx. 2 mysql mysql     4096  8月 15 10:02 '#innodb_redo'
drwxrwxrwx. 2 mysql mysql        6  8月 15 10:02 '#innodb_temp'
drwxrwxrwx. 2 mysql mysql      143  8月 15 10:02  mysql
-rwxrwxrwx. 1 mysql mysql 25165824  8月 15 10:02  mysql.ibd
drwxrwxrwx. 2 mysql mysql     8192  8月 15 10:02  performance_schema
-rwxrwxrwx. 1 mysql mysql     1705  8月 15 10:02  private_key.pem
-rwxrwxrwx. 1 mysql mysql      452  8月 15 10:02  public_key.pem
-rwxrwxrwx. 1 mysql mysql     1112  8月 15 10:02  server-cert.pem
-rwxrwxrwx. 1 mysql mysql     1705  8月 15 10:02  server-key.pem
drwxrwxrwx. 2 mysql mysql       28  8月 15 10:02  sys
-rwxrwxrwx. 1 mysql mysql 16777216  8月 15 10:02  undo_001
-rwxrwxrwx. 1 mysql mysql 16777216  8月 15 10:02  undo_002
```

### 启动mysql 
``` bash 
[root@localhost mysql]# systemctl start  mysqld.service
[root@localhost mysql]# ps -ef | grep mysql
mysql      34713       1  1 10:12 ?        00:00:01 /usr/libexec/mysqld --basedir=/usr
root       34780   34576  0 10:13 pts/1    00:00:00 grep --color=auto mysql
```

### 查看临时密码
``` bash
[root@localhost mysql]# cat /var/log/mysql/mysqld.log  | grep password
2023-08-15T02:02:21.206804Z 6 [Note] [MY-010454] [Server] A temporary password is generated for root@localhost: RkaAA8<qp3Tu
[root@localhost mysql]# mysql -uroot -p'RkaAA8<qp3Tu'
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.32

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> select host,user,plugin,authentication_string from user;
ERROR 1046 (3D000): No database selected
mysql> use mysql;
No connection. Trying to reconnect...
Connection id:    9
Current database: *** NONE ***

ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.
mysql> show databases;

```

### 修改密码
``` bash
mysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123433356';
Query OK, 0 rows affected (0.01 sec)

```
### 远程访问 

```bash
mysql> create user 'root'@'%' identified with mysql_native_password by '123433356';
Query OK, 0 rows affected (0.03 sec)
mysql> grant all privileges on *.* to 'root'@'%' with grant option;
Query OK, 0 rows affected (0.01 sec)
mysql> flush privileges;
Query OK, 0 rows affected (0.01 sec)
```

### 关闭防火墙
```bash
 systemctl stop firewalld
```
### 终端远程
![Alt text](/images/mysql/09mysql_centos001.png)

