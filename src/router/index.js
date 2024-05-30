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
import register from "@/views/loginPage/register.vue";
// 引入报名表组件
// 把vuerouter安装成vue的插件
Vue.use(VueRouter)

let routes = [
    {
        path: "/",
        redirect: "/login"
    },
    // 登录路由
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/register",
        name: "register",
        component: register
    },
    // 主页路由
    {
        path: "/index",
        name: "index",
        component: index,

    },
    // 用户管理路由
    {
        path: "/user",
        name: "user",
        component: UserHome,
    },
    // 图书管理路由
    {
        path: "/book",
        name: "book",
        component: BookManage,
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
    }
]
let router = new VueRouter({
    routes,
    mode: "history"
})


export default router
