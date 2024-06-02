<template>
  <div style="margin-top:1%;">
    <!-- <el-input
  placeholder="输入关键字进行过滤"
  v-model="filterText"
  style="margin-top:8%; width:80%; margin-bottom:5%;">
</el-input>

<el-tree
  class="filter-tree"
  :data="data"
  :props="defaultProps"
  default-expand-all
  :filter-node-method="filterNode"
  ref="tree">
</el-tree> -->
<el-table
    :data="tableData.filter(data => !search || data.groupname.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    v-show="showgroup">
    <el-table-column
      label="组名"
      prop="groupName">
    </el-table-column>
    <el-table-column
      label="创建时间"
      prop="createTime">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入小组名搜索"/>
      </template>
      <template slot-scope="scope">
         <el-button
              size="mini"
              @click="finish(scope.$index, scope.row)"
              v-show="finishbutton"
              >完成编辑</el-button
            >
        <el-button
          size="mini"
          @click="groupmember(scope.$index, scope.row)">展示</el-button>
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
          v-show="user">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          v-show="user">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-table
    :data="tableData2.filter(data => !search || data.groupname.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
    v-show="showmember">
    <el-table-column
      label="组名"
      prop="groupName">
    </el-table-column>
     <el-table-column
      label="创建时间"
      prop="createTime">
    </el-table-column>
    <el-table-column
      label="用户名称"
      prop="userName">
    </el-table-column>
    <el-table-column
      label="邮箱"
      prop="email">
    </el-table-column>
    <el-table-column
      label="性别"
      prop="sex">
    </el-table-column>
    <el-table-column
      label="手机号码"
      prop="phone">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handlemember(scope.$index)"
          v-show="user">删除组员</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
        background
        layout="prev, pager, next"
        :total="50"
        style="
          width: 70%;
          box-sizing: border-box;
          padding-left: 35%;
          margin-top: 2%;
        "
        @current-change="changepage"
      >
      </el-pagination>
       <el-button
          size="mini"
          type="primary"
          @click="getgroup"
          style="margin:0% 0 0 92%;"
          >返回首页</el-button>
          <el-button
          size="mini"
          type="primary"
          v-show="user"
          @click="addinput = !addinput"
          style="margin:2% 0 0 92%;"
          >增加小组</el-button>
          <el-input placeholder="输入小组名称"  v-model="newgroupname" v-show="addinput" style="margin-top:2%; margin-bottom:2%;"></el-input>
          <!-- <el-input placeholder="输入小组id" v-model="newgroupid" v-show="addinput"></el-input> -->
           <el-button
          size="mini"
          type="primary"
          v-show="addinput"
          @click="addgroup"
          style="margin:2% 0 0 92%;"
          >增加</el-button>
          <el-input placeholder="输入用户id"  v-model="newmemid" v-show="changegroup" style="margin-top:2%; margin-bottom:2%;"></el-input>
          <el-input placeholder="输入新的小组id" v-model="newmemgroupid" v-show="changegroup"></el-input>
             <el-button
          size="mini"
          type="primary"
          v-show="changegroup"
          @click="handlemember"
          style="margin:2% 0 0 92%;"
          >修改</el-button>
  </div>
</template>

<script>
import axios from 'axios'
import { Message } from 'element-ui'
export default {
  mounted () {
    axios({
      method: 'GET',
      url: 'http://localhost:8080/#/SearchDepartment/group/queryAll?cur=1&szie=5'
    }).then((response) => {
      const data = JSON.parse(response)
      for (let i = 0; i < 5; i++) {
        if (data.data[i] === undefined) {
          return
        }
        const k = {}
        k.groupId = data.data.groupId
        k.groupName = data.data.groupName
        k.createTime = data.data.createTime
        k.userVos = data.data.userVos
        this.tableData.push(k)
      }
    }, function (result) {
      console.log(result.message)
    })
  },
  data () {
    return {
      tableData: [],
      // [{
      //   groupname: '2016-05-02',
      //   name: '王小虎'
      // }, {
      //   groupname: '2016-05-04',
      //   name: '王小虎'
      // }, {
      //   groupname: '2016-05-01',
      //   name: '王小亮'
      // }, {
      //   groupname: '2016-05-03',
      //   name: '王小虎'
      // }],
      // tableData2:
      // [{
      //   groupName: '2016-05-02',
      //   name: '王小虎'
      // }],
      tableData2: [],
      search: '',
      index: undefined,
      // 完成编辑按钮是否显示
      finishbutton: false,
      // 编辑按钮是否起作用
      btnclick: true,
      showgroup: true,
      showmember: false,
      user: localStorage.getItem('roleId') === '"3"' ? 0 : 1,
      addinput: false,
      newgroupname: '',
      // newid: '',
      changegroup: false,
      newmemid: '',
      newmemgroup: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      if (this.btnclick) {
        for (let i = 0; i < 2; i++) {
          document.getElementsByClassName('cell')[
            index + index * 3 + 3 - (index === 0 ? 0 : 1 * index) + i
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
      axios({
        method: 'GET',
        url: `http://localhost:8080/#/SearchDepartment/group/delete${this.tableData[index].groupId}`
      }).then(() => {
        Message({
          message: '删除成功！',
          type: 'success'
        })
      }, () => {
        Message({
          message: '删除失败！',
          type: 'error'
        })
      })
      this.tableData.splice(index, 1)
    },
    finish (index, row) {
      if (this.index === index) {
        for (let i = 0; i < 2; i++) {
          if (document.getElementsByClassName('inputs')[0].value === '') {
            document.getElementsByClassName('cell')[
              index + index * 3 + 3 - (index === 0 ? 0 : 1 * index) + i
            ].innerHTML = `<span>${row[Object.keys(row)[i]]}</span>`
          } else {
            row[Object.keys(row)[i]] = document.getElementsByClassName('inputs')[0].value
            document.getElementsByClassName('cell')[
              index + index * 3 + 3 - (index === 0 ? 0 : 1 * index) + i
            ].innerHTML = `<span>${
              document.getElementsByClassName('inputs')[0].value
            }</span>`
          }
          if (i === 2) {
            axios({
              method: 'POST',
              url: 'http://localhost:8080/#/SearchDepartment/group/update',
              data: {
                groupId: this.tableData[index].groupId,
                groupName: row.groupName,
                createTime: row.createTime
              }
            }).then(response => {
              Message({
                message: '更新成功！',
                type: 'success'
              })
            }, result => {
              Message({
                message: '更新失败！',
                type: 'error'
              })
            })
            this.finishbutton = !this.finishbutton
            this.btnclick = !this.btnclick
            return
          }
        }
        this.finishbutton = !this.finishbutton
        this.btnclick = !this.btnclick
      }
    },
    getgroup () {
      this.showgroup = true
      this.showmember = false
    },
    changepage (page) {
      axios({
        method: 'GET',
        url: `http://localhost:8080/#/SearchDepartment/group/queryAll?cur=${page}&szie=5`
      }).then((response) => {
        const data = JSON.parse(response)
        for (let i = 0; i < 5; i++) {
          if (data.data[i] === undefined) {
            this.tableData.splice(i)
            return
          }
          const k = {}
          k.groupId = data.data.groupId
          k.groupName = data.data.groupName
          k.createTime = data.data.createTime
          k.userVos = data.data.userVos
          this.tableData[i] = k
        }
      }, function (result) {
        console.log(result.message)
      })
    },
    groupmember (index, row) {
      // console.log(index, row)
      // this.nowgroup = row.groupName
      // this.nowgroupId = row.groupId
      // this.nowcreatTime = row.creatTime
      for (let i = 0; i < this.tableData[index].userVos.length; i++) {
        this.tableData2.push(this.tableData[index].userVos[i])
      }
      this.showmember = true
      this.showgroup = false
    },
    handlemember (index) {
      const a = confirm('删除组员需要输入新的小组，请再次确认是否删除？')
      if (a) {
        this.changegroup = true
        axios({
          method: 'GET',
          url: 'http://localhost:8080/#/SearchDepartment/user/group/update',
          data: {
            userId: parseInt(this.newmemid),
            groupId: parseInt(this.newmemgroup)
          }
        }).then(() => {
          Message({
            message: '删除成功！',
            type: 'success'
          })
          this.changegroup = false
          this.newmemid = ''
          this.newmemgroup = ''
        }, () => {
          Message({
            message: '删除失败！',
            type: 'error'
          })
        })
        this.tableData2.splice(index, 1)
      }
    },
    addgroup () {
      axios({
        method: 'POST',
        url: 'http://localhost:8080/#/SearchDepartment/user/group/save',
        data: {
          groupName: this.newgroupname
        }
      }).then((response) => {
        Message({
          message: '创建成功！',
          type: 'success'
        })
      }, function (result) {
        Message({
          message: '创建失败！',
          type: 'error'
        })
      })
    }
  }

}
</script>

<style scoped>
</style>
