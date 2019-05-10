import { create } from "./himAxios";

//

// 群消息列表
export function userGroupMsgLists(apiBaseUrl, query) {
    return create(apiBaseUrl)({
        url: "/api/group/msg/lists",
        method: "get",
        params: query
    });
}

// 创建消息
export function userGroupMsgCreate(apiBaseUrl, data) {
    return create(apiBaseUrl)({
        url: "/api/group/msg/create",
        method: "post",
        data: data
    });
}
