// 有关login的API
import request from '@/utils/request'

<<<<<<< HEAD
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
=======
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
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
        method: 'post',
        data
    })
}
