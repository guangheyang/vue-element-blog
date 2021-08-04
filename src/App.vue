<template>
  <div id="app" v-cloak>
    <Layout />
  </div>
</template>
<script>
import Layout from '@/layout'
export default {
  name: 'App',
  components: {
    Layout
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    // 获取dom
    const wrap = document.getElementById('monster_wrap');
    const app = document.getElementById('app');
    // 初始时隐藏#app
    app.style.display = 'none';
    // 动画节点存在，3s后隐藏并显示#app
    if (wrap !== null) {
      setTimeout(() => {
        wrap.style.display = 'none';
        app.style.display = 'block';
      }, 3000)
    }
  }
}
</script>

<style scoped>
  /*防止刷新时闪烁*/
  [v-cloak] {
    display: none;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
</style>
