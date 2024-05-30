import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import registerCheck from '../views/registerCheck.vue'
import tasks from '@/views/tasks/firstTasks.vue'
import setTasks from '@/views/tasks/setTasks.vue'
import checkTasks from '@/views/tasks/checkTasks.vue'
import tasksDetails from '@/views/tasks/tasksDetails.vue'
import reportRecord from '@/views/tasks/reportRecord.vue'
import taskDetails from '@/views/tasks/taskDetails.vue'
import testTasks from '@/views/tasks/testTasks.vue'
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
      path: '/checkTasks',
      component: checkTasks
    },
    {
      path: '/taskDetails',
      component: taskDetails
    },
    {
      path: '/reportRecord',
      component: reportRecord
    },
    {
      path: '/tasksDetails',
      component: tasksDetails
    },
    {
      path: '/testTasks',
      component: testTasks
    }
  ]
})

export default router
