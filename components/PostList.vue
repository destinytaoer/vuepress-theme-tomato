<template>
  <ul class="post-list-compact">
    <li
      v-for="(post, index) in posts"
      :key="index"
    >
      <router-link
        :to="post.path"
        class="post-item"
      >
        <div class="post-time">
          <i class="icon icon-article"></i>
          <time
            :datetime="post.createdAt"
            itemprop="dateUpdate"
          >{{post.createdAt}}</time>
        </div>
        <div class="post-title">
          <h4>{{post.title}}</h4>
        </div>
        <TagList :tags="post.frontmatter.tags"></TagList>
      </router-link>
    </li>
  </ul>
</template>
<script>
import moment from "moment";
import TagList from "./TagList";
export default {
  components: { TagList },
  props: {
    dataSource: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {
    posts() {
      let posts = JSON.parse(JSON.stringify(this.dataSource));
      posts.map(p => {
        p.createdAt = moment(p.frontmatter.date).format("YYYY-MM-DD");
        let updatedAt = p.frontmatter.update || p.frontmatter.date;
        p.updatedAt = moment(updatedAt).format("YYYY-MM-DD");
        return p;
      });

      return posts;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../styles/variables.styl';

$height = 80px;
$borderColor = #ccc;

.post-list-compact {
  list-style: none;
  margin: 0;
  padding: 0;

  li:last-child {
    .post-item {
      border-bottom: 1px solid $borderColor;
    }
  }

  .post-item {
    display: flex;
    color: $titleColor;
    padding: 0 20px;
    line-height: $height;
    // box-shadow: 0 1px 10px 1px #ccc;
    border: 1px solid $borderColor;
    border-bottom: none;

    &:hover {
      transition: all 0.4s;
      transform: translateY(-1px);
      box-shadow: 0 0 30px #ccc;
      border-left-width: 5px;
      border-right-width: 5px;
    }

    .post-time {
      .icon {
        font-size: 20px;
        vertical-align: top;
      }

      time {
        vertical-align: top;
      }
    }

    .post-title {
      flex: 1;
      margin: 0 1em;

      h4 {
        position: relative;
        display: inline-block;
        margin: 0;

        &::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -3px;
          left: 0;
          background-color: #000;
          visibility: hidden;
          transform: scaleX(0);
          transition: 0.4s ease-in-out;
        }

        &:hover::after {
          visibility: visible;
          transform: scaleX(1);
        }
      }
    }

    .tag-list {
      line-height: $height;
    }
  }
}
</style>