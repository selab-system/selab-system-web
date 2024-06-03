<template>
  <div class="backDrop">
    <div class="allDepartment"><strong>全部部门：</strong></div>
    <div class="departmentList">
      <ul class="departmentItem">
        <!-- 使用 v-for 来渲染每个部门 -->
        <li v-for="(item, index) in department" :key="index">
          {{ item.groupId }}.({{ item.groupName }}) {{ item.createTime }}
          <!-- 为按钮添加唯一的 key -->
          <button :key="`view-${index}`">查看</button>
          <button :key="`edit-${index}`">修改</button>
          <button :key="`delete-${index}`">删除</button>
        </li>
      </ul>
      <button class="checkAllMember"><router-link to="/manageMembers">查看所有成员</router-link></button>
    </div>
  </div>
</template>
<script>
// import {items} from "yarn/lib/cli";
import {groupQueryAll, userQuery} from "@/api/UserHome/UserHome";

export default {
  name: "departmentMember",
  methods: {
    getAllGroup() {
      try {
        const params = {
          cur:1,
          size:5
        }
        groupQueryAll(params).then(res =>{
          console.log(res.data)
          if(res.code === 200){
            for(let i in res.data) {
              console.log(res.data[i]);
              this.department.push(res.data[i]);
            }
            console.log(this.department)
          } else {
            console.log(111)
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
  data() {
    return {
      department: []
    }
  },
  created() {
    this.getAllGroup();
  }
}
</script>
<style scoped lang="scss">
.backDrop {
  width: 100%;
  height: 1000px;
  background-color: whitesmoke;
  position: relative;
  div {
    position: absolute;
  }

  .allDepartment {
    width: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    //background: red;
    top: 60px;
    left: 100px;
    color: black;
    font-size: 30px;
    font-family: fangsong;
    border: 1px black solid;
    border-radius: 50px;
  }

  .departmentList {
    width: 80%;
    height: 650px;
    background-color: #cfd6dc;
    top: 130px;
    left: 10%;
    border-radius: 100px;
  }

  .departmentItem {
    //width: 1000px;
    position: absolute;
    top: 50px;
    left: 300px;
    list-style: none;

    li {
      padding: 10px;
      color: black;
      font-family: fangsong;
      font-size: 25px;
      display: inline-block;
    }
    button {
      width: 50px;
      height: 25px;
      border-radius: 30px;
      font-size: 16px;
      font-family: fangsong;
      color: black;
    }
  }

  .checkAllMember {
    position: absolute;
    width: 200px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    //background-color: white;
    border-radius: 30px;
    top: 580px;
    left: 500px;
    font-size: 20px;
    font-family: fangsong;
    color: black;

    router-link {
      color: black;
    }
  }
}
</style>