<script>
export default {
  name: "departmentMember",
  data() {
    return {
      department: [
        {
          name: '科学打败魔法',
          member: '张三'
        },
        {
          name: 'T阵营',
          member: '李四'
        },
        {
          name: 'CT阵营',
          member: '王五'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="backDrop">
    <div class="allDepartment"><strong>全部部门：</strong></div>
    <div class="departmentList">
      <ul class="departmentItem">
        <!-- <template v-for="(item, index) in department">
          <li>{{ index + 1 }}.{{ item.name }}({{ item.member }})</li>
          <button>查看</button>
          <button>修改</button>
          <br><br>
        </template> -->
      </ul>
      <button class="checkAllMember"><router-link to="/user/manageMembers">查看所有成员</router-link></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.backDrop {
  width: 100%;
  //height: 800px;
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
    background-color: white;
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