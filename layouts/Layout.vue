<template>
  <component :is="component"></component>
</template>
<script>
import Tag from "./Tag";
import Category from "./Category";
import Post from "./Post";
export default {
  components: { Tag, Category, Post },
  computed: {
    component() {
      if (this.$currentTag) return "Tag";
      if (this.$currentCategory) return "Category";
      if (this.$frontmatter.layout) return this.$frontmatter.layout;
      return "Post";
    }
  }
};
</script>
<style lang="scss" scoped>
</style>