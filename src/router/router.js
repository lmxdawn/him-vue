import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

if (process.env.NODE_ENV === "development") {
    Vue.use(VueRouter);
}

const err401 = () =>
    import(/* webpackChunkName: "error" */ "../views/error/err401.vue");
const err404 = () =>
    import(/* webpackChunkName: "error" */ "../views/error/err404.vue");

export default new VueRouter({
    mode: "history", // 后端支持可开
    base: process.env.VUE_APP_ROUTER_BASE,
    routes: [
        {
            path: "*",
            component: err404
        },
        {
            path: "/401",
            component: err401,
            name: "401"
        },
        {
            path: "/404",
            component: err404,
            name: "404"
        },
        {
            path: "/500",
            component: err404,
            name: "500"
        },
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/day/video/detail",
            name: "detail",
            meta: {
                title: "视频"
            },
            component: () =>
                import(/* webpackChunkName: "day-video" */ "../views/day/video/detail.vue")
        }
    ]
});
