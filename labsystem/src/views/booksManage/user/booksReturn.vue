<template>
  <span >
    <div
      style="width:70%; padding-left: 25%; box-sizing: border-box; padding-left: 25%; box-sizing: border-box;
      font-size:30px; margin:20px 25%;"
    >
      Return
    </div>
    <el-form
      ref="form"
      :model="sizeForm"
      label-width="80px"
      style="width:75%; padding-left: 25%; box-sizing: border-box;"
    >
      <el-form-item label="借阅编号" class="borrow-borrowId">
        <el-input v-model="sizeForm.borrowId" @input="getborrowId"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit" style="width:18%; height:30%">确认归还</el-button>
        <el-button style="width:18%; height:30%" @click="offSubmit">取消</el-button>
      </el-form-item>
    </el-form>
  </span>
</template>

<script>
import { Message } from 'element-ui'
// import axios from 'axios'
import { returnbook } from '../../../api/book'
export default {
  data () {
    return {
      sizeForm: {
        borrowId: ''
      }
    }
  },
  methods: {
    onSubmit () {
      const a = confirm('请再次确认是否归还？')
      if (a === true) {
        returnbook(parseInt(this.sizeForm.borrowId)).then((response) => {
          Message({
            message: '还书成功！',
            type: 'success'
          })
          this.sizeForm.borrowId = ''
        }, function (result) {
          Message({
            showClose: true,
            message: '还书失败！',
            type: 'error'
          })
          console.log(result)
        })
      } else {
        Message({
          showClose: true,
          message: '取消还书！',
          type: 'error'
        })
      }
      this.sizeForm.name = ''
      this.sizeForm.value = ''
    },
    offSubmit () {
      this.sizeForm.borrowId = ''
      this.sizeForm.value = ''
    },
    getborrowId (value) {
      this.sizeForm.borrowId = value
    },
    getDate () {
      for (let i = 0; i < 2; i++) {
        const year = this.sizeForm.value[i].getFullYear()
        const month = this.sizeForm.value[i].getMonth() + 1
        const date = this.sizeForm.value[i].getDate()
        this.borrowtime[i] = String(year) + '-' + String(month) + '-' + String(date)
      }
    }
  }
}
</script>

<style scoped>
span {
  width: 100%;
  padding-top: 20px;
  padding-left: 100px;
  box-sizing: border-box;
  border-left: 2px solid #EBEEF5;
}
</style>
