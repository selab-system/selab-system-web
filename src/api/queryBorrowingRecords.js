import requests from '@/untils/request'
// 得到表格中书籍信息
export const getBookList = () => {
    return requests.get('/borrow/noReturn')
  }