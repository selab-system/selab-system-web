<script>
// 引入封装的axios
import { getTableData } from '@/api/userquery'
export default {
  data () {
    return {
      inputgroup: '',
      inputusername: '',
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  async created () {
    this.getTableData()
  },
  methods: {
    async getTableData () {
      const res = await getTableData()
      console.log(res)
    }
  }
}
</script>

<template>
<el-container>
  <!-- 侧边部分 -->
  <el-aside width="300px">
    <!-- 两个输入框 -->
    <el-input
  placeholder="请输入小组名称"
  v-model="inputgroup"
  clearable>
</el-input>
  <!-- 一个提交按钮 -->
<el-row>
  <el-button type="success" plain>查询</el-button>
</el-row>
  </el-aside>
  <!-- 主体内容 -->
  <el-main>
    <!-- 输入 -->
    <el-input
  placeholder="请输入用户名"
  v-model="inputusername"
  clearable>
</el-input>
    <!-- 用户信息查询结果 -->
    <el-descriptions title="用户信息">
    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
    <!-- 表格 -->
    <template>
  <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
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
</template>
  </el-main>
</el-container>
</template>

<style scoped>

</style>
