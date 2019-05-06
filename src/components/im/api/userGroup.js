import { create } from "./himAxios";

//

// 群成员列表
export function userGroupLists(apiBaseUrl, query) {
    return create(apiBaseUrl)({
        url: "/api/group/lists",
        method: "get",
        params: query
    });
}

// 创建群
export function userGroupCreate(apiBaseUrl, name, avatar, remark) {
    return create(apiBaseUrl)({
        url: "/api/group/create",
        method: "post",
        data: {
            name: name,
            avatar: avatar,
            remark: remark
        }
    });
}

// 更新群信息
export function userGroupUpdate(apiBaseUrl, groupId, name, avatar, remark) {
    return create(apiBaseUrl)({
        url: "/api/group/update",
        method: "post",
        data: {
            groupId: groupId,
            name: name,
            avatar: avatar,
            remark: remark
        }
    });
}

// 删除/解散群
export function userGroupDelete(apiBaseUrl, groupId) {
    return create(apiBaseUrl)({
        url: "/api/group/delete",
        method: "post",
        params: groupId
    });
}
