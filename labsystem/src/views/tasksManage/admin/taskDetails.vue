<template>
  <!-- 管理者查看任务详情及汇报记录 -->
  <div>
  <!-- 进度完成情况 -->
  <div>
    <el-row :gutter="20" v-model="progerssCase">
      <!-- 完成人数 -->
      <el-col :span="6">
        <div>
          <el-statistic
            group-separator=","
            :precision="2"
            :value="value2"
            :title="title"
          ></el-statistic>
        </div>
      </el-col>
      <!-- 完成度 -->
      <el-col :span="6">
        <div>
          <el-statistic title="完成度">
            <template slot="formatter">
              {{  }}
            </template>
          </el-statistic>
        </div>
      </el-col>
      <!-- 未完成人数 -->
      <el-col :span="6">
        <div>
          <el-statistic
            group-separator=","
            :precision="2"
            decimal-separator="."
            :value="value1"
            :title="title"
          >
            <template slot="prefix">
              <i class="el-icon-s-flag" style="color: red"></i>
            </template>
            <template slot="suffix">
              <i class="el-icon-s-flag" style="color: blue"></i>
            </template>
          </el-statistic>
        </div>
      </el-col>
    </el-row>
  </div>
  <!-- 任务详情 -->
  <div id="taskDetails">
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="任务组ID">
            <span>{{ props.row.groupIds }}</span>
          </el-form-item>
          <el-form-item label="更新者ID ">
            <span>{{ props.row.updaterId }}</span>
          </el-form-item>
          <el-form-item label="发布者ID">
            <span>{{ props.row.publisherId }}</span>
          </el-form-item>
          <el-form-item label="更新时间">
            <span>{{ props.row.newTime }}</span>
          </el-form-item>
          <el-form-item label="任务名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="截止时间">
            <span>{{ props.row.dealTime }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="更新者ID"
      prop="updaterId">
    </el-table-column>
    <el-table-column
      label="任务组ID"
      prop="groupIds">
    </el-table-column>
    <el-table-column
      label="任务名称"
      prop="name">
    </el-table-column>
  </el-table>
</div>
</div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .like {
    cursor: pointer;
    font-size: 25px;
    display: inline-block;
  }
</style>

<script>
export default {
  data () {
    return {
      value1: 4154.564,
      value2: 555,
      title: '增长人数',
      tableData: [{
        updaterId: '更新者ID',
        groupIds: '任务组ID',
        publisherId: '发布者ID',
        name: '任务名称',
        content: '任务内容',
        dealTime: '任务截止时间',
        newTime: '更新时间'
      }]
    }
  }
}
</script>

<style>

</style>
