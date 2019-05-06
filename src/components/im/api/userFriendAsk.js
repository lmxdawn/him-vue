import { create } from "./himAxios";

// 好友请求

// 列表
export function userFriendAskLists(apiBaseUrl, query) {
    return create(apiBaseUrl)({
        url: "/api/user/friendAsk/lists",
        method: "get",
        params: query
    });
}

// 发起好友请求
export function userFriendAskCreate(apiBaseUrl, checkCode, remark) {
    return create(apiBaseUrl)({
        url: "/api/user/friendAsk/create",
        method: "post",
        params: {
            checkCode: checkCode,
            remark: remark
        }
    });
}

// 确认好友请求
export function userFriendAskAck(apiBaseUrl, id, status) {
    return create(apiBaseUrl)({
        url: "/api/user/friendAsk/ack",
        method: "post",
        data: {
            id: id,
            status: status
        }
    });
}

// 清空好友请求数量
export function userFriendAskClearFriendAskCount(apiBaseUrl) {
    return create(apiBaseUrl)({
        url: "/api/user/friendAsk/clearFriendAskCount",
        method: "post"
    });
}
