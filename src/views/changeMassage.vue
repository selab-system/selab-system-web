<script >
import {changeMessage} from "@/api/submitForm";

export default {
  data(){
 return{
   registrationDto:{
     id:'',
     interviewees:{
       userName:'',
       groupId:'',
       groupName:'',
       roleId:'',
       roleName:'',
       email:'',
       phone:'',
       sex:'',
       userId:'',
       createTime:'',
       updateTime:'',
   },
     intentDepartment:'',
     classroom:'',
     interviewTime:'',
     introduce:'',
     purpose:'',
     remark:'',
     grade:'',
   }
 }

  },
  methods:{
   async handleChange(){
     const res=await changeMessage(

       {
         registrationDto:{
           id:'',
           interviewees:{
             userName:'',
             groupId:'',
             groupName:'',
             roleId:'',
             roleName:'',
             email:'',
             phone:'',
             sex:'',
             userId:'',
             createTime:'',
             updateTime:'',
           },
           intentDepartment:'',
           classroom:'',
           interviewTime:'',
           introduce:'',
           purpose:'',
           remark:'',
           grade:'',
         }
       },


     )
     alert("修改成功")
     console.log(res)

   }


       }



}



</script>

<template>
<div>
  <input type="text" placeholder="请输入用户名称" v-model="this.registrationDto.interviewees.userName">用户名称
  <br>
  <input type="number" placeholder="请输入小组id" v-model="this.registrationDto.interviewees.groupId">小组id
  <br>
  <input type="number" placeholder="请输入角色id" v-model="this.registrationDto.interviewees.roleId">角色id
  <br>
  <input type="text" placeholder="请输入角色名称" v-model="this.registrationDto.interviewees.roleName">角色名称
  <br>
  <input type="text" placeholder="请输入邮箱" v-model="this.registrationDto.interviewees.email">邮箱
  <br>
  <input type="number" placeholder="请输入性别" v-model="this.registrationDto.interviewees.sex">性别（0为女，1为男）
  <br>
  <input type="number" placeholder="请输入用户id" v-model="this.registrationDto.interviewees.userId">用户id
  <br>
  <input type="text" placeholder="请输入创建时间" v-model="this.registrationDto.interviewees.createTime">创建时间
  <br>
  <input type="text" placeholder="请输入更新时间" v-model="this.registrationDto.interviewees.updateTime">更新时间
  <br>
  <input type="number" placeholder="请输入意向部门" v-model="this.registrationDto.intentDepartment">意向部门（1.开发2.网安3.人工智能4.虚拟现实）
  <br>
  <input type="text" placeholder="请输入班级" v-model="this.registrationDto.classroom">班级
  <br>
  <input type="text" placeholder="请输入面试时间" v-model="this.registrationDto.interviewTime">面试时间
  <br>
  <textarea placeholder="请输入自我介绍" v-model="this.registrationDto.introduce"></textarea>
  <br>
  <input type="text" placeholder="输入加入目的" v-model="this.registrationDto.purpose">加入目的
  <br>
  <input type="text" placeholder="请输入备注" v-model="this.registrationDto.remark">备注
  <br>
  <input type="text" placeholder="请输入年级" v-model="this.registrationDto.grade">年级
  <button @click="handleChange()">修改成功</button>

</div>
</template>

<style scoped>

</style>
