import requests from '@/untils/request'
// searchAllBooks--查询所有书籍
// 得到表格中书籍信息
export const getBookList = () => {
  return requests.get('/book/list', { timeout: 3000 },
    {
      headers: { Authorization: 'string' }
    })
}
// 用书名查id
export const getBookId = (bookName) => {
  return requests.get('/book/queryOne', {
      bookName: 'bookName'
    }, {
    headers: { Authorization: 'string' }
  })
}
// 通过书名查询书籍消息
export const searchBookMsg = (bookname) => {
  return requests.get('/book/queryOne', {
    headers: { Authorization: 'string' }
  }, {
    bookName: 'bookname'
  })
}
// 给表格中新添加书籍信息
export const pushTableData = (userName, groupId, roleId, email, phone, sex) => {
  return requests.post('/user/save', {
    serialVersionUID: '0',
    bookName: 'String',
    bookAuthor: 'String',
    bookDetails: 'String',
    price: 0,
    owner: 0,
    ownerName: 'String',
    remark: 'String',
    bookRef: 'String'
  }, {
    headers: {
      Authorization: 'string'
    }
  })
}
