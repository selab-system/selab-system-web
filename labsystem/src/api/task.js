// 此处存放任务有关函数
import contents from '@/utils/request.js'
// save-post 参数：发布者id，更新者id，任务组id，任务名称，任务内容，任务截止时间
export const firstTask = (obj) => {
  const { Authorization, publisherId, updaterId, groupIds, name, content, dealTime } = obj
  return contents.post('/task/save', {
    Authorization,
    publisherId,
    updaterId,
    groupIds,
    name,
    content,
    dealTime

  })
}

// update-post 获得数据
export const updateTask = (publisherId, name, content, dealTime) => {
  return contents.post('/task/update/{id}', {
    publisherId,
    name,
    content,
    dealTime
  })
}

// queryMyTask-get 根据发布者查询其发布的所有信息
export const queryMyTask = (publisherName, name, content, publishTime) => {
  return contents.get('/task/queryMyTask', {
    publisherName,
    name,
    content,
    publishTime
  })
}

// queryById-get-string 根据taskld查询任务信息
export const queryById = (publisherName, name, content, dealTime, status) => {
  return contents.get('/task/queryById', {
    publisherName,
    name,
    content,
    dealTime,
    // 任务状态
    status
  })
}

// report-post-string 汇报任务
export const reportTask = (reportStatus, details) => {
  return contents.post('/task/report', {
    // 汇报状态
    reportStatus,
    // 汇报信息
    details
  })
}

// queryCount-get string 查询当前汇报数量
export const queryCount = (taskId) => {
  return contents.get('/task/report/queryCount', {
    // Query参数
    taskId
  })
}

// queryForUser-get-string
export const queryForUser = (username, publisherName, name, content, groupNames, dealTime, status) => {
  return contents.get('/task/queryForUser', {
    // query
    username,
    // data
    publisherName,
    name,
    content,
    groupNames,
    dealTime,
    status
  })
}
