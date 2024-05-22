// import { groupBy } from 'core-js/fn/map'

import { registerPost } from '@/api/enter'

const state = {
  userName: '',
  passWord: '',
  Email: '',
  phoneNumber: '',
  Gender: null
  // 在对象中属性为空可以使用null来表示
}
const mutations = {
// mutations对象中创建函数时不需要使用关键字
// 可以进行简化 在点击下一步按钮时将数据进行传输

  dataBind (state, username, password, email, phonenumber, gender) {
    state.userName = username
    state.passWord = password
    state.Email = email
    state.phoneNumber = phonenumber
    state.Gender = gender
    console.log(state.userName)
  }
}
const actions = {
  async registerData () {
    const result = await registerPost(state.userName, state.passWord, state.Email, state.phoneNumber)
    console.log(result)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions

}
