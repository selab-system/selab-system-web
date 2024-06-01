<template>
  <div class="main-card-component">
    <!-- 显示所有已发布的任务 -->
    <div class="table">
        <div class="table-body-content">
            <table class="table-body">
                <tr class="table-body-title">
                    <td v-for="(item,index) in tableTitle" :key="index">{{ item }}</td>
                    <td class="operation-column">操作</td>
                </tr>
                <tr v-for="(item, rowIndex) in maxVisibleRows" :key="rowIndex">
                    <td v-for="(cellItem, cellIndex) in tableData" :key="cellIndex">
                      {{ rowIndex < maxVisibleRows ? cellItem : '' }}
                    </td>
                    <td class="operation-column">
                      <button v-if="rowIndex < maxVisibleRows " router-link="{ name: 'TaskDetail', params: { taskId: item.id } }">查看</button>
                      <button v-if="rowIndex < maxVisibleRows ">更新</button>
                      <button v-if="rowIndex < maxVisibleRows ">查看汇报</button>
                      <button v-if="rowIndex < maxVisibleRows ">删除</button>
                    </td>
                </tr>
            </table>
            <div class="page-change-box">
                <div class="page-box">
                        <div class="change-box lastbox">
                            <button>上一页</button>
                        </div>
                        <div class="page-box-item page-box-show" v-for="(index,item) in currentIndexs" :key="index" >
                            <button>{{ item + 1}}</button>
                            
                        </div>
                        <div class="change-box-show-button" @click="ShowPagesChangeBox" v-show="ShowButtonIsShown">
                            <button>...</button>
                        </div>
                        <div class="page-box-item-page-box-not-show" v-show="pageChangeBoxActive">
                            <button v-for="(index,item) in currentIndexsUnShown" :key="index">{{ item + currentIndexs + 1 }}</button>
                        </div>
                        <div class="page-box-nextbox">
                            <button>下一页</button>             
                        </div>
                    <div>
                    </div>
            </div>
        </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          // 单页面表框数量 size
          size: 10,
          // 当前页面
          currentPage: 1,
          // 显示页面数
          currentIndexs: 3,
          // 隐藏页面数
          currentIndexsUnShown:5,
          // 省略页面数
          currentIndexs_: 9,
          // 表格标头
          tableTitle: ["任务名称","发布者", "任务对象",  "完成情况","截止时间",],
          tableData: ["name","publisherIdajasbf", "groupsId", "30%", "deadTime"],
          // 分页是否展示
          pageChangeBoxActive: false,
          // 分页按钮是否展示
          ShowButtonIsShown: true,
          taskData:[],
      }
  },
  methods: {
      // 分页按钮
      ShowPagesChangeBox() {
          this.pageChangeBoxActive = !this.pageChangeBoxActive;
          this.ShowButtonIsShown = !this.ShowButtonIsShown;
      },
    //   async fetchTaskData() {
    //      try {
    //        // 发送GET请求
    //        const response = await this.$axios.get('http://10.0.0.159:8080//task/queryMyTask');
    //        // 将获取的数据保存到data属性中
    //        this.taskData = response.data;
    //        console.log(this.taskData);
    //      } catch (error) {
    //        console.error("Error fetching data:", error);
    //      }
    //    },

  },
  created() {
      // 测试输出
      console.log(this.tableTitle);
  },
  mounted() {
      // 获取数据
    //   this.$axios.get('http://10.0.0.159:8080/task')
    //   .then(res => {
    //       this.getData = res.data;
    //       console.log(this.getData);
    //   })
    //   .catch(err => {
    //       console.log(err);
    //   })
    // this.fetchTaskData();
  },
  computed: {
      rowHeight() {
          // 每一行的高度
        return 91; 
      },
  
      // 计算表格最大可显示的行数
      maxVisibleRows() {
          // 表格总高度
        const availableHeight = 600;
        return Math.floor(availableHeight / this.rowHeight);
      },
  },
}
</script>

<style>
.main-card-component{
  margin-top: 5px;
  height: 600px;
}

.table{
    height: 600px;
    padding: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 70%;
    box-shadow: var(--nav-box-shadow);
    margin: 0 auto;
}

.table-search-name{
    margin-top: 20px;
    margin-right: 30px;
}
.table-search-name input {
    width: 135px;
    font-size: 17px;
    padding: 10px;
    border: 1px solid var(--table-border-color);
    box-shadow: var(--table-box-shadow);
}
.table-search-box-checkbox{
    margin-top: 20px;
    padding: px;
    /* border: 2px solid var(--table-border-color); */
    position: absolute;
    left:300px;
    margin-left: 60px;
    margin-right: 60px;
    /* z-index: 999; */
}
.table-search-title-name{
    font-size: 17px;
    padding: 10px;
    border: 1px solid var(--table-border-color);
    box-shadow: var(--table-box-shadow);
}
.table-search-content-box div:hover{
    cursor: pointer;
    /* background-color: var(--table-font-color); */
    color: var(--button-color);
}
.table-search-content-box div:active{
    background-color: var(--button-color-mint);
}
.table-search-button{
    margin-left: 80px;
    margin-top: 10px;
    padding: 10px;
}
.table-search-button button {
    padding: 15px;
    width: fit-content;
    min-width: 100px;
    height: 45px;
    padding: 8px;
    border-radius: 5px;
    border: 2.5px solid var(--table-query-border-color);
    box-shadow: 0px 0px 20px -20px;
    cursor: pointer;
    background-color: var(--table-query-button-color);
    transition: all 0.2s ease-in-out 0ms;
    user-select: none;
    font-family: 'Poppins', sans-serif;
}
.table-search-button button:hover {
  background-color: var(--table-query-button-beChosen-color);
  box-shadow: 0px 0px 20px -18px;
}
.table-search-button button:active {
  transform: scale(0.85);
}
/* 表格 */
.table-body-content{
    width: 100%;
}
.table-body{
    width: 100%;
    box-sizing: border-box;
}
.table-body tr{
    display: flex;
    /* flex: 1; */
}
.table-body td {
    border: var(--table-border-grey);
    border-collapse: collapse;
    height: calc(30px + 2 * 15px);
    line-height: calc(30px + 2 * 15px);
    box-sizing: border-box;
    text-align: center;
    flex: 1;
}
.table-body-title td{
    /* 表格标头 */
    background-color: var(--table-box-title-bgc-color);
    font-size: var(--table-box-title-font-size);
    font-weight: var(--table-box-title-font-width);
    color: var(--table-box-title-font-color);
}
.operation-column {
    min-width: 300px;
    text-align: center;
}
.operation-column button {
    height: 35px;
    width: 60px;
    margin: 0 5px;
    box-shadow: var(--table-box-shadow);
    background-color: var(--table-action-bg-color);
    border: 0.5px solid var(--table-border-grey);
    border-radius: var(--table-action-radius);
}
.operation-column button:hover{
    background-color: var(--table-action-hover-bg-color);
    color: var(--table-action-hover-color);
}
.operation-column button:active{
    box-shadow: var(--table-action-active-box-shadow);
    transform: scale(0.85);
}
.page-change-box{
    /* text-align: center; */
    margin: 25px auto;
    width: 50%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
}
.page-box{
    display: flex;
}
.page-change-box{
    margin: 25px auto;
    display: flex;
    justify-content: space-around;
    font-size: var(--page-change-box-font-size);
}
.page-box{
    display: flex;
    justify-content: space-around;

}
.page-box button{
    height: 40px;
    width: 50px;
    border: var(--page-change-box-border);
    font-weight: var(--page-change-box-width);
    box-shadow: var(--page-change-box-box-shadow);
}
.page-box button:hover{
    background-color: var(--page-change-box-bg-color);
}
.page-box button:active{
    transform: var(--page-change-box-active-bg-color);
    transition: ease-in 0.5s;
}
.page-box-item-page-box-not-show{
    display: flex;
    justify-content: space-around;
}
</style>