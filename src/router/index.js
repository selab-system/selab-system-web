import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import login from '../views/Login.vue'
import bookmanage from '../views/BookManage.vue'
import recruitmanage from '../views/RecruitManage.vue'
import taskmanage from '../views/TaskManage.vue'
import register from '../views/Register.vue'
import usermanage from '../views/UserManage.vue'
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

export default router
