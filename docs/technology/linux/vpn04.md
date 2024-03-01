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

## Trojan-go


## bbr 加速
参考视频
https://v2rayssr.com/bbr.html

``` bash
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
sysctl -p
lsmod | grep bbr
```
##  一键搭建Trojan-Go面板，Trojan-Go支持WebSocket，免费开启CDN隐藏自己VPS的真实IP，从而实现不被墙！
https://v2rayssr.com/trojancdn.html

## 配置 trojan-go 
路径：/usr/local/etc/trojan/config.json
```bash
wget -N --no-check-certificate "https://raw.githubusercontent.com/chiakge/Linux-NetSpeed/master/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
```
安装后直接选 4 启动 BBR 加速；然后再次运行 ./tcp.sh 运行后，选择 10 优化配置；然后重启 VPS 后，测试速度, 够用了。