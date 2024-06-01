<script >
import {viewsubmit} from "@/api/submitForm";
export default {
  data(){
    return{
      intervieweesName:'',
      cur:'',
      size:''
    }

  },
  methods:{
    search(){
    viewsubmit().then(res=>{
      console.log(res)
    })
      alert()
    }
  }

}
</script>

<template>
<div>
  <input type="text" placeholder="请输入你的名字" v-model="intervieweesName">
  <button @click="search">查询</button>
</div>
</template>

<style scoped>

</style>
