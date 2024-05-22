<template>
  <div>
    <div class="register">
      <div class="body">
       <div class="main">
        <ul>
        <li><img src="../assets/labtubiao.jpg" alt=""></li>
        <li><h2>账号注册</h2></li>
        <li><span>验证码将发送到邮箱使用仓库中的数据（经过修改）</span></li>
        <li><el-input v-model="input" placeholder="请输入内容"></el-input></li>
        <li><el-input placeholder="请输入密码" v-model="input" show-password></el-input></li>
    </ul>
       </div>
      </div>
     </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.register
{
margin:0 auto;
width: 1920px;
height: 1500px;
background-color: #98a49c;
margin:0 auto;
overflow: hidden;
}
.main{
  height: 750px;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 200px;
}
img{
  width: 300px;
  height: 260px;
  margin-left:20px;
  margin-top:30px
}
ul{
  display: flex;
  flex-direction: column;
  // justify-items: center;
  align-items: center;
}
li{
    list-style: none;

}
</style>
