import requests from '@/untils/request'
export function submit(data){
  return requests({
    url:'/registration/insertRegistration',
    method:'post',
    data
  })
}
export function viewsubmit(params){
return requests({
  url:'/registration/queryMyRecruit',
 method:'get',
  params
})
}
export function changeMessage(data){
  return requests({
    url:'/registration/updateRegistration',
    method:'post',
    data
  })
}
export function idsearch(params){
  return requests({
    url:'/registration/selectRegistrationById',
    method:'get',
    params
    }
  )
}
export function Namesearch(params){
  return requests({
      url:'/registration/selectByUserName',
      method:'get',
      params
    }
  )
}
export function departmentSearch(params){
  return requests({
      url:'/registration/selectByDepart',
      method:'get',
      params
    }
  )
}
export function GradeSearch(params){
  return requests({
      url:'/registration/selectByGradeId',
      method:'get',
      params
    }
  )
}
