<template>
 <div class="register">
  <div class="body">
  <div class="main">
    <ul>
      <li><img src="../assets/labtubiao.jpg" alt=""></li>
      <!-- <li><h1>账号注册</h1></li> -->
      <!-- 当需要对多个输入框内容进行校验时 可以统一在一个函数中判断？
        根据每个输入框输入内容的不同可以分函数进行校验 -->
      <li><div><span>用户名:</span><el-input placeholder="请输入用户名" v-model="username" clearable  ></el-input></div>
          <el-alert :title=noticeMessage.usernameNotice type="error" v-show="noticeMessage.usernameNotice" show-icon></el-alert>
      </li>
      <li><div><span>小组名称:</span><el-input placeholder="请输入小组名称" v-model="groupid"  clearable></el-input></div>
          <el-alert :title=noticeMessage.groupidNotice v-show="noticeMessage.groupidNotice" type="error" show-icon></el-alert>
      </li>
      <li><div><span>邮箱:</span><el-input placeholder="请输入邮箱号码" v-model="email"  clearable></el-input></div>
          <el-alert :title=noticeMessage.emailNotice type="error" v-show="noticeMessage.emailNotice" show-icon></el-alert>
      </li>
      <li><div><span>手机号:</span><el-input placeholder="请输入手机号" v-model="phonenumber"  clearable  @keyup="phonenumber=phonenumber.replace(/^(0+)|[^\d]+/g,'')"></el-input></div>
          <el-alert :title=noticeMessage.phonenumberNotice v-show="noticeMessage.phonenumberNotice" type="error" show-icon></el-alert>

      </li>

      <li><span>性别:</span><el-radio v-model="radio" label="1">女</el-radio>
     <el-radio v-model="radio" label="2">男</el-radio></li>
      <!-- 单选框 -->
      <li> <el-button type="primary" >下一步</el-button></li>
    </ul>
  </div>
</div>
 </div>
</template>

<script>
export default {
  name: 'IndexRegister',
  data () {
    return {
      radio: '',
      // 对radio进行判断
      // 定仓库中gender变量存储的特征值
      username: '',
      groupid: '',
      email: '',
      phonenumber: '',
      gender: '',
      noticeMessage: {
        usernameNotice: '1',
        groupidNotice: '2',
        emailNotice: '3',
        phonenumberNotice: '4'

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
    // 对用户名设置
  }
}
</script>

<style lang="less" scoped>
.register
{
margin:0 auto;
width: 1920px;
height: 1500px;
background-color: #98a49c;
// display: inline-block;
margin:0 auto;
overflow: hidden;
}
.main{
  width: 750px;
  height: 750px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 200px;

}
img{
  width: 280px;
  height: 300px;
  margin-left:20px;
  margin-top:30px
}
ul{
  display: flex;
  flex-direction: column;
  align-items: center;
  // 用于水平居中
  margin-right: 50px;
  // justify-content: space-between;
  // 回顾jusyify使用
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
