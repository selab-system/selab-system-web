import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login
    /* 在此将各仓库模块中js文件挂载到store库中 */
  }
})
