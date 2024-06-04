<template>
  <div class="content">
      <form class="form">
          <p class="form-title">注册</p>
          <div class="input-container">
              <input type="text" placeholder="请输入用户名" v-model="userName"> 
          </div>
          <div class="input-container">
              <input type="text" placeholder="请输入手机号" v-model="phone"> 
          </div>
          <div class="input-container">
              <input type="text" placeholder="请输入性别(男/女)" v-model="sex"> 
          </div>
          <div class="input-container">
              <input type="password" placeholder="请输入密码" v-model="password"> 
          </div>
          <div class="input-container">
              <input type="password" placeholder="请确认密码" v-model="repassword"> 
          </div>
          <div class="input-container">
              <input type="email" placeholder="请输入邮箱" v-model="email"> 
          </div>
          <div class="emails input-container">
              <input type="text" placeholder="请输入验证码" v-model="identify"> 
              <button @click="sentTheemail" class="sendEmail" :disabled="!getcode">
                  <span v-if="getcode">获取验证码</span>
                  <span v-else>{{ timess }}</span>
              </button>
          </div>    
         <button type="submit" class="submit">
            <router-link to="/login"><span>已有账号？登录</span></router-link>
         </button>
      </form>
  </div>
</template>

<script>
import { register, sendEmail } from '@/api/Login/login';
import messageService from '@/utils/messageService';
export default {
  name: "register",
  data() {
    return {
        userName: "",
        email: "",
        phone: "",
        sex: "",
        password: "",
        repassword:"",
        identify: "",
        getcode: true, 
        timess: 60, 
        countdownInterval: null, 
        title: ""
  }
  },
  methods: {
    async registerButton() {
      if (this.userName === "") {
        messageService.error("请输入用户名")
        return
      }
      if (this.email === "") {
        messageService.error("请输入邮箱")
        return
      }
      if (this.phone === "") {
        messageService.error("请输入手机号")
        return
      }
      if (this.sex === "") {
        messageService.error("请输入性别")
        return
      }
      if (this.password === "") {
        messageService.error("请输入密码")
        return
      }                                                                                                                                
      if (this.password !== this.repassword) {
        messageService.error("两次密码不一致")
        return
      }
      if(this.password == this.repassword){
        messageService.success("验证成功")
        return
      }
      if (this.identify === "") {
        messageService.error("请输入验证码")
        return
      }
      try {
        const registerData = {
          userName: this.userName,
          phone: this.phone,
          sex: this.sexNum,
          email: this.email,
          password: this.password,
          identify: this.identify
        }
        console.log("要提交的数据",registerData);
        await register(registerData).then(res => {
          if (res.code == 200) {
            this.$message("注册成功")
            this.$router.push('/login')
          }
        })
      } catch (error) {
        messageService.error("注册失败")
        console.log(error)
      }
      },
    async sentTheemail() {
    try {
      this.getcode = false; 
      const emailData = {
        email: this.email
      };
      console.log(this.email);
      await sendEmail(emailData).then(res => {
        this.$message("请输入验证码")
        console.log('ooooooo', res);
        if (res.code == 200) {
          console.log(res);
          this.startCountdown();
        } else {
          console.log(res.code);
          console.log("一般错");
          messageService.error("发送失败");
        }
      });
    } catch (error) {
      console.log("完全错");
      console.log(error);
    }
  },
  startCountdown() {
    let countdownTime = this.timess;
    this.countdownInterval = setInterval(() => {
      countdownTime -= 1;
      this.timess = countdownTime; 
      if (countdownTime <= 0) {
        clearInterval(this.countdownInterval); 
        this.getcode = true; 
        this.timess = 60; 
      }
    }, 1000);
  }
  },
  computed: {
    sexNum() {
      return this.sex === "男" ? 1 : 0;
    }
  }
}
</script>

<style scoped>
.content{
  display: flex;
  flex-direction: column;
  align-content: center;
  /* justify-content: center; */
}
.form {
  background-color: #fff;
  display: block;
  padding: 1rem;
  max-width: 500px;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin: 7% auto;

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
.emails{
  display: flex;
  flex-direction: row;
  align-content: center;
}
.emails input{
  margin-right: 40px;
  width: 150px;
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
.sendEmail{
  margin-left: 40px;
  background-color: #4F46E5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  width: 30%;
  border-radius: 0.5rem;
  text-transform: uppercase;

}
</style>