## linux  如何使用 v2ray 

在 Linux 上使用 V2Ray 通常包括以下步骤：下载和安装 V2Ray、配置 V2Ray 客户端、启动 V2Ray 服务以及配置系统代理（如果需要）。以下是详细的步骤指南。

### 1. 下载和安装 V2Ray

#### 使用脚本安装

1. 打开终端并运行以下命令来下载并运行 V2Ray 安装脚本：

   ```sh
   bash <(curl -L -s https://install.direct/go.sh)
   ```

   这个脚本会自动下载、安装并配置 V2Ray。

#### 手动安装

1. 从 V2Ray 的 GitHub 发布页面下载最新版本的 V2Ray 压缩包：

   ```sh
   wget https://github.com/v2ray/v2ray-core/releases/latest/download/v2ray-linux-64.zip
   ```

2. 解压下载的文件：

   ```sh
   unzip v2ray-linux-64.zip -d /usr/local/v2ray
   ```

3. 进入解压后的目录并复制文件：

   ```sh
   cd /usr/local/v2ray
   cp systemd/system/v2ray.service /etc/systemd/system/
   ```

### 2. 配置 V2Ray 客户端

1. 编辑 V2Ray 配置文件（默认路径 `/etc/v2ray/config.json`）：

   ```sh
   nano /etc/v2ray/config.json
   ```

   配置文件的格式如下（这是一个简单的示例配置，实际使用时需要根据您的需求进行调整）：

   ```json
   {
     "inbounds": [
       {
         "port": 1080,
         "listen": "127.0.0.1",
         "protocol": "socks",
         "settings": {
           "auth": "noauth",
           "udp": false,
           "ip": "127.0.0.1"
         }
       }
     ],
     "outbounds": [
       {
         "protocol": "vmess",
         "settings": {
           "vnext": [
             {
               "address": "server_address",
               "port": server_port,
               "users": [
                 {
                   "id": "your_uuid",
                   "alterId": 64
                 }
               ]
             }
           ]
         }
       }
     ]
   }
   ```

   替换 `server_address`、`server_port` 和 `your_uuid` 为实际的 V2Ray 服务器信息。

### 3. 启动 V2Ray 服务

1. 重新加载 systemd 配置：

   ```sh
   systemctl daemon-reload
   ```

2. 启动并启用 V2Ray 服务：

   ```sh
   systemctl start v2ray
   systemctl enable v2ray
   ```

3. 检查 V2Ray 服务状态：

   ```sh
   systemctl status v2ray
   ```

### 4. 配置系统代理（可选）

如果需要全局代理，可以配置系统代理或浏览器代理。

#### 配置全局代理

1. 在终端中设置环境变量：

   ```sh
   export http_proxy=socks5://127.0.0.1:1080
   export https_proxy=socks5://127.0.0.1:1080
   ```

2. 将这些环境变量添加到您的 `~/.bashrc` 或 `~/.zshrc` 文件中，以便在每次启动终端时自动加载：

   ```sh
   echo 'export http_proxy=socks5://127.0.0.1:1080' >> ~/.bashrc
   echo 'export https_proxy=socks5://127.0.0.1:1080' >> ~/.bashrc
   source ~/.bashrc
   ```

#### 配置浏览器代理

1. 安装代理扩展（如 SwitchyOmega）并配置为使用 `127.0.0.1:1080` 作为 SOCKS5 代理。

### 5. 测试连接

可以使用 `curl` 或浏览器测试连接是否成功通过代理：

```sh
curl -x socks5h://127.0.0.1:1080 http://www.google.com
```

如果返回了 Google 的主页 HTML 内容，说明代理配置成功。

通过上述步骤，您可以在 Linux 上安装和配置 V2Ray，以便通过 V2Ray 实现网络代理。根据需要，您可以进一步调整和优化配置。



## 使用脚本指令启用

[参考地址](https://www.witersen.com/?p=1408)

``` bash
#检查配置文件是否有效
v2ray test -config config.json
#执行代码
v2ray run  -config config.json
```



