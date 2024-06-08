<template>
  <div class="main">
    <el-empty description="所有已经提交的报名表的列表" v-if="empty" ></el-empty>
    <!-- 如何为空的页面设置显示 -->
    <el-form :model="Search" :inline="true" :rules="rules" ref="Search" label-width="100px" class="ruleForm">
      <el-form-item label="姓名" prop="userName">
    <el-input v-model="Search.userName" placeholder="请输入姓名"></el-input>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="submit1('Search')"><i class="el-icon-search"></i>   查询</el-button>
  </el-form-item>

    </el-form>
    <el-form :model="Search" :inline="true" :rules="rules" ref="Search" label-width="100px" class="ruleForm">
  <el-form-item label="年级" prop="grade">
    <el-select v-model="Search.grade" placeholder="请选择年级">
      <el-option label="大一" value="1"></el-option>
      <!-- 使用value进行与data的数据绑定常常 -->
      <el-option label="大二" value="2"></el-option>
    </el-select>
  </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit2('Search2')"><i class="el-icon-search"></i> 查询</el-button>
    </el-form-item>
   </el-form>

   <el-form :model="Search3" :inline="true" :rules="rules3" ref="Search3" label-width="100px" class="ruleForm">

    <el-form-item label="意向部门" prop="intentDepartment">
      <el-radio-group v-model="Search3.intentDepartment">
         <el-radio label=2 :value='2'>网络安全</el-radio>
         <el-radio label=1 :value="3">软件开发</el-radio>
         <el-radio label=4 :value='4'>虚拟现实</el-radio>
         <el-radio label=3 :value='3'>人工智能</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit3('Search3')"><i class="el-icon-search"></i> 查询</el-button>
    </el-form-item>
   </el-form>

    <el-table :data="tableData" border style="width: 90%; margin-top: 100px; font-size: 20px; margin-bottom: 50px;" >

    <el-table-column label="意向部门" width="220">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.intentDepartment }}</span>
      </template>
    </el-table-column>

    <el-table-column label="年级" width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.grade}}</span>
      </template>
    </el-table-column>

    <el-table-column label="面试时间" width="280">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.interviewTime }}</span>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="big" style="margin-left: 100px;" type="danger" @click="handleEdit(scope.$index, scope.row.id)">编辑/修改信息</el-button>
        <el-button size="big"  @click="handleDetail(scope.$index, scope.row.id)">查看详细</el-button>
      </template>
    </el-table-column>

  </el-table>
  <div class="block" s>

  <el-pagination
  style="width: 80%; font-size: 20px; margin-left: 90px;"
  background
    layout="prev, pager, next"
    :total="1000" @current-change="handleCurrentChange">
  </el-pagination>
</div>
  </div>
</template>

<script>
import Bus from '@/utils/EventBus'
import { getlistDetail, getDetailByName, getDetailBygrade } from '@/api/recruit'
export default {

  data () {
    return {
      tableData: [
        {

        }
      ],
      Search: {
        userName: '',
        grade: ''
      },
      rules: {
        userName: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
        ],
        grade: [
          { required: true, message: '请选择年级', trigger: 'change' }
        ]
      }
    }
  },

  methods: {
    // 编辑信息按钮 --》传递用户的返回id（主键？）
    handleEdit (index, row) {
      // 获取到点击列的用户姓名 将姓名进行传递 传递到详细信息页面组件
      Bus.$emit('id', row)

      console.log(row)
      // 点击按钮跳转到详情页组件
      this.topaperDetail()
    },
    // 查看详细信息按钮功能
    handleDetail (index, row) {
      console.log(index, row)
      this.toDetaillist()
    },

    // 查询按钮的设置
    // 使用姓名进行提交查询
    submit1 (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          // 进行数据的请求
          this.nameSearch()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 使用年级进行提交查询
    submit2 (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          // 进行数据的请求
          this.gradeidSearch()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 分页组件点击按钮实现获取页号的功能
    handleCurrentChange (val) {
      console.log(val)
      // 获取页码的同时将页码作为参数传递异步函数进行数据获取
      this.curslist(val)
    },

    // 第一页展示时进行的请求
    async firstlist () {
      const { data } = await getlistDetail(1, 10)
      this.tableData = data
    },
    // 点击不同页面进行数据的更新
    async curslist (cur) {
      const { data } = await getlistDetail(cur, 10)
      this.tableData = data
    },
    // 通过用户姓名进行查询
    async nameSearch (userName) {
      const { data } = await getDetailByName(userName, 1, 20)
      this.tableData = data
    },
    // 通过用户年级进行查询
    async  gradeidSearch (grade) {
      const { data } = await getDetailBygrade(parseInt(grade), 1, 20)
      console.log(data)
      this.tableData = data.data
      this.Search2.grade = ''
    },
    async  intentDepartmentSearch (intentDepartment) {
      const { data } = await getDetailByintentDepartment(parseInt(intentDepartment), 1, 20)
      this.tableData = data.data
      this.Search3.intentDepartment = ''
    },
    // 跳转到用户报名表可更改详情页；
    topaperDetail () {
      this.$router.push('/paperDetail')
    },
    // 跳转到用户报名表详细页
    toDetaillist () {
      this.$router.push('/paperDetaillist')
    }
  }, // 获取paperlist的所有数据并渲染
  mounted () {
    this.firstlist()
  }
}
</script>

<style lang="less" scoped>
.main{
  margin: 10px;
  padding: 30px;
  border: solid 1px #aca8a8;
  border-radius: 20px;
}
</style>
