<template>
  <div class="reportContainer">
    <el-form ref="form" :model="formDetails" label-width="100px">
      <el-form-item label="汇报内容">
        <el-input type="textarea" v-model="formDetails.details"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即汇报</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

  <script>
import { report } from "@/api/TaskManage/TaskManage";
export default {
  data() {
    return {
      taskId: "",
      formDetails: { 
      details: "", 
    },
    };
  },
  methods: {
    async onSubmit() {
      console.log("submit!", this.details, this.taskId);
      const formData = {
        TaskReportDto: {
          taskId: this.taskId,
          details: this.formDetails.details,
          reportStatus: 1,
        },
      };
      await report(formData).then((res) => {
        if (res.code === 200) {
          this.$message({
          message: '恭喜你，汇报成功',
          type: 'success'
        });
          console.log("汇报成功", res);
        } else {
          this.$message.error('汇报失败');
          
          console.log("汇报失败", res);
        }
      });
      
    },
  },
  created() {
    this.taskId = this.$route.params.taskId;
    console.log(this.taskId);
  },
};
</script>

<style>
.reportContainer {
  width: 70%;
  margin: 20px auto 0;
}
</style>