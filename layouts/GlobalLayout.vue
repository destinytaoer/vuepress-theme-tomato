<template>
  <div
    id="global-layout"
    class="wrapper"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div
      class="sidebar-mask"
      @click="toggleAside(false)"
    ></div>
    <Sidebar :items="sidebarItems"></Sidebar>
    <Header
      @toggle-aside="toggleAside"
      :has-aside="isSidebarOpen"
      :class="{'has-aside': isSidebarOpen}"
    ></Header>
    <main class="content-wrapper">
      <DefaultGlobalLayout />
    </main>
    <Footer></Footer>
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Sidebar from "@parent-theme/components/Sidebar.vue";
import { resolveSidebarItems } from "@parent-theme/util";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
    BackToTop,
    Sidebar
  },
  data() {
    return {
      isSidebarOpen: false
    };
  },
  computed: {
    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        this.$page.headers &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
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
          "aside-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar
        },
        userPageClass
      ];
    }
  },
  methods: {
    toggleAside(to) {
      console.log(to);
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    },
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleAside(true);
        } else {
          this.toggleAside(false);
        }
      }
    }
  },
  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
    console.log(
      `\n %c ${this.$site.title} %c ${this.$site.description} \n`,
      "color:#FFFFFB;background:#59aceb;padding:5px 0;border-radius:.5rem 0 0 .5rem;",
      "background: #efefef;padding:7px 0 5px;border-radius:0 .5rem .5rem 0;"
    );
    console.log(
      `%c页面加载消耗了 ${(
        Math.round(performance.now() * 100) /
        100 /
        1000
      ).toFixed(2)}s`,
      "background: #fff;color: #333;text-shadow: 0 0 2px #eee, 0 0 3px #eee, 0 0 3px #eee, 0 0 2px #eee, 0 0 3px #eee;"
    );
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
  width: 100%;
  overflow: hidden;

  &.aside-open {
    .sidebar-mask {
      display: block;
    }
  }

  > .sidebar {
    left: auto;
    right: 0;
    bottom: auto;
    width: $sidebarWidth;
    background: none;

    a.sidebar-link:hover {
      color: $accentColor;
    }

    a.sidebar-link.active {
      color: $accentColor;
      border-left-color: $accentColor;
    }
  }

  > .content-wrapper {
    flex: 1;
    padding-top: $headerHeight;
    padding-right: $sidebarWidth;
    padding-left: $asideWidth;
  }
}

@media (max-width: $MQNarrow) {
  .wrapper {
    > .content-wrapper {
      padding-left: 0;
    }
  }
}

@media (max-width: $MQMobile) {
  .wrapper {
    > .sidebar {
      display: none;
    }

    > .content-wrapper {
      padding-right: 0;
      padding-left: 0;
    }
  }
}

@media (min-width: $MQMobile) {
  .wrapper.no-sidebar {
    > .sidebar {
      display: none;
    }

    > .content-wrapper {
      padding-right: 0;
    }
  }
}
</style>
