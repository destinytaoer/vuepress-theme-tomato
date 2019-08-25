module.exports = {
  title: 'theme-tomato-demo',
  description: '一款为 Vuepress 打造的博客主题',
  base: '/vuepress-theme-tomato/',
  theme: require.resolve('../../'),
  themeConfig: {
    lastUpdated: '最后更新时间',
    avatar: 'avatar.jpg',
    nickname: 'Tomato',
    sidebar: 'auto',
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'home'
      },
      {
        text: '归档',
        link: '/archive/',
        icon: 'archives'
      },
      {
        text: '标签',
        link: '/tag/',
        icon: 'tag'
      },
      {
        text: '分类',
        link: '/category/',
        icon: 'category'
      },
      // {
      //   text: '前端手册',
      //   items: [
      //     {
      //       text: '前端基础',
      //       items: [
      //         { text: 'JavaScript', link: '/frontend/js' },
      //         { text: 'CSS', link: '/frontend/css' }
      //       ]
      //     },
      //     {
      //       text: '其他',
      //       items: [
      //         { text: 'Vue', link: '/frontend/vue' },
      //         { text: 'React', link: '/frontend/react' },
      //         { text: 'TypeScript', link: '/frontend/ts' },
      //         { text: 'Node', link: '/frontend/node' }
      //       ]
      //     }
      //   ]
      // },
      { text: '语雀', link: 'https://www.yuque.com/destinytaoer/' },
      { text: '关于我', link: '/about/' }
    ],
    contact: [
      {
        icon: 'email',
        text: 'email',
        link: 'mailto:1848765519@qq.com'
      },
      {
        icon: 'github',
        text: 'Github',
        link: 'https://github.com/destinytaoer'
      },
      {
        icon: 'csdn',
        text: 'CSDN',
        link: 'https://blog.csdn.net/destinytaoer'
      },
      {
        icon: 'wechat',
        text: 'WeChat',
        link: 'weixin.jpg'
      }
    ]
  }
};
