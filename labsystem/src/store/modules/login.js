import { judgeLogin } from '@/api/enter'

// 在各模块中设置数据存储 直接设置即可
// 补充 token的记录
const state = {
  postMessagex: '13123',
  passwordx: '',
  // 登录仅记录一次一人的登录信息？
  // 信息记录后会在用户管理处使用？
  // 注意token的获取
  userName: '',
  groupId: '',
  roleId: '',
  useId: '',
  msgNotice: ''
}
//
const mutations = {
  changepassWord (state, password) {
    state.passwordx = password
  },
  changepostMessage (state, postMessage) {
    state.postMessagex = postMessage
  },
  getRegisterData ({ state }) {
    // 获取时 函数在 页面进行渲染后执行 注册页面此时可能打开了或者没有打开
    // 应进行判断 如果获取数据为空应结束函数
    // state.postMessagex(rootState)
    // {

    // }
  }
}
// 实现数据绑定
const actions = {
  async judgeLogin () {
    // 实现功能是：将用户名，密码作为参数向服务器进行请求，并接收返回的参数
    // 11、msg可以作为判断登录进去与否的信息吗？
    const { data, msg } = await judgeLogin(state.postMessage, state.password)
    state.userName = data.userName// 用户名
    state.groupId = data.groupId// 小组id
    state.msgNotice = msg
    state.roleId = data.roleId// 角色id
    state.useId = data.useId// 用户id
    // console.log(result)
  }

}

export default
{
  namespaced: true,
  state,
  actions,
  mutations
}
