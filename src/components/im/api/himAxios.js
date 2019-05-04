import axios from "axios";

// 获取用户信息
export function create(apiBaseUrl) {
    // 创建axios实例
    const service = axios.create({
        baseURL: apiBaseUrl, // api的base_url
        timeout: 5000 // 请求超时时间
    });
    service.defaults.withCredentials = true;
    // request拦截器
    service.interceptors.request.use(
        config => {
            // Do something before request is sent
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
                if (data.code === 1) {
                    // 重新登录
                }
            }
            return data;
        },
        error => {
            return Promise.reject(error);
        }
    );
    return service;
}
