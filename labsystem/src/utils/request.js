// 存放函数工具，请求模块
// 封装axios实例
// 在实例中添加响应，请求拦截器
// 创建实例 添加配置（url基础地址 ，响应请求拦截器）
import axios from 'axios'
const instance = axios.create({
  baseURL: '/',
  timeout: 3000
})
// 添加请求拦截器
instance.interceptors.request.use(
  // 对请求发送时token参数的全局设置：
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
  (response) => response,
  (error) => {
    const { status } = error.response
    // 当token过期时后端常常返回的是401状态码
    if (status === 401) { // 未授权
      console.log('访问被拒绝 token过期')
      this.$store.state.token = ''
      // 将仓库中的token值设置为空
      alert('登录失效,请重新登录')
      // 跳转到登录面重新登录
      this.$router.push('/login')
    } else if (status === 403) { // 没有权限
      console.log('服务器拒绝请求')
    } else if (status === 404) { // 资源不存在
      console.log('请求资源不存在 :url路径错误')
    } else if (status >= 500) { // 服务端异常
      console.log('服务器错误，请求参数格式/类型错误')
    }
    // 超出 2xx 范围的状态码都会触发该函数。
    Promise.reject(error)
    console.log(error)
  }

)

// 以上函数的response和error都是响应对象
export default instance
