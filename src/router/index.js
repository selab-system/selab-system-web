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
import userInformationChange from '@/views/UserInformationChange.vue'
import viewCompletionStatus from '@/views/viewCompletionStatus.vue'
import viewOwnForm from '@/views/viewOwnForm.vue'
import viewReportRecords from '@/views/viewReportRecords.vue'
import viewTasks from '@/views/viewTasks.vue'
import adUserChange from '@/views/adUserChange.vue'
import register from '../views/Register.vue'
import changeMassage from '../views/changeMassage.vue'
import adDepartInformation from '@/views/adDepartInformation.vue'
import idSearch from "@/views/idSearch.vue";
import NameSearch from "@/views/nameSearch.vue";
import departmentSearch from "@/views/departmentSearch.vue"
import gradeSearch from "@/views/gradeSearch.vue";
import welcome from "@/views/welcome.vue"
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
    meta: [3],
    children: [
      {
        path: '/userinformationchange',
        name: 'userinformationchange',
        component: userInformationChange,
        meta:{
          title:'用户信息修改',
          roles:[3]
        }
      },
      {
        path: '/departInformation',
        name: 'departInformation',
        component: departInformation
        ,
        meta:{
          title:'部门信息',
          roles:[3]
        }
      },
      {
        path: '/borrowBooks',
        name: 'borrowBooks',
        component: borrowBooks,
        meta:{
          title:'借阅书籍',
          roles:[3]
        }
      },
      {
        path: '/returnBook',
        name: 'returnBook',
        component: returnBook,
        meta:{
          title:'归还书籍',
          roles:[3]
        }
      },
      {
        path: '/serachAllBooks',
        name: 'serachAllBooks',
        component: serachAllBooks,
        meta:{
          title:'查询所有书籍',
          roles:[3]
        }
      },
      {
        path: '/serachOwnBooks',
        name: 'serachOwnBooks',
        component: serachOwnBooks,
        meta:{
          title:'查询本人书籍',
          roles:[3]
        }
      },
      {
        path: '/serachBooksBorrowed',
        name: 'serachBooksBorrowed',
        component: serachBooksBorrowed,
        meta:{
          title:'查询本人借阅书籍',
          roles:[3]
        }
      },
      {
        path: '/submitForm',
        name: 'submitForm',
        component: submitForm,
        meta:{
          title:'提交报名表',
          roles:[3]
      }},
      {
        path: '/viewOwnForm',
        name: 'viewOwnForm',
        component: viewOwnForm,
        meta:{
          title:'查看自己报名表',
          roles:[3]
        }
      },
      {
        path: '/viewTasks',
        name: 'viewTasks',
        component: viewTasks,
        meta:{
          title:'查看任务',
          roles:[3]
        }
      },
      {
        path: '/reportProgress',
        name: 'reportProgress',
        component: reportProgress,
        meta:{
          title:'任务完成后汇报进度',
          roles:[3]
        }
      },
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
    component: register,
    meta: { requiresAuth: true }
  },
  {
    path: '/adhome',
    name: 'adHome',
    component: adHome,
    children: [
      {
        path: '/adUserChange',
        name: 'adUserChange',
        component: adUserChange,
        meta: {
         title:'用户信息修改',
          roles: [1,2,3]
        }
      },
      {

        path: '/QueryBookInformation',
        name: 'QueryBookInformation',
        component: QueryBookInformation,
        meta: {
          title:'查询书籍信息',
          roles: [1,2,3]
        }
      },
      {
        path: '/changeBookInformation',
        name: 'changeBookInformation',
        component: changeBookInformation,
        meta: {
          title:'修改书籍信息',
          roles:[1,2,3]
        }
      },
      {
        path: '/queryBorrowingRecords',
        name: ' queryBorrowingRecords',
        component: queryBorrowingRecords,
        meta: {
          title:'查询借阅状态',
          roles: [1,2,3]
        }
      },
      {
        path: '/countNumberOfForm',
        name: 'countNumberOfForm',
        component: countNumberOfForm,
        meta: {
          title:'统计报名表数量',
          roles: [1,2,3]
        }
      },
      {
        path: '/submissionRecord',
        name: 'submissionRecord',
        component: submissionRecord,
        meta: {
          title:'',
          roles: ['1','2']
        }
      },
      {
        path:'/idSearch',
        name:'idSearch',
        component:idSearch,
        meta: {
          title:'id查询报名表',
          roles: [1,2,3]
        }
      },
      {
        path:'/nameSearch',
        name:'NameSearch',
        component: NameSearch,
        meta: {
          title:'用户名查询报名表',
          roles: [1,2,3]
        }
      },
      {
        path: '/departmentSearch',
        name:'departmentSearch',
        component: departmentSearch,
        meta: {
          title:'意向部门查询报名表',
          roles: [1,2,3]
        }
      },
      {
        path:'/gradeSearch',
        name:'gradeSearch',
        component: gradeSearch,
        meta: {
          title:'年级查询报名表',
          roles: [1,2,3]
        }
      },
      {
        path: '/myRmarks',
        name: 'myRemarks',
        component: myRemarks,
        meta: {
          title:'',
          roles: [1,2,3]
        }
      },
      {
        path:'/changeMassage',
        name:'changeMassage',
        component: changeMassage,
        meta: {
          title:'修改提交信息',
          roles: [1,2,3]
        }
      },
      {
        path: '/publishTask',
        name: 'publishTask',
        component: publishTask,
        meta: {
          title:'发布阶段性任务',
          roles: [1,2,3]
        }
      },
      {
        path: '/viewCompletionStatus',
        name: 'viewCompletionStatus',
        component: viewCompletionStatus,
        meta: {
          title:'查看进度完成状况',
          roles: [1,2,3]
        }
      },
      {
        path: '/viewReportRecords',
        name: 'viewReportRecords',
        component: viewReportRecords,
        meta: {
          title:' 查看汇报记录',
          roles: [1,2,3]
        }
      },


      {
        path: '/adDepartInformation',
        name: 'adDepartInformation',
        component: adDepartInformation,
        meta: {
          title:'部门信息',
          roles: [1,2,3]
        }
      },


    ]
  }]
const router = new VueRouter({
  routes
})
// router.beforeEach((to, from, next) => {
//   // 如果访问的是登录界面则直接放行
//   let token = window.sessionStorage.getItem('token');
//   let roleId = window.sessionStorage.getItem('roleId')
//
//   if (to.path === '/login' || to.path === '/register') {
//     next()
//   }
//   else if (token) {
    // const hasAccess = to.matched.some(record => {
    //   // 确保 meta.roles 存在并且是一个数组
    //   return record.meta.roles && record.meta.roles.includes(+roleId);
    //   if(roleId!=hasAccess){
    //     alert("无权访问")
    //     router.push('/login')
    //   }
    //   else {
//     const hasAccess = to.matched.some(record => {
//       // 确保 meta.roles 存在并且是一个数组
//       return record.meta && record.meta.roles&&record.meta.roles.includes(+roleId)
//     });
//     if(!hasAccess)
//        {
//          alert("无进入权限")
//          next('/login')
//        }
//        else{
//          next()
//        }
//   }
//
//     else if (!token){
//      next('/login')
//   }
//
// })


export default router
