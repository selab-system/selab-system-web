<template>
  <div class="taskRelease">
    <div class="task-release-component">
    <div class="release-form-main">
            <div class="release-form-main-title">发布任务</div>
            <div class="release-form-main-content">
                    <div class="release-form-main-content-input-title">
                        <div class="release-form-main-content-input-title-item">
                            <div class="release-form-main-content-input-title-item-title name-input" >                               
                                <div style="width: 112px;">任务名称：</div>
                                <input type="text" id="taskName" placeholder="请输入任务名称" v-model="name">
                            </div>
                        </div>
                    </div>
                    <div class="release-form-main-content-input-title">
                        <div class="release-form-main-content-input-title-item">
                            <div class="release-form-main-content-input-title-item-title name-input" >                               
                                <div style="width: 112px;">任务对象：</div>
                                <input type="text" id="taskObject" placeholder="请输入任务对象小组" v-model="groupIds">
                            </div>
                        </div>
                    </div>
                    <div class="release-form-main-content-input-title">
                        <div class="release-form-main-content-input-title-item">
                            <div class="release-form-main-content-input-title-item-title name-input" >                               
                                <div style="width: 112px;">对象 Id:</div>
                                <input type="text" id="taskObjectId" placeholder="请输入小组Id" v-model="groupId">
                            </div>
                        </div>
                    </div>
                    <div class="release-form-main-content-input-title">
                        <div class="release-form-main-content-input-title-item">
                            <div class="release-form-main-content-input-title-item-title name-input" >                               
                                <div style="width: 112px;">截止时间：</div>
                                <input type="text" id="taskTime" placeholder="请输入任务天数" v-model="dealTime">
                            </div>
                        </div>
                    </div>
                    <div class="release-own-production">
                        <div class="release-own-production-purpose">
                            <div>
                                <span>任务内容：</span>
                                <textarea name="message" rows="10" cols="30" v-model="content"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="release-form-main-content-commit">
                        <button class="bottom" @click="commitreleaseForm">发布</button>
                        <button class="bottom" @click="redirectIndex">
                            返回首页
                        </button>
                    </div>
            </div>
        </div>
  </div>
  </div>
</template>

<script>
import {saveTask} from '@/api/TaskManage/TaskManage.js'
import axios from 'axios'
export default {
    data() {
        return {
            releaseFormMainContentInputTitle: [
                "任务名称",
                "任务对象",
                "截止时间",
            ],
            name: '',
            deadline: '', // 添加截止时间的data属性
            // 任务内容
            taskContent: "",
            groupName:'',
            groupId:'',
            isPublishing: false,
            lastSubmitTime: null,
            formData: {},
        }
    },
    methods:{        
        // 收集表单数据
        async commitreleaseForm() {
                // 检查是否在10秒内提交过
            if (this.lastSubmitTime && Date.now() - this.lastSubmitTime < 10000) {
            alert("请等待10秒后再发布");
            return;
            }

            const formData = {
                publisherId: this.$store.state.roleID,
                publisherName: this.$store.state.roleId,
                name: this.name, // 直接从data中获取
                groupId: this.groupId,
                groupName: this.groupName,
                deadTime: this.deadline, // 确保 deadline 在 data 中已定义
                taskContent: this.taskContent,//任务内容
            };
            this.formData = formData
            //防止数据为空
            if(this.name==""){
                alert("请输入任务名称")
                return;
            }
            if(this.groupName==''){
                alert("请输入任务对象")
                return;
            }
            if (this.groupId=='') {
            alert("请选择至少一个任务对象");
            return; // 阻止表单提交
            }            
            if(this.taskContent==""){
                alert("请输入任务内容")
                return;
            }            
            console.log('提交的数据:', formData);
            this.lastSubmitTime = Date.now();

        },
            // async submitData() {
            //     try {
            //     // 使用axios发送POST请求
            //     const response = await axios.post('/save', this.formData).then(res =>{
            //         if(res.data.code==200){
            //             alert("发布成功")
            //         }
            //     });
            //     console.log('Server response:', response.data);
            //     // 处理成功的情况，比如显示成功信息
            //     } catch (error) {
            //     console.error('Error sending data:', error);
            //     // 处理错误情况，比如显示错误信息
            //     }
            // },
        redirectIndex() {
            this.$router.push("/index")
        },
       
    }}

</script>

<style>
.taskRelease{
    margin-top: 5px;
}
.task-release-component{
    height: 600px;
    background-color: #fff;
}

.release-form-main{
    height: 1000px;
    width: 60%;
    margin: 0 auto;
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: var(--nav-box-shadow);
}
.release-form-main-content{
    width: 80%;
}
.release-form-main-content-input{
    width: 100%;
}
.release-form-main-title{
    margin-bottom: 20px;
    font-family: var(--font-family);
    font-size: var(--registrasion-from-font-size);
    font-weight: var(--registrasion-from-font-weight);
}
.release-form-main-content-input-title{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.release-form-main-content-input-title-item input{
    height: 27px;
    width: 100%;
    margin-bottom: 26px;
    border-radius: 5px;
    font-size: 20px;
    border: 0.5px solid var(--table-border-color);
    font-size: 16px;
}
.release-form-main-content-input-title-item input:active{
    border: 0.5px solid var(--table-border-color-black);
}
.release-form-main-content-input-title-item input:hover{
    border: 0.5px solid var(--table-border-color-black);
}
.name-input{
    display: flex;
    width: 40%;
}
.email-input,
.phone-input{
    width: 60%;
}
input:focus {
    outline: none;
}
.release-form-main-content-checkbuttons{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
}
.release-form-main-content-checkbutton{
    height: 50px;
    /* width: 70px; */

}
.release-form-main-content-checkbutton button{
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 0px 15px;
}
.release-form-main-content-checkbutton span{
    width: 50px;
    /* height: 20px; */
}
.release-form-main-content-checkbutton button:active{
    background-color: var(--table-box-title-bgc-color);
}
.release-form-main-content-checkbutton button.active {
    background-color: var(--table-box-title-bgc-color); /* 或者你喜欢的颜色 */
}
/* 直接针对date类型的输入框设置基础样式 */
input[type="date"] {
  height: 25px; /* 设定输入框的高度 */
  width: 50%; 
  border-radius: 3px;
  font-size: 15px;
}
.release-form-main-content-input-title-item input,
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
.release-own-production{
    width: 100%;
    margin-top: 10px;
    border: var(--registrasion-from-border);
}
.release-own-production span{
    font-size: 18px;
    font-weight: 500;
    color: var(--registrasion-from-input-border-color)
}
.release-own-production p{
    font-size: 16px;
    color: var(--font-color);
}
.release-form-main-content-commit{
    /* margin-top: 30px; */
    margin: 30px auto;
}
.release-form-main-content-commit button{
    width: 120px;
    height: 60px;
    box-shadow: var(--table-box-shadow);
    background-color: var(--table-box-title-bgc-color);
    border: 0.5px solid var(--table-border-grey);
    border-radius: var(--table-action-radius);
    margin-left: 20px;
}
.release-form-main-content-commit button:hover{
    background-color: var(--table-action-hover-bg-color);
    color: var(--table-action-hover-color);
}
.release-form-main-content-commit button:active{
    background-color: var(--table-action-active-box-shadow);
    transform: scale(0.95);
}

</style>