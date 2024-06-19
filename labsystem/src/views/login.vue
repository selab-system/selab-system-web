<template>
 <div class="main" >
  <div class="input">
    <div class="img"></div>
     <ul>

        <!-- 设置登录表单： 1.表单验证 2. 设置用户名输入 3、密码输入-->
        <!-- 注意此处 登录的验证暂时不适用 -->

    <li><h1>欢迎登录实验室管理系统</h1></li>
    <el-form :model="logininfos" :rules="rules" ref="logininfos" label-width="100px" class="demo-ruleForm" @keyup.enter.native="submitForm('logininfos')" >
      <el-form-item label="用户名/邮箱" prop="postMessage">
        <el-input v-model="logininfos.postMessage" ></el-input>
      </el-form-item>
       <el-form-item label="密码" prop="password">

       <el-input v-model="logininfos.password"></el-input>
     </el-form-item>

    <el-form-item>
    <el-button type="primary" :loading="loading"  @click="submitForm('logininfos')">登录</el-button>
    <el-button @click="resetForm('logininfos')">重置</el-button>
    </el-form-item>
    <li class="button_register"><span>还没有账号?</span><router-link to="/register">前往注册</router-link></li>
    </el-form>

     </ul>
  </div>

</div>
</template>

<script>
// 使用映射引入库中数据 简化写法
import { judgeLogin } from '@/api/enter'
import { mapMutations } from 'vuex'
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
        // 以下为接收到的数据
        userName: '',
        // 用户名
        groupId: '',
        // 小组id
        roleId: '2',
        // 角色id 1,2,3
        userid: '',
        // 用户id
        token: '123'
        // 权限token
      },
      loading: false,
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
    ...mapMutations('login', ['tokenStore']),
    test () {
      console.log(123)
    },
    // 登录页面的检验函数的绑定
    // 在检验后对数据的请求;
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          this.postData_login()
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
      try {
        const { data } = await judgeLogin(this.logininfos.postMessage, this.logininfos.password)
        if (data.msg === '') { this.msgNotice = '登录成功' } else { this.msgNotice = data.msg }
        this.loading = false
        console.log(this.loading)
        this.logininfos.userName = data.data.userName// 用户名
        this.logininfos.groupId = data.data.groupId// 小组id
        this.logininfos.roleId = data.data.roleId// 角色id
        this.logininfos.userid = data.data.useId// 用户id
        this.logininfos.token = data.data.token
        // 将token保存到vuex仓库中
        this.tokenStore(data.data.token)
        // 点击按钮后发送请求 loading变为true
        // 在请求函数中对返回数据做处理
        if (this.msgNotice !== '登录成功') {
          console.log(this.msgNotice)
          this.logined()
          return false
        } else {
          this.logined()
          this.stataStore()
          // 进行跳转
          this.tohomePage()
        }
      } catch (error) {
        console.error(error)
      }
    },
    // 前往主页面
    tohomePage () {
      this.$router.push('./homePage')
    },
    // 数据的本地存储
    stataStore () {
      localStorage.setItem('roleid', JSON.stringify(this.logininfos.roleId))
      localStorage.setItem('groupid', JSON.stringify(this.logininfos.groupId))
      localStorage.setItem('userid', JSON.stringify(this.logininfos.userid))
      localStorage.setItem('token', JSON.stringify(this.logininfos.token))
      // 在此处可以将token存放到vuex仓库中
      // localStorage.setItem('username', JSON.stringify(this.logininfos.userName))
      // 存储时仅仅使用小写字母
      console.log('执行了')
    },
    // 设置提示框（弹框假消息）
    logined () {
      this.$message({
        type: 'success',
        message: this.msgNotice
      })
      // 弹框的单独使用？
    }

  },
  // 加载注册时输入的保存到本地的用户名与密码
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
     width:100%;
     height:4000px;
     background-color: #2fa15b;
     overflow: hidden;

    }

.input{margin: 0 auto;
        width: 1200px;
        height: 550px;
        margin-top: 300px;
        background-color: #f5f8f9;
        box-shadow: 1px 1px 1px 1px #c6c9c9;
        position: relative;
        display: flex;
        border-radius: 40px;
      }
      .img{
    width: 60%;
   height: 100%;
  background-color: #531616;
  position: absolute;
    background:url(../assets/login.png);
background-size: 100% 100%;
border-radius: 40px;
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
