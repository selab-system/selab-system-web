// 存放请求封装函数
// 此处存放有关 系统登录有关的所有请求
import login from '@/utils/request.js'
// 导入的实例名可以默认设置

export const judgeLogin = (username, password) => {
  return login.post('/login', {
    params: {
      username,
      password
    }
  })
}
