<script >
import {idsearch} from "@/api/submitForm";
export default {
  data() {
    return {
      registrationId: '',
      code:'',
      gg:{

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
    }}
  },
  methods: {
    open() {
     idsearch({
       registrationId:this.registrationId
     }).then(res=>{
       this.gg.person=res.data
       console.log(res)
     })

    }
  },

}
</script>

<template>
  <div>

  <input type="text" placeholder="请输入你的id" v-model="registrationId">
  <button @click="open(registrationId)">查询</button>


  </div>
</template>

<style scoped>

</style>
