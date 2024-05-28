<!-- 用户主页 -->
<template>
  <div title="用户管理">
<<<<<<< HEAD
    <h1>这是用户管理</h1>
=======
    <top-bar />
    <!--    <modify-personal-information></modify-personal-information>-->
    <department-member></department-member>
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
}
</script>

<style>
=======
import TopBar from "@/components/usersManagementComponent/topBar.vue";
import ModifyPersonalInformation from "@/components/usersManagementComponent/modifyPersonalInformation.vue";
import DepartmentMember from "@/components/usersManagementComponent/departmemtMenber.vue";
import ManageMembers from "@/components/usersManagementComponent/manageMembers.vue";

export default {
  components: {DepartmentMember, ModifyPersonalInformation, TopBar}
}
</script>

<style scoped>
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6

</style>