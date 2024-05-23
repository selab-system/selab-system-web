<script >
export default {
  name: 'adHome',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }

  }

}
</script>

<template>
  <div class="home" style="display: flex">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-submenu index="1-1">
              <template  slot="title" >用户管理</template>
              <el-menu-item index="1-1-1"><router-link to="/adUserChange" class="active">用户信息修改</router-link>></el-menu-item>
              <el-menu-item index="1-1-2"><router-link to="/departInformation" class="active">部门信息</router-link>></el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title" >图书管理</template>
              <el-menu-item index="1-2-1"><router-link to="/QueryBookInformation" class="active">查询书籍信息</router-link>></el-menu-item>
              <el-menu-item index="1-2-2"><router-link to="/changeBookInformation" class="active">修改书籍信息</router-link></el-menu-item>
              <el-menu-item index="1-2-3"><router-link to="/queryBorrowingRecords" class="active">查询借阅状态</router-link>></el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title" >招新报名表管理</template>
              <el-menu-item index="1-3-1"><router-link to="/countNumberOfForm" class="active">统计报名表数量</router-link>></el-menu-item>
              <el-menu-item index="1-3-2"><router-link to="/submissionRecord" class="active">查看提交记录</router-link>></el-menu-item>
              <el-menu-item index="1-3-3"><router-link to="/submittedForm" class="active">查看已提交的报名表</router-link>></el-menu-item>
              <el-menu-item index="1-3-3"><router-link to="/myRmarks" class="active">添加备注信息</router-link>></el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title" >任务管理</template>
              <el-menu-item index="1-4-1"><router-link to="/publishTask" class="active">发布阶段性任务</router-link>></el-menu-item>
              <el-menu-item index="1-4-2"><router-link to="/viewCompletionStatus" class="active">查看进度完成情况</router-link>></el-menu-item>
              <el-menu-item index="1-4-3"><router-link to="/viewReportRecords" class="active">查看汇报记录</router-link>></el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <div class="homeview">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
/deep/ .el-col{
  width: 250px
}
.home{
  height: 880px;

}
.homeview{
  width: 87%;
  height: 880px;
  background-color: blue;
}
.active{
  color: white;
  text-decoration: none;
}

</style>
