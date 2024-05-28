<template>
  <div id="app">
<<<<<<< HEAD
      <router-view/>
=======
    <!-- 登录 -->
    <!-- 首页组件 -->
    <!-- <Login/> -->
    <router-link to="/index"></router-link>
    <router-view></router-view>
    <!-- <navBasicComponent/> -->
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
  </div>
</template>

<script>
<<<<<<< HEAD
// import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
  },
  computed: {
    // ...mapState(['isLoggedIn'])  //映射状态
  }
=======
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
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
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
<<<<<<< HEAD
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
=======
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
</style>
