import { create } from "./himAxios";

//

// 加入的群列表
export function userGroupUserLists(apiBaseUrl, query) {
    return create(apiBaseUrl)({
        url: "/api/group/user/lists",
        method: "get",
        params: query
    });
}

// 加群
export function userGroupUserCreate(apiBaseUrl, checkCode) {
    return create(apiBaseUrl)({
        url: "/api/group/user/create",
        method: "post",
        params: {
            checkCode: checkCode
        }
    });
}

// 更新
export function userGroupUserUpdate(apiBaseUrl, data) {
    return create(apiBaseUrl)({
        url: "/api/group/user/update",
        method: "post",
        data: data
    });
}

// 删除/退群
export function userGroupUserDelete(apiBaseUrl, groupId) {
    return create(apiBaseUrl)({
        url: "/api/group/user/delete",
        method: "post",
        params: {
            groupId: groupId
        }
    });
}

// 获取验证码
export function userGroupUserCheckCode(apiBaseUrl, groupId) {
    return create(apiBaseUrl)({
        url: "/api/group/user/getCheckCode",
        method: "post",
        params: {
            groupId: groupId
        }
    });
}

// 清空未读消息
export function userGroupUserClearUnMsgCount(apiBaseUrl, groupId) {
    return create(apiBaseUrl)({
        url: "/api/group/user/clearUnMsgCount",
        method: "post",
        params: {
            groupId: groupId
        }
    });
}
