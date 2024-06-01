import requests from '@/untils/request'
export const submit= (interviewees,email,phone,intentDepartment,classroom,introduce,purpose,remark,grade)=>{
return  requests.post('//registration/insertRegistration'),
  {
  interviewees,
  email,
  phone,
  intentDepartment,
  classroom,
  introduce,
  purpose,
  remark,
  grade
}
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
