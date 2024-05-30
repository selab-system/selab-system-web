<script >
import {idsearch} from "@/api/submitForm";
export default {
  data() {
    return {
      registrationid: '',
      person: {
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
        grade: " "
      },
      msg: " "
    }
  },
  methods: {
    open(registrationid) {
     idsearch(registrationid).then(res=>{
       this.person=res.data
       console.log(res)
     })
    }
  }
}
</script>

<template>
  <div>
  <input type="number" placeholder="请输入你的id" v-model="registrationid">
  <button @click="open">查询</button>
<!--{{person.id}}-->
<!--  <br>-->
<!--  {{person.interviewees.userName}}-->
<!--  <br>-->
<!--  {{person.interviewees.groupId}}-->
<!--  <br>-->
<!--  {{person.interviewees.groupName}}-->
<!--  <br>-->
<!--  {{person.interviewees.roleId}}-->
<!--  <br>-->
<!--  {{person.interviewees.roleName}}-->
<!--  <br>-->
<!--  {{person.interviewees.email}}-->
<!--  <br>-->
<!--  {{person.interviewees.phone}}-->
<!--  <br>-->
<!--  {{person.interviewees.sex}}-->
<!--  <br>-->
<!--  {{person.interviewees.userId}}-->
<!--  <br>-->
<!--  {{person.interviewees.createTime}}-->
<!--  <br>-->
<!--  {{person.interviewees.updateTime}}-->
<!--  <br>-->
<!--  {{person.intentDepartment}}-->
<!--  <br>-->
<!--  {{person.classroom}}-->
<!--  <br>-->
<!--  {{person.interviewTime}}-->
<!--  {{person.purpose}}-->
<!--  <br>-->
<!--  {{person.grade}}-->
<!--  <br>-->
<!--  {{person.remark}}-->
<!--  <br>-->

  </div>
</template>

<style scoped>

</style>
