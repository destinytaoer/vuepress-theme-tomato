<template>
  <div class="quote">
    <main class="text">
      <slot></slot>
    </main>
  </div>
</template>

<style lang="stylus">
.quote
  position relative
  margin 60px 0
  padding 1rem 0
  border-left none !important
  text-align center
  font-size 20px
  font-weight 700
  background #fff
  border-radius 3px
  -webkit-box-shadow 0 1px 2px rgba(151,151,151,0.58), 0 0 50px rgba(151,151,151,0.58) inset
  box-shadow 0 1px 2px rgba(151,151,151,0.58), 0 0 50px rgba(151,151,151,0.58) inset
  .text
    padding 1rem 2rem
    text-align center
    p
      margin 1rem 0
  
  &:before, &:after
    position absolute
    display block
    width 100%
    height 24px
    color #999
    font-family 'iconfont'
    font-size inherit
  
  &:before
    text-align left
    content "\ebb8"
    top .5rem
    left .5rem

  &:after
    content "\e7d2"
    text-align right
    bottom .5rem
    right .5rem
</style>