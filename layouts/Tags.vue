<template>
  <div class="tags">
    <p class="tags-title">
      <i class="icon icon-tag"></i>
      目前共 {{tags.length}} 个标签
    </p>
    <CardList :data-source="tags"></CardList>
  </div>
</template>
<script>
import CardList from "../components/CardList";
export default {
  components: { CardList },
  computed: {
    tags() {
      return this.$tag.list;
    }
  },
  mounted() {
    console.log(this.$tag);
  }
};
</script>
<style lang="stylus">
@import '../styles/wrapper.styl';
@import '../styles/variables.styl';

.tags {
  @extend $wrapper;
}
</style>