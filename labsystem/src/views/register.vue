<template>
 <div class="register">
  <div class="body">
  <div class="main">
    <div class="img"></div>
    <h1>账号注册</h1>
    <ul>

      <!-- <li><img src="../assets/labtubiao.jpg" alt=""></li> -->
      <!-- <li><h1>账号注册</h1></li> -->
      <!-- 当需要对多个输入框内容进行校验时 可以统一在一个函数中判断？
        根据每个输入框输入内容的不同可以分函数进行校验 -->
      <!-- <li><div><span>用户名:</span><el-input placeholder="请输入用户名" v-model="username" clearable @change="usernameCheck()" ></el-input></div> -->
          <!-- <el-alert :title=noticeMessage.usernameNotice type="error" v-show="noticeMessage.usernameNotice" show-icon></el-alert> -->
      <!-- </li> -->
      <!-- 用户名设置位数限制 不可使用数字作为用户名 -->
    <!-- <li><div><span>密码:</span><el-input placeholder="请输入所设置的密码" v-model="password"  clearable  @change="passwordCheck()"></el-input></div> -->
          <!-- <el-alert :title=noticeMessage.passwordNotice v-show="noticeMessage.passwordNotice" type="error" show-icon></el-alert> -->
      <!-- </li> -->
      <!--小组名称任意 设置字数限制 -->
      <!-- <li><div><span>邮箱:</span><el-input placeholder="请输入邮箱号码" v-model="email"  clearable @change="emailCheck()"></el-input></div> -->
          <!-- <el-alert :title=noticeMessage.emailNotice type="error" v-show="noticeMessage.emailNotice" show-icon></el-alert> -->
      <!-- </li> -->
      <!-- 邮箱号不设置字数限制 设置格式限制 @存在 -->
      <!-- <li><div><span>手机号:</span><el-input placeholder="请输入手机号" v-model="phonenumber"  clearable @change="phonenumberCheck()"></el-input></div> -->
          <!-- <el-alert :title=noticeMessage.phonenumberNotice v-show="noticeMessage.phonenumberNotice" type="error" show-icon></el-alert> -->
      <!-- </li> -->
       <!--手机号设置格式报错 字数限制  -->
      <!-- <li><span>性别:</span><el-radio v-model="radio" label="1">女</el-radio> -->
     <!-- <el-radio v-model="radio" label="2">男</el-radio></li> -->
      <!-- 单选框 -->
      <!-- <li> <el-button type="primary" @click="registerData(),dataBind(username,password,email,phonenumber,gender),genderJudge(),toregisterCheck(),stataStore()">前往登录</el-button></li> -->
      <el-form :model="registerinfos" :rules="rules" ref="registerinfos" label-width="100px" class="demo-ruleForm">

  <el-form-item label="用户名" prop="username">
    <el-input v-model="registerinfos.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input v-model="registerinfos.password"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="registerinfos.email"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="phonenumber">
    <el-input v-model="registerinfos.phonenumber"></el-input>
  </el-form-item>
  <el-form-item label="性别" prop="gender">
    <el-radio-group v-model="registerinfos.gender">
      <el-radio label="0">男</el-radio>
      <el-radio label="1">女</el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('registerinfos')">下一步</el-button>
    <el-button @click="resetForm('registerinfos')">重置</el-button>
  </el-form-item>
      </el-form>
      </ul>
  </div>
</div>
 </div>
</template>

<script>

import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'IndexRegister',
  data () {
    return {
      registerinfos: {
        // 对radio进行判断
        // 定仓库中gender变量存储的特征值
        username: '',
        password: '',
        email: '',
        phonenumber: '',
        gender: ''

      },

      noticeMessage: {
        usernameNotice: '',
        passwordNotice: '',
        emailNotice: '',
        phonenumberNotice: ''

      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'change' }
        ],
        phonenumber: [
          { required: true, message: '请输入手机号', trigger: 'change' }
        ],
        gender: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ]

      }

      // 性别如何传递 信息是向后台传递？0 为女1为男
      // 前端的作用保存输入信息 post向后台传递输入信息
      // 登录界面 收到message消息（后端进行验证）判断是否登录成功//
      // 登录接口无法验证 /在登录成功与失败时弹出提示框
      // 登录成功保存的信息token用于判断权限 页面对个人信息的展示需要 部分信息
      // 单选框 radio label中设置value值，v-model中绑定的变量与label的值双向绑定
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          alert('前往邮箱验证')
          this.toregisterCheck()
          // this.registerData()
          alert('注册成功')
          this.stataStore()
          alert('数据已经保存')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // async registerData () {
    //   const { msg } = await registerPost(this.logininfos.username, this.logininfos.password, this.logininfos.email, this.logininfos.phonenumber, parseInt(this.logininfos.gender))
    //   alert(msg)
    // },
    // usernameCheck () {
    //   if (/\d/g.test(this.username)) {
    //     this.noticeMessage.usernameNotice = '小组名称不可包含数字'
    //     setTimeout(() => {
    //       this.noticeMessage.usernameNotice = ''
    //     }, 2000)
    //   }
    //   if (this.username.length > 11) {
    //     this.noticeMessage.usernameNotice = '用户名小于等于11个字符'
    //     setTimeout(() => {
    //       this.noticeMessage.usernameNotice = ''
    //     }, 2000)
    //   }
    // },
    // passwordCheck () {
    //   if (this.password.length > 11) {
    //     this.noticeMessage.passwordNotice = '密码小于等于11个字符'
    //     setTimeout(() => {
    //       this.noticeMessage.passwordNotice = ''
    //     }, 2000)
    //   }
    // },
    // emailCheck () {
    //   if (!/@qq.com$/.test(this.email)) {
    //     // console.log('格式错误')
    //     this.noticeMessage.emailNotice = '邮箱号码格式错误'
    //     setTimeout(() => {
    //       this.noticeMessage.emailNotice = ''
    //     }, 2000)
    //   }
    // },
    // phonenumberCheck () {
    //   if (this.phonenumber.length > 11) {
    //     this.noticeMessage.phonenumberNotice = '手机号格式错误'
    //     setTimeout(() => {
    //       this.noticeMessage.phonenumberNotice = ''
    //     }, 2000)
    //   }
    // },
    // // 针对性别数据进行判断并传递
    // genderJudge () {
    //   if (this.gender === '1') {
    //     // console.log(this.radio)
    //     this.gender = 0
    //   } else {
    //     // console.log(this.radio)
    //     this.gender = 1
    //   }
    // }, // 以上是对输入的校验判断
    // 将输入信息传输到仓库中
    ...mapMutations('register', ['dataBind']),
    // ...mapMutations('register', ['userNameInput']),
    // ...mapMutations('register', ['groupIdInput']),
    // ...mapMutations('register', ['EmailInput']),
    // ...mapMutations('register', ['phoneNumberInput']),
    ...mapActions('register', ['registerData']),

    toregisterCheck () {
      this.$router.push('/registerCheck')
    },
    // 用户名与密码数据的本地存储
    stataStore () {
      localStorage.setItem('username', JSON.stringify(this.registerinfos.username))
      localStorage.setItem('password', JSON.stringify(this.registerinfos.password))
      localStorage.setItem('email', JSON.stringify(this.registerinfos.email))
      localStorage.setItem('phonenumber', JSON.stringify(this.registerinfos.phonenumber))
      localStorage.setItem('gender', JSON.stringify(this.registerinfos.gender))
    }
  }
}
</script>

<style lang="less" scoped>
.register
{
margin:0 auto;
width: 100%;
height: 4000px;
background-color: #4640eb;
// display: inline-block;
margin:0 auto;
overflow: hidden;
}
.main{
  width: 1120px;
  height: 550px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 200px;
  display:flex;
 position: relative;
}
h1{
  margin-left: 85px;
}
img{
  width: 280px;
  height: 300px;
  margin-left:20px;
  margin-top:30px
}
.img{
  width: 60%;
  height: 100%;
  background-color: #bc1d1d;
background:url(../assets/register.png);
background-size: 100% 100%;
}
ul{
  display: flex;
  flex-direction: column;
  align-items: center;
  // 用于水平居中
  margin-right: 50px;
  // justify-content: space-between;
  // 回顾jusyify使用
  position: absolute;
  justify-content: space-around;
  right: 0px;
  height: 100%;
  width: 46%;
}
li{overflow: hidden;
  // 常使用这个对超出的图片进行切割
  list-style: none;
  display: flex;
  // 将单选框与性别span对齐
  flex-direction: column;
  margin-bottom:28px;
  //默认在一个盒子中如果设置flex
  // 盒子子元素默认向左/上集中排布
}
li div{
  width: 330px;
  display: flex;
  height: 60%;
  line-height: 80px;}
li:nth-child(1)
{
  height: 250px;
}
li:nth-child(6)
{
  display: flex;
  flex-direction: row;
width: 350px;
align-items: center;
// 用于垂直居中
// 方向不同居中方向不同
}
li h1{
  margin: 0 auto;
}
li button{
  margin:0 auto;
}
span{
  display: block;
  width: 60px;
  text-align: center;
line-height: 35px;
}
li span{
width: 100px;
}
// 可以通过.标签名设置 组件样式
.el-alert{
width: 250px;
height: 30px;
margin-left: 75px;
}
.el-button
{
  width: 200px;
  height: 50px;
}
</style>
