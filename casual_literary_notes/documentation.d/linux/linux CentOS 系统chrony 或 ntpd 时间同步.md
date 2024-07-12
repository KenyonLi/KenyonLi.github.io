## linux CentOS 系统`chrony` 或 `ntpd` 时间同步

在 CentOS 系统中，您可以使用 `chrony` 或 `ntpd` 服务来与网络时间同步。以下是详细的步骤指南：

### 使用 Chrony 同步时间

Chrony 是一个网络时间协议 (NTP) 实现，用于保持计算机系统的时钟同步。

#### 安装 Chrony

1. 安装 `chrony` 包：

   ```sh
   sudo yum install chrony
   ```

2. 启动并启用 `chronyd` 服务：

   ```sh
   sudo systemctl start chronyd
   sudo systemctl enable chronyd
   ```

3. 检查 `chronyd` 服务状态：

   ```sh
   sudo systemctl status chronyd
   ```

#### 配置 Chrony

1. 编辑 `chrony` 配置文件 `/etc/chrony.conf`：

   ```sh
   sudo nano /etc/chrony.conf
   ```

   确保配置文件中包含您要使用的 NTP 服务器。例如：

   ```plaintext
   server 0.centos.pool.ntp.org iburst
   server 1.centos.pool.ntp.org iburst
   server 2.centos.pool.ntp.org iburst
   server 3.centos.pool.ntp.org iburst
   ```

2. 重新启动 `chronyd` 服务以应用配置更改：

   ```sh
   sudo systemctl restart chronyd
   ```

3. 检查时间同步状态：

   ```sh
   chronyc tracking
   ```

   您应该会看到类似以下的输出，表示时间同步状态：

   ```plaintext
   Reference ID    : 123.45.67.89 (ntp.example.com)
   Stratum         : 3
   Ref time (UTC)  : Wed Jul 11 10:23:45 2024
   System time     : 0.000000123 seconds slow of NTP time
   Frequency       : 12.345 ppm slow
   ```

### 使用 NTPD 同步时间

`ntpd` 是另一种用于同步系统时间的网络时间协议守护进程。

#### 安装 NTPD

1. 安装 `ntp` 包：

   ```sh
   sudo yum install ntp
   ```

2. 启动并启用 `ntpd` 服务：

   ```sh
   sudo systemctl start ntpd
   sudo systemctl enable ntpd
   ```

3. 检查 `ntpd` 服务状态：

   ```sh
   sudo systemctl status ntpd
   ```

#### 配置 NTPD

1. 编辑 `ntp` 配置文件 `/etc/ntp.conf`：

   ```sh
   sudo nano /etc/ntp.conf
   ```

   确保配置文件中包含您要使用的 NTP 服务器。例如：

   ```plaintext
   server 0.centos.pool.ntp.org iburst
   server 1.centos.pool.ntp.org iburst
   server 2.centos.pool.ntp.org iburst
   server 3.centos.pool.ntp.org iburst
   ```

2. 重新启动 `ntpd` 服务以应用配置更改：

   ```sh
   sudo systemctl restart ntpd
   ```

3. 检查时间同步状态：

   ```sh
   ntpq -p
   ```

   您应该会看到类似以下的输出，表示时间同步状态：

   ```plaintext
        remote           refid      st t when poll reach   delay   offset  jitter
   ==============================================================================
   *ntp.example.com .GPS.            1 u   46   64  377    0.123    0.456   0.789
   ```

### 手动同步时间

如果您需要手动同步时间，可以使用以下命令：

```sh
sudo chronyc -a 'burst 4/4'
```

或

```sh
sudo ntpdate -u pool.ntp.org
```

### 确认时间同步

无论使用哪种方法，您都可以使用以下命令检查系统时间：

```sh
date
```

这将显示当前系统时间。确保时间与预期一致。

通过上述步骤，您可以在 CentOS 系统上设置并与网络时间服务器同步系统时间。选择 `chrony` 或 `ntpd` 取决于您的需求和偏好。





在 CentOS 系统上与网络时间同步，您可以使用 `chrony` 或 `ntpd` 工具。推荐使用 `chrony`，因为它是 CentOS 7 和 CentOS 8 的默认时间同步工具。首先，确保 `chrony` 已安装，如果没有，您可以通过 `yum` 安装：

```sh
sudo yum install chrony
```

安装完成后，编辑配置文件 `/etc/chrony.conf` 来指定 NTP 服务器。默认情况下，CentOS 的 `chrony.conf` 文件已经包含了一些公共 NTP 服务器，例如 `pool 2.centos.pool.ntp.org iburst`。您可以根据需要添加或修改这些服务器。

完成配置后，启动并启用 `chrony` 服务：

```sh
sudo systemctl start chronyd
sudo systemctl enable chronyd
```

确保 `chrony` 服务正在运行并同步时间：

```sh
sudo systemctl status chronyd
```

您还可以使用 `chronyc` 命令查看同步状态和 NTP 服务器信息：

```sh
chronyc tracking
chronyc sources
```

这些命令会显示系统时间与 NTP 服务器之间的偏差以及当前使用的 NTP 服务器。

如果您更喜欢使用 `ntpd`，可以安装 `ntp` 包：

```sh
sudo yum install ntp
```

然后编辑配置文件 `/etc/ntp.conf` 来指定 NTP 服务器。启动并启用 `ntpd` 服务：

```sh
sudo systemctl start ntpd
sudo systemctl enable ntpd
```

检查 `ntpd` 服务状态：

```sh
sudo systemctl status ntpd
```

通过运行 `ntpq -p` 查看当前 NTP 服务器和同步状态。无论选择 `chrony` 还是 `ntpd`，这些步骤都能帮助您的 CentOS 系统与网络时间同步，确保系统时钟的准确性。