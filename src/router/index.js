import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import login from '../views/Login.vue'
import bookmanage from '../views/BookManage.vue'
import recruitmanage from '../views/RecruitManage.vue'
import taskmanage from '../views/TaskManage.vue'
import register from '../views/Register.vue'
import usermanage from '../views/UserManage.vue'
import usermanagechange from '../views/UserManageChange'
import bookadd from '@/views/BookAdd'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'MyHome',
    component: home,
    children: [
      {
        path: '/BookManage',
        name: 'BookManage',
        component: bookmanage
      },
      {
        path: '/BookAdd',
        name: 'BookAdd',
        component: bookadd
      },
      {
        path: '/RecruitManage',
        name: 'RecruitManage',
        component: recruitmanage
      },
      {
        path: '/TaskManage',
        name: 'TaskManage',
        component: taskmanage
      },
      {
        path: '/UserManage',
        name: 'UserManage',
        component: usermanage
      },
      {
        path: '/UserManageChange',
        name: 'UserManageChange',
        component: usermanagechange
      }
    ]
  },
  {
    path: '/login',
    name: 'MyLogin',
    component: login,
    children: [
      {
        path: '/register',
        name: 'MyRegister',
        component: register
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     return next()
//   }
//   const tokenStr = window.sessionStorage.getItem('token')
//   if (!tokenStr) {
//     return next('/login')
//   }
//   next()
// })
export default router
