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
  </aside>
</template>
<script>
export default {};
</script>
<style lang="stylus">
@import '../styles/variables.styl';

.aside {
  box-shadow: 1px 0 10px 1px $shadowColor;
  height: 100%;
  overflow-x: hidden;

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

      img {
        width: 100%;
      }
    }
  }

  .info {
    text-align: center;

    .nickname {
    }

    .descr {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>