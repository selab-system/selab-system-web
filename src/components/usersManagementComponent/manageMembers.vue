<script>
import TopBar from "@/components/usersManagementComponent/topBar.vue";
import {
  deleteGroup,
  groupQueryAll,
  logOutUser,
  saveGroup,
  saveUser,
  updateUser,
  userQuery,
  userQueryByid
} from "@/api/UserHome/UserHome";

export default {
  name: "manageMembers",
  components: {TopBar},
  data() {
    return {
      tableTitleData: [
          "序号",
          "Id",
          "姓名",
          "小组",
          "小组ID",
          "邮箱",
          "手机号",
          "性别",
          "创建时间",
          "更新时间",
          "是否为管理员",
          "操作"
      ],
      tableData: [
      ],
      userName: '',
      groupId: 0,
      roleId: 0,
      email: '',
      phone: '',
      sex: '',
      password: '',
      groupName: '',
      roleName: '',
      userId: 0,
      createTime: '',
      updateTime: '',
      selectUserId: ''
    }
  },
  methods: {
    getAllUser() {
      try {
        const params = {
          cur: 1,
          size: 10
        }
        userQuery(params).then(res => {
          console.log(res.data)
          if (res.code === 200) {
            for (let i in res.data) {
              this.tableData.push(i);
            }
          } else {
            console.log('错了')
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    addUser() {
      try {
        const addData = {
          userName: this.userName,
          groupId: this.groupId,
          roleId: this.roleId,
          email: this.email,
          phone: this.phone,
          sex: this.sex === '男' ? 1 : 0,
          password: this.password
        }
        saveUser(addData).then(res => {
          console.log(res.data)
          if (res.code === 200) {
            const addUserDiv = document.querySelector('.addUserDiv');
            addUserDiv.style.display = 'none';
          } else {
            console.log('错了')
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    editUser() {
      try {
        const editData = {
          userName: this.userName,
          groupId: this.groupId,
          groupName: this.groupName,
          roleId: this.roleId,
          roleName: this.roleName,
          email: this.email,
          phone: this.phone,
          sex: this.sex === '男' ? 1 : 0,
          userId: this.userId,
          createTime: this.createTime,
          updateTime: this.updateTime
        }
        updateUser(editData).then(res => {
          console.log(res.data)
          if (res.code === 200) {
            const editDiv = document.querySelector('.editDiv');
            editDiv.style.display = 'none';
          } else {
            console.log('错了')
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    queryUser() {
      try {
        const params = {
          selectUserId: this.selectUserId
        }
        userQueryByid(params).then(res => {
          console.log(res.data)
          if (res.code === 200) {
            console.log(res)
          } else {
            console.log('错了')
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    deleteUser(userId) {
      try{
        logOutUser({userId}).then(res => {
        console.log(res.data);
        if (res.code === 200) {
          console.log(res)
        } else {
          console.log('错了')
        }
      })
    } catch(err) {
      console.log(err)
    }
    },
    editDivHave() {
      const editDiv = document.querySelector('.editDiv');
      editDiv.style.display = 'block';
    },
    addUserDivHave() {
      const addUserDiv = document.querySelector('.addUserDiv');
      addUserDiv.style.display = 'block';
    }
  },
  created() {
    this.getAllUser();
  },
  computed: {
    manage() {
      return this.$store.state.roleId !== 0;
    }
  }
}
</script>

<template>
  <div class="backDrop">
<!--    <top-bar></top-bar>-->
    <div class="tableTopTitle">成员列表：</div>
    <button class="addUserButton" @click="addUserDivHave" v-if="manage">增加用户</button>
    <div>
      用户id：<input type="text" placeholder="请输入用户id以查询" v-model="selectUserId">
      <button @click="queryUser">查询</button>
    </div>
    <div>
      <div class="tableTitle">
        <div v-for="title in tableTitleData" :key="title">{{ title }}</div>
      </div>
      <div class="tableBody">
        <div v-for="(data, item) in tableData" :key="data">
          <div>{{ item + 1 }}</div>
          <div>{{ data.userId }}</div>
          <div>{{ data.userName }}</div>
          <div>{{ data.groupName }}</div>
          <div>{{ data.groupId }}</div>
          <div>{{ data.email }}</div>
          <div>{{ data.phone }}</div>
          <div>{{ data.sex ? '男' : '女' }}</div>
          <div>{{ data.createTime }}</div>
          <div>{{ data.updateTime }}</div>
          <div>{{ data.roleId !== 3 ? '是' : '否' }}{{ data.roleId === 1 ? '(super)' : '' }}</div>
          <div>
            <button @click="editDivHave" v-if="manage">修改</button>
            <button @click="deleteUser(data.userId)" v-if="manage">删除</button>
          </div>
        </div>
      </div>
    </div>
    <div class="editDiv">
      <div>
        用户名称：<input type="text" placeholder="请输入用户名称" v-model="userName">
      </div>
      <div>
        小组id：<input type="text" placeholder="请输入小组id" v-model="groupId">
      </div>
      <div>
        小组名称：<input type="text" placeholder="请输入小组名称" v-model="groupName">
      </div>
      <div>
        角色id：<input type="text" placeholder="请输入角色id" v-model="roleId">
      </div>
      <div>
        角色名称：<input type="text" placeholder="请输入角色名称" v-model="roleName">
      </div>
      <div>
        邮箱：<input type="text" placeholder="请输入邮箱" v-model="email">
      </div>
      <div>
        手机号码：<input type="text" placeholder="请输入手机号码" v-model="phone">
      </div>
      <div>
        性别：<input type="text" placeholder="请输入性别" v-model="sex">
      </div>
      <div>
        用户id：<input type="text" placeholder="请输入用户id" v-model="userId">
      </div>
      <div>
        创建时间：<input type="text" placeholder="请输入创建时间" v-model="createTime">
      </div>
      <div>
        更新时间：<input type="text" placeholder="请输入更新时间" v-model="updateTime">
      </div>
      <div>
        <button style="width: 50px; height: 20px" @click="editUser">确认</button>
      </div>
    </div>
    <div class="addUserDiv">
      <div>
        用户名称：<input type="text" placeholder="请输入用户名称" v-model="userName">
      </div>
      <div>
        小组id：<input type="text" placeholder="请输入小组id" v-model="groupId">
      </div>
      <div>
        角色id：<input type="text" placeholder="请输入角色id" v-model="roleId">
      </div>
      <div>
        邮箱：<input type="text" placeholder="请输入邮箱" v-model="email">
      </div>
      <div>
        手机号码：<input type="text" placeholder="请输入手机号码" v-model="phone">
      </div>
      <div>
        性别：<input type="text" placeholder="请输入性别" v-model="sex">
      </div>
      <div>
        密码：<input type="password" placeholder="请输入密码" v-model="password">
      </div>
      <div>
        <button style="width: 50px; height: 20px" @click="addUser">确认</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tableTopTitle {
  font-size: 30px;
  font-family: fangsong;
  font-weight: bolder;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  padding-top: 20px;
  display: inline-block;
}
.editDiv {
  width: 400px;
  height: 270px;
  background: wheat;
  border: 1px black solid;
  z-index: 3;
  //margin: 10px auto;
  display: none;
  position: absolute;
  top:10%;
  left: 40%;
}
.addUserDiv {
  width: 400px;
  height: 200px;
  background: wheat;
  border: 1px black solid;
  z-index: 3;
  //margin: 10px auto;
  display: none;
  position: absolute;
  top:10%;
  left: 40%;
}
.addUserButton {
  width: 100px;
  height: 25px;
  border-radius: 10px;
  color: black;
  font-family: fangsong;
  font-size: 16px;
}
$titleCount: 12;
.tableTitle {
  width:95%;
  height:50px;
  margin: 30px auto 0;
  div {
    width: 100% / $titleCount;
    height: 100%;
    display: inline-block;
    text-align: center;
    border: 1px black solid;
    border-collapse: collapse;
    align-content: center;
    box-sizing: border-box;
    background-color: whitesmoke;
  }
}
.tableBody {
  width: 95%;
  margin: 0 auto;
  div {
    width: 100%;
    div{
      width: 100% / $titleCount;
      height: 50px;
      display: inline-block;
      text-align: center;
      border: 1px black solid;
      border-collapse: collapse;
      align-content: center;
      box-sizing: border-box;
      button {
        width: 40%;
        height: 70%;
        font-size: 16px;
      }
    }
  }
}
</style>