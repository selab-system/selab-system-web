// 存放函数工具，请求模块
// 封装axios实例
// 在实例中添加响应，请求拦截器
// 创建实例 添加配置（url基础地址 ，响应请求拦截器）
import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 添加请求拦截器
instance.interceptors.request.use(
  // 对token发送的全局设置：
  (config) => {
    const token = localStorage.getItem('token')
    if (token) { config.headers.Authorization = `Bearer ${token}` }

    return config
  }, (error) =>
    Promise.reject(error)
)
// 更改了写法  //使用箭头函数简化写法

// 添加响应拦截器
instance.interceptors.response.use(
  // 2xx 范围内的状态码都会触发该函数。
  // 添加对token失败的提示：
  // 先获取响应体中状态码
  // 之后设置提示框
  (response) => response, //
  (error) => {
    const { status } = error.response
    if (status === 401) { // 未授权
    } else if (status === 403) { // 没有权限
    } else if (status === 404) { // 资源不存在
      console.log('请求资源不存在')
    } else if (status >= 500) { // 服务端异常
      console.log('服务器错误，请求参数错误')
    }

    // 超出 2xx 范围的状态码都会触发该函数。
    Promise.reject(error)
  }
  // ({ response }) => {
  //   const { status, data } = response// 对对象的解构
  //   const { message } = data
  //   Message.error(message)
  //   if (status === 401)router.push('/login')
  //   return Promise.reject(error)
  // }
)
// 以上函数的response和error都是响应对象
export default instance
