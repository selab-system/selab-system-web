<script >
import {viewsubmit} from "@/api/submitForm";
export default {
  data(){
    return{
      userId:1,
      code:'',
      data:[
        {
          id: 0,
          interviewees: {
            userName: " ",
            groupId: 0,
            groupName: " ",
            roleId: 0,
            roleName: " ",
            email: " ",
            phone: " ",
            sex: 0,
            userId: 0,
            createTime: " ",
            updateTime: " "
        },
          email: " ",
          phone: 0,
          intentDepartment: 0,
          classroom: " ",
          interviewTime: " ",
          introduce: " ",
          purpose: " ",
          remark: " ",
          grade: " ",
        }
      ]}},
  created(){
    // this.roleId= window.sessionStorage.getItem('roleId');
    // this.userId=window.sessionStorage.getItem('userId')
    console.log(this.userId)
    console.log(1)
    // console.log(this.roleId)
    viewsubmit({
      userId:this.userId
    }).then(res=>{
      console.log(res)
      console.log(2)
      alert('查询成功')
    })

  }

  }


</script>

<template>

<!--<div>-->
<!--  <form @submit.prevent="au">-->
<!--    <div>-->
<!--      <label for="name">姓名</label>-->
<!--      <input type="text" id="name" v-model="data[0].interviewees.userName" required>-->
<!--    </div>-->
<!--    <div>-->
<!--      <label for="email">邮箱</label>-->
<!--      <input type="email" id="email" v-model="data[0].interviewees.email" required>-->
<!--    </div>-->
<!--    <div>-->
<!--      <label for="message">面试日期</label>-->
<!--      <textarea id="message" v-model="data.interviewTime" required></textarea>-->
<!--    </div>-->
<!--    <div>-->
<!--      <label for="message">联系方式</label>-->
<!--      <textarea id="message" v-model="data.interviewTime" required></textarea>-->
<!--    </div>-->
<!--    <div>-->
<!--      <label for="message">意向部门</label>-->
<!--      <textarea id="message" v-model="data.intentDepartment" required></textarea>-->
<!--    </div>-->
<!--    <div>-->
<!--      <label for="message">班级</label>-->
<!--      <textarea id="message" v-model="data.grade" required></textarea>-->
<!--    </div>-->
<!--    <div>-->
<!--      <label for="message">自我介绍</label>-->
<!--      <textarea id="message" v-model="data.introduce" required></textarea>-->
<!--    </div>-->
<!--    <div>-->
<!--      <label for="message">加入目的</label>-->
<!--      <textarea id="message" v-model="data.purpose" required></textarea>-->
<!--    </div>-->
<!--    <div>-->
<!--      <label for="message">备注</label>-->
<!--      <textarea id="message" v-model="data.remark" required></textarea>-->
<!--    </div>-->
<!--    <div>-->
<!--      <button type="submit">查询</button>-->
<!--    </div>-->
<!--  </form>-->

<!--</div>-->
</template>

<style scoped>

</style>
