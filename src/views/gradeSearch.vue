<script>
import {GradeSearch} from "@/api/submitForm";

export default {
  data(){
    return{
      total:0,
      grade:1,
      currentpage:1,
      pagesize:10,
      allData:[],
      pageData:[],
      intervieweesName:'',
      cur:1,
      size:10,
      code: 0,
      msg: "string",
      data1: [
        [
          {
            id: 0,
            interviewees: {
              userName: "string",
              groupId: 0,
              groupName: "string",
              roleId: 0,
              roleName: "string",
              email: "string",
              phone: "string",
              sex: 0,
              userId: 0,
              createTime: "string",
              updateTime: "string"
            },
            email: "string",
            phone: 0,
            intentDepartment: 0,
            classroom: "string",
            interviewTime: "string",
            introduce: "string",
            purpose: "string",
            remark: "string",
            grade: "string"
          }
        ]
      ]
      // person: {
      //   id: 0,
      //   interviewees: {
      //     userName: " ",
      //     groupId: 0,
      //     groupName: " ",
      //     roleId: 0,
      //     roleName: " ",
      //     email: " ",
      //     phone: " ",
      //     sex: 0,
      //     userId: 0,
      //     createTime: " ",
      //     updateTime: " "
      //   },
      //   email: " ",
      //   phone: 0,
      //   intentDepartment: 0,
      //   classroom: " ",
      //   interviewTime: " ",
      //   introduce: " ",
      //   purpose: " ",
      //   remark: " ",
      //   grade: " "
      // }
    }
  },
  methods:{
    handleClick(row) {
      console.log(row);
    },
    handleCurrentChange(val){
      console.log(`每页${val}条`)
      this.pagesize=val
    },
    gradesearch(){
      GradeSearch({
      grade:this.grade,
        cur:this.cur,
        size:this.size
      }).then(res=>{
        console.log(res)
        this.data1=res.data.data
        console.log(this.data1)
      })
    }

  }

}
</script>

<template>
  <div>

    <input type="text" placeholder="请输入你的年级" v-model="this.grade" >
    <button @click="gradesearch()">查询</button>
    <el-table
      :data="this.data1.slice((currentpage-1)*pagesize,currentpage*pagesize)"
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
      @current-chnage="handleCurrentChange" :current-page="currentpage" :total="this.data1.length">
    </el-pagination>
  </div>
</template>

<style scoped>

</style>
