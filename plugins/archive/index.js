const { path } = require('@vuepress/shared-utils');

function getIntervallers(max, interval) {
  const count =
    max % interval === 0
      ? Math.floor(max / interval)
      : Math.floor(max / interval) + 1;
  const arr = [...Array(count)];
  return arr.map((v, index) => {
    const start = index * interval;
    const end = (index + 1) * interval;
    return [start, end > max ? max : end];
  });
}
module.exports = (options, ctx) => ({
  ready() {
    let pages = ctx.pages.filter(page => {
      return page.id === 'post';
    });
    let total = pages.length;
    let { lengthPerPage = 10 } = options;
    let intervals = getIntervallers(total, lengthPerPage);
    ctx.paginationPages = [];
    intervals.forEach((interval, index) => {
      let path, title;
      if (index === 0) {
        path = '/archive/';
        title = '归档';
      } else {
        path = `/archive/page/${index + 1}/`;
        title = `Page ${index + 1} | 归档`;
      }
      ctx.addPage({
        permalink: path,
        frontmatter: {
          layout: 'Archive',
          title
        },
        meta: {
          pid: 'archive',
          id: 'archive'
        }
      });
      ctx.paginationPages.push({
        interval,
        path
      });
    });
  },
  async clientDynamicModules() {
    return {
      name: 'pagination.js',
      content: `export default ${JSON.stringify(ctx.paginationPages, null, 2)}`
    };
  },
  enhanceAppFiles: [path.resolve(__dirname, './enhanceAppFile.js')]
});
