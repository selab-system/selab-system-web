<script>
import {
  getList,
  searchUserMsg,
  delectGroup,
  addGroup,
  changeGroup,
  changdeGroupMsg,
} from "@/api/userquery";
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
      inputGroupId: null,
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
      groupform: {
        select: "",
        context: "",
      },
      addform: {
        groupName: "",
      },
      changeform: {
        userId: null,
        groupId: null,
      },
      changelist: {
        groupId: null,
        groupName: "",
        createTime: "",
      },
    };
  },
  async created() {
    await this.getList();
    let counter = 1
    // let i = 0
    this.list.forEach((item) => {
      item.id = counter++;
      item.label = item.groupName; // 将groupName替换为label
      item.children = item.userVos.map((user) => {
        return {
          id: counter++,
          label: user.userName, // 将userName替换为label
        };
      });
      delete item.data; // 删除原来的data属性
    });

    this.data = this.list.map((item) => {
      return {
        id: item.id,
        // id: item.code,
        label: item.label,
        children: item.children,
      };
    });
    console.log(this.data);
  },
  methods: {
    // 获取树形表
    async getList() {
      const str = await getList();
      console.log(str);
      this.list = str.data.data;
      console.log(str.data.data);
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
        console.log(str);
        this.form = str.data.data;
        alert("已获取成员信息");
      } else {
        alert("获取信息失败");
      }
    },
    async delectGroup() {
      if (this.inputGroupId.trim() === "") {
        alert("先输入组别id");
        return;
      }
      const res = await delectGroup(this.inputGroupId);
      if (res) {
        alert("已删除成功");
      } else {
        alert("未删除成功");
      }
    },
    // 添加组别
    async addGrroup(groupName) {
      if (groupName) {
        const res = await addGroup(groupName);
        if (res) {
          alert("添加成功");
        } else {
          alert("未添加成功");
        }
      } else {
        alert("请输入小组名称");
        return;
      }
    },
    clean() {
      addform = {
        groupName: "",
      };
    },
    //   修改组别
    async changeGroup(changeform) {
      if (changeform.userId && changeform.groupId) {
        const str = changeGroup(changeform);
        if (str) {
          alert("修改成功");
        } else {
          alert("修改失败");
        }
      } else {
        alert("修改信息未完善");
        return;
      }
    },
    clea() {
      changeform = {
        userId: null,
        groupId: null,
      };
    },
    // 修改小组信息
    async changdeGroupMsg(changelist) {
      if (changelist.groupId && changelist.groupName && changelist.createTime) {
        const str = await changdeGroupMsg(changelist);
        if (str) {
          alert("修改成功");
        } else {
          alert("修改失败");
        }
      } else {
        alert("信息不完整");
      }
    },
    cle() {
      changelist = {
        groupId: null,
        groupName: "",
        createTime: "",
      };
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
      <div class="title">查询用户信息</div>
      <el-input placeholder="请输入用户id" v-model="input" clearable>
      </el-input>
      <el-button type="primary" @click="searchUserMsg">查询</el-button>

      <el-descriptions title="用户信息">
        <el-descriptions-item label="用户名称" v-model="form.userName" >{{form.userName}}</el-descriptions-item>
        <el-descriptions-item label="小组id" v-model="form.groupId" >{{form.groupId}}</el-descriptions-item>
        <el-descriptions-item label="小组名称" v-model="form.groupName" >{{form.groupName}}</el-descriptions-item>
        <el-descriptions-item label="角色id" v-model="form.roleId" >{{form.roleId}}</el-descriptions-item>
        <el-descriptions-item label="角色名称" v-model="form.roleName" >{{form.roleName}}</el-descriptions-item>
        <el-descriptions-item label="邮箱" v-model="form.email" >{{form.email}}</el-descriptions-item>
        <el-descriptions-item label="手机号码" v-model="form.phone" >{{form.phone}}</el-descriptions-item>
        <el-descriptions-item label=" 性别(0为女1为男)" v-model="form.sex" >{{form.sex}}</el-descriptions-item>
        <el-descriptions-item label="用户id" v-model="form.userId" >{{form.userId}}</el-descriptions-item>
        <el-descriptions-item label="创建时间" v-model="form.createTime" >{{form.createTime}}</el-descriptions-item>
        <el-descriptions-item label="更新时间" v-model="form.updateTime" >{{form.updateTime}}</el-descriptions-item>
      </el-descriptions>

      <!-- 小组信息修改 -->
      <div class="title">请选择修改内容</div>
      <el-input placeholder="请输入小组id" v-model="changelist.groupId" clearable></el-input>
      <el-input placeholder="请输入小组名称" v-model="changelist.groupName" clearable></el-input>
      <el-input placeholder="请输入创建时间" v-model="changelist.createTime" clearable></el-input>
        <el-button type="success" @click="changdeGroupMsg(changelist)">提交</el-button>
        <el-button @click="cle">取消</el-button>
      <!-- 小组删除 -->
    <div class="title">删除小组</div>
      <el-input placeholder="请输入小组id" v-model="inputGroupId" clearable>
      </el-input>
      <el-button type="danger" plain @click="delectGroup">删除小组</el-button>
      <!-- 小组添加 -->
    <!-- <div class="title"></div> -->
    <div class="title">添加小组</div>
    <el-form ref="addform" :model="addform" label-width="80px">
      <el-form-item label="小组名称"><el-input v-model="addform.groupName"></el-input></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addGrroup(addform.groupName)">立即创建</el-button>
        <el-button @click="clean">取消</el-button>
      </el-form-item>
    </el-form>
    <!-- 修改用户组别 -->
    <div class="title">修改用户组别</div>
    <el-form ref="changeform" :model="changeform" label-width="80px">
      <el-form-item label="小组id"><el-input v-model="changeform.groupId"></el-input></el-form-item>
      <el-form-item label="用户id"><el-input v-model="changeform.userId"></el-input></el-form-item>
      <el-form-item>
        <el-button type="primary" @click="changeGroup(changeform)">立即修改</el-button>
        <el-button @click="clea">取消</el-button>
      </el-form-item>
    </el-form>
    </el-main>
  </el-container>
</template>


<style >
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>