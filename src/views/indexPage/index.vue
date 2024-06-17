<template>
  <div>
    <div class="container">
      <div class="head">
        <navElement></navElement>
<!--        <index-style-main></index-style-main>-->
      </div>
    </div>
  </div>
</template>

<script>
import navElement from '@/components/indexComponent/navElement.vue';
import IndexStyleMain from "@/components/indexStyle/indexStyleMain.vue";
export default {
  components: {
    IndexStyleMain,
     navElement,
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
</style>
