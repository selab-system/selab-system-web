<template>
  <div>
    <div class="table">
        <div class="table-search">
            <div class="table-search-box">
                <div class="table-search-name"><input type="text" placeholder="姓名" class="table-search-input" v-model="theName"></div>
                <div class="table-search-name"><input type="text" placeholder="年级" class="table-search-input" v-model="theGrade"></div>
                <div class="table-search-box-checkbox">
                    <div class="table-search-title">
                        <div class="table-search-title-name" @click="dropDown" @mouseleave="dropDownNone"><span>意向部门</span></div>
                        <div class="table-search-content-box" v-show="tableSearchContentBoxActive" @mouseenter="dropDown" @mouseleave="dropDownNone">
                            <div v-for="(item,index) in department" :key="index" class="table-search-title-name" @click="getTheDepartment(index)">{{ item }}</div>
                        </div>
                    </div>
                </div>
            <div class="table-search-button">
                <button @click="select">查询</button>
            </div>
        </div>
        <div class="table-body-content">
            <table class="table-body">
                <tr class="table-body-title">
                    <td v-for="(item,index) in tableTitle" :key="index">{{ item }}</td>
                    <td class="operation-column">操作</td>
                </tr>
                <tbody>
                <tr v-for="(item, index) in tableData" :key="index">
                    <td>{{ item.userName }}</td>
                    <td>{{ item.grade }}</td>
                    <td>{{ item.classroom }}</td>
                    <td>{{ item.phone }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.intentDepartment }}</td>
                    <td>{{ item.interviewTime }}</td>
                    <td>{{ item.remark }}</td>
                    <td>{{ item.purpose }}</td>
                    <td class="operation-column">
                        <router-link to=""><button class="findhisform">查看他的报名表</button></router-link>
                    </td>
                </tr>
                </tbody>
            </table>
            <div class="page-change-box">
                <div class="page-box">
                        <div class="change-box lastbox">
                            <button>上一页</button>
                        </div>
                        <div class="page-box-item page-box-show" v-for="(index,item) in currentIndexs" :key="index" >
                            <button>{{ item + 1}}</button>
                            
                        </div>
                        <div class="change-box-show-button" @click="ShowPagesChangeBox" v-show="ShowButtonIsShown">
                            <button>...</button>
                        </div>
                        <div class="page-box-item-page-box-not-show" v-show="pageChangeBoxActive">
                            <button v-for="(index,item) in currentIndexsUnShown" :key="index">{{ item + currentIndexs + 1 }}</button>
                        </div>
                        <div class="page-box-nextbox">
                            <button>下一页</button>             
                        </div>
                    <div>
                    </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request';
import { selectByName, selectByGradeId, selectByIntentDepartment, selectByIntervieweesName, selectRegistrationById, selectList, updateRegistration } from '@/api/Enrolment/Enrolment';
export default {
    data() {
        return {
            // 单页面表框数量 size
            size: 10,
            // 当前页面
            currentPage: 1,
            // 显示页面数
            currentIndexs: 3,
            // 隐藏页面数
            currentIndexsUnShown:5,
            // 省略页面数
            currentIndexs_: 9,
            // 表格标头
            tableTitle: ["姓名", "年级", "班级", "联系方式", "邮箱", "意向部门", "面试时间", "备注","加入目的"],
            tableData: [
                {
                    userName: "cc",
                    grade: "大一",
                    classroom: "软件2346",
                    phone: "17200543160",
                    email: "123@gmail.com",
                    intentDepartment: "软件开发",
                    interviewTime: "2021-05-01",
                    remark: "备注信息",
                    purpose:"学习",
                    id: 1,
                },
                {
                    userName: "cc",
                    grade: "大一",
                    classroom: "软件2346",
                    phone: "17200543160",
                    email: "123@gmail.com",
                    intentDepartment: "软件开发",
                    interviewTime: "2021-05-01",
                    remark: "备注信息",
                    purpose:"学习",
                    id: 1,
                },
                {
                    userName: "cc",
                    grade: "大一",
                    classroom: "软件2346",
                    phone: "17200543160",
                    email: "123@gmail.com",
                    intentDepartment: "软件开发",
                    interviewTime: "2021-05-01",
                    remark: "备注信息",
                    purpose:"学习",
                    id: 1,
                },
   
                {
                    userName: "cc",
                    grade: "大一",
                    classroom: "软件2346",
                    phone: "17200543160",
                    email: "123@gmail.com",
                    intentDepartment: "软件开发",
                    interviewTime: "2021-05-01",
                    remark: "备注信息",
                    purpose:"学习",
                    id: 1,
                },
                {
                    userName: "cc",
                    grade: "大一",
                    classroom: "软件2346",
                    phone: "17200543160",
                    email: "123@gmail.com",
                    intentDepartment: "软件开发",
                    interviewTime: "2021-05-01",
                    remark: "备注信息",
                    purpose:"学习",
                    id: 1,
                },
                {
                    userName: "cc",
                    grade: "大一",
                    classroom: "软件2346",
                    phone: "17200543160",
                    email: "123@gmail.com",
                    intentDepartment: "软件开发",
                    interviewTime: "2021-05-01",
                    remark: "备注信息",
                    purpose:"学习",
                    id: 1,
                },
                {
                    userName: "cc",
                    grade: "大一",
                    classroom: "软件2346",
                    phone: "17200543160",
                    email: "123@gmail.com",
                    intentDepartment: "软件开发",
                    interviewTime: "2021-05-01",
                    remark: "备注信息",
                    purpose:"学习",
                    id: 1,
                },
                {
                    userName: "cc",
                    grade: "大一",
                    classroom: "软件2346",
                    phone: "17200543160",
                    email: "123@gmail.com",
                    intentDepartment: "软件开发",
                    interviewTime: "2021-05-01",
                    remark: "备注信息",
                    purpose:"学习",
                    id: 1,
                },
            ],
            // 意向部门下拉框是否展示
            tableSearchContentBoxActive: false,
            // 分页是否展示
            pageChangeBoxActive: false,
            // 分页按钮是否展示
            ShowButtonIsShown: true,
            isformed: false,
            // 输入要查询的名字
            theName: '',
            // 输入要查询的年级
            theGrade: '',
            // 部门数组
            department: ["软件开发", "网络安全", "人工智能", "虚拟现实"],
            // 选择的部门id
            theDepartmentId: 0,
        }
    },
    methods: {
        dropDown() {
            // 鼠标移入，显示
            this.tableSearchContentBoxActive = true;
        },
        dropDownNone() {
            // 鼠标移出，隐藏
            this.tableSearchContentBoxActive = false;
        },
        // 分页按钮
        ShowPagesChangeBox() {
            this.pageChangeBoxActive = !this.pageChangeBoxActive;
            this.ShowButtonIsShown = !this.ShowButtonIsShown;
        },
        visonal() {
            this.$emit("senttosee",
                true
            )
        },
        // 获取部门信息
        getTheDepartment(index) {
            this.theDepartmentId = index
            this.theDepartmentId++
            console.log(this.theDepartmentId);
        },
        // selectByIntervieweesName
        select() {
            // 分页查询
            // 可以根据三个来查询
            // 1.姓名
            // 2.年级
            // 3.意向部门
            // 有哪个输哪个
            console.log("查询");
            console.log("获取到的参数有", {
                cur: this.currentPage,
                size: this.size,
                intervieweesName: this.theName,
                grade: this.theGrade,
                intentDepartment: this.theDepartmentId
            });
            try {
                // 如果名字不为空
                if (this.theName != '') {
                    const params = {
                        intervieweesName: this.theName,
                        cur: this.currentPage,
                        size: this.size
                    }
                    selectByIntervieweesName(params).then(res => {
                        try {
                            console.log(res);
                            if (res.code == 200) {
                                console.log("查询成功", res);
                                this.tableData = [
                                    res.data.interviewees.userNamem,
                                    res.data.grade,
                                    res.data.classroom,
                                    res.data.phone,
                                    res.data.email,                            
                                    this.department[res.data.intentDepartment++],
                                    res.data.interviewTime,
                                    res.data.remark
                            ]
                            }
                        } catch (err) {
                            console.log(err);
                        }
                        })
                }
                else if (this.theClass != '') {
                    const params = {
                        gradeId: this.theGrade,
                        cur: this.currentPage,
                        size: this.size
                    }
                    selectByGradeId(params).then(res => {
                        try {
                            console.log(params);
                            console.log(res);
                            if (res.code == 200) {
                                console.log("查询成功", res);
                                this.tableData = [
                                    res.data.interviewees.userNamem,
                                    res.data.grade,
                                    res.data.classroom,
                                    res.data.phone,
                                    res.data.email,                            
                                    this.department[res.data.intentDepartment++],
                                    res.data.interviewTime,
                                    res.data.remark
                            ]
                            }
                        } catch (err) {
                            console.log(err);
                        }
                        })
                }
                else if (this.theDepartmentId != "") {
                    const params = {
                        intentDepartment: this.theDepartmentId,
                        cur: this.currentPage,
                        size: this.size
                    }
                    selectByIntentDepartment(params).then(res => {
                        try {
                            console.log(params);
                            console.log(res);
                            if (res.code == 200) {
                                console.log("查询成功", res);
                                this.tableData = [
                                    res.data.interviewees.userNamem,
                                    res.data.grade,
                                    res.data.classroom,
                                    res.data.phone,
                                    res.data.email,                            
                                    this.department[res.data.intentDepartment++],
                                    res.data.interviewTime,
                                    res.data.remark
                            ]
                            }
                        } catch (err) {
                            console.log(err);
                        }
                        })
                }
            } catch (error) {
                console.log(error);
            }  
        },
        async toselectList() {
            try {
                const params = {
                    cur: this.currentPage,
                    size: this.size,
                };
                const response = await selectList(params);
                if (response && response.code === 200) {
                    // 假设返回的数据包含在 res.data 中
                    this.tableData = response.data.records;
                    // 假设返回的数据还包括总记录数，用于分页
                    this.totalRecords = response.data.total;
                } else {
                    console.error('API 返回了错误码:', response.code);
                }
            } catch (error) {
                console.error('请求列表数据失败:', error);
            }
        },
    },
    created() {

    },
    computed: {

    },
    created() {
        this.toselectList();
    }
}

</script>

<style scoped>
.table{
    margin-top: 0px;
    height: 900px;
    padding: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 95%;
    box-shadow: var(--nav-box-shadow);
    margin: 0 auto;
}
.table-search{
    width: 95%;
    border: 0.5px solid var(--table-border-color);
    padding: 10px;
    border-top: 0px;
}
.table-search-box{
    display: flex;
    justify-content: flex-start;
    position: relative;
    flex: 1;
}
.table-search-name{
    margin-top: 20px;
    margin-right: 30px;
}
.table-search-name input {
    width: 135px;
    font-size: 17px;
    padding: 10px;
    border: 1px solid var(--table-border-color);
    box-shadow: var(--table-box-shadow);
}
.table-search-box-checkbox{
    margin-top: 20px;
    padding: px;
    /* border: 2px solid var(--table-border-color); */
    position: absolute;
    left:300px;
    margin-left: 60px;
    margin-right: 60px;
    z-index: 999;
}
.table-search-title-name{
    font-size: 17px;
    padding: 10px;
    border: 1px solid var(--table-border-color);
    box-shadow: var(--table-box-shadow);
}
.table-search-content-box div:hover{
    cursor: pointer;
    /* background-color: var(--table-font-color); */
    color: var(--button-color);
}
.table-search-content-box div:active{
    background-color: var(--button-color-mint);
}
.table-search-button{
    margin-left: 80px;
    margin-top: 10px;
    padding: 10px;
}
.table-search-button button {
    padding: 15px;
    width: fit-content;
    min-width: 100px;
    height: 45px;
    padding: 8px;
    border-radius: 5px;
    border: 2.5px solid var(--table-query-border-color);
    box-shadow: 0px 0px 20px -20px;
    cursor: pointer;
    background-color: var(--table-query-button-color);
    transition: all 0.2s ease-in-out 0ms;
    user-select: none;
    font-family: 'Poppins', sans-serif;
}
.table-search-button button:hover {
  background-color: var(--table-query-button-beChosen-color);
  box-shadow: 0px 0px 20px -18px;
}
.table-search-button button:active {
  transform: scale(0.85);
}
.table-body-title td{
    /* 表格标头 */
    background-color: var(--table-box-title-bgc-color);
    font-size: var(--table-box-title-font-size);
    font-weight: var(--table-box-title-font-width);
    color: var(--table-box-title-font-color);
}
@media (max-width: 768px) {
    .table-body, .table-body-title, .table-body td {
        display: block;
    }

    .table-body-title {
        display: none;
    }

    .table-body td {
        position: relative;
        padding-left: 50%; 
    }

    .table-body td:before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 20%;
        padding-right: 10px;
        white-space: nowrap;
    }
}

.page-change-box{
    /* text-align: center; */
    margin: 25px auto;
    width: 50%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
}
.page-box{
    display: flex;
}
.page-change-box{
    margin: 25px auto;
    display: flex;
    justify-content: space-around;
    font-size: var(--page-change-box-font-size);
}
.page-box{
    display: flex;
    justify-content: space-around;

}
.page-box button{
    height: 40px;
    width: 50px;
    border: var(--page-change-box-border);
    font-weight: var(--page-change-box-width);
    box-shadow: var(--page-change-box-box-shadow);
}
.page-box button:hover{
    background-color: var(--page-change-box-bg-color);
}
.page-box button:active{
    transform: var(--page-change-box-active-bg-color);
    transition: ease-in 0.5s;
}
.page-box-item-page-box-not-show{
    display: flex;
    justify-content: space-around;
}
.findhisform{
    width: 60%;
}
</style>