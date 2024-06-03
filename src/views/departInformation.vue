<script>
import { getList, searchUserMsg } from "@/api/userquery";
export default {
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
  data() {
    return {
      input: null,
      filterText: "",
      list: [],
      data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      form: {
        userName: "string",
        groupId: 0,
        groupName: "string",
        roleId: 0,
        roleName: "string",
        email: "string",
        phone: "string",
        sex: 0,
        userId: 0,
        createTime: "string",
        updateTime: "string",
      },
      obj: {
        userName: "用户名称",
        groupId: "小组id",
        groupName: "小组名称",
        roleId: "角色id",
        roleName: "角色名称",
        email: "邮箱",
        phone: "手机号码",
        sex: "性别(0为女1为男)",
        userId: "用户id",
        createTime: "创建时间",
        updateTime: "更新时间",
      },
    };
  },
  async created() {
    this.getList();
    data.forEach((item) => {
      item.label = list.data.groupName; // 将groupName替换为label
      item.children.forEach((child) => {
        child.label = list.data.userVos[0].userName; // 将userName替换为label
      });
    });
  },
  methods: {
    // 获取树形表
    async getList() {
      const str = await getList();
      this.list = str;
      console.log(str);
    },
    // 树形表自带
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // 获取个人信息
    async searchUserMsg() {
      if (this.input.trim() === "") {
        alert("请先填写用户id");
        return;
      }
      const str = await searchUserMsg(this.input);
      if (str) {
        this.form = str.data;
        alert("已获取成员信息");
      } else {
        alert("获取信息失败");
      }
    },
  },
};
</script>

<template>
  <el-container>
    <el-aside width="200px">
      <el-input placeholder="输入关键字进行过滤" v-model="filterText">
      </el-input>

      <el-tree
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        ref="tree"
      >
      </el-tree>
    </el-aside>
    <el-main>
      <!-- 查询用户信息 -->
      <el-input placeholder="请输入用户id" v-model="input" clearable>
      </el-input>
      <el-button type="primary" @click="searchUserMsg">查询</el-button>

      <el-descriptions title="用户信息">
        <el-descriptions-item label="用户名称" v-model="form.userName" ></el-descriptions-item>
        <el-descriptions-item label="小组id" v-model="form.groupId" ></el-descriptions-item>
        <el-descriptions-item label="小组名称" v-model="form.groupName" ></el-descriptions-item>
        <el-descriptions-item label="角色id" v-model="form.roleId" ></el-descriptions-item>
        <el-descriptions-item label="角色名称" v-model="form.roleName" ></el-descriptions-item>
        <el-descriptions-item label="邮箱" v-model="form.email" ></el-descriptions-item>
        <el-descriptions-item label="手机号码" v-model="form.phone" ></el-descriptions-item>
        <el-descriptions-item label=" 性别(0为女1为男)" v-model="form.sex" ></el-descriptions-item>
        <el-descriptions-item label="用户id" v-model="form.userId" ></el-descriptions-item>
        <el-descriptions-item label="创建时间" v-model="form.createTime" ></el-descriptions-item>
        <el-descriptions-item label="更新时间" v-model="form.updateTime" ></el-descriptions-item>
      </el-descriptions>
    </el-main>
  </el-container>
</template>


<style>
.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  /* background-color: #e9eef3; */
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>