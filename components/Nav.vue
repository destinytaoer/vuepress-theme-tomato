<template>
  <div class="nav-list">
    <ul>
      <li
        class="nav"
        v-for="(nav, index) in userLinks"
        :key="index"
      >
        <router-link
          class="nav-link"
          :to="nav.link"
          v-if="!isExternal(nav.link)"
          exact
        >
          <i
            class="icon"
            :class="[`icon-${nav.icon || 'article'}`]"
          ></i>{{ nav.text }}
        </router-link>
        <a
          v-else
          :href="nav.link"
          class="nav-link external"
          :target="isMailto(nav.link) || isTel(nav.link) ? null : '_blank'"
          :rel="isMailto(nav.link) || isTel(nav.link) ? null : 'noopener noreferrer'"
        >
          <i
            v-if="nav.icon"
            class="icon"
            :class="[`icon-${nav.icon}`]"
          ></i>
          <OutboundLink v-else />
          {{ nav.text }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import {
  isExternal,
  isMailto,
  isTel,
  resolveNavLinkItem
} from "@parent-theme/util";
export default {
  computed: {
    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || [];
    },
    nav() {
      const { locales } = this.$site;
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path;
        const routes = this.$router.options.routes;
        const themeLocales = this.$site.themeConfig.locales || {};
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || "Languages",
          items: Object.keys(locales).map(path => {
            const locale = locales[path];
            const text =
              (themeLocales[path] && themeLocales[path].label) || locale.lang;
            let link;
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink;
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path);
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path;
              }
            }
            return { text, link };
          })
        };
        return [...this.userNav, languageDropdown];
      }
      return this.userNav;
    },
    userLinks() {
      return (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        });
      });
    }
  },
  methods: {
    isExternal,
    isMailto,
    isTel
  }
};
</script>
<style lang="stylus">
@import '../styles/variables.styl';

.nav-list {
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
    align-items: center;
    width: 100%;
    height: 40px;
    padding-left: 4rem;
    color: $color;
    font-weight: 700;
    font-size: 18px;
    transition: all 0.5s ease;

    &.router-link-active, &:hover {
      color: #000;
      background-color: $activeBgColor;
    }

    &:hover {
      transform: scale(1.1);
    }

    .icon {
      width: 1em;
      margin-right: 1em;
    }

    svg.icon {
      transform: scale(1.5);
    }
  }
}

@media (max-width: $MQMobile) {
  .nav-list {
    .nav-link {
      padding-left: 1.5rem;
      color: #2c3e50;
    }
  }
}
</style>