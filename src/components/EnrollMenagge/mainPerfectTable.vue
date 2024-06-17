<template>
    <div>
        <div class="table">
            <div class="table-search">
                <div class="table-search-box">
                    <div class="table-search-name"><input type="text" placeholder="姓名" class="table-search-input"
                            v-model="theName"></div>
                    <div class="table-search-name"><input type="text" placeholder="年级" class="table-search-input"
                            v-model="theGrade"></div>
                    <div class="table-search-box-checkbox">
                        <div class="table-search-title">
                            <div class="table-search-title-name" @click="dropDown" @mouseleave="dropDownNone">
                                <span>意向部门</span>
                            </div>
                            <div class="table-search-content-box" v-show="tableSearchContentBoxActive"
                                @mouseenter="dropDown" @mouseleave="dropDownNone">
                                <div v-for="(item, index) in department" :key="index" class="table-search-title-name"
                                    @click="getTheDepartment(index)">{{ item }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="table-search-button">
                        <button @click="selectBySomething">查询</button>
                    </div>
                </div>
                <div class="table-body-content">
                    <table class="table-body">
                        <tr class="table-body-title">
                            <td v-for="(item, index) in tableTitle" :key="index">{{ item }}</td>
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
                                    <button class="findhisform" @click="SeeHisForm">查看他的报名表</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="page-change-box">
                        <div class="page-box">
                            <div class="change-box lastbox">
                                <button>上一页</button>
                            </div>
                            <div class="page-box-item page-box-show" v-for="(index, item) in currentIndexs"
                                :key="index">
                                <button>{{ item + 1 }}</button>
                            </div>
                            <div class="change-box-show-button" @click="ShowPagesChangeBox" v-show="ShowButtonIsShown">
                                <button>...</button>
                            </div>
                            <div class="page-box-item-page-box-not-show" v-show="pageChangeBoxActive">
                                <button v-for="(index, item) in currentIndexsUnShown" :key="index">{{ item +
                                    currentIndexs + 1 }}</button>
                            </div>
                            <div class="page-box-nextbox">
                                <button @click="SeeHisForm">下一页</button>
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
import { selectByName, selectByGradeId, selectByIntentDepartment, selectByIntervieweesName, selectRegistrationById, selectList, updateRegistration, queryMyRecruit } from '@/api/Enrolment/Enrolment';
import manageMembersVue from '../usersManagementComponent/manageMembers.vue';
import messageService from '@/utils/messageService';
export default {
    data() {
        return {
            // 单页面表框数量 size
            size: 3,
            // 当前页面
            currentPage: 1,
            // 显示页面数
            currentIndexs: 8,
            // 隐藏页面数
            currentIndexsUnShown: 5,
            // 省略页面数
            currentIndexs_: 9,
            // 表格标头
            tableTitle: ["姓名", "年级", "班级", "联系方式", "邮箱", "意向部门", "面试时间", "备注", "加入目的"],
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
                    purpose: "学习",
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
                    purpose: "学习",
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
                    purpose: "学习",
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
                    purpose: "学习",
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
                    purpose: "学习哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
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
                    purpose: "学习",
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
                    purpose: "学习",
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
                    purpose: "学习",
                    id: 1,
                },
            ],
            FormHasDone: "",
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
            // 根据点击事件决定它是否要查看
            FormShowed: false
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
        // 获取部门信息
        getTheDepartment(index) {
            this.theDepartmentId = index
            this.theDepartmentId++
            console.log(this.theDepartmentId);
        },
        // 查看表单
        SeeHisForm(ifshow) {
            // 挂载事件
            // 点击的话就是要显示了
            this.FormShowed = true
            ifshow = this.FormShowed
            console.log(ifshow);
            this.$emit("onEmitShow", ifshow)
        },
        // queryMyRecruit()
        // async SeeHisForm() {
        //     try {
        //         const userId = 8
        //         console.log(userId);
        //         await queryMyRecruit(userId).then(res => {
        //             console.log(res.data)
        //             if (res.code === 200) {
        //                 messageService.success("哈哈哈哈")
        //             } else {
        //                 messageService.error('错了')
        //             }
        //         })
        //     } catch (error) {
        //         messageService.error("hhh")
        //         messageService.error(error)
        //     }
        // },
        async selectBySomething() {
            try {
                if (this.theName != "") {
                    const params = {
                        intervieweesName: this.theName,
                        cur: 1,
                        size: 3
                    }
                    await selectByIntervieweesName(params).then(res => {
                        console.log(res.data)
                        if (res.code === 200) {
                            messageService.success("查询名字成功")
                            this.tableData = res.data
                        } else {
                            messageService.error('查询名字失败')
                        }
                    })
                }
                else if (this.theGrade != "") {
                    let grade = 0
                    if (this.theGrade == "大一") {
                        grade = 1
                    }
                    else {
                        grade = 2
                    }
                    const params = {
                        grade: grade,
                        cur: 1,
                        size: 5
                    }
                    console.log(params);
                    await selectByGradeId(params).then(res => {
                        if (res.code === 200) {
                            messageService.success("查询gradeid成功")
                        } else {
                            messageService.error('查询gradeid失败')
                        }
                    })
                }
                else if (this.theDepartmentId != 0) {
                    this.tableData = res.data
                    const params = {
                        intentDepartment: this.theDepartmentId,
                        cur: 1,
                        size: 3
                    }
                    await selectByIntentDepartment(params).then(res => {
                        if (res.code === 200) {
                            messageService.success("查询intentDepartment成功")
                            this.tableData = res.data
                        } else {
                            messageService.error('查询intentDepartment失败')
                        }
                    })
                }
                else if (this.theDepartmentId != 0 & this.theGrade != "" & this.theName != "") {
                    const params = {
                        intentDepartment: this.theDepartmentId,
                        grade: this.theGrade,
                        intervieweesName: this.theName,
                        cur: 1,
                        size: 3
                    }
                }
                else {
                    const params = {
                        cur: 1,
                        size: 3
                    }
                    await selectList(params).then(res => {
                        if (res.code === 200) {
                            messageService.success("查询所有成功")
                        } else {
                            messageService.error('查询所有失败')
                        }
                    })
                }
            } catch (error) {
                messageService.error(error)
            }
        },
        // selectByIntervieweesName
        async toselectList() {
            try {
                const params = {
                    cur: 1,
                    size: 6
                }
                await selectList(params).then(res => {
                    console.log(res);
                    if (res.code == 200) {
                        console.log("查询成功", res);
                        messageService.success("咦我中了")
                        this.tableData = res.data
                    } else {
                        messageService.error("咦我没中")
                    }
                })
            } catch (error) {
                messageService.error(error)
            }
        }
    },
    created() {
        this.toselectList();
    },
    computed: {
    }
}

</script>

<style scoped>
.table {
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

.table-search {
    width: 95%;
    border: 0.5px solid var(--table-border-color);
    padding: 10px;
    border-top: 0px;
}

.table-search-box {
    display: flex;
    justify-content: flex-start;
    position: relative;
    flex: 1;
}

.table-search-name {
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

.table-search-box-checkbox {
    margin-top: 20px;
    padding: px;
    /* border: 2px solid var(--table-border-color); */
    position: absolute;
    left: 300px;
    margin-left: 60px;
    margin-right: 60px;
    z-index: 999;
}

.table-search-title-name {
    font-size: 17px;
    padding: 10px;
    border: 1px solid var(--table-border-color);
    box-shadow: var(--table-box-shadow);
}

.table-search-content-box div:hover {
    cursor: pointer;
    /* background-color: var(--table-font-color); */
    color: var(--button-color);
}

.table-search-content-box div:active {
    background-color: var(--button-color-mint);
}

.table-search-button {
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

.table-body {
    max-width: 100%;
    overflow-x: auto;
}

.table-body-title td {
    /* 表格标头 */
    background-color: var(--table-box-title-bgc-color);
    font-size: var(--table-box-title-font-size);
    font-weight: var(--table-box-title-font-width);
    color: var(--table-box-title-font-color);
}

@media (max-width: 768px) {

    /* .table-body,
    .table-body-title,
    .table-body td {
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
    } */
    .table-search-box {
        flex-direction: column;
        align-items: start;
    }

    .table-search-name {
        margin-bottom: 10px;
        /* 在小屏幕上添加间隔 */
    }

    .table-search-box-checkbox {
        position: static;
        /* 移除绝对定位 */
        margin-left: 0;
        margin-right: 0;
    }

    .table-search-title-name {
        width: 100%;
        /* 让下拉框宽度适应其容器 */
    }

    .table-body {
        width: 100%;
        /* 确保表格宽度适应屏幕宽度 */
    }

    .table-body-title td,
    .table-body td {
        display: block;
        width: 100%;
    }

    .operation-column {
        text-align: center;
    }

    .page-change-box {
        width: 100%;
        /* 分页控件宽度 */
        justify-content: center;
    }

    .page-box button {
        width: 30px;
        /* 调整分页按钮大小 */
        height: 30px;
        padding: 5px;
    }
}

.page-change-box {
    /* text-align: center; */
    margin: 25px auto;
    width: 50%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
}

.page-box {
    display: flex;
}

.page-change-box {
    margin: 25px auto;
    display: flex;
    justify-content: space-around;
    font-size: var(--page-change-box-font-size);
}

.page-box {
    display: flex;
    justify-content: space-around;

}

.page-box button {
    height: 40px;
    width: 50px;
    border: var(--page-change-box-border);
    font-weight: var(--page-change-box-width);
    box-shadow: var(--page-change-box-box-shadow);
}

.page-box button:hover {
    background-color: var(--page-change-box-bg-color);
}

.page-box button:active {
    transform: var(--page-change-box-active-bg-color);
    transition: ease-in 0.5s;
}

.page-box-item-page-box-not-show {
    display: flex;
    justify-content: space-around;
}

.findhisform {
    width: 60%;
}
</style>