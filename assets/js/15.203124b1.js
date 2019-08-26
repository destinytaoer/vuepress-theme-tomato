(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{431:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("这是一款 Vuepress 的简约博客主题。")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -D vuepress-theme-tomato\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D vuepress-theme-tomato\n")])])]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("直接在配置 "),a("code",[t._v(".vuepress/config.js")]),t._v(" 中使用主题：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tomato'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("h3",{attrs:{id:"themeconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig","aria-hidden":"true"}},[t._v("#")]),t._v(" themeConfig")]),t._v(" "),a("ul",[a("li",[t._v("avatar：左侧边栏的头像")]),t._v(" "),a("li",[t._v("nickname：左侧边栏头像下面的昵称")]),t._v(" "),a("li",[t._v("contact：左侧边栏下面的联系方式图标\n"),a("ul",[a("li",[t._v("Array{icon, text, link}")])])]),t._v(" "),a("li",[t._v("motto：每篇文章底部的格言区域\n"),a("ul",[a("li",[t._v("在 frontmatter 中设置 closeMotto 为 true 关闭底部格言")]),t._v(" "),a("li",[t._v("你可以直接在 md 文件中使用 Quote 组件")])])]),t._v(" "),a("li",[t._v("vssue：文章底部评论区\n"),a("ul",[a("li",[t._v("设置为 true 开启，需要引入插件，请继续往下看")])])])]),t._v(" "),a("h3",{attrs:{id:"frontmatter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter","aria-hidden":"true"}},[t._v("#")]),t._v(" frontmatter")]),t._v(" "),a("ul",[a("li",[t._v("comments：文章是否需要开启评论")]),t._v(" "),a("li",[t._v("date：文章创建日期")]),t._v(" "),a("li",[t._v("update：文章更新日期")]),t._v(" "),a("li",[t._v("tag/tags：文章标签")]),t._v(" "),a("li",[t._v("category/categories：文章分类")])]),t._v(" "),a("h3",{attrs:{id:"vssue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vssue","aria-hidden":"true"}},[t._v("#")]),t._v(" Vssue")]),t._v(" "),a("p",[t._v("本主题集成的 Vssue 评论，其配置可以参考："),a("a",{attrs:{href:"https://vssue.js.org/zh/guide/vuepress.html#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vssue"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vssue/vuepress-plugin-vssue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置 `platform` 而不是 `api`")]),t._v("\n      platform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'github'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 其他的 Vssue 配置")]),t._v("\n      owner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'OWNER_OF_REPO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      repo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NAME_OF_REPO'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      clientId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_CLIENT_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      clientSecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_CLIENT_SECRET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"归档插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#归档插件","aria-hidden":"true"}},[t._v("#")]),t._v(" 归档插件")]),t._v(" "),a("p",[t._v("这个插件只是因为官方插件 plugin-blog 还不完善，没有提供相应配置，才自己瞎搞出来的。只是为了使归档页面进行分页，实际上也不是必要的，需要你自行考虑。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuepress-theme-tomato/plugins/archive/index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" lengthPerPage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"主题进度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题进度","aria-hidden":"true"}},[t._v("#")]),t._v(" 主题进度")]),t._v(" "),a("h3",{attrs:{id:"布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布局","aria-hidden":"true"}},[t._v("#")]),t._v(" 布局")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Header\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" SearchBox 使用默认主题组件")])])]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Footer\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" 不蒜子统计总访问数")])])]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Layout")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Post\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{type:"checkbox"}}),t._v(" 使用 leanCloud 添加文章阅读量统计")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{type:"checkbox"}}),t._v(" 文章底部版权声明")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{type:"checkbox"}}),t._v(" 点赞按钮和 leanCloud 保存点赞数")])])]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Aside")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" SideBar 使用默认主题组件")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Nav 竖向显示的导航\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" 带图标，适应外链")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{type:"checkbox"}}),t._v(" 多级导航（暂不支持）")])])]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Vssue 评论")])]),t._v(" "),a("h3",{attrs:{id:"小组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 小组件")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Pagination")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" PostList 文章列表\n"),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" 紧凑型，")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{type:"checkbox"}}),t._v(" 宽松型（暂未将首页列表集成进去）")])])]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" TagList 文章的标签列表（多颜色的）")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" CardList 标签和分类列表")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Contact 联系方式图标")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" BackToTop 回到顶部按钮")]),t._v(" "),a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{type:"checkbox"}}),t._v(" CopyRight 版权声明区块")])]),t._v(" "),a("h3",{attrs:{id:"全局组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局组件")]),t._v(" "),a("ul",{staticClass:"contains-task-list"},[a("li",{staticClass:"task-list-item enabled"},[a("input",{staticClass:"task-list-item-checkbox",attrs:{checked:"",type:"checkbox"}}),t._v(" Quote 引号包裹的一个块，用于格言区域")])]),t._v(" "),a("h2",{attrs:{id:"意见反馈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#意见反馈","aria-hidden":"true"}},[t._v("#")]),t._v(" 意见反馈")]),t._v(" "),a("p",[t._v("请直接在下方进行评论，非常感谢您的支持！")])])},[],!1,null,null,null);s.default=n.exports}}]);