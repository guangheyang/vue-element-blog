<template>
  <div class="editBlog">
    <el-card class="box-card">
      <Editor></Editor>
    </el-card>
  </div>
</template>

<script>
import Editor from '@/components/Editor'
export default {
  components: {
    Editor
  }
}
</script>

<style scoped>
  .editBlog {
    width: 1180px;
    margin: 0 auto;
  }
</style>
