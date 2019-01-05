export default {
    name: "day-detail",
    data() {
        return {
            videoDom: null,
            isMute: true,
            isPlay: false,
            isPvPlay: false, // 是否点击过播放
            channel: "", // 来源渠道
            recommendList: [],
            recommendListQuery: {
                offset: "",
                limit: 20
            },
            info: {
                type: 0,
                user: {}
            },
            title: "",
            query: {
                id: "",
                path_url: "",
                isErr: "",
                create_date: ""
            }
        };
    },
    components: {},
    methods: {},
    created() {
        // 将参数拷贝进查询对象
        let query = this.$route.query;
        this.query = Object.assign(this.query, query);
        this.query.isErr = query.isErr ? "1" : "";
        if (query.c) {
            this.channel = 1; // web 渠道，没有则默认是小程序渠道
        }
    }
};
