<template>
   <div  class="body">
    <el-page-header @back="goBack()" content="详情页面">
    </el-page-header>
  <div class="main">
  <el-descriptions title='报名表详细' :column="3" border size="big">
  <el-descriptions-item style="width: 50px;" label="姓名" label-class-name="my-label" content-class-name="my-content">{{Datalist.interviewees.userName}}</el-descriptions-item>
  <el-descriptions-item label="邮箱">{{ Datalist.email }}</el-descriptions-item>
  <el-descriptions-item label="手机号">{{ Datalist.phone }}</el-descriptions-item>
  <el-descriptions-item label="面试时间">{{ Datalist.interviewTime}}</el-descriptions-item>
  <el-descriptions-item label="意向部门">{{ Datalist.intentDepartment}}</el-descriptions-item>

    <!-- <el-tag size="small">学校</el-tag> -->

  <el-descriptions-item label="面试时期" :contentStyle="{'text-align': 'left'}">{{Datalist.interviewTime}}</el-descriptions-item>
  <el-descriptions-item label="年级" :contentStyle="{'text-align': 'left'}">{{ Datalist.grade }}</el-descriptions-item>
  <el-descriptions-item label="班级" :contentStyle="{'text-align': 'left'}">{{ Datalist.classroom }}</el-descriptions-item>
  <el-descriptions-item label="备注" :contentStyle="{'text-align': 'left'}">{{Datalist.remark  }}</el-descriptions-item>
  <el-descriptions-item label="个人介绍" :contentStyle="{'text-align': 'left'}">{{ Datalist.introduce }}</el-descriptions-item>
  <el-descriptions-item label="加入目的" :contentStyle="{'text-align': 'left'}">{{ Datalist.purpose }}</el-descriptions-item>

</el-descriptions>
  </div>

  </div>
</template>

<script>
import Bus from '@/utils/EventBus'
import { getDetail } from '@/api/recruit'
export default {
  data () {
    return {
      // 设置返回的数据对象组合
      Datalist: {
        id: 0,
        interviewees: {
          userName: 'string',
          groupId: 0,
          groupName: 'string',
          roleId: 0,
          roleName: 'string',
          email: 'string',
          phone: 'string',
          sex: 0,
          userId: 0,
          createTime: 'string',
          updateTime: 'string'
        },
        email: 'string',
        phone: 0,
        intentDepartment: 0,
        classroom: 'string',
        interviewTime: 'string',
        introduce: 'string',
        purpose: 'string',
        remark: 'string',
        grade: 'string'
      }

    }
  },
  mounted () {
    // 在页面加载时就获取数据渲染
    this.getDetail()
  },
  // 在页面加载时获取列表页面中id值

  // 此处对id的设置存在错误 在函数内部可以看
  // 到this.id值的改变但在外部产看时没有改变
  created () {
    Bus.$on('id', (id) => {
      console.log(id)
      this.id = id
      console.log(this.id)
    })
  },
  methods: {
    // 获取数据
    // 调同一个请求即可
    async getDetail () {
      const { data } = await getDetail(parseInt(this.id))
      this.Datalist = data
    // 直接接收整个对象
    },
    goBack () {
      console.log('go back')
      history.back()
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
::v-deep .el-descriptions__body .el-descriptions__table .el-descriptions-item__cell
{
  height: 80px;
}
</style>
