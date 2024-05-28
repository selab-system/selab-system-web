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
