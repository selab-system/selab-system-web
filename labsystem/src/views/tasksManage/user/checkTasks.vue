<template>
    <div>
    <!-- 普通用户查看任务 -->
    <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="publisherId"
      label="发布者ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="updaterId"
      label="更新者ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="groupIds"
      label="任务组ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="任务名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="content"
      label="任务内容"
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
  name: 'checkTasks',
  data () {
    return {
      // 初始化数据
      tableData: [{
        publisherId: 'wuwu',
        updaterId: 'shy',
        groupIds: 'sun',
        name: 'forever',
        content: 'yeah“我明白，我们的最后审判将是惊醒，因为我们只是梦见了我们整个的生活，设想我们是活着的。我们确曾真正活过一次，也已经死了，现在我们是死人”',
        dealTime: 'no'
      }]
    }
  }
}
</script>

<style>

</style>
