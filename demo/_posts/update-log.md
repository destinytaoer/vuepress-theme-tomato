---
title: 主题更新日志
layout: post
category: 技术文档
tags:
  - VuePress
  - blog
  - theme
date: 2019-08-26 17:16
update: 2019-08-26 17:16
comments: true
copyright: true
---

## 1.0.1

- 修改 demo 展示文章
- 更新 README
- 修复 BackToTop 组件的 z-index[BUG]
- 设置 Footer 高度，限制目录高度[BUG]
- 修复 Contact hover 出现滚动条[BUG]
- 增加 Post 底部的格言区域展示配置[Feature]
  - 在 frontmatter 中设置 closeMotto 为 true 关闭 motto
- 增加 vssue 使用配置
  - 在 themeConfig 中设置 vssue 为 true 开启 Vssue 功能

<!-- more -->

## 1.0.0

这是主题发布的第一个版本。

布局组件结构：

- Sidebar 目录侧边栏（默认主题组件）
- Header 顶部
  - Aside 左侧边栏，包括头像、昵称、描述等
    - Nav 导航栏
    - Sidebar 移动端展示目录（默认主题组件）
      - Contact 联系方式，插入到 Sidebar 插槽中
  - SearchBox 搜索功能（默认主题组件）
- Layout 布局组件，用以设置 md 的展示组件，以下是相互替换的组件
  - Blog 首页文章列表
    - Pagination 分页
  - Post 文章展示
    - Content 默认 md 转换的内容组件（默认主题组件）
    - Quote 格言（全局组件）
    - Vssue 评论
  - Tags 标签云展示
  - categories 分类云展示
  - Tag 单个标签的文章列表展示
    - Pagination 分页
  - Category 单个分类的文章列表展示
    - Pagination 分页
- Footer 底部