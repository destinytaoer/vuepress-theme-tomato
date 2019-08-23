<template>
  <main class="tags">
    <div class="tags-wrapper">
      <p class="tags-title">
        <i class="icon icon-tag"></i>
        目前共 {{tags.length}} 个标签
      </p>
      <CardList :data-source="tags"></CardList>
    </div>
  </main>
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
  padding-top: 5rem;
  padding-left: $asideWith;

  .tags-wrapper {
    @extend $wrapper;
    padding: 0;
  }
}
</style>