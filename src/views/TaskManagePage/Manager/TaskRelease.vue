<template>
  <div class="taskRelease">
    <TaskReleaseComponent/>
    <RegistrasionForm/>
  </div>
</template>

<script>
import TaskReleaseComponent from '@/components/TaskComponent/Manager/TaskReleaseComponent.vue'
export default {
    components: {
        TaskReleaseComponent
    },

}
</script>

<style>
.taskRelease{
    margin-top: 5px;
}
</style>