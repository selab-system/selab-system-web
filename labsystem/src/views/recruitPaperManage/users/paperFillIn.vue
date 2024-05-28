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

  <el-form-item label="年级" prop="grade">
    <el-select v-model="paperForm.grade" placeholder="请选择所在年级">
      <el-option label="大一" value="grade1"></el-option>
      <el-option label="大二" value="grade2"></el-option>
      <el-option label="大三" value="grade3"></el-option>
      <el-option label="大四" value="grade4"></el-option>
    </el-select>
  </el-form-item>
  <!-- <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col> -->
  <!-- </el-form-item> -->
  <!-- <el-form-item label="即时配送" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item> -->
  <!-- <el-form-item label="活动性质" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item> -->
  <el-form-item label="意向部门" prop="group">
    <el-radio-group v-model="paperForm.group">
      <el-radio label="网络安全"></el-radio>
      <el-radio label="软件开发"></el-radio>
      <el-radio label="虚拟现实"></el-radio>
      <el-radio label="人工智能"></el-radio>
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
    </div>

  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paperForm: {
        name: '',
        grade: '',
        // date1: '',
        // date2: '',
        group: '',
        introduce: '',
        purpose: '',
        notes: ''
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
        grade: [
          { required: true, message: '请选择年级', trigger: 'change' }
        ],
        // date1: [
        //   { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        // ],
        // date2: [
        //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        // ]
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
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
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
width: 1800px;
height: 1300px;
background-color: #f3f5f5;
padding: 20px;
}
.main{
    background-color: #b4d7e8;
     border-radius: 20px;
     padding: 20px;
     height: 95%;

}
.container
{width: 1200px;
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
