<template>
    <!-- 查看任务 -->
     <div class="main">
      <!-- 标题 -->
        <div class="title">
          <p>我的任务列表</p>
        </div>
        <div class="search">
          <input type="text" placeholder="请输入你的姓名" v-model="username">
          <el-button type="primary" @click="search()">搜索你的任务</el-button>
        </div>
        <div class="content">
          <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="dealTime"
          label="截止时间"
          width="150">
        </el-table-column>
        <el-table-column
          prop="publishTime"
          label="发布时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="任务名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="publisherName"
          label="发布者"
          width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="任务状态"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template>
            <el-button type="text" @click="dialogVisible = true">查看任务内容</el-button>
            <el-dialog
              title="任务内容"
              :visible.sync="dialogVisible"
              width="40%"
              :before-close="handleClose"
              :append-to-body='true'>
              <span>{{tableData.content}}</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </template>
        </el-table-column>
      </el-table>
        </div>
      </div>
    </template>

<script>
import { queryForUser } from '@/api/viewTasks'
export default {
  name: 'ViewTasks',
  data () {
    return {
      username: '',
      dialogVisible: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        publisherName: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        publisherName: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        publisherName: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        publisherName: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  created () {
    this.search()
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    search () {
      const data = { username: this.username }
      queryForUser(data).then((res) => {
        console.log(res)
        if (res.data && typeof res.data === 'object' && !Array.isArray(res.data)) {
          // 转换对象为数组，每个元素是一个包含 key 和 value 的对象
          this.tableData = Object.values(res.data)
        }
        // this.tableData = res.data
      }

      )
    }
  }
}
</script>

    <style scoped>
    *{
      margin: 0%;
      padding: auto;
    }
    .main{
      width: 1600px;
      height: 800px;
      padding: 30px;
    }

    /* 标题 */
    .title{
      display: flex;
      align-items: center;
      width: 1600px;
      height: 70px;
      border-radius: 20px;
      padding: 15px;
    }
    .title p{
      font-size: 30px;
      font-weight: 700;
    }
    /* 搜索框 */
    .search{
      margin: 5px;
      margin-bottom:40px ;
    }
    .search input{
      width: 200px;
      height: 30px;
      margin-right:15px ;
    }
    /* 内容 */
    .content{
      width: 800px;
      height: 730px;
      /* background-color: silver; */
    }
    </style>
