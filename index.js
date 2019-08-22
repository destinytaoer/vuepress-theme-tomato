module.exports = {
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
            itemPermalink: '/:year/:month/:slug',
            pagination: {
              perPagePosts: 2
            }
          }
        ],
        frontmatters: [
          {
            id: 'tag',
            keys: ['tag', 'tags'],
            path: '/tag/',
            layout: 'Tag',
            frontmatter: { title: 'Tag' },
            itemlayout: 'Tag',
            pagination: {
              perPagePosts: 3
            }
          }
        ]
      }
    ]
  ]
};
