<template>  
  <div title="登录">  
<<<<<<< HEAD
=======
    <canvas id="starrySky"></canvas>  
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
    <!-- 登录 -->
    <div class="login-cotainer">
      <div class="login-form">
        <form action="">
            <h1 class="login-title">登录</h1>
            <div class="form-username">
              <input type="text" placeholder="请输入用户名" v-model="username" />
            </div>
            <div class="form-password">
              <input type="password" placeholder="请输入密码" v-model="password" /> 
            </div>
            <div class="form-submit">
<<<<<<< HEAD
              <button @click.prevent="loginButton">登录</button> 
            </div>
          </form>
=======
              <button @click="login">登录</button> 
            </div>
            </form>
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
      </div>
    </div>
  </div>  
</template>  
  
<script>
<<<<<<< HEAD
// 引入登录接口
import { login } from '../../api/Login/login'
export default {  
=======
// 引入登录API
// import LoginApi, { login } from '@/api/Login/login';
// 引入mapActions
import { mapActions } from 'vuex'
export default {  
  name: 'StarrySkyLogin',  
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
  data() {
    return {
      username: '',
      password: '',
<<<<<<< HEAD
    }
  },
  mounted() {  
  },  
  beforeDestroy() { 

  },  
  methods: {  
    loginButton() {
      try {
        if (!this.username || !this.password) {
          this.$message.error("请输入用户名或密码")
        }
        const data = {
          username: this.username,
          password:this.password,
        }
        login(data).then(res => {
          if (res.code === 200) {
            console.log("登录成功", res);
            console.log(res.data.roleId);
            this.$store.commit('setToken', res.data.token)
            this.$store.commit("setUser", res.data.roleId)
            this.$router.push('/index')
          } else {
           console.log(res.msg)
          }
        })
      } catch (error) {
        console.log(error);
      }
    },
=======
      animationFrame: null, // 存储requestAnimationFrame的ID  
      stars: [], // 存储星星对象的数组  
    }
  },
  mounted() {  
    this.stars = []; // 创建一个数组来存储星星对象  
    this.initStars(500); // 初始化星星  
    this.drawStarrySky(); // 初始绘制星空  
    this.animate(); // 开始动画  
  },  
  beforeDestroy() {  
    cancelAnimationFrame(this.animationFrame); // 组件销毁前取消动画  
  },  
  methods: {  
    // 初始化星星对象并添加到数组中  
    initStars(count) {  
      for (let i = 0; i < count; i++) {  
        this.stars.push({  
          x: Math.random() * window.innerWidth,  
          y: Math.random() * window.innerHeight,  
          size: Math.random() * 2 + 0.5, // 星星大小在0.5到2.5之间  
          speed: Math.random() * 1 + 1, // 星星下落速度在1到3之间  
        });  
      }  
    },  
    // 绘制星空背景  
    drawStarrySky() {  
      const canvas = this.$el.querySelector('#starrySky');  
      const ctx = canvas.getContext('2d');  
  
      // 设置画布尺寸  
      canvas.width = window.innerWidth;  
      canvas.height = window.innerHeight;  
  
      // 清除画布  
      ctx.clearRect(0, 0, canvas.width, canvas.height);  
  
      // 绘制黑色背景  
      ctx.fillStyle = 'black';  
      ctx.fillRect(0, 0, canvas.width, canvas.height);  
  
      // 绘制星星  
      this.stars.forEach((star) => {  
        ctx.beginPath();  
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);  
        ctx.fillStyle = 'white'; // 使用白色绘制星星，确保在黑色背景上可见  
        ctx.globalAlpha = 0.7 + Math.random() * 0.3; // 添加透明度变化，使星星更自然  
        ctx.fill();  
      });  
    },  
    // 更新星星位置  
    updateStars() {  
      this.stars.forEach((star) => {  
        star.y += star.speed; // 更新星星的y坐标以模拟下落效果  
  
        // 如果星星移出画布，重置其位置  
        if (star.y > window.innerHeight) {  
          star.y = -star.size; // 重置到画布顶部之外  
          star.x = Math.random() * window.innerWidth; // 随机水平位置  
        }  
      });  
    },  
    // 动画循环  
    animate() {  
      this.updateStars(); // 更新星星位置  
      this.drawStarrySky(); // 绘制更新后的星空  
      this.animationFrame = requestAnimationFrame(this.animate); // 递归调用以继续动画  
    },  
    // 登录表单处理
    ...mapActions(["setToken", "detToken"])
    // async login() {
    //   try {
    //     const response = await LoginApi.login(this.username, this.password)
    //     if (response.username === 'username' && response.data.password === 'password') {
    //         // 登录成功的逻辑
    //         // 获取token
    //         const token = response.data.token
    //         // 利用Vuex来setToken
    //         this.setToken(token)
    //         // 跳转页面逻辑
    //         this.$router.push('/index')
    //     }
    //     else {
    //       // 登录失败，提示错误信息
    //       this.$message.error(response.data.message)
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
  },  
};  
</script>  
  
<style scoped>  
<<<<<<< HEAD
=======
#starrySky {  
  position: absolute;  
  top: 0;  
  left: 0;  
  z-index: -1; /* 确保画布在表单下面 */  
}  
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
/* 表单的一些设置 */
.login-title{
  color: white;
  text-align: center;
  margin: 2em;
  color: rgb(255, 255, 255);
  font-size: 1.2em;
}
.login-cotainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: 25px;
  text-align: center;
}

.login-form {
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
  width: 60%;
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
.login-cotainer:hover {
  transform: scale(1.05);
  border: 1px solid black;
}
</style>