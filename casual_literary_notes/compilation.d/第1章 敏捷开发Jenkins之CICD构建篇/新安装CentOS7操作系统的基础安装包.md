## CentOS7操作系统基础包安装

### linux 操作系统基础

1、查看当前系统版本

```bash
cat /etc/redhat-release 
```

2、查看安装包路径指令

```bash
readlink -f $(which java)
```



在新安装的 CentOS 7 操作系统上，可以通过安装一些基础包来确保系统的基本功能和开发环境。这些基础包通常包括常用的工具、开发库和依赖项。

### yum 源镜像仓库&软件包配置

* 配置阿里云镜像镜像仓库

  * 在线安装

  ``` bash
  wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
  # 或者
  curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
  ```

  * 离线安装下载包，在`/etc/yum.repos.d`目录下，替换`CentOS-Base.repo`,操作之前先备份。

    

* 软件包（`SCL`）安装并配置国内地址

  软件集合库（`SCL`）提供了更新的开发工具链包。

  ```sh
  sudo yum install -y centos-release-scl
  ```

  安装完成后在 `/etc/yum.repos.d` 目录下会出现 `CentOS-SCLo-scl.repo` 和 `CentOS-SCLo-scl-rh.repo` 两个文件，安装后源默认启用

  修改`CentOS-SCLo-scl.repo`

  ```bash
  vi /etc/yum.repos.d/CentOS-SCLo-scl.repo
  ```

  ![1720265239721](D:\Administrator\Documents\第1章 敏捷开发Jenkins之CICD构建篇\assets\1720265239721.png)

  > 修改`CentOS-SCLo-scl.repo`
  >
  > ```bash
  > vi /etc/yum.repos.d/CentOS-SCLo-scl.repo
  > ```
  >
  > 修改此部分的baseurl
  >
  > ```bash
  > [centos-sclo-sclo]
  > name=CentOS-7 - SCLo sclo
  > baseurl=https://mirrors.aliyun.com/centos/7/sclo/x86_64/sclo/
  > #mirrorlist=http://mirrorlist.centos.org?arch=$basearch&release=7&repo=sclo-sclo
  > gpgcheck=0
  > enabled=1
  > gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-SIG-SCLo
  > ```
  >
  > 修改`CentOS-SCLo-scl-rh.repo`
  >
  > ```bash
  > vi /etc/yum.repos.d/CentOS-SCLo-scl-rh.repo
  > ```
  >
  > 修改此部分的baseurl
  >
  > ```bash
  > [centos-sclo-rh]
  > name=CentOS-7 - SCLo rh
  > baseurl=https://mirrors.aliyun.com/centos/7/sclo/x86_64/rh/
  > # mirrorlist=http://mirrorlist.centos.org?arch=$basearch&release=7&repo=sclo-rh
  > gpgcheck=0
  > enabled=1
  > gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-SIG-SCLo
  > 
  > ```
  > 原文链接: https://blog.csdn.net/qq_45748758/article/details/132212591

  

### yum 常用命令

  ```bash
  # 仓库列表
  yum repolist
  # 清理yum缓存
  yum clean all   
  # 生成新的缓存
  yum makecache  
  # 更新
  yum update   
  # yum卸载
  yum -y remove 包名   
  ```

  `rpm` 是 Red Hat Package Manager 的简称，它是一个常用的包管理工具，主要用于基于 RPM 的 Linux 发行版，如 Red Hat、CentOS 和 Fedora。以下是一些常用的 `rpm` 命令及其用途：

### 查询软件包

  1. **查询已安装的软件包**

     查看系统中已安装的所有软件包：
     ```sh
     rpm -qa
     ```

  2. **查询特定软件包是否安装**

     检查特定软件包是否已安装：
     ```sh
     rpm -q <package_name>
     ```

  3. **查询软件包信息**

     查看已安装软件包的详细信息：
     ```sh
     rpm -qi <package_name>
     ```

  4. **查询软件包文件列表**

     查看已安装软件包包含的文件：
     ```sh
     rpm -ql <package_name>
     ```

  5. **查询文件属于哪个软件包**

     查看系统中的某个文件属于哪个软件包：
     ```sh
     rpm -qf <file_name>
     ```

### 安装和卸载软件包

  1. **安装软件包**

     安装一个 RPM 包：
     ```sh
     sudo rpm -ivh <package_name>.rpm
     ```

  2. **升级软件包**

     升级一个已安装的 RPM 包：
     ```sh
     sudo rpm -Uvh <package_name>.rpm
     ```

  3. **删除软件包**

     删除一个已安装的软件包：
     ```sh
     sudo rpm -e <package_name>
     ```

### 验证和检查软件包

  1. **验证软件包**

     验证已安装软件包的文件：
     ```sh
     rpm -V <package_name>
     ```

  2. **检查 RPM 包内容**

     查看未安装的 RPM 包包含的文件：
     ```sh
     rpm -qpl <package_name>.rpm
     ```

  3. **查看 RPM 包信息**

     查看未安装的 RPM 包的详细信息：
     ```sh
     rpm -qpi <package_name>.rpm
     ```

  4. **查看 RPM 包依赖关系**

     列出一个 RPM 包所需的依赖关系：
     ```sh
     rpm -qpR <package_name>.rpm
     ```

  5. **列出包的提供内容**

     列出一个软件包提供的功能和文件：
     ```sh
     rpm -q --provides <package_name>
     ```

### 其他常用命令

  1. **列出包的所有文件**

     列出软件包包含的所有文件：
     ```sh
     rpm -ql <package_name>
     ```

  2. **列出包的配置文件**

     列出软件包中的配置文件：
     ```sh
     rpm -qc <package_name>
     ```

  3. **导入 GPG 公钥**

     导入一个 RPM 包的 GPG 公钥：
     ```sh
     rpm --import /path/to/keyfile
     ```

  这些命令可以帮助你在管理基于 RPM 的 Linux 系统时更加高效和灵活。如果需要进一步了解，可以查看 `rpm` 的手册页：
  ```sh
  man rpm
  ```

### 1. 更新系统

首先，确保系统是最新的：

```sh
sudo yum update -y
```

### 2. 基础工具

安装一些常用的基础工具：

```sh
sudo yum install -y epel-release
sudo yum install -y vim nano wget curl unzip git
```

### 3. 开发工具和库

安装开发工具包和常用库：

```sh
sudo yum groupinstall -y "Development Tools"
sudo yum install -y cmake make gcc gcc-c++ kernel-devel
sudo yum install -y openssl-devel bzip2-devel libffi-devel
```

### 4. 网络工具

安装网络管理和调试工具：

```sh
sudo yum install -y net-tools telnet nmap traceroute
```

### 5. 安全工具

安装一些基本的安全工具：

```sh
sudo yum install -y fail2ban
```

### 6. .NET SDK 相关包

如果你打算开发 .NET 应用程序，还需要安装 .NET SDK 相关包：

```sh
# 添加 Microsoft 包签名密钥和存储库
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm

# 安装 .NET SDK
sudo yum install -y dotnet-sdk-8.0

#手动安装 参考官网

```

安装成功，运行时报错

>  错误 `/lib64/libstdc++.so.6: version 'GLIBCXX_3.4.20' not found` 通常表示你需要更新 GNU 标准 C++ 库 (`libstdc++`)，因为现有版本不支持所需的符号。

在 CentOS 7 上，你可能需要手动安装较新版本的 `libstdc++`。一种常见的方法是通过 `devtoolset` 工具链来安装更新版本的 GCC。

### **安装更新的 `libstdc++ `  **

如果在安装 `devtoolset-9` 时失败，可能是由于存储库配置问题或网络连接问题。以下是详细的步骤，以确保你能成功安装 `devtoolset-9` 或更高版本。

### 1. 检查并安装 `centos-release-scl`

确保安装了 `centos-release-scl` 包，该包提供了软件集合库（SCL）：

```sh
sudo yum install -y centos-release-scl
# 安装完成后，需要把国外地址修改不国内阿里云地址
```

### 2. 安装 `devtoolset-9` 或更高版本

尝试安装 `devtoolset-9` 或更高版本的开发工具集合。这里使用 `devtoolset-9` 作为例子：

```sh
sudo yum install -y devtoolset-9
```

如果还是失败，请尝试以下步骤：

### 3. 手动配置 SCL 存储库

有时，存储库可能没有正确配置。手动配置 SCL 存储库：

```sh
sudo yum install -y https://www.softwarecollections.org/en/scls/rhscl/devtoolset-9/epel-7-x86_64/download/rhscl-devtoolset-9-epel-7-x86_64.noarch.rpm
```

### 4. 清理 `yum` 缓存并重试

清理 `yum` 缓存以确保没有旧的或损坏的缓存文件：

```sh
sudo yum clean all
sudo yum makecache
```

然后重试安装 `devtoolset-9`：

```sh
sudo yum install -y devtoolset-9
```

### 5. 启用 `devtoolset-9` 环境

安装成功后，启用 `devtoolset-9` 环境：

```sh
scl enable devtoolset-9 bash
```

### 6. 验证 `libstdc++` 版本

验证安装的 `libstdc++` 版本是否包含所需的符号：

```sh
strings /opt/rh/devtoolset-9/root/usr/lib/gcc/x86_64-redhat-linux/9/libstdc++.so | grep GLIBCXX_3.4.20
```

### 配置持久化（可选）

如果希望每次启动 shell 时都自动启用 `devtoolset-9` 环境，可以将其配置为默认环境：

```sh
echo 'source scl_source enable devtoolset-9' >> ~/.bashrc
```

### 完整操作流程示例

以下是完整的操作流程示例：

```sh
# 1. 安装 centos-release-scl
sudo yum install -y centos-release-scl

# 2. 安装 devtoolset-9
sudo yum install -y devtoolset-9

# 3. 启用 devtoolset-9 环境
scl enable devtoolset-9 bash

# 4. 验证 libstdc++ 版本
strings /opt/rh/devtoolset-9/root/usr/lib/gcc/x86_64-redhat-linux/9/libstdc++.so | grep GLIBCXX_3.4.20

# 5. 配置持久化（可选）
echo 'source scl_source enable devtoolset-9' >> ~/.bashrc
```

通过这些步骤，你应该能够成功安装并使用更新版本的 `libstdc++`，使得 .NET SDK 在 CentOS 7 上运行正常。





### 7. Docker（可选）

如果你需要使用容器化技术，可以安装 Docker：

```sh
sudo yum install -y yum-utils device-mapper-persistent-data lvm2
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo yum install -y docker-ce docker-ce-cli containerd.io
sudo systemctl start docker
sudo systemctl enable docker
```

### 8. Python 环境（可选）

如果你需要 Python 环境，可以安装 Python 3：

```sh
sudo yum install -y python3
sudo ln -s /usr/bin/python3 /usr/bin/python
```

### 9. Node.js 和 npm（可选）

如果你需要 Node.js 和 npm，可以安装它们：

```sh
# 安装 NodeSource Node.js 二进制分发存储库
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
```

### 10. 安装 Java（可选）

如果你需要 Java 环境，可以安装 OpenJDK：

```sh
sudo yum install -y java-1.8.0-openjdk-devel
```

### 11. 数据库客户端（可选）

如果你需要数据库客户端工具，可以安装 MySQL 或 PostgreSQL 客户端：

#### MySQL 客户端：

```sh
sudo yum install -y mysql
```

#### PostgreSQL 客户端：

```sh
sudo yum install -y postgresql postgresql-contrib
```

### 总结

以上是新安装的 CentOS 7 操作系统上推荐安装的一些基础包和工具。这些包可以帮助你构建一个强大且灵活的开发和运行环境。根据你的具体需求，还可以安装其他特定的包和工具。



在 CentOS 7 中，`/etc/rc.d/rc.local` 默认是被禁用的，这使得在这个文件中添加的开机启动命令无法生效。为了使其生效，需要手动启用 `rc-local` 服务并确保 `rc.local` 文件具有可执行权限。以下是具体步骤：

### 步骤一：创建 `/etc/rc.d/rc.local` 文件

确保文件存在并具有正确的权限：

```sh
sudo touch /etc/rc.d/rc.local
sudo chmod +x /etc/rc.d/rc.local
```

### 步骤二：启用 `rc-local` 服务

1. **创建 `rc-local` 服务文件**：

   如果文件 `/usr/lib/systemd/system/rc-local.service` 不存在，可以手动创建：

   ```sh
   sudo vim /usr/lib/systemd/system/rc-local.service
   ```

   添加以下内容：

   ```ini
   [Unit]
   Description=/etc/rc.d/rc.local Compatibility
   ConditionPathExists=/etc/rc.d/rc.local
   
   [Service]
   Type=forking
   ExecStart=/etc/rc.d/rc.local start
   TimeoutSec=0
   RemainAfterExit=yes
   GuessMainPID=no
   
   [Install]
   WantedBy=multi-user.target
   ```

2. **重新加载 systemd 配置**：

   ```sh
   sudo systemctl daemon-reload
   ```

3. **启用 `rc-local` 服务**：

   ```sh
   sudo systemctl enable rc-local
   ```

4. **启动 `rc-local` 服务**：

   ```sh
   sudo systemctl start rc-local
   ```

5. **检查服务状态**：

   ```sh
   sudo systemctl status rc-local
   ```

### 步骤三：编辑 `/etc/rc.d/rc.local`

在 `/etc/rc.d/rc.local` 文件中添加你想要开机自动执行的命令。例如：

```sh
#!/bin/bash
echo "Hello, world!" > /tmp/hello.txt
```

确保文件头部有 shebang (`#!/bin/bash`) 并且文件具有可执行权限：

```sh
sudo chmod +x /etc/rc.d/rc.local
```

### 验证开机启动

重启系统，验证 `/etc/rc.d/rc.local` 中的命令是否执行。如果一切配置正确，应该能看到 `/tmp/hello.txt` 文件中包含 "Hello, world!"。

如果仍然无法生效，建议检查以下几点：

1. **确认 `rc.local` 文件的执行权限**：

   ```sh
   ls -l /etc/rc.d/rc.local
   ```

2. **检查 `rc-local` 服务日志**：

   ```sh
   sudo journalctl -u rc-local
   ```

通过以上步骤，应该可以解决 CentOS 7 中 `/etc/rc.d/rc.local` 开机自动启动失效的问题。如果还有问题，可以检查 `rc.local` 文件中的命令是否正确，以及是否有其他服务或安全设置影响了其执行。