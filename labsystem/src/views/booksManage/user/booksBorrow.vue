<template>
  <span style="padding-top: 20px;
  padding-left: 25%;
  box-sizing: border-box;">
    <div
      style="width:70%; padding-left: 25%; box-sizing: border-box; padding-left: 25%; box-sizing: border-box;
      font-size:30px; margin:20px 25%; "
    >
      Borrow
    </div>
    <el-form
      ref="form"
      :model="sizeForm"
      label-width="80px"
      style="width:75%; padding-left: 25%; box-sizing: border-box;"
    >
      <el-form-item label="书籍编号" class="borrow-bookid">
        <el-input v-model="sizeForm.bookId" @input="getbookId"></el-input>
      </el-form-item>
      <el-form-item label="起止时间">
        <el-date-picker
          v-model="sizeForm.value"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
          @change="getDate"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit" style="width:18%; height:30%">确认借阅</el-button>
        <el-button style="width:18%; height:30%" @click="offSubmit">取消</el-button>
      </el-form-item>
    </el-form>
  </span>
</template>

<script>
import { Message } from 'element-ui'
import axios from 'axios'
export default {
  name: 'BorrowBooks',
  data () {
    return {
      sizeForm: {
        bookId: '',
        value: ''
      },
      borrowtime: [],
      borrowDuration: 0,
      bookid: ''
    }
  },
  methods: {
    onSubmit () {
      const a = confirm('请再次确认是否借阅？')
      if (a === true) {
        axios({
          method: 'POST',
          url: 'http://localhost:8080/#/booksBorrow/book/queryOne',
          data: {
            bookId: this.bookid,
            borrowDuration: this.borrowDuration,
            returnTime: this.borrowtime[1]
          },
          headers: {
            Authorization: ''
          }
        }).then((response) => {
          Message({
            message: '借阅成功！',
            type: 'success'
          })
        }, function (result) {
          Message({
            showClose: true,
            message: '借阅失败！',
            type: 'error'
          })
        })
        this.sizeForm.bookId = ''
        this.sizeForm.value = ''
      }
    },
    offSubmit () {
      this.sizeForm.bookId = ''
      this.sizeForm.value = ''
    },
    getbookId (value) {
      this.sizeForm.bookId = parseInt(value)
    },
    getDate () {
      for (let i = 0; i < 2; i++) {
        const year = this.sizeForm.value[i].getFullYear()
        const month = this.sizeForm.value[i].getMonth() + 1
        const date = this.sizeForm.value[i].getDate()
        this.borrowtime[i] = String(year) + '-' + String(month) + '-' + String(date)
      }
      function calculateDateInterval (date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000 // 每天的毫秒数
        const diff = Math.abs(date2.getTime() - date1.getTime())
        return diff / oneDay // 返回间隔天数
      }
      // 示例使用
      const date1 = new Date(this.borrowtime[0])
      const date2 = new Date(this.borrowtime[1])
      const interval = calculateDateInterval(date1, date2)
      this.borrowDuration = parseInt(interval)
    }
  }
}
</script>

<style >
</style>
