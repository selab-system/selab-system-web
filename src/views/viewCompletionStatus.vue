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
        <div v-if="tableData.length>0">
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
              width="500">
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
                <!-- 可以更新任务 -->
                <el-button type="text" @click="dialogFormVisible = true">修改任务</el-button>

                <el-dialog title="更新任务" :visible.sync="dialogFormVisible" :modal-append-to-body='false'>
                  <el-form :model="form">
                    <!-- 任务名称 -->
                    <el-form-item label="任务名称" prop="name">
                      <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <!-- 发布任务范围小组 -->
                    <el-form-item label="选择部门" prop="groupIds">
                      <el-select v-model="form.groupIds" multiple placeholder="请选择小组">
                        <el-option
                          v-for="group in groups"
                          :key="group.id"
                          :label="group.name"
                          :value="group.id">
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <!-- 发布者 -->
                    <el-form-item label="发布者" prop="publisherId">
                      <el-input v-model="form.publisherId"></el-input>
                    </el-form-item>
                    <!-- 更新者 -->
                    <el-form-item label="更新者">
                      <el-input v-model="form.updaterId"></el-input>
                    </el-form-item>
                    <!-- 截止时间 -->
                    <el-form-item label="截止时间" prop="dealTime">
                      <el-date-picker
                        v-model="form.dealTime"
                        type="datetime"
                        placeholder="选择截止时间"
                        value-format="yyyy-MM-dd HH:mm:ss"
                        style="width: 100%;">
                      </el-date-picker>
                    </el-form-item>
                    <!-- 任务内容 -->
                    <el-form-item label="任务内容" prop="content">
                      <el-input type="textarea" v-model="form.content"></el-input>
                    </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
                    <el-button type="primary" @click="update()">确认更新</el-button>
                  </div>
                </el-dialog>
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
        <div v-else>
          <el-empty :image-size="200"></el-empty>
        </div>

      </div>
    </div>
  </template>

<script>
import { queryMyTask, queryAllNeedReportUser, queryCount, deletetask, update } from '@/api/viewCompletionStatus'
export default {
  name: 'ViewProgress',
  data () {
    return {
      publisherName: '',
      currentPage: 1,
      totalCount: 1,
      // 全部表格数据
      allTableData: [],
      tableData: [],
      gridData: [],
      dialogTableVisible: false,
      // formLabelWidth: '120px',
      numberData: [],
      dialogFormVisible: false,
      form: {
        name: '',
        groupIds: [],
        dealTime: '',
        publisherId: '',
        updaterId: '',
        content: ''
      },
      groups: [ // 示例数据，实际情况可能需要从服务器获取
        { id: 1, name: '小组A' },
        { id: 2, name: '小组B' },
        { id: 3, name: '小组C' }
      ]
    }
  },
  created () {
    // this.search()
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
        this.allTableData = Object.values(response.data)
        // 总数量
        // this.totalCount = response.data.length
        // 取第一页数据
        if (!this.currentPage || this.currentPage === 1) {
          this.handleCurrentChange(1)
        }
      })
    },
    // 搜索任务
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
      const id = { taskId: this.tableData.id }
      queryAllNeedReportUser(id).then((res) => {
        console.log(res)
        this.gridData = Object.values(res.data)
      }
      )
    },
    // 查询当前汇报数量
    number () {
      const id = { taskId: this.tableData.id }
      queryCount(id).then((res) => {
        console.log(res)
        this.numberData.data = res
      }

      )
    },
    // 更新任务
    async update () {
      console.log('submit!')
      const id = this.tableData.id
      const res = await update(id, this.form.name, this.form.groupIds, this.form.publisherId, this.form.updaterId, this.form.dealTime, this.form.content)
      console.log(res)
      alert('任务更新成功')
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
