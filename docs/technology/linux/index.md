---
title: 'linux语法基础'
date: 2023-06-25
tags:
- 'ubunto'
- 'linux'
- 'ios'
categories:
- '技术'
---

## 目录
[[toc]]
## linux 
::: tip linux  下使用 vim 卡死原因与解决方法

> 我们在[linux](https://so.csdn.net/so/search?q=linux&spm=1001.2101.3001.7020) 下使用vim 编辑文件时，习惯性的使用了 Ctrl + s ， 导致vim 僵死，无法编辑，此时只需要使用 Ctrl + q 解除即可。
>
>  
>
> 在vim 中，Ctrl + S 是锁屏快捷键，  Ctrl+ q 解锁 

:::

## 修改文件目录权限

```bash
#-R, --recursive  递归操作文件和目录
chown -R 777 文件目录
```

## Ubuntu 开启后台守护线程 
```bash
# 开启守护
sudo nohup 你的指令 &
#如果要关闭，先查看程序的id
netstat -tanlp
#关闭程序
sudo kill id -9 
```


## 在CentOS系统下包更新的命令

### 一、 更新和升级yum update 全部更新

yum update package1 更新指定程序包package1

yum check-update 检查可更新的程序

yum upgrade package1 升级指定程序包package1

yum groupupdate group1 升级程序组group1

更多命令

### 二、安装yum install 全部安装

`yum install package1` 安装指定的安装包package1

yum groupinsall group1 安装程序组group1

### 三、查找和显示yum info package1 显示安装包信息package1

yum list 显示所有已经安装和可以安装的程序包

yum list package1 显示指定程序包安装情况package1

yum groupinfo group1 显示程序组group1信息yum search string 根据关键字string查找安装包

### 四、删除程序yum remove | erase package1 删除程序包package1

yum groupremove group1 删除程序组group1

yum deplist package1 查看程序package1依赖情况

### 五、清除缓存yum clean packages 清除缓存目录下的软件包

yum clean headers 清除缓存目录下的 headers

yum clean oldheaders 清除缓存目录下旧的 headers

yum clean, yum clean all (= yum clean packages; yum clean oldheaders) 清除缓存目录下的软件包及旧的headers

### 六、源操作yum repolist/repolist all 列出所有源

yum -enablerepo=fedora-source install package1 从fedora-source源中安装包package1

### 七、Yum Shellyum shll 进去yum的shell环境


## 硬盘挂载、分区、格式化为ext4格式
[硬盘挂载、分区、格式化为ext4格式](https://blog.csdn.net/hochoy/article/details/80751839)    
硬盘分区分两种情况：当硬盘磁盘空间<2T时，使用此种方式没有问题，当硬盘磁盘空间>2T时，使用此种方式可能会出现问题，这种情况下使用`Parted`磁盘分区及挂载     
第一步：添加硬盘、新建分区（`fdisk`）(此步骤非必须)   
第二步：格式化分区（`mkfs.ext4`） 
第三步：加载分区（`mount`）    
 
## ssh 免密码登录
[免密码登录 ](https://www.cnblogs.com/kluan/p/4453851.html)
在客户端生成私钥、公钥（注意，在客户端完成）：
``` bash 
生成密钥
ssh-keygen -t rsa
```
-t指定要创建的密钥类型，默认就是rsa了，所以只执行ssh-keygen是一样的。

期间会提示你输入你私钥的加密密码。如果需要完全脱离密码，此处可留空，直接回车，否则以后每次连接需要本地解锁。

完成后，会当前用户的主目录下的~/.ssh/路径下生成两个文件id_rsa与id_rsa.pub分别是私钥与公钥。

接下来，要把生成的公钥上传到服务器上，同样还是在客户端执行以下的代码。
``` bash
 ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.1.1
```
其中root可以修改为你想要自动登录的服务器端用户名，192.168.1.1修改为你的VPS主机名或IP地址。

最后，ssh登录远程服务器。
``` bash
 ssh root@192.168.1.1
``` 


## zip 压缩解压文件  

1、`zip` 压缩文件    

``` bash
zip -r myfile.zip ./* 将当前目录下的所有文件和文件夹全部压缩成myfile.zip文件,－r表示递归压缩子目录下所有文件.


### -r 
zip -r myfile.zip ./* 将当前目录下的所有文件和文件夹全部压缩成myfile.zip文件,－r表示递归压缩子目录下所有文件.

### -d
zip -d myfile.zip smart.txt 删除压缩文件中smart.txt文件 zip -m myfile.zip ./rpm_info.txt 向压缩文件中myfile.zip中添加rpm_info.txt文件 ---
```

2、`unzip` 解压文件  

``` bash
## 解压zip文件到当前目录
unzip filename.zip   

unzip
unzip -o -d /home/sunny myfile.zip
把myfile.zip文件解压到 /home/sunny/
-o:不提示的情况下覆盖文件；
-d:-d /home/sunny 指明将文件解压缩到/home/sunny目录下；
```


|选项|	含义|
|--- | ---|
|-d 目录名|	将压缩文件解压到指定目录下。|
-n	|解压时并不覆盖已经存在的文件。|
-o	|解压时覆盖已经存在的文件，并且无需用户确认。|
-v	|查看压缩文件的详细信息，包括压缩文件中包含的文件大小、文件名以及压缩比等，但并不做解压操作。|
-t	|测试压缩文件有无损坏，但并不解压。|
-x 文件列表	|解压文件，但不包含文件列表中指定的文件。|


## tar 压缩解压文件 

tar 命令详解   
```bash
　　-c: 建立压缩档案  

　　-x：解压  

　　-t：查看内容  

　　-r：向压缩归档文件末尾追加文件  

　　-u：更新原压缩包中的文件  
```
这五个是独立的命令，压缩解压都要用到其中一个，可以和别的命令连用但只能用其中一个。下面的参数是根据需要在压缩或解压档案时可选的。
``` bash
　　-c: 建立压缩档案
　　-x：解压
　　-t：查看内容
　　-r：向压缩归档文件末尾追加文件
　　-u：更新原压缩包中的文件
```

下面的参数-f是必须的
``` bash
　　-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。
　　# tar -cf all.tar *.jpg
　　这条命令是将所有.jpg的文件打成一个名为all.tar的包。-c是表示产生新的包，-f指定包的文件名。
　　# tar -rf all.tar *.gif
　　这条命令是将所有.gif的文件增加到all.tar的包里面去。-r是表示增加文件的意思。
　　# tar -uf all.tar logo.gif
　　这条命令是更新原来tar包all.tar中logo.gif文件，-u是表示更新文件的意思。
　　# tar -tf all.tar
　　这条命令是列出all.tar包中所有文件，-t是列出文件的意思
　　# tar -xf all.tar
```

 1、压缩
 ``` bash
　　tar –cvf jpg.tar *.jpg //将目录里所有jpg文件打包成tar.jpg
　　tar –czf jpg.tar.gz *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用gzip压缩，生成一个gzip压缩过的包，命名为jpg.tar.gz
　　tar –cjf jpg.tar.bz2 *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用bzip2压缩，生成一个bzip2压缩过的包，命名为jpg.tar.bz2
　　tar –cZf jpg.tar.Z *.jpg //将目录里所有jpg文件打包成jpg.tar后，并且将其用compress压缩，生成一个umcompress压缩过的包，命名为jpg.tar.Z
　　rar a jpg.rar *.jpg //rar格式的压缩，需要先下载rar for linux
　　zip jpg.zip *.jpg //zip格式的压缩，需要先下载zip for linux
```
　2、解压
``` bash
　　tar –xvf file.tar //解压 tar包
　　tar -xzvf file.tar.gz //解压tar.gz
　　tar -xjvf file.tar.bz2 //解压 tar.bz2
　　tar –xZvf file.tar.Z //解压tar.Z
　　unrar e file.rar //解压rar
　　unzip file.zip //解压zip
```
　　总结
``` bash
　　1、*.tar 用 tar –xvf 解压
　　2、*.gz 用 gzip -d或者gunzip 解压
　　3、.tar.gz和.tgz 用 tar –xzf 解压
　　4、*.bz2 用 bzip2 -d或者用bunzip2 解压
　　5、*.tar.bz2用tar –xjf 解压
　　6、*.Z 用 uncompress 解压
　　7、*.tar.Z 用tar –xZf 解压
　　8、*.rar 用 unrar e解压
　　9、*.zip 用 unzip 解压
```
