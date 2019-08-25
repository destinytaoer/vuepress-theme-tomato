#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd demo/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'update demo'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:destinytaoer/vuepress-theme-tomato.git master:gh-pages

cd -