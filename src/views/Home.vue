<template>
  <div class="home" v-loading="loading">
    <template v-if="blogList.length > 0">
      <transition-group>
        <template v-for="(item, n) in blogList">
          <Blog
            v-if="defer(n * 2 + 1)"
            :key="item.id"
            :blog-obj="item"
            @link-title="clickTitle"
          />
        </template>
      </transition-group>
    </template>
    <NoData v-else />
    <div class="blog-page" v-if="showPage">
      <Page
        :current-page="paging.currentPage"
        :total-page="paging.total"
        @click-prev="prevPage"
        @click-next="nextPage"
      />
    </div>
  </div>
</template>

<script>
import Blog from "@/components/blogComp/Blog";
import Page from "@/components/Page";
import NoData from "@/components/NoData";
import { queryBlog, totalBlog } from "@/api/blog";
import defer from "@/utils/defer";
export default {
  components: {
    Blog,
    Page,
    NoData,
  },
  mixins: [defer(10)],
  data() {
    return {
      blogList: [],
      paging: {
        currentPage: 0,
        size: 0,
        total: 0,
      },
      loading: false,
    };
  },
  computed: {
    // 符合条件隐藏page
    showPage() {
      let result = true;
      // if (this.paging.currentPage === this.paging.total) {
      //     result = false
      // }
      if (this.paging.total === 0) {
        result = false;
      }
      if (this.blogList.length === 0) {
        result = false;
      }
      return result;
    },
  },
  created() {
    this.getBlogList();
    totalBlog().then((res) => {
      this.paging.total = Math.ceil(res.data[0].total / this.paging.size);
    });
  },
  methods: {
    clickTitle(id) {
      this.$router.push({
        path: "/blog",
        name: "blog",
        params: { id },
      });
    },
    getBlogList() {
      this.loading = true;
      const { currentPage: page, size } = this.paging;
      queryBlog({ page, size })
        .then((res) => {
          this.blogList = res.data || [];
          this.loading = false;
        })
        .catch(() => {
          this.blogList = [];
          this.loading = false;
        });
    },
    prevPage(currentPage) {
      currentPage--;
      this.paging.currentPage = currentPage;
      this.getBlogList();
    },
    nextPage(currentPage) {
      currentPage++;
      this.paging.currentPage = currentPage;
      this.getBlogList();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none; /* IE 10+ */
  overflow-y: hidden;
}
.blog-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
.v-enter {
  transform: translateX(60rem);
}
.v-enter-active {
  transition: all 0.5s;
}
.v-enter-to {
  transform: translateX(0px);
}
</style>
