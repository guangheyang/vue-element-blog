<template>
  <div class="tag">
    <div class="personTag">个人标签</div>
    <el-tag
      v-for="tag in tags"
      :key="tag"
      :closable="power"
      :disable-transitions="false"
      @close="$eimt('click-close', tag)"
      >{{ tag }}</el-tag
    >
    <slot name="add-tag" />
  </div>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      default: [],
    },
    power: {
     type: Boolean,
     default: false
    }
  },
};
</script>
<style lang="scss">
.tag {
  .personTag {
    margin-bottom: 1.75rem;
  }
  .el-tag {
    margin-bottom: 0.625rem;
    margin-right: 0.625rem;
  }
  .el-tag + .el-tag {
    margin-right: 0.625rem;
  }
  .button-new-tag {
    height: 2rem;
    width: 5.5rem;
    line-height: 1.875rem;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 5.5rem;
    padding-top: 0;
    padding-bottom: 0;
    margin-bottom: 0.625rem;
    vertical-align: bottom;
  }
}
</style>