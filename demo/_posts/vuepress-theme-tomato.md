---
title: 主题使用文档
layout: post
category: 技术文档
tags:
  - VuePress
  - blog
  - theme
date: 2019-08-26 17:21
update: 2019-08-26 17:21
comments: true
copyright: true
---

这是一款 Vuepress 的简约博客主题。

## 安装

```bash
npm install -D vuepress-theme-tomato
# or
yarn add -D vuepress-theme-tomato
```

<!-- more -->

## 使用

直接在配置 `.vuepress/config.js` 中使用主题：

```js
module.exports = {
  theme: 'tomato'
}
```

## 配置

### themeConfig

- avatar：左侧边栏的头像
- nickname：左侧边栏头像下面的昵称
- contact：左侧边栏下面的联系方式图标
  - Array{icon, text, link}
- motto：每篇文章底部的格言区域
  - 在 frontmatter 中设置 closeMotto 为 true 关闭底部格言
  - 你可以直接在 md 文件中使用 Quote 组件
- vssue：文章底部评论区
  - 设置为 true 开启，需要引入插件，请继续往下看

### frontmatter

- comments：文章是否需要开启评论
- date：文章创建日期
- update：文章更新日期
- tag/tags：文章标签
- category/categories：文章分类

### Vssue

本主题集成的 Vssue 评论，其配置可以参考：[Vssue](https://vssue.js.org/zh/guide/vuepress.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)

```js
module.exports = {
  plugins: [
    '@vssue/vuepress-plugin-vssue',
    {
      // 设置 `platform` 而不是 `api`
      platform: 'github',

      // 其他的 Vssue 配置
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }
  ]
}
```

### 归档插件

这个插件只是因为官方插件 plugin-blog 还不完善，没有提供相应配置，才自己瞎搞出来的。只是为了使归档页面进行分页，实际上也不是必要的，需要你自行考虑。

```js
module.exports = {
  plugins: [
    [require('vuepress-theme-tomato/plugins/archive/index'), { lengthPerPage: 20 }]
  ]
}
```

## 主题进度

### 布局

- [x] Header
  - [x] SearchBox 使用默认主题组件
- [x] Footer
  - [x] 不蒜子统计总访问数
- [x] Layout
- [x] Post
  - [ ] 使用 leanCloud 添加文章阅读量统计
  - [ ] 文章底部版权声明
  - [ ] 点赞按钮和 leanCloud 保存点赞数
- [x] Aside
- [x] SideBar 使用默认主题组件
- [x] Nav 竖向显示的导航
  - [x] 带图标，适应外链
  - [ ] 多级导航（暂不支持）
- [x] Vssue 评论

### 小组件

- [x] Pagination
- [x] PostList 文章列表
  - [x] 紧凑型，
  - [ ] 宽松型（暂未将首页列表集成进去）
- [x] TagList 文章的标签列表（多颜色的）
- [x] CardList 标签和分类列表
- [x] Contact 联系方式图标
- [x] BackToTop 回到顶部按钮
- [ ] CopyRight 版权声明区块

### 全局组件

- [x] Quote 引号包裹的一个块，用于格言区域

## 意见反馈

请直接在下方进行评论，非常感谢您的支持！
