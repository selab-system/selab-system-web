<script>
import TopBar from "@/components/usersManagementComponent/topBar.vue";

export default {
  name: "personalBooks",
  components: {TopBar},
  data() {
    return {
      personalBooksData: [
        {
          id: 2,
          name: '西游记',
          money: 100,
          intro: '这里是介绍1'
        },
        {
          id: 17,
          name: '俄狄浦斯王',
          money: 50,
          intro: '这里是介绍2'
        }
      ],
      borrowingBooks: [
        {
          id: 3,
          name: '水浒传',
          author: '施耐庵',
          requireId: 5
        }
      ],
      tableTitleData: [
        "序号",
        "编号",
        "名称",
        "价格",
        "操作"
      ],
      tableTitleBorrowData: [
          "序号",
          "编号",
          "名称",
          "作者",
          "拥有者ID",
          "操作"
      ]
    }
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
            <div>{{ data.id }}</div>
            <div>{{ data.name }}</div>
            <div>{{ data.money }}</div>
            <div>
              <button>修改</button>
              <button>下架</button>
            </div>
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
            <div>{{ data.id }}</div>
            <div>{{ data.name }}</div>
            <div>{{ data.author }}</div>
            <div>{{ data.requireId }}</div>
            <div>
              <button>归还</button>
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
      $titleCount: 5;
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
      $titleCount: 6;
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