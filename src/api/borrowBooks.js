import requests from '@/untils/request'
// 借阅书籍请求
export const borrowBook = (bookId,borrowDuration,returnTime) => {
    return requests.post('/book/borrow', {
        bookId,
        borrowDuration,
        returnTime
    },{
      headers: { Authorization: 'string' }
    })
  }
  // 根据书名得id
  export const getBookId = (bookName) => {
    return requests.get('/book/queryOne', {
        bookName
    },{
      headers: { Authorization: 'string' }
    })
  }