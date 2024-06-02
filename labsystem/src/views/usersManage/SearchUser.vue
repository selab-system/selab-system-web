<template>
  <div class="main">
    <div class="input">
      用户名称
      <el-input
        v-model="userName"
        placeholder="请输入用户名称"
        @change="searchuserName"
        @input="recover"
        @blur="blur"
      ></el-input>
      手机号码
      <el-input
        v-model="phonenumber"
        placeholder="请输入手机号码"
        @change="searchphonenumber"
        @input="recover"
        @blur="blur"
      ></el-input>
      用户昵称
      <el-input
        v-model="nickname"
        placeholder="请输入用户昵称"
        @change="searchnickname"
        @input="recover"
        @blur="blur"
      ></el-input>
    </div>
    <el-button type="primary" style="width:7%; height:40px; margin-top:25px;" @click="blur">回到首页</el-button>
    <el-button type="primary" style="width:7%; height:40px; margin-top:25px;" @click="adduser">添加用户</el-button>
    <el-button type="primary" style="width:10%; height:40px; margin-top:25px;" @click="editroleid = !editroleid">修改用户权限</el-button>
    <div class="show-user" v-show="showall" style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); margin-top:2%; margin-bottom:2%; padding-left:2%; box-sizing:border-box;">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%;"
      >
        <el-table-column label="用户编号" width="120">
          <template slot-scope="scope">{{ scope.row.userId }}</template>
        </el-table-column>
        <el-table-column label="用户名称" width="120">
          <template slot-scope="scope">{{ scope.row.userName }}</template>
        </el-table-column>
        <el-table-column prop="nickname" label="用户昵称" show-overflow-tooltip>
        </el-table-column>
         <el-table-column label="邮箱" width="120">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
        <el-table-column prop="groupId" label="小组id" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="phonenumber"
          label="手机号码"
          show-overflow-tooltip
        >
        </el-table-column
        ><el-table-column prop="sex" label="性别" show-overflow-tooltip>
        </el-table-column
        >
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="finish(scope.$index, scope.row)"
              v-show="finishbutton"
              style="width:50%; height:20%"
              >完成编辑</el-button
            >
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              v-show="user"
              style="width:50%; height:20%"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              v-show="user"
              style="width:50%; height:20%"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
     <div class="show-user" v-show="showanswer" style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); margin-top:2%; margin-bottom:2%; padding-left:2%; box-sizing:border-box;">
      <el-table
        ref="multipleTable"
        :data="tableData2"
        tooltip-effect="dark"
        style="width: 100%;"
      >
        <el-table-column label="用户编号" width="120">
          <template slot-scope="scope">{{ scope.row.userId }}</template>
        </el-table-column>
        <el-table-column label="用户名称" width="120">
          <template slot-scope="scope">{{ scope.row.userName }}</template>
        </el-table-column>
        <el-table-column prop="nickname" label="用户昵称" show-overflow-tooltip>
        </el-table-column>
         <el-table-column label="邮箱" width="120">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
        <el-table-column prop="groupId" label="小组id" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="phonenumber"
          label="手机号码"
          show-overflow-tooltip
        >
        </el-table-column
        ><el-table-column prop="sex" label="性别" show-overflow-tooltip>
        </el-table-column
        >
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="finish(scope.$index, scope.row)"
              v-show="finishbutton"
              style="width:50%; height:20%"
              >完成编辑</el-button
            >
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              v-show="user"
              style="width:50%; height:20%"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              v-show="user"
              style="width:50%; height:20%"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="50"
        style="
          width: 70%;
          box-sizing: border-box;
          padding-left: 35%;
          margin-top: 20px;
        "
        @current-change="changepage"
      >
      </el-pagination>
      <div class="show-user" v-show="showall" style=" box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); margin-top:4%; padding-left:2%; box-sizing:border-box;">
      <el-button type="info" style="margin:1% 0 2% 37%; width:10%;">我的信息</el-button>

         <el-button
              size="mini"
              @click="logout"
              style="width:7%; height:20%;"
              >登出</el-button
            >
      <el-table
        ref="multipleTable"
        :data="myData"
        tooltip-effect="dark"
        style="width: 100%"
      >
      <el-table-column prop="groupName" label="小组" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="用户编号" width="180">
          <template slot-scope="scope">{{ scope.row.userId }}</template>
        </el-table-column>
        <el-table-column label="用户名称" width="160">
          <template slot-scope="scope">{{ scope.row.username }}</template>
        </el-table-column>
        <el-table-column label="邮箱" width="160">
          <template slot-scope="scope">{{ scope.row.email }}</template>
        </el-table-column>
        <el-table-column
          prop="phonenumber"
          label="手机号码"
          show-overflow-tooltip
        >
        </el-table-column
        ><el-table-column prop="sex" label="性别" show-overflow-tooltip>
        </el-table-column
        >
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="myfinish(scope.$index, scope.row)"
              v-show="myfinishbutton"
              style="width:50%; height:20%"
              >完成编辑</el-button
            >
            <el-button
              size="mini"
              @click="myhandleEdit(scope.$index, scope.row)"
              style="width:50%; height:20%"
              >Edit</el-button
            >
          </template>
        </el-table-column>
      </el-table>

    </div>
    <div style="margin:3% 0 2% 44%; font-size:20px;" v-show="ifadduser">添加用户</div>
    <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); padding-left:20px; box-sizing:borser-box; padding-top:10px; padding-bottom:20px;" v-show="ifadduser" >
    <span style="color:#909399; margin-top:3%; margin-right:1%;">用户名称：</span><el-input  v-model="username" placeholder="请输入用户名称" style="width:60%; margin:2% 32% 1% 0;"></el-input>
    <span style="color:#909399; margin-top:2%; margin-right:1%;">小组id:</span><el-input v-model="groupId" placeholder="请输入小组id" style="width:60%; margin:1% 0; margin-right:35%;"></el-input>
    <span style="color:#909399; margin-top:2%; margin-right:1%;">角色id:</span><el-input  v-model="roleId" placeholder="请输入角色id ( 1 超级管理员 2管理员 3 用户 )" style="width:60%; margin:1% 0; margin-right:35%;"></el-input>
    <span style="color:#909399; margin-top:2%; margin-right:1%;">邮箱:</span><el-input  v-model="email" placeholder="请输入邮箱" style="width:60%; margin:1% 0; margin-right:35%;"></el-input>
    <span style="color:#909399; margin-top:2%; margin-right:1%;">手机号码:</span><el-input  v-model="phone" placeholder="请输入手机号码" style="width:60%; margin:1% 0; margin-right:33%;"></el-input>
    <span style="color:#909399; margin-top:2%; margin-right:1%;">性别:</span><el-input  v-model="sex" placeholder="请输入性别" style="width:60%; margin:1% 0; margin-right:36%;"></el-input>
    <span style="color:#909399; margin-top:2%; margin-right:1%;">密码:</span><el-input v-model="password" placeholder="请输入密码" style="width:60%; margin:1% 0; margin-right:35%;"></el-input>
    <el-button type="primary" style="width:7%; height:35px; margin-left:25px; margin-top:2%;"  v-show="ifadduser" @click="yesadduser">确认添加</el-button>
   </div>
    <div style="margin:3% 0 2% 44%; font-size:20px;" v-show="editroleid">修改用户权限</div>
    <div style="width:100%; box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); padding-left:20px; box-sizing:borser-box; padding-top:10px; padding-bottom:20px;" v-show="editroleid" >
    <span style="color:#909399; margin-top:3%; margin-right:1%;">用户编号：</span><el-input  v-model="userid" placeholder="请输入用户id" style="width:60%; margin:2% 32% 1% 0;"></el-input>
    <span style="color:#909399; margin-top:2%; margin-right:1%;">角色id:</span><el-input  v-model="roleid" placeholder="请输入角色id ( 1 超级管理员 2管理员 3 用户 )" style="width:60%; margin:1% 0; margin-right:35%;"></el-input>
    <el-button type="primary" style="width:7%; height:35px; margin-left:25px; margin-top:2%;"  @click="editRole">确认修改</el-button>
   </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Message } from 'element-ui'
export default {
  mounted () {
    axios({
      method: 'GET',
      url: 'http://localhost:8080/#/SearchUser/user/query?cur=1&size=5',
      headers: {
        Authorization: ''
      }
    }).then((response) => {
      const data = JSON.parse(response)
      for (let i = 0; i < 5; i++) {
        if (data.data[i] === undefined) {
          this.tableData.splice(i)
          Message({
            message: '已展示全部用户！',
            type: 'success'
          })
          return
        }
        const k = {}
        k.userName = data.data[i].userName
        k.groupId = data.data[i].groupId
        k.groupName = data.data[i].groupName
        k.roleId = data.data[i].roleId
        k.roleName = data.data[i].roleName
        k.email = data.data[i].email
        k.phone = data.data[i].phone
        k.sex = data.data[i].sex
        k.userId = data.data[i].userId
        k.createTime = data.data[i].createTime
        k.updateTime = data.data[i].updateTime
        this.tableData.splice(k)
      }
    }, function (result) {
      console.log(result.message)
    })
    axios({
      method: 'GET',
      url: `http://localhost:8080/#/SearchUser/user/queryById/${localStorage.getItem('userId')}`
    }).then(response => {
      const data = JSON.parse(response)
      this.myData[0].email = data.data.email
      this.myData[0].phonenumber = data.data.phone
      this.myData[0].sex = data.data.sex === 1 ? '男' : '女'
      this.myData[0].roleId = data.data.roleId
      this.myData[0].groupId = data.data.groupId
      this.myData[0].roleName = data.data.roleName
      this.myData[0].createTime = data.data.createTime
      this.myData[0].updateTime = data.data.updateTime
    }, result => {
      console.log(result)
    })
  },
  data () {
    return {
      userName: '',
      phonenumber: '',
      nickname: '',
      value1: '',
      value2: '',
      // 表格
      tableData: [],
      tableData2: [],
      myData: [
        {
          username: localStorage.getItem('username'),
          groupId: localStorage.getItem('groupId'),
          userId: localStorage.getItem('userId'),
          phonenumber: '',
          sex: '',
          email: '',
          groupName: '',
          roleId: '',
          createTime: '',
          updateTime: '',
          roleName: ''
        }
      ],
      // 开关
      valueswitch: true,
      // 展示搜索结果
      showall: true,
      showanswer: false,
      // 记录tableData2的值
      // 编辑按钮的下标
      index: undefined,
      // 完成编辑按钮是否显示
      finishbutton: false,
      // 编辑按钮是否起作用
      btnclick: true,
      // 用户身份
      user: localStorage.getItem('roleId') === '"3"' ? 0 : 1,
      username: '',
      groupId: '',
      roleId: '',
      email: '',
      phone: '',
      sex: '',
      password: '',
      // 修改我的信息
      myfinishbutton: false,
      ifadduser: false,
      editroleid: false,
      userid: '',
      roleid: ''
    }
  },
  methods: {
    searchuserName (name) {
      let num
      this.tableData2 = []
      for (let i = 0; i < this.tableData.length; i++) {
        num = 0
        // console.log(this.tableData[i].name)
        for (let j = 0; j < name.length; j++) {
          if (name[j] === this.tableData[i].name[j]) {
            num++
          }
        }
        if (num === name.length) {
          this.tableData2 = this.tableData2.concat([this.tableData[i]])
        }
      }
      this.showall = false
      this.showanswer = true
    },
    // 失去焦点时
    blur () {
      this.showall = true
      this.showanswer = false
    },
    searchphonenumber (phonenumber) {
      this.tableData2 = []
      for (let i = 0; i < this.tableData.length; i++) {
        let num = 0
        for (let j = 0; j < phonenumber.length; j++) {
          if (phonenumber[j] === this.tableData[i].phonenumber[j]) {
            num++
          }
        }
        if (num === phonenumber.length) {
          this.tableData2 = this.tableData2.concat([this.tableData[i]])
        }
      }
      this.showall = false
      this.showanswer = true
    },
    searchnickname (nickname) {
      this.tableData2 = []
      for (let i = 0; i < this.tableData.length; i++) {
        let num = 0
        for (let j = 0; j < nickname.length; j++) {
          if (nickname[j] === this.tableData[i].nickname[j]) {
            num++
          }
        }
        if (num === nickname.length) {
          this.tableData2 = this.tableData2.concat([this.tableData[i]])
        }
      }
      this.showall = false
      this.showanswer = true
    },
    recover () {
      this.tableData2 = []
      this.showall = true
      this.showanswer = false
    },
    finish (index, row) {
      if (this.index === index) {
        for (let i = 0; i < 6; i++) {
          if (document.getElementsByClassName('inputs')[0].value === '') {
            document.getElementsByClassName('cell')[
              index + index * 8 + 8 - (index === 0 ? -1 : 1 * index - 1) + i
            ].innerHTML = `<span>${row[Object.keys(row)[i]]}</span>`
          } else {
            row[Object.keys(row)[i]] = document.getElementsByClassName('inputs')[0].value
            document.getElementsByClassName('cell')[
              index + index * 8 + 8 - (index === 0 ? -1 : 1 * index - 1) + i
            ].innerHTML = `<span>${
              document.getElementsByClassName('inputs')[0].value
            }</span>`
          }
          if (i === 5) {
            axios({
              method: 'POST',
              url: 'http://localhost:8080/#/SearchUser/user/update',
              data: {
                userName: row.userName,
                groupId: parseInt(row.groupId),
                groupName: row.groupName,
                roleId: parseInt(row.roleId),
                roleName: row.roleName,
                email: row.email,
                phone: row.phonenumber,
                sex: row.sex === '男' ? 1 : 0,
                userId: parseInt(row.userId),
                createTime: row.createTime,
                updateTime: row.updateTime

              }
            }).then(response => {

            }, result => {
              console.log(result.message)
            })
            this.finishbutton = !this.finishbutton
            this.btnclick = !this.btnclick
            return
          }
        }
      }
    },
    handleEdit (index, row) {
      if (row.roleId === 3) {
        if (localStorage.getItem('roleId') === '"2"') {
          return
        }
      }
      if (this.btnclick) {
        for (let i = 0; i < 6; i++) {
          document.getElementsByClassName('cell')[
            index + index * 9 + 9 - (index === 0 ? 0 : 1 * index + 1) + i
          ].innerHTML = `<input style=" outline:none; 
      border: 1px solid #C0C4CC;" 
      class="inputs" value="">`
        }
        this.finishbutton = !this.finishbutton
        this.index = index
        this.btnclick = !this.btnclick
      }
    },
    handleDelete (index, row) {
      if (row.roleId === 3) {
        if (localStorage.getItem('roleId') === '"2"') {
          return
        }
      }
      console.log(index, row)
      this.tableData.splice(index, 1)
    },
    changepage (page) {
      axios({
        method: 'GET',
        url: `http://localhost:8080/#/SearchUser/user/query?cur=${page}&size=5`
      }).then((response) => {
        const data = JSON.parse(response)
        for (let i = 0; i < 5; i++) {
          if (data.data[i] === undefined) {
            this.tableData.splice(i)
            Message({
              message: '已展示全部用户！',
              type: 'success'
            })
            return
          }
          const k = {}
          k.userName = data.data[i].userName
          k.groupId = data.data[i].groupId
          k.groupName = data.data[i].groupName
          k.roleId = data.data[i].roleId
          k.roleName = data.data[i].roleName
          k.email = data.data[i].email
          k.phone = data.data[i].phone
          k.sex = data.data[i].sex
          k.userId = data.data[i].userId
          k.createTime = data.data[i].createTime
          k.updateTime = data.data[i].updateTime
          this.tableData[i] = k
        }
      }, (result) => {
        console.log(result)
      })
    },
    logout () {
      axios({
        method: 'GET',
        url: `http://localhost:8080/#/SearchUser/user/logout?userId=${parseInt(this.myData[0].userId)}`
      }).then((response) => {
        Message({
          message: '登出成功！',
          type: 'success'
        })
      }, (result) => {
        Message({
          message: '登出失败！',
          type: 'error'
        })
      })
    },
    myhandleEdit (index, row) {
      for (let i = 0; i < 5; i++) {
        document.getElementsByClassName('cell')[
          index + 16 + i
        ].innerHTML = `<input style=" outline:none; 
      border: 1px solid #C0C4CC;" 
      class="inputs" value="">`
      }
      this.myfinishbutton = true
    },
    myfinish (index, row) {
      for (let i = 0; i < 5; i++) {
        if (document.getElementsByClassName('inputs')[0].value === '') {
          document.getElementsByClassName('cell')[
            index + 16 + i
          ].innerHTML = `<span>${row[Object.keys(row)[i]]}</span>`
        } else {
          row[Object.keys(row)[i]] = document.getElementsByClassName('inputs')[0].value
          document.getElementsByClassName('cell')[
            index + 16 + i
          ].innerHTML = `<span>${
              document.getElementsByClassName('inputs')[0].value
            }</span>`
        }
      }
      axios({
        method: 'POST',
        url: 'http://localhost:8080/#/SearchUser/user/update',
        data: {
          userName: this.myData[0].username,
          groupId: parseInt(this.myData[0].groupId),
          groupName: this.myData[0].groupName,
          roleName: this.myData[0].roleName,
          roleId: parseInt(this.myData[0].roleId),
          email: this.myData[0].email,
          phone: this.myData[0].phonenumber,
          sex: this.myData[0].sex === '男' ? 1 : 0,
          userId: parseInt(this.myData[0].userId),
          createTime: this.myData[0].createTime,
          updateTime: this.myData[0].updateTime
        }
      }).then(response => {
        Message({
          message: '修改成功！',
          type: 'success'
        })
      }, result => {
        Message({
          message: '修改失败！',
          type: 'error'
        })
      })
      this.myfinishbutton = false
    },
    adduser () {
      this.ifadduser = !this.ifadduser
    },
    yesadduser () {
      axios({
        method: 'POST',
        url: 'http://localhost:8080/#/SearchUser/user/save',
        data: {
          userName: this.username,
          groupId: parseInt(this.groupId),
          roleId: parseInt(this.roleId),
          email: this.email,
          phone: this.phone,
          sex: this.sex === '男' ? 1 : 0,
          password: this.password
        }
      }).then(response => {
        Message({
          message: '添加成功！',
          type: 'success'
        })
        this.username = ''
        this.groupId = ''
        this.roleId = ''
        this.email = ''
        this.phone = ''
        this.sex = ''
        this.password = ''
      }, result => {
        Message({
          message: '添加失败，请重新输入或检查网络设置！',
          type: 'error'
        })
      })
    },
    editRole () {
      if (this.roleid === '2') {
        if (parseInt(this.myData[0].roleId) !== 3) {
          Message({
            message: '修改失败，请检查权限！',
            type: 'error'
          })
        }
      }
      if (this.roleid === '3') {
        if (parseInt(this.myData[0].roleId) !== 3) {
          Message({
            message: '修改失败，请检查权限！',
            type: 'error'
          })
        }
      }
      axios({
        method: 'GET',
        url: 'http://localhost:8080/#/SearchUser/user/role/update',
        data: {
          roleId: parseFloat(this.roleid),
          userId: parseFloat(this.userid)
        }
      }).then(response => {
        Message({
          message: '修改成功！',
          type: 'success'
        })
        this.roleid = ''
        this.userid = ''
      }, result => {
        Message({
          message: '修改失败，请检查输入或者权限和网络问题！',
          type: 'error'
        })
      })
    }
  }

}

</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  /* background-color: pink; */
}
.input {
  margin-top: 24px;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  color: #606266;
  font-weight: 700;
}
.el-input {
  width: 210px;
  height: 32px;
  margin-left: 4px;
  margin-right: 10px;
}
.el-select {
  margin-right: 4px;
  margin-left: 10px;
}
.el-button--primary:last-child {
  background-color: #fff;
  color: #606266;
  border-color: #606266;
}
.block {
  display: inline;
  margin-left: 4px;
  margin-right: 10px;
  width: 227px;
}
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 250px;
  height: 40px;
}
.show-user {
  width: 100%;
  padding-top: 30px;
  box-sizing: border-box;
}
.line {
  width: 100%;
  height: 20px;
  margin: 0 auto;
  background-color: pink;
}
.line input {
  margin-left: 15px;
}
</style>
