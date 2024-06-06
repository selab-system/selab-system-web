<template>
  <div  class="body">
  <div class="main">

  <el-descriptions title='我的报名表' :column="3" border>
  <!-- <el-descriptions-item label="姓名" label-class-name="my-label" content-class-name="my-content">{{Datalist.username}}</el-descriptions-item> -->
  <el-descriptions-item label="邮箱">{{ Datalist.email }}</el-descriptions-item>
  <el-descriptions-item label="手机号">{{ Datalist.phone }}</el-descriptions-item>
  <el-descriptions-item label="意向部门">{{ Datalist.intentDepartment}}
    <!-- <el-tag size="small">学校</el-tag> -->
  </el-descriptions-item>
  <el-descriptions-item label="面试时期" :contentStyle="{'text-align': 'left'}">{{Datalist.interviewTime}}</el-descriptions-item>
  <el-descriptions-item label="班级" :contentStyle="{'text-align': 'left'}">{{ Datalist.grade }}</el-descriptions-item>
  <el-descriptions-item label="备注" :contentStyle="{'text-align': 'left'}">{{Datalist.remark }}</el-descriptions-item>
  <el-descriptions-item label="加入目的" :contentStyle="{'text-align': 'left'}">{{ Datalist.purpose }}</el-descriptions-item>
  <el-descriptions-item label='自我介绍' :contentStyle="{'text-align': 'left'}">{{Datalist.introduce  }}</el-descriptions-item>

</el-descriptions>
<!--
<el-descriptions title="报名表2" :column="3" border>
<el-descriptions-item :title="title" label="面试日期" label-class-name="my-label" content-class-name="my-content">2024-2-3</el-descriptions-item>
<el-descriptions-item label="邮箱"></el-descriptions-item>
<el-descriptions-item label="手机号">123123213</el-descriptions-item>
<el-descriptions-item label="意向部门">软件开发

</el-descriptions-item>
<el-descriptions-item label="备注" :contentStyle="{'text-align': 'left'}">实验室招新</el-descriptions-item>
</el-descriptions> -->
  </div>

  </div>
</template>

<script>
import { getRecruitData } from '@/api/recruit'
export default {
  data () {
    return {
      // 此处存在错误：仅设置Datalist对象用来接收传输回来的data数据
      userid: '8',
      // 此处设置存在错误
      Datalist: {}
      // 姓名
      // updateTime: '',
      // // 更新时间
      // Department: '',
      // //  意向部门
      // email: '',
      // // 邮箱
      // phone: '',
      // // 电话
      // grade: '',
      // // 年级
      // purpose: '',
      // // 目的
      // notice: '',
      // // 备注
      // interviewTime: ''
      // 面试时间

    }
  },
  mounted () {
    // this.userid = JSON.parse(localStorage.getItem('userid'))
    this.getpaperData()
  },
  methods: {
    // 此处获取我的报名表信息（仅一份）
    async getpaperData () {
      const { data } = await getRecruitData(this.userid)
      // 解构
      this.Datalist = data.data[0]
      console.log(this.Datalist)
    }
  }
}
</script>

<style lang="less" scoped>
*{
  padding: 0 0;
  margin: 0 0;
}
.body{
width: 90%;
height: 90%;
background-color: #ebeef9;
padding: 70px;
}
.my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;}
    ::v-deep  .el-descriptions__title{
font-size: 50px;
    }
</style>
