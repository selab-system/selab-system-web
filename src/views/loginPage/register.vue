<!-- 注册页 -->
<template>
  <div title="注册">
    <div class="register-cotainer">
      <div class="register-form">
        <form action="">
          <h1 class="register-title">注册</h1>
          <div class="form-username">
            <input type="text" placeholder="请输入用户名" v-model="userName" />
          </div>
          <div class="form-password">
            <input type="text" placeholder="请输入邮箱" v-model="email" />
          </div>
          <div class="form-password">
            <input type="text" placeholder="请输入手机号" v-model="phone" />
          </div>
          <div class="form-password">
            <input type="text" placeholder="请输入性别" v-model="sex" />
          </div>
          <div class="form-password">
            <input type="text" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="form-password">
            <input type="text" placeholder="请输入验证码" v-model="identify" />
          </div>
          <div class="form-submit">
            <button @click.prevent="registerButton">确认</button>
            <button @click.prevent="sentTheemail" v-show="getcode">获取验证码
            </button>
            <span class="time" v-show="timeisshowed"><span>{{ timess }}</span></span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request';
export default {
  name: "register",
  data() {
    return {
      userName: "",
      email: "",
      phone: "",
      sex: "",
      password: "",
      identify: "",
      timeisshowed: false,
      getcode:true,
      timess:60
    }
  },
  methods: {
    async registerButton() {
      try {
        const data = {
          userName: this.userName,
          email: this.email,
          phone: this.phone,
          sex: this.sex,
          password: this.password,
          identify: this.identify
        }
        console.log("要提交的数据",data);
        await request.post({
          url: '/register',
          methods: 'post',
          data: data
        }).then(res => { 
          if (res.code == 200) {
            alert("注册成功")
            this.$router.push('/login')
          }
        })
      } catch (error) {
        alert("注册失败")
        console.log(error)
      }
      },
      async sentTheemail() {
        // 向后端发送获取验证码的请求
        try {
          this.getcode = false
          this.timeisshowed = true
          setInterval(() => {
            this.timess--
          }, 1000);
          if (this.timess === 0) {
            this.getcode = true
          }
          console.log(this.email);
         await request.post({
            url: '/sendEmail',
            methods: 'post',
            data: {
              email: this.email
            }
          }).then(res => { 
            if (res.code == 200) {
              alert("请输入验证码 ")
            }
          }
      )
        } catch (error) {
          console.log(error);
        }
      }
  },
  computed: {
    
  }
}
</script>

<style scoped>
/* 表单的一些设置 */
.register-title{
  color: white;
  text-align: center;
  margin: 2em;
  color: rgb(255, 255, 255);
  font-size: 1.2em;
}
.register-cotainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: 25px;
  text-align: center;
}

.register-form {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 25px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.9);
  padding: 20px;
  width: 300px;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
}

.form-username, .form-password {
  margin-bottom: 15px;
}

input[type="text"], input[type="password"] {
  width: 80%;
  padding: 10px;
  margin-left: 5px;
  margin-right: 5px;
  border: none;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  outline: none;
  transition: all 0.3s ease;
}

input[type="text"]:focus, input[type="password"]:focus {
  background-color: rgba(255, 255, 255, 0.3);
}

button {
  width: 30%;
  padding: 10px;
  border: none;
  text-align: center;
  border-radius: 10px;
  /* background-color: dodgerblue; */
  background-color: #252525;
  color: white;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
}

button:hover {
  background-color: black;
  color: white;

}
.register-cotainer:hover {
  transform: scale(1.05);
  border: 1px solid black;
}

</style>