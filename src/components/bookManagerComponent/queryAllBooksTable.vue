<script>

// import {getBookList} from "@/api/Book/BookManage";
// import request from "@/utils/request";

import axios from "axios";
import {getBookList} from "@/api/Book/BookManage";
import {groupQueryAll} from "@/api/UserHome/UserHome";

export default {
  name: "queryAllBooksTable",
  data() {
    return {
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
      tableData: [
      ],
      dataItem: -1
    }
  },
  methods: {
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
            for(let i in res.data) {
              console.log(res.data[i]);
              this.tableData.push(res.data[i]);
            }
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
  created() {
    this.getAllBooks();
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    edit() {
      return this.$store.state.roleId !== 0;
    }
  }
}
</script>

<template>
  <div>
    <div class="tableTitle">
      <div v-for="title in tableTitleData" :key="title">{{ title }}</div>
    </div>
    <div class="tableBody">
      <div v-for="(data, item) in tableData" :key="data">
        <div>{{ bookRef }}</div>
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
        <div>无</div>
        <div class="booksFunction">
          <button @click="borrow" class="borrowButton">借阅</button>
          <button @click="edit" v-if="edit">修改</button>
        </div>
      </div>
      <div class="borrowAsk1">借阅成功</div>
      <div class="borrowAsk2">该图书已被借阅</div>
      <div class="borrowAsk3">修改成功</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
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
          width: 80px;
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