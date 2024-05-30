import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import adHome from '@/views/adHome.vue'
import login from '../views/Login.vue'
import changeBookInformation from '@/views/changeBookInformation.vue'
import borrowBooks from '../views/borrowBooks.vue'
import countNumberOfForm from '@/views/countNumberOfForm.vue'
import departInformation from '@/views/departInformation.vue'
import publishTask from '@/views/publishTask.vue'
import QueryBookInformation from '@/views/QueryBookInformation.vue'
import queryBorrowingRecords from '@/views/queryBorrowingRecords.vue'
import myRemarks from '@/views/myRemarks.vue'
import reportProgress from '@/views/reportProgress.vue'
import returnBook from '@/views/returnBook.vue'
import serachAllBooks from '@/views/serachAllBooks.vue'
import serachBooksBorrowed from '@/views/serachBooksBorrowed.vue'
import serachOwnBooks from '@/views/serachOwnBooks.vue'
import submissionRecord from '@/views/submissionRecord.vue'
import submitForm from '@/views/submitForm.vue'
import submittedForm from '@/views/submittedForm.vue'
import userInformationChange from '@/views/UserInformationChange.vue'
import viewCompletionStatus from '@/views/viewCompletionStatus.vue'
import viewOwnForm from '@/views/viewOwnForm.vue'
import viewReportRecords from '@/views/viewReportRecords.vue'
import viewTasks from '@/views/viewTasks.vue'
import adUserChange from '@/views/adUserChange.vue'
import register from '../views/Register.vue'
import changeMassage from '../views/changeMassage.vue'
import idSearch from "@/views/idSearch.vue";
import NameSearch from "@/views/nameSearch.vue";
import departmentSearch from "@/views/departmentSearch.vue"
import gradeSearch from "@/views/gradeSearch.vue";
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
        path: '/userinformationchange',
        name: 'userinformationchange',
        component: userInformationChange
      },
      {
        path: '/departInformation',
        name: 'departInformation',
        component: departInformation
      },
      {
        path: '/borrowBooks',
        name: 'borrowBooks',
        component: borrowBooks
      },
      {
        path: '/returnBook',
        name: 'returnBook',
        component: returnBook
      },
      {
        path: '/serachAllBooks',
        name: 'serachAllBooks',
        component: serachAllBooks
      },
      {
        path: '/serachOwnBooks',
        name: 'serachOwnBooks',
        component: serachOwnBooks
      },
      {
        path: '/serachBooksBorrowed',
        name: 'serachBooksBorrowed',
        component: serachBooksBorrowed
      },
      {
        path: '/submitForm',
        name: 'submitForm',
        component: submitForm
      },
      {
        path: '/viewOwnForm',
        name: 'viewOwnForm',
        component: viewOwnForm
      },
      {
        path: '/viewTasks',
        name: 'viewTasks',
        component: viewTasks
      },
      {
        path: '/reportProgress',
        name: 'reportProgress',
        component: reportProgress
      }
    ]
  },
  {
    path: '/login',
    name: 'MyLogin',
    component: login
  },
  {
    path: '/register',
    name: 'MyRegister',
    component: register
  },
  {
    path: '/adhome',
    name: 'adHome',
    component: adHome,
    children: [
      {
        path: '/adUserChange',
        name: 'adUserChange',
        component: adUserChange
      },
      {

        path: '/QueryBookInformation',
        name: 'QueryBookInformation',
        component: QueryBookInformation
      },
      {
        path: '/changeBookInformation',
        name: 'changeBookInformation',
        component: changeBookInformation
      },
      {
        path: '/ queryBorrowingRecords',
        name: ' queryBorrowingRecords',
        component: queryBorrowingRecords
      },
      {
        path: '/countNumberOfForm',
        name: 'countNumberOfForm',
        component: countNumberOfForm
      },
      {
        path: '/submissionRecord',
        name: 'submissionRecord',
        component: submissionRecord
      },
      {
        path: '/submittedForm',
        name: 'submittedForm',
        component: submittedForm,
        children:[
          {
        path:'/idSearch',
        name:'idSearch',
        component:idSearch
          },
          {
            path:'/nameSearch',
            name:'NameSearch',
            component: NameSearch
          },
          {
            path: '/departmentSearch',
            name:'departmentSearch',
            component: departmentSearch
          },
          {
            path:'/gradeSearch',
            name:'gradeSearch',
            component: gradeSearch
          }
      ]
      },
      {
        path: '/myRmarks',
        name: 'myRemarks',
        component: myRemarks
      },
      {
        path:'/changeMassage',
        name:'changeMassage',
        component: changeMassage
      },
      {
        path: '/publishTask',
        name: 'publishTask',
        component: publishTask
      },
      {
        path: '/viewCompletionStatus',
        name: 'viewCompletionStatus',
        component: viewCompletionStatus
      },
      {
        path: '/viewReportRecords',
        name: 'viewReportRecords',
        component: viewReportRecords
      },

    ]
  }]
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
