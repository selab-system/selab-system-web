import requests from '@/untils/request'
// 根据发布者名查询其发布的所有任务
export function queryMyTask (params) {
  return requests({
    url: '/task/queryMyTask',
    method: 'get',
    params
  })
}
// 查询出所有需要汇报任务的用户信息
export function queryAllNeedReportUser (params) {
  return requests({
    url: '/task/report/queryAllNeedReportUser',
    method: 'get',
    params
  })
}
// 查询当前汇报数量
export function queryCount (params) {
  return requests({
    url: '/task/report/queryCount',
    method: 'get',
    params
  })
}
// 删除任务（逻辑删除）
export function deletetask (params) {
  return requests({
    url: '/task/delete',
    method: 'get',
    params
  })
}
