<!-- 招新管理表管理 -->
<template>
  <div title="招新报名表">
    <!-- 导航栏组件 -->
    <!-- <navBasicComponent/> -->
    <!-- 主体业务组件 -->
    <mainPerfectTable/>
    <!-- 报名表组件 -->
    <RegistrasionForm/>
  </div>
</template>

<script>
import navBasicComponent from '@/components/navComponent/navBasicComponent.vue';
import mainPerfectTable from '@/components/mainCardComponent/mainPerfectTable.vue';
import RegistrasionForm from '@/components/mainCardComponent/RegistrasionForm.vue';
export default {
  components: {
    navBasicComponent,
    mainPerfectTable,
    RegistrasionForm
  }
}
</script>

<style>

</style>