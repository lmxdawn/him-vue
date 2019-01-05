import axios from "../utils/axios";

// 心愿生活状态标签

// 列表
export function apiTest(query) {
    return axios({
        url: "/api/sys/androidVersion",
        method: "get",
        params: query
    });
}
