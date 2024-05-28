<script >
import {submit} from "@/api/submitForm";
export default {
  data() {
    return {
      registrationDto:{
      interviewees: '',
        email: '',
        interviewTime: '',
        phone: '',
        intentDepartment: '',
        classroom: '',
        introduce: '',
        purpose: '',
        remark: '',
        grade: ''
    }
      }
    }
  ,
  methods: {
    // Onsubmit() {
    //   submit().then(res=>{
    //    data:{
    //
    //
    //
    //    }
    //   })
    // }
    async Onsubmit() {
    //   const res = await submit(
    //     {
    //       registrationDto:{
    //         interviewees: '',
    //         email: '',
    //         interviewTime: '',
    //         phone: '',
    //         intentDepartment: '',
    //         classroom: '',
    //         introduce: '',
    //         purpose: '',
    //         remark: '',
    //         grade: ''
    //       }}
    //
    // )

      console.log(this.registrationDto)
      // this.registrationDto.inerviewTime=' '
      // this.registrationDto.grade=' '
      // this.registrationDto.remark=' '
      // this.registrationDto.phone=' '
      // this.registrationDto.introduce=' '
      // this.registrationDto.purpose=' '
      // this.registrationDto.classroom=' '
      // this.registrationDto.intentDepartment=' '
      alert("提交申请表成功")

    }
  }
}


</script>

<template>
  <div>
    <el-form ref="registrationDtoRef" :model="registrationDto" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="registrationDto.interviewees" placeholder="请填写你的姓名"></el-input>
        {{registrationDto.interviewees}}
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="registrationDto.email" placeholder="请填写你的邮箱">
        </el-input>
      </el-form-item>
      <el-form-item label="面试日期">
          <el-input v-model="registrationDto.interviewTime" placeholder="请输入申请时间">
          </el-input>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="registrationDto.phone" placeholder="请填写你的联系方式">
        </el-input>
      </el-form-item>
      <el-form-item label="意向部门">
        <el-checkbox-group v-model="registrationDto.intentDepartment">
          <el-input v-model="registrationDto.intentDepartment" placeholder="请填写你的意向部门（1.软开2.网安3.人工智能4.虚拟现实）">
            </el-input>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="班级">
          <el-input v-model="registrationDto.classroom" placeholder="请填写你的班级">
            {{registrationDto.classroom}}
          </el-input>
      </el-form-item>
      <el-form-item label="自我介绍">
        <el-input type="textarea" v-model="registrationDto.introduce"></el-input>
      </el-form-item>
      <el-form-item label="加入目的">
        <el-input type="input" v-model="registrationDto.purpose" placeholder="请输入加入目的"></el-input>
    </el-form-item>
      <el-form-item label="备注">
        <el-input type="input" v-model="registrationDto.remark" placeholder="备注"></el-input>
      </el-form-item>
      <el-form-item label="年级">
        <el-input type="input" v-model="registrationDto.grade" placeholder="年级(1为大一，2为大二)"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="Onsubmit">提交</el-button>
      </el-form-item>
    </el-form>

</div>
</template>

<style scoped>

</style>
