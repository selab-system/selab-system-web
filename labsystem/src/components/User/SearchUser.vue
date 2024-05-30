<template>
  <div class="main">
    <div class="inputs">
      用户名称
      <el-input
        v-model="username"
        placeholder="请输入用户名称"
        @change="searchusername"
        @input="recover"
        @blur="blur"
      ></el-input>
      手机号码
      <el-input
        v-model="phonenumber"
        placeholder="请输入手机号码"
        @change="searchphonenumber"
        @input="recover"
        @blur="blur"
      ></el-input>
      状态
      <el-select
        v-model="value0"
        filterable
        placeholder="用户状态"
        @change="serchstatus"
        @focus="ak"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.value"
          :value="item.value"
        >
        </el-option>
      </el-select>
      用户昵称
      <el-input
        v-model="nickname"
        placeholder="请输入用户昵称"
        @change="searchnickname"
        @input="recover"
        @blur="blur"
      ></el-input>
      <!-- 创建时间
      <div class="block">
        <el-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" icon="el-icon-refresh">重置</el-button> -->
    </div>
    <div class="show-user" v-show="showall">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
          v-show="tableData.Department == showDepartment"
          current-row-key
        >
        </el-table-column>
        <el-table-column label="用户编号" width="120">
          <template slot-scope="scope">{{ scope.row.idnumber }}</template>
        </el-table-column>
        <el-table-column label="用户名称" width="120">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column prop="nickname" label="用户昵称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="department" label="部门" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="phonenumber"
          label="手机号码"
          show-overflow-tooltip
        >
        </el-table-column
        ><el-table-column prop="status" label="状态" show-overflow-tooltip>
        </el-table-column
        ><el-table-column prop="operation" label="操作" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
    <div class="show-user" v-show="showanswer" id="hello">
      <el-table
        ref="multipleTable"
        :data="tableData2"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          type="selection"
          width="55"
          v-show="tableData2.Department == showDepartment"
          current-row-key
        >
        </el-table-column>
        <el-table-column label="用户编号" width="120">
          <template slot-scope="scope">{{ scope.row.idnumber }}</template>
        </el-table-column>
        <el-table-column label="用户名称" width="120">
          <template slot-scope="scope">{{ scope.row.name }}</template>
        </el-table-column>
        <el-table-column prop="nickname" label="用户昵称" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="department" label="部门" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="phonenumber"
          label="手机号码"
          show-overflow-tooltip
        >
        </el-table-column
        ><el-table-column prop="status" label="状态" show-overflow-tooltip>
        </el-table-column
        ><el-table-column prop="operation" label="操作" show-overflow-tooltip>
        </el-table-column>
      </el-table>
    </div>
    <button @click="show">123456</button>
  </div>
</template>

<script>

export default {
  props: ['user', 'showDepartment'],
  components: {

  },
  data () {
    return {
      username: '',
      phonenumber: '',
      nickname: '',
      options: [
        {
          value: '黄金糕'
        },
        {
          value: '双皮奶'
        },
        {
          value: '蚵仔煎'
        },
        {
          value: '龙须面'
        },
        {
          value: '北京烤鸭'
        }
      ],
      value0: '',
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: '',
      value2: '',
      // 表格
      tableData: [
        {
          idnumber: '1',
          name: '李四',
          nickname: 'aaa',
          department: '开发',
          phonenumber: '1234',
          status: '龙须面',
          operation: ''
        },
        {
          idnumber: '2',
          name: '张三',
          nickname: 'bbb',
          department: '开发',
          phonenumber: '456',
          status: '北京烤鸭',
          operation: ''
        }
      ],
      tableData2: [],
      multipleSelection: [],
      // 开关
      valueswitch: true,
      // 展示搜索结果
      showall: true,
      showanswer: false
      // 记录tableData2的值
    }
  },
  methods: {
    // 表格
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    searchusername (name) {
      for (let i = 0; i < this.tableData.length; i++) {
        let num = 0
        for (let j = 0; j < name.length; j++) {
          if (name[j] === this.tableData[i].name[j]) {
            num++
          }
        }
        if (num === name.length) {
          this.tableData2 = [this.tableData[i]]
          this.showall = false
          this.showanswer = true
          return
        }
      }
      this.tableData2 = []
      this.showall = false
      this.showanswer = true
    },
    blur () {
      this.showall = true
      this.showanswer = false
    },
    searchphonenumber (phonenumber) {
      for (let i = 0; i < this.tableData.length; i++) {
        let num = 0
        for (let j = 0; j < phonenumber.length; j++) {
          if (phonenumber[j] === this.tableData[i].phonenumber[j]) {
            num++
          }
        }
        if (num === phonenumber.length) {
          this.tableData2 = [this.tableData[i]]
          this.showall = false
          this.showanswer = true
          return
        }
      }
      this.tableData2 = []
      this.showall = false
      this.showanswer = true
    },
    serchstatus (status) {
      let num = 0
      for (let i = 0; i < this.options.length; i++) {
        for (let j = 0; j < status.length; j++) {
          if (status[j] === this.options[i].value[j]) {
            num++
          }
        }
      }
      if (num === status.length) {
        for (let k = 0; k < this.tableData.length; k++) {
          if (this.tableData[k].status === status) {
            this.tableData2 = [this.tableData[k]]
            // console.log(this.tableData2)
            break
          }
        }
        this.showall = false
        this.showanswer = true
        return
      }
      this.tableData2 = []
      this.showall = false
      this.showanswer = true
    },
    searchnickname (nickname) {
      for (let i = 0; i < this.tableData.length; i++) {
        let num = 0
        for (let j = 0; j < nickname.length; j++) {
          if (nickname[j] === this.tableData[i].nickname[j]) {
            num++
          }
        }
        if (num === nickname.length) {
          this.tableData2 = [this.tableData[i]]
          this.showall = false
          this.showanswer = true
          return
        }
      }
      this.tableData2 = []
      this.showall = false
      this.showanswer = true
    },
    recover () {
      this.tableData2 = []
      this.showall = true
      this.showanswer = false
      // console.log(3);
    },
    ak (a) {
      console.log(a.target)
    },
    show () {
      const myHeaders = new Headers()
      myHeaders.append('Authorization', '')
      myHeaders.append('User-Agent', 'Apifox/1.0.0 (https://apifox.com)')
      myHeaders.append('Content-Type', 'application/json')

      const raw = JSON.stringify({
        serialVersionUID: '0',
        bookName: 'String',
        bookAuthor: 'String',
        bookDetails: 'String',
        price: 0,
        owner: 0,
        ownerName: 'String',
        remark: 'String',
        bookRef: 'String'
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      }

      fetch('http://dev-cn.your-api-server.com/book/save', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  height: 100%;
  /* background-color: pink; */
}
.inputs {
  margin-top: 24px;
  height: 40px;
  font-size: 12px;
  line-height: 40px;
  color: #606266;
  font-weight: 700;
}
.el-input {
  width: 210px;
  height: 32px;
  margin-left: 4px;
  margin-right: 10px;
}
.el-select {
  margin-right: 4px;
  margin-left: 10px;
}
.el-button--primary:last-child {
  background-color: #fff;
  color: #606266;
  border-color: #606266;
}
.block {
  display: inline;
  margin-left: 4px;
  margin-right: 10px;
  width: 227px;
}
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 250px;
  height: 40px;
}
.show-user {
  width: 100%;
  padding-top: 30px;
  box-sizing: border-box;
}
.line {
  width: 100%;
  height: 20px;
  margin: 0 auto;
  background-color: pink;
}
.line input {
  margin-left: 15px;
}
</style>
