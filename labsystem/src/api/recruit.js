import recruit from '@/utils/request.js'
// 提交报名表
export const postPaperData = (name, phonenumber, email, classroom, grade, date, group, introduce, purpose, notes) => {
  return recruit.post('/registration/insertRegistration', {
    interviewees: name,
    email: email,
    phone: phonenumber,
    intentDepartment: group,
    classroom,
    interviewTime: date,
    // (需要设置为2024-03-04 12:04:08)格式
    introduce,
    purpose,
    remark: notes,
    grade
    // 已测试参数格式无问题
  }
  )
}
// 我的报名表数据的获取 uerid
export const getRecruitData = (userId) => {
  return recruit.get(`/registration/queryMyRecruit?userId=${userId}`
  )
}

// 更改报名表/报名表详细页展示时数据的获取 uerid
export const getDetail = (id) => {
  return recruit.get('/registration/selectRegistrationById', {
    params: {
      registrationId: id
    }
  })
}

// 更改报名表时数据的提交
export const postUpdate = (id, interviewees, email, phone, intentDepartment, classroom, interviewTime, introduce, purpose, remark, grade) => {
  return recruit.post('/registration/updateRegistration', {
    // 请求体传参
    id,
    interviewees,
    email,
    phone,
    intentDepartment,
    classroom,
    interviewTime,
    introduce,
    purpose,
    remark,
    grade

  })
}
// 不加变量名默认是请求体传参

// 获取所有的报名表列表
export const getlistDetail = (cur, size) => {
  return recruit.get(`/registration/selectList?cur=${cur}&size=${size}`)
}
// 按照用户名进行查询报名表：（暂时写死的）
export const getDetailByName = (intervieweesName) => {
  return recruit.get(`/registration/selectByUserName?intervieweesName=${intervieweesName}&cur=1&size=10`, {
  }
  )
}
// 按照年级进行查询报名表：
export const getDetailBygrade = (grade, cur, size) => {
  return recruit.get('/registration/selectByGradeId', {
    params: {
      grade,
      cur,
      size
    }

  })
}
// 根据意向部门进行查询
export const getDetailByintentDepartment = (intentDepartment, cur, size) => {
  return recruit.get('/registration/selectByGradeId', {
    params: {
      intentDepartment,
      cur,
      size
    }

  })
}
