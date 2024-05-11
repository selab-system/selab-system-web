// 存放请求封装函数
// 此处存放有关 系统登录有关的所有请求
import request from '@/utils/request.js'

export const getCodeimg = () => {
  return request.get()
}
