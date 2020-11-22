<template>
  <div id="app">
    <div class="nav-box">
      <router-link to="/" tag="div" class="logo">
        <Monster />
        <div class="blog">杨光贺的个人博客</div>
      </router-link>
      <div class="nav-list">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-link to="/editBlog">发布</router-link>
        <router-link to="/personDemo">个人项目</router-link>
      </div>
    </div>
    <div class="container">
      <transition >
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import Monster from '@/components/Monster'
export default {
  name: 'App',
  components: {
      Monster
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
    display: flex;
    justify-content: space-between;
    height: 100px;
    line-height: 100px;
    background-color: #db4d6d;
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
      min-width: 1180px;
      margin: 24px auto 0;
      overflow-x: hidden;
  }
  .nav-box{
    padding-left: 200px;
    padding-right: 200px;
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
