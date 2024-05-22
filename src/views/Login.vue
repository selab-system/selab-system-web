<script>
import { login } from '@/api/login'
export default {
  name: 'MyLogin',
  data () {
    return {
      form: {
        useraccount: '',
        userpassword: ''
      }
    }
  },
  methods: {
    handlesubmit () {
      login(this.form).then(res => {
        console.log(res)
      })
    }
  }
}

</script>

<template>
  <div class="Login">
    <h1>实验室管理系统</h1>
    <form id="loginform" @submit.prevent="handlesubmit">
      <label for="useraccount">账号</label>
    <input type="text" placeholder="请输入你的账号" id="useraccount" v-model="form.useraccount">
      <label for="userpassword">密码</label>
    <input type="password" placeholder="请输入你的密码" id="userpassword" v-model="form.userpassword">
    <router-link to="/home" >登录</router-link>
    <router-link to="/register">注册</router-link>
    </form>
  </div>
</template>

<style scoped>

</style>
