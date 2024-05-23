import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import tasks from '@/views/tasks/firstTasks.vue'
import setTasks from '@/views/tasks/setTasks.vue'
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
      path: '/tasks',
      component: tasks
    },
    {
      path: '/setTasks',
      component: setTasks
    }
  ]
})

export default router
