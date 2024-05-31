
import axios from 'axios'
// 创建axios对象
const requests = axios.create({
  baseURL: 'http://10.0.0.159:8080/task/',
  timeout: 1000
})
// 请求拦截器
requests.interceptors.request.use(function (config) {
  if (localStorage.getItem('token')) {
    requests.headers.common.token = localStorage.getItem('token')
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
