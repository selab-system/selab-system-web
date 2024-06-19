<template>
  <div>
    <!-- 管理员发布任务页面 -->
    <div class="set">
      <!-- 项目名字 -->
    <div class="inputTask">输入项目名称
       <el-input v-model="inputTask" placeholder="请输入项目名称"></el-input>
    </div>
      <!-- 选择任务小组 -->
      <div id="selectGroup" class="selectGroup">
      选择任务执行小组
  <el-select
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="请选择任务执行小组"
    v-model="selectedTaskGroups"
    >
    <el-option
      v-for="groupName in groupNames"
      :key="groupName"
      :label="groupName"
      :value="groupName">{{ groupName }}
    </el-option>
  </el-select>
      </div>
      <!-- 选择发布时间 -->
      <div class="block">
    <span class="demonstration">选择发布任务时间</span>
    <el-date-picker
      v-model="dataTimeRange"
      type="datetimerange"
      align="right"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
      <!-- 点击发布 -->
      </div>
      <div class="primary">
      <el-row>
      <el-button type="primary" size="mini" @click="submitTasks()">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-row>
      </div>
      </div>
  </div>
</template>

<script>
// get-post
import { queryForUser, firstTask } from '@/api/task'

export default {
  name: 'setTasks',
  data () {
    return {
      // 获取任务小组列表
      taskGroups: [],
      // 选择时间范围
      dataTimeRange: [],
      // 存储小组名称，el-selsct
      groupNames: [],
      // 选择小组
      selectedTaskGroups: [],
      // 项目名称
      inputTask: []
    }
  },
  mounted () {
    this.fetchTaskGroups()
  },
  methods: {
    fetchTaskGroups () {
      queryForUser().then(response => {
        response.data.data.map(item => {
          this.groupNames = item.groupNames
          return false
        })
        //   const groupNamesSet = new Set()
        //   response.data.forEach(task => {
        //     task.groupNames.forEach(groupName => {
        //       groupNamesSet.add(groupName)
        //     })
        //   })
        //   this.groupNames = Array.from(groupNamesSet)
      }).catch(error => {
        console.error('error fetching task groups:', error)
      })
    },
    // 提交，选择时间和范围发送到后端
    submitTasks () {
      const postData = {
        taskGroups: this.selectedTaskGroups,
        TimeRange: this.dataTimeRange,
        inputTask: this.inputTask
      }
      // axios.post('/task/save', postData).then(response => {
      //   console.log('Tasks submitted successfully:', response)
      // 假设 postData 是一个对象，你需要根据实际情况来定义 "空" 的含义
      // 例如，如果 postData 是一个对象，空可能意味着它没有任何属性
      // 如果 postData 是一个数组，空可能意味着它的长度为0

      if (Object.keys(postData).length === 0) {
        // 如果 postData 是空的，直接返回错误
        this.$message({
          message: '发布失败，数据不能为空',
          type: 'error'
        })
        console.error('发布失败，数据不能为空')
      } else {
        // 如果 postData 不为空，执行异步操作
        firstTask(postData).then(response => {
          console.log('Tasks submitted successfully:', response)
          this.$message({
            message: '发布成功',
            type: 'success'
          })
        }).catch(error => {
          this.$message({
            message: '发布失败',
            type: 'error'
          })
          console.error('error submitting tasks', error)
        })
      }
      firstTask(postData).then(response => {
        console.log('Tasks submitted successfully:', response)
        this.$message({
          message: '发布成功',
          type: 'success'
        })
      }).catch(error => {
        this.$message({
          message: '发布失败',
          type: 'error'
        })
        console.error('error submitting tasks', error)
      })
    }
  }
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");

/* 首页发布任务样式 */
.set {
  margin-left: 10%;
  margin-top: 10%;
  width: 100%;
}
.inputTask {
  margin-left: 10%;
  margin-bottom: 10%;
  width: 181px;
}
.selectGroup {
  margin-left: 10%;
  margin-bottom: 10%;
}
.block {
  margin-left: 10%;
  margin-bottom: 10%;
}
.primary {
  margin-left: 50%;
}
</style>
