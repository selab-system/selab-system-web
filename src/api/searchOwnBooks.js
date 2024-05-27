import requests from '@/untils/request'
// 得到表格中书籍信息
export const getBookList = (userId) => {
    return requests.get('/book/queryOne',
        { userId },
        { timeout: 3000 },
        {headers: { Authorization: 'string' }}
    )
}
// 用书名查id
export const getBookId = (bookName) => {
  return requests.get('/book/queryOne', {
      bookName: 'bookName'
    }, {
    headers: { Authorization: 'string' }
  })
}