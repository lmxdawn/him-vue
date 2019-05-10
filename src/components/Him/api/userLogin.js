import { create } from "./himAxios";

//

// qq 登录
export function userLoginByQq(apiBaseUrl, code, redirect_uri) {
    return create(apiBaseUrl)({
        url: "/api/user/login/byQq",
        method: "get",
        params: {
            code,
            redirect_uri
        }
    });
}
