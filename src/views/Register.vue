<script>
import {register} from "@/api/login";
import {subAuth} from "@/api/login";

export default {

 name: 'MyRegister',
  data () {
    return {
      change:true,
      userName:'',
      email: '',
      phone: '',
      password:'',
      sex:'',
      identify:'',
   }
  },
 methods: {
    handleReigster () {
   register({
     userName:this.userName,
     email:this.email,
     phone:this.phone,
     password:this.password,
     sex:this.sex,
     identify:this.identify
     }
   ).then(res=>{
       console.log(res)
     })
   },
  async submitAuth() {
    try{
      await subAuth({
        email:this.email
      }).then(res =>{
        console.log(this.email)
        console.log(res)
        if(res.code ==200){
          alert("发送验证码")
        }else{
          console.log(res.code)
        }
      })
    }catch (err){
      console.log("错了")
      console.log(err)
    }
  },
  // ifChange(){
  //  this.change=!this.change
  //   console.log(1)
  },

}
</script>

<template>
<div class="Register">
  <vue-particles id="particles-js" class="vue-particles" color="#8EB5C9" :particleOpacity="0.7" :particlesNumber="150" shapeType="star"
                 :particleSize="4" linesColor="#8EB5C9" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
                 :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" ref="particles">
  </vue-particles>
  <div class="register">
 <form id="registerform">
    <label for="usermailbox">邮箱</label>
    <input type="text" placeholder="请输入你的qq邮箱" id="usermailbox" v-model="email" class="active" >
    <button @click.prevent="submitAuth"  >发送验证码</button>
    <input type="text" placeholder="请输入你的验证码" id="usermailmessage" v-model="identify" class="active" v-if="change">
    <br>
    <label for="useraccount">姓名</label>
    <input type="text" placeholder="请输入你的用户名" id="useraccount" v-model="userName" class="active">
    <br>
    <label for="userpassword">密码</label>
    <input type="password" placeholder="请输入你的密码" id="userpassword" v-model="password" class="active">
    <br>
    <label for="userpassword">电话</label>
    <input type="password" placeholder="请输入你的电话" id="userphone" v-model="phone" class="active">
    <br>
    <label for="userpassword">性别</label>
    <input type="password" placeholder="请输入你的性别(0为女1为男)" id="usersex" v-model="sex" class="active">
    <br>
    <button @click.prevent="handleReigster">注册</button>
  </form>
  </div>
</div>
</template>

<style scoped>

.register{
  position: relative;

}
#particles-js {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 0;}
.active{
width: 270px;
  height: 50px;
  margin-top: 20px;

}
label{
  margin-left: 40%;
}
button{
  margin-left: 48%;
}
</style>
