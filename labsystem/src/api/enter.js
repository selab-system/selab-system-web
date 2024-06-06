// 存放请求封装函数
// 此处存放有关 系统登录有关的所有请求
import enter from '@/utils/request.js'
// 导入的实例名可以默认设置

export const judgeLogin = (username, password) => {
  return enter.post('/login',
    {
      username: username,
      password: password
    }

  )
}
export const registerPost = (userName, email, phone, sex, password, identify) => {
  return enter.post('/register', {
    userName,
    email,
    phone,
    sex,
    password,
    identify
  }
  )
}
export const PostInfo = (email) => {
  return enter.post('/sendEmail', {
    email
  }
  )
}
