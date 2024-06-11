import requests from '@/untils/request'
// 得到表格中成员信息
export const getList = () => {
  return requests.get('/group/queryAll')
}
// 获取成员信息
export const searchUserMsg = (userId) => {
  return requests.get(`/user/queryById/${userId}`,
  {}
   )
}
// 删去小组
export const delectGroup = (groupId) => {
  return requests.get('/group/delete',
  {params:{
    groupId
  }}
   )
}
// 添加小组
export const addGroup = (groupName) => {
  return requests.post('/group/save',
  {groupName}
   )
}
// 修改组别
export const changeGroup = (changeform) => {
  const{userId,groupId}=changeform
  return requests.get('user/group/update',
  {userId,groupId}
   )
}
// 修改小组信息
export const changdeGroupMsg = (changelist) => {
  const{groupId,groupName,createTime}=changelist
  return requests.post('/group/save',
  {groupId,groupName,createTime})
}