<template functional>
  <div>
    <div class="top">
      <el-avatar
        class="avatar"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <div class="name">{{ props.info.name }}</div>
      <div class="every">{{ props.info.sentence }}</div>
    </div>
    <div class="info">
      <div class="el-icon-s-platform">
        <span class="text">{{ props.info.occupation }} {{ props.info.nowYear - 2019 }}年工作经验</span>
      </div>
      <div class="el-icon-office-building">
        <span class="text">{{ props.info.company }}</span>
      </div>
      <div class="el-icon-location-information">
        <span class="text">{{ props.info.nativePlace }}</span>
      </div>
      <div class="el-icon-phone-outline">
        <span class="text">{{ props.info.phone }}</span>
      </div>
      <div class="el-icon-message">
        <span class="text">{{ props.info.email }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  functional: true,
  props: {
   info: {
    type: Object,
    require: true
   }
  },
};
</script>
<style lang="scss" scope>
.top {
  margin-bottom: 1.5rem;
  text-align: center;
  .avatar {
    width: 6.5rem;
    height: 6.5rem;
    margin-bottom: 1.5rem;
  }
  .name {
    margin-bottom: 0.25rem;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}
.info {
  flex: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  div {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  .text {
    margin-left: 0.75rem;
    line-height: 20px;
    height: 20px;
  }
}
</style>