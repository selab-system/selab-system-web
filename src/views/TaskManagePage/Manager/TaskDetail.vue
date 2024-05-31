<template>
  <div>
    <div class="checkOneTask">
      <div class="task-detail-container">
        <!-- <div v-if="loading">加载中...</div>
        <div v-if="error">{{ error }}</div> -->
        <div class="taskName">{{ task.name }}</div>
        <div v-if="task" class="task-detail">
            
            <div class="massage">创建者: {{ task.publisherId }}</div>
            <div class="massage">任务对象: {{ task.groupsId }}</div>
            <div class="massage">截止时间: {{ task.dealTime }}</div>
            <div class="massage">任务内容: {{ task.content }}</div>
            <div class="massage">完成情况：</div>
            <button ><router-link to="/CheckAllTask">返回</router-link></button>
            <button >更新</button>
            <button >查看汇报</button>
            <button >删除</button>

            <!-- 根据实际任务信息结构添加更多细节 -->
        </div>
    </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        task: {
            name:'学习vue',
            publisherId:'111',
            groupsId:'软件开发',
            dealTime:'2024.6.1',
            content:'nkajvnojabvjdnkiaoewfnjskbkjsjksd'
        },
        loading: true,
        error: null
      };
    },
    mounted() {
      this.fetchTaskDetails();
    },
    methods: {
      async fetchTaskDetails() {
        try {
          const response = await axios.get(`/api/tasks/${this.taskId}`);
          this.task = response.data;
          this.loading = false;
        } catch (error) {
          this.error = `无法加载任务信息：${error.message}`;
          this.loading = false;
        }
      }
    }
  };
  </script>

<style>
.checkOneTask{
    /* width: 100%; */
    height: 700px;
    margin-top: 5px;
    /* background-color: pink; */
}
.task-detail-container{
    height: 100%;
    width: 60%;
    margin: 0 auto;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--nav-box-shadow);
  }


  .taskName{
    margin-bottom: 20px;
    font-family: var(--font-family);
    font-size: var(--registrasion-from-font-size);
    font-weight: var(--registrasion-from-font-weight);
  }
  .massage{
    margin-bottom: 20px;
    font-size: 18px;
  }
  .task-detail button{
    width: 120px;
    height: 60px;
    box-shadow: var(--table-box-shadow);
    background-color: var(--table-action-bg-color);;
    border: 0.5px solid var(--table-border-grey);
    border-radius: var(--table-action-radius);
    margin-left: 20px;
  }
  .task-detail button:hover{
    background-color: var(--table-action-hover-bg-color);
    color: var(--table-action-hover-color);
  }
  .task-detail button:active{
    box-shadow: var(--table-action-active-box-shadow);
    transform: scale(0.95);
  }
</style>