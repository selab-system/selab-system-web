import requests from '@/untils/request'
// 得到表格中成员信息
export const getTableData = () => {
  return requests.get('/user/query', {
    headers: { Authorization: 'string' }
  })
}
// 提交表格中成员信息
export const pushTableData = (userName, groupId, roleId, email, phone, sex) => {
  return requests.post('/user/save', {
    userName,
    groupId,
    roleId,
    email,
    phone,
    sex
  }, {
    headers: {
      Authorization: 'string'
    }
  }
  )
}
