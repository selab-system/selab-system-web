<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
  name: 'App',
  components: {
  },
  computed: {
    // ...mapState(['isLoggedIn'])  //映射状态
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  //background-color: var(--bg-color);
  //font-family: var(--font-family-secondary);
  //color: var(--font-color);
}
a {  
    text-decoration: none;  
    cursor: pointer;
}

</style>
