import axios from "../utils/axios";

// 用户信息
export function userInfo(query) {
    return axios({
        url: "/api/test/index/userInfo",
        method: "get",
        params: query
    });
}
// 用户分组列表
export function userGroupList(query) {
    return axios({
        url: "/api/test/index/userGroupList",
        method: "get",
        params: query
    });
}
// 历史消息
export function chatMsgList(query) {
    return axios({
        url: "/api/test/index/chatMsgList",
        method: "get",
        params: query
    });
}
