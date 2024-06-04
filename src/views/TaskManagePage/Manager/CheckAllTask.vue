<template>
  <div style="width: 70%; margin: 0 auto">
    <!-- 输入框，根据发布者名查询任务 -->
    <div class="inputDiv" style="margin-top: 10px;">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable
        style="width: 20%; margin-bottom: 10px"
      ></el-input>
      <!-- 按钮 -->
      <el-row>
        <el-button type="primary" @click="queryTaskByPublisher()">查询</el-button>
      </el-row>
    </div>

    <!--显示所有任务的表格  -->
    <el-table :data="tableData" border>
      <el-table-column prop="name" label="任务名称" width="120"/>
      <el-table-column prop="id" label="任务Id" width="100"/>
      <el-table-column prop="dealTime" label="截止时间" width="200"/>
      <el-table-column prop="publisherName" label="发布者姓名" width="120"/>
      <el-table-column prop="content" label="任务内容"/>
      <el-table-column fixed="right" label="操作" width="150">

        <template slot-scope="scope">
          <!-- 未完成更新 -->
          <el-button type="text" size="small"><router-link to="/TaskUpdate?taskId=`${scope.row.id}`">更新</router-link> </el-button>
          <!--未完成查看汇报 -->
          <el-button type="text" size="small" ><router-link to="/TaskReport?taskId=`${scope.row.id}`">查看汇报</router-link></el-button>
          <!--未完成删除-->
          <el-button type="text" size="small" @click="deleteTask(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
    style="background-color: none;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="size"
      layout="sizes, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import { queryMyTask,deleteTask } from "@/api/TaskManage/TaskManage.js";
import dayjs from "dayjs";
export default {
  data() {
    return {
      dialogVisible: false,
      // 查询框
      input: "",
      publisherName: "zhangsan",
      size:3,
      total: 200,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
        },
      ],
      // 分页是否展示
      pageChangeBoxActive: false,
      // 分页按钮是否展示
      ShowButtonIsShown: true,
      taskData: [],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      // 查询后的数据
      filteredTableData:[],
      currentPage:"",
    };
  },
  methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.size = val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.cur = val;
      },
    handleClick(row) {
        this.dialogVisible=true
      console.log(row);
    },
// 查询全部任务
    async queryTask() {
      const params = {
        publisherName: this.publisherName,
        cur: this.cur,
        size: this.size,
      };
      await queryMyTask(params).then((res) => {
        this.tableData = res.data;
        this.tableData.forEach(item => {
            item.dealTime = dayjs(item.dealTime).format('YYYY-MM-DD HH:mm:ss');
        })
      });
    },
    // 根据发布者名查询任务
    queryTaskByPublisher(){
      queryMyTask({
        publisherName: this.input,

      }).then((res) => {
        this.tableData = res.data;
        // this.total = res.data.length || 0;
        if (res.data === null && typeof res.data === 'undefined') {
        // 如果没有数据，不需要转换日期格式
      } else {
        this.tableData.forEach((item) => {
          item.dealTime = dayjs(item.dealTime).format('YYYY-MM-DD HH:mm:ss');
        })
      }
    });
    },
    // 删除任务
    deleteTask(taskId){
      deleteTask(taskId)
    }
  },
  created() {
    this.queryTask();
  },
};
</script>

<style>
.inputDiv {
  display: flex;
  justify-content: flex-end;
}
</style>