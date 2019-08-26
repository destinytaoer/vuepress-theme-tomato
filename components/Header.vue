<template>
  <header class="header">
    <div class="aside-wrapper">
      <Aside></Aside>
    </div>
    <div
      class="sidebar-button"
      @click="toggleAside"
    >
      <i class="icon icon-list"></i>
    </div>
    <router-link
      to="/"
      class="avatar"
    >
      <img
        :src="$themeConfig.avatar"
        alt="avatar"
      >
    </router-link>
    <div class="title">
      <h1>{{title}}</h1>
    </div>
    <SearchBox v-if="$themeConfig.search !== false" />
  </header>
</template>
<script>
import SearchBox from "@vuepress/plugin-search/SearchBox";
import Aside from "./Aside";

export default {
  components: {
    SearchBox,
    Aside
  },
  props: {
    hasAside: {
      type: Boolean
    }
  },
  methods: {
    toggleAside() {
      this.$emit("toggle-aside", !this.hasAside);
    }
  },
  computed: {
    title() {
      return this.$page.title || this.$frontmatter.title || this.$siteTitle;
    }
  }
};
</script>
<style lang="stylus">
@import '../styles/variables.styl';

.header {
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  width: 100%;
  padding-left: $asideWidth;
  height: $headerHeight;
  line-height: $headerHeight;
  transition: all 0.3s linear;
  z-index: 10;
  font-size: 20px;
  background-image: $headColor;

  > .avatar {
    display: none;

    img {
      width: $headerHeight;
      height: $headerHeight;
      padding: 10px;
      border-radius: 50%;
    }
  }

  > .sidebar-button {
    display: none;
    color: #fff;
    height: $headerHeight;
    padding: 0 0.5em;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
  }

  .title {
    flex: 1;
    text-align: center;
    margin: 0;
    color: #fff;

    h1 {
      font-size: 25px;
      line-height: $headerHeight;
      margin: 0;
    }
  }

  &.has-aside {
    > .aside-wrapper {
      transform: translateX(0);
    }
  }

  > .aside-wrapper {
    position: fixed;
    width: $asideWidth;
    top: 0;
    bottom: 0;
    left: 0;
    min-height: 100%;
    z-index: 50;
    background-image: $bgColor;
    transition: all 0.2s ease;
  }

  > .search-box {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: $headerHeight;

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

    .aside-wrapper {
      transform: translateX(-100% - 5px);
      top: $headerHeight;

      .brand-wrapper {
        margin-top: 0;
      }
    }

    .sidebar-button {
      display: block;
    }
  }
}

@media (max-width: $MQMobile) {
  .header {
    .avatar {
      display: block;
    }

    .title {
      text-align: left;
      padding-right: 2.5rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      h1 {
        display: inline;
        font-size: 18px;
      }
    }
  }
}
</style>