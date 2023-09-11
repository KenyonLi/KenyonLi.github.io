#!/usr/bin/env sh
set -e 
git branch -M main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git pull -f git@github.com:KenyonLi/KenyonLi.github.io.git main
 
 cd -