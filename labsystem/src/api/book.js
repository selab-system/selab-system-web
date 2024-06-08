import request from '../utils/book'

// 新建书籍信息
function savebook (data) {
  return request({
    method: 'POST',
    url: '/book/save',
    data: data
  })
}

// 更新书籍信息
function updatebookifos (data) {
  return request.post('/book/update', {
    data: data
  })
}

// 查询某本书籍信息
function queryonebook (params) {
  return request.get('/book/queryOne', {
    params: params
  })
}

// 查询所有书籍信息
function getAllBook (params) {
  return request({
    methods: 'GET',
    url: '/book/list',
    params: params
  })
}

// 删除书籍信息
function deletebookinfos (params) {
  return request.get('/book/delete', {
    params: params
  })
}

// 借阅书籍
function borrowbook (data) {
  return request.post('/book/borrow', {
    data: data
  })
}

// 归还书籍
function returnbook (borrowId) {
  return request.get(`/book/return/${borrowId}`)
}

// 获取所有借阅记录
function getborrowrecord (params) {
  return request.get('/borrow/record', {
    params: params
  })
}

// 获取我的借阅记录
function getmyborrowrecord (params) {
  return request.get('/borrow/my', {
    params: params
  })
}

function allnoreturn (params) {
  return request.get('/borrow/noReturn', {
    params: params
  })
}

// 通过书籍id查询
function querybookbyid (borrowId) {
  return request.get(`/borrow/queryById/${borrowId}`)
}

export {
  savebook,
  updatebookifos,
  queryonebook,
  getAllBook,
  deletebookinfos,
  borrowbook,
  returnbook,
  getborrowrecord,
  getmyborrowrecord,
  querybookbyid,
  allnoreturn
}
