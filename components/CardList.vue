<template>
  <ul class="card-list">
    <li
      v-for="(data, index) in dataSource"
      :key="index"
      class="card-item"
    >
      <router-link
        :to="data.path"
        class="card"
        :title="data.name"
      >
        <h3 class="title">{{data.name}}</h3>
        <span class="count">{{data.pages.length}}</span>
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

$width = 150px;

.card-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  text-shadow: #969393 0 0 1px, #fffffb 0 0 1px, #fffffb 0 0 2px;
  letter-spacing: 2px;
  font-size: 15px;

  .card-item {
    flex: 0 0 25%;
    padding: 0 1rem;
  }

  .card {
    position: relative;
    display: block;
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    margin: 10px 0;
    background-color: #fafaf5;
    color: $titleColor;
    text-shadow: #969393 0 0 1px, #fffffb 0 0 1px, #fffffb 0 0 2px;
    box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 6px, rgba(0, 0, 0, 0.117647) 0 1px 4px;
    transition: all 0.3s;

    .title {
      display: block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin: 0;
      padding-right: 10px;
      font-size: 1.2em;
      font-weight: 400;
      line-height: 25px;
      vertical-align: top;
    }

    .count {
      position: absolute;
      top: -2px;
      right: 10px;
      font-size: 1em;
      color: #ccc;
    }

    &:hover {
      transform: translateY(-2px) translateZ(2px);
      box-shadow: 0 5px 5px -3px rgba(112, 111, 111, 0.2), 0 8px 10px 1px rgba(104, 102, 102, 0.14), 0 3px 14px 2px rgba(155, 154, 154, 0.12);
    }
  }
}

@media (max-width: $MQNarrow) {
  .card-list {
    .card-item {
      flex: 0 0 33.3%;
    }
  }
}

@media (max-width: $MQMobile) {
  .card-list {
    .card-item {
      flex: 0 0 50%;
    }

    font-size: 16px;
  }
}

@media (max-width: $MQMobileNarrow) {
  .card-list {
    .card-item {
      padding: 0 0.5rem;
    }

    font-size: 14px;
  }
}
</style>