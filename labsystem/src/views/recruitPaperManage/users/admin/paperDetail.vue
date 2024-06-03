<template>

    <!-- <el-empty description="报名表信息详细"></el-empty> -->

    <div class="body">
      <el-page-header @back="goBack()" content="详情页面">
</el-page-header>
  <div class="main">
    <div class='container'>
        <h1 class="title">招新报名表</h1>
        <el-form :model="Detail" :rules="rules" ref="Detail" label-width="100px" class="ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="Detail.interviewees.userName" size="medium"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="Detail.email"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="phonenumber">
    <el-input v-model="Detail.phone"></el-input>
  </el-form-item>
  <el-form-item label="班级" prop="class">
    <el-input v-model="Detail.classroom" size="small"></el-input>
  </el-form-item>
  <el-form-item label="年级" prop="grade">
    <el-select v-model="Detail.grade" placeholder="请选择所在年级">
      <el-option label="大一" value="1">大一</el-option>
      <el-option label="大二" value="2">大二</el-option>
      <el-option label="大三" value="3">大三</el-option>
      <el-option label="大四" value="4">大四</el-option>
    </el-select>
  </el-form-item>
  <!-- 补充所属班级 -->
  <!-- <el-form-item label="面试时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker @change="date1()" type="date" placeholder="选择日期" v-model="" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker @change="date2()" placeholder="选择时间" v-model="paperForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item> -->
  <!-- 暂时设置面试时间不可修改 -->
  <el-form-item label="意向部门" prop="group">
    <el-radio-group v-model="Detail.intentDepartment">
      <el-radio label='2' :value='2'>网络安全</el-radio>
      <el-radio label="1" :value="1">软件开发</el-radio>
      <el-radio label="4" :value='4'>虚拟现实</el-radio>
      <el-radio label="3" :value="3">人工智能</el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="个人介绍" prop="introduce">
    <el-input type="textarea" size="medium" v-model="Detail.introduce"></el-input>
  </el-form-item>
  <el-form-item label="加入目的" prop="purpose">
    <el-input type="textarea" size="small" v-model="Detail.purpose"></el-input>
  </el-form-item>
  <el-form-item label="备注" prop="notes">
    <el-input type="textarea" size="medium" v-model="Detail.remark"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="open()">更新报名表</el-button>
    <!-- 对按钮需要设置 1.校验内容的输入2.产生提示消息 -->
    <el-button @click="resetForm('recruit')">重置</el-button>
  </el-form-item>
</el-form>
    </div>

  </div>
  </div>
</template>

<script>

import Bus from '@/utils/EventBus'
import { getDetail, postUpdate } from '@/api/recruit'
export default {
  data () {
    return {
      id: '',
      Detail: {
        // 此处的参数仅用于设置使用 用于占位 实际Detail将是get来的整个大对象
        id: 0,
        interviewees: {
          userName: 'string',
          sex: 0
        },
        email: 'string',
        phone: 'sad',
        intentDepartment: 0,
        classroom: 'string',
        interviewTime: 'string',
        introduce: 'string',
        purpose: 'string23234',
        remark: 'string',
        grade: 'string'
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'input' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'input' }
        ],
        email: [
          { required: true, message: '请输入邮箱号', trigger: 'change' }
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phonenumber: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { min: 11, message: '长度为11个字符', trigger: 'change' }
        ],
        class: [
          { required: true, message: '请输入班级', trigger: 'change' }
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        grade: [
          { required: true, message: '请选择年级', trigger: 'change' }
        ],
        // date1: [
        //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        // ],
        // date2: [
        //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        // ],
        group: [
          { required: true, message: '请选择意向部门', trigger: 'change' }
        ],

        introduce: [
          { required: true, message: '请填写个人介绍', trigger: 'change' }
        ],
        purpose: [
          { required: true, message: '请填写加入目的', trigger: 'change' }
        ],
        notes: [
          { required: true, message: '请填写备注', trigger: 'change' }
        ]
      }

    }
  },
  methods: {

    // 在请求中添加id参数(用户id的详细了解)与
    async getDetail () {
      const { data } = await getDetail(parseInt(this.id))
      this.Detail = data
    // 直接接收整个对象
    },
    // 点击更新提交按钮时进行提示框的弹出 同时进行数据的post
    open () {
      this.$confirm('此操作将更新报名表信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log('asdfsad')
        this.postUpdate()
        this.$message({
          type: 'success',
          message: '更新成功!'
        })
        alert('更新成功!')
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消更新'
        })
      })
    },
    // 返回上一页操作
    goBack () {
      console.log('go back')
      history.back()
    },
    // submitForm (formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!')
    //     } else {
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    // },
    // 校验信息出现错误
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },

    // 上传更新后的数据
    async postUpdate () {
      const { msg } = await postUpdate(this.Detail)
      console.log(msg)
    }
  },
  // 接收到列表页面传来的姓名
  created () {
    Bus.$on('userName', (id) => {
      console.log(id)
      this.id = id
    })
    console.log(this.id)
  },
  // 在页面渲染后对详细数据进行获取并进行保存展示
  mounted () {
    this.getDetail()
  }
  // 对更新后的数据进行提交

}
</script>

<style lang="less" scoped >
*{
    margin: 0 0;
    padding: 0 0;
}
.el-main
{
padding: 0;
}
.body{
width: 90%;
height: 100%;
background-color: #f3f5f5;
padding: 20px;
}
.main{
    background-color: #bce0fc;
     border-radius: 20px;
     padding: 20px;
     height: 100%;

}
.container
{width: 1200px;
 height: 85%;
 margin: 0 auto;
margin-top: 50px;
border: 5px solid #965319;
border-radius: 30px;
padding: 30px;
}
.title{
    font-size: 80px;
    margin: 0 auto;
    width: 500px;
    height: 120px;
    line-height: 90px;
    padding-bottom: 40px;
    font-family:  "SimSun", "宋体", serif;
}
::v-deep .el-form-item__label{
  color: #333;
  font-size: 25px;

  font-family: "SimSun", "宋体", serif;
/* font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif; */
}

::v-deep .el-radio__label{
font-size: 20px;

}
::v-deep .el-input__innerL
{width: 300px;

}

::v-deep .el-button, .el-dropdown{
font-size: 30px;
width: 200px;
height: 100px;
}
::v-deep .el-page-header
{
  width:100%;
  background-color: #f3f5f5;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
}
</style>
