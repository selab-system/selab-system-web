<template>
  <!-- 选择任务小组 -->
  <div>
    <div id="selectGroup">
  <el-select
    v-model="selectedGroups"
    multiple
    filterable
    allow-create
    default-first-option
    placeholder="请选择任务执行小组">
    <el-option
      v-for="item in taskGroups"
      :key="item.value"
      :label="item.label"
      :value="item.value">
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
  </div>
  </div>
</template>
<script>
export default {
  name: 'setTasks',
  data () {
    return {
      // 初始化数据
      selsctedGroups: [],
      taskGroups: [{
        value: 'HTML',
        label: 'HTML'
      }, {
        value: 'CSS',
        label: 'CSS'
      }, {
        value: 'JavaScript',
        label: 'JavaScript'
      }],
      dataTimeRange: []
    }
  }
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.15.14/lib/theme-chalk/index.css");

</style>
