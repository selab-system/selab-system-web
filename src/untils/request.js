
import axios from 'axios'
// 创建axios对象
const requests = axios.create({
  baseURL: 'http://dev-cn.your-api-server.com',
  timeout: 5000,
  headers:{
    Authorization:'string'
  }
})
// 请求拦截器
requests.interceptors.request.use(function (config) {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config
})
// 响应拦截器
requests.interceptors.response.use(function (response) {
  if (response.status !== 200) {
    console.log('服务异常')
    return Promise.reject(response.statusTest)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})
export default requests
