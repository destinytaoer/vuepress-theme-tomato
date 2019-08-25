<template>
  <ul class="tag-list">
    <li
      class="tag-list-item"
      v-for="(tag, index) in tags"
      :key="index"
    >
      <router-link
        class="tag-list-link waves-effect waves-button"
        :to="`/tag/${tag}/`"
      >
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
@import '../styles/variables.styl';

.tag-list {
  margin: 0;
  padding: 0;
  font-size: 14px;

  .tag-list-item {
    display: inline-block;
    margin-right: 0.5em;
    border-radius: 2px;

    &:last-child {
      margin-right: 0;
    }

    &:nth-child(n + 1) {
      background: $tag-color-1;
    }

    &:nth-child(n + 2) {
      background: $tag-color-2;
    }

    &:nth-child(n + 3) {
      background: $tag-color-3;
    }

    &:nth-child(n + 4) {
      background: $tag-color-4;
    }

    &:nth-child(n + 5) {
      background: $tag-color-5;
    }

    &:nth-child(n + 6) {
      background: $tag-color-6;
    }
  }

  .tag-list-link {
    display: block;
    padding: 0 1em;
    line-height: 2em;
    color: rgb(133, 133, 133);
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.26);
    }
  }
}

@media (max-width: $MQNarrow) {
  .tag-list {
    .tag-list-item {
      margin-right: 0.3em;
    }

    .tag-list-link {
      padding: 0 0.5em;
    }
  }
}

@media (max-width: $MQMobile) {
  .tag-list {
    font-size: 12px;

    .tag-list-link {
      padding: 0 0.5em;
      line-height: 1.8em;
    }
  }
}
</style>