<template>
    <div class="view-container">
        <header class="im-panel-header">
            <div class="im-header-user">
                <div class="im-header-user-name">
                    黎明
                </div>
                <div class="im-header-user-remark">
                    黎明前的黑暗，最寂静
                </div>
            </div>
            <div class="im-header-setwin">
                <a href="javascript:;">
                    <i class="im-icon im-icon-ring-open"></i>
                    <i class="im-icon im-icon-panel-down"></i>
                </a>
            </div>
        </header>

        <main class="im-panel-body">

            <div class="im-panel-searchbar">
                <div class="im-panel-searchbar-inner">
                    <img src="../assets/image/search.png" class="im-panel-search">
                    <input type="search" placeholder="搜索" class="im-panel-searchbar-core">
                </div>
            </div>

            <ul class="im-panel-user-list">

                <li>
                    <img src="../assets/image/default-avatar.jpg" alt="" class="im-user-avatar">
                    <div class="im-user-info">
                        <span class="im-user-name">
                            黎明
                        </span>
                        <span class="im-user-remark">
                            黎明前的黑暗，最寂静
                        </span>
                    </div>
                </li>
                <li>
                    <img src="../assets/image/default-avatar.jpg" alt="" class="im-user-avatar">
                    <div class="im-user-info">
                        <span class="im-user-name">
                            黎明
                        </span>
                        <span class="im-user-remark">
                            黎明前的黑暗，最寂静
                        </span>
                    </div>
                </li>

            </ul>

        </main>

        <footer class="im-panel-footer">
            底部
        </footer>

    </div>
</template>

<script>
// @ is an alias to /src
export default {
    name: "home",
    components: {},
    methods: {
        list() {}
    }
};
</script>

<style type="text/scss" lang="scss">
@import "../styles/mixin";
.view-container {
    width: 100%;
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.05);
}
.im-icon {
    background-size: 44px auto;
    background: url(../assets/image/im-icon.png) no-repeat;
}
.im-icon-ring-open {
    background-position: -22px -89px;
}
.im-icon-panel-down {
    background-position: -22px -66px;
}
.im-icon-ring-open,
.im-icon-panel-down {
    display: inline-block;
    width: 22px;
    height: 22px;
    opacity: 0.6;
}
.im-panel-header {
    background-color: #6ed0ce;
    color: #fff;
    height: 60px;
    padding: 7px 10px;
    zoom: 1;
    font-size: 16px;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.06), 0 2px 0 0 rgba(0, 0, 0, 0.01);
    overflow: hidden;
    .im-header-user {
        float: left;
        padding-left: 8px;
        .im-header-user-name {
            display: inline-block;
            width: 175px;
            margin-top: 5px;
            font-size: 13px;
            @include text-overflow;
        }
        .im-header-user-remark {
            width: 175px;
            margin-top: 1px;
            font-size: 12px;
            @include text-overflow;
        }
    }
    .im-header-setwin {
        float: right;
    }
}
.im-panel-body {
    position: absolute;
    top: 60px;
    bottom: 30px;
    right: 0;
    left: 0;
    width: 100%;
    background-color: #fcfcfc;
    overflow-x: hidden;
    overflow-y: auto;
}
.im-panel-searchbar {
    position: relative;
    background-color: #d9d9d9;
    box-sizing: border-box;
    padding: 8px 10px;
    z-index: 1;
}
.im-panel-searchbar-inner {
    position: relative;
    height: 28px;
    padding-left: 25px;
    background-color: #fff;
    border-radius: 2px;
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
}
.im-panel-user-list {
    height: 100%;
    li {
        position: relative;
        /*height: 42px;*/
        /*line-height: 1;*/
        padding: 5px 15px 5px 15px;
        font-size: 0;
        cursor: pointer;
        border-top: 1px solid #d9d9d9;
    }
    li:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }
    .im-user-avatar {
        display: inline-block;
        width: 36px;
        height: 36px;
        border-radius: 18px;
        -webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
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
        font-size: 14px;
        @include text-overflow;
    }
    .im-user-remark {
        width: 100%;
        /*margin-top: 7px;*/
        font-size: 13px;
        color: #999;
        @include text-overflow;
    }
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
</style>
