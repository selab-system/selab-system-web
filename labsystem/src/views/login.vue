<template>
 <div class="main">
  <!-- // 应将提示信息框设置定位进行排布设置 -->
<!-- <div class="main2"> -->
  <div class="input">
    <div class="img"></div>
    <ul>

        <!-- 设置登录表单： 1.表单验证 2. 设置用户名输入 3、密码输入-->
        <!-- 注意此处 登录的验证暂时不适用 -->
    <!-- <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
    </el-form-item> -->
    <li><h1>欢迎登录实验室管理系统</h1></li>
    <el-form :model="logininfos" :rules="rules" ref="logininfos" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名/邮箱" prop="postMessage">
        <el-input v-model="logininfos.postMessage"></el-input>
      </el-form-item>
       <el-form-item label="密码" prop="password">

       <el-input v-model="logininfos.password"></el-input>
     </el-form-item>

    <el-form-item>
    <el-button type="primary" @click="submitForm('logininfos')">登录</el-button>
    <el-button @click="resetForm('logininfos')">重置</el-button>
    </el-form-item>
    <li class="button_register"><span>还没有账号?</span><router-link to="/register">前往注册</router-link></li>
    </el-form>

  </ul>
    <!-- <div class="alter2" v-show="noticeMessge2">{{ noticeMessge2 }}</div> -->
        <!-- <li><el-button type="primary" plain @click="judgeLogin,tohomePage(),stataStore(),getDatabypassword()">登录</el-button><el-button type="success" plain  @click="toRegister()">注册</el-button></li> -->
<!-- 此处都需要设置为表单项进行自主校验 -->
  </div>

        <!-- 登录框需要进行输入验证 -->
<!-- 暂时确定仅验证输入的内容是否符合要求 -->
<!-- 暂时不管是否内容为空 -->

        <!-- 背景图如何设置 -->
        <!-- 具体功能：
        输入密码，账号，（输入格式不正确，未输入提示 前后）
        点击登录，使用axios发送请求 判断账号密码信息 如果账号存在密码正确 账号不存在进行判断 密码不正确进行判断
        登录成功了  接收返回的用户的信息（对axios返回数据进行存储）
        实现页面跳转 -->
<!-- </div> -->
</div>
</template>

<script>
// 使用映射引入库中数据 简化写法
import { judgeLogin } from '@/api/enter'
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    // 对于在组件内部输入内容的绑定可以实现 现在尝试仅使用vuex的方法
    return {
      noticeMessge1: '',
      noticeMessge2: '',
      msgNotice: '',
      logininfos: {
        password: '',
        postMessage: '',
        userName: '',
        // 用户名
        groupId: '',
        // 小组id
        roleId: '2',
        // 角色id 1,2,3
        userid: '',
        // 用户id
        token: ''
        // 权限token
      },
      rules: {
        postMessage: [
          { required: true, message: '请输入用户名或邮箱', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },

  name: 'IndexLogin',
  computed: {
    // ...mapState('login', ['postMessagex']),
    // ...mapState('login', ['passwordx'])
  },
  // 函数实现功能
  methods: {
    ...mapActions('login', ['judgeLogin']),
    // 实现一下改变输入内容后进行对应变量数据的改变  (实现失败)？
    // ...mapMutations('login', ['changepassWord']),
    // ...mapMutations('login', ['changepostMessage'])
    ...mapMutations('login', ['changepassWord']),
    ...mapMutations('login', ['changepostMessage']),
    // 注意此时的用户名与密码的校验 可以在组件中实现：
    // judgePostMessage () {
    //   let str1 = RegExp()
    //   str1 = /@/g
    //   let str2 = RegExp()
    //   str2 = /@qq.com$/g
    //   const judge1 = str1.test(this.postMessage)
    //   // 输入为用户名时：判断输入字数
    //   if (judge1) {
    //     // 当输入为邮箱号时
    //     if (this.postMessage.length === 0) {
    //       this.noticeMessge1 = '输入为空'
    //     }
    //     if (!str2.test(this.postMessage)) {
    //       console.log('执行了')
    //       this.noticeMessge1 = '输入格式错误'
    //     }
    //   } else {
    //     // 输入为账号时
    //     console.log(122)
    //     if (this.postMessage.length > 8) {
    //       this.noticeMessge1 = '输入位数应小于等于8位'
    //       console.log(this.postMessage1)
    //     }
    //     if (this.postMessage.length === 0) {
    //       this.noticeMessge1 = '输入为空'
    //     }
    //   }
    // },
    // // 判断密码的输入
    // judgePassWord () {
    //   if (this.password === '') {
    //     this.noticeMessge2 = '输入为空'
    //   }
    //   if (this.password.length > 8) {
    //     this.noticeMessge2 = '输入位数应小于等于8位'
    //   }
    // },
    // // 提示框显示
    // noticeDisplay () {
    //   if (this.noticeMessge1) {
    //     setTimeout(() => {
    //       this.postMessage1 = ''
    //       this.noticeMessge1 = ''
    //     }, 2000)
    //     console.log(this.noticeMessge1)
    //   }
    //   if (this.noticeMessge2) {
    //     setTimeout(() => {
    //       this.postMessage2 = ''
    //       this.noticeMessge2 = ''
    //     }, 2000)
    //     console.log(this.noticeMessge2)
    //   }
    // },
    // 前往注册界面

    // 一下是对修改后的登录页面的检验函数的绑定以及在检验后对数据的请求;
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          // 在下面设置函数的请求 获取的数据与组件中data变量的绑定
          // 同时将获取到的数据传入到本地存储中
          this.postData_login()
          // 暂时将返回信息进行替代
          this.stataStore()
          alert('登录成功')
          this.tohomePage()
          alert('前往主页面')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // axios获取页面登录数据
    async postData_login () {
      const { data, msg } = await judgeLogin(this.postMessage, this.password)
      this.logininfos.userName = data.userName// 用户名
      this.logininfos.groupId = data.groupId// 小组id
      this.msgNotice = msg
      this.logininfos.roleId = data.roleId// 角色id
      this.logininfos.userid = data.useId// 用户id
      this.logininfos.token = data.token
      // 以上需要吗？
    },
    // 前往主页面
    tohomePage () {
      this.$router.push('./homePage')
    },
    // 数据的本地存储
    stataStore () {
      // localStorage.setItem('password', JSON.stringify(this.logininfos.password))
      // localStorage.setItem('postmessage', JSON.stringify(this.logininfos.postMessage))
      // localStorage.setItem('roleId', JSON.stringify(this.roleId))
      localStorage.setItem('roleid', JSON.stringify(this.logininfos.roleId))
      localStorage.setItem('groupid', JSON.stringify(this.logininfos.groupId))
      localStorage.setItem('userid', JSON.stringify(this.logininfos.userid))
      localStorage.setItem('token', JSON.stringify(this.logininfos.token))
      localStorage.setItem('username', JSON.stringify(this.logininfos.userName))
      // 存储时仅仅使用小写字母
      console.log('执行了')
    }
  },

  mounted () {
    this.postMessage = JSON.parse(localStorage.getItem('username'))
    this.password = JSON.parse(localStorage.getItem('password'))
  }

}

</script>

<style lang="less" scoped>
*{
margin: 0 0;
padding: 0 0;
}

.main{
     margin: 0 auto;
     width:3000px;
     height:2000px;
     background-color: #2fa15b;
    position: relative;
    // display: inline-block;
    overflow: hidden;
    }
.img{
width: 60%;
height: 100%;
background-color: #531616;
position: absolute;
background:url(../assets/login.png);
background-size: 100% 100%;
}
 .input{margin: 0 auto;
        width: 1200px;
        height: 550px;
        margin-top: 300px;
        background-color: #f5f8f9;
        // border-radius: 40px;
        // 添加阴影
        box-shadow: 1px 1px 1px 1px #c6c9c9;
        position: relative;
        display: flex;
    }
    ul{
      display: flex;
      flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 40%;
        height: 100%;
        position: absolute;
        right: 0;
    }
    li{
    list-style: none;
    display: flex;
    align-items: center;
    // margin-right: 50px;
    }
    #first{
  display: block;
  width: 90px;
  text-align: center;
  line-height: 16px;
  font-size: 16px;

    }
    #second{
        display: block;
        width: 60px;
        line-height: 16px;
        font-size: 16px;
    }
     .alter1{
      width: 190px;
      height: 40px;
      background-color: #fcf9f9;
      color: red;
    //  border-radius: 13px;
     text-align: center;
     font-size: 16px;
     letter-spacing: 1px;
     line-height: 40px;
     position: absolute;
     top: 96px;
     right: 149px;
     }
    /* 登录界面设置背景的自定义 */
    .alter2{
      width: 190px;
      height: 40px;
      background-color: #fcf9f9;
      color: red;
    //  border-radius: 13px;
     text-align: center;
     font-size: 16px;
     letter-spacing: 1px;
     line-height: 40px;
     position: absolute;
     top: 256px;
     right: 149px;
    }
    .el-button
    {
width: 110px;
height: 50px;
margin-left: 30px;
font-size: 20px;
padding: 10px;
    }
    //一以下为对登录页面修改后的样式添加
.button_register a{
margin-left: 10px;
text-decoration: none;
color: #2fa15b;
font-size: 20px;
}
// 了解a标签与router-link的关系：

    </style>
