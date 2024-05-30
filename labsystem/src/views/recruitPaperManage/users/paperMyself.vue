<template>
  <div  class="body">
  <div class="main">

    <el-descriptions :title=title :column="3" border>报名表1

  <el-descriptions-item label="面试日期" label-class-name="my-label" content-class-name="my-content">2024-2-3</el-descriptions-item>
  <el-descriptions-item label="邮箱">sls__00@qq.com</el-descriptions-item>
  <el-descriptions-item label="手机号">123123213</el-descriptions-item>
  <el-descriptions-item label="意向部门">软件开发
    <!-- <el-tag size="small">学校</el-tag> -->
  </el-descriptions-item>
  <el-descriptions-item label="备注" :contentStyle="{'text-align': 'left'}">实验室招新</el-descriptions-item>
</el-descriptions>

<el-descriptions title="报名表2" :column="3" border>

<el-descriptions-item label="面试日期" label-class-name="my-label" content-class-name="my-content">2024-2-3</el-descriptions-item>
<el-descriptions-item label="邮箱">sls__00@qq.com</el-descriptions-item>
<el-descriptions-item label="手机号">123123213</el-descriptions-item>
<el-descriptions-item label="意向部门">软件开发
  <!-- <el-tag size="small">学校</el-tag> -->
</el-descriptions-item>
<el-descriptions-item label="备注" :contentStyle="{'text-align': 'left'}">实验室招新</el-descriptions-item>
</el-descriptions>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '报名表1'
    }
  }
}
</script>

<style lang="less" scoped>
*{
  padding: 0 0;
  margin: 0 0;
}
.body{
width: 90%;
height: 90%;
background-color: #ebeef9;
padding: 70px;
}
.my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;}
</style>
