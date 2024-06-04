<script>
import {BorrowBook, getBookInfo, getBookList, saveBookInfo, updateBookInfo} from "@/api/Book/BookManage";

export default {
  name: "queryAllBooks",
  data() {
    return {
      saveBookName: '',
      saveBookAuthor: '',
      saveBookInfo: '',
      saveBookMon: 0,
      saveBookOwenId: 0,
      saveBookOther: '',
      saveBookRef: '',
      bookId: 0,
      borrowBookId: 0,
      borrowDuration: 0,
      returnTime: '',
      tableTitleData: [
        "序号",
        "书籍编号",
        "图书名称",
        "书籍作者",
        "价格",
        "书籍拥有者ID",
        "书籍拥有者名称",
        "图书介绍",
        "添加时间",
        "修改时间",
        "书籍状态",
        "操作"
      ],
      tableData: [],
      dataItem: -1,
      saveBookId: 0,
      saveBookOwenName: '',
      bookStatus: '',
      createTime: '',
      updateTime: ''
    }
  },
  methods: {
    saveBookDate() {
      try {
        const params = {
          bookName: this.saveBookName,
          bookAuthor: this.saveBookAuthor,
          bookDetails: this.saveBookInfo,
          price: parseInt(this.saveBookMon),
          owner: this.saveBookOwenId,
          remark: this.saveBookOther,
          bookRef: this.saveBookRef
        }
        saveBookInfo(params).then(res =>{
          if(res.code === 200){
            console.log(res);
            this.getAllBooks();
            const selectDiv = document.querySelector('.selectDiv');
            selectDiv.style.display = 'none';
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
      console.log(typeof parseInt(this.saveBookMon))
      console.log('')
    },
    queryData() {
      try {
        const params = {
          bookId: this.bookId
        }
        getBookInfo(params).then(res =>{
          if(res.code === 200){
            this.tableData = res.data.data;
            console.log(res)
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    borrowBook() {
      const borrowDiv = document.querySelector('.borrowDiv');
      borrowDiv.style.display = 'block';
      try {
        const params = {
          borrowBook: this.borrowBookId,
          borrowDuration: this.borrowDuration,
          returnTime: this.returnTime
        }
        BorrowBook(params).then(res =>{
          if(res.code === 200){
            const borrowDiv = document.querySelector('.borrowDiv');
            borrowDiv.style.display = 'none';
            this.getAllBooks();
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    touchContent(item) {
      this.dataItem = item;
    },
    touchLeaveContent() {
      this.dataItem = -1;
    },
    borrow(e) {
      if(e.target.textContent === '借阅') {
        const borrowAsk1 = document.querySelector('.borrowAsk1');
        borrowAsk1.style.display = 'block';
        setTimeout(() => {
          borrowAsk1.style.display = 'none';
        }, 1000);
      }
      if(e.target.textContent === '已被借阅') {
        const borrowAsk2 = document.querySelector('.borrowAsk2');
        borrowAsk2.style.display = 'block';
        setTimeout(() => {
          borrowAsk2.style.display = 'none';
        }, 1000);
      }
      e.target.textContent = '已被借阅';
    },
    edit() {
      const borrowAsk3 = document.querySelector('.borrowAsk3');
      borrowAsk3.style.display = 'block';
      setTimeout(() => {
        borrowAsk3.style.display = 'none';
      }, 1000);
    },
    getAllBooks() {
      try {
        const params = {
          cur:1,
          size:10
        }
        getBookList(params).then(res =>{
          console.log(res.data)
          if(res.code === 200){
            // for(let i in res.data) {
            //   console.log(res.data[i]);
            //   this.tableData.push(res.data[i]);
            // }
            this.tableData = res.data.data;
            console.log(this.tableData)
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    selectDivHava() {
      const selectDiv = document.querySelector('.selectDiv');
      selectDiv.style.display = 'block';
    },
    borrowDivHave() {
      const borrowDiv = document.querySelector('.borrowDiv');
      borrowDiv.style.display = 'block';
    },
    editDivHave() {
      const editDiv = document.querySelector('.editDiv');
      editDiv.style.display = 'block';
    },
    editBook() {
      try {
        const params = {
          bookId: this.saveBookId,
          bookName: this.saveBookName,
          bookAuthor: this.saveBookAuthor,
          bookDetails: this.saveBookInfo,
          price: parseInt(this.saveBookMon),
          owner: this.saveBookOwenId,
          ownerName: this.saveBookOwenName,
          status: this.bookStatus,
          createTime: this.createTime,
          updateTime: this.updateTime,
          bookRef: this.saveBookRef
        }
        updateBookInfo(params).then(res =>{
          console.log(res.data)
          if(res.code === 200){
            this.getAllBooks();
            const editDiv = document.querySelector('.editDiv');
            editDiv.style.display = 'none';
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
    // eslint-disable-next-line vue/no-dupe-keys
    editBooks() {
      return this.$store.state.readRoleId !== 3;
    },
    // eslint-disable-next-line vue/no-dupe-keys
    edit() {
      return this.$store.state.roleId !== 0;
    }
  },
  created() {
    this.getAllBooks();
  }
}
</script>

<template>
  <div>
<!--    <top-bar></top-bar>-->
    <div class="allBooksTitle">书籍列表：</div>
    <button class="addButton" @click="selectDivHava">增加书籍</button>
    <div class="selectInput">
      <div>
        书籍ID：<input type="text" placeholder="请输入书籍ID" v-model="bookId">
        <button @click="queryData">查询</button>
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
<!--    <query-all-books-table></query-all-books-table>-->
    <div>
      <div class="tableTitle">
        <div v-for="title in tableTitleData" :key="title">{{ title }}</div>
      </div>
      <div class="tableBody">
        <div v-for="(data, item) in tableData" :key="data">
          <div>{{ data.bookRef }}</div>
          <div>{{ data.bookId }}</div>
          <div>{{ data.bookName }}</div>
          <div>{{ data.bookAuthor }}</div>
          <div>{{ data.price }}</div>
          <div>{{ data.owner}}</div>
          <div>{{ data.ownerName }}</div>
          <div>{{ data.createTime }}</div>
          <div>{{ data.updateTime }}</div>
          <div>{{ data.status === 2 ? '不可借阅' : '可借阅'}}</div>
          <div class="booksIntroduce">
            <span @mouseenter="touchContent(item)" @mouseleave="touchLeaveContent">轻触展开</span>
            <span class="booksIntroduceContent" v-show="dataItem === item">{{ data.bookDetails }}</span>
          </div>
          <div class="booksFunction">
            <button class="borrowButton" @click="borrowDivHave">借阅</button>
            <button @click="editDivHave" v-if="edit">修改</button>
          </div>
        </div>
        <div class="borrowAsk1">借阅成功</div>
        <div class="borrowAsk2">该图书已被借阅</div>
        <div class="borrowAsk3">修改成功</div>
      </div>
    </div>
    <div class="borrowDiv">
      <div>
        书籍id：<input type="text" placeholder="请输入书籍id" v-model="borrowBookId">
      </div>
      <div>
        借阅时长：<input type="text" placeholder="请输入借阅时长" v-model="borrowDuration">天
      </div>
      <div>
        归还时间：<input type="text" placeholder="请输入归还时间" v-model="returnTime">
      </div>
      <div>
        <button @click="borrowBook">确认</button>
      </div>
    </div>
    <div class="selectDiv">
      <div>
        书籍名称：<input type="text" placeholder="请输入书籍名称" v-model="saveBookName">
      </div>
      <div>
        书籍作者：<input type="text" placeholder="请输入书籍作者" v-model="saveBookAuthor">
      </div>
      <div>
        书籍介绍：<input type="text" placeholder="请输入书籍介绍" v-model="saveBookInfo">
      </div>
      <div>
        书籍价格：<input type="text" placeholder="请输入书籍价格" v-model="saveBookMon">
      </div>
      <div>
        书籍拥有者id：<input type="text" placeholder="请输入书籍拥有者" v-model="saveBookOwenId">
      </div>
      <div>
        备注：<input type="text" placeholder="请输入备注信息" v-model="saveBookOther">
      </div>
      <div>
        书籍编号：<input type="text" placeholder="请输入书籍编号" v-model="saveBookRef">
      </div>
      <div>
        <button @click="saveBookDate">增加</button>
      </div>
    </div>
    <div class="editDiv">
      <div>
        书籍id：<input type="text" placeholder="请输入书籍id" v-model="saveBookId">
      </div>
      <div>
        书籍名称：<input type="text" placeholder="请输入书籍名称" v-model="saveBookName">
      </div>
      <div>
        书籍作者：<input type="text" placeholder="请输入书籍作者" v-model="saveBookAuthor">
      </div>
      <div>
        书籍介绍：<input type="text" placeholder="请输入书籍介绍" v-model="saveBookInfo">
      </div>
      <div>
        书籍价格：<input type="text" placeholder="请输入书籍价格" v-model="saveBookMon">
      </div>
      <div>
        书籍拥有者id：<input type="text" placeholder="请输入书籍拥有者" v-model="saveBookOwenId">
      </div>
      <div>
        书籍拥有者名称：<input type="text" placeholder="请输入书籍拥有者" v-model="saveBookOwenName">
      </div>
      <div>
        书籍状态：<input type="text" placeholder="请输入书籍状态" v-model="bookStatus">
      </div>
      <div>
        书籍编号：<input type="text" placeholder="请输入书籍编号" v-model="saveBookRef">
      </div>
      <div>
        书籍编号：<input type="text" placeholder="请输入书籍编号" v-model="saveBookRef">
      </div>
      <div>
        添加时间：<input type="text" placeholder="请输入添加时间" v-model="createTime">
      </div>
      <div>
        修改时间：<input type="text" placeholder="请输入修改时间" v-model="updateTime">
      </div>
      <div>
        <button @click="editBook">确定</button>
      </div>
    </div>
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
    width: 500px;
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
  .addButton {
    width: 90px;
    height: 20px;
    position: absolute;
    top: 130px;
    left: 200px;
  }
  .selectDiv {
    width: 500px;
    height: 400px;
    background: wheat;
    position: absolute;
    top: 200px;
    left: 40%;
    border: 1px black solid;
    z-index: 3;
    div {
      width: 100%;
      height: 50px;
      padding-top: 2px;
      input {
        border-radius: 40px;
        text-indent: 10px;
      }
      button {
        width: 50px;
        height: 20px
      }
    }
    display: none;
  }
  .editDiv {
    width: 500px;
    height: 500px;
    background: wheat;
    position: absolute;
    top: 200px;
    left: 40%;
    border: 1px black solid;
    z-index: 3;
    display: none;
    div {
      width: 100%;
      height: 50px;
      padding-top: 2px;

      input {
        border-radius: 40px;
        text-indent: 10px;
      }

      button {
        width: 50px;
        height: 20px
      }
    }
  }
  .borrowDiv {
    width: 400px;
    height: 150px;
    background: wheat;
    margin: 10px auto;
    border: 1px black solid;
    display: none;
    div {
      width: 100%;
      height: 50px;
      padding-top: 2px;
      input {
        border-radius: 40px;
        text-indent: 10px;
      }
      button {
        width: 50px;
        height: 20px
      }
    }
  }
  $titleCount: 12;
  .tableTitle {
    width:95%;
    height:50px;
    margin: 0 auto;
    //margin-top: 50px;
    div {
      width: 100% / $titleCount;
      height: 100%;
      display: inline-block;
      text-align: center;
      border: 1px black solid;
      border-collapse: collapse;
      align-content: center;
      box-sizing: border-box;
      background-color: whitesmoke;
    }
  }
  .tableBody {
    width: 95%;
    margin: 0 auto;
    position: relative;
    .borrowAsk1 {
      width: 20%;
      height: 50px;
      background-color: greenyellow;
      color: black;
      font-size: 20px;
      font-family: fangsong;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
      position: absolute;
      top: -90px;
      left: 40%;
      display: none;
      animation: askChange 0.5s linear;
    }
    .borrowAsk2 {
      width: 20%;
      height: 50px;
      background-color: #e86868;
      color: black;
      font-size: 20px;
      font-family: fangsong;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
      position: absolute;
      top: -90px;
      left: 40%;
      display: none;
      animation: askChange 0.5s linear;
    }
    .borrowAsk3 {
      width: 20%;
      height: 50px;
      background-color: greenyellow;
      color: black;
      font-size: 20px;
      font-family: fangsong;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
      position: absolute;
      top: -90px;
      left: 40%;
      display: none;
      animation: askChange 0.5s linear;
    }
    div {
      width: 100%;
      .booksIntroduce {
        width: 100% / $titleCount;
        height: 50px;
        display: inline-block;
        text-align: center;
        border: 1px black solid;
        border-collapse: collapse;
        align-content: center;
        box-sizing: border-box;
        font-family: 'fangsong';
        position: relative;
        span:not(.booksIntroduceContent){
          border: 1px black solid;
          border-radius: 5px;
          padding: 2px;
        }
        .booksIntroduceContent {
          width: 300px;
          height: 300px;
          position: absolute;
          top: 30px;
          left: 130px;
          background-color: lightgoldenrodyellow;
          border-radius: 10px;
          color: black;
          font-family: fangsong;
          font-size: 16px;
          z-index: 1;
        }
      }
      .booksFunction {
        button {
          width: 30px;
          height: 70%;
          color: black;
          font-size: 16px;
          font-family: fangsong;
        }
      }
      div:not(.booksIntroduce, .booksIntroduceAll){
        width: 100% / $titleCount;
        height: 50px;
        display: inline-block;
        text-align: center;
        border: 1px black solid;
        border-collapse: collapse;
        align-content: center;
        box-sizing: border-box;
      }
    }
  }
  @keyframes askChange {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>