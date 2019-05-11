# him-vue

> 前端：vue  [前往](https://github.com/lmxdawn/him-vue) ，服务端 netty [前往](https://github.com/lmxdawn/him-netty)

# 环境要求 

## git
> 这个版本管理肯定需要安装的

## node 
> node 版本最新的即可

## vue

> 构建工具用 vue 目前使用的 2.x 版本

## 下载

> git clone https://github.com/lmxdawn/him-vue.git
> cd him-vue

## 安装

> npm install

## 编译
> npm run serve 本地测试版

> him-vue [前往](https://github.com/lmxdawn/him-vue) 和 him-netty [前往](https://github.com/lmxdawn/him-netty) 都启动后访问 http://localhost:8080

> npm run build 编译命令

注意默认使用 QQ登录, 这个需要去申请QQ互联, 如果不想去申请, 则可以直接设置 Cookie, 两个值 UID 和 SID, 这两个值可以通过接口 /api/user/login/byPwd 获取, 具体请看java 代码

# QQ 互联相关配置

### java 代码
> him-api/src/main/resources/ 这里的配置文件里面, `qq.auth.appid` 和 `qq.auth.appkey` 配置上即可

### vue 代码
> 详细配置 根目录下的
`.env.development`
`.env.production`
`.env.stage` 这三个文件是配置, 分别代表 本地测试,生产环境,线上测试环境

|名称|描述|
| --- | --- |
| VUE_APP_API_BASE | API接口地址 |
| VUE_APP_WEBSOCKET_URL | websocket地址 |
| VUE_APP_USER_QR_CODE_URL | 生成用户的二维码地址(用来加好友的) |
| VUE_APP_GROUP_QR_CODE_URL | 生成群二维码的地址(用来加群的) |
| VUE_APP_ROUTER_BASE | 如果用了 NGINX 做代理, 并且有二级路径, 则需要配置此项 |

# 跨域问题

> NGINX 做了端口的代理后, header 头 设置了跨域, 但是还是获取不了, 不知道为啥, 欢迎大神来指导

> 最后我的解决办法, 全部用一个域名, 然后 NGINX 做路径的转换,下面贴一下我的配置

```
# 前端路径, 注意这里配置了二级目录后, 需要 vue 的路由里面也需要配置
# 我是写在配置文件里面的 VUE_APP_ROUTER_BASE 这个配置项来控制的
location /h5 {
   try_files $uri $uri/ /h5/index.html;
}
# API 路径
location /api
{
  proxy_pass http://127.0.0.1:9000/api;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "Upgrade";
  proxy_set_header X-Real-IP $remote_addr;
}
# ws 路径
location /ws
{
  proxy_pass http://127.0.0.1:9001;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "Upgrade";
  proxy_set_header X-Real-IP $remote_addr;
}
```

# Him 组件说明
|   参数  | 说明    |  类型  |  可选值   | 默认值   |
| --- | --- |--- | --- |--- |
|  isShow   |   是否显示界面  | boolean |  —   |  true  | 
|  width |   宽度| string |  —   |  100%  | 
|  height|   高度  | string |  —   |  100%  | 
|  top |   定位的顶部位置 | string |  —   |   —| 
|  left|   定位的左边位置 | string |  —   |   — | 
|  bottom|   定位的底部位置 | string |  —   |   — | 
|  right|   定位的右边位置 | string |  —   |   — | 
|  apiBaseUrl|   api 接口的地址| string |  —   |  —   | 
|  webSocketUrl|   websocket 的连接地址 | string |  —   |  —   | 
|  userQRCodeUrl |   用户二维码的生成地址 | string |  —   |  —   | 
|  groupQRCodeUrl|   群二维码的生成地址 | string |  —   |  —   | 
| qqLoginUrl   |  QQ 登录的url | string|  —   |  —   | 
|  isAutoInit |   是否自动初始化（如果为 false 需要执行） | boolean |  —   |  true  | 
|  webSocketReconnectMaxCount |   尝试重新连接的最大次数 |number|  —   |  5 | 

# protobuf 杂谈
 
> 说明： 目前所有文件都生成好了，不需要在生成，下面简单说明下

## vue 中使用

> 目前我是安装好了 protobufjs 了，proto 文件放在 /src/proto 目录。
> 运行命令 pbjs -t json-module -w commonjs -o src/proto/proto.js  src/proto/*.proto 即可
> 由于我添加到了 package.json 中，直接运行 npm run protojs 也可以

## 页面中引入

> 上面的执行完成后，会在 src/proto 目录下生成 proto.js 文件，**由于 webpack 新版本的原因直接引入改文件会报错**
> [](https://github.com/protobufjs/protobuf.js/issues/1216)[Cannot assign to read only property'exports'of object' ](https://github.com/protobufjs/protobuf.js/issues/1216 "Cannot assign to read only property'exports'of object' ")
> 需要修改最后一行代码为：`export default $root;`

```
import protoRoot from "@/proto/proto"
const WSBaseReqProto = protoRoot.lookup("protocol.WSBaseReqProto");
const WSBaseResProto = protoRoot.lookup("protocol.WSBaseResProto");
// 编码
function (payload) {
    // 加入登录验证
    payload.uid = parseInt(this.getUid());
    payload.sid = this.getSid();
    console.log("发送的信息：");
    let errMsg = WSBaseReqProto.verify(payload);
    console.log("buff 解析错误信息：", errMsg);
    // Create a new message
    const wsData = WSBaseReqProto.create(payload); // or use .fromObject if conversion is necessary
    // Encode a message to an Uint8Array (browser) or Buffer (node)
    return WSBaseReqProto.encode(wsData).finish();
}
// 解码
function (data, cb) {
    let reader = new FileReader();
    reader.readAsArrayBuffer(data);
    reader.onload = () => {
        const buf = new Uint8Array(reader.result);
        const response = WSBaseResProto.decode(buf);
        // 成功回调
        cb(response);
    };
}
```
