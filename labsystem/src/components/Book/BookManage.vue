<!-- 图书管理页 -->
<template>
  <div title="图书管理" class="bookmanage">
    <ShowBookInformation></ShowBookInformation>
    <BorrowAndReturn></BorrowAndReturn>
    <!-- <MyBookInformation></MyBookInformation> -->

    <Searchrecords></Searchrecords>
  </div>
</template>

<script>
import ShowBookInformation from '@/components/BookManage/ShowBookInformation.vue'
// import MyBookInformation from '@/components/BookManage/MyBookInformation.vue'
import Searchrecords from '@/components/BookManage/Searchrecords.vue'
import BorrowAndReturn from '@/components/BookManage/BorrowAndReturn.vue'
export default {
  components: {
    ShowBookInformation,
    BorrowAndReturn,
    // MyBookInformation,
    Searchrecords
  }
}
</script>

<style scoped>
.bookmanage{
  width: 100%;
  height: 100%;
  /* display: flex; */
}
</style>
