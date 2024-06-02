// 存放请求封装函数
// 此处存放有关 系统登录有关的所有请求
import enter from '@/utils/request.js'
// 导入的实例名可以默认设置

export const judgeLogin = (username, password) => {
  return enter.post('/login', {
    params: {
      username,
      password
    }
  })
}
export const registerPost = (userName, passWord, Email, phoneNumber, gender, checkinfo) => {
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
export const PostInfo = (email) => {
  return enter.post('/login/sendEmail', {
    params: {
      email
    }
  })
}
