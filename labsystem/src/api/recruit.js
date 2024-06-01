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
export const getPaperData = (userid) => {
  return recruit.get('/registration/queryMyRecruit', {
    params: {
      userid
    }
  })
}
