<template>
  <div id="global-layout">
    <header style="background-color: #DDD">
      <router-link to="/">{{ $site.title }}</router-link>· <router-link to="/tag/">Tag</router-link>
    </header><br>
    <DefaultGlobalLayout /><br>
    <Footer></Footer>
  </div>
</template>

<script>
import GlobalLayout from "@app/components/GlobalLayout.vue";
import Footer from "../components/Footer";

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Footer
  }
};
</script>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../styles/theme.styl" lang="stylus"></style>
