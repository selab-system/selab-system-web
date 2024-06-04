// 封装axios及相关请求
// 引入axios
import axios from "axios";
// 引入vuex
import store from "@/store";
import router from "@/router";
import messageService from "./messageService";

// 自定义配置发送请求   
const request = axios.create({
    // URL配置
    baseURL: '/api',
    timeout: 1000,
})

// 请求拦截器配置
request.interceptors.request.use(config => {
    const token = store.getters.getToken
    console.log('Request URL:', config.url); // 打印请求URL
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
        // config.headers.Authorization = `${token}`
    }

    return config
}, (error) => {
    // 错误处理
    console.log("没有成功发送请求");
    console.log(error);
    return Promise.reject(error)
})

// 响应拦截器配置
request.interceptors.response.use(response => {
    // 直接返回2xx范围内的响应数据
    console.log("Response Data:", response.data);
    return response.data;
}, error => {
    const { status } = error.response || {}; // 解构错误响应中的状态码
    if (status === 401) {
        // 处理token过期
        messageService.error("登录过期，请重新登录");
        localStorage.removeItem("token");
        // 跳转登录，并携带当前路由以便登录后返回
        router.replace({
            path: "/login",
            query: { redirect: router.currentRoute.fullPath }
        });
        return Promise.reject("登录过期，请重新登录"); // 保持此行以便外部可能的错误处理
    } else if (status === 404) {
        messageService.error("请求的资源不存在");
        return Promise.reject("请求的资源不存在");
    } else if (!status || status >= 500) {
        // 服务器错误或网络异常
        // console.log(status);
        messageService.error("服务器错误或网络异常，请稍后再试");
        console.log(status)
        return Promise.reject("服务器错误或网络异常");
    } else {
        console.log(error);
        console.error(`Unexpected response status: ${status}`);
        return Promise.reject(error); // 返回原始错误对象供外部处理
    }
});
// 导出
export default request