import requests from '@/untils/request'
// 根据发布者名查询其发布的所有任务
export function queryMyTask (params) {
  return requests({
    url: '/task/queryMyTask',
    method: 'get',
    params
  })
}
// 通过id查询任务的所有汇报记录
export function queryAllResport (data) {
  return requests({
    url: '/task/report/queryAllResport',
    method: 'get',
    data
  })
}
