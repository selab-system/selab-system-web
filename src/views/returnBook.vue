<script >
import { getReturnBookId, returnBook} from "@/api/returnBook";
export default {
  data() {
      return {
        form: {
          // bookName: '',
          // bookId:null,
          borrowId:''
        }
      }
    },
    methods:{
        async returnbook( borrowId){
            if(borrowId.trim()===''){
                alert("借阅id不能为空")
                return
            }
            // 根据图书名获得图书id
            const res = await returnBook(borrowId) 
            console.log(res);
            if (res) {
                alert("已归还图书！") 
                } 
            else { 
                alert("图书名不存在，请确认后再操作！") 
                }
        },
        retype(){
            this.form={
                 borrowId:''
                }
        }
    }
}
</script>

<template>
  <el-form ref="form" :model="form" label-width="80px">
    <div class="top">归还图书</div>

    <el-form-item label="借阅id">
      <el-input v-model="form.borrowId"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="returnbook(form.borrowId)">立即归还</el-button>
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
