import request from '@/utils/user'

// 新建用户
function saveuser (data) {
  return request.post('/user/save', {
    ...data
  })
}

// 更新用户数据
function updateinfos (data) {
  return request.post('/user/update', {
    ...data
  })
}

// 查询用户数据（单个/所有）
function queryuser (params) {
  return request({
    method: 'GET',
    url: '/user/query',
    params: params
  })
}

// 用户登出
function userlogout (params) {
  return request.get('/user/logout', {
    params: params
  })
}

// 新建小组
function savegroup (data) {
  return request.post('/group/save', {
    ...data
  })
}

// 更新小组信息
function updategroupinfos (data) {
  return request.post('/group/update', {
    ...data
  })
}

// 删除小组
function deletegroup (params) {
  return request.get('/group/delete', {
    params: params
  })
}

// 查询所有小组信息
function queryAllgroup (params) {
  return request.get('/group/queryAll', {
    params: params
  })
}

// 通过userid查询用户
function querybyId (userId) {
  return request.get(`/user/queryById/${userId}`)
}

// 更新用户角色
function updaterole (data) {
  return request.post('/user/role/update', {
    ...data
  })
}

// 修改用户小组
function updateUserGroup (data) {
  return request.post('/user/group/update', {
    ...data
  })
}

export {
  saveuser,
  updateinfos,
  queryuser,
  userlogout,
  savegroup,
  updategroupinfos,
  deletegroup,
  queryAllgroup,
  querybyId,
  updaterole,
  updateUserGroup
}
