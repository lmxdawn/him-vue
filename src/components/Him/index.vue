<template>
    <div style="position: fixed; user-select:none;">

        <div class="im-move" v-show="isMove"></div>

        <div class="im-box" :class="isShow ? 'im-box-show' : ''"
             :style="imBoxStyle"
             ref="imBox">
            <div class="im-box-move" @mousedown="moveImBox"></div>
            
            <div class="user-qrcode-box" v-if="userQRCodeVisible" @click="userQRCodeCloseHandle">
                <div class="user-qrcode">
                    <img :src="userQRCodeImg" alt="" style="display: block;" @click.stop="downloadImg(userQRCodeImg)">
                    <div class="user-qrcode-download" @click.stop="downloadImg(userQRCodeImg)">保存二维码</div>
                </div>
            </div>

            <div class="user-login-box" v-if="!user.uid" @click="isShowClick">
                <div class="user-login-list">
                   <a class="user-login-button" href="javascript:" @click="touristLogin(2)">
                       <img src="./image/user-2-default.png" alt="女游客登录">
                       <span>女游客</span>
                   </a>
                   <a class="user-login-button" href="javascript:" @click="touristLogin(2)">
                       <img src="./image/user-1-default.png" alt="男游客登录">
                       <span>男游客</span>
                   </a>
                    <a class="user-login-button" :href="qqLoginUrl">
                        <img src="./image/login-qq.png" alt="QQ登录">
                        <span>QQ登录</span>
                    </a>
                </div>
            </div>
            
            <header class="im-panel-header">
                <div class="im-header-user">
                    <div class="im-header-user-name">
                        {{ user.name }}
                    </div>
                    <div class="im-header-user-remark">
                        {{ user.remark }}
                    </div>
                </div>
                <div class="im-header-setwin">
                    <div class="im-header-out-login" @click="userOut" title="登出">
                        <img src="./image/out-login.png" alt="登出" style="width: 100%; height: 100%;">
                    </div>
                    <div class="im-header-qrcode-box" @click="userQRCodeClick">
                        <img src="./image/qrcode.png" alt="二维码" title="二维码" style="width: 100%; height: 100%;">
                    </div>
                    <i class="im-icon im-icon-ring-open"></i>
                    <i class="im-icon im-icon-panel-down" @click="isShowClick"></i>
                </div>
            </header>

            <nav class="im-tab-nav">
                <ul class="im-tab">
                    <li v-for="item in imTabList"
                        :key="item.index"
                        class="im-tab-item"
                        :class="{'im-tab-item-selected': item.isSelected}"
                        @click="imTabSelectedHandle(item.index)">
                        {{ item.title }}
                        <div class="im-tab-badge"
                             v-if="item.index === 1 && user.profile.friendAskCount > 0">
                            new
                        </div>
                    </li>
                </ul>
            </nav>

            <!-- 历史消息-->
            <main class="im-panel-body" v-if="imTabSelectedIndex === 0">
                <div class="im-user-warning-box">
                    <div class="im-chat-warning" style="top: 0;" v-if="!webSocketIsOpen" v-html="webSocketWarningText"></div>
                </div>
                <div class="im-panel-searchbar">
                    <div class="im-panel-searchbar-inner">
                        <img src="./image/search.png" class="im-panel-search">
                        <input type="search" placeholder="搜索" class="im-panel-searchbar-core">
                    </div>
                </div>

                <div class="im-list-empty" v-if="Object.keys(historyMsgList).length === 0">
                    暂无数据
                </div>

                <ul class="im-panel-user-list">

                    <template v-for="(item) in sortHistoryMsgList">
                        <li @click="handleChat(item)" :key="item.type + item.id">
                            <div class="im-user-left">
                                <img :src="item.avatar | getDefaultAvatar" alt="" class="im-user-avatar">
                            </div>
                            <div class="im-user-right">
                                <div class="im-user-info">
                                <span class="im-user-name" :title="item.name">
                                    {{ item.name }}
                                </span>
                                    <span class="im-user-remark" :title="item.lastMsgContent">
                                    {{ item.lastMsgContent }}
                                </span>
                                </div>
                            </div>
                            <div class="im-panel-badge" v-if="item.unMsgCount > 0">{{ item.unMsgCount > 99 ? '99+' : item.unMsgCount }}</div>
                        </li>
                    </template>
                </ul>

            </main>

            <!-- 朋友-->
            <main class="im-panel-body"  v-if="imTabSelectedIndex === 1">

                <div class="im-new-friend" @click="newFriendClick">
                    <span>{{ newFriendVisible ? '返回' : '新的朋友'}}</span>
                    <span style="color: red;" v-if="!newFriendVisible && user.profile.friendAskCount > 0">
                        {{user.profile.friendAskCount}}
                    </span>
                </div>

                <div class="im-list-empty"
                     v-if="(newFriendVisible && newFriendList.length === 0)
                            || (!newFriendVisible && Object.keys(userFriendList).length === 0)">
                    暂无数据
                </div>

                <ul class="im-panel-user-list" v-if="!newFriendVisible">

                    <template v-for="(item) in userFriendList">
                        <li @click="friendClick(item)" :key="item.friendUid">
                            <div class="im-user-left">
                                <img :src="item.user.avatar | getDefaultAvatar" alt="" class="im-user-avatar">
                            </div>
                            <div class="im-user-right">
                                <div class="im-user-info">
                                <span class="im-user-name" :title="item.remark ? item.remark : item.user.name">
                                    {{ item.remark ? item.remark : item.user.name }}
                                </span>
                                    <span class="im-user-remark" :title="item.user.remark">
                                    {{ item.user.remark }}
                                </span>
                                </div>
                            </div>
                        </li>
                    </template>
                </ul>

                <div v-if="newFriendVisible">
                    <ul class="im-panel-user-list">

                        <template v-for="item in newFriendList">
                            <li :key="item.id">
                                <div class="im-user-left">
                                    <img :src="item.user && item.user.avatar | getDefaultAvatar" alt="" class="im-user-avatar">
                                </div>
                                <div class="im-user-right">
                                    <div class="im-user-info">
                                <span class="im-user-name" :title="item.user && item.user.name">
                                    {{ item.user && item.user.name }}
                                </span>
                                        <span class="im-user-remark" :title="item.remark">
                                    {{ item.remark }}
                                </span>
                                    </div>
                                </div>
                                <div class="im-user-button" :style="{color: item.status !== 0 ? '#ccc' : ''}">
                                    <span @click="askAck(item, 1)">{{ item.status | askAckStatusFilterName }}</span>
                                    <span v-if="item.status === 0" @click="askAck(item, 2)" style="margin-left: 3px;">拒绝</span>
                                </div>
                            </li>
                        </template>
                    </ul>
                    <div v-if="newFriendList.length !== 0" class="im-new-friend-list-more" @click="getUserFriendAskList">
                        {{ newFriendLoadMore ? '加载更多' : '没有更多了'}}
                    </div>
                </div>

            </main>

            <!-- 群组-->
            <main class="im-panel-body"  v-if="imTabSelectedIndex === 2">

                <div class="im-group-create">
                    <input type="text" v-show="createGroupVisible" v-model="createGroupName" placeholder="输入群昵称" style="">
                    <span class="im-group-create-button" @click="createGroup">{{ createGroupVisible ? '提交' : '新建'}}</span>
                    <span class="im-group-create-button"  v-show="createGroupVisible" @click="createGroupClose">取消</span>
                </div>

                <div class="im-list-empty" v-if="Object.keys(userGroupList).length === 0">
                    暂无数据
                </div>

                <ul class="im-panel-user-list">

                    <template v-for="(item) in userGroupList">
                        <li @click="groupClick(item)" :key="item.groupId">
                            <div class="im-user-left">
                                <img :src="item.group.avatar | getDefaultAvatar" alt="" class="im-user-avatar">
                            </div>
                            <div class="im-user-right">
                                <div class="im-user-info">
                                <span class="im-user-name" :title="item.group.name">
                                    {{ item.group.name }}
                                </span>
                                    <span class="im-user-remark" :title="item.group.remark">
                                    {{ item.group.remark }}
                                </span>
                                </div>
                            </div>
                        </li>
                    </template>
                </ul>

            </main>

            <footer class="im-panel-footer">
                <div class="im-panel-theme" @click="themeVisible = !themeVisible">
                    <img src="./image/theme.png" alt="更换主题">
                </div>
                <div class="im-panel-theme-list" v-if="themeVisible">
                    <div class="im-panel-theme-item" v-for="(item, index) in themeList" :key="index" @click="changeTheme(index, true)">
                        <div v-if="item['background-image']" :style="item"></div>
                        <div v-else></div>
                    </div>
                </div>
            </footer>

        </div>

        <!--聊天界面-->
        <div class="im-chat-box" v-show="chatVisible" :style="imChatBoxStyle" ref="imChatBox">

            <div class="group-qrcode-box" v-if="groupQRCodeVisible" @click="groupQRCodeCloseHandle">
                <div class="group-qrcode">
                    <img :src="groupQRCodeImg" alt="" style="display: block;" @click.stop="downloadImg(groupQRCodeImg)">
                    <div class="group-qrcode-download" @click.stop="downloadImg(groupQRCodeImg)">保存二维码</div>
                </div>
            </div>

            <div class="user-login-box" v-if="!user.uid">
                <div class="user-login-list">
                    <a class="user-login-button" href="javascript:" @click="touristLogin(2)">
                        <img src="./image/user-2-default.png" alt="女游客登录">
                        <span>女游客</span>
                    </a>
                    <a class="user-login-button" href="javascript:" @click="touristLogin(2)">
                        <img src="./image/user-1-default.png" alt="男游客登录">
                        <span>男游客</span>
                    </a>
                    <a class="user-login-button" :href="qqLoginUrl">
                        <img src="./image/login-qq.png" alt="QQ登录">
                        <span>QQ登录</span>
                    </a>
                </div>
            </div>

            <header class="im-chat-header">
                <div class="im-chat-move" @mousedown="moveChatMsg"></div>
                <div class="im-chat-user">
                    <img :src="chatUser.avatar | getDefaultAvatar" alt="" class="im-chat-user-avatar">
                    <div class="im-chat-user-info">
                        <span class="im-chat-user-name">
                            {{ chatUser.name }}
                        </span>
                        <span class="im-chat-user-list-button" v-if="Object.keys(chatMsgGroupUserList).length > 0">
                            {{Object.keys(chatMsgGroupUserList).length}}人
                        </span>
                        <i class="im-icon im-icon-panel-down" v-if="chatUser.type === 2" @click="isShowGroupUserListClick"></i>
                        <span class="im-chat-user-remark">
                            {{ chatUser.remark }}
                        </span>
                    </div>
                </div>
                <div class="im-chat-setwin">
                    <div class="im-icon-close" style="cursor: pointer;" @click="groupQRCodeClick" v-if="historyMsgListSelected.type === 2">
                        <img src="./image/qrcode.png" alt="二维码" title="二维码" style="width: 100%; height: 100%;vertical-align: text-bottom;">
                    </div>
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

            <div class="im-chat-user-list" v-if="chatMsgGroupUserVisible">
                <div class="im-chat-user-list-item" v-for="item in chatMsgGroupUserList" :key="item.user.uid">
                    <img :src="item.user.avatar | getDefaultAvatar">
                    <cite>{{item.user.name}}</cite>
                </div>
            </div>

            <main class="im-chat-main" id="chatMsgList">
                <a class="im-list-more" @click="getChatMsgList">{{ chatMsgListHandleMoreText }}</a>
                <template v-for="(item, index) in chatMsgList">
                    <div class="im-chat-msg-box" :class="item.isMine ? 'im-chat-msg-mine' : ''" :key="index">
                        <div class="im-chat-msg-user">
                            <img :src="item.user.avatar | getDefaultAvatar">
                            <div class="im-chat-msg-user-remark" v-if="item.isMine">
                                <i>{{ item.createTime }}</i><span>{{ item.user.name }}</span>
                            </div>
                            <div class="im-chat-msg-user-remark" v-else>
                                <span>{{ item.user.name }}</span><i>{{ item.createTime }}</i>
                            </div>
                        </div>
                        <div class="im-chat-msg-text" v-html="item.msgContent"></div>
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
                    <textarea placeholder="请输入" ref="himChatText" v-model="chatText"></textarea>
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
import Cookies from "js-cookie";
import { userLoginInfo, userQRCheckCode } from "./api/userIndex";
import { userFriendLists } from "./api/userFriend";
import { userLoginByTourist, userLoginByQq } from "./api/userLogin";
import {
    userFriendMsgClearUnMsgCount,
    userFriendMsgCreate,
    userFriendMsgLists
} from "./api/userFriendMsg";
import {
    userFriendAskAck,
    userFriendAskClearFriendAskCount,
    userFriendAskCreate,
    userFriendAskLists
} from "./api/userFriendAsk";
import { userGroupCreate, userGroupLists } from "./api/userGroup";
import {
    userGroupUserCheckCode,
    userGroupUserClearUnMsgCount,
    userGroupUserCreate,
    userGroupUserDelete,
    userGroupUserLists,
    userGroupUserUpdate
} from "./api/userGroupUser";
import { userGroupMsgCreate, userGroupMsgLists } from "./api/userGroupMsg";

let QRCode = require("qrcode");
export default {
    name: "Him",
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
        apiBaseUrl: String,
        webSocketUrl: String,
        userQRCodeUrl: String, // 用户二维码的生成地址
        groupQRCodeUrl: String, // 群二维码的生成地址
        qqLoginUrl: String, // QQ 登录的url
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
        WSResEncode: {
            type: Function,
            default: function(data) {
                return JSON.stringify(data);
            }
        },
        // WebSocket 编码
        WSResDecode: {
            type: Function,
            default: function(data) {
                return JSON.parse(data);
            }
        },
        // 点击了关闭按钮
        downClick: Function,
        // 点击了 QQ 登录
        qqLoginClick: Function,
        // 登录初始化完成
        loginInitHandle: Function,
        // 请求错误处理
        requestErrHandle: Function
    },
    data() {
        return {
            themeList: [
                {
                    "background-image":
                        "url(" + require("./image/bg-1.jpg") + ")",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-color": "#f6f6f6"
                },
                {
                    "background-image":
                        "url(" + require("./image/bg-2.jpg") + ")",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-color": "#f6f6f6"
                },
                {
                    "background-image":
                        "url(" + require("./image/bg-3.jpg") + ")",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-color": "#f6f6f6"
                },
                {
                    "background-image":
                        "url(" + require("./image/bg-4.jpg") + ")",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-color": "#f6f6f6"
                },
                {
                    "background-image":
                        "url(" + require("./image/bg-5.jpg") + ")",
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-color": "#f6f6f6"
                },
                {
                    "background-repeat": "no-repeat",
                    "background-size": "cover",
                    "background-color": "#f6f6f6"
                }
            ],
            themeSelected: {
                "background-repeat": "no-repeat",
                "background-size": "cover",
                "background-color": "#f6f6f6"
            },
            themeVisible: false,
            imTabList: [
                {
                    index: 0,
                    isSelected: true,
                    title: "消息"
                },
                {
                    index: 1,
                    isSelected: false,
                    title: "朋友"
                },
                {
                    index: 2,
                    isSelected: false,
                    title: "群组"
                }
            ],
            imTabSelectedIndex: 0, // 选中的index
            userQRCodeImg: null,
            userQRCodeVisible: false,
            groupQRCodeImg: null,
            groupQRCodeVisible: false,
            isMove: false,
            clientWidth: null,
            clientHeight: null,
            user: {
                profile: {},
                sid: null
            },
            imBoxPositionX: null,
            imBoxPositionY: null,
            userFriendList: {},
            userFriendListLimit: 500, // 每次拉取多少好友
            newFriendVisible: false,
            newFriendQuery: {
                page: 1,
                limit: 20
            },
            newFriendList: [],
            newFriendLoading: false,
            newFriendLoadMore: true, // 是否还可以加载更多
            userGroupList: {}, // 群列表
            userGroupListLimit: 500, // 群列表每次拉取
            historyMsgList: {},
            historyMsgListSelected: {}, // 历史消息的选中值
            createGroupName: "",
            createGroupVisible: false,
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
            chatCount: 0, // 当前窗口收到的消息总量
            chatText: "",
            chatMsgListPositionX: null,
            chatMsgListPositionY: null,
            chatMsgList: [],
            chatMsgListFriendQuery: {
                senderUid: null,
                page: 1,
                limit: 25
            },
            chatMsgListGroupQuery: {
                groupId: null,
                page: 1,
                limit: 25
            },
            chatMsgGroupUserList: {},
            chatMsgGroupUserVisible: false,
            chatMsgListScrollTop: true,
            chatMsgListHandleLoading: false,
            chatMsgListHandleMoreText: "",
            webSocket: null,
            webSocketReconnectCount: 0,
            webSocketWarningText:
                "连接断开,正在尝试重连 <i class='dotting'></i>",
            webSocketIsOpen: false,
            // 心跳定时器
            webSocketPingTimer: null,
            webSocketPingTime: 10000 // 心跳的间隔，当前为 10秒
        };
    },
    methods: {
        // 设置 登录用户ID
        setUid(value) {
            Cookies.set("UID", value, { expires: 365 });
        },
        getUid() {
            return Cookies.get("UID");
        },
        delUid() {
            return Cookies.remove("UID");
        },
        setSid(value) {
            Cookies.set("SID", value, { expires: 365 });
        },
        getSid() {
            return Cookies.get("SID");
        },
        delSid() {
            return Cookies.remove("SID");
        },
        setLocalStorage(name, value) {
            localStorage.setItem(name, value);
        },
        getLocalStorage(name) {
            return localStorage.getItem(name);
        },
        // 点击切换主题
        changeTheme(index, isLocalStorage) {
            // 判断是否存在下标
            if (
                index === null ||
                index < 0 ||
                this.themeList.length === 0 ||
                index >= this.themeList.length
            ) {
                return false;
            }
            let themeSelected = this.themeList[index];
            if (themeSelected) {
                this.themeSelected = themeSelected;
                if (isLocalStorage === true) {
                    this.setLocalStorage("themSelectedIndex", index);
                }
            }
        },
        // 登出
        userOut() {
            this.delUid();
            this.delSid();
            this.user = {
                profile: {},
                sid: null
            };
            this.userFriendList = {};
            this.newFriendList = [];
            this.userGroupList = {};
            this.historyMsgList = {};
            this.historyMsgListSelected = {};
            this.chatMsgList = [];
            this.chatMsgGroupUserList = {};
            this.chatCount = 0;
        },
        // 游客登录
        touristLogin(sex) {
            // 先退出
            this.userOut();
            userLoginByTourist(this.apiBaseUrl, sex)
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                    let data = response.data;
                    // 设置登录信息
                    this.setUid(data.uid);
                    this.setSid(data.sid);
                    // 登录成功, 重新初始化
                    this.init();
                })
                .catch(() => {});
        },
        // QQ 登录
        qqLogin(code, redirectUri) {
            this.userOut();
            userLoginByQq(this.apiBaseUrl, code, redirectUri)
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                    let data = response.data;
                    // 设置登录信息
                    this.setUid(data.uid);
                    this.setSid(data.sid);
                    // 登录成功, 重新初始化
                    this.init();
                })
                .catch(() => {});
        },
        // 初始化界面
        init() {
            // 初始化主题背景
            let themSelectedIndex = this.getLocalStorage("themSelectedIndex");
            this.changeTheme(themSelectedIndex, false);
            // 初始化用户信息
            this.userInit();
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
        // 请求错误处理
        requestErr(code, message) {
            // 登录失效的
            if (code === 1) {
                this.delUid();
                this.delSid();
            }
            // 调用外部方法
            if (
                this.requestErrHandle &&
                typeof this.requestErrHandle === "function"
            ) {
                this.requestErrHandle(code, message);
            }
        },
        userQRCodeClick() {
            if (this.userQRCodeImg) {
                this.userQRCodeVisible = true;
                return false;
            }
            userQRCheckCode(this.apiBaseUrl)
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                    var opts = {
                        errorCorrectionLevel: "H",
                        type: "image/jpeg",
                        rendererOpts: {
                            quality: 0.3
                        }
                    };
                    let qrCodeUrl = this.userQRCodeUrl + response.data;
                    console.log(qrCodeUrl);
                    // 生成二维码
                    QRCode.toDataURL(qrCodeUrl, opts, (error, url) => {
                        if (error) {
                            alert(error);
                            return false;
                        }
                        this.userQRCodeVisible = true;
                        this.userQRCodeImg = url;
                    });
                })
                .catch(() => {});
        },
        // 关闭用户二维码
        userQRCodeCloseHandle() {
            this.userQRCodeVisible = false;
        },
        // 群二维码
        groupQRCodeClick() {
            if (this.groupQRCodeImg) {
                this.groupQRCodeVisible = true;
                return false;
            }
            userGroupUserCheckCode(
                this.apiBaseUrl,
                this.historyMsgListSelected.id
            )
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                    var opts = {
                        errorCorrectionLevel: "H",
                        type: "image/jpeg",
                        rendererOpts: {
                            quality: 0.3
                        }
                    };
                    let qrCodeUrl = this.groupQRCodeUrl + response.data;
                    console.log(qrCodeUrl);
                    // 生成二维码
                    QRCode.toDataURL(qrCodeUrl, opts, (error, url) => {
                        if (error) {
                            alert(error);
                            return false;
                        }
                        this.groupQRCodeVisible = true;
                        this.groupQRCodeImg = url;
                    });
                })
                .catch(() => {});
        },
        // 关闭用户二维码
        groupQRCodeCloseHandle() {
            this.groupQRCodeVisible = false;
        },
        // 点击下载图片
        downloadImg(url) {
            // 生成一个a元素
            var a = document.createElement("a");
            // 创建一个单击事件
            var event = new MouseEvent("click");
            // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
            a.download = this.user.name;
            // 将生成的URL设置为a.href属性
            a.href = url;
            // 触发a的单击事件
            a.dispatchEvent(event);
        },
        // 去换Tab
        imTabSelectedHandle(index) {
            let data = [];
            for (let item of this.imTabList) {
                let isSelected = false;
                if (item.index === index) {
                    this.imTabSelectedIndex = index;
                    isSelected = true;
                }
                item.isSelected = isSelected;
                data.push(item);
            }
            this.imTabList = data;
        },
        msgClearUnMsgCount(type, id) {
            if (type === 1) {
                // 清空未读消息数量
                let query = {
                    receiverUid: id
                };
                userFriendMsgClearUnMsgCount(this.apiBaseUrl, query);
            } else if (type === 2) {
                userGroupUserClearUnMsgCount(this.apiBaseUrl, id);
            }
        },
        // 打开聊天界面
        handleChat(item) {
            if (item.unMsgCount > 0) {
                this.msgClearUnMsgCount(item.type, item.id);
                let key = item.type + "-" + item.id;
                this.historyMsgList[key].unMsgCount = 0;
            }
            this.chatVisible = true;
            this.chatUser = item;
            this.chatMsgList = [];
            this.historyMsgListSelected = item;
            this.chatMsgListFriendQuery.page = 1;
            this.chatMsgListGroupQuery.page = 1;
            this.chatMsgGroupUserList = {};
            // 默认选中, 需要延时等挂载好
            setTimeout(() => {
                this.$refs.himChatText.select();
            }, 100);
            // 追加
            this.getChatMsgList();
        },
        // 追加历史消息列表
        getChatMsgList() {
            if (this.chatMsgListHandleLoading) {
                return false;
            }
            // 不是第一次加载时
            if (this.chatMsgList.length !== 0) {
                this.chatMsgListScrollTop = false;
            }
            this.chatMsgListHandleLoading = true;
            this.chatMsgListHandleMoreText = "加载中";
            let historyItem = this.historyMsgListSelected;
            let isLoad = true; // 是否是加载更多
            // 如果是好友类型
            if (historyItem.type === 1) {
                let senderUid = historyItem.id;
                this.chatMsgListFriendQuery.senderUid = historyItem.id;
                userFriendMsgLists(this.apiBaseUrl, this.chatMsgListFriendQuery)
                    .then(response => {
                        this.chatMsgListFriendQuery.page += 1;
                        this.chatMsgListHandleLoading = false;
                        if (response.code !== 0) {
                            this.requestErr(response.code, response.message);
                            return false;
                        }
                        let list = response.data;
                        if (list.length === 0) {
                            this.chatMsgListHandleMoreText = "没有更多了";
                            return false;
                        }
                        for (let item of list) {
                            let isMine = this.user.uid === item.senderUid;
                            let user = {};
                            if (isMine) {
                                user = {
                                    uid: this.user.uid,
                                    name: this.user.name,
                                    avatar: this.user.avatar
                                };
                            } else {
                                user = {
                                    uid: senderUid,
                                    name: historyItem.name,
                                    avatar: historyItem.avatar
                                };
                            }
                            // 追加到消息列表
                            this.pushChatMsgList(
                                item.msgType,
                                item.msgContent,
                                user,
                                item.createTime,
                                isLoad
                            );
                        }
                        this.chatMsgListHandleMoreText = "加载更多消息";
                    })
                    .catch(() => {
                        this.chatMsgListHandleLoading = false;
                        this.chatMsgListHandleMoreText = "";
                    });
            } else if (historyItem.type === 2) {
                this.chatMsgListGroupQuery.groupId = historyItem.id;
                userGroupMsgLists(this.apiBaseUrl, this.chatMsgListGroupQuery)
                    .then(response => {
                        this.chatMsgListGroupQuery.page += 1;
                        this.chatMsgListHandleLoading = false;
                        if (response.code !== 0) {
                            this.requestErr(response.code, response.message);
                            return false;
                        }
                        let list = response.data;
                        if (list.length === 0) {
                            this.chatMsgListHandleMoreText = "没有更多了";
                            return false;
                        }
                        for (let item of list) {
                            // 追加到消息列表
                            this.pushChatMsgList(
                                item.msgType,
                                item.msgContent,
                                item.user,
                                item.createTime,
                                isLoad
                            );
                        }
                        this.chatMsgListHandleMoreText = "加载更多消息";
                    })
                    .catch(() => {
                        this.chatMsgListHandleLoading = false;
                        this.chatMsgListHandleMoreText = "";
                    });
            }
        },
        isShowClick() {
            if (this.downClick && typeof this.downClick === "function") {
                this.downClick();
            }
        },
        // 关闭
        closeChat() {
            let selectedType = this.historyMsgListSelected.type || 0;
            let id = this.historyMsgListSelected.id || 0;
            this.historyMsgListSelected = {};
            this.chatMsgList = [];
            this.chatVisible = false;
            // 如果有当前窗口有未读消息，清除一下未读消息
            if (this.chatCount > 0) {
                this.chatCount = 0;
                // 清空消息
                this.msgClearUnMsgCount(selectedType, id);
            }
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
            if (!this.getUid() || !this.getSid()) {
                return false;
            }
            userLoginInfo(this.apiBaseUrl, {})
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                    let data = response.data;
                    this.user = data;
                    // 调用外部方法
                    if (
                        this.loginInitHandle &&
                        typeof this.loginInitHandle === "function"
                    ) {
                        this.loginInitHandle();
                    }
                    // 递归拉取好友
                    this.getUserFriendList(1, this.userFriendListLimit);
                    // 递归拉取群列表
                    this.getUserGroupList(1, this.userGroupListLimit);

                    // 初始化 WebSocket
                    this.webSocketInit();
                })
                .catch(() => {});
        },
        // 获取用户朋友列表
        getUserFriendList(page, limit) {
            let query = {
                page: page,
                limit: limit
            };
            userFriendLists(this.apiBaseUrl, query)
                .then(response => {
                    if (response.code !== 0) {
                        return false;
                    }
                    let data = response.data;
                    if (data.length <= 0) {
                        return false;
                    }
                    let userFriendList = Object.assign({}, this.userFriendList);
                    for (let item of data) {
                        // 聊过天
                        if (item.lastMsgContent) {
                            this.pushHistoryMsg(
                                1,
                                item.user.uid,
                                item.remark || item.user.name,
                                item.user.remark,
                                item.user.avatar,
                                item.lastMsgContent,
                                item.unMsgCount,
                                item.modifiedTime
                            );
                        }
                        userFriendList[item.friendUid] = item;
                    }
                    this.userFriendList = userFriendList;
                    if (data.length < limit) {
                        return false;
                    }
                    this.getUserFriendList(page + 1, limit);
                })
                .catch(() => {});
        },
        // 朋友列表的点击
        friendClick(item) {
            console.log(item);
            let data = {
                type: 1,
                id: item.friendUid,
                name: item.remark ? item.remark : item.user.name,
                avatar: item.user.avatar,
                remark: item.user.remark,
                unMsgCount: item.unMsgCount
            };
            this.handleChat(data);
        },
        // 新的朋友点击
        newFriendClick() {
            if (!this.newFriendVisible) {
                this.newFriendQuery.page = 1;
                this.newFriendVisible = true;
                this.newFriendLoadMore = true;
                this.newFriendList = [];
                this.getUserFriendAskList();
                // 清空
                if (this.user.profile.friendAskCount > 0) {
                    this.clearFriendAskCount();
                }
                return false;
            }
            this.newFriendVisible = false;
        },
        // 发送好友请求
        createUserFriendAsk(checkCode, remark) {
            userFriendAskCreate(this.apiBaseUrl, checkCode, remark)
                .then(response => {
                    if (response.code) {
                        return false;
                    }
                })
                .catch(() => {});
        },
        // 确认
        askAck(item, status) {
            userFriendAskAck(this.apiBaseUrl, item.id, status)
                .then(response => {
                    if (response.code) {
                        return false;
                    }
                    item.status = status;
                    let userFriendList = Object.assign({}, this.userFriendList);
                    userFriendList[item.friendUid] = item;
                    this.userFriendList = userFriendList;
                    // 追加到历史消息
                    this.pushHistoryMsg(
                        1,
                        item.user.uid,
                        item.user.name,
                        item.user.remark,
                        item.user.avatar,
                        item.remark ? item.remark : "成为好友，现在开始聊吧~",
                        0,
                        new Date()
                    );
                })
                .catch(() => {});
        },
        // 清空好友请求数量
        clearFriendAskCount() {
            userFriendAskClearFriendAskCount(this.apiBaseUrl)
                .then(response => {
                    if (response.code) {
                        return false;
                    }
                    this.user.profile.friendAskCount = 0;
                })
                .catch(() => {});
        },
        // 获取好友请求列表
        getUserFriendAskList() {
            if (!this.newFriendLoadMore || this.newFriendLoading) {
                return false;
            }
            this.newFriendLoading = true;
            userFriendAskLists(this.apiBaseUrl, this.newFriendQuery)
                .then(response => {
                    this.newFriendLoading = false;
                    if (response.code) {
                        this.newFriendLoadMore = true;
                        return false;
                    }
                    this.newFriendQuery.page += 1;
                    let data = response.data;
                    if (data.length === 0) {
                        this.newFriendLoadMore = false;
                        return false;
                    }
                    if (data.length < this.newFriendQuery.limit) {
                        this.newFriendLoadMore = false;
                    }
                    this.newFriendList = this.newFriendList.concat(data);
                })
                .catch(() => {
                    this.newFriendLoading = false;
                });
        },
        // 获取群列表
        getUserGroupList(page, limit) {
            let query = {
                page: page,
                limit: limit
            };
            userGroupUserLists(this.apiBaseUrl, query)
                .then(response => {
                    if (response.code !== 0) {
                        return false;
                    }
                    let data = response.data;
                    if (data.length <= 0) {
                        return false;
                    }
                    let userGroupList = Object.assign({}, this.userGroupList);
                    for (let item of data) {
                        // 聊过天
                        if (item.lastMsgContent) {
                            this.pushHistoryMsg(
                                2,
                                item.groupId,
                                item.remark || item.group.name,
                                item.group.remark,
                                item.group.avatar,
                                item.lastMsgContent,
                                item.unMsgCount,
                                item.lastMsgTime
                            );
                        }
                        userGroupList[item.groupId] = item;
                    }
                    this.userGroupList = userGroupList;
                    if (data.length < limit) {
                        return false;
                    }
                    this.getUserGroupList(page + 1, limit);
                })
                .catch(() => {});
        },
        // 群组列表的点击
        groupClick(item) {
            let data = {
                type: 2,
                id: item.groupId,
                name: item.group.name,
                avatar: item.group.avatar,
                remark: item.group.remark
            };
            this.handleChat(data);
        },
        // 创建群
        createGroup() {
            this.createGroupVisible = true;
            if (this.createGroupName.length === 0) {
                return false;
            }
            userGroupCreate(this.apiBaseUrl, this.createGroupName, "", "")
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                    let data = response.data;
                    let userGroupList = Object.assign({}, this.userGroupList);
                    let item = {
                        groupId: data.groupId,
                        group: data
                    };
                    userGroupList[item.groupId] = item;
                    this.userGroupList = userGroupList;
                    this.createGroupVisible = false;
                    this.createGroupName = "";
                    // 默认打开群聊天界面
                    let chatData = {
                        type: 2,
                        id: item.groupId,
                        name: item.group.name,
                        avatar: item.group.avatar,
                        remark: item.group.remark
                    };
                    this.handleChat(chatData);
                })
                .catch(() => {});
        },
        // 取消创建群
        createGroupClose() {
            this.createGroupVisible = false;
        },
        // 加入群
        joinGroupUser(checkCode) {
            userGroupUserCreate(this.apiBaseUrl, checkCode)
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                    let item = response.data;

                    let userGroupList = Object.assign({}, this.userGroupList);
                    this.pushHistoryMsg(
                        2,
                        item.groupId,
                        item.remark || item.group.name,
                        item.group.remark,
                        item.group.avatar,
                        item.lastMsgContent,
                        1,
                        item.lastMsgTime
                    );
                    userGroupList[item.groupId] = item;
                    this.userGroupList = userGroupList;
                })
                .catch(() => {});
        },
        // 修改在群的信息
        updateGroupUser(groupId, remark) {
            userGroupUserUpdate(this.apiBaseUrl, groupId, remark)
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                })
                .catch(() => {});
        },
        // 删除/退出群
        outGroupUser(groupId) {
            userGroupUserDelete(this.apiBaseUrl, groupId)
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                    let item = response.data;

                    let userGroupList = Object.assign({}, this.userGroupList);
                    delete userGroupList[item.groupId];
                    this.userGroupList = userGroupList;
                    let historyMsgList = Object.assign({}, this.historyMsgList);
                    delete historyMsgList[2 + "-" + item.groupId];
                    this.historyMsgList = historyMsgList;
                })
                .catch(() => {});
        },
        isShowGroupUserListClick() {
            this.chatMsgGroupUserVisible = !this.chatMsgGroupUserVisible;
            if (
                !this.chatMsgGroupUserVisible ||
                Object.keys(this.chatMsgGroupUserList).length > 0
            ) {
                return false;
            }
            let query = {
                groupId: this.historyMsgListSelected.id,
                page: 1,
                limit: 500
            };
            userGroupLists(this.apiBaseUrl, query)
                .then(response => {
                    if (response.code !== 0) {
                        this.requestErr(response.code, response.message);
                        return false;
                    }
                    let data = response.data;
                    let chatMsgGroupUserList = Object.assign(
                        {},
                        this.chatMsgGroupUserList
                    );
                    for (let item of data) {
                        chatMsgGroupUserList[item.user.uid] = item;
                    }
                    this.chatMsgGroupUserList = chatMsgGroupUserList;
                })
                .catch(() => {});
        },
        // 追加历史消息 (type: 1:好友,2:群消息)
        pushHistoryMsg(
            type,
            id,
            name,
            remark,
            avatar,
            lastMsgContent,
            unMsgCount,
            modifiedTime
        ) {
            let key = type + "-" + id;
            let map = Object.assign({}, this.historyMsgList);
            let item = map[key];
            console.log(item, key, "历史消息");
            if (item) {
                item.lastMsgContent = lastMsgContent;
                item.unMsgCount += unMsgCount;
                item.modifiedTime = modifiedTime;
                map[key] = item;
                this.historyMsgList = map;
                return false;
            }
            let data = {
                id: id,
                type: type,
                name: name,
                remark: remark,
                avatar: avatar,
                lastMsgContent: lastMsgContent,
                unMsgCount: unMsgCount,
                modifiedTime: modifiedTime
            };
            map[key] = data;
            this.historyMsgList = map;
        },
        // 追加消息到当前聊天 {isLoad：是否加载更多}
        pushChatMsgList(msgType, msgContent, user, createTime, isLoad) {
            msgContent = this.createContent(msgContent);
            createTime = this.formatDate(createTime);
            let item = {};
            item.isMine = this.user.uid === user.uid;
            item.user = user;
            item.msgType = msgType;
            item.msgContent = msgContent;
            item.createTime = createTime;
            // 加载更多，向头部增加
            if (isLoad) {
                this.chatMsgList.unshift(item);
            } else {
                // 头部尾部增加
                this.chatMsgList.push(item);
            }
        },
        // 断开连接时
        webSocketClose() {
            // 修改状态为未连接
            this.webSocketIsOpen = false;
            if (this.webSocketReconnectCount === 0) {
                // 第一次直接尝试重连
                this.webSocketReconnect();
            }
        },
        // 定时心跳
        webSocketPing() {
            this.webSocketPingTimer = setTimeout(() => {
                if (!this.webSocketIsOpen) {
                    return false;
                }
                console.log("心跳");
                const payload = {
                    type: 0
                };
                this.webSocketSend(payload);
                clearTimeout(this.webSocketPingTimer);
                // 重新执行
                this.webSocketPing();
            }, this.webSocketPingTime);
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

            // 每过 5 秒尝试一次，检查是否连接成功，直到超过最大重连次数
            let timer = setTimeout(() => {
                this.webSocketReconnect();
                clearTimeout(timer);
            }, 5000);
        },
        // WebSocket 打开成功后
        webSocketHandleOpen() {
            console.log("连接打开");
            this.webSocketIsOpen = true;
            // 清空重连的次数
            this.webSocketReconnectCount = 0;
            // 发送登录信息
            const payload = {
                type: 0
            };
            this.webSocketSend(payload);
            // 开启定时心跳
            this.webSocketPing();
        },
        // WebSocket 关闭
        webSocketHandleClose() {
            console.log("连接断开");
            // 关闭心跳
            this.webSocketClose();
        },
        // WebSocket 发生错误时
        webSocketHandleError(err) {
            console.log("连接报错：", err);
            // 关闭心跳
            this.webSocketClose();
        },
        // 接收到消息时
        webSocketHandleMessage(event) {
            // 响应体的message
            const data = event.data;
            this.WSResDecode(data, response => {
                console.log("服务端消息:", response);
                let type = response.type || 0;
                switch (type) {
                    case 1: // 好友消息
                        this.wsFriendMsgHandle(response);
                        break;
                    case 2: // 群消息
                    case 5: // 加入群消息
                        this.wsGroupMsgHandle(response);
                        break;
                    case 3: // 好友请求
                        this.wsFriendAskHandle();
                        break;
                    case 4: // 好友同意消息
                        this.wsFriendAckHandle(response);
                        break;
                }
            });
        },
        // 好友请求
        wsFriendAskHandle() {
            this.user.profile.friendAskCount += 1;
        },
        // 好友同意消息
        wsFriendAckHandle(response) {
            let message = response.message;
            let user = response.user;
            let createTime = new Date(response.createTime);
            let receiveId = message.receiveId || 0;
            let uid = user.uid || 0;
            let msgContent = message.msgContent || "";
            if (
                !receiveId ||
                typeof receiveId !== "number" ||
                receiveId === 0 ||
                !msgContent ||
                msgContent === "" ||
                typeof uid !== "number" ||
                uid === 0
            ) {
                return false;
            }
            let userFriendList = Object.assign({}, this.userFriendList);
            userFriendList[uid] = user;
            this.userFriendList = userFriendList;
            let historyType = 1; // 好友
            let unMsgCount = 1;
            // 追加到历史消息
            this.pushHistoryMsg(
                historyType,
                uid,
                user.name,
                user.remark,
                user.avatar,
                msgContent,
                unMsgCount,
                createTime
            );
        },
        // 消息类型的消息（好友消息）
        wsFriendMsgHandle(response) {
            let message = response.message;
            let user = response.user;
            let createTime = new Date(response.createTime);
            let receiveId = message.receiveId || 0;
            let uid = user.uid || 0;
            let msgType = message.msgType || 0;
            let msgContent = message.msgContent || "";
            console.log("好友消息", receiveId, msgContent, uid);
            if (
                !receiveId ||
                typeof receiveId !== "number" ||
                receiveId === 0 ||
                !msgContent ||
                msgContent === "" ||
                typeof uid !== "number" ||
                uid === 0
            ) {
                return false;
            }
            let name = user.name;
            let remark = user.remark;
            let avatar = user.avatar;
            // 判断是不是打开的这个对象
            let selectedType = this.historyMsgListSelected.type || 0;
            let id = this.historyMsgListSelected.id || 0;
            let unMsgCount = 1;
            let historyType = 1;
            // 判断是不是聊天窗口的消息
            if (selectedType === historyType && id === uid) {
                let user = {
                    uid: uid,
                    name: name,
                    avatar: avatar
                };
                this.pushChatMsgList(msgType, msgContent, user, createTime);
                unMsgCount = 0;
                // 如果超过 5 个消息，则做一次 ACK 消息的操作
                this.chatCount += 1;
                if (this.chatCount >= 5) {
                    this.chatCount = 0;
                    // 清空消息
                    this.msgClearUnMsgCount(historyType, id);
                }
            }
            this.pushHistoryMsg(
                historyType,
                uid,
                name,
                remark,
                avatar,
                msgContent,
                unMsgCount,
                createTime
            );
        },
        // 消息类型的消息（群消息）
        wsGroupMsgHandle(response) {
            let type = response.type;
            let message = response.message;
            let user = response.user;
            let createTime = new Date(response.createTime);
            let receiveId = message.receiveId || 0;
            let uid = user.uid || 0;
            let msgType = message.msgType || 0;
            let msgContent = message.msgContent || "";
            console.log("群消息", receiveId, msgContent, uid);
            if (
                !receiveId ||
                typeof receiveId !== "number" ||
                receiveId === 0 ||
                !msgContent ||
                msgContent === "" ||
                typeof uid !== "number" ||
                uid === 0
            ) {
                return false;
            }
            // 如果是入群消息, 则改变
            let isJoinGroup = false;
            if (type === 5) {
                isJoinGroup = true;
            }
            let name = user.name;
            let remark = user.remark;
            let avatar = user.avatar;
            // 判断是不是打开的这个对象
            let selectedType = this.historyMsgListSelected.type || 0;
            let id = this.historyMsgListSelected.id || 0;
            let unMsgCount = 1;
            let historyType = 2;
            // 判断是不是聊天窗口的消息
            if (selectedType === historyType && id === receiveId) {
                let user = {
                    uid: uid,
                    name: name,
                    avatar: avatar
                };
                this.pushChatMsgList(msgType, msgContent, user, createTime);
                unMsgCount = 0;
                // 如果超过 5 个消息，则做一次 ACK 消息的操作
                this.chatCount += 1;
                if (this.chatCount >= 5) {
                    this.chatCount = 0;
                    // 清空消息
                    this.msgClearUnMsgCount(historyType, id);
                }
                // 入群消息
                if (isJoinGroup) {
                    let chatMsgGroupUserList = Object.assign(
                        {},
                        this.chatMsgGroupUserList
                    );
                    chatMsgGroupUserList[user.uid] = user;
                    this.chatMsgGroupUserList = chatMsgGroupUserList;
                }
            }
            // 如果是群消息， 获取群消息
            if (type === 2) {
                let groupItem = this.userGroupList[receiveId];
                name = groupItem ? groupItem.name : "gd" + receiveId;
                remark = groupItem ? groupItem.remark : "";
                avatar = groupItem ? groupItem.avatar : "";
            }
            this.pushHistoryMsg(
                historyType,
                receiveId,
                name,
                remark,
                avatar,
                msgContent,
                unMsgCount,
                createTime
            );
        },
        // 发送消息
        webSocketSend(payload) {
            // 加入登录验证
            payload.uid = parseInt(this.getUid());
            payload.sid = this.getSid();
            let buffer = this.WSResEncode(payload);
            this.webSocket.send(buffer);
        },
        // 发送按钮点击
        sendBtnClick() {
            if (
                !this.chatText ||
                this.chatText === "" ||
                /^[ ]+$/.test(this.chatText)
            ) {
                return false;
            }
            let item = this.historyMsgListSelected;
            let msgType = 0; // 文本消息
            if (item.type === 1) {
                // 发送
                let postData = {
                    receiverUid: item.id,
                    msgType: msgType,
                    msgContent: this.chatText
                };
                userFriendMsgCreate(this.apiBaseUrl, postData)
                    .then(response => {
                        if (response.code !== 0) {
                            this.requestErr(response.code, response.message);
                            return false;
                        }
                        this.receiveMessage(
                            item.type,
                            item.id,
                            item.name,
                            item.remark,
                            item.avatar,
                            msgType,
                            this.user,
                            this.chatText,
                            new Date()
                        );
                        this.chatText = "";
                    })
                    .catch(() => {});
                return false;
            }
            if (item.type === 2) {
                let postData = {
                    groupId: item.id,
                    msgType: msgType,
                    msgContent: this.chatText
                };
                userGroupMsgCreate(this.apiBaseUrl, postData)
                    .then(response => {
                        if (response.code !== 0) {
                            this.requestErr(response.code, response.message);
                            return false;
                        }
                        this.receiveMessage(
                            item.type,
                            item.id,
                            item.name,
                            item.remark,
                            item.avatar,
                            msgType,
                            this.user,
                            this.chatText,
                            new Date()
                        );
                        this.chatText = "";
                    })
                    .catch(() => {});
                return false;
            }
        },
        receiveMessage(
            type,
            id,
            name,
            remark,
            avatar,
            msgType,
            user,
            msgContent,
            createTime
        ) {
            // 是否自动滚动到底部
            this.chatMsgListScrollTop = true;
            let data = {};
            data.isMine = this.user.uid === user.uid;
            if (this.historyMsgListSelected !== null) {
                data.msgType = msgType;
                data.user = user;
                data.msgContent = this.createContent(msgContent);
                data.createTime = this.formatDate(createTime);
                this.chatMsgList.push(data);
            }

            let lastMsgContent = msgContent;
            switch (msgType) {
                case 1:
                    lastMsgContent = "[图片消息]";
                    break;
                case 2:
                    lastMsgContent = "[文件消息]";
                    break;
                case 3:
                    lastMsgContent = "[语言消息]";
                    break;
                case 4:
                    lastMsgContent = "[视频消息]";
                    break;
            }
            let unMsgCount = data.isMine ? 0 : 1;
            // 更新最后一次接收的消息
            this.pushHistoryMsg(
                type,
                id,
                name,
                remark,
                avatar,
                lastMsgContent,
                unMsgCount,
                createTime
            );
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
        formatDate(dateStr) {
            let date = new Date(dateStr);
            let year = date.getFullYear();
            let month = date.getMonth();
            month = month < 10 ? "0" + month : month;
            let day = date.getDate();
            day = day < 10 ? "0" + day : day;
            let hour = date.getHours();
            hour = hour < 10 ? "0" + hour : hour;
            let minute = date.getMinutes();
            minute = minute < 10 ? "0" + minute : minute;
            let seconds = date.getSeconds();
            seconds = seconds < 10 ? "0" + seconds : seconds;
            return year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + seconds;
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
    filters: {
        getDefaultAvatar(avatar) {
            if (avatar === null || avatar === "" || avatar === "") {
                return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWAgMAAABBb5lxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURUxpcfDw8OPj4+Dg4FOJnTQAAAABdFJOUwBA5thmAAABUElEQVRYw+3Yy22EMBAGYDpLFUMOPlCCS3AVrmNLYJugBB9yy4UDKwHJhhj5Mdj/slYekn3+NPJ4PGNB87ICq2kQtV4x9l5ZZZVV9hvsjdpLnk30ufosG+6sy7HlrqjNsfGLkcqwYWMyw/TGXtNs21q8uYDN34zSbLKsT7LRMoUxmWQGY4NlXQmmLRM/yKwKi3qO6aLR/jJ7NFOB3RBR4iKZB5kq0Vlgny5Y1y8EjRpbBoHNty7DDDYGwaE6s4meneQrex5nn48tVZllI5fowdOmsGh90WiqVKbguWFVAEuP3TfwPQX7dJ9IbYrt3Ux0STBNBwPOY06woPwe0y4TR2wmbx0x4zPJs8VX3pk4bAyYG85hOmSCYxNFq2eYiZlkWKyc27mzhWEUs4ljfcRGjsmIDU+wrrJCzGBVYEuvInZjVFu/ASurrLL/y64N9sv6AwiKosleKgwtAAAAAElFTkSuQmCC";
            }
            return avatar;
        },
        askAckStatusFilterName(index) {
            const map = {
                0: "确认",
                1: "已添加",
                2: "已拒绝"
            };
            return map[index];
        }
    },
    mounted() {
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
            data = {
                ...data,
                ...this.themeSelected
            };
            return data;
        },
        imChatBoxStyle () {
            let data = {};
            data = {
                top: this.chatMsgListPositionX,
                left: this.chatMsgListPositionY,
                ...this.themeSelected
            };
            return data;
        },
        sortHistoryMsgList: function () {
            let historyMsgList = {};
            Object.keys(this.historyMsgList)
                .sort((a, b) => {
                    let aItem = this.historyMsgList[a];
                    let bItem = this.historyMsgList[b];
                    let aModifiedTime = new Date(aItem.modifiedTime);
                    let bModifiedTime = new Date(bItem.modifiedTime);
                    return bModifiedTime - aModifiedTime;
                })
                .map((v) => {
                    historyMsgList[v] = this.historyMsgList[v];
                });
            return historyMsgList;
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
    background-color: rgba(230, 230, 230, 0.7);
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
            color: #000;
            @include text-overflow;
        }
        .im-header-user-remark {
            width: 175px;
            margin-top: 1px;
            font-size: 13px;
            color: rgba(0,0,0,0.6);
            @include text-overflow;
        }
    }
    .im-header-out-login {
        display: inline-block;
        width: 22px;
        height: 22px;
        cursor: pointer;
    }
    .im-header-qrcode-box {
        display: inline-block;
        width: 22px;
        height: 22px;
        cursor: pointer;
    }
    .im-header-setwin {
        float: right;
    }
}
.user-qrcode-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    .user-qrcode {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
    .user-qrcode-download {
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
}
.user-login-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 999;
    .user-login-list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        display: flex;
    }
    .user-login-button:first-child {
        margin-left: 0;
    }
    .user-login-button {
        display: inline-block;
        margin-left: 20px;
        cursor: pointer;
        text-align: center;
        img {
            width: 50px;
            height: 50px;
        }
        span {
            display: block;
            color: #ffffff;
        }
        &:hover {
            opacity: 0.7;
        }
    }
}
.group-qrcode-box {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    .group-qrcode {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
    .group-qrcode-download {
        cursor: pointer;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
}
.im-tab-nav {
    background-color: rgba(230, 230, 230, 0.7);
}
.im-tab {
    cursor: pointer;
    width: 100%;
    height: 42px;
    line-height: 42px;
    .im-tab-item {
        position: relative;
        display: inline-block;
        text-align: center;
        width: 33.33%;
        height: 100%;
        &:hover {
            opacity: 0.5;
        }
    }
    .im-tab-item-selected::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: #3FDD86;
    }
    .im-tab-badge {
        position: absolute;
        top: 4px;
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
.im-list-empty {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #999;
}
.im-panel-body {
    position: absolute;
    top: 122px;
    bottom: 30px;
    right: 0;
    left: 0;
    width: 100%;
    background-color: #fcfcfc;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba(255, 255, 255, 0.9);
}
.im-group-create {
    height: 40px;
    color: green;
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    input {
        height: 25px;
        padding: 2px 5px;
        flex: 2;
        border: 1px solid rgba(0, 0, 0, 0.04);
    }
    .im-group-create-button {
        cursor: pointer;
        height: 100%;
        line-height: 40px;
        flex: 1;
    }
}
.im-new-friend {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    padding-right: 50px;
    padding-left: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
}
.im-new-friend-list-more {
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
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
        /*height: 65px;*/
        cursor: pointer;
        display: flex;
        overflow: hidden;
        align-items: center;
    }
    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    .im-user-left {
        width: 52px;
        height: 52px;
    }
    .im-user-right {
        position: relative;
        padding: 18px 0;
        /*height: 100%;*/
        border-bottom: 1px solid rgba(0, 0, 0, 0.04);
    }
    .im-user-avatar {
        display: inline-block;
        width: 52px;
        height: 52px;
        border-radius: 26px;
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
        margin-bottom: 3px;
        font-size: 15px;
        @include text-overflow;
    }
    .im-user-remark {
        display: block;
        max-width: 200px;
        margin-top: 3px;
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
    .im-user-button {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: green;
        span {
            cursor: pointer;
        }
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
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
    .im-panel-theme {
        display: inline-block;
        width: 25px;
        height: 25px;
        vertical-align: middle;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .im-panel-theme-list {
        position: absolute;
        bottom: 30px;
        left: 0;
        width: 100%;
        height: 140px;
        border-top: 1px solid #d9d9d9;
        background-color: #ffffff;
        padding-top: 10px;
        padding-left: 10px;
    }
    .im-panel-theme-item {
        padding-bottom: 10px;
        padding-right: 10px;
        display: inline-block;
        width: 33.33%;
        height: 50%;
        line-height: 50%;
        text-align: center;
        cursor: pointer;
        div {
            display: inline-block;
            width: 100%;
            height: 100%;
            background-color: #ccc;
        }
    }
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
    background-color: rgba(230, 230, 230, 0.7);
    color: #444;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06), 0 2px 0 0 rgba(0, 0, 0, 0.01);
    border-bottom: 1px solid #eee;
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
    width: 52px;
    height: 52px;
    border-radius: 26px;
    box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
    vertical-align: middle;
}
.im-chat-user-info {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
}
.im-chat-user-name {
    display: inline-block;
    max-width: 160px;
    /*margin-top: 5px;*/
    font-size: 14px;
    @include text-overflow;
}
.im-chat-user-list-button {
    display: inline-block;
    overflow: hidden;
    margin-left: 10px;
    color: #999;
}
.im-chat-user-remark {
    display: block;
    max-width: 200px;
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
.im-chat-user-list {
    position: absolute;
    top: 80px;
    height: 200px;
    width: 100%;
    z-index: 4;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid #D9D9D9;
    background-color: rgba(255,255,255,.9);
    .im-chat-user-list-item {
        display: inline-block;
        width: 20%;
        height: 70px;
        text-align: center;
        margin: 15px 0;
        cursor: pointer;
        &:hover {
            opacity: 0.9
        }
        &:hover cite{
            text-decoration: underline;
        }
        img {
            width: 48px;
            height: 48px;
            border-radius: 100%;
        }
        cite {
            display: block;
            padding: 0 3px;
            color: #428bca;
            font-style: normal;
            @include text-overflow;
        }
    }
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
