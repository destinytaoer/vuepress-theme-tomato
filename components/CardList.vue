<template>
  <ul class="card-list">
    <li
      v-for="(data, index) in dataSource"
      :key="index"
    >
      <router-link
        :to="data.path"
        class="card"
        :title="data.name"
      >
        <h3 class="title">{{data.name}}</h3>
        <span class="count">({{data.pages.length}})</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style lang="stylus">
@import '../styles/variables.styl';

.card-list {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  text-shadow: #969393 0 0 1px, #fffffb 0 0 1px, #fffffb 0 0 2px;
  letter-spacing: 2px;

  .card {
    display: block;
    text-align: center;
    width: 180px;
    padding: 10px 5px;
    margin: 10px;
    border-radius: 30px;
    font-size: 15px;
    background-color: #fafaf5;
    color: $titleColor;
    box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 6px, rgba(0, 0, 0, 0.117647) 0 1px 4px;
    transition: all 0.3s;

    .title {
      display: inline-block;
      width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
      font-size: 20px;
      font-weight: 200;
      line-height: 25px;
      vertical-align: top;
    }

    .count {
      font-size: 14px;
      margin-left: 5px;
      color: #bbb;
      line-height: 25px;
      vertical-align: top;
    }

    &:hover {
      transform: translateY(-2px) translateZ(2px);
      box-shadow: 0 5px 5px -3px rgba(112, 111, 111, 0.2), 0 8px 10px 1px rgba(104, 102, 102, 0.14), 0 3px 14px 2px rgba(155, 154, 154, 0.12);
    }
  }
}
</style>