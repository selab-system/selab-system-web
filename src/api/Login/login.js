// 有关login的API
import request from '@/utils/request'

// let baseURL = process.env.VUE_APP_BASE_API
// let APIlogin = {}
// APIlogin.login = (data) => {
//     service.post('/login', data)
// }
// const LoginApi = {
//     login: (data) => {
//         return request.post('/login', data)
//             .then(response => {
//                 console.log(response.data);
//                 return response.data
//             })
//             .catch(error => {
//                 // 登录失败的逻辑
//                 console.log(error);
//                 throw error
//             })
//     }
// }

// login
// 登录接口
export function login() {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

// register
// 注册
export function register() {
    return request({
        url: '/register',
        method: 'post',
        data
    })
}
