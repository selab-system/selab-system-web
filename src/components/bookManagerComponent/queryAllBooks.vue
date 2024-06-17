<script>
import {BorrowBook, DeleteBook, getBookInfo, getBookList, saveBookInfo, updateBookInfo} from "@/api/Book/BookManage";

export default {
  name: "queryAllBooks",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('书籍名称不能为空'));
      }
      // setTimeout(() => {
      //   if (!Number.isInteger(value)) {
      //     callback(new Error('请输入数字值'));
      //   } else {
      //     if (value < 18) {
      //       callback(new Error('必须年满18岁'));
      //     } else {
      //       callback();
      //     }
      //   }
      // }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('书籍作者不能为空'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('书籍介绍不能为空'));
      }
      // } else if (value !== this.ruleForm.pass) {
      //   callback(new Error('两次输入密码不一致!'));
      // } else {
      //   callback();
      // }
    };
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('书籍价格不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 0) {
            callback(new Error('必须大于0'));
          } else {
            callback();
          }
        }
      }, 1000);
      // } else if (value !== this.ruleForm.pass) {
      //   callback(new Error('两次输入密码不一致!'));
      // } else {
      //   callback();
      // }
    };
    var validatePass4 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('书籍拥有者id不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 0) {
            callback(new Error('必须大于0'));
          } else {
            callback();
          }
        }
      }, 1000);
      // } else if (value !== this.ruleForm.pass) {
      //   callback(new Error('两次输入密码不一致!'));
      // } else {
      //   callback();
      // }
    };
    var validatePass5 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('备注不能为空'));
      }
      // } else if (value !== this.ruleForm.pass) {
      //   callback(new Error('两次输入密码不一致!'));
      // } else {
      //   callback();
      // }
    };
    var validatePass6 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('书籍编号不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 0) {
            callback(new Error('必须大于0'));
          } else {
            callback();
          }
        }
      }, 1000);
      // } else if (value !== this.ruleForm.pass) {
      //   callback(new Error('两次输入密码不一致!'));
      // } else {
      //   callback();
      // }
    };
    return {
      saveBookName: '',
      saveBookAuthor: '',
      saveBookInfo: '',
      saveBookMon: 0,
      saveBookOwenId: 0,
      saveBookOther: '',
      saveBookRef: '',
      bookId: 0,
      borrowBookId: 0,
      borrowDuration: 0,
      returnTime: '',
      tableTitleData: [
        "序号",
        "书籍id",
        "图书名称",
        "书籍作者",
        "价格",
        "书籍拥有者ID",
        "书籍拥有者名称",
        "图书介绍",
        "添加时间",
        "修改时间",
        "书籍状态",
        "操作"
      ],
      tableData: [],
      dataItem: -1,
      saveBookId: 0,
      saveBookOwenName: '',
      bookStatus: '',
      createTime: '',
      updateTime: '',
      ruleForm: {
        pass1: '',
        pass2: '',
        pass3: '',
        pass4: '',
        pass5: '',
        pass6: '',
        pass7: ''
      },
      rules: {
        pass1: [
          { validator: validatePass, trigger: 'blur' }
        ],
        pass2: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        pass3: [
          { validator: checkAge, trigger: 'blur' }
        ],
        pass4: [
          { validator: validatePass3, trigger: 'blur' }
        ],
        pass5: [
          { validator: validatePass4, trigger: 'blur' }
        ],
        pass6: [
          { validator: validatePass5, trigger: 'blur' }
        ],
        pass7: [
          { validator: validatePass6, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    saveBookDate() {
      try {
        const params = {
          bookName: this.saveBookName,
          bookAuthor: this.saveBookAuthor,
          bookDetails: this.saveBookInfo,
          price: this.saveBookMon,
          owner: parseInt(this.saveBookOwenId),
          remark: this.saveBookOther,
          bookRef: this.saveBookRef
        }
        if(this.saveBookName !== '' && this.saveBookAuthor !== ''  && this.saveBookInfo !== ''  && this.saveBookMon !== '' && this.saveBookOwenId !== '' && this.saveBookOther !== ''  && this.saveBookRef !== '') {
          saveBookInfo(params).then(res =>{
            if(res.code === 200){
              console.log(res);
              this.getAllBooks();
              const selectDiv = document.querySelector('.selectDiv');
              selectDiv.style.display = 'none';
              this.addOne();
            } else {
              console.log(111);
            }
          })
        }else {
          this.inputError();
        }
      } catch (err) {
        console.log(err)
      }
      console.log(typeof parseInt(this.saveBookMon))
      console.log('')
    },
    queryData() {
      try {
        const params = {
          bookId: this.bookId
        }
        getBookInfo(params).then(res =>{
          if(res.code === 200){
            this.tableData = [];
            this.tableData.push(res.data)
            console.log(res)
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    borrowBook() {
      try {
        const params = {
          bookId: this.borrowBookId,
          borrowDuration: this.borrowDuration,
          returnTime: this.returnTime
        }
        console.log(params)
        if(this.borrowBookId !== ''&& this.borrowDuration !== '' && this.returnTime !== '') {
          BorrowBook(params).then(res =>{
            if(res.code === 200){
              const borrowDiv = document.querySelector('.borrowDiv');
              borrowDiv.style.display = 'none';
              this.getAllBooks();
              this.borrow();
            } else {
              console.log(111);
            }
          })
        } else {
          this.inputError();
        }
      } catch (err) {
        console.log(err)
      }
    },
    touchContent(item) {
      this.dataItem = item;
    },
    touchLeaveContent() {
      this.dataItem = -1;
    },
    borrow() {
      const borrowAsk1 = document.querySelector('.borrowAsk1');
      borrowAsk1.style.display = 'block';
      setTimeout(() => {
        borrowAsk1.style.display = 'none';
      }, 1000);
      // if(e.target.textContent === '借阅') {
      //   const borrowAsk1 = document.querySelector('.borrowAsk1');
      //   borrowAsk1.style.display = 'block';
      //   setTimeout(() => {
      //     borrowAsk1.style.display = 'none';
      //   }, 1000);
      // }
      // if(e.target.textContent === '已被借阅') {
      //   const borrowAsk2 = document.querySelector('.borrowAsk2');
      //   borrowAsk2.style.display = 'block';
      //   setTimeout(() => {
      //     borrowAsk2.style.display = 'none';
      //   }, 1000);
      // }
      // e.target.textContent = '已被借阅';
    },
    editOne() {
      const borrowAsk3 = document.querySelector('.borrowAsk3');
      borrowAsk3.style.display = 'block';
      setTimeout(() => {
        borrowAsk3.style.display = 'none';
      }, 1000);
    },
    addOne() {
      const addSuccess = document.querySelector('.addSuccess');
      addSuccess.style.display = 'block';
      setTimeout(() => {
        addSuccess.style.display = 'none';
      }, 1000);
    },
    deleteOne() {
      const deleteSuccess = document.querySelector('.deleteSuccess');
      deleteSuccess.style.display = 'block';
      setTimeout(() => {
        deleteSuccess.style.display = 'none';
      }, 1000);
    },
    inputError() {
      const inputError = document.querySelector('.inputError');
      inputError.style.display = 'block';
      setTimeout(() => {
        inputError.style.display = 'none';
      }, 1000);
    },
    getAllBooks() {
      try {
        const params = {
          cur:1,
          size:100
        }

        getBookList(params).then(res =>{
          console.log(res.data)
          if(res.code === 200){
            // for(let i in res.data) {
            //   console.log(res.data[i]);
            //   this.tableData.push(res.data[i]);
            // }
            this.tableData = res.data.data;
            console.log(this.tableData)
          } else {
            console.log(111);
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    selectDivHava() {
      const selectDiv = document.querySelector('.selectDiv');
      selectDiv.style.display = 'block';
    },
    borrowDivHave() {
      const borrowDiv = document.querySelector('.borrowDiv');
      borrowDiv.style.display = 'block';
    },
    editDivHave() {
      const editDiv = document.querySelector('.editDiv');
      editDiv.style.display = 'block';
    },
    editBook() {
      try {
        const params = {
          bookId: this.saveBookId,
          bookName: this.saveBookName,
          bookAuthor: this.saveBookAuthor,
          bookDetails: this.saveBookInfo,
          price: this.saveBookMon,
          owner: this.saveBookOwenId,
          ownerName: this.saveBookOwenName,
          status: this.bookStatus,
          createTime: this.createTime,
          updateTime: this.updateTime,
          bookRef: this.saveBookRef
        }
        if(true) {
          updateBookInfo(params).then(res =>{
            console.log(res.data)
            if(res.code === 200){
              this.getAllBooks();
              const editDiv = document.querySelector('.editDiv');
              editDiv.style.display = 'none';
              this.editOne();
            } else {
              console.log(111);
            }
          })
        } else {
          this.inputError();
        }
      } catch (err) {
        console.log(err)
      }
    },
    deleteBook(bookId) {
      try {
        const param = {
          bookId: bookId
        }
        if(this.bookId !== '' && typeof this.bookId === 'number' ) {
          DeleteBook(param).then(res =>{
            if(res.code === 200){
              this.deleteOne();
              this.getAllBooks();
            } else {
              console.log(111);
            }
          })
        } else {
          this.inputError();
        }
      } catch (err) {
        console.log(err)
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    // eslint-disable-next-line vue/no-dupe-keys
    editBooks() {
      return this.$store.state.readRoleId !== 3;
    },
    // eslint-disable-next-line vue/no-dupe-keys
    edit() {
      return this.$store.state.roleId !== 0;
    }
  },
  created() {
    this.getAllBooks();
  }
}
</script>

<template>
  <div>
<!--    <top-bar></top-bar>-->
    <div class="allBooksTitle">书籍列表：</div>
    <button class="addButton" @click="selectDivHava">增加书籍</button>
    <div class="selectInput">
      <div>
        书籍ID：<input type="text" placeholder="请输入书籍ID" v-model="bookId">
        <button @click="queryData">查询</button>
      </div>
    </div>
    <div class="editInput" v-if="editBooks">
      <div>
        <input type="text" placeholder="请输入修改后的内容">
        <button>确认</button>
      </div>
    </div>
    <div class="takeEditInput">
      <div>
        <input type="text" placeholder="请输入要修改的内容">
        <button>确认</button>
      </div>
    </div>
<!--    <query-all-books-table></query-all-books-table>-->
    <div>
      <div class="tableTitle">
        <div v-for="title in tableTitleData" :key="title">{{ title }}</div>
      </div>
      <div class="tableBody">
        <div v-for="(data, item) in tableData" :key="data">
          <div>{{ data.bookRef }}</div>
          <div>{{ data.bookId }}</div>
          <div>{{ data.bookName }}</div>
          <div>{{ data.bookAuthor }}</div>
          <div>{{ data.price }}</div>
          <div>{{ data.owner}}</div>
          <div>{{ data.ownerName }}</div>
          <div>{{ data.createTime }}</div>
          <div>{{ data.updateTime }}</div>
          <div>{{ data.status === 2 ? '不可借阅' : '可借阅'}}</div>
          <div class="booksIntroduce">
            <span @mouseenter="touchContent(item)" @mouseleave="touchLeaveContent">轻触展开</span>
            <span class="booksIntroduceContent" v-show="dataItem === item">{{ data.bookDetails }}</span>
          </div>
          <div class="booksFunction">
            <button class="borrowButton" @click="borrowDivHave">借阅</button>
            <button @click="editDivHave" v-if="edit">修改</button>
            <button @click="deleteBook(data.bookId)" v-if="edit">删除</button>
          </div>
        </div>
        <div class="borrowAsk1">借阅成功</div>
        <div class="borrowAsk2">该图书已被借阅</div>
        <div class="borrowAsk3">修改成功</div>
        <div class="deleteSuccess">删除成功</div>
        <div class="addSuccess">新增成功</div>
        <div class="inputError">输入有误</div>
      </div>
    </div>
    <div class="borrowDiv">
      <div>
        书籍id：<input type="text" placeholder="请输入书籍id" v-model="borrowBookId">
      </div>
      <div>
        借阅时长：<input type="text" placeholder="请输入借阅时长" v-model="borrowDuration">天
      </div>
      <div>
        归还时间：<input type="text" placeholder="请输入归还时间" v-model="returnTime">
      </div>
      <div>
        <button @click="borrowBook">确认</button>
      </div>
    </div>
    <div class="selectDiv">
<!--      <div>-->
<!--        书籍名称：<input type="text" placeholder="请输入书籍名称" v-model="saveBookName">-->
<!--      </div>-->
<!--      <div>-->
<!--        书籍作者：<input type="text" placeholder="请输入书籍作者" v-model="saveBookAuthor">-->
<!--      </div>-->
<!--      <div>-->
<!--        书籍介绍：<input type="text" placeholder="请输入书籍介绍" v-model="saveBookInfo">-->
<!--      </div>-->
<!--      <div>-->
<!--        书籍价格：<input type="text" placeholder="请输入书籍价格" v-model="saveBookMon">-->
<!--      </div>-->
<!--      <div>-->
<!--        书籍拥有者id：<input type="text" placeholder="请输入书籍拥有者" v-model="saveBookOwenId">-->
<!--      </div>-->
<!--      <div>-->
<!--        备注：<input type="text" placeholder="请输入备注信息" v-model="saveBookOther">-->
<!--      </div>-->
<!--      <div>-->
<!--        书籍编号：<input type="text" placeholder="请输入书籍编号" v-model="saveBookRef">-->
<!--      </div>-->
<!--      <div>-->
<!--        <button @click="saveBookDate">增加</button>-->
<!--      </div>-->
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="书籍名称" prop="pass3">
          <el-input type="password" v-model="saveBookName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="书籍作者" prop="pass1">
          <el-input type="password" v-model="saveBookAuthor" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="书籍介绍" prop="pass2">
          <el-input v-model="saveBookInfo"></el-input>
        </el-form-item>
        <el-form-item label="书籍价格" prop="pass4">
          <el-input v-model="saveBookMon"></el-input>
        </el-form-item>
        <el-form-item label="书籍拥有者id" prop="pass5">
          <el-input v-model="saveBookOwenId"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="pass6">
          <el-input v-model="saveBookOther"></el-input>
        </el-form-item>
        <el-form-item label="书籍编号" prop="pass7">
          <el-input v-model="saveBookRef"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveBookDate">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="editDiv">
      <div>
        书籍id：<input type="text" placeholder="请输入书籍id" v-model="saveBookId">
      </div>
      <div>
        书籍名称：<input type="text" placeholder="请输入书籍名称" v-model="saveBookName">
      </div>
      <div>
        书籍作者：<input type="text" placeholder="请输入书籍作者" v-model="saveBookAuthor">
      </div>
      <div>
        书籍介绍：<input type="text" placeholder="请输入书籍介绍" v-model="saveBookInfo">
      </div>
      <div>
        书籍价格：<input type="text" placeholder="请输入书籍价格" v-model="saveBookMon">
      </div>
      <div>
        书籍拥有者id：<input type="text" placeholder="请输入书籍拥有者" v-model="saveBookOwenId">
      </div>
      <div>
        书籍拥有者名称：<input type="text" placeholder="请输入书籍拥有者" v-model="saveBookOwenName">
      </div>
      <div>
        书籍状态：<input type="text" placeholder="请输入书籍状态" v-model="bookStatus">
      </div>
      <div>
        书籍编号：<input type="text" placeholder="请输入书籍编号" v-model="saveBookRef">
      </div>
      <div>
        添加时间：<input type="text" placeholder="请输入添加时间" v-model="createTime">
      </div>
      <div>
        修改时间：<input type="text" placeholder="请输入修改时间" v-model="updateTime">
      </div>
      <div>
        <button @click="editBook">确定</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .allBooksTitle {
    width: 200px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: black;
    font-size: 30px;
    font-family: fangsong;
  }
  .selectInput {
    width: 500px;
    height: 60px;
    //background: red;
    position: absolute;
    top: 110px;
    left:  400px;
    border: 1px rosybrown solid;
    border-radius: 30px;
    div {
      padding: 20px 0;
      input {
        border-radius: 20px;
        text-indent: 5px;
      }
      button {
        width: 50px;
        margin-left: 20px;
        border-radius: 20px;
      }
    }
  }
  .inputError {
    width: 20%;
    height: 50px;
    background-color: #e86868;
    color: black;
    font-size: 20px;
    font-family: fangsong;
    text-align: center;
    line-height: 50px;
    border-radius: 10px;
    position: absolute;
    top: -90px;
    left: 40%;
    display: none;
    animation: askChange 0.5s linear;
    z-index: 5;
  }
  .editInput {
    width: 250px;
    height:60px;
    position: absolute;
    top: 110px;
    left:  1350px;
    border: 1px rosybrown solid;
    border-radius: 30px;
    display: none;
    div {
      padding: 20px 0;
      input {
        border-radius: 20px;
        text-indent: 5px;
      }
      button {
        width: 50px;
        margin-left: 10px;
        border-radius: 20px;
      }
    }
  }
  .takeEditInput {
    width: 250px;
    height:60px;
    position: absolute;
    top: 110px;
    left:  1350px;
    border: 1px rosybrown solid;
    border-radius: 30px;
    display: none;
    div {
      padding: 20px 0;
      input {
        border-radius: 20px;
        text-indent: 5px;
      }
      button {
        width: 50px;
        margin-left: 10px;
        border-radius: 20px;
      }
    }
  }
  .addButton {
    width: 90px;
    height: 20px;
    position: absolute;
    top: 130px;
    left: 200px;
  }
  .selectDiv {
    width: 300px;
    height: 400px;
    //background: wheat;
    position: absolute;
    top: 200px;
    left: 43%;
    //border: 1px black solid;
    z-index: 3;
    //div {
    //  width: 100%;
    //  height: 50px;
    //  padding-top: 2px;
    //  input {
    //    border-radius: 40px;
    //    text-indent: 10px;
    //  }
    //  button {
    //    width: 50px;
    //    height: 20px;
    //  }
    //}
    display: none;
  }
  .editDiv {
    width: 500px;
    height: 500px;
    background: wheat;
    position: absolute;
    top: 200px;
    left: 40%;
    border: 1px black solid;
    z-index: 3;
    display: none;
    div {
      width: 100%;
      height: 50px;
      padding-top: 2px;

      input {
        border-radius: 40px;
        text-indent: 10px;
      }

      button {
        width: 50px;
        height: 20px
      }
    }
  }
  .borrowDiv {
    width: 400px;
    height: 200px;
    background: wheat;
    position: absolute;
    top: 200px;
    left: 40%;
    border: 1px black solid;
    display: none;
    div {
      width: 100%;
      height: 50px;
      padding-top: 2px;
      input {
        border-radius: 40px;
        text-indent: 10px;
      }
      button {
        width: 50px;
        height: 20px
      }
    }
  }
  $titleCount: 12;
  .tableTitle {
    width:95%;
    height:50px;
    margin: 0 auto;
    //margin-top: 50px;
    div {
      width: 100% / $titleCount;
      height: 100%;
      display: inline-block;
      text-align: center;
      border: 1px black solid;
      border-collapse: collapse;
      align-content: center;
      box-sizing: border-box;
      background-color: whitesmoke;
    }
  }
  .tableBody {
    width: 95%;
    margin: 0 auto;
    position: relative;
    .borrowAsk1 {
      width: 20%;
      height: 50px;
      background-color: greenyellow;
      color: black;
      font-size: 20px;
      font-family: fangsong;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
      position: absolute;
      top: -90px;
      left: 40%;
      display: none;
      animation: askChange 0.5s linear;
    }
    .borrowAsk2 {
      width: 20%;
      height: 50px;
      background-color: #e86868;
      color: black;
      font-size: 20px;
      font-family: fangsong;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
      position: absolute;
      top: -90px;
      left: 40%;
      display: none;
      animation: askChange 0.5s linear;
    }
    .borrowAsk3 {
      width: 20%;
      height: 50px;
      background-color: greenyellow;
      color: black;
      font-size: 20px;
      font-family: fangsong;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
      position: absolute;
      top: -90px;
      left: 40%;
      display: none;
      animation: askChange 0.5s linear;
    }
    .deleteSuccess {
      width: 20%;
      height: 50px;
      background-color: greenyellow;
      color: black;
      font-size: 20px;
      font-family: fangsong;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
      position: absolute;
      top: -90px;
      left: 40%;
      display: none;
      animation: askChange 0.5s linear;
    }
    .addSuccess {
      width: 20%;
      height: 50px;
      background-color: greenyellow;
      color: black;
      font-size: 20px;
      font-family: fangsong;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
      position: absolute;
      top: -90px;
      left: 40%;
      display: none;
      animation: askChange 0.5s linear;
    }
    div {
      width: 100%;
      .booksIntroduce {
        width: 100% / $titleCount;
        height: 50px;
        display: inline-block;
        text-align: center;
        border: 1px black solid;
        border-collapse: collapse;
        align-content: center;
        box-sizing: border-box;
        font-family: 'fangsong';
        position: relative;
        span:not(.booksIntroduceContent){
          border: 1px black solid;
          border-radius: 5px;
          padding: 2px;
        }
        .booksIntroduceContent {
          width: 300px;
          height: 300px;
          position: absolute;
          top: 40px;
          left: 0;
          background-color: lightgoldenrodyellow;
          border-radius: 10px;
          color: black;
          font-family: fangsong;
          font-size: 16px;
          z-index: 1;
        }
      }
      .booksFunction {
        button {
          width: 30px;
          height: 70%;
          color: black;
          font-size: 16px;
          font-family: fangsong;
        }
      }
      div:not(.booksIntroduce, .booksIntroduceAll){
        width: 100% / $titleCount;
        height: 50px;
        display: inline-block;
        text-align: center;
        border: 1px black solid;
        border-collapse: collapse;
        align-content: center;
        box-sizing: border-box;
      }
    }
  }
  @keyframes askChange {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
