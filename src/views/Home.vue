<script >
export default {
  name: 'MyHome',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
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
          <span>导航</span>
        </template>
        <el-submenu index="1-1">
          <template  slot="title" >用户管理</template>
          <el-menu-item index="1-1-1"><router-link to="/userinformationchange" class="active">信息修改</router-link>></el-menu-item>
          <el-menu-item index="1-1-2"><router-link to="/departInformation" class="active">部门信息</router-link>></el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title" >图书管理</template>
          <el-menu-item index="1-2-1"><router-link to="/borrowBooks" class="active">借阅书籍</router-link>></el-menu-item>
          <el-menu-item index="1-2-2"><router-link to="/returnBook" class="active">归还书籍</router-link>></el-menu-item>
          <el-menu-item index="1-2-3"><router-link to="/serachAllBooks" class="active">查询所有书籍</router-link>></el-menu-item>
          <el-menu-item index="1-2-4"><router-link to="/serachOwnBooks" class="active">查询本人书籍</router-link>></el-menu-item>
          <el-menu-item index="1-2-5"><router-link to="/serachBooksBorrowed" class="active">查询本人借阅书籍</router-link>></el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title" >招新报名表管理</template>
          <el-menu-item index="1-3-1"><router-link to="/submitForm" class="active">提交报名表</router-link>></el-menu-item>
          <el-menu-item index="1-3-2"><router-link to="/viewOwnForm" class="active">查看本人提交的报名表</router-link>></el-menu-item>
        </el-submenu>
        <el-submenu index="1-4">
          <template slot="title" >任务管理</template>
          <el-menu-item index="1-4-1"><router-link to="/viewTasks" class="active">查看任务</router-link>></el-menu-item>
          <el-menu-item index="1-4-2"><router-link to="/reportProgress" class="active">任务完成后汇报进度</router-link>></el-menu-item>
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
