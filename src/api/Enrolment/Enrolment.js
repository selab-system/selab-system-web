// 招新管理API

// 引入依赖
import request from "@/utils/request";

// queryMyRecruit
// 查询本人提交报名表
export function queryMyRecruit(userId) {
    return request({
        url: `/registration/queryMyRecruit?userId=${userId}`,
        method: "get",
    });
}

// selectByGradeId
// 通过年级查询报名表
// 参数
// {grade,cur,size}
export function selectByGradeId(params) {
    return request({
        url: `/registration/selectByGradeId`,
        method: "get",
        params: params
    });
}

// selectByIntentDepartment
// 通过意向部门查询报名表
// 参数
// {intentDepartment,cur,size}
// intentDepartment是数字
// {intentDepartment:1开发，2网安，3人工智能，4虚拟现实}
export function selectByIntentDepartment(params) {
    return request({
        url: `/registration/selectByDepart?intentDepartment=${params.intentDepartment}&cur=${params.cur}&size=${params.size}`,
        method: "get",
    });
}

// selectByIntervieweesName
// 通过报名者的姓名查询报名表信息(支持模糊查询)
// 参数
// {intervieweesName,cur,size}
export function selectByIntervieweesName(params) {
    return request({
        url: `/registration/selectByUserName?intervieweesName=${params.intervieweesName}&cur=${params.cur}&size=${params.size}`,
        method: "get",
    });
}

// selectRegistrationById
// 通过 registrationId 查询报名表信息
// 这里看文档

export function selectRegistrationById(params) {
    return request({
        url: `/registration/selectRegistrationById?registrationId=${params}`,
        method: "get",
    });
}
// 返回信息

// selectList
// 分页查询所有的报名表
// 参数
// {cur,size}
export function selectList(params) {
    return request({
        url: "/registration/selectList",
        method: "get",
        params: params
    });
}

// updateRegistration
// 修改报名表信息(管理员操作)
// post请求
// 文档
// 
export function updateRegistration(data) {
    return request({
        url: "/registration/updateRegistration",
        method: "post",
        data: data
    });
}

// insertRegistration
// 添加报名表信息(管理员操作)
// post请求
// 文档
export function insertRegistration(formData) {
    return request({
        url: "/registration/insertRegistration",
        method: "post",
        data: formData
    });
}