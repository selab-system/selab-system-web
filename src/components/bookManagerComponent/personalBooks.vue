<script>
import {BorrowMy, getBookInfo, getBookList, ReturnBook} from "@/api/Book/BookManage";

export default {
  name: "personalBooks",
  data() {
    return {
      personalBooksData: [
      ],
      borrowingBooks: [
      ],
      tableTitleData: [
        "序号",
        "书籍编号",
        "书籍ID",
        "书籍名称",
        "价格",
        "书籍拥有者ID",
        "书籍拥有者名称",
        "书籍状态",
        "添加时间",
        "修改时间"
      ],
      tableTitleBorrowData: [
          "序号",
          "借阅ID",
          "书籍ID",
          "书籍名称",
          "借阅用户ID",
          "借阅用户名称",
          "借阅时长",
          "状态",
          "借阅时间",
          "归还时间",
          "操作"
      ]
    }
  },
  methods: {
    getMyBorrow() {
      try {
        const params = {
          cur: 1,
          size: 10
        }
        BorrowMy(params).then(res =>{
          if(res.code === 200){
            console.log(res.data);
            for(let i in res.data) {
              this.borrowingBooks.push(res.data[i]);
            }
          } else {
            console.log('错误');
          }
        })
      } catch (err) {
        console.log(err);
      }
    },
    getMyBooks() {
      try {
        const params = {
          cur:1,
          size:10,
          userId: this.$store.state.userId
        }
        getBookList(params).then(res =>{
          console.log(res.data)
          if(res.code === 200){
            for(let i in res.data) {
              console.log(res.data[i]);
              this.personalBooksData.push(res.data[i]);
            }
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    returnBook(borrowId) {
      try {
        const params = {
          borrowId: borrowId
        }
        ReturnBook(params).then(res =>{
          console.log(res.data)
          if(res.code === 200){
            console.log('归还成功');
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  created() {
    this.getMyBorrow();
    this.getMyBooks();
  }
}
</script>

<template>
  <div class="backDrop">
<!--    <top-bar></top-bar>-->
    <div class="personalBooksTitle"><strong>个人书籍管理：</strong><hr></div>
    <div class="personalTitle">本人书籍：</div>
    <div class="personalList">
      <div>
        <div class="tableTitle">
         <div v-for="title in tableTitleData" :key="title">{{ title }}</div>
        </div>
        <div class="tableBody">
          <div v-for="(data, item) in personalBooksData" :key="data">
            <div>{{ item + 1 }}</div>
            <div>{{ data.bookRef }}</div>
            <div>{{ data.bookId }}</div>
            <div>{{ data.bookName }}</div>
            <div>{{ data.price }}</div>
            <div>{{ data.owner }}</div>
            <div>{{ data.ownerName }}</div>
            <div>{{ data.status === 0 ? '可借阅' : '不可借阅' }}</div>
            <div>{{ data.createTime }}</div>
            <div>{{ data.updateTime }}</div>
            </div>
        </div>
      </div>
    </div>
    <div class="borrowingBooksTitle">已借阅书籍：</div>
    <div class="borrowingList">
      <div>
        <div class="tableTitle">
          <div v-for="title in tableTitleBorrowData" :key="title">{{ title }}</div>
        </div>
        <div class="tableBody">
          <div v-for="(data, item) in borrowingBooks" :key="data">
            <div>{{ item + 1 }}</div>
            <div>{{ data.borrowId }}</div>
            <div>{{ data.bookId }}</div>
            <div>{{ data.bookName }}</div>
            <div>{{ data.borrowUser }}</div>
            <div>{{ data.borrowUserName }}</div>
            <div>{{ data.borrowDuration }}</div>
            <div>{{ data.status ? '已归还' : '未归还' }}</div>
            <div>{{ data.borrowTime }}</div>
            <div>{{ data.returnTime }}</div>
            <div>
              <button @click="returnBook(data.borrowId)">归还</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .backDrop {
    height: 1000px;
    position: relative;
    .personalBooksTitle {
      position: absolute;
      top: 110px;
      left: 50px;
      font-family: fangsong;
      font-size: 30px;
    }
    .personalTitle {
      position: absolute;
      top: 170px;
      left: 80px;
      font-size: 28px;
      font-family: fangsong;
      border: 1px black solid;
      border-radius: 50px;
      padding: 10px;
    }
    .borrowingBooksTitle {
      position: absolute;
      top: 170px;
      left: 880px;
      font-size: 28px;
      font-family: fangsong;
      border: 1px black solid;
      border-radius: 50px;
      padding: 10px;
    }
    .personalList {
      width: 40%;
      //height: 100px;
      border: 1px black solid;
      border-radius: 20px;
      position: absolute;
      top: 230px;
      left: 100px;
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
      .addUserButton {
        width: 100px;
        height: 25px;
        border-radius: 10px;
        color: black;
        font-family: fangsong;
        font-size: 16px;
      }
      $titleCount: 10;
      .tableTitle {
        width:100%;
        height:50px;
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
          div{
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
    .borrowingList {
      width: 40%;
      //height: 100px;
      border: 1px black solid;
      border-radius: 20px;
      position: absolute;
      top: 230px;
      left: 900px;
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
      .addUserButton {
        width: 100px;
        height: 25px;
        border-radius: 10px;
        color: black;
        font-family: fangsong;
        font-size: 16px;
      }
      $titleCount: 11;
      .tableTitle {
        width:100%;
        height:50px;
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
          div{
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