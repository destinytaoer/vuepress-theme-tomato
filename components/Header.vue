<template>
  <header
    class="header"
    :class="{active}"
  >
    <h1 v-show="active">{{$site.title}}</h1>
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
  width: 100%;
  padding-left: $sidebarWidth;
  margin-left: - $sidebarWidth;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  transition: all 0.3s linear;

  &.active {
    background-color: $themeColor;
  }

  h1 {
    display: block;
    margin: 0;
    color: $titleColor;
  }

  .search-box {
    position: absolute;
    top: 0;
    right: 0;

    input:focus {
      border-color: $accentColor;
    }

    .suggestion {
      &.focused {
        a {
          color: $accentColor;
        }
      }
    }
  }
}
</style>