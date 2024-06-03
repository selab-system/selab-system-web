// 此处存放任务有关函数
import content from '@/utils/request.js'
// 参数：发布者id，更新者id，任务组id，任务名称，任务内容，任务截止时间
export const firstTask = (obj) => {
  const { Authorization, publisherId, updaterId, groupIds, name, content, dealTime } = obj
  return content.get('/task/save', {
    params: {
      Authorization,
      publisherId,
      updaterId,
      groupIds,
      name,
      content,
      dealTime
    }
  })
}

// update 更新任务
export function queryMyTask (data) {
  return content.get({
    url: '/task/update',
    method: 'post',
    data
  })
}
