<script>
import {login} from '@/api/login'
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
    <vue-particles id="particles-js" class="vue-particles" color="#8EB5C9" :particleOpacity="0.7" :particlesNumber="150" shapeType="star"
                   :particleSize="4" linesColor="#8EB5C9" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
                   :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" ref="particles">
    </vue-particles>
    <div class="login">
    <h1>实验室管理系统</h1>
    <form id="loginform" @submit.prevent="handlesubmit">
      <label for="useraccount" style="font-size: 30px">账号</label>
      <br>
    <input type="text" placeholder="请输入你的账号" id="useraccount" v-model="form.useraccount" style="width:250px ;height: 30px">
      <br>
      <label for="userpassword" style="font-size: 30px">密码</label>
      <br>
    <input type="password" placeholder="请输入你的密码" id="userpassword" v-model="form.userpassword" style="width:250px ;height: 30px">
      <br>
    <router-link to="/home"  class="active">用户登录</router-link>
      <router-link to="/adhome" class="active">管理登录</router-link>
    <router-link to="/register" class="active">注册</router-link>
    </form>
  </div>
  </div>
</template>
<style scoped>
.active{
  margin-right: 30px;
  margin-left: 10px;
  text-decoration: none;
  color: white;
}
div{
  background-color: black;
  margin-top: -11px;
  margin-left: -5px;
}
.login{
  position: relative;
  margin-left: 45%;
 color: white;
}
#particles-js {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 0;
}
h1{
  color: white;
}
</style>
