<template>
  <div class="home">
      <template v-for="item in blogList">
          <BlogAbstract :key="item.id" :blog-obj="item" @link-title="clickTitle" />
      </template>
      <div class="blog-page">
          <el-pagination
              small
              layout="prev, pager, next"
              :total="50">
          </el-pagination>
      </div>
  </div>
</template>

<script>
  import BlogAbstract from '@/components/BlogAbstract'
  export default {
    data() {
      return {
          blogList: [{
              id: 1,
              title: '从 egg-bin 聊到 command line interface Tool',
              blogAbstract: '> 最近正在看一些关于 egg 方面的东西，其中对于 egg 的运行方式是基于 egg-bin 来处理的，正好可以借此机会通过 egg-bin 来了解 egg 的运行过程以及 egg-bin 在其他场',
              createTime: '2020-11-23 23:47'
          },{
              id: 2,
              title: '从 egg-bin 聊到 command line interface Tool',
              blogAbstract: '> 最近正在看一些关于 egg 方面的东西，其中对于 egg 的运行方式是基于 egg-bin 来处理的，正好可以借此机会通过 egg-bin 来了解 egg 的运行过程以及 egg-bin 在其他场',
              createTime: '2020-11-23 23:47'
          },{
              id: 3,
              title: '从 egg-bin 聊到 command line interface Tool',
              blogAbstract: '> 最近正在看一些关于 egg 方面的东西，其中对于 egg 的运行方式是基于 egg-bin 来处理的，正好可以借此机会通过 egg-bin 来了解 egg 的运行过程以及 egg-bin 在其他场',
              createTime: '2020-11-23 23:47'
          },{
              id: 4,
              title: '从 egg-bin 聊到 command line interface Tool',
              blogAbstract: '> 最近正在看一些关于 egg 方面的东西，其中对于 egg 的运行方式是基于 egg-bin 来处理的，正好可以借此机会通过 egg-bin 来了解 egg 的运行过程以及 egg-bin 在其他场',
              createTime: '2020-11-23 23:47'
          }]
      }
    },
    components: {
        BlogAbstract
    },
      methods: {
          clickTitle(id) {
              this.$router.push({
                  path: '/blog',
                  name: 'blog',
                  params:{ id }
              })
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
