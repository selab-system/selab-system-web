import requests from '@/untils/request'
// 得到表格中书籍信息
export const getBookList = () => {
    return requests.get('/borrow/noReturn',{
      params:{
        cur:1,
        size:10
      }
    })
  }

  export const borrowqueryById = (borrowId) => {
    return requests.get(`/borrow/queryById/${borrowId}`)
  }
  export const searchByBookId = (bookId) => {
    return requests.get('/borrow/record',{
     params:{
      bookId,
      cur:1,
      size:1
     }
    })
  }
  export const searchByUserId = (userId) => {
    return requests.get('/borrow/record',{
      params:{
        userId,
      cur:1,
      size:1
      }
    })
  }