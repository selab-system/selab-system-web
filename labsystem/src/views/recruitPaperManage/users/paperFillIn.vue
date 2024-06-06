<template>
  <div class="body">
  <div class="main">
    <div class='container'>
        <h1 class="title">招新报名表</h1>
        <el-form :model="paperForm" :rules="rules" ref="recruit" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="paperForm.name" size="medium"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="paperForm.email"></el-input>
  </el-form-item>
  <el-form-item label="手机号" prop="phonenumber">
    <el-input v-model="paperForm.phonenumber"></el-input>
  </el-form-item>
  <el-form-item label="班级" prop="class">
    <el-input v-model="paperForm.class" size="small"></el-input>
  </el-form-item>
  <el-form-item label="年级" prop="grade">
    <el-select v-model="paperForm.grade" placeholder="请选择所在年级">
      <el-option label="大一" value=1>大一</el-option>
      <el-option label="大二" value=2>大二</el-option>
      <el-option label="大三" value=3>大三</el-option>
      <el-option label="大四" value=4>大四</el-option>
    </el-select>
  </el-form-item>
  <!-- 补充所属班级 -->
  <el-form-item label="面试时间" required >
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker   type="date" placeholder="选择日期" v-model="paperForm.date1"  style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker  placeholder="选择时间" v-model="paperForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>

  <el-form-item label="意向部门" prop="group">
    <el-radio-group v-model="paperForm.group">
      <el-radio label=2 :value='2'>网络安全</el-radio>
      <el-radio label=1 :value="3">软件开发</el-radio>
      <el-radio label=4 :value='4'>虚拟现实</el-radio>
      <el-radio label=3 :value='3'>人工智能</el-radio>
    </el-radio-group>
  </el-form-item>

  <el-form-item label="个人介绍" prop="introduce">
    <el-input type="textarea" size="medium" v-model="paperForm.introduce"></el-input>
  </el-form-item>
  <el-form-item label="加入目的" prop="purpose">
    <el-input type="textarea" size="small" v-model="paperForm.purpose"></el-input>
  </el-form-item>
  <el-form-item label="备注" prop="notes">
    <el-input type="textarea" size="medium" v-model="paperForm.notes"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('recruit')">提交报名表</el-button>
    <el-button @click="resetForm('recruit')">重置</el-button>
  </el-form-item>
</el-form>
<!-- <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
  <el-time-select
  v-model="value"
  v-if="value"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</el-time-select>
-->
    </div>

  </div>
  </div>
</template>

<script>
import { postPaperData } from '@/api/recruit'
export default {
  data () {
    return {

      paperForm: {
        name: '',
        // string
        phonenumber: '',
        // int
        email: '',
        // string
        grade: '',
        //  int
        // date1: '',
        // // string
        // date2: '',
        class: '',
        // 班级字符串
        group: '',
        // int
        introduce: '',
        // string
        purpose: '',
        //  string
        notes: ''
      // string
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱号', trigger: 'blur' }
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        phonenumber: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, message: '长度为11个字符', trigger: 'blur' }
        ],
        class: [
          { required: true, message: '请输入班级', trigger: 'blur' }
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        grade: [
          { required: true, message: '请选择年级', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        group: [
          { required: true, message: '请选择意向部门', trigger: 'change' }
        ],

        introduce: [
          { required: true, message: '请填写个人介绍', trigger: 'blur' }
        ],
        purpose: [
          { required: true, message: '请填写加入目的', trigger: 'blur' }
        ],
        notes: [
          { required: true, message: '请填写备注', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {

    // Dataconsole1 () {
    //   console.log(this.date1)
    // },
    // Dataconsole2 () {
    //   console.log(this.date2)
    // },

    // 此函数设置在表单的提交按钮上 参数为表单标签名 ref  validate 用于判断
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        // 点击后执行函数在没有错误时进行请求的发送 没有错误如何判断？关键是vaildate函数？
        if (valid) {
          console.log(this.paperForm.group)
          this.postPaperMessage()
          alert('提交成功')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    // 对报名表数据的提交
    async postPaperMessage () {
      try {
        const result = await postPaperData(this.paperForm.name, parseInt(this.paperForm.phonenumber), this.paperForm.email, this.paperForm.class, parseInt(this.paperForm.grade), '2024-10-10 12:03:30', parseInt(this.paperForm.group), this.paperForm.introduce, this.paperForm.purpose, this.paperForm.notes)
        console.log(result)
        // 请求成功后会在此处执行之后的函数

      // 暂时使用弹框进行信息提示
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
{width: 90%;
 height: 85%;
 margin: 0 auto;
margin-top: 50px;
border: 5px solid #23708c;
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
// font-family: 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
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
</style>
