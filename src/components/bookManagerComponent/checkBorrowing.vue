<script>
import TopBar from "@/components/usersManagementComponent/topBar.vue";

export default {
  name: "checkBorrowing",
  components: {TopBar},
  data() {
    return {
      tableTitleData: [
        "序号",
        "书籍编号",
        "书籍名称",
        "借阅时间",
        "借阅者ID",
        "借阅时长",
        "归还时间",
        "状态"
      ],
      borrowingBooksData: [
        {
          id: 2,
          name: '西游记',
          borrowingTime: "2024.3.5",
          borrowId: 4,
          borrowTiming: 5,
          returnTime: "未归还",
          state: "借阅中"
        },
        {
          id: 17,
          name: '俄狄浦斯王',
          borrowingTime: "2024.3.13",
          borrowId: 26,
          borrowTiming: 5,
          returnTime: "2024.3.16",
          state: "已归还"
        }
      ]
    }
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
            <div>{{ data.id }}</div>
            <div>{{ data.name }}</div>
            <div>{{ data.borrowingTime }}</div>
            <div>{{ data.borrowId }}</div>
            <div>{{ data.borrowTiming + "天"}}</div>
            <div>{{ data.returnTime }}</div>
            <div>{{ data.state }}</div>
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
      $titleCount: 8;
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