##  JMeter压力测试&服务端调优

### 1、环境准备

   1. java jdk安装包——[下载地址](https://www.oracle.com/java/technologies/downloads/?er=221886#java8-linux)（登录账号:kenyonli@163.com/Skce010993.）

         jdk-8u411-windows-x64.exe

        jdk-8u411-linux-x64.tar.gz

   2.  jmeter 下载安装  [下载地址](https://jmeter.apache.org/download_jmeter.cgi)

       apache-jmeter-5.6.3.zip

   3. 下载地址：    https://jmeter-plugins.org/install/Install/

         **plugins-manager.jar**

      把下载好的插件管理器放在JMeter 安装目录下

      D:\Program Files\apache-jmeter-5.1.1\lib\ext

      

### 2、JMeter 常用插件安装

  已有内容的分析维度是不够：需要加入新的插件

   查看nacos测试报告中的：

   * TPS（完成一次请求）、QPS（请求数量）
   * RT 请求数量
   * 压力机活动线程数

​    

   1. 在jmeter 管理器中搜索常用插件

      打开jmeter 工具，找到【选项】->【Pulgins Manager】->点击打开，再选择选项卡【Available Plugins】,然后搜索：

      * perfMon:监控服务硬件，如cpu,内存、硬盘读写速度、网络等
      * Basic Graphs:主要显示平均响应时间，活动线程数，成功/失败交易数等
        - average Response Time 平均应时间
        - active Threads 活动线程数
        - successful/Failed Transactions  成功/失败 事务数
      * Additional Graphs:主要显示吞吐量，连接时间，每秒的点击数等
        * Response Codes
        * Bytes Throughput
        * Connect Times
        * Latency
        * Hits/s

   2. 配置插件的监听器

      如果可以配置如下三个监听器，就表示插件已经安装成功！执行压力测试，就要可以看见压测的每秒事务数，响应时间，活动线程数等压测结果。

      * 响应时间：jp@gc-Response Times Over Time

      * 活动线程数：jp@gc-Active Threads Over Time

      * 每秒事务数：jp@gc-Transactions per Second

        1)、RT:响应时间

           * 平均值：请求响应的平均时间是332ms

           * 中位数：50%请求响应时间都在8ms之内

           * 90%百分位：90%的请求都在514ms之内响应结束

           * 95%百分位：95%的请求都在1051ms之内响应结束

           * 99%百分位：99%的请求都在6979ms之内响应结束

           * 最小值： 请求响应最小时间2ms

           * 最大值：请求响应最大时间是35s

         2)、压力机活动线程数
             压力机活动线程数表明压测中施加的压力的情况
         3)、TPS: 每秒的事务数
             数值越大，代表性能越好
         4)、QPS:每秒的查询数量
            （1tps >= QPS）
            数值越大，代表性能越好
         5)、吞吐量：每秒的请求数量
            数值越大，代表性能越好

        

        
### 3、 压测结果解释

1.  聚合报告

    ![1720095174679](D:\Administrator\Documents\assets\1720095174679.png)

   * 样本（sample）:发送请求的总样本数量

   * 响应时间【单位ms】:

     * 平均值（average）:平均的响应时间

     * 中位数（median）:中位数的响应时间，50%请求的响应时间

     * 90%百分位（90% Line）: 90%的请求的响应时间，意思就是说90%的请求是<=1067ms,另外10%的请求是大于等于1079ms返回的。

     * 95%百分位（95%Line）:95%的请求的响应时间，95%的请求都落在3066ms之内返回的

     * 99%百分位（99%Line）:99%的请求的响应时间

     * 最小值（min）:请求返回的最小时间，其中一个用时最少的请求

     * 最大值（max）:请求返回的最大时间，其中一个用时最大的请求 

     * 异常（error）:出现错误的百分比，错误率=错误的请求的数量/请求的总数

     * 吞吐量TPS(throughout):吞吐能力，这个才是我们需要的并发数

     * Received KB/Sec ---每秒从服务器端接收到的数据量

     * Sent KB/sec----每秒从客户端发送的请求的数量

       

2. 汇总图

   ![1720109851097](D:\Administrator\Documents\assets\1720109851097.png)

3. 汇总报告

   样本（sample）: 发送请求的总样本数量
   响应时间【单位ms】：
   平均值（average）：平均的响应时间
   最小值(min)：请求返回的最小时间，其中一个用时最少的请求
   最大值(max)：请求返回的最大时间，其中一个用时最大的请求
   标准偏差：度量响应时间分布的分散程度的标准，衡量响应时间值偏离平均响应时间的程度。
   标准偏差越小，偏离越少，反之亦然。
   异常（error）: 出现错误的百分比，错误率=错误的请求的数量/请求的总数
   吞吐量TPS（throughout）: 吞吐能力，这个才是我们需要的并发数
   每秒接收 KB/sec----每秒从服务器端接收到的数据量
   每秒发送KB/sec----每秒从客户端发送的请求的数量
   平均字节数

4. 察看结果树

   分析了所有请求的平均值、终止、偏离值和通吐量之间的关系
   横坐标：为请求数量，单位个数
   纵坐标：响应时间，单位ms

5. 图形结果

### 4、线程属性参数原理

线程属性参数原理结论：
线程数设置：根据项目并发需求确定
Ramp-Up Period设置：不宜过小也不宜设置过大，经验的做法是设置ramp-up period等于总线程数
循环次数：决定测试执行时间
1）参数基本概念
线程数：
线程组常用来模拟并发用户访问，每个线程均独立运行测试计划。假如客户机没有足够的能力来模
拟较重的负载，可以使用Jmeter的分布式测试功能来通过一个Jmeter控制台来远程控制多个
Jmeter引擎完成测试。
循环次数：循环执行多少次操作
循环次数表示了循环执行多少次操作！循环次数直接决定整个测试单个线程的执行时间，和整体测
试执行时间。

* 单线程执行时间 = 单请求平均响应时间 * 循环次数
* 整个测试耗时 = 单线程执行时间 + (Ramp-Up - Ramp-Up / 线程数

Ramp-Up：建立全部线程耗时
Ramp-Up Period(in-seconds)代表隔多长时间执行，0代表同时并发
用于告知JMeter 要在多长时间内建立全部的线程，默认值是0。如果未指定ramp-up period ，也就是说ramp-up period 为零， JMeter 将立即建立所有线程。假设ramp-up period 设置成T 秒，全部线程数设置成N个， JMeter 将每隔T/N秒建立一个线程。
决定多长时间启动所有线程。如果使用10个线程，ramp-up period是100秒，那么JMeter用100秒使所有10个线程启动并运行。每个线程会在上一个线程启动后10秒（100/10）启动。同理，如果有30个线程，ramp-up period为120s，那么相邻线程的启动时间将间隔4s。
Ramp-up需要要充足长以避免在启动测试时有一个太大的工作负载，并且要充足小以至于最后一个线程在第一个完成前启动。 一般设置ramp-up=线程数启动，并上下调整到所需的。

2）如何设置线程数、Ramp-Up Period以及循环次数？
ramp-up period不能太短，以防止在测试的开始时工作负载过高；ramp-up period不能太长，避免出现第一个线程结束了，而最后一个线程还未开始的情况（除非是刻意为之）。
注意：这里的时间是指启动线程的时间，至于线程的启动需要多久，并不关注
那么ramp-up period应该设置为多少合适呢？一个经验的做法是先设置ramp-up period等于总线程数，然后根据需要进行上下调整。
根据经验来说：ramp-up最好设置值与线程数是保持一致的。

3）为什么需要有Ramp-Up Period，立刻创建出来所有的线程不是更好？

目的是为了模拟大部分网站的真实用户并发场景
对于绝大多数的网址或应用，更真实的情况是并发用户逐渐递增，而不是从一开始便立即有大量并
发的用户，“ramp-up period”概念的引入可以覆盖测试这个场景；在一开始便创建出所有的线程，
会浪费许多系统资源，造成较高的工作负载（带有欺骗性），而这既不真实，也非必要。

### 5、服务器硬件资源

​         压测的时候，我们需要实时了解服务器【cpu、内存、网络、服务器Load】的状态如何，哪如何监控服务器的资源占用情况？方法有很多种：

1. 使用shell 命令

2. 使用finalshell

3. 使用Jmeter压测工具perfmon

   监控原理：

   ![1720076262398](D:\Administrator\Documents\assets\1720076262398.png)

   4. 配置服务端代理

      注意：服务器硬件资源的监控，必须在服务端安装serverAgent代理服务，jmeter才能实现监控服务端的cpu、内存、io的使用情况。

      ServerAgent下载地址：https://github.com/undera/perfmon-agent/blob/master/README.md

   5. 执行脚本

      ``` shell
      # 默认启动运行 startAgent.sh 脚本即可
      # 服务启动默认4444端口，根本连接不上，因此自己创建一个部署脚本文件对此进行部署，且把端口修改
      为7879
      nohup java -jar ./CMDRunner.jar --tool PerfMonAgent --udp-port 7879 --tcp-port 7879 > log.log 2>&1 &
      # 赋予可执行权限
      chmod 755 startAgent.sh
      
      ```

      启动7879端口后，服务器的cpu,io,内存使用情况就顺利的监控到了。

   6. 监控CPU:

      * Elapse time:消耗时间

      * Performance Metrics:性能指标
      * idle:cpu空闲
      * iowait:IO等待
      * system:系统占用
      * cpu user:cpu用户占用 

   7.监控网络
      *  接收字节：byteSrecv【单位：比特、KB、MB】
      *  发送字节：byteSent【单位：比特、KB、MB】
      *  发送(transport)：tx
      *   接收(receive)：rx

   8.监控内存

      * usedPerc:每分钟使用内存【单位：比特，KB、MB】

      * freePerc:每分钟未使用内存【单位：比特、KB、MB】

   9.监控系统整体负载情况

       top
       top -H

   ![1720078158522](D:\Administrator\Documents\assets\1720078158522.png)

   

   10. 如下分析针对单核CPU
          【0.0 - 0.7]】 ：系统很闲，马路上没什么车，要考虑多部署一些服务
          【0.7 - 1.0 】：系统状态不错，马路可以轻松应对
          【等于1.0】 ：系统马上要处理不多来了，赶紧找一下原因
          【大于5.0】 ：马路已经非常繁忙了，进入马路的每辆汽车都要无法很快的运行

   11. 不同Load值说明什么问题？

   如下分析针对单核CPU的四种情况（系统的负载一段时间）：

    情况1：1分钟负载 > 5, 5分钟负载 < 1, 15分钟负载 < 1

   ​       短期内繁忙，长中期空闲，初步判断是一个“抖动”或者是“拥塞前兆”

   情况2：1分钟负载 > 5, 5分钟负载>1, 15分钟负载 < 1

   ​        短期内繁忙，中期内紧张，很可以是一个“拥塞的开始”

   情况3：1分钟负载 > 5, 5分钟负载 > 5,15分钟负载 > 5

   ​         短期长期都繁忙，系统“正在拥塞” （性能达到上限了，要加机器了）

   情况4：1分钟负载 < 1, 5分钟负载 > 1,15分钟负载 > 5

   ​         短期内空闲，中长期繁忙，不用紧张，系统“拥塞正在好转”

   

### 6、压测案例



​       PerformancePressureTesting

​       压测配置：

​              线程



sudo docker  run -p 8081:8080 -d --ulimit nproc=65536   myperf:v2  





小团队的敏捷开发（5-15人）

提升开发效率的建议：提升管理能力

Leader盘任务、砍需求、拿结果。

研发人员距离要近，遇到问题要抛出。

​      

