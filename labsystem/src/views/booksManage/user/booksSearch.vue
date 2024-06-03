<template>
  <div style="width:100%; padding-left: 5%; box-sizing: border-box; margin: 20px 0; ">
    <span
      style="
        font-size: 18px;
        line-height: 50px;
        margin: 0 39%;
        background-color: #ebeef5;
        padding: 10px 10px;
        border-radius: 30px;
        color: #606266;
      "
      >查询书籍信息</span
    >
    <br /><br />
    <div>
      <el-table
        :data="
          tableData.filter(
            (data) =>
              !search || data.name.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 95%"
      >
        <el-table-column label="书名" prop="bookName"> </el-table-column>
        <el-table-column label="作者" prop="bookAuthor"> </el-table-column>
        <el-table-column label="书籍编号" prop="bookRef"> </el-table-column>
        <el-table-column label="状态" prop="status"> </el-table-column>
        <el-table-column label="书籍拥有者" prop="owner"> </el-table-column>
        <el-table-column label="书籍介绍" prop="bookDetails"> </el-table-column>
        <el-table-column align="right">
          <template slot="header" >
            <el-input v-model="search" size="mini" placeholder="输入书名搜索" />
          </template>
          <!-- <template slot-scope="scope">
            <el-button
              size="mini"
              @click="finish(scope.$index, scope.row)"
              v-show="finishbutton"
              style="width:50%; height:20%"
              >完成编辑</el-button
            >
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              v-show="user == 'admain'"
              style="width:50%; height:20%"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              v-show="user == 'admain'"
              style="width:50%; height:20%"
              >Delete</el-button
            >
          </template> -->
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="50"
      style="
        width: 100%;
        box-sizing: border-box;
        padding-left: 34%;
        margin-top: 20px;
      "
      @current-change="change"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    axios({
      method: 'GET',
      url: 'http://localhost:8080/#/booksSearch/book/list?cur=1&size=5',
      headers: {
        Authorization: ''
      }
    }).then(response => {
      const data = JSON.parse(response)
      for (let i = 0; i < 5; i++) {
        if (data.data[i] === undefined) {
          return
        }
        const k = {}
        k.bookId = data.data[i].bookId
        k.bookName = data.data[i].bookName
        k.bookAuthor = data.data[i].bookAuthor
        k.bookDetails = data.data[i].bookDetails
        k.price = data.data[i].price
        k.owner = data.data[i].owner
        k.ownerName = data.data[i].ownerName
        if (data.data[i].status === 0) {
          k.status = '可借阅'
        }
        if (data.data[i].status === 1) {
          k.status = '借阅'
        } if (data.data[i].status === 2) {
          k.status = '不可借阅'
        }
        k.createTime = data.data[i].createTime
        k.updateTime = data.data[i].updateTime
        k.bookRef = data.data[i].bookRef
        this.tableData.push(k)
      }
    }, result => {
      console.log(result, 'booksearch')
    })
  },
  data () {
    return {
      tableData: [],
      search: '',
      // 编辑按钮的下标
      index: undefined,
      // 完成编辑按钮是否显示
      finishbutton: false,
      // 编辑按钮是否起作用
      btnclick: true,
      // 用户身份
      user: localStorage.getItem('roleid') === '"3"' ? 0 : 1
    }
  },
  methods: {
    // finish (index, row) {
    //   if (this.index === index) {
    //     for (let i = 0; i < 5; i++) {
    //       if (document.getElementsByClassName('inputs')[0].value === '') {
    //         document.getElementsByClassName('cell')[
    //           index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + i
    //         ].innerHTML = `<span>${row[Object.keys(row)[i]]}</span>`
    //       } else {
    //         row[Object.keys(row)[i]] =
    //           document.getElementsByClassName('inputs')[0].value
    //         document.getElementsByClassName('cell')[
    //           index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + i
    //         ].innerHTML = `<span>${
    //           document.getElementsByClassName('inputs')[0].value
    //         }</span>`
    //       }
    //       if (i === 4) {
    //         this.finishbutton = !this.finishbutton
    //         this.btnclick = !this.btnclick
    //         return
    //       }
    //     }
    //     row.name = document.getElementsByClassName('inputs')[0].value
    //     row.writer = document.getElementsByClassName('inputs')[1].value
    //     row.number = document.getElementsByClassName('inputs')[2].value
    //     row.status = document.getElementsByClassName('inputs')[3].value
    //     row.owner = document.getElementsByClassName('inputs')[4].value
    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index)
    //     ].innerHTML = `<span>${
    //       document.getElementsByClassName('inputs')[0].value
    //     }</span>`

    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + 1
    //     ].innerHTML = `<span>${
    //       document.getElementsByClassName('inputs')[0].value
    //     }</span>`

    //     console.log(document.getElementsByClassName('inputs'))
    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + 2
    //     ].innerHTML = `<span>${
    //       document.getElementsByClassName('inputs')[0].value
    //     }</span>`

    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + 3
    //     ].innerHTML = `<span>${
    //       document.getElementsByClassName('inputs')[0].value
    //     }</span>`
    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + 4
    //     ].innerHTML = `<span>${
    //       document.getElementsByClassName('inputs')[0].value
    //     }</span>`
    //     this.finishbutton = !this.finishbutton
    //     this.btnclick = !this.btnclick
    //   }
    // },
    // handleEdit (index, row) {
    //   if (this.btnclick) {
    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index)
    //     ].innerHTML = `<input style=" outline:none;
    //   border: 1px solid #C0C4CC;"
    //   class="inputs" value="">`
    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + 1
    //     ].innerHTML = `<input style=" outline:none;
    //   border: 1px solid #C0C4CC;"
    //   class="inputs" value="">`
    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + 2
    //     ].innerHTML = `<input style="outline:none;
    //   border: 1px solid #C0C4CC;"
    //   class="inputs" value="">`
    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + 3
    //     ].innerHTML = `<input style="outline:none;
    //   border: 1px solid #C0C4CC;"
    //   class="inputs" value="">`
    //     document.getElementsByClassName('cell')[
    //       index + index * 6 + 6 - (index === 0 ? 0 : 1 * index) + 4
    //     ].innerHTML = `<input style="outline:none;
    //   border: 1px solid #C0C4CC;"
    //   class="inputs" value="">`
    //     this.finishbutton = !this.finishbutton
    //     this.index = index
    //     this.btnclick = !this.btnclick
    //   }
    // },
    // handleDelete (index, row) {
    //   console.log(index, row)
    //   this.tableData.splice(index, 1)
    // },
    change (page) {
      axios({
        method: 'GET',
        url: `http://localhost:8080/#/booksSearch/book/list?cur=${page}&size=5`
      }).then(
        (response) => {
          const data = JSON.parse(response)
          for (let i = 0; i < 5; i++) {
            // 不够五本书籍
            if (data.data[i] === undefined) {
              this.tableData.splice(i)
              alert('已到达结尾')
              return
            }
            const k = {}
            k.bookId = data.data[i].bookId
            k.bookName = data.data[i].bookName
            k.bookAuthor = data.data[i].bookAuthor
            k.bookDetails = data.data[i].bookDetails
            k.price = data.data[i].price
            k.owner = data.data[i].owner
            k.ownerName = data.data[i].ownerName
            if (data.data[i].status === 0) {
              k.status = '可借阅'
            }
            if (data.data[i].status === 1) {
              k.status = '借阅'
            } if (data.data[i].status === 2) {
              k.status = '不可借阅'
            }
            k.createTime = data.data[i].createTime
            k.updateTime = data.data[i].updateTime
            k.bookRef = data.data[i].bookRef
            this.tableData[i] = k
          }
        },
        function (result) {
          console.log(result)
        }
      )
    }
  }
}
</script>

<style scoped>
.main {
  border-color: #000;
  border: 1px solid #000;
}
</style>
