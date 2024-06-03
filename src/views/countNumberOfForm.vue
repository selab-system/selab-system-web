<script>
import requests from "@/untils/request";


  export default {
    created(){
      requests({
        url:'',
        headers:{
          Authorization:'string'
        }
      }).then(res=>{
        console.log(res)
        console.log(res.cur)
        console.log(res.page)
      })
    },
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleCurrentChange(val){
        console.log(`每页${val}条`)
        this.pagesize=val
      },

    },
    data() {
      return {
        tableData: [{
          name:'',
          email:'',
          telephone:'',
          department:'',
          class:'',
          interviewtime:'',
          introduce:'',
          purpose:'',
          remark:'',
          grade:'',
      }],
        total:0,
        currentpage:1,
        pagesize:10,
        allData:[],
        pageData:[],
 }}}
</script>

<template>
<div>

    <el-table
      :data="tableData.slice((currentpage-1)*pagesize,currentpage*pagesize)"
      border
      style="width: 100%">
      <el-table-column
        prop="interviewTime"
        label="面试时间"
        fixed
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        type="string"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="email"
        type="string"
        label="邮箱"
        width="120">
      </el-table-column>
      <el-table-column
        prop="telephone"
        type="integer"
        label="联系方式"
        width="120">
      </el-table-column>
      <el-table-column
        prop="department"
        label="意向部门"
        width="120"
        type="string">
      </el-table-column>
      <el-table-column
        prop="grade"
        label="年级"
        type="integer"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
     @current-chnage="handleCurrentChange" :current-page="currentpage" :total="tableData.length">
  </el-pagination>



</div>
</template>

<style scoped>

</style>
