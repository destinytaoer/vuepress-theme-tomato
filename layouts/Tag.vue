<template>
  <main class="tag">
    <div class="tag-wrapper">
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
  </main>
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
      document.title = `${this.$currentTag.key} | ${this.$siteTitle}`;
    }
  },
  created() {
    document.title = `${this.$currentTag.key} | ${this.$siteTitle}`;
  }
};
</script>

<style lang="stylus">
@import '../styles/wrapper.styl';
@import '../styles/variables.styl';

.tag {
  padding-top: 5rem;
  padding-left: $asideWith;

  .tag-wrapper {
    @extend $wrapper;
    padding: 0;
    font-size: 16px;

    .tag-name {
      font-size: 20px;
      padding: 0 10px;
      color: rgb(100, 100, 100);
    }
  }
}
</style>