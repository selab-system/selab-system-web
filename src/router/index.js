// 路由配置
import Vue from "vue";
import VueRouter from "vue-router";
// 引入登录组件
import Login from "@/views/loginPage/Login.vue";
// 引入主页组件
import index from "@/views/indexPage/index.vue";
// 引入用户管理组件
import UserHome from "@/views/UserHomePage/UserHome.vue";
// 引入图书管理组件
import BookManage from "@/views/BookManagePage/BookManage.vue";
// 引入招新报名表管理租价
import EnrolmentFormManagementPage from "@/views/EnrolmentManagePage/EnrolmentFormManagementPage.vue";
// 引入任务管理组件
import TaskManagement from "@/views/TaskManagePage/TaskManagement.vue";
//引入发布任务组件
import TaskRelease from "@/views/TaskManagePage/Manager/TaskRelease.vue";
//引入查看全部任务组件
import CheckAllTask from "@/views/TaskManagePage/Manager/CheckAllTask.vue";
//引入查看任务详情组件
import TaskDetail from "@/views/TaskManagePage/Manager/TaskDetail.vue";
//引入任务更新组件
import TaskUpdate from "@/views/TaskManagePage/Manager/TsakUpdate.vue";
//引入查看任务汇报组件
import TaskReport from "@/views/TaskManagePage/Manager/TaskReport.vue";
// 引入报名表组件
// 把vuerouter安装成vue的插件
Vue.use(VueRouter)

let routes = [
    // 主页路由
    {
        path: "/",
        name: "index",
        component: index,
        children:[
            // 用户管理路由
            {
                path: "/user",
                name: "user",
                component: UserHome
            },
            // 图书管理路由
            {
                path: "/book",
                name: "book",
                component: BookManage
            },
            // 招新报名表管理路由
            {
                path: "/enroll",
                name: "enroll",
                component: EnrolmentFormManagementPage
            },
            // 任务管理路由
            {
                path: "/task",
                name: "task",
                component: TaskManagement
            },
            // 任务发布路由
            {
                path: "/release",
                name: "taskRelease",
                component: TaskRelease
            },
            //查看全部任务
            {
                path: "/CheckAllTask",
                name: "CheckAllTask",
                component: CheckAllTask
            },
            //查看任务详情
            {
                path: "/TaskDetail",
                name: "TaskDetail",
                component: TaskDetail
            },
            //更新任务
            {
                path: "/TaskUpdate",
                name: "TaskUpdate",
                component:TaskUpdate
            },
            //查看任务汇报
            {
                path:"/TaskReport",
                name:"TaskReport",
                component:TaskReport
            }
                ]
            },
    // 登录路由
    {
        path: "/login",
        name: "login",
        component: Login
    },
]
let router = new VueRouter({
    routes,
    mode: "history"
})

// 设置路由守卫，进行token验证
// router.beforeEach((to, from, next) => {
//     // 获取token，这里以简单的从localStorage中获取为例
//     const token = localStorage.getItem('token');

//     // 如果token不存在，则重定向到登录页
//     if (!token) {
//         next({ name: 'login' });
//     } else {
//         // 其他情况正常放行
//         next();
//     }
// })

export default router
