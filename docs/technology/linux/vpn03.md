---
title: 'Linux vpn 科学上网'
date: "2024-02-26"
tags:
- 'debian'
- 'linux'
- 'v2rayn'
categories:
- '技术'
---

## 目录
[[toc]]

## 搭建 vpn 使用 x-ui 部署  


### 免费给你的VPS添加无数个IPv6地址，无限落地IP，节点永不被墙，网赚跨境电商、批量注册、养号运营、网页爬虫、IP防风控必备操作，单IP服务器变身站群服务器，免费IPv6隧道，解锁奈飞

["VPS添加无数个IPv6地址"](https://www.youtube.com/watch?v=kKb0iNZwb9g)

如果是第一次执行会先安装xray
#### 在线脚本安装
``` bash
bash <(curl -fsSLk https://raw.githubusercontent.com/bulianglin/demo/main/xrayL.sh)  socks
```

#### 离线脚本安装
创建 `xrayL.sh`文件，写入以下脚本
``` bash
DEFAULT_START_PORT=20000                         #默认起始端口
DEFAULT_SOCKS_USERNAME="userb"                   #默认socks账号
DEFAULT_SOCKS_PASSWORD="passwordb"               #默认socks密码
DEFAULT_WS_PATH="/ws"                            #默认ws路径
DEFAULT_UUID=$(cat /proc/sys/kernel/random/uuid) #默认随机UUID

IP_ADDRESSES=($(hostname -I))

install_xray() {
	echo "安装 Xray..."
	apt-get install unzip -y || yum install unzip -y
	wget https://github.com/XTLS/Xray-core/releases/download/v1.8.3/Xray-linux-64.zip
	unzip Xray-linux-64.zip
	mv xray /usr/local/bin/xrayL
	chmod +x /usr/local/bin/xrayL
	cat <<EOF >/etc/systemd/system/xrayL.service
[Unit]
Description=XrayL Service
After=network.target

[Service]
ExecStart=/usr/local/bin/xrayL -c /etc/xrayL/config.toml
Restart=on-failure
User=nobody
RestartSec=3

[Install]
WantedBy=multi-user.target
EOF
	systemctl daemon-reload
	systemctl enable xrayL.service
	systemctl start xrayL.service
	echo "Xray 安装完成."
}
config_xray() {
	config_type=$1
	mkdir -p /etc/xrayL
	if [ "$config_type" != "socks" ] && [ "$config_type" != "vmess" ]; then
		echo "类型错误！仅支持socks和vmess."
		exit 1
	fi

	read -p "起始端口 (默认 $DEFAULT_START_PORT): " START_PORT
	START_PORT=${START_PORT:-$DEFAULT_START_PORT}
	if [ "$config_type" == "socks" ]; then
		read -p "SOCKS 账号 (默认 $DEFAULT_SOCKS_USERNAME): " SOCKS_USERNAME
		SOCKS_USERNAME=${SOCKS_USERNAME:-$DEFAULT_SOCKS_USERNAME}

		read -p "SOCKS 密码 (默认 $DEFAULT_SOCKS_PASSWORD): " SOCKS_PASSWORD
		SOCKS_PASSWORD=${SOCKS_PASSWORD:-$DEFAULT_SOCKS_PASSWORD}
	elif [ "$config_type" == "vmess" ]; then
		read -p "UUID (默认随机): " UUID
		UUID=${UUID:-$DEFAULT_UUID}
		read -p "WebSocket 路径 (默认 $DEFAULT_WS_PATH): " WS_PATH
		WS_PATH=${WS_PATH:-$DEFAULT_WS_PATH}
	fi

	for ((i = 0; i < ${#IP_ADDRESSES[@]}; i++)); do
		config_content+="[[inbounds]]\n"
		config_content+="port = $((START_PORT + i))\n"
		config_content+="protocol = \"$config_type\"\n"
		config_content+="tag = \"tag_$((i + 1))\"\n"
		config_content+="[inbounds.settings]\n"
		if [ "$config_type" == "socks" ]; then
			config_content+="auth = \"password\"\n"
			config_content+="udp = true\n"
			config_content+="ip = \"${IP_ADDRESSES[i]}\"\n"
			config_content+="[[inbounds.settings.accounts]]\n"
			config_content+="user = \"$SOCKS_USERNAME\"\n"
			config_content+="pass = \"$SOCKS_PASSWORD\"\n"
		elif [ "$config_type" == "vmess" ]; then
			config_content+="[[inbounds.settings.clients]]\n"
			config_content+="id = \"$UUID\"\n"
			config_content+="[inbounds.streamSettings]\n"
			config_content+="network = \"ws\"\n"
			config_content+="[inbounds.streamSettings.wsSettings]\n"
			config_content+="path = \"$WS_PATH\"\n\n"
		fi
		config_content+="[[outbounds]]\n"
		config_content+="sendThrough = \"${IP_ADDRESSES[i]}\"\n"
		config_content+="protocol = \"freedom\"\n"
		config_content+="tag = \"tag_$((i + 1))\"\n\n"
		config_content+="[[routing.rules]]\n"
		config_content+="type = \"field\"\n"
		config_content+="inboundTag = \"tag_$((i + 1))\"\n"
		config_content+="outboundTag = \"tag_$((i + 1))\"\n\n\n"
	done
	echo -e "$config_content" >/etc/xrayL/config.toml
	systemctl restart xrayL.service
	systemctl --no-pager status xrayL.service
	echo ""
	echo "生成 $config_type 配置完成"
	echo "起始端口:$START_PORT"
	echo "结束端口:$(($START_PORT + $i - 1))"
	if [ "$config_type" == "socks" ]; then
		echo "socks账号:$SOCKS_USERNAME"
		echo "socks密码:$SOCKS_PASSWORD"
	elif [ "$config_type" == "vmess" ]; then
		echo "UUID:$UUID"
		echo "ws路径:$WS_PATH"
	fi
	echo ""
}
main() {
	[ -x "$(command -v xrayL)" ] || install_xray
	if [ $# -eq 1 ]; then
		config_type="$1"
	else
		read -p "选择生成的节点类型 (socks/vmess): " config_type
	fi
	if [ "$config_type" == "vmess" ]; then
		config_xray "vmess"
	elif [ "$config_type" == "socks" ]; then
		config_xray "socks"
	else
		echo "未正确选择类型，使用默认sokcs配置."
		config_xray "socks"
	fi
}
main "$@"
```


``` bash
bash < ./xrayL.sh  sokcs 
```
Window 端下载 https://github.com/2dust/v2rayN/wiki/Release-files-introduction
```bash
b.huaqianle.cf
```
## 给你的VPS添加无限个ipv6地址

https://bulianglin.com/archives/ipv6.html


## vpn 搭建 使用 X-UI 安装部署配置

youtube播放地址：https://youtu.be/SpxTFes1B8U

### VPS购买
美国CN2 GIA线路：https://bwg.880805.xyz

香港CN2 GIA线路：https://hk.880805.xyz

日本CN2 GIA线路：https://jp.880805.xyz

优惠码： BWHCCNCXVV

### 安装X-UI
bash <(curl -Ls https://raw.githubusercontent.com/FranzKafkaYu/x-ui/956bf85bbac978d56c0e319c5fac2d6db7df9564/install.sh) 0.3.4.4
### 管理脚本使用方法
``` bash
x-ui 管理脚本使用方法: 
----------------------------------------------
x-ui              - 显示管理菜单 (功能更多)
x-ui start        - 启动 x-ui 面板
x-ui stop         - 停止 x-ui 面板
x-ui restart      - 重启 x-ui 面板
x-ui status       - 查看 x-ui 状态
x-ui enable       - 设置 x-ui 开机自启
x-ui disable      - 取消 x-ui 开机自启
x-ui log          - 查看 x-ui 日志
x-ui v2-ui        - 迁移本机器的 v2-ui 账号数据至 x-ui
x-ui update       - 更新 x-ui 面板
x-ui install      - 安装 x-ui 面板
x-ui uninstall    - 卸载 x-ui 面板
x-ui geo          - 更新 geo  数据

```

### 各平台客户端
``` bash
Windows（v2rayN）：https://github.com/2dust/v2rayN/releases/tag/6.23

Android（v2rayNG）：https://github.com/2dust/v2rayNG/releases/tag/1.8.5

IOS（shadowrocket）：https://apps.apple.com/app/shadowrocket/id932747118
```


### 证书安装
``` bash 

#安装证书工具：
curl https://get.acme.sh | sh; apt install socat -y || yum install socat -y; ~/.acme.sh/acme.sh --set-default-ca --server letsencrypt

#三种方式任选其中一种，申请失败则更换方式
#申请证书方式1： 
~/.acme.sh/acme.sh  --issue -d 149-28-148-93.nip.io --standalone -k ec-256 --force --insecure
~/.acme.sh/acme.sh  --issue -d 你的域名 --standalone -k ec-256 --force --insecure
#申请证书方式2： 
~/.acme.sh/acme.sh --register-account -m "${RANDOM}@chacuo.net" --server buypass --force --insecure && ~/.acme.sh/acme.sh  --issue -d 你的域名 --standalone -k ec-256 --force --insecure --server buypass

~/.acme.sh/acme.sh --register-account -m "${RANDOM}@chacuo.net" --server buypass --force --insecure && ~/.acme.sh/acme.sh  --issue -d 149-28-148-93.nip.io --standalone -k ec-256 --force --insecure --server buypass

#申请证书方式3： 
~/.acme.sh/acme.sh --register-account -m "${RANDOM}@chacuo.net" --server zerossl --force --insecure && ~/.acme.sh/acme.sh  --issue -d  149-28-148-93.nip.io --standalone -k ec-256 --force --insecure --server zerossl

#安装证书：
~/.acme.sh/acme.sh --install-cert -d 你的域名 --ecc --key-file /etc/x-ui/server.key --fullchain-file /etc/x-ui/server.crt
~/.acme.sh/acme.sh --install-cert -d 149-28-148-93.nip.io --ecc --key-file /etc/x-ui/server.key --fullchain-file /etc/x-ui/server.crt

```
 
## Reality寻找适合的目标网站
查询ASN：https://tools.ipip.net/as.php

寻找目标：https://fofa.info

  
``` bash
asn=="20473" && country=="US" && port=="443" && cert!="Let's Encrypt" && cert.issuer!="ZeroSSL" && status_code="200"
```

``` bash
~/.acme.sh/acme.sh  --issue -d 45-76-9-193.nip.io --standalone -k ec-256 --force --insecure
~/.acme.sh/acme.sh --install-cert -d 45-76-9-193.nip.io --ecc --key-file /etc/x-ui/server.key --fullchain-file /etc/x-ui/server.crt
```






### 检测端口是否被封
```bash
https://tcp.ping.pe/

https://tcp.ping.pe/45.76.9.193:22
```



### 视频文稿（忽略）
目前科学上网用的节点
主要分为机场节点和自建节点
二者属于互补的关系
形象点的比喻自建节点好比私家车
机场节点好比公交车
双方各有优劣
自建节点的主要优势在于节点私人专享
比较稳定 IP固定不会随意变动
没有内容审计
相对的机场节点是一群人使用同一个节点
偶尔还会被攻击
难免会出现不稳定的情况
IP地址可能会随时发生变化
导致某些网站被封控
并且为了防止节点被滥用
机场一般都会做内容审计
屏蔽代理某些端口或者网站
而机场的主要优势在于地区丰富 上手也比较简单
出于各种原因
很多朋友都想搭建属于自己的专属稳定节点
网上也有非常多的搭建教程
但很多朋友是纯小白
不知道该选择哪一种协议进行搭建
有些教程可能也过时了
所以本期就从零基础的角度
保姆级的教大家三种目前最稳定
最安全的节点搭建方式
之前的零基础搭建教程存在TIT特征
在有些地区已经被明显针对了
存在端口被封的情况
一些朋友端口被封后会找我寻求帮助
我让他们更换端口重新搭建其中一种
经过长期观察
没有再出现端口被封的情况
当然我也不敢肯定
这样搭建就一定不会被封
只能说这种方式还没有被防火墙针对
相对的会更稳定一点
你可以三种全部搭建
也可以选择搭建其中一种
另外本期教程是针对纯小白用户 会尽量细化操作步骤
如果觉得很啰嗦还望大家理解
并且为了最大化的降低难度
教程基本上不需要敲代码
也不会花时间解释为什么要这样操作
只需要按照视频一步步操作
一定可以成功搭建属于自己的节点
在开始搭建节点之前
你需要准备一台VPS
并且为了有高速稳定的科学上网体验
需要确保VPS的线路质量
有些朋友以前可能也尝试搭建过节点
但是一到晚高峰就卡顿严重
很快就弃坑了
这通常是因为你的VPS走的线路太拥堵了
就好比开车去往同一目的地
高速公路限速120码
四车道 没有红绿灯
而城市道路限速60码
两车道 路口有红绿灯 晚高峰拥堵严重
走高速公路肯定要比城市道路快的多
但是走高速要交过路费
所以相同配置的VPS如果价格差异巨大
很有可能是走的线路不同
对于我们个人用户而言
能买到的最高端的线路是CN2 GIA
属于网络中的高速公路
尤其是对于电信用户来讲
直连要想在晚高峰有高速稳定的科学上网体验
CN2 GIA是最好的选择
本期视频中用到的VPS是搬瓦工的CN2 GIA线路
这是我推荐了很久的线路 体验非常稳定
但是GIA线路的价格比较贵
不是所有人都能接受
你可以自行寻找VPS商家
不会影响接下来的搭建操作
另外搬瓦工的VPS支持30天全额退款
并且保证分配的是没有被封的干净IP
不用担心买到被墙的IP
他们家有美国 香港 日本的GIA线路
香港和日本对比美国主要是延迟低了很多
适合游戏用户
不过价格比美国贵了将近一倍
我们普通上网用户选择美国即可
我们需要关注它的速率和流量
2.5G个人使用相当于不限速
月流量1000G对于大部分用户而言都是足够的
这是最低配 如果你觉得不够用
可以点击这里查看所有规格
选择查找
输入GIA
可以在这里找到不同的流量规格
我这里就以最低配做演示
它这里的价格是季付50刀
半年付90刀
年付170刀
大家按需选择
点击添加到购物车
复制这个优惠码
粘贴到这里
点击验证
可以获得一定的优惠
点击checkout结账
需要你填入基本信息进行注册
可以随便输入
但是邮箱地址和密码要记得
登录的时候要用
手机号建议输入你的真实号码
我这里视频演示就随便输入
勾选同意服务条款
选择支付方式
点击下单
提示我们要验证邮箱
登录你的邮箱
查收邮件
复制验证码
粘贴上去
点击验证
点击中间的支付按钮
选择支付方式
付款成功后回到商家页面
状态显示已支付
点击上方的services
跟着视频演示进入VPS的控制面板
先将需要用到的信息复制出来
点击这里 修改root密码
点击按钮生成新的密码
将密码复制出来
用户名填写root
将密码粘贴上去
你的VPS可能是在其他商家购买的
操作界面不太一样
但是都能找到这4个信息
接下来的操作就是通用的了
随便打开某个文件夹
在地址栏中输入CMD
回车 进入命令行终端
在文本文件中输入ssh 空格
再输入用户名
加上@符号
再输入IP地址
空格 输入 -p 空格
再输入端口号
选中这条命令
按Ctrl+c复制
来到命令行
直接点击鼠标右键将命令粘贴上去
回车 出现一行提示信息输入yes 回车
提示我们输入密码
复制密码
在命令行中直接点击一下鼠标右键 进行粘贴
注意 只需要点击一下鼠标右键就可以了
你会发现没有任何反应
但实际上密码已经粘贴上去了
只是没有显示
回车 看到了#号这一行
说明我们已经成功的连接到了VPS
如果出现其他错误
建议详细检查自己的操作步骤
或者退出命令行重新操作
接着复制这条指令安装x-ui面板
这些用到的代码我会放在视频下方的说明栏
请大家自行获取
点击鼠标右键粘贴
回车执行
大家在安装的过程中如果看到进度好像卡住了没动
建议多等一会
我视频为了控制时长会把等待比较久的地方剪掉
实际上并没有这么快速
提示我们是否设置账号密码
输入y 回车
按你的需求设置账号密码
建议复杂一点
端口随便设置一个60000以下的
比如10000
回车 当出现这个界面就说明XUI面板安装成功了
复制IP地址
在浏览器地址栏粘贴
后面加上英文的冒号
输入我们刚才设置的端口10000 回车
输入刚才设置的账号密码进行登录
登录成功后 点击切换版本
选择1.8.3
如果后面发布了新的版本
建议还是选择1.8.3
一切前期工作准备就绪
接下来正式开始搭建节点
你可以选择搭建其中一种
也可以全部搭建
首先搭建第一种最简单的节点
点击入站列表
添加入站备注
这里输入vmess+ws协议选择vmess
点击+号添加一个用户
将网络改成ws
复制你的ID前面一小段
粘贴到路经这里
注意前面的斜杠不要删掉了
点击添加
第一种vmess+ws的节点就搭建好了 非常简单
这种对于tls会封端口的地区有奇效
而且不挑客户端
基本上任何代理工具都支持这种节点
点击操作选择二维码
你可以用你手机的代理工具
扫描屏幕上的二维码
导入节点后就能直接使用了
或者点击复制节点链接
从剪贴板粘贴节点
这是在各个平台上推荐使用的代理工具
下载地址我这里演示Windows
点击进入网址
点击下载这个zz开头的压缩包
下载完成后打开压缩包
选择解压到桌面
打开刚才解压的文件夹
双击运行主程序
窗口一闪而过
可以在右下角的托盘点击图标打开
点击服务器
选择从剪贴板导入刚才我们复制的节点
选中节点 点击鼠标右键
选择测试真连接延迟
有延迟说明可以正常使用
再来测一下下载速度
我家是100兆的宽带
目前是晚高峰时段
可以轻松跑满
选择自动配置系统代理
此时浏览器就应该可以正常科学上网了
尝试访问谷歌
如果你和我一样出现这样的错误信息
可以尝试退出代理工具
重新打开
刷新网页
可以正常访问
尝试访问YouTube
也是没有问题的
网页的内容加载速度非常快
这就是线路好的优势 无视晚高峰
接下来搭建第二种节点
后面的操作稍微麻烦一点
如果你觉得第一种节点已经能满足你的需求
后面的搭建就可以不用跟着操作了
点击添加入站备注填入vless+vision
点击添加用户
打开tls
flow选择vision
将这个IP地址的3个点改成3个减号
在结尾加上.nip.io
全选复制
将 你的域名 这四个字 替换为刚才我们复制的网址
然后复制第一条指令
打开VPS的命令行
点击鼠标右键粘贴命令 回车执行
然后执行第2条指令
最后执行第3条指令
按住鼠标左键拖动选中这个路径
然后点一下鼠标右键 即可将其复制到剪贴板
将其粘贴到密钥文件路径
同样的操作复制下面这条路径
将其粘贴到上面的公钥文件路径 点击添加
此时第二种节点也搭建好了
同样的 你可以使用手机上的代理工具
扫描屏幕上的二维码导入节点
注意这个节点不一定所有代理软件都支持
建议使用本视频推荐的客户端 复制节点连接
打开代理工具将其导入进来
可以简单测个速
有延迟说明可以正常使用
下载速度也是没有问题的
另外建议将节点的网址改成IP地址
这样会稍微更好一点
接下来搭建第三种节点
点击添加入站
备注填入vless+vision+reality
端口改成443
点击加号添加一个用户
开启reality
flow改成vision
将目标网站的网址部分改成1.1.1.1
注意保留结尾的冒号443
复制ID前面一小部分
粘贴到可选域名 结尾加上.com 点击添加
这样第三种节点也搭建好了
比第二种还要简单
使用同样的方式将节点导入到代理工具中
注意这种节点不一定所有代理软件都支持
建议使用本视频推荐的客户端
尝试进行测速
可以正常使用
这样搭建的reality节点比较稳定
但是伪装不是特别好
不过伪装不好并不代表数据不安全
也不代表一定会被封
小白用户建议跟我这样操作即可
如果你有所顾虑 也可以修改目标网址为大厂网址
点击这个符号随机获取内置的域名
这个speedtest不要用
具体原因可以看我上期视频
以这个域名为例 点击修改
修改之后 你需要重新将节点链接导入到代理工具中
同样的也可以正常使用
这样的伪装稍微好一点
但是如果大家都用这同一个网址则伪装也会大打折扣
除了这两种
还有一种更好的伪装方式操作稍微麻烦一点
并且没有前面两种稳定
可能会出现节点没有被封但是不能上网的情况
如果选择继续操作希望你能自行解决
节点可能无法使用的问题
重新编辑节点
先进入这个网址查看一下你IP的asn
将VPS的IP地址粘贴上去进行查询
可以看到as号是25820
复制一下 将其粘贴到这里替换掉
这里输入你VPS所在位置缩写
比如香港就输入HK
日本输入JP 韩国输入KR
我的VPS是美国洛杉矶 所以输入US
复制这段代码 进入这个网址
将代码粘贴上去 点击搜索
可以在这里找到合适的目标网站
有几个前提
像这种只有IP没有域名的网址稍微麻烦一点
本期不演示 直接排除
证书这里有个黄色图标的排除
网址内容是中文的排除
这种xyz小众域名的排除
没有正常网页内容的排除
比如这个网址进去看一下
不是正常的网页 所以排除掉
再尝试这个网址 建议在不翻墙的情况下访问
可以看到这是一个正常的网页
跟着视频演示找到开发者工具
点击security
如果这里显示TLS 1.3
说明这个网址可以当做目标网站
如果是TLS 1.2或者是其他版本则不支持
需要再找其他网站
复制这个网址
将其替换掉
包括下面的可选域名
点击修改
重新导入到代理工具中
可以正常使用
这种伪装是最好的
但是正如之前说的可能不太稳定
你需要自己权衡一下利弊
如果你在第一页没有找到合适的网站
点击第二页会提示你需要登录
随便使用邮箱注册一个免费账号即可
另外这样挑出来的网址延迟也会非常低
适合reality节点
我们可以在服务器上ping一下刚才选出来的网址
可以看到延迟非常低
最后再来说一下怎么判断端口是否被封
端口被封的原因是多方面的
目前并没有哪一种节点可以保证不被封
本期讲的这三种方式也不例外
所以如果你的节点突然无法使用了
可以用这个方式进行排查
在这个网址后面加上你VPS的IP地址
输入冒号 然后加上你节点使用的端口号
如果网页显示的都是绿色 说明没有被封
这种情况下如果节点无法使用
需要检查节点参数是否有问题
比如reality节点的目标网站是否有问题
如果网页全部显示红色
说明国内国外都无法访问你的节点
不能代表端口被封了 建议检查VPS的相关服务
如果只有底下这些中国显示红色
则可以很明确的判断端口被封了
端口被封后建议使用其他搭建方式
你也可以尝试更换端口
将被封的端口改成其他端口即可
端口号在65535以下都可以
比如65000
改完之后将节点重新导入到代理工具中使用即可
最后再提醒一下大家
如果你点了面板设置
第一次进入的时候会自动帮你更改网址路径
点击确认 然后会自动跳转到新网址
下次再进入面板就需要通过这个新网址才能进入
建议将其保存为书签 防止忘记了

