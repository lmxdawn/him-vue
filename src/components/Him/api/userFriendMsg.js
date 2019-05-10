import { create } from "./himAxios";

//

// 朋友消息列表
export function userFriendMsgLists(apiBaseUrl, query) {
    return create(apiBaseUrl)({
        url: "/api/user/friendMsg/lists",
        method: "get",
        params: query
    });
}

// 发送好友消息
export function userFriendMsgCreate(apiBaseUrl, data) {
    return create(apiBaseUrl)({
        url: "/api/user/friendMsg/create",
        method: "post",
        data: data
    });
}

// 清空未读的消息数量
export function userFriendMsgClearUnMsgCount(apiBaseUrl, data) {
    return create(apiBaseUrl)({
        url: "/api/user/friendMsg/clearUnMsgCount",
        method: "post",
        data: data
    });
}
