<script >
import {changeMessage} from "@/api/submitForm";

export default {
  data(){
 return{

     id:2,
     interviewees:{
       // userName:'',
       // groupId:1,
       // groupName:'',
       // roleId:1,
       // roleName:'',
       // email:'',
       // phone:'',
       // sex:0,
       // userId:0,
       // createTime:'',
       // updateTime:'',
   },
     email:'1',
     phone:"3",
     intentDepartment:0,
     classroom:'1',
     interviewTime:'2',
     introduce:'3',
     purpose:'1',
     remark:'2',
     grade:'3',
   }


  },
  methods:{
   async handleChange(){
     const res=await changeMessage(

       {
           id:this.id,
           interviewees:this.interviewees,
           email:this.email,
         phone:this.phone,
         intentDepartment:this.intentDepartment,
         introduce:this.introduce,
         purpose:this.purpose,
         remark:this.remark,
         grade:this.grade,
         interviewTime:this.interviewTime,
         classroom:this.classroom

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
  <input type="text" placeholder="请输入用户名称" v-model="this.interviewees.userName" class="active">用户名称
  <br>
  <input type="number" placeholder="请输入小组id" v-model="this.interviewees.groupId" class="active">小组id
  <br>
  <input type="number" placeholder="请输入角色id" v-model="this.interviewees.roleId" class="active">角色id
  <br>
    <input type="number" placeholder="请输入联系方式" v-model="this.phone" class="active">联系方式
    <br>
  <input type="text" placeholder="请输入角色名称" v-model="this.interviewees.roleName" class="active">角色名称
  <br>
  <input type="text" placeholder="请输入邮箱" v-model="this.email" class="active">邮箱
  <br>
  <input type="number" placeholder="请输入性别" v-model="this.interviewees.sex" class="active">性别（0为女，1为男）
  <br>
  <input type="number" placeholder="请输入用户id" v-model="this.interviewees.userId" class="active">用户id
  <br>
  <input type="text" placeholder="请输入创建时间" v-model="this.interviewees.createTime" class="active">创建时间
  <br>
  <input type="text" placeholder="请输入更新时间" v-model="this.interviewees.updateTime" class="active">更新时间
  <br>
  <input type="number" placeholder="请输入意向部门" v-model="this.intentDepartment" class="active">意向部门（1.开发2.网安3.人工智能4.虚拟现实）
  <br>
  <input type="text" placeholder="请输入班级" v-model="this.classroom" class="active">班级
  <br>
  <input type="text" placeholder="请输入面试时间" v-model="this.interviewTime" class="active">面试时间
  <br>
  <textarea placeholder="请输入自我介绍" v-model="this.introduce" class="active"></textarea>自我介绍
  <br>
  <input type="text" placeholder="输入加入目的" v-model="this.purpose" class="active">加入目的
  <br>
  <input type="text" placeholder="请输入备注" v-model="this.remark" class="active">备注
  <br>
  <input type="text" placeholder="请输入年级" v-model="this.grade" class="active">年级
  <br>
  <button @click="handleChange()">修改</button>
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
