// 存放函数工具，请求模块
// 封装axios实例
// 在实例中添加响应，请求拦截器
// 创建实例 添加配置（url基础地址 ，响应请求拦截器）
import axios from 'axios'
import { Message } from 'element-ui'
const instance = axios.create({
  baseURL: '/api',
  timeout: 3000
})
// 添加请求拦截器
instance.interceptors.request.use(
  // 对请求发送时token参数的全局设置：

  (config) => { // config代表的是请求体中的数据
    const token = localStorage.getItem('token')
    if (token) { config.headers.Authorization = `Bearer ${token}` }// token存在将config中的请求头中的Authorization设置为本地存储的token值
    return config
  }, (error) => {
    console.log('发送请求失败')
    return Promise.reject(error)
    // 一般返回错误的原始信息
  }
)
// 更改了写法  //使用箭头函数简化写法
// 添加响应拦截器
instance.interceptors.response.use(
  // 2xx 范围内的状态码都会触发该函数。

  (response) => { // 如果接受到了状态码为2xx的响应执行该函数
    // 在控制台中打印接受的data数据
    console.log('响应成功')
    console.log('Response Data:', response.data)
  },

  // 3xx及以上都会调用以下的函数
  // 添加对token失败的提示：响应状态码是401
  // 先获取响应体中状态码
  // 之后设置提示框
  (error) => {
    const { status } = error.response // 对错误消息回复
    // 当token过期时后端常常返回的是401状态码
    if (status === 401) { // 未授权
      console.log('访问被拒绝 token过期')
      Message.error('tokne失效拒绝访问请重新登录')
      localStorage.removeItem('token')// 将本地存储的token参数进行清空
      this.$store.state.token = ''
      // 将仓库中的token值设置为空
      // 跳转到登录面重新登录
      this.$router.push('/login')
      return Promise.reject(new Error('登录过期，请重新登录')) // 保持此行以便外部可能的错误处理
    } else if (status === 403) { // 没有权限
      return Promise.reject(new Error('没有权限访问'))
    } else if (status === 404) { // 资源不存在
      Message.error('请求资源不存在(url路径错误)')
      return Promise.reject(new Error('请求的资源不存在'))
    } else if (status >= 500) { // 服务端异常
      console.log('服务器错误，请求参数格式/类型错误')
      Message.error('服务器错误或网络异常')
      return Promise.reject(new Error('服务器错误或网络异常'))
    } else {
      console.error(`Unexpected response status: ${status}`)
      // 错误形式打印未知状态码
      return Promise.reject(error)
      // 返回原始的错误信息供外部处理
    }
  }

)

// 以上函数的response和error都是响应对象
export default instance
