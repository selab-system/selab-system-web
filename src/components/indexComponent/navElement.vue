<template>  
  <div>
    <div class="nav-container">
      <div class="nav-left-selections">
        <div class="nav-selection">
          <span><router-link to="/user">用户管理</router-link></span>
        </div>
        <div class="nav-selection">
          <span><router-link to="/enroll">招新报名表管理</router-link></span>
        </div>
        <div class="nav-selection">
          <span><router-link to="/book">图书管理</router-link></span>
        </div>
        <div class="nav-selection">
          <span><router-link to="/task">任务管理</router-link></span>
        </div>
      </div>
      <router-view></router-view>
      <div class="nav-right-changestylebutton">
        <label class="switch">
          <input type="checkbox" @click="toggleTheme"/>
            <span class="slider"></span>
        </label>
      </div>
    </div>
  </div>
</template>  

<script>  
export default {  
  methods: {
    toggleTheme() {  
        document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';    
}
  },
  mounted() {
    document.documentElement.dataset.theme = 'light';
  }
};  
</script>  

<style scoped>
.nav-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  /* 动态设置导航栏的颜色 */
  background-color: var(--bg-color);
  box-shadow: var(--nav-box-shadow);
}
.nav-left-selections {
  display: flex;
  flex-direction: row;
  /* justify-content:space-evenly; */
  width: 50%;
  height: 100px;
  line-height: 100px;
  color: var(--font-color);
  font-size: 18px;
  /* background-color: rgb(255, 255, 255); */
}
.nav-selection a{
  text-decoration: none;
  color: var(--font-color);
  font-size: 18px;
  font-weight: bold;
  padding: 10px;
  border-radius: 10px;
  font-family: var(--font-family);
  margin-left: 10px;
}
.nav-selection:hover{
  background-color: var(--box-mouseenter-background-color);
  border-radius: var(--box-mouseenter-border-radius);
  box-shadow: var(--box-mouseenter-box-shadow);
  transition: var(--transition-timing-settings);
  color: var(--box-mouseenter-color);
  margin-right: var(--box-mouseenter-margin-right);
  padding-right: var(--box-mouseenter-padding-right);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
}
.nav-right-changestylebutton{
  margin-right: 40px;
  margin-left: 20px;
}
/* 转变样式设置*/
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 4.2em;
  height: 2em;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #2196f3; /* 修改为白天模式的背景色 */
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 1.1em; /* 初始位置应靠近右侧，表示白天模式 */
  bottom: 0.3em;
  background-color: yellow; /* 白天模式滑块拇指的颜色 */
  box-shadow: none; /* 移除或调整阴影效果 */
  transition: 0.4s;
}

.switch input:checked + .slider {
  background-color: rgb(75, 73, 74); /* 夜晚模式的背景色 */
}

.switch input:checked + .slider:before {
  transform: translateX(1.3em);
  background-color: black; /* 夜晚模式滑块拇指的颜色 */
  box-shadow: inset 8px -4px 0 0 white; /* 恢复夜晚模式的阴影效果 */
}
</style>