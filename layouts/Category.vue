<template>
  <main class="category">
    <div class="category-wrapper">
      <p class="category-title">
        <i class="icon icon-category"></i>
        <span class="category-name">{{$currentCategory.key}}</span> 共 {{length}} 篇文章
      </p>
      <PostList :data-source="post"></PostList>
      <Pagination
        v-if="$pagination.length > 1"
        :current="$pagination.paginationIndex + 1"
        :total="$pagination.length"
        :base-path="`/category/${$currentCategory.key}/`"
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
      return this.$currentCategory.pages.length;
    },
    post() {
      return this.$pagination.pages;
    }
  },
  watch: {
    $title() {
      let index = this.$pagination.paginationIndex;
      if (index > 0) {
        document.title = `第 ${index + 1} 页 | ${this.$currentCategory.key}`;
      } else {
        document.title = `${this.$currentCategory.key} | ${this.$siteTitle}`;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let index = this.$pagination.paginationIndex;
      if (index > 0) {
        document.title = `第 ${index + 1} 页 | ${
          this.$currentCategory.key
        }  | ${this.$siteTitle}`;
      } else {
        document.title = `${this.$currentCategory.key} | ${this.$siteTitle}`;
      }
    });
  }
};
</script>

<style lang="stylus">
@import '../styles/wrapper.styl';
@import '../styles/variables.styl';

.category {
  padding-top: 5rem;
  padding-left: $asideWith;

  .category-wrapper {
    @extend $wrapper;
    padding: 0;
    font-size: 16px;

    .icon {
      font-size: 20px;
    }

    .category-name {
      font-size: 20px;
      padding: 0 10px;
      color: rgb(100, 100, 100);
    }
  }
}
</style>