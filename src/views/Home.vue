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
// import { queryBlog, totalBlog } from "@/api/blog";
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
      blogList: [
        {
          title: "叫你杰哥1",
          createTime: new Date().getTime(),
          seeNum: 1290,
          id: 1,
          blogAbstract: `博主作为一名前端开发，日常开发的技术栈是Vue，并且用Vue开发也有一年多了，对其用法也较为熟练了，但是对各种用法和各种api使用都是只知其然而不知其所以然，因此，有时候在排查bug的时候就会有点捉襟见肘。鉴于此，索性就从github上clone下来一份Vue源码来学习学习，本系列博文将用来记录博主对Vue源码的整个学习过程，以及自己对源码的一些理解。一方面开阔自己的知识视野，另一方面也希望这些文字能够带给他人些许帮助。`,
        },
        {
          title: "叫你杰哥1",
          createTime: new Date().getTime(),
          seeNum: 1290,
          id: 2,
          blogAbstract: `博主作为一名前端开发，日常开发的技术栈是Vue，并且用Vue开发也有一年多了，对其用法也较为熟练了，但是对各种用法和各种api使用都是只知其然而不知其所以然，因此，有时候在排查bug的时候就会有点捉襟见肘。鉴于此，索性就从github上clone下来一份Vue源码来学习学习，本系列博文将用来记录博主对Vue源码的整个学习过程，以及自己对源码的一些理解。一方面开阔自己的知识视野，另一方面也希望这些文字能够带给他人些许帮助。`,
        },
      ],
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
    // this.getBlogList();
    // totalBlog().then((res) => {
    //   this.paging.total = Math.ceil(res.data[0].total / this.paging.size);
    // });
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
      // const { currentPage: page, size } = this.paging;
      // queryBlog({ page, size })
      //   .then((res) => {
      //     this.blogList = res.data || [];
      //     this.loading = false;
      //   })
      //   .catch(() => {
      //     this.blogList = [];
      //     this.loading = false;
      //   });
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
