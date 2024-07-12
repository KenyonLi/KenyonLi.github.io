## shell脚本格式化工具

要手动安装 `shfmt` 工具，你可以按照以下步骤进行：

### 1. 下载 `shfmt`

首先，从 `shfmt` 的 GitHub 仓库中下载适合你操作系统的二进制文件：

- 访问 `shfmt` 的 releases 页面：[mvdan/sh](https://github.com/mvdan/sh/releases)。
- 下载与你的操作系统兼容的二进制文件。例如，对于 Linux，通常选择 `shfmt_linux_amd64`。

### 2. 安装 `shfmt`

一旦下载了二进制文件，你可以将其复制到系统的路径中，以便能够从任何位置访问它：

- 解压下载的文件（如果是压缩包）。

- 将二进制文件复制到一个你 PATH 变量包含的目录下，例如 `/usr/local/bin`：

  ```sh
  sudo cp shfmt /usr/local/bin/shfmt
  ```

  确保你有足够的权限执行上述命令（使用 `sudo` 或以 root 身份登录）。

### 3. 验证安装

安装完成后，可以在终端中验证 `shfmt` 是否正确安装。打开一个新的终端窗口或终端会话，执行以下命令：

```sh
shfmt --version
```

如果一切正常，应该会显示 `shfmt` 的版本信息。

### 示例操作

假设你在 Linux 上下载了 `shfmt` 的二进制文件，并希望安装它：

1. **下载 `shfmt` 二进制文件**：

   ```sh
   wget https://github.com/mvdan/sh/releases/download/v3.4.2/shfmt_v3.4.2_linux_amd64
   ```

2. **复制二进制文件到 `/usr/local/bin`**：

   ```sh
   sudo cp shfmt_v3.4.2_linux_amd64 /usr/local/bin/shfmt
   ```

3. **赋予执行权限**（如果需要）：

   ```sh
   sudo chmod +x /usr/local/bin/shfmt
   ```

4. **验证安装**：

   ```sh
   shfmt --version
   ```

   如果成功安装，会显示 `shfmt` 的版本信息。

通过以上步骤，你可以在 Linux 或其他支持的操作系统上手动安装 `shfmt` 工具，并在终端中使用它来格式化 Shell 脚本。