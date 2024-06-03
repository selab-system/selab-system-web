<template>
  <div class="content">
        <form class="form">
       <p class="form-title">请登录</p>
        <div class="input-container">
          <input type="username" placeholder="username" v-model="username">
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="password" v-model="password"> 
        </div>
         <button type="submit" class="submit" @click="loginButton">
            登录
         </button>
      <p class="signup-link">
        还没有账户?
        <router-link to="/register">注册</router-link>
      </p>
    </form>
  </div>
</template>

<script>
// 引入登录接口
import { login } from '../../api/Login/login'
export default {  
  data() {
    return {
      username: '',
      password: '',
    }
  },
  mounted() {  
  },  
  beforeDestroy() { 

  },  
  methods: {  
    async loginButton() {
      try {
        if (!this.username || !this.password) {
          this.$message.error("请输入用户名或密码")
        }
        const data = {
          username: this.username,
          password:this.password,
        }
         await login(data).then(res => {
          if (res.code === 200) {
            console.log("登录成功", res);
            console.log(res.data.roleId);
            this.$store.commit('setToken', res.data.token)
            this.$store.commit("setUser", res.data.roleId)
            this.$store.commit("setUserId", res.data.userId)
            this.$store.commit("setGroupId", res.data.groupId)
            this.$router.push('/index')
          } else {
           console.log(res.msg)
          }
        })
      } catch (error) {
        this.$message.error("登录失败")
        console.log(error);
      }
    },
  },  
};  
</script>  

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.form {
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 500px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin: 20% auto;

}

.form-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  text-align: center;
  color: #000;
}

.input-container {
  position: relative;
}

.input-container input, .form button {
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
}

.input-container input {
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.submit {
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: #4F46E5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 100%;
  border-radius: 0.5rem;
  text-transform: uppercase;
}

.signup-link {
  color: #6B7280;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
}

.signup-link a {
  text-decoration: underline;
}
</style>