<script>
import TopBar from "@/components/bookManagerComponent/topBar.vue";
import QueryAllBooksTable from "@/components/bookManagerComponent/queryAllBooksTable.vue";

export default {
  name: "queryAllBooks",
  components: {QueryAllBooksTable, TopBar},
}
</script>

<template>
  <div>
<!--    <top-bar></top-bar>-->
    <div class="allBooksTitle">书籍列表：</div>
    <div class="selectInput">
      <div>
        书籍ID：<input type="text" placeholder="请输入书籍ID">
        书籍名称：<input type="text" placeholder="请输入书籍名称">
        书籍拥有者：<input type="text" placeholder="请输入书籍拥有者">
        <button>查询</button>
      </div>
    </div>
    <div class="editInput">
      <div>
        <input type="text" placeholder="请输入修改后的内容">
        <button>确认</button>
      </div>
    </div>
    <div class="takeEditInput">
      <div>
        <input type="text" placeholder="请输入要修改的内容">
        <button>确认</button>
      </div>
    </div>
    <query-all-books-table></query-all-books-table>
  </div>
</template>

<style scoped lang="scss">
  .allBooksTitle {
    width: 200px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: black;
    font-size: 30px;
    font-family: fangsong;
  }
  .selectInput {
    width: 900px;
    height: 60px;
    //background: red;
    position: absolute;
    top: 110px;
    left:  400px;
    border: 1px rosybrown solid;
    border-radius: 30px;
    div {
      padding: 20px 0;
      input {
        border-radius: 20px;
        text-indent: 5px;
      }
      button {
        width: 50px;
        margin-left: 20px;
        border-radius: 20px;
      }
    }
  }
  .editInput {
    width: 250px;
    height:60px;
    position: absolute;
    top: 110px;
    left:  1350px;
    border: 1px rosybrown solid;
    border-radius: 30px;
    display: none;
    div {
      padding: 20px 0;
      input {
        border-radius: 20px;
        text-indent: 5px;
      }
      button {
        width: 50px;
        margin-left: 10px;
        border-radius: 20px;
      }
    }
  }
  .takeEditInput {
    width: 250px;
    height:60px;
    position: absolute;
    top: 110px;
    left:  1350px;
    border: 1px rosybrown solid;
    border-radius: 30px;
    display: none;
    div {
      padding: 20px 0;
      input {
        border-radius: 20px;
        text-indent: 5px;
      }
      button {
        width: 50px;
        margin-left: 10px;
        border-radius: 20px;
      }
    }
  }
</style>