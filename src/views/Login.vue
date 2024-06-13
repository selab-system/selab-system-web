<script>
import {login} from '@/api/login'
export default {
  name: 'MyLogin',
  data () {
    return {
      form:{
        username: '',
        password: ''
      },
      code: 0,
      msg: "string",
      data: {
        userName: "string",
        groupId: 0,
        roleId: 0,
        userId: 0,
        token: "string"
      }
    }
  },
  methods: {
    handlesubmit () {
      // this.$router.push("/home")
      login(this.form).then(res => {
        console.log(res)

       if(res.status==200) {
         if (res.data.code == 50101) {
           alert("密码输入错误请重新输入密码")
         } else if (res.data.code == 50102) {
           alert("密码6到12个字符，其中至少1个大写字母，1个小写字母和1个数字,不能包含特殊字符，不可以是中文,请检查自己的用户名格式是否正确")

         } else {
           sessionStorage.setItem("token", res.data.data.token);
           sessionStorage.setItem("userName", res.data.data.userName)
           // this.$router.push("/home")
           sessionStorage.setItem("roleId", res.data.data.roleId)
         }
         const roleId = sessionStorage.getItem("roleId")
         if (roleId == 3) {
           this.$router.push("/home")
         } else if (roleId == 1 && roleId == 2) {
           this.$router.push("/adhome")
         } else {
           console.log("错误id")
         }
       }
      }).catch(error => {
        // 处理错误响应
        console.error('Login failed:', error);
        // 在这里可以显示一个错误消息给用户
      });

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
    <form id="loginform" >
<!--          @submit.prevent="handlesubmit"-->

      <label for="useraccount" style="font-size: 30px">账号</label>
      <br>
    <input type="text" placeholder="请输入你的账号" id="useraccount" v-model="form.username" style="width:250px ;height: 30px">
      <br>
      <label for="userpassword" style="font-size: 30px">密码</label>
      <br>
    <input type="password" placeholder="请输入你的密码" id="userpassword" v-model="form.password" style="width:250px ;height: 30px">
      <br>
      <button class="active" @click.prevent="handlesubmit">用户登录</button>
      <router-link to="/adhome" class="active" >管理登录</router-link>
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
