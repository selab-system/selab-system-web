<!-- 图书管理页 -->
<template>
<<<<<<< HEAD
  <div title="图书管理">
    <h1>这是图书管理表</h1>
=======
  <div>
    <!--    顶栏-->
    <top-bar></top-bar>
    <!--    功能选择-->
    <books-manger-feature></books-manger-feature>
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
  </div>
</template>

<script>
<<<<<<< HEAD
export default {

=======
import TopBar from "@/components/bookManagerComponent/topBar.vue";
import BooksMangerFeature from "@/components/bookManagerComponent/booksMangerFeatureUser.vue";

export default {
  components: {BooksMangerFeature, TopBar}
>>>>>>> d35f9e4eede873defeda18d693c8d67c6f74faa6
}
</script>

<style>

</style>