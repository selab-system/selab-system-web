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
import axios from 'axios'
export default {
  mounted () {
    axios({
      method: 'GET',
      url: 'http://localhost:8080/#/bookselfCheck/borrow/my?cur=1&size=5',
      headers: {
        Authorization: ''
      }
    }).then((response) => {
      console.log(typeof (response))// 格式到底是json还是对象？
      const data = JSON.parse(Object.values(response))
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
      console.log(result.message)
    })
  },
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    changepagemy (page) {
      axios({
        method: 'GET',
        url: `http://localhost:8080/#/bookselfCheck/borrow/my?cur=${page}&size=5`,
        headers: {
          Authorization: ''
        }
      }).then((response) => {
        console.log(typeof (response))// 格式到底是json还是对象？
        const data = JSON.parse(Object.values(response))
        for (let i = 0; i < 5; i++) {
          if (data.data[i] === undefined) {
            this.tableData.splice(i)
            alert('已到达结尾')
            return
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
          this.tableData[i] = k
        }
      }, function (result) {
        console.log(result.message)
      })
    }
  }
}
</script>

<style scoped>
</style>
