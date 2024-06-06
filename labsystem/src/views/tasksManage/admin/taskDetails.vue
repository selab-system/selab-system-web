<template>
  <div>
  <!-- 管理者查看任务详情及汇报记录 -->
  <!-- 任务详情 -->
  <div id="taskDetails">
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <el-table-column type="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="任务组ID" prop="groupNames">
            <span></span>
          </el-form-item>
          <el-form-item label="汇报数量 " prop="reportCount">
            <span></span>
          </el-form-item>
          <el-form-item label="发布者ID" prop="publisherName">
            <span></span>
          </el-form-item>
          <el-form-item label="状态" prop="status | statusFilter">
            <span></span>
          </el-form-item>
          <el-form-item label="任务名称" prop="name">
            <span></span>
          </el-form-item>
          <el-form-item label="任务内容" prop="content">
            <span></span>
          </el-form-item>
          <el-form-item label="截止时间" prop="dealTime">
            <span></span>
          </el-form-item>
        </el-form>
        </el-table-column>
    </el-table-column>
    <el-table-column
      label="发布者ID"
      props="publisherName">
    </el-table-column>
    <el-table-column
      label="任务组ID"
      props="groupIds">
    </el-table-column>
    <el-table-column
      label="任务名称"
      props="name">
    </el-table-column>
  </el-table>
</div>
</div>
</template>

<script>
import { queryById } from '@/api/task'
export default {
  data () {
    return {
      tableData: [{
        updaterId: '汇报数量',
        groupNames: '任务组ID',
        publisherName: '发布者ID',
        name: '任务名称',
        content: '任务内容',
        dealTime: '任务截止时间',
        status: '状态'
      }]
    }
  },
  mounted () {
    // this.fetchReportCount()
    this.fetchTasks()
  },
  methods: {
    // fetchReportCount () {
    //   queryCount().then(response => {
    //     this.reportCount = response.data.count
    //   }).catch(error => {
    //     console.error('error fetching report count:', error)
    //   })
    // },
    fetchTasks () {
      queryById().then(response => {
        this.tableData = response.data.data
      }).catch(error => {
        console.error('error fetching tasks:', error)
      })
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        0: '未发布',
        1: '已发布'
      }
      return statusMap[status] || '未知状态'
    }
  }
}

</script>

<style>

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
  .like {
    cursor: pointer;
    font-size: 25px;
    display: inline-block;
  }
</style>
