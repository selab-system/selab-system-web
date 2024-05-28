<script>
export default {
  name: "topBar"
}
</script>

<template>
  <div class="topBarBackDrop">
    <div class="topBarTitle">Travel the World of Books</div>
  </div>
</template>

<style scoped>
.topBarBackDrop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: var(--bg-color);
  box-shadow: var(--nav-box-shadow);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.topBarTitle {
  font-family:var(--font-logo-family);
  font-size: 30px;
  font-weight: 700;
  font-style: italic;
  color: var(--font-logo-color);
  margin-left: 20px;
}
</style>