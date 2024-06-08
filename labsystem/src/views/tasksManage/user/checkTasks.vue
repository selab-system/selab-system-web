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
        content: 'yeah“我明白，我们的最后审判将是惊醒，因为我们只是梦见了我们整个的生活，设想我们是活着的。我们确曾真正活过一次，也已经死了，现在我们是死人。我们当成真实存在的那些生活、梦，对于上帝而言没有任何价值，因为任何事情都不曾真正发生过。我们不会为自己的梦负责，我们只对那种我们记不得的事情负责，因为死亡让我们睡着了。只有那种忘却了的存在才是真实的存在，我们在那里曾是有罪或是有德行的人。因此我们不知道醒来后该怎么办——是投入地狱之火，还是投入永恒的光明生活。我不得不再说一遍：我们的世界住的是熟睡的人，他们死了，却梦见自己活着。因此世界上的人越来越多，不断有熟睡的死人移居这个世界，他们的数量越来越多，而真正的人，即那种第一次活着的人却显得寥寥无几。在整个混乱的世界上我们中谁也不知道，也不可能能知道自己究竟只是梦见自己活着，还是真正活着。”',
        dealTime: 'no'
      }]
    }
  }
}
</script>

<style>

</style>
