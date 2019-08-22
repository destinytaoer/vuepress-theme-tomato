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
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
    Aside
  },
  mounted() {}
};
</script>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
<style lang="stylus">
@import '../styles/variables.styl';

.wrapper {
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
}
</style>
