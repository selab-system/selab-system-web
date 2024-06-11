<template>
  <div style="width: 70%; margin: 0 auto">
    <!-- 输入框，根据发布者名查询任务 -->
    <div class="inputDiv" style="margin-top: 10px">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        clearable
        style="width: 20%; margin-bottom: 10px"
      ></el-input>
      <!-- 按钮 -->
      <el-row>
        <el-button type="primary" @click="queryTaskByPublisher()"
          >查询</el-button
        >
      </el-row>
    </div>

    <!--显示所有任务的表格  -->
    <el-table :data="tableData" border>
      <el-table-column prop="name" label="任务名称" width="120" />
      <el-table-column prop="id" label="任务Id" width="100" />
      <el-table-column prop="dealTime" label="截止时间" width="200" />
      <el-table-column prop="publisherName" label="发布者姓名" width="120" />
      <el-table-column prop="content" label="任务内容" />
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <!-- 更新 -->
          <el-button
            type="text"
            size="small"
            @click="UpdateMyTask(scope.row.id)"
            >更新</el-button
          >
          <!--查看汇报 -->
            <el-button
              type="text"
              size="small"
              @click="checkReport(scope.row.id)"
              >查看汇报</el-button
            >
          
          <!--删除-->
          <el-button type="text" size="small" @click="deleteTask(scope.row.id)"
            >删除</el-button
          ></template>
          
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      style="background-color: none"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="cur"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="size"
      layout="sizes, prev, pager, next"
      :total="total"
    >
    </el-pagination>

  </div>
</template>

<script>
import { queryMyTask, deleteTask } from "@/api/TaskManage/TaskManage.js";
import dayjs from "dayjs";
export default {
  data() {
    return {

      dialogVisible: false,
      // 查询框
      input: "",
      publisherName: "zhangsan",
      size: 5,
      cur: 1,
      total: 20,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
        },
      ],
      tableDataAll: "",
      // 分页是否展示
      pageChangeBoxActive: false,
      // 分页按钮是否展示
      ShowButtonIsShown: true,
      taskData: [],

      // 查询后的数据
      edTafilterbleData: [],
      currentPage: "",
    };
  },
  methods: {
    // 删除成功提示
    open2() {
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      },
    // 更新任务传任务id
    UpdateMyTask(taskId) {
      this.$router.push({ name: "TaskUpdate", params: { taskId: taskId } });
    },
    //查看任务汇报
    checkReport(taskId) {
      this.$router.push({ name: "TaskReport", params: { taskId: taskId } });
    },
    /// 删除任务
    async deleteTask(taskId) {
      try {
        await Promise.all([deleteTask({ taskId: taskId }), this.queryTask()]);
        this.deleteResultVisible = true;
        // 删除成功提示
        this.$message({
          message: '删除成功',
          type: 'success'
        });
      } catch (error) {
        console.error("删除任务时出错:", error);
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.queryTask();
      if(this.input!==""){
        this.queryTaskByPublisher();
      }
      
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.cur = val;
      this.queryTask();
      if(this.input!==""){
        this.queryTaskByPublisher();
      }
    },
    handleClick(row) {
      this.dialogVisible = true;
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
        if (Array.isArray(res.data.data)) {
          this.tableData = res.data.data.filter((item) => item.status !== 1);
          this.tableData.forEach((item) => {
            item.dealTime = dayjs(item.dealTime).format("YYYY-MM-DD HH:mm:ss");
          });
          if(res.data.total!==undefined){
            this.total = res.data.total;
          }
          
        } else {
          console.log("不是数组1", res);
        }
      });
    },
    
    // 根据发布者名查询任务
    async queryTaskByPublisher() {
      await queryMyTask({
        publisherName: this.input,
        cur: this.cur,
        size: this.size,
      }).then((res) => {
        if (Array.isArray(res.data.data)){
          this.tableData = res.data.data.filter((item) => item.status !== 1); // 添加过滤条件
          if(res.data.total!==undefined){
            this.total = res.data.total;
          }
        if (res.data === null && typeof res.data === "undefined") {
          // 如果没有数据，不需要转换日期格式
        } else {
          this.tableData.forEach((item) => {
            item.dealTime = dayjs(item.dealTime).format("YYYY-MM-DD HH:mm:ss");
          });
        }
        }else{
          console.log("不是数组3", res);
        }
        
      });
    },
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