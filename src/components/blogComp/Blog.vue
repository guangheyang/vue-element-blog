<template>
  <ul class="content">
    <li class="main-item">
      <el-link :underline="false" @click="$emit('link-title', blogObj.id)">
       {{ blogObj.title }}
      </el-link>
      <BlogAbstract :blogObj="blogObj"></BlogAbstract>
    </li>
  </ul>
</template>

<script>
import BlogAbstract from './BlogAbstract'
export default {
  components: {
    BlogAbstract
  },
  props: {
    blogObj: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  .main-item {
    max-width: 55rem;
    margin: 0 auto 2rem;
    text-align: left;
    list-style: none;
    padding-bottom: 2rem;
    position: relative;
    border-bottom: 1px solid #ebf2f6;
    .el-link.el-link--default {
      font-size: 2.6rem;
      font-weight: 700;
      margin-bottom: 0.4rem;
      transition: color 0.3s ease;
      &:hover {
        color: #2e2e2e;
      }
    }
  }
}
</style>
