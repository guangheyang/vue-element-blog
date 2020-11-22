<template>
  <div class="home">
      <ul class="content">
          <li class="main-item">
              <el-link :underline="false">从 egg-bin 聊到 command line interface Tool</el-link>
              <div class="blog-abstract">
                  > 最近正在看一些关于 egg 方面的东西，其中对于 egg 的运行方式是基于 egg-bin 来处理的，正好可以借此机会通过 egg-bin 来了解 egg 的运行过程以及 egg-bin 在其他场
              </div>
              <div class="blog-info">
                  <span class="blog-author">杨光贺</span>
                  <span class="blog-created">2020-11-22 20:50</span>
              </div>
          </li>
      </ul>
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
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
.main-item {
    width: 80%;
    max-width: 880px;
    margin: 0 auto 4rem;
    text-align: left;
    list-style: none;
    padding-bottom: 4rem;
    position: relative;
    border-bottom: 1px solid #ebf2f6;
    .el-link.el-link--default {
        font-size: 2.6rem;
        font-weight: 700;
        margin-bottom: .4rem;
        transition: color .3s ease;
        &:hover {
            color: #2e2e2e;
        }
    }
    .blog-abstract {
        font-size: 1.2rem;
        line-height: 1.9rem;
        padding: .5rem 0 2.2rem;
        color: #30363A;
    }
    .blog-info {
        font-size: 1rem;
        display: flex;
        color: #8492a6;
        text-transform: uppercase;
        font-weight: 500;
        .blog-author {
            padding: 0 .5rem 0 0;
        }
        .blog-created {
            padding: 0 1rem;
            margin-left: .5rem;
            border-left: 1px solid #d5dbde;
        }
    }
}
    .blog-page {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
