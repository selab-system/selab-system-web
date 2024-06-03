<template>
    <div style="width: 70%; margin: 0 auto"> 
      <!--显示所有任务的表格  -->
      <el-table :data="tableData" border>
        <el-table-column prop="name" label="任务名称" width="120"/>
        <el-table-column prop="dealTime" label="截止时间" width="200"/>
        <el-table-column prop="publisherName" label="发布者姓名" width="150"/>
        <el-table-column prop="content" label="任务内容"/>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <!-- 汇报怎么实现。 -->
            <el-button @click="handleClick(scope.row)" type="text" size="small">汇报</el-button>
          </template>
        </el-table-column>
      </el-table>
  
      <!-- 分页 -->
      <el-pagination
      style="background-color: none;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="500">
      </el-pagination>
    </div>
  </template>
  
  <script>
  import { queryForUser } from "@/api/TaskManage/TaskManage.js";
  import dayjs from "dayjs";
  export default {
    data() {
      return {
        dialogVisible: false,
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1518 弄",
            zip: 200333,
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1517 弄",
            zip: 200333,
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1519 弄",
            zip: 200333,
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            province: "上海",
            city: "普陀区",
            address: "上海市普陀区金沙江路 1516 弄",
            zip: 200333,
          },
        ],
        // 分页是否展示
        pageChangeBoxActive: false,
        // 分页按钮是否展示
        ShowButtonIsShown: true,
        taskData: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    methods: {
      handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
        },
      handleClick(row) {
          this.dialogVisible=true
        console.log(row);
      },
  
      queryTask() {
        queryForUser().then((res) => {
          this.tableData = res.data;
          this.tableData.forEach(item => {
              item.dealTime = dayjs(item.dealTime).format('YYYY-MM-DD HH:mm:ss');
          })
        });
      },
      CheckTask(item) {
        console.log("item", item);
      },
    },
    created() {
      this.queryTask();
    },
  };
  </script>
  
  <style>
  .inputDiv {
    display: flex;
    justify-content: flex-end;
  }
  </style>