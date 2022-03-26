import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes/index'
Vue.use(VueRouter)

export default new VueRouter({
  routes,
  // mode: 'history',
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active'
})
