import requests from '@/untils/request'
// 获取本人信息
export const  get= () => {
    return requests.get('/user/queryById/{userId}',
        {headers: { Authorization: 'string' }}
    )
  }