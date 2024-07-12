## sshpass 工具的使用

这个命令 `sshpass -p * * * * * * rsync -avz /data/jenkins_bachkup/` 似乎是用来通过 `sshpass` 和 `rsync` 自动传输文件，但命令书写存在一些错误。我会逐步解释每一部分并给出正确的命令格式。

### 命令拆解

1. **`sshpass -p * * * * * *`**:
   - `sshpass`: 一个用于非交互式 SSH 密码认证的工具。
   - `-p * * * * * *`: 这里的用法不正确。`sshpass` 后应该是密码，比如 `-p "your_password"`，星号在这里不合适。

2. **`rsync -avz /data/jenkins_bachkup/`**:
   - `rsync`: 一个用于同步文件和目录的工具。
   - `-a`: 归档模式；保留权限、时间戳、符号链接等。
   - `-v`: 详细模式；提供详细的传输信息。
   - `-z`: 压缩文件数据在传输过程中。
   - `/data/jenkins_bachkup/`: 源目录。

### 正确的命令

正确的命令应该如下所示：

```sh
sshpass -p "your_password" rsync -avz /data/jenkins_bachkup/ user@remote_host:/remote/directory/
```

### 解释

1. **`sshpass -p "your_password"`**:
   - 这部分提供了SSH密码进行非交互登录。将 `"your_password"` 替换为实际密码。

2. **`rsync -avz /data/jenkins_bachkup/ user@remote_host:/remote/directory/`**:
   - `rsync -avz`: 使用 `rsync` 命令及其选项归档、详细、压缩。
   - `/data/jenkins_bachkup/`: 本地机器上的源目录。
   - `user@remote_host:/remote/directory/`: 远程机器上的目标目录。将 `user` 替换为用户名，将 `remote_host` 替换为远程机器地址，将 `/remote/directory/` 替换为实际远程目录路径。

### 定时执行命令

如果你希望定时运行这个命令，可以使用 `cron`。以下是如何将这个命令添加到 `crontab` 中以定期运行的示例：

1. 编辑 `crontab` 文件：

    ```sh
    crontab -e
    ```

2. 添加一个 cron 作业（例如，每天午夜运行一次）：

    ```sh
    0 0 * * * sshpass -p "your_password" rsync -avz /data/jenkins_bachkup/ user@remote_host:/remote/directory/
    
    
    ```

### 在 `crontab` 中的完整命令

```sh
0 0 * * * sshpass -p "your_password" rsync -avz /data/jenkins_bachkup/ user@remote_host:/remote/directory/
```

这行在 `crontab` 中将每天午夜执行 `rsync` 命令，使用 `sshpass` 提供 SSH 认证的密码。

### 安全性考虑

使用 `sshpass` 并在脚本或 cron 作业中以明文形式包含密码是不安全的。更安全的替代方案是设置 SSH 密钥认证，并使用密钥进行 `rsync` 操作。这样可以避免在脚本中包含密码。





## 异常问题

> sshpass -p skce010993 rsync -avz /data/jenkins_backup/ root@192.168.3.32:/data/jenkins_backup/
> Host key verification failed.
> rsync error: unexplained error (code 255) at rsync.c(638) [sender=3.1.2]
> 是什么原因

出现 “Host key verification failed” 错误，通常是因为目标主机的SSH密钥不在本地主机的已知主机列表（`~/.ssh/known_hosts`）中，或者目标主机的密钥已更改。

要解决这个问题，可以尝试以下步骤：

1. **手动连接并接受密钥**：
    通过SSH手动连接到目标主机，这样可以接受并存储新的主机密钥。

    ```sh
    ssh root@192.168.3.32
    ```

    如果这是第一次连接到目标主机，系统会提示您接受新的主机密钥，选择“yes”并继续。

2. **移除旧的已知主机密钥**：
    如果目标主机的密钥已更改，您需要从`~/.ssh/known_hosts`文件中删除旧的密钥条目。

    ```sh
    ssh-keygen -R 192.168.3.32
    ```

    然后再次尝试手动连接以接受新的主机密钥。

3. **自动接受新的主机密钥**：
    如果你想在不手动连接的情况下自动接受新的主机密钥，可以在`rsync`命令中添加 `-o StrictHostKeyChecking=no` 选项：

    ```sh
    sshpass -p skce010993 rsync -avz -e "ssh -o StrictHostKeyChecking=no" /data/jenkins_backup/ root@192.168.3.32:/data/jenkins_backup/
    ```

请注意，自动接受新的主机密钥可能会带来安全风险，只有在确保目标主机安全可信的情况下才使用这种方法。