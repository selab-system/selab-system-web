<template>
  <div class="main">
    <div style="width: 84%; background-color: #f2f6fc; height: 100%; margin-left:8%;">
      <div
        style="
          margin-bottom: 30px;
          font-size: 25px;
          margin-left: 43%;
          margin-top: 5%;
          color: #409eff;
          background-color: #f2f6fc;
           padding-top:20px;
          box-sizing:boder-box;
        "
      >
        我的借阅
      </div>
      <el-table :data="tableData" style="width: 100%;">
        <el-table-column prop="bookName" label="书籍名称" width="180">
        </el-table-column>
        <el-table-column prop="borrowId" label="借阅编号" width="180">
        </el-table-column>
        <el-table-column prop="borrowTime" label="借阅时间" width="180">
        </el-table-column>
        <el-table-column prop="returnTime" label="归还时间" width="180">
        </el-table-column>
        <el-table-column prop="borrowDuration" label="借阅时长" width="180">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="180">
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
  background
  layout="prev, pager, next"
  :total="50"
  style="margin-left:36%; margin-top:2%;"
  @current-page="changepagemy">
</el-pagination>
  </div>
</template>

<script>
// import axios from 'axios'
import {
  getmyborrowrecord
} from '../../../api/book'
export default {
  mounted () {
    getmyborrowrecord({ cur: 1, size: 5 }).then((response) => {
      const data = response.data
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
        k.borrowTime = data.data[i].borrowTime
        k.returnTime = data.data[i].returnTime
        this.tableData.push(k)
      }
    }, function (result) {
      console.log(result)
    })
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    changepagemy (page) {
      console.log(page)
      getmyborrowrecord({ cur: page, size: 5 }).then((response) => {
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
            alert('已到达结尾')
            return
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
          k.borrowTime = data.data[i].borrowTime
          k.returnTime = data.data[i].returnTime
          this.tableData.push(k)
        }
      }, function (result) {
        console.log(result)
      })
    }
  }
}
</script>

<style scoped>
</style>
