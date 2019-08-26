<template>
  <footer class="footer">
    <p>© {{start}}-{{present}} <i class="icon icon-love"></i> destiny</p>
    <span>
      <i class="icon icon-myself">
        <span
          id="busuanzi_container_site_uv"
          style="display:none"
        >
          访问用户：<span id="busuanzi_value_site_uv"></span>
        </span>人</i>
      <i class="icon icon-eye">
        <span
          id="busuanzi_container_site_pv"
          style="display:none"
        >
          访问次数：<span id="busuanzi_value_site_pv"></span>
        </span>次
      </i>
    </span>
    <p>Powered by <a href="https://v1.vuepress.vuejs.org/zh/">VuePress</a> · Theme - <a href="https://github.com/destinytaoer/vuepress-theme-tomato">tomato</a></p>
  </footer>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      present: new Date().getFullYear()
    };
  },
  computed: {
    start() {
      return this.$site.pages
        .map(page => {
          return page.frontmatter.date;
        })
        .filter(item => !!item)
        .map(item => moment(item).format("YYYY"))
        .sort((a, b) => a - b)[0];
    }
  },
  mounted() {
    this.bsz();
  },
  methods: {
    bsz() {
      var bszCaller, bszTag, ready, scriptTag;
      !(function() {
        var c,
          d,
          e,
          a = !1,
          b = [];
        (ready = function(c) {
          return (
            a ||
            "interactive" === document.readyState ||
            "complete" === document.readyState
              ? c.call(document)
              : b.push(function() {
                  return c.call(this);
                }),
            this
          );
        }),
          (d = function() {
            for (var a = 0, c = b.length; c > a; a++) b[a].apply(document);
            b = [];
          }),
          (e = function() {
            a ||
              ((a = !0),
              d.call(window),
              document.removeEventListener
                ? document.removeEventListener("DOMContentLoaded", e, !1)
                : document.attachEvent &&
                  (document.detachEvent("onreadystatechange", e),
                  window == window.top && (clearInterval(c), (c = null))));
          }),
          document.addEventListener
            ? document.addEventListener("DOMContentLoaded", e, !1)
            : document.attachEvent &&
              (document.attachEvent("onreadystatechange", function() {
                /loaded|complete/.test(document.readyState) && e();
              }),
              window == window.top &&
                (c = setInterval(function() {
                  try {
                    a || document.documentElement.doScroll("left");
                  } catch (b) {
                    return;
                  }
                  e();
                }, 5)));
      })(),
        (bszCaller = {
          fetch: function(a, b) {
            var c =
              "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
            (window[c] = this.evalCall(b)),
              (a = a.replace("=BusuanziCallback", "=" + c)),
              (scriptTag = document.createElement("SCRIPT")),
              (scriptTag.type = "text/javascript"),
              (scriptTag.defer = !0),
              (scriptTag.src = a),
              document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
          },
          evalCall: function(a) {
            return function(b) {
              ready(function() {
                try {
                  a(b), scriptTag.parentElement.removeChild(scriptTag);
                } catch (c) {
                  bszTag.hides();
                }
              });
            };
          }
        }),
        bszCaller.fetch(
          "//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback",
          function(a) {
            bszTag.texts(a), bszTag.shows();
          }
        ),
        (bszTag = {
          bszs: ["site_pv", "page_pv", "site_uv"],
          texts: function(a) {
            this.bszs.map(function(b) {
              var c = document.getElementById("busuanzi_value_" + b);
              c && (c.innerHTML = a[b]);
            });
          },
          hides: function() {
            this.bszs.map(function(a) {
              var b = document.getElementById("busuanzi_container_" + a);
              b && (b.style.display = "none");
            });
          },
          shows: function() {
            this.bszs.map(function(a) {
              var b = document.getElementById("busuanzi_container_" + a);
              b && (b.style.display = "inline");
            });
          }
        });
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/variables.styl';

@keyframes spin {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: $footerHeight;
  padding: 5px 0;
  text-align: center;
  margin-top: 2em;
  padding-left: $asideWidth;
  border-top: 1px solid #eee;
  box-shadow: 0 -1px 10px 1px $shadowColor;

  p {
    margin: 0;
  }

  .icon-love {
    display: inline-block;
    animation: spin 1s linear infinite;
  }

  span i:first-child {
    margin-right: 1em;
  }
}

@media (max-width: $MQNarrow) {
  .footer {
    font-size: 12px;
    padding-left: 0;
  }
}
</style>