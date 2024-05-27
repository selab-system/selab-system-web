<script >
import { getReturnBookId, returnBook} from "@/api/returnBook";
export default {
  data() {
      return {
        form: {
          bookName: '',
          bookId:null
        }
      }
    },
    methods:{
        async returnbook(bookName){
            if(bookName.trim()===''){
                alert("书名不能为空")
                return
            }
            // 根据图书名获得图书id
            const res = await getReturnBookId(bookName) 
            if (res.data.bookId) { 
                this.bookId = res.data.bookId 
                //根据图书id归还图书
                result = await returnBook(this.bookId) 
                alert("已归还图书！") 
                } 
            else { 
                alert("图书名不存在，请确认后再操作！") 
                }

        },
        retype(){
            this.form={
                bookName: '',
                bookId:null
                }
        }
    }
}
</script>

<template>
  <el-form ref="form" :model="form" label-width="80px">
    <div class="top">归还图书</div>

    <el-form-item label="归还书名">
      <el-input v-model="form.bookName"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="returnbook(form.bookName)">立即归还</el-button>
      <el-button @click="retype">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped>
.top {
  width: 300px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 40px;
}
</style>
