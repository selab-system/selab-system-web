<template>
  <div id="app">
    <!-- 登录 -->
    <!-- 首页组件 -->
    <!-- <Login/> -->
    <router-link to="/index"></router-link>
    <router-view></router-view>
    <!-- <navBasicComponent/> -->
  </div>
</template>

<script>
// 为了测试
import navBasicComponent from './components/navComponent/navBasicComponent.vue';
import index from './views/indexPage/index.vue';
import Login from './views/loginPage/Login.vue';
import UserHome from './views/UserHomePage/UserHome.vue';
import TaskManagement from './views/TaskManagePage/TaskManagement.vue';
import EnrolmentFormManagementPage from './views/EnrolmentManagePage/EnrolmentFormManagementPage.vue';
import BookManage from './views/BookManagePage/BookManage.vue';
export default {
  name: 'App',
  components: {
    index,
    Login,
    UserHome,
    TaskManagement,
    EnrolmentFormManagementPage,
    BookManage,
    navBasicComponent
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  font-family: var(--font-family-secondary);
  color: var(--font-color);
}
a {  
    text-decoration: none;  
    cursor: pointer;
}
</style>
