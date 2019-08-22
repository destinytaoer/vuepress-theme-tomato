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
        link: '/',
        icon: 'home'
      },
      {
        text: '归档',
        link: '/archives/',
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
    ]
  }
};
