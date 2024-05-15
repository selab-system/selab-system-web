<script>
export default {
  name: 'MyLogin'
}
</script>
<template>
  <div class="Login">
    <h1>实验室管理系统</h1>
    <input type="text" placeholder="请输入你的账号">;
    <input type="password" placeholder="请输入你的密码">
    <router-link to="/home">登录</router-link>
    <router-link to="/register">注册</router-link>
  </div>
</template>

<style scoped>

</style>
