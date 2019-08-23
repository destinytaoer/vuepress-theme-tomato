<template>
  <main class="archive">
    <div class="archive-wrapper">
      <div
        class="year-wrapper"
        v-for="(yearPosts, index) in postList"
        :key="index"
      >
        <div class="year">
          <i class="icon icon-folder"></i>
          <span>{{yearPosts[0]}}</span>
        </div>
        <template v-if="splitBy ==='M'">
          <div
            class="month-wrapper"
            v-for="(monthPosts, index) in yearPosts[1]"
            :key="index"
          >
            <div class="month">
              <i class="icon icon-list"></i>
              <span>{{monthPosts[0]}}月</span>
            </div>
            <PostList :data-source="monthPosts[1]"></PostList>
          </div>
        </template>
        <PostList
          v-else
          :data-source="yearPosts[1]"
        ></PostList>
      </div>
      <Pagination
        v-if="$archPagi.length > 1"
        :current="$archPagi.paginationIndex + 1"
        :total="$archPagi.length"
        :base-path="`/archive/`"
      ></Pagination>
    </div>
  </main>
</template>
<script>
import _ from "lodash";
import moment from "moment";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
export default {
  components: {
    Pagination,
    PostList
  },
  props: {
    splitBy: {
      type: String,
      default: "M",
      validator(val) {
        return val === "Y" || val === "M";
      }
    }
  },
  computed: {
    postList() {
      let pages = this.$archPagi.pages;
      // 处理 year
      pages = _.groupBy(pages, page => {
        return moment(page.frontmatter.date).format("YYYY");
      });
      pages = _.map(pages, (page, key) => {
        return [Number(key), page];
      }).sort((prev, next) => {
        return next[0] - prev[0];
      });
      if (this.splitBy === "M") {
        // 处理 month
        pages.forEach(page => {
          page[1] = _.groupBy(page[1], item => {
            return moment(item.frontmatter.date).format("MM");
          });
          page[1] = _.map(page[1], (item, key) => {
            return [Number(key), item];
          }).sort((prev, next) => {
            return next[0] - prev[0];
          });
        });
      }
      return pages;
    }
  }
};
</script>
<style lang="stylus">
@import '../styles/variables.styl';
@import '../styles/wrapper.styl';

.archive {
  padding-top: 5rem;
  padding-left: $sidebarWidth;

  .archive-wrapper {
    @extend $wrapper;
    padding: 0;

    .year-wrapper {
      line-height: 25px;
      font-size: 20px;

      .year {
        padding-bottom: 10px;
        border-bottom: 1px solid $borderColor;
      }

      .icon {
        font-size: 25px;
      }

      span {
        vertical-align: top;
      }
    }

    .month-wrapper {
      padding-left: 1em;

      .month {
        padding: 10px 0;
        font-size: 18px;
      }
    }
  }
}
</style>