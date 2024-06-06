<template>
    <div>
        <!-- 导航栏 -->
        <!-- <navBasicComponent/> -->
        <!-- 报名表单 -->
        <div class="registrasion-form-main">
            <div class="registrasion-form-main-title">报名表</div>
            <div class="registrasion-form-main-content">
                    <div class="registrasion-form-main-content-input-title">
                        <div class="registrasion-form-main-content-input-title-item">
                            <div class="registrasion-form-main-content-input-title-item-title name-input" >
                               <input type="text" placeholder="请输入姓名" v-model="name">
                            </div>
                            <div class="registrasion-form-main-content-input-title-item-title grade-input" >
                                <input type="text" placeholder="请输入年级(大一/大二)"  v-model="grade">
                            </div>
                            <div class="registrasion-form-main-content-input-title-item-title class-input">
                               <input type="text" placeholder="请输入班级"  v-model="classroom">
                            </div>
                            <div class="registrasion-form-main-content-input-title-item-title email-input" >
                                <input type="text" placeholder="请输入您的QQ邮箱"  v-model="email">
                            </div>
                            <div class="registrasion-form-main-content-input-title-item-title phone-input">
                                <input type="tel" placeholder="请输入电话号码" v-model="phone">
                            </div>
                        </div>
                    </div>
                    <div class="registrasion-form-main-content-checkbuttons">
                        <p>意向部门:</p>
                        <div 
                          v-for="(department, index) in departments" 
                          :key="index" 
                          class="registrasion-form-main-content-checkbutton"
                          @click="selectDepartment(department)">
                        <button :class="{ active: department.isActive }"></button>
                        <span>{{ department.name }}</span>
                        </div>
                    </div>
                    <div>
                        <span>面试时间：</span>
                        <input type="date" v-model="interviewTime" placeholder="面试时间">
                    </div>
                    <div class="registrasion-own-production">
                        <div class="registrasion-own-production-purpose">
                            <div>
                                <span>加入目的：</span>
                                <textarea name="message" rows="10" cols="30" v-model="purpose"></textarea>
                            </div>
                        </div>
                        <br>
                        <div class="registrasion-own-production-showing">
                            <div>
                                <span>个人介绍：</span>
                                <textarea name="message" rows="10" cols="30" v-model="introduce"></textarea>
                            </div>
                        </div>
                        <br>
                        <div class="registrasion-own-production-remark">
                            <div>
                                <span>备注：</span>
                                <textarea name="message" rows="10" cols="30" v-model="remark">
                                </textarea>
                            </div>
                        </div>
                    </div>
                    <div class="registrasion-form-main-content-commit">
                        <button class="not-vip-commit-btn" v-show="isVipChange" @click="commitRegistrasionForm">提交</button>
                        <button class="vip-chaneg" v-show="!isVipChange" @click="changeTheForm">确定</button>
                        <button class="not-vip-commit-btn" @click="redirectIndex">
                            返回首页
                        </button>
                    </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import messageService from '@/utils/messageService';
import { insertRegistration,updateRegistration } from '@/api/Enrolment/Enrolment';
export default {
    data() {
        return {
            registrasionFormMainContentInputTitle: [
                "姓名",
                "年级",
                "班级",
                "联系方式",
                "邮箱",
                "意向部门",
                "面试时间",
            ],
            departments: [
                { name: '软件开发', isActive: false ,id:1},
                { name: '网络安全', isActive: false ,id:2},
                { name: '人工智能', isActive: false ,id:3},
                { name: '虚拟现实', isActive: false,id:4 },
            ],
            name: '李辰',
            grade: "",
            classroom: '软件2346', 
            email: '2095055676@qq.com',
            phone: '',
            interviewTime: '', // 添加面试时间的data属性
            // 加入目的
            purpose: "",
            // 自我介绍
            introduce: "",
            // 自我介绍备注
            remark: "",
            userId: this.$router.userId,
            // 部门id
            intentDepartmentId:1,
        }
    },
    methods: {
        selectDepartment(selectedDepartment) {
            // 将所有部门状态重置为未选中
            this.departments.forEach(department => {
                department.isActive = department === selectedDepartment ? true : false;
            });
            console.log(selectedDepartment.id)
            // 选中收集id
            this.intentDepartmentId = selectedDepartment.id;

        },
        // 收集表单数据
        async commitRegistrasionForm() {
            const registrationDto = {
                interviewees: this.name,
                email: this.email,
                phone: Number(this.phone),
                intentDepartment: this.intentDepartmentId,
                classroom: this.classroom,
                interviewTime: this.interviewTime,
                introduce: this.introduce,
                purpose: this.purpose,
                remark: this.remark,
                grade:this.isGrade
            };
            console.log('提交的数据:', registrationDto)
            // 这里可以添加提交数据到服务器的逻辑
            // 增加报名表
            try {
                console.log(registrationDto);
                await insertRegistration(registrationDto).then(res => {
                console.log(res)
                if(res.code == 200){
                    messageService.success('报名成功')
                }
                else {
                    messageService.error('报名失败')
                }
            }) 
            } catch (error) {
                messageService.error("??????")
            }
        },
        async changeTheForm() {
            try {
                const changedForm = {
                    id: 18,
                    interviewees: {

                    },
                    email: this.email,
                    phone: Number(this.phone),
                    intentDepartment: this.intentDepartmentId,
                    classroom: this.classroom,
                    interviewTime: this.interviewTime,
                    introduce: this.introduce,
                    purpose: this.purpose,
                    remark: this.remark,
                    grade:String(this.isGrade)
                }
                console.log(changedForm);
                await updateRegistration(changedForm).then(res => {
                    console.log(res)
                    if (res.code == 200) {
                        messageService.success("修改成功")
                    } else {
                        messageService.error(500)
                        console.log(res.code);
                    }
                })
            } catch (error) {
                messageService.error(error)
            }
        },
        // 返回首页按钮
        redirectIndex() {
            this.$router.push("/index")
        }
    },
    computed: {
        isVipChange() {
            if (this.$store.state.roleId != 3) {
                return false
            }
            else {
                return true
            }
        },
        // 检测大一或大二
        isGrade() {
            if (this.grade == "大一") {
                return 1
            }
            else if(this.grade == "大二") {
                return 2
            } else {
                messageService.error("您输入的年级有误")
            }
        }
    },
    mounted() {
        console.log(this.userId);
    }
}
</script>

<style>
.registrasion-form-main{
    width: 60%;
    margin: 0 auto;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--nav-box-shadow);
}
.registrasion-form-main-content{
    width: 80%;
}
.registrasion-form-main-content-input{
    width: 100%;
}
.registrasion-form-main-title{
    margin-bottom: 30px;
    font-family: var(--font-family);
    font-size: var(--registrasion-from-font-size);
    font-weight: var(--registrasion-from-font-weight);
}
.registrasion-form-main-content-input-title{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.registrasion-form-main-content-input-title-item input{
    height: 30px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 5px;
    font-size: 20px;
    border: 0.5px solid var(--table-border-color);
    font-size: 16px;
}
.registrasion-form-main-content-input-title-item input:active{
    border: 0.5px solid var(--table-border-color-black);
}
.registrasion-form-main-content-input-title-item input:hover{
    border: 0.5px solid var(--table-border-color-black);
}
.name-input,
.grade-input,
.class-input{
    width: 30%;
}
.email-input,
.phone-input{
    width: 60%;
}
input:focus {
    outline: none;
}
.registrasion-form-main-content-checkbuttons{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.registrasion-form-main-content-checkbutton{
    height: 50px;
    /* width: 70px; */

}
.registrasion-form-main-content-checkbutton button{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0px 15px;
}
.registrasion-form-main-content-checkbutton span{
    width: 50px;
    /* height: 20px; */
}
.registrasion-form-main-content-checkbutton button:active{
    background-color: var(--table-box-title-bgc-color);
}
.registrasion-form-main-content-checkbutton button.active {
    background-color: var(--table-box-title-bgc-color); /* 或者你喜欢的颜色 */
}
/* 直接针对date类型的输入框设置基础样式 */
input[type="date"] {
  height: 20px; /* 设定输入框的高度 */
  width: 50%; 
  border-radius: 5px;
  font-size: 20px;
}
.registrasion-form-main-content-input-title-item input,
textarea {
    width: 100%; 
    box-sizing: border-box; 
}

/* 设置textarea样式 */
textarea {
    min-height: 100px; /* 设置最小高度以适应内容，可按需调整 */
    /* resize: vertical; 允许用户垂直调整大小，水平方向保持固定 */
    border-radius: 5px; /* 与输入框风格一致 */
    border: 0.5px solid var(--table-border-color);
    font-size: 16px;
    margin-bottom: 5px;
}

textarea:focus {
    outline: none;
    border-color: var(--table-border-color-black);
}
.registrasion-own-production{
    width: 100%;
    margin-top: 10px;
    border: var(--registrasion-from-border);
}
.registrasion-own-production span{
    font-size: 18px;
    font-weight: 500;
    color: var(--registrasion-from-input-border-color)
}
.registrasion-own-production p{
    font-size: 16px;
    color: var(--font-color);
}
.registrasion-form-main-content-commit{
    /* margin-top: 30px; */
    margin: 30px auto;
}
.registrasion-form-main-content-commit button{
    width: 120px;
    height: 60px;
    box-shadow: var(--table-box-shadow);
    background-color: var(--table-action-bg-color);
    border: 0.5px solid var(--table-border-grey);
    border-radius: var(--table-action-radius);
    margin-left: 20px;
}
.registrasion-form-main-content-commit button:hover{
    background-color: var(--table-action-hover-bg-color);
    color: var(--table-action-hover-color);
}
.registrasion-form-main-content-commit button:active{
    box-shadow: var(--table-action-active-box-shadow);
    transform: scale(0.95);
}

</style>