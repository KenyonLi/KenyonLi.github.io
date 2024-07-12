# Mysql 性能优化

## 思路

​      1、开启慢查询日志功能

       
# 查看 mysql 是否 开启 慢查询日志
show variables  like '%slow_query%';
# 查看 设置慢查询日志的抓取时间
show variables like '%long_query_time%'



工具

mysqldumpslow -s t -t 10 -g "left join" ./VM-20-13-ubuntu-slow.log 


explain select * from t1 where aa = (select aa from t2 where bb =(select bb from t3 where cc =3));

explain select * from t1 join t2 on t1.aa= t2.`aa` where t1.`bb` = (select bb from t3 where t3.`cc`=3);


explain select * from t1 union select * from t2

explain select * from t1 where aa in(select aa from t2 union select aa from t3)

explain select * from (select * from t1) t


select VERSION();


explain select * from (select * from t1 where aa=1) t

explain select * from tuser a   join tuser b on a.name =b.name  

explain select * from tuser where id > 1

explain select * from tuser where  id in (16,20)



explain select name from tuser;

-- 


explain select * from t_multiple_index where a > 1 and b>1 and c = 'c'


explain select `address` from  tuser   order by address	;

explain select name from tuser group by  name


explain select * from tuser where id = 1 and id = 2



explain select * from  `tuser` where  address = '上海'  limit 1


explain select * from (select * from `t1_test` where aa >100000 and aa <100050 order by aa ) t limit 0,20

         ```



## mysqldumpslow 工具 使用说明

 ``` text
  --verbose    详细输出
  --debug      调试模式
  --help       将此帮助文本写入标准输出

  -v           详细输出
  -d           调试模式
  -s ORDER     按顺序排序 (al, at, ar, c, l, r, t)，默认是 'at'
                al: 平均锁定时间
                ar: 平均发送行数
                at: 平均查询时间
                 c: 计数
                 l: 锁定时间
                 r: 发送行数
                 t: 查询时间  
  -r           反转排序顺序（最大值在最后而不是在前）
  -t NUM       仅显示前 n 条查询
  -a           不将所有数字抽象为 N，将所有字符串抽象为 'S'
  -n NUM       抽象名称中至少包含 n 位数字的数字
  -g PATTERN   grep: 仅考虑包含此字符串的语句
  -h HOSTNAME  数据库服务器的主机名，用于 *-slow.log 文件名（可以使用通配符），默认是 '*', 即匹配所有
  -i NAME      服务器实例的名称（如果使用 mysql.server 启动脚本）
  -l           不从总时间中减去锁定时间

 ```







## sql 语句优化（开发人员）

### 1、索引优化

​         为搜索字段（where 中的条件）、排序字段、select查询列，创建合适的索引，不过要考虑数据的业务场景；查询多还是增删多？

​       尽量建立组合索引并注意组合索引的创建顺序，按照顺序组织查询条件、尽量将筛选粒度大的查询条件放到最左边。

​      尽量使用覆盖索引，select 语句中尽量不要使用*。

​     Order by、 Group by 语句要尽量使用索引

​      索引长度尽量短，短索引可以节省索引空间，使查找的速度得到提升，同时内存中也可以装载更多索引键值。太长的列，可以选择建立前缀索引。

​     索引更新不能频繁，更新非常频繁的数据不适宜建索引，因为维护索引的成本太高。

​      order by 的索引生效，order by 排序应该遵循最佳左前缀查询，如果使用多个索引字段进行排序，那么排序的规则必须相同（同时升序或降序），否则索引同样失效。





### 2 LIMIT 优化

​      如果预计Select语句的查询结果是一条，最好使用 Limit 1 ,可以停止全表扫描。

     ``` sql
explain select * from  `tuser` where  address = '上海'  --address 没有建立索引
explain select * from  `tuser` where  address = '上海'  limit 1  --address 没有建立索引

     ```



  处理分页会使用到`LIMIT` ,当翻页到非常靠后的页面时候，偏移量会非常大，这时`LIMIT`的效率会非常差。 LIMIT Offset , size;

​     LIMIT 的优化问题，其实是Offset的问题，它会导致Mysql扫描大量不需要的行然后再抛弃。



   解决方案：单表分页进，使用自增主键排序之后，先使用where条件id > offset值，limit后面只写rows 

``` sql
explain select * from (select * from `t1_test` where aa >100000 and aa <100050 order by aa ) t limit 0,20
```

### 3、其他查询优化

小表驱动大表，建议使用 left join 时，以小表关联大表，因为使用join的话，第一张表是必须全扫描的，以少关联多就可以减少这个扫描次数。

避免全表扫描，mysql在使用不等于（!=或<>）的时候无法使用索引导致全表扫描。在查询的时候，如果对索引使用不等于操作将会导致索引失效，进行全表扫描。

避免mysql放弃索引查询，如果mysql估计使用全表扫描要比使用索引快，则不使用索引。（最典型的场景就是数据量少的时候）

Join 两张表的关联字段最好都建立索引，而且最好字段类型是一样的。

``` sql
select * from t1  left join t2 on t1.id = t2.id 
t1 表中的id 和 t1 表示的 id 类型要一致
```



Where 条件中尽量不要使用not in语句（建议使用 not exists）

合理利用慢查询日志、explain执行查询、show profile 查看sql执行时的资源使用情况。

 



## 五、Profile分析语句



     ## 1、介绍

​        Query Profiler 是Mysql 自带的一种query诊断分析工具，通过它可以分析出一条sql语句的硬件性能瓶颈在什么地方。

通常我们是使用的explain,以及slow query log 都无法做到精确分析，但是query Profiler 却可以定位出一条sql语句执行的各种资源消耗情况，比如cpu、io等，以及该sql执行所行耗费的时间等。不过该工具只有Mysql5.0.37以及以上版本中才有实现。

默认的情况下，mysql的该功能没有打开，需要自己手动启动。

## 2 、开启Profile功能

profile 功能由mysql 会话变量：profiling 控制，默认是off 关闭状态。

查看是否开启了profile功能：

``` sql
select @@profiling
-- 或者
show variables like '%profil%'

```



  开启profile 功能

``` sql
set profiling=1; -- 1 是开启、0是关闭
```



 ## 3、语句使用

  show profile 和 show profiles 语句可以展示当前会话（退出session后，profiling重置为0）中执行语句的资料使用情况。

 show profiles ：以列表形式显示最近发送到服务器上执行的语句的资源使用情况。显示的记录数由变量：profiling_history_size 控制，默认15条。  

``` bash
mysql> show profiles;
+----------+------------+--------------------+
| Query_ID | Duration   | Query              |
+----------+------------+--------------------+
|        1 | 0.00016250 | select @@profiling |
+----------+------------+--------------------+
1 row in set, 1 warning (0.00 sec)

```

show profiler:展示最近一条语句执行的详细资源占用信息，默认显示 status和Duration

``` bash
mysql> show profile;
+----------------------+----------+
| Status               | Duration |
+----------------------+----------+
| starting             | 0.000078 |
| checking permissions | 0.000006 |
| Opening tables       | 0.000012 |
| init                 | 0.000006 |
| optimizing           | 0.000011 |
| executing            | 0.000010 |
| end                  | 0.000003 |
| query end            | 0.000007 |
| closing tables       | 0.000003 |
| freeing items        | 0.000017 |
| cleaning up          | 0.000012 |
+----------------------+----------+
11 rows in set, 1 warning (0.00 sec)

```

show profile 还可根据show profiles 列表中的Query_ID,选择显示某条记录的性能分析信息

![1719165825661](D:\Administrator\Documents\assets\1719165825661.png)

type是可选的，取值范围可以如下：   

​         ALL 显示所有性能信息

​         BLOCK IO 显示块IO操作的次数

​         CONTEXT SWITCHES 显示上下文切换次数，不管是主动还是被动

​         CPU显示用户CPU时间、系统CPU时间

​          IPC 显示发送和接收的消息数量

​         MEMORY 暂时

​         PAGE FAULTS 显示页错误数量

​        SOURCE 显示源码中的函数名称与位置

​        SWAPS 显示SWAPs 的次数

   

   



``` sql

mysql> show profile for query 3;
+--------------------------------+----------+
| Status                         | Duration |
+--------------------------------+----------+
| starting                       | 0.000088 |
| Executing hook on transaction  | 0.000004 |
| starting                       | 0.000008 |
| checking permissions           | 0.000006 |
| Opening tables                 | 0.000047 |
| init                           | 0.000006 |
| System lock                    | 0.000009 |
| optimizing                     | 0.000016 |
| statistics                     | 0.000063 |
| preparing                      | 0.000022 |
| executing                      | 0.000036 |
| end                            | 0.000004 |
| query end                      | 0.000003 |
| waiting for handler commit     | 0.000009 |
| closing tables                 | 0.000007 |
| freeing items                  | 0.000021 |
| cleaning up                    | 0.000037 |
+--------------------------------+----------+
17 rows in set, 1 warning (0.00 sec)

```





查看 cpu 、内存、系统、交换空间

``` sql

mysql> show profile cpu,memory,swaps for query 4;
+--------------------------------+----------+----------+------------+-------+
| Status                         | Duration | CPU_user | CPU_system | Swaps |
+--------------------------------+----------+----------+------------+-------+
| starting                       | 0.000102 | 0.000068 |   0.000032 |     0 |
| Executing hook on transaction  | 0.000004 | 0.000003 |   0.000002 |     0 |
| starting                       | 0.000008 | 0.000005 |   0.000002 |     0 |
| checking permissions           | 0.000004 | 0.000003 |   0.000002 |     0 |
| checking permissions           | 0.000002 | 0.000001 |   0.000000 |     0 |
| checking permissions           | 0.000004 | 0.000003 |   0.000002 |     0 |
| Opening tables                 | 0.000054 | 0.000037 |   0.000017 |     0 |
| init                           | 0.000006 | 0.000004 |   0.000002 |     0 |
| System lock                    | 0.000010 | 0.000007 |   0.000003 |     0 |
| optimizing                     | 0.000012 | 0.000008 |   0.000004 |     0 |
| statistics                     | 0.000031 | 0.000021 |   0.000010 |     0 |
| preparing                      | 0.000020 | 0.000013 |   0.000007 |     0 |
| optimizing                     | 0.000005 | 0.000003 |   0.000001 |     0 |
| statistics                     | 0.000006 | 0.000005 |   0.000002 |     0 |
| preparing                      | 0.000009 | 0.000005 |   0.000003 |     0 |
| executing                      | 0.000034 | 0.000023 |   0.000011 |     0 |
| executing                      | 0.000034 | 0.000023 |   0.000011 |     0 |
| end                            | 0.000004 | 0.000003 |   0.000001 |     0 |
| query end                      | 0.000003 | 0.000002 |   0.000001 |     0 |
| waiting for handler commit     | 0.000009 | 0.000006 |   0.000003 |     0 |
| closing tables                 | 0.000009 | 0.000006 |   0.000003 |     0 |
| freeing items                  | 0.000024 | 0.000016 |   0.000007 |     0 |
| cleaning up                    | 0.000033 | 0.000022 |   0.000011 |     0 |
+--------------------------------+----------+----------+------------+-------+
23 rows in set, 1 warning (0.00 sec)


```





mysql> show profile cpu,block io for query 4;
+--------------------------------+----------+----------+------------+--------------+---------------+
| Status                         | Duration | CPU_user | CPU_system | Block_ops_in | Block_ops_out |
+--------------------------------+----------+----------+------------+--------------+---------------+
| starting                       | 0.000102 | 0.000068 |   0.000032 |            0 |             0 |
| Executing hook on transaction  | 0.000004 | 0.000003 |   0.000002 |            0 |             0 |
| starting                       | 0.000008 | 0.000005 |   0.000002 |            0 |             0 |
| checking permissions           | 0.000004 | 0.000003 |   0.000002 |            0 |             0 |
| checking permissions           | 0.000002 | 0.000001 |   0.000000 |            0 |             0 |
| checking permissions           | 0.000004 | 0.000003 |   0.000002 |            0 |             0 |
| Opening tables                 | 0.000054 | 0.000037 |   0.000017 |            0 |             0 |
| init                           | 0.000006 | 0.000004 |   0.000002 |            0 |             0 |
| System lock                    | 0.000010 | 0.000007 |   0.000003 |            0 |             0 |
| optimizing                     | 0.000012 | 0.000008 |   0.000004 |            0 |             0 |
| statistics                     | 0.000031 | 0.000021 |   0.000010 |            0 |             0 |
| preparing                      | 0.000020 | 0.000013 |   0.000007 |            0 |             0 |
| optimizing                     | 0.000005 | 0.000003 |   0.000001 |            0 |             0 |
| statistics                     | 0.000006 | 0.000005 |   0.000002 |            0 |             0 |
| preparing                      | 0.000009 | 0.000005 |   0.000003 |            0 |             0 |
| executing                      | 0.000034 | 0.000023 |   0.000011 |            0 |             0 |
| executing                      | 0.000034 | 0.000023 |   0.000011 |            0 |             0 |
| end                            | 0.000004 | 0.000003 |   0.000001 |            0 |             0 |
| query end                      | 0.000003 | 0.000002 |   0.000001 |            0 |             0 |
| waiting for handler commit     | 0.000009 | 0.000006 |   0.000003 |            0 |             0 |
| closing tables                 | 0.000009 | 0.000006 |   0.000003 |            0 |             0 |
| freeing items                  | 0.000024 | 0.000016 |   0.000007 |            0 |             0 |
| cleaning up                    | 0.000033 | 0.000022 |   0.000011 |            0 |             0 |
+--------------------------------+----------+----------+------------+--------------+---------------+
23 rows in set, 1 warning (0.01 sec)

## 4、应注意的结论



![1719166595167](D:\Administrator\Documents\assets\1719166595167.png)

![1719166652531](D:\Administrator\Documents\assets\1719166652531.png)



converting HEAP to MyISAM 查询结果太大，内存不够用往磁盘上搬；

Creating tmp table 创建临时表：拷贝数据到临时表，用完再删除

Copying to tmp table on disk 把内存临时表复制到磁盘，危险。

## 5、 服务器层面优化

  1、缓冲区优化

   将数据保存在内存中，保证从内存中读取数据

   设置足够大的innodb_buffer_pool_size,将数据读取到内存中。

    ``` text	
建议 innodb_buffer_pool_size 设置为总内存大小的3/4 或者4/5
    ```



 怎么样确定innodb_buffer_pool_size足够大。数据是从而在读取而不是硬盘？

![1719167444299](D:\Administrator\Documents\assets\1719167444299.png)





2、降低有磁盘写入次数

   对于生产环境来说，很多日志是不需要开启的，比如：通用查询日志、慢查询日志、错误日志

  使用足够大的写入缓存innodb_log_file_size

``` sql
推荐 innodb_log_file_size 设置为0.25*innodb_buffer_pool_size
```

设置合适的innodb_flush_log_at_trx_commit,和日志落盘有关系。



3、Mysql 数据库配置优化

 表示缓冲池字节大小 

 推荐值为物理内存的50%~80%

``` sql
innodb_buffer_pool_size
```

用来控制redo log 刷新到磁盘的策略.

```sql
innodb_flush_log_at_trx_commit=1
```

每提交1次事务同步写到磁盘中,可以设置为n.

``` sql
sync_binlog=1
```

脏页占innodb_buffer_pool_size的比例时,触发刷脏页到磁盘. 推荐值为25%~50%.

``` sql
innodb_max_dirty_pages_pct=30
```

后台进程最大IO性能指标

默认200,如果SSD,调整为5000~20000

``` sql
innodb_io_capacity=200
```



指定innodb共享表空间文件的大小 .

```sql
innodb_data_file_path
```

慢查询日志的阈值设置,单位秒

``` sql
long_query_time =0.3
```

mysql 复制的形式,row 为mysql8.0的默认形式.

``` sql
binlog_format=row
```



调高该参数则应降低interactive_timeout、wait_timeout值。

``` sql
max_connections = 200
```



过大，实例恢复时间长：过小，造成日志切换频繁。

``` sql
innodb_log_file_size
```



全量日志建议关闭

默认关闭

``` sql
general_log=0
```



## 6 、操作系统优化

1、内核参数优化

centos 系统针对mysql的参数优化

内核相关参数（/ete/sysctl.conf）

以下参数可以直接放到sysctl.conf文件的末尾。

1.增加监听队列上限：

net.core.somaxconn=65535

net.core.netdev_max_backlog=65535

net.ipv4.tcp_max_syn_backlog=65535

2、加快TCP连接的回收；

net.ipv4.tcp_fin_timeout=10

net.ipv4.tcp_tw_reuse=1

net.ipv4.tcp_recycle=1

3、TCP连接接收和发送缓冲区大小的默认值和最大值：

 net.core.wmem_default=87380

net.core.wment_max=16777216

net.core.rmem_default=87380

net.core.rmem_max=16777216

4、减少失效连接所占用的Tcp资源的数量，加快资源回收的效率；

net.ipv4.tcp_keepalive_time=120

net.ipv4.tcp_keepalive_intvl=30

net.ipv4.tcp_keepalive_probes=3;

5、单个共享内存段的最大值：

 kernel.shmmax=4294947295

​    1、这个参数应该设置足够大，以便能在一个共享内存段下容纳整个的innodb缓冲池的大小。

​     2、这个值的大小对于64位linux系统，可取的最大值为（物理内存值-1）byte,建议值为大于物理内存的一半，一般取值大于innodb缓冲池的大小即可。

## 7、服务器硬件的优化

​          提升硬件设备，例如选择尽量高频率的内存（频率不能高于主机板的支持）、提升网络带宽、使用SSD高速磁盘、提升cpu性能等。

cpu 的选择：

​       对于数据库并发比较高的场景，cpu的数量比频率重要。

​       对于cpu密集型场景和频繁执行复杂sql的场景，cpu的频率越高越好。

























