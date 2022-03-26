import Home from '@/views/Home'
export const routes = [
 {
  path: '/',
  redirect: '/home'
 },
 {
  path: '/home',
  meta: { onlyTopShow: true, title: '首页' },
  component: Home
 },
 {
  path: '/blog/:id',
  name: 'blog',
  meta: { title: '博客页面' },
  component: () => import('@/views/Blog')
 },
 {
  path: '/editBlog',
  name: 'editBlog',
  meta: { title: '编辑博客' },
  component: () => import('@/views/EditBlog')
 },
 {
  path: '/personDemo',
  name: 'personDemo',
  meta: { title: '个人demo' },
  component: () => import('@/views/Activity')
 },
 {
  path: '/about',
  name: 'about',
  meta: { onlyTopShow: true, title: '关于' },
  component: () => import('@/views/About')
 },
 {
  path: '/login',
  name: 'login',
  meta: { title: '登录' },
  component: () => import('@/views/Login')
 },
 {
  path: '/register',
  name: 'Register',
  meta: { title: '注册' },
  component: () => import('@/views/Register')
 },
 {
  path: '*',
  redirect: '/404'
 }
]