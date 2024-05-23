import requests from '@/untils/request'
export const report = (taskId, reportStatus, details) => {
  return requests.post('/task/report', {
    TaskReportDto: {
      taskId,
      reportStatus,
      details
    }
  })
}
// 通过taskid查询本人汇报记录
export function queryMyReport (params) {
  return requests({
    url: '/task/report/queryMyReport',
    method: 'get',
    params
  })
}
// 用户查询其需要汇报的任务
export function queryForUser (params) {
  return requests({
    url: '/task/queryForUser',
    method: 'get',
    params
  })
}
