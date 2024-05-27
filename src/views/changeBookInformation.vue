<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      numberValidateForm: {
          age: ''
        }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    ubmitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>

<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="图书名">
      <el-input v-model="formInline.user" placeholder="图书名"></el-input>
    </el-form-item>

    <el-form-item label="图书id">
      <el-input v-model="formInline.user" placeholder="图书id"></el-input>
    </el-form-item>
    
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>

    <!-- 骨架屏 -->
    <el-skeleton :rows="1" />

    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: true, message: '年龄不能为空' },
          { type: 'number', message: '年龄必须为数字值' },
        ]"
      >
        <el-input
          v-model.number="numberValidateForm.age"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')"
          >提交</el-button
        >
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-form>
</template>

<style scoped>
</style>
