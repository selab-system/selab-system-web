<script >
import { getBookList, borrowqueryById,searchByBookId,searchByUserId } from "@/api/queryBorrowingRecords";
export default {
  data() {
    return {
      control: false,
      control2: false,
      input: "",
      input2:'',
      input3:'',
      form: {
        borrowId: null,
        bookId: null,
        bookName: '',
        borrowUser: null,
        borrowUserName: '',
        borrowDuration: null,
        status: null,
        borrowTime: '',
        returnTime: '',
      },
      form2:{
        borrowId: null,
        bookId: null,
        bookName: '',
        borrowUser: null,
        borrowUserName: '',
        borrowDuration: null,
        status: null,
        borrowTime: '',
        returnTime: '',
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  async created() {
    this.getBookList();
  },
  methods: {
    // 查询书籍
    async borrowqueryById() {
      this.control=true
      if (this.input.trim() === "") {
        alert("请先输入借阅id");
      } else {
        const str = await borrowqueryById(this.input);
        console.log(str);
        if (str) {
          this.form = str.data.data;
          alert("已获取");
        } else {
          alert("未获取");
        }
      }
    },
    // 查询书籍
    async borrowquery(){
      this.control2=true
      if(this.input2 || this.input3){
        if(this.input2){
          const str = await searchByBookId(this.input2)
          console.log(str.data.data.data);
          if(str.data.data.data==undefined){
            alert("此书籍不存在")
            return
          }
          if(str){
            this.form2 = str.data.data.data[0]
            alert("获取成功")
            return
          }
          else{
            alert("未获取成功")
            return
          }
        }
        if(this.input3){
          const res = await searchByUserId(this.input3)
          console.log(res.data.data.data[0]);
          if(res){
            this.form2 = res.data.data.data[0]
            alert("获取成功")
            return
          }
          else{
            alert("未获取成功")
            return
          }
        }
      }
      else{
        alert("先输入书籍或用户id")
        return
      }
    },
    // 获取书单
    async getBookList() {
      const str = await getBookList();
      console.log(str.data.data.data);
      this.tableData = str.data.data.data;
      if (str) {
        alert("已查询到已借阅未归还书籍");
      } else {
        alert("未查询到已借阅未归还书籍");
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="title">查询借阅书籍信息</div>

    <el-input v-model="input" placeholder="请输入借阅id"></el-input>
    <el-button type="success" @click="borrowqueryById">查询</el-button>

    <el-descriptions title="借阅信息" v-if="control">
      <el-descriptions-item label="借阅id">{{form.borrowId}}</el-descriptions-item>
      <el-descriptions-item label="书籍id">{{form.bookId}}</el-descriptions-item>
      <el-descriptions-item label="书籍名称">{{form.bookName}}</el-descriptions-item>
      <el-descriptions-item label="借阅用户id">{{form.borrowUser}}</el-descriptions-item>
      <el-descriptions-item label="借阅用户名称">{{form.borrowUserName}}</el-descriptions-item>
      <el-descriptions-item label="借阅时长(已天为单位)">{{form.borrowDuration}}</el-descriptions-item>
      <el-descriptions-item label="状态">{{form.status}}</el-descriptions-item>
      <el-descriptions-item label="借阅时间">{{form.borrowTime}}</el-descriptions-item>
      <el-descriptions-item label="归还时间">{{form.returnTime}}</el-descriptions-item>

    </el-descriptions>

    <div class="title">已借阅未归还书籍</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="bookId" label="书籍id" width="180"> </el-table-column>
      <el-table-column prop="bookName" label="书籍名" width="180"> </el-table-column>

      <el-table-column prop="borrowTime" label="借阅时间" width="180"> </el-table-column>
      <el-table-column prop="returnTime" label="还回时间"> </el-table-column>
    </el-table>

    <!-- <div class="class">查询借阅信息</div> -->
    <div class="title">查询借阅书籍信息（书籍id/用户id）</div>

    <el-input v-model="input2" placeholder="请输入书籍id"></el-input>
    <el-input v-model="input3" placeholder="请输入用户id"></el-input>

    <el-button type="success" @click="borrowquery">查询</el-button>

    <el-descriptions title="借阅信息" v-if="control2">
      <el-descriptions-item label="借阅id">{{form2.borrowId}}</el-descriptions-item>
      <el-descriptions-item label="书籍id">{{form2.bookId}}</el-descriptions-item>
      <el-descriptions-item label="书籍名称">{{form2.bookName}}</el-descriptions-item>
      <el-descriptions-item label="借阅用户id">{{form2.borrowUser}}</el-descriptions-item>
      <el-descriptions-item label="借阅用户名称">{{form2.borrowUserName}}</el-descriptions-item>
      <el-descriptions-item label="借阅时长(已天为单位)">{{form2.borrowDuration}}</el-descriptions-item>
      <el-descriptions-item label="状态">{{form2.status}}</el-descriptions-item>
      <el-descriptions-item label="借阅时间">{{form2.borrowTime}}</el-descriptions-item>
      <el-descriptions-item label="归还时间">{{form2.returnTime}}</el-descriptions-item>

    </el-descriptions>
  </div>
  
</template>

<style scoped>
.title {
  color: black;
  width: 400px;
}
</style>
