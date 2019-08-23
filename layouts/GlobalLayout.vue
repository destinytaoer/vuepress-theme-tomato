<template>
  <div
    id="global-layout"
    class="wrapper"
    :class="pageClasses"
  >
    <div class="aside-wrapper">
      <Aside></Aside>
    </div>
    <Sidebar :items="sidebarItems"></Sidebar>
    <Header></Header>
    <DefaultGlobalLayout />
    <Footer></Footer>
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import BackToTop from "../components/BackToTop";
import Sidebar from "@parent-theme/components/Sidebar.vue";
import { resolveSidebarItems } from "@parent-theme/util";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
    Aside,
    BackToTop,
    Sidebar
  },
  computed: {
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        this.$page.id === "post" &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length &&
        this.sidebarItems[0].children.length
      );
    },
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },
  mounted() {
    console.log(this.sidebarItems);
  }
};
</script>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../font/iconfont.css"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style lang="stylus">
@import '../styles/variables.styl';

html, body {
  background-image: $bgColor;
  background-attachment: fixed;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100vh;

  &.sidebar-open {
    .sidebar-mask {
      display: block;
    }
  }

  .sidebar {
    left: auto;
    right: 0;
    bottom: auto;

    a.sidebar-link:hover {
      color: $accentColor;
    }

    a.sidebar-link.active {
      color: $accentColor;
      border-left-color: $accentColor;
    }
  }

  .aside-wrapper {
    position: fixed;
    width: $sidebarWidth;
    top: 0;
    bottom: 0;
    left: 0;
    min-height: 100%;
    z-index: 50;
    background-image: $bgColor;
  }

  > main {
    flex: 1;
    padding-right: $sidebarWidth;
  }

  .theme-container {
    flex: 1;
  }
}

@media (min-width: ($MQMobile + 1px)) {
  .wrapper.no-sidebar {
    .sidebar {
      display: none;
    }

    > main {
      padding-right: 0;
    }
  }
}
</style>
