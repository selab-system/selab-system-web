// 封装axios及相关请求
// 引入axios
import axios from "axios";
// 引入vuex
import store from "@/store";
import router from "@/router";

// 自定义配置发送请求
const request = axios.create({
    // URL配置
    baseURL: 'https://fe36-101-7-141-191.ngrok-free.app/api',
    timeout: 10000,
})

// 请求拦截器配置
request.interceptors.request.use(config => {
    // 每次发送请求之前，判断vuex中是否有token
    // 如果存在，在http请求的header上加上token
    // 判断本地存在的token是否是过期的
    // 调用getters的获取token方法，没有token还可以把他存储起来
    const token = store.getters.getToken
    if (token) {
        // 有token,为所有的请求头加上token
        config.headers.Authorization = `Bearer ${token}`
    }
    const roleId = store
    // 返回配置
    return config
}, (error) => {
    // 错误处理
    console.log(error);
    return Promise.reject(error)
})
// 响应拦截器配置
request.interceptors.response.use(response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response.data)

    }
    else {
        // 这个时候已经发送了成功的请求，要判断用户的token状态，根据后端传的响应体里面的code码
        const ErrorStatus = response.status
        // switch (ErrorStatus) {
        //     case 401:
        //         // 401代表token过期
        //         // 清除本地的token并且情况vuex中的token对象
        //         alert("登陆过期，请重新登录")
        //         localStorage.removeItem("token")
        //         // store.commit("loginSuccess", null)
        //         // 跳转到登录页面
        //         console.log(1);
        //         router.replace({
        //             path: "/login", // 跳转到登录页面
        //             query: {
        //                 redirect: router.currentRoute.fullPath
        //             }
        //         })
        //         return Promise.reject("登陆过期，请重新登录")
        //         break
        //     // 404 代表请求的资源不存在
        //     case 404:
        //         alert("请求的资源不存在")
        //         return Promise.reject("请求的资源不存在")
        //         break
        //     // 其他错误
        //     default:
        //         alert("请求失败")
        //         break
        // }
    }
}, err => {
    return Promise.reject(err.msg)
}
)
// 导出
export default request