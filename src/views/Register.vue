<script>
import {register} from "@/api/login";
import {subAuth} from "@/api/login";

export default {

 name: 'MyRegister',
  data () {
    return {
      change:true,

     form: {
      userName:'',
        email: '',
       phone: '',
       password:'',
       sex:'',
       identify:'',

     }
   }
  },
 methods: {
    handleReigster () {
   register(this.form).then(res=>{
       console.log(res)
     })
   },
   handleRegister1(){

   },
  submitAuth() {
    subAuth(this.form.email).then(res => {
        console.log(res)

      },
    )

  },
  ifChange(){
   this.change=!this.change
    console.log(1)
  },

}}



</script>

<template>
<div class="Register">
  <vue-particles id="particles-js" class="vue-particles" color="#8EB5C9" :particleOpacity="0.7" :particlesNumber="150" shapeType="star"
                 :particleSize="4" linesColor="#8EB5C9" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
                 :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" ref="particles">
  </vue-particles>
  <div class="register">
  <form id="registerform" @submit.prevent="handleRegister1">
    <label for="usermailbox">邮箱</label>
    <input type="text" placeholder="请输入你的qq邮箱" id="usermailbox" v-model=form.email class="active" @keydown.enter="ifChange" >
    <button @click="submitAuth" v-if="change"  >发送验证码</button>
    <input type="text" placeholder="请输入你的验证码" id="usermailmessage" v-model=form.identify class="active" v-if="change">
    <br>
    <label for="useraccount">姓名</label>
    <input type="text" placeholder="请输入你的用户名" id="useraccount" v-model="form.userName" class="active">
    <br>
    <label for="userpassword">密码</label>
    <input type="password" placeholder="请输入你的密码" id="userpassword" v-model="form.userpassword" class="active">
    <br>
    <label for="userpassword">电话</label>
    <input type="password" placeholder="请输入你的电话" id="userphone" v-model="form.phone" class="active">
    <br>
    <label for="userpassword">性别</label>
    <input type="password" placeholder="请输入你的性别(0为女1为男)" id="usersex" v-model="form.sex" class="active">
    <br>
    <button @click="handleReigster">注册</button>
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
