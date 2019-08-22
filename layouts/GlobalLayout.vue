<template>
  <div
    id="global-layout"
    class="wrapper"
  >
    <div class="sidebar-wrapper">
      <Aside></Aside>
    </div>
    <Header></Header>
    <DefaultGlobalLayout />
    <Footer></Footer>
    <!-- <BackToTop></BackToTop> -->
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import BackToTop from "../components/BackToTop";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
    Aside,
    BackToTop
  },
  mounted() {}
};
</script>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/index.styl" lang="stylus"></style>
<style lang="stylus">
@import '../styles/variables.styl';

html, body {
  background-image: $bgColor;
}

.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .sidebar-wrapper {
    position: fixed;
    width: $sidebarWidth;
    top: 0;
    bottom: 0;
    left: 0;
    min-height: 100%;
    z-index: 50;
    background-image: $bgColor;
  }

  .theme-container, .blog {
    flex: 1;
  }
}
</style>
