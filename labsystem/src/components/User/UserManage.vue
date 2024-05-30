<template>
  <div class="main">
    <div class="search">
      <SearchDepartment
        :groups="groups"
        :getDpartmentName="getDpartmentName"
      ></SearchDepartment>
    </div>
    <div class="show">
      <SearchUser :user="user" :showDepartment="showDepartment"></SearchUser>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="50"
        style="
          width: 70%;
          box-sizing: border-box;
          padding-left: 420px;
          margin-top: 20px;
        "
        @current-change="changepage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import SearchDepartment from './SearchDepartment.vue'

export default {
  data () {
    return {
      groups: {
        开发: ['groupone', 'grouptwo'],
        网安: ['groupone', 'grouptwo']
      },
      user: {
        xxx: ' 1'
      },
      showDepartment: undefined
    }
  },
  components: {
    SearchDepartment

  },
  methods: {
    getDpartmentName (Department) {
      this.showDepartment = Department
    },
    changepage (page) {
      console.log(page)
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
}
.search {
  width: 20%;
  height: 100%;
}
.show {
  width: 80%;
  height: 100%;
}
</style>
