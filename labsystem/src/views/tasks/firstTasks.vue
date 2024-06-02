<template>
  <div class="todo-header">
    <!-- 管理员首页 -->
    <header>
      <h1 class="el-icon-s-order">任务管理</h1>
      <nav>
        <button>
          <el-link type="info"><a href="./setTasks.vue">发布任务</a></el-link>
        </button>
        <button>
          <el-link type="info" ><a href="./taskDetails.vue">查看任务详情</a></el-link>
        </button>
        <button>
          <el-link type="info"><a href="./reportRecord.vue">查看汇报记录</a></el-link>
        </button>
      </nav>

    </header>
  </div>
</template>

<script>
export default {

}
</script>

<style>
/*任务管理居中*/
.el-icon-s-order {
  text-align: center;
  font-size: 40px;
}

.taskUI {
  display: flex;
}

nav {
  /*居中*/
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin-left: 10px;
  margin-right: 100px;
  text-align: center;
  justify-content: space-between;
  background-color: cornflowerblue;
  font-size: 30px;
  border-radius: 15px;
  width: 250px;
  height: 150px;
  border: 2px solid cornflowerbule;
  cursor: pointer;

  /* Safari */
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
}

button:hover {
  /* 鼠标悬停时的颜色 */
  background-color: white;
  color: black;

  /*鼠标悬停后显示阴影*/
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
