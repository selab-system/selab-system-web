<script>
import TopBar from "@/components/usersManagementComponent/topBar.vue";
import {groupQueryAll, logOutUser, saveUser, updateUser, userQuery, userQueryByid} from "@/api/UserHome/UserHome";

export default {
  name: "manageMembers",
  components: {TopBar},
  data() {
    return {
      tableTitleData: [
          "序号",
          "ID",
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
        {
          id: 1,
          name: '李四',
          department: '科学打败魔法',
          departmentId: '1',
          isManager: true,
          isSuperManager: true
        },
        {
          id: 9,
          name: '李五',
          department: '科学打败魔法',
          departmentId: '1',
          isManager: false,
          isSuperManager: false
        },
        {
          id: 52,
          name: '小四',
          department: 'T阵营',
          departmentId: '2',
          isManager: false,
          isSuperManager: false
        }
      ],
      userName: '',
      groupId: 0,
      roleId: 0,
      email: '',
      phone: '',
      sex: -1,
      password: '',
      groupName: '',
      roleName: '',
      userId: 0,
      createTime: '',
      updateTime: ''
    }
  },
  methods: {
    getAllUser() {
      try {
        userQuery().then(res => {
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
          sex: this.sex,
          password: this.password
        }
        saveUser(addData).then(res => {
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
    editUser() {
      try {
        const addData = {
          userName: this.userName,
          groupId: this.groupId,
          groupName: this.groupName,
          roleId: this.roleId,
          roleName: this.roleName,
          email: this.email,
          phone: this.phone,
          sex: this.sex,
          userId: this.userId,
          createTime: this.createTime,
          updateTime: this.updateTime
        }
        updateUser(addData).then(res => {
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
    queryUser() {
      try {
        const addData = {
          groupId: this.groupId,
          userId: this.userId
        }
        userQueryByid(addData).then(res => {
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
    deleteUser() {
      try{
      logOutUser(this.userId).then(res => {
        console.log(res.data)
        if (res.code === 200) {
          console.log(res)
        } else {
          console.log('错了')
        }
      })
    } catch(err) {
      console.log(err)
    }
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
    <button class="addUserButton" @click="addUser" v-if="manage">增加用户</button>
    <button @click="queryUser">查询</button>
    <div>
      <div class="tableTitle">
        <div v-for="title in tableTitleData" :key="title">{{ title }}</div>
      </div>
      <div class="tableBody">
        <div v-for="(data, item) in tableData" :key="data">
          <div>{{ item + 1 }}</div>
          <div>{{ data.id }}</div>
          <div>{{ data.name }}</div>
          <div>{{ data.department }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.isManager ? '是' : '否' }}{{ data.isSuperManager ? '(super)' : '' }}</div>
          <div>
            <button @click="editUser" v-if="manage">修改</button>
            <button @click="deleteUser" v-if="manage">删除</button>
          </div>
        </div>
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