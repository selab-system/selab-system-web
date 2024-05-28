<script>
import {register} from "@/api/login";

export default {

 name: 'MyRegister',
  data () {
    return {
     form: {
      usermailbox:'',
        useraccount: '',
       userpassword: '',
      }
   }
  },
 methods: {
    handleReigster () {
   register(this.form).then(res=>{
       console.log(res)
     })
   }}}
</script>

<template>
<div>
  <form id="registerform" @submit.prevent="handleregister">
    <label for="usermailbox">邮箱</label>
    <input type="text" placeholder="请输入你的qq邮箱" id="usermailbox" v-model=form.usermailbox>
    <label for="useraccount">账号</label>
    <input type="text" placeholder="请输入你的账号" id="useraccount" v-model="form.useraccount">
    <label for="userpassword">密码</label>
    <input type="password" placeholder="请输入你的密码" id="userpassword" v-model="form.userpassword">
    <button @submit="handleReigster">注册</button>
  </form>
</div>
</template>

<style scoped>

</style>
