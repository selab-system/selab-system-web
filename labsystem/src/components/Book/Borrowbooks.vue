<template>
  <span >
    <div
      style="
        width: 100%;
        padding-left: 23%;
        box-sizing: border-box;
        font-size: 30px;
      "
    >
      Borrow
    </div>
    <el-form
      ref="form"
      :model="sizeForm"
      label-width="80px"
      style="width: 50%; margin-top: 20px"
    >
      <el-form-item label="书名">
        <el-input v-model="sizeForm.name" @change="getbookname"></el-input>
      </el-form-item>
      <!-- <el-form-item label="书籍编号">
        <el-input v-model="sizeForm.id" @change="getbookid"></el-input>
      </el-form-item> -->
      <el-form-item label="起止时间">
        <el-date-picker
          v-model="sizeForm.value"
          type="daterange"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00', '23:59:59']"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit">确认借阅</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </span>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {
        name: "",
        // id: "",
        value: "",
        delivery: false,
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    getbookname(value) {
      console.log(value);
    },
    // getbookid(value){
    //   console.log(value)
    // }
  },
};
</script>

<style scoped>
span {
  width: 100%;
  padding-top: 20px;
  padding-left: 100px;
  box-sizing: border-box;
}
</style>