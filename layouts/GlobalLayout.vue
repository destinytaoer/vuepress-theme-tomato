<template>
  <div
    id="global-layout"
    class="wrapper"
  >
    <div class="sidebar-wrapper">

    </div>
    <div class="content-wrapper">
      <Header></Header>
      <div class="content">
        <DefaultGlobalLayout />
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer
  }
};
</script>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
<style lang="stylus">
@import '../styles/variables.styl';

.wrapper {
  display: flex;

  .sidebar-wrapper {
    flex: 0 $sidebarWidth;
  }

  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    .content {
      flex: 1;
    }
  }
}
</style>
