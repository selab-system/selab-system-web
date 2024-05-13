<!-- 招新管理表管理 -->
<template>
  <div title="招新报名表">
    <!-- 导航栏组件 -->
    <navBasicComponent/>
    <!-- 主体业务组件 -->
    <mainCard/>
  </div>
</template>

<script>
import navBasicComponent from '@/components/navComponent/navBasicComponent.vue';
import mainCard from '@/components/mainCardComponent/mainCard.vue';
export default {
  components: {
    navBasicComponent,
    mainCard
  }
}
</script>

<style>

</style>