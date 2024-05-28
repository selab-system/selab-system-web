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
          style="width: 100%">
          <el-table-column type="expand">
            <template >
              <el-form label-position="left" inline class="demo-table-expand">
                <el-table
                  :data="tableData1"
                  border
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
                    width="300">
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template>
                      <el-button type="text" @click="dialogVisible = true">查看</el-button>

                      <el-dialog
                        title="汇报信息"
                        :visible.sync="dialogVisible"
                        width="30%"
                        :before-close="handleClose"
                        :append-to-body='true'>
                        <span>{{tableData1.datails}}</span>
                        <span slot="footer" class="dialog-footer">
                          <el-button @click="dialogVisible = false">取 消</el-button>
                          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                        </span>
                      </el-dialog>
                    </template>
                  </el-table-column>
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
              prop="dealTime">
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
      tableData: [
        // {
        //   id: '12987122',
        //   name: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   shopId: '10333'
        // }, {
        //   id: '12987123',
        //   name: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   shopId: '10333'
        // }, {
        //   id: '12987125',
        //   name: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   shopId: '10333'
        // }, {
        //   id: '12987126',
        //   name: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   shopId: '10333'
        // }
      ],
      tableData1: [],
      allTableData1: [
        // {
        //   name: '12987122',
        //   publisherName: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   date: '10333'
        // }, {
        //   name: '12987123',
        //   publisherName: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   date: '10333'
        // }, {
        //   name: '12987125',
        //   publisherName: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   date: '10333'
        // }, {
        //   name: '12987126',
        //   publisherName: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   date: '10333'
        // }, {
        //   name: '12987126',
        //   publisherName: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   date: '10333'
        // }, {
        //   name: '12987126',
        //   publisherName: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   date: '10333'
        // }, {
        //   name: '12987126',
        //   publisherName: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   date: '10333'
        // }, {
        //   name: '12987126',
        //   publisherName: '好滋好味鸡蛋仔',
        //   category: '江浙小吃、小吃零食',
        //   desc: '荷兰优质淡奶，奶香浓而不腻',
        //   address: '上海市普陀区真北路',
        //   shop: '王小虎夫妻店',
        //   date: '10333'
        // }
      ]

    }
  },
  created () {
    this.search()
    this.details()
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
        console.log(res)
        this.tableData = Object.values(res.data)
      })
    },
    // 查询汇报记录
    details () {
      const id = { taskId: this.tableData.id }
      queryAllResport(id).then((res) => {
        console.log(res)
        this.allTableData1 = Object.values(res.data)
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
