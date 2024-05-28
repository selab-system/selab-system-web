<template>
    <div class="task-release-component">
      <div class="release-form-main">
              <div class="release-form-main-title">更新任务</div>
              <div class="release-form-main-content">
                      <div class="release-form-main-content-input-title">
                          <div class="release-form-main-content-input-title-item">
                              <div class="release-form-main-content-input-title-item-title name-input" >                               
                                  <div style="width: 112px;">任务名称：</div>
                                  <input type="text" id="taskName" placeholder="请输入任务名称" v-model="name">
                              </div>
                          </div>
                      </div>
                      <div class="release-form-main-content-checkbuttons">
                          <p>任务对象:</p>
                          <div class="release-form-main-content-checkbutton" 
                              v-for="(item, index) in groupIds" 
                              :key="index" 
                              @click="selectGroupIds(item)">
                              <button :class="{ active: item.isActive }"></button>
                              <span>{{ item.name }}</span>
                          </div>
                      </div>
                      <div>
                          <span>截止时间：</span>
                          <input type="date" v-model="dealTime" placeholder="截止时间">
                      </div>
                      <div class="release-own-production">
                          <div class="release-own-production-purpose">
                              <div>
                                  <span>任务内容：</span>
                                  <textarea name="message" rows="10" cols="30" v-model="content" required></textarea>
                              </div>
                          </div>
                      </div>
                      <div class="release-form-main-content-commit">
                          <button class="not-vip-commit-btn" @click="commitreleaseForm">更新</button>
                          <button class="not-vip-commit-btn" @click="redirectIndex">
                              返回首页
                          </button>
                      </div>
              </div>
          </div>
    </div>
  </template>
  
  <script>
  // import axios from 'axios'
  export default {
      data() {
          return {
              releaseFormMainContentInputTitle: [
                  "任务名称",
                  "任务对象",
                  "截止时间",
              ],
              groupIds: [
                  { name: '软件开发', isActive: false },
                  { name: '网络安全', isActive: false },
                  { name: '人工智能', isActive: false },
                  { name: '虚拟现实', isActive: false },
              ],
              name: '',
              dealTime: '', // 添加截止时间的data属性
              // 任务内容
              content: "",
              isPublishing: false,
          }
      },
      methods: {        
          selectGroupIds(clickedItem) {
              this.groupIds.forEach(item => {
                  item.isActive = item === clickedItem;
              });
          },
          // 收集表单数据
          commitreleaseForm() {
              const formData = {
                  name: this.name, // 直接从data中获取
                  groupIds: this.groupIds.find(groupIds => groupIds.isActive)?.name || '未选择',
                  dealTime: this.dealTime, // 确保 deadline 在 data 中已定义
                  content: this.content,//任务内容
              };
              //防止数据为空
              if(this.name==""){
                  alert("请输入任务名称")
                  return;
              }
  
              if (!this.groupIds.some(groupId => groupId.isActive)) {
              alert("请选择至少一个任务对象");
              return; // 阻止表单提交
              }
              
              if(this.content==""){
                  alert("请输入任务内容")
                  return;
              }
              console.log('提交的数据:', formData);
              // 这里可以添加提交数据到服务器的逻辑
              //给后端发送数据
          //     if (this.isPublishing) {
          //         alert('请勿重复发布');
          //         return;
          //     }
  
          //     this.isPublishing = true;
  
          //     axios.post('/task/save', { // 替换为你的实际API URL
          //     // 这里放置你要发送的数据
          //     data: {
          //         formData
          //     },
          // })
          // .then((response) => {
          //   console.log('发布成功:', response);
          //   this.isPublishing = false;
          //   // 在这里处理成功的逻辑
          // })
          // .catch((error) => {
          //   console.error('发布失败:', error);
          //   this.isPublishing = false;
            // 在这里处理错误逻辑
          // });
          // 返回首页按钮
              },
          redirectIndex() {
              this.$router.push("/")
          },
      }
  }
  </script>
  
  <style>
  .task-release-component{
      height: 600px;
      margin-top: 5px;
      background-color: #fff;
  }
  
  .release-form-main{
      height: 1000px;
      width: 60%;
      margin: 0 auto;
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: var(--nav-box-shadow);
  }
  .release-form-main-content{
      width: 80%;
  }
  .release-form-main-content-input{
      width: 100%;
  }
  .release-form-main-title{
      margin-bottom: 20px;
      font-family: var(--font-family);
      font-size: var(--registrasion-from-font-size);
      font-weight: var(--registrasion-from-font-weight);
  }
  .release-form-main-content-input-title{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
  }
  .release-form-main-content-input-title-item input{
      height: 27px;
      width: 100%;
      margin-bottom: 26px;
      border-radius: 5px;
      font-size: 20px;
      border: 0.5px solid var(--table-border-color);
      font-size: 16px;
  }
  .release-form-main-content-input-title-item input:active{
      border: 0.5px solid var(--table-border-color-black);
  }
  .release-form-main-content-input-title-item input:hover{
      border: 0.5px solid var(--table-border-color-black);
  }
  .name-input{
      display: flex;
      width: 40%;
  }
  .email-input,
  .phone-input{
      width: 60%;
  }
  input:focus {
      outline: none;
  }
  .release-form-main-content-checkbuttons{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
  }
  .release-form-main-content-checkbutton{
      height: 50px;
      /* width: 70px; */
  
  }
  .release-form-main-content-checkbutton button{
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin: 0px 15px;
  }
  .release-form-main-content-checkbutton span{
      width: 50px;
      /* height: 20px; */
  }
  .release-form-main-content-checkbutton button:active{
      background-color: var(--table-box-title-bgc-color);
  }
  .release-form-main-content-checkbutton button.active {
      background-color: var(--table-box-title-bgc-color1); /* 或者你喜欢的颜色 */
  }
  /* 直接针对date类型的输入框设置基础样式 */
  input[type="date"] {
    height: 25px; /* 设定输入框的高度 */
    width: 50%; 
    border-radius: 3px;
    font-size: 15px;
  }
  .release-form-main-content-input-title-item input,
  textarea {
      width: 100%; 
      box-sizing: border-box; 
  }
  
  /* 设置textarea样式 */
  textarea {
      min-height: 100px; /* 设置最小高度以适应内容，可按需调整 */
      /* resize: vertical; 允许用户垂直调整大小，水平方向保持固定 */
      border-radius: 5px; /* 与输入框风格一致 */
      border: 0.5px solid var(--table-border-color);
      font-size: 16px;
      margin-bottom: 5px;
  }
  
  textarea:focus {
      outline: none;
      border-color: var(--table-border-color-black);
  }
  .release-own-production{
      width: 100%;
      margin-top: 10px;
      border: var(--registrasion-from-border);
  }
  .release-own-production span{
      font-size: 18px;
      font-weight: 500;
      color: var(--registrasion-from-input-border-color)
  }
  .release-own-production p{
      font-size: 16px;
      color: var(--font-color);
  }
  .release-form-main-content-commit{
      /* margin-top: 30px; */
      margin: 30px auto;
  }
  .release-form-main-content-commit button{
      width: 120px;
      height: 60px;
      box-shadow: var(--table-box-shadow);
      background-color: var(--table-box-title-bgc-color1);
      border: 0.5px solid var(--table-border-grey);
      border-radius: var(--table-action-radius);
      margin-left: 20px;
  }
  .release-form-main-content-commit button:hover{
      background-color: var(--table-action-hover-bg-color);
      color: var(--table-action-hover-color);
  }
  .release-form-main-content-commit button:active{
      box-shadow: var(--table-action-active-box-shadow);
      transform: scale(0.95);
  }
  </style>