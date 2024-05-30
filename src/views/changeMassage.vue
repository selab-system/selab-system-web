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
<div class="ChangeMassage">
  <vue-particles id="particles-js" class="vue-particles" color="#8EB5C9" :particleOpacity="0.7" :particlesNumber="150" shapeType="star"
                 :particleSize="4" linesColor="#8EB5C9" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150"
                 :moveSpeed="3" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" ref="particles">
  </vue-particles>
  <div class="changeMassage">
  <input type="text" placeholder="请输入用户名称" v-model="this.registrationDto.interviewees.userName" class="active">用户名称
  <br>
  <input type="number" placeholder="请输入小组id" v-model="this.registrationDto.interviewees.groupId" class="active">小组id
  <br>
  <input type="number" placeholder="请输入角色id" v-model="this.registrationDto.interviewees.roleId" class="active">角色id
  <br>
  <input type="text" placeholder="请输入角色名称" v-model="this.registrationDto.interviewees.roleName" class="active">角色名称
  <br>
  <input type="text" placeholder="请输入邮箱" v-model="this.registrationDto.interviewees.email" class="active">邮箱
  <br>
  <input type="number" placeholder="请输入性别" v-model="this.registrationDto.interviewees.sex" class="active">性别（0为女，1为男）
  <br>
  <input type="number" placeholder="请输入用户id" v-model="this.registrationDto.interviewees.userId" class="active">用户id
  <br>
  <input type="text" placeholder="请输入创建时间" v-model="this.registrationDto.interviewees.createTime" class="active">创建时间
  <br>
  <input type="text" placeholder="请输入更新时间" v-model="this.registrationDto.interviewees.updateTime" class="active">更新时间
  <br>
  <input type="number" placeholder="请输入意向部门" v-model="this.registrationDto.intentDepartment" class="active">意向部门（1.开发2.网安3.人工智能4.虚拟现实）
  <br>
  <input type="text" placeholder="请输入班级" v-model="this.registrationDto.classroom" class="active">班级
  <br>
  <input type="text" placeholder="请输入面试时间" v-model="this.registrationDto.interviewTime" class="active">面试时间
  <br>
  <textarea placeholder="请输入自我介绍" v-model="this.registrationDto.introduce" class="active"></textarea>自我介绍
  <br>
  <input type="text" placeholder="输入加入目的" v-model="this.registrationDto.purpose" class="active">加入目的
  <br>
  <input type="text" placeholder="请输入备注" v-model="this.registrationDto.remark" class="active">备注
  <br>
  <input type="text" placeholder="请输入年级" v-model="this.registrationDto.grade" class="active">年级
  <br>
  <button @click="handleChange()">修改成功</button>
  </div>
</div>
</template>

<style scoped>
.active{
  margin-left: 36%;
  margin-top: 10px;
  width: 200px;
  height: 30px;
}
button{
  margin-left: 43%;
}

.changeMassage{
  position: relative;
}
#particles-js {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 0;

}

</style>
