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
      prop="publisherName"
      label="发布者"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="任务名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="publishTime"
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
      tableData: []
    }
  },
  methods: {

    indexMethod (index) {
      return index + 1
    },

    queryMyTask2 () {
      queryMyTask().then(response => {
        console.log(response.data.data)
        this.tableData = response.data.data

        this.tableData.map(item => {
          const now = dayjs(item.publishTime)
          console.log(now.format('YYYY-MM-DD HH:ss:mm'))
          item.publishTime = now.format('YYYY-MM-DD HH:ss:mm')
        })
      }).catch(error => {
        console.error('查询任务失败：', error)
      })
    }
  },
  mounted () {
    this.queryMyTask2()
  }
}
</script>

<style>

</style>
