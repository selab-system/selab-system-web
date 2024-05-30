<template>
    <div>
    <!-- 普通用户：汇报任务进度及备注 -->
    <!-- 任务状态 -->
    <div class="testProcess">任务状态
 <el-radio-group v-model="radio">
    <el-radio :label="3">未完成</el-radio>
    <el-radio :label="6">已完成</el-radio>
    <el-radio :label="9">已红温</el-radio>
  </el-radio-group>
    </div>
    <div class="details">
        <!-- 汇报备注信息 -->
        <el-input
  type="text"
  placeholder="请输入任务标题"
  v-model="text"
  maxlength="30"
  show-word-limit
  @keyup.enter.native="submitForm">
</el-input>
<div style="margin: 20px 0;"></div>
<el-input
  type="textarea"
  placeholder="请输入汇报备注"
  v-model="textarea"
  maxlength="300"
  show-word-limit
  @keyup.enter.native="submitForm"
>
</el-input>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      radio: 3,
      text: '',
      textarea: ''
    }
  },
  methods: {
    submitForm () {
      console.log('任务状态:', this.radio)
      console.log('任务标题:', this.text)
      console.log('汇报备注:', this.textarea)
    }
  }
}
</script>

<style>
.testProcess{
    /*居中 */
    text-align: center;
    /* 距左侧宽20% */
    margin-left: 10%;
}
.details{
    /* 距上宽20% */
    margin-top: 10%;
}

</style>
