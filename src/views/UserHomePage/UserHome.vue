<!-- 用户主页 -->
<template>
  <div title="用户管理">
    <top-bar />
    <!--    <modify-personal-information></modify-personal-information>-->
    <department-member></department-member>
  </div>
</template>

<script>
import TopBar from "@/components/usersManagementComponent/topBar.vue";
import ModifyPersonalInformation from "@/components/usersManagementComponent/modifyPersonalInformation.vue";
import DepartmentMember from "@/components/usersManagementComponent/departmemtMenber.vue";
import ManageMembers from "@/components/usersManagementComponent/manageMembers.vue";

export default {
  components: {DepartmentMember, ModifyPersonalInformation, TopBar}
}
</script>

<style scoped>

</style>