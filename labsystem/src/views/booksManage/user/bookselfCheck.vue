<template>
    <div class="main" style="height: 100%">
      <div style="width: 50%; background-color: #f2f6fc; height: 100%">
        <div
          style="
            margin-bottom: 30px;
            font-size: 25px;
            margin-left: 38%;
            margin-top: 25px;
            color: #409eff;
            background-color: #f2f6fc;
          "
        >
          我的借阅
        </div>
        <!-- <el-tag>我的借阅</el-tag> -->
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="书籍编号" width="180">
          </el-table-column>
          <el-table-column prop="date" label="起止时间" width="180">
          </el-table-column>
          <el-table-column prop="name" label="书名" width="180">
          </el-table-column>
          <el-table-column prop="writer" label="作者"> </el-table-column>
        </el-table>
      </div>
      <div
        style="
          width: 50%;
          background-color: #ebeef5;
          border-left: 1px solid #ebeef5;
        "
      >
        <div
          style="
            margin-bottom: 30px;
            font-size: 25px;
            margin-left: 38%;
            margin-top: 25px;
            color: #409eff;
          "
        >
          我的图书
        </div>
        <el-table :data="tableData2" style="width: 100%">
          <el-table-column prop="id" label="书籍编号" width="180">
          </el-table-column>
          <el-table-column prop="date" label="起止时间" width="180">
          </el-table-column>
          <el-table-column prop="name" label="书名" width="180">
          </el-table-column>
          <el-table-column prop="writer" label="作者"> </el-table-column>
        </el-table>
      </div>
    </div>
  </template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          id: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-02',
          name: '这是一本假书',
          writer: '王小虎'
        },
        {
          id: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-02',
          name: '这是一本假书',
          writer: '王小虎'
        },
        {
          id: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-02',
          name: '这是一本假书',
          writer: '王小虎'
        }
      ],
      tableData2: [
        {
          id: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-02',
          name: '这是一本假书',
          writer: '王小虎'
        },
        {
          id: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-02',
          name: '这是一本假书',
          writer: '王小虎'
        }, {
          id: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-02',
          name: '这是一本假书',
          writer: '王小虎'
        }, {
          id: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-02',
          name: '这是一本假书',
          writer: '王小虎'
        }
      ]
    }
  }
}
</script>

  <style scoped>
  .main {
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */
  }
  </style>
