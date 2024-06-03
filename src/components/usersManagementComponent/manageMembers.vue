<script>
import TopBar from "@/components/usersManagementComponent/topBar.vue";
import {groupQueryAll, userQuery} from "@/api/UserHome/UserHome";

export default {
  name: "manageMembers",
  components: {TopBar},
  data() {
    return {
      tableTitleData: [
          "序号",
          "ID",
          "姓名",
          "小组",
          "小组ID",
          "邮箱",
          "手机号",
          "性别",
          "创建时间",
          "更新时间",
          "是否为管理员",
          "操作"
      ],
      tableData: [
        {
          id: 1,
          name: '李四',
          department: '科学打败魔法',
          departmentId: '1',
          isManager: true,
          isSuperManager: true
        },
        {
          id: 9,
          name: '李五',
          department: '科学打败魔法',
          departmentId: '1',
          isManager: false,
          isSuperManager: false
        },
        {
          id: 52,
          name: '小四',
          department: 'T阵营',
          departmentId: '2',
          isManager: false,
          isSuperManager: false
        }
      ]
    }
  },
  methods: {
    getAllUser() {
      try {
        userQuery().then(res =>{
          console.log(res.data)
          if(res.code === 200){
            for(let i in res.data) {
              console.log(res.data[i]);
            }
          } else {
            console.log('错了')
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  created() {
    // this.getAllUser();
  }
}
</script>

<template>
  <div class="backDrop">
<!--    <top-bar></top-bar>-->
    <div class="tableTopTitle">成员列表：</div>
    <button class="addUserButton">增加用户</button>
    <div>
      <div class="tableTitle">
        <div v-for="title in tableTitleData" :key="title">{{ title }}</div>
      </div>
      <div class="tableBody">
        <div v-for="(data, item) in tableData" :key="data">
          <div>{{ item + 1 }}</div>
          <div>{{ data.id }}</div>
          <div>{{ data.name }}</div>
          <div>{{ data.department }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.departmentId }}</div>
          <div>{{ data.isManager ? '是' : '否' }}{{ data.isSuperManager ? '(super)' : '' }}</div>
          <div>
            <button>修改</button>
            <button>删除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tableTopTitle {
  font-size: 30px;
  font-family: fangsong;
  font-weight: bolder;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  padding-top: 20px;
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
$titleCount: 12;
.tableTitle {
  width:95%;
  height:50px;
  margin: 30px auto 0;
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
        height: 70%;
        font-size: 16px;
      }
    }
  }
}
</style>