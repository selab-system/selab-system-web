<script>
import TopBar from "@/components/usersManagementComponent/topBar.vue";
import {BorrowRecord, getBookInfo, getBookList} from "@/api/Book/BookManage";

export default {
  name: "checkBorrowing",
  components: {TopBar},
  data() {
    return {
      tableTitleData: [
        "序号",
        "借阅ID",
        "书籍ID",
        "书籍名称",
        "借阅者ID",
        "借阅者名称",
        "借阅时长",
        "借阅时间",
        "归还时间",
        "状态"
      ],
      borrowingBooksData: [],
      borrowId: 0,
      bookId: 0,
      bookName: '',
      borrowUser: '',
      borrowUserName: '',
      borrowDuration: 0,
      status: 0,
      borrowTime: '',
      returnTime: ''
    }
  },
  methods: {
    getBorrow() {
      try {
        const params = {
          cur: 1,
          size: 10
        }
        BorrowRecord(params).then(res =>{
          console.log(res.data)
          if(res.code === 200){
            console.log(res.data);
            // for(let i in res.data) {
            //   this.borrowingBooksData.push(res.data[i]);
            // }
            this.borrowingBooksData = res.data.data;
          } else {
            console.log('错误');
          }
        })
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
    this.getBorrow();
  }
}
</script>

<template>
  <div class="backDrop">
<!--    <top-bar></top-bar>-->
    <div class="checkBorrowingTitle">查询借阅记录：<hr></div>
    <div class="checkBorrowingList">
      <div>
        <div class="tableTitle">
          <div v-for="title in tableTitleData" :key="title">{{ title }}</div>
        </div>
        <div class="tableBody">
          <div v-for="(data, item) in borrowingBooksData" :key="data">
            <div>{{ item + 1 }}</div>
            <div>{{ data.borrowId }}</div>
            <div>{{ data.bookId }}</div>
            <div>{{ data.bookName }}</div>
            <div>{{ data.borrowUser }}</div>
            <div>{{ data.borrowUserName }}</div>
            <div>{{ data.borrowDuration + '天'}} </div>
            <div>{{ data.status ? '已归还' : '未归还' }}</div>
            <div>{{ data.borrowTime }}</div>
            <div>{{ data.returnTime }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .backDrop {
    width: 100%;
    height: 1000px;
    position: relative;
    .checkBorrowingTitle {
      position: absolute;
      top: 50px;
      left: 50px;
      font-family: fangsong;
      font-size: 30px;
    }
    .checkBorrowingList {
      width: 80%;
      border: 1px black solid;
      border-radius: 50px;
      position: absolute;
      top: 120px;
      left: 80px;
      padding: 20px;
      .tableTopTitle {
        font-size: 30px;
        font-family: fangsong;
        font-weight: bolder;
        width: 200px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        //padding-top: 20px;
        display: inline-block;
      }
      $titleCount: 10;
      .tableTitle {
        width: 100%;
        height: 50px;
        margin-top: 30px;
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
        width: 100%;
        div {
          width: 100%;
          div {
            width: 100% / $titleCount;
            height: 50px;
            display: inline-block;
            text-align: center;
            border: 1px black solid;
            border-collapse: collapse;
            align-content: center;
            box-sizing: border-box;
            button {
              width: 40%;
              height: 90%;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>