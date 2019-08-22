<template>
  <div class="nav-list">
    <ul>
      <li
        class="nav"
        v-for="(nav, index) in navs"
        :key="index"
      >
        <router-link
          :to="nav.link"
          class="nav-link"
          exact
        >
          <i
            v-if="nav.icon"
            class="icon"
            :class="[`icon-${nav.icon}`]"
          ></i>
          {{nav.text}}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    navs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    console.log(this.navs);
  }
};
</script>
<style lang="stylus" scoped>
@import '../styles/variables.styl';

.nav-list {
  border-top: 1px solid $borderColor;
  border-bottom: 1px solid $borderColor;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .nav {
    width: 100%;
  }

  .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 0.7em;
    color: $color;
    font-weight: 700;
    font-size: 18px;
    transition: all 0.5s ease;

    &.router-link-active, &:hover {
      font-size: 20px;
      color: #000;
      background-color: $activeBgColor;
    }

    .icon {
      margin-right: 1em;
    }
  }
}
</style>