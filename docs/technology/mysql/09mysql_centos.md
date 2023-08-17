---
title: 'Mysql8.0 centos stream 9 '
date: 2023-07-10
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


## Mysql 8.0 主从部署-读写分离
[这27个常见的MySQL服务器参数配置你得记住！ 参考](https://blog.csdn.net/Cairo_A/article/details/130629394)   
[主从配置参考](https://blog.csdn.net/u013618714/article/details/131558487)
### 主服务器 192.168.3.63 


1、创建一个同步账号 `db_sync` 
``` bash
mysql> create user 'db_sync'@'%' identified by 'db_sync@123';
Query OK, 0 rows affected (0.03 sec)

```
2、在主服务器上执行以下命令获取当前二进制日志文件的名称和位置
``` bash
show master status;
```
2.1 记录输出中的File和Position值，后续在从服务器上使用。
```bash
mysql> show master status;
+---------------+----------+--------------+------------------+-------------------+
| File          | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set |
+---------------+----------+--------------+------------------+-------------------+
| binlog.000002 |      879 |              |                  |                   |
+---------------+----------+--------------+------------------+-------------------+
1 row in set (0.00 sec)
```
3、配置主服务器 my.cnf 
```bash
cat  >> /etc/my.cnf <<EOF 
#服务器 id，随意，但要唯一
server-id = 1  
#二进制文件存放路径
log-bin = mysql-bin 
#参数用于排除自带的数据库。  
binlog-ignore-db = mysql 
binlog-ignore-db = information_schema
binlog-ignore-db = performance_schema
#二进制日志格式，建议使用ROW格式以获得更好的兼容性和可靠性。
binlog-format = ROW 
EOF
```
3.1 重启mysql 服务器，配置才能生效。
```bash
systemctl restart mysqld 
```

### 次服务器192.168.3.64
1、修改my.cnf配置 设置 server-id 不能重复。
```bash
cat >>/etc/my.cnf <<EOF
server-id = 2
#中继日志文件的名称，用于从主服务器接收二进制日志事件。
relay-log = mysql-relay-bin 
#从服务器的二进制日志文件的名称。
log_bin = mysql-bin 
#不同步相关的库
replicate-ignore-db = mysql 
replicate-ignore-db = information_schema
replicate-ignore-db = performance_schema
EOF 
```
重启mysql 服务器
``` bash
systemctl restart mysqld
```

2、登录 mysql  配置次服务参数 

``` bash
mysql> stop slave;
Query OK, 0 rows affected, 1 warning (0.01 sec)
## 配置主服务 信息
mysql> change master to  master_host = '192.168.3.63', master_user = 'db_sync', master_password = 'skceDB@123',master_log_file = 'binlog.000002', master_log_pos = 1341, get_master_public_key=1;
Query OK, 0 rows affected, 9 warnings (0.05 sec)

mysql> start slave;
Query OK, 0 rows affected, 1 warning (0.04 sec)


```
2.1 查询 同步状态
```bash
mysql> show slave status\G;
*************************** 1. row ***************************
               Slave_IO_State: 
                  Master_Host: 192.168.3.63
                  Master_User: db_sync
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: binlog.000002
          Read_Master_Log_Pos: 1341
               Relay_Log_File: localhost-relay-bin.000001
                Relay_Log_Pos: 4
        Relay_Master_Log_File: binlog.000002
             Slave_IO_Running: No
            Slave_SQL_Running: Yes
              Replicate_Do_DB: 
          Replicate_Ignore_DB: 
           Replicate_Do_Table: 
       Replicate_Ignore_Table: 
      Replicate_Wild_Do_Table: 
  Replicate_Wild_Ignore_Table: 
                   Last_Errno: 0
                   Last_Error: 
                 Skip_Counter: 0
          Exec_Master_Log_Pos: 1341
              Relay_Log_Space: 157
              Until_Condition: None
               Until_Log_File: 
                Until_Log_Pos: 0
           Master_SSL_Allowed: No
           Master_SSL_CA_File: 
           Master_SSL_CA_Path: 
              Master_SSL_Cert: 
            Master_SSL_Cipher: 
               Master_SSL_Key: 
        Seconds_Behind_Master: NULL
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: 13117
                Last_IO_Error: Fatal error: The slave I/O thread stops because master and slave have equal MySQL server ids; these ids must be different for replication to work (or the --replicate-same-server-id option must be used on slave but this does not always make sense; please check the manual before using it).
               Last_SQL_Errno: 0
               Last_SQL_Error: 
  Replicate_Ignore_Server_Ids: 
             Master_Server_Id: 1
                  Master_UUID: 
             Master_Info_File: mysql.slave_master_info
                    SQL_Delay: 0
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State: Replica has read all relay log; waiting for more updates
           Master_Retry_Count: 86400
                  Master_Bind: 
      Last_IO_Error_Timestamp: 230816 18:43:21
     Last_SQL_Error_Timestamp: 
               Master_SSL_Crl: 
           Master_SSL_Crlpath: 
           Retrieved_Gtid_Set: 
            Executed_Gtid_Set: 
                Auto_Position: 0
         Replicate_Rewrite_DB: 
                 Channel_Name: 
           Master_TLS_Version: 
       Master_public_key_path: 
        Get_master_public_key: 1
            Network_Namespace: 
1 row in set, 1 warning (0.00 sec)

ERROR: 
No query specified
```
结果失败了    
  ` Slave_IO_Running: No`   
  `Slave_SQL_Running: Yes`  
:::tip  Last_IO_Error
  Last_IO_Error: Fatal error: The slave I/O thread stops because master and slave have equal MySQL server ids; these ids must be different for replication to work (or the --replicate-same-server-id option must be used on slave but this does not always make sense; please check the manual before using it).
:::
什么意思呢，就是 server_id 重复了（这里不是server_uuid,也排查过uuid没有重复）  
主和从服务的server_id 的值相同的，证明一点，之前my.cnf配置server_id值没有生效。    
``` bash 
mysql> show variables like '%server_id%';     
+----------------+-------+
| Variable_name  | Value |
+----------------+-------+
| server_id      | 1     |
| server_id_bits | 32    |
+----------------+-------+
2 rows in set (0.01 sec)

```
使用脚本修改了之后，就可以。
```bash
mysql> set global server_id=2;
Query OK, 0 rows affected (0.00 sec)

mysql> show variables like '%server_id%';
+----------------+-------+
| Variable_name  | Value |
+----------------+-------+
| server_id      | 2     |
| server_id_bits | 32    |
+----------------+-------+
2 rows in set (0.00 sec)

mysql> stop slave ;
Query OK, 0 rows affected, 1 warning (0.01 sec)

mysql> start slave;
Query OK, 0 rows affected, 1 warning (0.04 sec)

mysql> show slave status\G;
*************************** 1. row ***************************
               Slave_IO_State: Waiting for source to send event
                  Master_Host: 192.168.3.63
                  Master_User: db_sync
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: binlog.000004
          Read_Master_Log_Pos: 157
               Relay_Log_File: localhost-relay-bin.000005
                Relay_Log_Pos: 367
        Relay_Master_Log_File: binlog.000004
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
              Replicate_Do_DB: 
          Replicate_Ignore_DB: 
           Replicate_Do_Table: 
       Replicate_Ignore_Table: 
      Replicate_Wild_Do_Table: 
  Replicate_Wild_Ignore_Table: 
                   Last_Errno: 0
                   Last_Error: 
                 Skip_Counter: 0
          Exec_Master_Log_Pos: 157
              Relay_Log_Space: 791
              Until_Condition: None
               Until_Log_File: 
                Until_Log_Pos: 0
           Master_SSL_Allowed: No
           Master_SSL_CA_File: 
           Master_SSL_CA_Path: 
              Master_SSL_Cert: 
            Master_SSL_Cipher: 
               Master_SSL_Key: 
        Seconds_Behind_Master: 0
Master_SSL_Verify_Server_Cert: No
                Last_IO_Errno: 0
                Last_IO_Error: 
               Last_SQL_Errno: 0
               Last_SQL_Error: 
  Replicate_Ignore_Server_Ids: 
             Master_Server_Id: 1
                  Master_UUID: 278d0d30-3b11-11ee-b4c3-080027790eb7
             Master_Info_File: mysql.slave_master_info
                    SQL_Delay: 0
          SQL_Remaining_Delay: NULL
      Slave_SQL_Running_State: Replica has read all relay log; waiting for more updates
           Master_Retry_Count: 86400
                  Master_Bind: 
      Last_IO_Error_Timestamp: 
     Last_SQL_Error_Timestamp: 
               Master_SSL_Crl: 
           Master_SSL_Crlpath: 
           Retrieved_Gtid_Set: 
            Executed_Gtid_Set: 
                Auto_Position: 0
         Replicate_Rewrite_DB: 
                 Channel_Name: 
           Master_TLS_Version: 
       Master_public_key_path: 
        Get_master_public_key: 1
            Network_Namespace: 
1 row in set, 1 warning (0.00 sec)

ERROR: 
No query specified

```

---
### 修改MySQLserver-id方法

::: tip mysql 同步异常
Fatal error: The slave I/O thread stops because master and slave have equal MySQL server ids; these ids must be different for replication to work (or the --replicate-same-server-id option must be used on slave but this does not always make sense; please check the manual before using it).
:::
解决方法   
修改MySQLserver-id方法如下：  
1、使用root用户登录MySQL数据库。   
2、运行以下命令查看MySQL当前的server-id的值：`show variables like  'server_id'   
3、运行以下命令修改MySQL的server-id值：`set global server_id=新的server-id值。   
4、再次运行`show variables like '%server_id%'。`验证MySQL的server-id是否已经修改成功   


## Mysql读写分离原理
条件  
>1、binlog   
>2、relaylog  
原理  
### Mysql读写分离分离异步同步模式  
默认为异步同步模式。   
异步同步模式会有缺陷，如果slave宕机，会导致数据不一致性风险。  
需要使用同步模式进行同步   
### Mysql读写分离分离半同步模式
条件  
>1、 `rpl_semi_sync_master`   (主服务器)   
>2、 `rpl_semi_sync_slave`  （次服务器）  

步骤：  
>1、先查询mysql是否可以安装版本
``` bash
mysql> select @@have_dynamic_loading;
+------------------------+
| @@have_dynamic_loading |
+------------------------+
| YES                    |
+------------------------+
1 row in set (0.00 sec)

```
显示查询结果为`YES` 可以安装   

>#### 2、在主服务器的Mysql中安装`rpl_semi_sync_master` 插件   
>在 192.168.3.63 服务器的mysql 安装
>>2.1 先在`master` 节点上安装 `rpl_semi_sync_master` 
```bash
mysql> install plugin rpl_semi_sync_master SONAME 'semisync_master.so';
Query OK, 0 rows affected, 1 warning (0.01 sec)
```
>>2.2 然后查询插件是否安装成功  

```bash
mysql> show variables like 'rpl_semi%';
+-------------------------------------------+------------+
| Variable_name                             | Value      |
+-------------------------------------------+------------+
| rpl_semi_sync_master_enabled              | OFF        |
| rpl_semi_sync_master_timeout              | 10000      |
| rpl_semi_sync_master_trace_level          | 32         |
| rpl_semi_sync_master_wait_for_slave_count | 1          |
| rpl_semi_sync_master_wait_no_slave        | ON         |
| rpl_semi_sync_master_wait_point           | AFTER_SYNC |
+-------------------------------------------+------------+
6 rows in set (0.00 sec)

```
>>2.3然后开启`master`复制
```bash
mysql> set global rpl_semi_sync_master_enabled=ON;
Query OK, 0 rows affected (0.00 sec)
```
>>2.4 然后查询
```bash 
mysql> show variables like 'rpl_semi%';
+-------------------------------------------+------------+
| Variable_name                             | Value      |
+-------------------------------------------+------------+
| rpl_semi_sync_master_enabled              | ON         |
| rpl_semi_sync_master_timeout              | 10000      |
| rpl_semi_sync_master_trace_level          | 32         |
| rpl_semi_sync_master_wait_for_slave_count | 1          |
| rpl_semi_sync_master_wait_no_slave        | ON         |
| rpl_semi_sync_master_wait_point           | AFTER_SYNC |
| rpl_semi_sync_slave_enabled               | ON         |
| rpl_semi_sync_slave_trace_level           | 32         |
+-------------------------------------------+------------+
8 rows in set (0.00 sec)
```
结果为`ON` 设置成功    

>#### 3、在次服务器的Mysql中安装`rpl_semi_sync_slave`插件  
>在 192.168.3.64 服务器的mysql 安装
>>3.1 先在`master` 节点上安装 `rpl_semi_sync_slave` 
```bash
mysql> install plugin rpl_semi_sync_slave SONAME 'semisync_slave.so';
Query OK, 0 rows affected, 1 warning (0.02 sec)
```
>>3.2 然后查询插件是否安装成功  
```bash
mysql> show global variables like 'rpl_semi%';
+---------------------------------+-------+
| Variable_name                   | Value |
+---------------------------------+-------+
| rpl_semi_sync_slave_enabled     | OFF   |
| rpl_semi_sync_slave_trace_level | 32    |
+---------------------------------+-------+
```

>>3.3 然后开启slaver复制   
```bash
mysql> set global rpl_semi_sync_slave_enabled=ON;
Query OK, 0 rows affected (0.01 sec)


```
>>3.4 查看是否设置成功，如`NO`成功。
```bash
mysql> show global variables like 'rpl_semi%';
+---------------------------------+-------+
| Variable_name                   | Value |
+---------------------------------+-------+
| rpl_semi_sync_slave_enabled     | ON    |
| rpl_semi_sync_slave_trace_level | 32    |
+---------------------------------+-------+
2 rows in set (0.01 sec)
```

>>3.5  然后开启半同步复制模式
```bash
mysql> stop slave io_thread;
Query OK, 0 rows affected, 1 warning (0.02 sec)

mysql> start slave io_thread;
Query OK, 0 rows affected, 1 warning (0.00 sec)

```

>>3.6 查询看slave 状态 是否成功 ,如 `Slave_IO_Running` 和 `Slave_SQL_Running`  为 `YES` ,表明设置成功。
``` bash 
mysql> show slave status\G;
*************************** 1. row ***************************
               Slave_IO_State: Waiting for source to send event
                  Master_Host: 192.168.3.63
                  Master_User: db_sync
                  Master_Port: 3306
                Connect_Retry: 60
              Master_Log_File: binlog.000004
          Read_Master_Log_Pos: 1492
               Relay_Log_File: localhost-relay-bin.000003
                Relay_Log_Pos: 323
        Relay_Master_Log_File: binlog.000004
             Slave_IO_Running: Yes
            Slave_SQL_Running: Yes
            ....
```

