<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  computed: {
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  font-family: var(--font-family-secondary);
  color: var(--font-color);
}
a {  
    text-decoration: none;  
    cursor: pointer;
}

</style>
