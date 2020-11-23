<template>
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
</template>
<script>
import Monster from '@/components/Monster'
export default {
    components: {
        Monster
    }
}
</script>
<style lang="scss" scoped>
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
</style>
