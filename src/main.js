import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import "./router/routerEach"; // 路由钩子
import store from "./store/index";
import * as filters from "./filtres/index"; // 全局过滤器

// 注册全局实用程序过滤器（register global utility filters）.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
