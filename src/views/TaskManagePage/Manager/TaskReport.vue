<template>
  <div class="taskReportContainer">
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="userName" label="用户名" width="100">
      </el-table-column>
      <el-table-column prop="reportTime" label="提交时间" width="180">
      </el-table-column>
      <el-table-column prop="details" label="汇报内容"> </el-table-column>
      <el-table-column prop="reportStatusText" label="汇报状态" width="100">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <!--删除-->
          <el-button type="text" size="small" @click="deleteReport(scope.row.reportId)"
            >删除</el-button
          ></template>
          
      </el-table-column>
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
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- 返回查看所有任务页面 -->
    <el-row margin="0 auto">
      <el-tag>汇报数量 : {{ reportCounts }} </el-tag>
      <el-button type="primary" plain @click="goBack">返回</el-button>
      <el-button type="primary" plain @click="checkUserMsg"
        >查看用户信息</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { queryAllReport,deleteReport } from "@/api/TaskManage/TaskManage.js";
import dayjs from "dayjs";
export default {
  data() {
    return {
      reportCounts: 0,
      taskId: "",
      cur: 1,
      size: 5,
      total:'',
      tableData: [],
      //   分页
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },

  methods: {
    // 删除任务
    async deleteReport(){
      await deleteReport({reportId:this.reportId}).then((res)=>{
        if(res.code===200){
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.queryReport();
        }else{
          this.$message({
            message: '删除失败',
            type: 'error'
          });
        }
      })
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.size = val;
      this.queryReport();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.cur = val;
      this.queryReport();
    },
    //返回查看全部任务界面
    goBack() {
      this.$router.push("/CheckAllTask");
    },
    // 查看用户详情信息
    checkUserMsg() {
      this.$router.push({
        name: "CheckUserMsg",
        params: { taskId: this.taskId },
      });
    },
    // 查看任务汇报
    async queryReport() {
      const params = {
        taskId: this.taskId,
        cur: this.cur,
        size: this.size,
      };
      await queryAllReport(params).then((response) => {
        if (response.code === 204) {
        } else {
          response.data.data.forEach((item) => {
            item.reportStatusText =
              item.reportStatus.status === 1 ? "未汇报" : "已汇报";
            item.reportTime = dayjs(item.reportTime).format(
              "YYYY-MM-DD HH:mm:ss"
            );
          });
          this.tableData = response.data.data;
          console.log("成功获取任务汇报！！！", response.data);
          if(res.data.total!==undefined){
            this.total = res.data.total;
          }
        }
      });
    },
    // 查看任务汇报数量
    // async reportCount() {
    //   const params = {
    //     taskId: this.taskId,
    //   };
    //   await queryAllReport(params).then((response) => {
    //     if (response.code === 204) {
    //       this.$message(
    //         {
    //           message: "该任务暂时还没有汇报记录",
    //           type: "success",
    //         },
            
    //       );
    //     } else {
    //       this.reportCounts = response.data.total;
    //       console.log("成功获取任务汇报数量!!!", response.data.total);
    //     }
    //   });
    // },
  },
  created() {
    this.taskId = this.$route.params.taskId;
    console.log(this.taskId);
    this.queryReport();
    // this.reportCount();
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