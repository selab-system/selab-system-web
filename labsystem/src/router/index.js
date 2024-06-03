import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import register from '../views/register.vue'
import registerCheck from '../views/registerCheck.vue'
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
import checkTasks from '@/views/tasksManage/user/checkTasks.vue'
import tasksDetails from '@/views/tasksManage/user/tasksDetails.vue'
import testTasks from '@/views/tasksManage/user/testTasks.vue'
import setTasks from '@/views/tasksManage/admin/setTasks.vue'
import taskDetails from '@/views/tasksManage/admin/taskDetails.vue'
import reportRecord from '@/views/tasksManage/admin/reportRecord.vue'
import SearchUser from '@/views/usersManage/SearchUser.vue'
import SearchDepartment from '@/views/usersManage/SearchDepartment.vue'
import paperSearch from '@/views/recruitPaperManage/users/admin/paperSearch'
import notFound from '@/views/notFound.vue'
import PaperDetail from '@/views/recruitPaperManage/users/admin/paperDetail.vue'
import paperDetaillist from '@/views/recruitPaperManage/users/admin/paperDetaillist.vue'
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
      path: '/homePage',
      // 注意此处 路径的书写不是相对路径不加 .
      component: homePage,
      redirect: '/homepageInner',
      children: [
        {
          path: '/homePageInner',
          component: homePageInner
        },
        // 书籍管理任务配置
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
        // 以下为管理员权限
        {
          path: '/bookinfosCheckandChange',
          component: bookinfosCheckandChange
        },
        {
          path: '/borrowedCheck',
          component: borrowedCheck
        },
        {
          path: '/paperFillIn',
          component: paperFillIn

        },
        {
          path: '/paperMyself',
          component: paperMyself
        },
        // 任务管理路由配置
        {
          path: '/checkTasks',
          component: checkTasks
        },
        {
          path: '/tasksDetails',
          component: tasksDetails
        },
        {
          path: '/testTasks',
          component: testTasks

        },
        // 以下为管理员
        {
          path: '/setTasks',
          component: setTasks
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
          path: '/SearchUser',
          component: SearchUser
        },
        {
          path: '/SearchDepartment',
          component: SearchDepartment

        },
        // 管理员
        {
          path: '/paperSearch',
          component: paperSearch
        },
        {
          path: '/paperDetail',
          component: PaperDetail
        }, {
          // 路由命名不可以使用_下划线
          path: '/paperDetaillist',
          component: paperDetaillist

        }
      ]
    },
    // 对之前所设置的所有不符合的路径进行统一设置 通配符*转移到同一个页面
    {
      path: '*',
      component: notFound
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
router.beforeEach((to, from, next) => {
  const routes = ['/bookinfosCheckandChange', '/borrowedCheck', '/setTasks', '/taskDetails', '/reportRecord', '/paperSearch']
  if (JSON.parse(localStorage.getItem('roleid')) !== '2' && routes.includes(to.path)) { alert('没有权限') } else {
    next()
  }
})
//  路由守卫：当个人已经登录时保存有token时可以访问除登录面……外路由否则将提示前往登录
router.beforeEach((to, from, next) => {
  const routes = ['/login', '/register', '/registerCheck', '/homePageInner']
  if (!JSON.parse(localStorage.getItem('token')) && !routes.includes(to.path)) { alert('请先前往登录') } else {
    next()
  }
})
export default router
