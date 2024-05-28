<template>
  <div>
    <div class="container">
      <div class="head">
        <navElement></navElement>
<<<<<<< HEAD
        <router-view></router-view>
      </div>
      <div class="content">
      </div>
=======
        <div class="body"></div>
      </div>
      <div class="content"></div>
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
    </div>
  </div>
</template>

<script>
import navElement from '@/components/indexComponent/navElement.vue';
export default {
  components: {
<<<<<<< HEAD
     navElement,
=======
     navElement
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
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
<<<<<<< HEAD
=======
.body{
  height: 600px;
  background-color: pink;
}
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
</style>