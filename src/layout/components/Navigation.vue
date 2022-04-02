<template>
  <div class="nav-box">
    <!-- <el-row> -->
      <!-- <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"> -->
        <router-link to="/" tag="div" class="logo">
          <div class="blog">杨光贺的个人博客</div>
        </router-link>
      <!-- </el-col>
      <el-col :xs="18" :sm="18" :md="20" :lg="20" :xl="20"> -->
        <div class="nav-list hidden-xs-only">
          <template v-for="(path, index) in handleRouter">
            <router-link :key="index" :to="path.path">{{
              path.meta.title
            }}</router-link>
          </template>
        </div>
        <div class="unfold hidden-sm-and-up">
          <i class="el-icon-s-fold" @click="drawerChange" />
          <el-collapse-transition>
            <div class="menu" v-show="drawer">
              <template v-for="(path, index) in handleRouter">
                <div
                  :key="index"
                  class="menu--item"
                  @click="clickMenuItem(path)"
                >
                  {{ path.meta.title }}
                </div>
              </template>
            </div>
          </el-collapse-transition>
        </div>
      <!-- </el-col> -->
    <!-- </el-row> -->
  </div>
</template>
<script>
import { routes } from "@/router/routes/index";
export default {
  data() {
    return {
      drawer: false,
    };
  },
  computed: {
    handleRouter() {
      return routes.filter((r) => {
        if (r.meta && r.meta.onlyTopShow) {
          return {
            path: r.path,
            name: r.title,
          };
        }
      });
    },
  },
  methods: {
    drawerChange() {
      this.drawer = !this.drawer;
    },
    // 小尺寸时，点击icon路由跳转
    clickMenuItem({ path }) {
      if (this.$router.currentRoute.path === path) {
        return this.drawerChange()
      }
      this.drawerChange();
      this.$router.push({ path });
    }
  },
};
</script>
<style lang="scss" scoped>
.nav-box {
  position: fixed;
  top: 0;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  height: 5rem;
  width: 100vw;
  line-height: 5rem;
  background-color: #db4d6d;
  box-sizing: border-box;
  padding: 0 1.5rem;
  .el-row {
    width: 100vw;
  }
  .logo {
    color: #fff;
    font-size: 1.25rem;
    white-space: nowrap;
    .blog {
      cursor: pointer;
    }
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
    color: #a4a4a4;
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
