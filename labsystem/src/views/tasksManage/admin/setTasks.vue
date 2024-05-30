<template>
  <div>
    <!-- 管理员发布任务页面 -->
    <div class="set">
      <!-- 选择任务小组 -->
      <div id="selectGroup" class="selectGroup">
      选择任务执行小组
  <el-select
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="请选择任务执行小组">
    <el-option
      v-for="item in taskGroups" ：key="item.value"
      :key="item.value"
      :label="item.label"
      :value="item.value">{{ item.name }}
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
      <el-button type="primary" size="mini">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      </el-row>
      </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'setTasks',
  data () {
    return {
      data () {
        return {
          taskGroups: []
        }
      },
      created () {
        this.fetchTaskGroups()
      },
      methods: {
        fetchTaskGroups () {
          axios.get('/task/taskGroups').then(response => {
            this.taskGroups = response.data
          }).catch(error => {
            console.log('error', error)
          })
        }
      },
      dataTimeRange: []
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
