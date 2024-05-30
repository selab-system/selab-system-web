<script >
export default {
  // data(){
  //  return{
  //    registrationid:'',
  //   person:{
  //       id: 0,
  //       interviewees: {
  //         userName : " ",
  //         groupId : 0,
  //         groupName : " ",
  //         roleId : 0,
  //         roleName: " ",
  //         email: " ",
  //         phone: " ",
  //         sex: 0,
  //         userId: 0,
  //         createTime: " ",
  //         updateTime: " "
  //       },
  //       email: " ",
  //       phone: 0,
  //       intentDepartment: 0,
  //       classroom: " ",
  //       interviewTime: " ",
  //       introduce: " ",
  //       purpose: " ",
  //       remark: " ",
  //       grade: " "
  //     },
  //     msg: " "
  // }},
  methods: {
    open() {
//       let registrationid
//       this.$prompt('请输入id', '提示', {
//         confirmButtonText: '确定',
//         cancelButtonText: '取消',
//         inputPattern: /^\w+$/,
//         inputErrorMessage: '未查询到此id'
//       }).then(({ value }) => {
//         registrationid=value
//         this.$message({
//           type: 'success',
//           message: '查询成功' + value,
//
//         });
//       }).catch(() => {
//         this.$message({
//           type: 'info',
//           message: '取消输入'
//         });
//       });
//       idsearch(registrationid).then(res=>{
//          person=res
//       })
//     }
//   }
// }

    }}}
</script>


<template>
<div>
  <router-link to="/idSearch" class="active">id查询</router-link>
  <router-link to="/departmentSearch" class="active">部门查询</router-link>
  <router-link to="/nameSearch" class="active">Name查询</router-link>
  <router-link to="/gradeSearch" class="active">年级查询</router-link>
  <router-view></router-view>
</div>
</template>

<style scoped>
.active{
  margin-left: 20px;
}
</style>
