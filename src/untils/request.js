
import axios from 'axios'
const requests = axios.create({
  baseURL: '/code',
  timeout: 1000
})
requests.interceptors.request.use(function (config) {
  if (localStorage.getItem('token')) {
    requests.headers.common.token = localStorage.getItem('token')
  }
  return config
})

requests.interceptors.response.use(function (response) {
  if (response.status !== 200) {
    console.log('服务异常')
    return Promise.reject(response.statusTest)
  }
  return response
}, function (error) {
  return Promise.reject(error)
})
