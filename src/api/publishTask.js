import requests from '@/untils/request'
export const save = (publisherId, updaterId, groupIds, name, content, dealTime) => {
  return requests.post('/task/save', {
    publisherId,
    updaterId,
    groupIds,
    name,
    content,
    dealTime
  })
}
