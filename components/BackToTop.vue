<template>
  <transition name="fade">
    <div
      v-if="show"
      class="go-to-top"
      @click="scrollToTop"
    >
      <i class="icon icon-top"></i>
    </div>
  </transition>
</template>

<script>
import { debounce } from "lodash";

export default {
  props: {
    threshold: {
      type: Number,
      default: 300
    }
  },

  data() {
    return {
      scrollTop: null
    };
  },

  mounted() {
    this.scrollTop = this.getScrollTop();
    window.addEventListener(
      "scroll",
      debounce(() => {
        this.scrollTop = this.getScrollTop();
      }, 100)
    );
  },

  methods: {
    getScrollTop() {
      return (
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      );
    },

    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
      this.scrollTop = 0;
    }
  },

  computed: {
    show() {
      return this.scrollTop > this.threshold;
    }
  }
};
</script>

<style lang='stylus'>
.go-to-top {
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 2.5rem;
  // width 2rem
  color: $accentColor;
  z-index: 1;
  font-size: 2.5rem;
  font-weight: 700;
}

.go-to-top:hover {
  color: lighten($accentColor, 30%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
