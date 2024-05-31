<template>
  <div>
    <div class="container">
      <div class="head">
        <navElement></navElement>
        <div class="body"></div>
        <!-- <router-view></router-view> -->
      </div>
      <div class="content">
      </div>
    </div>
  </div>
</template>

<script>
import navElement from '@/components/indexComponent/navElement.vue';
export default {
  components: {
     navElement,
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  text-align: center;
  background-color: var(--bg-color);
}
.head {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  border-bottom:var(--box-border);
  box-shadow: var(--nav-box-shadow);
  overflow: hidden;
}
.body{
  height: 600px;
  background-color: pink;
}
</style>