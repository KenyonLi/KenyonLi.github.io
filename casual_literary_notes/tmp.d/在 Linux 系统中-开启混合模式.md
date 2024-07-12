将网卡（NIC）设置为混合模式（Promiscuous Mode），可以让网络接口接收所有通过网络的流量，而不仅仅是发给它的流量。这样可以用于网络监控和分析。以下是如何在 Linux 和 Windows 系统中进行设置的步骤：

### 在 Linux 系统中

1. **查看当前接口状态**：

   使用 `ip link show` 命令查看网络接口的状态。

   ```bash
   ip link show eth0
   ```

2. **启用混合模式**：

   使用 `ip` 命令启用混合模式：

   ```bash
   sudo ip link set eth0 promisc on
   ```

3. **确认混合模式**：

   再次查看接口状态，确认混合模式已启用：

   ```bash
   ip link show eth0
   ```

   你应该能看到 `PROMISC` 标志：

   ```plaintext
   2: eth0: <BROADCAST,MULTICAST,PROMISC,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
       link/ether 00:0c:29:3e:8e:3e brd ff:ff:ff:ff:ff:ff
   ```

4. **禁用混合模式**：

   如果需要禁用混合模式，可以使用以下命令：

   ```bash
   sudo ip link set eth0 promisc off
   ```

### 在 Windows 系统中

在 Windows 上启用混合模式需要使用专门的软件或驱动程序，例如 Wireshark 配合 WinPcap 或 Npcap。以下是如何使用 Wireshark 进行操作的步骤：

1. **下载和安装 Wireshark**：

   从 [Wireshark 官方网站](https://www.wireshark.org/)下载并安装 Wireshark。

2. **安装 WinPcap 或 Npcap**：

   通常在安装 Wireshark 时会提示安装 WinPcap 或 Npcap。按照提示完成安装。

3. **启动 Wireshark**：

   打开 Wireshark，选择你要设置为混合模式的网络接口。

4. **启用混合模式**：

   当你开始捕获数据包时，Wireshark 会自动将选定的网络接口置于混合模式。你可以通过 Wireshark 的界面查看和分析捕获到的所有流量。

### 其他工具

除了 Wireshark，还有其他工具可以设置 NIC 为混合模式，例如：

- **tcpdump**（Linux）：使用 `tcpdump` 进行数据包捕获时，会自动将网络接口置于混合模式。
- **ifconfig**（Linux）：你也可以使用 `ifconfig` 命令来设置混合模式：

  ```bash
  sudo ifconfig eth0 promisc
  ```

通过这些方法，你可以将网络接口设置为混合模式，以便进行网络监控和数据包分析。



参考地址

https://www.bilibili.com/video/BV1xF411W7EM/?spm_id_from=333.337.search-card.all.click&vd_source=1190d3c215da481e8dc53081b66f56e3

![1718789721335](D:\Administrator\Documents\assets\1718789721335.png)









要使网络接口在 CentOS 7 系统中开机时自动进入混合模式（Promiscuous Mode），可以通过创建或修改网络接口配置文件来实现。以下是详细步骤：

### 1. 创建或修改网络接口配置文件

编辑与网络接口（例如 `eth0`）相关的配置文件。

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
```

在文件中，添加或修改以下内容：

```plaintext
DEVICE=eth0
ONBOOT=yes
PROMISC=yes
```

### 2. 创建脚本文件

在 CentOS 7 中，您可以使用 NetworkManager 的调度程序脚本来设置接口的混合模式。这些脚本会在网络设备启动时执行。

首先，创建调度程序脚本：

```bash
sudo nano /etc/NetworkManager/dispatcher.d/99-promisc
```

在文件中添加以下内容：

```bash
#!/bin/bash

# Set promiscuous mode on for eth0
if [ "$1" == "eth0" ] && [ "$2" == "up" ]; then
    /sbin/ip link set dev eth0 promisc on
fi
```

### 3. 设置脚本权限

确保脚本具有可执行权限：

```bash
sudo chmod +x /etc/NetworkManager/dispatcher.d/99-promisc
```

### 4. 重启网络服务

重启网络服务以应用更改：

```bash
sudo systemctl restart NetworkManager
```

### 5. 验证配置

重启系统后，验证 `eth0` 是否处于混合模式：

```bash
ip link show eth0
```

你应该能看到 `PROMISC` 标志：

```plaintext
2: eth0: <BROADCAST,MULTICAST,PROMISC,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP mode DEFAULT group default qlen 1000
    link/ether 00:0c:29:3e:8e:3e brd ff:ff:ff:ff:ff:ff
```

通过以上步骤，你可以确保 `eth0` 接口在每次系统启动时自动进入混合模式。

