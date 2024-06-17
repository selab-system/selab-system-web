<template>
    <!-- 任务完成后汇报进度 -->
      <div class="main">
        <!-- 标题 -->
        <!-- 汇报任务 -->
        <div class="title title1">
          <p>汇报任务</p>
        </div>
        <!-- 搜索框 -->
        <div class="search">
          <input type="text" placeholder="请输入你的姓名..." v-model="username">
          <el-button type="primary" @click="search()">搜索你的任务</el-button>
        </div>
        <div class="content">
          <div v-if="tableData.length>0">
            <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="name"
                label="任务名"
                width="200">
              </el-table-column>
              <el-table-column
                prop="status"
                label="任务状态"
                width="200">
              </el-table-column>
              <el-table-column
                prop="dealTime"
                label="截止时间"
                width="200"
                :formatter="formatTimestamp">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="150">
                <template slot-scope="scope">
                  <el-button type="text" @click="showDialog2(scope.row)">我要汇报</el-button>

                  <el-dialog title="汇报任务" :visible.sync="dialogFormVisible" :append-to-body="true">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                      <el-form-item label="汇报人" prop="name" :label-width="formLabelWidth">
                        <el-input v-model="ruleForm.name"></el-input>
                      </el-form-item>
                      <el-form-item label="汇报状态" prop="reportStatus">
                        <el-input v-model="ruleForm.reportStatus" placeholder="已完成/未完成"></el-input>
                      </el-form-item>
                      <el-form-item label="汇报时间" required prop="dealTime">
                        <el-date-picker
                          v-model="ruleForm.dealTime"
                          type="datetime"
                          placeholder="选择截止时间"
                          value-format="yyyy-MM-dd HH:mm:ss"
                          style="width: 100%;">
                        </el-date-picker>
                      </el-form-item>
                      <el-form-item label="汇报任务" prop="details">
                        <el-input type="textarea" v-model="ruleForm.details"></el-input>
                      </el-form-item>
                      <el-form-item label="添加备注" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="submitForm()">立即汇报</el-button>
                        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                  </el-dialog>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <!-- 查看本人汇报记录 -->
        <div class="title title2">
          <p>查看本人汇报记录</p>
        </div>
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
                prop="publisherName"
                label="发布者"
                width="120">
              </el-table-column>
              <el-table-column
                prop="name"
                label="任务名"
                width="300">
              </el-table-column>
              <el-table-column
                prop="status"
                label="任务状态"
                width="120">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="250">
                <template slot-scope="scope">
                  <!-- 任务内容 -->
                  <el-button type="text" @click="showDialog(scope.row)">任务内容&nbsp;&nbsp;</el-button>
                  <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose"
                    :append-to-body="true">
                    <span>{{dialogRow.content}}</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                  </el-dialog>
                   <!-- 汇报信息 -->
                  <el-button type="text" @click="showDialog1(scope.row)">汇报信息</el-button>

                  <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible1"
                    width="30%"
                    :before-close="handleClose"
                    :append-to-body="true">
                    <p>汇报信息：{{ tableData2.content }}</p>
                    <p>截止时间：{{ tableData2.dealTime }}</p>
                    <p>任务发布小组范围：{{ tableData2.id }}</p>
                    <p>ID编号:{{ tableData2.id }}</p>
                    <p>是否汇报：{{ tableData2.judge }}</p>
                    <p>任务名：{{ tableData2.name }}</p>
                    <p>发布时间：{{ tableData2.publishTime }}</p>
                    <p>发布者：{{ tableData2.publisherName }}</p>
                    <p>任务状态：{{ tableData2.status }}</p>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible1 = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
                    </span>
                  </el-dialog>
                  <!-- 删除任务 -->
                  <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData,scope.row)"
                  type="text"
                  size="small">
                  &nbsp;&nbsp;删除任务
                </el-button>
                </template>
              </el-table-column>
            </el-table>
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
          <div v-else>
            <el-empty :image-size="200"></el-empty>
          </div>
        </div>
      </div>
    </template>

<script>
import { report, queryMyReport, queryForUser, del } from '@/api/reportProgress'
export default {
  name: 'ReportingTasks',
  data () {
    return {
      dialogRow: '',
      username: '',
      dialogVisible: false,
      dialogVisible1: false,
      dialogFormVisible: false,
      currentPage: 1,
      totalCount: 0,
      formLabelWidth: '120px',
      ruleForm: {
        name: '',
        reportStatus: '',
        date1: '',
        date2: '',
        details: '',
        desc: '',
        dealTime: ''
      },
      tableData: [],
      allTableData: [],
      tableData1: [],
      tableData2: '',
      rules: {
        name: [
          { required: true, message: '请输入汇报人名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        details: [
          { required: true, message: '请填写你的汇报', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    // this.submitForm()
    // this.search()
    // this.details()
    // this.handleCurrentChange(1)
  },
  methods: {
    // 汇报任务
    async submitForm () {
      const id = this.dialogRow.id
      const res = await report(id, this.ruleForm.reportStatus, this.ruleForm.details)
      console.log(res)
      alert('恭喜你又完成了一项任务')
    },
    showDialog2 (row) {
      this.dialogFormVisible = true
      this.dialogRow = row// 将当前行的数据赋值给dialogRow
    },
    // 对话框
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    // 查询本人汇报记录
    search () {
      const data = { username: this.username }
      // 传用户id
      queryForUser(data).then((res) => {
        console.log(res.data.data)
        // 将数据渲染给tableData
        this.allTableData = res.data.data
        // this.totalCount = res.allTableData.length
        this.handleCurrentChange(this.currentPage)
        // 返回一个任务id
      })
    },
    // 显示当前页数据
    handleCurrentChange (currentPage) {
      // 更新当前页数据
      this.currentPage = currentPage
      this.tableData = []
      // 获取当前页数据范围
      this.tableData = this.allTableData.slice((((currentPage - 1) * 5)), (currentPage * 5))
    },
    // 通过taskId查询本人汇报记录
    datails () {
      const id = { taskId: this.allTableData.id }
      queryMyReport(id).then((res) => {
        console.log(res)
        this.tableData1 = Object.values(res.data)
      }

      )
    },
    // 删除汇报记录
    deleteRow (index, rows, row) {
      rows.splice(index, 1)
      console.log(row.id)
      // const id = { reportId: this.tableData.id }
      // del(id).then((res) => {
      //   console.log('删除成功')
      //   alert('删除成功')
      // }
      const reportId = { reportId: row.id }
      del(reportId).then((res) => {
        console.log('删除成功')
        alert('删除成功')
      }

      )
    },
    showDialog (row) {
      this.dialogVisible = true
      this.dialogRow = row// 将当前行的数据赋值给dialogRow
    },
    showDialog1 (row) {
      this.dialogVisible1 = true
      const id = { taskId: 32 }
      queryMyReport(id).then((res) => {
        console.log(res.data.data)
        this.tableData2 = res.data.data
      })
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
  padding: 30px;
  padding-top:0px ;
}
.title p{
  font-size: 30px;
  font-weight: 700;
  color: black;
}
.title1{
    margin-top:0px ;
}
.title2{
  margin-top:100px ;
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
  height: 380px;
  /* background-color: silver; */
}
.footer{
  display: flex;
  padding-top:50px ;
  align-items: center;
  justify-content: center;
}
</style>
