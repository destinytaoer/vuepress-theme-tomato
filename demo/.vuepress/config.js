module.exports = {
  title: 'theme-tomato-demo',
  description: '一款为 Vuepress 打造的博客主题',
  base: '/vuepress-theme-tomato/',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: require.resolve('../../'),
  themeConfig: {
    lastUpdated: '最后更新时间',
    vssue: true,
    avatar: 'avatar.jpg',
    nickname: 'Tomato',
    motto: '生命的意义不仅是活着，而是我们给别人的生命带来了何种不同。',
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
      }
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
    ],
    contact: [
      {
        icon: 'email',
        text: 'email',
        link: '#'
      },
      {
        icon: 'github',
        text: 'Github',
        link: 'https://github.com/destinytaoer/vuepress-theme-tomato'
      },
      {
        icon: 'csdn',
        text: 'CSDN',
        link: '#'
      },
      {
        icon: 'wechat',
        text: 'WeChat',
        link: '#'
      }
    ]
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'), { enabled: true });
    }
  },
  plugins: [
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github',

        owner: 'destinytaoer',
        repo: 'vuepress-theme-tomato',
        clientId: '3699c72e5af9abb3b743',
        clientSecret: '2d07802d48271a4424ce092cc7f97b45486d6421'
      }
    ],
    [require('../../plugins/archive/index'), { lengthPerPage: 20 }]
  ]
};
