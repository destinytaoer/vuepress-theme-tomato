module.exports = {
  title: 'theme-tomato-demo',
  description: '一款为 Vuepress 打造的博客主题',
  theme: require.resolve('../../'),
  themeConfig: {
    lastUpdated: '最后更新时间',
    avatar: 'avatar.jpg',
    nickname: 'Tomato',
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
      }
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
