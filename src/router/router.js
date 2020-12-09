import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/blog/:id',
    name: 'blog',
    component: () => import('../views/Blog')
  },
  {
    path: '/editBlog',
    name: 'editBlog',
    component: () => import('../views/EditBlog')
  },
  {
    path: '/personDemo',
    name: 'personDemo',
    component: () => import('../views/Activity')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  }
]
export default new VueRouter({
  routes,
  // mode: 'history',
  linkActiveClass: 'link-active',
  linkExactActiveClass: 'link-exact-active'
})
