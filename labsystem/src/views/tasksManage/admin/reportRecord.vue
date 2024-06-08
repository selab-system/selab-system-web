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
// import { queryMyTask } from '@/api/task'
// import dayjs from 'dayjs'
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        publisherId: '王小虎',
        name: '上海',
        dealTime: '任务截止时间',
        zip: 200333,
        tag: '家'
      }]
    }
  },
  methods: {
    indexMethod (index) {
      return index + 1
    }

    // queryMyTask2 () {
    //   queryMyTask().then(response => {
    //     console.log(response.data.data)
    //     this.tableData = response.data.data

    //     this.tableData.map(item => {
    //       const now = dayjs(item.publishTime)
    //       console.log(now.format('YYYY-MM-DD HH:ss:mm'))
    //       item.publishTime = now.format('YYYY-MM-DD HH:ss:mm')
    //       return false
    //     })
    //   }).catch(error => {
    //     console.error('查询任务失败：', error)
    //   })
    // }
  },
  mounted () {
    this.queryMyTask2()
  }
}
</script>

<style>

</style>
