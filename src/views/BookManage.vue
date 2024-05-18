<script >
export default {
  data () {
    return {
      inputbookname: ''
    }
  }
}
</script>

<template>
<div class="bookmanage">
    <el-container>
        <!-- 头部 -->
  <el-header>
    <!-- 输入图书名称 -->
<el-input
  placeholder="请输入图书名称"
  v-model="inputbookname"
  clearable>
</el-input>
<!-- 一个提交按钮 -->
<el-row>
  <el-button type="success" plain>查询</el-button>
</el-row>
  </el-header>
  <!-- 查询到的信息 -->
  <el-descriptions title="图书信息">
    <el-descriptions-item label="图书名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="状态">18100000000</el-descriptions-item>
</el-descriptions>
  <!-- 主体 -->
  <el-main>
    <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  </el-main>
</el-container>
</div>
</template>

<style scoped>
.el-descriptions {
    padding: 40px;
}
</style>
