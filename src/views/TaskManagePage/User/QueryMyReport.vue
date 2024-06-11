<template>

    <div class="containerBox">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="任务名称" width="150">
      </el-table-column>
      <el-table-column prop="publisherName" label="发布者" width="150">
      </el-table-column>
      <el-table-column prop="status" label="任务状态" width="80">
      </el-table-column>
      <el-table-column prop="judge" label="是否汇报" width="80">
      </el-table-column>
      <el-table-column prop="taskReportVo.details" label="汇报信息"> </el-table-column>
    </el-table>
    <el-button type="primary" plain @click="goBack" width=80%  margin=0 auto>返回</el-button>
  </div>

  
</template>

  <script>
import { queryMyReportByTaskId } from "@/api/TaskManage/TaskManage";
export default {
  data() {
    return {
      tableData: [

      ],
    };
  },
  methods: {
    // 返回
    goBack(){
      this.$router.push("/CheckMyTask");
    },
    // 接口
    async queryReport() {
      const params={
        taskId:this.taskId,
        userId:this.$store.state.userId
      };
        await queryMyReportByTaskId(params).then((response) => {
          if(response.code===200){
            console.log("获取成功", response);
          
            if (response.data.status === 1) {
              response.data.status = "已结束";
            } else {
              response.data.status = "未结束";
            };
            if (response.data.judge === 1) {
              response.data.judge = "已汇报";
            } else {
              response.data.judge = "未汇报";
            };
            this.tableData.push(response.data);
          

          }
          
        });
    },
  },
  created() {
    this.taskId = this.$route.params.taskId;
    console.log(this.taskId);

    this.queryReport();
  },
};
</script>

  <style>
  .containerBox{
    width: 80%;
    margin: 10px auto 0;
  }
</style>