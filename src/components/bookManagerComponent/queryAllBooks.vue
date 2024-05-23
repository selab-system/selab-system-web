<script>
import TopBar from "@/components/bookManagerComponent/topBar.vue";
import QueryAllBooksTable from "@/components/bookManagerComponent/queryAllBooksTable.vue";

export default {
  name: "queryAllBooks",
  components: {QueryAllBooksTable, TopBar}
}
</script>

<template>
  <div>
    <top-bar></top-bar>
    <div class="allBooksTitle">书籍列表：</div>
    <query-all-books-table></query-all-books-table>
  </div>
</template>

<style scoped>
  .allBooksTitle {
    width: 200px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: black;
    font-size: 30px;
    font-family: fangsong;
  }
</style>