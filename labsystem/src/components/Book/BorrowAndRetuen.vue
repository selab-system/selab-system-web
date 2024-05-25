<template>
  <div title="图书管理" class="bookmanage">
      <Borrowbooks></Borrowbooks>
      <Returnbooks></Returnbooks>
  </div>
</template>

<script>
import Borrowbooks from "@/components/BookManage/Borrowbooks.vue";
import Returnbooks from "@/components/BookManage/Returnbooks.vue";
export default {
  components: {
    Borrowbooks,
    Returnbooks,
  },
};
</script>

<style scoped>
.bookmanage {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #F2F6FC;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>