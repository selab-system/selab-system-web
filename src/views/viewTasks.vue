<template>
    <!-- 查看任务 -->
     <div class="main">
      <!-- 标题 -->
        <div class="title">
          <p>我的任务列表</p>
        </div>
        <!-- 搜索框 -->
        <div class="search">
          <input type="text" placeholder="请输入你的姓名" v-model="username">
          <el-button type="primary" @click="search()">搜索你的任务</el-button>
        </div>
        <!-- 主体内容 -->
        <div class="content">
          <div v-if="tableData.length>0">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                fixed
                prop="dealTime"
                label="截止时间"
                width="200"
                :formatter="formatTimestamp">
              </el-table-column>
              <el-table-column
                prop="publishTime"
                label="发布时间"
                width="200"
                :formatter="formatTimestamp">
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
                <template slot-scope="scope">
                  <el-button type="text" @click="showDialog(scope.row)">查看任务内容</el-button>
                  <el-dialog
                    title="任务内容"
                    :visible.sync="dialogVisible"
                    width="40%"
                    :before-close="handleClose"
                    :append-to-body='true'>
                    <span >{{ dialogRow.content }}</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                  </el-dialog>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div v-else>
            <el-empty :image-size="200"></el-empty>
          </div>
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
      tableData: [],
      dialogRow: ''
    }
  },
  created () {
    // this.search()
  },
  methods: {
    // 对话框
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 搜索自己的任务列表
    search () {
      const data = { username: this.username }
      queryForUser(data).then((res) => {
        console.log(res.data.data)
        this.tableData = res.data.data
      }

      )
    },
    showDialog (row) {
      this.dialogVisible = true
      this.dialogRow = row// 将当前行的数据赋值给dialogRow
    },
    formatTimestamp (row, column, cellValue) {
      const date = new Date(cellValue)
      return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`
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
