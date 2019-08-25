<template>
  <header
    class="header"
    :class="{active}"
  >
    <h1 v-show="active">{{title}}</h1>
    <SearchBox v-if="$themeConfig.search !== false" />
  </header>
</template>
<script>
import SearchBox from "@vuepress/plugin-search/SearchBox";

export default {
  components: {
    SearchBox
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    showHeader(e) {
      this.active = !(this.getScrollTop() === 0);
    },
    getScrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    }
  },
  computed: {
    title() {
      return this.$page.title || this.$frontmatter.title || this.$siteTitle;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.showHeader);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.showHeader);
  }
};
</script>
<style lang="stylus">
@import '../styles/variables.styl';

.header {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  padding-left: $asideWidth;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  transition: all 0.3s linear;
  z-index: 10;

  &.active {
    background-color: $themeColor;
  }

  h1 {
    display: block;
    margin: 0;
    font-size: 20px;
    line-height: inherit;
    color: #fff;
  }

  .search-box {
    position: absolute;
    top: 0;
    right: 0;

    input:focus {
      border-color: $accentColor;
    }

    .suggestions {
      right: 0 !important;

      .suggestion {
        &.focused {
          a {
            color: $accentColor;
          }
        }
      }
    }
  }
}

@media (max-width: $MQNarrow) {
  .header {
    padding-left: 0;
  }
}
</style>