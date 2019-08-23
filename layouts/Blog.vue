<template>
  <main class="blog">
    <ul class="post-list">
      <li
        class="post-list-item fade"
        v-for="post in posts"
        :key="post.relativePath"
      >
        <article
          :id="'post-' + post.title"
          class="article-card article-type-post"
          itemprop="blogPost"
        >
          <h2
            class="post-title"
            itemprop="name"
          >
            <router-link :to="post.path">{{post.title}}</router-link>
          </h2>
          <ul class="post-meta">
            <li>
              <i class="icon icon-calendar"></i>
              <time
                :datetime="post.updatedAt"
                itemprop="dateUpdate"
              >
                {{post.updatedAt}}</time>
            </li>
            <li>
              <i class="icon icon-folder-open"></i>
              <router-link :to="`/categories/${post.frontmatter.category}/`">{{post.frontmatter.category}}</router-link>
            </li>
          </ul>

          <div
            class="post-content"
            id="post-content"
            itemprop="postContent"
          >
            <div
              class="content"
              v-html="post.excerpt"
            ></div>
            <div>
              <router-link
                class="post-more waves-button"
                :to="post.path"
              >阅读全文</router-link>
            </div>
          </div>
          <div
            class="post-footer"
            v-if="post.frontmatter.tags && post.frontmatter.tags.length"
          >
            <TagList :tags="post.frontmatter.tags"></TagList>
          </div>
        </article>
      </li>
    </ul>
    <Pagination
      v-if="$pagination.length > 1"
      :current="$pagination.paginationIndex + 1"
      :total="$pagination.length"
    ></Pagination>
  </main>
</template>

<script>
import moment from "moment";
import Pagination from "../components/Pagination";
import TagList from "../components/TagList";
export default {
  computed: {
    posts() {
      let posts = JSON.parse(JSON.stringify(this.$pagination.pages));
      posts.map(p => {
        p.createdAt = moment(p.frontmatter.date).format("YYYY-MM-DD");
        let updatedAt = p.frontmatter.update || p.frontmatter.date;
        p.updatedAt = moment(updatedAt).format("YYYY-MM-DD");
        return p;
      });

      return posts;
    }
  },
  methods: {},
  components: {
    TagList,
    Pagination
  },
  watch: {
    $title() {
      let index = this.$pagination.paginationIndex;
      if (index > 0) {
        document.title = `Page ${index + 1} | ${this.$siteTitle}`;
      }
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/variables.styl';

.blog {
  padding-top: 5rem;
  padding-left: $asideWith;

  .post-list {
    padding: 0;
    list-style: none;

    .post-title a {
      letter-spacing: 4px;
      font-size: 120%;
      color: $titleColor;
      font-weight: 300;
      text-decoration: none;
      text-shadow: rgb(69, 45, 45) 0px 0px 1px, rgb(255, 255, 251) 0px 0px 1px, rgb(255, 255, 251) 0px 0px 2px;
    }
  }

  .post-list-item {
    padding: 0 12px;
    margin: 0 auto 30px;
    text-align: center;
    max-width: $contentWidth;
  }

  .article-card {
    padding: 16px 20px 0;
    border-bottom: solid 1px #e0e0e0;
  }

  .post-content {
    width: 100%;
    padding-bottom: 10px;

    > div {
      text-align: center;
    }

    .content {
      text-align: left;
      padding: 0;
      margin: 1rem;

      > *:first-child {
        margin-top: 0;
      }

      img {
        max-width: 100%;
      }

      blockquote {
        font-size: 16px;
      }

      h1, h2, h3, h4, h5 {
        margin-top: 1rem;
        padding-top: 0;
      }
    }
  }

  .post-title {
    margin: 0 0 16px;
    border: none;
  }

  .post-meta {
    color: #999;
    margin: 0 0 10px;
    line-height: 19px;
    font-size: 14px;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;

    li + li {
      margin-left: 1rem;
    }

    a {
      color: #999;
      border-bottom: 1px dashed #999;
    }

    .icon {
      vertical-align: top;
      line-height: 19px;
    }
  }

  .post-more {
    $fontColor = #666;
    overflow: visible;
    border: 0;
    -moz-user-select: text;
    display: inline-block;
    text-decoration: none;
    padding: 6px 15px;
    background-color: #fff;
    color: $accentColor;
    border: 2px solid $accentColor;
    border-radius: 6px;
    -webkit-transition: all 2s ease;
    transition: all 0.2s ease;
    font-size: 15px;

    &:hover {
      background: $accentColor;
      color: #fff;
    }
  }

  .article-card .post-footer {
    margin: 0 -20px;
    padding: 12px 20px 8px;
  }

  #page-nav {
    margin: 30px 0 0;
    text-align: center;

    .inner {
      display: inline-block;
    }

    a, span {
      display: inline-block;
      line-height: 34px;
      padding: 0 1em;
      margin: 0 2px;
      font-size: 14px;
      color: #000;
      border-radius: 3px;
      overflow: hidden;
      transition(0.4s);
    }

    a {
      &:hover, &:active {
        color: #999;
        background: #dadada;
      }
    }

    .current {
      color: #fff;
      background: #999;
    }
  }

  @media (max-width: $MQMobile) {
    .post-content {
      width: 100%;
    }

    .post-meta {
      font-size: 12px;
    }

    .post-title {
      font-size: 20px;
      line-height: 25px;

      a {
        letter-spacing: 1px;
        font-size: 110%;
        font-family: inherit;
      }
    }

    .post-more {
      font-size: 13px;
    }

    .post-list {
      margin: 0 -16px;
    }

    .post-list-item {
      padding: 0;
      margin-bottom: 16px;
    }
  }
}
</style>