<template>
  <div class="contact">
    <div
      class="contact-item"
      v-for="(contact, index) in contacts"
      :key="index"
      :title="contact.text"
    >
      <a
        :href="contact.link"
        target="_blank"
        class="contact-link"
      >
        <i
          class="icon"
          :class="[`icon-${contact.icon}`]"
        ></i>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    contacts() {
      return this.$themeConfig.contact || [];
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../styles/variables.styl';

.contact {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  .contact-item {
    &:hover {
      .contact-link {
        transform: translateY(5px) scale(1.5);
        color: #000;
      }
    }

    .contact-link {
      display: block;
      padding: 5px;
      font-size: 25px;
      color: $color;
      width: 35px;
      height: 35px;
      vertical-align: top;
      transition: all 0.2s ease;

      .icon {
        display: inline-block;
        vertical-align: top;
      }
    }
  }
}
</style>