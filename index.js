const moment = require('moment');
module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'post',
            dirname: '_posts',
            path: '/',
            layout: 'Blog',
            itemLayout: 'Post',
            frontmatter: { title: '首页' },
            itemPermalink: '/:year/:month/:slug',
            pagination: {
              lengthPerPage: 2,
              layout: 'Blog',
              sorter: function(prev, next) {
                let prevDate = prev.frontmatter.update || prev.frontmatter.date;
                let nextDate = next.frontmatter.update || next.frontmatter.date;
                const prevTime = new Date(prevDate).getTime();
                const nextTime = new Date(nextDate).getTime();
                return prevTime - nextTime > 0 ? -1 : 1;
              }
            }
          }
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag', 'tags'],
            path: '/tag/',
            layout: 'Tag',
            frontmatter: { title: '标签云' },
            itemlayout: 'Tag',
            pagination: {
              perPagePosts: 3
            }
          }
        ]
      }
    ],
    '@vuepress/search',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment');
          moment.locale('zh-CN');
          return moment(timestamp).fromNow();
        }
      }
    ]
  ]
};
