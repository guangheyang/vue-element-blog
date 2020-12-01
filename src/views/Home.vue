<template>
  <div class="home" v-loading="loading">
      <template v-if="blogList.length > 0">
          <BlogAbstract v-for="item in blogList" :key="item.id" :blog-obj="item" @link-title="clickTitle" />
      </template>
      <NoData v-else />
      <div class="blog-page" v-if="showPage">
          <Page :current-page="paging.currentPage" :total-page="paging.total" @click-prev="prevPage" @click-next="nextPage" />
      </div>
  </div>
</template>

<script>
  import BlogAbstract from '@/components/BlogAbstract'
  import Page from '@/components/Page'
  import NoData from '@/components/NoData'
  import axios from 'axios'
  export default {
    data() {
      return {
          blogList: [],
          paging: {
              currentPage: 1,
              size: 5,
              total: 0
          },
          loading: false
      }
    },
    computed: {
        // 符合条件隐藏page
        showPage(){
            let result = true
            if (this.paging.currentPage === this.paging.total) {
                result = false
            }
            if (this.paging.total === 0) {
                result = false
            }
            if (this.blogList.length === 0) {
                result = false
            }
            return result
        }
    },
    components: {
        BlogAbstract,
        Page,
        NoData
    },
    created(){
        this.getBlogList()
        axios.get('http://192.168.1.20:12306/totalBlog').then(res => {
            console.log(res, 'total')
            this.paging.total = Math.ceil(res.data.data[0].total / this.paging.size)
        })
    },
    methods: {
      clickTitle(id) {
      this.$router.push({
         path: '/blog',
         name: 'blog',
         params:{ id }
       })
      },
      getBlogList() {
          this.loading = true
          axios.get(`http://192.168.1.20:12306/queryBlog?page=${this.paging.currentPage}&size=${this.paging.size}`).then(res => {
              console.log(res, 'res')
              this.blogList = res.data.data
              this.loading = false
          }).catch(() => {
              this.loading = false
          })
      },
      prevPage(currentPage) {
          currentPage--
          this.paging.currentPage = currentPage
          this.getBlogList()
      },
      nextPage(currentPage) {
          currentPage++
          this.paging.currentPage = currentPage
          this.getBlogList()
      }
    }
  }
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
</style>
