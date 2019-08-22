<template>
  <ul class="tag-list">
    <li
      class="tag-list-item"
      v-for="(tag, index) in tags"
      :key="index"
    >
      <router-link 
        class="tag-list-link waves-effect waves-button"
        :to="`/tags/${tag}/`">
        {{tag}}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tags: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus">
@import '../styles/variables.styl'
.tag-list
  overflow hidden
  margin 0
  padding 0
  font-size 13px

  .tag-list-item
    display inline-block
    margin 0 8px 8px 0
    border-radius 2px
    &:nth-child(n + 1)
      background $tag-color-1
    &:nth-child(n + 2)
      background $tag-color-2
    &:nth-child(n + 3)
      background $tag-color-3
    &:nth-child(n + 4)
      background $tag-color-4
    &:nth-child(n + 5)
      background $tag-color-5
    &:nth-child(n + 6)
      background $tag-color-6

  .tag-list-link
    display block
    padding 0 16px
    line-height 28px
    color: rgb(133, 133, 133)
    transition all 0.2s ease-in-out
    &:hover
      -webkit-box-shadow 0 4px 8px rgba(0, 0, 0, 0.26)
      box-shadow 0 4px 8px rgba(0, 0, 0, 0.26)
</style>