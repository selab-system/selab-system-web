import requests from '@/untils/request'
// 得到表格中本人书籍信息
export const getBookList = (userId) => {
    return requests.get('/book/queryOne',
        { userId },
        { timeout: 3000 }
    )
}
// 得到表格中本人借阅书籍信息
export const getSearchBookList = () => {
  return requests.get('/borrow/my')
}
// 用id求用户信息
export const textUserId = (userId) => {
  return requests.get('/user/query', {
      userId
    })
}