import axios from "../../utils/axios";

//

// 微信 js-SDK 票据
export function wxUtilJsapiTicket(query) {
    return axios({
        url: "/api/wx/js_sdk/jsapiTicket",
        method: "get",
        params: query
    });
}
