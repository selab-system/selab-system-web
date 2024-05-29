<script>
import {
  getMsgByName,
  getMsgById,
  changeBookMsg,
  Delete,
  AddBook
} from "@/api/changeBookInformation";
export default {
  data() {
    return {
      formInline: {
        bookname: "",
        bookid: "",
      },
      form: {
        select: "",
        context: "",
      },
      list: {},
      addform: {
        bookName: "",
        bookAuthor: "",
        bookDetails: "",
        price: null,
        owner: null,
        ownerName: "",
        remark: "",
        bookRef: "",
      },
    };
  },
  methods: {
    async byname() {
      // 选择书名查询
      if (this.formInline.bookname.trim() === "") {
        alert("书名为空，请重新输入");
        return;
      }
      const res = await getMsgByName(this.formInline.bookname);
      console.log(res);
      if (res) {
        this.list = res.data;
        alert("已获取书籍");
      } else {
        alert("该书名不存在");
      }
    },
    // 选择书籍id查询
    async byid() {
      if (this.formInline.bookid.trim() === "") {
        alert("书籍id为空，请重新输入");
        return;
      }
      const res = await getMsgById(this.formInline.bookid);
      console.log(res);
      if (res) {
        this.list = res.data;
        alert("已获取书籍");
      } else {
        alert("该书名不存在");
        return;
      }
    },
    // 点击修改
    async modi(name, context) {
      if (
        name === null ||
        name === undefined ||
        context === null ||
        context === undefined
      ) {
        this.list[name] = context;
        console.log(this.list);
        const res = await changeBookMsg(this.list);
        console.log(res);
        alert("");
      } else {
        alert("修改信息未填写完成");
        return;
      }
    },
    // 删除图书
    async remove() {
      if (this.list.bookId) {
        await Delete(this.list.bookId);
        alert("删除成功");
      } else {
        alert("请先输入书名或书籍id进行查询");
      }
    },
    // 添加图书
    async addBook(addform){
      if(addform.bookName && addform.bookAuthor && addform.bookDetails && addform.price && addform.owner && addform.remark && addform.bookRef){
        const str = await AddBook(addform)
        console.log(str);
        alert("添加成功")
      }
      else{
        alert("有信息未填，请完善")
      }
    },
    clean(){
        addform={
        bookName: "",
        bookAuthor: "",
        bookDetails: "",
        price: null,
        owner: null,
        ownerName: "",
        remark: "",
        bookRef: "",
      }
    }
  },
};
</script>

<template>
  <div class="continue">
    <!-- 查询要改动的书籍 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="书名">
        <el-input v-model="formInline.bookname" placeholder="书名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="byname">查询</el-button>
      </el-form-item>
      <el-form-item label="书籍id">
        <el-input v-model="formInline.bookid" placeholder="书籍id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="byid">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 显示书籍信息 -->
    <el-descriptions title="书籍信息" class="listshow">
      <el-descriptions-item
        class="listshow"
        v-model="list.bookId"
        label="图书id"
      ></el-descriptions-item>
      <el-descriptions-item
        class="listshow"
        v-model="list.bookName"
        label="书籍名称"
      ></el-descriptions-item>
      <el-descriptions-item
        class="listshow"
        v-model="list.bookAuthor"
        label="图书作者"
      ></el-descriptions-item>
      <el-descriptions-item
        class="listshow"
        v-model="list.bookDetails"
        label="图书介绍"
      ></el-descriptions-item>
      <el-descriptions-item
        class="listshow"
        v-model="list.price"
        label="价格"
      ></el-descriptions-item>
      <el-descriptions-item
        class="listshow"
        v-model="list.ownerName"
        label="书记拥有者"
      ></el-descriptions-item>
      <el-descriptions-item
        class="listshow"
        v-model="list.status"
        label="书记状态"
      ></el-descriptions-item>
      <el-descriptions-item
        class="listshow"
        v-model="list.createTime"
        label="添加时间"
      ></el-descriptions-item>
      <el-descriptions-item
        class="listshow"
        v-model="list.updateTime"
        label="修改时间"
      ></el-descriptions-item>
    </el-descriptions>
    <!-- 分割线 -->
    <el-divider></el-divider>
    <!-- 输入要修改信息 -->
    <div class="title">请选择修改内容</div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="修改内容">
        <el-select v-model="form.select" placeholder="修改内容">
          <el-option label="图书id" value="bookId"></el-option>
          <el-option label="书籍名称" value="bookName"></el-option>
          <el-option label="图书作者" value="bookAuthor"></el-option>
          <el-option label="图书介绍" value="bookDetails"></el-option>
          <el-option label="价格" value="price"></el-option>
          <el-option label="书记拥有者" value="ownerName"></el-option>
          <el-option label="书记状态" value="status"></el-option>
          <el-option label="添加时间" value="createTime"></el-option>
          <el-option label="修改时间" value="updateTime"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="修改为">
        <el-input v-model="form.context" placeholder="修改为"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="modi(this.form.select, this.form.context)"
          >提交</el-button
        >
      </el-form-item>
    </el-form>

    <!-- 删除图书 -->
    <el-row>
      <el-button type="danger" round @click="remove">删除此图书</el-button>
    </el-row>

    <!-- 添加图书 -->
    <div class="title"></div>
    <div class="title">添加图书</div>
    <el-form ref="addform" :model="addform" label-width="80px">
      <el-form-item label="图书名称"><el-input v-model="addform.bookName"></el-input></el-form-item>
      <el-form-item label="书籍作者"><el-input v-model="addform.bookAuthor"></el-input></el-form-item>
      <el-form-item label="图书介绍"><el-input v-model="addform.bookDetails"></el-input></el-form-item>
      <el-form-item label="价格"><el-input v-model="addform.price"></el-input></el-form-item>
      <el-form-item label="书籍拥有者id"><el-input v-model="addform.owner"></el-input></el-form-item>
      <el-form-item label="备注信息"><el-input v-model="addform.remark"></el-input></el-form-item>
      <el-form-item label="书籍编号"><el-input v-model="addform.bookRef"></el-input></el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addBook(this.addform)">立即创建</el-button>
        <el-button @click="clean">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>



<style>
.title {
  width: 150px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  color: blue;
}
/* .continue{
  background-color: #c2e3ec;
  
}
.listshow{
  background-color: #9ab9c4;
} */
</style>