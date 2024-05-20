<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'MyRegister',
  data () {
    return {
      form: {
        useraccount: '',
        userpassword: ''
      }
    }
  },
  methods: {
    handleReigster () {
      console.log(11)
    }
  }
}
</script>

<template>
<div>
  <form id="registerform" @submit.prevent="handleregister">
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
