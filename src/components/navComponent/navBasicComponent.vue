<template>  
  <div>
    <div class="nav-container">
      <div class="logo">
        <span>Laboratory</span>
      </div>
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
/* logo字体配置 */
.logo{
    font-family:var(--font-logo-family);
    font-size: 30px;
    font-weight: 700;
    font-style: italic;
    color: var(--font-logo-color);
    margin-left: 20px;
}
.nav-right-changestylebutton{
    margin-right: 20px;
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
<!-- /* .table-search-content-title{
    display: flex;
    flex-direction: row;
    text-align: center;
    flex: 1;
}
.table-search-content-title-item{
    /* margin-right: 30px; */
    /* height: 80px;
    line-height: 80px;
    padding: 10px 20px;
    padding-left: 40px;
    padding-right: 40px;
    font-size: 20px;
    font-weight: var(--table-font-bold);
    color: var(--table-font-color);
    border: 1px solid var(--table-border-color);
}
.content-button {
    display: flex;
    justify-content: space-evenly;
    flex: 1;
    width: 200px;
    padding-left: 20px;
    padding-right: 20px;
}
.table-search-content-title-item-button{
    margin-left: 10px;
    margin-right: 10px; */ 
    /* border: 0.5px solid var(--table-border-color) */

/* }
.table-search-content-title-item-button button {
    border: 0,5px solid var(--table-border-color);
    background-color: var(--table-action-bg-color);
    height: 40px;
    width: 80px;
    border-radius: 10px;
    box-shadow: 5px 5px 30px var(--table-action-box-shadow-color);
}
.table-search-content-title-item-button button:hover{
    background-color: var(--table-action-hover-bg-color);
    color: var(--table-action-hover-color);
}
.table-search-content-title-item-button button:active{
    transform: scale(0.95);
} */ -->