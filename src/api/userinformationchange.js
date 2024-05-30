import requests from '@/untils/request'
// 获取本人信息
export const getUserMsg = (UserId) => {
    return requests.get('/user/query',
        {
            UserId
        },
        { headers: { Authorization: 'string' } }
    )
}
//   修改信息
export function changeMsg(list) {
    const { userName, groupId, groupName, roleId, roleName, email, phone, sex, userId, createTime, updateTime } = list
    return requests.get('/user/update',
        {
            userName,
            groupId,
            groupName, roleId, roleName, email, phone, sex, userId, createTime, updateTime
        },
        { headers: { Authorization: 'string' } }
    )
}
// 删除人员
export const userDelete = (userId) => {
    return requests.get('/user/logout',
        { userId },
        { headers: { Authorization: 'string' } }
    )
}

// 添加人员
export function addUser(addform) {
    const { userName, groupId, roleId, email, phone, sex, password } = addform
    return requests.get('/user/save',
        {
            userName,
            groupId,
            roleId,
            email,
            phone,
            sex,
            password
        },
        { headers: { Authorization: 'string' } }
    )
}