!function(e) {
    function t(n) {
        if (i[n])
            return i[n].exports;
        var a = i[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return e[n].call(a.exports, a, a.exports, t),
            a.loaded = !0,
            a.exports
    }
    var i = {};
    return t.m = e,
        t.c = i,
        t.p = "",
        t(0)
}([function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e : {
            "default": e
        }
    }
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
    ;
    i(1),
        i(2),
        i(3),
        i(6);
    var o = i(7)
        , r = n(o)
        , s = i(8)
        , l = n(s)
        , c = i(9)
        , p = n(c)
        , d = i(10)
        , u = n(d)
        , f = i(11)
        , v = n(f)
        , h = i(12)
        , g = n(h)
        , m = i(13)
        , b = n(m)
        , I = i(14)
        , y = n(I)
        , x = i(17)
        , E = n(x)
        , _ = i(35)
        , w = n(_)
        , A = i(36)
        , T = n(A)
        , k = i(37)
        , M = n(k)
        , B = i(28)
        , C = n(B)
        , Q = i(38)
        , N = n(Q)
        , O = i(25)
        , S = n(O)
        , j = i(24)
        , L = n(j)
        , R = i(29)
        , $ = n(R)
        , V = i(39)
        , D = n(V)
        , P = i(33)
        , U = n(P)
        , F = i(16)
        , H = n(F)
        , z = i(48)
        , q = n(z)
        , W = i(34)
        , G = n(W)
        , Y = i(52)
        , J = n(Y)
        , X = i(53)
        , K = n(X)
        , Z = i(54)
        , ee = n(Z)
        , te = i(55)
        , ie = i(95)
        , ne = n(ie)
        , ae = i(96)
        , oe = function(e, t, i) {
        e ? !t.withoutBtn && (!t.manualInit || t.manualInit && i.init) && (0,
                ne["default"])() : t.manualInit ? i.init && (0,
                y["default"])() : (0,
            y["default"])()
    };
    window._MEIQIA_KNOCKOFF || !function() {
        window._MEIQIA_KNOCKOFF = !0;
        var e = (0,
            w["default"])();
        v["default"].entId = e.entId,
            v["default"].manualInit = e.manualInit,
            v["default"].withoutBtn = e.withoutBtn,
            v["default"].fallback = e.fallback,
            v["default"].allSet = e.allSet,
            v["default"].convClickCallback = e.convClickCallback,
            v["default"].startConversation = e.startConversation,
            v["default"].endConversation = e.endConversation,
            v["default"].getInviting = e.getInviting,
            v["default"].getPanelVisibility = e.getPanelVisibility,
            v["default"].getUnreadMsg = e.getUnreadMsg,
            v["default"].metadata = e.metadata,
            v["default"].assign = e.assign,
            v["default"].clientId = e.clientId,
            v["default"].disableBrandLink = e.disableBrandLink,
            e.language ? v["default"].language = e.language : v["default"].language = "zh",
        v["default"].entId && (v["default"].messenger = new r["default"]("parent","MEIQIA-ECOBOOST"),
            (0,
                q["default"])(),
            (0,
                te.InitBlacklist)().then(function() {
                (0,
                    te.throttle)("/visit/init").timeout(500).then(function() {
                    oe(!0, v["default"], e)
                }, function(t) {
                    oe(!1, v["default"], e)
                })
            }, function(t) {
                oe(!1, v["default"], e)
            }),
        e.showPanel && J["default"].on("ready", function() {
            var t = "callWidget^@#"
                , i = "object" === a(e.showPanel) ? e.showPanel : v["default"].assign;
            i ? i.agentToken && (i.groupToken = null) : i = {},
                i.type = "click",
                t += JSON.stringify(i),
                v["default"].messenger.targets.iframe1.send(t)
        }),
            window._MEIQIA._SHOWPANEL = function(e) {
                J["default"].on("ready", function() {
                    var t = "callWidget^@#";
                    e = e || v["default"].assign,
                        e ? (e.type = "click",
                        e.agentToken && (e.groupToken = null)) : e = {},
                        e.type = "click",
                        t += JSON.stringify(e),
                        v["default"].messenger.targets.iframe1.send(t)
                })
            }
            ,
        e.hidePanel && J["default"].on("ready", function() {
            (0,
                S["default"])("hide"),
                (0,
                    L["default"])()
        }),
            window._MEIQIA._HIDEPANEL = function() {
                J["default"].on("ready", function() {
                    (0,
                        S["default"])("hide"),
                        (0,
                            L["default"])()
                })
            }
            ,
        e.metadata && J["default"].on("ready", function() {
            "object" !== ("undefined" == typeof metadata ? "undefined" : a(metadata)) || (0,
                u["default"])(metadata) || (0,
                U["default"])(metadata)
        }),
            window._MEIQIA._SENDMETADATA = function(e) {
                J["default"].on("ready", function() {
                    "object" !== ("undefined" == typeof e ? "undefined" : a(e)) || (0,
                        u["default"])(e) || (0,
                        U["default"])(e)
                })
            }
            ,
            v["default"].messenger.listen(function(t) {
                t = t.split("^@#");
                var i = t[0];
                !function() {
                    switch (i) {
                        case "cookies":
                            var n = JSON.parse(t[1]);
                            v["default"].trackId = n.trackId || (0,
                                    b["default"])("get", "MEIQIA_EXTRA_TRACK_ID") || g["default"].get("MEIQIA_EXTRA_TRACK_ID"),
                                v["default"].panelVisibility = n.panelVisibility,
                            n.trackId && (v["default"].history = !0),
                                (0,
                                    H["default"])(),
                                v["default"].clientId ? G["default"].getBinding() : (0,
                                    E["default"])();
                            break;
                        case "chatReady":
                            document.getElementById("MEIQIA-DOORBELL-HOLDER") && document.body.removeChild(document.getElementById("MEIQIA-DOORBELL-HOLDER"));
                            var a = document.getElementById("MEIQIA-IFRAME");
                            if (v["default"].trackId && a) {
                                var o = {
                                    entId: v["default"].entId,
                                    trackId: v["default"].trackId,
                                    history: v["default"].history,
                                    visitId: v["default"].visitId,
                                    browserId: v["default"].browserId,
                                    initData: v["default"].initData,
                                    url: v["default"].url,
                                    title: v["default"].title,
                                    panelVisibility: v["default"].panelVisibility,
                                    fallback: v["default"].fallback,
                                    disableBrandLink: v["default"].disableBrandLink,
                                    metadata: e.metadata,
                                    referrer: v["default"].referrer
                                };
                                v["default"].messenger.addTarget(a.contentWindow, "iframe1"),
                                    v["default"].messenger.targets.iframe1.send("startUp^@#" + JSON.stringify(o)),
                                "function" == typeof v["default"].getInviting && v["default"].initData.servability && 2 === v["default"].initData.visitor_status && (0,
                                    N["default"])(v["default"].initData.visitor_status_agent_token),
                                document.getElementById("MEIQIA-BTN-HOLDER") && (document.getElementById("MEIQIA-BTN-HOLDER").style.display = "block");
                                var r = {
                                    agentToken: null,
                                    groupToken: null,
                                    visibility: v["default"].panelVisibility
                                };
                                v["default"].assign && (v["default"].assign.agentToken && (r.agentToken = v["default"].assign.agentToken),
                                v["default"].assign.groupToken && (r.groupToken = v["default"].assign.groupToken)),
                                v["default"].initData.servability && 4 === v["default"].initData.visitor_status && (r.type = "automatic",
                                    v["default"].messenger.targets.iframe1.send("callWidget^@#" + JSON.stringify(r))),
                                v["default"].initData.in_queue && 4 !== v["default"].initData.visitor_status && (r.type = "queue",
                                    v["default"].messenger.targets.iframe1.send("callWidget^@#" + JSON.stringify(r))),
                                    v["default"].chatReady = !0,
                                    (0,
                                        T["default"])(v["default"].initData.servability),
                                    J["default"].emit("ready")
                            } else
                                (0,
                                    y["default"])();
                            break;
                        case "unreadMsg":
                            if ("null" !== t[1] && "false" !== t[1] && v["default"].initData.servability && "invisible" === v["default"].panelVisibility) {
                                var s = JSON.parse(t[1]);
                                (0,
                                    D["default"])(s),
                                    (0,
                                        C["default"])(s)
                            }
                            break;
                        case "hidePanel":
                            l["default"].isMobile() && history.pushState && history.state && history.state.MQ && !l["default"].isSafari() ? (history.go(-1),
                                v["default"].messenger.targets.iframe1.send("panelVisibility^@#invisible")) : ((0,
                                S["default"])("hide"),
                                (0,
                                    L["default"])());
                            break;
                        case "showPanel":
                            if ("invisible" === v["default"].panelVisibility || "force" === t[1]) {
                                if (l["default"].isMobile() && history.pushState && !l["default"].isSafari()) {
                                    var c = location.href;
                                    location.hash.indexOf("#MQPanelVisible") < 0 ? c += "#MQPanelVisible" : c = c.replace(/#MQPanelVisible/g, ""),
                                        history.pushState({
                                            MQ: 1
                                        }, null, c)
                                }
                                (0,
                                    L["default"])("hide"),
                                    (0,
                                        S["default"])()
                            }
                            break;
                        case "conversation":
                            v["default"].conversation = t[1],
                                "no" === v["default"].conversation ? (0,
                                    K["default"])() : "yes" === v["default"].conversation && (0,
                                        ee["default"])();
                            break;
                        case "newMsg":
                            if ("invisible" === v["default"].panelVisibility) {
                                (0,
                                    D["default"])(t[1]);
                                var d = {
                                    action: "set",
                                    msg: t[1]
                                };
                                v["default"].messenger.targets.iframe1.send("handleUnread^@#" + JSON.stringify(d)),
                                    (0,
                                        C["default"])(t[1])
                            }
                            break;
                        case "inviting":
                            v["default"].initData.servability && ("function" == typeof v["default"].getInviting ? (0,
                                N["default"])(t[1]) : (v["default"].agentToken = t[1],
                                v["default"].inviteType = "manual",
                                (0,
                                    $["default"])(),
                                v["default"].messenger.targets.iframe1.send("ringing^@#newChat")));
                            break;
                        case "pinScroll":
                            var u = document.getElementById("MEIQIA-PANEL-HOLDER");
                            l["default"].isThisDevice("iphone") && l["default"].isThisDevice("ucbrowser") ? l["default"].iOSversion() >= 920 && window.scrollY > 0 && (0,
                                    p["default"])(t[1], "bottom", u) : (0,
                                p["default"])(t[1], "bottom", u);
                            break;
                        case "convClickCallback":
                            (0,
                                M["default"])(t[1]);
                            break;
                        case "closeConversationCallback":
                            "function" == typeof v["default"].closeConversationCallback && setTimeout(function() {
                                v["default"].closeConversationCallback(t[1])
                            }, 500);
                            break;
                        case "akjSaveInfo":
                            (0,
                                ae.saveVisitInfo)(v["default"], window.location.hostname);
                            break;
                        case "akjDelCookies":
                            (0,
                                ae.delAkjCookie)(window.location.hostname);
                            break;
                        case "compHeight":
                            var f = window.innerHeight;
                            setTimeout(function() {
                                var e = window.innerHeight
                                    , t = Math.abs(f - e);
                                t < 200 && t > 0 ? (v["default"].messenger.targets.iframe1.send("scrollFix^@#" + t),
                                    setTimeout(function() {
                                        window.scrollTo(0, 0)
                                    }, 200)) : setTimeout(function() {
                                    window.scrollTo(0, 9999)
                                }, 0)
                            }, 300);
                            break;
                        case "fixWxScroll":
                            window.scrollTo()
                    }
                }()
            }))
    }()
}
    , function(e, t, i) {
        var n, a, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function(o, r) {
            "use strict";
            n = r,
                a = "function" == typeof n ? n.call(t, i, t, e) : n,
                !(void 0 !== a && (e.exports = a))
        }(void 0, function() {
            var e, t, i = Array, n = i.prototype, a = Object, r = a.prototype, s = Function, l = s.prototype, c = String, p = c.prototype, d = Number, u = d.prototype, f = n.slice, v = n.splice, h = n.push, g = n.unshift, m = n.concat, b = n.join, I = l.call, y = l.apply, x = Math.max, E = Math.min, _ = r.toString, w = "function" == typeof Symbol && "symbol" === o(Symbol.toStringTag), A = Function.prototype.toString, T = /^\s*class /, k = function(e) {
                try {
                    var t = A.call(e)
                        , i = t.replace(/\/\/.*\n/g, "")
                        , n = i.replace(/\/\*[.\s\S]*\*\//g, "")
                        , a = n.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                    return T.test(a)
                } catch (o) {
                    return !1
                }
            }, M = function(e) {
                try {
                    return !k(e) && (A.call(e),
                            !0)
                } catch (t) {
                    return !1
                }
            }, B = "[object Function]", C = "[object GeneratorFunction]", e = function(e) {
                if (!e)
                    return !1;
                if ("function" != typeof e && "object" !== ("undefined" == typeof e ? "undefined" : o(e)))
                    return !1;
                if (w)
                    return M(e);
                if (k(e))
                    return !1;
                var t = _.call(e);
                return t === B || t === C
            }, Q = RegExp.prototype.exec, N = function(e) {
                try {
                    return Q.call(e),
                        !0
                } catch (t) {
                    return !1
                }
            }, O = "[object RegExp]";
            t = function(e) {
                return "object" === ("undefined" == typeof e ? "undefined" : o(e)) && (w ? N(e) : _.call(e) === O)
            }
            ;
            var S, j = String.prototype.valueOf, L = function(e) {
                try {
                    return j.call(e),
                        !0
                } catch (t) {
                    return !1
                }
            }, R = "[object String]";
            S = function(e) {
                return "string" == typeof e || "object" === ("undefined" == typeof e ? "undefined" : o(e)) && (w ? L(e) : _.call(e) === R)
            }
            ;
            var $ = a.defineProperty && function() {
                    try {
                        var e = {};
                        a.defineProperty(e, "x", {
                            enumerable: !1,
                            value: e
                        });
                        for (var t in e)
                            return !1;
                        return e.x === e
                    } catch (i) {
                        return !1
                    }
                }()
                , V = function(e) {
                var t;
                return t = $ ? function(e, t, i, n) {
                    !n && t in e || a.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !1,
                        writable: !0,
                        value: i
                    })
                }
                    : function(e, t, i, n) {
                        !n && t in e || (e[t] = i)
                    }
                    ,
                    function(i, n, a) {
                        for (var o in n)
                            e.call(n, o) && t(i, o, n[o], a)
                    }
            }(r.hasOwnProperty)
                , D = function(e) {
                var t = "undefined" == typeof e ? "undefined" : o(e);
                return null === e || "object" !== t && "function" !== t
            }
                , P = d.isNaN || function(e) {
                    return e !== e
                }
                , U = {
                ToInteger: function(e) {
                    var t = +e;
                    return P(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -(1 / 0) && (t = (t > 0 || -1) * Math.floor(Math.abs(t))),
                        t
                },
                ToPrimitive: function(t) {
                    var i, n, a;
                    if (D(t))
                        return t;
                    if (n = t.valueOf,
                        e(n) && (i = n.call(t),
                            D(i)))
                        return i;
                    if (a = t.toString,
                        e(a) && (i = a.call(t),
                            D(i)))
                        return i;
                    throw new TypeError
                },
                ToObject: function(e) {
                    if (null == e)
                        throw new TypeError("can't convert " + e + " to object");
                    return a(e)
                },
                ToUint32: function(e) {
                    return e >>> 0
                }
            }
                , F = function() {};
            V(l, {
                bind: function(t) {
                    var i = this;
                    if (!e(i))
                        throw new TypeError("Function.prototype.bind called on incompatible " + i);
                    for (var n, o = f.call(arguments, 1), r = function() {
                        if (this instanceof n) {
                            var e = y.call(i, this, m.call(o, f.call(arguments)));
                            return a(e) === e ? e : this
                        }
                        return y.call(i, t, m.call(o, f.call(arguments)))
                    }, l = x(0, i.length - o.length), c = [], p = 0; p < l; p++)
                        h.call(c, "$" + p);
                    return n = s("binder", "return function (" + b.call(c, ",") + "){ return binder.apply(this, arguments); }")(r),
                    i.prototype && (F.prototype = i.prototype,
                        n.prototype = new F,
                        F.prototype = null),
                        n
                }
            });
            var H = I.bind(r.hasOwnProperty)
                , z = I.bind(r.toString)
                , q = I.bind(f)
                , W = y.bind(f)
                , G = I.bind(p.slice)
                , Y = I.bind(p.split)
                , J = I.bind(p.indexOf)
                , X = I.bind(h)
                , K = I.bind(r.propertyIsEnumerable)
                , Z = I.bind(n.sort)
                , ee = i.isArray || function(e) {
                    return "[object Array]" === z(e)
                }
                , te = 1 !== [].unshift(0);
            V(n, {
                unshift: function() {
                    return g.apply(this, arguments),
                        this.length
                }
            }, te),
                V(i, {
                    isArray: ee
                });
            var ie = a("a")
                , ne = "a" !== ie[0] || !(0 in ie)
                , ae = function(e) {
                var t = !0
                    , i = !0
                    , n = !1;
                if (e)
                    try {
                        e.call("foo", function(e, i, n) {
                            "object" !== ("undefined" == typeof n ? "undefined" : o(n)) && (t = !1)
                        }),
                            e.call([1], function() {
                                "use strict";
                                i = "string" == typeof this
                            }, "x")
                    } catch (a) {
                        n = !0
                    }
                return !!e && !n && t && i
            };
            V(n, {
                forEach: function(t) {
                    var i, n = U.ToObject(this), a = ne && S(this) ? Y(this, "") : n, o = -1, r = U.ToUint32(a.length);
                    if (arguments.length > 1 && (i = arguments[1]),
                            !e(t))
                        throw new TypeError("Array.prototype.forEach callback must be a function");
                    for (; ++o < r; )
                        o in a && ("undefined" == typeof i ? t(a[o], o, n) : t.call(i, a[o], o, n))
                }
            }, !ae(n.forEach)),
                V(n, {
                    map: function(t) {
                        var n, a = U.ToObject(this), o = ne && S(this) ? Y(this, "") : a, r = U.ToUint32(o.length), s = i(r);
                        if (arguments.length > 1 && (n = arguments[1]),
                                !e(t))
                            throw new TypeError("Array.prototype.map callback must be a function");
                        for (var l = 0; l < r; l++)
                            l in o && ("undefined" == typeof n ? s[l] = t(o[l], l, a) : s[l] = t.call(n, o[l], l, a));
                        return s
                    }
                }, !ae(n.map)),
                V(n, {
                    filter: function(t) {
                        var i, n, a = U.ToObject(this), o = ne && S(this) ? Y(this, "") : a, r = U.ToUint32(o.length), s = [];
                        if (arguments.length > 1 && (n = arguments[1]),
                                !e(t))
                            throw new TypeError("Array.prototype.filter callback must be a function");
                        for (var l = 0; l < r; l++)
                            l in o && (i = o[l],
                            ("undefined" == typeof n ? t(i, l, a) : t.call(n, i, l, a)) && X(s, i));
                        return s
                    }
                }, !ae(n.filter)),
                V(n, {
                    every: function(t) {
                        var i, n = U.ToObject(this), a = ne && S(this) ? Y(this, "") : n, o = U.ToUint32(a.length);
                        if (arguments.length > 1 && (i = arguments[1]),
                                !e(t))
                            throw new TypeError("Array.prototype.every callback must be a function");
                        for (var r = 0; r < o; r++)
                            if (r in a && !("undefined" == typeof i ? t(a[r], r, n) : t.call(i, a[r], r, n)))
                                return !1;
                        return !0
                    }
                }, !ae(n.every)),
                V(n, {
                    some: function(t) {
                        var i, n = U.ToObject(this), a = ne && S(this) ? Y(this, "") : n, o = U.ToUint32(a.length);
                        if (arguments.length > 1 && (i = arguments[1]),
                                !e(t))
                            throw new TypeError("Array.prototype.some callback must be a function");
                        for (var r = 0; r < o; r++)
                            if (r in a && ("undefined" == typeof i ? t(a[r], r, n) : t.call(i, a[r], r, n)))
                                return !0;
                        return !1
                    }
                }, !ae(n.some));
            var oe = !1;
            n.reduce && (oe = "object" === o(n.reduce.call("es5", function(e, t, i, n) {
                    return n
                }))),
                V(n, {
                    reduce: function(t) {
                        var i = U.ToObject(this)
                            , n = ne && S(this) ? Y(this, "") : i
                            , a = U.ToUint32(n.length);
                        if (!e(t))
                            throw new TypeError("Array.prototype.reduce callback must be a function");
                        if (0 === a && 1 === arguments.length)
                            throw new TypeError("reduce of empty array with no initial value");
                        var o, r = 0;
                        if (arguments.length >= 2)
                            o = arguments[1];
                        else
                            for (; ; ) {
                                if (r in n) {
                                    o = n[r++];
                                    break
                                }
                                if (++r >= a)
                                    throw new TypeError("reduce of empty array with no initial value")
                            }
                        for (; r < a; r++)
                            r in n && (o = t(o, n[r], r, i));
                        return o
                    }
                }, !oe);
            var re = !1;
            n.reduceRight && (re = "object" === o(n.reduceRight.call("es5", function(e, t, i, n) {
                    return n
                }))),
                V(n, {
                    reduceRight: function(t) {
                        var i = U.ToObject(this)
                            , n = ne && S(this) ? Y(this, "") : i
                            , a = U.ToUint32(n.length);
                        if (!e(t))
                            throw new TypeError("Array.prototype.reduceRight callback must be a function");
                        if (0 === a && 1 === arguments.length)
                            throw new TypeError("reduceRight of empty array with no initial value");
                        var o, r = a - 1;
                        if (arguments.length >= 2)
                            o = arguments[1];
                        else
                            for (; ; ) {
                                if (r in n) {
                                    o = n[r--];
                                    break
                                }
                                if (--r < 0)
                                    throw new TypeError("reduceRight of empty array with no initial value")
                            }
                        if (r < 0)
                            return o;
                        do
                            r in n && (o = t(o, n[r], r, i));
                        while (r--);return o
                    }
                }, !re);
            var se = n.indexOf && [0, 1].indexOf(1, 2) !== -1;
            V(n, {
                indexOf: function(e) {
                    var t = ne && S(this) ? Y(this, "") : U.ToObject(this)
                        , i = U.ToUint32(t.length);
                    if (0 === i)
                        return -1;
                    var n = 0;
                    for (arguments.length > 1 && (n = U.ToInteger(arguments[1])),
                             n = n >= 0 ? n : x(0, i + n); n < i; n++)
                        if (n in t && t[n] === e)
                            return n;
                    return -1
                }
            }, se);
            var le = n.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
            V(n, {
                lastIndexOf: function(e) {
                    var t = ne && S(this) ? Y(this, "") : U.ToObject(this)
                        , i = U.ToUint32(t.length);
                    if (0 === i)
                        return -1;
                    var n = i - 1;
                    for (arguments.length > 1 && (n = E(n, U.ToInteger(arguments[1]))),
                             n = n >= 0 ? n : i - Math.abs(n); n >= 0; n--)
                        if (n in t && e === t[n])
                            return n;
                    return -1
                }
            }, le);
            var ce = function() {
                var e = [1, 2]
                    , t = e.splice();
                return 2 === e.length && ee(t) && 0 === t.length
            }();
            V(n, {
                splice: function(e, t) {
                    return 0 === arguments.length ? [] : v.apply(this, arguments)
                }
            }, !ce);
            var pe = function() {
                var e = {};
                return n.splice.call(e, 0, 0, 1),
                1 === e.length
            }();
            V(n, {
                splice: function(e, t) {
                    if (0 === arguments.length)
                        return [];
                    var i = arguments;
                    return this.length = x(U.ToInteger(this.length), 0),
                    arguments.length > 0 && "number" != typeof t && (i = q(arguments),
                        i.length < 2 ? X(i, this.length - e) : i[1] = U.ToInteger(t)),
                        v.apply(this, i)
                }
            }, !pe);
            var de = function() {
                var e = new i(1e5);
                return e[8] = "x",
                    e.splice(1, 1),
                7 === e.indexOf("x")
            }()
                , ue = function() {
                var e = 256
                    , t = [];
                return t[e] = "a",
                    t.splice(e + 1, 0, "b"),
                "a" === t[e]
            }();
            V(n, {
                splice: function(e, t) {
                    for (var i, n = U.ToObject(this), a = [], o = U.ToUint32(n.length), r = U.ToInteger(e), s = r < 0 ? x(o + r, 0) : E(r, o), l = E(x(U.ToInteger(t), 0), o - s), p = 0; p < l; )
                        i = c(s + p),
                        H(n, i) && (a[p] = n[i]),
                            p += 1;
                    var d, u = q(arguments, 2), f = u.length;
                    if (f < l) {
                        p = s;
                        for (var v = o - l; p < v; )
                            i = c(p + l),
                                d = c(p + f),
                                H(n, i) ? n[d] = n[i] : delete n[d],
                                p += 1;
                        p = o;
                        for (var h = o - l + f; p > h; )
                            delete n[p - 1],
                                p -= 1
                    } else if (f > l)
                        for (p = o - l; p > s; )
                            i = c(p + l - 1),
                                d = c(p + f - 1),
                                H(n, i) ? n[d] = n[i] : delete n[d],
                                p -= 1;
                    p = s;
                    for (var g = 0; g < u.length; ++g)
                        n[p] = u[g],
                            p += 1;
                    return n.length = o - l + f,
                        a
                }
            }, !de || !ue);
            var fe, ve = n.join;
            try {
                fe = "1,2,3" !== Array.prototype.join.call("123", ",")
            } catch (he) {
                fe = !0
            }
            fe && V(n, {
                join: function(e) {
                    var t = "undefined" == typeof e ? "," : e;
                    return ve.call(S(this) ? Y(this, "") : this, t)
                }
            }, fe);
            var ge = "1,2" !== [1, 2].join(void 0);
            ge && V(n, {
                join: function(e) {
                    var t = "undefined" == typeof e ? "," : e;
                    return ve.call(this, t)
                }
            }, ge);
            var me = function(e) {
                for (var t = U.ToObject(this), i = U.ToUint32(t.length), n = 0; n < arguments.length; )
                    t[i + n] = arguments[n],
                        n += 1;
                return t.length = i + n,
                i + n
            }
                , be = function() {
                var e = {}
                    , t = Array.prototype.push.call(e, void 0);
                return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !H(e, 0)
            }();
            V(n, {
                push: function(e) {
                    return ee(this) ? h.apply(this, arguments) : me.apply(this, arguments)
                }
            }, be);
            var Ie = function() {
                var e = []
                    , t = e.push(void 0);
                return 1 !== t || 1 !== e.length || "undefined" != typeof e[0] || !H(e, 0)
            }();
            V(n, {
                push: me
            }, Ie),
                V(n, {
                    slice: function(e, t) {
                        var i = S(this) ? Y(this, "") : this;
                        return W(i, arguments)
                    }
                }, ne);
            var ye = function() {
                try {
                    return [1, 2].sort(null),
                        [1, 2].sort({}),
                        !0
                } catch (e) {}
                return !1
            }()
                , xe = function() {
                try {
                    return [1, 2].sort(/a/),
                        !1
                } catch (e) {}
                return !0
            }()
                , Ee = function() {
                try {
                    return [1, 2].sort(void 0),
                        !0
                } catch (e) {}
                return !1
            }();
            V(n, {
                sort: function(t) {
                    if ("undefined" == typeof t)
                        return Z(this);
                    if (!e(t))
                        throw new TypeError("Array.prototype.sort callback must be a function");
                    return Z(this, t)
                }
            }, ye || !Ee || !xe);
            var _e = !K({
                toString: null
            }, "toString")
                , we = K(function() {}, "prototype")
                , Ae = !H("x", "0")
                , Te = function(e) {
                var t = e.constructor;
                return t && t.prototype === e
            }
                , ke = {
                $window: !0,
                $console: !0,
                $parent: !0,
                $self: !0,
                $frame: !0,
                $frames: !0,
                $frameElement: !0,
                $webkitIndexedDB: !0,
                $webkitStorageInfo: !0,
                $external: !0
            }
                , Me = function() {
                if ("undefined" == typeof window)
                    return !1;
                for (var e in window)
                    try {
                        !ke["$" + e] && H(window, e) && null !== window[e] && "object" === o(window[e]) && Te(window[e])
                    } catch (t) {
                        return !0
                    }
                return !1
            }()
                , Be = function(e) {
                if ("undefined" == typeof window || !Me)
                    return Te(e);
                try {
                    return Te(e)
                } catch (t) {
                    return !1
                }
            }
                , Ce = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
                , Qe = Ce.length
                , Ne = function(e) {
                return "[object Arguments]" === z(e)
            }
                , Oe = function(t) {
                return null !== t && "object" === ("undefined" == typeof t ? "undefined" : o(t)) && "number" == typeof t.length && t.length >= 0 && !ee(t) && e(t.callee)
            }
                , Se = Ne(arguments) ? Ne : Oe;
            V(a, {
                keys: function(t) {
                    var i = e(t)
                        , n = Se(t)
                        , a = null !== t && "object" === ("undefined" == typeof t ? "undefined" : o(t))
                        , r = a && S(t);
                    if (!a && !i && !n)
                        throw new TypeError("Object.keys called on a non-object");
                    var s = []
                        , l = we && i;
                    if (r && Ae || n)
                        for (var p = 0; p < t.length; ++p)
                            X(s, c(p));
                    if (!n)
                        for (var d in t)
                            l && "prototype" === d || !H(t, d) || X(s, c(d));
                    if (_e)
                        for (var u = Be(t), f = 0; f < Qe; f++) {
                            var v = Ce[f];
                            u && "constructor" === v || !H(t, v) || X(s, v)
                        }
                    return s
                }
            });
            var je = a.keys && function() {
                    return 2 === a.keys(arguments).length
                }(1, 2)
                , Le = a.keys && function() {
                    var e = a.keys(arguments);
                    return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
                }(1)
                , Re = a.keys;
            V(a, {
                keys: function(e) {
                    return Re(Se(e) ? q(e) : e)
                }
            }, !je || Le);
            var $e, Ve, De = 0 !== new Date((-0xc782b5b342b24)).getUTCMonth(), Pe = new Date((-0x55d318d56a724)), Ue = new Date(14496624e5), Fe = "Mon, 01 Jan -45875 11:59:59 GMT" !== Pe.toUTCString(), He = Pe.getTimezoneOffset();
            He < -720 ? ($e = "Tue Jan 02 -45875" !== Pe.toDateString(),
                Ve = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ue.toString())) : ($e = "Mon Jan 01 -45875" !== Pe.toDateString(),
                Ve = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ue.toString()));
            var ze = I.bind(Date.prototype.getFullYear)
                , qe = I.bind(Date.prototype.getMonth)
                , We = I.bind(Date.prototype.getDate)
                , Ge = I.bind(Date.prototype.getUTCFullYear)
                , Ye = I.bind(Date.prototype.getUTCMonth)
                , Je = I.bind(Date.prototype.getUTCDate)
                , Xe = I.bind(Date.prototype.getUTCDay)
                , Ke = I.bind(Date.prototype.getUTCHours)
                , Ze = I.bind(Date.prototype.getUTCMinutes)
                , et = I.bind(Date.prototype.getUTCSeconds)
                , tt = I.bind(Date.prototype.getUTCMilliseconds)
                , it = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
                , nt = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                , at = function(e, t) {
                return We(new Date(t,e,0))
            };
            V(Date.prototype, {
                getFullYear: function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var e = ze(this);
                    return e < 0 && qe(this) > 11 ? e + 1 : e
                },
                getMonth: function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var e = ze(this)
                        , t = qe(this);
                    return e < 0 && t > 11 ? 0 : t
                },
                getDate: function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var e = ze(this)
                        , t = qe(this)
                        , i = We(this);
                    if (e < 0 && t > 11) {
                        if (12 === t)
                            return i;
                        var n = at(0, e + 1);
                        return n - i + 1
                    }
                    return i
                },
                getUTCFullYear: function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var e = Ge(this);
                    return e < 0 && Ye(this) > 11 ? e + 1 : e
                },
                getUTCMonth: function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var e = Ge(this)
                        , t = Ye(this);
                    return e < 0 && t > 11 ? 0 : t
                },
                getUTCDate: function() {
                    if (!(this && this instanceof Date))
                        throw new TypeError("this is not a Date object.");
                    var e = Ge(this)
                        , t = Ye(this)
                        , i = Je(this);
                    if (e < 0 && t > 11) {
                        if (12 === t)
                            return i;
                        var n = at(0, e + 1);
                        return n - i + 1
                    }
                    return i
                }
            }, De),
                V(Date.prototype, {
                    toUTCString: function() {
                        if (!(this && this instanceof Date))
                            throw new TypeError("this is not a Date object.");
                        var e = Xe(this)
                            , t = Je(this)
                            , i = Ye(this)
                            , n = Ge(this)
                            , a = Ke(this)
                            , o = Ze(this)
                            , r = et(this);
                        return it[e] + ", " + (t < 10 ? "0" + t : t) + " " + nt[i] + " " + n + " " + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o) + ":" + (r < 10 ? "0" + r : r) + " GMT"
                    }
                }, De || Fe),
                V(Date.prototype, {
                    toDateString: function() {
                        if (!(this && this instanceof Date))
                            throw new TypeError("this is not a Date object.");
                        var e = this.getDay()
                            , t = this.getDate()
                            , i = this.getMonth()
                            , n = this.getFullYear();
                        return it[e] + " " + nt[i] + " " + (t < 10 ? "0" + t : t) + " " + n
                    }
                }, De || $e),
            (De || Ve) && (Date.prototype.toString = function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = this.getDay()
                    , t = this.getDate()
                    , i = this.getMonth()
                    , n = this.getFullYear()
                    , a = this.getHours()
                    , o = this.getMinutes()
                    , r = this.getSeconds()
                    , s = this.getTimezoneOffset()
                    , l = Math.floor(Math.abs(s) / 60)
                    , c = Math.floor(Math.abs(s) % 60);
                return it[e] + " " + nt[i] + " " + (t < 10 ? "0" + t : t) + " " + n + " " + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o) + ":" + (r < 10 ? "0" + r : r) + " GMT" + (s > 0 ? "-" : "+") + (l < 10 ? "0" + l : l) + (c < 10 ? "0" + c : c)
            }
                ,
            $ && a.defineProperty(Date.prototype, "toString", {
                configurable: !0,
                enumerable: !1,
                writable: !0
            }));
            var ot = -621987552e5
                , rt = "-000001"
                , st = Date.prototype.toISOString && new Date(ot).toISOString().indexOf(rt) === -1
                , lt = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date((-1)).toISOString()
                , ct = I.bind(Date.prototype.getTime);
            V(Date.prototype, {
                toISOString: function() {
                    if (!isFinite(this) || !isFinite(ct(this)))
                        throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                    var e = Ge(this)
                        , t = Ye(this);
                    e += Math.floor(t / 12),
                        t = (t % 12 + 12) % 12;
                    var i = [t + 1, Je(this), Ke(this), Ze(this), et(this)];
                    e = (e < 0 ? "-" : e > 9999 ? "+" : "") + G("00000" + Math.abs(e), 0 <= e && e <= 9999 ? -4 : -6);
                    for (var n = 0; n < i.length; ++n)
                        i[n] = G("00" + i[n], -2);
                    return e + "-" + q(i, 0, 2).join("-") + "T" + q(i, 2).join(":") + "." + G("000" + tt(this), -3) + "Z"
                }
            }, st || lt);
            var pt = function() {
                try {
                    return Date.prototype.toJSON && null === new Date(NaN).toJSON() && new Date(ot).toJSON().indexOf(rt) !== -1 && Date.prototype.toJSON.call({
                            toISOString: function() {
                                return !0
                            }
                        })
                } catch (e) {
                    return !1
                }
            }();
            pt || (Date.prototype.toJSON = function(t) {
                    var i = a(this)
                        , n = U.ToPrimitive(i);
                    if ("number" == typeof n && !isFinite(n))
                        return null;
                    var o = i.toISOString;
                    if (!e(o))
                        throw new TypeError("toISOString property is not callable");
                    return o.call(i)
                }
            );
            var dt = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z")
                , ut = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"))
                , ft = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
            if (ft || ut || !dt) {
                var vt = Math.pow(2, 31) - 1
                    , ht = P(new Date(1970,0,1,0,0,0,vt + 1).getTime());
                Date = function(e) {
                    var t = function(i, n, a, o, r, s, l) {
                        var p, d = arguments.length;
                        if (this instanceof e) {
                            var u = s
                                , f = l;
                            if (ht && d >= 7 && l > vt) {
                                var v = Math.floor(l / vt) * vt
                                    , h = Math.floor(v / 1e3);
                                u += h,
                                    f -= 1e3 * h
                            }
                            p = 1 === d && c(i) === i ? new e(t.parse(i)) : d >= 7 ? new e(i,n,a,o,r,u,f) : d >= 6 ? new e(i,n,a,o,r,u) : d >= 5 ? new e(i,n,a,o,r) : d >= 4 ? new e(i,n,a,o) : d >= 3 ? new e(i,n,a) : d >= 2 ? new e(i,n) : d >= 1 ? new e(i instanceof e ? +i : i) : new e
                        } else
                            p = e.apply(this, arguments);
                        return D(p) || V(p, {
                            constructor: t
                        }, !0),
                            p
                    }
                        , i = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$")
                        , n = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]
                        , a = function(e, t) {
                        var i = t > 1 ? 1 : 0;
                        return n[t] + Math.floor((e - 1969 + i) / 4) - Math.floor((e - 1901 + i) / 100) + Math.floor((e - 1601 + i) / 400) + 365 * (e - 1970)
                    }
                        , o = function(t) {
                        var i = 0
                            , n = t;
                        if (ht && n > vt) {
                            var a = Math.floor(n / vt) * vt
                                , o = Math.floor(a / 1e3);
                            i += o,
                                n -= 1e3 * o
                        }
                        return d(new e(1970,0,1,0,0,i,n))
                    };
                    for (var r in e)
                        H(e, r) && (t[r] = e[r]);
                    V(t, {
                        now: e.now,
                        UTC: e.UTC
                    }, !0),
                        t.prototype = e.prototype,
                        V(t.prototype, {
                            constructor: t
                        }, !0);
                    var s = function(t) {
                        var n = i.exec(t);
                        if (n) {
                            var r, s = d(n[1]), l = d(n[2] || 1) - 1, c = d(n[3] || 1) - 1, p = d(n[4] || 0), u = d(n[5] || 0), f = d(n[6] || 0), v = Math.floor(1e3 * d(n[7] || 0)), h = Boolean(n[4] && !n[8]), g = "-" === n[9] ? 1 : -1, m = d(n[10] || 0), b = d(n[11] || 0), I = u > 0 || f > 0 || v > 0;
                            return p < (I ? 24 : 25) && u < 60 && f < 60 && v < 1e3 && l > -1 && l < 12 && m < 24 && b < 60 && c > -1 && c < a(s, l + 1) - a(s, l) && (r = 60 * (24 * (a(s, l) + c) + p + m * g),
                                r = 1e3 * (60 * (r + u + b * g) + f) + v,
                            h && (r = o(r)),
                            -864e13 <= r && r <= 864e13) ? r : NaN
                        }
                        return e.parse.apply(this, arguments)
                    };
                    return V(t, {
                        parse: s
                    }),
                        t
                }(Date)
            }
            Date.now || (Date.now = function() {
                    return (new Date).getTime()
                }
            );
            var gt = u.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))
                , mt = {
                base: 1e7,
                size: 6,
                data: [0, 0, 0, 0, 0, 0],
                multiply: function(e, t) {
                    for (var i = -1, n = t; ++i < mt.size; )
                        n += e * mt.data[i],
                            mt.data[i] = n % mt.base,
                            n = Math.floor(n / mt.base)
                },
                divide: function(e) {
                    for (var t = mt.size, i = 0; --t >= 0; )
                        i += mt.data[t],
                            mt.data[t] = Math.floor(i / e),
                            i = i % e * mt.base
                },
                numToString: function() {
                    for (var e = mt.size, t = ""; --e >= 0; )
                        if ("" !== t || 0 === e || 0 !== mt.data[e]) {
                            var i = c(mt.data[e]);
                            "" === t ? t = i : t += G("0000000", 0, 7 - i.length) + i
                        }
                    return t
                },
                pow: function Rt(e, t, i) {
                    return 0 === t ? i : t % 2 === 1 ? Rt(e, t - 1, i * e) : Rt(e * e, t / 2, i)
                },
                log: function(e) {
                    for (var t = 0, i = e; i >= 4096; )
                        t += 12,
                            i /= 4096;
                    for (; i >= 2; )
                        t += 1,
                            i /= 2;
                    return t
                }
            }
                , bt = function(e) {
                var t, i, n, a, o, r, s, l;
                if (t = d(e),
                        t = P(t) ? 0 : Math.floor(t),
                    t < 0 || t > 20)
                    throw new RangeError("Number.toFixed called with invalid number of decimals");
                if (i = d(this),
                        P(i))
                    return "NaN";
                if (i <= -1e21 || i >= 1e21)
                    return c(i);
                if (n = "",
                    i < 0 && (n = "-",
                        i = -i),
                        a = "0",
                    i > 1e-21)
                    if (o = mt.log(i * mt.pow(2, 69, 1)) - 69,
                            r = o < 0 ? i * mt.pow(2, -o, 1) : i / mt.pow(2, o, 1),
                            r *= 4503599627370496,
                            o = 52 - o,
                        o > 0) {
                        for (mt.multiply(0, r),
                                 s = t; s >= 7; )
                            mt.multiply(1e7, 0),
                                s -= 7;
                        for (mt.multiply(mt.pow(10, s, 1), 0),
                                 s = o - 1; s >= 23; )
                            mt.divide(1 << 23),
                                s -= 23;
                        mt.divide(1 << s),
                            mt.multiply(1, 1),
                            mt.divide(2),
                            a = mt.numToString()
                    } else
                        mt.multiply(0, r),
                            mt.multiply(1 << -o, 0),
                            a = mt.numToString() + G("0.00000000000000000000", 2, 2 + t);
                return t > 0 ? (l = a.length,
                    a = l <= t ? n + G("0.0000000000000000000", 0, t - l + 2) + a : n + G(a, 0, l - t) + "." + G(a, l - t)) : a = n + a,
                    a
            };
            V(u, {
                toFixed: bt
            }, gt);
            var It = function() {
                try {
                    return "1" === 1..toPrecision(void 0)
                } catch (e) {
                    return !0
                }
            }()
                , yt = u.toPrecision;
            V(u, {
                toPrecision: function(e) {
                    return "undefined" == typeof e ? yt.call(this) : yt.call(this, e)
                }
            }, It),
                2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? !function() {
                    var e = "undefined" == typeof /()??/.exec("")[1]
                        , i = Math.pow(2, 32) - 1;
                    p.split = function(n, a) {
                        var o = String(this);
                        if ("undefined" == typeof n && 0 === a)
                            return [];
                        if (!t(n))
                            return Y(this, n, a);
                        var r, s, l, c, p = [], d = (n.ignoreCase ? "i" : "") + (n.multiline ? "m" : "") + (n.unicode ? "u" : "") + (n.sticky ? "y" : ""), u = 0, f = new RegExp(n.source,d + "g");
                        e || (r = new RegExp("^" + f.source + "$(?!\\s)",d));
                        var v = "undefined" == typeof a ? i : U.ToUint32(a);
                        for (s = f.exec(o); s && (l = s.index + s[0].length,
                            !(l > u && (X(p, G(o, u, s.index)),
                            !e && s.length > 1 && s[0].replace(r, function() {
                                for (var e = 1; e < arguments.length - 2; e++)
                                    "undefined" == typeof arguments[e] && (s[e] = void 0)
                            }),
                            s.length > 1 && s.index < o.length && h.apply(p, q(s, 1)),
                                c = s[0].length,
                                u = l,
                            p.length >= v))); )
                            f.lastIndex === s.index && f.lastIndex++,
                                s = f.exec(o);
                        return u === o.length ? !c && f.test("") || X(p, "") : X(p, G(o, u)),
                            p.length > v ? q(p, 0, v) : p
                    }
                }() : "0".split(void 0, 0).length && (p.split = function(e, t) {
                            return "undefined" == typeof e && 0 === t ? [] : Y(this, e, t)
                        }
                    );
            var xt = p.replace
                , Et = function() {
                var e = [];
                return "x".replace(/x(.)?/g, function(t, i) {
                    X(e, i)
                }),
                1 === e.length && "undefined" == typeof e[0]
            }();
            Et || (p.replace = function(i, n) {
                    var a = e(n)
                        , o = t(i) && /\)[*?]/.test(i.source);
                    if (a && o) {
                        var r = function(e) {
                            var t = arguments.length
                                , a = i.lastIndex;
                            i.lastIndex = 0;
                            var o = i.exec(e) || [];
                            return i.lastIndex = a,
                                X(o, arguments[t - 2], arguments[t - 1]),
                                n.apply(this, o)
                        };
                        return xt.call(this, i, r)
                    }
                    return xt.call(this, i, n)
                }
            );
            var _t = p.substr
                , wt = "".substr && "b" !== "0b".substr(-1);
            V(p, {
                substr: function(e, t) {
                    var i = e;
                    return e < 0 && (i = x(this.length + e, 0)),
                        _t.call(this, i, t)
                }
            }, wt);
            var At = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff"
                , Tt = "​"
                , kt = "[" + At + "]"
                , Mt = new RegExp("^" + kt + kt + "*")
                , Bt = new RegExp(kt + kt + "*$")
                , Ct = p.trim && (At.trim() || !Tt.trim());
            V(p, {
                trim: function() {
                    if ("undefined" == typeof this || null === this)
                        throw new TypeError("can't convert " + this + " to object");
                    return c(this).replace(Mt, "").replace(Bt, "")
                }
            }, Ct);
            var Qt = I.bind(String.prototype.trim)
                , Nt = p.lastIndexOf && "abcあい".lastIndexOf("あい", 2) !== -1;
            V(p, {
                lastIndexOf: function(e) {
                    if ("undefined" == typeof this || null === this)
                        throw new TypeError("can't convert " + this + " to object");
                    for (var t = c(this), i = c(e), n = arguments.length > 1 ? d(arguments[1]) : NaN, a = P(n) ? 1 / 0 : U.ToInteger(n), o = E(x(a, 0), t.length), r = i.length, s = o + r; s > 0; ) {
                        s = x(0, s - r);
                        var l = J(G(t, s, o + r), i);
                        if (l !== -1)
                            return s + l
                    }
                    return -1
                }
            }, Nt);
            var Ot = p.lastIndexOf;
            if (V(p, {
                    lastIndexOf: function(e) {
                        return Ot.apply(this, arguments)
                    }
                }, 1 !== p.lastIndexOf.length),
                8 === parseInt(At + "08") && 22 === parseInt(At + "0x16") || (parseInt = function(e) {
                    var t = /^[\-+]?0[xX]/;
                    return function(i, n) {
                        var a = Qt(String(i))
                            , o = d(n) || (t.test(a) ? 16 : 10);
                        return e(a, o)
                    }
                }(parseInt)),
                1 / parseFloat("-0") !== -(1 / 0) && (parseFloat = function(e) {
                    return function(t) {
                        var i = Qt(String(t))
                            , n = e(i);
                        return 0 === n && "-" === G(i, 0, 1) ? -0 : n
                    }
                }(parseFloat)),
                "RangeError: test" !== String(new RangeError("test"))) {
                var St = function() {
                    if ("undefined" == typeof this || null === this)
                        throw new TypeError("can't convert " + this + " to object");
                    var e = this.name;
                    "undefined" == typeof e ? e = "Error" : "string" != typeof e && (e = c(e));
                    var t = this.message;
                    return "undefined" == typeof t ? t = "" : "string" != typeof t && (t = c(t)),
                        e ? t ? e + ": " + t : e : t
                };
                Error.prototype.toString = St
            }
            if ($) {
                var jt = function(e, t) {
                    if (K(e, t)) {
                        var i = Object.getOwnPropertyDescriptor(e, t);
                        i.configurable && (i.enumerable = !1,
                            Object.defineProperty(e, t, i))
                    }
                };
                jt(Error.prototype, "message"),
                "" !== Error.prototype.message && (Error.prototype.message = ""),
                    jt(Error.prototype, "name")
            }
            if ("/a/gim" !== String(/a/gim)) {
                var Lt = function() {
                    var e = "/" + this.source + "/";
                    return this.global && (e += "g"),
                    this.ignoreCase && (e += "i"),
                    this.multiline && (e += "m"),
                        e
                };
                RegExp.prototype.toString = Lt
            }
        })
    }
    , function(e, t, i) {
        var n, a, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function(o, r) {
            "use strict";
            n = r,
                a = "function" == typeof n ? n.call(t, i, t, e) : n,
                !(void 0 !== a && (e.exports = a))
        }(void 0, function() {
            var e, t, i, n, a = Function.call, r = Object.prototype, s = a.bind(r.hasOwnProperty), l = a.bind(r.propertyIsEnumerable), c = a.bind(r.toString), p = s(r, "__defineGetter__");
            p && (e = a.bind(r.__defineGetter__),
                t = a.bind(r.__defineSetter__),
                i = a.bind(r.__lookupGetter__),
                n = a.bind(r.__lookupSetter__));
            var d = function(e) {
                return null == e || "object" !== ("undefined" == typeof e ? "undefined" : o(e)) && "function" != typeof e
            };
            Object.getPrototypeOf || (Object.getPrototypeOf = function(e) {
                    var t = e.__proto__;
                    return t || null === t ? t : "[object Function]" === c(e.constructor) ? e.constructor.prototype : e instanceof Object ? r : null
                }
            );
            var u = function(e) {
                try {
                    return e.sentinel = 0,
                    0 === Object.getOwnPropertyDescriptor(e, "sentinel").value;
                } catch (t) {
                    return !1
                }
            };
            if (Object.defineProperty) {
                var f = u({})
                    , v = "undefined" == typeof document || u(document.createElement("div"));
                if (!v || !f)
                    var h = Object.getOwnPropertyDescriptor
            }
            if (!Object.getOwnPropertyDescriptor || h) {
                var g = "Object.getOwnPropertyDescriptor called on a non-object: ";
                Object.getOwnPropertyDescriptor = function(e, t) {
                    if (d(e))
                        throw new TypeError(g + e);
                    if (h)
                        try {
                            return h.call(Object, e, t)
                        } catch (a) {}
                    var o;
                    if (!s(e, t))
                        return o;
                    if (o = {
                            enumerable: l(e, t),
                            configurable: !0
                        },
                            p) {
                        var c = e.__proto__
                            , u = e !== r;
                        u && (e.__proto__ = r);
                        var f = i(e, t)
                            , v = n(e, t);
                        if (u && (e.__proto__ = c),
                            f || v)
                            return f && (o.get = f),
                            v && (o.set = v),
                                o
                    }
                    return o.value = e[t],
                        o.writable = !0,
                        o
                }
            }
            if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function(e) {
                        return Object.keys(e)
                    }
                ),
                    !Object.create) {
                var m, b = !({
                    __proto__: null
                }instanceof Object), I = function() {
                    if (!document.domain)
                        return !1;
                    try {
                        return !!new ActiveXObject("htmlfile")
                    } catch (e) {
                        return !1
                    }
                }, y = function() {
                    var e, t;
                    t = new ActiveXObject("htmlfile");
                    var i = "script";
                    return t.write("<" + i + "></" + i + ">"),
                        t.close(),
                        e = t.parentWindow.Object.prototype,
                        t = null,
                        e
                }, x = function() {
                    var e, t = document.createElement("iframe"), i = document.body || document.documentElement;
                    return t.style.display = "none",
                        i.appendChild(t),
                        t.src = "javascript:",
                        e = t.contentWindow.Object.prototype,
                        i.removeChild(t),
                        t = null,
                        e
                };
                m = b || "undefined" == typeof document ? function() {
                    return {
                        __proto__: null
                    }
                }
                    : function() {
                        var e = I() ? y() : x();
                        delete e.constructor,
                            delete e.hasOwnProperty,
                            delete e.propertyIsEnumerable,
                            delete e.isPrototypeOf,
                            delete e.toLocaleString,
                            delete e.toString,
                            delete e.valueOf;
                        var t = function() {};
                        return t.prototype = e,
                            m = function() {
                                return new t
                            }
                            ,
                            new t
                    }
                    ,
                    Object.create = function(e, t) {
                        var i, n = function() {};
                        if (null === e)
                            i = m();
                        else {
                            if (null !== e && d(e))
                                throw new TypeError("Object prototype may only be an Object or null");
                            n.prototype = e,
                                i = new n,
                                i.__proto__ = e
                        }
                        return void 0 !== t && Object.defineProperties(i, t),
                            i
                    }
            }
            var E = function(e) {
                try {
                    return Object.defineProperty(e, "sentinel", {}),
                    "sentinel"in e
                } catch (t) {
                    return !1
                }
            };
            if (Object.defineProperty) {
                var _ = E({})
                    , w = "undefined" == typeof document || E(document.createElement("div"));
                if (!_ || !w)
                    var A = Object.defineProperty
                        , T = Object.defineProperties
            }
            if (!Object.defineProperty || A) {
                var k = "Property description must be an object: "
                    , M = "Object.defineProperty called on non-object: "
                    , B = "getters & setters can not be defined on this javascript engine";
                Object.defineProperty = function(a, o, s) {
                    if (d(a))
                        throw new TypeError(M + a);
                    if (d(s))
                        throw new TypeError(k + s);
                    if (A)
                        try {
                            return A.call(Object, a, o, s)
                        } catch (l) {}
                    if ("value"in s)
                        if (p && (i(a, o) || n(a, o))) {
                            var c = a.__proto__;
                            a.__proto__ = r,
                                delete a[o],
                                a[o] = s.value,
                                a.__proto__ = c
                        } else
                            a[o] = s.value;
                    else {
                        var u = "get"in s
                            , f = "set"in s;
                        if (!p && (u || f))
                            throw new TypeError(B);
                        u && e(a, o, s.get),
                        f && t(a, o, s.set)
                    }
                    return a
                }
            }
            Object.defineProperties && !T || (Object.defineProperties = function(e, t) {
                    if (T)
                        try {
                            return T.call(Object, e, t)
                        } catch (i) {}
                    return Object.keys(t).forEach(function(i) {
                        "__proto__" !== i && Object.defineProperty(e, i, t[i])
                    }),
                        e
                }
            ),
            Object.seal || (Object.seal = function(e) {
                    if (Object(e) !== e)
                        throw new TypeError("Object.seal can only be called on Objects.");
                    return e
                }
            ),
            Object.freeze || (Object.freeze = function(e) {
                    if (Object(e) !== e)
                        throw new TypeError("Object.freeze can only be called on Objects.");
                    return e
                }
            );
            try {
                Object.freeze(function() {})
            } catch (C) {
                Object.freeze = function(e) {
                    return function(t) {
                        return "function" == typeof t ? t : e(t)
                    }
                }(Object.freeze)
            }
            Object.preventExtensions || (Object.preventExtensions = function(e) {
                    if (Object(e) !== e)
                        throw new TypeError("Object.preventExtensions can only be called on Objects.");
                    return e
                }
            ),
            Object.isSealed || (Object.isSealed = function(e) {
                    if (Object(e) !== e)
                        throw new TypeError("Object.isSealed can only be called on Objects.");
                    return !1
                }
            ),
            Object.isFrozen || (Object.isFrozen = function(e) {
                    if (Object(e) !== e)
                        throw new TypeError("Object.isFrozen can only be called on Objects.");
                    return !1
                }
            ),
            Object.isExtensible || (Object.isExtensible = function(e) {
                    if (Object(e) !== e)
                        throw new TypeError("Object.isExtensible can only be called on Objects.");
                    for (var t = ""; s(e, t); )
                        t += "?";
                    e[t] = !0;
                    var i = s(e, t);
                    return delete e[t],
                        i
                }
            )
        })
    }
    , function(e, t, i) {
        var n;
        (function(e, a) {
                "use strict";
                var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                ;
                (function() {
                        function r(e, t) {
                            function i(e) {
                                if (i[e] !== m)
                                    return i[e];
                                var o;
                                if ("bug-string-char-index" == e)
                                    o = "a" != "a"[0];
                                else if ("json" == e)
                                    o = i("json-stringify") && i("json-parse");
                                else {
                                    var r, s = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                                    if ("json-stringify" == e) {
                                        var l = t.stringify
                                            , p = "function" == typeof l && y;
                                        if (p) {
                                            (r = function() {
                                                    return 1
                                                }
                                            ).toJSON = r;
                                            try {
                                                p = "0" === l(0) && "0" === l(new n) && '""' == l(new a) && l(I) === m && l(m) === m && l() === m && "1" === l(r) && "[1]" == l([r]) && "[null]" == l([m]) && "null" == l(null) && "[null,null,null]" == l([m, I, null]) && l({
                                                        a: [r, !0, !1, null, "\0\b\n\f\r\t"]
                                                    }) == s && "1" === l(null, r) && "[\n 1,\n 2\n]" == l([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == l(new c((-864e13))) && '"+275760-09-13T00:00:00.000Z"' == l(new c(864e13)) && '"-000001-01-01T00:00:00.000Z"' == l(new c((-621987552e5))) && '"1969-12-31T23:59:59.999Z"' == l(new c((-1)))
                                            } catch (d) {
                                                p = !1
                                            }
                                        }
                                        o = p
                                    }
                                    if ("json-parse" == e) {
                                        var u = t.parse;
                                        if ("function" == typeof u)
                                            try {
                                                if (0 === u("0") && !u(!1)) {
                                                    r = u(s);
                                                    var f = 5 == r.a.length && 1 === r.a[0];
                                                    if (f) {
                                                        try {
                                                            f = !u('"\t"')
                                                        } catch (d) {}
                                                        if (f)
                                                            try {
                                                                f = 1 !== u("01")
                                                            } catch (d) {}
                                                        if (f)
                                                            try {
                                                                f = 1 !== u("1.")
                                                            } catch (d) {}
                                                    }
                                                }
                                            } catch (d) {
                                                f = !1
                                            }
                                        o = f
                                    }
                                }
                                return i[e] = !!o
                            }
                            e || (e = p.Object()),
                            t || (t = p.Object());
                            var n = e.Number || p.Number
                                , a = e.String || p.String
                                , s = e.Object || p.Object
                                , c = e.Date || p.Date
                                , d = e.SyntaxError || p.SyntaxError
                                , u = e.TypeError || p.TypeError
                                , f = e.Math || p.Math
                                , v = e.JSON || p.JSON;
                            "object" == ("undefined" == typeof v ? "undefined" : o(v)) && v && (t.stringify = v.stringify,
                                t.parse = v.parse);
                            var h, g, m, b = s.prototype, I = b.toString, y = new c((-0xc782b5b800cec));
                            try {
                                y = y.getUTCFullYear() == -109252 && 0 === y.getUTCMonth() && 1 === y.getUTCDate() && 10 == y.getUTCHours() && 37 == y.getUTCMinutes() && 6 == y.getUTCSeconds() && 708 == y.getUTCMilliseconds()
                            } catch (x) {}
                            if (!i("json")) {
                                var E = "[object Function]"
                                    , _ = "[object Date]"
                                    , w = "[object Number]"
                                    , A = "[object String]"
                                    , T = "[object Array]"
                                    , k = "[object Boolean]"
                                    , M = i("bug-string-char-index");
                                if (!y)
                                    var B = f.floor
                                        , C = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                                        , Q = function(e, t) {
                                        return C[t] + 365 * (e - 1970) + B((e - 1969 + (t = +(t > 1))) / 4) - B((e - 1901 + t) / 100) + B((e - 1601 + t) / 400)
                                    };
                                if ((h = b.hasOwnProperty) || (h = function(e) {
                                            var t, i = {};
                                            return (i.__proto__ = null,
                                                i.__proto__ = {
                                                    toString: 1
                                                },
                                                i).toString != I ? h = function(e) {
                                                var t = this.__proto__
                                                    , i = e in (this.__proto__ = null,
                                                        this);
                                                return this.__proto__ = t,
                                                    i
                                            }
                                                : (t = i.constructor,
                                                        h = function(e) {
                                                            var i = (this.constructor || t).prototype;
                                                            return e in this && !(e in i && this[e] === i[e])
                                                        }
                                                ),
                                                i = null,
                                                h.call(this, e)
                                        }
                                    ),
                                        g = function(e, t) {
                                            var i, n, a, r = 0;
                                            (i = function() {
                                                    this.valueOf = 0
                                                }
                                            ).prototype.valueOf = 0,
                                                n = new i;
                                            for (a in n)
                                                h.call(n, a) && r++;
                                            return i = n = null,
                                                r ? g = 2 == r ? function(e, t) {
                                                    var i, n = {}, a = I.call(e) == E;
                                                    for (i in e)
                                                        a && "prototype" == i || h.call(n, i) || !(n[i] = 1) || !h.call(e, i) || t(i)
                                                }
                                                    : function(e, t) {
                                                        var i, n, a = I.call(e) == E;
                                                        for (i in e)
                                                            a && "prototype" == i || !h.call(e, i) || (n = "constructor" === i) || t(i);
                                                        (n || h.call(e, i = "constructor")) && t(i)
                                                    }
                                                    : (n = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                                                        g = function(e, t) {
                                                            var i, a, r = I.call(e) == E, s = !r && "function" != typeof e.constructor && l[o(e.hasOwnProperty)] && e.hasOwnProperty || h;
                                                            for (i in e)
                                                                r && "prototype" == i || !s.call(e, i) || t(i);
                                                            for (a = n.length; i = n[--a]; s.call(e, i) && t(i))
                                                                ;
                                                        }
                                                ),
                                                g(e, t)
                                        }
                                        ,
                                        !i("json-stringify")) {
                                    var N = {
                                        92: "\\\\",
                                        34: '\\"',
                                        8: "\\b",
                                        12: "\\f",
                                        10: "\\n",
                                        13: "\\r",
                                        9: "\\t"
                                    }
                                        , O = "000000"
                                        , S = function(e, t) {
                                        return (O + (t || 0)).slice(-e)
                                    }
                                        , j = "\\u00"
                                        , L = function(e) {
                                        for (var t = '"', i = 0, n = e.length, a = !M || n > 10, o = a && (M ? e.split("") : e); i < n; i++) {
                                            var r = e.charCodeAt(i);
                                            switch (r) {
                                                case 8:
                                                case 9:
                                                case 10:
                                                case 12:
                                                case 13:
                                                case 34:
                                                case 92:
                                                    t += N[r];
                                                    break;
                                                default:
                                                    if (r < 32) {
                                                        t += j + S(2, r.toString(16));
                                                        break
                                                    }
                                                    t += a ? o[i] : e.charAt(i)
                                            }
                                        }
                                        return t + '"'
                                    }
                                        , R = function W(e, t, i, n, a, r, s) {
                                        var l, c, p, d, f, v, b, y, x, E, M, C, N, O, j, R;
                                        try {
                                            l = t[e]
                                        } catch ($) {}
                                        if ("object" == ("undefined" == typeof l ? "undefined" : o(l)) && l)
                                            if (c = I.call(l),
                                                c != _ || h.call(l, "toJSON"))
                                                "function" == typeof l.toJSON && (c != w && c != A && c != T || h.call(l, "toJSON")) && (l = l.toJSON(e));
                                            else if (l > -1 / 0 && l < 1 / 0) {
                                                if (Q) {
                                                    for (f = B(l / 864e5),
                                                             p = B(f / 365.2425) + 1970 - 1; Q(p + 1, 0) <= f; p++)
                                                        ;
                                                    for (d = B((f - Q(p, 0)) / 30.42); Q(p, d + 1) <= f; d++)
                                                        ;
                                                    f = 1 + f - Q(p, d),
                                                        v = (l % 864e5 + 864e5) % 864e5,
                                                        b = B(v / 36e5) % 24,
                                                        y = B(v / 6e4) % 60,
                                                        x = B(v / 1e3) % 60,
                                                        E = v % 1e3
                                                } else
                                                    p = l.getUTCFullYear(),
                                                        d = l.getUTCMonth(),
                                                        f = l.getUTCDate(),
                                                        b = l.getUTCHours(),
                                                        y = l.getUTCMinutes(),
                                                        x = l.getUTCSeconds(),
                                                        E = l.getUTCMilliseconds();
                                                l = (p <= 0 || p >= 1e4 ? (p < 0 ? "-" : "+") + S(6, p < 0 ? -p : p) : S(4, p)) + "-" + S(2, d + 1) + "-" + S(2, f) + "T" + S(2, b) + ":" + S(2, y) + ":" + S(2, x) + "." + S(3, E) + "Z"
                                            } else
                                                l = null;
                                        if (i && (l = i.call(t, e, l)),
                                            null === l)
                                            return "null";
                                        if (c = I.call(l),
                                            c == k)
                                            return "" + l;
                                        if (c == w)
                                            return l > -1 / 0 && l < 1 / 0 ? "" + l : "null";
                                        if (c == A)
                                            return L("" + l);
                                        if ("object" == ("undefined" == typeof l ? "undefined" : o(l))) {
                                            for (O = s.length; O--; )
                                                if (s[O] === l)
                                                    throw u();
                                            if (s.push(l),
                                                    M = [],
                                                    j = r,
                                                    r += a,
                                                c == T) {
                                                for (N = 0,
                                                         O = l.length; N < O; N++)
                                                    C = W(N, l, i, n, a, r, s),
                                                        M.push(C === m ? "null" : C);
                                                R = M.length ? a ? "[\n" + r + M.join(",\n" + r) + "\n" + j + "]" : "[" + M.join(",") + "]" : "[]"
                                            } else
                                                g(n || l, function(e) {
                                                    var t = W(e, l, i, n, a, r, s);
                                                    t !== m && M.push(L(e) + ":" + (a ? " " : "") + t)
                                                }),
                                                    R = M.length ? a ? "{\n" + r + M.join(",\n" + r) + "\n" + j + "}" : "{" + M.join(",") + "}" : "{}";
                                            return s.pop(),
                                                R
                                        }
                                    };
                                    t.stringify = function(e, t, i) {
                                        var n, a, r, s;
                                        if (l["undefined" == typeof t ? "undefined" : o(t)] && t)
                                            if ((s = I.call(t)) == E)
                                                a = t;
                                            else if (s == T) {
                                                r = {};
                                                for (var c, p = 0, d = t.length; p < d; c = t[p++],
                                                    s = I.call(c),
                                                (s == A || s == w) && (r[c] = 1))
                                                    ;
                                            }
                                        if (i)
                                            if ((s = I.call(i)) == w) {
                                                if ((i -= i % 1) > 0)
                                                    for (n = "",
                                                         i > 10 && (i = 10); n.length < i; n += " ")
                                                        ;
                                            } else
                                                s == A && (n = i.length <= 10 ? i : i.slice(0, 10));
                                        return R("", (c = {},
                                            c[""] = e,
                                            c), a, r, n, "", [])
                                    }
                                }
                                if (!i("json-parse")) {
                                    var $, V, D = a.fromCharCode, P = {
                                        92: "\\",
                                        34: '"',
                                        47: "/",
                                        98: "\b",
                                        116: "\t",
                                        110: "\n",
                                        102: "\f",
                                        114: "\r"
                                    }, U = function() {
                                        throw $ = V = null,
                                            d()
                                    }, F = function() {
                                        for (var e, t, i, n, a, o = V, r = o.length; $ < r; )
                                            switch (a = o.charCodeAt($)) {
                                                case 9:
                                                case 10:
                                                case 13:
                                                case 32:
                                                    $++;
                                                    break;
                                                case 123:
                                                case 125:
                                                case 91:
                                                case 93:
                                                case 58:
                                                case 44:
                                                    return e = M ? o.charAt($) : o[$],
                                                        $++,
                                                        e;
                                                case 34:
                                                    for (e = "@",
                                                             $++; $ < r; )
                                                        if (a = o.charCodeAt($),
                                                            a < 32)
                                                            U();
                                                        else if (92 == a)
                                                            switch (a = o.charCodeAt(++$)) {
                                                                case 92:
                                                                case 34:
                                                                case 47:
                                                                case 98:
                                                                case 116:
                                                                case 110:
                                                                case 102:
                                                                case 114:
                                                                    e += P[a],
                                                                        $++;
                                                                    break;
                                                                case 117:
                                                                    for (t = ++$,
                                                                             i = $ + 4; $ < i; $++)
                                                                        a = o.charCodeAt($),
                                                                        a >= 48 && a <= 57 || a >= 97 && a <= 102 || a >= 65 && a <= 70 || U();
                                                                    e += D("0x" + o.slice(t, $));
                                                                    break;
                                                                default:
                                                                    U()
                                                            }
                                                        else {
                                                            if (34 == a)
                                                                break;
                                                            for (a = o.charCodeAt($),
                                                                     t = $; a >= 32 && 92 != a && 34 != a; )
                                                                a = o.charCodeAt(++$);
                                                            e += o.slice(t, $)
                                                        }
                                                    if (34 == o.charCodeAt($))
                                                        return $++,
                                                            e;
                                                    U();
                                                default:
                                                    if (t = $,
                                                        45 == a && (n = !0,
                                                            a = o.charCodeAt(++$)),
                                                        a >= 48 && a <= 57) {
                                                        for (48 == a && (a = o.charCodeAt($ + 1),
                                                        a >= 48 && a <= 57) && U(),
                                                                 n = !1; $ < r && (a = o.charCodeAt($),
                                                        a >= 48 && a <= 57); $++)
                                                            ;
                                                        if (46 == o.charCodeAt($)) {
                                                            for (i = ++$; i < r && (a = o.charCodeAt(i),
                                                            a >= 48 && a <= 57); i++)
                                                                ;
                                                            i == $ && U(),
                                                                $ = i
                                                        }
                                                        if (a = o.charCodeAt($),
                                                            101 == a || 69 == a) {
                                                            for (a = o.charCodeAt(++$),
                                                                 43 != a && 45 != a || $++,
                                                                     i = $; i < r && (a = o.charCodeAt(i),
                                                            a >= 48 && a <= 57); i++)
                                                                ;
                                                            i == $ && U(),
                                                                $ = i
                                                        }
                                                        return +o.slice(t, $)
                                                    }
                                                    if (n && U(),
                                                        "true" == o.slice($, $ + 4))
                                                        return $ += 4,
                                                            !0;
                                                    if ("false" == o.slice($, $ + 5))
                                                        return $ += 5,
                                                            !1;
                                                    if ("null" == o.slice($, $ + 4))
                                                        return $ += 4,
                                                            null;
                                                    U()
                                            }
                                        return "$"
                                    }, H = function G(e) {
                                        var t, i;
                                        if ("$" == e && U(),
                                            "string" == typeof e) {
                                            if ("@" == (M ? e.charAt(0) : e[0]))
                                                return e.slice(1);
                                            if ("[" == e) {
                                                for (t = []; e = F(),
                                                "]" != e; i || (i = !0))
                                                    i && ("," == e ? (e = F(),
                                                    "]" == e && U()) : U()),
                                                    "," == e && U(),
                                                        t.push(G(e));
                                                return t
                                            }
                                            if ("{" == e) {
                                                for (t = {}; e = F(),
                                                "}" != e; i || (i = !0))
                                                    i && ("," == e ? (e = F(),
                                                    "}" == e && U()) : U()),
                                                    "," != e && "string" == typeof e && "@" == (M ? e.charAt(0) : e[0]) && ":" == F() || U(),
                                                        t[e.slice(1)] = G(F());
                                                return t
                                            }
                                            U()
                                        }
                                        return e
                                    }, z = function(e, t, i) {
                                        var n = q(e, t, i);
                                        n === m ? delete e[t] : e[t] = n
                                    }, q = function(e, t, i) {
                                        var n, a = e[t];
                                        if ("object" == ("undefined" == typeof a ? "undefined" : o(a)) && a)
                                            if (I.call(a) == T)
                                                for (n = a.length; n--; )
                                                    z(a, n, i);
                                            else
                                                g(a, function(e) {
                                                    z(a, e, i)
                                                });
                                        return i.call(e, t, a)
                                    };
                                    t.parse = function(e, t) {
                                        var i, n;
                                        return $ = 0,
                                            V = "" + e,
                                            i = H(F()),
                                        "$" != F() && U(),
                                            $ = V = null,
                                            t && I.call(t) == E ? q((n = {},
                                                n[""] = i,
                                                n), "", t) : i
                                    }
                                }
                            }
                            return t.runInContext = r,
                                t
                        }
                        var s = i(5)
                            , l = {
                            "function": !0,
                            object: !0
                        }
                            , c = l[o(t)] && t && !t.nodeType && t
                            , p = l["undefined" == typeof window ? "undefined" : o(window)] && window || this
                            , d = c && l[o(e)] && e && !e.nodeType && "object" == ("undefined" == typeof a ? "undefined" : o(a)) && a;
                        if (!d || d.global !== d && d.window !== d && d.self !== d || (p = d),
                            c && !s)
                            r(p, c);
                        else {
                            var u = p.JSON
                                , f = p.JSON3
                                , v = !1
                                , h = r(p, p.JSON3 = {
                                noConflict: function() {
                                    return v || (v = !0,
                                        p.JSON = u,
                                        p.JSON3 = f,
                                        u = f = null),
                                        h
                                }
                            });
                            p.JSON = {
                                parse: h.parse,
                                stringify: h.stringify,
                                encode: h.stringify,
                                decode: h.parse
                            }
                        }
                        s && (n = function() {
                            return h
                        }
                            .call(t, i, t, e),
                            !(void 0 !== n && (e.exports = n)))
                    }
                ).call(void 0)
            }
        ).call(t, i(4)(e), function() {
            return this
        }())
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}
                ,
                e.paths = [],
                e.children = [],
                e.webpackPolyfill = 1),
                e
        }
    }
    , function(e, t) {
        (function(t) {
                e.exports = t
            }
        ).call(t, {})
    }
    , function(e, t) {
        "use strict";
        !function(e, t, i) {
            if ((!e.addEventListener || !e.removeEventListener) && e.attachEvent && e.detachEvent) {
                var n = function(e) {
                    return "function" == typeof e
                }
                    , a = function(e, t) {
                    var n = t[i];
                    if (n)
                        for (var a, o = n.length; o--; )
                            if (a = n[o],
                                a[0] === e)
                                return a[1]
                }
                    , o = function(e, t, n) {
                    var o = t[i] || (t[i] = []);
                    return a(e, t) || (o[o.length] = [e, n],
                            n)
                }
                    , r = function(e) {
                    var i = t[e];
                    t[e] = function(e) {
                        return c(i(e))
                    }
                }
                    , s = function(i, a) {
                    if (n(a)) {
                        var r = this;
                        r.attachEvent("on" + i, o(r, a, function(i) {
                            i = i || e.event,
                                i.preventDefault = i.preventDefault || function() {
                                        i.returnValue = !1
                                    }
                                ,
                                i.stopPropagation = i.stopPropagation || function() {
                                        i.cancelBubble = !0
                                    }
                                ,
                                i.target = i.target || i.srcElement || t.documentElement,
                                i.currentTarget = i.currentTarget || r,
                                i.timeStamp = i.timeStamp || (new Date).getTime(),
                                a.call(r, i)
                        }))
                    }
                }
                    , l = function(e, t) {
                    if (n(t)) {
                        var i = this
                            , o = a(i, t);
                        o && i.detachEvent("on" + e, o)
                    }
                }
                    , c = function(e) {
                    if (e) {
                        var t = e.length;
                        if (t)
                            for (; t--; )
                                e[t].addEventListener = s,
                                    e[t].removeEventListener = l;
                        else
                            e.addEventListener = s,
                                e.removeEventListener = l;
                        return e
                    }
                };
                if (c([t, e]),
                    "Element"in e) {
                    var p = e.Element;
                    p.prototype.addEventListener = s,
                        p.prototype.removeEventListener = l
                } else
                    t.attachEvent("onreadystatechange", function() {
                        c(t.all)
                    }),
                        r("getElementsByTagName"),
                        r("getElementById"),
                        r("createElement"),
                        c(t.all)
            }
        }(window, document, "x-ms-event-listeners")
    }
    , function(e, t) {
        "use strict";
        function i(e, t) {
            var i = "";
            if (arguments.length < 2 ? i = "target error - target and name are both required" : "object" != ("undefined" == typeof e ? "undefined" : a(e)) ? i = "target error - target itself must be window object" : "string" != typeof t && (i = "target error - target name must be string type"),
                    i)
                throw new Error(i);
            this.target = e,
                this.name = t
        }
        function n(e, t) {
            this.targets = {},
                this.name = e,
                this.listenFunc = [],
                o = t || o,
            "string" != typeof o && (o = o.toString()),
                this.initListen()
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , o = "[PROJECT_NAME]"
            , r = "postMessage"in window;
        r ? i.prototype.send = function(e) {
            this.target.postMessage(o + e, "*")
        }
            : i.prototype.send = function(e) {
            var t = window.navigator[o + this.name];
            if ("function" != typeof t)
                throw new Error("target callback function is not defined");
            t(o + e, window)
        }
            ,
            n.prototype.addTarget = function(e, t) {
                var n = new i(e,t);
                this.targets[t] = n
            }
            ,
            n.prototype.initListen = function() {
                var e = this
                    , t = function(t) {
                    "object" == ("undefined" == typeof t ? "undefined" : a(t)) && t.data && (t = t.data);
                    try {
                        t = t.slice(o.length);
                        for (var i = 0; i < e.listenFunc.length; i++)
                            e.listenFunc[i](t)
                    } catch (n) {
                        return null
                    }
                };
                r ? "addEventListener"in document ? window.addEventListener("message", t, !1) : "attachEvent"in document && window.attachEvent("onmessage", t) : window.navigator[o + this.name] = t
            }
            ,
            n.prototype.listen = function(e) {
                this.listenFunc.push(e)
            }
            ,
            n.prototype.clear = function() {
                this.listenFunc = []
            }
            ,
            n.prototype.send = function(e) {
                var t, i = this.targets;
                for (t in i)
                    i[t].send(e)
            }
            ,
            t["default"] = n
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = {
                isMobile: function i() {
                    var i = !1
                        , e = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
                    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (i = !0),
                        i
                },
                isThisDevice: function(e) {
                    var t = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
                    return e = e.toLowerCase(),
                    t.indexOf(e) >= 0
                },
                isSafari: function() {
                    var e = navigator.userAgent.toLowerCase()
                        , t = e.match(/applewebkit\/(\d+)(.\d+)?/)
                        , i = e.match(/safari\/(\d+)(.\d+)?/);
                    return !(!t || !i) && (parseInt(t[1]) == parseInt(i[1]) && (!(e.indexOf("baidu") > -1) && (e.indexOf("safari") > -1 && e.indexOf("chrome") < 1)))
                },
                isIE: function(e) {
                    var t = navigator.userAgent.toLowerCase();
                    return t.indexOf("msie") != -1 && parseInt(t.split("msie")[1]) === e
                },
                iOSversion: function() {
                    var e = (navigator.userAgent || navigator.vendor || window.opera).toLowerCase();
                    if (/ip(hone|od|ad)/.test(e)) {
                        var t = e.match(/os (\d+)_(\d+)_?(\d+)?/);
                        return +[parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3] || 0, 10)].join("")
                    }
                },
                fixIOSBlur: function(e) {
                    function t(e, t) {
                        if ("string" != typeof e)
                            throw new Error("objBlur()参数错误");
                        var i = document.getElementById(e)
                            , t = t || 300
                            , n = function a(e) {
                            e.target != i ? setTimeout(function() {
                                window.focus(),
                                    i.blur(),
                                    document.removeEventListener("touchstart", a, !1),
                                    document.removeEventListener("touchend", a, !1)
                            }, t) : window.focus()
                        };
                        if (!i)
                            throw new Error("objBlur()没有找到元素");
                        i.addEventListener("focus", function() {
                            document.addEventListener("touchstart", n, !1),
                                document.addEventListener("touchend", n, !1)
                        }, !1)
                    }
                    var i = navigator.userAgent.toUpperCase().indexOf("IPHONE") != -1;
                    if (i) {
                        var n = new t(e);
                        n = null
                    }
                }
            }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = function(e, t, i) {
                var n = function a() {
                    if (clearTimeout(window._PINSCROLL_TIMEOUT),
                        i && "visible" !== i.style.visibility)
                        return !1;
                    if ("top" === t)
                        window.scrollTo(0, 0);
                    else {
                        var e = window.innerHeight + 80;
                        window.scrollY < e && window.scrollTo(0, e)
                    }
                    window._PINSCROLL_TIMEOUT = setTimeout(function() {
                        a()
                    }, 100)
                };
                "stop" === e ? clearTimeout(window._PINSCROLL_TIMEOUT) : n()
            }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = function(e) {
                for (var t in e)
                    if (e.hasOwnProperty(t))
                        return !1;
                return !0
            }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = {
                browserId: null,
                url: document.location.href,
                title: document.title,
                referrer: document.referrer.trim(),
                preview: "close",
                chatReady: !1,
                trackId: "",
                clientId: "",
                panelVisibility: "",
                inviteReady: !1,
                inviteType: null,
                conversation: "no",
                viewport: "",
                scrollTop: "",
                clientBind: !1,
                initData: "",
                renderFakeBtn: !1
            }
    }
    , function(e, t, i) {
        var n, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function(o, r) {
            "use strict";
            var s = function(e) {
                if ("object" !== a(e.document))
                    throw new Error("Cookies.js requires a `window` with a `document` object");
                var t = function i(e, t, n) {
                    return 1 === arguments.length ? i.get(e) : i.set(e, t, n)
                };
                return t._document = e.document,
                    t._cacheKeyPrefix = "cookey.",
                    t._maxExpireDate = new Date("Fri, 31 Dec 9999 23:59:59 UTC"),
                    t.defaults = {
                        path: "/",
                        secure: !1
                    },
                    t.get = function(e) {
                        t._cachedDocumentCookie !== t._document.cookie && t._renewCache();
                        var i = t._cache[t._cacheKeyPrefix + e];
                        return i === r ? r : decodeURIComponent(i)
                    }
                    ,
                    t.set = function(e, i, n) {
                        return n = t._getExtendedOptions(n),
                            n.expires = t._getExpiresDate(i === r ? -1 : n.expires),
                            t._document.cookie = t._generateCookieString(e, i, n),
                            t
                    }
                    ,
                    t.expire = function(e, i) {
                        return t.set(e, r, i)
                    }
                    ,
                    t._getExtendedOptions = function(e) {
                        return {
                            path: e && e.path || t.defaults.path,
                            domain: e && e.domain || t.defaults.domain,
                            expires: e && e.expires || t.defaults.expires,
                            secure: e && e.secure !== r ? e.secure : t.defaults.secure
                        }
                    }
                    ,
                    t._isValidDate = function(e) {
                        return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
                    }
                    ,
                    t._getExpiresDate = function(e, i) {
                        if (i = i || new Date,
                                "number" == typeof e ? e = e === 1 / 0 ? t._maxExpireDate : new Date(i.getTime() + 1e3 * e) : "string" == typeof e && (e = new Date(e)),
                            e && !t._isValidDate(e))
                            throw new Error("`expires` parameter cannot be converted to a valid Date instance");
                        return e
                    }
                    ,
                    t._generateCookieString = function(e, t, i) {
                        e = e.replace(/[^#$&+\^`|]/g, encodeURIComponent),
                            e = e.replace(/\(/g, "%28").replace(/\)/g, "%29"),
                            t = (t + "").replace(/[^!#$&-+\--:<-\[\]-~]/g, encodeURIComponent),
                            i = i || {};
                        var n = e + "=" + t;
                        return n += i.path ? ";path=" + i.path : "",
                            n += i.domain ? ";domain=" + i.domain : "",
                            n += i.expires ? ";expires=" + i.expires.toUTCString() : "",
                            n += i.secure ? ";secure" : ""
                    }
                    ,
                    t._getCacheFromString = function(e) {
                        for (var i = {}, n = e ? e.split("; ") : [], a = 0; a < n.length; a++) {
                            var o = t._getKeyValuePairFromCookieString(n[a]);
                            i[t._cacheKeyPrefix + o.key] === r && (i[t._cacheKeyPrefix + o.key] = o.value)
                        }
                        return i
                    }
                    ,
                    t._getKeyValuePairFromCookieString = function(e) {
                        var t = e.indexOf("=");
                        t = t < 0 ? e.length : t;
                        var i, n = e.substr(0, t);
                        try {
                            i = decodeURIComponent(n)
                        } catch (a) {
                            console && "function" == typeof console.warn && console.warn('Could not decode cookie with key "' + n + '"', a)
                        }
                        return {
                            key: i,
                            value: e.substr(t + 1)
                        }
                    }
                    ,
                    t._renewCache = function() {
                        t._cache = t._getCacheFromString(t._document.cookie),
                            t._cachedDocumentCookie = t._document.cookie
                    }
                    ,
                    t._areEnabled = function() {
                        var e = "cookies.js"
                            , i = "1" === t.set(e, 1).get(e);
                        return t.expire(e),
                            i
                    }
                    ,
                    t.enabled = t._areEnabled(),
                    t
            }
                , l = "object" === a(o.document) ? s(o) : s;
            n = function() {
                return l
            }
                .call(t, i, t, e),
                !(n !== r && (e.exports = n))
        }("undefined" == typeof window ? void 0 : window)
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = function(e, t, i) {
                try {
                    var n = window.localStorage;
                    if ("get" === e)
                        return n.getItem(t);
                    "set" === e ? n.setItem(t, i) : "remove" === e && n.removeItem(t)
                } catch (a) {
                    return null
                }
            }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(15)
            , o = n(a)
            , r = i(11)
            , s = n(r)
            , l = i(16)
            , c = n(l);
        t["default"] = function() {
            (0,
                c["default"])();
            var e = document.createElement("div");
            e.id = "MEIQIA-DOORBELL-HOLDER",
                e.style.display = "none";
            var t = document.createElement("iframe");
            t.id = "MEIQIA-DOORBELL-IFRAME",
                e.appendChild(t),
                document.body.appendChild(e),
                t.src = o["default"].widget + "/doorbell.html?" + o["default"].tail,
                s["default"].messenger.addTarget(t.contentWindow, "iframeDoorbell")
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = {
            env: "production",
            chat: "https://new-api.meiqia.com",
            upload: "https://eco-api-upload.meiqia.com",
            socket: "https://eco-push-api-client.meiqia.com/pusher",
            socket2: "https://camorope-client-a.meiqia.com/pusher",
            widget: "https://new-api.meiqia.com/dist",
            cdn: "https://resource.meiqia.com/dist",
            tail: "ic8db20074q"
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = function() {
                document.getElementById("MEIQIA-DOORBELL-HOLDER") && document.body.removeChild(document.getElementById("MEIQIA-DOORBELL-HOLDER")),
                document.getElementById("MEIQIA-PANEL-HOLDER") && document.getElementById("MEIQIA-PANEL-HOLDER").parentNode.removeChild(document.getElementById("MEIQIA-PANEL-HOLDER")),
                document.getElementById("MEIQIA-BTN-HOLDER") && document.getElementById("MEIQIA-BTN-HOLDER").parentNode.removeChild(document.getElementById("MEIQIA-BTN-HOLDER")),
                document.getElementById("MEIQIA-INVITE") && document.getElementById("MEIQIA-INVITE").parentNode.removeChild(document.getElementById("MEIQIA-INVITE")),
                document.getElementById("MEIQIA-PANEL-STYLE") && document.getElementById("MEIQIA-PANEL-STYLE").parentNode.removeChild(document.getElementById("MEIQIA-PANEL-STYLE")),
                document.getElementById("MEIQIA-BTN-STYLE") && document.getElementById("MEIQIA-BTN-STYLE").parentNode.removeChild(document.getElementById("MEIQIA-BTN-STYLE")),
                document.getElementById("MEIQIA-INVITE-STYLE") && document.getElementById("MEIQIA-INVITE-STYLE").parentNode.removeChild(document.getElementById("MEIQIA-INVITE-STYLE")),
                document.getElementById("MEIQIA-ICON-STYLE") && document.getElementById("MEIQIA-ICON-STYLE").parentNode.removeChild(document.getElementById("MEIQIA-ICON-STYLE"))
            }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(15)
            , o = n(a)
            , r = i(8)
            , s = n(r)
            , l = i(18)
            , c = n(l)
            , p = i(19)
            , d = n(p)
            , u = i(12)
            , f = n(u)
            , v = i(13)
            , h = n(v)
            , g = i(20)
            , m = n(g)
            , b = i(11)
            , I = n(b)
            , y = i(21)
            , x = n(y)
            , E = i(22)
            , _ = n(E)
            , w = i(30)
            , A = n(w)
            , T = i(32)
            , k = n(T)
            , M = i(27)
            , B = n(M)
            , C = i(33)
            , Q = n(C)
            , N = i(34)
            , O = n(N);
        t["default"] = function() {
            document.getElementById("MEIQIA-PANEL-HOLDER") || d["default"].jsonp({
                url: o["default"].chat + "/visit/init",
                data: {
                    ent_id: I["default"].entId,
                    track_id: I["default"].trackId || "",
                    title: I["default"].title,
                    url: I["default"].url,
                    referrer_url: I["default"].referrer
                },
                callback: "jsonp_cb",
                success: function(e) {
                    if (e.success && !e.black) {
                        I["default"].visitId = e.visit_id,
                            I["default"].browserId = e.browser_id,
                        e.track_id && (I["default"].trackId = e.track_id);
                        var t = new Date;
                        t.setTime(t.getTime() + 6048e5),
                            f["default"].set("MEIQIA_VISIT_ID", e.visit_id, {
                                expires: t.toGMTString()
                            }),
                            f["default"].set("MEIQIA_EXTRA_TRACK_ID", I["default"].trackId, {
                                expires: 1 / 0
                            }),
                            (0,
                                h["default"])("set", "MEIQIA_EXTRA_TRACK_ID", I["default"].trackId),
                        I["default"].clientId && !I["default"].clientBind && O["default"].getBinding(),
                            I["default"].initData = e,
                        I["default"].assign && (I["default"].initData.agentTokens = I["default"].assign.agentToken);
                        var i = (0,
                            m["default"])("icon-css", {
                            cdn: o["default"].cdn,
                            tail: o["default"].tail
                        });
                        s["default"].isMobile() ? (I["default"].panelVisibility = "invisible",
                            (0,
                                B["default"])("invisible"),
                            (0,
                                x["default"])("init"),
                        "round" !== e.widget_settings.mobile.btn.type && "call" !== e.widget_settings.mobile.btn.type || (i = (0,
                            m["default"])("icon-round-css", {
                            cdn: o["default"].cdn,
                            tail: o["default"].tail
                        }))) : (4 === e.visitor_status || e.in_queue || (I["default"].panelVisibility = "invisible",
                            (0,
                                B["default"])("invisible")),
                        "round" !== e.widget_settings.desktop.btn.type && "call" !== e.widget_settings.desktop.btn.type || (i = (0,
                            m["default"])("icon-round-css", {
                            cdn: o["default"].cdn,
                            tail: o["default"].tail
                        }))),
                            (0,
                                c["default"])(i, "MEIQIA-ICON-STYLE"),
                            (0,
                                _["default"])(),
                        I["default"].withoutBtn || (0,
                            A["default"])(),
                        "function" != typeof I["default"].getInviting && (0,
                            k["default"])(),
                        I["default"].metadata && (0,
                            Q["default"])()
                    }
                }
            })
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = function(e, t) {
                var i = document.createElement("style");
                i.type = "text/css",
                t && (i.id = t);
                try {
                    i.appendChild(document.createTextNode(e))
                } catch (n) {
                    i.styleSheet.cssText = e
                }
                var a = document.getElementsByTagName("head")[0];
                a.appendChild(i)
            }
    }
    , function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        i(3);
        var a = function(e, t) {
            var i = []
                , n = t && t.timestamp || 1 * new Date;
            for (var a in e)
                e.hasOwnProperty(a) && i.push(encodeURIComponent(a) + "=" + encodeURIComponent(e[a]));
            return t && t.sign && i.push("sign=" + t.sign),
                i.push("v=" + n),
                i.join("&")
        }
            , o = function(e) {
            e = e || {},
                e.type = (e.type || "GET").toUpperCase(),
                e.dataType = e.dataType || "json",
                e.contentType = e.contentType || "application/x-www-form-urlencoded; charset=UTF-8";
            var t = a(e.data)
                , i = null;
            if ("undefined" != typeof XMLHttpRequest)
                i = new XMLHttpRequest;
            else
                for (var o = ["Microsoft.XmlHttp", "MSXML2.XmlHttp", "MSXML2.XmlHttp.3.0", "MSXML2.XmlHttp.4.0", "MSXML2.XmlHttp.5.0", "MSXML2.XmlHttp.6.0"], r = 0, s = o.length; r < s; r++)
                    try {
                        i = new ActiveXObject(o[r]);
                        break
                    } catch (l) {}
            if (i.onreadystatechange = function() {
                    if (4 === i.readyState) {
                        var t = i.status;
                        if (t >= 200 && t < 300) {
                            var n = i.responseText;
                            "json" === e.dataType && n && (n = JSON.parse(i.responseText)),
                            e.success && e.success(n, i.responseXML)
                        } else
                            e.error && e.error(i, t, i.responseText)
                    }
                }
                    ,
                "GET" === e.type)
                i.open("GET", e.url + "?" + t, !0),
                    i.send(null);
            else if ("POST" === e.type) {
                i.open("POST", e.url, !0),
                    i.setRequestHeader("Content-Type", e.contentType);
                var c = e.header;
                if (c)
                    for (var p in c)
                        i.setRequestHeader(p, c[p]);
                var d = e.data;
                "object" === ("undefined" == typeof d ? "undefined" : n(d)) && (d = JSON.stringify(d)),
                    i.send(d)
            }
            return e.beforeSend && e.beforeSend(i),
                i
        }
            , r = function(e) {
            if (e = e || {},
                    e.data = e.data || {},
                !e.url || !e.callback)
                return !1;
            e.beforeSend && e.beforeSend();
            var t = e.callbackName || "jsonp" + 1 * new Date;
            e.data[e.callback] = t;
            var i = a(e.data, e.signature)
                , n = document.createElement("script");
            n.type = "text/javascript",
                n.charset = "UTF-8",
                document.body.appendChild(n),
                window[t] = function(i) {
                    try {
                        document.body.removeChild(n),
                            clearTimeout(n.timer),
                            window[t] = null,
                        e.success && e.success(i)
                    } catch (a) {
                        return null
                    }
                }
                ,
                n.src = e.url + "?" + i,
            e.time && (n.timer = setTimeout(function() {
                try {
                    window[t] = null,
                        document.body.removeChild(n),
                    e.error && e.error({
                        message: "超时"
                    })
                } catch (i) {
                    return null
                }
            }, e.time))
        }
            , s = function(e) {
            e = e || {};
            var t = e.data
                , i = new XMLHttpRequest;
            i.upload && (i.upload.onprogress = function(t) {
                    e.progress && e.progress(t)
                }
            ),
                i.onload = function() {
                    if ([200, 204].indexOf(i.status) !== -1) {
                        var t = i.responseText;
                        "json" === e.dataType && (t = JSON.parse(i.responseText)),
                        e.success && e.success(t, i.responseXML)
                    } else
                        e.error && e.error(i, status, i.responseText)
                }
            ;
            var n = new FormData;
            for (var a in t)
                t.hasOwnProperty(a) && n.append(a, t[a]);
            i.open("POST", e.url),
                i.send(n),
            e.beforeSend && e.beforeSend(i)
        };
        t["default"] = {
            ajax: o,
            jsonp: r,
            upload: s
        }
    }
    , function(e, t, i) {
        var n, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function() {
            function o(e, t) {
                return (/string|function/.test("undefined" == typeof t ? "undefined" : a(t)) ? u : d)(e, t)
            }
            function r(e, t) {
                return "string" != typeof e && (t = "undefined" == typeof e ? "undefined" : a(e),
                    "number" === t ? e += "" : e = "function" === t ? r(e.call(e)) : ""),
                    e
            }
            function s(e) {
                return g[e]
            }
            function l(e) {
                return r(e).replace(/&(?![\w#]+;)|[<>"']/g, s)
            }
            function c(e, t) {
                if (m(e))
                    for (var i = 0, n = e.length; i < n; i++)
                        t.call(e, e[i], i, e);
                else
                    for (i in e)
                        t.call(e, e[i], i)
            }
            function p(e, t) {
                var i = /(\/)[^\/]+\1\.\.\1/
                    , n = ("./" + e).replace(/[^\/]+$/, "")
                    , a = n + t;
                for (a = a.replace(/\/\.\//g, "/"); a.match(i); )
                    a = a.replace(i, "/");
                return a
            }
            function d(e, t) {
                var i = o.get(e) || f({
                        filename: e,
                        name: "Render Error",
                        message: "Template not found"
                    });
                return t ? i(t) : i
            }
            function u(e, t) {
                if ("string" == typeof t) {
                    var i = t;
                    t = function() {
                        return new h(i)
                    }
                }
                var n = v[e] = function(i) {
                        try {
                            return new t(i,e) + ""
                        } catch (n) {
                            return f(n)()
                        }
                    }
                ;
                return n.prototype = t.prototype = b,
                    n.toString = function() {
                        return t + ""
                    }
                    ,
                    n
            }
            function f(e) {
                var t = "{Template Error}"
                    , i = e.stack || "";
                if (i)
                    i = i.split("\n").slice(0, 2).join("\n");
                else
                    for (var n in e)
                        i += "<" + n + ">\n" + e[n] + "\n\n";
                return function() {
                    return "object" === ("undefined" == typeof console ? "undefined" : a(console)) && console.error(t + "\n\n" + i),
                        t
                }
            }
            var v = o.cache = {}
                , h = this.String
                , g = {
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "&": "&#38;"
            }
                , m = Array.isArray || function(e) {
                    return "[object Array]" === {}.toString.call(e)
                }
                , b = o.utils = {
                $helpers: {},
                $include: function(e, t, i) {
                    return e = p(i, e),
                        d(e, t)
                },
                $string: r,
                $escape: l,
                $each: c
            }
                , I = o.helpers = b.$helpers;
            o.get = function(e) {
                return v[e.replace(/^\.\//, "")]
            }
                ,
                o.helper = function(e, t) {
                    I[e] = t
                }
                ,
                n = function() {
                    return o
                }
                    .call(t, i, t, e),
                !(void 0 !== n && (e.exports = n)),
                o("btn-aside", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.btnIcon
                        , o = e.btnText
                        , r = "";
                    return r += '<div id="MEIQIA-BTN"> <span id="MEIQIA-BTN-ICON" class="MEIQIA-ICON MEIQIA-ICON-',
                        r += n(a),
                        r += '"></span> <span id="MEIQIA-BTN-LINE"></span> <span id="MEIQIA-BTN-TEXT">',
                        r += n(o),
                        r += '</span> <span id="MEIQIA-CIRCLE"></span> <div id="MEIQIA-BUBBLE"> <span id="MEIQIA-BUBBLE-ARROW1"></span> <span id="MEIQIA-BUBBLE-ARROW2"></span> <span id="MEIQIA-BUBBLE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-BUBBLE-INSIDE"> <img id="MEIQIA-BUBBLE-AVATAR" /> <span id="MEIQIA-BUBBLE-NAME"></span> <div id="MEIQIA-BUBBLE-MSG"></div> </div> </div> </div>',
                        new h(r)
                }),
                o("btn-bottom", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.btnIcon
                        , o = e.btnText
                        , r = "";
                    return r += '<div id="MEIQIA-BTN"> <span id="MEIQIA-BTN-ICON" class="MEIQIA-ICON MEIQIA-ICON-',
                        r += n(a),
                        r += '"></span> <span id="MEIQIA-BTN-LINE"></span> <span id="MEIQIA-BTN-TEXT">',
                        r += n(o),
                        r += '</span> <span id="MEIQIA-CIRCLE"></span> <div id="MEIQIA-BUBBLE"> <span id="MEIQIA-BUBBLE-ARROW1"></span> <span id="MEIQIA-BUBBLE-ARROW2"></span> <span id="MEIQIA-BUBBLE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-BUBBLE-INSIDE"> <img id="MEIQIA-BUBBLE-AVATAR" /> <span id="MEIQIA-BUBBLE-NAME"></span> <div id="MEIQIA-BUBBLE-MSG"></div> </div> </div> </div>',
                        new h(r)
                }),
                o("btn-call", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.btnIcon
                        , o = "";
                    return o += '<a id="MEIQIA-BTN-CALL"> <span id="MEIQIA-BTN-ICON" class="MEIQIA-ICON MEIQIA-ICON-CALL"></span> </a> <a id="MEIQIA-BTN-CHAT"> <span id="MEIQIA-BTN-ICON" class="MEIQIA-ICON MEIQIA-ICON-',
                        o += n(a),
                        o += '"></span> <span id="MEIQIA-CIRCLE"></span> <div id="MEIQIA-BUBBLE"> <span id="MEIQIA-BUBBLE-ARROW1"></span> <span id="MEIQIA-BUBBLE-ARROW2"></span> <span id="MEIQIA-BUBBLE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-BUBBLE-INSIDE"> <img id="MEIQIA-BUBBLE-AVATAR" /> <span id="MEIQIA-BUBBLE-NAME"></span> <div id="MEIQIA-BUBBLE-MSG"></div> </div> </div> </a>',
                        new h(o)
                }),
                o("btn-picture", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.btnSrc
                        , o = "";
                    return o += '<div id="MEIQIA-BTN"> <img id="MEIQIA-BTN-PICTURE" src="',
                        o += n(a),
                        o += '" /> <span id="MEIQIA-CIRCLE"></span> <div id="MEIQIA-BUBBLE"> <span id="MEIQIA-BUBBLE-ARROW1"></span> <span id="MEIQIA-BUBBLE-ARROW2"></span> <span id="MEIQIA-BUBBLE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-BUBBLE-INSIDE"> <img id="MEIQIA-BUBBLE-AVATAR" /> <span id="MEIQIA-BUBBLE-NAME"></span> <div id="MEIQIA-BUBBLE-MSG"></div> </div> </div> </div>',
                        new h(o)
                }),
                o("btn-round", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.btnIcon
                        , o = "";
                    return o += '<div id="MEIQIA-BTN"> <span id="MEIQIA-BTN-ICON" class="MEIQIA-ICON MEIQIA-ICON-',
                        o += n(a),
                        o += '"></span> <span id="MEIQIA-CIRCLE"></span> <div id="MEIQIA-BUBBLE"> <span id="MEIQIA-BUBBLE-ARROW1"></span> <span id="MEIQIA-BUBBLE-ARROW2"></span> <span id="MEIQIA-BUBBLE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-BUBBLE-INSIDE"> <img id="MEIQIA-BUBBLE-AVATAR" /> <span id="MEIQIA-BUBBLE-NAME"></span> <div id="MEIQIA-BUBBLE-MSG"></div> </div> </div> </div>',
                        new h(o)
                }),
                o("invite-style1", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.popupText
                        , o = "";
                    return o += '<span id="MEIQIA-INVITE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-INVITE-INSIDE">',
                        o += n(a),
                        o += '</div> <span id="MEIQIA-INVITE-ARROW1"></span> <span ID="MEIQIA-INVITE-ARROW2"></span>',
                        new h(o)
                }),
                o("invite-style2", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.popupText
                        , o = "";
                    return o += '<span id="MEIQIA-INVITE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-INVITE-INSIDE">',
                        o += n(a),
                        o += "</div>",
                        new h(o)
                }),
                o("invite-style3", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.popupText
                        , o = "";
                    return o += '<span id="MEIQIA-INVITE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-INVITE-INSIDE">',
                        o += n(a),
                        o += "</div>",
                        new h(o)
                }),
                o("invite-style4", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.popupText
                        , o = "";
                    return o += '<span id="MEIQIA-INVITE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-INVITE-INSIDE">',
                        o += n(a),
                        o += "</div>",
                        new h(o)
                }),
                o("invite-style5", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.src
                        , o = "";
                    return o += '<span id="MEIQIA-INVITE-CLOSE" class="MEIQIA-ICON"></span> <div id="MEIQIA-INVITE-INSIDE"> <img src="',
                        o += n(a),
                        o += '"> </div>',
                        new h(o)
                }),
                o("invite-style6", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgi
                        , o = i.$each
                        , r = e.actions
                        , s = (e.v,
                        e.k,
                        "");
                    return s += '<img src="',
                        s += n(a.src),
                        s += '" id="MEIQIA-INVITE-BG"> <div id="MEIQIA-INVITE-ACTIONS"> ',
                        o(r, function(e, t) {
                            s += " ",
                                1 === e.type ? (s += '  <a id="MEIQIA-INVITE-ACTION-',
                                    s += n(t),
                                    s += '" href="javascript:void(0);" name="meiqiaInviteAccept"></a> ') : 2 === e.type ? (s += '  <a id="MEIQIA-INVITE-ACTION-',
                                    s += n(t),
                                    s += '" href="javascript:void(0);" name="meiqiaInviteReject"></a> ') : 3 === e.type && (s += "  ",
                                        1 === e.linkType ? (s += '  <a id="MEIQIA-INVITE-ACTION-',
                                            s += n(t),
                                            s += '" href="',
                                            s += n(e.href),
                                            s += '" target="_blank"></a> ') : 2 === e.linkType ? (s += '  <a id="MEIQIA-INVITE-ACTION-',
                                            s += n(t),
                                            s += '" href="mailto:',
                                            s += n(e.href),
                                            s += '"></a> ') : 3 === e.linkType && (s += '  <a id="MEIQIA-INVITE-ACTION-',
                                                s += n(t),
                                                s += '" href="tel:',
                                                s += n(e.href),
                                                s += '"></a> '),
                                        s += " "),
                                s += " "
                        }),
                        s += " </div> ",
                        new h(s)
                }),
                o("panel-desktop-customer", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.pageSrc
                        , o = "";
                    return o += '<div id="MEIQIA-DRAG-HANDLE"></div> <div id="MEIQIA-DRAG-MASK"></div> <iframe id="MEIQIA-IFRAME" src="',
                        o += n(a),
                        o += '" frameborder="0" scrolling="no" allowtransparency="true"></iframe> ',
                        new h(o)
                }),
                o("panel-desktop-edge", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.pageSrc
                        , o = "";
                    return o += '<iframe id="MEIQIA-IFRAME" src="',
                        o += n(a),
                        o += '" frameborder="0" scrolling="no" allowtransparency="true"></iframe> ',
                        new h(o)
                }),
                o("panel-desktop-fiesta", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.pageSrc
                        , o = "";
                    return o += '<iframe id="MEIQIA-IFRAME" src="',
                        o += n(a),
                        o += '" frameborder="0" scrolling="no" allowtransparency="true"></iframe> ',
                        new h(o)
                }),
                o("panel-desktop-mondeo", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.pageSrc
                        , o = "";
                    return o += '<div id="MEIQIA-DRAG-HANDLE"></div> <div id="MEIQIA-DRAG-MASK"></div> <iframe id="MEIQIA-IFRAME" src="',
                        o += n(a),
                        o += '" frameborder="0" scrolling="no" allowtransparency="true"></iframe> ',
                        new h(o)
                }),
                o("panel-mobile-fiesta", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.pageSrc
                        , o = "";
                    return o += '<iframe id="MEIQIA-IFRAME" src="',
                        o += n(a),
                        o += '" frameborder="0" scrolling="no" allowtransparency="true"></iframe> ',
                        new h(o)
                }),
                o("panel-mobile-kuga", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.pageSrc
                        , o = "";
                    return o += '<iframe id="MEIQIA-IFRAME" src="',
                        o += n(a),
                        o += '" frameborder="0" scrolling="no" allowtransparency="true"></iframe> ',
                        new h(o)
                }),
                o("btn-desktop-aside-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.position
                        , o = e.textColor
                        , r = e.bgColor
                        , s = "";
                    return s += "#MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: ",
                        s += n(a.bottom),
                        s += "px; ",
                        s += "left" === a.type ? " left: 0; " : " right: 0; ",
                        s += " z-index: 2147483647; width: auto; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN, #MEIQIA-BTN span, #MEIQIA-BTN div, #MEIQIA-BTN img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN { display: block; width: 40px; height: auto; max-height: 90vh; padding: 10px 0; font-size: 16px; color: ",
                        s += n(o),
                        s += "; text-align: center; border-top: 1px solid rgba(0, 0, 0, .1); border-bottom: 1px solid rgba(0, 0, 0, .1); box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); cursor: pointer; text-decoration: none; background-color: ",
                        s += n(r),
                        s += "; } #MEIQIA-BTN #MEIQIA-BTN-ICON { display: block; width: 20px; height: 20px; margin: 0 10px 10px; } #MEIQIA-BTN #MEIQIA-BTN-LINE { display: inline-block; width: 100%; height: 1px; background-color: rgba(0, 0, 0, .08); background-color: #000\\9; opacity: .1\\9; filter: alpha(opacity=10)\\9; vertical-align: middle; } #MEIQIA-BTN #MEIQIA-BTN-TEXT { display: block; box-sizing: content-box; max-height: 80%; padding: 0 10px; margin-top: 10px; text-align: center; overflow: hidden; line-height: 1.428571429; font-size: 16px; color: ",
                        s += n(o),
                        s += "; word-break: break-all; word-wrap: break-word; letter-spacing: 5px; *width: 16px; *letter-spacing: 5px; -webkit-writing-mode: vertical-rl; writing-mode: vertical-rl; white-space: nowrap; text-overflow: ellipsis; } #MEIQIA-BTN #MEIQIA-CIRCLE { position: absolute; display: none; width: 26px; height: 26px; text-align: center; line-height: 26px; font-size: 14px; color: #fff; border-radius: 15px; background-color: #ff3b30; } #MEIQIA-BTN #MEIQIA-BUBBLE { position: absolute; /*bottom: 40%;*/ bottom: 0; display: none; width: 260px; border: 1px solid #f7f7f7; border-radius: 4px; color: #000; text-align: left; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { position: absolute; z-index: 2; font-size: 0; line-height: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { position: absolute; z-index: 1; font-size: 0; line-height: 0; } ",
                        s += "left" === a.type ? " #MEIQIA-BTN{ border-right: 1px solid rgba(0, 0, 0, .1); } #MEIQIA-BTN #MEIQIA-CIRCLE { top: -13px; right: -13px; } #MEIQIA-BTN #MEIQIA-BUBBLE { left: 60px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { left: -8px; /*top: 19px;*/ bottom: 20px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-right: 8px solid #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { left: -10px; /*top: 19px;*/ bottom: 20px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-right: 9px solid #f7f7f7; } " : " #MEIQIA-BTN { border-left: 1px solid rgba(0, 0, 0, .1); } #MEIQIA-BTN #MEIQIA-CIRCLE { top: -13px; left: -13px; } #MEIQIA-BTN #MEIQIA-BUBBLE { right: 60px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { right: -8px; /*top: 20px;*/ bottom: 20px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 8px solid #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { right: -10px; /*top: 19px;*/ bottom: 21px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 9px solid #f7f7f7; } ",
                        s += " #MEIQIA-BTN #MEIQIA-BUBBLE-CLOSE { position: absolute; display: none; top: 12px; right: 12px; width: 10px; height: 10px; background-position: -5px -245px; cursor: pointer; } #MEIQIA-BTN #MEIQIA-BUBBLE:hover #MEIQIA-BUBBLE-CLOSE { display: block; } #MEIQIA-BTN #MEIQIA-BUBBLE-INSIDE { margin: 12px 18px; } #MEIQIA-BTN #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG { *height: 40px; max-height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(s)
                }),
                o("btn-desktop-bottom-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.position)
                        , a = i.$escape
                        , o = e.textColor
                        , r = e.bgColor
                        , s = "";
                    return s += "#MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: 0; ",
                        "left" === n.type ? (s += " left: ",
                            s += a(n.horizontal),
                            s += "px; ") : (s += " right: ",
                            s += a(n.horizontal),
                            s += "px; "),
                        s += " z-index: 2147483647; width: auto; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN, #MEIQIA-BTN span, #MEIQIA-BTN div, #MEIQIA-BTN img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN { display: block; height: 40px; font-size: 16px; color: ",
                        s += a(o),
                        s += "; text-align: center; border-left: 1px solid rgba(0, 0, 0, .1); border-top: 1px solid rgba(0, 0, 0, .1); border-right: 1px solid rgba(0, 0, 0, .1); box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); cursor: pointer; text-decoration: none; background-color: ",
                        s += a(r),
                        s += "; } #MEIQIA-BTN #MEIQIA-BTN-ICON { display: block; float: left; width: 20px; height: 20px; margin: 10px 10px 0; } #MEIQIA-BTN #MEIQIA-BTN-LINE { display: block; float: left; width: 1px; height: 100%; background-color: rgba(0, 0, 0, .08); background-color: #000\\9; opacity: .1\\9; filter: alpha(opacity=10)\\9; vertical-align: middle; } #MEIQIA-BTN #MEIQIA-BTN-TEXT { display: block; float: left; height: 40px; margin: 0 10px; line-height: 40px; overflow-y: hidden; font-size: 16px; color: ",
                        s += a(o),
                        s += "; } #MEIQIA-BTN #MEIQIA-CIRCLE { position: absolute; top: -13px; left: -13px; display: none; width: 26px; height: 26px; text-align: center; line-height: 26px; font-size: 14px; color: #fff; border-radius: 15px; background-color: #ff3b30; } #MEIQIA-BTN #MEIQIA-BUBBLE { position: absolute; bottom: 64px; display: none; width: 260px; border: 1px solid #f7f7f7; border-radius: 4px; color: #000; text-align: left; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { position: absolute; z-index: 2; font-size: 0; line-height: 0; border-width: 8px 7px 0px; border-color: #fff transparent; border-style: solid dashed dashed; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { position: absolute; z-index: 1; font-size: 0; line-height: 0; border-width: 10px 8px 0px; border-color: #f7f7f7 transparent; border-style: solid dashed dashed; } ",
                        s += "left" === n.type ? " #MEIQIA-BTN #MEIQIA-BUBBLE { left: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { left: 12px; bottom: -8px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { left: 11px; bottom: -10px; } " : " #MEIQIA-BTN #MEIQIA-BUBBLE { right: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { right: 12px; bottom: -8px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { right: 11px; bottom: -10px; } ",
                        s += " #MEIQIA-BTN #MEIQIA-BUBBLE-CLOSE { position: absolute; display: none; top: 12px; right: 12px; width: 10px; height: 10px; background-position: -5px -245px; cursor: pointer; } #MEIQIA-BTN #MEIQIA-BUBBLE:hover #MEIQIA-BUBBLE-CLOSE { display: block; } #MEIQIA-BTN #MEIQIA-BUBBLE-INSIDE { margin: 12px 18px; } #MEIQIA-BTN #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG { *height: 40px; max-height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(s)
                }),
                o("btn-desktop-call-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.position
                        , o = e.bgColor
                        , r = "";
                    return r += "#MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: ",
                        r += n(a.bottom),
                        r += "px; ",
                        "left" === a.type ? (r += " left: ",
                            r += n(a.horizontal),
                            r += "px; ") : (r += " right: ",
                            r += n(a.horizontal),
                            r += "px; "),
                        r += " z-index: 2147483647; width: auto; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN-CALL, #MEIQIA-BTN-CALL span, #MEIQIA-BTN-CHAT, #MEIQIA-BTN-CHAT span, #MEIQIA-BTN-CHAT div, #MEIQIA-BTN-CHAT img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN-CALL { display: block; position: relative; width: 60px; height: 60px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 31px; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); cursor: pointer; text-decoration: none; background-color: ",
                        r += n(o),
                        r += "; } #MEIQIA-BTN-CHAT { display: block; position: relative; width: 60px; height: 60px; margin-top: 20px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 31px; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); cursor: pointer; text-decoration: none; background-color: ",
                        r += n(o),
                        r += "; } #MEIQIA-BTN-CALL #MEIQIA-BTN-ICON, #MEIQIA-BTN-CHAT #MEIQIA-BTN-ICON { position: absolute; top: 15px; left: 15px; width: 32px; height: 32px; } #MEIQIA-BTN-CHAT #MEIQIA-CIRCLE { position: absolute; display: none; width: 26px; height: 26px; text-align: center; line-height: 26px; font-size: 14px; color: #fff; border-radius: 15px; background-color: #ff3b30; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE { position: absolute; /*top: 50%;*/ bottom: 0; display: none; width: 260px; margin-top: -48px; border: 1px solid #f7f7f7; border-radius: 4px; color: #000; text-align: left; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-ARROW1 { position: absolute; z-index: 2; font-size: 0; line-height: 0; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-ARROW2 { position: absolute; z-index: 1; font-size: 0; line-height: 0; } ",
                        r += "left" === a.type ? " #MEIQIA-BTN-CHAT #MEIQIA-CIRCLE { top: -10px; right: -10px; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE { left: 74px; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-ARROW1 { left: -8px; /*top: 42px;*/ bottom: 20px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-right: 8px solid #fff; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-ARROW2 { left: -10px; /*top: 43px;*/ bottom: 21px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-right: 9px solid #f7f7f7; } " : " #MEIQIA-BTN-CHAT #MEIQIA-CIRCLE { top: -10px; left: -10px; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE { right: 74px; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-ARROW1 { right: -8px; /*top: 42px;*/ bottom: 20px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 8px solid #fff; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-ARROW2 { right: -10px; /*top: 43px;*/ bottom: 21px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 9px solid #f7f7f7; } ",
                        r += " #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-CLOSE { position: absolute; display: none; top: 12px; right: 12px; width: 10px; height: 10px; background-position: -5px -245px; cursor: pointer; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE:hover #MEIQIA-BUBBLE-CLOSE { display: block; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-INSIDE { margin: 12px 18px; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; color: #000; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-MSG { height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; color: #000; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(r)
                }),
                o("btn-desktop-picture-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.position
                        , o = "";
                    return o += "#MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: ",
                        o += n(a.bottom),
                        o += "px; ",
                        "left" === a.type ? (o += " left: ",
                            o += n(a.horizontal),
                            o += "px; ") : (o += " right: ",
                            o += n(a.horizontal),
                            o += "px; "),
                        o += " z-index: 2147483647; width: auto; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN, #MEIQIA-BTN span, #MEIQIA-BTN div, #MEIQIA-BTN img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN { cursor: pointer; text-decoration: none; } #MEIQIA-BTN #MEIQIA-BTN-PICTURE { display: block; border: 0; } #MEIQIA-BTN #MEIQIA-CIRCLE { position: absolute; display: none; opacity: 0; filter: alpha(opacity=0); } #MEIQIA-BTN #MEIQIA-BUBBLE { position: absolute; bottom: 0; display: none; width: 260px; border: 1px solid #f7f7f7; border-radius: 4px; color: #000; text-align: left; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { position: absolute; z-index: 2; font-size: 0; line-height: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { position: absolute; z-index: 1; font-size: 0; line-height: 0; } ",
                        o += "left" === a.type ? " #MEIQIA-BTN #MEIQIA-BUBBLE { right: 0; margin-right: -274px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { left: -8px; /*top: 42px;*/ bottom: 20px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-right: 8px solid #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { left: -10px; /*top: 43px;*/ bottom: 21px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-right: 9px solid #f7f7f7; } " : " #MEIQIA-BTN #MEIQIA-BUBBLE { left: 0; margin-left: -274px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { right: -8px; /*top: 42px;*/ bottom: 20px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 8px solid #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { right: -10px; /*top: 43px;*/ bottom: 21px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 9px solid #f7f7f7; } ",
                        o += " #MEIQIA-BTN #MEIQIA-BUBBLE-CLOSE { position: absolute; display: none; top: 12px; right: 12px; width: 10px; height: 10px; background-position: -5px -245px; cursor: pointer; } #MEIQIA-BTN #MEIQIA-BUBBLE:hover #MEIQIA-BUBBLE-CLOSE { display: block; } #MEIQIA-BTN #MEIQIA-BUBBLE-INSIDE { margin: 12px 18px; } #MEIQIA-BTN #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG { height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(o)
                }),
                o("btn-desktop-round-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.position
                        , o = e.bgColor
                        , r = "";
                    return r += "#MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: ",
                        r += n(a.bottom),
                        r += "px; ",
                        "left" === a.type ? (r += " left: ",
                            r += n(a.horizontal),
                            r += "px; ") : (r += " right: ",
                            r += n(a.horizontal),
                            r += "px; "),
                        r += " z-index: 2147483647; width: auto; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN, #MEIQIA-BTN span, #MEIQIA-BTN div, #MEIQIA-BTN img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN { display: block; width: 60px; height: 60px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 31px; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); cursor: pointer; text-decoration: none; background-color: ",
                        r += n(o),
                        r += "; } #MEIQIA-BTN #MEIQIA-BTN-ICON { position: absolute; top: 15px; left: 15px; width: 32px; height: 32px; } #MEIQIA-BTN #MEIQIA-CIRCLE { position: absolute; display: none; width: 26px; height: 26px; text-align: center; line-height: 26px; font-size: 14px; color: #fff; border-radius: 15px; background-color: #ff3b30; } #MEIQIA-BTN #MEIQIA-BUBBLE { position: absolute; /*top: 50%;*/ bottom: 0; display: none; width: 260px; margin-top: -48px; border: 1px solid #f7f7f7; border-radius: 4px; color: #000; text-align: left; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { position: absolute; z-index: 2; font-size: 0; line-height: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { position: absolute; z-index: 1; font-size: 0; line-height: 0; } ",
                        r += "left" === a.type ? " #MEIQIA-BTN #MEIQIA-CIRCLE { top: -10px; right: -10px; } #MEIQIA-BTN #MEIQIA-BUBBLE { left: 74px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { left: -8px; top: 42px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-right: 8px solid #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { left: -10px; top: 43px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-right: 9px solid #f7f7f7; } " : " #MEIQIA-BTN #MEIQIA-CIRCLE { top: -10px; left: -10px; } #MEIQIA-BTN #MEIQIA-BUBBLE { right: 74px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { right: -8px; /*top: 42px;*/ bottom: 20px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 8px solid #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { right: -10px; /*top: 43px;*/ bottom: 21px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 9px solid #f7f7f7; } ",
                        r += " #MEIQIA-BTN #MEIQIA-BUBBLE-CLOSE { position: absolute; display: none; top: 12px; right: 12px; width: 10px; height: 10px; background-position: -5px -245px; cursor: pointer; } #MEIQIA-BTN #MEIQIA-BUBBLE:hover #MEIQIA-BUBBLE-CLOSE { display: block; } #MEIQIA-BTN #MEIQIA-BUBBLE-INSIDE { margin: 12px 18px; } #MEIQIA-BTN #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG { height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(r)
                }),
                o("btn-mobile-aside-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.position
                        , o = e.bgColor
                        , r = e.textColor
                        , s = "";
                    return s += "#MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: ",
                        s += n(a.bottom),
                        s += "px; ",
                        s += "left" === a.type ? " left: 0; " : " right: 0; ",
                        s += " z-index: 2147483647; width: auto; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN, #MEIQIA-BTN span, #MEIQIA-BTN div, #MEIQIA-BTN img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN { display: block; width: 40px; height: auto; max-height: 90vh; font-size: 16px; text-decoration: none; border-top: 1px solid rgba(0, 0, 0, .1); border-bottom: 1px solid rgba(0, 0, 0, .1); box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); background-color: ",
                        s += n(o),
                        s += "; color: ",
                        s += n(r),
                        s += "; } #MEIQIA-BTN #MEIQIA-BTN-ICON { display: block; width: 20px; height: 20px; margin: 10px; } #MEIQIA-BTN #MEIQIA-BTN-LINE { display: inline-block; width: 100%; height: 1px; background-color: rgba(0, 0, 0, .08); vertical-align: middle; } #MEIQIA-BTN #MEIQIA-BTN-TEXT { display: block; max-height: 80%; padding: 0 10px; margin-top: 10px; text-align: center; overflow: hidden; font-size: 16px; color: ",
                        s += n(r),
                        s += "; line-height: 1.428571429; word-break: break-all; word-wrap: break-word; letter-spacing: 5px; *letter-spacing: 5px; -webkit-writing-mode: vertical-rl; writing-mode: vertical-rl; white-space: nowrap; text-overflow: ellipsis; } #MEIQIA-BTN #MEIQIA-CIRCLE { position: absolute; display: none; width: 26px; height: 26px; text-align: center; line-height: 26px; font-size: 14px; color: #fff; border-radius: 15px; background-color: #ff3b30; } #MEIQIA-BTN #MEIQIA-BUBBLE { position: absolute; bottom: 0; /*bottom: 40%;*/ display: none; width: 260px; border: 1px solid #f7f7f7; color: #000; text-align: left; box-shadow: 0 5px 16px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { position: absolute; z-index: 2; font-size: 0; line-height: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { position: absolute; z-index: 1; font-size: 0; line-height: 0; } ",
                        s += "left" === a.type ? " #MEIQIA-BTN { border-right: 1px solid rgba(0, 0, 0, .1); } #MEIQIA-BTN #MEIQIA-CIRCLE { top: -13px; right: -13px; } #MEIQIA-BTN #MEIQIA-BUBBLE { left: 60px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { left: -8px; /*top: 42px;*/ bottom: 20px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-right: 8px solid #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { left: -10px; /*top: 42px;*/ bottom: 21px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-right: 9px solid #f7f7f7; } " : " #MEIQIA-BTN { border-left: 1px solid rgba(0, 0, 0, .1); } #MEIQIA-BTN #MEIQIA-CIRCLE { top: -13px; left: -13px; } #MEIQIA-BTN #MEIQIA-BUBBLE { right: 60px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { right: -8px; /*top: 42px;*/ bottom: 20px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 8px solid #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { right: -10px; /*top: 42px;*/ bottom: 21px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 9px solid #f7f7f7; } ",
                        s += " #MEIQIA-BTN #MEIQIA-BUBBLE-CLOSE { position: absolute; top: 6px; right: 6px; width: 26px; height: 26px; background-position: 3px -238px; } #MEIQIA-BTN #MEIQIA-BUBBLE-INSIDE { margin: 10px; } #MEIQIA-BTN #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG { *height: 40px; max-height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(s)
                }),
                o("btn-mobile-bottom-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.textColor
                        , r = "";
                    return r += ".BODY-FOR-MEIQIA { margin-bottom: 50px !important; } #MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: 0; left: 0; right: 0; z-index: 2147483647; width: 100%; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN, #MEIQIA-BTN span, #MEIQIA-BTN div, #MEIQIA-BTN img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN { display: block; width: 100%; height: 50px; text-align: center; line-height: 50px; text-decoration: none; border-top: 1px solid rgba(0, 0, 0, .1); box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); background-color: ",
                        r += n(a),
                        r += "; color: ",
                        r += n(o),
                        r += "; font-size: 16px; } #MEIQIA-BTN #MEIQIA-BTN-ICON { display: inline-block; width: 20px; height: 20px; margin: 15px 5px 0; vertical-align: top; } #MEIQIA-BTN #MEIQIA-BTN-LINE { display: none; } #MEIQIA-BTN #MEIQIA-BTN-TEXT { font-size: 16px; color: ",
                        r += n(o),
                        r += "; } #MEIQIA-BTN #MEIQIA-CIRCLE { position: absolute; top: -13px; right: 13px; display: none; width: 26px; height: 26px; text-align: center; line-height: 26px; font-size: 14px; color: #fff; border-radius: 15px; background-color: #ff3b30; } #MEIQIA-BTN #MEIQIA-BUBBLE { position: absolute; right: 2%; bottom: 75px; left: 2%; display: none; width: 96%; border: 1px solid #f7f7f7; color: #000; text-align: left; box-shadow: 0 5px 16px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { position: absolute; z-index: 2; font-size: 0; line-height: 0; border-width: 8px 7px 0px; border-color: #fff transparent; border-style: solid dashed dashed; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { position: absolute; z-index: 1; font-size: 0; line-height: 0; border-width: 10px 8px 0px; border-color: #f7f7f7 transparent; border-style: solid dashed dashed; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { right: 12px; bottom: -8px; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { right: 11px; bottom: -10px; } #MEIQIA-BTN #MEIQIA-BUBBLE-CLOSE { position: absolute; top: 6px; right: 6px; width: 26px; height: 26px; background-position: 3px -238px; } #MEIQIA-BTN #MEIQIA-BUBBLE-INSIDE { margin: 10px; } #MEIQIA-BTN #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG { *height: 40px; max-height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(r)
                }),
                o("btn-mobile-call-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.position
                        , o = e.bgColor
                        , r = e.textColor
                        , s = "";
                    return s += "#MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: ",
                        s += n(a.bottom),
                        s += "px; ",
                        "left" === a.type ? (s += " left: ",
                            s += n(a.horizontal),
                            s += "px; ") : (s += " right: ",
                            s += n(a.horizontal),
                            s += "px; "),
                        s += " z-index: 2147483647; width: auto; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN-CALL, #MEIQIA-BTN-CALL span, #MEIQIA-BTN-CHAT, #MEIQIA-BTN-CHAT span, #MEIQIA-BTN-CHAT div, #MEIQIA-BTN-CHAT img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN-CALL { display: block; position: relative; width: 60px; height: 60px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 31px; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); cursor: pointer; text-decoration: none; background-color: ",
                        s += n(o),
                        s += "; } #MEIQIA-BTN-CHAT { display: block; position: relative; width: 60px; height: 60px; margin-top: 20px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 31px; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); cursor: pointer; text-decoration: none; background-color: ",
                        s += n(o),
                        s += "; } #MEIQIA-BTN-CALL #MEIQIA-BTN-ICON, #MEIQIA-BTN-CHAT #MEIQIA-BTN-ICON { display: block; width: 32px; height: 32px; margin: 14px; } #MEIQIA-BTN-CHAT #MEIQIA-CIRCLE { position: absolute; top: 0; left: 0; display: none; width: 60px; height: 60px; border-radius: 30px; text-align: center; font-size: 18px; line-height: 60px; background-color: ",
                        s += n(o),
                        s += "; color: ",
                        s += n(r),
                        s += "; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE { position: fixed; right: 0; bottom: ",
                        s += n(a.bottom),
                        s += "px; left: 0; display: none; width: 90%; margin: 0 5% 74px 5%; border: 1px solid #f7f7f7; color: #000; text-align: left; box-shadow: 0 5px 16px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-ARROW1 { display: none; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-ARROW2 { display: none; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-CLOSE { position: absolute; top: 6px; right: 6px; width: 26px; height: 26px; background-position: -3px -387px; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-INSIDE { margin: 10px; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; color: #000; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-MSG { height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; color: #000; } #MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(s)
                }),
                o("btn-mobile-picture-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.position
                        , o = "";
                    return o += "#MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: ",
                        o += n(a.bottom),
                        o += "px; ",
                        "left" === a.type ? (o += " left: ",
                            o += n(a.horizontal),
                            o += "px; ") : (o += " right: ",
                            o += n(a.horizontal),
                            o += "px; "),
                        o += " z-index: 2147483647; width: auto; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN, #MEIQIA-BTN span, #MEIQIA-BTN div, #MEIQIA-BTN img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN { text-decoration: none; } #MEIQIA-BTN #MEIQIA-BTN-PICTURE { display: block; border: 0; } #MEIQIA-BTN #MEIQIA-CIRCLE { position: absolute; display: none; opacity: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE { position: absolute; bottom: 104px; /*top: 0;*/ display: none; width: 260px; /*margin-top: -104px;*/ border: 1px solid #f7f7f7; color: #000; text-align: left; box-shadow: 0 5px 16px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { position: absolute; z-index: 2; font-size: 0; line-height: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { position: absolute; z-index: 1; font-size: 0; line-height: 0; } ",
                        "left" === a.type ? (o += " #MEIQIA-BTN #MEIQIA-BUBBLE { left: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { left: ",
                            o += n(a.horizontal),
                            o += "px; bottom: -8px; border-top: 8px solid #fff; border-right: 7px solid transparent; border-left: 7px solid transparent; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { left: ",
                            o += n(a.horizontal),
                            o += "px; bottom: -9px; margin-left: -1px; border-top: 9px solid #f7f7f7; border-right: 8px solid transparent; border-left: 8px solid transparent; } ") : (o += " #MEIQIA-BTN #MEIQIA-BUBBLE { right: 0; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { right: ",
                            o += n(a.horizontal),
                            o += "px; bottom: -8px; border-top: 8px solid #fff; border-right: 7px solid transparent; border-left: 7px solid transparent; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { right: ",
                            o += n(a.horizontal),
                            o += "px; bottom: -9px; margin-right: -1px; border-top: 9px solid #f7f7f7; border-right: 8px solid transparent; border-left: 8px solid transparent; } "),
                        o += " #MEIQIA-BTN #MEIQIA-BUBBLE-CLOSE { position: absolute; top: 6px; right: 6px; width: 26px; height: 26px; background-position: 3px -238px; } #MEIQIA-BTN #MEIQIA-BUBBLE-INSIDE { margin: 10px; } #MEIQIA-BTN #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG { height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(o)
                }),
                o("btn-mobile-round-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.position
                        , o = e.bgColor
                        , r = e.textColor
                        , s = "";
                    return s += "#MEIQIA-BTN-HOLDER { display: none; position: fixed; bottom: ",
                        s += n(a.bottom),
                        s += "px; ",
                        "left" === a.type ? (s += " left: ",
                            s += n(a.horizontal),
                            s += "px; ") : (s += " right: ",
                            s += n(a.horizontal),
                            s += "px; "),
                        s += " z-index: 2147483647; width: auto; height: auto; padding: 0; margin: 0; border: 0; font-family: 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif; background-color: transparent; } #MEIQIA-BTN, #MEIQIA-BTN span, #MEIQIA-BTN div, #MEIQIA-BTN img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-BTN { display: block; width: 60px; height: 60px; border: 1px solid rgba(0, 0, 0, .1); border-radius: 31px; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); cursor: pointer; text-decoration: none; background-color: ",
                        s += n(o),
                        s += "; } #MEIQIA-BTN #MEIQIA-BTN-ICON { display: block; width: 32px; height: 32px; margin: 14px; } #MEIQIA-BTN #MEIQIA-CIRCLE { position: absolute; top: 0; left: 0; display: none; width: 60px; height: 60px; border-radius: 30px; text-align: center; font-size: 18px; line-height: 60px; background-color: ",
                        s += n(o),
                        s += "; color: ",
                        s += n(r),
                        s += "; } #MEIQIA-BTN #MEIQIA-BUBBLE { position: fixed; right: 0; bottom: ",
                        s += n(a.bottom),
                        s += "px; left: 0; display: none; width: 90%; margin: 0 5% 74px 5%; border: 1px solid #f7f7f7; color: #000; text-align: left; box-shadow: 0 5px 16px 0 rgba(0, 0, 0, .16); line-height: 1.428571429; background-color: #fff; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW1 { display: none; } #MEIQIA-BTN #MEIQIA-BUBBLE-ARROW2 { display: none; } #MEIQIA-BTN #MEIQIA-BUBBLE-CLOSE { position: absolute; top: 6px; right: 6px; width: 26px; height: 26px; background-position: -3px -387px; } #MEIQIA-BTN #MEIQIA-BUBBLE-INSIDE { margin: 10px; } #MEIQIA-BTN #MEIQIA-BUBBLE-AVATAR { width: 26px; height: 26px; border-radius: 13px; margin-right: 6px; vertical-align: top; box-shadow: 0 0 8px 0 rgba(0, 0, 0, .15); } #MEIQIA-BTN #MEIQIA-BUBBLE-NAME { display: inline-block; margin-top: 3px; font-size: 16px; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG { height: 40px; margin-top: 5px; font-size: 14px; overflow: hidden; color: #000; } #MEIQIA-BTN #MEIQIA-BUBBLE-MSG img { width: 16px; height: 16px; } ",
                        new h(s)
                }),
                o("icon-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = "";
                    return r += ".MEIQIA-ICON { background-size: 40px auto !important; background-repeat: no-repeat !important; background-image: url('",
                        r += n(a),
                        r += "/images/icon-mq.png?v=",
                        r += n(o),
                        r += "') !important; } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { .MEIQIA-ICON { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mq@2x.png?v=",
                        r += n(o),
                        r += "') !important; } } .MEIQIA-ICON-CHAT1 { background-position: 0 0 !important; } .MEIQIA-ICON-CHAT2 { background-position: 0 -20px !important; } .MEIQIA-ICON-CHAT3 { background-position: 0 -40px !important; } .MEIQIA-ICON-CHAT4 { background-position: 0 -60px !important; } .MEIQIA-ICON-CHAT5 { background-position: 0 -80px !important; } .MEIQIA-ICON-CHAT6 { background-position: 0 -100px !important; } .MEIQIA-ICON-CHAT7 { background-position: 0 -120px !important; } .MEIQIA-ICON-CHAT8 { background-position: 0 -140px !important; } .MEIQIA-ICON-CHAT9 { background-position: 0 -160px !important; } .MEIQIA-ICON-CHAT10 { background-position: 0 -180px !important; } .MEIQIA-ICON-CHAT11 { background-position: 0 -200px !important; } .MEIQIA-ICON-CHAT12 { background-position: 0 -220px !important; } .MEIQIA-ICON-TICKET1 { background-position: -20px 0 !important; } .MEIQIA-ICON-TICKET2 { background-position: -20px -20px !important; } .MEIQIA-ICON-TICKET3 { background-position: -20px -40px !important; } .MEIQIA-ICON-TICKET4 { background-position: -20px -60px !important; } .MEIQIA-ICON-TICKET5 { background-position: -20px -80px !important; } .MEIQIA-ICON-TICKET6 { background-position: -20px -100px !important; } .MEIQIA-ICON-TICKET7 { background-position: -20px -120px !important; } .MEIQIA-ICON-TICKET8 { background-position: -20px -140px !important; } .MEIQIA-ICON-TICKET9 { background-position: -20px -160px !important; } .MEIQIA-ICON-TICKET10 { background-position: -20px -180px !important; } .MEIQIA-ICON-TICKET11 { background-position: -20px -200px !important; } .MEIQIA-ICON-TICKET12 { background-position: -20px -220px !important; } ",
                        new h(r)
                }),
                o("icon-round-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = "";
                    return r += ".MEIQIA-ICON { background-size: 64px auto !important; background-repeat: no-repeat !important; background-image: url('",
                        r += n(a),
                        r += "/images/icon-mq-round.png?v=",
                        r += n(o),
                        r += "') !important; } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { .MEIQIA-ICON { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mq-round@2x.png?v=",
                        r += n(o),
                        r += "') !important; } } .MEIQIA-ICON-CHAT1 { background-position: 0 0 !important; } .MEIQIA-ICON-CHAT2 { background-position: 0 -32px !important; } .MEIQIA-ICON-CHAT3 { background-position: 0 -64px !important; } .MEIQIA-ICON-CHAT4 { background-position: 0 -96px !important; } .MEIQIA-ICON-CHAT5 { background-position: 0 -128px !important; } .MEIQIA-ICON-CHAT6 { background-position: 0 -160px !important; } .MEIQIA-ICON-CHAT7 { background-position: 0 -224px !important; } .MEIQIA-ICON-CHAT8 { background-position: 0 -256px !important; } .MEIQIA-ICON-CHAT9 { background-position: 0 -288px !important; } .MEIQIA-ICON-CHAT10 { background-position: 0 -320px !important; } .MEIQIA-ICON-CHAT11 { background-position: 0 -352px !important; } .MEIQIA-ICON-CHAT12 { background-position: 0 -384px !important; } .MEIQIA-ICON-TICKET1 { background-position: -32px 0 !important; } .MEIQIA-ICON-TICKET2 { background-position: -32px -32px !important; } .MEIQIA-ICON-TICKET3 { background-position: -32px -64px !important; } .MEIQIA-ICON-TICKET4 { background-position: -32px -96px !important; } .MEIQIA-ICON-TICKET5 { background-position: -32px -128px !important; } .MEIQIA-ICON-TICKET6 { background-position: -32px -160px !important; } .MEIQIA-ICON-TICKET7 { background-position: -32px -224px !important; } .MEIQIA-ICON-TICKET8 { background-position: -32px -256px !important; } .MEIQIA-ICON-TICKET9 { background-position: -32px -288px !important; } .MEIQIA-ICON-TICKET10 { background-position: -32px -320px !important; } .MEIQIA-ICON-TICKET11 { background-position: -32px -352px !important; } .MEIQIA-ICON-TICKET12 { background-position: -32px -384px !important; } .MEIQIA-ICON-CALL { background-position: -32px -448px !important; } ",
                        new h(r)
                }),
                o("invite-desktop-style1-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.position)
                        , a = e.btnType
                        , o = i.$escape
                        , r = "";
                    return r += "#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { position: fixed; z-index: 2147483647; display: none; width: 340px; height: 130px; margin-bottom: 64px; border: 1px solid #f7f7f7; border-radius: 4px; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); text-align: left; cursor: pointer; color: #000; line-height: 1.428571429; background-color: #fff; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1, #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { position: absolute; font-size: 0; line-height: 0; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 { z-index: 2; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { z-index: 1; } ",
                        "left" === n.type ? (r += " ",
                            "bottom" === a ? (r += " #MEIQIA-INVITE { bottom: 0; left: ",
                                r += o(n.horizontal),
                                r += "px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 { left: 12px; bottom: -8px; border-top: 8px solid #fff; border-right: 7px solid transparent; border-left: 7px solid transparent; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { left: 11px; bottom: -10px; border-top: 9px solid #f7f7f7; border-right: 8px solid transparent; border-left: 8px solid transparent; } ") : "aside" === a && (r += " #MEIQIA-INVITE { left: 60px; bottom: ",
                                    r += o(n.bottom),
                                    r += "px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 { left: -8px; top: 60px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-right: 8px solid #fff; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { left: -9px; top: 59px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-right: 9px solid #f7f7f7; } "),
                            r += " ") : (r += " ",
                            "bottom" === a ? (r += " #MEIQIA-INVITE { right: ",
                                r += o(n.horizontal),
                                r += "px; bottom: 0; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 { right: 12px; bottom: -8px; border-top: 8px solid #fff; border-right: 7px solid transparent; border-left: 7px solid transparent; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { right: 11px; bottom: -10px; border-top: 9px solid #f7f7f7; border-right: 8px solid transparent; border-left: 8px solid transparent; } ") : "aside" === a && (r += " #MEIQIA-INVITE { right: 60px; bottom: ",
                                    r += o(n.bottom),
                                    r += "px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 { right: -8px; top: 60px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 8px solid #fff; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { right: -9px; top: 59px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 9px solid #f7f7f7; } "),
                            r += " "),
                        r += " ",
                    "round" !== a && "call" !== a || (r += " #MEIQIA-INVITE { top: 50%; left: 50%; margin: -65px 0 0 -170px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1, #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { display: none; } "),
                        r += " ",
                    "picture" === a && (r += " #MEIQIA-INVITE { top: 50%; left: 50%; margin: -65px 0 0 -170px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1, #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { display: none; } "),
                        r += " #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; right: -20px; top: -20px; width: 40px; height: 40px; cursor: pointer; ",
                        r += "round" === a || "call" === a ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        r += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:hover { ",
                        r += "round" === a || "call" === a ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        r += " } #MEIQIA-INVITE #MEIQIA-INVITE-INSIDE { width: 300px; height: 44px; margin: 46px 20px 0; text-align: left; font-size: 14px; line-height: 22px; overflow: hidden; color: #000; /*word-break: break-all;*/ } ",
                        new h(r)
                }),
                o("invite-desktop-style2-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = e.popupPosition
                        , s = e.btnType
                        , l = "";
                    return l += '#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { background-size: 280px auto; background-repeat: no-repeat; background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-2.png?v=",
                        l += n(o),
                        l += '"); } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { #MEIQIA-INVITE { background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-2@2x.png?v=",
                        l += n(o),
                        l += '"); } } #MEIQIA-INVITE { position: fixed; ',
                        l += 1 === r.type ? " margin: -128px 0 0 -140px; " : " margin: 0; ",
                        l += " ",
                        2 === r.type ? (l += " bottom: ",
                            l += n(r.bottom),
                            l += "px; left: ",
                            l += n(r.side),
                            l += "px; ") : 3 === r.type ? (l += " bottom: ",
                            l += n(r.bottom),
                            l += "px; right: ",
                            l += n(r.side),
                            l += "px; ") : l += " top: 50%; left: 50%; ",
                        l += " z-index: 2147483647; display: none; width: 280px; height: 256px; text-align: left; cursor: pointer; line-height: 1.428571429; } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; right: 9px; top: -5px; width: 40px; height: 40px; cursor: pointer; ",
                        l += "round" === s || "call" === s ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:hover { ",
                        l += "round" === s || "call" === s ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-INSIDE { width: 156px; height: 68px; margin: 65px 62px 0; text-align: left; font-size: 13px; line-height: 22px; color: #766e6c; overflow: hidden; /*word-break: break-all;*/ } ",
                        new h(l)
                }),
                o("invite-desktop-style3-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = e.popupPosition
                        , s = e.btnType
                        , l = "";
                    return l += '#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { background-size: 318px auto; background-repeat: no-repeat; background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-3.png?v=",
                        l += n(o),
                        l += '"); } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { #MEIQIA-INVITE { background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-3@2x.png?v=",
                        l += n(o),
                        l += '"); } } #MEIQIA-INVITE { position: fixed; ',
                        l += 1 === r.type ? " margin: -78px 0 0 -159px; " : " margin: 0; ",
                        l += " ",
                        2 === r.type ? (l += " bottom: ",
                            l += n(r.bottom),
                            l += "px; left: ",
                            l += n(r.side),
                            l += "px; ") : 3 === r.type ? (l += " bottom: ",
                            l += n(r.bottom),
                            l += "px; right: ",
                            l += n(r.side),
                            l += "px; ") : l += " top: 50%; left: 50%; ",
                        l += " z-index: 2147483647; display: none; width: 318px; height: 156px; text-align: left; cursor: pointer; line-height: 1.428571429; } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; top: -3px; right: -3px; width: 40px; height: 40px; cursor: pointer; ",
                        l += "round" === s || "call" === s ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:hover { ",
                        l += "round" === s || "call" === s ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-INSIDE { width: 170px; height: 44px; margin: 56px 0 0 110px; text-align: left; font-size: 13px; line-height: 22px; color: #4c4c4c; overflow: hidden; /*word-break: break-all;*/ } ",
                        new h(l)
                }),
                o("invite-desktop-style4-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = e.popupPosition
                        , s = e.btnType
                        , l = "";
                    return l += '#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { background-size: 318px auto; background-repeat: no-repeat; background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-4.png?v=",
                        l += n(o),
                        l += '"); } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { #MEIQIA-INVITE { background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-4@2x.png?v=",
                        l += n(o),
                        l += '"); } } #MEIQIA-INVITE { position: fixed; ',
                        l += 1 === r.type ? " margin: -78px 0 0 -159px; " : " margin: 0; ",
                        l += " ",
                        2 === r.type ? (l += " bottom: ",
                            l += n(r.bottom),
                            l += "px; left: ",
                            l += n(r.side),
                            l += "px; ") : 3 === r.type ? (l += " bottom: ",
                            l += n(r.bottom),
                            l += "px; right: ",
                            l += n(r.side),
                            l += "px; ") : l += " top: 50%; left: 50%; ",
                        l += " z-index: 2147483647; display: none; width: 318px; height: 156px; text-align: left; cursor: pointer; line-height: 1.428571429; } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; right: -3px; top: -3px; width: 40px; height: 40px; cursor: pointer; ",
                        l += "round" === s || "call" === s ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:hover { ",
                        l += "round" === s || "call" === s ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-INSIDE { width: 170px; height: 44px; margin: 56px 0 0 46px; text-align: left; font-size: 13px; line-height: 22px; color: #1e4977; overflow: hidden; /*word-break: break-all;*/ } ",
                        new h(l)
                }),
                o("invite-desktop-style5-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.popupPosition)
                        , a = i.$escape
                        , o = e.imgHeight
                        , r = e.imgWidth
                        , s = e.entId
                        , l = e.btnType
                        , c = "";
                    return c += "#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span, #MEIQIA-INVITE img { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { position: fixed; ",
                        1 === n.type ? (c += " margin: -",
                            c += a(o / 2),
                            c += "px 0 0 -",
                            c += a(r / 2),
                            c += "px; ") : c += " margin: 0; ",
                        c += " ",
                        2 === n.type ? (c += " bottom: ",
                            c += a(n.bottom),
                            c += "px; left: ",
                            c += a(n.side),
                            c += "px; ") : 3 === n.type ? (c += " bottom: ",
                            c += a(n.bottom),
                            c += "px; right: ",
                            c += a(n.side),
                            c += "px; ") : c += " top: 50%; left: 50%; ",
                        c += " display: none; z-index: 2147483647; width: ",
                        c += a(r),
                        c += "px; height: ",
                        c += a(o),
                        c += "px; cursor: pointer; ",
                    1 === s && (c += " border-radius: 8px; box-shadow: 0 3px 18px 0 rgba(238, 238, 238, .5); "),
                        c += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; right: -20px; top: -20px; width: 40px; height: 40px; cursor: pointer; ",
                        c += "round" === l || "call" === l ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        c += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:hover { ",
                        c += "round" === l || "call" === l ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        c += " } ",
                        new h(c)
                }),
                o("invite-desktop-style6-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.popupPosition)
                        , a = i.$escape
                        , o = e.bgi
                        , r = i.$each
                        , s = e.actions
                        , l = (e.v,
                        e.k,
                        "");
                    return l += "#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE img, #MEIQIA-INVITE a { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { display: none; position: fixed; ",
                        1 === n.type ? (l += " margin: -",
                            l += a(o.height / 2),
                            l += "px 0 0 -",
                            l += a(o.width / 2),
                            l += "px;; ") : l += " margin: 0; ",
                        l += " ",
                        2 === n.type ? (l += " bottom: ",
                            l += a(n.bottom),
                            l += "px; left: ",
                            l += a(n.side),
                            l += "px; ") : 3 === n.type ? (l += " bottom: ",
                            l += a(n.bottom),
                            l += "px; right: ",
                            l += a(n.side),
                            l += "px; ") : l += " top: 50%; left: 50%; ",
                        l += " z-index: 2147483647; width: ",
                        l += a(o.width),
                        l += "px; height: ",
                        l += a(o.height),
                        l += "px; } #MEIQIA-INVITE #MEIQIA-INVITE-BG { position: absolute; top: 0; left: 0; z-index: 1; width: 100%; height: 100%; } #MEIQIA-INVITE #MEIQIA-INVITE-ACTIONS { position: relative; top: 0; left: 0; z-index: 2; width: 100%; height: 100%; } ",
                        r(s, function(e, t) {
                            l += " #MEIQIA-INVITE #MEIQIA-INVITE-ACTION-",
                                l += a(t),
                                l += " { display: block; position: absolute; top: ",
                                l += a(e.position.top),
                                l += "px; left: ",
                                l += a(e.position.left),
                                l += "px; width: ",
                                l += a(e.width),
                                l += "px; height: ",
                                l += a(e.height),
                                l += "px; cursor: pointer; background-image: url(about:blank); // 解决 IE10 以下空的 absolute a 标签无法响应 click 的问题 } "
                        }),
                        l += " ",
                        new h(l)
                }),
                o("invite-mobile-style1-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.btnType)
                        , a = e.position
                        , o = i.$escape
                        , r = "";
                    return r += "#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { position: fixed; z-index: 2147483647; display: none; width: 260px; height: 130px; border: 1px solid #f7f7f7; border-radius: 4px; box-shadow: 0 0 14px 0 rgba(0, 0, 0, .16); text-align: left; cursor: pointer; color: #000; line-height: 1.428571429; background-color: #fff; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1, #MEIQIA-INVITE-ARROW2 { position: absolute; font-size: 0; line-height: 0; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 { z-index: 2; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { z-index: 1; } ",
                    "bottom" === n && (r += " #MEIQIA-INVITE { right: 6%; bottom: 0; left: 6%; width: 88%; margin-bottom: 74px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 { right: 12px; bottom: -8px; border-top: 8px solid #fff; border-right: 7px solid transparent; border-left: 7px solid transparent; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { right: 11px; bottom: -10px; border-top: 9px solid #f7f7f7; border-right: 8px solid transparent; border-left: 8px solid transparent; } "),
                        r += " ",
                        "left" === a.type ? (r += " ",
                        "aside" === n && (r += " #MEIQIA-INVITE { left: 60px; bottom: ",
                            r += o(a.bottom),
                            r += "px; margin-bottom: 30px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 { left: -8px; top: 60px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-right: 8px solid #fff; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { left: -9px; top: 59px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-right: 9px solid #f7f7f7; } "),
                            r += " ") : (r += " ",
                        "aside" === n && (r += " #MEIQIA-INVITE { right: 60px; bottom: ",
                            r += o(a.bottom),
                            r += "px; margin-bottom: 30px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1 { right: -8px; top: 60px; border-top: 7px solid transparent; border-bottom: 7px solid transparent; border-left: 8px solid #fff; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { right: -9px; top: 59px; border-top: 8px solid transparent; border-bottom: 8px solid transparent; border-left: 9px solid #f7f7f7; } "),
                            r += " "),
                        r += " ",
                    "round" !== n && "call" !== n || (r += " #MEIQIA-INVITE { top: 50%; left: 50%; margin: -65px 0 0 -130px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1, #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { display: none; } "),
                        r += " ",
                    "picture" === n && (r += " #MEIQIA-INVITE { top: 50%; left: 50%; margin: -65px 0 0 -130px; } #MEIQIA-INVITE #MEIQIA-INVITE-ARROW1, #MEIQIA-INVITE #MEIQIA-INVITE-ARROW2 { display: none; } "),
                        r += " #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; right: -20px; top: -20px; width: 40px; height: 40px; ",
                        r += "round" === n || "call" === n ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        r += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:active { ",
                        r += "round" === n || "call" === n ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        r += " } #MEIQIA-INVITE #MEIQIA-INVITE-INSIDE { width: 88%; height: 44px; margin: 46px 6% 0; text-align: left; font-size: 14px; line-height: 22px; overflow: hidden; color: #000; /*word-break: break-all;*/ } ",
                        new h(r)
                }),
                o("invite-mobile-style2-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = e.popupPosition
                        , s = e.btnType
                        , l = "";
                    return l += '#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { background-size: 280px auto; background-repeat: no-repeat; background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-2.png?v=",
                        l += n(o),
                        l += '"); } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { #MEIQIA-INVITE { background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-2@2x.png?v=",
                        l += n(o),
                        l += '"); } } #MEIQIA-INVITE { position: fixed; ',
                        l += 1 === r.type ? " margin: -128px 0 0 -140px; " : " margin-left: -140px; ",
                        l += " ",
                        2 === r.type ? (l += " top: ",
                            l += n(r.value),
                            l += "px; ") : 3 === r.type ? (l += " bottom: ",
                            l += n(r.value),
                            l += "px; ") : l += " top: 50%; ",
                        l += " left: 50%; z-index: 2147483647; display: none; width: 280px; height: 256px; text-align: left; line-height: 1.428571429; } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; right: 9px; top: -5px; width: 40px; height: 40px; ",
                        l += "round" === s || "call" === s ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:active { ",
                        l += "round" === s || "call" === s ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-INSIDE { width: 156px; height: 68px; margin: 65px 62px 0; text-align: left; font-size: 13px; line-height: 22px; color: #766e6c; overflow: hidden; /*word-break: break-all;*/ } ",
                        new h(l)
                }),
                o("invite-mobile-style3-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = e.popupPosition
                        , s = e.btnType
                        , l = "";
                    return l += '#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { background-size: 318px auto; background-repeat: no-repeat; background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-3.png?v=",
                        l += n(o),
                        l += '"); } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { #MEIQIA-INVITE { background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-3@2x.png?v=",
                        l += n(o),
                        l += '"); } } #MEIQIA-INVITE { position: fixed; ',
                        l += 1 === r.type ? " margin: -78px 0 0 -159px; " : " margin-left: -159px; ",
                        l += " ",
                        2 === r.type ? (l += " top: ",
                            l += n(r.value),
                            l += "px; ") : 3 === r.type ? (l += " bottom: ",
                            l += n(r.value),
                            l += "px; ") : l += " top: 50%; ",
                        l += " left: 50%; z-index: 2147483647; display: none; width: 318px; height: 156px; text-align: left; line-height: 1.428571429; } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; top: -3px; right: -3px; width: 40px; height: 40px; ",
                        l += "round" === s || "call" === s ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:active { ",
                        l += "round" === s || "call" === s ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-INSIDE { width: 170px; height: 44px; margin: 56px 0 0 110px; text-align: left; font-size: 13px; line-height: 22px; color: #4c4c4c; overflow: hidden; /*word-break: break-all;*/ } ",
                        new h(l)
                }),
                o("invite-mobile-style4-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = e.popupPosition
                        , s = e.btnType
                        , l = "";
                    return l += '#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { background-size: 318px auto; background-repeat: no-repeat; background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-4.png?v=",
                        l += n(o),
                        l += '"); } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { #MEIQIA-INVITE { background-image: url("',
                        l += n(a),
                        l += "/images/invite-bgi-4@2x.png?v=",
                        l += n(o),
                        l += '"); } } #MEIQIA-INVITE { position: fixed; ',
                        l += 1 === r.type ? " margin: -78px 0 0 -159px; " : " margin-left: -159px; ",
                        l += " ",
                        2 === r.type ? (l += " top: ",
                            l += n(r.value),
                            l += "px; ") : 3 === r.type ? (l += " bottom: ",
                            l += n(r.value),
                            l += "px; ") : l += " top: 50%; ",
                        l += " left: 50%; z-index: 2147483647; display: none; width: 318px; height: 156px; text-align: left; line-height: 1.428571429; } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; right: -3px; top: -3px; width: 40px; height: 40px; ",
                        l += "round" === s || "call" === s ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:active { ",
                        l += "round" === s || "call" === s ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        l += " } #MEIQIA-INVITE #MEIQIA-INVITE-INSIDE { width: 170px; height: 44px; margin: 56px 0 0 46px; text-align: left; font-size: 13px; line-height: 22px; color: #1e4977; overflow: hidden; /*word-break: break-all;*/ } ",
                        new h(l)
                }),
                o("invite-mobile-style5-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.imgWidth
                        , o = e.imgHeight
                        , r = e.popupPosition
                        , s = e.entId
                        , l = e.btnType
                        , c = "";
                    return c += "#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE span, #MEIQIA-INVITE img { float: none; width: ",
                        c += n(a),
                        c += "px; height: ",
                        c += n(o),
                        c += "px; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { position: fixed; ",
                        1 === r.type ? (c += " margin: -",
                            c += n(o / 2),
                            c += "px 0 0 -",
                            c += n(a / 2),
                            c += "px; ") : (c += " margin-left: -",
                            c += n(a / 2),
                            c += "px; "),
                        c += " ",
                        2 === r.type ? (c += " top: ",
                            c += n(r.value),
                            c += "px; ") : 3 === r.type ? (c += " bottom: ",
                            c += n(r.value),
                            c += "px; ") : c += " top: 50%; ",
                        c += " left: 50%; display: none; z-index: 2147483647; width: ",
                        c += n(a),
                        c += "px; height: ",
                        c += n(o),
                        c += "px; cursor: pointer; ",
                    1 === s && (c += " border-radius: 8px; box-shadow: 0 4px 12px 0 rgba(238, 238, 238, .5); "),
                        c += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE { position: absolute; right: -20px; top: -20px; width: 40px; height: 40px; ",
                        c += "round" === l || "call" === l ? " background-position: -12px -492px; " : " background-position: 0 -260px; ",
                        c += " } #MEIQIA-INVITE #MEIQIA-INVITE-CLOSE:active { ",
                        c += "round" === l || "call" === l ? " background-position: -12px -556px; " : " background-position: 0 -300px; ",
                        c += " } ",
                        new h(c)
                }),
                o("invite-mobile-style6-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.popupPosition)
                        , a = i.$escape
                        , o = e.bgi
                        , r = i.$each
                        , s = e.actions
                        , l = (e.v,
                        e.k,
                        "");
                    return l += "#MEIQIA-INVITE, #MEIQIA-INVITE div, #MEIQIA-INVITE img, #MEIQIA-INVITE a { float: none; width: auto; height: auto; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-INVITE { display: none; position: fixed; ",
                        1 === n.type ? (l += " margin: -",
                            l += a(o.height / 2),
                            l += "px 0 0 -",
                            l += a(o.width / 2),
                            l += "px; ") : (l += " margin-left: -",
                            l += a(o.width / 2),
                            l += "px; "),
                        l += " ",
                        2 === n.type ? (l += " top: ",
                            l += a(n.value),
                            l += "px; ") : 3 === n.type ? (l += " bottom: ",
                            l += a(n.value),
                            l += "px; ") : l += " top: 50%; ",
                        l += " left: 50%; z-index: 2147483647; width: ",
                        l += a(o.width),
                        l += "px; height: ",
                        l += a(o.height),
                        l += "px; } #MEIQIA-INVITE #MEIQIA-INVITE-BG { position: absolute; top: 0; left: 0; z-index: 1; width: 100%; height: 100%; } #MEIQIA-INVITE #MEIQIA-INVITE-ACTIONS { position: relative; top: 0; left: 0; z-index: 2; width: 100%; height: 100%; } ",
                        r(s, function(e, t) {
                            l += " #MEIQIA-INVITE #MEIQIA-INVITE-ACTION-",
                                l += a(t),
                                l += " { display: block; position: absolute; top: ",
                                l += a(e.position.top),
                                l += "px; left: ",
                                l += a(e.position.left),
                                l += "px; width: ",
                                l += a(e.width),
                                l += "px; height: ",
                                l += a(e.height),
                                l += "px; cursor: pointer; } "
                        }),
                        l += " ",
                        new h(l)
                }),
                o("panel-desktop-customer-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.position)
                        , a = i.$escape
                        , o = "";
                    return o += "#MEIQIA-PANEL-HOLDER { position: fixed; ",
                        "left" === n.type ? (o += " bottom: ",
                            o += a(n.bottom),
                            o += "px; left: ",
                            o += a(n.horizontal),
                            o += "px; ") : "right" === n.type ? (o += " bottom: ",
                            o += a(n.bottom),
                            o += "px; right: ",
                            o += a(n.horizontal),
                            o += "px; ") : o += " top: 50%; left: 50%; ",
                        o += " z-index: -1; width: 688px; height: 540px; padding: 0; ",
                        o += "center" === n.type ? " margin: -270px 0 0 -344px; " : " margin: 0; ",
                        o += " overflow: hidden; visibility: hidden; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15); border: 1px solid #eee\\0; *border: 1px solid #eee; } #MEIQIA-IFRAME { display: none; float: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; width: 100% !important; height: 100% !important; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-DRAG-HANDLE { float: none; position: absolute; top: 0; left: 0; right: 140px; z-index: 3; width: auto; height: 60px; border: 0; padding: 0; margin: 0; background: none; cursor:move; } #MEIQIA-DRAG-MASK { display: none; float: none; position: absolute; top: 0; left: 0; z-index: 2; width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background: none; } ",
                        new h(o)
                }),
                o("panel-desktop-edge-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.position)
                        , a = "";
                    return a += "#MEIQIA-FULL-HEIGHT { height: 100% !important; } #MEIQIA-PANEL-HOLDER { position: fixed; bottom: 0; ",
                        a += "left" === n.type ? " left: 0; " : " right: 0; ",
                        a += " z-index: -1; width: 320px; height: 100%; padding: 0; margin: 0; overflow: hidden; visibility: hidden; background-color: transparent; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15); border-left: 1px solid #eee\\0; *border-left: 1px solid #eee; } #MEIQIA-IFRAME { display: none; float: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; width: 100% !important; height: 100% !important; padding: 0; margin: 0; border: 0; background: none; } ",
                        new h(a)
                }),
                o("panel-desktop-fiesta-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.position)
                        , a = i.$escape
                        , o = "";
                    return o += "#MEIQIA-PANEL-HOLDER { position: fixed; bottom: 0; ",
                        "left" === n.type ? (o += " left: ",
                            o += a(n.horizontal),
                            o += "px; ") : (o += " right: ",
                            o += a(n.horizontal),
                            o += "px; "),
                        o += " z-index: -1; width: 320px; height: 480px; padding: 0; margin: 0; overflow: hidden; visibility: hidden; background-color: transparent; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15); border: 1px solid #eee\\0; *border: 1px solid #eee; } #MEIQIA-IFRAME { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: none; width: 100% !important; height: 100% !important; border: 0; padding: 0; margin: 0; float: none; background: none; } ",
                        new h(o)
                }),
                o("panel-desktop-mondeo-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.position)
                        , a = i.$escape
                        , o = "";
                    return o += "#MEIQIA-PANEL-HOLDER { position: fixed; ",
                        "left" === n.type ? (o += " bottom: ",
                            o += a(n.bottom),
                            o += "px; left: ",
                            o += a(n.horizontal),
                            o += "px; ") : "right" === n.type ? (o += " bottom: ",
                            o += a(n.bottom),
                            o += "px; right: ",
                            o += a(n.horizontal),
                            o += "px; ") : o += " top: 50%; left: 50%; ",
                        o += " z-index: -1; width: 688px; height: 540px; padding: 0; ",
                        o += "center" === n.type ? " margin: -270px 0 0 -344px; " : " margin: 0; ",
                        o += " overflow: hidden; visibility: hidden; box-shadow: 0 0 20px 0 rgba(0, 0, 0, .15); border: 1px solid #eee\\0; *border: 1px solid #eee; } #MEIQIA-IFRAME { display: none; float: none; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: 1; width: 100% !important; height: 100% !important; padding: 0; margin: 0; border: 0; background: none; } #MEIQIA-DRAG-HANDLE { float: none; position: absolute; top: 0; left: 0; right: 140px; z-index: 3; width: auto; height: 60px; border: 0; padding: 0; margin: 0; background: none; cursor:move; } #MEIQIA-DRAG-MASK { display: none; float: none; position: absolute; top: 0; left: 0; z-index: 2; width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background: none; } ",
                        new h(o)
                }),
                o("panel-mobile-fiesta-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.ucPlan)
                        , a = "";
                    return a += n ? " .MEIQIA-FULL-HTML, .MEIQIA-FULL-BODY { width: 100% !important; height: 100% !important; padding: 0 !important; margin: 0 !important; } .MEIQIA-FULL-BODY >*{ display: none !important; } .MEIQIA-FULL-BODY #MEIQIA-PANEL-HOLDER { display: block !important; } #MEIQIA-PANEL-HOLDER { width: 100%; height: 100%; overflow: hidden; background: transparent; border: 0; } #MEIQIA-IFRAME { display: none; float: none; width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background: none; } " : " .MEIQIA-FULL-HTML { position: static !important; width: 100% !important; height: 100% !important; overflow: visible !important; } .MEIQIA-FULL-BODY { position: fixed !important; top: 0 !important; right: 0 !important; bottom: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; padding: 0 !important; margin: 0 !important; overflow: hidden !important; } #MEIQIA-PANEL-HOLDER { display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: -1; width: 100%; height: 100%; padding: 0; margin: 0; border: 0; overflow: hidden; visibility: hidden; opacity: 1; background: transparent; } #MEIQIA-IFRAME { display: none; position: relative; float: none; width: 100% !important; height: 100% !important; padding: 0; margin: 0; border: 0; background: none; } ",
                        a += " ",
                        new h(a)
                }),
                o("panel-mobile-kuga-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.ucPlan)
                        , a = "";
                    return a += n ? " .MEIQIA-FULL-HTML, .MEIQIA-FULL-BODY { width: 100% !important; height: 100% !important; padding: 0 !important; margin: 0 !important; } .MEIQIA-FULL-BODY >*{ display: none !important; } .MEIQIA-FULL-BODY #MEIQIA-PANEL-HOLDER { display: block !important; } #MEIQIA-PANEL-HOLDER { width: 100%; height: 100%; overflow: hidden; background: transparent; border: 0; } #MEIQIA-IFRAME { display: none; float: none; width: 100%; height: 100%; padding: 0; margin: 0; border: 0; background: none; } " : " .MEIQIA-FULL-HTML { position: static !important; width: 100% !important; height: 100% !important; overflow: visible !important; } .MEIQIA-FULL-BODY { position: fixed !important; top: 0 !important; right: 0 !important; bottom: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important; padding: 0 !important; margin: 0 !important; overflow: hidden !important; } #MEIQIA-PANEL-HOLDER { display: block; position: absolute; top: 0; right: 0; bottom: 0; left: 0; z-index: -1; width: 100%; height: 100%; padding: 0; margin: 0; border: 0; overflow: hidden; visibility: hidden; opacity: 1; background: transparent; } #MEIQIA-IFRAME { display: none; position: relative; float: none; width: 100% !important; height: 100% !important; padding: 0; margin: 0; border: 0; background: none; } ",
                        a += " ",
                        new h(a)
                })
        }()
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(11)
            , o = n(a);
        t["default"] = function(e) {
            var t = "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no";
            if ("init" === e) {
                var i = document.getElementsByName("viewport")[0];
                if (i) {
                    var n = i.getAttribute("content");
                    n.indexOf("width=device-width") !== -1 && n.indexOf("initial-scale=1.0") !== -1 && n.indexOf("minimum-scale=1.0") !== -1 && n.indexOf("maximum-scale=1.0") !== -1 && n.indexOf("user-scalable=no") !== -1 ? o["default"].viewport = "same" : o["default"].viewport = n
                }
            } else if ("set" === e)
                if (o["default"].viewport)
                    "same" !== o["default"].viewport && document.getElementsByName("viewport")[0].setAttribute("content", t);
                else {
                    var a = document.createElement("meta");
                    a.name = "viewport",
                        a.content = t,
                        document.getElementsByTagName("head")[0].appendChild(a)
                }
            else
                o["default"].viewport ? "same" !== o["default"].viewport && document.getElementsByName("viewport")[0].setAttribute("content", o["default"].viewport) : document.getElementsByName("viewport")[0].parentElement.removeChild(document.getElementsByName("viewport")[0])
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(15)
            , o = n(a)
            , r = i(8)
            , s = n(r)
            , l = i(18)
            , c = n(l)
            , p = i(23)
            , d = n(p)
            , u = i(20)
            , f = n(u)
            , v = i(11)
            , h = n(v)
            , g = i(24)
            , m = n(g)
            , b = i(25)
            , I = n(b);
        t["default"] = function() {
            var e = document.createElement("div");
            e.id = "MEIQIA-PANEL-HOLDER";
            var t = s["default"].isMobile()
                , i = h["default"].initData.widget_settings
                , n = ""
                , a = "panel-mobile-" + i.mobile.panel.type
                , r = "panel-mobile-" + i.mobile.panel.type + "-css";
            n = "zh" !== h["default"].language && h["default"].language ? o["default"].widget + "/mobile-" + i.mobile.panel.type + "-" + h["default"].language + ".html?" + o["default"].tail : o["default"].widget + "/mobile-" + i.mobile.panel.type + ".html?" + o["default"].tail;
            var l = i.mobile.panel.position
                , p = !1;
            s["default"].isThisDevice("ucbrowser") && (p = !0),
                t ? history.pushState && window.addEventListener("popstate", function() {
                        "visible" === h["default"].panelVisibility && ((0,
                            I["default"])("hide"),
                            (0,
                                m["default"])())
                    }) : (n = s["default"].isIE(6) || s["default"].isIE(7) || s["default"].isIE(8) || s["default"].isIE(9) ? "zh" !== h["default"].language && h["default"].language ? o["default"].widget + "/desktop-" + i.desktop.panel.type + "-basic-" + h["default"].language + ".html?" + o["default"].tail : o["default"].widget + "/desktop-" + i.desktop.panel.type + "-basic.html?" + o["default"].tail : "zh" !== h["default"].language && h["default"].language ? o["default"].widget + "/desktop-" + i.desktop.panel.type + "-" + h["default"].language + ".html?" + o["default"].tail : o["default"].widget + "/desktop-" + i.desktop.panel.type + ".html?" + o["default"].tail,
                    a = "panel-desktop-" + i.desktop.panel.type,
                    r = "panel-desktop-" + i.desktop.panel.type + "-css",
                    l = i.desktop.panel.position);
            var u = (0,
                f["default"])(a, {
                pageSrc: n
            })
                , v = (0,
                f["default"])(r, {
                position: l,
                ucPlan: p
            });
            (0,
                c["default"])(v, "MEIQIA-PANEL-STYLE"),
                e.innerHTML = u,
                document.body.appendChild(e),
            ["mondeo", "customer"].indexOf(i.desktop.panel.type) !== -1 && (0,
                d["default"])("desktop", e, document.getElementById("MEIQIA-DRAG-HANDLE"), document.getElementById("MEIQIA-DRAG-MASK"))
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = function(e, t, i, n) {
                i || (i = t);
                var a = {
                    prevX: 0,
                    prevY: 0,
                    flag: !1
                }
                    , o = function(e, t) {
                    return window.getComputedStyle ? window.getComputedStyle(e, null)[t] : e.currentStyle[t]
                }
                    , r = function(o) {
                    a.flag = !0,
                    o || (o = window.event,
                            i.onselectstart = function() {
                                return !1
                            }
                    );
                    var r = o
                        , s = r.clientX
                        , l = r.clientY;
                    "mobile" === e && (s = r.touches[0].clientX,
                        l = r.touches[0].clientY),
                        a.prevX = s - t.offsetLeft,
                        a.prevY = l - t.offsetTop,
                    n && (n.style.display = "block")
                }
                    , s = function(n) {
                    if (a.flag) {
                        var r = n ? n : window.event;
                        r.preventDefault();
                        var s = r.clientX
                            , l = r.clientY;
                        "mobile" === e && (s = r.touches[0].clientX,
                            l = r.touches[0].clientY);
                        var c = parseInt(o(t, "marginTop")) || 0
                            , p = parseInt(o(t, "marginLeft")) || 0
                            , d = document.documentElement.clientHeight - c - parseInt(o(i, "height"))
                            , u = document.documentElement.clientWidth - p - parseInt(o(t, "width"))
                            , f = l - a.prevY - c
                            , v = s - a.prevX - p;
                        v <= u && v >= Math.abs(p) && (t.style.right = "auto",
                            t.style.left = v + "px"),
                        f <= d && f >= Math.abs(c) && (t.style.bottom = "auto",
                            t.style.top = f + "px")
                    }
                }
                    , l = function() {
                    a.flag = !1,
                    n && (n.style.display = "none")
                };
                "desktop" === e ? i.onmousedown = function(e) {
                    r(e),
                        document.onmousemove = function(e) {
                            s(e)
                        }
                        ,
                        document.onmouseup = function() {
                            document.onmousemove = null,
                                document.onmouseup = null,
                                l()
                        }
                }
                    : (i.addEventListener("touchstart", function(e) {
                    r(e)
                }, !1),
                    i.addEventListener("touchmove", function(e) {
                        s(e)
                    }, !1),
                    i.addEventListener("touchend", function() {
                        l()
                    }))
            }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(8)
            , o = n(a);
        t["default"] = function(e) {
            if (!document.getElementById("MEIQIA-BTN-HOLDER"))
                return !1;
            var t = document.getElementById("MEIQIA-BTN-HOLDER")
                , i = document.getElementById("MEIQIA-CIRCLE")
                , n = document.getElementById("MEIQIA-BUBBLE");
            if ("hide" === e)
                t.style.zIndex = -1,
                    t.style.display = "none",
                "block" === i.style.display && (i.style.display = "none",
                    i.innerHTML = "",
                    n.style.display = "none");
            else {
                if (t.style.zIndex = 2147483647,
                    o["default"].isThisDevice("android") && o["default"].isThisDevice("baiduboxapp")) {
                    var a = Math.max.apply(null, Array.prototype.map.call(document.querySelectorAll("*"), function(e) {
                        return 2147483647 === +e.style.zIndex ? 999999998 : +e.style.zIndex
                    }));
                    t.style.zIndex = a + 1
                }
                t.style.display = "block"
            }
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(8)
            , o = n(a)
            , r = i(26)
            , s = n(r)
            , l = i(11)
            , c = n(l)
            , p = i(27)
            , d = n(p)
            , u = i(28)
            , f = n(u)
            , v = i(29)
            , h = n(v)
            , g = i(21)
            , m = n(g);
        t["default"] = function(e) {
            var t = document.getElementById("MEIQIA-PANEL-HOLDER");
            if (t) {
                var i = document.getElementById("MEIQIA-IFRAME");
                if ("hide" === e)
                    o["default"].isMobile() ? ((0,
                        m["default"])("revert"),
                        s["default"].removeClass(document.documentElement, "MEIQIA-FULL-HTML"),
                        s["default"].removeClass(document.body, "MEIQIA-FULL-BODY"),
                    "bottom" !== c["default"].initData.widget_settings.mobile.btn.type || c["default"].withoutBtn || s["default"].addClass(document.body, "BODY-FOR-MEIQIA"),
                        document.body.scrollTop = c["default"].scrollTop) : "edge" === c["default"].initData.widget_settings.desktop.panel.type && (s["default"].removeClass(document.documentElement, "MEIQIA-FULL-HEIGHT"),
                            s["default"].removeClass(document.body, "MEIQIA-FULL-HEIGHT")),
                        t.style.zIndex = -1,
                        o["default"].isMobile() ? (t.style.left = "-9999px",
                        o["default"].isThisDevice("ucbrowser") && (t.style.display = "none")) : (t.style.visibility = "hidden",
                            i.style.display = "none"),
                        c["default"].messenger.targets.iframe1.send("panelVisibility^@#invisible"),
                        c["default"].panelVisibility = "invisible",
                        (0,
                            d["default"])("invisible");
                else {
                    var n = {
                        action: "remove"
                    };
                    if (c["default"].messenger.targets.iframe1.send("handleUnread^@#" + JSON.stringify(n)),
                            (0,
                                f["default"])("hasBeenRead"),
                            clearTimeout(window._MEIQIA_INVITATION_TIMEOUT),
                            o["default"].isMobile() ? (c["default"].scrollTop = document.body.scrollTop,
                                (0,
                                    m["default"])("set"),
                            "bottom" !== c["default"].initData.widget_settings.mobile.btn.type || c["default"].withoutBtn || s["default"].removeClass(document.body, "BODY-FOR-MEIQIA"),
                                s["default"].addClass(document.documentElement, "MEIQIA-FULL-HTML"),
                                s["default"].addClass(document.body, "MEIQIA-FULL-BODY")) : "edge" === c["default"].initData.widget_settings.desktop.panel.type && (s["default"].addClass(document.documentElement, "MEIQIA-FULL-HEIGHT"),
                                    s["default"].addClass(document.body, "MEIQIA-FULL-HEIGHT")),
                            t.style.visibility = "visible",
                            t.style.zIndex = 2147483647,
                        o["default"].isThisDevice("android") && o["default"].isThisDevice("baiduboxapp")) {
                        var a = Math.max.apply(null, Array.prototype.map.call(document.querySelectorAll("*"), function(e) {
                            return 2147483647 === +e.style.zIndex ? 999999998 : +e.style.zIndex
                        }));
                        t.style.zIndex = a + 1
                    }
                    i.style.display = "block",
                    o["default"].isMobile() && t.style.left && (t.style.left = ""),
                        c["default"].messenger.targets.iframe1.send("panelVisibility^@#visible"),
                        c["default"].panelVisibility = "visible",
                        (0,
                            d["default"])("visible"),
                    "function" != typeof c["default"].getInviting && document.getElementById("MEIQIA-INVITE") && "block" === document.getElementById("MEIQIA-INVITE").style.display && (0,
                        h["default"])("none")
                }
            }
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e, t) {
            return e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
        }
            , n = function(e, t) {
            i(e, t) || (e.className += " " + t)
        }
            , a = function(e, t) {
            if (i(e, t)) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, "")
            }
        };
        t["default"] = {
            hasClass: i,
            addClass: n,
            removeClass: a
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(11)
            , o = n(a);
        t["default"] = function(e) {
            return "function" == typeof o["default"].getPanelVisibility && void o["default"].getPanelVisibility(e)
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(11)
            , o = n(a);
        t["default"] = function(e) {
            return "function" == typeof o["default"].getUnreadMsg && ("hasBeenRead" !== e && (e = JSON.parse(e)),
                    void o["default"].getUnreadMsg(e))
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(11)
            , o = n(a)
            , r = function s(e) {
            o["default"].inviteReady ? !function() {
                var t = o["default"].initData.invitation_config
                    , i = document.getElementById("MEIQIA-INVITE");
                "hide" === e ? (i.style.display = "none",
                "auto" === o["default"].inviteType && "again" === t.auto.reject.type && (clearTimeout(window._MEIQIA_INVITATION_TIMEOUT),
                    window._MEIQIA_INVITATION_TIMEOUT = setTimeout(function() {
                        s(),
                            clearTimeout(window._MEIQIA_AUTO_ACCEPT_INVITATION_TIMEOUT),
                        "open" === t.auto.accept.status && (window._MEIQIA_AUTO_ACCEPT_INVITATION_TIMEOUT = setTimeout(function() {
                            if ("no" === o["default"].conversation) {
                                var e = {
                                    type: "autoInvite",
                                    agentToken: o["default"].agentToken,
                                    groupToken: null
                                };
                                o["default"].messenger.targets.iframe1.send("callWidget^@#" + JSON.stringify(e))
                            }
                        }, 1e3 * parseInt(t.auto.accept.countdown)))
                    }, 1e3 * parseInt(t.auto.reject.countdown))),
                "manual" === o["default"].inviteType && clearTimeout(window._MEIQIA_ACCEPT_INVITE_TIMEOUT)) : "none" === e ? i.style.display = "none" : "invisible" === o["default"].panelVisibility && "no" === o["default"].conversation && ("manual" === o["default"].inviteType && "open" === t.manual.accept.status && (window._MEIQIA_ACCEPT_INVITE_TIMEOUT = setTimeout(function() {
                        if ("invisible" === o["default"].panelVisibility && "no" === o["default"].conversation) {
                            var e = {
                                type: "autoInvite",
                                agentToken: o["default"].agentToken,
                                groupToken: null
                            };
                            o["default"].messenger.targets.iframe1.send("callWidget^@#" + JSON.stringify(e))
                        }
                    }, 1e3 * parseInt(t.manual.accept.countdown))),
                        i.style.display = "block")
            }() : setTimeout(function() {
                s(e)
            }, 1e3)
        };
        t["default"] = function(e) {
            r(e)
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(8)
            , o = n(a)
            , r = i(26)
            , s = n(r)
            , l = i(18)
            , c = n(l)
            , p = i(23)
            , d = n(p)
            , u = i(20)
            , f = n(u)
            , v = i(11)
            , h = n(v)
            , g = i(31)
            , m = n(g)
            , b = function(e) {
            if ("MEIQIA-BUBBLE-CLOSE" === e.target.id)
                document.getElementById("MEIQIA-BUBBLE").style.display = "none";
            else {
                var t = "callWidget^@#"
                    , i = h["default"].assign;
                i ? i.agentToken && (i.groupToken = null) : i = {},
                    i.type = "click",
                    t += JSON.stringify(i),
                    h["default"].messenger.targets.iframe1.send(t)
            }
        }
            , I = function(e) {
            1 === e ? (document.getElementById("MEIQIA-BTN-CALL").addEventListener("click", function() {
                h["default"].messenger.targets.iframe1.send("callWidget^@#call")
            }),
                document.getElementById("MEIQIA-BTN-CHAT").addEventListener("click", function(e) {
                    "callwidget" !== (0,
                        m["default"])(h["default"]) && b(e)
                })) : document.getElementById("MEIQIA-BTN").addEventListener("click", function(e) {
                "callwidget" !== (0,
                    m["default"])(h["default"]) && b(e)
            })
        };
        t["default"] = function() {
            var e = o["default"].isMobile()
                , t = h["default"].initData
                , i = document.createElement("div")
                , n = t.widget_settings
                , a = "#fff"
                , r = ""
                , l = ""
                , p = ""
                , u = ""
                , v = "";
            e ? (h["default"].preview = n.mobile.btn.preview,
            "bottom" === n.mobile.btn.type && s["default"].addClass(document.body, "BODY-FOR-MEIQIA"),
                t.servability || 4 === t.visitor_status ? (p = "CHAT" + n.mobile.btn.icon.online,
                    u = n.mobile.btn.text.online,
                    v = n.mobile.btn.picture.online) : (p = "TICKET" + n.mobile.btn.icon.offline,
                    u = n.mobile.btn.text.offline,
                    v = n.mobile.btn.picture.offline),
                r = (0,
                    f["default"])("btn-mobile-" + n.mobile.btn.type + "-css", {
                    bgColor: "#" + n.mobile.btn.theme,
                    textColor: a,
                    position: n.mobile.btn.position
                }),
                l = (0,
                    f["default"])("btn-" + n.mobile.btn.type, {
                    btnIcon: p,
                    btnText: u,
                    btnSrc: v
                })) : (h["default"].preview = n.desktop.btn.preview,
                t.servability || 4 === t.visitor_status ? (p = "CHAT" + n.desktop.btn.icon.online,
                    u = n.desktop.btn.text.online,
                    v = n.desktop.btn.picture.online) : (p = "TICKET" + n.desktop.btn.icon.offline,
                    u = n.desktop.btn.text.offline,
                    v = n.desktop.btn.picture.offline),
                r = (0,
                    f["default"])("btn-desktop-" + n.desktop.btn.type + "-css", {
                    bgColor: "#" + n.desktop.btn.theme,
                    textColor: a,
                    position: n.desktop.btn.position
                }),
                l = (0,
                    f["default"])("btn-" + n.desktop.btn.type, {
                    btnIcon: p,
                    btnText: u,
                    btnSrc: v
                })),
                (0,
                    c["default"])(r, "MEIQIA-BTN-STYLE"),
                i.id = "MEIQIA-BTN-HOLDER",
                i.innerHTML = l,
                document.body.appendChild(i);
            var g = 0;
            e ? "call" === n.mobile.btn.type && (g = 1) : "call" === n.desktop.btn.type && (g = 1),
                I(g),
            e && "round" === n.mobile.btn.type && (0,
                d["default"])("mobile", document.getElementById("MEIQIA-BTN-HOLDER"), document.getElementById("MEIQIA-BTN"))
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function a(e, t, i) {
            return t ? window.open("https://static.meiqia.com/dist/standalone.html?eid=" + e + "&agentid=" + t) : i ? window.open("https://static.meiqia.com/dist/standalone.html?eid=" + e + "&groupid=" + i) : window.open("https://static.meiqia.com/dist/standalone.html?eid=" + e),
                "callwidget"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(8)
            , r = n(o);
        t["default"] = function(e) {
            if (r["default"].isIE(8))
                return a(e.entId, e.agentToken, e.groupToken)
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(15)
            , o = n(a)
            , r = i(8)
            , s = n(r)
            , l = i(18)
            , c = n(l)
            , p = i(12)
            , d = n(p)
            , u = i(19)
            , f = n(u)
            , v = i(20)
            , h = n(v)
            , g = i(11)
            , m = n(g)
            , b = i(31)
            , I = n(b)
            , y = i(29)
            , x = n(y)
            , E = function(e, t) {
            var i = e.widget_settings
                , n = ""
                , a = void 0
                , r = ""
                , l = ""
                , p = {}
                , u = {}
                , f = ""
                , v = {}
                , g = {};
            s["default"].isMobile() ? (v = t.mobile,
            v.position || (v.position = {
                type: 1,
                value: 0
            }),
                a = t.mobile.type,
                f = "mobile") : (v = t.desktop,
            v.position || (v.position = {
                type: 1,
                side: 0,
                bottom: 0
            }),
                a = t.desktop.type,
                f = "desktop"),
                6 === a ? (n = v.bgi.src,
                    u = {
                        text: v.text,
                        bgi: v.bgi,
                        actions: v.actions
                    },
                    p = {
                        popupPosition: v.position,
                        bgi: v.bgi,
                        actions: v.actions
                    }) : (p = {
                    entId: m["default"].entId,
                    position: i[f].btn.position,
                    popupPosition: v.position,
                    cdn: o["default"].cdn,
                    btnType: i[f].btn.type,
                    imgWidth: 0,
                    imgHeight: 0,
                    tail: o["default"].tail
                },
                5 === a && (n = v.src),
                    u = {
                        popupText: v.text,
                        src: v.src
                    });
            var b = function() {
                r = (0,
                    h["default"])("invite-" + f + "-style" + a + "-css", p),
                    l = (0,
                        h["default"])("invite-style" + a, u),
                    (0,
                        c["default"])(r, "MEIQIA-INVITE-STYLE");
                var i = document.createElement("div");
                i.id = "MEIQIA-INVITE",
                    i.innerHTML = l,
                    document.body.appendChild(i),
                    m["default"].inviteReady = !0,
                    6 === a ? document.getElementById("MEIQIA-INVITE").addEventListener("click", function(e) {
                        if ("meiqiaInviteReject" === e.target.name && (d["default"].set("MEIQIA_REJECT_INVITATION", "yes"),
                                (0,
                                    x["default"])("hide"),
                                clearTimeout(window._MEIQIA_AUTO_ACCEPT_INVITATION_TIMEOUT),
                                m["default"].messenger.targets.iframe1.send("rejectInvitation^@#")),
                            "meiqiaInviteAccept" === e.target.name) {
                            if (m["default"].assign && (m["default"].assign.agentToken && (g.agentToken = m["default"].assign.agentToken),
                                m["default"].assign.groupToken && (g.groupToken = m["default"].assign.groupToken)),
                                "manual" === m["default"].inviteType && (g.type = "manualInvite",
                                    g.agentToken = m["default"].agentToken,
                                    g.groupToken = null),
                                "callwidget" === (0,
                                    I["default"])(m["default"]))
                                return;
                            m["default"].messenger.targets.iframe1.send("callWidget^@#" + JSON.stringify(g))
                        }
                    }) : document.getElementById("MEIQIA-INVITE").addEventListener("click", function(e) {
                        if ("MEIQIA-INVITE-CLOSE" === e.target.id)
                            d["default"].set("MEIQIA_REJECT_INVITATION", "yes"),
                                (0,
                                    x["default"])("hide"),
                                clearTimeout(window._MEIQIA_AUTO_ACCEPT_INVITATION_TIMEOUT),
                                m["default"].messenger.targets.iframe1.send("rejectInvitation^@#");
                        else {
                            if (m["default"].assign && (m["default"].assign.agentToken && (g.agentToken = m["default"].assign.agentToken),
                                m["default"].assign.groupToken && (g.groupToken = m["default"].assign.groupToken)),
                                "manual" === m["default"].inviteType && (g.type = "manualInvite",
                                    g.agentToken = m["default"].agentToken,
                                    g.groupToken = null),
                                "callwidget" === (0,
                                    I["default"])(m["default"]))
                                return;
                            m["default"].messenger.targets.iframe1.send("callWidget^@#" + JSON.stringify(g))
                        }
                    }),
                e.servability && (2 === e.visitor_status ? (m["default"].agentToken = e.visitor_status_agent_token,
                    m["default"].inviteType = "manual",
                    (0,
                        x["default"])()) : 4 !== e.visitor_status && "open" === t.auto.status && (clearTimeout(window._MEIQIA_INVITATION_TIMEOUT),
                        window._MEIQIA_INVITATION_TIMEOUT = setTimeout(function() {
                            m["default"].inviteType = "auto",
                                (0,
                                    x["default"])(),
                                clearTimeout(window._MEIQIA_AUTO_ACCEPT_INVITATION_TIMEOUT),
                            "open" === t.auto.accept.status && (window._MEIQIA_AUTO_ACCEPT_INVITATION_TIMEOUT = setTimeout(function() {
                                "no" === m["default"].conversation && (g.type = "autoInvite",
                                m["default"].assign && (m["default"].assign.agentToken && (g.agentToken = m["default"].assign.agentToken),
                                m["default"].assign.groupToken && (g.groupToken = m["default"].assign.groupToken)),
                                    m["default"].messenger.targets.iframe1.send("callWidget^@#" + JSON.stringify(g)))
                            }, 1e3 * parseInt(t.auto.accept.countdown)))
                        }, 1e3 * parseInt(t.auto.countdown)),
                    "yes" === d["default"].get("MEIQIA_REJECT_INVITATION") && "stop" === t.auto.reject.type && clearTimeout(window._MEIQIA_INVITATION_TIMEOUT)))
            };
            n ? !function() {
                var e = new Image;
                e.src = n,
                    e.onload = function() {
                        p.imgWidth = e.width,
                            p.imgHeight = e.height,
                        e.width > 300 && s["default"].isMobile() && (p.imgHeight = Math.round(300 * e.height / e.width),
                            p.imgWidth = 300),
                            b()
                    }
            }() : b()
        };
        t["default"] = function() {
            var e = m["default"].initData
                , t = e.invitation_config;
            "open" === t.facade_status ? f["default"].ajax({
                url: o["default"].chat + "/facade/get_facade_result",
                type: "GET",
                dataType: "json",
                contentType: "application/json",
                data: {
                    enterprise_id: m["default"].entId,
                    source_page: e.facade.source_page,
                    returning: e.facade.returning,
                    country: e.facade.location,
                    target: s["default"].isMobile() ? "mobile" : "pc",
                    landing_page: e.facade.landing_page,
                    keyword: e.facade.keyword,
                    search_engine: e.facade.search_engine,
                    direct: e.facade.direct,
                    source_type: e.facade.source_type,
                    current_url: window.location.href
                },
                success: function(i) {
                    i.look_config && (t.mobile = i.look_config.mobile,
                        t.desktop = i.look_config.desktop),
                    i.mech_config && (t.auto = i.mech_config.auto,
                        t.manual = i.mech_config.manual),
                        E(e, t)
                },
                error: function(e) {
                    console.log("err", e)
                }
            }) : E(e, t)
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(15)
            , o = n(a)
            , r = i(19)
            , s = n(r)
            , l = i(11)
            , c = n(l);
        t["default"] = function(e) {
            var t = e || c["default"].metadata;
            s["default"].jsonp({
                url: o["default"].chat + "/client/attrs_jsonp",
                data: {
                    ent_id: c["default"].entId,
                    track_id: c["default"].trackId,
                    visit_id: c["default"].visitId,
                    browser_id: c["default"].browserId,
                    attrs: JSON.stringify(t)
                },
                callback: "jsonp_cb",
                success: function() {}
            })
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(15)
            , o = n(a)
            , r = i(19)
            , s = n(r)
            , l = i(11)
            , c = n(l)
            , p = i(17)
            , d = n(p)
            , u = function() {
            var e = {
                ent_id: c["default"].entId,
                dev_client_id: c["default"].clientId
            };
            c["default"].trackId && (e.track_id = c["default"].trackId),
                "string" == typeof c["default"].clientId && c["default"].clientId.length > 5 ? s["default"].jsonp({
                    url: o["default"].chat + "/visit/get_binding",
                    data: e,
                    callback: "jsonp_cb",
                    success: function(e) {
                        e.track_id && (c["default"].trackId = e.track_id,
                            c["default"].clientBind = !0),
                            (0,
                                d["default"])()
                    }
                }) : (0,
                    d["default"])()
        };
        t["default"] = {
            getBinding: u
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = function() {
                var e = window._MEIQIA.a
                    , t = {};
                if (e.length) {
                    for (var i = 0; i < e.length; i++)
                        t[e[i][0]] = e[i][1] || !0;
                    return t
                }
                return null
            }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(11)
            , o = n(a);
        t["default"] = function(e) {
            return "function" == typeof o["default"].allSet && void o["default"].allSet(e)
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(11)
            , o = n(a);
        t["default"] = function(e) {
            return "function" == typeof o["default"].convClickCallback && void o["default"].convClickCallback(e.split(":")[0], e.split(":")[1])
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(11)
            , o = n(a);
        t["default"] = function(e) {
            return "function" == typeof o["default"].getInviting && void o["default"].getInviting(e)
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function a() {
            function e(e, t) {
                var i = document
                    , n = i.createElement("style");
                if (n.id = t,
                        n.setAttribute("type", "text/css"),
                        n.styleSheet)
                    n.styleSheet.cssText = e;
                else {
                    var a = i.createTextNode(e);
                    n.appendChild(a)
                }
                var o = i.getElementsByTagName("head");
                o.length ? o[0].appendChild(n) : i.documentElement.appendChild(n)
            }
            var t = "#MEIQIA-BTN #MEIQIA-BUBBLE-MSG .name,#MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-MSG .name,#MEIQIA-BUBBLE-MSG .date,#MEIQIA-BUBBLE-MSG .agent-avatar{display: none;}#MEIQIA-BTN #MEIQIA-BUBBLE-MSG img,#MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-MSG img{width: auto;height: auto;}#MEIQIA-BTN-CHAT #MEIQIA-BUBBLE-MSG .agent-avatar img,#MEIQIA-BTN #MEIQIA-BUBBLE-MSG .agent-avatar img{width: 16px;height: 16px;}";
            document.getElementById("addHideNameStyle") || e(t, "addHideNameStyle")
        }
        function o() {
            var e = document.getElementById("MEIQIA-BUBBLE-MSG")
                , t = parseInt(document.documentElement.clientHeight || document.body.clientHeight);
            e.style.maxHeight = t / 2 + "px",
                e.style.height = "auto",
                e.style.overflow = "auto"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i(11)
            , s = n(r)
            , l = i(40)
            , c = n(l)
            , p = i(47)
            , d = n(p);
        t["default"] = function(e) {
            if (s["default"].withoutBtn)
                return !1;
            var t = function() {
                var t = document.getElementById("MEIQIA-BUBBLE");
                if (t) {
                    var i = e[e.length - 1];
                    document.getElementById("MEIQIA-BUBBLE-AVATAR").src = i.agent.avatar,
                        document.getElementById("MEIQIA-BUBBLE-NAME").innerHTML = i.agent.nickname;
                    var n = document.getElementById("MEIQIA-BUBBLE-MSG");
                    a(),
                        o();
                    var r = (0,
                        c["default"])({
                        language: s["default"].language || (0,
                            d["default"])("language")
                    })
                        , l = void 0;
                    if ("hybrid" === i.content_type) {
                        var p = JSON.parse(i.content);
                        "list" === p[0].type && (p = p[0].body),
                            l = r("msg-new", {
                                info: i,
                                content: p
                            })
                    } else
                        l = r("msg", {
                            v: i
                        });
                    n.innerHTML = l,
                        t.style.display = "block"
                }
            };
            e = JSON.parse(e);
            var i = document.getElementById("MEIQIA-CIRCLE");
            if (i) {
                var n = +i.innerHTML;
                n < 99 && (n += e.length),
                    i.innerHTML = n,
                    i.style.display = "block"
            }
            "open" === s["default"].preview && t()
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(41)
            , o = n(a)
            , r = i(42)
            , s = n(r)
            , l = i(43)
            , c = n(l)
            , p = i(44)
            , d = n(p)
            , u = i(45)
            , f = n(u)
            , v = i(46)
            , h = n(v)
            , g = i(8)
            , m = n(g)
            , b = {
            pc: {
                zh: o["default"],
                en: s["default"],
                tw: c["default"]
            },
            mobile: {
                zh: d["default"],
                en: f["default"],
                tw: h["default"]
            }
        }
            , I = {
            pc: o["default"],
            mobile: d["default"]
        }
            , y = m["default"].isMobile() ? "mobile" : "pc";
        t["default"] = function(e) {
            var t = e.language;
            return b[y][t] || I[y]
        }
    }
    , function(e, t, i) {
        var n, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function() {
            function o(e, t) {
                return (/string|function/.test("undefined" == typeof t ? "undefined" : a(t)) ? u : d)(e, t)
            }
            function r(e, t) {
                return "string" != typeof e && (t = "undefined" == typeof e ? "undefined" : a(e),
                    "number" === t ? e += "" : e = "function" === t ? r(e.call(e)) : ""),
                    e
            }
            function s(e) {
                return g[e]
            }
            function l(e) {
                return r(e).replace(/&(?![\w#]+;)|[<>"']/g, s)
            }
            function c(e, t) {
                if (m(e))
                    for (var i = 0, n = e.length; i < n; i++)
                        t.call(e, e[i], i, e);
                else
                    for (i in e)
                        t.call(e, e[i], i)
            }
            function p(e, t) {
                var i = /(\/)[^\/]+\1\.\.\1/
                    , n = ("./" + e).replace(/[^\/]+$/, "")
                    , a = n + t;
                for (a = a.replace(/\/\.\//g, "/"); a.match(i); )
                    a = a.replace(i, "/");
                return a
            }
            function d(e, t) {
                var i = o.get(e) || f({
                        filename: e,
                        name: "Render Error",
                        message: "Template not found"
                    });
                return t ? i(t) : i
            }
            function u(e, t) {
                if ("string" == typeof t) {
                    var i = t;
                    t = function() {
                        return new h(i)
                    }
                }
                var n = v[e] = function(i) {
                        try {
                            return new t(i,e) + ""
                        } catch (n) {
                            return f(n)()
                        }
                    }
                ;
                return n.prototype = t.prototype = b,
                    n.toString = function() {
                        return t + ""
                    }
                    ,
                    n
            }
            function f(e) {
                var t = "{Template Error}"
                    , i = e.stack || "";
                if (i)
                    i = i.split("\n").slice(0, 2).join("\n");
                else
                    for (var n in e)
                        i += "<" + n + ">\n" + e[n] + "\n\n";
                return function() {
                    return "object" === ("undefined" == typeof console ? "undefined" : a(console)) && console.error(t + "\n\n" + i),
                        t
                }
            }
            var v = o.cache = {}
                , h = this.String
                , g = {
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "&": "&#38;"
            }
                , m = Array.isArray || function(e) {
                    return "[object Array]" === {}.toString.call(e)
                }
                , b = o.utils = {
                $helpers: {},
                $include: function(e, t, i) {
                    return e = p(i, e),
                        d(e, t)
                },
                $string: r,
                $escape: l,
                $each: c
            }
                , I = o.helpers = b.$helpers;
            o.get = function(e) {
                return v[e.replace(/^\.\//, "")]
            }
                ,
                o.helper = function(e, t) {
                    I[e] = t
                }
                ,
                n = function() {
                    return o
                }
                    .call(t, i, t, e),
                !(void 0 !== n && (e.exports = n)),
                o("akj-leave-msg", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.citys
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = "";
                    return r += '<div id="ticketV2" class="active akj-wrap"> <p class="akj-text">我家装修多少钱？</p> <ul class="akj-order"> <li> <select placeholder="请输入您的城市" value="" id="akj-city-ticket"> ',
                        n(a, function(e, t) {
                            r += ' <option value="',
                                r += o(e.key),
                                r += '">',
                                r += o(e.name),
                                r += "</option> "
                        }),
                        r += ' </select> </li> <li> <input type="text" value="" placeholder="您的称呼" id="akj-name-ticket" /> </li> <li> <input type="tel" value="" placeholder="手机号码，方便给您报价" id="akj-tel-ticket" /> </li> <li> <button id="akj-sub">立即获得报价</button> </li> </ul> </div>',
                        new h(r)
                }),
                o("akj-order", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = i.$string
                        , r = e.content
                        , s = i.$each
                        , l = e.citys
                        , c = (e.v,
                        e.k,
                        "");
                    return c += '<div class="profile-contact" style="background-color: #',
                        c += n(a),
                        c += '"> <div class="akj-content"> ',
                        c += o(r),
                        c += ' </div> <p class="akj-text">我家装修多少钱？</p> <ul class="akj-order"> <li> <select placeholder="请输入您的城市" id="akj-city"> ',
                        s(l, function(e, t) {
                            c += ' <option value="',
                                c += n(e.key),
                                c += '">',
                                c += n(e.name),
                                c += "</option> "
                        }),
                        c += ' </select> </li> <li> <input type="text" placeholder="您的称呼" id="akj-name" /> </li> <li> <input type="tel" placeholder="手机号码，方便给您报价" id="akj-tel" /> </li> <li> <button id="akj-sub">立即获得报价</button> </li> </ul> </div>',
                        new h(c)
                }),
                o("audio", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = "";
                    return o += '<audio id="newChat" preload="preload"> <source src="',
                        o += n(a),
                        o += '/audio/new-chat.ogg" type="audio/ogg" /> <source src="',
                        o += n(a),
                        o += '/audio/new-chat.mp3" type="audio/mpeg" /> </audio> <audio id="newMessage" preload="preload"> <source src="',
                        o += n(a),
                        o += '/audio/new-message.ogg" type="audio/ogg" /> <source src="',
                        o += n(a),
                        o += '/audio/new-message.mp3" type="audio/mpeg" /> </audio> <audio id="sentMessage" preload="preload"> <source src="',
                        o += n(a),
                        o += '/audio/sent-message.ogg" type="audio/ogg" /> <source src="',
                        o += n(a),
                        o += '/audio/sent-message.mp3" type="audio/mpeg" /> </audio>',
                        new h(o)
                }),
                o("chat-has-end", '对话已结束，您可以<a class="btn-restart-chat">开始新的对话</a>或<a class="btn-go-ticket">留言</a>'),
                o("emoji", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.list
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = "";
                    return n(a, function(e, t) {
                        r += ' <i class="emoji-control emoji-',
                            r += o(e),
                            r += '" onclick="window.CHOSE_EMOJI(\':',
                            r += o(e),
                            r += ":')\"></i> "
                    }),
                        r += ' <div class="clearfix"></div>',
                        new h(r)
                }),
                o("evaluation-basic", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = "";
                    return o += '<div class="evaluation-header"> <a id="evaluationHide"> <i class="icon icon-times"></i> </a> <div class="intro">',
                        o += n(a),
                        o += '</div> </div> <div class="evaluation-body"> <div class="evaluation-btn-group"> <input id="evaluationLevel" type="hidden" /> <div id="evaluation2" class="evaluation-btn"> <i class="icon icon-smile"></i> <span>好评</span> </div> <div id="evaluation1" class="evaluation-btn"> <i class="icon icon-neutral"></i> <span>中评</span> </div> <div id="evaluation0" class="evaluation-btn"> <i class="icon icon-angry"></i> <span>差评</span> </div> </div> <div class="evaluation-reason"> <label for="evaluationContent">请填写评价内容（选填）</label> <textarea id="evaluationContent"></textarea> <button id="evaluationSubmit">提交</button> </div> </div> ',
                        new h(o)
                }),
                o("evaluation", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = "";
                    return o += '<div class="evaluation-header"> <a id="evaluationHide"> <i class="icon icon-times"></i> </a> <div class="intro">',
                        o += n(a),
                        o += '</div> </div> <div class="evaluation-body"> <div class="evaluation-btn-group"> <input id="evaluationLevel" type="hidden" /> <div id="evaluation2" class="evaluation-btn"> <i class="icon icon-smile"></i> <span>好评</span> </div> <div id="evaluation1" class="evaluation-btn"> <i class="icon icon-neutral"></i> <span>中评</span> </div> <div id="evaluation0" class="evaluation-btn"> <i class="icon icon-angry"></i> <span>差评</span> </div> </div> <div class="evaluation-reason"> <textarea id="evaluationContent" placeholder="请填写评价内容（选填）"></textarea> <button id="evaluationSubmit">提交</button> </div> </div> ',
                        new h(o)
                }),
                o("features", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.emoji)
                        , a = e.photo
                        , o = e.upload
                        , r = e.evaluation
                        , s = "";
                    return n && (s += ' <a id="emojiBtn" class="feature-btn" title="表情"> <i class="icon icon-emoji"></i> </a> '),
                        s += " ",
                    a && (s += ' <label id="photoBtn" class="feature-btn" title="发送图片"> <i class="icon icon-photo"></i> <input id="photoFile" type="file" accept="image/gif, image/jpeg, image/jpg, image/png"> </label> '),
                        s += " ",
                    o && (s += ' <label id="uploadBtn" class="feature-btn" title="发送文件"> <i class="icon icon-upload"></i> <input id="uploadFile" type="file"> </label> '),
                        s += " ",
                    r && (s += ' <a id="evaluationBtn" class="feature-btn" title="评价"> <i class="icon icon-evaluation"></i> </a> '),
                        new h(s)
                }),
                o("header-customer", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.photoType)
                        , a = i.$escape
                        , o = e.avatar
                        , r = e.signature
                        , s = e.name
                        , l = "";
                    return "small" === n && (l += ' <img class="agent-avatar" src="',
                        l += a(o),
                        l += '" alt="avatar"> '),
                        l += " ",
                        l += "small" === n ? ' <div class="agent-info" style="margin-left: 54px"> ' : ' <div class="agent-info"> ',
                        l += ' <div class="agent-name ',
                    r || (l += "without-signature"),
                        l += '"> ',
                        l += a(s),
                        l += ' <span id="agentInputting">对方输入消息中...</span> </div> <div class="agent-signature" title="',
                        l += a(r),
                        l += '">',
                        l += a(r),
                        l += "</div> </div> ",
                        new h(l)
                }),
                o("header-fusion", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.signature)
                        , a = i.$escape
                        , o = e.name
                        , r = "";
                    return r += '<div class="agent-info"> <div class="agent-name ',
                    n || (r += "without-signature"),
                        r += '"> ',
                        r += a(o),
                        r += ' <span id="agentInputting">对方输入消息中...</span> </div> <div class="agent-signature" title="',
                        r += a(n),
                        r += '">',
                        r += a(n),
                        r += "</div> </div>",
                        new h(r)
                }),
                o("header-loading", '<div id="loading"> 连接中<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span> </div>'),
                o("header-mondeo", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.signature)
                        , a = i.$escape
                        , o = e.name
                        , r = "";
                    return r += '<div class="agent-info"> <div class="agent-name ',
                    n || (r += "without-signature"),
                        r += '"> ',
                        r += a(o),
                        r += ' <span id="agentInputting">对方输入消息中...</span> </div> <div class="agent-signature" title="',
                        r += a(n),
                        r += '">',
                        r += a(n),
                        r += "</div> </div>",
                        new h(r)
                }),
                o("header", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.avatar
                        , o = e.signature
                        , r = e.name
                        , s = "";
                    return s += '<img class="agent-avatar" src="',
                        s += n(a),
                        s += '" alt="avatar"> <div class="agent-info"> <div class="agent-name ',
                    o || (s += "without-signature"),
                        s += '"> ',
                        s += n(r),
                        s += ' <span id="agentInputting">对方输入消息中...</span> </div> <div class="agent-signature" title="',
                        s += n(o),
                        s += '">',
                        s += n(o),
                        s += "</div> </div>",
                        new h(s)
                }),
                o("msg-new", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.info
                        , o = i.$each
                        , r = e.content
                        , s = (e.msg,
                        e.k,
                        i.$string)
                        , l = (e.item,
                        e.mk,
                        "");
                    return l += '<div id="',
                        l += n(a.id),
                        l += '" class="msg-bot"> <div class="name"> ',
                        l += n(a.agent.nickname),
                        l += " ",
                    a.displayDate && (l += ' <span id="date',
                        l += n(a.id),
                        l += '" class="date">',
                        l += n(a.displayDate),
                        l += "</span> "),
                        l += ' </div> <div class="bubble"> ',
                        o(r, function(e, t) {
                            l += " ",
                            "text" === e.type && (l += ' <div class="text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "txt" === e.type && (l += ' <div class="text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "rich_text" === e.type && (l += ' <div class="text rich_text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "choices" === e.type && (l += ' <div class="menu"> ',
                            e.body.choices && e.body.choices.length && (l += " <ol> ",
                                o(e.body.choices, function(e, t) {
                                    l += ' <li> <span class="menu-item" data-value="',
                                        l += s(e),
                                        l += '">',
                                        l += s(e),
                                        l += "</span> </li> "
                                }),
                                l += ' </ol> <div class="menu-tips">点击问题或回复问题查看答案</div> '),
                                l += " </div> "),
                                l += " "
                        }),
                        l += " </div> </div>",
                        new h(l)
                }),
                o("msg", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.v)
                        , a = i.$escape
                        , o = i.$string
                        , r = i.$each
                        , s = (e.rv,
                        e.rk,
                        e.mv,
                        e.mk,
                        e.historyTimes)
                        , l = "";
                    return "bot" === n.from_type ? (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-bot"> <div class="name"> ',
                        l += a(n.agent.nickname),
                        l += " ",
                    n.displayDate && (l += ' <span id="date',
                        l += a(n.id),
                        l += '" class="date">',
                        l += o(n.displayDate),
                        l += "</span> "),
                        l += " </div> ",
                        "welcome" === n.content_type ? (l += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text"> ',
                            l += o(n.content),
                            l += " </div> </div> ") : "text" === n.content_type || "bot" === n.content_type ? (l += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> ',
                            n.content_robot && n.content_robot.length ? (l += " ",
                                r(n.content_robot, function(e, t) {
                                    l += " ",
                                        "text" === e.type ? (l += " ",
                                            e.rich_text ? (l += ' <div class="text rich_text">',
                                                l += o(e.rich_text),
                                                l += "</div> ") : (l += ' <div class="text">',
                                                l += o(e.text),
                                                l += "</div> "),
                                            l += " ") : "menu" !== e.type && "related" !== e.type || (l += " ",
                                            e.text_before && (l += ' <div class="menu-tips">',
                                                l += a(e.text_before),
                                                l += "</div> "),
                                                l += ' <div class="menu"> ',
                                            e.items && e.items.length && (l += " <ol>",
                                                r(e.items, function(e, t) {
                                                    l += " <li> ",
                                                        e.link ? (l += ' <a class="menu-item" data-value="',
                                                            l += o(e.value),
                                                            l += '" href="',
                                                            l += o(e.link),
                                                            l += '" target="_blank">',
                                                            l += o(e.text),
                                                            l += "</a> ") : (l += ' <span class="menu-item" data-value="',
                                                            l += o(e.value),
                                                            l += '">',
                                                            l += o(e.text),
                                                            l += "</span> "),
                                                        l += " </li> "
                                                }),
                                                l += '</ol> <div class="menu-tips">点击问题或回复数字查看答案</div> '),
                                                l += " </div> "),
                                        l += " "
                                }),
                                l += " ") : n.content && (l += ' <div class="text">',
                                    l += o(n.content),
                                    l += "</div> "),
                            l += " ",
                        "evaluate" === n.sub_type && (l += ' <div class="rating" data-question-id="',
                            l += o(n.question_id),
                            l += '"> <a href="javascript:;;" class="option" data-option="useful">解决</a> <a href="javascript:;;" class="option" data-option="useless">未解决</a> <span class="rated-text">已反馈</span> <span class="pending-text">提交中</span> <span class="split"></span> </div> '),
                            l += " </div> ") : "rich_text" === n.content_type ? (l += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                            l += o(n.extra.content),
                            l += "</div> ",
                        "evaluate" === n.sub_type && (l += ' <div class="rating" data-question-id="',
                            l += o(n.question_id),
                            l += '"> <a href="javascript:;;" class="option" data-option="useful">解决</a> <a href="javascript:;;" class="option" data-option="useless">未解决</a> <span class="rated-text">已反馈</span> <span class="pending-text">提交中</span> <span class="split"></span> </div> '),
                            l += " </div> ") : "photo" === n.content_type && (l += ' <div class="photo"> <a href="',
                                l += a(n.media_url),
                                l += '" target="_blank"> ',
                                s > 1 ? (l += ' <img src="',
                                    l += a(n.media_url),
                                    l += '" /> ') : (l += ' <img src="',
                                    l += a(n.media_url),
                                    l += '" onload="window.SCROLL_TO_LAST()" /> '),
                                l += " </a> </div> "),
                        l += " </div> ") : "agent" === n.from_type && (l += ' <div id="',
                            l += a(n.id),
                            l += '" class="msg-agent"> <div class="name"> ',
                            l += a(n.agent.nickname),
                            l += " ",
                        n.displayDate && (l += ' <span id="date',
                            l += a(n.id),
                            l += '" class="date">',
                            l += o(n.displayDate),
                            l += "</span> "),
                            l += " </div> ",
                            "welcome" === n.content_type ? (l += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                l += o(n.content),
                                l += "</div> </div> ") : "text" === n.content_type ? (l += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                l += o(n.content),
                                l += "</div> </div> ") : "rich_text" === n.content_type ? (l += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                                l += o(n.extra.content),
                                l += "</div> </div> ") : "photo" === n.content_type ? (l += ' <div class="photo"> <a href="',
                                l += a(n.media_url),
                                l += '" target="_blank"> ',
                                s > 1 ? (l += ' <img src="',
                                    l += a(n.media_url),
                                    l += '" /> ') : (l += ' <img src="',
                                    l += a(n.media_url),
                                    l += '" onload="window.SCROLL_TO_LAST()" /> '),
                                l += " </a> </div> ") : "file" === n.content_type && (l += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                    l += a(n.extra.filename),
                                    l += '">',
                                    l += a(n.extra.filename),
                                    l += '</span> <span class="file-size">',
                                    l += a(n.extra.convert_size),
                                    l += '</span> </div> <div class="sub"> ',
                                    n.extra.cancel ? l += ' <span class="file-state">对方取消发送</span> ' : (l += " ",
                                        n.extra.has_expired ? (l += ' <span class="file-state">',
                                            l += a(n.extra.has_expired),
                                            l += '后过期</span> <a class="btn-download" name="',
                                            l += a(n.id),
                                            l += ",",
                                            l += a(n.conversation_id),
                                            l += '" href="',
                                            l += a(n.media_url),
                                            l += '" target="_blank"> <i class="icon icon-download"></i> <span>下载</span> </a> ') : l += ' <span class="file-state">已过期</span> ',
                                        l += " "),
                                    l += " </div> </div> </div> "),
                            l += " </div> "),
                        l += " ",
                    "client" === n.from_type && (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-client"> ',
                    n.displayDate && (l += ' <div id="date',
                        l += a(n.id),
                        l += '" class="date">',
                        l += o(n.displayDate),
                        l += "</div> "),
                        l += " ",
                        "text" === n.content_type ? (l += ' <div class="bubble"> <span class="arrow"></span> <div class="text">',
                            l += o(n.content),
                            l += "</div> ",
                        "sending" === n.status && (l += ' <span id="status',
                            l += a(n.id),
                            l += '" class="status icon"></span> '),
                            l += " </div> ") : "photo" === n.content_type ? (l += ' <div class="photo"> <a href="',
                            l += a(n.media_url),
                            l += '" target="_blank"> ',
                            s > 1 ? (l += ' <img id="photo',
                                l += a(n.id),
                                l += '" src="',
                                l += a(n.media_url),
                                l += '" /> ') : (l += ' <img id="photo',
                                l += a(n.id),
                                l += '" src="',
                                l += a(n.media_url),
                                l += '" onload="window.SCROLL_TO_LAST()" /> '),
                            l += " </a> ",
                        "sending" === n.status && (l += ' <span id="status',
                            l += a(n.id),
                            l += '" class="status icon"></span> '),
                            l += " </div> ") : "file" === n.content_type && (l += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                l += a(n.extra.filename),
                                l += '">',
                                l += a(n.extra.filename),
                                l += '</span> <span class="file-size">',
                                l += a(n.extra.convert_size),
                                l += '</span> </div> <div class="sub"> ',
                                n.uploading ? (l += ' <span id="progress',
                                    l += a(n.id),
                                    l += '" class="progress-holder"> <span class="progress-bg"> <span id="progressBar',
                                    l += a(n.id),
                                    l += '" class="progress-bar"></span> </span> </span> <a id="cancelUpload',
                                    l += a(n.id),
                                    l += '" class="btn-cancel-upload"> <i class="icon icon-cancel-upload"></i> </a> <span id="fileState',
                                    l += a(n.id),
                                    l += '" class="file-state">上传中&nbsp;<span id="speed',
                                    l += a(n.id),
                                    l += '"></span></span> ') : (l += " ",
                                    n.extra.cancel ? l += ' <span class="file-state">取消上传</span> ' : (l += " ",
                                        n.extra.has_expired ? (l += ' <span class="file-state">',
                                            l += a(n.extra.has_expired),
                                            l += "后过期</span> ") : l += ' <span class="file-state">已过期</span> ',
                                        l += " "),
                                    l += " "),
                                l += " </div> </div> </div> "),
                        l += " </div> "),
                        l += " ",
                    "redirect" === n.from_type && (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-redirect"> 接下来由<span>',
                        l += a(n.toNickname),
                        l += "</span>为您服务 </div> "),
                        l += " ",
                    "evaluation" === n.from_type && (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-evaluation"> 你给出了 <span class="evaluation-level evaluation-level-',
                        l += a(n.level),
                        l += '">',
                        l += a(n.levelText),
                        l += "</span> ",
                    n.content && (l += ' <div class="evaluation-content">',
                        l += a(n.content),
                        l += "</div> "),
                        l += " </div> "),
                        l += " ",
                    "blacklist" === n.from_type && (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-blacklist">你被移出了黑名单</div> '),
                        l += " ",
                        new h(l)
                }),
                o("profile-customer", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.photoType
                        , r = e.avatar
                        , s = e.name
                        , l = i.$string
                        , c = e.content
                        , p = "";
                    return p += '<div class="profile-contact" style="background-color: #',
                        p += n(a),
                        p += '"> ',
                    "big" === o && (p += ' <img class="profile-avatar" src="',
                        p += n(r),
                        p += '" alt="avatar"> <div class="profile-name">',
                        p += n(s),
                        p += "</div> "),
                        p += " ",
                        p += l(c),
                        p += " </div> ",
                        new h(p)
                }),
                o("profile", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.avatar
                        , o = e.name
                        , r = e.tel
                        , s = e.cellphone
                        , l = e.email
                        , c = e.qq
                        , p = e.weixin
                        , d = "";
                    return d += '<img class="profile-avatar" src="',
                        d += n(a),
                        d += '" alt="avatar"> <div class="profile-name">',
                        d += n(o),
                        d += '</div> <div class="profile-contact"> ',
                    r && (d += ' <a> <i class="icon icon-tel"></i> <span>',
                        d += n(r),
                        d += "</span> </a> "),
                        d += " ",
                    s && (d += ' <a> <i class="icon icon-cellphone"></i> <span>',
                        d += n(s),
                        d += "</span> </a> "),
                        d += " ",
                    l && (d += ' <a> <i class="icon icon-email"></i> <span>',
                        d += n(l),
                        d += "</span> </a> "),
                        d += " ",
                    c && (d += ' <a> <i class="icon icon-qq"></i> <span>',
                        d += n(c),
                        d += "</span> </a> "),
                        d += " ",
                    p && (d += ' <a> <i class="icon icon-weixin"></i> <span>',
                        d += n(p),
                        d += "</span> </a> "),
                        d += " </div>",
                        new h(d)
                }),
                o("queueing", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = e.position
                        , r = "";
                    return r += '<div class="queue-header">',
                        r += n(a),
                        r += '</div> <div class="queue-body"> <div class="queue-position-title">当前等待人数</div> <span id="queueingPosition">',
                        r += n(o),
                        r += '</span> </div> <div class="queue-footer"> <p>如果等不及，可以选择</p> <a class="btn-go-ticket">给我们留言</a> </div>',
                        new h(r)
                }),
                o("support", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.disableBrandLink)
                        , a = i.$escape
                        , o = e.entId
                        , r = "";
                    return r += "<a ",
                    n !== !0 && (r += 'href="http://static.meiqia.com/dist/standalone.html?eid=89239&utm_source=widget-badge&utm_term=',
                        r += a(o),
                        r += '"'),
                        r += ' target="_blank"> <i class="icon icon-logo-gray"></i> <span>客服软件由美洽提供</span> </a>',
                        new h(r)
                }),
                o("survey", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.menus)
                        , a = i.$escape
                        , o = i.$each
                        , r = (e.v,
                        e.k,
                        e.inputs)
                        , s = e.val
                        , l = (e.key,
                        e.captcha)
                        , c = "";
                    return "open" === n.status && (c += ' <div id="surveyStep1" class="active"> <div class="step-title">',
                        c += a(n.title),
                        c += "</div> ",
                        o(n.assignments, function(e, t) {
                            c += ' <div class="menus-item"> <a id="',
                                c += a(e.target_kind),
                                c += "_",
                                c += a(e.target),
                                c += '" name="surveyMenus" title="',
                                c += a(e.description),
                                c += '">',
                                c += a(t + 1),
                                c += ". ",
                                c += a(e.description),
                                c += "</a> </div> "
                        }),
                        c += " </div> "),
                        c += " ",
                    "open" === r.status && (c += ' <div id="surveyStep2" ',
                    "close" === n.status && (c += 'class="active"'),
                        c += '> <div class="step-title">',
                        c += a(r.title),
                        c += "</div> ",
                        o(r.fields, function(e, t) {
                            c += " ",
                            e.ignore || (c += ' <div class="form-group"> <div class="group-title">',
                                c += a(e.display_name),
                            e.optional || (c += "<span>*</span>"),
                                c += '</div> <div class="group-content"> ',
                                "text" === e.type ? (c += ' <input name="',
                                    c += a(e.field_name),
                                    c += '" ',
                                    c += e.optional ? 'class="survey-input-text"' : 'class="survey-input-text required"',
                                    c += ' type="text" value="',
                                    c += a(s),
                                    c += '" placeholder="请输入" /> ') : "single_choice" === e.type ? (c += " ",
                                    o(e.choices, function(t, i) {
                                        c += ' <div class="choice-item"> <label> <input name="',
                                            c += a(e.field_name),
                                            c += '" ',
                                        e.optional || (c += 'class="required"'),
                                            c += ' type="radio" value="',
                                            c += a(t),
                                            c += '" /> <span>',
                                            c += a(t),
                                            c += "</span> </label> </div> "
                                    }),
                                    c += " ") : "multiple_choice" === e.type && (c += " ",
                                        o(e.choices, function(t, i) {
                                            c += ' <div class="choice-item"> <label> <input name="',
                                                c += a(e.field_name),
                                                c += '" ',
                                            e.optional || (c += 'class="required"'),
                                                c += ' type="checkbox" value="',
                                                c += a(t),
                                                c += '" /> <span>',
                                                c += a(t),
                                                c += "</span> </label> </div> "
                                        }),
                                        c += " "),
                                c += " </div> </div> "),
                                c += " "
                        }),
                        c += " ",
                    l && (c += ' <div class="captcha-group"> <div class="group-title">验证码<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="surveyCaptcha" class="required" type="text" /> </div> <div class="captcha-img"> <img id="surveyCaptchaImg" src="" /> </div> </div> </div> '),
                        c += ' <div class="btn-group"> <a id="surveySubmit">提交</a> </div> </div> '),
                        new h(c)
                }),
                o("ticket-basic", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.intro)
                        , a = i.$escape
                        , o = e.categories
                        , r = i.$each
                        , s = (e.val,
                        e.key,
                        i.$string)
                        , l = e.name
                        , c = e.contactRule
                        , p = e.tel
                        , d = e.email
                        , u = e.wechat
                        , f = e.qq
                        , v = e.defaultTemplate
                        , g = e.defaultTemplateContent
                        , m = e.captcha
                        , b = "";
                    return b += '<div id="ticketV2" class="active"> ',
                    n && (b += ' <div class="step-title">',
                        b += a(n),
                        b += "</div> "),
                        b += " ",
                    o && o.length > 0 && (b += ' <div class="form-group"> <div class="group-title">分类<span>*</span></div> <div class="group-content"> ',
                        r(o, function(e, t) {
                            b += ' <div class="choice-item"> <label> <input name="categories" type="radio" value="',
                                b += s(e.id),
                                b += '" /> <span>',
                                b += s(e.name),
                                b += "</span> </label> </div> "
                        }),
                        b += " </div> </div> "),
                        b += " ",
                    "open" === l && (b += ' <div class="form-group"> <div class="group-title"> 姓名 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketName" type="text"> </div> </div> '),
                        b += " ",
                    "open" === p && (b += ' <div class="form-group"> <div class="group-title"> 手机 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketTel" type="text"> </div> </div> '),
                        b += " ",
                    "open" === d && (b += ' <div class="form-group"> <div class="group-title"> 邮箱 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketEmail" type="text"> </div> </div> '),
                        b += " ",
                    "open" === u && (b += ' <div class="form-group"> <div class="group-title"> 微信 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketWechat" type="text"> </div> </div> '),
                        b += " ",
                    "open" === f && (b += ' <div class="form-group"> <div class="group-title"> QQ ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketQq" type="text"> </div> </div> '),
                        b += ' <div class="form-group"> <div class="group-title">留言内容<span>*</span></div> <div class="group-content"> ',
                        "open" === v ? (b += ' <textarea id="ticketContent">',
                            b += a(g),
                            b += "</textarea> ") : b += ' <textarea id="ticketContent"></textarea> ',
                        b += " </div> </div> ",
                    "open" === m && (b += ' <div class="captcha-group"> <div class="group-title">验证码<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="ticketCaptcha" class="required" type="text"/> </div> <div class="captcha-img"> <img id="ticketCaptchaImg" src="" /> </div> </div> </div> '),
                        b += ' <div class="btn-group"> <a id="ticketSubmit">提交</a> </div> </div> ',
                        new h(b)
                }),
                o("ticket", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.intro)
                        , a = i.$escape
                        , o = e.categories
                        , r = i.$each
                        , s = (e.val,
                        e.key,
                        i.$string)
                        , l = e.name
                        , c = e.contactRule
                        , p = e.tel
                        , d = e.email
                        , u = e.wechat
                        , f = e.qq
                        , v = e.defaultTemplate
                        , g = e.defaultTemplateContent
                        , m = e.captcha
                        , b = "";
                    return b += '<div id="ticketV2" class="active"> ',
                    n && (b += ' <div class="step-title">',
                        b += a(n),
                        b += "</div> "),
                        b += " ",
                    o && o.length > 0 && (b += ' <div class="form-group"> <div class="group-title">分类<span>*</span></div> <div class="group-content"> ',
                        r(o, function(e, t) {
                            b += ' <div class="choice-item"> <label> <input name="categories" type="radio" value="',
                                b += s(e.id),
                                b += '" /> <span>',
                                b += s(e.name),
                                b += "</span> </label> </div> "
                        }),
                        b += " </div> </div> "),
                        b += " ",
                    "open" === l && (b += ' <div class="form-group"> <div class="group-title"> 姓名 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketName" type="text" placeholder=" 请输入姓名"> </div> </div> '),
                        b += " ",
                    "open" === p && (b += ' <div class="form-group"> <div class="group-title"> 手机 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketTel" type="text" placeholder=" 请输入手机号"> </div> </div> '),
                        b += " ",
                    "open" === d && (b += ' <div class="form-group"> <div class="group-title"> 邮箱 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketEmail" type="text" placeholder=" 请输入邮箱"> </div> </div> '),
                        b += " ",
                    "open" === u && (b += ' <div class="form-group"> <div class="group-title"> 微信 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketWechat" type="text" placeholder=" 请输入微信号"> </div> </div> '),
                        b += " ",
                    "open" === f && (b += ' <div class="form-group"> <div class="group-title"> QQ ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketQq" type="text" placeholder=" 请输入QQ号"> </div> </div> '),
                        b += ' <div class="form-group"> <div class="group-title">留言内容<span>*</span></div> <div class="group-content"> ',
                        "open" === v ? (b += ' <textarea id="ticketContent" placeholder="请输入留言内容">',
                            b += a(g),
                            b += "</textarea> ") : b += ' <textarea id="ticketContent" placeholder="请输入留言内容"></textarea> ',
                        b += " </div> </div> ",
                    "open" === m && (b += ' <div class="captcha-group"> <div class="group-title">验证码<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="ticketCaptcha" class="required" type="text" placeholder=" 请输入右侧验证码"/> </div> <div class="captcha-img"> <img id="ticketCaptchaImg" src="" /> </div> </div> </div> '),
                        b += ' <div class="btn-group"> <a id="ticketSubmit">提交</a> </div> </div> ',
                        new h(b)
                }),
                o("unable-service", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.src
                        , o = "";
                    return o += '<img src="',
                        o += n(a),
                        o += '"> <div>客服繁忙或已离线，给我们留言吧</div> <a class="btn-go-ticket">给我们留言</a>',
                        new h(o)
                }),
                o("icon-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = "";
                    return r += ".icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-desktop.png?v=",
                        r += n(o),
                        r += "'); background-size: 44px auto; background-repeat: no-repeat; } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji.png?v=",
                        r += n(o),
                        r += "'); background-size: 25px auto; background-repeat: no-repeat; } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { .icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-desktop@2x.png?v=",
                        r += n(o),
                        r += "'); } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji@2x.png?v=",
                        r += n(o),
                        r += "'); } } ",
                        new h(r)
                }),
                o("theme-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.textColor
                        , r = e.subTextColor
                        , s = e.color2
                        , l = "";
                    return l += "#pageChat .header, #pageTicket .header, #pageCall .header, #pageSurvey .header { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #agentInputting { background-color: ",
                        l += n(a),
                        l += "; } #pageChat .agent-signature { color: ",
                        l += n(r),
                        l += " } #pageChat .msg-client .bubble { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .bubble a { color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .arrow { border-left: 6px solid ",
                        l += n(a),
                        l += "; } #pageChat .footer .feature-holder #btnSend.active { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #unableService .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #evaluationSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #queueingTips .queue-position-title { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips #queueingPosition { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += '; } #pageSurvey .body .menus-item > a, #pageChat .body-left .msg-bot .bubble .menu-item, #pageChat .body-left .msg-bot .rating a, #pageChat .body-left .msg-bot div.rich-text-bubble a, #pageChat .body-left .msg-agent div.rich-text-bubble a, #pageChat .body-left .msg-common-tips a, #autocomplete li em, #autocomplete li a[data-current="true"] { /*color: ',
                        l += n(a),
                        l += ";*/ color: #6088e6; } #autocomplete li a:hover { background-color: ",
                        l += n(a),
                        l += "; } ",
                        l += "white" === s ? " .icon-angel-down, .icon-ring-open, .icon-ring-close { opacity: .6; filter: alpha(opacity=60); } .icon-angel-down:hover, .icon-ring-open:hover, .icon-ring-close:hover { opacity: .8; filter: alpha(opacity=80); } .icon-angel-down { background-position: -22px -66px; } .icon-ring-open { background-position: -22px -89px; } .icon-ring-close { background-position: -22px -111px; } " : " .icon-angel-down, .icon-ring-open, .icon-ring-close { opacity: .3; filter: alpha(opacity=30); } .icon-angel-down:hover, .icon-ring-open:hover, .icon-ring-close:hover { opacity: .5; filter: alpha(opacity=50); } .icon-angel-down { background-position: 0 -66px; } .icon-ring-open { background-position: 0 -89px; } .icon-ring-close { background-position: 0 -111px; } ",
                        l += " #pageTicket #ticketSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageTicket #ticketDone { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageCall .input-active { border-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-active { background-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-intro { color: ",
                        l += n(a),
                        l += "; } #pageCall .call-success-icon { background-color: ",
                        l += n(a),
                        l += "; } #pageSurvey .menus-item >a { color: ",
                        l += n(a),
                        l += "; } #pageSurvey #surveySubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } ",
                        new h(l)
                })
        }()
    }
    , function(e, t, i) {
        var n, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function() {
            function o(e, t) {
                return (/string|function/.test("undefined" == typeof t ? "undefined" : a(t)) ? u : d)(e, t)
            }
            function r(e, t) {
                return "string" != typeof e && (t = "undefined" == typeof e ? "undefined" : a(e),
                    "number" === t ? e += "" : e = "function" === t ? r(e.call(e)) : ""),
                    e
            }
            function s(e) {
                return g[e]
            }
            function l(e) {
                return r(e).replace(/&(?![\w#]+;)|[<>"']/g, s)
            }
            function c(e, t) {
                if (m(e))
                    for (var i = 0, n = e.length; i < n; i++)
                        t.call(e, e[i], i, e);
                else
                    for (i in e)
                        t.call(e, e[i], i)
            }
            function p(e, t) {
                var i = /(\/)[^\/]+\1\.\.\1/
                    , n = ("./" + e).replace(/[^\/]+$/, "")
                    , a = n + t;
                for (a = a.replace(/\/\.\//g, "/"); a.match(i); )
                    a = a.replace(i, "/");
                return a
            }
            function d(e, t) {
                var i = o.get(e) || f({
                        filename: e,
                        name: "Render Error",
                        message: "Template not found"
                    });
                return t ? i(t) : i
            }
            function u(e, t) {
                if ("string" == typeof t) {
                    var i = t;
                    t = function() {
                        return new h(i)
                    }
                }
                var n = v[e] = function(i) {
                        try {
                            return new t(i,e) + ""
                        } catch (n) {
                            return f(n)()
                        }
                    }
                ;
                return n.prototype = t.prototype = b,
                    n.toString = function() {
                        return t + ""
                    }
                    ,
                    n
            }
            function f(e) {
                var t = "{Template Error}"
                    , i = e.stack || "";
                if (i)
                    i = i.split("\n").slice(0, 2).join("\n");
                else
                    for (var n in e)
                        i += "<" + n + ">\n" + e[n] + "\n\n";
                return function() {
                    return "object" === ("undefined" == typeof console ? "undefined" : a(console)) && console.error(t + "\n\n" + i),
                        t
                }
            }
            var v = o.cache = {}
                , h = this.String
                , g = {
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "&": "&#38;"
            }
                , m = Array.isArray || function(e) {
                    return "[object Array]" === {}.toString.call(e)
                }
                , b = o.utils = {
                $helpers: {},
                $include: function(e, t, i) {
                    return e = p(i, e),
                        d(e, t)
                },
                $string: r,
                $escape: l,
                $each: c
            }
                , I = o.helpers = b.$helpers;
            o.get = function(e) {
                return v[e.replace(/^\.\//, "")]
            }
                ,
                o.helper = function(e, t) {
                    I[e] = t
                }
                ,
                n = function() {
                    return o
                }
                    .call(t, i, t, e),
                !(void 0 !== n && (e.exports = n)),
                o("audio", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = "";
                    return o += '<audio id="newChat" preload="preload"> <source src="',
                        o += n(a),
                        o += '/audio/new-chat.ogg" type="audio/ogg" /> <source src="',
                        o += n(a),
                        o += '/audio/new-chat.mp3" type="audio/mpeg" /> </audio> <audio id="newMessage" preload="preload"> <source src="',
                        o += n(a),
                        o += '/audio/new-message.ogg" type="audio/ogg" /> <source src="',
                        o += n(a),
                        o += '/audio/new-message.mp3" type="audio/mpeg" /> </audio> <audio id="sentMessage" preload="preload"> <source src="',
                        o += n(a),
                        o += '/audio/sent-message.ogg" type="audio/ogg" /> <source src="',
                        o += n(a),
                        o += '/audio/sent-message.mp3" type="audio/mpeg" /> </audio>',
                        new h(o)
                }),
                o("chat-has-end", 'Conversation has ended<a class="btn-restart-chat">conversation</a>or<a class="btn-go-ticket">message</a>'),
                o("emoji", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.list
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = "";
                    return n(a, function(e, t) {
                        r += ' <i class="emoji-control emoji-',
                            r += o(e),
                            r += '" onclick="window.CHOSE_EMOJI(\':',
                            r += o(e),
                            r += ":')\"></i> "
                    }),
                        r += ' <div class="clearfix"></div>',
                        new h(r)
                }),
                o("evaluation-basic", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = "";
                    return o += '<div class="evaluation-header"> <a id="evaluationHide"> <i class="icon icon-times"></i> </a> <div class="intro">',
                        o += n(a),
                        o += '</div> </div> <div class="evaluation-body"> <div class="evaluation-btn-group"> <input id="evaluationLevel" type="hidden" /> <div id="evaluation2" class="evaluation-btn"> <i class="icon icon-smile"></i> <span>Very satisfied</span> </div> <div id="evaluation1" class="evaluation-btn"> <i class="icon icon-neutral"></i> <span>Normal</span> </div> <div id="evaluation0" class="evaluation-btn"> <i class="icon icon-angry"></i> <span>Dissatisfied</span> </div> </div> <div class="evaluation-reason"> <label for="evaluationContent">Please fill in the evaluation(selectivity)</label> <textarea id="evaluationContent"></textarea> <button id="evaluationSubmit">Submit</button> </div> </div> ',
                        new h(o)
                }),
                o("evaluation", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = "";
                    return o += '<div class="evaluation-header"> <a id="evaluationHide"> <i class="icon icon-times"></i> </a> <div class="intro">',
                        o += n(a),
                        o += '</div> </div> <div class="evaluation-body"> <div class="evaluation-btn-group"> <input id="evaluationLevel" type="hidden" /> <div id="evaluation2" class="evaluation-btn"> <i class="icon icon-smile"></i> <span>satisfied</span> </div> <div id="evaluation1" class="evaluation-btn"> <i class="icon icon-neutral"></i> <span>Normal</span> </div> <div id="evaluation0" class="evaluation-btn"> <i class="icon icon-angry"></i> <span>Dissatisfied</span> </div> </div> <div class="evaluation-reason"> <textarea id="evaluationContent" placeholder="Please fill in the evaluation(selectivity)"></textarea> <button id="evaluationSubmit">Submit</button> </div> </div> ',
                        new h(o)
                }),
                o("features", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.emoji)
                        , a = e.photo
                        , o = e.upload
                        , r = e.evaluation
                        , s = "";
                    return n && (s += ' <a id="emojiBtn" class="feature-btn" title="Emoji"> <i class="icon icon-emoji"></i> </a> '),
                        s += " ",
                    a && (s += ' <label id="photoBtn" class="feature-btn" title="Picture"> <i class="icon icon-photo"></i> <input id="photoFile" type="file" accept="image/gif, image/jpeg, image/jpg, image/png"> </label> '),
                        s += " ",
                    o && (s += ' <label id="uploadBtn" class="feature-btn" title="File"> <i class="icon icon-upload"></i> <input id="uploadFile" type="file"> </label> '),
                        s += " ",
                    r && (s += ' <a id="evaluationBtn" class="feature-btn" title="Service evaluation"> <i class="icon icon-evaluation"></i> </a> '),
                        new h(s)
                }),
                o("header-customer", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.photoType)
                        , a = i.$escape
                        , o = e.avatar
                        , r = e.signature
                        , s = e.name
                        , l = "";
                    return "small" === n && (l += ' <img class="agent-avatar" src="',
                        l += a(o),
                        l += '" alt="avatar"> '),
                        l += " ",
                        l += "small" === n ? ' <div class="agent-info" style="margin-left: 54px"> ' : ' <div class="agent-info"> ',
                        l += ' <div class="agent-name ',
                    r || (l += "without-signature"),
                        l += '"> ',
                        l += a(s),
                        l += ' <span id="agentInputting">The other party enters the message...</span> </div> <div class="agent-signature" title="',
                        l += a(r),
                        l += '">',
                        l += a(r),
                        l += "</div> </div> ",
                        new h(l)
                }),
                o("header-fusion", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.signature)
                        , a = i.$escape
                        , o = e.name
                        , r = "";
                    return r += '<div class="agent-info"> <div class="agent-name ',
                    n || (r += "without-signature"),
                        r += '"> ',
                        r += a(o),
                        r += ' <span id="agentInputting">The other party enters the message...</span> </div> <div class="agent-signature" title="',
                        r += a(n),
                        r += '">',
                        r += a(n),
                        r += "</div> </div>",
                        new h(r)
                }),
                o("header-loading", '<div id="loading"> connecting<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span> </div>'),
                o("header-mondeo", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.signature)
                        , a = i.$escape
                        , o = e.name
                        , r = "";
                    return r += '<div class="agent-info"> <div class="agent-name ',
                    n || (r += "without-signature"),
                        r += '"> ',
                        r += a(o),
                        r += ' <span id="agentInputting">The other party enters the message...</span> </div> <div class="agent-signature" title="',
                        r += a(n),
                        r += '">',
                        r += a(n),
                        r += "</div> </div>",
                        new h(r)
                }),
                o("header", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.avatar
                        , o = e.signature
                        , r = e.name
                        , s = "";
                    return s += '<img class="agent-avatar" src="',
                        s += n(a),
                        s += '" alt="avatar"> <div class="agent-info"> <div class="agent-name ',
                    o || (s += "without-signature"),
                        s += '"> ',
                        s += n(r),
                        s += ' <span id="agentInputting">The other party enters the message...</span> </div> <div class="agent-signature" title="',
                        s += n(o),
                        s += '">',
                        s += n(o),
                        s += "</div> </div>",
                        new h(s)
                }),
                o("msg-new", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.info
                        , o = i.$each
                        , r = e.content
                        , s = (e.msg,
                        e.k,
                        i.$string)
                        , l = (e.item,
                        e.mk,
                        "");
                    return l += '<div id="',
                        l += n(a.id),
                        l += '" class="msg-bot"> <div class="name"> ',
                        l += n(a.agent.nickname),
                        l += " ",
                    a.displayDate && (l += ' <span id="date',
                        l += n(a.id),
                        l += '" class="date">',
                        l += n(a.displayDate),
                        l += "</span> "),
                        l += ' </div> <div class="bubble"> ',
                        o(r, function(e, t) {
                            l += " ",
                            "text" === e.type && (l += ' <div class="text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "txt" === e.type && (l += ' <div class="text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "rich_text" === e.type && (l += ' <div class="text rich_text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "choices" === e.type && (l += ' <div class="menu"> ',
                            e.body.choices && e.body.choices.length && (l += " <ol> ",
                                o(e.body.choices, function(e, t) {
                                    l += ' <li> <span class="menu-item" data-value="',
                                        l += s(e),
                                        l += '">',
                                        l += s(e),
                                        l += "</span> </li> "
                                }),
                                l += ' </ol> <div class="menu-tips">Select the question or reply the question to get solve your problem.</div> '),
                                l += " </div> "),
                                l += " "
                        }),
                        l += " </div> </div>",
                        new h(l)
                }),
                o("msg", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.v)
                        , a = i.$escape
                        , o = i.$string
                        , r = i.$each
                        , s = (e.rv,
                        e.rk,
                        e.mv,
                        e.mk,
                        e.historyTimes)
                        , l = "";
                    return "bot" === n.from_type ? (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-bot"> <div class="name"> ',
                        l += a(n.agent.nickname),
                        l += " ",
                    n.displayDate && (l += ' <span id="date',
                        l += a(n.id),
                        l += '" class="date">',
                        l += o(n.displayDate),
                        l += "</span> "),
                        l += " </div> ",
                        "welcome" === n.content_type ? (l += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text"> ',
                            l += o(n.content),
                            l += " </div> </div> ") : "text" === n.content_type || "bot" === n.content_type ? (l += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> ',
                            n.content_robot && n.content_robot.length ? (l += " ",
                                r(n.content_robot, function(e, t) {
                                    l += " ",
                                        "text" === e.type ? (l += " ",
                                            e.rich_text ? (l += ' <div class="text rich_text">',
                                                l += o(e.rich_text),
                                                l += "</div> ") : (l += ' <div class="text">',
                                                l += o(e.text),
                                                l += "</div> "),
                                            l += " ") : "menu" !== e.type && "related" !== e.type || (l += " ",
                                            e.text_before && (l += ' <div class="menu-tips">',
                                                l += a(e.text_before),
                                                l += "</div> "),
                                                l += ' <div class="menu"> ',
                                            e.items && e.items.length && (l += " <ol>",
                                                r(e.items, function(e, t) {
                                                    l += " <li> ",
                                                        e.link ? (l += ' <a class="menu-item" data-value="',
                                                            l += o(e.value),
                                                            l += '" href="',
                                                            l += o(e.link),
                                                            l += '" target="_blank">',
                                                            l += o(e.text),
                                                            l += "</a> ") : (l += ' <span class="menu-item" data-value="',
                                                            l += o(e.value),
                                                            l += '">',
                                                            l += o(e.text),
                                                            l += "</span> "),
                                                        l += " </li> "
                                                }),
                                                l += '</ol> <div class="menu-tips">Select the question or reply the number to get solve your problem.</div> '),
                                                l += " </div> "),
                                        l += " "
                                }),
                                l += " ") : n.content && (l += ' <div class="text">',
                                    l += o(n.content),
                                    l += "</div> "),
                            l += " ",
                        "evaluate" === n.sub_type && (l += ' <div class="rating" data-question-id="',
                            l += o(n.question_id),
                            l += '"> <a href="javascript:;;" class="option" data-option="useful">Solve</a> <a href="javascript:;;" class="option" data-option="useless">Unsolve</a> <span class="rated-text">Feedback</span> <span class="pending-text">Submit</span> <span class="split"></span> </div> '),
                            l += " </div> ") : "rich_text" === n.content_type ? (l += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                            l += o(n.extra.content),
                            l += "</div> ",
                        "evaluate" === n.sub_type && (l += ' <div class="rating" data-question-id="',
                            l += o(n.question_id),
                            l += '"> <a href="javascript:;;" class="option" data-option="useful">Solve</a> <a href="javascript:;;" class="option" data-option="useless">Unsolve</a> <span class="rated-text">Feedback</span> <span class="pending-text">Submit</span> <span class="split"></span> </div> '),
                            l += " </div> ") : "photo" === n.content_type && (l += ' <div class="photo"> <a href="',
                                l += a(n.media_url),
                                l += '" target="_blank"> ',
                                s > 1 ? (l += ' <img src="',
                                    l += a(n.media_url),
                                    l += '" /> ') : (l += ' <img src="',
                                    l += a(n.media_url),
                                    l += '" onload="window.SCROLL_TO_LAST()" /> '),
                                l += " </a> </div> "),
                        l += " </div> ") : "agent" === n.from_type && (l += ' <div id="',
                            l += a(n.id),
                            l += '" class="msg-agent"> <div class="name"> ',
                            l += a(n.agent.nickname),
                            l += " ",
                        n.displayDate && (l += ' <span id="date',
                            l += a(n.id),
                            l += '" class="date">',
                            l += o(n.displayDate),
                            l += "</span> "),
                            l += " </div> ",
                            "welcome" === n.content_type ? (l += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                l += o(n.content),
                                l += "</div> </div> ") : "text" === n.content_type ? (l += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                l += o(n.content),
                                l += "</div> </div> ") : "rich_text" === n.content_type ? (l += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                                l += o(n.extra.content),
                                l += "</div> </div> ") : "photo" === n.content_type ? (l += ' <div class="photo"> <a href="',
                                l += a(n.media_url),
                                l += '" target="_blank"> ',
                                s > 1 ? (l += ' <img src="',
                                    l += a(n.media_url),
                                    l += '" /> ') : (l += ' <img src="',
                                    l += a(n.media_url),
                                    l += '" onload="window.SCROLL_TO_LAST()" /> '),
                                l += " </a> </div> ") : "file" === n.content_type && (l += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                    l += a(n.extra.filename),
                                    l += '">',
                                    l += a(n.extra.filename),
                                    l += '</span> <span class="file-size">',
                                    l += a(n.extra.convert_size),
                                    l += '</span> </div> <div class="sub"> ',
                                    n.extra.cancel ? l += ' <span class="file-state">The other party cancels sending</span> ' : (l += " ",
                                        n.extra.has_expired ? (l += ' <span class="file-state">Expires after',
                                            l += a(n.extra.has_expired),
                                            l += '</span> <a class="btn-download" name="',
                                            l += a(n.id),
                                            l += ",",
                                            l += a(n.conversation_id),
                                            l += '" href="',
                                            l += a(n.media_url),
                                            l += '" target="_blank"> <i class="icon icon-download"></i> <span>download</span> </a> ') : l += ' <span class="file-state">expired</span> ',
                                        l += " "),
                                    l += " </div> </div> </div> "),
                            l += " </div> "),
                        l += " ",
                    "client" === n.from_type && (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-client"> ',
                    n.displayDate && (l += ' <div id="date',
                        l += a(n.id),
                        l += '" class="date">',
                        l += o(n.displayDate),
                        l += "</div> "),
                        l += " ",
                        "text" === n.content_type ? (l += ' <div class="bubble"> <span class="arrow"></span> <div class="text">',
                            l += o(n.content),
                            l += "</div> ",
                        "sending" === n.status && (l += ' <span id="status',
                            l += a(n.id),
                            l += '" class="status icon"></span> '),
                            l += " </div> ") : "photo" === n.content_type ? (l += ' <div class="photo"> <a href="',
                            l += a(n.media_url),
                            l += '" target="_blank"> ',
                            s > 1 ? (l += ' <img id="photo',
                                l += a(n.id),
                                l += '" src="',
                                l += a(n.media_url),
                                l += '" /> ') : (l += ' <img id="photo',
                                l += a(n.id),
                                l += '" src="',
                                l += a(n.media_url),
                                l += '" onload="window.SCROLL_TO_LAST()" /> '),
                            l += " </a> ",
                        "sending" === n.status && (l += ' <span id="status',
                            l += a(n.id),
                            l += '" class="status icon"></span> '),
                            l += " </div> ") : "file" === n.content_type && (l += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                l += a(n.extra.filename),
                                l += '">',
                                l += a(n.extra.filename),
                                l += '</span> <span class="file-size">',
                                l += a(n.extra.convert_size),
                                l += '</span> </div> <div class="sub"> ',
                                n.uploading ? (l += ' <span id="progress',
                                    l += a(n.id),
                                    l += '" class="progress-holder"> <span class="progress-bg"> <span id="progressBar',
                                    l += a(n.id),
                                    l += '" class="progress-bar"></span> </span> </span> <a id="cancelUpload',
                                    l += a(n.id),
                                    l += '" class="btn-cancel-upload"> <i class="icon icon-cancel-upload"></i> </a> <span id="fileState',
                                    l += a(n.id),
                                    l += '" class="file-state">uploading&nbsp;<span id="speed',
                                    l += a(n.id),
                                    l += '"></span></span> ') : (l += " ",
                                    n.extra.cancel ? l += ' <span class="file-state">Cancel upload</span> ' : (l += " ",
                                        n.extra.has_expired ? (l += ' <span class="file-state">Expires after',
                                            l += a(n.extra.has_expired),
                                            l += "</span> ") : l += ' <span class="file-state">expired</span> ',
                                        l += " "),
                                    l += " "),
                                l += " </div> </div> </div> "),
                        l += " </div> "),
                        l += " ",
                    "redirect" === n.from_type && (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-redirect"> Next by the<span>',
                        l += a(n.toNickname),
                        l += "</span>to serve you </div> "),
                        l += " ",
                    "evaluation" === n.from_type && (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-evaluation"> You are given <span class="evaluation-level evaluation-level-',
                        l += a(n.level),
                        l += '">',
                        l += a(n.levelText),
                        l += "</span> ",
                    n.content && (l += ' <div class="evaluation-content">',
                        l += a(n.content),
                        l += "</div> "),
                        l += " </div> "),
                        l += " ",
                    "blacklist" === n.from_type && (l += ' <div id="',
                        l += a(n.id),
                        l += '" class="msg-blacklist">You are removed from the blacklist</div> '),
                        l += " ",
                        new h(l)
                }),
                o("profile-customer", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.photoType
                        , r = e.avatar
                        , s = e.name
                        , l = i.$string
                        , c = e.content
                        , p = "";
                    return p += '<div class="profile-contact" style="background-color: #',
                        p += n(a),
                        p += '"> ',
                    "big" === o && (p += ' <img class="profile-avatar" src="',
                        p += n(r),
                        p += '" alt="avatar"> <div class="profile-name">',
                        p += n(s),
                        p += "</div> "),
                        p += " ",
                        p += l(c),
                        p += " </div> ",
                        new h(p)
                }),
                o("profile", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.avatar
                        , o = e.name
                        , r = e.tel
                        , s = e.cellphone
                        , l = e.email
                        , c = e.qq
                        , p = e.weixin
                        , d = "";
                    return d += '<img class="profile-avatar" src="',
                        d += n(a),
                        d += '" alt="avatar"> <div class="profile-name">',
                        d += n(o),
                        d += '</div> <div class="profile-contact"> ',
                    r && (d += ' <a> <i class="icon icon-tel"></i> <span>',
                        d += n(r),
                        d += "</span> </a> "),
                        d += " ",
                    s && (d += ' <a> <i class="icon icon-cellphone"></i> <span>',
                        d += n(s),
                        d += "</span> </a> "),
                        d += " ",
                    l && (d += ' <a> <i class="icon icon-email"></i> <span>',
                        d += n(l),
                        d += "</span> </a> "),
                        d += " ",
                    c && (d += ' <a> <i class="icon icon-qq"></i> <span>',
                        d += n(c),
                        d += "</span> </a> "),
                        d += " ",
                    p && (d += ' <a> <i class="icon icon-weixin"></i> <span>',
                        d += n(p),
                        d += "</span> </a> "),
                        d += " </div>",
                        new h(d)
                }),
                o("queueing", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = e.position
                        , r = "";
                    return r += '<div class="queue-header">',
                        r += n(a),
                        r += '</div> <div class="queue-body"> <div class="queue-position-title">Number of visitors waiting</div> <span id="queueingPosition">',
                        r += n(o),
                        r += '</span> </div> <div class="queue-footer"> <p>Don’t want to wait? Leave us a message.</p> <a class="btn-go-ticket">Leave us a message</a> </div>',
                        new h(r)
                }),
                o("support", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.disableBrandLink)
                        , a = i.$escape
                        , o = e.entId
                        , r = "";
                    return r += "<a ",
                    n !== !0 && (r += 'href="http://static.meiqia.com/dist/standalone.html?eid=89239&utm_source=widget-badge&utm_term=',
                        r += a(o),
                        r += '"'),
                        r += ' target="_blank"> <i class="icon icon-logo-gray"></i> <span>Customer service software provided by the Meiqia</span> </a>',
                        new h(r)
                }),
                o("survey", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.menus)
                        , a = i.$escape
                        , o = i.$each
                        , r = (e.v,
                        e.k,
                        e.inputs)
                        , s = e.val
                        , l = (e.key,
                        e.captcha)
                        , c = "";
                    return "open" === n.status && (c += ' <div id="surveyStep1" class="active"> <div class="step-title">',
                        c += a(n.title),
                        c += "</div> ",
                        o(n.assignments, function(e, t) {
                            c += ' <div class="menus-item"> <a id="',
                                c += a(e.target_kind),
                                c += "_",
                                c += a(e.target),
                                c += '" name="surveyMenus" title="',
                                c += a(e.description),
                                c += '">',
                                c += a(t + 1),
                                c += ". ",
                                c += a(e.description),
                                c += "</a> </div> "
                        }),
                        c += " </div> "),
                        c += " ",
                    "open" === r.status && (c += ' <div id="surveyStep2" ',
                    "close" === n.status && (c += 'class="active"'),
                        c += '> <div class="step-title">',
                        c += a(r.title),
                        c += "</div> ",
                        o(r.fields, function(e, t) {
                            c += " ",
                            e.ignore || (c += ' <div class="form-group"> <div class="group-title">',
                                c += a(e.field_name),
                            e.optional || (c += "<span>*</span>"),
                                c += '</div> <div class="group-content"> ',
                                "text" === e.type ? (c += ' <input name="',
                                    c += a(e.field_name),
                                    c += '" ',
                                    c += e.optional ? 'class="survey-input-text"' : 'class="survey-input-text required"',
                                    c += ' type="text" value="',
                                    c += a(s),
                                    c += '" placeholder="Please enter" /> ') : "single_choice" === e.type ? (c += " ",
                                    o(e.choices, function(t, i) {
                                        c += ' <div class="choice-item"> <label> <input name="',
                                            c += a(e.field_name),
                                            c += '" ',
                                        e.optional || (c += 'class="required"'),
                                            c += ' type="radio" value="',
                                            c += a(t),
                                            c += '" /> <span>',
                                            c += a(t),
                                            c += "</span> </label> </div> "
                                    }),
                                    c += " ") : "multiple_choice" === e.type && (c += " ",
                                        o(e.choices, function(t, i) {
                                            c += ' <div class="choice-item"> <label> <input name="',
                                                c += a(e.field_name),
                                                c += '" ',
                                            e.optional || (c += 'class="required"'),
                                                c += ' type="checkbox" value="',
                                                c += a(t),
                                                c += '" /> <span>',
                                                c += a(t),
                                                c += "</span> </label> </div> "
                                        }),
                                        c += " "),
                                c += " </div> </div> "),
                                c += " "
                        }),
                        c += " ",
                    l && (c += ' <div class="captcha-group"> <div class="group-title">Verification Code<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="surveyCaptcha" class="required" type="text" /> </div> <div class="captcha-img"> <img id="surveyCaptchaImg" src="" /> </div> </div> </div> '),
                        c += ' <div class="btn-group"> <a id="surveySubmit">Submit</a> </div> </div> '),
                        new h(c)
                }),
                o("ticket-basic", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.intro)
                        , a = i.$escape
                        , o = e.categories
                        , r = i.$each
                        , s = (e.val,
                        e.key,
                        i.$string)
                        , l = e.name
                        , c = e.contactRule
                        , p = e.tel
                        , d = e.email
                        , u = e.wechat
                        , f = e.qq
                        , v = e.defaultTemplate
                        , g = e.defaultTemplateContent
                        , m = e.captcha
                        , b = "";
                    return b += '<div id="ticketV2" class="active"> ',
                    n && (b += ' <div class="step-title">',
                        b += a(n),
                        b += "</div> "),
                        b += " ",
                    o && o.length > 0 && (b += ' <div class="form-group"> <div class="group-title">classification<span>*</span></div> <div class="group-content"> ',
                        r(o, function(e, t) {
                            b += ' <div class="choice-item"> <label> <input name="categories" type="radio" value="',
                                b += s(e.id),
                                b += '" /> <span>',
                                b += s(e.name),
                                b += "</span> </label> </div> "
                        }),
                        b += " </div> </div> "),
                        b += " ",
                    "open" === l && (b += ' <div class="form-group"> <div class="group-title"> name ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketName" type="text"> </div> </div> '),
                        b += " ",
                    "open" === p && (b += ' <div class="form-group"> <div class="group-title"> Phone number ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketTel" type="text"> </div> </div> '),
                        b += " ",
                    "open" === d && (b += ' <div class="form-group"> <div class="group-title"> Email ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketEmail" type="text"> </div> </div> '),
                        b += " ",
                    "open" === u && (b += ' <div class="form-group"> <div class="group-title"> weChat ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketWechat" type="text"> </div> </div> '),
                        b += " ",
                    "open" === f && (b += ' <div class="form-group"> <div class="group-title"> QQ ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketQq" type="text"> </div> </div> '),
                        b += ' <div class="form-group"> <div class="group-title">Message<span>*</span></div> <div class="group-content"> ',
                        "open" === v ? (b += ' <textarea id="ticketContent">',
                            b += a(g),
                            b += "</textarea> ") : b += ' <textarea id="ticketContent"></textarea> ',
                        b += " </div> </div> ",
                    "open" === m && (b += ' <div class="captcha-group"> <div class="group-title">Verification Code<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="ticketCaptcha" class="required" type="text"/> </div> <div class="captcha-img"> <img id="ticketCaptchaImg" src="" /> </div> </div> </div> '),
                        b += ' <div class="btn-group"> <a id="ticketSubmit">submit</a> </div> </div> ',
                        new h(b)
                }),
                o("ticket", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.intro)
                        , a = i.$escape
                        , o = e.categories
                        , r = i.$each
                        , s = (e.val,
                        e.key,
                        i.$string)
                        , l = e.name
                        , c = e.contactRule
                        , p = e.tel
                        , d = e.email
                        , u = e.wechat
                        , f = e.qq
                        , v = e.defaultTemplate
                        , g = e.defaultTemplateContent
                        , m = e.captcha
                        , b = "";
                    return b += '<div id="ticketV2" class="active"> ',
                    n && (b += ' <div class="step-title">',
                        b += a(n),
                        b += "</div> "),
                        b += " ",
                    o && o.length > 0 && (b += ' <div class="form-group"> <div class="group-title">classification<span>*</span></div> <div class="group-content"> ',
                        r(o, function(e, t) {
                            b += ' <div class="choice-item"> <label> <input name="categories" type="radio" value="',
                                b += s(e.id),
                                b += '" /> <span>',
                                b += s(e.name),
                                b += "</span> </label> </div> "
                        }),
                        b += " </div> </div> "),
                        b += " ",
                    "open" === l && (b += ' <div class="form-group"> <div class="group-title"> name ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketName" type="text" placeholder=" Please enter your name"> </div> </div> '),
                        b += " ",
                    "open" === p && (b += ' <div class="form-group"> <div class="group-title"> Phone number ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketTel" type="text" placeholder=" Please enter your phone number"> </div> </div> '),
                        b += " ",
                    "open" === d && (b += ' <div class="form-group"> <div class="group-title"> Email ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketEmail" type="text" placeholder=" Please enter your email"> </div> </div> '),
                        b += " ",
                    "open" === u && (b += ' <div class="form-group"> <div class="group-title"> WeChat ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketWechat" type="text" placeholder=" Please enter your WeChat number"> </div> </div> '),
                        b += " ",
                    "open" === f && (b += ' <div class="form-group"> <div class="group-title"> QQ ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketQq" type="text" placeholder=" Please enter your QQ number"> </div> </div> '),
                        b += ' <div class="form-group"> <div class="group-title">Message<span>*</span></div> <div class="group-content"> ',
                        "open" === v ? (b += ' <textarea id="ticketContent" placeholder="Please enter a message">',
                            b += a(g),
                            b += "</textarea> ") : b += ' <textarea id="ticketContent" placeholder="Please enter a message"></textarea> ',
                        b += " </div> </div> ",
                    "open" === m && (b += ' <div class="captcha-group"> <div class="group-title">Verification Code<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="ticketCaptcha" class="required" type="text" placeholder=" Verification Code"/> </div> <div class="captcha-img"> <img id="ticketCaptchaImg" src="" /> </div> </div> </div> '),
                        b += ' <div class="btn-group"> <a id="ticketSubmit">submit</a> </div> </div> ',
                        new h(b)
                }),
                o("unable-service", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.src
                        , o = "";
                    return o += '<img src="',
                        o += n(a),
                        o += '"> <div>Sorry, Our Customer Service is busy, please leave us a message</div> <a class="btn-go-ticket">Leave us a message</a>',
                        new h(o)
                }),
                o("icon-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = "";
                    return r += ".icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-desktop.png?v=",
                        r += n(o),
                        r += "'); background-size: 44px auto; background-repeat: no-repeat; } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji.png?v=",
                        r += n(o),
                        r += "'); background-size: 25px auto; background-repeat: no-repeat; } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { .icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-desktop@2x.png?v=",
                        r += n(o),
                        r += "'); } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji@2x.png?v=",
                        r += n(o),
                        r += "'); } } ",
                        new h(r)
                }),
                o("theme-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.textColor
                        , r = e.subTextColor
                        , s = e.color2
                        , l = "";
                    return l += "#pageChat .header, #pageTicket .header, #pageCall .header, #pageSurvey .header { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #agentInputting { background-color: ",
                        l += n(a),
                        l += "; } #pageChat .agent-signature { color: ",
                        l += n(r),
                        l += " } #pageChat .msg-client .bubble { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .bubble a { color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .arrow { border-left: 6px solid ",
                        l += n(a),
                        l += "; } #pageChat .footer .feature-holder #btnSend.active { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #unableService .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #evaluationSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #queueingTips .queue-position-title { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips #queueingPosition { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += '; } #pageSurvey .body .menus-item > a, #pageChat .body-left .msg-bot .bubble .menu-item, #pageChat .body-left .msg-bot .rating a, #pageChat .body-left .msg-bot div.rich-text-bubble a, #pageChat .body-left .msg-agent div.rich-text-bubble a, #pageChat .body-left .msg-common-tips a, #autocomplete li em, #autocomplete li a[data-current="true"] { /*color: ',
                        l += n(a),
                        l += ";*/ color: #6088e6; } #autocomplete li a:hover { background-color: ",
                        l += n(a),
                        l += "; } ",
                        l += "white" === s ? " .icon-angel-down, .icon-ring-open, .icon-ring-close { opacity: .6; filter: alpha(opacity=60); } .icon-angel-down:hover, .icon-ring-open:hover, .icon-ring-close:hover { opacity: .8; filter: alpha(opacity=80); } .icon-angel-down { background-position: -22px -66px; } .icon-ring-open { background-position: -22px -89px; } .icon-ring-close { background-position: -22px -111px; } " : " .icon-angel-down, .icon-ring-open, .icon-ring-close { opacity: .3; filter: alpha(opacity=30); } .icon-angel-down:hover, .icon-ring-open:hover, .icon-ring-close:hover { opacity: .5; filter: alpha(opacity=50); } .icon-angel-down { background-position: 0 -66px; } .icon-ring-open { background-position: 0 -89px; } .icon-ring-close { background-position: 0 -111px; } ",
                        l += " #pageTicket #ticketSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageTicket #ticketDone { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageCall .input-active { border-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-active { background-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-intro { color: ",
                        l += n(a),
                        l += "; } #pageCall .call-success-icon { background-color: ",
                        l += n(a),
                        l += "; } #pageSurvey .menus-item >a { color: ",
                        l += n(a),
                        l += "; } #pageSurvey #surveySubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } ",
                        new h(l)
                })
        }()
    }
    , function(e, t, i) {
        var n, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function() {
            function o(e, t) {
                return (/string|function/.test("undefined" == typeof t ? "undefined" : a(t)) ? u : d)(e, t)
            }
            function r(e, t) {
                return "string" != typeof e && (t = "undefined" == typeof e ? "undefined" : a(e),
                    "number" === t ? e += "" : e = "function" === t ? r(e.call(e)) : ""),
                    e
            }
            function s(e) {
                return g[e]
            }
            function l(e) {
                return r(e).replace(/&(?![\w#]+;)|[<>"']/g, s)
            }
            function c(e, t) {
                if (m(e))
                    for (var i = 0, n = e.length; i < n; i++)
                        t.call(e, e[i], i, e);
                else
                    for (i in e)
                        t.call(e, e[i], i)
            }
            function p(e, t) {
                var i = /(\/)[^\/]+\1\.\.\1/
                    , n = ("./" + e).replace(/[^\/]+$/, "")
                    , a = n + t;
                for (a = a.replace(/\/\.\//g, "/"); a.match(i); )
                    a = a.replace(i, "/");
                return a
            }
            function d(e, t) {
                var i = o.get(e) || f({
                        filename: e,
                        name: "Render Error",
                        message: "Template not found"
                    });
                return t ? i(t) : i
            }
            function u(e, t) {
                if ("string" == typeof t) {
                    var i = t;
                    t = function() {
                        return new h(i)
                    }
                }
                var n = v[e] = function(i) {
                        try {
                            return new t(i,e) + ""
                        } catch (n) {
                            return f(n)()
                        }
                    }
                ;
                return n.prototype = t.prototype = b,
                    n.toString = function() {
                        return t + ""
                    }
                    ,
                    n
            }
            function f(e) {
                var t = "{Template Error}"
                    , i = e.stack || "";
                if (i)
                    i = i.split("\n").slice(0, 2).join("\n");
                else
                    for (var n in e)
                        i += "<" + n + ">\n" + e[n] + "\n\n";
                return function() {
                    return "object" === ("undefined" == typeof console ? "undefined" : a(console)) && console.error(t + "\n\n" + i),
                        t
                }
            }
            var v = o.cache = {}
                , h = this.String
                , g = {
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "&": "&#38;"
            }
                , m = Array.isArray || function(e) {
                    return "[object Array]" === {}.toString.call(e)
                }
                , b = o.utils = {
                $helpers: {},
                $include: function(e, t, i) {
                    return e = p(i, e),
                        d(e, t)
                },
                $string: r,
                $escape: l,
                $each: c
            }
                , I = o.helpers = b.$helpers;
            o.get = function(e) {
                return v[e.replace(/^\.\//, "")]
            }
                ,
                o.helper = function(e, t) {
                    I[e] = t
                }
                ,
                n = function() {
                    return o
                }
                    .call(t, i, t, e),
                !(void 0 !== n && (e.exports = n)),
                o("audio", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = "";
                    return o += '<audio id="newChat" preload="preload"> <source src="',
                        o += n(a),
                        o += '/audio/new-chat.ogg" type="audio/ogg" /> <source src="',
                        o += n(a),
                        o += '/audio/new-chat.mp3" type="audio/mpeg" /> </audio> <audio id="newMessage" preload="preload"> <source src="',
                        o += n(a),
                        o += '/audio/new-message.ogg" type="audio/ogg" /> <source src="',
                        o += n(a),
                        o += '/audio/new-message.mp3" type="audio/mpeg" /> </audio> <audio id="sentMessage" preload="preload"> <source src="',
                        o += n(a),
                        o += '/audio/sent-message.ogg" type="audio/ogg" /> <source src="',
                        o += n(a),
                        o += '/audio/sent-message.mp3" type="audio/mpeg" /> </audio>',
                        new h(o)
                }),
                o("chat-has-end", '對話已結束，您可以<a class="btn-restart-chat">開始新的對話</a>或<a class="btn-go-ticket">留言</a> '),
                o("emoji", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.list
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = "";
                    return n(a, function(e, t) {
                        r += ' <i class="emoji-control emoji-',
                            r += o(e),
                            r += '" onclick="window.CHOSE_EMOJI(\':',
                            r += o(e),
                            r += ":')\"></i> "
                    }),
                        r += ' <div class="clearfix"></div>',
                        new h(r)
                }),
                o("evaluation-basic", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = "";
                    return o += '<div class="evaluation-header"> <a id="evaluationHide"> <i class="icon icon-times"></i> </a> <div class="intro">',
                        o += n(a),
                        o += '</div> </div> <div class="evaluation-body"> <div class="evaluation-btn-group"> <input id="evaluationLevel" type="hidden" /> <div id="evaluation2" class="evaluation-btn"> <i class="icon icon-smile"></i> <span>好評</span> </div> <div id="evaluation1" class="evaluation-btn"> <i class="icon icon-neutral"></i> <span>中評</span> </div> <div id="evaluation0" class="evaluation-btn"> <i class="icon icon-angry"></i> <span>差評</span> </div> </div> <div class="evaluation-reason"> <label for="evaluationContent">請填寫評價內容（選填）</label> <textarea id="evaluationContent"></textarea> <button id="evaluationSubmit">提交</button> </div> </div> ',
                        new h(o)
                }),
                o("evaluation", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = "";
                    return o += '<div class="evaluation-header"> <a id="evaluationHide"> <i class="icon icon-times"></i> </a> <div class="intro">',
                        o += n(a),
                        o += '</div> </div> <div class="evaluation-body"> <div class="evaluation-btn-group"> <input id="evaluationLevel" type="hidden" /> <div id="evaluation2" class="evaluation-btn"> <i class="icon icon-smile"></i> <span>好評</span> </div> <div id="evaluation1" class="evaluation-btn"> <i class="icon icon-neutral"></i> <span>中評</span> </div> <div id="evaluation0" class="evaluation-btn"> <i class="icon icon-angry"></i> <span>差評</span> </div> </div> <div class="evaluation-reason"> <textarea id="evaluationContent" placeholder="請填寫評價內容（選填）"></textarea> <button id="evaluationSubmit">提交</button> </div> </div> ',
                        new h(o)
                }),
                o("features", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.emoji)
                        , a = e.photo
                        , o = e.upload
                        , r = e.evaluation
                        , s = "";
                    return n && (s += ' <a id="emojiBtn" class="feature-btn" title="表情"> <i class="icon icon-emoji"></i> </a> '),
                        s += " ",
                    a && (s += ' <label id="photoBtn" class="feature-btn" title="發送圖片"> <i class="icon icon-photo"></i> <input id="photoFile" type="file" accept="image/gif, image/jpeg, image/jpg, image/png"> </label> '),
                        s += " ",
                    o && (s += ' <label id="uploadBtn" class="feature-btn" title="發送文件"> <i class="icon icon-upload"></i> <input id="uploadFile" type="file"> </label> '),
                        s += " ",
                    r && (s += ' <a id="evaluationBtn" class="feature-btn" title="評價"> <i class="icon icon-evaluation"></i> </a> '),
                        s += " ",
                        new h(s)
                }),
                o("header-customer", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.photoType)
                        , a = i.$escape
                        , o = e.avatar
                        , r = e.signature
                        , s = e.name
                        , l = "";
                    return "small" === n && (l += ' <img class="agent-avatar" src="',
                        l += a(o),
                        l += '" alt="avatar"> '),
                        l += " ",
                        l += "small" === n ? ' <div class="agent-info" style="margin-left: 54px"> ' : ' <div class="agent-info"> ',
                        l += ' <div class="agent-name ',
                    r || (l += "without-signature"),
                        l += '"> ',
                        l += a(s),
                        l += ' <span id="agentInputting">對方輸入消息中...</span> </div> <div class="agent-signature" title="',
                        l += a(r),
                        l += '">',
                        l += a(r),
                        l += "</div> </div> ",
                        new h(l)
                }),
                o("header-fusion", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.signature)
                        , a = i.$escape
                        , o = e.name
                        , r = "";
                    return r += '<div class="agent-info"> <div class="agent-name ',
                    n || (r += "without-signature"),
                        r += '"> ',
                        r += a(o),
                        r += ' <span id="agentInputting">對方輸入消息中...</span> </div> <div class="agent-signature" title="',
                        r += a(n),
                        r += '">',
                        r += a(n),
                        r += "</div> </div> ",
                        new h(r)
                }),
                o("header-loading", '<div id="loading"> 連接中<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span> </div> '),
                o("header-mondeo", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.signature)
                        , a = i.$escape
                        , o = e.name
                        , r = "";
                    return r += '<div class="agent-info"> <div class="agent-name ',
                    n || (r += "without-signature"),
                        r += '"> ',
                        r += a(o),
                        r += ' <span id="agentInputting">對方輸入消息中...</span> </div> <div class="agent-signature" title="',
                        r += a(n),
                        r += '">',
                        r += a(n),
                        r += "</div> </div> ",
                        new h(r)
                }),
                o("header", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.avatar
                        , o = e.signature
                        , r = e.name
                        , s = "";
                    return s += '<img class="agent-avatar" src="',
                        s += n(a),
                        s += '" alt="avatar"> <div class="agent-info"> <div class="agent-name ',
                    o || (s += "without-signature"),
                        s += '"> ',
                        s += n(r),
                        s += ' <span id="agentInputting">對方輸入消息中...</span> </div> <div class="agent-signature" title="',
                        s += n(o),
                        s += '">',
                        s += n(o),
                        s += "</div> </div> ",
                        new h(s)
                }),
                o("msg", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.list
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = i.$string
                        , s = (e.rv,
                        e.rk,
                        e.mv,
                        e.mk,
                        e.historyTimes)
                        , l = "";
                    return n(a, function(e, t) {
                        l += " ",
                            "bot" === e.from_type ? (l += ' <div id="',
                                l += o(e.id),
                                l += '" class="msg-bot"> <div class="name"> ',
                                l += o(e.agent.nickname),
                                l += " ",
                            e.displayDate && (l += ' <span id="date',
                                l += o(e.id),
                                l += '" class="date">',
                                l += r(e.displayDate),
                                l += "</span> "),
                                l += " </div> ",
                                "welcome" === e.content_type ? (l += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text"> ',
                                    l += r(e.content),
                                    l += " </div> </div> ") : "text" === e.content_type || "bot" === e.content_type ? (l += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> ',
                                    e.content_robot && e.content_robot.length ? (l += " ",
                                        n(e.content_robot, function(e, t) {
                                            l += " ",
                                                "text" === e.type ? (l += " ",
                                                    e.rich_text ? (l += ' <div class="text rich_text">',
                                                        l += r(e.rich_text),
                                                        l += "</div> ") : (l += ' <div class="text">',
                                                        l += r(e.text),
                                                        l += "</div> "),
                                                    l += " ") : "menu" !== e.type && "related" !== e.type || (l += " ",
                                                    e.text_before && (l += ' <div class="menu-tips">',
                                                        l += o(e.text_before),
                                                        l += "</div> "),
                                                        l += ' <div class="menu"> ',
                                                    e.items && e.items.length && (l += " <ol>",
                                                        n(e.items, function(e, t) {
                                                            l += " <li> ",
                                                                e.link ? (l += ' <a class="menu-item" data-value="',
                                                                    l += r(e.value),
                                                                    l += '" href="',
                                                                    l += r(e.link),
                                                                    l += '" target="_blank">',
                                                                    l += r(e.text),
                                                                    l += "</a> ") : (l += ' <span class="menu-item" data-value="',
                                                                    l += r(e.value),
                                                                    l += '">',
                                                                    l += r(e.text),
                                                                    l += "</span> "),
                                                                l += " </li> "
                                                        }),
                                                        l += '</ol> <div class="menu-tips">點擊問題或回覆數字查看答案</div> '),
                                                        l += " </div> "),
                                                l += " "
                                        }),
                                        l += " ") : e.content && (l += ' <div class="text">',
                                            l += r(e.content),
                                            l += "</div> "),
                                    l += " ",
                                "evaluate" === e.sub_type && (l += ' <div class="rating" data-question-id="',
                                    l += r(e.question_id),
                                    l += '"> <a href="javascript:;;" class="option" data-option="useful">解決</a> <a href="javascript:;;" class="option" data-option="useless">未解決</a> <span class="rated-text">已反饋</span> <span class="pending-text">提交中</span> <span class="split"></span> </div> '),
                                    l += " </div> ") : "rich_text" === e.content_type ? (l += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                                    l += r(e.extra.content),
                                    l += "</div> ",
                                "evaluate" === e.sub_type && (l += ' <div class="rating" data-question-id="',
                                    l += r(e.question_id),
                                    l += '"> <a href="javascript:;;" class="option" data-option="useful">解决</a> <a href="javascript:;;" class="option" data-option="useless">未解决</a> <span class="rated-text">已反饋</span> <span class="pending-text">提交中</span> <span class="split"></span> </div> '),
                                    l += " </div> ") : "photo" === e.content_type && (l += ' <div class="photo"> <a href="',
                                        l += o(e.media_url),
                                        l += '" target="_blank"> ',
                                        s > 1 ? (l += ' <img src="',
                                            l += o(e.media_url),
                                            l += '" /> ') : (l += ' <img src="',
                                            l += o(e.media_url),
                                            l += '" onload="window.SCROLL_TO_LAST()" /> '),
                                        l += " </a> </div> "),
                                l += " </div> ") : "agent" === e.from_type && (l += ' <div id="',
                                    l += o(e.id),
                                    l += '" class="msg-agent"> <div class="name"> ',
                                    l += o(e.agent.nickname),
                                    l += " ",
                                e.displayDate && (l += ' <span id="date',
                                    l += o(e.id),
                                    l += '" class="date">',
                                    l += r(e.displayDate),
                                    l += "</span> "),
                                    l += " </div> ",
                                    "welcome" === e.content_type ? (l += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                        l += r(e.content),
                                        l += "</div> </div> ") : "text" === e.content_type ? (l += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                        l += r(e.content),
                                        l += "</div> </div> ") : "rich_text" === e.content_type ? (l += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                                        l += r(e.extra.content),
                                        l += "</div> </div> ") : "photo" === e.content_type ? (l += ' <div class="photo"> <a href="',
                                        l += o(e.media_url),
                                        l += '" target="_blank"> ',
                                        s > 1 ? (l += ' <img src="',
                                            l += o(e.media_url),
                                            l += '" /> ') : (l += ' <img src="',
                                            l += o(e.media_url),
                                            l += '" onload="window.SCROLL_TO_LAST()" /> '),
                                        l += " </a> </div> ") : "file" === e.content_type && (l += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                            l += o(e.extra.filename),
                                            l += '">',
                                            l += o(e.extra.filename),
                                            l += '</span> <span class="file-size">',
                                            l += o(e.extra.convert_size),
                                            l += '</span> </div> <div class="sub"> ',
                                            e.extra.cancel ? l += ' <span class="file-state">對方取消發送</span> ' : (l += " ",
                                                e.extra.has_expired ? (l += ' <span class="file-state">',
                                                    l += o(e.extra.has_expired),
                                                    l += '後過期</span> <a class="btn-download" name="',
                                                    l += o(e.id),
                                                    l += ",",
                                                    l += o(e.conversation_id),
                                                    l += '" href="',
                                                    l += o(e.media_url),
                                                    l += '" target="_blank"> <i class="icon icon-download"></i> <span>下載</span> </a> ') : l += ' <span class="file-state">已過期</span> ',
                                                l += " "),
                                            l += " </div> </div> </div> "),
                                    l += " </div> "),
                            l += " ",
                        "client" === e.from_type && (l += ' <div id="',
                            l += o(e.id),
                            l += '" class="msg-client"> ',
                        e.displayDate && (l += ' <div id="date',
                            l += o(e.id),
                            l += '" class="date">',
                            l += r(e.displayDate),
                            l += "</div> "),
                            l += " ",
                            "text" === e.content_type ? (l += ' <div class="bubble"> <span class="arrow"></span> <div class="text">',
                                l += r(e.content),
                                l += "</div> ",
                            "sending" === e.status && (l += ' <span id="status',
                                l += o(e.id),
                                l += '" class="status icon"></span> '),
                                l += " </div> ") : "photo" === e.content_type ? (l += ' <div class="photo"> <a href="',
                                l += o(e.media_url),
                                l += '" target="_blank"> ',
                                s > 1 ? (l += ' <img id="photo',
                                    l += o(e.id),
                                    l += '" src="',
                                    l += o(e.media_url),
                                    l += '" /> ') : (l += ' <img id="photo',
                                    l += o(e.id),
                                    l += '" src="',
                                    l += o(e.media_url),
                                    l += '" onload="window.SCROLL_TO_LAST()" /> '),
                                l += " </a> ",
                            "sending" === e.status && (l += ' <span id="status',
                                l += o(e.id),
                                l += '" class="status icon"></span> '),
                                l += " </div> ") : "file" === e.content_type && (l += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                    l += o(e.extra.filename),
                                    l += '">',
                                    l += o(e.extra.filename),
                                    l += '</span> <span class="file-size">',
                                    l += o(e.extra.convert_size),
                                    l += '</span> </div> <div class="sub"> ',
                                    e.uploading ? (l += ' <span id="progress',
                                        l += o(e.id),
                                        l += '" class="progress-holder"> <span class="progress-bg"> <span id="progressBar',
                                        l += o(e.id),
                                        l += '" class="progress-bar"></span> </span> </span> <a id="cancelUpload',
                                        l += o(e.id),
                                        l += '" class="btn-cancel-upload"> <i class="icon icon-cancel-upload"></i> </a> <span id="fileState',
                                        l += o(e.id),
                                        l += '" class="file-state">上傳中&nbsp;<span id="speed',
                                        l += o(e.id),
                                        l += '"></span></span> ') : (l += " ",
                                        e.extra.cancel ? l += ' <span class="file-state">取消上傳</span> ' : (l += " ",
                                            e.extra.has_expired ? (l += ' <span class="file-state">',
                                                l += o(e.extra.has_expired),
                                                l += "後過期</span> ") : l += ' <span class="file-state">已過期</span> ',
                                            l += " "),
                                        l += " "),
                                    l += " </div> </div> </div> "),
                            l += " </div> "),
                            l += " ",
                        "redirect" === e.from_type && (l += ' <div id="',
                            l += o(e.id),
                            l += '" class="msg-redirect"> 接下來由<span>',
                            l += o(e.toNickname),
                            l += "</span>為您服務 </div> "),
                            l += " ",
                        "evaluation" === e.from_type && (l += ' <div id="',
                            l += o(e.id),
                            l += '" class="msg-evaluation"> 你給出了 <span class="evaluation-level evaluation-level-',
                            l += o(e.level),
                            l += '">',
                            l += o(e.levelText),
                            l += "</span> ",
                        e.content && (l += ' <div class="evaluation-content">',
                            l += o(e.content),
                            l += "</div> "),
                            l += " </div> "),
                            l += " ",
                        "blacklist" === e.from_type && (l += ' <div id="',
                            l += o(e.id),
                            l += '" class="msg-blacklist">你被移出了黑名單</div> '),
                            l += " "
                    }),
                        l += " ",
                        new h(l)
                }),
                o("profile-customer", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.photoType
                        , r = e.avatar
                        , s = e.name
                        , l = i.$string
                        , c = e.content
                        , p = "";
                    return p += '<div class="profile-contact" style="background-color: #',
                        p += n(a),
                        p += '"> ',
                    "big" === o && (p += ' <img class="profile-avatar" src="',
                        p += n(r),
                        p += '" alt="avatar"> <div class="profile-name">',
                        p += n(s),
                        p += "</div> "),
                        p += " ",
                        p += l(c),
                        p += " </div> ",
                        new h(p)
                }),
                o("profile", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.avatar
                        , o = e.name
                        , r = e.tel
                        , s = e.cellphone
                        , l = e.email
                        , c = e.qq
                        , p = e.weixin
                        , d = "";
                    return d += '<img class="profile-avatar" src="',
                        d += n(a),
                        d += '" alt="avatar"> <div class="profile-name">',
                        d += n(o),
                        d += '</div> <div class="profile-contact"> ',
                    r && (d += ' <a> <i class="icon icon-tel"></i> <span>',
                        d += n(r),
                        d += "</span> </a> "),
                        d += " ",
                    s && (d += ' <a> <i class="icon icon-cellphone"></i> <span>',
                        d += n(s),
                        d += "</span> </a> "),
                        d += " ",
                    l && (d += ' <a> <i class="icon icon-email"></i> <span>',
                        d += n(l),
                        d += "</span> </a> "),
                        d += " ",
                    c && (d += ' <a> <i class="icon icon-qq"></i> <span>',
                        d += n(c),
                        d += "</span> </a> "),
                        d += " ",
                    p && (d += ' <a> <i class="icon icon-weixin"></i> <span>',
                        d += n(p),
                        d += "</span> </a> "),
                        d += " </div>",
                        new h(d)
                }),
                o("queueing", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = e.position
                        , r = "";
                    return r += '<div class="queue-header">',
                        r += n(a),
                        r += '</div> <div class="queue-body"> <div class="queue-position-title">當前等待人數</div> <span id="queueingPosition">',
                        r += n(o),
                        r += '</span> </div> <div class="queue-footer"> <p>如果等不及，可以選擇</p> <a class="btn-go-ticket">給我們留言</a> </div> ',
                        new h(r)
                }),
                o("support", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.disableBrandLink)
                        , a = i.$escape
                        , o = e.entId
                        , r = "";
                    return r += "<a ",
                    n !== !0 && (r += 'href="http://static.meiqia.com/dist/standalone.html?eid=89239&utm_source=widget-badge&utm_term=',
                        r += a(o),
                        r += '"'),
                        r += ' target="_blank"> <i class="icon icon-logo-gray"></i> <span>客服系統由美洽提供</span> </a> ',
                        new h(r)
                }),
                o("survey", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.menus)
                        , a = i.$escape
                        , o = i.$each
                        , r = (e.v,
                        e.k,
                        e.inputs)
                        , s = e.val
                        , l = (e.key,
                        e.captcha)
                        , c = "";
                    return "open" === n.status && (c += ' <div id="surveyStep1" class="active"> <div class="step-title">',
                        c += a(n.title),
                        c += "</div> ",
                        o(n.assignments, function(e, t) {
                            c += ' <div class="menus-item"> <a id="',
                                c += a(e.target_kind),
                                c += "_",
                                c += a(e.target),
                                c += '" name="surveyMenus" title="',
                                c += a(e.description),
                                c += '">',
                                c += a(t + 1),
                                c += ". ",
                                c += a(e.description),
                                c += "</a> </div> "
                        }),
                        c += " </div> "),
                        c += " ",
                    "open" === r.status && (c += ' <div id="surveyStep2" ',
                    "close" === n.status && (c += 'class="active"'),
                        c += '> <div class="step-title">',
                        c += a(r.title),
                        c += "</div> ",
                        o(r.fields, function(e, t) {
                            c += " ",
                            e.ignore || (c += ' <div class="form-group"> <div class="group-title">',
                                c += a(e.display_name),
                            e.optional || (c += "<span>*</span>"),
                                c += '</div> <div class="group-content"> ',
                                "text" === e.type ? (c += ' <input name="',
                                    c += a(e.field_name),
                                    c += '" ',
                                    c += e.optional ? ' class="survey-input-text"' : 'class="survey-input-text required"',
                                    c += ' type="text" value="',
                                    c += a(s),
                                    c += '" placeholder="請輸入" /> ') : "single_choice" === e.type ? (c += " ",
                                    o(e.choices, function(t, i) {
                                        c += ' <div class="choice-item"> <label> <input name="',
                                            c += a(e.field_name),
                                            c += '" ',
                                        e.optional || (c += 'class="required"'),
                                            c += ' type="radio" value="',
                                            c += a(t),
                                            c += '" /> <span>',
                                            c += a(t),
                                            c += "</span> </label> </div> "
                                    }),
                                    c += " ") : "multiple_choice" === e.type && (c += " ",
                                        o(e.choices, function(t, i) {
                                            c += ' <div class="choice-item"> <label> <input name="',
                                                c += a(e.field_name),
                                                c += '" ',
                                            e.optional || (c += 'class="required"'),
                                                c += ' type="checkbox" value="',
                                                c += a(t),
                                                c += '" /> <span>',
                                                c += a(t),
                                                c += "</span> </label> </div> "
                                        }),
                                        c += " "),
                                c += " </div> </div> "),
                                c += " "
                        }),
                        c += " ",
                    l && (c += ' <div class="captcha-group"> <div class="group-title">驗證碼<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="surveyCaptcha" class="required" type="text" /> </div> <div class="captcha-img"> <img id="surveyCaptchaImg" src="" /> </div> </div> </div> '),
                        c += ' <div class="btn-group"> <a id="surveySubmit">提交</a> </div> </div> '),
                        c += " ",
                        new h(c)
                }),
                o("ticket-basic", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.intro)
                        , a = i.$escape
                        , o = e.categories
                        , r = i.$each
                        , s = (e.val,
                        e.key,
                        i.$string)
                        , l = e.name
                        , c = e.contactRule
                        , p = e.tel
                        , d = e.email
                        , u = e.wechat
                        , f = e.qq
                        , v = e.defaultTemplate
                        , g = e.defaultTemplateContent
                        , m = e.captcha
                        , b = "";
                    return b += '<div id="ticketV2" class="active"> ',
                    n && (b += ' <div class="step-title">',
                        b += a(n),
                        b += "</div> "),
                        b += " ",
                    o && o.length > 0 && (b += ' <div class="form-group"> <div class="group-title">分類<span>*</span></div> <div class="group-content"> ',
                        r(o, function(e, t) {
                            b += ' <div class="choice-item"> <label> <input name="categories" type="radio" value="',
                                b += s(e.id),
                                b += '" /> <span>',
                                b += s(e.name),
                                b += "</span> </label> </div> "
                        }),
                        b += " </div> </div> "),
                        b += " ",
                    "open" === l && (b += ' <div class="form-group"> <div class="group-title"> 姓名 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketName" type="text"> </div> </div> '),
                        b += " ",
                    "open" === p && (b += ' <div class="form-group"> <div class="group-title"> 手機 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketTel" type="text"> </div> </div> '),
                        b += " ",
                    "open" === d && (b += ' <div class="form-group"> <div class="group-title"> 郵箱 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketEmail" type="text"> </div> </div> '),
                        b += " ",
                    "open" === u && (b += ' <div class="form-group"> <div class="group-title"> 微信 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketWechat" type="text"> </div> </div> '),
                        b += " ",
                    "open" === f && (b += ' <div class="form-group"> <div class="group-title"> QQ ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketQq" type="text"> </div> </div> '),
                        b += ' <div class="form-group"> <div class="group-title">留言內容<span>*</span></div> <div class="group-content"> ',
                        "open" === v ? (b += ' <textarea id="ticketContent">',
                            b += a(g),
                            b += "</textarea> ") : b += ' <textarea id="ticketContent"></textarea> ',
                        b += " </div> </div> ",
                    "open" === m && (b += ' <div class="captcha-group"> <div class="group-title">驗證碼<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="ticketCaptcha" class="required" type="text"/> </div> <div class="captcha-img"> <img id="ticketCaptchaImg" src="" /> </div> </div> </div> '),
                        b += ' <div class="btn-group"> <a id="ticketSubmit">提交</a> </div> </div> ',
                        new h(b)
                }),
                o("ticket", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.intro)
                        , a = i.$escape
                        , o = e.categories
                        , r = i.$each
                        , s = (e.val,
                        e.key,
                        i.$string)
                        , l = e.name
                        , c = e.contactRule
                        , p = e.tel
                        , d = e.email
                        , u = e.wechat
                        , f = e.qq
                        , v = e.defaultTemplate
                        , g = e.defaultTemplateContent
                        , m = e.captcha
                        , b = "";
                    return b += '<div id="ticketV2" class="active"> ',
                    n && (b += ' <div class="step-title">',
                        b += a(n),
                        b += "</div> "),
                        b += " ",
                    o && o.length > 0 && (b += ' <div class="form-group"> <div class="group-title">分類<span>*</span></div> <div class="group-content"> ',
                        r(o, function(e, t) {
                            b += ' <div class="choice-item"> <label> <input name="categories" type="radio" value="',
                                b += s(e.id),
                                b += '" /> <span>',
                                b += s(e.name),
                                b += "</span> </label> </div> "
                        }),
                        b += " </div> </div> "),
                        b += " ",
                    "open" === l && (b += ' <div class="form-group"> <div class="group-title"> 姓名 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketName" type="text" placeholder=" 請輸入姓名"> </div> </div> '),
                        b += " ",
                    "open" === p && (b += ' <div class="form-group"> <div class="group-title"> 手機 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketTel" type="text" placeholder=" 請輸入手機號"> </div> </div> '),
                        b += " ",
                    "open" === d && (b += ' <div class="form-group"> <div class="group-title"> 郵箱 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketEmail" type="text" placeholder=" 請輸入郵箱"> </div> </div> '),
                        b += " ",
                    "open" === u && (b += ' <div class="form-group"> <div class="group-title"> 微信 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketWechat" type="text" placeholder=" 請輸入微信號"> </div> </div> '),
                        b += " ",
                    "open" === f && (b += ' <div class="form-group"> <div class="group-title"> QQ ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketQq" type="text" placeholder=" 請輸入QQ號"> </div> </div> '),
                        b += ' <div class="form-group"> <div class="group-title">留言內容<span>*</span></div> <div class="group-content"> ',
                        "open" === v ? (b += ' <textarea id="ticketContent" placeholder="請輸入留言內容">',
                            b += a(g),
                            b += "</textarea> ") : b += ' <textarea id="ticketContent" placeholder="請輸入留言內容"></textarea> ',
                        b += " </div> </div> ",
                    "open" === m && (b += ' <div class="captcha-group"> <div class="group-title">驗證碼<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="ticketCaptcha" class="required" type="text" placeholder=" 請輸入右側驗證碼"/> </div> <div class="captcha-img"> <img id="ticketCaptchaImg" src="" /> </div> </div> </div> '),
                        b += ' <div class="btn-group"> <a id="ticketSubmit">提交</a> </div> </div> ',
                        new h(b)
                }),
                o("unable-service", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.src
                        , o = "";
                    return o += '<img src="',
                        o += n(a),
                        o += '"> <div>客服繁忙或已離線，給我們留言吧</div> <a class="btn-go-ticket">給我們留言</a> ',
                        new h(o)
                }),
                o("icon-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = "";
                    return r += ".icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-desktop.png?v=",
                        r += n(o),
                        r += "'); background-size: 44px auto; background-repeat: no-repeat; } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji.png?v=",
                        r += n(o),
                        r += "'); background-size: 25px auto; background-repeat: no-repeat; } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { .icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-desktop@2x.png?v=",
                        r += n(o),
                        r += "'); } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji@2x.png?v=",
                        r += n(o),
                        r += "'); } } ",
                        new h(r)
                }),
                o("theme-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.textColor
                        , r = e.subTextColor
                        , s = e.color2
                        , l = "";
                    return l += "#pageChat .header, #pageTicket .header, #pageCall .header, #pageSurvey .header { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #agentInputting { background-color: ",
                        l += n(a),
                        l += "; } #pageChat .agent-signature { color: ",
                        l += n(r),
                        l += " } #pageChat .msg-client .bubble { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .bubble a { color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .arrow { border-left: 6px solid ",
                        l += n(a),
                        l += "; } #pageChat .footer .feature-holder #btnSend.active { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #unableService .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #evaluationSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #queueingTips .queue-position-title { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips #queueingPosition { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += '; } #pageSurvey .body .menus-item > a, #pageChat .body-left .msg-bot .bubble .menu-item, #pageChat .body-left .msg-bot .rating a, #pageChat .body-left .msg-bot div.rich-text-bubble a, #pageChat .body-left .msg-agent div.rich-text-bubble a, #pageChat .body-left .msg-common-tips a, #autocomplete li em, #autocomplete li a[data-current="true"] { /*color: ',
                        l += n(a),
                        l += ";*/ color: #6088e6; } #autocomplete li a:hover { background-color: ",
                        l += n(a),
                        l += "; } ",
                        l += "white" === s ? " .icon-angel-down, .icon-ring-open, .icon-ring-close { opacity: .6; filter: alpha(opacity=60); } .icon-angel-down:hover, .icon-ring-open:hover, .icon-ring-close:hover { opacity: .8; filter: alpha(opacity=80); } .icon-angel-down { background-position: -22px -66px; } .icon-ring-open { background-position: -22px -89px; } .icon-ring-close { background-position: -22px -111px; } " : " .icon-angel-down, .icon-ring-open, .icon-ring-close { opacity: .3; filter: alpha(opacity=30); } .icon-angel-down:hover, .icon-ring-open:hover, .icon-ring-close:hover { opacity: .5; filter: alpha(opacity=50); } .icon-angel-down { background-position: 0 -66px; } .icon-ring-open { background-position: 0 -89px; } .icon-ring-close { background-position: 0 -111px; } ",
                        l += " #pageTicket #ticketSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageTicket #ticketDone { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageCall .input-active { border-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-active { background-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-intro { color: ",
                        l += n(a),
                        l += "; } #pageCall .call-success-icon { background-color: ",
                        l += n(a),
                        l += "; } #pageSurvey .menus-item >a { color: ",
                        l += n(a),
                        l += "; } #pageSurvey #surveySubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } ",
                        new h(l)
                })
        }()
    }
    , function(e, t, i) {
        var n, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function() {
            function o(e, t) {
                return (/string|function/.test("undefined" == typeof t ? "undefined" : a(t)) ? u : d)(e, t)
            }
            function r(e, t) {
                return "string" != typeof e && (t = "undefined" == typeof e ? "undefined" : a(e),
                    "number" === t ? e += "" : e = "function" === t ? r(e.call(e)) : ""),
                    e
            }
            function s(e) {
                return g[e]
            }
            function l(e) {
                return r(e).replace(/&(?![\w#]+;)|[<>"']/g, s)
            }
            function c(e, t) {
                if (m(e))
                    for (var i = 0, n = e.length; i < n; i++)
                        t.call(e, e[i], i, e);
                else
                    for (i in e)
                        t.call(e, e[i], i)
            }
            function p(e, t) {
                var i = /(\/)[^\/]+\1\.\.\1/
                    , n = ("./" + e).replace(/[^\/]+$/, "")
                    , a = n + t;
                for (a = a.replace(/\/\.\//g, "/"); a.match(i); )
                    a = a.replace(i, "/");
                return a
            }
            function d(e, t) {
                var i = o.get(e) || f({
                        filename: e,
                        name: "Render Error",
                        message: "Template not found"
                    });
                return t ? i(t) : i
            }
            function u(e, t) {
                if ("string" == typeof t) {
                    var i = t;
                    t = function() {
                        return new h(i)
                    }
                }
                var n = v[e] = function(i) {
                        try {
                            return new t(i,e) + ""
                        } catch (n) {
                            return f(n)()
                        }
                    }
                ;
                return n.prototype = t.prototype = b,
                    n.toString = function() {
                        return t + ""
                    }
                    ,
                    n
            }
            function f(e) {
                var t = "{Template Error}"
                    , i = e.stack || "";
                if (i)
                    i = i.split("\n").slice(0, 2).join("\n");
                else
                    for (var n in e)
                        i += "<" + n + ">\n" + e[n] + "\n\n";
                return function() {
                    return "object" === ("undefined" == typeof console ? "undefined" : a(console)) && console.error(t + "\n\n" + i),
                        t
                }
            }
            var v = o.cache = {}
                , h = this.String
                , g = {
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "&": "&#38;"
            }
                , m = Array.isArray || function(e) {
                    return "[object Array]" === {}.toString.call(e)
                }
                , b = o.utils = {
                $helpers: {},
                $include: function(e, t, i) {
                    return e = p(i, e),
                        d(e, t)
                },
                $string: r,
                $escape: l,
                $each: c
            }
                , I = o.helpers = b.$helpers;
            o.get = function(e) {
                return v[e.replace(/^\.\//, "")]
            }
                ,
                o.helper = function(e, t) {
                    I[e] = t
                }
                ,
                n = function() {
                    return o
                }
                    .call(t, i, t, e),
                !(void 0 !== n && (e.exports = n)),
                o("akj-leave-msg", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.citys
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = "";
                    return r += '<div id="ticketV2" class="active akj-wrap"> <p class="akj-text">我家装修多少钱？</p> <ul class="akj-order"> <li> <select placeholder="请输入您的城市" value="" id="akj-city-ticket"> ',
                        n(a, function(e, t) {
                            r += ' <option value="',
                                r += o(e.key),
                                r += '">',
                                r += o(e.name),
                                r += "</option> "
                        }),
                        r += ' </select> </li> <li> <input type="text" value="" placeholder="您的称呼" id="akj-name-ticket" /> </li> <li> <input type="tel" value="" placeholder="手机号码，方便给您报价" id="akj-tel-ticket" /> </li> <li> <button id="akj-sub">立即获得报价</button> </li> </ul> </div>',
                        new h(r)
                }),
                o("chat-has-end", '对话已结束，您可以<a class="btn-restart-chat">开始新的对话</a>或<a class="btn-go-ticket">留言</a>'),
                o("emoji", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.list
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = "";
                    return n(a, function(e, t) {
                        r += ' <i class="emoji-control emoji-',
                            r += o(e),
                            r += '" onclick="window.CHOSE_EMOJI(\':',
                            r += o(e),
                            r += ":')\"></i> "
                    }),
                        r += ' <div class="clearfix"></div>',
                        new h(r)
                }),
                o("evaluation", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = "";
                    return o += '<div class="evaluation-header"> <a id="evaluationHide"> <i class="icon icon-times"></i> </a> <div class="intro">',
                        o += n(a),
                        o += '</div> </div> <div class="evaluation-body"> <div class="evaluation-btn-group"> <input id="evaluationLevel" type="hidden" /> <div id="evaluation2" class="evaluation-btn"> <i class="icon icon-smile"></i> <span>好评</span> </div> <div id="evaluation1" class="evaluation-btn"> <i class="icon icon-neutral"></i> <span>中评</span> </div> <div id="evaluation0" class="evaluation-btn"> <i class="icon icon-angry"></i> <span>差评</span> </div> </div> <div class="evaluation-reason"> <textarea id="evaluationContent" placeholder="请填写评价内容（选填）"></textarea> <button id="evaluationSubmit">提交</button> </div> </div> ',
                        new h(o)
                }),
                o("features", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.emoji)
                        , a = e.photo
                        , o = e.evaluation
                        , r = "";
                    return n && (r += ' <a id="emojiBtn" class="feature-btn" title="表情"> <i class="icon icon-emoji"></i> </a> '),
                        r += " ",
                    a && (r += ' <label id="photoBtn" for="photoFile" class="feature-btn" title="发送图片"> <i class="icon icon-photo"></i> <input id="photoFile" type="file" accept="image/gif, image/jpeg, image/jpg, image/png"> </label> '),
                        r += " ",
                    o && (r += ' <a id="evaluationBtn" class="feature-btn" title="评价"> <i class="icon icon-evaluation"></i> </a> '),
                        new h(r)
                }),
                o("header-loading", '<div id="loading"> 连接中<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span> </div>'),
                o("header", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.signature)
                        , a = i.$escape
                        , o = e.name
                        , r = "";
                    return r += '<div class="agent-info"> <div class="agent-name ',
                    n || (r += "without-signature"),
                        r += '"> ',
                        r += a(o),
                        r += ' <span id="agentInputting">对方输入消息中...</span> </div> ',
                    n && (r += ' <div class="agent-signature" title="',
                        r += a(n),
                        r += '">',
                        r += a(n),
                        r += "</div> "),
                        r += " </div>",
                        new h(r)
                }),
                o("msg-new", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.info
                        , o = i.$each
                        , r = e.content
                        , s = (e.msg,
                        e.k,
                        i.$string)
                        , l = (e.item,
                        e.mk,
                        "");
                    return l += '<div id="',
                        l += n(a.id),
                        l += '" class="msg-bot"> <div class="agent-avatar"> <img src="',
                        l += n(a.agent.avatar),
                        l += '" /> </div> <div class="name"> ',
                        l += n(a.agent.nickname),
                        l += " ",
                    a.displayDate && (l += ' <span id="date',
                        l += n(a.id),
                        l += '" class="date">',
                        l += n(a.displayDate),
                        l += "</span> "),
                        l += ' </div> <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> ',
                        o(r, function(e, t) {
                            l += " ",
                            "text" === e.type && (l += ' <div class="text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "txt" === e.type && (l += ' <div class="text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "rich_text" === e.type && (l += ' <div class="text rich_text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "choices" === e.type && (l += ' <div class="menu"> ',
                            e.body.choices && e.body.choices.length && (l += " <ol> ",
                                o(e.body.choices, function(e, t) {
                                    l += ' <li> <span class="menu-item" data-value="',
                                        l += s(e),
                                        l += '">',
                                        l += s(e),
                                        l += "</span> </li> "
                                }),
                                l += ' </ol> <div class="menu-tips">点击问题或回复问题查看答案</div> '),
                                l += " </div> "),
                                l += " "
                        }),
                        l += " </div> </div> ",
                        new h(l)
                }),
                o("msg", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.v)
                        , a = i.$escape
                        , o = i.$string
                        , r = i.$each
                        , s = (e.rv,
                        e.rk,
                        e.mv,
                        e.mk,
                        e.historyTimes)
                        , l = e.weixin
                        , c = "";
                    return "bot" === n.from_type ? (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-bot"> <div class="agent-avatar"> <img src="',
                        c += a(n.agent.avatar),
                        c += '" /> </div> ',
                    n.displayDate && (c += ' <div id="date',
                        c += a(n.id),
                        c += '" class="date">',
                        c += o(n.displayDate),
                        c += "</div> "),
                        c += " ",
                        "welcome" === n.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text"> ',
                            c += o(n.content),
                            c += " </div> </div> ") : "text" === n.content_type || "bot" === n.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> ',
                            n.content_robot && n.content_robot.length ? (c += " ",
                                r(n.content_robot, function(e, t) {
                                    c += " ",
                                        "text" === e.type ? (c += " ",
                                            e.rich_text ? (c += ' <div class="text rich-text">',
                                                c += o(e.rich_text),
                                                c += "</div> ") : (c += ' <div class="text">',
                                                c += o(e.text),
                                                c += "</div> "),
                                            c += " ") : "menu" !== e.type && "related" !== e.type || (c += ' <div class="menu"> ',
                                            e.text_before && (c += ' <div class="menu-tips">',
                                                c += a(e.text_before),
                                                c += "</div> "),
                                                c += " ",
                                            e.items && e.items.length && (c += " <ol>",
                                                r(e.items, function(e, t) {
                                                    c += " <li> ",
                                                        e.link ? (c += ' <a class="menu-item" data-value="',
                                                            c += o(e.value),
                                                            c += '" href="',
                                                            c += o(e.link),
                                                            c += '" target="_blank">',
                                                            c += o(e.text),
                                                            c += "</a> ") : (c += ' <span class="menu-item" data-value="',
                                                            c += o(e.value),
                                                            c += '">',
                                                            c += o(e.text),
                                                            c += "</span> "),
                                                        c += " </li> "
                                                }),
                                                c += '</ol> <div class="menu-tips">点击问题或回复数字查看答案</div> '),
                                                c += " </div> "),
                                        c += " "
                                }),
                                c += " ") : n.content && (c += ' <div class="text">',
                                    c += o(n.content),
                                    c += "</div> "),
                            c += " ",
                        "evaluate" === n.sub_type && (c += ' <div class="rating" data-question-id="',
                            c += o(n.question_id),
                            c += '"> <a href="javascript:;;" class="option" data-option="useful">解决</a> <a href="javascript:;;" class="option" data-option="useless">未解决</a> <span class="rated-text">已反馈</span> <span class="pending-text">提交中</span> <span class="split"></span> </div> '),
                            c += " </div> ") : "rich_text" === n.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                            c += o(n.extra.content),
                            c += "</div> ",
                        "evaluate" === n.sub_type && (c += ' <div class="rating" data-question-id="',
                            c += o(n.question_id),
                            c += '"> <a href="javascript:;;" class="option" data-option="useful">解决</a> <a href="javascript:;;" class="option" data-option="useless">未解决</a> <span class="rated-text">已反馈</span> <span class="pending-text">提交中</span> <span class="split"></span> </div> '),
                            c += " </div> ") : "photo" === n.content_type && (c += ' <div class="photo"> <a href="',
                                c += a(n.media_url),
                                c += '" target="_blank"> ',
                                s > 1 ? (c += ' <img src="',
                                    c += a(n.media_url),
                                    c += '" /> ') : (c += ' <img src="',
                                    c += a(n.media_url),
                                    c += '" onload="window.SCROLL_TO_LAST()" /> '),
                                c += " </a> </div> "),
                        c += " </div> ") : "agent" === n.from_type && (c += ' <div id="',
                            c += a(n.id),
                            c += '" class="msg-agent"> <div class="agent-avatar"> <img src="',
                            c += a(n.agent.avatar),
                            c += '" /> </div> ',
                        n.displayDate && (c += ' <div id="date',
                            c += a(n.id),
                            c += '" class="date">',
                            c += o(n.displayDate),
                            c += "</div> "),
                            c += " ",
                            "welcome" === n.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                c += o(n.content),
                                c += "</div> </div> ") : "text" === n.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                c += o(n.content),
                                c += "</div> </div> ") : "rich_text" === n.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                                c += o(n.extra.content),
                                c += "</div> </div> ") : "photo" === n.content_type ? (c += ' <div class="photo"> <a href="',
                                c += a(n.media_url),
                                c += '" target="_blank"> ',
                                s > 1 ? (c += ' <img src="',
                                    c += a(n.media_url),
                                    c += '" /> ') : (c += ' <img src="',
                                    c += a(n.media_url),
                                    c += '" onload="window.SCROLL_TO_LAST()" /> '),
                                c += " </a> </div> ") : "file" === n.content_type && (c += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                    c += a(n.extra.filename),
                                    c += '">',
                                    c += a(n.extra.filename),
                                    c += '</span> <span class="file-size">',
                                    c += a(n.extra.convert_size),
                                    c += '</span> </div> <div class="sub"> ',
                                    n.extra.cancel ? c += ' <span class="file-state">对方取消发送</span> ' : (c += " ",
                                        l ? c += ' <span class="file-state">抱歉，微信禁止了文件下载</span> ' : (c += " ",
                                            n.extra.has_expired ? (c += ' <span class="file-state">',
                                                c += a(n.extra.has_expired),
                                                c += '后过期</span> <a class="btn-download" name="',
                                                c += a(n.id),
                                                c += ",",
                                                c += a(n.conversation_id),
                                                c += '" href="',
                                                c += a(n.media_url),
                                                c += '" target="_blank"> <i class="icon icon-download"></i> <span>下载</span> </a> ') : c += ' <span class="file-state">已过期</span> ',
                                            c += " "),
                                        c += " "),
                                    c += " </div> </div> </div> "),
                            c += " </div> "),
                        c += " ",
                    "client" === n.from_type && (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-client"> ',
                    n.displayDate && (c += ' <div id="date',
                        c += a(n.id),
                        c += '" class="date">',
                        c += o(n.displayDate),
                        c += "</div> "),
                        c += " ",
                        "text" === n.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow"></span> <div class="text">',
                            c += o(n.content),
                            c += "</div> ",
                        "sending" === n.status && (c += ' <span id="status',
                            c += a(n.id),
                            c += '" class="status icon"></span> '),
                            c += " </div> ") : "photo" === n.content_type ? (c += ' <div class="photo"> <a href="',
                            c += a(n.media_url),
                            c += '" target="_blank"> ',
                            s > 1 ? (c += ' <img id="photo',
                                c += a(n.id),
                                c += '" src="',
                                c += a(n.media_url),
                                c += '" /> ') : (c += ' <img id="photo',
                                c += a(n.id),
                                c += '" src="',
                                c += a(n.media_url),
                                c += '" onload="window.SCROLL_TO_LAST()" /> '),
                            c += " </a> ",
                        "sending" === n.status && (c += ' <span id="status',
                            c += a(n.id),
                            c += '" class="status icon"></span> '),
                            c += " </div> ") : "file" === n.content_type && (c += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                c += a(n.extra.filename),
                                c += '">',
                                c += a(n.extra.filename),
                                c += '</span> <span class="file-size">',
                                c += a(n.extra.convert_size),
                                c += '</span> </div> <div class="sub"> ',
                                n.extra.cancel ? c += ' <span class="file-state">取消上传</span> ' : (c += " ",
                                    n.extra.has_expired ? (c += ' <span class="file-state">',
                                        c += a(n.extra.has_expired),
                                        c += "后过期</span> ") : c += ' <span class="file-state">已过期</span> ',
                                    c += " "),
                                c += " </div> </div> </div> "),
                        c += " </div> "),
                        c += " ",
                    "redirect" === n.from_type && (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-redirect"> 接下来由<span>',
                        c += a(n.toNickname),
                        c += "</span>为您服务 </div> "),
                        c += " ",
                    "evaluation" === n.from_type && (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-evaluation"> 你给出了 <span class="evaluation-level evaluation-level-',
                        c += a(n.level),
                        c += '">',
                        c += a(n.levelText),
                        c += "</span> ",
                    n.content && (c += ' <div class="evaluation-content">',
                        c += a(n.content),
                        c += "</div> "),
                        c += " </div> "),
                        c += " ",
                    "blacklist" === n.from_type && (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-blacklist">你被移出了黑名单</div> '),
                        c += " ",
                        new h(c)
                }),
                o("queueing", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = e.position
                        , r = "";
                    return r += '<div class="queue-header">',
                        r += n(a),
                        r += '</div> <div class="queue-body"> <div class="queue-position-title">当前等待人数</div> <span id="queueingPosition">',
                        r += n(o),
                        r += '</span> </div> <div class="queue-footer"> <p>如果等不及，可以选择</p> <a class="btn-go-ticket">给我们留言</a> </div>',
                        new h(r)
                }),
                o("support", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.disableBrandLink)
                        , a = i.$escape
                        , o = e.entId
                        , r = "";
                    return r += "<a ",
                    n !== !0 && (r += 'href="http://static.meiqia.com/dist/standalone.html?eid=89239&utm_source=widget-badge&utm_term=',
                        r += a(o),
                        r += '"'),
                        r += ' target="_blank"> <i class="icon icon-logo-gray"></i> <span>客服软件由美洽提供</span> </a>',
                        new h(r)
                }),
                o("survey", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.menus)
                        , a = i.$escape
                        , o = i.$each
                        , r = (e.v,
                        e.k,
                        e.inputs)
                        , s = e.val
                        , l = (e.key,
                        e.captcha)
                        , c = "";
                    return "open" === n.status && (c += ' <div id="surveyStep1" class="active"> <div class="step-title">',
                        c += a(n.title),
                        c += "</div> ",
                        o(n.assignments, function(e, t) {
                            c += ' <div class="menus-item"> <a id="',
                                c += a(e.target_kind),
                                c += "_",
                                c += a(e.target),
                                c += '" name="surveyMenus" title="',
                                c += a(e.description),
                                c += '">',
                                c += a(t + 1),
                                c += ". ",
                                c += a(e.description),
                                c += "</a> </div> "
                        }),
                        c += " </div> "),
                        c += " ",
                    "open" === r.status && (c += ' <div id="surveyStep2" ',
                    "close" === n.status && (c += 'class="active"'),
                        c += '> <div class="step-title">',
                        c += a(r.title),
                        c += "</div> ",
                        o(r.fields, function(e, t) {
                            c += " ",
                            e.ignore || (c += ' <div class="form-group"> <div class="group-title">',
                                c += a(e.display_name),
                            e.optional || (c += "<span>*</span>"),
                                c += '</div> <div class="group-content"> ',
                                "text" === e.type ? (c += ' <input name="',
                                    c += a(e.field_name),
                                    c += '" ',
                                    c += e.optional ? 'class="survey-input-text"' : 'class="survey-input-text required"',
                                    c += " ",
                                    c += "tel" === e.field_name || "qq" === e.field_name ? 'type="tel"' : 'type="text"',
                                    c += ' value="',
                                    c += a(s),
                                    c += '" placeholder="请输入" /> ') : "single_choice" === e.type ? (c += " ",
                                    o(e.choices, function(t, i) {
                                        c += ' <div class="choice-item"> <label> <input name="',
                                            c += a(e.field_name),
                                            c += '" ',
                                        e.optional || (c += 'class="required"'),
                                            c += ' type="radio" value="',
                                            c += a(t),
                                            c += '" /> <span>',
                                            c += a(t),
                                            c += "</span> </label> </div> "
                                    }),
                                    c += " ") : "multiple_choice" === e.type && (c += " ",
                                        o(e.choices, function(t, i) {
                                            c += ' <div class="choice-item"> <label> <input name="',
                                                c += a(e.field_name),
                                                c += '" ',
                                            e.optional || (c += 'class="required"'),
                                                c += ' type="checkbox" value="',
                                                c += a(t),
                                                c += '" /> <span>',
                                                c += a(t),
                                                c += "</span> </label> </div> "
                                        }),
                                        c += " "),
                                c += " </div> </div> "),
                                c += " "
                        }),
                        c += " ",
                    l && (c += ' <div class="captcha-group"> <div class="group-title">验证码<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="surveyCaptcha" class="required" type="text" /> </div> <div class="captcha-img"> <img id="surveyCaptchaImg" src="" /> </div> </div> </div> '),
                        c += ' <div class="btn-group"> <a id="surveySubmit">提交</a> </div> </div> '),
                        new h(c)
                }),
                o("ticket", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.intro)
                        , a = i.$escape
                        , o = e.categories
                        , r = i.$each
                        , s = (e.val,
                        e.key,
                        i.$string)
                        , l = e.name
                        , c = e.contactRule
                        , p = e.tel
                        , d = e.email
                        , u = e.wechat
                        , f = e.qq
                        , v = e.defaultTemplate
                        , g = e.defaultTemplateContent
                        , m = e.captcha
                        , b = "";
                    return b += '<div id="ticketV2" class="active"> ',
                    n && (b += ' <div class="step-title">',
                        b += a(n),
                        b += "</div> "),
                        b += " ",
                    o && o.length > 0 && (b += ' <div class="form-group"> <div class="group-title">分类<span>*</span></div> <div class="group-content"> ',
                        r(o, function(e, t) {
                            b += ' <div class="choice-item"> <label> <input name="categories" type="radio" value="',
                                b += s(e.id),
                                b += '" /> <span>',
                                b += s(e.name),
                                b += "</span> </label> </div> "
                        }),
                        b += " </div> </div> "),
                        b += " ",
                    "open" === l && (b += ' <div class="form-group"> <div class="group-title"> 姓名 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketName" type="text" placeholder=" 请输入姓名"> </div> </div> '),
                        b += " ",
                    "open" === p && (b += ' <div class="form-group"> <div class="group-title"> 手机 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketTel" type="text" placeholder=" 请输入手机号"> </div> </div> '),
                        b += " ",
                    "open" === d && (b += ' <div class="form-group"> <div class="group-title"> 邮箱 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketEmail" type="text" placeholder=" 请输入邮箱"> </div> </div> '),
                        b += " ",
                    "open" === u && (b += ' <div class="form-group"> <div class="group-title"> 微信 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketWechat" type="text" placeholder=" 请输入微信号"> </div> </div> '),
                        b += " ",
                    "open" === f && (b += ' <div class="form-group"> <div class="group-title"> QQ ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketQq" type="text" placeholder=" 请输入QQ号"> </div> </div> '),
                        b += ' <div class="form-group"> <div class="group-title">留言内容<span>*</span></div> <div class="group-content"> ',
                        "open" === v ? (b += ' <textarea id="ticketContent" placeholder="请输入留言内容">',
                            b += a(g),
                            b += "</textarea> ") : b += ' <textarea id="ticketContent" placeholder="请输入留言内容"></textarea> ',
                        b += " </div> </div> ",
                    "open" === m && (b += ' <div class="captcha-group"> <div class="group-title">验证码<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="ticketCaptcha" class="required" type="text" placeholder=" 请输入右侧验证码"/> </div> <div class="captcha-img"> <img id="ticketCaptchaImg" src="" /> </div> </div> </div> '),
                        b += ' <div class="btn-group"> <a id="ticketSubmit">提交</a> </div> </div> ',
                        new h(b)
                }),
                o("unable-service", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.src
                        , o = "";
                    return o += '<img src="',
                        o += n(a),
                        o += '"> <div>客服繁忙或已离线，给我们留言吧</div> <a class="btn-go-ticket">给我们留言</a>',
                        new h(o)
                }),
                o("icon-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = "";
                    return r += ".icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mobile.png?v=",
                        r += n(o),
                        r += "'); background-size: 44px auto; background-repeat: no-repeat; } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji.png?v=",
                        r += n(o),
                        r += "'); background-size: 25px auto; background-repeat: no-repeat; } .back-button span { width: 12px; height: 22px; background: url('",
                        r += n(a),
                        r += "/images/icon-mobile.png?v=",
                        r += n(o),
                        r += "') no-repeat -26px -440px; } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { .icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mobile@2x.png?v=",
                        r += n(o),
                        r += "'); } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji@2x.png?v=",
                        r += n(o),
                        r += "'); } .back-button span { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mobile@2x.png?v=",
                        r += n(o),
                        r += "'); background-size: 44px 462px; } } ",
                        new h(r)
                }),
                o("theme-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.textColor
                        , r = e.subTextColor
                        , s = e.color2
                        , l = "";
                    return l += "#pageChat .header, #pageTicket .header, #pageCall .header, #pageSurvey .header { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #agentInputting { background-color: ",
                        l += n(a),
                        l += "; } #pageChat .agent-signature { color: ",
                        l += n(r),
                        l += " } #pageChat .header #headRight { background-color: ",
                        l += n(a),
                        l += "; } #pageChat .msg-client .bubble { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .bubble a { color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .arrow { border-left: 6px solid ",
                        l += n(a),
                        l += "; } #pageChat #evaluationSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #queueingTips .queue-position-title { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips #queueingPosition { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += '; } #pageChat .body .msg-bot .bubble .menu-item, #pageChat .body .msg-bot .bubble a, #pageChat .body .msg-agent .bubble a, #pageSurvey .body .menus-item > a, #pageChat .body .msg-bot .rating a, #pageChat .body .msg-bot div.rich-text-bubble a, #pageChat .body .msg-agent div.rich-text-bubble a, #pageChat .body .msg-common-tips a, #autocomplete li em, #autocomplete li a[data-current="true"] { color: #6088e6; /*color: ',
                        l += n(a),
                        l += ";*/ } #autocomplete li a:hover { background-color: ",
                        l += n(a),
                        l += "; } ",
                        l += "white" === s ? " .icon-tel { background-position: -22px -66px; } .icon-angel-down { background-position: -22px -89px; } " : " .icon-tel { background-position: 0 -66px; } .icon-angel-down { background-position: 0 -89px; } ",
                        l += " #pageChat .footer .input-holder .text-holder #btnSend.active { color: ",
                        l += n(a),
                        l += "; } #pageChat #unableService .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageTicket #ticketSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageTicket #ticketDone { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageCall .input-active { border-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-active { background-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-intro { color: ",
                        l += n(a),
                        l += "; } #pageCall .call-success-icon { background-color: ",
                        l += n(a),
                        l += "; } #pageSurvey .menus-item >a { color: ",
                        l += n(a),
                        l += "; } #pageSurvey #surveySubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } ",
                        new h(l)
                })
        }()
    }
    , function(e, t, i) {
        var n, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function() {
            function o(e, t) {
                return (/string|function/.test("undefined" == typeof t ? "undefined" : a(t)) ? u : d)(e, t)
            }
            function r(e, t) {
                return "string" != typeof e && (t = "undefined" == typeof e ? "undefined" : a(e),
                    "number" === t ? e += "" : e = "function" === t ? r(e.call(e)) : ""),
                    e
            }
            function s(e) {
                return g[e]
            }
            function l(e) {
                return r(e).replace(/&(?![\w#]+;)|[<>"']/g, s)
            }
            function c(e, t) {
                if (m(e))
                    for (var i = 0, n = e.length; i < n; i++)
                        t.call(e, e[i], i, e);
                else
                    for (i in e)
                        t.call(e, e[i], i)
            }
            function p(e, t) {
                var i = /(\/)[^\/]+\1\.\.\1/
                    , n = ("./" + e).replace(/[^\/]+$/, "")
                    , a = n + t;
                for (a = a.replace(/\/\.\//g, "/"); a.match(i); )
                    a = a.replace(i, "/");
                return a
            }
            function d(e, t) {
                var i = o.get(e) || f({
                        filename: e,
                        name: "Render Error",
                        message: "Template not found"
                    });
                return t ? i(t) : i
            }
            function u(e, t) {
                if ("string" == typeof t) {
                    var i = t;
                    t = function() {
                        return new h(i)
                    }
                }
                var n = v[e] = function(i) {
                        try {
                            return new t(i,e) + ""
                        } catch (n) {
                            return f(n)()
                        }
                    }
                ;
                return n.prototype = t.prototype = b,
                    n.toString = function() {
                        return t + ""
                    }
                    ,
                    n
            }
            function f(e) {
                var t = "{Template Error}"
                    , i = e.stack || "";
                if (i)
                    i = i.split("\n").slice(0, 2).join("\n");
                else
                    for (var n in e)
                        i += "<" + n + ">\n" + e[n] + "\n\n";
                return function() {
                    return "object" === ("undefined" == typeof console ? "undefined" : a(console)) && console.error(t + "\n\n" + i),
                        t
                }
            }
            var v = o.cache = {}
                , h = this.String
                , g = {
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "&": "&#38;"
            }
                , m = Array.isArray || function(e) {
                    return "[object Array]" === {}.toString.call(e)
                }
                , b = o.utils = {
                $helpers: {},
                $include: function(e, t, i) {
                    return e = p(i, e),
                        d(e, t)
                },
                $string: r,
                $escape: l,
                $each: c
            }
                , I = o.helpers = b.$helpers;
            o.get = function(e) {
                return v[e.replace(/^\.\//, "")]
            }
                ,
                o.helper = function(e, t) {
                    I[e] = t
                }
                ,
                n = function() {
                    return o
                }
                    .call(t, i, t, e),
                !(void 0 !== n && (e.exports = n)),
                o("chat-has-end", 'Conversation has ended<a class="btn-restart-chat">conversation</a>or<a class="btn-go-ticket">message</a>'),
                o("emoji", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.list
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = "";
                    return n(a, function(e, t) {
                        r += ' <i class="emoji-control emoji-',
                            r += o(e),
                            r += '" onclick="window.CHOSE_EMOJI(\':',
                            r += o(e),
                            r += ":')\"></i> "
                    }),
                        r += ' <div class="clearfix"></div>',
                        new h(r)
                }),
                o("evaluation", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = "";
                    return o += '<div class="evaluation-header"> <a id="evaluationHide"> <i class="icon icon-times"></i> </a> <div class="intro">',
                        o += n(a),
                        o += '</div> </div> <div class="evaluation-body"> <div class="evaluation-btn-group"> <input id="evaluationLevel" type="hidden" /> <div id="evaluation2" class="evaluation-btn"> <i class="icon icon-smile"></i> <span>satisfied</span> </div> <div id="evaluation1" class="evaluation-btn"> <i class="icon icon-neutral"></i> <span>Normal</span> </div> <div id="evaluation0" class="evaluation-btn"> <i class="icon icon-angry"></i> <span>Dissatisfied</span> </div> </div> <div class="evaluation-reason"> <textarea id="evaluationContent" placeholder="Please fill in the evaluation(selectivity)"></textarea> <button id="evaluationSubmit">submit</button> </div> </div> ',
                        new h(o)
                }),
                o("features", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.emoji)
                        , a = e.photo
                        , o = e.evaluation
                        , r = "";
                    return n && (r += ' <a id="emojiBtn" class="feature-btn" title="Emoji"> <i class="icon icon-emoji"></i> </a> '),
                        r += " ",
                    a && (r += ' <label id="photoBtn" for="photoFile" class="feature-btn" title="Picture"> <i class="icon icon-photo"></i> <input id="photoFile" type="file" accept="image/gif, image/jpeg, image/jpg, image/png"> </label> '),
                        r += " ",
                    o && (r += ' <a id="evaluationBtn" class="feature-btn" title="Service evaluation"> <i class="icon icon-evaluation"></i> </a> '),
                        new h(r)
                }),
                o("header-loading", '<div id="loading"> connecting<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span> </div>'),
                o("header", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.signature)
                        , a = i.$escape
                        , o = e.name
                        , r = "";
                    return r += '<div class="agent-info"> <div class="agent-name ',
                    n || (r += "without-signature"),
                        r += '"> ',
                        r += a(o),
                        r += ' <span id="agentInputting">The other party enters the message...</span> </div> ',
                    n && (r += ' <div class="agent-signature" title="',
                        r += a(n),
                        r += '">',
                        r += a(n),
                        r += "</div> "),
                        r += " </div>",
                        new h(r)
                }),
                o("msg-new", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.info
                        , o = i.$each
                        , r = e.content
                        , s = (e.msg,
                        e.k,
                        i.$string)
                        , l = (e.item,
                        e.mk,
                        "");
                    return l += '<div id="',
                        l += n(a.id),
                        l += '" class="msg-bot"> <div class="agent-avatar"> <img src="',
                        l += n(a.agent.avatar),
                        l += '" /> </div> <div class="name"> ',
                        l += n(a.agent.nickname),
                        l += " ",
                    a.displayDate && (l += ' <span id="date',
                        l += n(a.id),
                        l += '" class="date">',
                        l += n(a.displayDate),
                        l += "</span> "),
                        l += ' </div> <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> ',
                        o(r, function(e, t) {
                            l += " ",
                            "text" === e.type && (l += ' <div class="text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "txt" === e.type && (l += ' <div class="text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "rich_text" === e.type && (l += ' <div class="text rich_text"> ',
                                l += s(e.body),
                                l += " </div> "),
                                l += " ",
                            "choices" === e.type && (l += ' <div class="menu"> ',
                            e.body.choices && e.body.choices.length && (l += " <ol> ",
                                o(e.body.choices, function(e, t) {
                                    l += ' <li> <span class="menu-item" data-value="',
                                        l += s(e),
                                        l += '">',
                                        l += s(e),
                                        l += "</span> </li> "
                                }),
                                l += ' </ol> <div class="menu-tips">Select the question or reply the question to get solve your problem.</div> '),
                                l += " </div> "),
                                l += " "
                        }),
                        l += " </div> </div> ",
                        new h(l)
                }),
                o("msg", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.v)
                        , a = i.$escape
                        , o = i.$string
                        , r = i.$each
                        , s = (e.rv,
                        e.rk,
                        e.mv,
                        e.mk,
                        e.historyTimes)
                        , l = e.weixin
                        , c = "";
                    return "bot" === n.from_type ? (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-bot"> <div class="agent-avatar"> <img src="',
                        c += a(n.agent.avatar),
                        c += '" /> </div> ',
                    n.displayDate && (c += ' <div id="date',
                        c += a(n.id),
                        c += '" class="date">',
                        c += o(n.displayDate),
                        c += "</div> "),
                        c += " ",
                        "welcome" === n.content_type ? (c += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text"> ',
                            c += o(n.content),
                            c += " </div> </div> ") : "text" === n.content_type || "bot" === n.content_type ? (c += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> ',
                            n.content_robot && n.content_robot.length ? (c += " ",
                                r(n.content_robot, function(e, t) {
                                    c += " ",
                                        "text" === e.type ? (c += " ",
                                            e.rich_text ? (c += ' <div class="text rich-text">',
                                                c += o(e.rich_text),
                                                c += "</div> ") : (c += ' <div class="text">',
                                                c += o(e.text),
                                                c += "</div> "),
                                            c += " ") : "menu" !== e.type && "related" !== e.type || (c += ' <div class="menu"> ',
                                            e.text_before && (c += ' <div class="menu-tips">',
                                                c += a(e.text_before),
                                                c += "</div> "),
                                                c += " ",
                                            e.items && e.items.length && (c += " <ol>",
                                                r(e.items, function(e, t) {
                                                    c += " <li> ",
                                                        e.link ? (c += ' <a class="menu-item" data-value="',
                                                            c += o(e.value),
                                                            c += '" href="',
                                                            c += o(e.link),
                                                            c += '" target="_blank">',
                                                            c += o(e.text),
                                                            c += "</a> ") : (c += ' <span class="menu-item" data-value="',
                                                            c += o(e.value),
                                                            c += '">',
                                                            c += o(e.text),
                                                            c += "</span> "),
                                                        c += " </li> "
                                                }),
                                                c += '</ol> <div class="menu-tips">Select the question or reply the number to get solve your problem.</div> '),
                                                c += " </div> "),
                                        c += " "
                                }),
                                c += " ") : n.content && (c += ' <div class="text">',
                                    c += o(n.content),
                                    c += "</div> "),
                            c += " ",
                        "evaluate" === n.sub_type && (c += ' <div class="rating" data-question-id="',
                            c += o(n.question_id),
                            c += '"> <a href="javascript:;;" class="option" data-option="useful">Solve</a> <a href="javascript:;;" class="option" data-option="useless">Unsolve</a> <span class="rated-text">Feedback</span> <span class="pending-text">Submit</span> <span class="split"></span> </div> '),
                            c += " </div> ") : "rich_text" === n.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                            c += o(n.extra.content),
                            c += "</div> ",
                        "evaluate" === n.sub_type && (c += ' <div class="rating" data-question-id="',
                            c += o(n.question_id),
                            c += '"> <a href="javascript:;;" class="option" data-option="useful">Solve</a> <a href="javascript:;;" class="option" data-option="useless">Unsolve</a> <span class="rated-text">Feedback</span> <span class="pending-text">Submit</span> <span class="split"></span> </div> '),
                            c += " </div> ") : "photo" === n.content_type && (c += ' <div class="photo"> <a href="',
                                c += a(n.media_url),
                                c += '" target="_blank"> ',
                                s > 1 ? (c += ' <img src="',
                                    c += a(n.media_url),
                                    c += '" /> ') : (c += ' <img src="',
                                    c += a(n.media_url),
                                    c += '" onload="window.SCROLL_TO_LAST()" /> '),
                                c += " </a> </div> "),
                        c += " </div> ") : "agent" === n.from_type && (c += ' <div id="',
                            c += a(n.id),
                            c += '" class="msg-agent"> <div class="agent-avatar"> <img src="',
                            c += a(n.agent.avatar),
                            c += '" /> </div> ',
                        n.displayDate && (c += ' <div id="date',
                            c += a(n.id),
                            c += '" class="date">',
                            c += o(n.displayDate),
                            c += "</div> "),
                            c += " ",
                            "welcome" === n.content_type ? (c += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                c += o(n.content),
                                c += "</div> </div> ") : "text" === n.content_type ? (c += ' <div class="bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                c += o(n.content),
                                c += "</div> </div> ") : "rich_text" === n.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                                c += o(n.extra.content),
                                c += "</div> </div> ") : "photo" === n.content_type ? (c += ' <div class="photo"> <a href="',
                                c += a(n.media_url),
                                c += '" target="_blank"> ',
                                s > 1 ? (c += ' <img src="',
                                    c += a(n.media_url),
                                    c += '" /> ') : (c += ' <img src="',
                                    c += a(n.media_url),
                                    c += '" onload="window.SCROLL_TO_LAST()" /> '),
                                c += " </a> </div> ") : "file" === n.content_type && (c += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                    c += a(n.extra.filename),
                                    c += '">',
                                    c += a(n.extra.filename),
                                    c += '</span> <span class="file-size">',
                                    c += a(n.extra.convert_size),
                                    c += '</span> </div> <div class="sub"> ',
                                    n.extra.cancel ? c += ' <span class="file-state">The other party cancels sending</span> ' : (c += " ",
                                        l ? c += ' <span class="file-state">Sorry, microblogging prohibits file download</span> ' : (c += " ",
                                            n.extra.has_expired ? (c += ' <span class="file-state">Expires after',
                                                c += a(n.extra.has_expired),
                                                c += '</span> <a class="btn-download" name="',
                                                c += a(n.id),
                                                c += ",",
                                                c += a(n.conversation_id),
                                                c += '" href="',
                                                c += a(n.media_url),
                                                c += '" target="_blank"> <i class="icon icon-download"></i> <span>download</span> </a> ') : c += ' <span class="file-state">expired</span> ',
                                            c += " "),
                                        c += " "),
                                    c += " </div> </div> </div> "),
                            c += " </div> "),
                        c += " ",
                    "client" === n.from_type && (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-client"> ',
                    n.displayDate && (c += ' <div id="date',
                        c += a(n.id),
                        c += '" class="date">',
                        c += o(n.displayDate),
                        c += "</div> "),
                        c += " ",
                        "text" === n.content_type ? (c += ' <div class="bubble"> <span class="arrow"></span> <div class="text">',
                            c += o(n.content),
                            c += "</div> ",
                        "sending" === n.status && (c += ' <span id="status',
                            c += a(n.id),
                            c += '" class="status icon"></span> '),
                            c += " </div> ") : "photo" === n.content_type ? (c += ' <div class="photo"> <a href="',
                            c += a(n.content),
                            c += '" target="_blank"> ',
                            s > 1 ? (c += ' <img id="photo',
                                c += a(n.id),
                                c += '" src="',
                                c += a(n.media_url),
                                c += '" /> ') : (c += ' <img id="photo',
                                c += a(n.id),
                                c += '" src="',
                                c += a(n.media_url),
                                c += '" onload="window.SCROLL_TO_LAST()" /> '),
                            c += " </a> ",
                        "sending" === n.status && (c += ' <span id="status',
                            c += a(n.id),
                            c += '" class="status icon"></span> '),
                            c += " </div> ") : "file" === n.content_type && (c += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                c += a(n.extra.filename),
                                c += '">',
                                c += a(n.extra.filename),
                                c += '</span> <span class="file-size">',
                                c += a(n.extra.convert_size),
                                c += '</span> </div> <div class="sub"> ',
                                n.extra.cancel ? c += ' <span class="file-state">Cancel upload</span> ' : (c += " ",
                                    n.extra.has_expired ? (c += ' <span class="file-state">Expires after',
                                        c += a(n.extra.has_expired),
                                        c += "</span> ") : c += ' <span class="file-state">expired</span> ',
                                    c += " "),
                                c += " </div> </div> </div> "),
                        c += " </div> "),
                        c += " ",
                    "redirect" === n.from_type && (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-redirect"> Next by the<span>',
                        c += a(n.toNickname),
                        c += "</span>to serve you </div> "),
                        c += " ",
                    "evaluation" === n.from_type && (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-evaluation"> You are given <span class="evaluation-level evaluation-level-',
                        c += a(n.level),
                        c += '">',
                        c += a(n.levelText),
                        c += "</span> ",
                    n.content && (c += ' <div class="evaluation-content">',
                        c += a(n.content),
                        c += "</div> "),
                        c += " </div> "),
                        c += " ",
                    "blacklist" === n.from_type && (c += ' <div id="',
                        c += a(n.id),
                        c += '" class="msg-blacklist">You are removed from the blacklist</div> '),
                        c += " ",
                        new h(c)
                }),
                o("queueing", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = e.position
                        , r = "";
                    return r += '<div class="queue-header">',
                        r += n(a),
                        r += '</div> <div class="queue-body"> <div class="queue-position-title">Number of visitors waiting</div> <span id="queueingPosition">',
                        r += n(o),
                        r += '</span> </div> <div class="queue-footer"> <p>Don’t want to wait? Leave us a message.</p> <a class="btn-go-ticket">Leave us a message</a> </div>',
                        new h(r)
                }),
                o("support", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.disableBrandLink)
                        , a = i.$escape
                        , o = e.entId
                        , r = "";
                    return r += "<a ",
                    n !== !0 && (r += 'href="http://static.meiqia.com/dist/standalone.html?eid=89239&utm_source=widget-badge&utm_term=',
                        r += a(o),
                        r += '"'),
                        r += ' target="_blank"> <i class="icon icon-logo-gray"></i> <span>Customer service software provided by the Meiqia</span> </a>',
                        new h(r)
                }),
                o("survey", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.menus)
                        , a = i.$escape
                        , o = i.$each
                        , r = (e.v,
                        e.k,
                        e.inputs)
                        , s = e.val
                        , l = (e.key,
                        e.captcha)
                        , c = "";
                    return "open" === n.status && (c += ' <div id="surveyStep1" class="active"> <!--<div class="step-title">',
                        c += a(n.title),
                        c += '</div>--> <div class="step-title">Inquiry</div> ',
                        o(n.assignments, function(e, t) {
                            c += ' <div class="menus-item"> <a id="',
                                c += a(e.target_kind),
                                c += "_",
                                c += a(e.target),
                                c += '" name="surveyMenus" title="',
                                c += a(e.description),
                                c += '">',
                                c += a(t + 1),
                                c += ". ",
                                c += a(e.description),
                                c += "</a> </div> "
                        }),
                        c += " </div> "),
                        c += " ",
                    "open" === r.status && (c += ' <div id="surveyStep2" ',
                    "close" === n.status && (c += 'class="active"'),
                        c += '> <!--<div class="step-title">',
                        c += a(r.title),
                        c += '</div>--> <div class="step-title">Inquiry</div> ',
                        o(r.fields, function(e, t) {
                            c += " ",
                            e.ignore || (c += ' <div class="form-group"> <div class="group-title">',
                                c += a(e.field_name),
                            e.optional || (c += "<span>*</span>"),
                                c += '</div> <div class="group-content"> ',
                                "text" === e.type ? (c += ' <input name="',
                                    c += a(e.field_name),
                                    c += '" ',
                                    c += e.optional ? 'class="survey-input-text"' : 'class="survey-input-text required"',
                                    c += " ",
                                    c += "tel" === e.field_name || "qq" === e.field_name ? 'type="tel"' : 'type="text"',
                                    c += ' value="',
                                    c += a(s),
                                    c += '" placeholder="Please enter" /> ') : "single_choice" === e.type ? (c += " ",
                                    o(e.choices, function(t, i) {
                                        c += ' <div class="choice-item"> <label> <input name="',
                                            c += a(e.field_name),
                                            c += '" ',
                                        e.optional || (c += 'class="required"'),
                                            c += ' type="radio" value="',
                                            c += a(t),
                                            c += '" /> <span>',
                                            c += a(t),
                                            c += "</span> </label> </div> "
                                    }),
                                    c += " ") : "multiple_choice" === e.type && (c += " ",
                                        o(e.choices, function(t, i) {
                                            c += ' <div class="choice-item"> <label> <input name="',
                                                c += a(e.field_name),
                                                c += '" ',
                                            e.optional || (c += 'class="required"'),
                                                c += ' type="checkbox" value="',
                                                c += a(t),
                                                c += '" /> <span>',
                                                c += a(t),
                                                c += "</span> </label> </div> "
                                        }),
                                        c += " "),
                                c += " </div> </div> "),
                                c += " "
                        }),
                        c += " ",
                    l && (c += ' <div class="captcha-group"> <div class="group-title">Verification Code<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="surveyCaptcha" class="required" type="text" /> </div> <div class="captcha-img"> <img id="surveyCaptchaImg" src="" /> </div> </div> </div> '),
                        c += ' <div class="btn-group"> <a id="surveySubmit">Submit</a> </div> </div> '),
                        new h(c)
                }),
                o("ticket", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.intro)
                        , a = i.$escape
                        , o = e.categories
                        , r = i.$each
                        , s = (e.val,
                        e.key,
                        i.$string)
                        , l = e.name
                        , c = e.contactRule
                        , p = e.tel
                        , d = e.email
                        , u = e.wechat
                        , f = e.qq
                        , v = e.defaultTemplate
                        , g = e.defaultTemplateContent
                        , m = e.captcha
                        , b = "";
                    return b += '<div id="ticketV2" class="active"> ',
                    n && (b += ' <div class="step-title">',
                        b += a(n),
                        b += "</div> "),
                        b += " ",
                    o && o.length > 0 && (b += ' <div class="form-group"> <div class="group-title">classification<span>*</span></div> <div class="group-content"> ',
                        r(o, function(e, t) {
                            b += ' <div class="choice-item"> <label> <input name="categories" type="radio" value="',
                                b += s(e.id),
                                b += '" /> <span>',
                                b += s(e.name),
                                b += "</span> </label> </div> "
                        }),
                        b += " </div> </div> "),
                        b += " ",
                    "open" === l && (b += ' <div class="form-group"> <div class="group-title"> name ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketName" type="text" placeholder=" Please enter your name"> </div> </div> '),
                        b += " ",
                    "open" === p && (b += ' <div class="form-group"> <div class="group-title"> Phone number ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketTel" type="text" placeholder=" Please enter your phone number"> </div> </div> '),
                        b += " ",
                    "open" === d && (b += ' <div class="form-group"> <div class="group-title"> Email ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketEmail" type="text" placeholder=" Please enter your email"> </div> </div> '),
                        b += " ",
                    "open" === u && (b += ' <div class="form-group"> <div class="group-title"> weChat ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketWechat" type="text" placeholder=" Please enter your weChat number"> </div> </div> '),
                        b += " ",
                    "open" === f && (b += ' <div class="form-group"> <div class="group-title"> QQ ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketQq" type="text" placeholder=" Please enter your QQ number"> </div> </div> '),
                        b += ' <div class="form-group"> <div class="group-title">Message<span>*</span></div> <div class="group-content"> ',
                        "open" === v ? (b += ' <textarea id="ticketContent" placeholder="Please enter a message">',
                            b += a(g),
                            b += "</textarea> ") : b += ' <textarea id="ticketContent" placeholder="Please enter a message"></textarea> ',
                        b += " </div> </div> ",
                    "open" === m && (b += ' <div class="captcha-group"> <div class="group-title">Verification Code<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="ticketCaptcha" class="required" type="text" placeholder=" Verification Code"/> </div> <div class="captcha-img"> <img id="ticketCaptchaImg" src="" /> </div> </div> </div> '),
                        b += ' <div class="btn-group"> <a id="ticketSubmit">submit</a> </div> </div> ',
                        new h(b)
                }),
                o("unable-service", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.src
                        , o = "";
                    return o += '<img src="',
                        o += n(a),
                        o += '"> <div>Sorry, Our Customer Service is busy, please leave us a message</div> <a class="btn-go-ticket">Leave us a messagee</a>',
                        new h(o)
                }),
                o("icon-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = "";
                    return r += ".icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mobile.png?v=",
                        r += n(o),
                        r += "'); background-size: 44px auto; background-repeat: no-repeat; } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji.png?v=",
                        r += n(o),
                        r += "'); background-size: 25px auto; background-repeat: no-repeat; } .back-button span { width: 12px; height: 22px; background: url('",
                        r += n(a),
                        r += "/images/icon-mobile.png?v=",
                        r += n(o),
                        r += "') no-repeat -26px -440px; } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { .icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mobile@2x.png?v=",
                        r += n(o),
                        r += "'); } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji@2x.png?v=",
                        r += n(o),
                        r += "'); } .back-button span { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mobile@2x.png?v=",
                        r += n(o),
                        r += "'); background-size: 44px 462px; } } ",
                        new h(r)
                }),
                o("theme-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.textColor
                        , r = e.subTextColor
                        , s = e.color2
                        , l = "";
                    return l += "#pageChat .header, #pageTicket .header, #pageCall .header, #pageSurvey .header { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #agentInputting { background-color: ",
                        l += n(a),
                        l += "; } #pageChat .agent-signature { color: ",
                        l += n(r),
                        l += " } #pageChat .header #headRight { background-color: ",
                        l += n(a),
                        l += "; } #pageChat .msg-client .bubble { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .bubble a { color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .arrow { border-left: 6px solid ",
                        l += n(a),
                        l += "; } #pageChat #evaluationSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #queueingTips .queue-position-title { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips #queueingPosition { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += '; } #pageChat .body .msg-bot .bubble .menu-item, #pageChat .body .msg-bot .bubble a, #pageChat .body .msg-agent .bubble a, #pageSurvey .body .menus-item > a, #pageChat .body .msg-bot .rating a, #pageChat .body .msg-bot div.rich-text-bubble a, #pageChat .body .msg-agent div.rich-text-bubble a, #pageChat .body .msg-common-tips a, #autocomplete li em, #autocomplete li a[data-current="true"] { color: #6088e6; /*color: ',
                        l += n(a),
                        l += ";*/ } #autocomplete li a:hover { background-color: ",
                        l += n(a),
                        l += "; } ",
                        l += "white" === s ? " .icon-tel { background-position: -22px -66px; } .icon-angel-down { background-position: -22px -89px; } " : " .icon-tel { background-position: 0 -66px; } .icon-angel-down { background-position: 0 -89px; } ",
                        l += " #pageChat .footer .input-holder .text-holder #btnSend.active { color: ",
                        l += n(a),
                        l += "; } #pageChat #unableService .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageTicket #ticketSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageTicket #ticketDone { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageCall .input-active { border-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-active { background-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-intro { color: ",
                        l += n(a),
                        l += "; } #pageCall .call-success-icon { background-color: ",
                        l += n(a),
                        l += "; } #pageSurvey .menus-item >a { color: ",
                        l += n(a),
                        l += "; } #pageSurvey #surveySubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } ",
                        new h(l)
                })
        }()
    }
    , function(e, t, i) {
        var n, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        !function() {
            function o(e, t) {
                return (/string|function/.test("undefined" == typeof t ? "undefined" : a(t)) ? u : d)(e, t)
            }
            function r(e, t) {
                return "string" != typeof e && (t = "undefined" == typeof e ? "undefined" : a(e),
                    "number" === t ? e += "" : e = "function" === t ? r(e.call(e)) : ""),
                    e
            }
            function s(e) {
                return g[e]
            }
            function l(e) {
                return r(e).replace(/&(?![\w#]+;)|[<>"']/g, s)
            }
            function c(e, t) {
                if (m(e))
                    for (var i = 0, n = e.length; i < n; i++)
                        t.call(e, e[i], i, e);
                else
                    for (i in e)
                        t.call(e, e[i], i)
            }
            function p(e, t) {
                var i = /(\/)[^\/]+\1\.\.\1/
                    , n = ("./" + e).replace(/[^\/]+$/, "")
                    , a = n + t;
                for (a = a.replace(/\/\.\//g, "/"); a.match(i); )
                    a = a.replace(i, "/");
                return a
            }
            function d(e, t) {
                var i = o.get(e) || f({
                        filename: e,
                        name: "Render Error",
                        message: "Template not found"
                    });
                return t ? i(t) : i
            }
            function u(e, t) {
                if ("string" == typeof t) {
                    var i = t;
                    t = function() {
                        return new h(i)
                    }
                }
                var n = v[e] = function(i) {
                        try {
                            return new t(i,e) + ""
                        } catch (n) {
                            return f(n)()
                        }
                    }
                ;
                return n.prototype = t.prototype = b,
                    n.toString = function() {
                        return t + ""
                    }
                    ,
                    n
            }
            function f(e) {
                var t = "{Template Error}"
                    , i = e.stack || "";
                if (i)
                    i = i.split("\n").slice(0, 2).join("\n");
                else
                    for (var n in e)
                        i += "<" + n + ">\n" + e[n] + "\n\n";
                return function() {
                    return "object" === ("undefined" == typeof console ? "undefined" : a(console)) && console.error(t + "\n\n" + i),
                        t
                }
            }
            var v = o.cache = {}
                , h = this.String
                , g = {
                "<": "&#60;",
                ">": "&#62;",
                '"': "&#34;",
                "'": "&#39;",
                "&": "&#38;"
            }
                , m = Array.isArray || function(e) {
                    return "[object Array]" === {}.toString.call(e)
                }
                , b = o.utils = {
                $helpers: {},
                $include: function(e, t, i) {
                    return e = p(i, e),
                        d(e, t)
                },
                $string: r,
                $escape: l,
                $each: c
            }
                , I = o.helpers = b.$helpers;
            o.get = function(e) {
                return v[e.replace(/^\.\//, "")]
            }
                ,
                o.helper = function(e, t) {
                    I[e] = t
                }
                ,
                n = function() {
                    return o
                }
                    .call(t, i, t, e),
                !(void 0 !== n && (e.exports = n)),
                o("chat-has-end", '對話已結束，您可以<a class="btn-restart-chat">開始新的對話</a>或<a class="btn-go-ticket">留言</a> '),
                o("emoji", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.list
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = "";
                    return n(a, function(e, t) {
                        r += ' <i class="emoji-control emoji-',
                            r += o(e),
                            r += '" onclick="window.CHOSE_EMOJI(\':',
                            r += o(e),
                            r += ":')\"></i> "
                    }),
                        r += ' <div class="clearfix"></div>',
                        new h(r)
                }),
                o("evaluation", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = "";
                    return o += '<div class="evaluation-header"> <a id="evaluationHide"> <i class="icon icon-times"></i> </a> <div class="intro">',
                        o += n(a),
                        o += '</div> </div> <div class="evaluation-body"> <div class="evaluation-btn-group"> <input id="evaluationLevel" type="hidden" /> <div id="evaluation2" class="evaluation-btn"> <i class="icon icon-smile"></i> <span>好評</span> </div> <div id="evaluation1" class="evaluation-btn"> <i class="icon icon-neutral"></i> <span>中評</span> </div> <div id="evaluation0" class="evaluation-btn"> <i class="icon icon-angry"></i> <span>差評</span> </div> </div> <div class="evaluation-reason"> <textarea id="evaluationContent" placeholder="請填寫評價內容（選填）"></textarea> <button id="evaluationSubmit">提交</button> </div> </div> ',
                        new h(o)
                }),
                o("features", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.emoji)
                        , a = e.photo
                        , o = e.evaluation
                        , r = "";
                    return n && (r += ' <a id="emojiBtn" class="feature-btn" title="表情"> <i class="icon icon-emoji"></i> </a> '),
                        r += " ",
                    a && (r += ' <label id="photoBtn" for="photoFile" class="feature-btn" title="發送圖片"> <i class="icon icon-photo"></i> <input id="photoFile" type="file" accept="image/gif, image/jpeg, image/jpg, image/png"> </label> '),
                        r += " ",
                    o && (r += ' <a id="evaluationBtn" class="feature-btn" title="評價"> <i class="icon icon-evaluation"></i> </a> '),
                        r += " ",
                        new h(r)
                }),
                o("header-loading", '<div id="loading"> 連接中<span class="dot1">.</span><span class="dot2">.</span><span class="dot3">.</span> </div> '),
                o("header", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.signature)
                        , a = i.$escape
                        , o = e.name
                        , r = "";
                    return r += '<div class="agent-info"> <div class="agent-name ',
                    n || (r += "without-signature"),
                        r += '"> ',
                        r += a(o),
                        r += ' <span id="agentInputting">對方輸入消息中...</span> </div> ',
                    n && (r += ' <div class="agent-signature" title="',
                        r += a(n),
                        r += '">',
                        r += a(n),
                        r += "</div> "),
                        r += " </div> ",
                        new h(r)
                }),
                o("msg", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$each)
                        , a = e.list
                        , o = (e.v,
                        e.k,
                        i.$escape)
                        , r = i.$string
                        , s = (e.rv,
                        e.rk,
                        e.mv,
                        e.mk,
                        e.historyTimes)
                        , l = e.weixin
                        , c = "";
                    return n(a, function(e, t) {
                        c += " ",
                            "bot" === e.from_type ? (c += ' <div id="',
                                c += o(e.id),
                                c += '" class="msg-bot"> <div class="agent-avatar"> <img src="',
                                c += o(e.agent.avatar),
                                c += '" /> </div> ',
                            e.displayDate && (c += ' <div id="date',
                                c += o(e.id),
                                c += '" class="date">',
                                c += r(e.displayDate),
                                c += "</div> "),
                                c += " ",
                                "welcome" === e.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text"> ',
                                    c += r(e.content),
                                    c += " </div> </div> ") : "text" === e.content_type || "bot" === e.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> ',
                                    e.content_robot && e.content_robot.length ? (c += " ",
                                        n(e.content_robot, function(e, t) {
                                            c += " ",
                                                "text" === e.type ? (c += " ",
                                                    e.rich_text ? (c += ' <div class="text rich-text">',
                                                        c += r(e.rich_text),
                                                        c += "</div> ") : (c += ' <div class="text">',
                                                        c += r(e.text),
                                                        c += "</div> "),
                                                    c += " ") : "menu" !== e.type && "related" !== e.type || (c += ' <div class="menu"> ',
                                                    e.text_before && (c += ' <div class="menu-tips">',
                                                        c += o(e.text_before),
                                                        c += "</div> "),
                                                        c += " ",
                                                    e.items && e.items.length && (c += " <ol>",
                                                        n(e.items, function(e, t) {
                                                            c += " <li> ",
                                                                e.link ? (c += ' <a class="menu-item" data-value="',
                                                                    c += r(e.value),
                                                                    c += '" href="',
                                                                    c += r(e.link),
                                                                    c += '" target="_blank">',
                                                                    c += r(e.text),
                                                                    c += "</a> ") : (c += ' <span class="menu-item" data-value="',
                                                                    c += r(e.value),
                                                                    c += '">',
                                                                    c += r(e.text),
                                                                    c += "</span> "),
                                                                c += " </li> "
                                                        }),
                                                        c += '</ol> <div class="menu-tips">點擊問題或回覆數字查看答案</div> '),
                                                        c += " </div> "),
                                                c += " "
                                        }),
                                        c += " ") : e.content && (c += ' <div class="text">',
                                            c += r(e.content),
                                            c += "</div> "),
                                    c += " ",
                                "evaluate" === e.sub_type && (c += ' <div class="rating" data-question-id="',
                                    c += r(e.question_id),
                                    c += '"> <a href="javascript:;;" class="option" data-option="useful">解決</a> <a href="javascript:;;" class="option" data-option="useless">未解決</a> <span class="rated-text">已反饋</span> <span class="pending-text">提交中</span> <span class="split"></span> </div> '),
                                    c += " </div> ") : "rich_text" === e.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                                    c += r(e.extra.content),
                                    c += "</div> ",
                                "evaluate" === e.sub_type && (c += ' <div class="rating" data-question-id="',
                                    c += r(e.question_id),
                                    c += '"> <a href="javascript:;;" class="option" data-option="useful">解決</a> <a href="javascript:;;" class="option" data-option="useless">未解決</a> <span class="rated-text">已反饋</span> <span class="pending-text">提交中</span> <span class="split"></span> </div> '),
                                    c += " </div> ") : "photo" === e.content_type && (c += ' <div class="photo"> <a href="',
                                        c += o(e.media_url),
                                        c += '" target="_blank"> ',
                                        s > 1 ? (c += ' <img src="',
                                            c += o(e.media_url),
                                            c += '" /> ') : (c += ' <img src="',
                                            c += o(e.media_url),
                                            c += '" onload="window.SCROLL_TO_LAST()" /> '),
                                        c += " </a> </div> "),
                                c += " </div> ") : "agent" === e.from_type && (c += ' <div id="',
                                    c += o(e.id),
                                    c += '" class="msg-agent"> <div class="agent-avatar"> <img src="',
                                    c += o(e.agent.avatar),
                                    c += '" /> </div> ',
                                e.displayDate && (c += ' <div id="date',
                                    c += o(e.id),
                                    c += '" class="date">',
                                    c += r(e.displayDate),
                                    c += "</div> "),
                                    c += " ",
                                    "welcome" === e.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                        c += r(e.content),
                                        c += "</div> </div> ") : "text" === e.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text">',
                                        c += r(e.content),
                                        c += "</div> </div> ") : "rich_text" === e.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow-bg"></span> <span class="arrow"></span> <div class="text rich_text">',
                                        c += r(e.extra.content),
                                        c += "</div> </div> ") : "photo" === e.content_type ? (c += ' <div class="photo"> <a href="',
                                        c += o(e.media_url),
                                        c += '" target="_blank"> ',
                                        s > 1 ? (c += ' <img src="',
                                            c += o(e.media_url),
                                            c += '" /> ') : (c += ' <img src="',
                                            c += o(e.media_url),
                                            c += '" onload="window.SCROLL_TO_LAST()" /> '),
                                        c += " </a> </div> ") : "file" === e.content_type && (c += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                            c += o(e.extra.filename),
                                            c += '">',
                                            c += o(e.extra.filename),
                                            c += '</span> <span class="file-size">',
                                            c += o(e.extra.convert_size),
                                            c += '</span> </div> <div class="sub"> ',
                                            e.extra.cancel ? c += ' <span class="file-state">對方取消發送</span> ' : (c += " ",
                                                l ? c += ' <span class="file-state">抱歉，微信禁止了文件下載</span> ' : (c += " ",
                                                    e.extra.has_expired ? (c += ' <span class="file-state">',
                                                        c += o(e.extra.has_expired),
                                                        c += '後過期</span> <a class="btn-download" name="',
                                                        c += o(e.id),
                                                        c += ",",
                                                        c += o(e.conversation_id),
                                                        c += '" href="',
                                                        c += o(e.media_url),
                                                        c += '" target="_blank"> <i class="icon icon-download"></i> <span>下載</span> </a> ') : c += ' <span class="file-state">已過期</span> ',
                                                    c += " "),
                                                c += " "),
                                            c += " </div> </div> </div> "),
                                    c += " </div> "),
                            c += " ",
                        "client" === e.from_type && (c += ' <div id="',
                            c += o(e.id),
                            c += '" class="msg-client"> ',
                        e.displayDate && (c += ' <div id="date',
                            c += o(e.id),
                            c += '" class="date">',
                            c += r(e.displayDate),
                            c += "</div> "),
                            c += " ",
                            "text" === e.content_type ? (c += ' <div class="bubble rich-text-bubble"> <span class="arrow"></span> <div class="text">',
                                c += r(e.content),
                                c += "</div> ",
                            "sending" === e.status && (c += ' <span id="status',
                                c += o(e.id),
                                c += '" class="status icon"></span> '),
                                c += " </div> ") : "photo" === e.content_type ? (c += ' <div class="photo"> <a href="',
                                c += o(e.media_url),
                                c += '" target="_blank"> ',
                                s > 1 ? (c += ' <img id="photo',
                                    c += o(e.id),
                                    c += '" src="',
                                    c += o(e.media_url),
                                    c += '" /> ') : (c += ' <img id="photo',
                                    c += o(e.id),
                                    c += '" src="',
                                    c += o(e.media_url),
                                    c += '" onload="window.SCROLL_TO_LAST()" /> '),
                                c += " </a> ",
                            "sending" === e.status && (c += ' <span id="status',
                                c += o(e.id),
                                c += '" class="status icon"></span> '),
                                c += " </div> ") : "file" === e.content_type && (c += ' <div class="file"> <span class="arrow-bg"></span> <span class="arrow"></span> <i class="icon icon-file"></i> <div class="content"> <div class="title"> <span class="file-name" title="',
                                    c += o(e.extra.filename),
                                    c += '">',
                                    c += o(e.extra.filename),
                                    c += '</span> <span class="file-size">',
                                    c += o(e.extra.convert_size),
                                    c += '</span> </div> <div class="sub"> ',
                                    e.extra.cancel ? c += ' <span class="file-state">取消上傳</span> ' : (c += " ",
                                        e.extra.has_expired ? (c += ' <span class="file-state">',
                                            c += o(e.extra.has_expired),
                                            c += "後過期</span> ") : c += ' <span class="file-state">已過期</span> ',
                                        c += " "),
                                    c += " </div> </div> </div> "),
                            c += " </div> "),
                            c += " ",
                        "redirect" === e.from_type && (c += ' <div id="',
                            c += o(e.id),
                            c += '" class="msg-redirect"> 接下來由<span>',
                            c += o(e.toNickname),
                            c += "</span>為您服務 </div> "),
                            c += " ",
                        "evaluation" === e.from_type && (c += ' <div id="',
                            c += o(e.id),
                            c += '" class="msg-evaluation"> 你給出了 <span class="evaluation-level evaluation-level-',
                            c += o(e.level),
                            c += '">',
                            c += o(e.levelText),
                            c += "</span> ",
                        e.content && (c += ' <div class="evaluation-content">',
                            c += o(e.content),
                            c += "</div> "),
                            c += " </div> "),
                            c += " ",
                        "blacklist" === e.from_type && (c += ' <div id="',
                            c += o(e.id),
                            c += '" class="msg-blacklist">你被移出了黑名單</div> '),
                            c += " "
                    }),
                        c += " ",
                        new h(c)
                }),
                o("queueing", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.intro
                        , o = e.position
                        , r = "";
                    return r += '<div class="queue-header">',
                        r += n(a),
                        r += '</div> <div class="queue-body"> <div class="queue-position-title">當前等待人數</div> <span id="queueingPosition">',
                        r += n(o),
                        r += '</span> </div> <div class="queue-footer"> <p>如果等不及，可以選擇</p> <a class="btn-go-ticket">給我們留言</a> </div> ',
                        new h(r)
                }),
                o("support", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.disableBrandLink)
                        , a = i.$escape
                        , o = e.entId
                        , r = "";
                    return r += "<a ",
                    n !== !0 && (r += 'href="http://static.meiqia.com/dist/standalone.html?eid=89239&utm_source=widget-badge&utm_term=',
                        r += a(o),
                        r += '"'),
                        r += ' target="_blank"> <i class="icon icon-logo-gray"></i> <span>客服系統由美洽提供</span> </a> ',
                        new h(r)
                }),
                o("survey", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.menus)
                        , a = i.$escape
                        , o = i.$each
                        , r = (e.v,
                        e.k,
                        e.inputs)
                        , s = e.val
                        , l = (e.key,
                        e.captcha)
                        , c = "";
                    return "open" === n.status && (c += ' <div id="surveyStep1" class="active"> <div class="step-title">',
                        c += a(n.title),
                        c += "</div> ",
                        o(n.assignments, function(e, t) {
                            c += ' <div class="menus-item"> <a id="',
                                c += a(e.target_kind),
                                c += "_",
                                c += a(e.target),
                                c += '" name="surveyMenus" title="',
                                c += a(e.description),
                                c += '">',
                                c += a(t + 1),
                                c += ". ",
                                c += a(e.description),
                                c += "</a> </div> "
                        }),
                        c += " </div> "),
                        c += " ",
                    "open" === r.status && (c += ' <div id="surveyStep2" ',
                    "close" === n.status && (c += 'class="active"'),
                        c += '> <div class="step-title">',
                        c += a(r.title),
                        c += "</div> ",
                        o(r.fields, function(e, t) {
                            c += " ",
                            e.ignore || (c += ' <div class="form-group"> <div class="group-title">',
                                c += a(e.display_name),
                            e.optional || (c += "<span>*</span>"),
                                c += '</div> <div class="group-content"> ',
                                "text" === e.type ? (c += ' <input name="',
                                    c += a(e.field_name),
                                    c += '" ',
                                    c += e.optional ? 'class="survey-input-text"' : 'class="survey-input-text required"',
                                    c += " ",
                                    c += "tel" === e.field_name || "qq" === e.field_name ? 'type="tel"' : 'type="text"',
                                    c += ' value="',
                                    c += a(s),
                                    c += '" placeholder="請輸入" /> ') : "single_choice" === e.type ? (c += " ",
                                    o(e.choices, function(t, i) {
                                        c += ' <div class="choice-item"> <label> <input name="',
                                            c += a(e.field_name),
                                            c += '" ',
                                        e.optional || (c += 'class="required"'),
                                            c += ' type="radio" value="',
                                            c += a(t),
                                            c += '" /> <span>',
                                            c += a(t),
                                            c += "</span> </label> </div> "
                                    }),
                                    c += " ") : "multiple_choice" === e.type && (c += " ",
                                        o(e.choices, function(t, i) {
                                            c += ' <div class="choice-item"> <label> <input name="',
                                                c += a(e.field_name),
                                                c += '" ',
                                            e.optional || (c += 'class="required"'),
                                                c += ' type="checkbox" value="',
                                                c += a(t),
                                                c += '" /> <span>',
                                                c += a(t),
                                                c += "</span> </label> </div> "
                                        }),
                                        c += " "),
                                c += " </div> </div> "),
                                c += " "
                        }),
                        c += " ",
                    l && (c += ' <div class="captcha-group"> <div class="group-title">驗證碼<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="surveyCaptcha" class="required" type="text" /> </div> <div class="captcha-img"> <img id="surveyCaptchaImg" src="" /> </div> </div> </div> '),
                        c += ' <div class="btn-group"> <a id="surveySubmit">提交</a> </div> </div> '),
                        c += " ",
                        new h(c)
                }),
                o("ticket", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        e.intro)
                        , a = i.$escape
                        , o = e.categories
                        , r = i.$each
                        , s = (e.val,
                        e.key,
                        i.$string)
                        , l = e.name
                        , c = e.contactRule
                        , p = e.tel
                        , d = e.email
                        , u = e.wechat
                        , f = e.qq
                        , v = e.defaultTemplate
                        , g = e.defaultTemplateContent
                        , m = e.captcha
                        , b = "";
                    return b += '<div id="ticketV2" class="active"> ',
                    n && (b += ' <div class="step-title">',
                        b += a(n),
                        b += "</div> "),
                        b += " ",
                    o && o.length > 0 && (b += ' <div class="form-group"> <div class="group-title">分類<span>*</span></div> <div class="group-content"> ',
                        r(o, function(e, t) {
                            b += ' <div class="choice-item"> <label> <input name="categories" type="radio" value="',
                                b += s(e.id),
                                b += '" /> <span>',
                                b += s(e.name),
                                b += "</span> </label> </div> "
                        }),
                        b += " </div> </div> "),
                        b += " ",
                    "open" === l && (b += ' <div class="form-group"> <div class="group-title"> 姓名 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketName" type="text" placeholder=" 請輸入姓名"> </div> </div> '),
                        b += " ",
                    "open" === p && (b += ' <div class="form-group"> <div class="group-title"> 手機 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketTel" type="text" placeholder=" 請輸入手機號"> </div> </div> '),
                        b += " ",
                    "open" === d && (b += ' <div class="form-group"> <div class="group-title"> 郵箱 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketEmail" type="text" placeholder=" 請輸入郵箱"> </div> </div> '),
                        b += " ",
                    "open" === u && (b += ' <div class="form-group"> <div class="group-title"> 微信 ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketWechat" type="text" placeholder=" 請輸入微信號"> </div> </div> '),
                        b += " ",
                    "open" === f && (b += ' <div class="form-group"> <div class="group-title"> QQ ',
                    "multi" === c && (b += " <span>*</span> "),
                        b += ' </div> <div class="group-content"> <input id="ticketQq" type="text" placeholder=" 請輸入QQ號"> </div> </div> '),
                        b += ' <div class="form-group"> <div class="group-title">留言內容<span>*</span></div> <div class="group-content"> ',
                        "open" === v ? (b += ' <textarea id="ticketContent" placeholder="請輸入留言內容">',
                            b += a(g),
                            b += "</textarea> ") : b += ' <textarea id="ticketContent" placeholder="請輸入留言內容"></textarea> ',
                        b += " </div> </div> ",
                    "open" === m && (b += ' <div class="captcha-group"> <div class="group-title">驗證碼<span>*</span></div> <div class="group-content"> <div class="captcha-input"> <input id="ticketCaptcha" class="required" type="text" placeholder=" 請輸入右側驗證碼"/> </div> <div class="captcha-img"> <img id="ticketCaptchaImg" src="" /> </div> </div> </div> '),
                        b += ' <div class="btn-group"> <a id="ticketSubmit">提交</a> </div> </div> ',
                        new h(b)
                }),
                o("unable-service", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.src
                        , o = "";
                    return o += '<img src="',
                        o += n(a),
                        o += '"> <div>客服繁忙或已離線，給我們留言吧</div> <a class="btn-go-ticket">給我們留言</a> ',
                        new h(o)
                }),
                o("icon-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.cdn
                        , o = e.tail
                        , r = "";
                    return r += ".icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mobile.png?v=",
                        r += n(o),
                        r += "'); background-size: 44px auto; background-repeat: no-repeat; } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji.png?v=",
                        r += n(o),
                        r += "'); background-size: 25px auto; background-repeat: no-repeat; } .back-button span { width: 12px; height: 22px; background: url('",
                        r += n(a),
                        r += "/images/icon-mobile.png?v=",
                        r += n(o),
                        r += "') no-repeat -26px -440px; } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { } @media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2) { .icon { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mobile@2x.png?v=",
                        r += n(o),
                        r += "'); } .emoji-control { background-image: url('",
                        r += n(a),
                        r += "/images/emoji@2x.png?v=",
                        r += n(o),
                        r += "'); } .back-button span { background-image: url('",
                        r += n(a),
                        r += "/images/icon-mobile@2x.png?v=",
                        r += n(o),
                        r += "'); background-size: 44px 462px; } } ",
                        new h(r)
                }),
                o("theme-css", function(e, t) {
                    "use strict";
                    var i = this
                        , n = (i.$helpers,
                        i.$escape)
                        , a = e.bgColor
                        , o = e.textColor
                        , r = e.subTextColor
                        , s = e.color2
                        , l = "";
                    return l += "#pageChat .header, #pageTicket .header, #pageCall .header, #pageSurvey .header { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #agentInputting { background-color: ",
                        l += n(a),
                        l += "; } #pageChat .agent-signature { color: ",
                        l += n(r),
                        l += " } #pageChat .header #headRight { background-color: ",
                        l += n(a),
                        l += "; } #pageChat .msg-client .bubble { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .bubble a { color: ",
                        l += n(o),
                        l += "; } #pageChat .msg-client .arrow { border-left: 6px solid ",
                        l += n(a),
                        l += "; } #pageChat #evaluationSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageChat #queueingTips .queue-position-title { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips #queueingPosition { color: ",
                        l += n(a),
                        l += "; } #pageChat #queueingTips .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += '; } #pageChat .body .msg-bot .bubble .menu-item, #pageChat .body .msg-bot .bubble a, #pageChat .body .msg-agent .bubble a, #pageSurvey .body .menus-item > a, #pageChat .body .msg-bot .rating a, #pageChat .body .msg-bot div.rich-text-bubble a, #pageChat .body .msg-agent div.rich-text-bubble a, #pageChat .body .msg-common-tips a, #autocomplete li em, #autocomplete li a[data-current="true"] { color: #6088e6; /*color: ',
                        l += n(a),
                        l += ";*/ } #autocomplete li a:hover { background-color: ",
                        l += n(a),
                        l += "; } ",
                        l += "white" === s ? " .icon-tel { background-position: -22px -66px; } .icon-angel-down { background-position: -22px -89px; } " : " .icon-tel { background-position: 0 -66px; } .icon-angel-down { background-position: 0 -89px; } ",
                        l += " #pageChat .footer .input-holder .text-holder #btnSend.active { color: ",
                        l += n(a),
                        l += "; } #pageChat #unableService .btn-go-ticket { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageTicket #ticketSubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageTicket #ticketDone { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } #pageCall .input-active { border-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-active { background-color: ",
                        l += n(a),
                        l += " !important; } #pageCall .submit-intro { color: ",
                        l += n(a),
                        l += "; } #pageCall .call-success-icon { background-color: ",
                        l += n(a),
                        l += "; } #pageSurvey .menus-item >a { color: ",
                        l += n(a),
                        l += "; } #pageSurvey #surveySubmit { background-color: ",
                        l += n(a),
                        l += "; color: ",
                        l += n(o),
                        l += "; } ",
                        new h(l)
                })
        }()
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = function(e) {
                for (var t = window.location.search.substring(1), i = {}, n = t.split("&"), a = 0; a < n.length; a++) {
                    var o = n[a].split("=");
                    if ("undefined" == typeof i[o[0]])
                        i[o[0]] = decodeURIComponent(o[1]);
                    else if ("string" == typeof i[o[0]]) {
                        var r = [i[o[0]], decodeURIComponent(o[1])];
                        i[o[0]] = r
                    } else
                        i[o[0]].push(decodeURIComponent(o[1]))
                }
                return i[e]
            }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , o = i(10)
            , r = n(o)
            , s = i(11)
            , l = n(s)
            , c = i(14)
            , p = n(c)
            , d = i(24)
            , u = n(d)
            , f = i(25)
            , v = n(f)
            , h = i(49)
            , g = n(h)
            , m = i(33)
            , b = n(m)
            , I = i(51)
            , y = n(I)
            , x = i(31)
            , E = n(x)
            , _ = i(16)
            , w = n(_);
        t["default"] = function() {
            _MEIQIA.a.push = function(e) {
                if ("object" === ("undefined" == typeof e ? "undefined" : a(e)) && e.length) {
                    var t = e[0]
                        , i = e[1];
                    switch (t) {
                        case "init":
                            (0,
                                p["default"])();
                            break;
                        case "withoutBtn":
                            l["default"].chatReady || (l["default"].withoutBtn = !0);
                            break;
                        case "showPanel":
                            if (l["default"].chatReady) {
                                if ("callwidget" === (0,
                                        E["default"])(l["default"]))
                                    return;
                                var n = "callWidget^@#";
                                i = "object" === ("undefined" == typeof i ? "undefined" : a(i)) ? i : l["default"].assign,
                                    i ? i.agentToken && (i.groupToken = null) : i = {},
                                    i.type = "click",
                                    n += JSON.stringify(i),
                                    l["default"].messenger.targets.iframe1.send(n)
                            } else
                                l["default"].renderFakeBtn && ((0,
                                    w["default"])(),
                                    l["default"].renderFakeBtn = !1,
                                    (0,
                                        p["default"])(),
                                    window._MEIQIA("allSet", function() {
                                        window._MEIQIA("showPanel")
                                    }));
                            break;
                        case "hidePanel":
                            l["default"].chatReady && ((0,
                                v["default"])("hide"),
                                (0,
                                    u["default"])());
                            break;
                        case "metadata":
                            l["default"].chatReady && ("object" !== ("undefined" == typeof i ? "undefined" : a(i)) || (0,
                                r["default"])(i) || (0,
                                b["default"])(i));
                            break;
                        case "ticket":
                            "object" !== ("undefined" == typeof i ? "undefined" : a(i)) || (0,
                                r["default"])(i) || (0,
                                y["default"])(i, e[2]);
                            break;
                        case "allSet":
                            l["default"].allSet = i;
                            break;
                        case "convClickCallback":
                            l["default"].convClickCallback = i;
                            break;
                        case "startConversation":
                            l["default"].startConversation = i;
                            break;
                        case "endConversation":
                            l["default"].endConversation = i;
                            break;
                        case "getUnreadMsg":
                            l["default"].getUnreadMsg = i;
                            break;
                        case "getInviting":
                            l["default"].getInviting = i;
                            break;
                        case "rejectInvitation":
                            if ("function" == typeof l["default"].getInviting)
                                try {
                                    l["default"].messenger.targets.iframe1.send("rejectInvitation^@#")
                                } catch (o) {}
                            break;
                        case "getPanelVisibility":
                            l["default"].getPanelVisibility = i;
                            break;
                        case "assign":
                            l["default"].assign = i;
                            break;
                        case "fallback":
                            l["default"].fallback = i;
                            break;
                        case "clientId":
                            l["default"].clientId = i;
                            break;
                        case "disableBrandLink":
                            l["default"].disableBrandLink = i || !0;
                            break;
                        case "manualCall":
                            (0,
                                g["default"])(i);
                            break;
                        case "closeConversation":
                            l["default"].closeConversationCallback = i,
                                l["default"].messenger.targets.iframe1.send("closeConversation^@#");
                            break;
                        case "reopenConversation":
                            "object" === ("undefined" == typeof i ? "undefined" : a(i)) && i ? i.agentToken && (i.groupToken = null) : i = {},
                                l["default"].messenger.targets.iframe1.send("reopenConversation^@#" + JSON.stringify(i))
                    }
                }
            }
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(15)
            , o = n(a)
            , r = i(19)
            , s = n(r)
            , l = i(50)
            , c = n(l)
            , p = i(11)
            , d = n(p);
        t["default"] = function(e) {
            var t = e.phone
                , i = e.success
                , n = e.fail
                , a = "function" == typeof i ? i : null
                , r = "function" == typeof n ? n : null;
            c["default"].isPhoneNum(t) ? s["default"].ajax({
                url: o["default"].chat + "/web_callback/calls",
                type: "post",
                dataType: "json",
                contentType: "application/json",
                data: {
                    ent_id: d["default"].entId,
                    track_id: d["default"].trackId,
                    phone: t.toString()
                },
                success: function() {
                    a && a()
                },
                error: function() {
                    r && r("接口请求失败")
                }
            }) : r && r("号码格式有误")
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e) {
            return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)
        }
            , n = function(e) {
            return !(isNaN(+e) || e.length < 6)
        }
            , a = function(e) {
            var t = /^\d+$/;
            return t.test(e)
        }
            , o = function(e) {
            var t = /^(0[1-9]\d[1-9]\d{7}|0[1-9]\d{2}[1-9]\d{6,7}|1\d{10})$/;
            return t.test(e)
        };
        t["default"] = {
            isEmail: i,
            isTel: n,
            isNum: a,
            isPhoneNum: o
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(15)
            , o = n(a)
            , r = i(19)
            , s = n(r)
            , l = i(11)
            , c = n(l)
            , p = i(33)
            , d = n(p);
        t["default"] = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
            ;
            "function" != typeof t && (t = function() {}
            );
            var i = e.ticketContent;
            return i ? (delete e.ticketContent,
            Object.keys(e).length > 0 && (0,
                d["default"])(e),
                void s["default"].ajax({
                    url: o["default"].chat + "/client/tickets_v2",
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: {
                        enterprise_id: c["default"].entId,
                        track_id: c["default"].trackId,
                        visit_id: c["default"].visitId,
                        channel: "widget",
                        content: i
                    },
                    success: function(e) {
                        t(!0)
                    },
                    error: function(e) {
                        var i = {};
                        try {
                            i = JSON.parse(e.responseText)
                        } catch (n) {}
                        t(!1, i.message || "保存失败")
                    }
                })) : t(!1, "工单内容必填")
        }
    }
    , function(e, t) {
        "use strict";
        function i(e, t) {
            o[e] || (o[e] = []),
            t && (r[e] ? t() : o[e].push(t))
        }
        function n(e, t) {
            if (r[e] = !0,
                    o[e])
                for (var i = void 0; i = o[e].shift(); )
                    i.apply(null, t || [])
        }
        function a(e) {
            delete r[e]
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = {}
            , r = {};
        t["default"] = {
            on: i,
            emit: n,
            reset: a
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(11)
            , o = n(a);
        t["default"] = function() {
            return "function" == typeof o["default"].endConversation && void o["default"].endConversation()
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(11)
            , o = n(a);
        t["default"] = function() {
            return "function" == typeof o["default"].startConversation && void o["default"].startConversation()
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function a(e) {
            return new r["default"](function(t, i) {
                    l["default"].ajax({
                        url: v["default"].chat + "/v1/throttle/web",
                        data: {
                            api_name: e,
                            ent_id: u["default"].entId
                        },
                        type: "get",
                        success: function(e) {
                            e && e.allowed === !1 ? t(e) : i("your enterprise is not in blacklist.")
                        },
                        error: function(e) {
                            return i("some error happened, but you can use also.")
                        }
                    })
                }
            )
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.InitBlacklist = void 0,
            t.throttle = a;
        var o = i(56)
            , r = n(o)
            , s = i(19)
            , l = n(s)
            , c = i(94)
            , p = n(c)
            , d = i(11)
            , u = n(d)
            , f = i(15)
            , v = n(f);
        t.InitBlacklist = function() {
            return new r["default"](function(e, t) {
                    l["default"].jsonp({
                        url: "https://s3-qcloud.meiqia.com/static-files/40z3oz40z4lz17z4bz3mz48z4az42z3mz40z51z4l.js",
                        callback: "jsonp_cb",
                        callbackName: "blacklistJsonp",
                        time: 1e4,
                        success: function(i) {
                            if (!Array.isArray(i))
                                return t("the content of response not correct.");
                            var n = (0,
                                p["default"])(u["default"].entId.toString());
                            i.indexOf(n) > -1 ? e() : t("your enterprise is not in blacklist.")
                        },
                        error: function(e) {
                            return t("some error happened, but you can use also.")
                        }
                    })
                }
            )
        }
    }
    , function(e, t, i) {
        "use strict";
        function n() {
            try {
                Promise === o && (Promise = a)
            } catch (e) {}
            return o
        }
        var a;
        "undefined" != typeof Promise && (a = Promise);
        var o = i(57)();
        o.noConflict = n,
            e.exports = o
    }
    , function(e, t, i) {
        (function(t) {
                "use strict";
                e.exports = function() {
                    function n() {}
                    function a(e, t) {
                        if (null == e || e.constructor !== o)
                            throw new I("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                        if ("function" != typeof t)
                            throw new I("expecting a function but got " + v.classString(t))
                    }
                    function o(e) {
                        e !== x && a(this, e),
                            this._bitField = 0,
                            this._fulfillmentHandler0 = void 0,
                            this._rejectionHandler0 = void 0,
                            this._promise0 = void 0,
                            this._receiver0 = void 0,
                            this._resolveFromExecutor(e),
                            this._promiseCreated(),
                            this._fireEvent("promiseCreated", this)
                    }
                    function r(e) {
                        this.promise._resolveCallback(e)
                    }
                    function s(e) {
                        this.promise._rejectCallback(e, !1)
                    }
                    function l(e) {
                        var t = new o(x);
                        t._fulfillmentHandler0 = e,
                            t._rejectionHandler0 = e,
                            t._promise0 = e,
                            t._receiver0 = e
                    }
                    var c, p = function() {
                        return new I("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n")
                    }, d = function() {
                        return new o.PromiseInspection(this._target())
                    }, u = function(e) {
                        return o.reject(new I(e))
                    }, f = {}, v = i(59);
                    c = v.isNode ? function() {
                        var e = t.domain;
                        return void 0 === e && (e = null),
                            e
                    }
                        : function() {
                            return null
                        }
                        ,
                        v.notEnumerableProp(o, "_getDomain", c);
                    var h = i(60)
                        , g = i(61)
                        , m = new g;
                    h.defineProperty(o, "_async", {
                        value: m
                    });
                    var b = i(65)
                        , I = o.TypeError = b.TypeError;
                    o.RangeError = b.RangeError;
                    var y = o.CancellationError = b.CancellationError;
                    o.TimeoutError = b.TimeoutError,
                        o.OperationalError = b.OperationalError,
                        o.RejectionError = b.OperationalError,
                        o.AggregateError = b.AggregateError;
                    var x = function() {}
                        , E = {}
                        , _ = {}
                        , w = i(66)(o, x)
                        , A = i(67)(o, x, w, u, n)
                        , T = i(68)(o)
                        , k = T.create
                        , M = i(69)(o, T)
                        , B = (M.CapturedTrace,
                        i(70)(o, w, _))
                        , C = i(71)(_)
                        , Q = i(72)
                        , N = v.errorObj
                        , O = v.tryCatch;
                    return o.prototype.toString = function() {
                        return "[object Promise]"
                    }
                        ,
                        o.prototype.caught = o.prototype["catch"] = function(e) {
                            var t = arguments.length;
                            if (t > 1) {
                                var i, n = new Array(t - 1), a = 0;
                                for (i = 0; i < t - 1; ++i) {
                                    var o = arguments[i];
                                    if (!v.isObject(o))
                                        return u("Catch statement predicate: expecting an object but got " + v.classString(o));
                                    n[a++] = o
                                }
                                return n.length = a,
                                    e = arguments[i],
                                    this.then(void 0, C(n, e, this))
                            }
                            return this.then(void 0, e)
                        }
                        ,
                        o.prototype.reflect = function() {
                            return this._then(d, d, void 0, this, void 0)
                        }
                        ,
                        o.prototype.then = function(e, t) {
                            if (M.warnings() && arguments.length > 0 && "function" != typeof e && "function" != typeof t) {
                                var i = ".then() only accepts functions but was passed: " + v.classString(e);
                                arguments.length > 1 && (i += ", " + v.classString(t)),
                                    this._warn(i)
                            }
                            return this._then(e, t, void 0, void 0, void 0)
                        }
                        ,
                        o.prototype.done = function(e, t) {
                            var i = this._then(e, t, void 0, void 0, void 0);
                            i._setIsFinal()
                        }
                        ,
                        o.prototype.spread = function(e) {
                            return "function" != typeof e ? u("expecting a function but got " + v.classString(e)) : this.all()._then(e, void 0, void 0, E, void 0)
                        }
                        ,
                        o.prototype.toJSON = function() {
                            var e = {
                                isFulfilled: !1,
                                isRejected: !1,
                                fulfillmentValue: void 0,
                                rejectionReason: void 0
                            };
                            return this.isFulfilled() ? (e.fulfillmentValue = this.value(),
                                e.isFulfilled = !0) : this.isRejected() && (e.rejectionReason = this.reason(),
                                    e.isRejected = !0),
                                e
                        }
                        ,
                        o.prototype.all = function() {
                            return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"),
                                new A(this).promise()
                        }
                        ,
                        o.prototype.error = function(e) {
                            return this.caught(v.originatesFromRejection, e)
                        }
                        ,
                        o.getNewLibraryCopy = e.exports,
                        o.is = function(e) {
                            return e instanceof o
                        }
                        ,
                        o.fromNode = o.fromCallback = function(e) {
                            var t = new o(x);
                            t._captureStackTrace();
                            var i = arguments.length > 1 && !!Object(arguments[1]).multiArgs
                                , n = O(e)(Q(t, i));
                            return n === N && t._rejectCallback(n.e, !0),
                            t._isFateSealed() || t._setAsyncGuaranteed(),
                                t
                        }
                        ,
                        o.all = function(e) {
                            return new A(e).promise()
                        }
                        ,
                        o.cast = function(e) {
                            var t = w(e);
                            return t instanceof o || (t = new o(x),
                                t._captureStackTrace(),
                                t._setFulfilled(),
                                t._rejectionHandler0 = e),
                                t
                        }
                        ,
                        o.resolve = o.fulfilled = o.cast,
                        o.reject = o.rejected = function(e) {
                            var t = new o(x);
                            return t._captureStackTrace(),
                                t._rejectCallback(e, !0),
                                t
                        }
                        ,
                        o.setScheduler = function(e) {
                            if ("function" != typeof e)
                                throw new I("expecting a function but got " + v.classString(e));
                            return m.setScheduler(e)
                        }
                        ,
                        o.prototype._then = function(e, t, i, n, a) {
                            var r = void 0 !== a
                                , s = r ? a : new o(x)
                                , l = this._target()
                                , p = l._bitField;
                            r || (s._propagateFrom(this, 3),
                                s._captureStackTrace(),
                            void 0 === n && 0 !== (2097152 & this._bitField) && (n = 0 !== (50397184 & p) ? this._boundValue() : l === this ? void 0 : this._boundTo),
                                this._fireEvent("promiseChained", this, s));
                            var d = c();
                            if (0 !== (50397184 & p)) {
                                var u, f, h = l._settlePromiseCtx;
                                0 !== (33554432 & p) ? (f = l._rejectionHandler0,
                                    u = e) : 0 !== (16777216 & p) ? (f = l._fulfillmentHandler0,
                                    u = t,
                                    l._unsetRejectionIsUnhandled()) : (h = l._settlePromiseLateCancellationObserver,
                                    f = new y("late cancellation observer"),
                                    l._attachExtraTrace(f),
                                    u = t),
                                    m.invoke(h, l, {
                                        handler: null === d ? u : "function" == typeof u && v.domainBind(d, u),
                                        promise: s,
                                        receiver: n,
                                        value: f
                                    })
                            } else
                                l._addCallbacks(e, t, s, n, d);
                            return s
                        }
                        ,
                        o.prototype._length = function() {
                            return 65535 & this._bitField
                        }
                        ,
                        o.prototype._isFateSealed = function() {
                            return 0 !== (117506048 & this._bitField)
                        }
                        ,
                        o.prototype._isFollowing = function() {
                            return 67108864 === (67108864 & this._bitField)
                        }
                        ,
                        o.prototype._setLength = function(e) {
                            this._bitField = this._bitField & -65536 | 65535 & e
                        }
                        ,
                        o.prototype._setFulfilled = function() {
                            this._bitField = 33554432 | this._bitField,
                                this._fireEvent("promiseFulfilled", this)
                        }
                        ,
                        o.prototype._setRejected = function() {
                            this._bitField = 16777216 | this._bitField,
                                this._fireEvent("promiseRejected", this)
                        }
                        ,
                        o.prototype._setFollowing = function() {
                            this._bitField = 67108864 | this._bitField,
                                this._fireEvent("promiseResolved", this)
                        }
                        ,
                        o.prototype._setIsFinal = function() {
                            this._bitField = 4194304 | this._bitField
                        }
                        ,
                        o.prototype._isFinal = function() {
                            return (4194304 & this._bitField) > 0
                        }
                        ,
                        o.prototype._unsetCancelled = function() {
                            this._bitField = this._bitField & -65537
                        }
                        ,
                        o.prototype._setCancelled = function() {
                            this._bitField = 65536 | this._bitField,
                                this._fireEvent("promiseCancelled", this)
                        }
                        ,
                        o.prototype._setWillBeCancelled = function() {
                            this._bitField = 8388608 | this._bitField
                        }
                        ,
                        o.prototype._setAsyncGuaranteed = function() {
                            m.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField)
                        }
                        ,
                        o.prototype._receiverAt = function(e) {
                            var t = 0 === e ? this._receiver0 : this[4 * e - 4 + 3];
                            if (t !== f)
                                return void 0 === t && this._isBound() ? this._boundValue() : t
                        }
                        ,
                        o.prototype._promiseAt = function(e) {
                            return this[4 * e - 4 + 2]
                        }
                        ,
                        o.prototype._fulfillmentHandlerAt = function(e) {
                            return this[4 * e - 4 + 0]
                        }
                        ,
                        o.prototype._rejectionHandlerAt = function(e) {
                            return this[4 * e - 4 + 1]
                        }
                        ,
                        o.prototype._boundValue = function() {}
                        ,
                        o.prototype._migrateCallback0 = function(e) {
                            var t = (e._bitField,
                                e._fulfillmentHandler0)
                                , i = e._rejectionHandler0
                                , n = e._promise0
                                , a = e._receiverAt(0);
                            void 0 === a && (a = f),
                                this._addCallbacks(t, i, n, a, null)
                        }
                        ,
                        o.prototype._migrateCallbackAt = function(e, t) {
                            var i = e._fulfillmentHandlerAt(t)
                                , n = e._rejectionHandlerAt(t)
                                , a = e._promiseAt(t)
                                , o = e._receiverAt(t);
                            void 0 === o && (o = f),
                                this._addCallbacks(i, n, a, o, null)
                        }
                        ,
                        o.prototype._addCallbacks = function(e, t, i, n, a) {
                            var o = this._length();
                            if (o >= 65531 && (o = 0,
                                    this._setLength(0)),
                                0 === o)
                                this._promise0 = i,
                                    this._receiver0 = n,
                                "function" == typeof e && (this._fulfillmentHandler0 = null === a ? e : v.domainBind(a, e)),
                                "function" == typeof t && (this._rejectionHandler0 = null === a ? t : v.domainBind(a, t));
                            else {
                                var r = 4 * o - 4;
                                this[r + 2] = i,
                                    this[r + 3] = n,
                                "function" == typeof e && (this[r + 0] = null === a ? e : v.domainBind(a, e)),
                                "function" == typeof t && (this[r + 1] = null === a ? t : v.domainBind(a, t))
                            }
                            return this._setLength(o + 1),
                                o
                        }
                        ,
                        o.prototype._proxy = function(e, t) {
                            this._addCallbacks(void 0, void 0, t, e, null)
                        }
                        ,
                        o.prototype._resolveCallback = function(e, t) {
                            if (0 === (117506048 & this._bitField)) {
                                if (e === this)
                                    return this._rejectCallback(p(), !1);
                                var i = w(e, this);
                                if (!(i instanceof o))
                                    return this._fulfill(e);
                                t && this._propagateFrom(i, 2);
                                var n = i._target();
                                if (n === this)
                                    return void this._reject(p());
                                var a = n._bitField;
                                if (0 === (50397184 & a)) {
                                    var r = this._length();
                                    r > 0 && n._migrateCallback0(this);
                                    for (var s = 1; s < r; ++s)
                                        n._migrateCallbackAt(this, s);
                                    this._setFollowing(),
                                        this._setLength(0),
                                        this._setFollowee(n)
                                } else if (0 !== (33554432 & a))
                                    this._fulfill(n._value());
                                else if (0 !== (16777216 & a))
                                    this._reject(n._reason());
                                else {
                                    var l = new y("late cancellation observer");
                                    n._attachExtraTrace(l),
                                        this._reject(l)
                                }
                            }
                        }
                        ,
                        o.prototype._rejectCallback = function(e, t, i) {
                            var n = v.ensureErrorObject(e)
                                , a = n === e;
                            if (!a && !i && M.warnings()) {
                                var o = "a promise was rejected with a non-error: " + v.classString(e);
                                this._warn(o, !0)
                            }
                            this._attachExtraTrace(n, !!t && a),
                                this._reject(e)
                        }
                        ,
                        o.prototype._resolveFromExecutor = function(e) {
                            if (e !== x) {
                                var t = this;
                                this._captureStackTrace(),
                                    this._pushContext();
                                var i = !0
                                    , n = this._execute(e, function(e) {
                                    t._resolveCallback(e)
                                }, function(e) {
                                    t._rejectCallback(e, i)
                                });
                                i = !1,
                                    this._popContext(),
                                void 0 !== n && t._rejectCallback(n, !0)
                            }
                        }
                        ,
                        o.prototype._settlePromiseFromHandler = function(e, t, i, n) {
                            var a = n._bitField;
                            if (0 === (65536 & a)) {
                                n._pushContext();
                                var o;
                                t === E ? i && "number" == typeof i.length ? o = O(e).apply(this._boundValue(), i) : (o = N,
                                    o.e = new I("cannot .spread() a non-array: " + v.classString(i))) : o = O(e).call(t, i);
                                var r = n._popContext();
                                a = n._bitField,
                                0 === (65536 & a) && (o === _ ? n._reject(i) : o === N ? n._rejectCallback(o.e, !1) : (M.checkForgottenReturns(o, r, "", n, this),
                                    n._resolveCallback(o)))
                            }
                        }
                        ,
                        o.prototype._target = function() {
                            for (var e = this; e._isFollowing(); )
                                e = e._followee();
                            return e
                        }
                        ,
                        o.prototype._followee = function() {
                            return this._rejectionHandler0
                        }
                        ,
                        o.prototype._setFollowee = function(e) {
                            this._rejectionHandler0 = e
                        }
                        ,
                        o.prototype._settlePromise = function(e, t, i, a) {
                            var r = e instanceof o
                                , s = this._bitField
                                , l = 0 !== (134217728 & s);
                            0 !== (65536 & s) ? (r && e._invokeInternalOnCancel(),
                                i instanceof B && i.isFinallyHandler() ? (i.cancelPromise = e,
                                O(t).call(i, a) === N && e._reject(N.e)) : t === d ? e._fulfill(d.call(i)) : i instanceof n ? i._promiseCancelled(e) : r || e instanceof A ? e._cancel() : i.cancel()) : "function" == typeof t ? r ? (l && e._setAsyncGuaranteed(),
                                this._settlePromiseFromHandler(t, i, a, e)) : t.call(i, a, e) : i instanceof n ? i._isResolved() || (0 !== (33554432 & s) ? i._promiseFulfilled(a, e) : i._promiseRejected(a, e)) : r && (l && e._setAsyncGuaranteed(),
                                    0 !== (33554432 & s) ? e._fulfill(a) : e._reject(a))
                        }
                        ,
                        o.prototype._settlePromiseLateCancellationObserver = function(e) {
                            var t = e.handler
                                , i = e.promise
                                , n = e.receiver
                                , a = e.value;
                            "function" == typeof t ? i instanceof o ? this._settlePromiseFromHandler(t, n, a, i) : t.call(n, a, i) : i instanceof o && i._reject(a)
                        }
                        ,
                        o.prototype._settlePromiseCtx = function(e) {
                            this._settlePromise(e.promise, e.handler, e.receiver, e.value)
                        }
                        ,
                        o.prototype._settlePromise0 = function(e, t, i) {
                            var n = this._promise0
                                , a = this._receiverAt(0);
                            this._promise0 = void 0,
                                this._receiver0 = void 0,
                                this._settlePromise(n, e, a, t)
                        }
                        ,
                        o.prototype._clearCallbackDataAtIndex = function(e) {
                            var t = 4 * e - 4;
                            this[t + 2] = this[t + 3] = this[t + 0] = this[t + 1] = void 0
                        }
                        ,
                        o.prototype._fulfill = function(e) {
                            var t = this._bitField;
                            if (!((117506048 & t) >>> 16)) {
                                if (e === this) {
                                    var i = p();
                                    return this._attachExtraTrace(i),
                                        this._reject(i)
                                }
                                this._setFulfilled(),
                                    this._rejectionHandler0 = e,
                                (65535 & t) > 0 && (0 !== (134217728 & t) ? this._settlePromises() : m.settlePromises(this))
                            }
                        }
                        ,
                        o.prototype._reject = function(e) {
                            var t = this._bitField;
                            if (!((117506048 & t) >>> 16))
                                return this._setRejected(),
                                    this._fulfillmentHandler0 = e,
                                    this._isFinal() ? m.fatalError(e, v.isNode) : void ((65535 & t) > 0 ? m.settlePromises(this) : this._ensurePossibleRejectionHandled())
                        }
                        ,
                        o.prototype._fulfillPromises = function(e, t) {
                            for (var i = 1; i < e; i++) {
                                var n = this._fulfillmentHandlerAt(i)
                                    , a = this._promiseAt(i)
                                    , o = this._receiverAt(i);
                                this._clearCallbackDataAtIndex(i),
                                    this._settlePromise(a, n, o, t)
                            }
                        }
                        ,
                        o.prototype._rejectPromises = function(e, t) {
                            for (var i = 1; i < e; i++) {
                                var n = this._rejectionHandlerAt(i)
                                    , a = this._promiseAt(i)
                                    , o = this._receiverAt(i);
                                this._clearCallbackDataAtIndex(i),
                                    this._settlePromise(a, n, o, t)
                            }
                        }
                        ,
                        o.prototype._settlePromises = function() {
                            var e = this._bitField
                                , t = 65535 & e;
                            if (t > 0) {
                                if (0 !== (16842752 & e)) {
                                    var i = this._fulfillmentHandler0;
                                    this._settlePromise0(this._rejectionHandler0, i, e),
                                        this._rejectPromises(t, i)
                                } else {
                                    var n = this._rejectionHandler0;
                                    this._settlePromise0(this._fulfillmentHandler0, n, e),
                                        this._fulfillPromises(t, n)
                                }
                                this._setLength(0)
                            }
                            this._clearCancellationData()
                        }
                        ,
                        o.prototype._settledValue = function() {
                            var e = this._bitField;
                            return 0 !== (33554432 & e) ? this._rejectionHandler0 : 0 !== (16777216 & e) ? this._fulfillmentHandler0 : void 0
                        }
                        ,
                        o.defer = o.pending = function() {
                            M.deprecated("Promise.defer", "new Promise");
                            var e = new o(x);
                            return {
                                promise: e,
                                resolve: r,
                                reject: s
                            }
                        }
                        ,
                        v.notEnumerableProp(o, "_makeSelfResolutionError", p),
                        i(73)(o, x, w, u, M),
                        i(74)(o, x, w, M),
                        i(75)(o, A, u, M),
                        i(76)(o),
                        i(77)(o),
                        i(78)(o, A, w, x, m, c),
                        o.Promise = o,
                        o.version = "3.5.1",
                        i(79)(o, A, u, w, x, M),
                        i(80)(o),
                        i(81)(o, u, w, k, x, M),
                        i(82)(o, x, M),
                        i(83)(o, u, x, w, n, M),
                        i(84)(o),
                        i(85)(o, x),
                        i(86)(o, A, w, u),
                        i(87)(o, x, w, u),
                        i(88)(o, A, u, w, x, M),
                        i(89)(o, A, M),
                        i(90)(o, A, u),
                        i(91)(o, x),
                        i(92)(o, x),
                        i(93)(o),
                        v.toFastProperties(o),
                        v.toFastProperties(o.prototype),
                        l({
                            a: 1
                        }),
                        l({
                            b: 2
                        }),
                        l({
                            c: 3
                        }),
                        l(1),
                        l(function() {}),
                        l(void 0),
                        l(!1),
                        l(new o(x)),
                        M.setBounds(g.firstLineError, v.lastLineError),
                        o
                }
            }
        ).call(t, i(58))
    }
    , function(e, t) {
        "use strict";
        function i() {
            throw new Error("setTimeout has not been defined")
        }
        function n() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (p === setTimeout)
                return setTimeout(e, 0);
            if ((p === i || !p) && setTimeout)
                return p = setTimeout,
                    setTimeout(e, 0);
            try {
                return p(e, 0)
            } catch (t) {
                try {
                    return p.call(null, e, 0)
                } catch (t) {
                    return p.call(this, e, 0)
                }
            }
        }
        function o(e) {
            if (d === clearTimeout)
                return clearTimeout(e);
            if ((d === n || !d) && clearTimeout)
                return d = clearTimeout,
                    clearTimeout(e);
            try {
                return d(e)
            } catch (t) {
                try {
                    return d.call(null, e)
                } catch (t) {
                    return d.call(this, e)
                }
            }
        }
        function r() {
            h && f && (h = !1,
                f.length ? v = f.concat(v) : g = -1,
            v.length && s())
        }
        function s() {
            if (!h) {
                var e = a(r);
                h = !0;
                for (var t = v.length; t; ) {
                    for (f = v,
                             v = []; ++g < t; )
                        f && f[g].run();
                    g = -1,
                        t = v.length
                }
                f = null,
                    h = !1,
                    o(e)
            }
        }
        function l(e, t) {
            this.fun = e,
                this.array = t
        }
        function c() {}
        var p, d, u = e.exports = {};
        !function() {
            try {
                p = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                p = i
            }
            try {
                d = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (e) {
                d = n
            }
        }();
        var f, v = [], h = !1, g = -1;
        u.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var i = 1; i < arguments.length; i++)
                    t[i - 1] = arguments[i];
            v.push(new l(e,t)),
            1 !== v.length || h || a(s)
        }
            ,
            l.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            u.title = "browser",
            u.browser = !0,
            u.env = {},
            u.argv = [],
            u.version = "",
            u.versions = {},
            u.on = c,
            u.addListener = c,
            u.once = c,
            u.off = c,
            u.removeListener = c,
            u.removeAllListeners = c,
            u.emit = c,
            u.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            u.cwd = function() {
                return "/"
            }
            ,
            u.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            u.umask = function() {
                return 0
            }
    }
    , function(e, t, i) {
        (function(t, n) {
                "use strict";
                function a() {
                    try {
                        var e = Q;
                        return Q = null,
                            e.apply(this, arguments)
                    } catch (t) {
                        return C.e = t,
                            C
                    }
                }
                function o(e) {
                    return Q = e,
                        a
                }
                function r(e) {
                    return null == e || e === !0 || e === !1 || "string" == typeof e || "number" == typeof e
                }
                function s(e) {
                    return "function" == typeof e || "object" === ("undefined" == typeof e ? "undefined" : k(e)) && null !== e
                }
                function l(e) {
                    return r(e) ? new Error(m(e)) : e
                }
                function c(e, t) {
                    var i, n = e.length, a = new Array(n + 1);
                    for (i = 0; i < n; ++i)
                        a[i] = e[i];
                    return a[i] = t,
                        a
                }
                function p(e, t, i) {
                    if (!M.isES5)
                        return {}.hasOwnProperty.call(e, t) ? e[t] : void 0;
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    return null != n ? null == n.get && null == n.set ? n.value : i : void 0
                }
                function d(e, t, i) {
                    if (r(e))
                        return e;
                    var n = {
                        value: i,
                        configurable: !0,
                        enumerable: !1,
                        writable: !0
                    };
                    return M.defineProperty(e, t, n),
                        e
                }
                function u(e) {
                    throw e
                }
                function f(e) {
                    try {
                        if ("function" == typeof e) {
                            var t = M.names(e.prototype)
                                , i = M.isES5 && t.length > 1
                                , n = t.length > 0 && !(1 === t.length && "constructor" === t[0])
                                , a = j.test(e + "") && M.names(e).length > 0;
                            if (i || n || a)
                                return !0
                        }
                        return !1
                    } catch (o) {
                        return !1
                    }
                }
                function v(e) {
                    function t() {}
                    t.prototype = e;
                    for (var i = 8; i--; )
                        new t;
                    return e
                }
                function h(e) {
                    return L.test(e)
                }
                function g(e, t, i) {
                    for (var n = new Array(e), a = 0; a < e; ++a)
                        n[a] = t + a + i;
                    return n
                }
                function m(e) {
                    try {
                        return e + ""
                    } catch (t) {
                        return "[no string representation]"
                    }
                }
                function b(e) {
                    return e instanceof Error || null !== e && "object" === ("undefined" == typeof e ? "undefined" : k(e)) && "string" == typeof e.message && "string" == typeof e.name
                }
                function I(e) {
                    try {
                        d(e, "isOperational", !0)
                    } catch (t) {}
                }
                function y(e) {
                    return null != e && (e instanceof Error.__BluebirdErrorTypes__.OperationalError || e.isOperational === !0)
                }
                function x(e) {
                    return b(e) && M.propertyIsWritable(e, "stack")
                }
                function E(e) {
                    return {}.toString.call(e)
                }
                function _(e, t, i) {
                    for (var n = M.names(e), a = 0; a < n.length; ++a) {
                        var o = n[a];
                        if (i(o))
                            try {
                                M.defineProperty(t, o, M.getDescriptor(e, o))
                            } catch (r) {}
                    }
                }
                function w(e) {
                    return P ? n.env[e] : void 0
                }
                function A() {
                    if ("function" == typeof Promise)
                        try {
                            var e = new Promise(function() {}
                            );
                            if ("[object Promise]" === {}.toString.call(e))
                                return Promise
                        } catch (t) {}
                }
                function T(e, t) {
                    return e.bind(t)
                }
                var k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                    : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                    , M = i(60), B = "undefined" == typeof navigator, C = {
                    e: {}
                }, Q, N = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof t ? t : null, O = function(e, t) {
                    function i() {
                        this.constructor = e,
                            this.constructor$ = t;
                        for (var i in t.prototype)
                            n.call(t.prototype, i) && "$" !== i.charAt(i.length - 1) && (this[i + "$"] = t.prototype[i])
                    }
                    var n = {}.hasOwnProperty;
                    return i.prototype = t.prototype,
                        e.prototype = new i,
                        e.prototype
                }, S = function() {
                    var e = [Array.prototype, Object.prototype, Function.prototype]
                        , t = function(t) {
                        for (var i = 0; i < e.length; ++i)
                            if (e[i] === t)
                                return !0;
                        return !1
                    };
                    if (M.isES5) {
                        var i = Object.getOwnPropertyNames;
                        return function(e) {
                            for (var n = [], a = Object.create(null); null != e && !t(e); ) {
                                var o;
                                try {
                                    o = i(e)
                                } catch (r) {
                                    return n
                                }
                                for (var s = 0; s < o.length; ++s) {
                                    var l = o[s];
                                    if (!a[l]) {
                                        a[l] = !0;
                                        var c = Object.getOwnPropertyDescriptor(e, l);
                                        null != c && null == c.get && null == c.set && n.push(l)
                                    }
                                }
                                e = M.getPrototypeOf(e)
                            }
                            return n
                        }
                    }
                    var n = {}.hasOwnProperty;
                    return function(i) {
                        if (t(i))
                            return [];
                        var a = [];
                        e: for (var o in i)
                            if (n.call(i, o))
                                a.push(o);
                            else {
                                for (var r = 0; r < e.length; ++r)
                                    if (n.call(e[r], o))
                                        continue e;
                                a.push(o)
                            }
                        return a
                    }
                }(), j = /this\s*\.\s*\S+\s*=/, L = /^[a-z$_][a-z$_0-9]*$/i, R = function() {
                    return "stack"in new Error ? function(e) {
                        return x(e) ? e : new Error(m(e))
                    }
                        : function(e) {
                            if (x(e))
                                return e;
                            try {
                                throw new Error(m(e))
                            } catch (t) {
                                return t
                            }
                        }
                }(), $ = function(e) {
                    return M.isArray(e) ? e : null
                };
                if ("undefined" != typeof Symbol && Symbol.iterator) {
                    var V = "function" == typeof Array.from ? function(e) {
                            return Array.from(e)
                        }
                            : function(e) {
                                for (var t, i = [], n = e[Symbol.iterator](); !(t = n.next()).done; )
                                    i.push(t.value);
                                return i
                            }
                    ;
                    $ = function(e) {
                        return M.isArray(e) ? e : null != e && "function" == typeof e[Symbol.iterator] ? V(e) : null
                    }
                }
                var D = "undefined" != typeof n && "[object process]" === E(n).toLowerCase()
                    , P = "undefined" != typeof n && "undefined" != typeof n.env
                    , U = {
                    isClass: f,
                    isIdentifier: h,
                    inheritedDataKeys: S,
                    getDataPropertyOrDefault: p,
                    thrower: u,
                    isArray: M.isArray,
                    asArray: $,
                    notEnumerableProp: d,
                    isPrimitive: r,
                    isObject: s,
                    isError: b,
                    canEvaluate: B,
                    errorObj: C,
                    tryCatch: o,
                    inherits: O,
                    withAppended: c,
                    maybeWrapAsError: l,
                    toFastProperties: v,
                    filledRange: g,
                    toString: m,
                    canAttachTrace: x,
                    ensureErrorObject: R,
                    originatesFromRejection: y,
                    markAsOriginatingFromRejection: I,
                    classString: E,
                    copyDescriptors: _,
                    hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
                    isNode: D,
                    hasEnvVariables: P,
                    env: w,
                    global: N,
                    getNativePromise: A,
                    domainBind: T
                };
                U.isRecentNode = U.isNode && function() {
                        var e = n.versions.node.split(".").map(Number);
                        return 0 === e[0] && e[1] > 10 || e[0] > 0
                    }(),
                U.isNode && U.toFastProperties(n);
                try {
                    throw new Error
                } catch (F) {
                    U.lastLineError = F
                }
                e.exports = U
            }
        ).call(t, function() {
            return this
        }(), i(58))
    }
    , function(e, t) {
        "use strict";
        var i = function() {
            return void 0 === this
        }();
        if (i)
            e.exports = {
                freeze: Object.freeze,
                defineProperty: Object.defineProperty,
                getDescriptor: Object.getOwnPropertyDescriptor,
                keys: Object.keys,
                names: Object.getOwnPropertyNames,
                getPrototypeOf: Object.getPrototypeOf,
                isArray: Array.isArray,
                isES5: i,
                propertyIsWritable: function(e, t) {
                    var i = Object.getOwnPropertyDescriptor(e, t);
                    return !(i && !i.writable && !i.set)
                }
            };
        else {
            var n = {}.hasOwnProperty
                , a = {}.toString
                , o = {}.constructor.prototype
                , r = function(e) {
                var t = [];
                for (var i in e)
                    n.call(e, i) && t.push(i);
                return t
            }
                , s = function(e, t) {
                return {
                    value: e[t]
                }
            }
                , l = function(e, t, i) {
                return e[t] = i.value,
                    e
            }
                , c = function(e) {
                return e
            }
                , p = function(e) {
                try {
                    return Object(e).constructor.prototype
                } catch (t) {
                    return o
                }
            }
                , d = function(e) {
                try {
                    return "[object Array]" === a.call(e)
                } catch (t) {
                    return !1
                }
            };
            e.exports = {
                isArray: d,
                keys: r,
                names: r,
                defineProperty: l,
                getDescriptor: s,
                freeze: c,
                getPrototypeOf: p,
                isES5: i,
                propertyIsWritable: function() {
                    return !0
                }
            }
        }
    }
    , function(e, t, i) {
        (function(t) {
                "use strict";
                function n() {
                    this._customScheduler = !1,
                        this._isTickUsed = !1,
                        this._lateQueue = new p(16),
                        this._normalQueue = new p(16),
                        this._haveDrainedQueues = !1,
                        this._trampolineEnabled = !0;
                    var e = this;
                    this.drainQueues = function() {
                        e._drainQueues()
                    }
                        ,
                        this._schedule = c
                }
                function a(e, t, i) {
                    this._lateQueue.push(e, t, i),
                        this._queueTick()
                }
                function o(e, t, i) {
                    this._normalQueue.push(e, t, i),
                        this._queueTick()
                }
                function r(e) {
                    this._normalQueue._pushOne(e),
                        this._queueTick()
                }
                var s;
                try {
                    throw new Error
                } catch (l) {
                    s = l
                }
                var c = i(62)
                    , p = i(64)
                    , d = i(59);
                n.prototype.setScheduler = function(e) {
                    var t = this._schedule;
                    return this._schedule = e,
                        this._customScheduler = !0,
                        t
                }
                    ,
                    n.prototype.hasCustomScheduler = function() {
                        return this._customScheduler
                    }
                    ,
                    n.prototype.enableTrampoline = function() {
                        this._trampolineEnabled = !0
                    }
                    ,
                    n.prototype.disableTrampolineIfNecessary = function() {
                        d.hasDevTools && (this._trampolineEnabled = !1)
                    }
                    ,
                    n.prototype.haveItemsQueued = function() {
                        return this._isTickUsed || this._haveDrainedQueues
                    }
                    ,
                    n.prototype.fatalError = function(e, i) {
                        i ? (t.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n"),
                            t.exit(2)) : this.throwLater(e)
                    }
                    ,
                    n.prototype.throwLater = function(e, t) {
                        if (1 === arguments.length && (t = e,
                                    e = function() {
                                        throw t
                                    }
                            ),
                            "undefined" != typeof setTimeout)
                            setTimeout(function() {
                                e(t)
                            }, 0);
                        else
                            try {
                                this._schedule(function() {
                                    e(t)
                                })
                            } catch (i) {
                                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                            }
                    }
                    ,
                    d.hasDevTools ? (n.prototype.invokeLater = function(e, t, i) {
                            this._trampolineEnabled ? a.call(this, e, t, i) : this._schedule(function() {
                                setTimeout(function() {
                                    e.call(t, i)
                                }, 100)
                            })
                        }
                            ,
                            n.prototype.invoke = function(e, t, i) {
                                this._trampolineEnabled ? o.call(this, e, t, i) : this._schedule(function() {
                                    e.call(t, i)
                                })
                            }
                            ,
                            n.prototype.settlePromises = function(e) {
                                this._trampolineEnabled ? r.call(this, e) : this._schedule(function() {
                                    e._settlePromises()
                                })
                            }
                    ) : (n.prototype.invokeLater = a,
                        n.prototype.invoke = o,
                        n.prototype.settlePromises = r),
                    n.prototype._drainQueue = function(e) {
                        for (; e.length() > 0; ) {
                            var t = e.shift();
                            if ("function" == typeof t) {
                                var i = e.shift()
                                    , n = e.shift();
                                t.call(i, n)
                            } else
                                t._settlePromises()
                        }
                    }
                    ,
                    n.prototype._drainQueues = function() {
                        this._drainQueue(this._normalQueue),
                            this._reset(),
                            this._haveDrainedQueues = !0,
                            this._drainQueue(this._lateQueue)
                    }
                    ,
                    n.prototype._queueTick = function() {
                        this._isTickUsed || (this._isTickUsed = !0,
                            this._schedule(this.drainQueues))
                    }
                    ,
                    n.prototype._reset = function() {
                        this._isTickUsed = !1
                    }
                    ,
                    e.exports = n,
                    e.exports.firstLineError = s
            }
        ).call(t, i(58))
    }
    , function(e, t, i) {
        (function(t, n, a) {
                "use strict";
                var o, r = i(59), s = function() {
                    throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n")
                }, l = r.getNativePromise();
                if (r.isNode && "undefined" == typeof MutationObserver) {
                    var c = t.setImmediate
                        , p = n.nextTick;
                    o = r.isRecentNode ? function(e) {
                        c.call(t, e)
                    }
                        : function(e) {
                            p.call(n, e)
                        }
                } else if ("function" == typeof l && "function" == typeof l.resolve) {
                    var d = l.resolve();
                    o = function(e) {
                        d.then(e)
                    }
                } else
                    o = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? "undefined" != typeof a ? function(e) {
                        a(e)
                    }
                        : "undefined" != typeof setTimeout ? function(e) {
                            setTimeout(e, 0)
                        }
                            : s : function() {
                        var e = document.createElement("div")
                            , t = {
                            attributes: !0
                        }
                            , i = !1
                            , n = document.createElement("div")
                            , a = new MutationObserver(function() {
                                e.classList.toggle("foo"),
                                    i = !1
                            }
                        );
                        a.observe(n, t);
                        var o = function() {
                            i || (i = !0,
                                n.classList.toggle("foo"))
                        };
                        return function(i) {
                            var n = new MutationObserver(function() {
                                    n.disconnect(),
                                        i()
                                }
                            );
                            n.observe(e, t),
                                o()
                        }
                    }();
                e.exports = o
            }
        ).call(t, function() {
            return this
        }(), i(58), i(63).setImmediate)
    }
    , function(e, t, i) {
        (function(e, n) {
                "use strict";
                function a(e, t) {
                    this._id = e,
                        this._clearFn = t
                }
                var o = i(58).nextTick
                    , r = Function.prototype.apply
                    , s = Array.prototype.slice
                    , l = {}
                    , c = 0;
                t.setTimeout = function() {
                    return new a(r.call(setTimeout, window, arguments),clearTimeout)
                }
                    ,
                    t.setInterval = function() {
                        return new a(r.call(setInterval, window, arguments),clearInterval)
                    }
                    ,
                    t.clearTimeout = t.clearInterval = function(e) {
                        e.close()
                    }
                    ,
                    a.prototype.unref = a.prototype.ref = function() {}
                    ,
                    a.prototype.close = function() {
                        this._clearFn.call(window, this._id)
                    }
                    ,
                    t.enroll = function(e, t) {
                        clearTimeout(e._idleTimeoutId),
                            e._idleTimeout = t
                    }
                    ,
                    t.unenroll = function(e) {
                        clearTimeout(e._idleTimeoutId),
                            e._idleTimeout = -1
                    }
                    ,
                    t._unrefActive = t.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                            e._onTimeout && e._onTimeout()
                        }, t))
                    }
                    ,
                    t.setImmediate = "function" == typeof e ? e : function(e) {
                        var i = c++
                            , n = !(arguments.length < 2) && s.call(arguments, 1);
                        return l[i] = !0,
                            o(function() {
                                l[i] && (n ? e.apply(null, n) : e.call(null),
                                    t.clearImmediate(i))
                            }),
                            i
                    }
                    ,
                    t.clearImmediate = "function" == typeof n ? n : function(e) {
                        delete l[e]
                    }
            }
        ).call(t, i(63).setImmediate, i(63).clearImmediate)
    }
    , function(e, t) {
        "use strict";
        function i(e, t, i, n, a) {
            for (var o = 0; o < a; ++o)
                i[o + n] = e[o + t],
                    e[o + t] = void 0
        }
        function n(e) {
            this._capacity = e,
                this._length = 0,
                this._front = 0
        }
        n.prototype._willBeOverCapacity = function(e) {
            return this._capacity < e
        }
            ,
            n.prototype._pushOne = function(e) {
                var t = this.length();
                this._checkCapacity(t + 1);
                var i = this._front + t & this._capacity - 1;
                this[i] = e,
                    this._length = t + 1
            }
            ,
            n.prototype.push = function(e, t, i) {
                var n = this.length() + 3;
                if (this._willBeOverCapacity(n))
                    return this._pushOne(e),
                        this._pushOne(t),
                        void this._pushOne(i);
                var a = this._front + n - 3;
                this._checkCapacity(n);
                var o = this._capacity - 1;
                this[a + 0 & o] = e,
                    this[a + 1 & o] = t,
                    this[a + 2 & o] = i,
                    this._length = n
            }
            ,
            n.prototype.shift = function() {
                var e = this._front
                    , t = this[e];
                return this[e] = void 0,
                    this._front = e + 1 & this._capacity - 1,
                    this._length--,
                    t
            }
            ,
            n.prototype.length = function() {
                return this._length
            }
            ,
            n.prototype._checkCapacity = function(e) {
                this._capacity < e && this._resizeTo(this._capacity << 1)
            }
            ,
            n.prototype._resizeTo = function(e) {
                var t = this._capacity;
                this._capacity = e;
                var n = this._front
                    , a = this._length
                    , o = n + a & t - 1;
                i(this, 0, this, t, o)
            }
            ,
            e.exports = n
    }
    , function(e, t, i) {
        "use strict";
        function n(e, t) {
            function i(n) {
                return this instanceof i ? (d(this, "message", "string" == typeof n ? n : t),
                    d(this, "name", e),
                    void (Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this))) : new i(n)
            }
            return p(i, Error),
                i
        }
        function a(e) {
            return this instanceof a ? (d(this, "name", "OperationalError"),
                d(this, "message", e),
                this.cause = e,
                this.isOperational = !0,
                void (e instanceof Error ? (d(this, "message", e.message),
                    d(this, "stack", e.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor))) : new a(e)
        }
        var o, r, s = i(60), l = s.freeze, c = i(59), p = c.inherits, d = c.notEnumerableProp, u = n("Warning", "warning"), f = n("CancellationError", "cancellation error"), v = n("TimeoutError", "timeout error"), h = n("AggregateError", "aggregate error");
        try {
            o = TypeError,
                r = RangeError
        } catch (g) {
            o = n("TypeError", "type error"),
                r = n("RangeError", "range error")
        }
        for (var m = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), b = 0; b < m.length; ++b)
            "function" == typeof Array.prototype[m[b]] && (h.prototype[m[b]] = Array.prototype[m[b]]);
        s.defineProperty(h.prototype, "length", {
            value: 0,
            configurable: !1,
            writable: !0,
            enumerable: !0
        }),
            h.prototype.isOperational = !0;
        var I = 0;
        h.prototype.toString = function() {
            var e = Array(4 * I + 1).join(" ")
                , t = "\n" + e + "AggregateError of:\n";
            I++,
                e = Array(4 * I + 1).join(" ");
            for (var i = 0; i < this.length; ++i) {
                for (var n = this[i] === this ? "[Circular AggregateError]" : this[i] + "", a = n.split("\n"), o = 0; o < a.length; ++o)
                    a[o] = e + a[o];
                n = a.join("\n"),
                    t += n + "\n"
            }
            return I--,
                t
        }
            ,
            p(a, Error);
        var y = Error.__BluebirdErrorTypes__;
        y || (y = l({
            CancellationError: f,
            TimeoutError: v,
            OperationalError: a,
            RejectionError: a,
            AggregateError: h
        }),
            s.defineProperty(Error, "__BluebirdErrorTypes__", {
                value: y,
                writable: !1,
                enumerable: !1,
                configurable: !1
            })),
            e.exports = {
                Error: Error,
                TypeError: o,
                RangeError: r,
                CancellationError: y.CancellationError,
                OperationalError: y.OperationalError,
                TimeoutError: y.TimeoutError,
                AggregateError: y.AggregateError,
                Warning: u
            }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t) {
            function n(i, n) {
                if (p(i)) {
                    if (i instanceof e)
                        return i;
                    var a = o(i);
                    if (a === c) {
                        n && n._pushContext();
                        var l = e.reject(a.e);
                        return n && n._popContext(),
                            l
                    }
                    if ("function" == typeof a) {
                        if (r(i)) {
                            var l = new e(t);
                            return i._then(l._fulfill, l._reject, void 0, l, null),
                                l
                        }
                        return s(i, a, n)
                    }
                }
                return i
            }
            function a(e) {
                return e.then
            }
            function o(e) {
                try {
                    return a(e)
                } catch (t) {
                    return c.e = t,
                        c
                }
            }
            function r(e) {
                try {
                    return d.call(e, "_promise0")
                } catch (t) {
                    return !1
                }
            }
            function s(i, n, a) {
                function o(e) {
                    s && (s._resolveCallback(e),
                        s = null)
                }
                function r(e) {
                    s && (s._rejectCallback(e, d, !0),
                        s = null)
                }
                var s = new e(t)
                    , p = s;
                a && a._pushContext(),
                    s._captureStackTrace(),
                a && a._popContext();
                var d = !0
                    , u = l.tryCatch(n).call(i, o, r);
                return d = !1,
                s && u === c && (s._rejectCallback(u.e, !0, !0),
                    s = null),
                    p
            }
            var l = i(59)
                , c = l.errorObj
                , p = l.isObject
                , d = {}.hasOwnProperty;
            return n
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n, a, o) {
            function r(e) {
                switch (e) {
                    case -2:
                        return [];
                    case -3:
                        return {};
                    case -6:
                        return new Map
                }
            }
            function s(i) {
                var n = this._promise = new e(t);
                i instanceof e && n._propagateFrom(i, 3),
                    n._setOnCancel(this),
                    this._values = i,
                    this._length = 0,
                    this._totalResolved = 0,
                    this._init(void 0, -2)
            }
            var l = i(59);
            l.isArray;
            return l.inherits(s, o),
                s.prototype.length = function() {
                    return this._length
                }
                ,
                s.prototype.promise = function() {
                    return this._promise
                }
                ,
                s.prototype._init = function c(t, i) {
                    var o = n(this._values, this._promise);
                    if (o instanceof e) {
                        o = o._target();
                        var s = o._bitField;
                        if (this._values = o,
                            0 === (50397184 & s))
                            return this._promise._setAsyncGuaranteed(),
                                o._then(c, this._reject, void 0, this, i);
                        if (0 === (33554432 & s))
                            return 0 !== (16777216 & s) ? this._reject(o._reason()) : this._cancel();
                        o = o._value()
                    }
                    if (o = l.asArray(o),
                        null === o) {
                        var p = a("expecting an array or an iterable object but got " + l.classString(o)).reason();
                        return void this._promise._rejectCallback(p, !1)
                    }
                    return 0 === o.length ? void (i === -5 ? this._resolveEmptyArray() : this._resolve(r(i))) : void this._iterate(o)
                }
                ,
                s.prototype._iterate = function(t) {
                    var i = this.getActualLength(t.length);
                    this._length = i,
                        this._values = this.shouldCopyValues() ? new Array(i) : this._values;
                    for (var a = this._promise, o = !1, r = null, s = 0; s < i; ++s) {
                        var l = n(t[s], a);
                        l instanceof e ? (l = l._target(),
                            r = l._bitField) : r = null,
                            o ? null !== r && l.suppressUnhandledRejections() : null !== r ? 0 === (50397184 & r) ? (l._proxy(this, s),
                                this._values[s] = l) : o = 0 !== (33554432 & r) ? this._promiseFulfilled(l._value(), s) : 0 !== (16777216 & r) ? this._promiseRejected(l._reason(), s) : this._promiseCancelled(s) : o = this._promiseFulfilled(l, s)
                    }
                    o || a._setAsyncGuaranteed()
                }
                ,
                s.prototype._isResolved = function() {
                    return null === this._values
                }
                ,
                s.prototype._resolve = function(e) {
                    this._values = null,
                        this._promise._fulfill(e)
                }
                ,
                s.prototype._cancel = function() {
                    !this._isResolved() && this._promise._isCancellable() && (this._values = null,
                        this._promise._cancel())
                }
                ,
                s.prototype._reject = function(e) {
                    this._values = null,
                        this._promise._rejectCallback(e, !1)
                }
                ,
                s.prototype._promiseFulfilled = function(e, t) {
                    this._values[t] = e;
                    var i = ++this._totalResolved;
                    return i >= this._length && (this._resolve(this._values),
                            !0)
                }
                ,
                s.prototype._promiseCancelled = function() {
                    return this._cancel(),
                        !0
                }
                ,
                s.prototype._promiseRejected = function(e) {
                    return this._totalResolved++,
                        this._reject(e),
                        !0
                }
                ,
                s.prototype._resultCancelled = function() {
                    if (!this._isResolved()) {
                        var t = this._values;
                        if (this._cancel(),
                            t instanceof e)
                            t.cancel();
                        else
                            for (var i = 0; i < t.length; ++i)
                                t[i]instanceof e && t[i].cancel()
                    }
                }
                ,
                s.prototype.shouldCopyValues = function() {
                    return !0
                }
                ,
                s.prototype.getActualLength = function(e) {
                    return e
                }
                ,
                s
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e) {
            function t() {
                this._trace = new t.CapturedTrace(n())
            }
            function i() {
                if (a)
                    return new t
            }
            function n() {
                var e = o.length - 1;
                if (e >= 0)
                    return o[e]
            }
            var a = !1
                , o = [];
            return e.prototype._promiseCreated = function() {}
                ,
                e.prototype._pushContext = function() {}
                ,
                e.prototype._popContext = function() {
                    return null
                }
                ,
                e._peekContext = e.prototype._peekContext = function() {}
                ,
                t.prototype._pushContext = function() {
                    void 0 !== this._trace && (this._trace._promiseCreated = null,
                        o.push(this._trace))
                }
                ,
                t.prototype._popContext = function() {
                    if (void 0 !== this._trace) {
                        var e = o.pop()
                            , t = e._promiseCreated;
                        return e._promiseCreated = null,
                            t
                    }
                    return null
                }
                ,
                t.CapturedTrace = null,
                t.create = i,
                t.deactivateLongStackTraces = function() {}
                ,
                t.activateLongStackTraces = function() {
                    var i = e.prototype._pushContext
                        , o = e.prototype._popContext
                        , r = e._peekContext
                        , s = e.prototype._peekContext
                        , l = e.prototype._promiseCreated;
                    t.deactivateLongStackTraces = function() {
                        e.prototype._pushContext = i,
                            e.prototype._popContext = o,
                            e._peekContext = r,
                            e.prototype._peekContext = s,
                            e.prototype._promiseCreated = l,
                            a = !1
                    }
                        ,
                        a = !0,
                        e.prototype._pushContext = t.prototype._pushContext,
                        e.prototype._popContext = t.prototype._popContext,
                        e._peekContext = e.prototype._peekContext = n,
                        e.prototype._promiseCreated = function() {
                            var e = this._peekContext();
                            e && null == e._promiseCreated && (e._promiseCreated = this);
                        }
                }
                ,
                t
        }
    }
    , function(e, t, i) {
        (function(t) {
                "use strict";
                var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    }
                        : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        }
                ;
                e.exports = function(e, a) {
                    function o(e, t) {
                        return {
                            promise: t
                        }
                    }
                    function r() {
                        return !1
                    }
                    function s(e, t, i) {
                        var n = this;
                        try {
                            e(t, i, function(e) {
                                if ("function" != typeof e)
                                    throw new TypeError("onCancel must be a function, got: " + D.toString(e));
                                n._attachCancellationCallback(e)
                            })
                        } catch (a) {
                            return a
                        }
                    }
                    function l(e) {
                        if (!this._isCancellable())
                            return this;
                        var t = this._onCancel();
                        void 0 !== t ? D.isArray(t) ? t.push(e) : this._setOnCancel([t, e]) : this._setOnCancel(e)
                    }
                    function c() {
                        return this._onCancelField
                    }
                    function p(e) {
                        this._onCancelField = e
                    }
                    function d() {
                        this._cancellationParent = void 0,
                            this._onCancelField = void 0
                    }
                    function u(e, t) {
                        if (0 !== (1 & t)) {
                            this._cancellationParent = e;
                            var i = e._branchesRemainingToCancel;
                            void 0 === i && (i = 0),
                                e._branchesRemainingToCancel = i + 1
                        }
                        0 !== (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
                    }
                    function f(e, t) {
                        0 !== (2 & t) && e._isBound() && this._setBoundTo(e._boundTo)
                    }
                    function v() {
                        var t = this._boundTo;
                        return void 0 !== t && t instanceof e ? t.isFulfilled() ? t.value() : void 0 : t
                    }
                    function h() {
                        this._trace = new O(this._peekContext())
                    }
                    function g(e, t) {
                        if (P(e)) {
                            var i = this._trace;
                            if (void 0 !== i && t && (i = i._parent),
                                void 0 !== i)
                                i.attachExtraTrace(e);
                            else if (!e.__stackCleaned__) {
                                var n = A(e);
                                D.notEnumerableProp(e, "stack", n.message + "\n" + n.stack.join("\n")),
                                    D.notEnumerableProp(e, "__stackCleaned__", !0)
                            }
                        }
                    }
                    function m(e, t, i, n, a) {
                        if (void 0 === e && null !== t && X) {
                            if (void 0 !== a && a._returnedNonUndefined())
                                return;
                            if (0 === (65535 & n._bitField))
                                return;
                            i && (i += " ");
                            var o = ""
                                , r = "";
                            if (t._trace) {
                                for (var s = t._trace.stack.split("\n"), l = _(s), c = l.length - 1; c >= 0; --c) {
                                    var p = l[c];
                                    if (!F.test(p)) {
                                        var d = p.match(H);
                                        d && (o = "at " + d[1] + ":" + d[2] + ":" + d[3] + " ");
                                        break
                                    }
                                }
                                if (l.length > 0)
                                    for (var u = l[0], c = 0; c < s.length; ++c)
                                        if (s[c] === u) {
                                            c > 0 && (r = "\n" + s[c - 1]);
                                            break
                                        }
                            }
                            var f = "a promise was created in a " + i + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + r;
                            n._warn(f, !0, t)
                        }
                    }
                    function b(e, t) {
                        var i = e + " is deprecated and will be removed in a future version.";
                        return t && (i += " Use " + t + " instead."),
                            I(i)
                    }
                    function I(t, i, n) {
                        if (se.warnings) {
                            var a, o = new V(t);
                            if (i)
                                n._attachExtraTrace(o);
                            else if (se.longStackTraces && (a = e._peekContext()))
                                a.attachExtraTrace(o);
                            else {
                                var r = A(o);
                                o.stack = r.message + "\n" + r.stack.join("\n")
                            }
                            ie("warning", o) || T(o, "", !0)
                        }
                    }
                    function y(e, t) {
                        for (var i = 0; i < t.length - 1; ++i)
                            t[i].push("From previous event:"),
                                t[i] = t[i].join("\n");
                        return i < t.length && (t[i] = t[i].join("\n")),
                        e + "\n" + t.join("\n")
                    }
                    function x(e) {
                        for (var t = 0; t < e.length; ++t)
                            (0 === e[t].length || t + 1 < e.length && e[t][0] === e[t + 1][0]) && (e.splice(t, 1),
                                t--)
                    }
                    function E(e) {
                        for (var t = e[0], i = 1; i < e.length; ++i) {
                            for (var n = e[i], a = t.length - 1, o = t[a], r = -1, s = n.length - 1; s >= 0; --s)
                                if (n[s] === o) {
                                    r = s;
                                    break
                                }
                            for (var s = r; s >= 0; --s) {
                                var l = n[s];
                                if (t[a] !== l)
                                    break;
                                t.pop(),
                                    a--
                            }
                            t = n
                        }
                    }
                    function _(e) {
                        for (var t = [], i = 0; i < e.length; ++i) {
                            var n = e[i]
                                , a = "    (No stack trace)" === n || z.test(n)
                                , o = a && ae(n);
                            a && !o && (W && " " !== n.charAt(0) && (n = "    " + n),
                                t.push(n))
                        }
                        return t
                    }
                    function w(e) {
                        for (var t = e.stack.replace(/\s+$/g, "").split("\n"), i = 0; i < t.length; ++i) {
                            var n = t[i];
                            if ("    (No stack trace)" === n || z.test(n))
                                break
                        }
                        return i > 0 && "SyntaxError" != e.name && (t = t.slice(i)),
                            t
                    }
                    function A(e) {
                        var t = e.stack
                            , i = e.toString();
                        return t = "string" == typeof t && t.length > 0 ? w(e) : ["    (No stack trace)"],
                            {
                                message: i,
                                stack: "SyntaxError" == e.name ? t : _(t)
                            }
                    }
                    function T(e, t, i) {
                        if ("undefined" != typeof console) {
                            var a;
                            if (D.isObject(e)) {
                                var o = e.stack;
                                a = t + q(o, e)
                            } else
                                a = t + String(e);
                            "function" == typeof L ? L(a, i) : "function" != typeof console.log && "object" !== n(console.log) || console.log(a)
                        }
                    }
                    function k(e, t, i, n) {
                        var a = !1;
                        try {
                            "function" == typeof t && (a = !0,
                                "rejectionHandled" === e ? t(n) : t(i, n))
                        } catch (o) {
                            $.throwLater(o)
                        }
                        "unhandledRejection" === e ? ie(e, i, n) || a || T(i, "Unhandled rejection ") : ie(e, n)
                    }
                    function M(e) {
                        var t;
                        if ("function" == typeof e)
                            t = "[function " + (e.name || "anonymous") + "]";
                        else {
                            t = e && "function" == typeof e.toString ? e.toString() : D.toString(e);
                            var i = /\[object [a-zA-Z0-9$_]+\]/;
                            if (i.test(t))
                                try {
                                    var n = JSON.stringify(e);
                                    t = n
                                } catch (a) {}
                            0 === t.length && (t = "(empty array)")
                        }
                        return "(<" + B(t) + ">, no stack trace)"
                    }
                    function B(e) {
                        var t = 41;
                        return e.length < t ? e : e.substr(0, t - 3) + "..."
                    }
                    function C() {
                        return "function" == typeof re
                    }
                    function Q(e) {
                        var t = e.match(oe);
                        if (t)
                            return {
                                fileName: t[1],
                                line: parseInt(t[2], 10)
                            }
                    }
                    function N(e, t) {
                        if (C()) {
                            for (var i, n, a = e.stack.split("\n"), o = t.stack.split("\n"), r = -1, s = -1, l = 0; l < a.length; ++l) {
                                var c = Q(a[l]);
                                if (c) {
                                    i = c.fileName,
                                        r = c.line;
                                    break
                                }
                            }
                            for (var l = 0; l < o.length; ++l) {
                                var c = Q(o[l]);
                                if (c) {
                                    n = c.fileName,
                                        s = c.line;
                                    break
                                }
                            }
                            r < 0 || s < 0 || !i || !n || i !== n || r >= s || (ae = function(e) {
                                    if (U.test(e))
                                        return !0;
                                    var t = Q(e);
                                    return !!(t && t.fileName === i && r <= t.line && t.line <= s)
                                }
                            )
                        }
                    }
                    function O(e) {
                        this._parent = e,
                            this._promisesCreated = 0;
                        var t = this._length = 1 + (void 0 === e ? 0 : e._length);
                        re(this, O),
                        t > 32 && this.uncycle()
                    }
                    var S, j, L, R = e._getDomain, $ = e._async, V = i(65).Warning, D = i(59), P = D.canAttachTrace, U = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, F = /\((?:timers\.js):\d+:\d+\)/, H = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, z = null, q = null, W = !1, G = !(0 == D.env("BLUEBIRD_DEBUG") || !D.env("BLUEBIRD_DEBUG") && "development" !== D.env("NODE_ENV")), Y = !(0 == D.env("BLUEBIRD_WARNINGS") || !G && !D.env("BLUEBIRD_WARNINGS")), J = !(0 == D.env("BLUEBIRD_LONG_STACK_TRACES") || !G && !D.env("BLUEBIRD_LONG_STACK_TRACES")), X = 0 != D.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (Y || !!D.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                    e.prototype.suppressUnhandledRejections = function() {
                        var e = this._target();
                        e._bitField = e._bitField & -1048577 | 524288
                    }
                        ,
                        e.prototype._ensurePossibleRejectionHandled = function() {
                            if (0 === (524288 & this._bitField)) {
                                this._setRejectionIsUnhandled();
                                var e = this;
                                setTimeout(function() {
                                    e._notifyUnhandledRejection()
                                }, 1)
                            }
                        }
                        ,
                        e.prototype._notifyUnhandledRejectionIsHandled = function() {
                            k("rejectionHandled", S, void 0, this)
                        }
                        ,
                        e.prototype._setReturnedNonUndefined = function() {
                            this._bitField = 268435456 | this._bitField
                        }
                        ,
                        e.prototype._returnedNonUndefined = function() {
                            return 0 !== (268435456 & this._bitField)
                        }
                        ,
                        e.prototype._notifyUnhandledRejection = function() {
                            if (this._isRejectionUnhandled()) {
                                var e = this._settledValue();
                                this._setUnhandledRejectionIsNotified(),
                                    k("unhandledRejection", j, e, this)
                            }
                        }
                        ,
                        e.prototype._setUnhandledRejectionIsNotified = function() {
                            this._bitField = 262144 | this._bitField
                        }
                        ,
                        e.prototype._unsetUnhandledRejectionIsNotified = function() {
                            this._bitField = this._bitField & -262145
                        }
                        ,
                        e.prototype._isUnhandledRejectionNotified = function() {
                            return (262144 & this._bitField) > 0
                        }
                        ,
                        e.prototype._setRejectionIsUnhandled = function() {
                            this._bitField = 1048576 | this._bitField
                        }
                        ,
                        e.prototype._unsetRejectionIsUnhandled = function() {
                            this._bitField = this._bitField & -1048577,
                            this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(),
                                this._notifyUnhandledRejectionIsHandled())
                        }
                        ,
                        e.prototype._isRejectionUnhandled = function() {
                            return (1048576 & this._bitField) > 0
                        }
                        ,
                        e.prototype._warn = function(e, t, i) {
                            return I(e, t, i || this)
                        }
                        ,
                        e.onPossiblyUnhandledRejection = function(e) {
                            var t = R();
                            j = "function" == typeof e ? null === t ? e : D.domainBind(t, e) : void 0
                        }
                        ,
                        e.onUnhandledRejectionHandled = function(e) {
                            var t = R();
                            S = "function" == typeof e ? null === t ? e : D.domainBind(t, e) : void 0
                        }
                    ;
                    var K = function() {};
                    e.longStackTraces = function() {
                        if ($.haveItemsQueued() && !se.longStackTraces)
                            throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                        if (!se.longStackTraces && C()) {
                            var t = e.prototype._captureStackTrace
                                , i = e.prototype._attachExtraTrace;
                            se.longStackTraces = !0,
                                K = function() {
                                    if ($.haveItemsQueued() && !se.longStackTraces)
                                        throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                                    e.prototype._captureStackTrace = t,
                                        e.prototype._attachExtraTrace = i,
                                        a.deactivateLongStackTraces(),
                                        $.enableTrampoline(),
                                        se.longStackTraces = !1
                                }
                                ,
                                e.prototype._captureStackTrace = h,
                                e.prototype._attachExtraTrace = g,
                                a.activateLongStackTraces(),
                                $.disableTrampolineIfNecessary()
                        }
                    }
                        ,
                        e.hasLongStackTraces = function() {
                            return se.longStackTraces && C()
                        }
                    ;
                    var Z = function() {
                        try {
                            if ("function" == typeof CustomEvent) {
                                var e = new CustomEvent("CustomEvent");
                                return D.global.dispatchEvent(e),
                                    function(e, t) {
                                        var i = new CustomEvent(e.toLowerCase(),{
                                            detail: t,
                                            cancelable: !0
                                        });
                                        return !D.global.dispatchEvent(i)
                                    }
                            }
                            if ("function" == typeof Event) {
                                var e = new Event("CustomEvent");
                                return D.global.dispatchEvent(e),
                                    function(e, t) {
                                        var i = new Event(e.toLowerCase(),{
                                            cancelable: !0
                                        });
                                        return i.detail = t,
                                            !D.global.dispatchEvent(i)
                                    }
                            }
                            var e = document.createEvent("CustomEvent");
                            return e.initCustomEvent("testingtheevent", !1, !0, {}),
                                D.global.dispatchEvent(e),
                                function(e, t) {
                                    var i = document.createEvent("CustomEvent");
                                    return i.initCustomEvent(e.toLowerCase(), !1, !0, t),
                                        !D.global.dispatchEvent(i)
                                }
                        } catch (t) {}
                        return function() {
                            return !1
                        }
                    }()
                        , ee = function() {
                        return D.isNode ? function() {
                            return t.emit.apply(t, arguments)
                        }
                            : D.global ? function(e) {
                                var t = "on" + e.toLowerCase()
                                    , i = D.global[t];
                                return !!i && (i.apply(D.global, [].slice.call(arguments, 1)),
                                        !0)
                            }
                                : function() {
                                    return !1
                                }
                    }()
                        , te = {
                        promiseCreated: o,
                        promiseFulfilled: o,
                        promiseRejected: o,
                        promiseResolved: o,
                        promiseCancelled: o,
                        promiseChained: function(e, t, i) {
                            return {
                                promise: t,
                                child: i
                            }
                        },
                        warning: function(e, t) {
                            return {
                                warning: t
                            }
                        },
                        unhandledRejection: function(e, t, i) {
                            return {
                                reason: t,
                                promise: i
                            }
                        },
                        rejectionHandled: o
                    }
                        , ie = function(e) {
                        var t = !1;
                        try {
                            t = ee.apply(null, arguments)
                        } catch (i) {
                            $.throwLater(i),
                                t = !0
                        }
                        var n = !1;
                        try {
                            n = Z(e, te[e].apply(null, arguments))
                        } catch (i) {
                            $.throwLater(i),
                                n = !0
                        }
                        return n || t
                    };
                    e.config = function(t) {
                        if (t = Object(t),
                            "longStackTraces"in t && (t.longStackTraces ? e.longStackTraces() : !t.longStackTraces && e.hasLongStackTraces() && K()),
                            "warnings"in t) {
                            var i = t.warnings;
                            se.warnings = !!i,
                                X = se.warnings,
                            D.isObject(i) && "wForgottenReturn"in i && (X = !!i.wForgottenReturn)
                        }
                        if ("cancellation"in t && t.cancellation && !se.cancellation) {
                            if ($.haveItemsQueued())
                                throw new Error("cannot enable cancellation after promises are in use");
                            e.prototype._clearCancellationData = d,
                                e.prototype._propagateFrom = u,
                                e.prototype._onCancel = c,
                                e.prototype._setOnCancel = p,
                                e.prototype._attachCancellationCallback = l,
                                e.prototype._execute = s,
                                ne = u,
                                se.cancellation = !0
                        }
                        return "monitoring"in t && (t.monitoring && !se.monitoring ? (se.monitoring = !0,
                            e.prototype._fireEvent = ie) : !t.monitoring && se.monitoring && (se.monitoring = !1,
                                e.prototype._fireEvent = r)),
                            e
                    }
                        ,
                        e.prototype._fireEvent = r,
                        e.prototype._execute = function(e, t, i) {
                            try {
                                e(t, i)
                            } catch (n) {
                                return n
                            }
                        }
                        ,
                        e.prototype._onCancel = function() {}
                        ,
                        e.prototype._setOnCancel = function(e) {}
                        ,
                        e.prototype._attachCancellationCallback = function(e) {}
                        ,
                        e.prototype._captureStackTrace = function() {}
                        ,
                        e.prototype._attachExtraTrace = function() {}
                        ,
                        e.prototype._clearCancellationData = function() {}
                        ,
                        e.prototype._propagateFrom = function(e, t) {}
                    ;
                    var ne = f
                        , ae = function() {
                        return !1
                    }
                        , oe = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                    D.inherits(O, Error),
                        a.CapturedTrace = O,
                        O.prototype.uncycle = function() {
                            var e = this._length;
                            if (!(e < 2)) {
                                for (var t = [], i = {}, n = 0, a = this; void 0 !== a; ++n)
                                    t.push(a),
                                        a = a._parent;
                                e = this._length = n;
                                for (var n = e - 1; n >= 0; --n) {
                                    var o = t[n].stack;
                                    void 0 === i[o] && (i[o] = n)
                                }
                                for (var n = 0; n < e; ++n) {
                                    var r = t[n].stack
                                        , s = i[r];
                                    if (void 0 !== s && s !== n) {
                                        s > 0 && (t[s - 1]._parent = void 0,
                                            t[s - 1]._length = 1),
                                            t[n]._parent = void 0,
                                            t[n]._length = 1;
                                        var l = n > 0 ? t[n - 1] : this;
                                        s < e - 1 ? (l._parent = t[s + 1],
                                            l._parent.uncycle(),
                                            l._length = l._parent._length + 1) : (l._parent = void 0,
                                            l._length = 1);
                                        for (var c = l._length + 1, p = n - 2; p >= 0; --p)
                                            t[p]._length = c,
                                                c++;
                                        return
                                    }
                                }
                            }
                        }
                        ,
                        O.prototype.attachExtraTrace = function(e) {
                            if (!e.__stackCleaned__) {
                                this.uncycle();
                                for (var t = A(e), i = t.message, n = [t.stack], a = this; void 0 !== a; )
                                    n.push(_(a.stack.split("\n"))),
                                        a = a._parent;
                                E(n),
                                    x(n),
                                    D.notEnumerableProp(e, "stack", y(i, n)),
                                    D.notEnumerableProp(e, "__stackCleaned__", !0)
                            }
                        }
                    ;
                    var re = function() {
                        var e = /^\s*at\s*/
                            , t = function(e, t) {
                            return "string" == typeof e ? e : void 0 !== t.name && void 0 !== t.message ? t.toString() : M(t)
                        };
                        if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                            Error.stackTraceLimit += 6,
                                z = e,
                                q = t;
                            var i = Error.captureStackTrace;
                            return ae = function(e) {
                                return U.test(e)
                            }
                                ,
                                function(e, t) {
                                    Error.stackTraceLimit += 6,
                                        i(e, t),
                                        Error.stackTraceLimit -= 6
                                }
                        }
                        var a = new Error;
                        if ("string" == typeof a.stack && a.stack.split("\n")[0].indexOf("stackDetection@") >= 0)
                            return z = /@/,
                                q = t,
                                W = !0,
                                function(e) {
                                    e.stack = (new Error).stack
                                }
                                ;
                        var o;
                        try {
                            throw new Error
                        } catch (r) {
                            o = "stack"in r
                        }
                        return "stack"in a || !o || "number" != typeof Error.stackTraceLimit ? (q = function(e, t) {
                            return "string" == typeof e ? e : "object" !== ("undefined" == typeof t ? "undefined" : n(t)) && "function" != typeof t || void 0 === t.name || void 0 === t.message ? M(t) : t.toString()
                        }
                            ,
                            null) : (z = e,
                                q = t,
                                function(e) {
                                    Error.stackTraceLimit += 6;
                                    try {
                                        throw new Error
                                    } catch (t) {
                                        e.stack = t.stack
                                    }
                                    Error.stackTraceLimit -= 6
                                }
                        )
                    }([]);
                    "undefined" != typeof console && "undefined" != typeof console.warn && (L = function(e) {
                        console.warn(e)
                    }
                        ,
                        D.isNode && t.stderr.isTTY ? L = function(e, t) {
                            var i = t ? "[33m" : "[31m";
                            console.warn(i + e + "[0m\n")
                        }
                            : D.isNode || "string" != typeof (new Error).stack || (L = function(e, t) {
                                    console.warn("%c" + e, t ? "color: darkorange" : "color: red")
                                }
                            ));
                    var se = {
                        warnings: Y,
                        longStackTraces: !1,
                        cancellation: !1,
                        monitoring: !1
                    };
                    return J && e.longStackTraces(),
                        {
                            longStackTraces: function() {
                                return se.longStackTraces
                            },
                            warnings: function() {
                                return se.warnings
                            },
                            cancellation: function() {
                                return se.cancellation
                            },
                            monitoring: function() {
                                return se.monitoring
                            },
                            propagateFromFunction: function() {
                                return ne
                            },
                            boundValueFunction: function() {
                                return v
                            },
                            checkForgottenReturns: m,
                            setBounds: N,
                            warn: I,
                            deprecated: b,
                            CapturedTrace: O,
                            fireDomEvent: Z,
                            fireGlobalEvent: ee
                        }
                }
            }
        ).call(t, i(58))
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n) {
            function a(e, t, i) {
                this.promise = e,
                    this.type = t,
                    this.handler = i,
                    this.called = !1,
                    this.cancelPromise = null
            }
            function o(e) {
                this.finallyHandler = e
            }
            function r(e, t) {
                return null != e.cancelPromise && (arguments.length > 1 ? e.cancelPromise._reject(t) : e.cancelPromise._cancel(),
                        e.cancelPromise = null,
                        !0)
            }
            function s() {
                return c.call(this, this.promise._target()._settledValue())
            }
            function l(e) {
                if (!r(this, e))
                    return u.e = e,
                        u
            }
            function c(i) {
                var a = this.promise
                    , c = this.handler;
                if (!this.called) {
                    this.called = !0;
                    var p = this.isFinallyHandler() ? c.call(a._boundValue()) : c.call(a._boundValue(), i);
                    if (p === n)
                        return p;
                    if (void 0 !== p) {
                        a._setReturnedNonUndefined();
                        var f = t(p, a);
                        if (f instanceof e) {
                            if (null != this.cancelPromise) {
                                if (f._isCancelled()) {
                                    var v = new d("late cancellation observer");
                                    return a._attachExtraTrace(v),
                                        u.e = v,
                                        u
                                }
                                f.isPending() && f._attachCancellationCallback(new o(this))
                            }
                            return f._then(s, l, void 0, this, void 0)
                        }
                    }
                }
                return a.isRejected() ? (r(this),
                    u.e = i,
                    u) : (r(this),
                    i)
            }
            var p = i(59)
                , d = e.CancellationError
                , u = p.errorObj
                , f = i(71)(n);
            return a.prototype.isFinallyHandler = function() {
                return 0 === this.type
            }
                ,
                o.prototype._resultCancelled = function() {
                    r(this.finallyHandler)
                }
                ,
                e.prototype._passThrough = function(e, t, i, n) {
                    return "function" != typeof e ? this.then() : this._then(i, n, void 0, new a(this,t,e), void 0)
                }
                ,
                e.prototype.lastly = e.prototype["finally"] = function(e) {
                    return this._passThrough(e, 0, c, c)
                }
                ,
                e.prototype.tap = function(e) {
                    return this._passThrough(e, 1, c)
                }
                ,
                e.prototype.tapCatch = function(t) {
                    var i = arguments.length;
                    if (1 === i)
                        return this._passThrough(t, 1, void 0, c);
                    var n, a = new Array(i - 1), o = 0;
                    for (n = 0; n < i - 1; ++n) {
                        var r = arguments[n];
                        if (!p.isObject(r))
                            return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + p.classString(r)));
                        a[o++] = r
                    }
                    a.length = o;
                    var s = arguments[n];
                    return this._passThrough(f(a, s, this), 1, void 0, c)
                }
                ,
                a
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            function t(t, i, s) {
                return function(l) {
                    var c = s._boundValue();
                    e: for (var p = 0; p < t.length; ++p) {
                        var d = t[p];
                        if (d === Error || null != d && d.prototype instanceof Error) {
                            if (l instanceof d)
                                return o(i).call(c, l)
                        } else if ("function" == typeof d) {
                            var u = o(d).call(c, l);
                            if (u === r)
                                return u;
                            if (u)
                                return o(i).call(c, l)
                        } else if (n.isObject(l)) {
                            for (var f = a(d), v = 0; v < f.length; ++v) {
                                var h = f[v];
                                if (d[h] != l[h])
                                    continue e
                            }
                            return o(i).call(c, l)
                        }
                    }
                    return e
                }
            }
            var n = i(59)
                , a = i(60).keys
                , o = n.tryCatch
                , r = n.errorObj;
            return t
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e instanceof Error && p.getPrototypeOf(e) === Error.prototype
        }
        function a(e) {
            var t;
            if (n(e)) {
                t = new c(e),
                    t.name = e.name,
                    t.message = e.message,
                    t.stack = e.stack;
                for (var i = p.keys(e), a = 0; a < i.length; ++a) {
                    var o = i[a];
                    d.test(o) || (t[o] = e[o])
                }
                return t
            }
            return r.markAsOriginatingFromRejection(e),
                e
        }
        function o(e, t) {
            return function(i, n) {
                if (null !== e) {
                    if (i) {
                        var o = a(s(i));
                        e._attachExtraTrace(o),
                            e._reject(o)
                    } else if (t) {
                        for (var r = arguments.length, l = new Array(Math.max(r - 1, 0)), c = 1; c < r; ++c)
                            l[c - 1] = arguments[c];
                        e._fulfill(l)
                    } else
                        e._fulfill(n);
                    e = null
                }
            }
        }
        var r = i(59)
            , s = r.maybeWrapAsError
            , l = i(65)
            , c = l.OperationalError
            , p = i(60)
            , d = /^(?:name|message|stack|cause)$/;
        e.exports = o
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n, a, o) {
            var r = i(59)
                , s = r.tryCatch;
            e.method = function(i) {
                if ("function" != typeof i)
                    throw new e.TypeError("expecting a function but got " + r.classString(i));
                return function() {
                    var n = new e(t);
                    n._captureStackTrace(),
                        n._pushContext();
                    var a = s(i).apply(this, arguments)
                        , r = n._popContext();
                    return o.checkForgottenReturns(a, r, "Promise.method", n),
                        n._resolveFromSyncValue(a),
                        n
                }
            }
                ,
                e.attempt = e["try"] = function(i) {
                    if ("function" != typeof i)
                        return a("expecting a function but got " + r.classString(i));
                    var n = new e(t);
                    n._captureStackTrace(),
                        n._pushContext();
                    var l;
                    if (arguments.length > 1) {
                        o.deprecated("calling Promise.try with more than 1 argument");
                        var c = arguments[1]
                            , p = arguments[2];
                        l = r.isArray(c) ? s(i).apply(p, c) : s(i).call(p, c)
                    } else
                        l = s(i)();
                    var d = n._popContext();
                    return o.checkForgottenReturns(l, d, "Promise.try", n),
                        n._resolveFromSyncValue(l),
                        n
                }
                ,
                e.prototype._resolveFromSyncValue = function(e) {
                    e === r.errorObj ? this._rejectCallback(e.e, !1) : this._resolveCallback(e, !0)
                }
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e, t, i, n) {
            var a = !1
                , o = function(e, t) {
                this._reject(t)
            }
                , r = function(e, t) {
                t.promiseRejectionQueued = !0,
                    t.bindingPromise._then(o, o, null, this, e)
            }
                , s = function(e, t) {
                0 === (50397184 & this._bitField) && this._resolveCallback(t.target)
            }
                , l = function(e, t) {
                t.promiseRejectionQueued || this._reject(e)
            };
            e.prototype.bind = function(o) {
                a || (a = !0,
                    e.prototype._propagateFrom = n.propagateFromFunction(),
                    e.prototype._boundValue = n.boundValueFunction());
                var c = i(o)
                    , p = new e(t);
                p._propagateFrom(this, 1);
                var d = this._target();
                if (p._setBoundTo(c),
                    c instanceof e) {
                    var u = {
                        promiseRejectionQueued: !1,
                        promise: p,
                        target: d,
                        bindingPromise: c
                    };
                    d._then(t, r, void 0, p, u),
                        c._then(s, l, void 0, p, u),
                        p._setOnCancel(c)
                } else
                    p._resolveCallback(d);
                return p
            }
                ,
                e.prototype._setBoundTo = function(e) {
                    void 0 !== e ? (this._bitField = 2097152 | this._bitField,
                        this._boundTo = e) : this._bitField = this._bitField & -2097153
                }
                ,
                e.prototype._isBound = function() {
                    return 2097152 === (2097152 & this._bitField)
                }
                ,
                e.bind = function(t, i) {
                    return e.resolve(i).bind(t)
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n, a) {
            var o = i(59)
                , r = o.tryCatch
                , s = o.errorObj
                , l = e._async;
            e.prototype["break"] = e.prototype.cancel = function() {
                if (!a.cancellation())
                    return this._warn("cancellation is disabled");
                for (var e = this, t = e; e._isCancellable(); ) {
                    if (!e._cancelBy(t)) {
                        t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                        break
                    }
                    var i = e._cancellationParent;
                    if (null == i || !i._isCancellable()) {
                        e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                        break
                    }
                    e._isFollowing() && e._followee().cancel(),
                        e._setWillBeCancelled(),
                        t = e,
                        e = i
                }
            }
                ,
                e.prototype._branchHasCancelled = function() {
                    this._branchesRemainingToCancel--
                }
                ,
                e.prototype._enoughBranchesHaveCancelled = function() {
                    return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0
                }
                ,
                e.prototype._cancelBy = function(e) {
                    return e === this ? (this._branchesRemainingToCancel = 0,
                        this._invokeOnCancel(),
                        !0) : (this._branchHasCancelled(),
                    !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(),
                        !0))
                }
                ,
                e.prototype._cancelBranched = function() {
                    this._enoughBranchesHaveCancelled() && this._cancel()
                }
                ,
                e.prototype._cancel = function() {
                    this._isCancellable() && (this._setCancelled(),
                        l.invoke(this._cancelPromises, this, void 0))
                }
                ,
                e.prototype._cancelPromises = function() {
                    this._length() > 0 && this._settlePromises()
                }
                ,
                e.prototype._unsetOnCancel = function() {
                    this._onCancelField = void 0
                }
                ,
                e.prototype._isCancellable = function() {
                    return this.isPending() && !this._isCancelled()
                }
                ,
                e.prototype.isCancellable = function() {
                    return this.isPending() && !this.isCancelled()
                }
                ,
                e.prototype._doInvokeOnCancel = function(e, t) {
                    if (o.isArray(e))
                        for (var i = 0; i < e.length; ++i)
                            this._doInvokeOnCancel(e[i], t);
                    else if (void 0 !== e)
                        if ("function" == typeof e) {
                            if (!t) {
                                var n = r(e).call(this._boundValue());
                                n === s && (this._attachExtraTrace(n.e),
                                    l.throwLater(n.e))
                            }
                        } else
                            e._resultCancelled(this)
                }
                ,
                e.prototype._invokeOnCancel = function() {
                    var e = this._onCancel();
                    this._unsetOnCancel(),
                        l.invoke(this._doInvokeOnCancel, this, e)
                }
                ,
                e.prototype._invokeInternalOnCancel = function() {
                    this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0),
                        this._unsetOnCancel())
                }
                ,
                e.prototype._resultCancelled = function() {
                    this.cancel()
                }
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e) {
            function t() {
                return this.value
            }
            function i() {
                throw this.reason
            }
            e.prototype["return"] = e.prototype.thenReturn = function(i) {
                return i instanceof e && i.suppressUnhandledRejections(),
                    this._then(t, void 0, void 0, {
                        value: i
                    }, void 0)
            }
                ,
                e.prototype["throw"] = e.prototype.thenThrow = function(e) {
                    return this._then(i, void 0, void 0, {
                        reason: e
                    }, void 0)
                }
                ,
                e.prototype.catchThrow = function(e) {
                    if (arguments.length <= 1)
                        return this._then(void 0, i, void 0, {
                            reason: e
                        }, void 0);
                    var t = arguments[1]
                        , n = function() {
                        throw t
                    };
                    return this.caught(e, n)
                }
                ,
                e.prototype.catchReturn = function(i) {
                    if (arguments.length <= 1)
                        return i instanceof e && i.suppressUnhandledRejections(),
                            this._then(void 0, t, void 0, {
                                value: i
                            }, void 0);
                    var n = arguments[1];
                    n instanceof e && n.suppressUnhandledRejections();
                    var a = function() {
                        return n
                    };
                    return this.caught(i, a)
                }
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e) {
            function t(e) {
                void 0 !== e ? (e = e._target(),
                    this._bitField = e._bitField,
                    this._settledValueField = e._isFateSealed() ? e._settledValue() : void 0) : (this._bitField = 0,
                    this._settledValueField = void 0)
            }
            t.prototype._settledValue = function() {
                return this._settledValueField
            }
            ;
            var i = t.prototype.value = function() {
                    if (!this.isFulfilled())
                        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                    return this._settledValue()
                }
                , n = t.prototype.error = t.prototype.reason = function() {
                    if (!this.isRejected())
                        throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                    return this._settledValue()
                }
                , a = t.prototype.isFulfilled = function() {
                    return 0 !== (33554432 & this._bitField)
                }
                , o = t.prototype.isRejected = function() {
                    return 0 !== (16777216 & this._bitField)
                }
                , r = t.prototype.isPending = function() {
                    return 0 === (50397184 & this._bitField)
                }
                , s = t.prototype.isResolved = function() {
                    return 0 !== (50331648 & this._bitField)
                }
            ;
            t.prototype.isCancelled = function() {
                return 0 !== (8454144 & this._bitField)
            }
                ,
                e.prototype.__isCancelled = function() {
                    return 65536 === (65536 & this._bitField)
                }
                ,
                e.prototype._isCancelled = function() {
                    return this._target().__isCancelled()
                }
                ,
                e.prototype.isCancelled = function() {
                    return 0 !== (8454144 & this._target()._bitField)
                }
                ,
                e.prototype.isPending = function() {
                    return r.call(this._target())
                }
                ,
                e.prototype.isRejected = function() {
                    return o.call(this._target())
                }
                ,
                e.prototype.isFulfilled = function() {
                    return a.call(this._target())
                }
                ,
                e.prototype.isResolved = function() {
                    return s.call(this._target())
                }
                ,
                e.prototype.value = function() {
                    return i.call(this._target())
                }
                ,
                e.prototype.reason = function() {
                    var e = this._target();
                    return e._unsetRejectionIsUnhandled(),
                        n.call(e)
                }
                ,
                e.prototype._value = function() {
                    return this._settledValue()
                }
                ,
                e.prototype._reason = function() {
                    return this._unsetRejectionIsUnhandled(),
                        this._settledValue()
                }
                ,
                e.PromiseInspection = t
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n, a, o, r) {
            var s, l = i(59), c = l.canEvaluate, p = l.tryCatch, d = l.errorObj;
            if (c) {
                for (var u = function(e) {
                    return new Function("value","holder","                             \n\t            'use strict';                                                    \n\t            holder.pIndex = value;                                           \n\t            holder.checkFulfillment(this);                                   \n\t            ".replace(/Index/g, e))
                }, f = function(e) {
                    return new Function("promise","holder","                           \n\t            'use strict';                                                    \n\t            holder.pIndex = promise;                                         \n\t            ".replace(/Index/g, e))
                }, v = function(t) {
                    for (var i = new Array(t), n = 0; n < i.length; ++n)
                        i[n] = "this.p" + (n + 1);
                    var a = i.join(" = ") + " = null;"
                        , r = "var promise;\n" + i.map(function(e) {
                            return "                                                         \n\t                promise = " + e + ";                                      \n\t                if (promise instanceof Promise) {                            \n\t                    promise.cancel();                                        \n\t                }                                                            \n\t            "
                        }).join("\n")
                        , s = i.join(", ")
                        , l = "Holder$" + t
                        , c = "return function(tryCatch, errorObj, Promise, async) {    \n\t            'use strict';                                                    \n\t            function [TheName](fn) {                                         \n\t                [TheProperties]                                              \n\t                this.fn = fn;                                                \n\t                this.asyncNeeded = true;                                     \n\t                this.now = 0;                                                \n\t            }                                                                \n\t                                                                             \n\t            [TheName].prototype._callFunction = function(promise) {          \n\t                promise._pushContext();                                      \n\t                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\t                promise._popContext();                                       \n\t                if (ret === errorObj) {                                      \n\t                    promise._rejectCallback(ret.e, false);                   \n\t                } else {                                                     \n\t                    promise._resolveCallback(ret);                           \n\t                }                                                            \n\t            };                                                               \n\t                                                                             \n\t            [TheName].prototype.checkFulfillment = function(promise) {       \n\t                var now = ++this.now;                                        \n\t                if (now === [TheTotal]) {                                    \n\t                    if (this.asyncNeeded) {                                  \n\t                        async.invoke(this._callFunction, this, promise);     \n\t                    } else {                                                 \n\t                        this._callFunction(promise);                         \n\t                    }                                                        \n\t                                                                             \n\t                }                                                            \n\t            };                                                               \n\t                                                                             \n\t            [TheName].prototype._resultCancelled = function() {              \n\t                [CancellationCode]                                           \n\t            };                                                               \n\t                                                                             \n\t            return [TheName];                                                \n\t        }(tryCatch, errorObj, Promise, async);                               \n\t        ";
                    return c = c.replace(/\[TheName\]/g, l).replace(/\[TheTotal\]/g, t).replace(/\[ThePassedArguments\]/g, s).replace(/\[TheProperties\]/g, a).replace(/\[CancellationCode\]/g, r),
                        new Function("tryCatch","errorObj","Promise","async",c)(p, d, e, o)
                }, h = [], g = [], m = [], b = 0; b < 8; ++b)
                    h.push(v(b + 1)),
                        g.push(u(b + 1)),
                        m.push(f(b + 1));
                s = function(e) {
                    this._reject(e)
                }
            }
            e.join = function() {
                var i, o = arguments.length - 1;
                if (o > 0 && "function" == typeof arguments[o] && (i = arguments[o],
                    o <= 8 && c)) {
                    var p = new e(a);
                    p._captureStackTrace();
                    for (var d = h[o - 1], u = new d(i), f = g, v = 0; v < o; ++v) {
                        var b = n(arguments[v], p);
                        if (b instanceof e) {
                            b = b._target();
                            var I = b._bitField;
                            0 === (50397184 & I) ? (b._then(f[v], s, void 0, p, u),
                                m[v](b, u),
                                u.asyncNeeded = !1) : 0 !== (33554432 & I) ? f[v].call(p, b._value(), u) : 0 !== (16777216 & I) ? p._reject(b._reason()) : p._cancel()
                        } else
                            f[v].call(p, b, u)
                    }
                    if (!p._isFateSealed()) {
                        if (u.asyncNeeded) {
                            var y = r();
                            null !== y && (u.fn = l.domainBind(y, u.fn))
                        }
                        p._setAsyncGuaranteed(),
                            p._setOnCancel(u)
                    }
                    return p
                }
                for (var x = arguments.length, E = new Array(x), _ = 0; _ < x; ++_)
                    E[_] = arguments[_];
                i && E.pop();
                var p = new t(E).promise();
                return void 0 !== i ? p.spread(i) : p
            }
        }
    }
    , function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        e.exports = function(e, t, a, o, r, s) {
            function l(e, t, i, n) {
                this.constructor$(e),
                    this._promise._captureStackTrace();
                var a = p();
                this._callback = null === a ? t : d.domainBind(a, t),
                    this._preservedValues = n === r ? new Array(this.length()) : null,
                    this._limit = i,
                    this._inFlight = 0,
                    this._queue = [],
                    v.invoke(this._asyncInit, this, void 0)
            }
            function c(t, i, o, r) {
                if ("function" != typeof i)
                    return a("expecting a function but got " + d.classString(i));
                var s = 0;
                if (void 0 !== o) {
                    if ("object" !== ("undefined" == typeof o ? "undefined" : n(o)) || null === o)
                        return e.reject(new TypeError("options argument must be an object but it is " + d.classString(o)));
                    if ("number" != typeof o.concurrency)
                        return e.reject(new TypeError("'concurrency' must be a number but it is " + d.classString(o.concurrency)));
                    s = o.concurrency
                }
                return s = "number" == typeof s && isFinite(s) && s >= 1 ? s : 0,
                    new l(t,i,s,r).promise()
            }
            var p = e._getDomain
                , d = i(59)
                , u = d.tryCatch
                , f = d.errorObj
                , v = e._async;
            d.inherits(l, t),
                l.prototype._asyncInit = function() {
                    this._init$(void 0, -2)
                }
                ,
                l.prototype._init = function() {}
                ,
                l.prototype._promiseFulfilled = function(t, i) {
                    var n = this._values
                        , a = this.length()
                        , r = this._preservedValues
                        , l = this._limit;
                    if (i < 0) {
                        if (i = i * -1 - 1,
                                n[i] = t,
                            l >= 1 && (this._inFlight--,
                                this._drainQueue(),
                                this._isResolved()))
                            return !0
                    } else {
                        if (l >= 1 && this._inFlight >= l)
                            return n[i] = t,
                                this._queue.push(i),
                                !1;
                        null !== r && (r[i] = t);
                        var c = this._promise
                            , p = this._callback
                            , d = c._boundValue();
                        c._pushContext();
                        var v = u(p).call(d, t, i, a)
                            , h = c._popContext();
                        if (s.checkForgottenReturns(v, h, null !== r ? "Promise.filter" : "Promise.map", c),
                            v === f)
                            return this._reject(v.e),
                                !0;
                        var g = o(v, this._promise);
                        if (g instanceof e) {
                            g = g._target();
                            var m = g._bitField;
                            if (0 === (50397184 & m))
                                return l >= 1 && this._inFlight++,
                                    n[i] = g,
                                    g._proxy(this, (i + 1) * -1),
                                    !1;
                            if (0 === (33554432 & m))
                                return 0 !== (16777216 & m) ? (this._reject(g._reason()),
                                    !0) : (this._cancel(),
                                    !0);
                            v = g._value()
                        }
                        n[i] = v
                    }
                    var b = ++this._totalResolved;
                    return b >= a && (null !== r ? this._filter(n, r) : this._resolve(n),
                            !0)
                }
                ,
                l.prototype._drainQueue = function() {
                    for (var e = this._queue, t = this._limit, i = this._values; e.length > 0 && this._inFlight < t; ) {
                        if (this._isResolved())
                            return;
                        var n = e.pop();
                        this._promiseFulfilled(i[n], n)
                    }
                }
                ,
                l.prototype._filter = function(e, t) {
                    for (var i = t.length, n = new Array(i), a = 0, o = 0; o < i; ++o)
                        e[o] && (n[a++] = t[o]);
                    n.length = a,
                        this._resolve(n)
                }
                ,
                l.prototype.preservedValues = function() {
                    return this._preservedValues
                }
                ,
                e.prototype.map = function(e, t) {
                    return c(this, e, t, null)
                }
                ,
                e.map = function(e, t, i, n) {
                    return c(e, t, i, n)
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        var n = Object.create;
        if (n) {
            var a = n(null)
                , o = n(null);
            a[" size"] = o[" size"] = 0
        }
        e.exports = function(e) {
            function t(t, i) {
                var n;
                if (null != t && (n = t[i]),
                    "function" != typeof n) {
                    var a = "Object " + p.classString(t) + " has no method '" + p.toString(i) + "'";
                    throw new e.TypeError(a)
                }
                return n
            }
            function n(e) {
                var i = this.pop()
                    , n = t(e, i);
                return n.apply(e, this)
            }
            function r(e) {
                return e[this]
            }
            function s(e) {
                var t = +this;
                return t < 0 && (t = Math.max(0, t + e.length)),
                    e[t]
            }
            var l, c, p = i(59), d = p.canEvaluate, u = p.isIdentifier, f = function(e) {
                return new Function("ensureMethod","                                    \n\t        return function(obj) {                                               \n\t            'use strict'                                                     \n\t            var len = this.length;                                           \n\t            ensureMethod(obj, 'methodName');                                 \n\t            switch(len) {                                                    \n\t                case 1: return obj.methodName(this[0]);                      \n\t                case 2: return obj.methodName(this[0], this[1]);             \n\t                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\t                case 0: return obj.methodName();                             \n\t                default:                                                     \n\t                    return obj.methodName.apply(obj, this);                  \n\t            }                                                                \n\t        };                                                                   \n\t        ".replace(/methodName/g, e))(t);
            }, v = function(e) {
                return new Function("obj","                                             \n\t        'use strict';                                                        \n\t        return obj.propertyName;                                             \n\t        ".replace("propertyName", e))
            }, h = function(e, t, i) {
                var n = i[e];
                if ("function" != typeof n) {
                    if (!u(e))
                        return null;
                    if (n = t(e),
                            i[e] = n,
                            i[" size"]++,
                        i[" size"] > 512) {
                        for (var a = Object.keys(i), o = 0; o < 256; ++o)
                            delete i[a[o]];
                        i[" size"] = a.length - 256
                    }
                }
                return n
            };
            l = function(e) {
                return h(e, f, a)
            }
                ,
                c = function(e) {
                    return h(e, v, o)
                }
                ,
                e.prototype.call = function(e) {
                    for (var t = arguments.length, i = new Array(Math.max(t - 1, 0)), a = 1; a < t; ++a)
                        i[a - 1] = arguments[a];
                    if (d) {
                        var o = l(e);
                        if (null !== o)
                            return this._then(o, void 0, void 0, i, void 0)
                    }
                    return i.push(e),
                        this._then(n, void 0, void 0, i, void 0)
                }
                ,
                e.prototype.get = function(e) {
                    var t, i = "number" == typeof e;
                    if (i)
                        t = s;
                    else if (d) {
                        var n = c(e);
                        t = null !== n ? n : r
                    } else
                        t = r;
                    return this._then(t, void 0, void 0, e, void 0)
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n, a, o, r) {
            function s(e) {
                setTimeout(function() {
                    throw e
                }, 0)
            }
            function l(e) {
                var t = n(e);
                return t !== e && "function" == typeof e._isDisposable && "function" == typeof e._getDisposer && e._isDisposable() && t._setDisposable(e._getDisposer()),
                    t
            }
            function c(t, i) {
                function a() {
                    if (r >= c)
                        return p._fulfill();
                    var o = l(t[r++]);
                    if (o instanceof e && o._isDisposable()) {
                        try {
                            o = n(o._getDisposer().tryDispose(i), t.promise)
                        } catch (d) {
                            return s(d)
                        }
                        if (o instanceof e)
                            return o._then(a, s, null, null, null)
                    }
                    a()
                }
                var r = 0
                    , c = t.length
                    , p = new e(o);
                return a(),
                    p
            }
            function p(e, t, i) {
                this._data = e,
                    this._promise = t,
                    this._context = i
            }
            function d(e, t, i) {
                this.constructor$(e, t, i)
            }
            function u(e) {
                return p.isDisposer(e) ? (this.resources[this.index]._setDisposable(e),
                    e.promise()) : e
            }
            function f(e) {
                this.length = e,
                    this.promise = null,
                    this[e - 1] = null
            }
            var v = i(59)
                , h = i(65).TypeError
                , g = i(59).inherits
                , m = v.errorObj
                , b = v.tryCatch
                , I = {};
            p.prototype.data = function() {
                return this._data
            }
                ,
                p.prototype.promise = function() {
                    return this._promise
                }
                ,
                p.prototype.resource = function() {
                    return this.promise().isFulfilled() ? this.promise().value() : I
                }
                ,
                p.prototype.tryDispose = function(e) {
                    var t = this.resource()
                        , i = this._context;
                    void 0 !== i && i._pushContext();
                    var n = t !== I ? this.doDispose(t, e) : null;
                    return void 0 !== i && i._popContext(),
                        this._promise._unsetDisposable(),
                        this._data = null,
                        n
                }
                ,
                p.isDisposer = function(e) {
                    return null != e && "function" == typeof e.resource && "function" == typeof e.tryDispose
                }
                ,
                g(d, p),
                d.prototype.doDispose = function(e, t) {
                    var i = this.data();
                    return i.call(e, e, t)
                }
                ,
                f.prototype._resultCancelled = function() {
                    for (var t = this.length, i = 0; i < t; ++i) {
                        var n = this[i];
                        n instanceof e && n.cancel()
                    }
                }
                ,
                e.using = function() {
                    var i = arguments.length;
                    if (i < 2)
                        return t("you must pass at least 2 arguments to Promise.using");
                    var a = arguments[i - 1];
                    if ("function" != typeof a)
                        return t("expecting a function but got " + v.classString(a));
                    var o, s = !0;
                    2 === i && Array.isArray(arguments[0]) ? (o = arguments[0],
                        i = o.length,
                        s = !1) : (o = arguments,
                        i--);
                    for (var l = new f(i), d = 0; d < i; ++d) {
                        var h = o[d];
                        if (p.isDisposer(h)) {
                            var g = h;
                            h = h.promise(),
                                h._setDisposable(g)
                        } else {
                            var I = n(h);
                            I instanceof e && (h = I._then(u, null, null, {
                                resources: l,
                                index: d
                            }, void 0))
                        }
                        l[d] = h
                    }
                    for (var y = new Array(l.length), d = 0; d < y.length; ++d)
                        y[d] = e.resolve(l[d]).reflect();
                    var x = e.all(y).then(function(e) {
                        for (var t = 0; t < e.length; ++t) {
                            var i = e[t];
                            if (i.isRejected())
                                return m.e = i.error(),
                                    m;
                            if (!i.isFulfilled())
                                return void x.cancel();
                            e[t] = i.value()
                        }
                        E._pushContext(),
                            a = b(a);
                        var n = s ? a.apply(void 0, e) : a(e)
                            , o = E._popContext();
                        return r.checkForgottenReturns(n, o, "Promise.using", E),
                            n
                    })
                        , E = x.lastly(function() {
                        var t = new e.PromiseInspection(x);
                        return c(l, t)
                    });
                    return l.promise = E,
                        E._setOnCancel(l),
                        E
                }
                ,
                e.prototype._setDisposable = function(e) {
                    this._bitField = 131072 | this._bitField,
                        this._disposer = e
                }
                ,
                e.prototype._isDisposable = function() {
                    return (131072 & this._bitField) > 0
                }
                ,
                e.prototype._getDisposer = function() {
                    return this._disposer
                }
                ,
                e.prototype._unsetDisposable = function() {
                    this._bitField = this._bitField & -131073,
                        this._disposer = void 0
                }
                ,
                e.prototype.disposer = function(e) {
                    if ("function" == typeof e)
                        return new d(e,this,a());
                    throw new h
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n) {
            function a(e) {
                this.handle = e
            }
            function o(e) {
                return clearTimeout(this.handle),
                    e
            }
            function r(e) {
                throw clearTimeout(this.handle),
                    e
            }
            var s = i(59)
                , l = e.TimeoutError;
            a.prototype._resultCancelled = function() {
                clearTimeout(this.handle)
            }
            ;
            var c = function(e) {
                    return p(+this).thenReturn(e)
                }
                , p = e.delay = function(i, o) {
                    var r, s;
                    return void 0 !== o ? (r = e.resolve(o)._then(c, null, null, i, void 0),
                    n.cancellation() && o instanceof e && r._setOnCancel(o)) : (r = new e(t),
                        s = setTimeout(function() {
                            r._fulfill()
                        }, +i),
                    n.cancellation() && r._setOnCancel(new a(s)),
                        r._captureStackTrace()),
                        r._setAsyncGuaranteed(),
                        r
                }
            ;
            e.prototype.delay = function(e) {
                return p(e, this)
            }
            ;
            var d = function(e, t, i) {
                var n;
                n = "string" != typeof t ? t instanceof Error ? t : new l("operation timed out") : new l(t),
                    s.markAsOriginatingFromRejection(n),
                    e._attachExtraTrace(n),
                    e._reject(n),
                null != i && i.cancel()
            };
            e.prototype.timeout = function(e, t) {
                e = +e;
                var i, s, l = new a(setTimeout(function() {
                    i.isPending() && d(i, t, s)
                }, e));
                return n.cancellation() ? (s = this.then(),
                    i = s._then(o, r, void 0, l, void 0),
                    i._setOnCancel(l)) : i = this._then(o, r, void 0, l, void 0),
                    i
            }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n, a, o, r) {
            function s(t, i, n) {
                for (var o = 0; o < i.length; ++o) {
                    n._pushContext();
                    var r = f(i[o])(t);
                    if (n._popContext(),
                        r === u) {
                        n._pushContext();
                        var s = e.reject(u.e);
                        return n._popContext(),
                            s
                    }
                    var l = a(r, n);
                    if (l instanceof e)
                        return l
                }
                return null
            }
            function l(t, i, a, o) {
                if (r.cancellation()) {
                    var s = new e(n)
                        , l = this._finallyPromise = new e(n);
                    this._promise = s.lastly(function() {
                        return l
                    }),
                        s._captureStackTrace(),
                        s._setOnCancel(this)
                } else {
                    var c = this._promise = new e(n);
                    c._captureStackTrace()
                }
                this._stack = o,
                    this._generatorFunction = t,
                    this._receiver = i,
                    this._generator = void 0,
                    this._yieldHandlers = "function" == typeof a ? [a].concat(v) : v,
                    this._yieldedPromise = null,
                    this._cancellationPhase = !1
            }
            var c = i(65)
                , p = c.TypeError
                , d = i(59)
                , u = d.errorObj
                , f = d.tryCatch
                , v = [];
            d.inherits(l, o),
                l.prototype._isResolved = function() {
                    return null === this._promise
                }
                ,
                l.prototype._cleanup = function() {
                    this._promise = this._generator = null,
                    r.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(),
                        this._finallyPromise = null)
                }
                ,
                l.prototype._promiseCancelled = function() {
                    if (!this._isResolved()) {
                        var t, i = "undefined" != typeof this._generator["return"];
                        if (i)
                            this._promise._pushContext(),
                                t = f(this._generator["return"]).call(this._generator, void 0),
                                this._promise._popContext();
                        else {
                            var n = new e.CancellationError("generator .return() sentinel");
                            e.coroutine.returnSentinel = n,
                                this._promise._attachExtraTrace(n),
                                this._promise._pushContext(),
                                t = f(this._generator["throw"]).call(this._generator, n),
                                this._promise._popContext()
                        }
                        this._cancellationPhase = !0,
                            this._yieldedPromise = null,
                            this._continue(t)
                    }
                }
                ,
                l.prototype._promiseFulfilled = function(e) {
                    this._yieldedPromise = null,
                        this._promise._pushContext();
                    var t = f(this._generator.next).call(this._generator, e);
                    this._promise._popContext(),
                        this._continue(t)
                }
                ,
                l.prototype._promiseRejected = function(e) {
                    this._yieldedPromise = null,
                        this._promise._attachExtraTrace(e),
                        this._promise._pushContext();
                    var t = f(this._generator["throw"]).call(this._generator, e);
                    this._promise._popContext(),
                        this._continue(t)
                }
                ,
                l.prototype._resultCancelled = function() {
                    if (this._yieldedPromise instanceof e) {
                        var t = this._yieldedPromise;
                        this._yieldedPromise = null,
                            t.cancel()
                    }
                }
                ,
                l.prototype.promise = function() {
                    return this._promise
                }
                ,
                l.prototype._run = function() {
                    this._generator = this._generatorFunction.call(this._receiver),
                        this._receiver = this._generatorFunction = void 0,
                        this._promiseFulfilled(void 0)
                }
                ,
                l.prototype._continue = function(t) {
                    var i = this._promise;
                    if (t === u)
                        return this._cleanup(),
                            this._cancellationPhase ? i.cancel() : i._rejectCallback(t.e, !1);
                    var n = t.value;
                    if (t.done === !0)
                        return this._cleanup(),
                            this._cancellationPhase ? i.cancel() : i._resolveCallback(n);
                    var o = a(n, this._promise);
                    if (!(o instanceof e) && (o = s(o, this._yieldHandlers, this._promise),
                        null === o))
                        return void this._promiseRejected(new p("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(n)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                    o = o._target();
                    var r = o._bitField;
                    0 === (50397184 & r) ? (this._yieldedPromise = o,
                        o._proxy(this, null)) : 0 !== (33554432 & r) ? e._async.invoke(this._promiseFulfilled, this, o._value()) : 0 !== (16777216 & r) ? e._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled()
                }
                ,
                e.coroutine = function(e, t) {
                    if ("function" != typeof e)
                        throw new p("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                    var i = Object(t).yieldHandler
                        , n = l
                        , a = (new Error).stack;
                    return function() {
                        var t = e.apply(this, arguments)
                            , o = new n((void 0),(void 0),i,a)
                            , r = o.promise();
                        return o._generator = t,
                            o._promiseFulfilled(void 0),
                            r
                    }
                }
                ,
                e.coroutine.addYieldHandler = function(e) {
                    if ("function" != typeof e)
                        throw new p("expecting a function but got " + d.classString(e));
                    v.push(e)
                }
                ,
                e.spawn = function(i) {
                    if (r.deprecated("Promise.spawn()", "Promise.coroutine()"),
                        "function" != typeof i)
                        return t("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                    var n = new l(i,this)
                        , a = n.promise();
                    return n._run(e.spawn),
                        a
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e) {
            function t(e, t) {
                var i = this;
                if (!o.isArray(e))
                    return n.call(i, e, t);
                var a = s(t).apply(i._boundValue(), [null].concat(e));
                a === l && r.throwLater(a.e)
            }
            function n(e, t) {
                var i = this
                    , n = i._boundValue()
                    , a = void 0 === e ? s(t).call(n, null) : s(t).call(n, null, e);
                a === l && r.throwLater(a.e)
            }
            function a(e, t) {
                var i = this;
                if (!e) {
                    var n = new Error(e + "");
                    n.cause = e,
                        e = n
                }
                var a = s(t).call(i._boundValue(), e);
                a === l && r.throwLater(a.e)
            }
            var o = i(59)
                , r = e._async
                , s = o.tryCatch
                , l = o.errorObj;
            e.prototype.asCallback = e.prototype.nodeify = function(e, i) {
                if ("function" == typeof e) {
                    var o = n;
                    void 0 !== i && Object(i).spread && (o = t),
                        this._then(o, a, void 0, this, e)
                }
                return this
            }
        }
    }
    , function(e, t, i) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
        ;
        e.exports = function(e, t) {
            function a(e) {
                return !_.test(e)
            }
            function o(e) {
                try {
                    return e.__isPromisified__ === !0
                } catch (t) {
                    return !1
                }
            }
            function r(e, t, i) {
                var n = v.getDataPropertyOrDefault(e, t + i, x);
                return !!n && o(n)
            }
            function s(e, t, i) {
                for (var n = 0; n < e.length; n += 2) {
                    var a = e[n];
                    if (i.test(a))
                        for (var o = a.replace(i, ""), r = 0; r < e.length; r += 2)
                            if (e[r] === o)
                                throw new I("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", t))
                }
            }
            function l(e, t, i, n) {
                for (var a = v.inheritedDataKeys(e), l = [], c = 0; c < a.length; ++c) {
                    var p = a[c]
                        , d = e[p]
                        , u = n === w || w(p, d, e);
                    "function" != typeof d || o(d) || r(e, p, t) || !n(p, d, e, u) || l.push(p, d)
                }
                return s(l, t, i),
                    l
            }
            function c(i, n, a, o, r, s) {
                function l() {
                    var a = n;
                    n === f && (a = this);
                    var o = new e(t);
                    o._captureStackTrace();
                    var r = "string" == typeof p && this !== c ? this[p] : i
                        , l = h(o, s);
                    try {
                        r.apply(a, g(arguments, l))
                    } catch (d) {
                        o._rejectCallback(m(d), !0, !0)
                    }
                    return o._isFateSealed() || o._setAsyncGuaranteed(),
                        o
                }
                var c = function() {
                    return this
                }()
                    , p = i;
                return "string" == typeof p && (i = o),
                    v.notEnumerableProp(l, "__isPromisified__", !0),
                    l
            }
            function p(e, t, i, n, a) {
                for (var o = new RegExp(A(t) + "$"), r = l(e, t, o, i), s = 0, c = r.length; s < c; s += 2) {
                    var p = r[s]
                        , d = r[s + 1]
                        , u = p + t;
                    if (n === C)
                        e[u] = C(p, f, p, d, t, a);
                    else {
                        var h = n(d, function() {
                            return C(p, f, p, d, t, a)
                        });
                        v.notEnumerableProp(h, "__isPromisified__", !0),
                            e[u] = h
                    }
                }
                return v.toFastProperties(e),
                    e
            }
            function d(e, t, i) {
                return C(e, t, void 0, e, null, i)
            }
            var u, f = {}, v = i(59), h = i(72), g = v.withAppended, m = v.maybeWrapAsError, b = v.canEvaluate, I = i(65).TypeError, y = "Async", x = {
                __isPromisified__: !0
            }, E = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"], _ = new RegExp("^(?:" + E.join("|") + ")$"), w = function(e) {
                return v.isIdentifier(e) && "_" !== e.charAt(0) && "constructor" !== e
            }, A = function(e) {
                return e.replace(/([$])/, "\\$")
            }, T = function(e) {
                for (var t = [e], i = Math.max(0, e - 1 - 3), n = e - 1; n >= i; --n)
                    t.push(n);
                for (var n = e + 1; n <= 3; ++n)
                    t.push(n);
                return t
            }, k = function(e) {
                return v.filledRange(e, "_arg", "")
            }, M = function(e) {
                return v.filledRange(Math.max(e, 3), "_arg", "")
            }, B = function(e) {
                return "number" == typeof e.length ? Math.max(Math.min(e.length, 1024), 0) : 0
            };
            u = function(i, n, a, o, r, s) {
                function l(e) {
                    var t, i = k(e).join(", "), a = e > 0 ? ", " : "";
                    return t = u ? "ret = callback.call(this, {{args}}, nodeback); break;\n" : void 0 === n ? "ret = callback({{args}}, nodeback); break;\n" : "ret = callback.call(receiver, {{args}}, nodeback); break;\n",
                        t.replace("{{args}}", i).replace(", ", a)
                }
                function c() {
                    for (var e = "", t = 0; t < d.length; ++t)
                        e += "case " + d[t] + ":" + l(d[t]);
                    return e += "                                                             \n\t        default:                                                             \n\t            var args = new Array(len + 1);                                   \n\t            var i = 0;                                                       \n\t            for (var i = 0; i < len; ++i) {                                  \n\t               args[i] = arguments[i];                                       \n\t            }                                                                \n\t            args[i] = nodeback;                                              \n\t            [CodeForCall]                                                    \n\t            break;                                                           \n\t        ".replace("[CodeForCall]", u ? "ret = callback.apply(this, args);\n" : "ret = callback.apply(receiver, args);\n")
                }
                var p = Math.max(0, B(o) - 1)
                    , d = T(p)
                    , u = "string" == typeof i || n === f
                    , b = "string" == typeof i ? "this != null ? this['" + i + "'] : fn" : "fn"
                    , I = "'use strict';                                                \n\t        var ret = function (Parameters) {                                    \n\t            'use strict';                                                    \n\t            var len = arguments.length;                                      \n\t            var promise = new Promise(INTERNAL);                             \n\t            promise._captureStackTrace();                                    \n\t            var nodeback = nodebackForPromise(promise, " + s + ");   \n\t            var ret;                                                         \n\t            var callback = tryCatch([GetFunctionCode]);                      \n\t            switch(len) {                                                    \n\t                [CodeForSwitchCase]                                          \n\t            }                                                                \n\t            if (ret === errorObj) {                                          \n\t                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\t            }                                                                \n\t            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\t            return promise;                                                  \n\t        };                                                                   \n\t        notEnumerableProp(ret, '__isPromisified__', true);                   \n\t        return ret;                                                          \n\t    ".replace("[CodeForSwitchCase]", c()).replace("[GetFunctionCode]", b);
                return I = I.replace("Parameters", M(p)),
                    new Function("Promise","fn","receiver","withAppended","maybeWrapAsError","nodebackForPromise","tryCatch","errorObj","notEnumerableProp","INTERNAL",I)(e, o, n, g, m, h, v.tryCatch, v.errorObj, v.notEnumerableProp, t)
            }
            ;
            var C = b ? u : c;
            e.promisify = function(e, t) {
                if ("function" != typeof e)
                    throw new I("expecting a function but got " + v.classString(e));
                if (o(e))
                    return e;
                t = Object(t);
                var i = void 0 === t.context ? f : t.context
                    , n = !!t.multiArgs
                    , r = d(e, i, n);
                return v.copyDescriptors(e, r, a),
                    r
            }
                ,
                e.promisifyAll = function(e, t) {
                    if ("function" != typeof e && "object" !== ("undefined" == typeof e ? "undefined" : n(e)))
                        throw new I("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                    t = Object(t);
                    var i = !!t.multiArgs
                        , a = t.suffix;
                    "string" != typeof a && (a = y);
                    var o = t.filter;
                    "function" != typeof o && (o = w);
                    var r = t.promisifier;
                    if ("function" != typeof r && (r = C),
                            !v.isIdentifier(a))
                        throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                    for (var s = v.inheritedDataKeys(e), l = 0; l < s.length; ++l) {
                        var c = e[s[l]];
                        "constructor" !== s[l] && v.isClass(c) && (p(c.prototype, a, o, r, i),
                            p(c, a, o, r, i))
                    }
                    return p(e, a, o, r, i)
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n, a) {
            function o(e) {
                var t, i = !1;
                if (void 0 !== s && e instanceof s)
                    t = d(e),
                        i = !0;
                else {
                    var n = p.keys(e)
                        , a = n.length;
                    t = new Array(2 * a);
                    for (var o = 0; o < a; ++o) {
                        var r = n[o];
                        t[o] = e[r],
                            t[o + a] = r
                    }
                }
                this.constructor$(t),
                    this._isMap = i,
                    this._init$(void 0, i ? -6 : -3)
            }
            function r(t) {
                var i, r = n(t);
                return c(r) ? (i = r instanceof e ? r._then(e.props, void 0, void 0, void 0, void 0) : new o(r).promise(),
                r instanceof e && i._propagateFrom(r, 2),
                    i) : a("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n")
            }
            var s, l = i(59), c = l.isObject, p = i(60);
            "function" == typeof Map && (s = Map);
            var d = function() {
                function e(e, n) {
                    this[t] = e,
                        this[t + i] = n,
                        t++
                }
                var t = 0
                    , i = 0;
                return function(n) {
                    i = n.size,
                        t = 0;
                    var a = new Array(2 * n.size);
                    return n.forEach(e, a),
                        a
                }
            }()
                , u = function(e) {
                for (var t = new s, i = e.length / 2 | 0, n = 0; n < i; ++n) {
                    var a = e[i + n]
                        , o = e[n];
                    t.set(a, o)
                }
                return t
            };
            l.inherits(o, t),
                o.prototype._init = function() {}
                ,
                o.prototype._promiseFulfilled = function(e, t) {
                    this._values[t] = e;
                    var i = ++this._totalResolved;
                    if (i >= this._length) {
                        var n;
                        if (this._isMap)
                            n = u(this._values);
                        else {
                            n = {};
                            for (var a = this.length(), o = 0, r = this.length(); o < r; ++o)
                                n[this._values[o + a]] = this._values[o]
                        }
                        return this._resolve(n),
                            !0
                    }
                    return !1
                }
                ,
                o.prototype.shouldCopyValues = function() {
                    return !1
                }
                ,
                o.prototype.getActualLength = function(e) {
                    return e >> 1
                }
                ,
                e.prototype.props = function() {
                    return r(this)
                }
                ,
                e.props = function(e) {
                    return r(e)
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n, a) {
            function o(i, o) {
                var l = n(i);
                if (l instanceof e)
                    return s(l);
                if (i = r.asArray(i),
                    null === i)
                    return a("expecting an array or an iterable object but got " + r.classString(i));
                var c = new e(t);
                void 0 !== o && c._propagateFrom(o, 3);
                for (var p = c._fulfill, d = c._reject, u = 0, f = i.length; u < f; ++u) {
                    var v = i[u];
                    (void 0 !== v || u in i) && e.cast(v)._then(p, d, void 0, c, null)
                }
                return c
            }
            var r = i(59)
                , s = function(e) {
                return e.then(function(t) {
                    return o(t, e)
                })
            };
            e.race = function(e) {
                return o(e, void 0)
            }
                ,
                e.prototype.race = function() {
                    return o(this, void 0)
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n, a, o, r) {
            function s(t, i, n, a) {
                this.constructor$(t);
                var r = u();
                this._fn = null === r ? i : f.domainBind(r, i),
                void 0 !== n && (n = e.resolve(n),
                    n._attachCancellationCallback(this)),
                    this._initialValue = n,
                    this._currentCancellable = null,
                    a === o ? this._eachValues = Array(this._length) : 0 === a ? this._eachValues = null : this._eachValues = void 0,
                    this._promise._captureStackTrace(),
                    this._init$(void 0, -5)
            }
            function l(e, t) {
                this.isFulfilled() ? t._resolve(e) : t._reject(e)
            }
            function c(e, t, i, a) {
                if ("function" != typeof t)
                    return n("expecting a function but got " + f.classString(t));
                var o = new s(e,t,i,a);
                return o.promise()
            }
            function p(t) {
                this.accum = t,
                    this.array._gotAccum(t);
                var i = a(this.value, this.array._promise);
                return i instanceof e ? (this.array._currentCancellable = i,
                    i._then(d, void 0, void 0, this, void 0)) : d.call(this, i)
            }
            function d(t) {
                var i = this.array
                    , n = i._promise
                    , a = v(i._fn);
                n._pushContext();
                var o;
                o = void 0 !== i._eachValues ? a.call(n._boundValue(), t, this.index, this.length) : a.call(n._boundValue(), this.accum, t, this.index, this.length),
                o instanceof e && (i._currentCancellable = o);
                var s = n._popContext();
                return r.checkForgottenReturns(o, s, void 0 !== i._eachValues ? "Promise.each" : "Promise.reduce", n),
                    o
            }
            var u = e._getDomain
                , f = i(59)
                , v = f.tryCatch;
            f.inherits(s, t),
                s.prototype._gotAccum = function(e) {
                    void 0 !== this._eachValues && null !== this._eachValues && e !== o && this._eachValues.push(e)
                }
                ,
                s.prototype._eachComplete = function(e) {
                    return null !== this._eachValues && this._eachValues.push(e),
                        this._eachValues
                }
                ,
                s.prototype._init = function() {}
                ,
                s.prototype._resolveEmptyArray = function() {
                    this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue)
                }
                ,
                s.prototype.shouldCopyValues = function() {
                    return !1
                }
                ,
                s.prototype._resolve = function(e) {
                    this._promise._resolveCallback(e),
                        this._values = null
                }
                ,
                s.prototype._resultCancelled = function(t) {
                    return t === this._initialValue ? this._cancel() : void (this._isResolved() || (this._resultCancelled$(),
                    this._currentCancellable instanceof e && this._currentCancellable.cancel(),
                    this._initialValue instanceof e && this._initialValue.cancel()))
                }
                ,
                s.prototype._iterate = function(t) {
                    this._values = t;
                    var i, n, a = t.length;
                    if (void 0 !== this._initialValue ? (i = this._initialValue,
                            n = 0) : (i = e.resolve(t[0]),
                            n = 1),
                            this._currentCancellable = i,
                            !i.isRejected())
                        for (; n < a; ++n) {
                            var o = {
                                accum: null,
                                value: t[n],
                                index: n,
                                length: a,
                                array: this
                            };
                            i = i._then(p, void 0, void 0, o, void 0)
                        }
                    void 0 !== this._eachValues && (i = i._then(this._eachComplete, void 0, void 0, this, void 0)),
                        i._then(l, l, void 0, i, this)
                }
                ,
                e.prototype.reduce = function(e, t) {
                    return c(this, e, t, null)
                }
                ,
                e.reduce = function(e, t, i, n) {
                    return c(e, t, i, n)
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n) {
            function a(e) {
                this.constructor$(e)
            }
            var o = e.PromiseInspection
                , r = i(59);
            r.inherits(a, t),
                a.prototype._promiseResolved = function(e, t) {
                    this._values[e] = t;
                    var i = ++this._totalResolved;
                    return i >= this._length && (this._resolve(this._values),
                            !0)
                }
                ,
                a.prototype._promiseFulfilled = function(e, t) {
                    var i = new o;
                    return i._bitField = 33554432,
                        i._settledValueField = e,
                        this._promiseResolved(t, i)
                }
                ,
                a.prototype._promiseRejected = function(e, t) {
                    var i = new o;
                    return i._bitField = 16777216,
                        i._settledValueField = e,
                        this._promiseResolved(t, i)
                }
                ,
                e.settle = function(e) {
                    return n.deprecated(".settle()", ".reflect()"),
                        new a(e).promise()
                }
                ,
                e.prototype.settle = function() {
                    return e.settle(this)
                }
        }
    }
    , function(e, t, i) {
        "use strict";
        e.exports = function(e, t, n) {
            function a(e) {
                this.constructor$(e),
                    this._howMany = 0,
                    this._unwrap = !1,
                    this._initialized = !1
            }
            function o(e, t) {
                if ((0 | t) !== t || t < 0)
                    return n("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                var i = new a(e)
                    , o = i.promise();
                return i.setHowMany(t),
                    i.init(),
                    o
            }
            var r = i(59)
                , s = i(65).RangeError
                , l = i(65).AggregateError
                , c = r.isArray
                , p = {};
            r.inherits(a, t),
                a.prototype._init = function() {
                    if (this._initialized) {
                        if (0 === this._howMany)
                            return void this._resolve([]);
                        this._init$(void 0, -5);
                        var e = c(this._values);
                        !this._isResolved() && e && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()))
                    }
                }
                ,
                a.prototype.init = function() {
                    this._initialized = !0,
                        this._init()
                }
                ,
                a.prototype.setUnwrap = function() {
                    this._unwrap = !0
                }
                ,
                a.prototype.howMany = function() {
                    return this._howMany
                }
                ,
                a.prototype.setHowMany = function(e) {
                    this._howMany = e
                }
                ,
                a.prototype._promiseFulfilled = function(e) {
                    return this._addFulfilled(e),
                    this._fulfilled() === this.howMany() && (this._values.length = this.howMany(),
                        1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values),
                        !0)
                }
                ,
                a.prototype._promiseRejected = function(e) {
                    return this._addRejected(e),
                        this._checkOutcome()
                }
                ,
                a.prototype._promiseCancelled = function() {
                    return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(p),
                        this._checkOutcome())
                }
                ,
                a.prototype._checkOutcome = function() {
                    if (this.howMany() > this._canPossiblyFulfill()) {
                        for (var e = new l, t = this.length(); t < this._values.length; ++t)
                            this._values[t] !== p && e.push(this._values[t]);
                        return e.length > 0 ? this._reject(e) : this._cancel(),
                            !0
                    }
                    return !1
                }
                ,
                a.prototype._fulfilled = function() {
                    return this._totalResolved
                }
                ,
                a.prototype._rejected = function() {
                    return this._values.length - this.length()
                }
                ,
                a.prototype._addRejected = function(e) {
                    this._values.push(e)
                }
                ,
                a.prototype._addFulfilled = function(e) {
                    this._values[this._totalResolved++] = e
                }
                ,
                a.prototype._canPossiblyFulfill = function() {
                    return this.length() - this._rejected()
                }
                ,
                a.prototype._getRangeError = function(e) {
                    var t = "Input array must contain at least " + this._howMany + " items but contains only " + e + " items";
                    return new s(t)
                }
                ,
                a.prototype._resolveEmptyArray = function() {
                    this._reject(this._getRangeError(0))
                }
                ,
                e.some = function(e, t) {
                    return o(e, t)
                }
                ,
                e.prototype.some = function(e) {
                    return o(this, e)
                }
                ,
                e._SomePromiseArray = a
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e, t) {
            var i = e.map;
            e.prototype.filter = function(e, n) {
                return i(this, e, n, t)
            }
                ,
                e.filter = function(e, n, a) {
                    return i(e, n, a, t)
                }
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e, t) {
            function i() {
                return o(this)
            }
            function n(e, i) {
                return a(e, i, t, t)
            }
            var a = e.reduce
                , o = e.all;
            e.prototype.each = function(e) {
                return a(this, e, t, 0)._then(i, void 0, void 0, this, void 0)
            }
                ,
                e.prototype.mapSeries = function(e) {
                    return a(this, e, t, t)
                }
                ,
                e.each = function(e, n) {
                    return a(e, n, t, 0)._then(i, void 0, void 0, e, void 0)
                }
                ,
                e.mapSeries = n
        }
    }
    , function(e, t) {
        "use strict";
        e.exports = function(e) {
            function t(e) {
                var t = new i(e)
                    , n = t.promise();
                return t.setHowMany(1),
                    t.setUnwrap(),
                    t.init(),
                    n
            }
            var i = e._SomePromiseArray;
            e.any = function(e) {
                return t(e)
            }
                ,
                e.prototype.any = function() {
                    return t(this)
                }
        }
    }
    , function(e, t) {
        "use strict";
        function i(e) {
            for (var t = String.fromCharCode(e.charCodeAt(0) + e.length), i = 1; i < e.length; i++)
                t += String.fromCharCode(e.charCodeAt(i) + e.charCodeAt(i - 1));
            return encodeURIComponent(t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = i
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function a() {
            var e = l["default"].isMobile()
                , t = document.createElement("div")
                , i = w
                , n = "#fff"
                , a = ""
                , o = ""
                , s = ""
                , c = ""
                , p = "";
            e ? (m["default"].preview = i.mobile.btn.preview,
                s = "CHAT" + i.mobile.btn.icon.online,
                c = i.mobile.btn.text.online,
                p = i.mobile.btn.picture.online,
                a = (0,
                    h["default"])("btn-mobile-" + i.mobile.btn.type + "-css", {
                    bgColor: "#" + i.mobile.btn.theme,
                    textColor: n,
                    position: i.mobile.btn.position
                }),
                o = (0,
                    h["default"])("btn-" + i.mobile.btn.type, {
                    btnIcon: s,
                    btnText: c,
                    btnSrc: p
                })) : (s = "CHAT" + i.desktop.btn.icon.online,
                c = i.desktop.btn.text.online,
                p = i.desktop.btn.picture.online,
                a = (0,
                    h["default"])("btn-desktop-" + i.desktop.btn.type + "-css", {
                    bgColor: "#" + i.desktop.btn.theme,
                    textColor: n,
                    position: i.desktop.btn.position
                }),
                o = (0,
                    h["default"])("btn-" + i.desktop.btn.type, {
                    btnIcon: s,
                    btnText: c,
                    btnSrc: p
                })),
                (0,
                    d["default"])(a, "MEIQIA-BTN-STYLE"),
                t.id = "MEIQIA-BTN-HOLDER",
                t.innerHTML = o,
                document.body.appendChild(t);
            var u = (0,
                h["default"])("icon-round-css", {
                cdn: r["default"].cdn,
                tail: r["default"].tail
            });
            (0,
                d["default"])(u, "MEIQIA-ICON-STYLE"),
                (0,
                    I["default"])(),
                A(),
            e && "round" === i.mobile.btn.type && (0,
                f["default"])("mobile", document.getElementById("MEIQIA-BTN-HOLDER"), document.getElementById("MEIQIA-BTN")),
                m["default"].renderFakeBtn = !0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = a;
        var o = i(15)
            , r = n(o)
            , s = i(8)
            , l = n(s)
            , c = i(26)
            , p = (n(c),
            i(18))
            , d = n(p)
            , u = i(23)
            , f = n(u)
            , v = i(20)
            , h = n(v)
            , g = i(11)
            , m = n(g)
            , b = i(24)
            , I = n(b)
            , y = i(14)
            , x = n(y)
            , E = i(16)
            , _ = n(E)
            , w = {
            desktop: {
                btn: {
                    icon: {
                        offline: 1,
                        online: 1
                    },
                    picture: {
                        offline: "",
                        online: ""
                    },
                    position: {
                        bottom: "20",
                        horizontal: 60,
                        type: "right"
                    },
                    preview: "open",
                    text: {
                        offline: "下班了，给我们留言吧",
                        online: "我们在线，来聊聊吧"
                    },
                    theme: "007aff",
                    type: "round"
                },
                panel: {
                    customer_content: "",
                    customer_photo_type: "small",
                    position: {
                        bottom: 0,
                        horizontal: 60,
                        type: "right"
                    },
                    theme: ["007aff", "white", "ffffff"],
                    type: "fiesta"
                },
                pop: !1
            },
            https: "close",
            mobile: {
                btn: {
                    icon: {
                        offline: 1,
                        online: 1
                    },
                    picture: {
                        offline: "",
                        online: ""
                    },
                    position: {
                        bottom: "10",
                        horizontal: "10",
                        type: "right"
                    },
                    preview: "open",
                    text: {
                        offline: "下班了，给我们留言吧",
                        online: "我们在线，来聊聊吧"
                    },
                    theme: "007aff",
                    type: "round"
                },
                panel: {
                    position: {
                        bottom: 0,
                        horizontal: 0,
                        type: ""
                    },
                    theme: ["007aff", "white"],
                    type: "fiesta"
                },
                pop: !1
            },
            removeBrand: "close",
            ring: "open",
            ticketOnly: "close"
        }
            , A = function(e) {
            document.getElementById("MEIQIA-BTN").addEventListener("click", function(e) {
                (0,
                    _["default"])(),
                    m["default"].renderFakeBtn = !1,
                    (0,
                        x["default"])(),
                    window._MEIQIA("allSet", function() {
                        window._MEIQIA("showPanel")
                    })
            })
        }
    }
    , function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function a(e) {
            var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (t = document.cookie.match(i)) ? decodeURI(t[2]) : null
        }
        function o(e) {
            var t, i = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (t = document.cookie.match(i)) ? unescape(t[2]) : null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.delAkjCookie = t.saveVisitInfo = t.renderTicket = t.renderOrder = void 0;
        var r = i(19)
            , s = n(r)
            , l = i(15)
            , c = n(l)
            , p = i(97)
            , d = n(p)
            , u = i(98)
            , f = n(u)
            , v = i(50)
            , h = n(v)
            , g = i(8)
            , m = (n(g),
            i(12))
            , b = n(m)
            , I = ".ikongjian.com"
            , y = [{
            key: 101,
            name: "北京"
        }, {
            key: 201,
            name: "成都"
        }, {
            key: 301,
            name: "上海"
        }, {
            key: 401,
            name: "广州"
        }, {
            key: 401,
            name: "佛山"
        }, {
            key: 402,
            name: "深圳"
        }, {
            key: 402,
            name: "惠州"
        }, {
            key: 402,
            name: "东莞"
        }, {
            key: 303,
            name: "杭州"
        }, {
            key: 202,
            name: "昆明"
        }, {
            key: 403,
            name: "郑州"
        }, {
            key: 304,
            name: "南昌"
        }, {
            key: 305,
            name: "淮安"
        }, {
            key: 302,
            name: "济南"
        }, {
            key: 405,
            name: "武汉"
        }, {
            key: 601,
            name: "西安"
        }, {
            key: 601,
            name: "咸阳"
        }, {
            key: 102,
            name: "天津"
        }, {
            key: 103,
            name: "廊坊"
        }, {
            key: 104,
            name: "太原"
        }, {
            key: 307,
            name: "苏州"
        }, {
            key: 307,
            name: "无锡"
        }, {
            key: 203,
            name: "重庆"
        }, {
            key: 501,
            name: "哈尔滨"
        }, {
            key: 308,
            name: "南京"
        }, {
            key: 204,
            name: "贵阳"
        }]
            , x = function(e, t) {
            var i = void 0
                , n = void 0
                , r = void 0
                , l = void 0;
            "m.ikongjian.com" === t ? (i = o("wap_referrer_url"),
                n = o("wap_entry_url"),
                r = o("wap_reservation_url"),
                l = o("wap_browse_url")) : (i = o("www_referrer_url"),
                n = o("www_entry_url"),
                r = o("www_reservation_url"),
                l = o("www_browse_url"));
            var p = {
                info: {
                    utm_city: a("utm_city"),
                    utm_keyword: a("utm_keyword"),
                    utm_medium: a("utm_medium"),
                    utm_source: a("utm_source"),
                    utm_unit: a("utm_unit"),
                    utm_plan: a("utm_plan"),
                    utm_page: a("utm_page"),
                    utm_account: a("utm_account"),
                    referrer_url: i,
                    entry_url: n,
                    reservation_url: r,
                    browse_url_list: l,
                    platform_code: "m.ikongjian.com" === t ? 15 : 14
                },
                ent_id: e.entId,
                track_id: e.trackId
            };
            s["default"].ajax({
                url: c["default"].chat + "/aikongjian/save_visit_info?ent_id=" + e.entId,
                type: "post",
                dataType: "json",
                contentType: "application/json",
                data: p,
                success: function() {}
            })
        }
            , E = function(e) {
            document.getElementById("akj-sub") && document.getElementById("akj-sub").addEventListener("click", function() {
                var t, i, n = "";
                return "conv" === e ? (t = document.getElementById("akj-name").value,
                    i = document.getElementById("akj-tel").value,
                    n = document.getElementById("akj-city").value) : (t = document.getElementById("akj-name-ticket").value,
                    i = document.getElementById("akj-tel-ticket").value,
                    n = document.getElementById("akj-city-ticket").value),
                    t ? i ? h["default"].isPhoneNum(i) ? t.length > 20 ? ((0,
                        f["default"])("请输填写正确用户名", 2e3),
                        !1) : void s["default"].ajax({
                        url: c["default"].chat + "/aikongjian/reserve?ent_id=" + d["default"].entId,
                        type: "post",
                        dataType: "json",
                        contentType: "application/json",
                        data: {
                            from_role: "client",
                            from_type: e,
                            track_id: d["default"].trackId,
                            conv_id: d["default"].convId,
                            username: t,
                            mobile: i,
                            area_code: n,
                            ent_id: d["default"].entId
                        },
                        success: function(e) {
                            0 === e.result && d["default"].messenger.targets.parent.send("akjDelCookies^@#true"),
                                (0,
                                    f["default"])(e.msg, 2e3)
                        },
                        error: function() {
                            (0,
                                f["default"])("预约失败", 2e3)
                        }
                    }) : ((0,
                        f["default"])("请填写正确的电话号码", 2e3),
                        !1) : ((0,
                        f["default"])("请填写电话号码", 2e3),
                        !1) : ((0,
                        f["default"])("请填写用户名", 2e3),
                        !1)
            })
        }
            , _ = function(e, t) {
            t.citys = y;
            var i = d["default"].tpl("akj-order", t);
            document.getElementById(e).innerHTML = i,
                E("conv")
        }
            , w = function() {
            var e = d["default"].tpl("akj-leave-msg", {
                citys: y
            });
            document.getElementById("ticketForm").innerHTML = e,
                E("ticket")
        }
            , A = function(e) {
            "m.ikongjian.com" === e ? (b["default"].expire("wap_referrer_url", {
                domain: I
            }),
                b["default"].expire("wap_entry_url", {
                    domain: I
                }),
                b["default"].expire("wap_reservation_url", {
                    domain: I
                }),
                b["default"].expire("wap_browse_url", {
                    domain: I
                })) : (b["default"].expire("www_referrer_url", {
                domain: I
            }),
                b["default"].expire("www_entry_url", {
                    domain: I
                }),
                b["default"].expire("www_reservation_url", {
                    domain: I
                }),
                b["default"].expire("www_browse_url", {
                    domain: I
                })),
                b["default"].expire("utm_city", {
                    domain: I
                }),
                b["default"].expire("utm_keyword", {
                    domain: I
                }),
                b["default"].expire("utm_medium", {
                    domain: I
                }),
                b["default"].expire("utm_source", {
                    domain: I
                }),
                b["default"].expire("utm_unit", {
                    domain: I
                }),
                b["default"].expire("utm_plan", {
                    domain: I
                }),
                b["default"].expire("utm_page", {
                    domain: I
                }),
                b["default"].expire("utm_account", {
                    domain: I
                })
        };
        t.renderOrder = _,
            t.renderTicket = w,
            t.saveVisitInfo = x,
            t.delAkjCookie = A
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = {
                agentToken: null,
                browserId: null,
                clientMsgNum: 0,
                convId: null,
                convNewCreate: !1,
                device: null,
                emojiGroup: ["smile", "laughing", "blush", "heart_eyes", "smirk", "flushed", "grin", "kissing_smiling_eyes", "wink", "kissing_closed_eyes", "stuck_out_tongue_winking_eye", "sleeping", "worried", "sweat_smile", "cold_sweat", "joy", "sob", "angry", "mask", "scream", "sunglasses", "thumbsup", "clap", "ok_hand"],
                entId: null,
                fakeSentMsg: [],
                agentSchedulingMsg: null,
                features: {
                    emoji: !0,
                    evaluation: !0,
                    photo: !1,
                    upload: !1
                },
                groupToken: null,
                historyArray: [],
                historyTimes: 0,
                isBasie: null,
                isEnd: !1,
                inputting: !1,
                isReconnect: !1,
                lastMsgDate: null,
                limit: 5,
                loserClub: [],
                language: "zh",
                messenger: null,
                msgId: [],
                msgLimit: 10,
                page: 0,
                ring: !1,
                ringing: !1,
                scheduler: !1,
                scheduling: !1,
                servability: !1,
                socket: !0,
                style: null,
                tpl: null,
                trackId: null,
                type: null,
                visitId: null,
                blacklist: !1,
                fallback: null,
                surveyRendered: !1,
                surveyDone: !1,
                initializeBodyHeight: 1,
                msgHolderFlag: !1,
                isStandalone: !1,
                schedulerMsg: !1,
                chatHasEnd: !1,
                shenmaActionData: {}
            }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t["default"] = function(e, t) {
                var i = document.getElementById("alert")
                    , n = document.getElementById("alertInside")
                    , a = document.getElementById("alertHide");
                clearTimeout(window.alertCountdown);
                var o = e
                    , r = "";
                "hide" === e && (o = "",
                    r = "hide"),
                    n.innerHTML = o,
                    i.className = r;
                var s = function() {
                    n.innerHTML = "",
                        i.className = "hide"
                };
                t && (window.alertCountdown = setTimeout(function() {
                    s()
                }, t)),
                a["class"] || a.addEventListener("click", function() {
                    s(),
                        a.title = "close-alert"
                })
            }
    }
]);
