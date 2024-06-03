<template>
    <!-- 发布任务 -->
    <div class="main">
      <!-- 标题 -->
      <div class="title">
          <p>又要发布任务喽!!!</p>
      </div>
      <div class="content">
        <el-form ref="form" :rules="rules" :model="form" label-width="80px">
           <!-- 任务名称 -->
          <el-form-item label="任务名称" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!-- 发布任务范围小组 -->
          <el-form-item label="选择部门" prop="groupIds">
            <el-select v-model="form.groupIds" multiple placeholder="请选择小组">
              <el-option
                v-for="group in groups"
                :key="group.id"
                :label="group.name"
                :value="group.id">
              </el-option>
            </el-select>
          </el-form-item>
          <!-- 发布者 -->
          <el-form-item label="发布者" prop="publisherId">
            <el-input v-model="form.publisherId"></el-input>
          </el-form-item>
          <!-- 更新者 -->
          <el-form-item label="更新者" prop="updaterId">
            <el-input v-model="form.updaterId"></el-input>
          </el-form-item>
          <!-- 截止时间 -->
          <el-form-item label="截止时间" prop="dealTime">
            <el-date-picker
              v-model="form.dealTime"
              type="datetime"
              placeholder="选择截止时间"
              default-time="12:00:00"
              style="width: 100%;">
            </el-date-picker>
          </el-form-item>
          <!-- 任务内容 -->
          <el-form-item label="任务内容" prop="content">
            <el-input type="textarea" v-model="form.content"></el-input>
          </el-form-item>
          <!-- 发布取消 -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即发布</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </template>

<script>
import { save } from '@/api/publishTask'
export default {
  name: 'ReleaseTasks',
  data () {
    return {
      // 表单绑定内容
      form: {
        name: '',
        groupIds: [],
        dealTime: '',
        publisherId: '',
        updaterId: '',
        content: ''
      },
      groups: [ // 示例数据，实际情况可能需要从服务器获取
        { id: 1, name: '小组A' },
        { id: 2, name: '小组B' },
        { id: 3, name: '小组C' }
      ],
      // 前端校验规则
      rules: {
        name: [
          { required: true, message: '请输入任务名称', trigger: 'blur' }
        ],
        publisherId: [
          { required: true, message: '请输入发布者名字', trigger: 'blur' }
        ],
        groupIds: [
          { required: true, message: '至少选择一个小组', trigger: 'change' }
        ],
        dealTime: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请填写任务内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 发布任务
    onSubmit () {
      console.log('submit!')
      const res = save(this.form.publisherId, this.form.updaterId, this.form.groupIds, this.form.name, this.form.content, this.form.dealTime)
      console.log(res)
      alert('任务发布成功')
    },
    // 重置表单
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>
* {
  margin: 0%;
  padding: auto;
}
.main{
  width: 1600px;
  height: 800px;
  /* background-color: skyblue; */
}
/* 标题 */
.title{
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 1600px;
  height: 70px;
  /* background-color: wheat; */
  border-radius: 20px;
  padding: 15px;
}
.title p{
  font-size: 30px;
  font-weight: 700;
}
/* 内容 */
.content{
  width: 800px;
  height: 730px;
  /* background-color: silver; */
}
el-upload{
  margin: 15px;
}
</style>
