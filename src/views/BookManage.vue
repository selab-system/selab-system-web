<script >
import { getBookList, searchBookMsg } from '@/api/bookmanage'
export default {
  data () {
    return {
      inputbookname: '',
      bookName: 'tomorrow',
      bookAuthor: '雷猴',
      bookDetails: '暂未定',
      owner: 'whatever',
      status: '在',
      createTime: '哈哈哈哈',
      control: false,
      tableData: [{
        bookId: 0,
        bookName: 'leihou',
        bookAuthor: 'string',
        bookDetails: 'string',
        price: 0,
        owner: 0,
        ownerName: 'string',
        status: 0,
        createTime: 'string',
        updateTime: 'string',
        bookRef: 'string'
      }, {
        bookId: 0,
        bookName: 'leihou',
        bookAuthor: 'string',
        bookDetails: 'string',
        price: 0,
        owner: 0,
        ownerName: 'string',
        status: 0,
        createTime: 'string',
        updateTime: 'string',
        bookRef: 'string'
      }]
    }
  },
  async created () {
    this.getBookList()
  },
  methods: {
    // 获取书单
    async getBookList () {
      const str = await getBookList()
      // this.tableData = str.data
      console.log(str)
    },
    // 点击事件searchbook
    searchbook () {
      const data = this.inputbookname
      this.searchBookMsg(data)
      this.control = true
    },
    async  searchBookMsg (data) {
      const str = await searchBookMsg(data)
      this.bookName = str.bookName
      this.bookAuthor = str.bookAuthor
      this.bookDetails = str.bookDetails
      this.owner = str.owner
      this.status = str.status
      this.createTime = str.createTime
    }
  }
}
</script>

<template>
  <div class="bookmanage">
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 输入图书名称 -->
        <el-input
          placeholder="请输入图书名称"
          v-model="inputbookname"
          clearable
        >
        </el-input>
        <!-- 一个提交按钮 -->
        <el-row>
          <el-button type="success" plain @click="searchbook">查询</el-button>
        </el-row>
      </el-header>
      <!-- 查询到的信息 -->
      <el-descriptions title="图书信息" v-if='control'>
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
      </el-descriptions>
      <!-- 主体 -->
      <el-main>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="书籍编号">
                  <span>{{ props.row.bookRef }}</span>
                </el-form-item>
                <el-form-item label="书名">
                  <span>{{ props.row.bookName }}</span>
                </el-form-item>
                <el-form-item label="作者">
                  <span>{{ props.row.bookAuthor }}</span>
                </el-form-item>
                <el-form-item label="图书介绍">
                  <span>{{ props.row.bookDetails }}</span>
                </el-form-item>
                <el-form-item label="书籍拥有者">
                  <span>{{ props.row.owner }}</span>
                </el-form-item>
                <el-form-item label="添加时间">
                  <span>{{ props.row.createTime }}</span>
                </el-form-item>
                <el-form-item label="书籍状态">
                  <span>{{ props.row.status }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="书籍编号" prop="bookRef"> </el-table-column>
          <el-table-column label="书名" prop="bookName"> </el-table-column>
          <el-table-column label="书籍状态" prop="status"> </el-table-column>
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
</style>
