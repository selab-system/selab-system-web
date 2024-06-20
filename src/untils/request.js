
import axios from 'axios'
// 创建axios对象
const requests = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    Authorization: 'string'
  }
})
// 请求拦截器
requests.interceptors.request.use(function (config) {
  if (sessionStorage.getItem('token')) {
    config.headers.Authorization = sessionStorage.getItem('token')
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
