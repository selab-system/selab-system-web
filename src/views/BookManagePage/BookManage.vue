<!-- 图书管理页 -->
<template>
  <div>
    <!--    顶栏-->
    <top-bar></top-bar>
    <!--    功能选择-->
    <books-manger-feature></books-manger-feature>
  </div>
</template>

<script>
import TopBar from "@/components/bookManagerComponent/topBar.vue";
import BooksMangerFeature from "@/components/bookManagerComponent/booksMangerFeatureUser.vue";

export default {
  components: {BooksMangerFeature, TopBar}
}
</script>

<style>

</style>