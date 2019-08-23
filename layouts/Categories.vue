<template>
  <main class="categories">
    <div class="categories-wrapper">
      <p class="categories-title">
        <i class="icon icon-list1"></i>
        目前共 {{categories.length}} 个分类
      </p>
      <CardList :data-source="categories"></CardList>
    </div>
  </main>
</template>
<script>
import CardList from "../components/CardList";
export default {
  components: { CardList },
  computed: {
    categories() {
      return this.$category.list;
    }
  },
  mounted() {
    console.log(this.$category);
  }
};
</script>
<style lang="stylus">
@import '../styles/wrapper.styl';
@import '../styles/variables.styl';

.categories {
  padding-top: 5rem;
  padding-left: $sidebarWidth;

  .categories-wrapper {
    @extend $wrapper;
    padding: 0;
  }
}
</style>