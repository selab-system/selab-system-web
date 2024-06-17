<script >
import { getUserMsg, changeMsg,addUser,userDelete } from "@/api/userinformationchange";
export default {
  data() {
    return {
      inputUserId: "",
      list: {
        userName: "",
        userId: "",
        phone: "",
        sex: "",
        email: "",
        createTime: "",
      },
      form: {
        select: "",
        context: "",
      },
      addform: {
        userName: "",
        groupId:null,
        roleId:"",
        email: "",
        phone: "",
        sex: "",
        password:""
      },
      rules: {
          userName: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur' },
          ],
          groupId:[
            { required: true, message: '请输入小组id', trigger: 'blur'},
            // { type: 'number', message: '小组id必须为数字值', trigger: 'blur'}
          ],
          roleId:[{ required: true, message: '请输入角色id', trigger: 'blur' }],
          email:[{ required: true, message: '请输入邮箱', trigger: 'blur' }],
          phone:[{ required: true, message: '请输入电话', trigger: 'blur' }],
          sex:[{ required: true, message: '请输入性别', trigger: 'blur' }],
          password:[{ required: true, message: '请输入密码', trigger: 'blur' }],
        }
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
        console.log(str.data.data[0]);
      this.list = str.data.data[0];
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
        const newlist = this.list;
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

    // 注销用户
    async deleteUser(){
        if(this.inputUserId.trim()===''){
          alert("请先输入用户id")
          return
        }
        const str = await userDelete(this.inputUserId)
        if(str){
          alert("删除"+this.inputUserId+"成功")
        }
        else{
          alert("删除失败")
        }
    },

    // 添加用户
    async addUser(addform) {
      console.log(addform);
      if (
        addform.userName &&
        addform.groupId &&
        addform.roleId&&
        addform.email &&
        addform.phone &&
        addform.sex &&
        addform.password
      ) {
        const str = await addUser(addform);
        console.log(str);
        alert("添加成功");
      } else {
        alert("有信息未填，请完善");
      }
    },

    // 清理表单
    clean() {
      this.addform={
        userName: "",
        groupId:'',
        roleId:null,
        email: "",
        phone: "",
        sex: "",
        password:""
      }
    },
  },
};
</script>

<template>
  <div class="continue">
    <div class="title">查询用户信息</div>
    <!-- 输入用户id -->
    <el-input placeholder="请输入用户id" v-model="inputUserId" clearable >
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
      >{{list.userName}}</el-descriptions-item>
      <el-descriptions-item
        label="用户id"
        v-model="list.userId"
      >{{list.userId}}</el-descriptions-item>

      <el-descriptions-item
        label="手机号"
        v-model="list.phone"
      >{{list.phone}}</el-descriptions-item>
      <el-descriptions-item
        label="性别"
        v-model="list.sex"
      >{{list.sex}}</el-descriptions-item>
      <el-descriptions-item
        label="邮箱"
        :span="2"
        v-model="list.email"
      >{{list.email}}</el-descriptions-item>
      <el-descriptions-item label="备注">
        <el-tag size="small">普通用户</el-tag>
      </el-descriptions-item>
      <el-descriptions-item
        label="创建时间"
        v-model="list.createTime"
      >{{list.createTime}}</el-descriptions-item>
    </el-descriptions>
    <!-- 修改信息 -->
    <div class="title">修改用户信息</div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="修改内容">
        <el-select v-model="form.select" placeholder="修改内容">
          <el-option label="用户名" value="userName"></el-option>
          <!-- <el-option label="用户id" value="userId"></el-option> -->
          <el-option label="手机号" value="phone"></el-option>
          <el-option label="性别" value="sex"></el-option>
          <el-option label="邮箱" value="email"></el-option>
          <!-- <el-option label="小组名称" value="groupName"></el-option> -->
          <!-- <el-option label="创建时间" value="createTime"></el-option> -->
        </el-select>
      </el-form-item>
      <el-form-item label="修改为">
        <el-input v-model="form.context" placeholder="修改为"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="modi(form.select, form.context)"
          >提交</el-button
        >
      </el-form-item>
    </el-form>
    <!-- 注销用户 -->
    <div class="title">删除用户</div>
    <el-button type="danger" @click="deleteUser">删除此用户</el-button>
    <!-- 添加用户 -->
    <div class="title"></div>
    <div class="title">添加用户</div>
    <el-form ref="addform" :model="addform" label-width="80px" :rules="rules">
      <el-form-item label="用户名" prop="userName"><el-input v-model="addform.userName"></el-input
      ></el-form-item>
      <el-form-item label="小组id" prop="groupId" 
        ><el-input v-model="addform.groupId" ></el-input
      ></el-form-item>
      <el-form-item label="角色id" prop="roleId"
        ><el-input v-model="addform.roleId"></el-input
      ></el-form-item>
      <el-form-item label="邮箱" prop="email"
        ><el-input v-model="addform.email"></el-input
      ></el-form-item>
      <el-form-item label="手机号码" prop="phone"
        ><el-input v-model="addform.phone"></el-input
      ></el-form-item>
      <el-form-item label="性别(0为女1为男)" prop="sex"
        ><el-input v-model="addform.sex"></el-input
      ></el-form-item>
      <el-form-item label="密码" prop="password"
        ><el-input v-model="addform.password" type="password" ></el-input
      ></el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addUser(addform)">立即创建</el-button>
        <!-- <el-button @click="clean">取消</el-button> -->
      </el-form-item>
    </el-form>
    <!-- 添加用户完成 -->
    <!-- 修改用户权限 -->
    
  </div>
</template>

<style scoped>
</style>
