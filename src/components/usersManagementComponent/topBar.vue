<script>
export default {
  name: "topBar"
}
</script>

<template>
  <div class="topBarBackDrop">
    <div class="topBarTitle">用户管理</div>
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