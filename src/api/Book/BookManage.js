// 图书管理相关的API
// bookservice
import request from '@/utils/request'


// borrow-noReturn
// 查询所有已借阅未归还书籍的借阅信息
// 需要的请求参数是
// Query参数
// {cur: 当前页,size: 每页数量}
// 可以选择任意的页面

export function BorrowNoReturn(params) {
    return request({
        url: '/borrow/noReturn',
        method: 'get',
        params
    })
}

// borrow-my
// 查询我借阅的书籍
// 这里的userid通过后端来获取
// Query参数  可选
// {cur: 当前页,size: 每页数量}
export function BorrowMy(params) {
    return request({
        url: '/borrow/my',
        method: 'get',
        params
        // 这里要带params参数,params参数来源于后端
    })
}

// borrow-record
// 查询借阅信息(动态查询)
// param:bookId | userId 二选一或者为空
// Query参数
// {cur: 当前页,size: 每页数量,  bookId: 书籍id,userId: 用户id}
// 当前页和页面数  是必需的   书籍id和userid 是可选的
export function BorrowRecord(params) {
    return request({
        url: '/borrow/record',
        method: 'get',
        params
    })
}

// return 
// 归还书籍
// 请求的参数是Path参数
// 也就是你要直接加在路径后面
export function ReturnBook(borrowId) {
    return request({
        url: `/book/return/${borrowId}`,
        method: 'get',
    })
}

// borrow
// 借阅书籍
// Body参数 
// bookId 借阅的书籍id (number)
// borrowDuration 借阅时长(以天为单位) (number)
// returnTime 归还时间(string)
// Query参数
// {
//     "bookId": 0,
//         "borrowDuration": 0,
//             "returnTime": "string"
// }
export function BorrowBook(params) {
    return request({
        url: `/book/borrow`,
        method: 'post',
        data: params
    })
}

// delete
// 删除书籍
// Query参数
// {bookid: (number)}
export function DeleteBook(params) {
    return request({
        url: '/book/delete',
        method: 'get',
        params: params
    })
}

// list
// 应该是查询当前页面的所有书籍(包括当前书籍状态)
// 传入参数Query参数
// 应该是必须的
// {cur: 当前页,size: 每页数量}
export function getBookList(params) {
    return request({
        url: '/book/list',
        method: 'get',
        params
    })
}

// queryOne
// 查询借阅记录
// 传入参数Query参数
// {cur,size,userid,bookid,bookname}
// userid,bookid,bookname三选一，也可以都传
export function getBookInfo(params) {
    return request({
        url: '/book/queryOne',
        method: 'get',
        params
    })
}

// update
// 修改书籍信息
// 传入参数Body参数
export function updateBookInfo(data) {
    return request({
        url: '/book/update',
        method: 'post',
        data: data
    })
}

// save
// 添加图书信息
export function saveBookInfo(data) {
    return request({
        url: '/book/save',
        method: 'post',
        data: data
    })
}   
