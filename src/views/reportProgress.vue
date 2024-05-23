<template>
    <!-- 任务完成后汇报进度 -->
      <div class="main">
        <!-- 标题 -->
        <div class="title title1">
          <p>汇报任务</p>
        </div>
        <div class="content">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="汇报人" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="汇报状态">
              <el-select v-model="ruleForm.reportStatus" placeholder="请选择汇报状态">
                <el-option label="已完成" value="shanghai"></el-option>
                <el-option label="未完成" value="shanghai2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="汇报时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="汇报任务" prop="details">
              <el-input type="textarea" v-model="ruleForm.details"></el-input>
            </el-form-item>
            <el-form-item label="添加备注">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm()">立即汇报</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="title">
          <p>查看本人汇报记录</p>
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
              <template >
                <!-- 任务内容 -->
                <el-button type="text" @click="dialogVisible = true">任务内容&nbsp;&nbsp;</el-button>

                <el-dialog
                  title="提示"
                  :visible.sync="dialogVisible"
                  width="30%"
                  :before-close="handleClose"
                  :append-to-body="true">
                  <span>这是任务内容</span>
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
                  <span>这是你的信息</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible1 = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
                  </span>
                </el-dialog>
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
      </div>
    </template>

<script>
import { report, queryMyReport, queryForUser } from '@/api/reportProgress'
export default {
  name: 'ReportingTasks',
  data () {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      currentPage: 1,
      totalCount: 0,
      ruleForm: {
        name: '',
        reportStatus: '',
        date1: '',
        date2: '',
        details: '',
        desc: ''
      },
      tableData: [],
      allTableData: [{
        dealTime: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        dealTime: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        dealTime: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        dealTime: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        dealTime: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        dealTime: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        dealTime: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }, {
        dealTime: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }
      ],
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
    this.report()
    this.search()
    this.details()
    // this.handleCurrentChange(1)
  },
  methods: {
    // 汇报任务
    async submitForm () {
      const res = await report(this.reportStatus, this.details)
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
      // 传用户id
      queryForUser().then((res) => {
        console.log(res)
        // 将数据渲染给tableData
        this.allTableData = res.data
        this.totalCount = res.allTableData.length
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
  padding-top:45px ;
}
.title p{
  font-size: 30px;
  font-weight: 700;
}
.title1{
    padding-top:0px ;
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
