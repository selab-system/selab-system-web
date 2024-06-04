import Vue from 'vue'
import App from './App.vue'
// 引入 饿了么ui组件
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

// 导入路由模块
import router from './router'
// 引入 store
import store from './store'
// 引入全局样式
import './assets/css/global.css'
import messageService from './utils/messageService'

Vue.config.productionTip = false

// 使用
Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  // 挂载路由模块
  router: router,
  // 挂载store
  store: store
}).$mount('#app')
