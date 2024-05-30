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
  }
}
</script>

<style>

</style>
