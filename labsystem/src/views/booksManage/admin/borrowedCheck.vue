<template>
<span>
  <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); padding-left:2%; box-sizing:border-box; margin:20px 0; padding-bottom:20px;">
    <br>
    <span style="font-size: 18px; line-height: 50px; margin:0 41%; background-color: #EBEEF5; padding:10px 10px; border-radius: 30px; color:#606266;">查询借阅记录</span>
    <br><br>
    <div>
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width:100%;"
      >
         <el-table-column label="书名" prop="bookName"> </el-table-column>
        <el-table-column label="借阅id" prop="borrowId"> </el-table-column>
        <el-table-column label="书籍id" prop="fbookId"> </el-table-column>
        <el-table-column label="借阅用户id" prop="borrowUser"> </el-table-column>
        <el-table-column label="借阅用户名称" prop="borrowUserName"> </el-table-column>
        <el-table-column label="借阅时长" prop="borrowDuration"> </el-table-column>
        <el-table-column label="状态" prop="status"> </el-table-column>
        <el-table-column label="借阅时间" prop="borrowTime"> </el-table-column>
        <el-table-column label="归还时间" prop="returnTime"> </el-table-column>
        <el-table-column align="right">
          <template slot="header" >
            <el-input v-model="search" size="mini" placeholder="输入书名搜索" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="50"
      style="
        width: 100%;
        box-sizing: border-box;
        padding-left: 36%;
        margin-top: 20px;
      "
      @current-change="change"
    >
    </el-pagination>
  </div>
  <div style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); padding-left:2%; box-sizing:border-box; margin:20px 0; padding-bottom:20px;">
    <br>
    <span style="font-size: 18px; line-height: 50px; margin:0 41%; background-color: #EBEEF5; padding:10px 10px; border-radius: 30px; color:#606266;">查询借阅记录</span>
    <br><br>
    <div>
      <el-table
        :data="
          tableData2.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width:100%;"
      >
         <el-table-column label="书名" prop="bookName"> </el-table-column>
        <el-table-column label="借阅id" prop="borrowId"> </el-table-column>
        <el-table-column label="书籍id" prop="fbookId"> </el-table-column>
        <el-table-column label="借阅用户id" prop="borrowUser"> </el-table-column>
        <el-table-column label="借阅用户名称" prop="borrowUserName"> </el-table-column>
        <el-table-column label="借阅时长" prop="borrowDuration"> </el-table-column>
        <el-table-column label="状态" prop="status"> </el-table-column>
        <el-table-column label="借阅时间" prop="borrowTime"> </el-table-column>
        <el-table-column label="归还时间" prop="returnTime"> </el-table-column>
        <el-table-column align="right">
          <template slot="header" >
            <el-input v-model="search" size="mini" placeholder="输入书名搜索" />
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="50"
      style="
        width: 100%;
        box-sizing: border-box;
        padding-left: 36%;
        margin-top: 20px;
      "
      @current-change="change2"
    >
    </el-pagination>
  </div>
  </span>
</template>

<script>
// import axios from 'axios'
import {
  getborrowrecord,
  allnoreturn
} from '../../../api/book'
export default {
  mounted () {
    getborrowrecord({ cur: 1, size: 5 }).then((response) => {
      const data = response.data
      for (let i = 0; i < 5; i++) {
        if (data.data[i] === undefined) {
          this.tableData.splice(i, 1)
        }
        const k = {}
        k.borrowId = data.data.borrowId
        k.bookId = data.data.bookId
        k.bookName = data.data.bookName
        k.borrowUser = data.data.borrowUser
        k.borrowUserName = data.data.borrowUserName
        k.borrowDuration = data.data.borrowDuration
        if (data.data[i].status === 0) {
          k.status = '未归还'
        }
        if (data.data[i].status === 1) {
          k.status = '已归还'
        }
        k.borrowTime = data.data.borrowTime
        k.returnTime = data.data.returnTime
        this.tableData.push(k)
      }
    }, function (result) {
      console.log(result)
    })
    allnoreturn({ cur: 1, size: 5 }).then(response => {
      const data = response.data
      for (let i = 0; i < 5; i++) {
        if (data.data[i] === undefined) {
          this.tableData2.splice(i, 1)
        }
        const k = {}
        k.borrowId = data.data.borrowId
        k.bookId = data.data.bookId
        k.bookName = data.data.bookName
        k.borrowUser = data.data.borrowUser
        k.borrowUserName = data.data.borrowUserName
        k.borrowDuration = data.data.borrowDuration
        if (data.data[i].status === 0) {
          k.status = '未归还'
        }
        if (data.data[i].status === 1) {
          k.status = '已归还'
        }
        k.borrowTime = data.data.borrowTime
        k.returnTime = data.data.returnTime
        this.tableData2.push(k)
      }
    }, result => [
      console.log(result)
    ])
  },
  data () {
    return {
      tableData: [],
      tableData2: [],
      search: '',
      // 编辑按钮的下标
      index: undefined,
      // 完成编辑按钮是否显示
      finishbutton: false,
      // 编辑按钮是否起作用
      btnclick: true,
      user: localStorage.getItem('roleid') === '"2"'
    }
  },
  methods: {
    change (page) {
      getborrowrecord({ cur: page, size: 5 }).then((response) => {
        const data = response.data
        if (data.data[0] === undefined) {
          this.tableData.splice(0)
          alert('已到达结尾')
          return
        }
        this.tableData = []
        for (let i = 0; i < 5; i++) {
          if (data.data[i] === undefined) {
            this.tableData.splice(i, 1)
          }
          const k = {}
          k.borrowId = data.data[i].borrowId
          k.bookId = data.data[i].bookId
          k.bookName = data.data[i].bookName
          k.borrowUser = data.data[i].borrowUser
          k.borrowUserName = data.data[i].borrowUserName
          k.borrowDuration = data.data[i].borrowDuration
          if (data.data[i].status === 0) {
            k.status = '未归还'
          }
          if (data.data[i].status === 1) {
            k.status = '已归还'
          }
          k.borrowTime = data.data.borrowTime
          k.returnTime = data.data.returnTime
          this.tableData.push(k)
        }
      }, function (result) {
        console.log(result)
      })
    }
  },
  change2 (page) {
    allnoreturn({ cur: page, size: 5 }).then(response => {
      const data = response.data
      if (data.data[0] === undefined) {
        this.tableData2.splice(0)
        alert('已到达结尾')
        return
      }
      this.tableData2 = []
      for (let i = 0; i < 5; i++) {
        if (data.data[i] === undefined) {
          this.tableData2.splice(i, 1)
        }
        const k = {}
        k.borrowId = data.data.borrowId
        k.bookId = data.data.bookId
        k.bookName = data.data.bookName
        k.borrowUser = data.data.borrowUser
        k.borrowUserName = data.data.borrowUserName
        k.borrowDuration = data.data.borrowDuration
        if (data.data[i].status === 0) {
          k.status = '未归还'
        }
        if (data.data[i].status === 1) {
          k.status = '已归还'
        }
        k.borrowTime = data.data.borrowTime
        k.returnTime = data.data.returnTime
        this.tableData2.push(k)
      }
    }, result => [
      console.log(result)
    ])
  }
}
</script>

<style scoped>
.main {
  border-color: #000;
  border: 1px solid #000;
}
</style>
