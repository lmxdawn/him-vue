<template>
    <div style="position: fixed; user-select:none;">

        <div class="im-move" v-show="isMove"></div>

        <div class="im-box" :class="isShow ? 'im-box-show' : ''"
             :style="imBoxStyle"
             ref="imBox">
            <div class="im-box-move" @mousedown="moveImBox"></div>
            <header class="im-panel-header">
                <div class="im-header-user">
                    <div class="im-header-user-name">
                        {{ user.userName }}
                    </div>
                    <div class="im-header-user-remark">
                        {{ user.userRemark }}
                    </div>
                </div>
                <div class="im-header-setwin">
                    <a href="javascript:;">
                        <i class="im-icon im-icon-ring-open"></i>
                        <i class="im-icon im-icon-panel-down" @click="isShowClick"></i>
                    </a>
                </div>
            </header>

            <main class="im-panel-body">
                <div class="im-user-warning-box">
                    <div class="im-chat-warning" style="top: 0;" v-if="!webSocketIsOpen" v-html="webSocketWarningText"></div>
                </div>
                <div class="im-panel-searchbar">
                    <div class="im-panel-searchbar-inner">
                        <img src="./image/search.png" class="im-panel-search">
                        <input type="search" placeholder="搜索" class="im-panel-searchbar-core">
                    </div>
                </div>

                <ul class="im-panel-user-list">

                    <template v-for="(item) in userGroupList">
                        <li @click="handleChat(item)" :key="item.gId">
                            <img :src="item.avatar" alt="" class="im-user-avatar">
                            <div class="im-user-left">
                                <div class="im-user-info">
                                <span class="im-user-name" :title="item.userName">
                                    {{ item.userName }}
                                </span>
                                    <span class="im-user-remark" :title="item.lastContent">
                                    {{ item.lastContent }}
                                </span>
                                </div>
                                <div class="im-panel-badge" v-if="item.unMsgCount > 0">{{ item.unMsgCount }}</div>
                            </div>
                        </li>
                    </template>
                    <a class="im-list-more" @click="userGroupListPush">{{ userGroupListHandleMoreText }}</a>
                </ul>

            </main>

            <footer class="im-panel-footer">
                底部
            </footer>

        </div>

        <!--聊天界面-->
        <div class="im-chat-box" v-show="chatVisible" :style="{top: chatMsgListPositionX, left: chatMsgListPositionY}" ref="imChatBox">
            <header class="im-chat-header">
                <div class="im-chat-move" @mousedown="moveChatMsg"></div>
                <div class="im-chat-user">
                    <img :src="chatUser.avatar" alt="" class="im-chat-user-avatar">
                    <div class="im-chat-user-info">
                        <span class="im-chat-user-name">
                            {{ chatUser.userName }}
                        </span>
                        <span class="im-chat-user-remark">
                            {{ chatUser.userRemark }}
                        </span>
                    </div>
                </div>
                <div class="im-chat-setwin">
                    <i class="im-icon im-icon-close" @click="closeChat"></i>
                </div>
                <div class="im-chat-warning" v-if="!webSocketIsOpen" v-html="webSocketWarningText"></div>
            </header>

            <nav style="display: none;">
                <div id="emoji_[smile]"><img src="./emoji/smile.png" class="im-chat-msg-emoji" title="smile" alt="smile"></div>
                <div id="emoji_[laughing]"><img src="./emoji/laughing.png" class="im-chat-msg-emoji" title="laughing" alt="laughing"></div>
                <div id="emoji_[blush]"><img src="./emoji/blush.png" class="im-chat-msg-emoji" title="blush" alt="blush"></div>
                <div id="emoji_[heart_eyes]"><img src="./emoji/heart_eyes.png" class="im-chat-msg-emoji" title="heart_eyes" alt="heart_eyes"></div>
                <div id="emoji_[smirk]"><img src="./emoji/smirk.png" class="im-chat-msg-emoji" title="smirk" alt="smirk"></div>
                <div id="emoji_[flushed]"><img src="./emoji/flushed.png" class="im-chat-msg-emoji" title="flushed" alt="flushed"></div>
                <div id="emoji_[grin]"><img src="./emoji/grin.png" class="im-chat-msg-emoji" title="grin" alt="grin"></div>
                <div id="emoji_[kissing_smiling_eyes]"><img src="./emoji/kissing_smiling_eyes.png" class="im-chat-msg-emoji" title="kissing_smiling_eyes" alt="kissing_smiling_eyes"></div>
                <div id="emoji_[wink]"><img src="./emoji/wink.png" class="im-chat-msg-emoji" title="wink" alt="wink"></div>
                <div id="emoji_[kissing_closed_eyes]"><img src="./emoji/kissing_closed_eyes.png" class="im-chat-msg-emoji" title="kissing_closed_eyes" alt="kissing_closed_eyes"></div>
                <div id="emoji_[stuck_out_tongue_winking_eye]"><img src="./emoji/stuck_out_tongue_winking_eye.png" class="im-chat-msg-emoji" title="stuck_out_tongue_winking_eye" alt="stuck_out_tongue_winking_eye"></div>
                <div id="emoji_[sleeping]"><img src="./emoji/sleeping.png" class="im-chat-msg-emoji" title="sleeping" alt="sleeping"></div>
                <div id="emoji_[worried]"><img src="./emoji/worried.png" class="im-chat-msg-emoji" title="worried" alt="worried"></div>
                <div id="emoji_[sweat_smile]"><img src="./emoji/sweat_smile.png" class="im-chat-msg-emoji" title="sweat_smile" alt="sweat_smile"></div>
                <div id="emoji_[cold_sweat]"><img src="./emoji/cold_sweat.png" class="im-chat-msg-emoji" title="cold_sweat" alt="cold_sweat"></div>
                <div id="emoji_[joy]"><img src="./emoji/joy.png" class="im-chat-msg-emoji" title="joy" alt="joy"></div>
                <div id="emoji_[sob]"><img src="./emoji/sob.png" class="im-chat-msg-emoji" title="sob" alt="sob"></div>
                <div id="emoji_[angry]"><img src="./emoji/angry.png" class="im-chat-msg-emoji" title="angry" alt="angry"></div>
                <div id="emoji_[mask]"><img src="./emoji/mask.png" class="im-chat-msg-emoji" title="mask" alt="mask"></div>
                <div id="emoji_[scream]"><img src="./emoji/scream.png" class="im-chat-msg-emoji" title="scream" alt="scream"></div>
                <div id="emoji_[sunglasses]"><img src="./emoji/sunglasses.png" class="im-chat-msg-emoji" title="sunglasses" alt="sunglasses"></div>
                <div id="emoji_[thumbsup]"><img src="./emoji/thumbsup.png" class="im-chat-msg-emoji" title="thumbsup" alt="thumbsup"></div>
                <div id="emoji_[clap]"><img src="./emoji/clap.png" class="im-chat-msg-emoji" title="clap" alt="clap"></div>
                <div id="emoji_[ok_hand]"><img src="./emoji/ok_hand.png" class="im-chat-msg-emoji" title="ok_hand" alt="ok_hand"></div>
            </nav>

            <main class="im-chat-main" id="chatMsgList">
                <a class="im-list-more" @click="chatMsgListPush">{{ chatMsgListHandleMoreText }}</a>
                <template v-for="(item, index) in chatMsgList">
                    <div class="im-chat-msg-box" :class="item.isMine ? 'im-chat-msg-mine' : ''" :key="index">
                        <div class="im-chat-msg-user">
                            <img :src="item.avatar">
                            <div class="im-chat-msg-user-remark" v-if="item.isMine">
                                <i>{{ item.createTime }}</i><span>{{ item.userName }}</span>
                            </div>
                            <div class="im-chat-msg-user-remark" v-else>
                                <span>{{ item.userName }}</span><i>{{ item.createTime }}</i>
                            </div>
                        </div>
                        <div class="im-chat-msg-text" v-html="item.content"></div>
                    </div>
                </template>

            </main>

            <footer class="im-chat-footer">
                <div class="im-chat-feature-holder">
                    <div class="im-chat-feature-btn-box">
                        <div class="im-chat-feature-btn im-icon im-icon-emoji im-emoji-box" @click="handleEmoji">
                            <div class="im-emoji-holder" v-if="emojiVisible">
                                <template v-for="(item, index) in emojiList">
                                    <i class="im-emoji-control" :key="item.code" @click="selectEmoji(item)" :title="item.title" :style="{backgroundPosition: '0 ' + index * -25 + 'px'}"></i>
                                </template>
                            </div>
                        </div>
                        <div class="im-chat-feature-btn im-icon im-icon-photo"></div>
                        <div class="im-chat-feature-btn im-icon im-icon-upload"></div>
                    </div>
                </div>
                <div class="im-chat-text-holder">
                    <textarea placeholder="请输入" v-model="chatText" v-focus="chatTextFocus"></textarea>
                </div>
                <div class="im-chat-send-box">
                    <div class="im-chat-send">
                        <div class="im-chat-send-btn" @click="closeChat">关闭</div>
                        <div class="im-chat-send-btn" @click="sendBtnClick">发送</div>
                    </div>
                </div>
            </footer>
        </div>

    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "Im",
    props: {
        isShow: {
            type: Boolean,
            default: true
        },
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "100%"
        },
        top: String,
        left: String,
        bottom: String,
        right: String,
        webSocketUrl: String,
        // 是否自动初始化
        isAutoInit: {
            type: Boolean,
            default: true
        },
        // 尝试重新连接的最大次数
        webSocketReconnectMaxCount: {
            type: Number,
            default: 5
        },
        // WebSocket 编码
        webSocketEncode: {
            type: Function,
            default: function(data) {
                return JSON.stringify(data);
            }
        },
        // WebSocket 编码
        webSocketDecode: {
            type: Function,
            default: function(data) {
                return JSON.parse(data);
            }
        },
        // 用户信息
        userHandle: Function,
        // 用户列表
        userGroupListHandle: Function,
        // 加载消息列表
        chatMsgListHandle: Function,
        // 点击了关闭按钮
        downClick: Function
    },
    data() {
        return {
            isMove: false,
            clientWidth: null,
            clientHeight: null,
            user: {},
            imBoxPositionX: null,
            imBoxPositionY: null,
            userGroupList: [],
            userGroupMap: [],
            userGroupListHandleLoading: false,
            userGroupListHandleMoreText: "",
            chatVisible: false,
            emojiList: [
                {
                    title: "微笑",
                    code: "smile"
                },
                {
                    title: "发笑",
                    code: "laughing"
                },
                {
                    title: "害羞",
                    code: "blush"
                },
                {
                    title: "心眼",
                    code: "heart_eyes"
                },
                {
                    title: "傻笑",
                    code: "smirk"
                },
                {
                    title: "激动",
                    code: "flushed"
                },
                {
                    title: "咧嘴",
                    code: "grin"
                },
                {
                    title: "亲亲",
                    code: "kissing_smiling_eyes"
                },
                {
                    title: "眨眼",
                    code: "wink"
                },
                {
                    title: "害羞的亲亲",
                    code: "kissing_closed_eyes"
                },
                {
                    title: "调皮",
                    code: "stuck_out_tongue_winking_eye"
                },
                {
                    title: "晚安",
                    code: "sleeping"
                },
                {
                    title: "担心",
                    code: "worried"
                },
                {
                    title: "激动的微信",
                    code: "sweat_smile"
                },
                {
                    title: "冷汗",
                    code: "cold_sweat"
                },
                {
                    title: "笑哭",
                    code: "joy"
                },
                {
                    title: "哭泣",
                    code: "sob"
                },
                {
                    title: "愤怒",
                    code: "angry"
                },
                {
                    title: "生病",
                    code: "mask"
                },
                {
                    title: "尖叫",
                    code: "scream"
                },
                {
                    title: "墨镜",
                    code: "sunglasses"
                },
                {
                    title: "缩略图",
                    code: "thumbsup"
                },
                {
                    title: "鼓掌",
                    code: "clap"
                },
                {
                    title: "OK",
                    code: "ok_hand"
                }
            ],
            emojiVisible: false,
            chatUser: {},
            chatTextFocus: false,
            chatText: "",
            chatMsgListPositionX: null,
            chatMsgListPositionY: null,
            chatMsgList: [],
            chatMsgListScrollTop: true,
            chatMsgListHandleLoading: false,
            chatMsgListHandleMoreText: "",
            webSocket: null,
            webSocketReconnectCount: 0,
            webSocketWarningText:
                "连接断开,正在尝试重连 <i class='dotting'></i>",
            webSocketIsOpen: false
        };
    },
    methods: {
        // 初始化界面
        init() {
            // 初始化用户信息
            this.userInit();
            // 加载用户组列表
            this.userGroupListPush();
            // 初始化 WebSocket
            this.webSocketInit();
            // 打开通知, try 一下, 因为一些浏览器不兼容, 会报错
            try {
                var Notification =
                    window.Notification ||
                    window.mozNotification ||
                    window.webkitNotification;
                // 判断浏览器是否支持桌面通知
                if (Notification) {
                    let requestPermission = Notification.requestPermission();
                    if (requestPermission.then) {
                        requestPermission.then(function(result) {
                            // result可能是是granted, denied, 或default.
                            if (result) {
                                // console.log(result);
                            }
                        });
                    }
                }
            } catch (e) {
                // console.log(e);
            }
        },
        // 打开聊天界面
        handleChat(item) {
            this.chatVisible = true;
            this.chatUser = item;
            this.chatMsgList = [];
            // 追加
            this.chatMsgListPush(item);
        },
        // 追加历史消息列表
        chatMsgListPush(item) {
            if (this.chatMsgListHandleLoading) {
                return false;
            }
            // 不是第一次加载时
            if (this.chatMsgList.length !== 0) {
                this.chatMsgListScrollTop = false;
            }
            if (this.chatMsgListHandle) {
                const chatMsgList = this.chatMsgListHandle(item);
                if (chatMsgList && chatMsgList.then) {
                    this.chatMsgListHandleLoading = true;
                    this.chatMsgListHandleMoreText = "加载中";
                    chatMsgList
                        .then(list => {
                            this.chatMsgListHandleLoading = false;
                            if (list.length === 0) {
                                this.chatMsgListHandleMoreText = "没有更多了";
                                return false;
                            }
                            for (let i in list) {
                                if (!list.hasOwnProperty(i)) {
                                    continue;
                                }
                                let data = list[i];
                                data.content = this.createContent(
                                    list[i].content
                                );
                                data.createTime = this.formatDate(
                                    data.createTime
                                );
                                this.chatMsgList.unshift(data);
                            }
                            this.chatMsgListHandleMoreText = "加载更多消息";
                        })
                        .catch(() => {
                            this.chatMsgListHandleLoading = false;
                            this.chatMsgListHandleMoreText = "";
                        });
                } else if (typeof chatMsgList === Array) {
                    this.chatMsgListHandleLoading = false;
                    if (chatMsgList.length === 0) {
                        this.chatMsgListHandleMoreText = "没有更多了";
                        return false;
                    }
                    this.chatMsgList = this.chatMsgList.concat(chatMsgList);
                    this.chatMsgListHandleMoreText = "加载更多消息";
                }
            }
        },
        isShowClick() {
            if (this.downClick && typeof this.downClick === "function") {
                this.downClick();
            }
        },
        // 关闭
        closeChat() {
            this.chatVisible = false;
        },
        // emoji 表情
        handleEmoji() {
            this.emojiVisible = !this.emojiVisible;
        },
        selectEmoji(item) {
            this.chatText += ":emoji[" + item.code + "]";
            this.chatTextFocus = true;
        },
        userInit() {
            if (this.userHandle) {
                const user = this.userHandle();
                if (user && user.then) {
                    user.then(user => {
                        if (!user.userId) {
                            return false;
                        }
                        this.user = user;
                    }).catch(() => {});
                } else if (typeof user === Object) {
                    if (!user.userId) {
                        return false;
                    }
                    this.user = user;
                }
            }
        },
        // 追加用户组列表
        userGroupListPush() {
            if (this.userGroupListHandleLoading) {
                return false;
            }
            if (this.userGroupListHandle) {
                const userGroupList = this.userGroupListHandle();
                if (userGroupList && userGroupList.then) {
                    this.userGroupListHandleLoading = true;
                    this.userGroupListHandleMoreText = "加载中";
                    userGroupList
                        .then(list => {
                            this.userGroupListHandleLoading = false;
                            if (list.length === 0) {
                                this.userGroupListHandleMoreText = "没有更多了";
                                return false;
                            }
                            let gidList = [];
                            let userGroupListFilter = [];
                            const _this = this;
                            list.forEach(item => {
                                if (_this.userGroupMap.indexOf(item.gid) < 0) {
                                    gidList.push(item.gid);
                                    userGroupListFilter.push(item);
                                }
                            });
                            // console.log(_this.userGroupMap);
                            if (gidList.length > 0) {
                                this.userGroupMap = this.userGroupMap.concat(
                                    gidList
                                );
                            }
                            if (userGroupListFilter.length > 0) {
                                this.userGroupList = this.userGroupList.concat(
                                    userGroupListFilter
                                );
                            }
                            this.userGroupListHandleMoreText = "加载更多";
                        })
                        .catch(() => {
                            this.userGroupListHandleLoading = false;
                            this.userGroupListHandleMoreText = "";
                        });
                } else if (typeof userGroupList === Array) {
                    this.userGroupListHandleLoading = false;
                    if (userGroupList.length === 0) {
                        this.userGroupListHandleMoreText = "没有更多了";
                        return false;
                    }
                    this.userGroupList = this.userGroupList.concat(
                        userGroupList
                    );
                    this.userGroupListHandleMoreText = "加载更多";
                }
            }
        },
        // 初始化 WebSocket
        webSocketInit() {
            this.webSocket = new WebSocket(this.webSocketUrl);
            this.webSocket.onopen = this.webSocketHandleOpen;
            this.webSocket.onerror = this.webSocketHandleError;
            this.webSocket.onmessage = this.webSocketHandleMessage;
            this.webSocket.onclose = this.webSocketHandleClose;
        },
        // WebSocket 重连
        webSocketReconnect() {
            if (this.webSocketIsOpen) {
                return false;
            }
            this.webSocketReconnectCount += 1;
            // 判断是否到了最大重连次数
            if (
                this.webSocketReconnectCount >= this.webSocketReconnectMaxCount
            ) {
                this.webSocketWarningText = "重连次数超限";
                return false;
            }
            // 初始化
            this.webSocketInit();

            const _this = this;
            // 每过 5 秒尝试一次，检查是否连接成功，直到超过最大重连次数
            setTimeout(function() {
                _this.webSocketReconnect();
            }, 5000);
        },
        // WebSocket 打开成功后
        webSocketHandleOpen() {
            this.webSocketIsOpen = true;
            // 清空重连的次数
            this.webSocketReconnectCount = 0;
        },
        // WebSocket 关闭
        webSocketHandleClose() {
            this.webSocketIsOpen = false;
            if (this.webSocketReconnectCount === 0) {
                // 第一次直接尝试重连
                this.webSocketReconnect();
            }
        },
        // WebSocket 发生错误时
        webSocketHandleError() {
            this.webSocketIsOpen = false;
        },
        // 接收到消息时
        webSocketHandleMessage(e) {
            let data = this.webSocketDecode(e.data);
            if (data.userId === this.chatUser.userId) {
                this.receiveMessage(data);
            } else {
                this.notification(data);
            }
        },
        // 发送消息
        webSocketSend(data) {
            this.webSocket.send(this.webSocketEncode(data));
        },
        // 发送按钮点击
        sendBtnClick() {
            // 未连接
            if (this.webSocketIsOpen === false) {
                return false;
            }
            if (this.chatText.replace(/(^s*)|(s*$)/g, "").length === 0) {
                return false;
            }
            // let date = new Date();
            const data = {
                userId: this.user.userId,
                userName: this.user.userName,
                avatar: this.user.avatar,
                content: this.chatText,
                createTime: Date.parse(new Date())
            };
            this.receiveMessage(data);
            this.chatText = "";
            // 发送到服务端
            this.webSocketSend(data);
            // 自动回复消息
            let tempData = {
                userId: 2,
                userName: "接收",
                avatar:
                    "https://avatars1.githubusercontent.com/u/21293193?s=460&v=4",
                content: "你没发错吧？:emoji[joy]",
                createTime: Date.parse(new Date())
            };
            const _this = this;
            setTimeout(function() {
                _this.receiveMessage(tempData);
            }, 1000);
        },
        receiveMessage(obj) {
            // 是否自动滚动到底部
            this.chatMsgListScrollTop = true;
            const data = JSON.parse(JSON.stringify(obj));
            data.isMine = this.user.userId === data.userId;
            data.createTime = this.formatDate(data.createTime);
            data.content = this.createContent(data.content);
            this.chatMsgList.push(data);
        },
        createContent(text) {
            if (typeof text === "string") {
                text = this.htmlSpecialChars(text);
                let html = text
                /* eslint-disable */
                    .replace(/:emoji\[([^\s\[\]]+?)\]/g, function(emoji) {
                        // 转义表情
                        var emojiId = "emoji_" + emoji.replace(/^:emoji/g, "");
                        return document.getElementById(emojiId).innerHTML + "&nbsp;";
                    })
                    .replace(/\n/g, "<br>");
                return html;
            }
            return text;
        },
        formatDate(time) {
            let date = new Date();
            date.setTime(time);
            let hour = date.getHours();
            hour = hour < 10 ? "0" + hour : hour;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            return hour + ":" + minute;
        },
        htmlSpecialChars(str) {
            str = str.replace(/&/g, "&amp;");
            str = str.replace(/</g, "&lt;");
            str = str.replace(/>/g, "&gt;");
            str = str.replace(/"/g, "&quot;");
            str = str.replace(/'/g, "&#039;");
            return str;
        },
        notification(item) {

            let isUser = false;
            this.userGroupList.forEach(function (user) {
                 if (user.gid === item.gid) {
                     isUser = true;
                     user.lastContent = item.content;
                     user.unMsgCount += item.unMsgCount > 0 ? parseInt(item.unMsgCount) : 1;
                 }
            });
            if (!isUser) {
                let user = {
                    gid: item.gid,
                    userId: item.userId,
                    userName: item.userName,
                    avatar: item.avatar,
                    lastContent: item.content,
                    unMsgCount: 1
                };
                this.userGroupList.unshift(user);
            }

            var Notification =
                window.Notification ||
                window.mozNotification ||
                window.webkitNotification;
            // 判断浏览器是否支持桌面通知
            if (Notification && Notification.permission === "granted") {
                var notification = new Notification(item.userName, {
                    body: item.content,
                    icon: item.avatar
                });
                const _this = this;
                notification.onclick = function() {
                    _this.handleChat(item);
                    notification.close();
                };
            }
        },
        // 主面板的移动
        moveImBox(e) {
            // let ele = e.target;
            //算出鼠标相对元素的位置
            const _this = this;
            // let disX = e.clientX - ele.offsetLeft;
            // let disY = e.clientY - ele.offsetTop;
            let disX = e.clientX - this.$refs.imBox.offsetLeft;
            let disY = e.clientY - this.$refs.imBox.offsetTop;
            _this.isMove = true;
            document.onmousemove = (e)=>{
                //鼠标按下并移动的事件
                //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;
                let top = e.clientY - disY;

                //绑定元素位置到positionX和positionY上面
                _this.imBoxPositionY = left + 'px';
                _this.imBoxPositionX = top + 'px';

            };
            document.onmouseup = (e) => {
                _this.isMove = false;
                document.onmousemove = null;
                document.onmouseup = null;
            };
        },
        // 聊天界面的移动
        moveChatMsg(e) {
            // let ele = e.target;
            //算出鼠标相对元素的位置
            const _this = this;
            // let disX = e.clientX - ele.offsetLeft;
            // let disY = e.clientY - ele.offsetTop;
            let disX = e.clientX - this.$refs.imChatBox.offsetLeft;
            let disY = e.clientY - this.$refs.imChatBox.offsetTop;
            let disW = this.$refs.imChatBox.clientWidth;
            let disH = this.$refs.imChatBox.clientHeight;
            _this.isMove = true;
            document.onmousemove = (e)=>{
                // 鼠标按下并移动的事件
                // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
                let left = e.clientX - disX;
                let top = e.clientY - disY;
                // 判断是否到了临界值, 因为用了 transform: translate(-50%, -50%); 所以要除 2
                if ((top > (disH / 2)) && ((_this.clientHeight - top) > (disH / 2))) {
                    _this.chatMsgListPositionX = top + 'px';
                }
                if ((left > (disW / 2)) && ((_this.clientWidth - left) > (disW / 2))) {
                    _this.chatMsgListPositionY = left + 'px';
                }
            };
            document.onmouseup = (e) => {
                _this.isMove = false;
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    },
    directives: {
        focus: {
            update(el, { value }) {
                if (value) {
                    el.focus();
                }
            }
        }
    },
    mounted() {
        if (this.isAutoInit) {
            // document.body.appendChild(this.$el);
        }
        // 获取浏览器可视区域高度
        this.clientHeight = `${document.documentElement.clientHeight}`;
        this.clientWidth = `${document.documentElement.clientWidth}`;
        //console.log(self.clientHeight);
        window.onresize = function temp() {
            this.clientHeight = `${document.documentElement.clientHeight}`;
            this.clientWidth = `${document.documentElement.clientWidth}`;
        };
    },
    created() {
        // 判断是否自动初始化
        if (this.isAutoInit) {
            this.init();
            let data = {
                gid: 1,
                userId: 1,
                userName: "是是是",
                avatar: "https://avatars1.githubusercontent.com/u/21293193?s=460&v=4",
                content: "反反复复付付付付付"
            };
            this.notification(data);
            const _this = this;
            setTimeout(function () {
                data.content = "vvvvvvvv";
                _this.notification(data);
            }, 1500);

            setTimeout(function () {
                data.gid = 2;
                data.userId = 2;
                data.userName = "cccvvvv";
                data.content = "vvvvvvvv";
                _this.notification(data);
            }, 2000);
        }
    },
    computed: {
        imBoxStyle () {
            let data = {};
            if (this.width) {
                data.width = this.width;
            }
            if (this.height) {
                data.height = this.height;
            }
            if (this.top) {
                data.top = this.top;
            }
            if (this.left) {
                data.left = this.left;
            }
            if (this.bottom) {
                data.bottom = this.bottom;
            }
            if (this.right) {
                data.right = this.right;
            }
            if (this.imBoxPositionX && this.isShow) {
                data.top = this.imBoxPositionX;
            }
            if (this.imBoxPositionY && this.isShow) {
                data.left = this.imBoxPositionY;
            }
            return data;
        }
    },
    watch: {
        chatMsgList() {
            const _this = this;
            this.$nextTick(function(){
                let chatMsgList = document.getElementById("chatMsgList");
                if (_this.chatMsgListScrollTop) {
                    chatMsgList.scrollTop = chatMsgList.scrollHeight;
                }
            });
        }
    }
};
</script>

<style type="text/scss" lang="scss">
body,
html {
    height: 100%;
    font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB",
        "Microsoft YaHei", sans-serif;
    font-size: 14px;
}
*,
::before,
::after {
    /*选择所有标签*/
    margin: 0;
    padding: 0;
    /*清除移动端默认的点击高亮效果*/
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    /*设置所有的元素都是以边框开始计算宽度的 百分比*/
    box-sizing: border-box;
}
a img {
    border: 0;
}
a {
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
}
ul,
ol {
    list-style: none;
}

input {
    border: none;
    outline: none;
    /*清除移动端默认的表单样式*/
    -webkit-appearance: none;
}
//清除浮动
@mixin clearfix() {
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
}
//截断文本  元素必须是 block 或 inline-block 级。
@mixin text-overflow() {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.im-box {
    position: fixed;
    width: 100%;
    height: 100%;
    /*border: 1px solid rgba(0, 0, 0, 0.05);*/
    /*border-radius: 5px;*/
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
    transition: transform .3s ease;
    transform: translate3d(0,100%,0);
    background-image: url("../../assets/image/bg-1.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #f6f6f6;
    border: 1px solid rgba(0, 0, 0, 0.05);
}
.im-move {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: move;
    opacity: 0;
    filter: alpha(opacity=0);
    background-color: #fff;
    z-index: 2147483647;
}
.im-box-show {
    transform: translateZ(0);
}
.im-icon {
    cursor: pointer;
    background-size: 44px auto;
    background-image: url(image/im-icon.png);
    background-repeat: no-repeat;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2) {
    .im-icon {
        background-image: url(image/im-icon@2x.png);
    }
}
.im-icon-ring-open {
    background-position: -22px -89px;
}
.im-icon-panel-down {
    background-position: -22px -66px;
}
.im-icon-close {
    background-position: 0 -130px;
}
.im-icon-emoji {
    background-position: 0 0;
}
.im-icon-photo {
    background-position: 0 -22px;
}
.im-icon-upload {
    background-position: 0 -440px;
}
.im-icon-ring-open,
.im-icon-close,
.im-icon-emoji,
.im-icon-photo,
.im-icon-upload,
.im-icon-panel-down {
    display: inline-block;
    width: 22px;
    height: 22px;
}
.im-box-move {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 10px;
    cursor: move;
}
.im-panel-header {
    /*background-color: #6ed0ce;*/
    background-color: rgba(245, 245, 245, 0.9);
    color: #fff;
    height: 80px;
    padding: 7px 10px;
    zoom: 1;
    font-size: 16px;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06), 0 2px 0 0 rgba(0, 0, 0, 0.01);
    overflow: hidden;
    .im-header-user {
        float: left;
        padding-left: 8px;
        margin-top: 12px;
        .im-header-user-name {
            display: inline-block;
            width: 175px;
            margin-top: 5px;
            @include text-overflow;
        }
        .im-header-user-remark {
            width: 175px;
            margin-top: 1px;
            font-size: 13px;
            @include text-overflow;
        }
    }
    .im-header-setwin {
        float: right;
    }
}
.im-panel-body {
    position: absolute;
    top: 80px;
    bottom: 30px;
    right: 0;
    left: 0;
    width: 100%;
    background-color: #fcfcfc;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(255, 255, 255, 0.9);
}
.im-panel-searchbar {
    position: relative;
    background-color: #f8f8f8;
    box-sizing: border-box;
    padding: 5px 7px;
    z-index: 1;
}
.im-panel-searchbar-inner {
    position: relative;
    height: 28px;
    padding-left: 25px;
    background-color: #fff;
    border-radius: 3px;
}
.im-panel-search {
    position: absolute;
    left: 10px;
    top: 8px;
    width: 13px;
    vertical-align: middle;
    line-height: 28px;
}
.im-panel-searchbar-core {
    appearance: none;
    border: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: 0;
    outline-offset: -2px;
    vertical-align: middle;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.im-panel-user-list {
    li {
        position: relative;
        /*padding: 0 0 0 15px;*/
        padding-left: 12px;
        font-size: 0;
        cursor: pointer;
        display: flex;
        overflow: hidden;
        align-items: center;
    }
    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    .im-user-left {
        position: relative;
        padding: 12px 0;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    }
    .im-user-avatar {
        display: inline-block;
        width: 42px;
        height: 42px;
        border-radius: 21px;
        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
        vertical-align: middle;
    }
    .im-user-info {
        display: inline-block;
        height: 100%;
        margin-left: 10px;
        vertical-align: middle;
    }
    .im-user-name {
        display: inline-block;
        width: 100%;
        /*margin-top: 5px;*/
        font-size: 15px;
        @include text-overflow;
    }
    .im-user-remark {
        display: inline-block;
        width: 80px;
        /*margin-top: 7px;*/
        font-size: 12px;
        color: #999;
        @include text-overflow;
    }
    .im-panel-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #f56c6c;
        border-radius: 10px;
        color: #fff;
        display: inline-block;
        font-size: 12px;
        height: 19px;
        line-height: 19px;
        padding: 0 5px;
        text-align: center;
        white-space: nowrap;
        border: 1px solid #fff;
    }
}
.im-list-more {
    display: block;
    width: 100%;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 12px;
    color: #777;
    cursor: pointer;
}
.im-panel-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #f6f6f6;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
}
.im-chat-box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 522px;
    z-index: 100;
    border-radius: 2px;
    border: 1px solid #D9D9D9;
    background-image: url("../../assets/image/bg-5.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #fbfbfb;
}
.im-chat-move {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 10px;
    cursor: move;
}
.im-chat-header {
    position: relative;
    height: 80px;
    padding: 18px 12px 12px;
    /*background-color: #ececec;*/
    background-color: rgba(236, 236, 236, 0.9);
    color: #444;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06), 0 2px 0 0 rgba(0, 0, 0, 0.01);
}
.im-chat-warning {
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    height: 25px;
    line-height: 25px;
    color: #e6a26d;
    font-size: 12px;
    /*background-color: #fdf6eb;*/
    background-color: rgba(253, 246, 235, 0.9);
    text-align: center;
    z-index: 3;
    opacity: 0.8;
}
.im-user-warning-box {
    height: 25px;
    background-color: rgba(0, 0, 0, 0);
}
.dotting {
    position: absolute;
    top: 12px;
    display: inline-block;
    width: 10px;
    min-height: 2px;
    padding-right: 2px;
    border-left: 2px solid currentColor; border-right: 2px solid currentColor;
    background-color: currentColor; background-clip: content-box;
    box-sizing: border-box;
    animation: dotting 2s infinite step-start both;
    *zoom: expression(this.innerHTML = '...'); /* IE7 */
}
.dotting:before { content: '...'; } /* IE8 */
.dotting::before { content: ''; }
:root .dotting { margin-left: 2px; padding-left: 2px; } /* IE9+ */

@keyframes dotting {
    25% { border-color: transparent; background-color: transparent; }          /* 0个点 */
    50% { border-right-color: transparent; background-color: transparent; }    /* 1个点 */
    75% { border-right-color: transparent; }                                   /* 2个点 */
}
.im-chat-user {
    cursor: default;
}
.im-chat-user-avatar {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
    vertical-align: middle;
}
.im-chat-user-info {
    display: inline-block;
    height: 100%;
    margin-left: 10px;
    vertical-align: middle;
}
.im-chat-user-name {
    display: inline-block;
    width: 100%;
    /*margin-top: 5px;*/
    font-size: 14px;
    @include text-overflow;
}
.im-chat-user-remark {
    width: 100%;
    /*margin-top: 7px;*/
    font-size: 13px;
    color: #999;
    @include text-overflow;
}
.im-chat-setwin {
    position: absolute;
    right: 10px;
    top: 10px;
}
.im-chat-main {
    position: absolute;
    top: 80px;
    bottom: 140px;
    width: 100%;
    padding: 15px 15px 5px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(255, 255, 255, 0.9);
}
.im-chat-msg-box {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
    padding-left: 60px;
    min-height: 68px;
    font-size: 0;
    overflow: hidden;
}
.im-chat-msg-emoji {
    width: 20px;
    height: 20px;
    vertical-align: middle;
}
.im-chat-msg-mine {
    text-align: right;
    padding-left: 0;
    padding-right: 60px;
}
.im-chat-msg-user {
    display: inline-block;
    position: absolute;
    left: 3px;
    font-size: 14px;
    vertical-align: top;
    width: 100%;
    img {
        width: 40px;
        height: 40px;
        border-radius: 100%;
    }
}
.im-chat-msg-user-remark {
    position: absolute;
    left: 60px;
    top: -2px;
    line-height: 24px;
    font-size: 12px;
    color: #999;
    text-align: left;
    span {
        display: inline-block;
        vertical-align: middle;
        max-width: 170px;
        @include text-overflow();
    }
    i {
        display: inline-block;
        vertical-align: middle;
        padding-left: 15px;
        font-style: normal;
    }
}
.im-chat-msg-text {
    position: relative;
    display: inline-block;
    line-height: 22px;
    margin-top: 25px;
    padding: 8px 15px;
    background-color: #e2e2e2;
    border-radius: 3px;
    color: #333;
    word-break: break-all;
    font-size: 14px;
    img {
        max-width: 100%;
        vertical-align: middle;
    }
}
.im-chat-msg-text::after {
    content: "";
    position: absolute;
    left: -10px;
    top: 13px;
    width: 0;
    height: 0;
    border-style: solid dashed dashed;
    border-color: #e2e2e2 transparent transparent;
    overflow: hidden;
    border-width: 10px;
}
.im-chat-msg-mine .im-chat-msg-text::after {
    left: auto;
    right: -10px;
    border-top-color: #5fb878;
}
.im-chat-msg-mine {
    .im-chat-msg-user {
        left: auto;
        right: 3px;
    }
    .im-chat-msg-user-remark {
        left: auto;
        right: 60px;
        text-align: right;
        i {
            padding-left: 0;
            padding-right: 15px;
        }
    }
    .im-chat-msg-text {
        margin-left: 0;
        text-align: left;
        background-color: #5fb878;
        /*background-color: rgba(255, 255, 255, 0.9);*/
        color: #fff;
    }
}
.im-chat-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 140px;
    /*background-color: #fff;*/
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 0 -1px 0 0 rgba(0, 0, 0, 0.04), 0 -2px 0 0 rgba(0, 0, 0, 0.01);
}
.im-chat-feature-holder {
    /*height: 40px;*/
}
.im-chat-feature-btn-box {
    padding-top: 7px;
    padding-bottom: 3px;
}
.im-emoji-box {
    position: relative;
}
.im-emoji-holder {
    position: absolute;
    /*display: none;*/
    top: -130px;
    left: -10px;
    right: 0;
    z-index: 101;
    width: 320px;
    height: 120px;
    padding: 10px;
    border: 1px solid #d9d9d9;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}
.im-emoji-control {
    background-image: url(image/emoji.png);
    background-size: 25px auto;
    background-repeat: no-repeat;
    display: block;
    float: left;
    width: 25px;
    height: 25px;
    margin-top: 6px;
    margin-left: 7px;
    cursor: pointer;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2) {
    .im-emoji-control {
        background-image: url(image/emoji@2x.png);
    }
}
.im-chat-feature-btn {
    cursor: pointer;
    margin-left: 12px;
}
.im-chat-text-holder {
    textarea {
        display: block;
        width: 100%;
        height: 65px;
        padding: 8px 10px;
        overflow-x: hidden;
        overflow-y: auto;
        resize: none;
        outline: 0;
        background: 0 0;
        border: 0;
        word-break: break-all;
        font-size: 13px;
        line-height: 17px;
        -webkit-appearance: none;
    }
}
.im-chat-send-box {
    position: relative;
    height: 45px;
}
.im-chat-send {
    position: absolute;
    right: 15px;
    top: 3px;
    height: 32px;
    line-height: 32px;
    background: 0 0;
}
.im-chat-send-btn {
    background: 0 0;
    cursor: pointer;
    display: inline-block;
    vertical-align: top;
    font-size: 14px;
    line-height: 28px;
    margin-left: 5px;
    padding: 0 20px;
    background-color: #5fb878;
    color: #fff;
    border-radius: 3px;
}
@media screen and (max-width: 768px) {
    .im-box {
        width: 100% !important;
        height: 100% !important;
    }
    .im-chat-box {
        width: 100%;
        height: 100%;
    }
}
</style>
