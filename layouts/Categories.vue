<template>
  <div class="categories">
    <p class="categories-title">
      <i class="icon icon-list1"></i>
      目前共 {{categories.length}} 个分类
    </p>
    <CardList :data-source="categories"></CardList>
  </div>
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
  @extend $wrapper;
}
</style>