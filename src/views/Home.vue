<script >
export default {
  name: 'MyHome',
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
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="300px">
        <!-- 导航菜单 -->
        <el-row class="tac">
          <el-col :span="12">
            <h5>自定义颜色</h5>
            <el-menu
              router
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
                  <template slot="title">用户管理</template>
                  <el-menu-item index="/UserManage">用户角色</el-menu-item>
                  <el-menu-item index="1-1-2" disabled
                    >用户信息修改</el-menu-item
                  >
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">图书管理</template>
                  <el-menu-item index="/BookManage">选项1</el-menu-item>
                  <el-menu-item index="/BookManage">选项2</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">招新报名表管理</template>
                  <el-menu-item index="1-3-1">选项1</el-menu-item>
                  <el-menu-item index="1-3-2">选项2</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">任务管理</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-col-12 {
  width: 100%;
}
</style>
