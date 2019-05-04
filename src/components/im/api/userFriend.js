import { create } from "./himAxios";

//

// 朋友列表
export function userFriendLists(apiBaseUrl, query) {
    return create(apiBaseUrl)({
        url: "/api/user/friend/lists",
        method: "get",
        params: query
    });
}

// 朋友列表
export function userFriendDelete(apiBaseUrl, data) {
    return create(apiBaseUrl)({
        url: "/api/user/friend/delete",
        method: "post",
        data: data
    });
}
