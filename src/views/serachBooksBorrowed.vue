<script >
import { getSearchBookList } from "@/api/searchOwnBooks";
export default {
  data() {
    return {
      // inputbookname: '',
      // bookAuthor: '',
      // bookDetails: '',
      // owner: '',
      // status: '',
      // createTime: '',
      // control: false,
      // userid:'',
      tableData: [
        {
          borrowId: 0,
          bookId: 0,
          bookName: "string",
          borrowUser: 0,
          borrowUserName: "string",
          borrowDuration: 0,
          status: 0,
          borrowTime: "string",
          returnTime: "string",
        },
        {
          borrowId: 0,
          bookId: 0,
          bookName: "string",
          borrowUser: 0,
          borrowUserName: "string",
          borrowDuration: 0,
          status: 0,
          borrowTime: "string",
          returnTime: "string",
        },
      ],
    };
  },
  async created () {
    this.searchownbook()
  },
  methods: {
    async searchownbook() {
        const str = await getSearchBookList();
        console.log(str.data.data.data);
        if(str){
          this.tableData = str.data.data.data;
          alert("已获取本人借阅书籍");
        }
        else{
          alert("获未取本人借阅书籍")
        }
       
    },
  },
};
</script>

<template>
  <div class="bookmanage">
    <div class="top">查询本人借阅书籍</div>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 输入本人名称 -->
        <!-- <el-input
          placeholder="请输入本人id获取本人书单"
          v-model="userid"
          clearable
        >
        </el-input> -->
        <!-- 一个提交按钮 -->
        <!-- <el-row>
          <el-button type="success" plain @click='searchownbook(userid)' >查询</el-button>
        </el-row> -->
      </el-header>
      <!-- 查询到的信息 -->
      <!-- <el-descriptions title="图书信息" v-if='control'>
        <el-descriptions-item label="图书名" v-model="bookName"
          >{{bookName}}</el-descriptions-item
        >
        <el-descriptions-item label="书籍作者" v-model="bookAuthor"
          >{{bookAuthor}}</el-descriptions-item
        >
        <el-descriptions-item label="图书介绍" v-model="bookDetails">
          {{bookDetails}}</el-descriptions-item
        >
        <el-descriptions-item label="书籍拥有者" v-model="owner"
          >{{owner}}</el-descriptions-item
        >
        <el-descriptions-item label="书籍状态" v-model="status"
          >{{status}}</el-descriptions-item
        >
        <el-descriptions-item label="添加时间" v-model="createTime"
          >{{createTime}}</el-descriptions-item
        >
      </el-descriptions> -->
      <!-- 主体 -->
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="借阅id">
                  <span>{{ props.row.borrowId }}</span>
                </el-form-item>
                <el-form-item label="书籍id">
                  <span>{{ props.row.bookId }}</span>
                </el-form-item>
                <el-form-item label="书籍名称">
                  <span>{{ props.row.bookName }}</span>
                </el-form-item>
                <el-form-item label="借阅用户id">
                  <span>{{ props.row.borrowUser }}</span>
                </el-form-item>
                <el-form-item label="借阅用户名称">
                  <span>{{ props.row.borrowUserName }}</span>
                </el-form-item>
                <el-form-item label="借阅时长(已天为单位)">
                  <span>{{ props.row.borrowDuration }}</span>
                </el-form-item>
                <el-form-item label="书籍状态">
                  <span>{{ props.row.status }}</span>
                </el-form-item>
                <el-form-item label="借阅时间">
                  <span>{{ props.row.borrowTime }}</span>
                </el-form-item>
                <el-form-item label="归还时间">
                  <span>{{ props.row.returnTime }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="书籍名称" prop="bookName"> </el-table-column>
          <el-table-column label="书籍id" prop="bookId"> </el-table-column>
          <el-table-column label="借阅id" prop="borrowId"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-descriptions {
  padding: 40px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.top {
  width: 400px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 40px;
}
</style>
