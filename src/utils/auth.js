import { getStorage, setStorage, removeStorage } from "./storage";

const userId = "WEB-USERID";
const userToken = "WEB-TOKEN";

// 获取token
export function getToken() {
    return getStorage(userToken);
}

// 设置token
export function setToken(userId) {
    return setStorage(userToken, userId, 365);
}

// 删除token
export function removeToken() {
    return removeStorage(userToken);
}

// 获取 id
export function getUserId() {
    return getStorage(userId);
}

// 设置 id
export function setUserId(id) {
    return setStorage(userId, id, 365);
}

// 删除 id
export function removeUserId() {
    return removeStorage(userId);
}
