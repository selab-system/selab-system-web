import requests from '@/untils/request'
// 根据图书名获得图书id
export const getReturnBookId = (bookName) => {
    return requests.get('/book/queryOne', {
        bookName: 'bookName'
      })
  }

//  根据图书id归还图书
export const returnBook = (bookId) => {
    return requests.get('/book/return/{borrowId}', {
        bookId
      })
  }