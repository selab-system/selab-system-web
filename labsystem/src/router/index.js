import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import registerCheck from '../views/registerCheck.vue'
import tasks from '@/views/tasks/firstTasks.vue'
import setTasks from '@/views/tasks/setTasks.vue'
import homePage from '../views/homePage.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'

    },
    {
      path: '/login',
      component: login
      // 不显示
    },
    {
      path: '/register',
      component: register

    },
    {
      path: '/registerCheck',
      component: registerCheck
    },
    {
      path: '/tasks',
      component: tasks
    },
    {
      path: '/setTasks',
      component: setTasks
    },
    {
      path: '/homePage',
      // 注意此处 路径的书写不是相对路径不加 .
      component: homePage
    }
  ]
})

export default router
