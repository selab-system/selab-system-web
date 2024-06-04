// 用户管理API
// userservice
import request from "@/utils/request";

// user-role-update
// 修改用户权限
// 传入参数：userId,roleId
export function updateUserRole(params = {}) {
  return request({
    url: "/user-role-update",
    method: "post",
    data: params
  });
}

// 通过id来查询用户信息
// 请求path参数
// userId：用户id 必需
export function userQueryByid() {
    return request({
      url: "/user/queryById/{userId}",
      method: "get",
    });
}

// group-queryAll
// 应该是展示各部门成员
// Query参数 (当前页面和每页数量)
export function groupQueryAll(params) {
  return request({
    url: "/group/queryAll",
    method: "get",
    params
  });
}

// 部门信息的修改
// group-delete
// 删除小组
// 传入参数：groupid 小组id
export function deleteGroup(params) {
  return request({
    url: "/group/delete",
    method: "get",
    params
  });
}

// group-update
// 小组成员的更新
// Body参数
// 看文档
export function updateGroup(data) {
  return request({
    url: "/group/update",
    method: "post",
    data: data
  });
}

// group-save
// 小组成员的保存
// Body参数 格式 xml
export function saveGroup(data) {
  return request({
    url: "/group/save",
    method: "post",
    data: data
  });
}

// 注销用户
// 请求参数 用户的id userId
export function logOutUser(params) {
  return request({
    url: "/user/logout",
    method: "get",
    params: params
  });
}

// user-query
// 查询用户
// 要求：group | roleId 可以一个为空，也可以全为空
// 全为空就查询全部信息
// roleId:1 超级管理员 2 管理员 3 普通用户
// 传入参数 groupId:小组id | roleId:角色id 页面和每页数量
export function userQuery() {
    return request({
      url: "/user/query",
      method: "get",
    });
}

// update
// 修改用户
// Body参数看文档
export function updateUser(data) {
  return request({
    url: "/user/update",
    method: "post",
    data: data
  });
}

// save
// 添加用户
export function saveUser(data) {
  return request({
    url: "/user/save",
    method: "post",
    data: data
  });
}