import requests from '@/untils/request'
export function register (params) {
  return requests({
    url: '/register',
    method: 'post',
    data:params
  })
}
export function login (params) {
  return requests({
    method: 'post',
    url: '/login',
    data:params
  })
}
export function subAuth(params){
  return requests({
    url:'/register/sendEmail',
    method:'post',
    data:params
  })
}
