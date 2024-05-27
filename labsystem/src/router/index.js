import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import registerCheck from '../views/registerCheck.vue'
import tasks from '@/views/tasks/firstTasks.vue'
import setTasks from '@/views/tasks/setTasks.vue'
import homePage from '../views/homePage.vue'
import booksSearch from '@/views/booksManage/user/booksSearch.vue'
import bookselfCheck from '@/views/booksManage/user/bookselfCheck.vue'
import booksReturn from '@/views/booksManage/user/booksReturn.vue'
import booksBorrow from '@/views/booksManage/user/booksBorrow.vue'
import bookinfosCheckandChange from '@/views/booksManage/admin/bookinfosCheckandChange.vue'
import borrowedCheck from '@/views/booksManage/admin/borrowedCheck.vue'
import homePageInner from '@/views/home.vue'
import paperFillIn from '@/views/recruitPaperManage/users/paperFillIn.vue'
import paperMyself from '@/views/recruitPaperManage/users/paperMyself.vue'
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
      component: homePage,
      redirect: '/homepageInner',
      children: [
        {
          path: '/homePageInner',
          component: homePageInner
        },
        {
          path: '/booksSearch',
          // component: BooksSearch
          component: booksSearch
        },
        {
          path: '/bookselfCheck',
          component: bookselfCheck
        },

        {
          path: '/booksBorrow',
          component: booksBorrow
        },
        {
          path: '/booksReturn',
          component: booksReturn
        },
        {
          path: '/bookinfosCheckandChange',
          component: bookinfosCheckandChange
        },
        {
          path: '/borrowedCheck',
          component: borrowedCheck
        }, {
          path: '/paperFillIn',
          component: paperFillIn

        },
        {
          path: '/paperMyself',
          component: paperMyself
        }
      ]
    }
  ]
})

export default router
