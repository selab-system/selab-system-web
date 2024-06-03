<template>
  <div>
    <el-empty description="所有已经提交的报名表的列表" v-if="False"></el-empty>
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
    <el-button type="primary" @click="submit2('Search'),test()"><i class="el-icon-search"></i>   查询</el-button>
  </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">

    <el-table-column label="姓名" width="200">
    <template slot-scope="scope">
        <!-- <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover> -->
        <i class="el-icon-user"></i>
        <span >{{ scope.row.interviewees.userName}}</span>
      </template>
    </el-table-column>

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
        <el-button size="big" style="margin-left: 50px;" type="danger" @click="handleEdit(scope.$index, scope.row.id)">编辑/修改信息</el-button>
        <el-button size="big"  @click="handleDetail(scope.$index, scope.row.userName)">查看详细</el-button>
      </template>
    </el-table-column>

  </el-table>
  <div class="block" s>

  <el-pagination
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
          id: 0,
          interviewees: {
            userName: 'string',
            groupId: 0,
            groupName: 'string',
            roleId: 0,
            roleName: 'string',
            email: 'string',
            phone: 'string',
            sex: 0,
            userId: 0,
            createTime: 'string',
            updateTime: 'string'
          },
          email: 'string',
          phone: 0,
          intentDepartment: 0,
          classroom: 'string',
          interviewTime: 'string',
          introduce: 'string',
          purpose: 'string',
          remark: 'string',
          grade: 'string'
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
    // 跳转到用户报名表可更改详情页；
    topaperDetail () {
      this.$router.push('/paperDetail')
    },
    // 跳转到用户报名表详细页
    toDetaillist () {
      this.$router.push('/paperDetaillist')
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
      this.tableData = data
    }
  }, // 获取paperlist的所有数据并渲染
  mounted () {
    this.firstlist()
  }
}
</script>

<style lang="less" scoped>
</style>
