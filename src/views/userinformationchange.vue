<script >
export default {
  data() {
    return {
      userName:'',
      groupName:'',
      roleName:'',
      email:'',
      phone:'',
      sex:null,
      userId:null,
      createTime:''
    };
  },
};
</script>

<template>
<div class="continue">
    <!-- 输入用户id -->

    
  <el-descriptions title="用户原信息" direction="vertical" :column="4" border>
    <el-descriptions-item label="用户名" v-model="userName"></el-descriptions-item>
    <el-descriptions-item label="用户id" v-model="userId"></el-descriptions-item>

    <el-descriptions-item label="手机号" v-model="phone"></el-descriptions-item>
    <el-descriptions-item label="性别" v-model="sex"></el-descriptions-item>
    <el-descriptions-item label="邮箱" :span="2" v-model="email"></el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">普通用户</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="创建时间" v-model="createTime"
      ></el-descriptions-item
    >
  </el-descriptions>
</div>
</template>

<style scoped>
</style>
