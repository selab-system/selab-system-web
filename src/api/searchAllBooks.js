import requests from '@/untils/request'
// searchAllBooks--查询所有书籍
// 得到表格中书籍信息
export const getBookList = () => {
  return requests.get('/book/list', {
    params: {
      cur: "1",
      size: "10"
    }
  }
  )
}
// 用书名查id
// export const getBookId = (bookName) => {
//   return requests.get('/book/queryOne', {
//     bookName: 'bookName'
//   })
// }
// 通过书名查询书籍消息
export const searchBookMsg = (bookId) => {
  return requests.get('/book/queryOne', {
    params: {
      bookId
    }
  })
}
// 给表格中新添加书籍信息
// export const pushTableData = (bookName,
//   bookAuthor,
//   bookDetails,
//   price,
//   owner,
//   remark,
//   bookRef) => {
//   return requests.post('/book/save', {
//     bookName,
//     bookAuthor,
//     bookDetails,
//     price,
//     owner,
//     remark,
//     bookRef
//   })
// }
