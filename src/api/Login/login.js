// 有关login的API
import request from '@/utils/request'

// login
// 登录接口
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data: data
    })
}
// register
// 注册
export function register(registerData) {
    return request({
        url: '/register',
        method: 'post',
        data: registerData
    })
}
export function sendEmail(emailData) {
    return request({
        url: '/sendEmail',
        method: 'post',
        data: emailData
    })
}
