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
    <div class="homeleader">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"

        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-submenu index="1-1">
              <template  slot="title" >用户管理</template>
              <el-menu-item index="1-1-1"><router-link to="/adUserChange" class="active">用户信息修改</router-link>></el-menu-item>
              <el-menu-item index="1-1-2"><router-link to="/adDepartInformation" class="active">部门信息</router-link>></el-menu-item>
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
<!--              <el-menu-item index="1-3-2"><router-link to="/submissionRecord" class="active">查看提交记录</router-link>></el-menu-item>-->
              <el-menu-item index="1-3-2"><router-link to="/idSearch" class="active">id查询的报名表</router-link>></el-menu-item>
              <el-menu-item index="1-3-3"><router-link to="/nameSearch" class="active">用户名查询报名表</router-link>></el-menu-item>
              <el-menu-item index="1-3-4"><router-link to="/departmentSearch" class="active">部门报名表</router-link>></el-menu-item>
              <el-menu-item index="1-3-5"><router-link to="/gradeSearch" class="active">年级查询报名表</router-link>></el-menu-item>
              <el-menu-item index="1-3-6"><router-link to="/changeMassage" class="active">修改提交信息</router-link>></el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title" >任务管理</template>
              <el-menu-item index="1-4-1"><router-link to="/publishTask" class="active">发布阶段性任务</router-link>></el-menu-item>
              <el-menu-item index="1-4-2"><router-link to="/viewCompletionStatus" class="active">查看进度完成情况</router-link>></el-menu-item>
              <el-menu-item index="1-4-3"><router-link to="/viewReportRecords" class="active">查看汇报记录</router-link>></el-menu-item>
            </el-submenu>
            <el-menu-item index="1-5-1"><router-link to="/welcome" class="active">欢迎页</router-link>></el-menu-item>

          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    </div>
    <div class="homeview">
      <router-view></router-view>
    </div>
  </div>

</template>

<style scoped>

router-view{
  position: absolute;
  //height: 880px;
  height: 100vh;
}
/deep/ .el-col{
  width: 250px
}
.home{
height: 100vh;


}
.homeleader{
  height: 100vh;
  background-color: #545c64;
}
.homeview{
  width: 87%;
  height: 100vh;
  position: relative;

}
.active{
  color: white;
  text-decoration: none;
}

</style>
