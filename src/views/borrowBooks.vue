<script>
import { borrowBook ,getBookId} from "@/api/borrowBooks";
export default {
  data() {
      return {
        form: {
          bookName: '',
          borrowTime: '',
          returnTime: '',
          borrowman:'',
          bookId:null,
          borrowDuration:'',
          borrowDuration:null
        }
      }
    },
    methods: {
      async onSubmit() {
        const form = this.form;
        if (!form.bookName || !form.borrowTime || !form.returnTime || !form.borrowman || !form.borrowDuration) {
          alert("有内容未填，请仔细检查")
          return
        }
        // 根据书名得书籍id
        const str =await getBookId(form.bookName)
        form.bookId=str.data.bookId
        if(form.bookId){
          // 提交给后端信息
          await borrowBook(form.bookId,form.borrowDuration,form.returnTime)
          alert("已借阅成功！")
          // form.resetField()
        }
        else{
          alert("此图书不存在！")
          return
        }
      },
      clearForm(){
          this.form={
          bookName: '',
          borrowTime: '',
          returnTime: '',
          borrowman:'',
          bookId:'',
          borrowDuration:'',
          borrowDuration:null}
        }
    }
}
</script>

<template>
  <el-form ref="form" :model="form" label-width="80px">
    <div class="top">图书借阅</div>

    <el-form-item label="借阅人">
      <el-input v-model="form.borrowman"></el-input>
    </el-form-item>

    <el-form-item label="借阅书名">
      <el-input v-model="form.bookName"></el-input>
    </el-form-item>

    <el-form-item label="借阅时长">
      <el-input
        v-model="form.borrowDuration"
        placeholder="请输入整数/天"
      ></el-input>
    </el-form-item>

    <el-form-item label="借书时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.borrowTime"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="还书时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.returnTime"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="clearForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>



<style>
.top {
  width: 300px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 40px;
}
</style>
