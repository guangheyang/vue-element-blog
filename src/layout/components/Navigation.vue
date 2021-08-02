<template>
    <div class="nav-box">
        <el-row>
            <el-col :xs="3" :sm="3" :md="4" :lg="12" :xl="12">
                <router-link to="/" tag="div" class="logo">
                    <div class="blog">杨光贺的个人博客</div>
                </router-link>
            </el-col>
            <el-col :xs="21" :sm="21" :md="20" :lg="12" :xl="12">
                <div class="nav-list hidden-xs-only">
                    <template  v-for="(path, index) in pathList">
                        <router-link :key="index" :to="path.path">{{ path.name }}</router-link>
                    </template>
                </div>
                <div class="unfold hidden-sm-and-up">
                    <i class="el-icon-s-fold" @click="drawerChange"></i>
                    <el-collapse-transition>
                        <div class="menu" v-show="drawer">
                            <template  v-for="(path, index) in pathList">
                                <div :key="index"  class="menu--item" @click="clickMenuItem(path)">{{ path.name }}</div>
                            </template>
                        </div>
                    </el-collapse-transition>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
// import Monster from '@/components/Monster'
export default {
    data() {
        return {
            drawer: false,
            pathList: [{ name: '首页', path: '/', index: '1' }, { name: '关于', path: '/about', index: '2' }]
        }
    },
    methods: {
        drawerChange() {
            this.drawer = !this.drawer
        },
        clickMenuItem(path) {
            this.$router.push({ path: path.path })
            this.drawerChange()
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
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
        height: 5rem;
        width: 100vw;
        line-height: 5rem;
        background-color: #db4d6d;
        box-sizing: border-box;
        .el-row {
            width: 100vw;
        }
        .logo {
            color: #fff;
            font-size: 1.25rem;
            cursor: pointer;
            white-space: nowrap;
        }
    }
    .nav-list {
        text-align: right;
        a {
            margin-left: 2rem;
            color: #fff;
            text-decoration: none;
        }
        a.link-exact-active {
            font-weight: bold;
        }
    }
    .unfold {
        text-align: right;
        font-size: 1.25rem;
        color: #fff;
        i {
            height: 1.25rem;
            width: 1.25rem;
        }
        .menu {
            position: fixed;
            top: 5rem;
            left: 0;
            background-color: #fff;
            width: 100%;
            border: 1px solid #eee;
            color: #A4A4A4;
            box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
            .menu--item {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 2.5rem;
                line-height: 2.5rem;
                padding: 0.5rem;
            }
        }
    }
</style>
