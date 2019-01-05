import axios from "axios";
import { getUserId, getToken } from "../utils/auth";

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE, // api的base_url
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
    config => {
        // Do something before request is sent
        let userId = getUserId();
        let token = getToken();
        if (userId && token) {
            config.headers["X-Web-UserId"] = userId;
            config.headers["X-Web-Token"] = token;
        }
        return config;
    },
    error => {
        // Do something with request error
        Promise.reject(error);
    }
);

// respone拦截器
service.interceptors.response.use(
    response => {
        const data = response.data;
        if (data.code) {
            if (data.code === 20006) {
                // 重新登录
            }
        }
        return data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default service;
