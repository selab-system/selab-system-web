<template>
 <div class="main">
  <!-- // 应将提示信息框设置定位进行排布设置 -->
<!-- <div class="main2"> -->
  <ul>
        <!-- 设置登录表单： 1.表单验证 2. 设置用户名输入 3、密码输入-->
        <!-- 注意此处 登录的验证暂时不适用 -->
    <!-- <el-form-item label="活动名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
    </el-form-item> -->

    <li><span id="first">用户名：</span><el-input placeholder="请输入用户名或邮箱" v-model=postMessage clearable @change="changepostMessage(postMessage);judgePostMessage();noticeDisplay()">
    </el-input></li>
    <div class="alter1" v-show="noticeMessge1">{{ noticeMessge1 }}</div>
    <li><span id="second">密码：</span><el-input placeholder="请输入密码" v-model=password show-password @change="changepassWord(password);judgePassWord();noticeDisplay()"></el-input>
    </li>
    <div class="alter2" v-show="noticeMessge2">{{ noticeMessge2 }}</div>
        <li><el-button type="primary" @click="judgeLogin">登录</el-button><el-button type="success" plain  @click="toRegister()">注册</el-button></li>

    </ul>
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
import { mapActions, mapMutations } from 'vuex'
export default {
  data () {
    // 对于在组件内部输入内容的绑定可以实现 现在尝试仅使用vuex的方法
    return {
      password: '',
      postMessage: '',
      noticeMessge1: '',
      noticeMessge2: ''
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
    judgePostMessage () {
      let str1 = RegExp()
      str1 = /@/g
      let str2 = RegExp()
      str2 = /@qq.com/g
      const judge1 = str1.test(this.postMessage)
      // 输入为用户名时：判断输入字数
      console.log(judge1)
      if (judge1) {
        // 当输入为邮箱号时
        if (this.postMessage.length === 0) {
          this.noticeMessge1 = '输入为空'
        }
        if (!str2.test(this.postMessage)) {
          this.noticeMessage1 = '输入格式错误'
        }
      } else {
        // 输入为账号时
        console.log(122)
        if (this.postMessage.length > 8) {
          this.noticeMessge1 = '输入位数应小于等于8位'
          console.log(this.postMessage1)
        }
        if (this.postMessage.length === 0) {
          this.noticeMessge1 = '输入为空'
          console.log(this.noticeMessge1)
        }
      }
    },
    judgePassWord () {
      if (this.password === '') {
        this.noticeMessge2 = '输入为空'
      }
      if (this.password.length > 8) {
        this.noticeMessge2 = '输入位数应小于等于8位'
      }
    },
    // 提示框显示
    noticeDisplay () {
      if (this.noticeMessge1) {
        setTimeout(() => {
          this.postMessage1 = ''
          this.noticeMessge1 = ''
        }, 2000)
        console.log(this.noticeMessge1)
      }
      if (this.noticeMessge2) {
        setTimeout(() => {
          this.postMessage2 = ''
          this.noticeMessge2 = ''
        }, 2000)
        console.log(this.noticeMessge2)
      }
    },
    toRegister () {
      this.$router.push('/register')
    }

  }

}

</script>

<style lang="less" scoped>

.main{
     margin: 0 auto;
     width:1000px;
     height:1000px;
     background-color: #d37c7c;
    position: relative;
    // display: inline-block;
    overflow: hidden;
    }
//     .main2{
// height: 100%;
// width: 100%;
// position: relative;
//     }
 ul{    right: 50px;
        top: 100px;
        width: 400px;
        height: 450px;
        display: flex;
        background-color: #f5f8f9;
        // border-radius: 40px;
        // 添加阴影
        box-shadow: 1px 1px 1px 1px #c6c9c9;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        position: absolute;
    }
    li{
    list-style: none;
    display: flex;
    align-items: center;
    margin-right: 50px;
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
</style>
