// 存放请求封装函数
// 此处存放有关 系统登录有关的所有请求
import enter from '@/utils/request.js'
// 导入的实例名可以默认设置

// 登录接口
export const judgeLogin = (username, password) => {
<<<<<<< HEAD
  return enter.post(
    '/login',
    {
      password: password
    }
  )
}
// 注册接口
export const registerPost = (userName, email, phone, sex, password, identify) => {
=======
  return enter.post('/login', {
    params: {
      username,
      password
    }
  })
}
export const registerPost = (userName, passWord, Email, phoneNumber, gender, checkinfo) => {
>>>>>>> e0d04097df2157baf0bd64bca75c2f7eebe7b586
  return enter.post('/register', {
    params: {
      userName,
      passWord,
      Email,
      phoneNumber,
      gender,
      checkinfo

    }
  })
}
// 注册验证码发送接口
export const PostInfo = (email) => {
  return enter.post('/login/sendEmail', {
    params: {
      email
    }
  })
}
