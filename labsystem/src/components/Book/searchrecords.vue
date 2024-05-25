<template>
  <div style="padding-left:20%; box-sizing:border-box; margin:20px 0">
    <br>
    <span style="font-size: 18px; line-height: 50px; margin:0 29%; background-color: #EBEEF5; padding:10px 10px; border-radius: 30px; color:#606266;">查询借阅记录</span>
    <br><br>
    <div>
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 70%"
      >
        <el-table-column label="书名" prop="name"> </el-table-column>
        <el-table-column label="起始借阅时间" prop="writer"> </el-table-column>
        <el-table-column label="归还时间" prop="number"> </el-table-column>
        <el-table-column label="借阅者" prop="status"> </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入书名搜索" />
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="finish(scope.$index, scope.row)"
              v-show="finishbutton"
              >完成编辑</el-button
            >
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              v-show="user == 'admain'"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              v-show="user == 'admain'"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="50"
      style="
        width: 70%;
        box-sizing: border-box;
        padding-left: 23%;
        margin-top: 20px;
      "
      @current-change="change"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["books"],
  data() {
    return {
      tableData: [
        {
          name: "王",
          writer: "",
          number: "0",
          status: "1",
        },
        {
          name: "小",
          writer: "",
          number: "0",
          status: "1",
        },
        {
          name: "虎",
          writer: "",
          number: "0",
          status: "9",
        },
        {
          name: "是",
          writer: "",
          number: "0",
          status: "5",
        },
        {
          name: "个",
          writer: "",
          number: "0",
          status: "4",
        },
        {
          name: "人",
          writer: "",
          number: "0",
          status: "3",
        },
      ],
      search: "",
      //编辑按钮的下标
      index: undefined,
      //完成编辑按钮是否显示
      finishbutton: false,
      //编辑按钮是否起作用
      btnclick: true,
      user: "admain",
    };
  },
  watch: {},
  methods: {
    finish(index, row) {
      if (this.index == index) {
        for (let i = 0; i < 4; i++) {
          if (document.getElementsByClassName("inputs")[0].value == "") {
            document.getElementsByClassName("cell")[
              index + index * 5 + 5 - (index == 0 ? 0 : 1 * index) + i
            ].innerHTML = `<span>${row[Object.keys(row)[i]]}</span>`;
          } else {
            row[Object.keys(row)[i]] =document.getElementsByClassName("inputs")[0].value;
            document.getElementsByClassName("cell")[
              index + index * 5 + 5 - (index == 0 ? 0 : 1 * index)+i
            ].innerHTML = `<span>${
              document.getElementsByClassName("inputs")[0].value
            }</span>`;
          }
          if (i == 3) {
            this.finishbutton = !this.finishbutton;
            this.btnclick = !this.btnclick;
            return;
          }
        }
        row["name"] = document.getElementsByClassName("inputs")[0].value;
        row["writer"] = document.getElementsByClassName("inputs")[1].value;
        row["number"] = document.getElementsByClassName("inputs")[2].value;
        row["status"] = document.getElementsByClassName("inputs")[3].value;

        document.getElementsByClassName("cell")[
          index + index * 5 + 5 - (index == 0 ? 0 : 1 * index)
        ].innerHTML = `<span>${
          document.getElementsByClassName("inputs")[0].value
        }</span>`;

        document.getElementsByClassName("cell")[
          index + index * 5 + 5 - (index == 0 ? 0 : 1 * index) + 1
        ].innerHTML = `<span>${
          document.getElementsByClassName("inputs")[0].value
        }</span>`;

        console.log(document.getElementsByClassName("inputs"));
        document.getElementsByClassName("cell")[
          index + index * 5 + 5 - (index == 0 ? 0 : 1 * index) + 2
        ].innerHTML = `<span>${
          document.getElementsByClassName("inputs")[0].value
        }</span>`;

        document.getElementsByClassName("cell")[
          index + index * 5 + 5 - (index == 0 ? 0 : 1 * index) + 3
        ].innerHTML = `<span>${
          document.getElementsByClassName("inputs")[0].value
        }</span>`;
        this.finishbutton = !this.finishbutton;
        this.btnclick = !this.btnclick;
      }
    },
    handleEdit(index, row) {
      if (this.btnclick) {
        document.getElementsByClassName("cell")[
          index + index * 5 + 5 - (index == 0 ? 0 : 1 * index)
        ].innerHTML = `<input style=" outline:none; 
      border: 1px solid #C0C4CC;" 
      class="inputs" value="">`;
        document.getElementsByClassName("cell")[
          index + index * 5 + 5 - (index == 0 ? 0 : 1 * index) + 1
        ].innerHTML = `<input style=" outline:none;
      border: 1px solid #C0C4CC;" 
      class="inputs" value="">`;
        document.getElementsByClassName("cell")[
          index + index * 5 + 5 - (index == 0 ? 0 : 1 * index) + 2
        ].innerHTML = `<input style="outline:none;
      border: 1px solid #C0C4CC;" 
      class="inputs" value="">`;
        document.getElementsByClassName("cell")[
          index + index * 5 + 5 - (index == 0 ? 0 : 1 * index) + 3
        ].innerHTML = `<input style="outline:none;
      border: 1px solid #C0C4CC;" 
      class="inputs" value="">`;
        this.finishbutton = !this.finishbutton;
        this.index = index;
        this.btnclick = !this.btnclick;
      }
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index, 1);
    },
    change(page) {
      console.log(page);
    },
  },
};
</script>

<style scoped>
.main {
  border-color: #000;
  border: 1px solid #000;
}
</style>