---
title: 'Mysql8.0 master/slaver'
date: 2023-08-17
tags:
- 'mysql'
- '数据库'
categories:
- '技术'
---

## 目录
[[toc]]

## Mysql 8.0 主从部署-读写分离
[这27个常见的MySQL服务器参数配置你得记住！ 参考](https://blog.csdn.net/Cairo_A/article/details/130629394)   
[主从配置参考](https://blog.csdn.net/u013618714/article/details/131558487)
[MySQL异步复制架构中传统复制的原理阐述](https://www.likecs.com/show-203959282.html)

## 基于二进制日志文件位置 
### 主服务器 192.168.3.63 


1、创建一个同步账号 `db_sync` 
``` bash
mysql> create user 'db_sync'@'%' identified by 'db_sync@123';
Query OK, 0 rows affected (0.03 sec)
#授权  
mysql> grant replication slave on *.*to 'db_sync'@'%';
Query OK, 0 rows affected (0.01 sec)
#刷权限 
ysql> flush privileges;
Query OK, 0 rows affected (0.01 sec)

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
3、配置主服务器 mysql-server.cnf
```bash
cat  >> /etc/my.cnf.d/mysql-server.cnf <<EOF 
#服务器 id，随意，但要唯一
server-id = 1  
#binlog刷盘策略
sync_binlog=1
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
1、修改 `mysql-server.cnf` 配置 设置 `server-id` 不能重复。
```bash
cat >>/etc/my.cnf.d/mysql-server.cnf <<EOF
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
# 重置所有的复制关系。
mysql> reset slave all;
Query OK, 0 rows affected
Time: 0.056s

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
主和从服务的server_id 的值相同的，证明一点，之前my.cnf配置server_id值没有生效, 需要在`mysql-server.cnf` 配置 才行。
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

##### 注意：重启mysql 数据库后，这些配置都失效，如果需要持久，需要配置到my.cnf文件中。


### Mysql读写分离原理
条件  
>1、binlog   
>2、relaylog  
![Alt text](/images/mysql/10mysql_write_read/mysql_write_read_0001.png)
### 主从复制   
主从复制（Master-Slave Replication）是一种常见的数据库复制技术，用于在多个数据库服务器之间实现数据的同步复制。在主从复制中，一个数据库服务器充当主服务器（Master），负责接收和处理所有的写操作，而其他的数据库服务器充当从服务器（Slave），负责接收和执行主服务器上的写操作所生成的日志，从而实现数据的同步复制。   

主从复制的工作流程大致如下：   

主服务器接收到写操作后，将其记录到二进制日志（Binary Log）中。   
从服务器定期连接主服务器，并请求获取主服务器上的二进制日志。   
主服务器将二进制日志发送给从服务器，并将其应用到从服务器上，使得从服务器上的数据与主服务器保持一致。   
当主服务器出现故障或者网络中断时，从服务器可以接管主服务器的角色，成为新的主服务器，从而保证系统的高可用性和容错性。   
通过主从复制，可以实现以下好处：   

提高系统的可扩展性和读写分离能力：读操作可以分摊到多个从服务器上进行处理，从而提高系统的并发能力。   
提高系统的可用性和容错性：当主服务器出现故障时，可以快速切换到从服务器上继续提供服务。   
数据备份：从服务器上存储了主服务器上的所有数据，可以作为主服务器数据的备份，以防止数据丢失。   
需要注意的是，主从复制并不能保证数据的强一致性，只能保证数据的最终一致性。在主从复制环境下，主服务器上的写操作会异步地传播到从服务器上，存在一定的延迟。因此，在读操作之后进行写操作时，可能会读取到旧数据。如果需要实现强一致性，可以考虑其他的复制技术，如主主复制（Master-Master Replication）或者分布式事务等。   


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
 
 ###  Slave_IO_Running: NO 失败原因：

Slave_io_running 如果为no或者connecting

- 关闭防火墙

- 主从Server_id一致

- 数据库目录(data)目录下 auto.cnf一致

- 主服务器mysql权限

- 复制账户用户名或密码错误

- 网络不通

- Mysql8中存在：创建用户时密码加密规则。

### Slave_SQL_RUNNING如果为NO

- 表示主服务器二进制名称不对或者读取数据便宜位置不对

解决方式：从新导入SQL文件，并且准确记录MASTER_LOG_FILE与MASTER_LOG_POS的值



## 基于GTID 实现主从部署实现读写分离
### 什么是GTID同步  
   GTID是一种全局事务ID，它是在master上已经提交的事务，slave直接根据该ID进行复制操作。该操作替代了binary log + postion的方式。使得主从复制的配置操作更加简单。   
> 该模式需要MySQL>=5.6版本。   
GTID（Global Transaction Identifier）是MySQL数据库中用于标识全局事务的唯一标识符。它是在MySQL 5.6版本中引入的一项重要特性。   

在传统的复制环境中，MySQL使用二进制日志文件和位置（Binary Log File and Position）来标识主从复制中的事务。然而，当涉及到主从切换、故障恢复或者拓扑结构变更时，使用二进制日志文件和位置来定位事务变得复杂而困难。   

GTID通过引入全局唯一的事务标识符，解决了传统复制环境中的一些问题。每个事务都会被分配一个全局唯一的GTID，无论它在哪个数据库服务器上执行。GTID由两部分组成：源ID和事务ID。源ID标识数据库服务器，事务ID则标识特定的事务。   

使用GTID的主要优势包括：  

简化主从切换：当需要进行主从切换时，无需手动记录和配置二进制日志文件和位置，而只需基于GTID进行配置。  
简化故障恢复：在发生故障后，可以根据GTID来确定故障前后的数据一致性，简化故障恢复过程。  
简化拓扑结构变更：当需要进行拓扑结构变更时，使用GTID可以更轻松地进行配置和管理。  
要启用GTID，需要在MySQL配置文件中进行相应的设置，并在主服务器和从服务器上进行配置和同步。一旦启用了GTID，它将成为主从复制中事务标识的主要方式。 

需要注意的是，GTID并不是适用于所有场景的解决方案。在某些特定的情况下，如异构复制、多主复制或者特殊的拓扑结构等，可能需要考虑其他的复制技术或方案。  

### GTID组成部分
GTID = server-id + transaction-id组成。server-id不是MySQL配置文件中id，而是每一个MySQL服务在启动时，都会生成一个全局随机唯一的ID。transaction-id则是事务的ID，创建事务是会自动生成一个ID。   

### 配置流程   
1、 master的配置文件增加如下配置。  
``` bash
server_id               = 1
log_bin                 = ON
binlog_format           = ROW
gtid_mode				= ON
enforce_gtid_consistency = ON

``` 
2、slave的配置文件增加如下配置。   
```bash 
server_id               = 2
log_bin                 = mysql-bin
binlog_format           = ROW
gtid_mode				= ON
enforce_gtid_consistency = ON
log_slave_updates		= ON

```
3、配置好之后，一定记得重启master和salve服务。重启好之后，登录master，使用show master status;查看一下GTID。会看到如下的信息。  

```bash
mysql> show master status;
+-----------+----------+--------------+------------------+------------------------------------------+
| File      | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set                        |
+-----------+----------+--------------+------------------+------------------------------------------+
| ON.000005 | 729      |              |                  | a9cf78c4-257f-13eb-94e0-0242ac120007:1-2 |
+-----------+----------+--------------+------------------+------------------------------------------+
1 row in set
Time: 0.011s

```
4、slave服务建立连接关系。下面的操作都是在slave节点进行。
```bash 
# 重置所有的复制关系。
mysql> reset slave all;
Query OK, 0 rows affected
Time: 0.056s


# 查看主从复制状态，发现没有任何信息了，则表示重置成功了。
mysql> show slave status\G;
0 rows in set
Time: 0.005s


# 设置master信息。
change master to master_host='192.168.3.63',master_port=3306,master_user='db_sync',master_password='skceDB@123',master_auto_position=1;
Query OK, 0 rows affected
Time: 0.048s


# 启动复制。
start slave;
mysql> start slave;
Query OK, 0 rows affected
Time: 0.007s


# 查看复制状态。
mysql> stop slave io_thread;
***************************[ 1. row ]***************************
Slave_IO_State                | Waiting for master to send event
Master_Host                   | 192.168.3.63
Master_User                   | slave_user
Master_Port                   | 3306
Connect_Retry                 | 60
Master_Log_File               | ON.000005
Read_Master_Log_Pos           | 729
Relay_Log_File                | aa7863c59748-relay-bin.000002
Relay_Log_Pos                 | 928
Relay_Master_Log_File         | ON.000005
Slave_IO_Running              | Yes
Slave_SQL_Running             | Yes
Replicate_Do_DB               |
..........
```
5、需要测试结果，可以直接在master插入数据，看slave数据是否已经发生变化  



## Mysql8.0日志
[mysql8.0-日志 参考](https://blog.csdn.net/weixin_58297531/article/details/129208179)   
1、开启查询日志    
``` bash
mysql> show variables like '%general_log%';
+------------------+------------------------------+
| Variable_name    | Value                        |
+------------------+------------------------------+
| general_log      | OFF                          |
| general_log_file | /var/lib/mysql/localhost.log |
+------------------+------------------------------+
2 rows in set (0.01 sec)

mysql> set global general_log=ON;
Query OK, 0 rows affected (0.01 sec)

mysql> show variables like '%general_log%';
+------------------+------------------------------+
| Variable_name    | Value                        |
+------------------+------------------------------+
| general_log      | ON                           |
| general_log_file | /var/lib/mysql/localhost.log |
+------------------+------------------------------+
2 rows in set (0.01 sec)
```

2、重启mysql 数据库
``` bash
systemctl restart mysqld
```