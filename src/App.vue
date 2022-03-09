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
