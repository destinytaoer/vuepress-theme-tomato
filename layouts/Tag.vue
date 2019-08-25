<template>
  <div class="tag">
    <p class="tag-title">
      <i class="icon icon-tag"></i>
      关于 <span class="tag-name">{{$currentTag.key}}</span> 共 {{length}} 篇文章
    </p>
    <PostList :data-source="post"></PostList>
    <Pagination
      v-if="$pagination.length > 1"
      :current="$pagination.paginationIndex + 1"
      :total="$pagination.length"
      :base-path="`/tag/${$currentTag.key}/`"
    ></Pagination>
  </div>
</template>
<script>
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
export default {
  components: { PostList, Pagination },
  computed: {
    length() {
      return this.$currentTag.pages.length;
    },
    post() {
      return this.$pagination.pages;
    }
  },
  watch: {
    $title() {
      let index = this.$pagination.paginationIndex;
      if (index > 0) {
        document.title = `第 ${index + 1} 页 | ${this.$currentTag.key}`;
      } else {
        document.title = `${this.$currentTag.key} | ${this.$siteTitle}`;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let index = this.$pagination.paginationIndex;
      if (index > 0) {
        document.title = `第 ${index + 1} 页 | ${this.$currentTag.key}  | ${
          this.$siteTitle
        }`;
      } else {
        document.title = `${this.$currentTag.key} | ${this.$siteTitle}`;
      }
    });
  }
};
</script>

<style lang="stylus">
@import '../styles/wrapper.styl';
@import '../styles/variables.styl';

.tag {
  @extend $wrapper;
  font-size: 16px;

  .tag-name {
    font-size: 20px;
    padding: 0 10px;
    color: rgb(100, 100, 100);
  }
}
</style>