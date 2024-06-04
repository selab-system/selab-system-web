<template>
  <div class="backDrop">
    <div class="allDepartment"><strong>全部部门：</strong></div>
    <div class="addGroupDiv">
      <input type="text" placeholder="请输入小组名" v-model="addGroupName">
      <button @click="addOneGroup" class="addGroup">添加小组</button>
    </div>
    <div class="departmentList">
      <ul class="departmentItem">
         <template v-for="item in department" >
            <li :key="item">{{ item.groupId }}.({{ item.groupName }}) {{ item.createTime}}</li>
            <button :key="item" @click="updateDivHave" v-if="manage">修改</button>
            <button :key="item" @click="deleteGroup(item.groupId)" v-if="manage" >删除</button>
            <br><br>
        </template>
      </ul>
      <button class="checkAllMember"><router-link to="/manageMembers">查看所有成员</router-link></button>
    </div>
    <div class="updateDiv">
        小组id：<input type="text" placeholder="请输入小组id" v-model="groupId"><br>
        小组名称：<input type="text" placeholder="请输入小组名称" v-model="groupName"><br>
        创建时间：<input type="text" placeholder="请输入创建时间" v-model="createTime"><br>
      <button @click="updateGroup">确认</button>
    </div>
  </div>
</template>
<script>
// import {items} from "yarn/lib/cli";
import {deleteGroup, groupQueryAll,  saveGroup, updateGroup} from "@/api/UserHome/UserHome";

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
          console.log(res.data);
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
    // addGroup() {
    //   try {
    //     const params = {
    //       groupName: this.addDepartName
    //     }
    //     saveGroup(params).then(res =>{
    //       console.log(res.data);
    //       if(res.code === 200){
    //         for(let i in res.data) {
    //           console.log(res.data[i]);
    //           this.department.push(res.data[i]);
    //         }
    //         console.log(this.department)
    //       } else {
    //         console.log(111)
    //       }
    //     })
    //   } catch (err) {
    //     console.log(err)
    //   }
    // },
    updateGroup() {
      try {
        const params = {
          groupId: this.groupId,
          groupName: this.groupName,
          createTime: this.createTime
        }
        updateGroup(params).then(res =>{
          console.log(res.data);
          if(res.code === 200){
            // for(let i in res.data) {
            //   console.log(res.data[i]);
            //   this.department.push(res.data[i]);
            // }
            // console.log(this.department)
            const updateDiv = document.querySelector('.updateDiv');
            updateDiv.style.display = 'none';
          } else {
            console.log(111)
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    deleteGroup(groupId) {
      try{
      deleteGroup({groupId}).then(res =>{
          console.log(res.data);
          if(res.code === 200){
            console.log(res)
          } else {
            console.log(111)
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    addOneGroup() {
      try{
        const params = {
          groupName: this.addGroupName
        }
        saveGroup(params).then(res =>{
          console.log(res.data);
          if(res.code === 200){
            console.log(res)
          } else {
            console.log(111)
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    updateDivHave() {
      const updateDiv = document.querySelector('.updateDiv');
      updateDiv.style.display = 'block';
    }
  },
  data() {
    return {
      department: [],
      addDepartName: '',
      groupId: 0,
      groupName: '',
      createTime: '',
      addGroupName: ''
    }
  },
  created() {
    this.getAllGroup();
  },
  computed: {
    manage() {
      return this.$store.state.roleId !== 0;
    }
  }
}
</script>
<style scoped lang="scss">
.updateDiv {
  width: 400px;
  height: 100px;
  background: wheat;
  z-index: 3;
  top: 50px;
  left: 40%;
  display: none;
}
.backDrop {
  width: 100%;
  height: 1000px;
  background-color: whitesmoke;
  position: relative;
  div {
    position: absolute;
  }
  .addGroupDiv {
    position: absolute;
    top: 80px;
    left: 400px;
  }
  .addGroup {
    width: 100px;
    height: 20px;
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