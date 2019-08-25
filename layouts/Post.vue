<template>
  <div class="page">
    <slot name="top" />

    <Content />

    <footer
      v-if="isPost"
      class="page-edit"
    >
      <div
        class="edit-link"
        v-if="editLink"
      >
        <a
          :href="editLink"
          target="_blank"
          rel="noopener noreferrer"
        >{{ editLinkText }}</a>
        <OutboundLink />
      </div>

      <div
        class="last-updated"
        v-if="lastUpdated"
      >
        <span class="prefix">{{ lastUpdatedText }}: </span>
        <span class="time">{{ lastUpdated }}</span>
      </div>
    </footer>

    <div
      class="page-nav"
      v-if="isPost &&(prev || next)"
    >
      <p class="inner">
        <span
          v-if="prev"
          class="prev"
        >
          ←
          <router-link
            v-if="prev"
            class="prev"
            :to="prev.path"
          >
            {{ prev.title || prev.path }}
          </router-link>
        </span>

        <span
          v-if="next"
          class="next"
        >
          <router-link
            v-if="next"
            :to="next.path"
          >
            {{ next.title || next.path }}
          </router-link>
          →
        </span>
      </p>
    </div>

    <!-- <Vssue
      v-if="$frontmatter.comments"
      :title="$frontmatter.title"
      :options="{
        labels: ['Vssue', $frontmatter.title]
      }"
    /> -->

    <slot name="bottom" />
  </div>
</template>

<script>
import {
  resolvePage,
  normalize,
  outboundRE,
  endingSlashRE
} from "@parent-theme/util";
import moment from "moment";

export default {
  computed: {
    isPost() {
      return this.$page.id === "post" && this.$page.pid === "post";
    },
    $posts() {
      const pages = this.$site.pages;
      const pageFilter = p => p.id === "post";
      const pageSort = (p1, p2) => {
        let dateA = new Date(p1.createdAt).getTime();
        let dateB = new Date(p2.createdAt).getTime();
        return dateB - dateA;
      };
      const pageMap = p => {
        p.createdAt = moment(p.frontmatter.date).format("YYYY-MM-DD");
        let updatedAt = p.frontmatter.update || p.frontmatter.date;
        p.updatedAt = moment(updatedAt).format("YYYY-MM-DD");
        p.tags = p.frontmatter.tags || [];
        p.category = p.frontmatter.category || null;
        return p;
      };
      const posts = pages
        .filter(pageFilter)
        .map(pageMap)
        .sort(pageSort);
      return posts;
    },
    lastUpdated() {
      return this.$page.lastUpdated;
    },

    lastUpdatedText() {
      if (typeof this.$themeLocaleConfig.lastUpdated === "string") {
        return this.$themeLocaleConfig.lastUpdated;
      }
      if (typeof this.$themeConfig.lastUpdated === "string") {
        return this.$themeConfig.lastUpdated;
      }
      return "Last Updated";
    },

    prev() {
      let cur = this.$page.key;
      let posts = this.$posts;
      let index = posts.findIndex((value, index, arr) => {
        return value.key === cur;
      });
      if (index === 0) {
        return;
      }
      return posts[index - 1];
    },

    next() {
      let cur = this.$page.key;
      let posts = this.$posts;
      let index = posts.findIndex((value, index, arr) => {
        return value.key === cur;
      });
      if (index === posts.length - 1) {
        return;
      }
      return posts[index + 1];
    },

    editLink() {
      if (this.$frontmatter.editLink === false) {
        return;
      }
      const {
        repo,
        editLinks,
        docsDir = "",
        docsBranch = "master",
        docsRepo = repo
      } = this.$themeConfig;

      let path = normalize(this.$page.path);

      let pathArr = path.match(/\/\d{4}\/\d{2}\/(.+)\//);

      path = "/_posts/" + pathArr[1] + ".md";
      if (docsRepo && editLinks) {
        return this.createEditLink(repo, docsRepo, docsDir, docsBranch, path);
      }
    },

    editLinkText() {
      return (
        this.$themeLocaleConfig.editLinkText ||
        this.$themeConfig.editLinkText ||
        `Edit this page`
      );
    }
  },
  methods: {
    createEditLink(repo, docsRepo, docsDir, docsBranch, path) {
      const bitbucket = /bitbucket.org/;
      if (bitbucket.test(repo)) {
        const base = outboundRE.test(docsRepo) ? docsRepo : repo;
        return (
          base.replace(endingSlashRE, "") +
          `/src` +
          `/${docsBranch}` +
          (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
          path +
          `?mode=edit&spa=0&at=${docsBranch}&fileviewer=file-view-default`
        );
      }

      const base = outboundRE.test(docsRepo)
        ? docsRepo
        : `https://github.com/${docsRepo}`;

      return (
        base.replace(endingSlashRE, "") +
        `/edit/${docsBranch}` +
        (docsDir ? "/" + docsDir.replace(endingSlashRE, "") : "") +
        path
      );
    }
  }
};

function resolvePrev(page, items) {
  return find(page, items, -1);
}

function resolveNext(page, items) {
  return find(page, items, 1);
}

function find(page, items, offset) {
  const res = [];
  flattern(items, res);
  for (let i = 0; i < res.length; i++) {
    const cur = res[i];
    if (cur.type === "page" && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset];
    }
  }
}

function flattern(items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === "group") {
      flattern(items[i].children || [], res);
    } else {
      res.push(items[i]);
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper';
@import '../styles/variables.styl';

.page {
  padding-left: 0;

  img {
    max-width: 100%;
  }
}

.page-edit {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: auto;

  .edit-link {
    display: inline-block;

    a {
      color: lighten($textColor, 25%);
      margin-right: 0.25rem;
    }
  }

  .last-updated {
    float: right;
    font-size: 0.9em;

    .prefix {
      font-weight: 500;
      color: lighten($textColor, 25%);
    }

    .time {
      font-weight: 400;
      color: #aaa;
    }
  }
}

.page-nav {
  @extend $wrapper;
  padding-top: 1rem;
  padding-bottom: 0;

  .inner {
    min-height: 2rem;
    margin-top: 0;
    border-top: 1px solid $borderColor;
    padding-top: 1rem;
    overflow: auto; // clear float
  }

  .next {
    float: right;
  }
}

@media (max-width: $MQMobile) {
  .page-edit {
    .edit-link {
      margin-bottom: 0.5rem;
    }

    .last-updated {
      font-size: 0.8em;
      float: none;
      text-align: left;
    }
  }
}
</style>
