<template>
    <div>
        <!--错误信息方便调试-->
        <div class="errlog-box" v-if="errLog.length > 0">

            <textarea id="errlog" v-model="errLog">

        </textarea>
        </div>
        <div class="text" :class="{'is-show': isShow}">
            <h1 class="title" style="font-size: 18px;">一篇文章引发的<span style="color: red;">xue</span>案</h1>
            <div class="content">
                一次读公号推文, 发现一篇文章写得特好, 勾起了好奇心
                <h2 style="margin-top: 20px;"><a target="_blank" href="https://mp.weixin.qq.com/s/so7F88S7-3Wmq9x_rrYAoA">《群聊比单聊，为什么复杂这么多？》</a></h2>
                <h5><span style="color: rgb(0, 82, 255)">( 画外音: 点击查看详情 )</span> </h5>
                <h3 style="margin-top: 10px;">从此无法自拔</h3>
                <div style="color: #99a9bf">于是有了下面的故事</div>
                <h3 style="margin-top: 20px;">开源的H5聊天系统 </h3>
                <h5><span style="color: rgb(0, 82, 255)">( 画外音: 开源爱好者😝 )</span> </h5>
                <div style="color: #99a9bf">注: 你会发现这个系统是适配手机端和PC端的</div>
                <h5 style="margin-top: 20px;"><span>( 地址 )</span> </h5>
                <div style="margin-top: 10px;">
                    <a href="https://github.com/lmxdawn/him-vue" style="margin-left: 2px;"><img src="https://img.shields.io/badge/him-him--vue-1.svg"/></a>
                    <a href="https://github.com/lmxdawn/him-netty" style="margin-left: 2px;"><img src="https://img.shields.io/badge/him-him--netty-1.svg"/></a>
                    <a href="https://shang.qq.com/wpa/qunwpa?idkey=d4965fc7101936dcdea5eb1d05e2eaeb3128f20796028ee937ab516652083c6c" style="margin-left: 2px;"><img src="https://img.shields.io/badge/QQ%E7%BE%A4-210277856-orange.svg"/></a>
                </div>

                <h3 style="color: red;margin-top: 10px;">点击右下角 ﹤我们开始聊天吧~﹥ 按钮</h3>

                <h3 style="margin-top: 20px;">操作流程</h3>
                <h4 style="color: green">
                    <br/>
                    点击右下方的我们聊天吧
                    <br/>
                    <span style="font-size: 20px;">↓</span>
                    <br/>
                    女游客/男游客/QQ登录
                    <br/>
                    <span style="font-size: 20px;">↓</span>
                    <br/>
                    点击右上方的 二维码按钮, 生成二维码 <span style="color: red;">注意: 建议在浏览器中测试, 因为反复测试, 在iOS手机版的QQ中退出登录会失败, 因为Cookie清空不了</span>
                    <br/>
                    <span style="font-size: 20px;">↓</span>
                    <br/>
                    把生成好的二维码发给好友
                    <br/>
                    <span style="font-size: 20px;">↓</span>
                    <br/>
                    这个时候等待好友确认, 就可以聊天了
                    <br/>
                    <span style="font-size: 20px;">↓</span>
                    <br/>
                    左下角 换肤图标 可以切换皮肤

                </h4>

                <h1>功能列表</h1>
                <div class="gongneng-list">
                    <div><label><input type="checkbox" disabled checked />单聊</label></div>
                    <div><label><input type="checkbox" disabled checked />群聊</label></div>
                    <div><label><input type="checkbox" disabled checked />protobuf 编解码</label></div>
                    <div><label><input type="checkbox" disabled checked />客户端心跳</label></div>
                    <div><label><input type="checkbox" disabled checked />客户端断开重连</label></div>
                    <div><label><input type="checkbox" disabled checked />异地登录, 通知下线</label></div>
                    <div><label><input type="checkbox" disabled checked />移动端/PC端适配</label></div>
                    <div><label><input type="checkbox" disabled checked />离线消息 (ack 机制, 实现可达性)</label></div>
                    <div><label><input type="checkbox" disabled checked />第三方QQ登录</label></div>
                    <div><label><input type="checkbox" disabled checked />自带 emoji 表情</label></div>
                    <div><label><input type="checkbox" disabled checked />文本消息</label></div>
                    <div><label><input type="checkbox" disabled/>声音提示</label></div>
                    <div><label><input type="checkbox" disabled/>图片消息</label></div>
                    <div><label><input type="checkbox" disabled/>音频消息</label></div>
                    <div><label><input type="checkbox" disabled/>视屏消息</label></div>
                    <div><label><input type="checkbox" disabled/>分布式部署</label></div>
                    <div><label><input type="checkbox" disabled/>PHP 版本的 (Workerman 版本)</label></div>
                </div>

            </div>

            <h2 style="margin-top: 20px;">效果图</h2>

            <div class="img-list">

                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG6.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG6.jpeg'/>
                </div>

                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG7.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG7.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG8.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG8.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG9.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG9.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG10.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG10.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG11.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG11.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG12.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG12.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG13.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG13.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG14.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG14.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG15.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG15.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG16.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG16.jpeg'/>
                </div>


                <div class="img-list-item">
                    <!--<img src='https://github.com/lmxdawn/him-vue/raw/master/pic/WechatIMG17.jpeg'/>-->
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG17.jpeg'/>
                </div>


                <div class="img-list-item">
                    <img src='http://prbsvykmy.bkt.clouddn.com/pic/WechatIMG18.jpeg'/>
                </div>

            </div>

        </div>

        <div class="view-box">
            <him ref="him"
                :isShow="isShow"
                width="350px"
                height="650px"
                bottom="0"
                right="0"
                :apiBaseUrl="apiBaseUrl"
                :webSocketUrl="webSocketUrl"
                :userQRCodeUrl="userQRCodeUrl"
                :groupQRCodeUrl="groupQRCodeUrl"
                :WSResEncode="WSResEncode"
                :WSResDecode="WSResDecode"
                @on-is-show-click="isShowClick"
                @on-qq-login-click="qqLoginClick"
                @on-login-init="loginInit"
                @on-request-err="requestErr">

            </him>
        </div>
        <div class="btn-ok" @click="isShowClick" v-if="!isShow">
            <i class="icon"></i>
            <span class="text">我们聊天吧~</span>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
// protobuf 编码
import protoRoot from "@/proto/proto";
import Him from "../components/Him/index";

const WSBaseReqProto = protoRoot.lookup("protocol.WSBaseReqProto");
const WSBaseResProto = protoRoot.lookup("protocol.WSBaseResProto");

export default {
    name: "home",

    data() {
        const qqRedirectUri = "http://him-netty.await.fun/h5";
        return {
            errLog: "",
            isShow: false,
            qqRedirectUri: qqRedirectUri,
            qqLoginUrl:
                "https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101579192&redirect_uri=" +
                encodeURIComponent(qqRedirectUri) +
                "&state=1",
            userCheckCode: null,
            groupCheckCode: null,
            apiBaseUrl: process.env.VUE_APP_API_BASE,
            webSocketUrl: process.env.VUE_APP_WEBSOCKET_URL,
            userQRCodeUrl: process.env.VUE_APP_USER_QR_CODE_URL,
            groupQRCodeUrl: process.env.VUE_APP_GROUP_QR_CODE_URL
        };
    },
    components: {
        Him
    },
    methods: {
        // WebSocket 编码
        WSResEncode(payload) {
            let errMsg = WSBaseReqProto.verify(payload);
            console.log("buff 解析错误信息：", errMsg);
            // Create a new message
            const wsData = WSBaseReqProto.create(payload);
            // Encode a message to an Uint8Array (browser) or Buffer (node)
            return WSBaseReqProto.encode(wsData).finish();
        },
        // WebSocket 编码
        WSResDecode(data, cb) {
            let reader = new FileReader();
            reader.readAsArrayBuffer(data);
            reader.onload = () => {
                const buf = new Uint8Array(reader.result);
                const response = WSBaseResProto.decode(buf);
                cb(response);
            };
        },
        // 点击了QQ登录
        qqLoginClick() {
            // 前去授权
            window.location.href = this.qqLoginUrl;
        },
        isShowClick() {
            this.isShow = !this.isShow;
        },
        // 登录初始化完成
        loginInit() {
            let userCheckCode = this.getUserCheckCode();
            let groupCheckCode = this.getGroupCheckCode();
            console.log("登录初始化完成", userCheckCode, groupCheckCode);
            // 如果有加朋友的验证码
            if (userCheckCode) {
                // 发送加好友的请求
                this.$refs["him"].createUserFriendAsk(userCheckCode);
                // 发送后删除
                this.delUserCheckCode();
                this.$router.push("/");
            }
            // 如果有加群的验证码
            if (groupCheckCode) {
                this.$refs["him"].joinGroupUser(groupCheckCode);
                // 发送后删除
                this.delGroupCheckCode();
                this.$router.push("/");
            }
            // 登录成功, 延时显示聊天界面
            setTimeout(() => {
                this.isShow = true;
            }, 1000);
        },
        requestErr(code, message) {
            let text = "接口报错: code: " + code + ", message:" + message;
            this.errLog = text + "\n" + this.errLog;
        },
        getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] === variable) {
                    return pair[1];
                }
            }
            return false;
        },
        setUserCheckCode(value) {
            Cookies.set("USER_CHECK_CODE", value, {
                expires: 1,
                path: "/"
            });
        },
        getUserCheckCode() {
            return Cookies.get("USER_CHECK_CODE", {
                path: "/"
            });
        },
        delUserCheckCode() {
            return Cookies.remove("USER_CHECK_CODE", {
                path: "/"
            });
        },
        setGroupCheckCode(value) {
            Cookies.set("GROUP_CHECK_CODE", value, {
                expires: 1,
                path: "/"
            });
        },
        getGroupCheckCode() {
            return Cookies.get("GROUP_CHECK_CODE", {
                path: "/"
            });
        },
        delGroupCheckCode() {
            return Cookies.remove("GROUP_CHECK_CODE", {
                path: "/"
            });
        }
    },
    mounted() {
        // 授权成功后的跳转
        this.code = this.getQueryVariable("code"); // QQ 登录的code码
        if (this.code) {
            this.$refs["him"].qqLogin(this.code, this.qqRedirectUri);
            // 清空浏览器地址栏的值, 这里其实是刷新当前页面
            this.$router.push("/");
        }
        // Cookies.remove("UID");
        // Cookies.remove("SID");
    },
    created() {
        // 获取get参数
        let userCheckCode = this.getQueryVariable("userCheckCode");
        // 判断是否和 Cookie 里面的值相同
        if (
            userCheckCode &&
            userCheckCode !== "" &&
            userCheckCode !== this.getUserCheckCode()
        ) {
            this.setUserCheckCode(userCheckCode);
        }
        let groupCheckCode = this.getQueryVariable("groupCheckCode");
        // 判断是否和 Cookie 里面的值相同
        if (
            groupCheckCode &&
            groupCheckCode !== "" &&
            groupCheckCode !== this.getGroupCheckCode()
        ) {
            this.setGroupCheckCode(groupCheckCode);
        }
    }
};
</script>

<style type="text/scss" lang="scss">
.btn-ok {
    position: fixed;
    right: 30px;
    bottom: 30px;
    width: auto;
    padding: 20px 30px;
    cursor: pointer;
    border-radius: 33px;
    background-color: #6ed0ce;
    color: #ffffff;
    box-shadow: 7px 7px 12px 4px rgba(2, 25, 25, 0.05);
    text-align: center;
    .icon {
        vertical-align: middle;
        width: 20px;
        height: 20px;
        display: inline-block;
        margin-right: 10px;
        background-size: 100%;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAhCAYAAAC4JqlRAAAAAXNSR0IArs4c6QAAA51JREFUWAm1l39ojVEYx3e3NWPMZsMWoazsnyn/KC1MSf6Z/GFpIhGapESRaBLlR0Ki/Ig0tVAo2/IjpOYPIo0ls1mT+TVpzNbMjzaf73bOOnbv3vveu+upz32e85znec553/ec8743EBeh9PT0JJOSB1mQAW3QArWBQKAdHXth0AQohhvQCaHkN85qWA/DYzYLii2CBnDlD42PUAvN8Atc+Uxj3ZAmQYEkOOlU7cI+AwvhnyuknQhz4BC0gZUqjLSIJ0KSBq+0VdAXYcLAQvjiQ/jS8B+BbpA8hcyBcZ5tEi4rE9GtXmuDsQvgBDwDe6Ud2HVwFvS4EhSP1p1Sn+QxJNk6nprANcpAdAUrTDENrEH9SBNBS0zeXGy7aI95DmwSMkloB8lh49vR14z4V+slHkpMpi5ohuckCNhjghvRybDXtKNVF0jUAr1nClQNOgET2GoCNeudxh6qKqPAPKfI5JCTIGC2CdIzywVtu1hJEYVemWJbgiZAxxgoNwG3HNu4fCtNviZEtB6pdo9EO0Pnw7TeiWBkwzuwUo9h97D1+dWa/CSwW9TNU11XXtNI0H4tdb1DtJfqqqix3WedXJ1kQSdc762J/Oc4b8NLJu0o+ouPEilBR6mPJDeki8YdKGDwjbYD+wd2mW176USvzgF9nbRfwHOogUfSDPYbHUrKcW4O1eH6/ExAt3I1VDFYt5scxtZEf8Iwrzg/j6CIgSsiHDzO3Jk6r8Hp69YEWjyCmih036M/XNc3jwCtk0ZN4Dx8ByvN1kD7WclOeJCpdWOlFKPJNDrQxVxc37js2Smgt94GGAUPQPLWZkejyX/YW6Xvs00vpRTQEb/Lsx4B88FKumewRycFPpkiqxSGXWjaszzS+roIPG2Cl7vB+LIg4Ppk40uFqdaPnQ+SSsen17K+nvoXf1AhJ3gEdjVo683kefWoj+QclI7cetAi0/+EbNDgB4hrRSvuKkqn7AJ8ejcsxr4GK2mXocMLSenwBLSA+oV2HuyDU4Zt6P4jHXsT3ITRSkLnwFe4DYNedP8ArkFCMhyEEtcvG18GjHT9tPV2dT9kp9N+D29gvBv7X20G0+f5ftA3gp77xJgNSLGxoM9w3dJlbmHa42Ar2M87xaW6MUO2KXgFrOjjRf+IzoHWi9qiAvLDDRbZgjDVKNyAqd1gRS+dRngJd6GSle6eqLhiKExgN1jRH1Ftw6gkqjugkRi0EKWtd52r/SBfNPIXcYb3XT9WZh4AAAAASUVORK5CYII=");
    }
    .text {
        vertical-align: middle;
        line-height: 20px;
    }
}
.view-box {
    width: 100%;
}
.text {
    margin-top: 10px;
    text-align: center;
    .content {
        /*text-align: left;*/
        margin-top: 20px;
    }
}
.img-list {
    padding-left: 80px;
    padding-right: 80px;
    text-align: left;
    .img-list-item {
        display: inline-block;
        padding: 20px;
        width: 50%;
        vertical-align: top;
        img {
            width: 100%;
        }
    }
}
.gongneng-list {
    width: 300px;
    margin: 0 auto;
    text-align: left;
    input {
        -webkit-appearance: checkbox;
        -moz-appearance: checkbox;
        appearance: checkbox;
        margin-right: 5px;
    }
}
.errlog-box {
    width: 400px;
    margin: 0 auto;
    height: 300px;
    color: red;
    textarea {
        width: 100%;
        height: 100%;
    }
}
@media screen and (max-width: 768px) {
    .errlog-box {
        width: 100%;
    }
    .gongneng-list {
        width: 80%;
    }
    .img-list {
        padding-left: 0;
        padding-right: 0;
        .img-list-item {
            width: 100%;
        }
    }
    /*手机端隐藏背后*/
    .is-show {
        display: none;
    }
}
</style>
