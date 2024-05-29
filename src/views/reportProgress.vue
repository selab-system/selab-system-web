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
                width="200">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="150">
                <template>
                  <el-button type="text" @click="dialogFormVisible = true">我要汇报</el-button>

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
                width="150">
              </el-table-column>
              <el-table-column
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
                label="任务名"
                width="300">
              </el-table-column>
              <el-table-column
              :data="tableData1"
                prop="judge"
                label="是否汇报"
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
                  <!-- 任务内容 -->
                  <el-button type="text" @click="dialogVisible = true">任务内容&nbsp;&nbsp;</el-button>
                  <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible"
                    width="30%"
                    :before-close="handleClose"
                    :append-to-body="true">
                    <span>{{tableData.content}}</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                    </span>
                  </el-dialog>
                   <!-- 汇报信息 -->
                  <el-button type="text" @click="dialogVisible1 = true">汇报信息</el-button>

                  <el-dialog
                    title="提示"
                    :visible.sync="dialogVisible1"
                    width="30%"
                    :before-close="handleClose"
                    :append-to-body="true">
                    <span>{{tableData1.taskReportVo}}</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="dialogVisible1 = false">取 消</el-button>
                      <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
                    </span>
                  </el-dialog>
                  <!-- 删除任务 -->
                  <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData)"
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
      rules: {
        name: [
          { required: true, message: '请输入汇报人名称', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
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
      const id = { taskId: this.allTableData.id }
      const res = await report(id, this.ruleForm.reportStatus, this.ruleForm.details)
      console.log(res)
      alert('恭喜你又完成了一项任务')
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
        console.log(res)
        // 将数据渲染给tableData
        this.allTableData = Object.values(res.data)
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
    deleteRow (index, rows) {
      rows.splice(index, 1)
      const id = { reportId: this.tableData.id }
      del(id).then((res) => {
        console.log('删除成功')
        alert('删除成功')
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
