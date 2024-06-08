<template>
  <div  class="body">
  <div class="main">

  <el-descriptions title='我的报名表' :column="3"  border>
  <!-- <el-descriptions-item label="姓名" label-class-name="my-label" content-class-name="my-content">{{Datalist.username}}</el-descriptions-item> -->
  <el-descriptions-item label="邮箱">{{ Datalist.email }}</el-descriptions-item>
  <el-descriptions-item label="手机号">{{ Datalist.phonenumber }}</el-descriptions-item>
  <el-descriptions-item label="意向部门">{{ Datalist.Department}}
    <!-- <el-tag size="small">学校</el-tag> -->
  </el-descriptions-item>
  <el-descriptions-item label="面试时期" :contentStyle="{'text-align': 'left'}">{{Datalist.interviewTime}}</el-descriptions-item>
  <el-descriptions-item label="班级" :contentStyle="{'text-align': 'left'}">{{ Datalist.grade }}</el-descriptions-item>
  <el-descriptions-item label="备注" :contentStyle="{'text-align': 'left'}">{{Datalist.notice  }}</el-descriptions-item>
  <el-descriptions-item label="加入目的" :contentStyle="{'text-align': 'left'}">{{ Datalist.purpose }}</el-descriptions-item>
  <el-descriptions-item label='更新时间' :contentStyle="{'text-align': 'left'}">{{Datalist.updateTime  }}</el-descriptions-item>

</el-descriptions>
  </div>

  </div>
</template>

<script>
import { getpaperData } from '@/api/recruit'
export default {
  data () {
    return {
      userid: '8',
      // 此处设置假数据
      Datalist: {
        email: 'adasdadassdsad'
      }
    }
  },
  mounted () {
    this.userid = JSON.parse(localStorage.getItem('userid'))
    this.getpaperData()
  },
  methods: {
    async getpaperData () {
      const { data } = await getpaperData(this.userid)
      this.Datalist = data
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
.el-descriptions-item{
  text-align: center;
   //文本居中
 min-width: 250px;
 //最小宽度

word-break: break-all; //过长时自动换行

}
</style>
