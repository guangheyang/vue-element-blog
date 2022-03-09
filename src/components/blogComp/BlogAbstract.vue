<template functional>
  <div>
    <div class="blog-abstract" v-html="props.blogObj.blogAbstract" />
      <div class="blog-info">
        <div>
          <span class="blog-author">杨光贺</span>
          <span class="blog-created">发布于{{ props.blogObj.createTime | timeStr }}</span>
        </div>
        <span class="blog-see">浏览 ({{ props.blogObj.seeNum }})</span>
      </div>
  </div>
</template>

<script>
export default {
  functional:true,
  props: {
    blogObj: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-abstract {
  font-size: 1.2rem;
  line-height: 1.9rem;
  padding-top: 0.5rem;
  height: 92px;
  color: #30363a;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-indent: 2rem;
}
.blog-info {
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  color: #8492a6;
  text-transform: uppercase;
  font-weight: 500;
  padding-top: 2.2rem;
//   width: 22rem;
  .blog-author {
    padding: 0 0.5rem 0 0;
    width: 4rem;
  }
  .blog-created {
    padding: 0 0.5rem;
    border-left: 1px solid #d5dbde;
  }
}
</style>
