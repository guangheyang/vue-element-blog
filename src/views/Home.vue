<template>
  <div class="home">
      <template v-for="item in blogList">
          <BlogAbstract :key="item.id" :blog-obj="item" @link-title="clickTitle" />
      </template>
      <div class="blog-page" v-if="paging.currentPage !== paging.total">
          <Page :current-page="paging.currentPage" :total-page="paging.total" @click-prev="prevPage" @click-next="nextPage" />
      </div>
  </div>
</template>

<script>
  import BlogAbstract from '@/components/BlogAbstract'
  import Page from '@/components/Page'
  import axios from 'axios'
  export default {
    data() {
      return {
          blogList: [],
          paging: {
              currentPage: 1,
              size: 5,
              total: 0
          }
      }
    },
    components: {
        BlogAbstract,
        Page
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
          axios.get(`http://192.168.1.20:12306/queryBlog?page=${this.paging.currentPage}&size=${this.paging.size}`).then(res => {
              console.log(res, 'res')
              this.blogList = res.data.data
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
    .blog-page {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
