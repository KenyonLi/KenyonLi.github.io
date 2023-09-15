#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
 
git init
git add -A
git commit -m 'One click submission blog file'
git branch -M main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# 同步
git pull  git@github.com:KenyonLi/KenyonLi.github.io.git main
# 推送
git push  git@github.com:KenyonLi/KenyonLi.github.io.git main
cd -
