<template>
    <!-- 查看进度完成情况 -->
    <div class="total">
      <!-- 标题 -->
      <div class="title">
        <p>查看进度完成情况</p>
      </div>
      <!-- 主体内容 -->
      <div>
        <input type="text" v-model="publisherName" @input="search" placeholder="搜索发布者...">
        <el-button type="primary" @click="search()">搜索任务</el-button>
        <el-table class="table"
          :data="tableData"
          style="width: 95%"
          max-weight="900"
          max-height="500">
          <el-table-column
            fixed
            prop="publishTime"
            label="发布时间"
            width="150">
          </el-table-column>
          <el-table-column
            prop="publisherName"
            label="发布者"
            width="120">
          </el-table-column>
          <el-table-column
            prop="name"
            label="任务名称"
            width="300">
          </el-table-column>
          <el-table-column
            prop="dealTime"
            label="截止时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="status"
            label="任务状态"
            width="120">
          </el-table-column>
          <el-table-column
            prop="number"
            label="已汇报数量"
            width="120">
          </el-table-column>
          <el-table-column
            :data="numberData"
            prop="data"
            label="未汇报数量"
            width="120">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="300">
            <template slot-scope="scope">
              <el-button type="text" @click="dialogTableVisible = true">查看所有需要汇报人员信息</el-button>

              <el-dialog title="查看所有汇报人员信息" :visible.sync="dialogTableVisible" :modal-append-to-body='false'>
                <el-table :data="gridData">
                  <el-table-column property="userName" label="汇报人" width="200"></el-table-column>
                  <el-table-column property="isReport" label="是否汇报"></el-table-column>
                </el-table>
              </el-dialog>
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small">
                删除任务
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页相关 -->
        <div class="footer">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100"
            :page-size='5'
            @current-change='handleCurrentChange'>
          </el-pagination>
        </div>
      </div>
    </div>
  </template>

<script>
import { queryMyTask, queryAllNeedReportUser, queryCount, deletetask } from '@/api/viewCompletionStatus'
export default {
  name: 'ViewProgress',
  data () {
    return {
      publisherName: '',
      currentPage: 1,
      totalCount: 1,
      // 全部表格数据
      allTableData: [
        {
          date: '2016-05-03',
          publisherName: '王小虎',
          name: '上海',
          deadline: '普陀区',
          state: '上海市普陀区金沙江路 1518 弄',
          number: 200333
        }, {
          date: '2016-05-02',
          publisherName: '王小虎',
          name: '上海',
          state: '普陀区',
          deadline: '上海市普陀区金沙江路 1518 弄',
          number: 200333
        }, {
          date: '2016-05-04',
          publisherName: '王小虎',
          name: '上海',
          state: '普陀区',
          deadline: '上海市普陀区金沙江路 1518 弄',
          number: 200333
        }, {
          date: '2016-05-01',
          publisherName: '王小虎',
          name: '上海',
          state: '普陀区',
          deadline: '上海市普陀区金沙江路 1518 弄',
          number: 200333
        }, {
          date: '2016-05-08',
          publisherName: '王小虎',
          name: '上海',
          state: '普陀区',
          deadline: '上海市普陀区金沙江路 1518 弄',
          number: 200333
        }, {
          date: '2016-05-06',
          publisherName: '王小虎',
          name: '上海',
          state: '普陀区',
          deadline: '上海市普陀区金沙江路 1518 弄',
          number: 200333
        }, {
          date: '2016-05-07',
          publisherName: '王小虎',
          name: '上海',
          state: '普陀区',
          deadline: '上海市普陀区金沙江路 1518 弄',
          number: 200333
        }
      ],
      tableData: [],
      gridData: [{
        date: '2016-05-02',
        userName: '王小虎',
        isReport: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        userName: '王小虎',
        isReport: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        userName: '王小虎',
        isReport: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        userName: '王小虎',
        isReport: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      formLabelWidth: '120px',
      numberData: []

    }
  },
  created () {
    this.search()
    this.details()
    this.number()
  },
  methods: {
    // 删除任务（逻辑删除）
    deleteRow (index, rows) {
      rows.splice(index, 1)
      const id = { taskId: this.allTableData.id }
      deletetask(id).then((res) => {
        console.log(res)
      }

      )
    },
    // 根据发布者查询用户信息
    querymytaskByname (obj) {
      queryMyTask(obj).then(response => {
        console.log(response)
        // 多条件查询的数据
        this.allTableData = response.data
        // 总数量
        this.totalCount = response.data.length
        // 取第一页数据
        if (!this.currentPage || this.currentPage === 1) {
          this.handleCurrentChange(1)
        }
      })
    },
    search () {
      // 获取用户在文本框中输入的内容
      console.log(this.publisherName)
      const data = { publisherName: this.publisherName }
      // 查询数据
      this.querymytaskByname(data)
    },
    // 显示当前页数据
    handleCurrentChange (currentPage) {
      // 更新当前页数据
      this.currentPage = currentPage
      this.tableData = []
      // 获取当前页数据范围
      this.tableData = this.allTableData.slice((((currentPage - 1) * 5)), (currentPage * 5))
    },
    // 查询出所有需要汇报任务的用户信息
    details () {
      const id = { taskId: this.allTableData.id }
      queryAllNeedReportUser(id).then((res) => {
        console.log(res)
        this.gridData = res.data
      }
      )
    },
    // 查询当前汇报数量
    number () {
      const id = { taskId: this.allTableData.id }
      queryCount(id).then((res) => {
        console.log(res)
        this.numberData = res
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
    /* background-color: skyblue; */
  }
  .total{
    padding: 30px;
  }

  /* 标题 */
  .title{
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 1600px;
    height: 70px;
    /* background-color: wheat; */
    border-radius: 20px;
    padding: 15px;
  }
  .title p{
    font-size: 30px;
    font-weight: 700;
  }
  input {
    width: 200px;
    height: 30px;
    margin-right: 15px;
  }
  .footer{
    display: flex;
    padding-top:50px ;
    align-items: center;
    justify-content: center;
  }
  </style>
