<template>
  <div style="width: 70%; margin: 0 auto">
    <!--显示所有任务的表格  -->
    <el-table :data="tableData" border>
      <el-table-column prop="name" label="任务名称" width="120" />
      <el-table-column prop="id" label="Id" width="50" />
      <el-table-column prop="dealTime" label="截止时间" width="170" />
      <el-table-column prop="publisherName" label="发布者姓名" width="130" />
      <el-table-column prop="content" label="任务内容" />
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <!-- 汇报怎么实现。 -->
          <el-button @click="handleClick1(scope.row.id)" type="text" size="small"
            >汇报</el-button
          >
          <el-button @click="handleClick2(scope.row.id)" type="text" size="small"
            >我的汇报</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
  </div>
</template>
  
  <script>
import { queryForUser } from "@/api/TaskManage/TaskManage.js";
import dayjs from "dayjs";
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
      ],
      taskData: [],
    };
  },
  methods: {

    handleClick1(taskId) {
      // this.dialogVisible = true;
      this.$router.push({ name: 'ReportMyTask', params: { taskId:taskId } });

    },
    handleClick2(taskId) {
      // this.dialogVisible = true;
      this.$router.push({ name: 'CheckMyReport', params: { taskId:taskId } });

    },
// 传userId
    async queryTask() {
      await queryForUser().then((res) => {
        if(res.code===200){
          this.tableData = res.data;
        this.tableData.forEach((item) => {
          item.dealTime = dayjs(item.dealTime).format("YYYY-MM-DD HH:mm:ss");
        });
        }
        
      });
    },
  },
  mounted() {
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