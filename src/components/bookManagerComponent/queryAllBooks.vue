<script>
import TopBar from "@/components/bookManagerComponent/topBar.vue";
import QueryAllBooksTable from "@/components/bookManagerComponent/queryAllBooksTable.vue";
import {getBookList, saveBookInfo} from "@/api/Book/BookManage";

export default {
  name: "queryAllBooks",
  components: {QueryAllBooksTable},
  data() {
    return {
      saveBookName: '',
      saveBookAuthor: '',
      saveBookInfo: '',
      saveBookMon: '',
      saveBookOwenId: '',
      saveBookOther: '',
      saveBookRef: 0,
    }
  },
  methods: {
    saveBookDate() {
      try {
        const params = {
          bookName: this.saveBookName,
          bookAuthor: this.saveBookAuthor,
          bookDetails: this.saveBookInfo,
          price: this.saveBookMon,
          owner: this.saveBookOwenId,
          remark: this.saveBookOther,
          bookRef: this.saveBookRef
        }
        saveBookInfo(params).then(res =>{
          if(res.code === 200){
            console.log(res)
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    editBooks() {
      if (this.$store.state.readRoleId === 3) {
        return false
      } else {
        return true
      }
  }
}
</script>

<template>
  <div>
<!--    <top-bar></top-bar>-->
    <div class="allBooksTitle">书籍列表：</div>
    <div class="selectInput">
      <div>
        书籍名称：<input type="text" placeholder="请输入书籍名称" v-model="saveBookName">
        书籍作者：<input type="text" placeholder="请输入书籍作者" v-model="saveBookAuthor">
        书籍介绍：<input type="text" placeholder="请输入书籍介绍" v-model="saveBookInfo">
        书籍价格：<input type="text" placeholder="请输入书籍价格" v-model="saveBookMon">
        书籍拥有者id：<input type="text" placeholder="请输入书籍拥有者" v-model="saveBookOwenId">
        备注：<input type="text" placeholder="请输入备注信息" v-model="saveBookOther">
        书籍编号：<input type="text" placeholder="请输入书籍编号" v-model="saveBookRef">
        <button>查询</button>
        <button @click="saveBookDate">增加</button>
      </div>
    </div>
    <div class="editInput" v-if="editBooks">
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