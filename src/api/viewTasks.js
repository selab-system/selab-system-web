import requests from '@/untils/request'
// 用户查询其需要汇报的任务
export function queryForUser (params) {
  return requests({
    url: '/task/queryForUser',
    method: 'get',
    params
  })
}
