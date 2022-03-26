import Vue from 'vue'
import VueRouter from 'vue-router'
import { route } from './routes/index'
import Home from '@/views/Home'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  },
  ...route
]
export default new VueRouter({
  routes,
  // mode: 'history',
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active'
})
