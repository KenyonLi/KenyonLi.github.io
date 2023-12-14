---
title: 'Jenkins 安装部署'
date: '2023-12-05' 
tags:
- '微服务部署-k8s(二)-应用'
- 'abp'
- 'dotnet'
- 'docker'
categories:
- '技术'
---

## 目录
[[toc]]

## Jenkins 安装部署


## Jenkins环境准备

虚拟机：192.168.3.61 
云主机：114.2.12.22

## Jenkins 安装前提  
JKD 1.11 安装  
先看看系统有没有安装jdk 
``` bash
rpm -qa | grep java
```
如果有，则需要先卸载
``` bash
rpm -qa | grep java | xargs rpm -e --nodeps
```
检索 yum中有没有1.11的相关安装包
``` bash
yum list java*
```

开始安装

``` bash
yum install  java -y  
```

查看jdk版本
``` bash
java -version
```
## Jenkins安装
1. 下载 jenkins安装包
``` bash
sudo wget -O /etc/yum.repos.d/jenkins.repo https://pkg.jenkins.io/redhat-stable/jenkins.repo
sudo rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key
```
2.安装jenkins
``` bash
yum install jenkins
```
3、启动jenkins 
``` bash
systemctl start jenkins
```
查看jenkins状态，running说明启动成功

``` bash
systemctl status jenkins
```

## Jenkins配置

访问jenkins

``` bash
http://192.168.1.61:8080
```

## 激活页面

![Alt text](/images/jenkins/01/jenkins001_0004.png)  

需要到centos9 服务器上 这个路径下找密钥
使用命令 `cat /var/lib/jenkins/secrets/initialAdminPassword`
![Alt text](/images/jenkins/01/jenkins001_0004_1.png)  

## 激活成功

![Alt text](/images/jenkins/01/jenkins001_0005.png)  


## 插件安装

![Alt text](/images/jenkins/01/jenkins001_0006.png)  

## 创建用户

![Alt text](/images/jenkins/01/jenkins001_0007.png)  

## 实例配置

![Alt text](/images/jenkins/01/jenkins001_0008.png)  

## 配置完成

![Alt text](/images/jenkins/01/jenkins001_0009.png)  

## Jenkins使用前提

## git安装

``` bash
yum install git
```
验证是否安装成功
``` bash
git version 
git version 2.39.3
```

## Gitee注册 


## 注册 Gitee 账号
目前 Gitee 提供了面向个人开发者的「社区版」和面向企业研发团队的「企业版」服务，支持 Git/SVN 管理，提供代码审核、Bug 跟踪以及 Webhook 钩子回调等功能，开发者可以在 Gitee 自行创建仓库。


## 通过访问 https://gitee.com/，从首页右上角点击「注册」或点击「加入 Gitee」即可注册个人账号。
 
![Alt text](/images/jenkins/01/jenkins001_0010.png)   

![Alt text](/images/jenkins/01/jenkins001_0011.png)   

在 Gitee 的注册界面依次填入各项，需注意的是：邮箱建议填写国内邮箱如163邮箱/QQ邮箱，以免因为众所周知的原因无法接收激活邮件，个性地址一经选定,无法修改，请慎重填写。当然，你也可以通过微信授权等第三方登录平台授权登录，授权登录后按照引导提示填写相关信息即可完成注册。

## 企业用户
通过访问 https://gitee.com/enterprises，点击「免费开通企业账号」，在注册界面依次填入各项。

![Alt text](/images/jenkins/01/jenkins001_0012.png)   

![Alt text](/images/jenkins/01/jenkins001_0013.png)   
## Jenkins部署项目
1、先创建仓储库
2、readme初始化
3、项目创建
4、现有远程选择
 
![Alt text](/images/jenkins/01/jenkins001_0014.png)   
  可能会出现错误，无错误不用体会
 
![Alt text](/images/jenkins/01/jenkins001_0015.png)   

打开项目所在的文件夹，选择Git Bash Here   
输入两句命令：

``` bash
git pull --rebase origin master 
git push -u origin master
```

刷新仓储库

## Jenkins安装Gitee插件

在线安装
前往 Manage Jenkins -> Manage Plugins -> Available
右侧 Filter 输入： Gitee
下方可选列表中勾选 Gitee（如列表中不存在 Gitee，则点击 Check now 更新插件列表）
点击 Download now and install after restart

![Alt text](/images/jenkins/01/jenkins001_0016.png)   

手动安装
从 release 列表中进入最新发行版，下载对应的 XXX.hpi 文件
前往 Manage Jenkins -> Manage Plugins -> Advanced
Upload Plugin File 中选择刚才下载的 XXX.hpi 点击 Upload
后续页面中勾选 Restart Jenkins when installation is complete and no jobs are running  


![Alt text](/images/jenkins/01/jenkins001_0017.png)   

### 添加Gitee链接配置
1. 前往 Jenkins -> Manage Jenkins -> Configure System -> Gitee Configuration -> Gitee connections   

2. 在 Connection name 中输入 Gitee 或者你想要的名字  

3. Gitee host URL 中输入Gitee完整 URL地址： https://gitee.com （Gitee私有化客户输入部署的域名）  

4.  ` Credentials 中如还未配置Gitee APIV5 私人令牌，点击 Add - > Jenkins`   


5. Domain 选择 Global credentials     

6. Kind 选择 Gitee API Token     
7. Scope 选择你需要的范围     
8. Gitee API Token 输入你的Gitee私人令牌，获取地址：`https://gitee.com/profile/personal_access_tokens `  
9. ID, Descripiton 中输入你想要的 ID 和描述即可。   
10. Credentials 选择配置好的 Gitee APIV5 Token    

11. 点击 Advanced ，可配置是否忽略 SSL 错误（视您的Jenkins环境是否支持），并可设置链接测超时时间（视您的网络环境而定）   

12. 点击 Test Connection 测试链接是否成功，如失败请检查以上 3，5，6 步骤。  

配置成功后如图所示：  

![Alt text](/images/jenkins/01/jenkins001_0018.png)   

## Jenkins项目构建

### 新建构建任务
前往 Jenkins -> New Item , name 输入 ‘Gitee Test’，选择 Freestyle project 保存即可创建构建项目。

### 任务全局配置
任务全局配置中需要选择前一步中的Gitee链接。前往某个任务（如’Gitee Test’）的 Configure -> General，Gitee connection 中选择前面所配置的Gitee链接，如图：

![Alt text](/images/jenkins/01/jenkins001_0019.png)   

### 源码管理配置
前往某个任务（如’Gitee Test’）的 Configure -> Source Code Management 选项卡

1. 点击 Git

2. 输入你的仓库地址，例如
``` bash
https://gitee.com/LearnKenyonLi/lkncicd.mircoservice.git
```

![Alt text](/images/jenkins/01/jenkins001_0020.png)   


### 触发器配置
 前往任务配置的触发器构建： Configure -> Build Triggers 选项卡

1、`Enabled Gitee triggers 勾选您所需要的构建触发规则，如 Push Event,Opened Merge Request Events`
，勾选的事件会接受WebHook，触发构建。目前支持触发事件有：

* Push Events ：推送代码事件  
* Commit Comment Events ：评论提交记录事件  
* Opened Merge Request Events ：提交 PR 事件  
* Updated Merge Request Events ：更新 PR 事件  
* Accepted Merge Request Events ：接受/合并 PR 事件  
* Closed Merge Request Events ：关闭 PR 事件  
* Approved Pull Requests ： 审查通过 PR 事件  
* Tested Pull Requests ：测试通过 PR 事件  

2、Build Instruction Filter:  
* None : 无过滤   
* [ci-skip] skip build ：commit message 或者 PR 说明包含 [ci-skip] 时，跳过构建触发。  
* [ci-build] trigger build ：commit message 或者 PR 说明包含 [ci-build] 时，触发构建。  

1. Ignore last commit has build 该选项可以跳过已经构建过的 Commit 版本。  

2. Cancel incomplete build on same Pull Requests 该选项在 PR 触发构建时，会判断是否存在相同 PR 且未完成的构建，有则取消未完成构建，再进行当前构建。   

3. Ignore Pull Request conflicts 该选项在 PR 触发构建时，会根据 PR 冲突情况选择是否进行构建。

4. Allowed branches 可以配置允许构建的分支，目前支持分支名和正则表达式的方式进行过滤。

5. Secret Token for Gitee WebHook 该选项可以配置 WebHook 的密码，该密码需要与Gitee WebHook配置的密码一致方可触发构建。

6. 注意：若 PR 状态为不可自动合并，则不触发构建。

![Alt text](/images/jenkins/01/jenkins001_0022.png)   

`构建后步骤配置`    
前往任务配置的构建后配置： Configure -> Post-build Actions 选项卡    

构建结果回评至Gitee    
点击 Add post-build action 下拉框选择：Add note with build status on Gitee pull requests   

  `Advanced`  
中可以配置：  

Add message only for failed builds ：仅为构建失败回评到Gitee  
自定义各状态的回评内容（内容可以引用 Jenkins 的环境变量，或者自定义的环境变量）  
若开启该功能，还可将不可自动合并的状态回评至Gitee   

`构建成功自动合并PR`   

点击 Add post-build action 下拉框选择：Accept Gitee pull request on success 

![Alt text](/images/jenkins/01/jenkins001_0023.png)   

## Jenkins项目构建镜像前提

### Jenkins root权限
Jenkins 安装好后，会自动创建一个 jenkins 用户。jenkins 在构建工程时，默认的权限是不够写入文件的。这时就需要把它的权限提升为root。

1.将 jenkins 账号加入到 root 组中。

``` bash
gpasswd -a jenkins root
```
2.修改`vim /etc/sysconfig/jenkins`文件，添加如下配置。
``` bash
JENKINS_USER="root"
JENKINS_GROUP="root"
```
3.重启 Jenkins
``` bash
systemctl restart docker
```
4.验证
``` bash
groups jenkins
``` 
查看jenkins是在哪个用户组，显示的是root。


### Jenkins增加目录权限

修改Jenkins相关文件夹用户权限
``` bash
chown -R jenkins /var/jenkins_home/workspace/
chown -R jenkins /var/jenkins_home/auto_test/
```
重启Jenkins（若是其他方式安装的jenkins则重启方式略不同
``` bash
docker restart autotest-jenkins
```
3.给jenkins用户添加相应文件的权限
``` bash
chown -R jenkins /root/YDT.MicroService/
```
### Jenkin Docker权限
Jenkins在shell脚本运行docker权限报错解决
系统信息
``` bash
[root@lkn61 sysconfig]# id
用户id=0(root) 组id=977(docker) 组=977(docker),0(root) 上下文=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023

```
docker 信息
错误信息
能够在shell中使用docker version打印版本号，但是无法执行docker，报错信息如下
``` bash
+ docker run -i --rm --name my-node-8 -u 0 -v /var/lib/jenkins/workspace/hexo-blogs:/usr/src/myapp -w /usr/src/myapp daocloud.io/node:8.0.0-alpine node -v
docker: Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post http://%2Fvar%2Frun%2Fdocker.sock/v1.38/containers/create?name=my-node-8: dial unix /var/run/docker.sock: connect: permission denied.
```

复制

解决方法
将jenkins用户加入docker组 重启Jenkins服务
``` bash
sudo gpasswd -a jenkins docker
sudo systemctl restart docker
```
[参考](https://www.jb51.net/server/295484j1z.htm)
dokcer 权限不够
``` bash
usermod -aG docker jenkins
sudo chmod 666 /var/run/docker.sock
```


## 构建项目

Jenkins添加shell脚本
![Alt text](/images/jenkins/01/jenkins001_0020.png)   
脚本如下
``` bash
#!/bin/bash
# 进到 dockerfile文件目录
cd /var/lib/jenkins/workspace/LKN.CICD.MicroService/LKN.CICD.MicroService
#构建镜像
docker build -t lkn.cicdmicroservice . 
#删除容器
containerId=`docker ps -a| grep project| awk '{print $1}'`
 echo $containerId
  if [ -n "$containerId" ]; then
   docker stop $containerId
   docker rm $containerId
  fi
#运行容器
docker run -p 5005:80 -d --name lkn.cicdmicroservice  lkn.cicdmicroservice 
```

## Jenkins项目构建镜像WebHook

进入源码管理配置中设置的Gitee项目中，进入 管理 -> WebHooks

1. 添加 WebHook， URL 填写 触发器配置：Build when a change is pushed to Gitee. Gitee webhook URL 中所示 URL，如：: http://127.0.0.1:8080/jenkins/project/fu      
2. 密码填写：触发器配置第 5 点中配置的 WebHook密码，不设密码可以不填   
3. 勾选 PUSH， Pull Request   
** 测试推送触发构建 **
1. Gitee的 WebHook 管理中选择勾选了PUSH的 WebHook 点击测试，观察 Jenkins 任务的构建状态
2. Gitee项目页面编辑一个文件提交，观察 Jenkins 任务的构建状态
测试PR触发构建
1. Gitee的 WebHook 管理中选择勾选了 Pull Request 的 WebHook 点击测试，观察 Jenkins 任务的构建状态
2. 在Gitee项目中新建一个Pull Request，观察 Jenkins 任务的构建状态

## 重置密码
[重置 Jenkins 管理员密码-参考](https://blog.csdn.net/weixin_43820024/article/details/129873787)
[重置 Jenkins 管理员密码-参考](https://www.cnblogs.com/eddyz/p/17050566.html)

1、重中之重：先备份
Make a backup copy of a Jenkins config file (this step is important as after resetting the Jenkins admin password we would need to restore the previous settings):

首先第一步，修改之前先备份
``` bash
$ cp /var/lib/jenkins/config.xml /var/lib/jenkins/config.xml.back
```
2、修改文件
打开配置文件： /var/lib/jenkins/config.xml ，禁止掉：and disable the security:
``` xml
<useSecurity>false</useSecurity>
```
3、重启服务
``` bash
$ systemctl restart jenkins
```
4、此时访问 jenkins，则不再需要密码
登录后做如下修改：
::: tip 
Go to the Jenkins UI (you won’t be asked for any credentials this time) and reset the admin password:

Navigate to "Manage Jenkins" -> "Security" -> "Configure Global Security" -> "Authentication"
Select the "Security Realm" (e.g. "Jenkins’ own user database") and click on "Save"
Go to "People" -> Click on a username for which you want to change the password (e.g. admin) -> "Configure" -> Enter a new password in the "Password" and "Confirm password" fields and click on "Save"
:::

![Alt text](/images/jenkins/01/jenkins001_0001.png)   

![Alt text](/images/jenkins/01/jenkins001_0002.png)  

![Alt text](/images/jenkins/01/jenkins001_0003.png)  

5、修改完成后，恢复之前备份的xml，重启服务
Once the admin password is reset, restore the previous /var/lib/jenkins/config.xml file and restart Jenkins:
``` bash
$ mv /var/lib/jenkins/config.xml.back /var/lib/jenkins/config.xml
$ systemctl restart jenkins
```