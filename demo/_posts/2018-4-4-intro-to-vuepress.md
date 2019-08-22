---
title: VuePress 入门
layout: post
category: 前端资源
tags:
  - VuePress
  - 搭建博客
date: 2019-02-14 11:26
update: 2019-02-21 20:12
comments: true
copyright: true
---

VuePress 是一款使用 Vue 驱动的静态网站生成器，是 Vue 的作者 Evan You 为了方便文档的编写而开发的。

* 默认主题与 Vue 官方文档一致
* 简洁，少配置，高性能
* Markdown 专为技术文档提供拓展
* 自带 PWA
* 自定义主题，可定制程度完全由自己决定

> 官方文档：由于 1.x 还处于测试阶段，可能随时变更，所以建议选用 0.x 版本
> * [0.x 版本](https://v0.vuepress.vuejs.org/zh/)
> * [1.x 版本](https://vuepress.vuejs.org/zh/)

<!-- more -->

## 1. 初始化

### 安装

首先需要安装 vuepress

可以使用全局安装：（选一个版本安装即可，使用 yarn 或 npm 都可以）

```bash
yarn add global vuepress # 0.x 版本
yarn add global vuepress@next # 1.x 版本
```

也可以使用局部安装，在你的项目根目录下：

```bash
yarn add -D vuepress
yarn add -D vuepress@next
```

:::danger
注意有一个坑，我遇到过，安装 vuepress@next 以及其他插件时，默认会安装 alpha 0 版本，需要修改 package.json 文件，更改版本号，再重新使用 yarn 安装一下。

另外，全局安装与局部安装在后面的部署命令中会有些差别。
:::

### 结构目录

```
.
├── docs
│   ├── .vuepress
│   │   ├── public
│   │   └── config.js
│   │ 
│   └── README.md
│ 
└── package.json
```

可详细查看：[目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html)

## 2. 配置 config.js 文件

### 基础配置

```javascript
module.exports = {
  title: "destiny'Note",
  description: "生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。",
  base: '/', // 项目根路径
  dest: '/dist/', // 打包后的文件夹路径，为了方便，我把 dist 文件夹放到了根目录上
  // head 标签中的额外内容
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }] // 这个是标签页 logo
  ],
  // 语言配置
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  }
}
```

可详细查看：[配置](https://vuepress.vuejs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)

### 主题配置

```javascript
module.exports = {
  ...
  // 主题配置
  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '归档', link: '/archives/'},
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '关于我', link: '/about/' }
    ],
    
    // 侧边栏
    sidebar: [
      '/'
    ],
    sidebarDepth: 2, // 默认 1 提取到 h2，0 为禁用，2 为 h2，h3
    displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题

    // Git 仓库和编辑链接
    repo: 'username/repo', // 你的仓库
    repoLabel: 'GitHub', // 导航栏上的文本

    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '编辑此页面'
  }
}
```

可详细查看：[默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5)

## 3. 首页

配置 docs 下的 README.md 文件即可：

```markdown
---
home: true
heroImage: /hero.jpg
heroText: Hero
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

首页必须设置 home 为 true。默认样式与官方文档首页一致。

## 4. 开发和部署

### 定义脚本

初始化 package.json，如果是局部安装的话，这个文件已经存在，不需要执行这个命令

```bash
yarn init
```

编辑 package.json 文件，添加如下脚本：（这里需要注意）

```json
{
  ...
  // 全局安装
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
  // 局部安装
  "scripts": {
    "dev": "npx vuepress dev docs",
    "build": "npx vuepress build docs"
  }
}
```

**个人不喜欢官方的写法，就把名称写的简洁一些。**

运行脚本命令：

```bash
yarn dev # 开发
yarn build # 打包
```

### 部署到 GitHub Pages 上

部署到 GitHub 上，首先要在 GitHub 上建立仓库，这里省略。

然后再本地初始化仓库，并关联远程仓库

```bash
git init
git remote add origin <repo> # 你的远程仓库
```

打包之后把整个项目上传到 master 分支上，方便管理

```bash
git add -A
git commit -m 'init blog'
# 首次提交需要 --set-upstream，后续可以去掉
git push --set-upstream origin master # 所有代码推送到远程仓库的 master 分支上
```

单独将打包好的文件上传到 gh-pages 分支上，自动会生成 GitHub Pages，在仓库设置里可以查看到相应地址。

```bash
git subtree push --prefix dist origin gh-pages # 只将 dist 上传到 gh-pages 分支
```

注意，最好配置一个 .gitignore 文件，去掉不需要上传的文件和文件夹。

### 自动化部署

每一次更新完文章之后，都需要敲一大串代码，才能重新部署，显得很繁琐。那么我们来让这些命令合并成一个命令吧。

项目根目录下创建 deploy.sh 文件：

```bash
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 提交到历史区，$1 为运行 sh 时的第一个参数
git add -A
git commit -m $1

# 提交到 master 分支
git push origin master

# 将 dist 文件提交到 gh-pages 分支
git subtree push --prefix dist origin gh-pages

# 退出命令
exit 0
```

然后在 package.json 文件中配置脚本：

```json
{
  "scripts": {
    //...
    "deploy": "bash deploy.sh"
  }
}
```

后续部署直接使用命令：

```bash
yarn deploy "updatedBlog"
```

需要注意的是，后面带的消息，不能使用空格隔开（本人对 shell 脚本不熟悉，查找了也没明白，希望有大神指点一下），使用了空格，就会导致只提交了空格前的消息

另外，这个命令需要在 git bash 中使用，不能在 Windows 的命令行中使用。

## 5. 后续
太喜欢 VuePress 了，因为后面都托管给 Vue 了，所以速度飞快。

后续会出一个如何修改默认主题的文章。
