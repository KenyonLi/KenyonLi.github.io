## 01-持续集成CICD

### 1. 持续集成概述

​        互联网软件的开发和发布，已经形成了一套标准流程，最重要的组成部分就是持续集成（continuous integration,简称CI）

![1720222622086](assets\1720222622086.png)

#### 1.1 基本介绍

   1.  概念：持续集成、持续部署、持续交付

       持续集成、持续部署、持续交付【简称CI/CD】,持续集体（Continuous Intergration）:

       持续集成的重点在于构建编译及测试，开发人员每天要提交很多代码到分支，在分支合并到主干前，需要通过编译和测试识别出问题。持续集成的流程就是通过自动化构建（主要是构建编译，自动化测试）来验证，从而尽早地发现集成错误。

       > 持续集成的核心意义：通过自动化测试尽早的发现代码问题。

       ![1720222664969](assets\1720222664969.png)

​     持续交付（Continuous Delivery）:持续交付指的是将产品尽可能快的发布上线的过程。持续交付是在持续集成基础上的扩展，也就是说除了自动化编译、自动化测试，为了尽快上线我们还需要自动化发布流程，整个流程实现后，根据实际需要，可以周期性进行产品上线发布。上线方式：为人工点击部署实现快速上线。部署环境的先后部署顺序，一般在公司都是开发环境-->测试环境-->预发布环境（类生产环境）和正式生产环境，如果代码在预发环境测试通过，那么就可通过手动的方式部署生产环境实现上线的目的。

> 持续交付的核心意义：尽快的将最终的产品发布到线上环境，给用户使用。持续交付是每个企业追求的目标，我们常说的CI/CD里的CD一般指的就是持续交付。

![1720224249132](assets\1720224249132.png)



持续部署（Continuous Deployment）:持续部署就是在持续交付的基础上，将编译、测试、打包部署到生产环境做成自动化。

> 持续部署的核心意义：持续的将迭代的需求自动化的方式部署到生产环境。一般来说，非生产环境的持续部署基本都能实现。但生产环境的持续部署并不是每个企业都能做到，主要原因是受限于各种系统功能依赖、自动化测试不完善等因素，自动化一但部署到生产，将可能造成严重生产事故。
>
> 注意：真正的持续部署并不适用于每个企业的生成环境！一键部署很香，一键

![1720224355254](assets\1720224355254.png)



说明：无论是持续集成、持续交付还是持续部署，如果要实现整个流程，基本上离不开CI服务器。

2. 特点：

   * 快速定位错误，测试环节可以及时暴露问题；
   * 避免大幅度偏离主干，借助统一的代码库；
   * 减少不必要的成本投入，可以自动化解决的重复乏味的事情，没必要浪费人力和时间；

3. 工作流程：

   ![1720225299793](assets\1720225299793.png)

   持续集成工作流程大体包括如下5阶段：

            1. 初始化CI流程：基本CI流程的配置，比如脚本、定时任务等。
            2. 拉取最新代码：从源码库 拉取最新代码到CI服务器磁盘上。
            3. 构建：一般源码仓库自包含构建，可通过配置的脚本触发执行构建。比如java的构建一般基于Maven或Gradle 、[net msbuild](https://www.cnblogs.com/shenh/p/8946404.html)
            4. 执行测试：测试阶段一般包含单元测试和集成测试。Java中的单元测试常指Junit.
            5. 结果处理：CI流程执行的最后结果要么成功，要么失败，结果需要通知给对应的人员，一般的通知方式有邮件，钉钉、短信。



扩展:DevOps与持续集成

1、什么是DevOps?Devops这个词，其实就是Development(开发)和Operation(运维)两个词的组合。DevOps 不是一项技术，也不是一套流程和方法论，更不是一套简单的工具产品。DevOps的维基百科定义是这样的:Devops是一组过程、方法与系统的统称，用于促进开发、技术运营(运维)和质量保证(QA)部门之间的沟通、协作与整合。
通过实践 DevOps，可以将开发、测试、运维之间的工作串联起来，以持续构建、自动化测试、持续发布为目标，将所有流程全部自动化，最大化减少了重复性的人力投入。同时，基础环境的自动化构建也降低了由于人的原因带来的意外风险。
下图为Devops所包含的流程:

![1720238581978](assets\1720238581978.png)

2、DevOps工具链
由于Devops是一种跨职能的工作模式，因此实践过程需要使用不同的工具集(被称为"工具链”)，而不是单一的工具集。这些工具链应该符合以下一个或多个类别，这些类别反映了开发和交付过程中的关键环节：

1.编码---代码开发和审查、源代码管理工具、代码合并
2.构建---持续集成工具，构建状态
3.测试--持续测试工具，提供快速、及时的业务风险反馈
4.发布---变更管理、发布审批、发布自动化
5.配置---基础设施配置和管理，基础设施作为代码工具的基础设施
6.监控---应用性能监控、终端用户体验
DevOps生态圈工具链图:

![1720238837504](assets\1720238837504.png)



DevOps 需要要通过技术工具链完成持续集成、持续交付、用户反馈和系统优化的整合。工具链包括版本控制&协作开发工具、自动化构建和测试工具、持续集成&交付工具、部署工具、维护工具、监控，警告&分析工具等等。

* 版本控制&协作开发:GitHub、GitLab、BitBucket、SubVersion、Coding、Bazaar
* 自动化构建和测试:ApacheAnt、Maven、Selenium、PyUnit、QUnit、JMeter、Gradle、PHPUnit
* 持续集成&交付:Jenkins、Capistrano、BuildBot、Fabric、Tinderbox、Travis Cl、flow.ciContinuum、LuntBuild、CruiseControl、integrity、Gump、Go
* 容器平台:Docker、Rocket、Ubuntu(LXC)、第三方厂商如(AWS/阿里云)
* 配置管理:Chef、Puppet、CFengine、Bash、Rudder、Powershell、RunDeck、Saltstack.Ansible
* 微服务平台:OpenShift、Cloud Foundry、Kubernetes、Mesosphere
* 服务开通:Puppet、DockerSwarm、Vagrant、Powershell、OpenStack Heat
* 日志管理:Logstash、ColectD、StatsD
* 监控，警告&分析:Nagios、Ganglia、Sensu、zabbix、ICINGA、Graphite、Kibana

3、Devops的目标

* 更快的上市时间

* 提高部署频率

* 更短的修复时间

* 降低发布失败率

* 更快的平均恢复时间

  总结来说DevOps的目标是:最大限度地提高运营流程的可预测性、效率、安全性和可维护性。

4、与持续集成的关系
        由DevOps的流程和工具链我们可以得知，DevOps 是持续集成思想的延  伸，持续集成/部署是 DevOps的技术核心，在没有自动化测试、持续集成/部署之下，Devops就是空中楼阁。

#### 1.2 持续集成工具

  * Travis Cl

  * Bambo0

  * TeamCity

  * CircleCl

  * Gitlab cl

  * Jenkins

    > 线大厂企业基于特殊需求、安全性和 性能考虑基本上会自研CI平台。但是不论使用什么平台来做CI，核心需求基本跑不出lenkins圈，因此我们来学习lenkins!
#### 1.3  什么是Jenkins?

市场中最知名且最常见的自动化工具是lenkins，基于lava开发的一种持续集成工具。之前叫做Hudson，由SUN公司启动，2010年oracle收购SUN导致hudson商标归oracle保留，hudson的主要责献者基于hudson 更名为jenkins并持续更新。很长一段时间内lenkins和Hudson继续作为两个独立的项目，每个都认为对方是自己的分支。目前Hudson已经停止开发，最新的版本发布于2016年，而lenkins的社区和开发却异常活跃。lenkins是目前市场上使用最多的CI/CD工具。lenkins作为持续集成工具，持续集成是其核心功能，在核心功能基础之上可扩展实现强大的CD功能，
**特点**

* 开源免费.
* 易于安装(基本上算是所有CI工具里安装配置最简单的).
* 多平台支持(windows/linux/macos)
* 原生支持主从分布式架构提供web可视化配置管理页面
* 安装配置简单
* 插件资源丰富

**应用场景**

* 集成svn/git客户端实现源代码下载检出
* 集成maven/ant/gradle/npm等构建工具实现源码编译打包单元测试
* 集成sonarqube对源代码进行质量检查(坏味道、复杂度、新增bug等)
* 集成SaltStack/Ansible实现自动化部署发布
* 集成|meter/Soar/Kubernetes/...
* 可以自定义插件或者脚本通过ienkins传参运行
* 可以说Jenkins比较灵活插件资源丰富，日常运维工作都可以自动化

**Jenkins的版本**

* Jenkins 1.x:不支持pipeline
* Jenkins 2.x:支持pipeline(主流)
* Jenkins x:基于k8s的持续集成(趋势)

### 2. 持续集成Jenkins环境搭建

#### 2.1 Jenkins 环境搭建

Jenkins 支持主从模式，这将会把构建任务分发到多个节点云执行，这样就可以支撑起多个项目的大量构建任务，提升构建效率。同时，你可以提供多种环境（如：开发环境、生产环境）来对同一个项目进行测试和构建。

Jenkins的部署方式主要三种：本次采用的第一种

1. 服务器直接运行war
2. 服务器通过yum命令下载jenkins安装饭进行安装运行
3. docker容器运行

**CI服务器环境说明**

* 操作系统：centos 7
* 操作系统软件环境：
  * `Jdk 11`
  * `maven3.6.1`
  * `git 1.8.3.1`
  * `jenkins2.452.2 LTS `
* Jenkins机器【CI服务器】：192.168.3.32

##### 第一步：安装Jenkins

登录JenkinsCI服务器

[下载最新的Jenkins](https://www.jenkins.io/download/)

##### 1.1 基础环境准备（root用户执行命令）

安装JDK

1. 直接联网安装JDK

   ```bash
   yum install fontconfig java-17-openjdk
   ```

   

2. 配置JAVA_HOME环境变量， vim /etc/profile,最后加上：

``` bash
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-11.0.23.0.9-2.el7_9.x86_64/bin/java
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib
export PATH=${JAVA_HOME}/bin:$PATH

```

3. 让profile生效

   ```bash
   source /etc/profile
   ```

安装git

```bash
yum install -y git

[root@localhost ~]# git --version
git version 1.8.3.1

```

安装sshpass:免输入密码ssh工具

```bash
yum install -y sshpass
```

安装wget:下载工具

``` bash
yum install -y wget
```

axel安装：多线程下载工具

``` bash
wget https://download-ib01.fedoraproject.org/pub/epel/7/x86_64/Packages/a/axel-2.4-9.el7.x86_64.rpm
rpm -ivh axel-2.4-9.el7.x86_64.rpm 
```



安装maven

1.下载解压

``` bash
axel -n 20 https://archive.apache.org/dist/maven/maven-3/3.6.1/binaries/apache-maven-3.6.1-bin.tar.gz
tar zxvf apache-maven-3.6.1-bin.tar.gz
mv apache-maven-3.6.1  /usr/local/

# yum 安装
sudo yum install -y maven-3.6.3

```

2.配置M2 HOME环境变量，vim /etc/profile，最后加上!

``` bash
export MAVEN_HOME=/usr/local/apache-maven-3.6.1
export PATH=$MAVEN_HOME/bin:${PATH}
```

3.让profile生效

```bash
source /etc/profile
```

4. 测试maven安装是否成功

``` bash
mvn -version
```

5. 创建maven本地仓库目录


```bash
mkdir -p /data/maven_repository
```



6. 如果用户没有当前目录权限，则给用户授权

```bash
chown -R hky-student:hky-student /data/maven_repository/
# 你可以结合使用 chown 和 chmod 命令来设置文件和目录的所有者和权限。例如：
sudo chown -R newuser:newgroup /data/maven_repository
sudo chmod -R 755 /data/maven_repository
```



7. 修改maven中仓库的位置

```bash
vim /usr/1oca1/apache-maven-3.6.1/conf/settings.xm1
```

找到和，将其中内容替换为新建的仓库位置：

```xml
<localRepository>/data/maven_repository</localRepository>
```

8. 找到和标签，在其中添加如下内容

   ``` xml
   <mirror>
      <id>aliyunmaven</id>
      <mirrorof>*</mirrorof>
      <name>阿里云公共仓库</name>
      <url>https://maven.aliyun.com/repository/public</ur1></mirror>
   ```

   

**安装.Net SDK**

1. 添加Microsoft包签名密钥和存储库

   ``` bash
   #安装脚本和二进制文件
   wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
   #开启权限
   chmod +x ./dotnet-install.sh
   ```

2. 安装.Net 8SDK:

``` bash
sudo yum install -y dotnet-sdk-8.0
#指定版本安装
./dotnet-install.sh --channel 8.0
```

   离线下载

```bash
https://download.visualstudio.microsoft.com/download/pr/dd6ee0c0-6287-4fca-85d0-1023fc52444b/874148c23613c594fc8f711fc0330298/dotnet-sdk-8.0.302-linux-x64.tar.gz

# 创建目录，解压
mkdir -p $HOME/dotnet && tar zxf dotnet-sdk-8.0.302-linux-x64.tar.gz -C $HOME/dotnet
export DOTNET_ROOT=$HOME/dotnet
export PATH=$PATH:$HOME/dotnet

#安装失败
/lib64/libstdc++.so.6: version `GLIBCXX_3.4.21' not found

#解决就安装  devtoolset-9 就可以解决
sudo yum install -y devtoolset-9
```

##### 1.2 安装Jenkins软件

安装 `rsync`

``` bash
yum install -y rsync
```

下载安装Jenkins 

* 下载jenkins安装包

  ``` bash
  # 不可用
  axel -n 20 
  https://get.jenkins.io/war-stable/2.452.2/jenkins.war
  
  
  
  sudo wget -O /etc/yum.repos.d/jenkins.repo \
      https://pkg.jenkins.io/redhat-stable/jenkins.repo
  sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io-2023.key
  sudo yum upgrade
  # Add required dependencies for the jenkins package
  sudo yum install fontconfig java-17-openjdk
  sudo yum install jenkins
  sudo systemctl daemon-reload
  
  
  下载 https://get.jenkins.io/war-stable/2.452.2/jenkins.war
  
  
  # 安装jdk 
  
  yum install fontconfig java-11-openjdk
  
  ```

   *  创建jenkins新的工具目录

      ``` bash
      mkdir -p /data/jenkins_data
      ```

*  在~下新建脚本：vim jenkins-start.sh

``` bash
#!/bin/bash
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-11.0.23.0.9-2.el7_9.x86_64
export JENKINS_SERVER_PATH=/usr/local/jenkins
export JENKINS_HOME=/data/jenkins_data
cd ${JENKINS_SERVER_PATH}
nohup java -jar jenkins.war --httpPort=8099 > jenkins.log 2>&1 &

#最后的&与nohup是一个组合
# 2>&1 日志格式化的方式#在上面的例子中,0-stdin(standard input),1-stdout(standardoutput),2-stderr(standard error)# 2>&1是将标准错误(2)重定向到标准输出(&1)，标准输出(&1)再被重定向输入到jenkins.10g文件中。
```

以上内容编辑后保存退出：wq

* 如果是自有机房，关闭防火墙。如果是云服务器，则配置端口放行。

  ``` bash
  systemctl stop firealld
  ```

* 添加脚本执行权限

``` bash
chmod +x jenkins-start.sh
chmod 755 jenkins-start.sh 
# 启动
./jenkins-start.sh
# 查看log
taill -100f jenkins-start.log
```

* 修改jenkins配置（插件站点更新，加速联网）

``` bash
 vim /data/jenkins_data/hudson.model.UpdateCenter.xml 
```

```xml
 ?xml version='1.1' encoding='UTF-8'?>
<sites>
  <site>
    <id>default</id>
    <url>https://updates.jenkins.io/update-center.json</url>
  </site>
</sites>
```

将XML内的`url`替换插件地址：`https://mirror.xmission.com/jenkins/updates/update-center.json`

```xml
 ?xml version='1.1' encoding='UTF-8'?>
<sites>
  <site>
    <id>default</id>
    <url>https://mirror.xmission.com/jenkins/updates/update-center.json</url>
  </site>
</sites>
```



##### 1.3 访问Jenkins

* 浏览器 192.168.3.32：8099

* 提示输入密码，根据页面提示查看密码的方式获取密码并登录，一般用cat命令查看

  ```bash
  cat /data/jenkins_data/secrets/initialAdminPassword
  ```

  

  一、设置成中文
  1、先在插件管理中安装以下两个插件 Locale plugin 和 Localization: Chinese (Simplified)
  1）点击【Manage Jenkins】->【Manage Plugins】选项。
  2）点击【Avaliable】选项，右侧搜索框输入【Locale】选项。
  3）勾选【插件选项】，点击【install without restart】选项。
  4）重启Jenkins:在URL后加上【/restart】，点击【回车】，点击【yes】即可。
  2、设置中文
  1）点击【Manage Jenkins】->【Configure System】选项。
  2）找到【Locale】选项，输入【zh_CN】,勾选下面的选项，最后点击Apply】再点击【Save】即可。

  若汉化没有成，请继续以下步骤：
  将【zh_CN】改成【zh_US】，点击应用->保存，再重启，然后再次将【zh_US】改成【zh_CN】点击应用->保存

  原文链接：https://blog.csdn.net/juannys/article/details/129832158



* 密码输入正确后提示插件的选择，可以直接忽略跳过即可看到首页
* 修改管理员密码为，具体操作为点击页面左上角jenkins->people->admin->configure进行修改
* 修改完后，跳转到登录页，输入用户名admin 密码admin即可正常登录

##### 1.4 jenkins开机自启动

   第一种：不可用

* 在root用户下，设置开机执行，`vim /etc/rc.d/rc.local`,在最后添加如下启动命令;(没有生效)

`/root/jenkins.sh`

``` bash
#!/bin/bash
# THIS FILE IS ADDED FOR COMPATIBILITY PURPOSES
#
# It is highly advisable to create own systemd services or udev rules
# to run scripts during boot instead of using this file.
#
# In contrast to previous versions due to parallel execution during boot
# this script will NOT be run after all other services.
#
# Please note that you must run 'chmod +x /etc/rc.d/rc.local' to ensure
# that this script will be executed during boot.

touch /var/lock/subsys/local
#echo "Hello,rc.local" > /tmp/hello.txt 
/usr/local/jenkins-start.sh

```

* 添加执行权限

  ``` bash
  chmod +x /etc/rc.d/rc.local
  ```


第二种方式设置开机启动(测试OK)

 创建sh脚本 带指令 start \stop 

```bash
#!/bin/bash
#在文章《（二）修改Jenkins工作空间》中已修改Jenkins工作目录
#https://blog.csdn.net/jiachangsen/article/details/120708478
#原因在开机自启动是，该文件访问不到环境变量中`JENKINS_HOME`变量

export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-11.0.23.0.9-2.el7_9.x86_64
export JENKINS_SERVER_PATH=/usr/local/jenkins
export JENKINS_HOME=/data/jenkins_data
cd ${JENKINS_SERVER_PATH}

pid=`ps -ef | grep jenkins.war | grep -v 'grep'| awk '{print $2}'| wc -l`
 if [ "$1" = "start" ];then
 if [ $pid -gt 0 ];then
 echo 'jenkins is running...'
else
 #java启动服务 配置java安装根路径,和启动war包存的根路径
 nohup ${JAVA_HOME}/bin/java -jar jenkins.war --httpPort=8099 > jenkins.log 2>&1 &
 fi
 elif [ "$1" = "stop" ];then
 exec ps -ef | grep jenkins | grep -v grep | awk '{print $2}'| xargs kill -9
 echo 'jenkins is stop..'
else
 echo "运行该脚本，请务必传入参数：start 或 stop"
 fi
```



1. 创建 Jenkins 服务文件

   首先，创建一个新的systemd服务单元文件：

   ``` bash
   sudo vim /usr/lib/systemd/system/jenkins.service
   ```

2. 配置服务文件

   - `Restart=on-failure`：指定服务在失败时（退出代码非零）自动重启。
   - `RestartSec=5s`：在重启服务前等待5秒。
   - `StartLimitInterval=60s` 和 `StartLimitBurst=3`：指定在60秒内允许的最大启动尝试次数为3次。超过这个次数后，服务将不会再次尝试重启，直到`StartLimitInterval`间隔过去。

```bash
[Unit]
Description=Jenkins service
After=network.target
 
[Service]
Type=forking
ExecStart=/usr/local/jenkins/jenkins.sh start
ExecReload=
ExecStop=/usr/local/jenkins/jenkins.sh stop
PrivateTmp=true
Restart=on-failure
RestartSec=5s
StartLimitInterval=60s
StartLimitBurst=3


[Install]
WantedBy=multi-user.target

```

3. 启用并启动服务：

   重新加载`systemd`配置

   ``` bash
    sudo systemctl daemon-reload
   ```

   启用服务，使其在开机时自动启动：

   ``` bash
   sudo systemctl enable jenkins.service
   ```

   禁用开机启动

   ``` bash
   sudo systemctl disable jenkins.service
   
   sudo userdel jenkins  # 如果 Jenkins 服务创建了用户
   sudo rm -rf /var/lib/jenkins  # 删除 Jenkins 的数据目录（如果存在）
   ```

   停服务：

   ``` bash
   sudo systemctl stop jenkins.service
   ```

   

   启动服务：

   ``` bash
   sudo systemctl start jenkins.service
   ```

4. 检查服务状态

​      确保服务已正确启动：

``` bash
sudo systemctl status jenkins.service
```

 ```bash
[root@localhost system]# systemctl status jenkins.service
● jenkins.service - Jenkins service
   Loaded: loaded (/usr/lib/systemd/system/jenkins.service; enabled; vendor preset: disabled)
   Active: active (running) since 日 2024-07-07 16:40:53 CST; 9s ago
  Process: 2369 ExecStart=/usr/local/jenkins/jenkins.sh start (code=exited, status=0/SUCCESS)
 Main PID: 2376 (java)
   CGroup: /system.slice/jenkins.service
           └─2376 /usr/lib/jvm/java-11-openjdk-11.0.23.0.9-2.el7_9.x86_64/bin/java -jar /usr/local/jenkin

 ```



额外调试和验证步骤

* 手动运行脚本，确保其可以正常执行

``` bash
/bin/bash /usr/local/jenkins/jenkins-start.sh
```

查看日志，获取更多错误信息：

```bash
sudo journalctl -u jenkins.service
```

查看设置开机启动的服务列表

```bash
systemctl list-units --type=service | grep jenkins
```



* 重启服务器

  ```bash
  reboot
  ```

##### 第二步：测试Jenkins,可用性

##### 2.1 安装pipeline 插件

 默认已经安装，在已安装列表查看，此步骤可以忽略

  ![1720290794963](D:\Administrator\Documents\第1章 敏捷开发Jenkins之CICD构建篇\assets\1720290794963.png)

  ##### 2.2 创建pipeline方式的测试job

  ![1720290881204](assets\1720290881204.png)

    ###### 2.3 job配置

![1720291001968](assets\1720291001968.png)

##### 2.4 构建job

![1720291195437](assets\1720291195437.png)

##### 2.5 查看job构建日志

![1720291094943](assets\1720291094943.png)



#### 2.2 Jenkins管理界面&&核心配置介绍

小结重点介绍核心配置：节点管理、用户管理、角色管理、分组管理、插件管理、全局工具配置

##### 2.2.1 用户管理

为方便接下来演示，新建如下账号，开发共计两个账号，运维、测试、负责人各一个账号。

| 账号   | 密码   | 说明             |
| :----- | :----- | :--------------- |
| net    | 123456 | 某net工程师账号  |
| web    | 123456 | 某前端工程账号   |
| qa     | 123456 | 某测试工程账号   |
| devops | 123456 | 某运维工程账号   |
| leader | 123456 | 某项目负责人账号 |

![1720350753523](assets\1720350753523.png)

> 在用户管理列表中可进行用户配置比如设置用户密码等，也可以删除用户

##### 2.2.2 角色管理

* 之所以提到角色管理，是由于跟用户权限控制有关，在jenkins中控制用户权限需要选择安全策略，比如有：安全矩阵策略、项目矩阵策略、基于角色的策略等，而企业最常用的就是基于角色的策略，本文也是以角色管理为主。

* 在jenkins中角色管理分为两种：一种是全局角色，此角色与具体的job无关，是一种全局权限的控制，比如控制用户能不能查看job,能不能配置job; 还有一种是项目角色，此角色与具体job有关，可以精细化控制到用户具体能拥有哪些job的哪些权限。

* 注意：如果想要配置角色管理，必须安装插件才行。

  1. 安装插件

  插件名：`Role-based Authorization Strategy`

  ![1720351697435](assets\1720351697435.png)

  2. 选择安全管理策略

  Manage Jenkins-> Security->全局安全配置

  ![1720352075751](assets\1720352075751.png)

> 基于角色授权



   3. 权限配置需求

      | 账号   | 岗位   | 查看job | 点击构建job | 取消构建job | 配置job |
      | ------ | ------ | ------- | ----------- | ----------- | ------- |
      | net    | 研发   | 是      | 是          | 是          | 是      |
      | web    | 研发   | 是      | 是          | 是          | 是      |
      | qa     | 测试   | 是      | 是          | 是          | 是      |
      | devops | 运维   | 是      | 是          | 是          | 是      |
      | leader | 负责人 | 是      | 否          | 否          | 否      |

      以上是粗粒度权限控制要求：

      * net 视图里能够操作所有项目
      * web视图里能够操作所有项目
      * 运维和测试视图里能够操作所有项目
      * 负责人视图里能看到所有项目

      下面是细粒度权限控制要求（主要针对研发人员）

      * net 视图里只能操作net相关的项目
      * web视图里只能操作web相关的项目
      * 运维和测试视图里能够操作所有项目
      * 负责人视图里能看到所有项目

   4. 全局角色管理

      第一步：新建演示用job

      均基于pipline的hellword进行创建，net的开发测试生成各一个，web的开发测试生产各一个

      ![1720353740525](assets\1720353740525.png)

      

      第二步：选择管理角色

      

      ![1720353702862](assets\1720353702862.png)





  第三步：点击全局角色并配置![1720353872233](assets\1720353872233.png)

> 添加角色 输入：admin、 builder、viewer

![1720359408199](assets\1720359408199.png)

 ![1720359440757](assets\1720359440757.png)



说明：如上图新增两个角色：分别为builder,viewer

角色说明：

| 角色名称 | 权限范围                           |
| -------- | ---------------------------------- |
| admin    | jenkins默认的角色，拥有所有权限    |
| builder  | 拥有查看job,构建job、配置job的权限 |
| viewer   | 拥有查看job的权限                  |

第四步：为用户指定全局角色

![1720358474124](assets\1720358474124.png)

第五步：登录各账号查看权限

* 运维工程师devops账号可以拥有所有权限

  ![1720358617766](assets\1720358617766.png)

  ![1720358906335](assets\1720358906335.png)

* 项目负责人`leader`账号只可以查看job

![1720359540133](assets\1720359540133.png)

![1720359794535](assets\1720359794535.png)

* 测试工程师账号qa、开发工程师账号net和web可拥有查看、配置及构建job的权限

![1720360341401](assets\1720360341401.png)

![1720360402809](assets\1720360402809.png)

5、项目角色管理

​      第一步：项目角色配置

这里提到的项目指的是jenkins里的job,之所以要进行项目角色配置，是因为企业开发一般有这么一种需求：开发人员不同、所有开到的项目也不同。比如net工程师只能看到net的项目、web工程师只能看到web的项目。拉下来的配置就是为了实现需求，单独为net和web的账号分配不同的项目角色，其他账号权限不变。

此处要设置项目角色之前，先创建一个全局的角色base,指定一个overall的read权限即可。

![1720361837119](assets\1720361837119.png)

![1720361871851](assets\1720361871851.png)

1. 配置说明

   role的值：项目的角色

   pattern的值：为正则表达式，表示匹配什么样名字开头的job,我们这里net和前端的项目都分为三种环境。注意表示什么开头，在这里要写成“关键词.*”

2. 角色说明

| 角色   | 权限范围                                   |
| ------ | ------------------------------------------ |
| net    | net-.*表示角色net会匹配到net-开头的所有job |
| web    | web-.*表示角色web会匹配到web-开头的所有job |
| viewer | 拥有查看job的权限                          |

第二步：调整角色及分配角色

![1720390761159](assets\1720390761159.png)

![1720390781699](assets\1720390781699.png)

![1720390832427](assets\1720390832427.png)

![1720390855191](assets\1720390855191.png)

> 上图注意为net01（后端）和fed01（前端）账号分配项目角色的时候，一定要调整全局角色到base,然后分配项目角色

第三步：登录开发账号查看权限

* net01账号登录后查看的页面

![1720391281132](assets\1720391281132.png)

点击job名称进入发现也能看到配置按钮

![1720391440157](assets\1720391440157.png)

* fed01账号登录后查看的页面

![1720391546911](assets\1720391546911.png)

点击job名称进入发现也能看到配置按钮

![1720391651751](assets\1720391651751.png)

##### 2.2.3 分组管理 

根据测试job列表，我们发现，如果是非开发账号，比如测试、运维、负责人都是可以查看到所有job,job如果太多则列表显示过长，所以可对job进行分组管理

1、点击新建分组

![1720392120727](assets\1720392120727.png)

2、新建net组

![1720392167842](assets\1720392167842.png)

3、配置java分组内的job



![1720392277668](assets\1720392277668.png)

4、配置完成

![1720392527749](assets\1720392527749.png)

5、说明

web组配置过程与上方过程一致，参考上方即可，最终web配置完成后看到结果如下

![1720392697190](assets\1720392697190.png)

##### 2.2.4 插件管理

`jenkin`s提供了丰富多样的插件，能够满足几乎所有企业持续集成过程中的需求。根据前方操作，我们实际上已经用过了插件管理：`pipeline`插件，角色管理使用的`Role-based Authorization Strategy` 插件。

1. 插件管理入口

   Manage Jenkins-> System Configuration->Manage Plugins

2. 搜索及下载插件

* 在Manage Plugins中点击Available标签页，然后再输入关键词，比如输入pipeline即可搜索到
* 找到所需插件后，点击勾选，然后根据需求点击下方两个中下载按钮之一即可。

3. 插件镜像地址更新【重要】

jenkins默认镜像地址：https://updates.jenkins.io/update-center.json

* 可选择镜像地址

  我们在前文安装jenkins时已经修改过了，目的是加速插件下载，实际上可选的镜像地址有很多，如下：

  | 镜像名   | 镜像地址                                                     |
  | -------- | ------------------------------------------------------------ |
  | 清华大学 | https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json |
  | 华为     | https://mirrors.huaweicloud.com/jenkins/updates/stable-2.46/update-center.json |
  | xmission | https://mirror.xmission.com/jenkins/updates/update-center.json |

  ![1720394061077](assets\1720394061077.png)

也可参见官方网站提供的可用镜像地址：http://mirrors.jenkins-ci.org/status.html

* 镜像地址更换：

​       方式1 ：可以采用之前安装jenkins 时修改

​        `data/jenkins_data/hudson.model.Updatecenter.xml`中url值的方式

​        方式2：可进入到web-ui界面的Manage Plugin->Advanced->Update Site进行修改

4、常用插件列表【重要】

| 编号 | 插件名                                                       | 作用                                                         |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | [Pipeline](https://plugins.jenkins.io/workflow-aggregator/)  | 流水线部署项目                                               |
| 2    | [Role-based Authorization Strategy]( https://plugins.jenkins.io/role-strategy/) | 提供了一种基于角色（Role）的用户权限管理策略，支持创建global角色、Project角色、Slave角色，以及给用户分配这些角色。这款插件是最常用的Jenkins权限策略和管理插件 |
| 3    | [Git](https://plugins.jenkins.io/git/) gitee                 | 支持使用Github、GitLab、Gerrit等系统管理代码仓库，创建普通job时会用到 |
| 4    | [Git Parameter](https://plugins.jenkins.io/git-parameter/)   | 可用于把git的tag branch 当作构建参数传进来，方便使用branch   |
| 5    | [Extended Choice Parameter](https://plugins.jenkins.io/extended-choice-parameter/) | 参数化构建（已经过期）                                       |
| 6    | [Maven Integration](https://plugins.jenkins.io/maven-plugin/) | 这个插件为Maven 2/3项目提供了高级集成功能                    |
| 7    | [SonarQube Scanner](https://plugins.jenkins.io/sonar/)       | 代码扫描                                                     |
| 8    | [Email Extension](https://plugins.jenkins.io/email-ext/)     | 扩展了发送告警邮件的控制力度。可以定义邮件触发器、邮件内容、收件人 |
| 9    | [Workspace Cleanup](https://plugins.jenkins.io/ws-cleanup/)  | 每次build之前删除workspace目录下指定的文件                   |
| 10   | [Monitoring](https://plugins.jenkins.io/monitoring/)         | 监控jenkins节点的cpu、系统负载、平均响应时间和内存使用       |
| 11   | [Build Monitor View](https://plugins.jenkins.io/build-monitor-plugin/) | 将jenkins项目以一块看板的形式呈现                            |
| 12   | [ThinBackup](https://plugins.jenkins.io/thinBackup/)         | 备份与恢复                                                   |
| 13   | [JaCoCo](https://plugins.jenkins.io/jacoco/) / [DotNet](https://plugins.jenkins.io/dotnet-as-script/) | 单元测试覆盖率/ dotnet 脚本                                  |
| 14   | [Generic Webhook Trigger](https://plugins.jenkins.io/generic-webhook-trigger/) | webhook                                                      |

 本次实验中安装了1、2、3、12、13、14这几个插件

* pipeline 【默认安装】
* Role-based Authorization Strategy【手动安装】
* Git 【默认安装】
* ThinBackup 【手动安装】
* jacoco 【手动安装】
* Generic Webhook Trigger【手动安装】

Tips:重启jenkins

这里有一个小技巧，具体为在页面重启jenkins的方式，在jenkins地址后加上/restart即可，比如在本实验中具体的地址可以为：http://192.168.3.32:8099/restart

##### 2.2.5 全局工具配置

非pipeline的java项目如果要构建成功，全局工具的环境需要配置好

* 配置入口：Manage Jenkins->Global Tool Configuration
* 配置方式：指定服务器上已经安装好的服务位置（不需要勾选自动安装）
* 配置前提：服务器已经安装好的jdk1.8,`apache-maven-3.6.1`、git1.8.3.1

配置内如图

![1720401974307](assets\1720401974307.png)

![1720402279122](assets\1720402279122.png)

![1720402299113](assets\1720402299113.png)

#### 2.3 Jenkins原理分析-jenkins如何存储数据

>  Jenkins原理，本质：通过java,将已有的idea,或者本地项目生命周期操作搬到了CI服务器中。
>
> Jenkins 核心操作，对应的数据两部分：
>
> * job存储了构建的相关信息
> * 存储从代码仓库拉取下来的所有代码，workspace

在jenkins中，所有的数据默认都以文件形式存储在`$JENKINS_HOME【/data/jenkins_data】`目录下。占用空间最大的目录就是jobs目录和workspace目录。

* job目录：项目在jenkins上的配置、构建日志、构建结果等所在目录
* workspace目录：项目在jenkins上配置的源码仓库地址下载的源码所在目录，java中maven的构建操作在此目录下进行。
* 目录存放位置说明

| 目录          | 存储位置                     |
| ------------- | ---------------------------- |
| jobs目录      | /data/jenkins_data/jobs      |
| workspace目录 | /data/jenkins_data/workspace |

为了方便介绍目录结构信息，我们要新建一个普通的非pipeline的job.注意：新建项目前workspace目录还是存在。

##### 2.3.1 新建job

![1720408415271](D:\Administrator\Documents\第1章 敏捷开发Jenkins之CICD构建篇\assets\1720408415271.png)

![1720408442553](D:\Administrator\Documents\第1章 敏捷开发Jenkins之CICD构建篇\assets\1720408442553.png)



##### 2.3.2 配置job

> 配置job过程中需要选择git仓库并输入项目地址，需要安装gig插件才能进行（插件管理搜索git选择git即可）

![1720409739890](assets\1720409739890.png)

```bash
https://github.com/KenyonLi/csharp.learm.git
```

##### 2.3.3 配置执行脚本

* MVN 执行脚本针对java项目

```bassh
/usr/1ocal/apache-maven-3.6.1/bin/mvn clean -Dmaven.test.skip=true package
```

* DotNet执行脚本针对net项目

1. 清理项目 (`clean`)

```bash
dotnet clean
```

2. 跳过测试并打包项目 (`package`)

   要跳过测试并生成发布版本的包，可以使用 `dotnet publish` 命令，并通过设置 `SkipTests` 属性来跳过测试。以下是如何使用命令行参数来实现这一点：

```bash
dotnet publish -c Release /p:SkipTests=true
```

解释：

- `-c Release`：指定构建配置为 Release 模式。
- `/p:SkipTests=true`：跳过测试

3. 完成的命令示例

   > 需要添加 DOTNET_ROOT和DOTNET_CLI_HOME的环境变量
   >
   > Dashboard-->Manage Jenkins-->System--> Global properties
   >
   > /usr/local/dotnet
   >
   > ![1720438036616](assets\1720438036616.png)

   ![1720443696857](assets\1720443696857.png)


   ```bash
#!/bin/sh

$DOTNET_ROOT/dotnet clean $WORKSPACE/MyWebApiProject/MyWebApiProject.csproj

$DOTNET_ROOT/dotnet publish $WORKSPACE/MyWebApiProject/MyWebApiProject.csproj -c Release /p:SkipTest=true
   ```




##### 2.3.4 点击构建

查看构建日志

![1720443809261](assets\1720443809261.png)

##### 2.3.5 查看workspace目录结构

通过上图，我们发现构建的执行过程，交给了master节点来执行，具体日志最开始有这么一段：

``` bash
Started by user admin
Running as SYSTEM
Building in workspace /data/jenkins_data/workspace/net-demo
```

1、命令行查看workspace目录结构

说明，工作空间的目录创建在/data/jenkins_data/workspace/net-demo下，查看下/data/jenkins_data/workspace/的目录树结构，执行前通过命令yum -y install tree 下载tree.

执行命令：

``` bash
[root@localhost ~]# tree -L 4 /data/jenkins_data/workspace/net-demo/MyWebApiProject
/data/jenkins_data/workspace/net-demo/MyWebApiProject
├── ApiVersions.cs
├── appsettings.Development.json
├── appsettings.json
├── bin
│ └── Release
│    └── net8.0
│         ├── appsettings.Development.json
│         ├── appsettings.json
│         ├── cs
│         ├── de
│         ├── es
│         ├── fr
│         ├── Humanizer.dll
│         ├── it
│         ├── ja
│         ├── ko
│         ├── Microsoft.AspNetCore.Authentication.JwtBearer.dll
│         ├── Microsoft.Bcl.AsyncInterfaces.dll
│         ├── Microsoft.CodeAnalysis.CSharp.dll
│         ├── Microsoft.CodeAnalysis.CSharp.Workspaces.dll
│         ├── Microsoft.CodeAnalysis.dll
│         ├── Microsoft.CodeAnalysis.Workspaces.dll
│         ├── Microsoft.EntityFrameworkCore.Abstractions
```

通过图中发现了，net-demo就是job的名称，而net-demo的内容实际上就是源码仓库的全部代码，Release里是dotnet cli构建打包的结果。如果有其他的job也执行构建打包，那么这里会有很多跟net-demo一样结构的目录。

2、job页面查看workspace目录

![1720445647310](assets\1720445647310.png)



> 根据需要也可以点击左侧的“清理工作空间”删除job对应的所有源码代码，下次构建会再次下载

##### 2.3.6 查看job目录结构

登录到CI服务器执行命令，查看jobs目录结构

```bash
[root@localhost ~]# tree -L 3 /data/jenkins_data/jobs/
/data/jenkins_data/jobs/
├── net-demo
│ ├── builds
│ │ ├── 1
│ │ ├── 10
│ │ ├── 11
│ │ ├── 12
│ │ ├── 13
│ │ ├── 14
│ │ ├── 15
│ │ ├── legacyIds
│ │ └── permalinks

```



#### 2.4 jenkins Job备份恢复【自学】

##### 2.4.1 备份需求

* 只备份重要的信息，保证恢复时候除了构建历史，重要配置和job都在，排除掉build目录
* 备份要周期性的执行，保证至少每天备份一次

##### 2.4.2 备份实现

* Thin backup插件实现备份到备份服务器

##### 2.4.3 备份配置

1、插件设置备份内容

* 创建备份目标目录

```bash
mkdir /data/jenkins_backup
```

* 安装Thin Backup插件
* 开始备份配置

找到备份管理页面Manage Jenkins->ThinBackUp,进入后选择Settings进行配置

![1720485290550](assets\1720485290550.png)

![1720484310752](assets\1720484310752.png)

![1720484624986](assets\1720484624986.png)

![1720484666109](assets\1720484666109.png)

Backup schedule for full backups 配置好每天10：00执行一次

```bash
H 10 * * *
```

Max number of backup sets 配置值为-1表示不限制，备份中排除了build的结果，图中特殊配置了备份时需要将凭证目录`secrets`下的所有文件进行备份，通过正则表达式：

```bash
^(secrets|.*)$
```

点击保存后，等待时间到10：00过后，我们查看master上的、data/jenkins_backup目录。

![1720485814810](assets\1720485814810.png)

发现备份到点已经执行完毕，那么目录下备份的内容是否正确的内容，查看生成的备份目录

![1720486354241](assets\1720486354241.png)

> 由生成的备份目录发现，用户、插件、节点、job等核心的配置文件目录都已经备份完毕。 

- 测试备份配置是否成功

Manage Jenkins-->Tools and Actions --> ThinBackup



![1720482295801](assets\1720482295801.png)

![1720482367644](assets\1720482367644.png)

![1720482476747](assets\1720482476747.png)

![1720482449744](assets\1720482449744.png)

点击【Backup now】,就要以备份目录上看是否成功

![1720486127218](assets\1720486127218.png)



2、rsync增量同步备份文件

使用rsync命令可以实现在每天jenkins完毕后，将当天新增的同步内容，增量同步到备份服务器上



### 3. 持续集成Pipeline流水线

### 4. Jenkins持续集成项目实战

总结