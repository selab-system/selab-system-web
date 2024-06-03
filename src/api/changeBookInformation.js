import requests from '@/untils/request'
// 获取书籍信息name
export const  getMsgByName = (bookName) => {
    return requests.get('/book/queryOne',
    {
        bookName,
    },
        {headers: { Authorization: 'string' }}
    )
  }
// 获取书籍信息id
  export const  getMsgById = (bookId) => {
    return requests.get('/book/queryOne',
    {
        bookId,
    },
        {headers: { Authorization: 'string' }}
    )
  }
// 提交修改请求
  export const  changeBookMsg = (list) => {
    const { bookId, bookName, bookAuthor, bookDetails, price, owner, ownerName, status, createTime, updateTime, bookRef } = list;
    return requests.post('/book/update',
    {
      bookId: bookId,
      bookName: bookName,
      bookAuthor: bookAuthor,
      bookDetails: bookDetails,
      price: price,
      owner: owner,
      ownerName: ownerName,
      status: status,
      createTime: createTime,
      updateTime: updateTime,
      bookRef: bookRef
    },
        {headers: { Authorization: 'string' }}
    )
  }
  
  // 删除图书
  export const   Delete= (bookId) => {
    return requests.get('/book/delete',
    {
        bookId,
    },
        {headers: { Authorization: 'string' }}
    )
  }

  // 添加图书
  export const   AddBook= (addform) => {
    const{bookName,bookAuthor,bookDetails,price,owner,remark,bookRef}=addform
    return requests.post('/book/save',
    {
      bookName,
      bookAuthor,
      bookDetails,
      price,
      owner,
      remark,
      bookRef
    },
        {headers: { Authorization: 'string' }}
    )
  }
