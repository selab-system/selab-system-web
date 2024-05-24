<template>
    <!-- 发布任务 -->
    <div class="main">
      <!-- 标题 -->
      <div class="title">
          <p>又要发布任务喽!!!</p>
      </div>
      <div class="content">
        <el-form ref="form" :model="form" label-width="80px">
           <!-- 任务名称 -->
          <el-form-item label="任务名称">
            <el-input v-model="form.groupIds"></el-input>
          </el-form-item>
          <!-- 发布任务范围小组 -->
          <el-form-item label="选择部门">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <!-- 发布者 -->
          <el-form-item label="发布者">
            <el-input v-model="form.publisherId"></el-input>
          </el-form-item>
          <!-- 更新者 -->
          <el-form-item label="更新者">
            <el-input v-model="form.updaterId"></el-input>
          </el-form-item>
          <!-- 截止时间 -->
          <el-form-item label="截止时间" >
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date3" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date4" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <!-- 任务内容 -->
          <el-form-item label="任务内容">
            <el-input type="textarea" v-model="form.content"></el-input>
            <!-- <el-upload
              class="upload-demo"
              drag
              action="http://localhost:8080/"
              multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload> -->
          </el-form-item>
          <!-- 发布取消 -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即发布</el-button>
            <el-button >取消</el-button>
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
      form: {
        name: '',
        groupIds: '',
        // date1: '',
        // date2: '',
        date3: '',
        date4: '',
        publisherId: '',
        updaterId: '',
        content: ''
      }
    }
  },
  // async created () {
  //   this.save()
  // },
  methods: {
    async onSubmit () {
      console.log('submit!')
      const res = await save(this.form.publisherId, this.form.updaterId, this.form.groupIds, this.form.name, this.form.content, this.form.dealTime)
      console.log(res)
      alert('任务发布成功')
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
