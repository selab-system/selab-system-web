<template>
  <div class="taskReportContainer">
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="userName" label="用户名" width="100">
      </el-table-column>
      <el-table-column prop="reportTime" label="提交时间" width="180">
      </el-table-column>
      <el-table-column prop="details" label="汇报内容"> </el-table-column>
      <el-table-column prop="reportStatus" label="汇报状态"> </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="5"
        layout="sizes, prev, pager, next"
        :total="500"
      >
      </el-pagination>
    </div>
    <!-- 返回查看所有任务页面 -->
    <el-row>
      <el-button type="primary" plain @click="goBack">返回</el-button>
      <el-button type="primary" plain @click="checkUserMsg"
        >查看用户信息</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { queryAllReport } from "@/api/TaskManage/TaskManage.js";
import dayjs from "dayjs";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      //   分页
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },

  methods: {
    //调用接口
    queryMyReport() {
      queryAllReport().then((res) => {
        this.tableData = res.data;
        this.tableData.forEach((item) => {
          item.reportTime = dayjs(item.reportTime).format(
            "YYYY-MM-DD HH:mm:ss"
          );
        });
      });
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //返回查看全部任务界面
    goBack() {
      this.$router.push("/CheckAllTask");
    },
    // 查看用户详情信息
    checkUserMsg() {
      this.$router.push("/CheckUserMsg");
    },
  },
  created() {
    this.queryMyReport();
  },
};
</script>

<style scope>
.taskReportContainer {
  width: 70%;
  margin: 0 auto;
}

::v-deep span {
  background-color: none;
  color: none;
}
</style>