<template>
  <component :is="component"></component>
</template>
<script>
import Tag from "./Tag";
export default {
  components: { Tag },
  computed: {
    component() {
      return "Tag";
    }
  }
};
</script>
<style lang="scss" scoped>
</style>