<template>
  <div style="width:100%;">
    <span
      style="
        font-size: 18px;
        line-height: 50px;
        margin-left:42%;
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
              !search || data.bookName.toLowerCase().includes(search.toLowerCase())
          )
        "
        style="width: 100%"
      >
        <el-table-column label="书名" prop="bookName"> </el-table-column>
        <el-table-column label="作者" prop="bookAuthor"> </el-table-column>
        <el-table-column label="书籍id" prop="bookId"> </el-table-column>
        <el-table-column label="状态" prop="status"> </el-table-column>
        <el-table-column label="书籍介绍" prop="bookDetails"> </el-table-column>
        <el-table-column label="书籍价格" prop="price"> </el-table-column>
        <el-table-column label="书籍拥有者" prop="owner"> </el-table-column>
        <el-table-column label="书籍拥有者名称" prop="ownerName"> </el-table-column>
        <el-table-column label="添加时间" prop="createTime"> </el-table-column>
        <el-table-column label="修改时间" prop="updateTime"> </el-table-column>
        <el-table-column label="书籍编号" prop="bookRef"> </el-table-column>
        <el-table-column align="right">
          <template slot="header" >
            <el-input v-model="search" size="mini" placeholder="输入书名搜索" />
          </template>
          <template slot-scope="scope">
            <!-- <el-button
              size="mini"
              @click="finish(scope.$index, scope.row)"
              v-show="finishbutton"
              style="width:80%; height:20%"
              >完成编辑</el-button
            > -->
            <!-- <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
              style="width:80%; height:20%; margin:5% 0;"
              >Edit</el-button
            > -->
             <el-button
              size="mini"
              type="text" @click="open(scope.$index, scope.row)"
              style="width:80%; height:20%; margin:5% 0;"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              style="width:80%; height:20%"
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
        width: 100%;
        box-sizing: border-box;
        padding-left: 37%;
        margin-top: 20px;
      "
      @current-change="change"
    >
    </el-pagination>
    <!-- <el-input style="margin:2%; width:70%;" placeholder="请输入"></el-input> -->
    <span v-show="ifadd" style="font-size:15px; color:#909399;">图书名称:</span>
    <el-input style="margin:1%; width:70%;" v-show="ifadd" placeholder="请输入图书名称" v-model="bookName"></el-input><br v-show="ifadd">
    <span v-show="ifadd" style="font-size:15px; color:#909399;">书籍作者:</span>
    <el-input style="margin:1%; width:70%;" v-show="ifadd" placeholder="请输入书籍作者" v-model="bookAuthor"></el-input><br v-show="ifadd">
    <span v-show="ifadd" style="font-size:15px; color:#909399;">图书介绍:</span>
    <el-input style="margin:1%; width:70%;" v-show="ifadd" placeholder="请输入图书介绍" v-model="bookDetails"></el-input><br v-show="ifadd">
    <span v-show="ifadd" style="font-size:15px; color:#909399;">价格:</span>
    <el-input style="margin:1%; width:72%;" v-show="ifadd" placeholder="请输入价格"  v-model="price"></el-input><br v-show="ifadd">
    <span v-show="ifadd" style="font-size:15px; color:#909399;">书籍拥有者id:</span>
    <el-input style="margin:1%; width:68%;" v-show="ifadd" placeholder="请输入书籍拥有者id" v-model="owner"></el-input><br v-show="ifadd">
    <span v-show="ifadd" style="font-size:15px; color:#909399;">备注信息:</span>
    <el-input style="margin:1%; width:70%;" v-show="ifadd" placeholder="请输入备注信息" v-model="remark"></el-input><br v-show="ifadd">
    <span v-show="ifadd" style="font-size:15px; color:#909399;">书籍编号:</span>
    <el-input style="margin:1%; width:70%;" v-show="ifadd" placeholder="请输入书籍编号" v-model="bookRef"></el-input><br v-show="ifadd">
    <el-button type="primary" @click="addbook">添加书籍</el-button>
    <el-button type="primary" @click="yesadd" v-show="reallyadd">确认添加</el-button>
  </div>
</template>

<script>
// import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import {
  savebook,
  updatebookifos,
  getAllBook,
  deletebookinfos
} from '../../../api/book'
export default {
  name: 'bookinfosCheckandChange',
  mounted () {
    getAllBook({ cur: 1, size: 5 }).then(response => {
      const data = response.data
      for (let i = 0; i < 5; i++) {
        // 不够五本书籍
        if (data.data[i] === undefined) {
          this.tableData.splice(i, 1)
        }
        const k = {}
        k.bookName = data.data[i].bookName
        k.bookAuthor = data.data[i].bookAuthor
        k.bookId = data.data[i].bookId
        if (data.data[i].status === 0) {
          k.status = '可借阅'
        }
        if (data.data[i].status === 1) {
          k.status = '借阅'
        } if (data.data[i].status === 2) {
          k.status = '不可借阅'
        }
        k.bookDetails = data.data[i].bookDetails
        k.price = data.data[i].price
        k.owner = data.data[i].owner
        k.ownerName = data.data[i].ownerName
        k.createTime = data.data[i].createTime
        k.updateTime = data.data[i].updateTime
        k.bookRef = data.data[i].bookRef
        this.tableData.push(k)
      }
    }, result => {
      console.log(result)
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
      ifadd: false,
      reallyadd: false,
      bookName: '',
      bookAuthor: '',
      bookDetails: '',
      price: '',
      owner: '',
      remark: '',
      bookRef: '',
      bookName2: '',
      bookAuthor2: '',
      bookDetails2: '',
      status2: '',
      ownerName2: '',
      bookRef2: ''
    }
  },
  methods: {
    open (index, row) {
      this.bookName2 = row.bookName
      this.bookAuthor2 = row.bookAuthor
      this.bookRef2 = row.bookRef
      this.status2 = row.status
      this.ownerName2 = row.ownerName
      this.bookDetails2 = row.bookDetails
      MessageBox.alert(`书名：<input class="haha" value=${this.bookName2} style="width:80%; height:20px; outline:none; margin:10px 10px 10px 0;">
      作者：<input class="haha" value=${this.bookAuthor2} style="width:80%; height:20px; outline:none; margin:10px 10px 10px 0;">
      书籍编号：<input class="haha" value=${this.bookRef2} style="width:70%; height:20px; outline:none; margin:10px 22px 10px 0;">
      状态：<input class="haha" value=${this.status2} style="width:80%; height:20px; outline:none; margin:10px 10px 10px 0;">
      书籍所有者：<input class="haha" value=${this.ownerName2} style="width:70%; height:20px; outline:none; margin:10px 10px 10px 0;">
      书籍介绍：<input class="haha" value=${this.bookDetails2} style="width:70%; height:20px; outline:none; margin:10px 10px 10px 0;">`, '标题名称', {
        confirmButtonText: '确定',
        dangerouslyUseHTMLString: true,
        inputValue: '',
        callback: action => {
          const now = new Date()
          const year = now.getFullYear()
          const month = now.getMonth() + 1
          const day = now.getDate()
          const time = String(year) + '-' + String(month) + '-' + String(day)
          if (this.status2 === 0) {
            this.status2 = '可借阅'
          }
          if (this.status2 === 1) {
            this.status = '借阅'
          } if (this.status2 === 2) {
            this.status = '不可借阅'
          }
          updatebookifos({
            bookId: parseInt(row.bookId),
            bookName: this.bookName2 === '' ? row.bookName : this.bookName2,
            bookAuthor: this.bookAuthor2 === '' ? row.bookAuthor : this.bookAuthor2,
            bookDetails: this.bookDetails2 === '' ? row.bookDetails : this.bookDetails2,
            price: Number(row.price),
            owner: parseInt(row.owner), // 为啥是int？
            ownerName: this.ownerName2 === '' ? row.ownerName2 : this.ownerName2,
            status: parseInt(this.status2 === '' ? row.status : this.status2),
            createTime: row.createTime,
            updateTime: time,
            bookRef: row.bookRef
          }).then(response => {
            Message({
              message: '修改成功！',
              type: 'success'
            })
            this.finishbutton = true
            this.index = index
            this.btnclick = false
          }, result => {
            Message({
              message: '修改成功！',
              type: 'error'
            })
          })
        }
      })
    },
    // finish (index, row) {
    //   if (this.index === index) {
    //     for (let i = 0; i < 11; i++) {
    //       if (document.getElementsByClassName('inputs')[0].value === '') {
    //         document.getElementsByClassName('cell')[
    //           index + index * 12 + 12 - (index === 0 ? 0 : 1 * index) + i
    //         ].innerHTML = `<span>${row[Object.keys(row)[i]]}</span>`
    //       } else {
    //         row[Object.keys(row)[i]] =
    //           document.getElementsByClassName('inputs')[0].value
    //         document.getElementsByClassName('cell')[
    //           index + index * 12 + 12 - (index === 0 ? 0 : 1 * index) + i
    //         ].innerHTML = `<span>${
    //           document.getElementsByClassName('inputs')[0].value
    //         }</span>`
    //       }
    //       if (i === 10) {
    //         let a = 0
    //         if (row.status === '可借阅') {
    //           a = 0
    //         }
    //         if (row.status === '借阅') {
    //           a = 1
    //         } if (row.status === '不可借阅') {
    //           a = 2
    //         }
    //         updatebookifos({
    //           bookId: parseInt(row.bookId),
    //           bookName: row.bookName,
    //           bookAuthor: row.bookAuthor,
    //           bookDetails: row.bookDetails,
    //           price: Number(row.price),
    //           owner: row.owner, // 为啥是int？
    //           ownerName: row.ownerName,
    //           status: a,
    //           createTime: row.createTime,
    //           updateTime: row.updateTime,
    //           bookRef: row.bookRef
    //         }).then(response => {
    //           Message({
    //             message: '修改成功！',
    //             type: 'success'
    //           })
    //         }, result => {
    //           Message({
    //             message: '修改成功！',
    //             type: 'error'
    //           })
    //         })
    //         this.finishbutton = false
    //         this.btnclick = true
    //         return
    //       }
    //     }
    //     // row.bookName = document.getElementsByClassName('inputs')[0].value
    //     // row.bookAuthor = document.getElementsByClassName('inputs')[1].value
    //     // row.bookId = document.getElementsByClassName('inputs')[2].value
    //     // row.status = document.getElementsByClassName('inputs')[3].value
    //     // row.bookDetails = document.getElementsByClassName('inputs')[4].value
    //     // row.price = document.getElementsByClassName('inputs')[5].value
    //     // row.owner = document.getElementsByClassName('inputs')[6].value
    //     // row.ownerName = document.getElementsByClassName('inputs')[7].value
    //     // row.createTime = document.getElementsByClassName('inputs')[8].value
    //     // row.updateTime = document.getElementsByClassName('inputs')[9].value
    //     // row.bookRef = document.getElementsByClassName('inputs')[10].value
    //     // console.log(row)
    //     // for (let k = 0; k < 11; k++) {
    //     //   document.getElementsByClassName('cell')[
    //     //     index + index * 12 + 12 - (index === 0 ? 0 : 1 * index) + k
    //     //   ].innerHTML = `<span>${
    //     //   document.getElementsByClassName('inputs')[0].value
    //     // }</span>`
    //     // }
    //     // this.finishbutton = false
    //     // this.btnclick = true
    //   }
    // },
    handleEdit (index) {
      if (this.btnclick) {
        for (let k = 0; k < 11; k++) {
          document.getElementsByClassName('cell')[
            index + index * 12 + 12 - (index === 0 ? 0 : 1 * index) + k
          ].innerHTML = `<input style=" outline:none; 
      border: 1px solid #C0C4CC;" 
      class="inputs" value="">`
        }
        this.finishbutton = true
        this.index = index
        this.btnclick = false
      }
    },
    handleDelete (index, row) {
      deletebookinfos({ bookId: parseInt(row.bookId) }).then(response => {
        Message({
          message: '删除成功！',
          type: 'success'
        })
      }, result => {
        Message({
          message: '删除失败！',
          type: 'error'
        })
      })
      this.tableData.splice(index, 1)
    },
    change (page) {
      getAllBook({ cur: page, size: 5 }).then(response => {
        const data = response.data
        if (data.data[0] === undefined) {
          this.tableData.splice(0)
          alert('已到达结尾')
          return
        }
        this.tableData = []
        for (let i = 0; i < 5; i++) {
        // 不够五本书籍
          if (data.data[i] === undefined) {
            this.tableData.splice(i)
            alert('已到达结尾')
            return
          }
          const k = {}
          k.bookName = data.data[i].bookName
          k.bookAuthor = data.data[i].bookAuthor
          k.bookId = data.data[i].bookId
          if (data.data[i].status === 0) {
            k.status = '可借阅'
          }
          if (data.data[i].status === 1) {
            k.status = '借阅'
          } if (data.data[i].status === 2) {
            k.status = '不可借阅'
          }
          k.bookDetails = data.data[i].bookDetails
          k.price = data.data[i].price
          k.owner = data.data[i].owner
          k.ownerName = data.data[i].ownerName
          k.createTime = data.data[i].createTime
          k.updateTime = data.data[i].updateTime
          k.bookRef = data.data[i].bookRef
          this.tableData.push(k)
        }
      }, result => {
        console.log(result)
      })
    },
    addbook () {
      this.ifadd = true
      this.reallyadd = true
    },
    yesadd () {
      const a = confirm('请再次确认是否添加书籍？')
      if (a) {
        this.ifadd = false
        this.reallyadd = false
        // console.log('1t', this.bookName, this.bookAuthor, this.bookDetails, Number(this.price), parseInt(this.owner), this.remark, this.bookRef)
        savebook({
          bookName: this.bookName,
          bookAuthor: this.bookAuthor,
          bookDetails: this.bookDetails,
          price: Number(this.price),
          owner: parseInt(this.owner),
          remark: this.remark,
          bookRef: this.bookRef
        }).then(response => {
          Message({
            message: '添加成功！',
            type: 'success'
          })
        }, result => {
          Message({
            message: '添加失败！',
            type: 'error'
          })
        })
      } else {
        Message({
          message: '取消添加！',
          type: 'success'
        })
      }
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
