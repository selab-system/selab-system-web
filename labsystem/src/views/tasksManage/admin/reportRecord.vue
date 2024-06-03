<template>
  <!-- 管理员查看任务记录 -->
  <div>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="publisherId"
      label="发布者ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="任务名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="dealTime"
      label="任务截止时间">
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { queryMyTask } from '@/api/task'

import dayjs from 'dayjs'
export default {
  data () {
    return {
      tableData: [{
        publisherId: '',
        name: '',
        dealTime: ''
      }]
    }
  },
  methods: {

    indexMethod (index) {
      return index + 1
    },

    queryMyTask () {
      queryMyTask().then(res => {
        this.tableData = res.data
        this.tableDate.forEach(item => {
          item.dealTime = dayjs(item.dealTime).format('YYYY-MM-DD HH:mm:ss')
        })
      })
    }
  }
}
</script>

<style>

</style>
