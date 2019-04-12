export default {
    name: "poster",
    data() {
        return {
            ctx: null,
            posterImgUrl: null
        };
    },
    components: {},
    methods: {
        canIUseCanvas(canvas) {
            return !!canvas.getContext("2d");
        },
        // 画背景
        drawBackground() {
            return new Promise(resolve => {
                console.log(this.ctx);
                let background = new Image();
                background.src = require("../../../assets/image/poster-bg.png");
                background.onload = () => {
                    this.ctx.drawImage(
                        background,
                        0,
                        0,
                        this.ctx.canvas.width,
                        this.ctx.canvas.height
                    );
                    resolve();
                };
            });
        },
        // 画文字
        drawText() {
            return new Promise(resolve => {
                this.ctx.fillStyle = "green"; //设置填充的背景颜色
                this.ctx.fillRect(0, 0, 800, 300); //绘制 800*300 像素的已填充矩形：
                this.ctx.fillStyle = "#fff";
                this.ctx.strokeStyle = "#fff"; //设置笔触的颜色
                this.ctx.font = "bold 40px '字体','字体','微软雅黑','宋体'"; //设置字体
                this.ctx.textBaseline = "hanging"; //在绘制文本时使用的当前文本基线
                this.ctx.fillText("长按二维码", 10, 40); //设置文本内容
                resolve();
            });
        },
        // 画头像
        drawAvatar() {
            return new Promise(resolve => {
                resolve();
            });
        },
        // 画二维码
        drawQrCode() {
            return new Promise(resolve => {
                resolve();
            });
        },
        drawAll() {
            return Promise.all([
                this.drawBackground(),
                this.drawText(),
                this.drawAvatar(),
                this.drawQrCode()
            ]);
        }
    },
    mounted() {
        const canvas = this.$refs.posterCanvas;
        if (this.canIUseCanvas(canvas)) {
            // canvas.width = this.posterW;
            // canvas.height = this.posterH;
            this.ctx = canvas.getContext("2d");
            this.drawAll().then(() => {
                this.posterImgUrl = this.ctx.canvas.toDataURL("image/png");
            });
        }
    },
    created() {}
};
