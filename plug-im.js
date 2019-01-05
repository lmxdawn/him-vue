// !function(e) {
//     function t(n) {
//         if (i[n])
//             return i[n].exports;
//         var a = i[n] = {
//             exports: {},
//             id: n,
//             loaded: !1
//         };
//         return e[n].call(a.exports, a, a.exports, t),
//             a.loaded = !0,
//             a.exports
//     }
//     var i = {};
//     return t.m = e,
//         t.c = i,
//         t.p = "",
//         t(0)
// }([function(e, t) {
//     "use strict";
//     t["default"] = function() {
//         var e = window._PLUG_IM.a
//             , t = {};
//         if (e.length) {
//             for (var i = 0; i < e.length; i++)
//                 t[e[i][0]] = e[i][1] || !0;
//             console.log(t);
//             return t
//         }
//         return null
//     }
// }]);

(function () {
    "use strict"


    var plug = {}
        , utils = {}
        , config = {}
        , args = window._PLUG_IM.q || []
        , host = '';

    // 把接收的参数转为配置
    if (args.length) {
        for (var i = 0; i < args.length; i++)
            config[args[i][0]] = args[i][1] || !0;
    }

    utils.doc = {};
    utils.doc.getIdNode = function(a) {
        return document.getElementById(a)
    };

    // 初始化
    (function() {
        plug.init = function () {


        }


    })();


    // 监听外部添加的方法
    (function() {
        // 识别类型
        var _typeof = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };

        _PLUG_IM.q.push = function (event) {
            if ("object" === ("undefined" === typeof event ? "undefined" : _typeof(event)) && event.length) {
                var action = event[0]
                    , arg = event[1];
                switch (action) {
                    case "init":
                        console.log(arg);
                        break;
                    default:
                        console.log(action)
                }
            }
        }
    })();


})();