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
      label="小组id"
      prop="groupId">
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
          <el-input placeholder="输入新的小组id" v-model="newmemgroup" v-show="changegroup"></el-input>
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
// import axios from 'axios'
import { Message } from 'element-ui'
import {
  savegroup,
  updategroupinfos,
  deletegroup,
  queryAllgroup
} from '../../api/user'
export default {
  mounted () {
    queryAllgroup({ cur: 1, size: 5 }).then((response) => {
      const data = response.data
      for (let i = 0; i < 5; i++) {
        if (data.data[i] === undefined) {
          return
        }
        const k = {}
        k.groupId = data.data[i].groupId
        k.groupName = data.data[i].groupName
        k.createTime = data.data[i].createTime
        k.userVos = data.data[i].userVos
        this.tableData.push(k)
      }
    }, function (result) {
      console.log(result)
    })
  },
  data () {
    return {
      tableData: [],
      tableData2: [],
      search: '',
      index: undefined,
      // 完成编辑按钮是否显示
      finishbutton: false,
      // 编辑按钮是否起作用
      btnclick: true,
      showgroup: true,
      showmember: false,
      user: localStorage.getItem('roleid') === '"3"' ? 0 : 1,
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
        document.getElementsByClassName('cell')[
          index + index * 3 + 3 - (index === 0 ? 0 : 1 * index) + 1
        ].innerHTML = `<input style=" outline:none; 
      border: 1px solid #C0C4CC;" 
      class="inputs" value="">`

        this.finishbutton = !this.finishbutton
        this.index = index
        this.btnclick = !this.btnclick
      }
    },
    handleDelete (index, row) {
      deletegroup({ groupId: parseInt(row.groupId) }).then(() => {
        Message({
          message: '删除成功！',
          type: 'success'
        })
        this.tableData.splice(index, 1)
      }, () => {
        Message({
          message: '删除失败！',
          type: 'error'
        })
      })
    },
    finish (index, row) {
      if (this.index === index) {
        row.groupName = document.getElementsByClassName('inputs')[0].value
        document.getElementsByClassName('cell')[
          index + index * 3 + 3 - (index === 0 ? 0 : 1 * index) + 1
        ].innerHTML = `<span>${row.groupName}</span>`
        updategroupinfos({
          groupId: parseInt(this.tableData[index].groupId),
          groupName: row.groupName,
          createTime: row.createTime
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
      }
    },
    getgroup () {
      this.showgroup = true
      this.showmember = false
    },
    changepage (page) {
      queryAllgroup({ cur: page, size: 5 }).then((response) => {
        const data = response.data
        if (data.data[0] === undefined) {
          this.tableData.splice(0)
          alert('已到达结尾')
          return
        }
        this.tableData = []
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
          this.tableData.push(k)
        }
      }, function (result) {
        console.log(result)
      })
    },
    groupmember (index, row) {
      if (this.tableData[index].userVos.length === undefined) {
        this.tableData2.splice(0)
        Message({
          message: '无小组成员！',
          type: 'success'
        })
      }
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
        updategroupinfos({
          userId: parseInt(this.newmemid),
          groupId: parseInt(this.newmemgroup)
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
      savegroup({
        groupName: this.newgroupname
      }).then((response) => {
        Message({
          message: '创建成功！',
          type: 'success'
        })
        this.newgroupname = ''
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
