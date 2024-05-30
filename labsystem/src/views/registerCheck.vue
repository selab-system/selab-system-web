<template>
  <div>
    <div class="register">
      <div class="body">
       <div class="main">
        <div class="img"></div>
        <ul>
        <!-- <li><img src="../assets/labtubiao.jpg" alt=""></li> -->
        <li><h1>邮箱号验证</h1></li>
        <!-- <li><span>验证码将发送到邮箱使用仓库中的数据（经过修改）</span></li>
        <li><el-input v-model="input" placeholder="请输入内容"></el-input></li>
        <li><el-input placeholder="请输入密码" v-model="input" show-password></el-input></li> -->

        <el-form :model="checkEmail" :rules="rules" ref="checkEmail" label-width="100px" class="demo-ruleForm">
          <el-form-item label="邮箱" prop="email">
          <el-input v-model="checkEmail.email"></el-input> <el-button style="display: inline;"  @click="postCheckinfo()"  type="primary" plain>发送验证码</el-button>
          </el-form-item>
          <el-form-item label="验证码" prop="checkinfo">
           <el-input v-model="checkEmail.checkinfo"></el-input>

         </el-form-item>
         <el-form-item>
         <el-button type="primary" @click="submitForm('checkEmail')">立即创建</el-button>
            <el-button @click="resetForm('checkEmail')">重置</el-button>
           </el-form-item>
        </el-form>
         </ul>
       </div>
      </div>
     </div>
    </div>
</template>

<script>
import { registerPost, PostInfo } from '@/api/enter'

export default {
  data () {
    return {
      registerinfos: {
        // 对radio进行判断
        // 定仓库中gender变量存储的特征值
        username: '',
        password: '',
        phonenumber: '',
        gender: ''

      },
      checkEmail: {
        checkinfo: '',
        email: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        checkinfo: [
          { required: true, message: '请输入验证码', trigger: 'change' }
        ]
      }
    }
  },
  mounted () {
    this.checkEmail.email = JSON.parse(localStorage.getItem('email'))
    this.registerinfos.username = JSON.parse(localStorage.getItem('username'))
    this.registerinfos.phonenumber = JSON.parse(localStorage.getItem('phonenumber'))
    this.registerinfos.paaword = JSON.parse(localStorage.getItem('password'))
    this.registerinfos.gender = JSON.parse(localStorage.getItem('gender'))
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register()
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    postCheckinfo () {
      // 倒计时效果的实现最后：
      this.postinfo()
      alert('邮箱发送')
    },
    async postinfo () {
      const result1 = await PostInfo(this.checkEmail.email)
      console.log(result1)
      alert(result1.msg)
    },
    async register () {
      const result2 = await registerPost(this.registerinfos.username, this.registerinfos.password, this.registerinfos.email, this.registerinfos.phonenumber, parseInt(this.registerinfos.gender), this.checkEmail.checkinfo)
      console.log(result2)
      alert(result2.msg)
    }
  }

// 功能实现:点击发送验证码倒计时进行或者设置为提示框
// 获取验证码的值点击按钮进行登录请求的发送
// ：需要携带验证码返回消息使用提示信息
}
</script>

<style lang='less' scoped>
.register
{
margin:0 auto;
width: 100%;
height: 5000px;
background-color: #5d3306;
margin:0 auto;
overflow: hidden;
}
.main{
  width: 1200px;
  height: 750px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 200px;
  display: flex;
}
.img{
width: 50%;
height: 100%;
background-color: #d92828;
background: url(../assets/registerCheck.gif);
background-size:100% 100%;
}
ul{
  display: flex;
  flex-direction: column;
  // justify-items: center;
  align-items: center;
  width: 50%;
  height: 100%;
  justify-content: center;
}
li{
    list-style: none;

}
</style>
