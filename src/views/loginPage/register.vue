<!-- 注册页 -->
<template>
  <div title="注册">
    <div class="register-cotainer">
      <div class="register-form">
        <form action="">
          <h1 class="register-title">注册</h1>
          <div class="form-username">
            <input type="text" placeholder="请输入用户名" v-model="username" />
          </div>
          <div class="form-password">
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="form-submit">
            <button @click.prevent="registerButton">确认</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"register"
}
</script>

<style>
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