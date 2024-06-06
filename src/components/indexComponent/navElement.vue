<template>  
  <div>
    <div class="nav-container">
      <div class="nav-left-selections">
        <div class="logo">
        <span><router-link to="/index">Laboratory</router-link></span>
        </div>
        <div class="nav-selection" @mouseleave="showDropdownU = false" v-if="readRoleId!==3">
          <span @click="toggleDropdownU"> <a href="javascript:;">用户管理</a></span>
          <div class="dropdown-content" v-if="this.showDropdownU">
            <div class="menuDown"><router-link to="/modifyPersonalInformation">个人信息</router-link></div>
            <div class="menuDown"><router-link to="/departmemtMenber">部门信息</router-link></div>
          </div>
        </div>
        <div class="nav-selection" @mouseleave="showDropdownE = false " v-if="readRoleId!==3">
          <span @click="toggleDropdownE"> <a href="javascript:;">招新报名表管理</a> </span>
          <div class="dropdown-content-Long" v-if="this.showDropdownE">
            <div class="menuDown" v-if="!taskIsShowed"><router-link to="/enroll">查看报名信息</router-link></div>
            <div class="menuDown" v-if="taskIsShowed"><router-link to="/registrationForm">报名</router-link></div>
          </div>
        </div>
        <div class="nav-selection" @mouseleave="showDropdownB = false" v-if="readRoleId!==3">
          <span @click="toggleDropdownB"><a herf="javascript:;">图书管理</a></span>
          <div class="dropdown-content" v-if="this.showDropdownB">
            <div class="menuDown"><router-link to="/queryAllBooks">查询书籍</router-link></div>
            <div class="menuDown"><router-link to="/personalBooks">个人书籍</router-link></div>
            <div class="menuDown" v-if="bookRecord"><router-link to="/checkBorrowing">查询借阅记录</router-link></div>
          </div>
        </div>
        <div class="nav-selection dropdown" @mouseleave="showDropdownT = false" v-if="!taskIsShowed">
          <span @click="toggleDropdownT"><a href="javascript:;">任务管理</a></span>
          <div class="dropdown-content" v-if="this.showDropdownT">
            <div class="menuDown"> <router-link to="/release">发布任务</router-link> </div>
            <div class="menuDown"><router-link to="/CheckAllTask">查看全部任务</router-link></div>
          </div>
        </div>
        <!-- 用户 -->
        <div class="nav-selection dropdown" @mouseleave="showDropdownT = false" v-if="taskIsShowed">
          <span @click="toggleDropdownT"><a href="javascript:;">查看任务</a></span>
          <div class="dropdown-content" v-if="this.showDropdownT">
            <div class="menuDown"> <router-link to="/CheckMyTask">查看我的任务</router-link> </div>
            <div class="menuDown"><router-link to="/QueryMyReport">查看我的汇报</router-link></div>
          </div>
        </div>
      </div>
      <div class="nav-right-changestylebutton">
        <label class="switch">
          <input type="checkbox" @click="toggleTheme"/>
            <span class="slider"></span>
        </label>
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>  

<script>  
export default { 

  data() {  
    return {  
      showDropdownU: false,
      showDropdownE: false,
      showDropdownB: false,
      showDropdownT: false,
      readRoleId:this.$store.state.roleId
    
    };  
  }, 
  computed: {
    taskIsShowed() {
      if (this.readRoleId == 3) {
        return true;
      }
      else {
        return false
      }
    },
    bookRecord() {
      if (this.readRoleId == 3) {
        return false
      } else {
        return true
      }
    },
  },
  created() {  
    console.log("显示身份：",this.$store.state.roleId)
    this.readRoleId = this.$store.state.roleId
  },
  methods: {
    toggleTheme() {  
        document.documentElement.dataset.theme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';    
    },
    toggleDropdownU() {  
      this.showDropdownU = !this.showDropdownU;  
      this.showDropdownE= false,
      this.showDropdownB= false,
      this.showDropdownT= false
    },
    toggleDropdownE() {  
      this.showDropdownE = !this.showDropdownE;
    },
    toggleDropdownB() {  
      this.showDropdownB = !this.showDropdownB;  
      this.showDropdownE= false,
      this.showDropdownU= false,
      this.showDropdownT= false
    },
    toggleDropdownT() {  
      this.showDropdownT = !this.showDropdownT;  
      this.showDropdownE= false,
      this.showDropdownB= false,
      this.showDropdownU= false
    },
  },
  mounted() {
    document.documentElement.dataset.theme = 'light';
  }
};  
</script>  

<style scoped>
/* logo字体配置 */
.logo{
    font-family:var(--font-logo-family);
    font-size: 30px;
    font-weight: 700;
    font-style: italic;
    color: var(--font-logo-color);
    margin-left: 20px;
    margin-right: 15px;
    z-index: 999;
}
.nav-right-changestylebutton{
    margin-right: 20px;
}

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

/* 下拉菜单 */
.dropdown {
  position: relative; /* 为下拉菜单的容器添加相对定位 */
}

.dropdown-content {
  /* 默认隐藏下拉内容 */
  position: absolute;
  background-color: #f9f9f9;
  min-width: 123px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  /* 根据需要调整下拉菜单的样式 */
  line-height: 50px;
}

.dropdown-content a{
  padding: 0px;
  margin:0px;
}

.dropdown-content-Long a{
  padding: 0px;
  margin:0px;
}

.dropdown-content-Long {
  /* 默认隐藏下拉内容 */
  position: absolute;
  background-color: #f9f9f9;
  min-width: 176px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  /* 根据需要调整下拉菜单的样式 */
  line-height: 50px;
}

.dropdown-content div {
  cursor: pointer;
  width: 122px;
}

.dropdown-content div:hover {
  background-color: #f1f1f1;
}

.dropdown-content-Long div {
  cursor: pointer;
}

.dropdown-content-Long div:hover {
  background-color: #f1f1f1;
}

.menuDown {
  width: 123px;
  height: 50px;
}
</style>