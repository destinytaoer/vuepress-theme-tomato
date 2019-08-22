<template>
  <aside class="aside">
    <div class="brand-wrapper">
      <div class="avatar-wrapper">
        <a
          href="/"
          :title="$themeConfig.nickname"
          class="avatar"
        ><img
            :src="$themeConfig.avatar"
            alt="avatar"
          ></a>
      </div>
      <div class="info">
        <h2 class="nickname">{{$themeConfig.nickname}}</h2>
        <h3 class="descr">{{$site.description}}</h3>
      </div>
    </div>
    <my-nav :navs="navs"></my-nav>
  </aside>
</template>
<script>
import MyNav from "../components/Nav";
export default {
  components: { MyNav },
  computed: {
    navs() {
      return this.$themeConfig.nav || [];
    }
  },
  mounted() {
    console.log(this.$themeConfig.nav);
  }
};
</script>
<style lang="stylus">
@import '../styles/variables.styl';

.aside {
  box-shadow: 1px 0 10px 1px $shadowColor;
  height: 100%;
  overflow: hidden;

  .avatar-wrapper {
    margin-top: $headerHeight;
    padding: $headerHeight 0;

    .avatar {
      display: block;
      width: 80px;
      height: 80px;
      margin: auto;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 0 2px 3px rgba(255, 255, 255, 0.7), 0 0 30px 8px #f6f6f6;

      img {
        width: 100%;
      }
    }
  }

  .info {
    text-align: center;

    .nickname {
      font-size: 25px;
      margin: 10px 0;
    }

    .descr {
      font-size: 14px;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 2em;
    }
  }
}
</style>