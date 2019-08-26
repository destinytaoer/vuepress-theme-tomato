<template>
  <aside class="aside">
    <div class="brand-wrapper">
      <div class="avatar-wrapper">
        <router-link
          to="/"
          :title="$themeConfig.nickname"
          class="avatar"
        ><img
            :src="$themeConfig.avatar"
            alt="avatar"
          ></router-link>
      </div>
      <div class="info">
        <h2 class="nickname">{{$themeConfig.nickname}}</h2>
        <h3 class="descr">{{$site.description}}</h3>
      </div>
    </div>
    <my-nav></my-nav>
    <Sidebar :items="sidebarItems">
      <Contact slot="top"></Contact>
    </Sidebar>
  </aside>
</template>
<script>
import MyNav from "../components/Nav";
import Contact from "../components/Contact";
import Sidebar from "@parent-theme/components/Sidebar.vue";
import { resolveSidebarItems } from "@parent-theme/util";
export default {
  components: { MyNav, Contact, Sidebar },
  computed: {
    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    }
  }
};
</script>
<style lang="stylus">
@import '../styles/variables.styl';

.aside {
  box-shadow: 1px 0 10px 1px $shadowColor;
  height: 100%;
  overflow: hidden;

  .brand-wrapper {
    margin-top: $headerHeight;
    border-bottom: 1px solid $borderColor;
  }

  .avatar-wrapper {
    padding: 10px 0;

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
      border-bottom: none;
    }

    .descr {
      font-size: 14px;
      width: 100%;
      padding: 0 1.5em;
      margin-bottom: 2em;
    }
  }

  > .sidebar {
    position: static;
    transform: none;
    background: none;
    width: $asideWidth;

    .nav-links, .sidebar-links {
      display: none;
    }

    .sidebar-links {
      a.sidebar-link.active {
        color: $accentColor;
        border-left-color: $accentColor;
      }

      a.sidebar-link:hover {
        color: $accentColor;
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .aside {
    .brand-wrapper, .contact {
      display: none;
    }

    > .sidebar {
      width: $asideWidth;
      padding-top: 0;

      .sidebar-links {
        display: block;
      }

      .nav-links {
        display: none;
      }
    }
  }
}
</style>