// 存放函数工具，请求模块
// 封装axios实例
// 在实例中添加响应，请求拦截器
// 创建实例 添加配置（url基础地址 ，响应请求拦截器）
import axios from 'axios'
const instance = axios.create({
  baseURL: '/api',
  timeout: 500
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  console.log('config', config)
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
// instance.interceptors.response.use(function (response) {
//   // 2xx 范围内的状态码都会触发该函数。
//   // 对响应数据做点什么
//   // 此处 response 代表整个响应体
//   const res = response.data
//   if (res !== 0) {
//   // 设置提示信息
//     // 抛出错误
//     return Promise.reject(res.message)
//   }

//   return res
// }, function (error) {
//   // 超出 2xx 范围的状态码都会触发该函数。
//   // 对响应错误做点什么
//   return Promise.reject(error)
// })

export default instance
