import recruit from '@/utils/request.js'
//
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
// export const getDetail = (id) => {
//   return recruit.get('/registration/selectRegistrationById', {
//     params: {
//       registrationDto: {
//         interviewees: name,
//         email: email,
//         phone: phonenumber,
//         intentDepartment: group,
//         classroom,
//         interviewTime: date,
//         introduce,
//         purpose,
//         remark: notes,
//         grade
//       }

//     }
//   })
// }
// 我的报名表数据的获取
export const getPaperData = (userid) => {
  return recruit.get('/registration/queryMyRecruit', {
    params: {
      userid
    }
  })
}
// 更改报名表/报名表详细页展示 时数据的获取
export const getDetail = (id) => {
  return recruit.get('/registration/selectList', {
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
  return recruit.get('/registration/selectList', {
    params: {
      cur,
      size
    }
  })
}
// 按照用户名进行查询报名表：（暂时写死的）
export const getDetailByName = (intervieweesName) => {
  return recruit.get(`/registration/selectByUserName?intervieweesName=${intervieweesName}&cur=1&size=10`, {
  }
  )
}
// 按照年级进行查询报名表：
export const getDetailBygrade = (grade, cur, size) => {
  return recruit.get('/registration/selectByUserName', {
    params: {
      grade,
      cur,
      size
    }

  })
}
