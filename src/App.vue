<template>
  <div id="app">
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
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  .nav-box {
    position: fixed;
    top: 0;
    z-index:999;
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    line-height: 100px;
    background-color: #db4d6d;
    box-sizing: border-box;
  }
  .nav-box .logo {
    color: #fff;
    display: flex;
    font-size: 20px;
    cursor: pointer;
  }
  .nav-list a {
    margin-left: 40px;
    color: #fff;
    text-decoration: none;
  }
  .nav-list a.link-exact-active {
    font-weight: bold;
  }
  .container {
      margin: 124px auto 0;
      overflow-x: hidden;
      height: calc(100% - 100px);
  }
  .nav-box{
    padding:0 24px;
  }
  .v-enter {
    transform: translateX(1000px);
  }
  .v-enter-active{
    transition: all .5s;
  }
  .v-enter-to {
    transform: translateX(0px);
  }
</style>
