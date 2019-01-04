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
    // "use strict"

    var args = window._PLUG_IM.q
        , config = {};
    if (args.length) {
        for (var i = 0; i < args.length; i++)
            config[args[i][0]] = args[i][1] || !0;
    }

    console.log(args);
    console.log(config);

    setTimeout(function () {
        console.log(window._PLUG_IM.q);
    }, 2000)

})();