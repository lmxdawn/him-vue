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
export function userGroupUserCreate(apiBaseUrl, query, data) {
    return create(apiBaseUrl)({
        url: "/api/group/user/create",
        method: "post",
        query: query,
        data: data
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
export function userGroupUserDelete(apiBaseUrl, query) {
    return create(apiBaseUrl)({
        url: "/api/group/user/create",
        method: "post",
        query: query
    });
}
