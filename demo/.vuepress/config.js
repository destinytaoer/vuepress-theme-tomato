module.exports = {
  title: 'theme-tomato-demo',
  description: '一款为 Vuepress 打造的博客主题',
  theme: require.resolve('../../'),
  themeConfig: {
    avatar: 'avatar.jpg',
    nickname: 'Tomato',
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '归档',
        link: '/archives/'
      },
      {
        text: '标签',
        link: '/tag/'
      },
      {
        text: '标签',
        link: '/category/'
      }
    ]
  }
};
