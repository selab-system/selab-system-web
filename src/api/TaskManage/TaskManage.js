// 任务管理API
// 引入依赖
import request from "@/utils/request";


// queryAllNeedReportUser  已完成
// 查询所有需要汇报的用户信息
export function queryAllNeedReportUser() {
    return request({
        url: "/task/report/queryAllNeedReportUser",
        method: "get",
    });
}

// 查询自己要汇报的任务的信息
export function queryForUser() {
    return request({
        url: "/task/queryForUser",
        method: "get",
    });
}

// delete
// 应该是删除User
// 这个不知道干嘛的，文档妹写🤣
export function deleteUser(params) {
    return request({
        url: "/task/delete",
        method: "get",
        params,
    });
}

// queryAllReport    已完成
// 就是report，他写的resport写错了
// 通过id查询任务所有的汇报记录
// 请求参数
// 任务id 
export function queryAllReport() {
    return request({
        url: "/task/report/queryAllResport",
        method: "get"
    });
}

// queryMyReport
// 通过taskId查询本人的汇报记录。
// 请求参数
// {taskid,cur,size}
export function queryMyReportByTaskId(params = {}) {
    return request({
        url: "/task/queryMyReport",
        method: "get",
        params,
    });
}

// queryCount
// 查询当前汇报数量
// 参数 taskid
export function queryCount(params = {}) {
    return request({
        url: "/task/report/queryCount",
        method: "get",
        params,
    });
}

// report
// 汇报任务
// data参数，看文档
export function report(data) {
    return request({
        url: "/task/report",
        method: "post",
        data,
    });
}

// delete
// 通过taskId删除任务(逻辑删除？？？🤦‍♂️)
export function deleteTask(params = {}) {
    return request({
        url: "/task/delete",
        method: "get",
        params,
    });
}

// queryById
// 通过taskId查询任务信息
export function queryById(params = {}) {
    return request({
        url: "/task/queryById",
        method: "get",
        params,
    });
}

// queryMyTask
// 根据发布者名称查询其发布的所有任务
export function queryMyTask(params) {
    return request({
        url: "/task/queryMyTask",
        method: "get",
        params,
    });
}


// update
// 更新任务
// post请求
// data参数
export function updateTask(data, id) {
    const url = `/task/update/${id}`;
    return request({
        url,
        method: "post",
        data,
    });
}

// save  已完成
// 添加任务
export function saveTask(data) {
    return request({
        url: "/task/save",
        method: "post",
        data
    });
}

