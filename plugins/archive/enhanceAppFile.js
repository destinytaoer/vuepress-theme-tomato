import paginationPages from '@dynamic/pagination.js';
class Pagination {
  constructor(pages, route) {
    const { path } = route;
    for (let i = 0, l = paginationPages.length; i < l; i++) {
      const page = paginationPages[i];
      if (page.path === path) {
        this.paginationIndex = i;
        break;
      }
    }
    if (!this.paginationIndex) {
      this.paginationIndex = 0;
    }
    this._paginationPages = paginationPages;
    this._currentPage = paginationPages[this.paginationIndex];
    this._matchedPages = pages
      .filter(page => {
        return page.id === 'post' && page.pid === 'post';
      })
      .sort((prev, next) => {
        let prevDate = prev.frontmatter.date;
        let nextDate = next.frontmatter.date;
        const prevTime = new Date(prevDate).getTime();
        const nextTime = new Date(nextDate).getTime();
        return prevTime - nextTime > 0 ? -1 : 1;
      });
  }
  setIndexPage(path) {
    this._indexPage = path;
  }
  get length() {
    return this._paginationPages.length;
  }
  get pages() {
    const [start, end] = this._currentPage.interval;
    return this._matchedPages.slice(start, end + 1);
  }
  get hasPrev() {
    return this.paginationIndex !== 0;
  }
  get prevLink() {
    if (this.hasPrev) {
      if (this.paginationIndex - 1 === 0 && this._indexPage) {
        return this._indexPage;
      }
      return this._paginationPages[this.paginationIndex - 1].path;
    }
    return null;
  }
  get hasNext() {
    return this.paginationIndex !== this.length - 1;
  }
  get nextLink() {
    if (this.hasNext) {
      return this._paginationPages[this.paginationIndex + 1].path;
    }
    return null;
  }
  getSpecificPageLink(index) {
    return this._paginationPages[index].path;
  }
}
export default ({ Vue }) => {
  Vue.mixin({
    computed: {
      $archPagi() {
        if (
          this.$route.meta.pid === 'archive' &&
          this.$route.meta.id === 'archive'
        ) {
          return new Pagination(
            Vue.$vuepress.$get('siteData').pages,
            this.$route
          );
        }
        return null;
      }
    }
  });
};
