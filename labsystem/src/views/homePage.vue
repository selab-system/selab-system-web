<template>
<el-container style="height:100%;">
 <el-aside width="300px" style="height: 100%; font-size: 20px; ">
   <el-menu :default-openeds="[]"
    background-color="#000"
    text-color="#fff"
    active-text-color="#e6c150"
    default-active
    router
    style="font-size: 22px;"
    unique-opened="true"
    >
     <h3 class="logo"><i class="el-icon-setting" style="margin-right: 10px;"></i>实验室管理系统</h3>
      <el-menu-item index="/homePageInner" ><i class="el-icon-s-home"></i>系统主界面</el-menu-item>
      <el-submenu  index="2">
        <template slot="title"><i class="el-icon-message"></i>用户管理</template>

       </el-submenu>
       <el-submenu  index="3">
        <template  slot="title"><i class="el-icon-s-management"></i>图书管理</template>
        <!-- 此处设置管理员的权限 -->
        <!-- <el-menu-item index='/bookinfosChange'></el-menu-item> -->
        <el-menu-item index='/bookinfosCheckandChange'>图书信息查询及修改</el-menu-item>
        <el-menu-item index='/borrowedCHeck'>借阅信息查询</el-menu-item>

        <el-menu-item index='/booksSearch'>查询图书</el-menu-item>
        <el-menu-item index='/bookselfCheck'>本人书籍(包含正在借阅)</el-menu-item>
        <!-- <el-menu-item index='/bookselfBorrowing'></el-menu-item> -->
        <el-submenu index="3-1">
          <template  slot="title"><i class="el-icon-s-management"></i>图书借还</template>
          <el-menu-item index='/booksBorrow'>借阅书籍</el-menu-item>
          <el-menu-item index='/booksReturn'>归还书籍</el-menu-item>
        </el-submenu>
      </el-submenu>

       <el-submenu index="4">
       <template slot="title"><i class="el-icon-setting"></i>招新报名表管理</template>
       <el-menu-item index="/paperFillIn"><i class="el-icon-tickets"></i>报名表填写</el-menu-item>
      <el-menu-item index="/paperMyself"><i class="el-icon-s-claim"></i>我的报名表</el-menu-item>
      </el-submenu>
       <el-submenu index="5">
        <template slot="title"><i class="el-icon-setting"></i>任务管理</template>

       </el-submenu>
  </el-menu>
</el-aside>
<el-container>
    <el-header style="text-align: right; font-size: 12px; height: 100px ;">

        <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item >黄金糕</el-dropdown-item>
    <el-dropdown-item>狮子头</el-dropdown-item>
    <el-dropdown-item>螺蛳粉</el-dropdown-item>
    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

    </el-header>

    <el-main>
      <router-view></router-view>
      <!-- <el-table :data="tableData">
        <el-table-column prop="date" label="日期" width="140">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址">
        </el-table-column>
      </el-table> -->
      <!-- <h1 style="font-size:40px;">此处是主页面，欢迎来后台管理系统</h1> -->
    </el-main>
  </el-container>
</el-container>
</template>

<script>

export default {

  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
    console.log(JSON.parse(localStorage.getItem('username')))
  }
}

</script>

<style lang="less" scoped>
*
{
    margin: 0;
    padding: 0;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
.el-aside {
    overflow-x:hidden;
  }
.element.style {
    height: 100%;
    border: 1px solid rgb(238, 238, 238);
}
.el-dropdown-link {
    cursor: pointer;
    color: #000000;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .logo{
    width: 100%;
   margin-top:20px;
   color: #fff;
   text-align: center;
   height: 50px;
   line-height: 50px;
  }
</style>
