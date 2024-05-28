// 有关login的API
import request from '@/utils/request'

// login
// 登录接口
export function login(data) {
    return request.post("/users/login", data)
}
// register
// 注册
export function register() {
    return request({
        url: '/users/register',
        method: 'post',
        data
    })
}
