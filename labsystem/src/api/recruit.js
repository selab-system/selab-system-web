import recruit from '@/utils/request.js'

export const postPaperData = (name, phonenumber, email, classroom, grade, date, group, introduce, purpose, notes) => {
  return recruit.post('/registration/insertRegistration', {
    params: {
      registrationDto: {
        interviewees: name,
        email: email,
        phone: phonenumber,
        intentDepartment: group,
        classroom,
        interviewTime: date,
        introduce,
        purpose,
        remark: notes,
        grade
      }

    }
  })
}
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
export const postUpdate = (Detail) => {
  return recruit.post('/registration/updateRegistration', {
    params: {
      Detail
      // registrationDto: {
      //   id: 0,
      //   interviewees: {
      //     userName: 'string',
      //     groupId: 0,
      //     groupName: 'string',
      //     roleId: 0,
      //     roleName: 'string',
      //     email: 'string',
      //     phone: 'string',
      //     sex: 0,
      //     userId: 0,
      //     createTime: 'string',
      //     updateTime: 'string'
      //   },
      //   email: 'string',
      //   phone: 0,
      //   intentDepartment: 0,
      //   classroom: 'string',
      //   interviewTime: 'string',
      //   introduce: 'string',
      //   purpose: 'string',
      //   remark: 'string',
      //   grade: 'string'
      // }
    }
  })
}
// 获取所有的报名表列表
export const getlistDetail = (cur, size) => {
  return recruit.get('/registration/selectList', {
    params: {
      cur,
      size
    }
  })
}
// 按照用户名进行查询报名表：
export const getDetailByName = (intervieweesName, cur, size) => {
  return recruit.get('/registration/selectByUserName', {
    params: {
      intervieweesName,
      cur,
      size
    }

  })
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
