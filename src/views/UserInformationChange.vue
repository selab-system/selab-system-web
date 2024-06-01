<script >
import { getUserMsg, changeMsg } from "@/api/userinformationchange";
export default {
  data() {
    return {
      inputUserId: "",
      list: {
        userName: "",
        userId: null,
        phone: "",
        sex: null,
        email: "",
        createTime: "",
      },
      form: {
        select: "",
        context: "",
      },
    };
  },
  methods: {
    // 查找用户信息
    async searchUser() {
      if (this.inputUserId.trim() === "") {
        alert("请输入用户id");
        return;
      }
      const str = await getUserMsg(this.inputUserId);
      if(str){
        console.log(str);
      this.list = str;
      alert("已获取到用户信息");
      }
      else{
        alert("未获取到用户信息")
      }
    },
    // 修改用户信息
    async modi(name, context) {
      if (this.inputUserId.trim() === "") {
        alert("请先输入用户id");
        return;
      }
      if (name && context) {
        this.list[name] = context;
        const newlist = this.list
        const str = await changeMsg(newlist);
        console.log(str);
        if (str) {
          alert("修改成功");
        } else {
          alert("修改失败");
        }
      } else {
        alert("修改信息不完整");
      }
    },
  },
};
</script>

<template>
  <div class="continue">
    <!-- 输入用户id -->
    <el-input placeholder="请输入用户id" v-model="inputUserId" clearable>
    </el-input>
    <!-- 按钮查询 -->
    <el-button type="success" @click="searchUser">查询</el-button>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 显示用户信息 -->
    <el-descriptions title="用户原信息" direction="vertical" :column="4" border>
      <el-descriptions-item
        label="用户名"
        v-model="list.userName"
      ></el-descriptions-item>
      <el-descriptions-item
        label="用户id"
        v-model="list.userId"
      ></el-descriptions-item>

      <el-descriptions-item
        label="手机号"
        v-model="list.phone"
      ></el-descriptions-item>
      <el-descriptions-item
        label="性别"
        v-model="list.sex"
      ></el-descriptions-item>
      <el-descriptions-item
        label="邮箱"
        :span="2"
        v-model="list.email"
      ></el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">普通用户</el-tag>
      </el-descriptions-item>
      <el-descriptions-item
        label="创建时间"
        v-model="list.createTime"
      ></el-descriptions-item>
    </el-descriptions>
    <!-- 修改信息 -->
    <div class="title">请选择修改内容</div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="修改内容">
        <el-select v-model="form.select" placeholder="修改内容">
          <el-option label="用户名" value="userName"></el-option>
          <el-option label="用户id" value="userId"></el-option>
          <el-option label="手机号" value="phone"></el-option>
          <el-option label="性别" value="sex"></el-option>
          <el-option label="邮箱" value="email"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="修改为">
        <el-input v-model="form.context" placeholder="修改为"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="modi(form.select,form.context)"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
</style>
