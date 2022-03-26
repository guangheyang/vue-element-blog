export const route = [
{
 path: '/blog/:id',
 name: 'blog',
 component: () => import('@/views/Blog')
},
{
 path: '/editBlog',
 name: 'editBlog',
 component: () => import('@/views/EditBlog')
},
{
 path: '/personDemo',
 name: 'personDemo',
 component: () => import('@/views/Activity')
},
{
 path: '/about',
 name: 'about',
 component: () => import('@/views/About')
},
{
 path: '/login',
 name: 'login',
 component: () => import('@/views/Login')
},
{
 path: '/register',
 name: 'Register',
 component: () => import('@/views/Register')
}
]