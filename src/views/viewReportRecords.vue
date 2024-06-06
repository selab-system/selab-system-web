<template>
    <!-- 查看汇报记录 -->
    <div class="main">
      <!-- 标题 -->
      <div class="title">
        <p>查看汇报记录</p>
      </div>
      <!-- 内容 -->
      <div class="content">
        <el-table
          :data="tableData"
          style="width: 100%"
          @expand-change="handleRowExpandChange">
          <el-table-column type="expand">
            <template >
              <el-form label-position="left" inline class="demo-table-expand">
                <el-table
                  :data="tableData1"
                  style="width: 100%">
                  <el-table-column
                    prop="userName"
                    label="汇报人"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    prop="reportStatus"
                    label="汇报状态"
                    width="200">
                  </el-table-column>
                  <el-table-column
                    fixed
                    prop="reportTime"
                    label="汇报时间"
                    width="300"
                    :formatter="formatTimestamp">
                  </el-table-column>
                  <el-table-column
                    prop="details"
                    label="汇报信息"
                    width="300">
                  </el-table-column>
                  <!-- <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template>
                      <el-button type="text" @click="showDialog(scope.row)">查看</el-button>

                      <el-dialog
                        title="汇报信息"
                        :visible.sync="dialogVisible"
                        width="30%"
                        :before-close="handleClose"
                        :append-to-body='true'>
                        <span>{{dialogRow.datails}}</span>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="dialogVisible = false">取 消</el-button>
                          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span>
                      </el-dialog>
                    </template>
                  </el-table-column> -->
                </el-table>
              </el-form>
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
            </template>
            <!-- <div v-else>
              <el-empty :image-size="200"></el-empty>
            </div> -->
          </el-table-column>
          <el-table-column
            label="发布者"
            prop="publisherName">
          </el-table-column>
          <el-table-column
            label="任务名称"
            prop="name">
          </el-table-column>
          <el-table-column
            label="任务状态"
            prop="status">
          </el-table-column>
          <el-table-column
            label="截止时间"
            prop="dealTime"
            :formatter="formatTimestamp">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </template>

<script>
import { queryMyTask, queryAllResport } from '@/api/viewReportRecords'
export default {
  name: 'ReportingRecords',
  data () {
    return {
      currentPage: 1,
      totalCount: 1,
      dialogVisible: false,
      tableData: [],
      tableData1: [],
      allTableData1: [],
      dialogRow: '',
      expandedRowsData: {}
    }
  },
  created () {
    this.search()
    // this.details()
    this.handleCurrentChange()
  },
  methods: {
    // 显示当前页数据
    handleCurrentChange (currentPage) {
    // 更新当前页数据
      this.currentPage = currentPage
      this.tableData1 = []
      // 获取当前页数据范围
      this.tableData1 = this.allTableData1.slice((((currentPage - 1) * 5)), (currentPage * 5))
    },
    // 对话框
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 查询所有任务信息
    search () {
      queryMyTask().then((res) => {
        console.log(res.data.data)
        this.tableData = res.data.data
      })
    },
    // 查询汇报记录
    // 下拉框下的小细节
    // details () {
    //   const id = { taskId: this.tableData.id }
    //   queryAllResport(id).then((res) => {
    //     console.log(res.data.data)
    //     this.allTableData1 = res.data.data
    //     if (!this.currentPage || this.currentPage === 1) {
    //       this.handleCurrentChange(1)
    //     }
    //   })
    // },
    showDialog (row) {
      this.dialogVisible = true
      this.dialogRow = row
    },
    formatTimestamp (row, column, cellValue) {
      const date = new Date(cellValue)
      return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`
    },
    // 下拉框渲染
    handleRowExpandChange (row) {
      const id = row.id
      console.log(id)
      queryAllResport(id).then((res) => {
        console.log(res.data.data)
        this.allTableData1 = res.data.data
        // this.$set(this.expandedRowsData, id, this.allTableData1)
        // console.log(this.expandedRowsData[id])
        console.log(this.allTableData1)
        if (!this.currentPage || this.currentPage === 1) {
          this.handleCurrentChange(1)
        }
      })
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
    color: black;
  }
  .content{
    width: 900px;
    height: 800px;
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
  .footer{
    display: flex;
    padding-top:50px ;
    align-items: center;
    justify-content: center;
  }
  </style>
