!(function (t, e) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = e(require("react"), require("react-dom")))
        : "function" == typeof define && define.amd
        ? define(["react", "react-dom"], e)
        : "object" == typeof exports
        ? (exports.ReactGridLayout = e(require("react"), require("react-dom")))
        : (t.ReactGridLayout = e(t.React, t.ReactDOM))
})(window, function (t, e) {
    return (function (t) {
        var e = {}
        function r(n) {
            if (e[n]) return e[n].exports
            var o = (e[n] = { i: n, l: !1, exports: {} })
            return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports
        }
        return (
            (r.m = t),
            (r.c = e),
            (r.d = function (t, e, n) {
                r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n })
            }),
            (r.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                    Object.defineProperty(t, "__esModule", { value: !0 })
            }),
            (r.t = function (t, e) {
                if ((1 & e && (t = r(t)), 8 & e)) return t
                if (4 & e && "object" == typeof t && t && t.__esModule) return t
                var n = Object.create(null)
                if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var o in t)
                        r.d(
                            n,
                            o,
                            function (e) {
                                return t[e]
                            }.bind(null, o)
                        )
                return n
            }),
            (r.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default
                          }
                        : function () {
                              return t
                          }
                return r.d(e, "a", e), e
            }),
            (r.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }),
            (r.p = ""),
            r((r.s = 16))
        )
    })([
        function (t, e, r) {
            t.exports = r(20)()
        },
        function (t, e, r) {
            "use strict"
            r.r(e),
                r.d(e, "bottom", function () {
                    return l
                }),
                r.d(e, "cloneLayout", function () {
                    return f
                }),
                r.d(e, "cloneLayoutItem", function () {
                    return p
                }),
                r.d(e, "childrenEqual", function () {
                    return d
                }),
                r.d(e, "fastRGLPropsEqual", function () {
                    return h
                }),
                r.d(e, "fastPositionEqual", function () {
                    return y
                }),
                r.d(e, "collides", function () {
                    return g
                }),
                r.d(e, "compact", function () {
                    return b
                }),
                r.d(e, "compactItem", function () {
                    return O
                }),
                r.d(e, "correctBounds", function () {
                    return w
                }),
                r.d(e, "getLayoutItem", function () {
                    return S
                }),
                r.d(e, "getFirstCollision", function () {
                    return j
                }),
                r.d(e, "getAllCollisions", function () {
                    return D
                }),
                r.d(e, "getStatics", function () {
                    return P
                }),
                r.d(e, "moveElement", function () {
                    return x
                }),
                r.d(e, "moveElementAwayFromCollision", function () {
                    return R
                }),
                r.d(e, "perc", function () {
                    return _
                }),
                r.d(e, "setTransform", function () {
                    return z
                }),
                r.d(e, "setTopLeft", function () {
                    return C
                }),
                r.d(e, "sortLayoutItems", function () {
                    return k
                }),
                r.d(e, "sortLayoutItemsByRowCol", function () {
                    return E
                }),
                r.d(e, "sortLayoutItemsByColRow", function () {
                    return M
                }),
                r.d(e, "synchronizeLayoutWithChildren", function () {
                    return T
                }),
                r.d(e, "validateLayout", function () {
                    return H
                }),
                r.d(e, "compactType", function () {
                    return N
                }),
                r.d(e, "autoBindHandlers", function () {
                    return L
                }),
                r.d(e, "noop", function () {
                    return W
                })
            var n = r(3),
                o = r.n(n),
                a = r(2),
                i = r.n(a)
            function s(t, e) {
                var r = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? s(Object(r), !0).forEach(function (e) {
                              c(t, e, r[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : s(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                          })
                }
                return t
            }
            function c(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            function l(t) {
                for (var e, r = 0, n = 0, o = t.length; n < o; n++) (e = t[n].y + t[n].h) > r && (r = e)
                return r
            }
            function f(t) {
                for (var e = Array(t.length), r = 0, n = t.length; r < n; r++) e[r] = p(t[r])
                return e
            }
            function p(t) {
                return {
                    w: t.w,
                    h: t.h,
                    x: t.x,
                    y: t.y,
                    i: t.i,
                    minW: t.minW,
                    maxW: t.maxW,
                    minH: t.minH,
                    maxH: t.maxH,
                    moved: Boolean(t.moved),
                    static: Boolean(t.static),
                    isDraggable: t.isDraggable,
                    isResizable: t.isResizable,
                    resizeHandles: t.resizeHandles,
                    isBounded: t.isBounded,
                }
            }
            function d(t, e) {
                return o()(
                    i.a.Children.map(t, function (t) {
                        return t.key
                    }),
                    i.a.Children.map(e, function (t) {
                        return t.key
                    })
                )
            }
            var h = r(19)
            function y(t, e) {
                return t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
            }
            function g(t, e) {
                return t.i !== e.i && !(t.x + t.w <= e.x) && !(t.x >= e.x + e.w) && !(t.y + t.h <= e.y) && !(t.y >= e.y + e.h)
            }
            function b(t, e, r) {
                for (var n = P(t), o = k(t, e), a = Array(t.length), i = 0, s = o.length; i < s; i++) {
                    var u = p(o[i])
                    u.static || ((u = O(n, u, e, r, o)), n.push(u)), (a[t.indexOf(o[i])] = u), (u.moved = !1)
                }
                return a
            }
            var m = { x: "w", y: "h" }
            function v(t, e, r, n) {
                var o = m[n]
                e[n] += 1
                for (
                    var a =
                        t
                            .map(function (t) {
                                return t.i
                            })
                            .indexOf(e.i) + 1;
                    a < t.length;
                    a++
                ) {
                    var i = t[a]
                    if (!i.static) {
                        if (i.y > e.y + e.h) break
                        g(e, i) && v(t, i, r + e[o], n)
                    }
                }
                e[n] = r
            }
            function O(t, e, r, n, o) {
                var a,
                    i = "horizontal" === r
                if ("vertical" === r) for (e.y = Math.min(l(t), e.y); e.y > 0 && !j(t, e); ) e.y--
                else if (i) for (e.y = Math.min(l(t), e.y); e.x > 0 && !j(t, e); ) e.x--
                for (; (a = j(t, e)); ) i ? v(o, e, a.x + a.w, "x") : v(o, e, a.y + a.h, "y"), i && e.x + e.w > n && ((e.x = n - e.w), e.y++)
                return e
            }
            function w(t, e) {
                for (var r = P(t), n = 0, o = t.length; n < o; n++) {
                    var a = t[n]
                    if ((a.x + a.w > e.cols && (a.x = e.cols - a.w), a.x < 0 && ((a.x = 0), (a.w = e.cols)), a.static)) for (; j(r, a); ) a.y++
                    else r.push(a)
                }
                return t
            }
            function S(t, e) {
                for (var r = 0, n = t.length; r < n; r++) if (t[r].i === e) return t[r]
            }
            function j(t, e) {
                for (var r = 0, n = t.length; r < n; r++) if (g(t[r], e)) return t[r]
            }
            function D(t, e) {
                return t.filter(function (t) {
                    return g(t, e)
                })
            }
            function P(t) {
                return t.filter(function (t) {
                    return t.static
                })
            }
            function x(t, e, r, n, o, a, i, s) {
                if (e.static && !0 !== e.isDraggable) return t
                if (e.y === n && e.x === r) return t
                A("Moving element ".concat(e.i, " to [").concat(String(r), ",").concat(String(n), "] from [").concat(e.x, ",").concat(e.y, "]"))
                var u = e.x,
                    c = e.y
                "number" == typeof r && (e.x = r), "number" == typeof n && (e.y = n), (e.moved = !0)
                var l = k(t, i)
                ;("vertical" === i && "number" == typeof n ? c >= n : "horizontal" === i && "number" == typeof r && u >= r) && (l = l.reverse())
                var f = D(l, e)
                if (a && f.length) return A("Collision prevented on ".concat(e.i, ", reverting.")), (e.x = u), (e.y = c), (e.moved = !1), t
                for (var p = 0, d = f.length; p < d; p++) {
                    var h = f[p]
                    A(
                        "Resolving collision between "
                            .concat(e.i, " at [")
                            .concat(e.x, ",")
                            .concat(e.y, "] and ")
                            .concat(h.i, " at [")
                            .concat(h.x, ",")
                            .concat(h.y, "]")
                    ),
                        h.moved || (t = h.static ? R(t, h, e, o, i, s) : R(t, e, h, o, i, s))
                }
                return t
            }
            function R(t, e, r, n, o, a) {
                var i = "horizontal" === o,
                    s = "horizontal" !== o,
                    u = e.static
                if (n) {
                    n = !1
                    var c = { x: i ? Math.max(e.x - r.w, 0) : r.x, y: s ? Math.max(e.y - r.h, 0) : r.y, w: r.w, h: r.h, i: "-1" }
                    if (!j(t, c))
                        return (
                            A("Doing reverse collision on ".concat(r.i, " up to [").concat(c.x, ",").concat(c.y, "].")),
                            x(t, r, i ? c.x : void 0, s ? c.y : void 0, n, u, o, a)
                        )
                }
                return x(t, r, i ? r.x + 1 : void 0, s ? r.y + 1 : void 0, n, u, o, a)
            }
            function _(t) {
                return 100 * t + "%"
            }
            function z(t) {
                var e = t.top,
                    r = t.left,
                    n = t.width,
                    o = t.height,
                    a = "translate(".concat(r, "px,").concat(e, "px)")
                return {
                    transform: a,
                    WebkitTransform: a,
                    MozTransform: a,
                    msTransform: a,
                    OTransform: a,
                    width: "".concat(n, "px"),
                    height: "".concat(o, "px"),
                    position: "absolute",
                }
            }
            function C(t) {
                var e = t.top,
                    r = t.left,
                    n = t.width,
                    o = t.height
                return { top: "".concat(e, "px"), left: "".concat(r, "px"), width: "".concat(n, "px"), height: "".concat(o, "px"), position: "absolute" }
            }
            function k(t, e) {
                return "horizontal" === e ? M(t) : E(t)
            }
            function E(t) {
                return t.slice(0).sort(function (t, e) {
                    return t.y > e.y || (t.y === e.y && t.x > e.x) ? 1 : t.y === e.y && t.x === e.x ? 0 : -1
                })
            }
            function M(t) {
                return t.slice(0).sort(function (t, e) {
                    return t.x > e.x || (t.x === e.x && t.y > e.y) ? 1 : -1
                })
            }
            function T(t, e, r, n) {
                t = t || []
                var o = []
                return (
                    i.a.Children.forEach(e, function (e, r) {
                        var n = S(t, String(e.key))
                        if (n) o[r] = p(n)
                        else {
                            0
                            var a = e.props["data-grid"] || e.props._grid
                            o[r] = p(a ? u(u({}, a), {}, { i: e.key }) : { w: 1, h: 1, x: 0, y: l(o), i: String(e.key) })
                        }
                    }),
                    b(w(o, { cols: r }), n, r)
                )
            }
            function H(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Layout",
                    r = ["x", "y", "w", "h"]
                if (!Array.isArray(t)) throw new Error(e + " must be an array!")
                for (var n = 0, o = t.length; n < o; n++) {
                    for (var a = t[n], i = 0; i < r.length; i++)
                        if ("number" != typeof a[r[i]]) throw new Error("ReactGridLayout: " + e + "[" + n + "]." + r[i] + " must be a number!")
                    if (a.i && "string" != typeof a.i) throw new Error("ReactGridLayout: " + e + "[" + n + "].i must be a string!")
                    if (void 0 !== a.static && "boolean" != typeof a.static) throw new Error("ReactGridLayout: " + e + "[" + n + "].static must be a boolean!")
                }
            }
            function N(t) {
                var e = t || {},
                    r = e.verticalCompact,
                    n = e.compactType
                return !1 === r ? null : n
            }
            function L(t, e) {
                e.forEach(function (e) {
                    return (t[e] = t[e].bind(t))
                })
            }
            function A() {}
            var W = function () {}
        },
        function (e, r) {
            e.exports = t
        },
        function (t, e, r) {
            ;(function (t, r) {
                var n = "[object Arguments]",
                    o = "[object Map]",
                    a = "[object Object]",
                    i = "[object Set]",
                    s = /^\[object .+?Constructor\]$/,
                    u = /^(?:0|[1-9]\d*)$/,
                    c = {}
                ;(c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c[
                    "[object Uint8Array]"
                ] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0),
                    (c[n] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c[
                        "[object Error]"
                    ] = c["[object Function]"] = c[o] = c["[object Number]"] = c[a] = c["[object RegExp]"] = c[i] = c["[object String]"] = c[
                        "[object WeakMap]"
                    ] = !1)
                var l = "object" == typeof t && t && t.Object === Object && t,
                    f = "object" == typeof self && self && self.Object === Object && self,
                    p = l || f || Function("return this")(),
                    d = e && !e.nodeType && e,
                    h = d && "object" == typeof r && r && !r.nodeType && r,
                    y = h && h.exports === d,
                    g = y && l.process,
                    b = (function () {
                        try {
                            return g && g.binding && g.binding("util")
                        } catch (t) {}
                    })(),
                    m = b && b.isTypedArray
                function v(t, e) {
                    for (var r = -1, n = null == t ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0
                    return !1
                }
                function O(t) {
                    var e = -1,
                        r = Array(t.size)
                    return (
                        t.forEach(function (t, n) {
                            r[++e] = [n, t]
                        }),
                        r
                    )
                }
                function w(t) {
                    var e = -1,
                        r = Array(t.size)
                    return (
                        t.forEach(function (t) {
                            r[++e] = t
                        }),
                        r
                    )
                }
                var S,
                    j,
                    D,
                    P = Array.prototype,
                    x = Function.prototype,
                    R = Object.prototype,
                    _ = p["__core-js_shared__"],
                    z = x.toString,
                    C = R.hasOwnProperty,
                    k = (S = /[^.]+$/.exec((_ && _.keys && _.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + S : "",
                    E = R.toString,
                    M = RegExp(
                        "^" +
                            z
                                .call(C)
                                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
                            "$"
                    ),
                    T = y ? p.Buffer : void 0,
                    H = p.Symbol,
                    N = p.Uint8Array,
                    L = R.propertyIsEnumerable,
                    A = P.splice,
                    W = H ? H.toStringTag : void 0,
                    I = Object.getOwnPropertySymbols,
                    B = T ? T.isBuffer : void 0,
                    q =
                        ((j = Object.keys),
                        (D = Object),
                        function (t) {
                            return j(D(t))
                        }),
                    U = bt(p, "DataView"),
                    X = bt(p, "Map"),
                    Y = bt(p, "Promise"),
                    F = bt(p, "Set"),
                    G = bt(p, "WeakMap"),
                    V = bt(Object, "create"),
                    $ = wt(U),
                    K = wt(X),
                    J = wt(Y),
                    Q = wt(F),
                    Z = wt(G),
                    tt = H ? H.prototype : void 0,
                    et = tt ? tt.valueOf : void 0
                function rt(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length
                    for (this.clear(); ++e < r; ) {
                        var n = t[e]
                        this.set(n[0], n[1])
                    }
                }
                function nt(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length
                    for (this.clear(); ++e < r; ) {
                        var n = t[e]
                        this.set(n[0], n[1])
                    }
                }
                function ot(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length
                    for (this.clear(); ++e < r; ) {
                        var n = t[e]
                        this.set(n[0], n[1])
                    }
                }
                function at(t) {
                    var e = -1,
                        r = null == t ? 0 : t.length
                    for (this.__data__ = new ot(); ++e < r; ) this.add(t[e])
                }
                function it(t) {
                    var e = (this.__data__ = new nt(t))
                    this.size = e.size
                }
                function st(t, e) {
                    var r = Dt(t),
                        n = !r && jt(t),
                        o = !r && !n && Pt(t),
                        a = !r && !n && !o && Ct(t),
                        i = r || n || o || a,
                        s = i
                            ? (function (t, e) {
                                  for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r)
                                  return n
                              })(t.length, String)
                            : [],
                        u = s.length
                    for (var c in t)
                        (!e && !C.call(t, c)) ||
                            (i &&
                                ("length" == c ||
                                    (o && ("offset" == c || "parent" == c)) ||
                                    (a && ("buffer" == c || "byteLength" == c || "byteOffset" == c)) ||
                                    Ot(c, u))) ||
                            s.push(c)
                    return s
                }
                function ut(t, e) {
                    for (var r = t.length; r--; ) if (St(t[r][0], e)) return r
                    return -1
                }
                function ct(t) {
                    return null == t
                        ? void 0 === t
                            ? "[object Undefined]"
                            : "[object Null]"
                        : W && W in Object(t)
                        ? (function (t) {
                              var e = C.call(t, W),
                                  r = t[W]
                              try {
                                  t[W] = void 0
                                  var n = !0
                              } catch (t) {}
                              var o = E.call(t)
                              n && (e ? (t[W] = r) : delete t[W])
                              return o
                          })(t)
                        : (function (t) {
                              return E.call(t)
                          })(t)
                }
                function lt(t) {
                    return zt(t) && ct(t) == n
                }
                function ft(t, e, r, s, u) {
                    return (
                        t === e ||
                        (null == t || null == e || (!zt(t) && !zt(e))
                            ? t != t && e != e
                            : (function (t, e, r, s, u, c) {
                                  var l = Dt(t),
                                      f = Dt(e),
                                      p = l ? "[object Array]" : vt(t),
                                      d = f ? "[object Array]" : vt(e),
                                      h = (p = p == n ? a : p) == a,
                                      y = (d = d == n ? a : d) == a,
                                      g = p == d
                                  if (g && Pt(t)) {
                                      if (!Pt(e)) return !1
                                      ;(l = !0), (h = !1)
                                  }
                                  if (g && !h)
                                      return (
                                          c || (c = new it()),
                                          l || Ct(t)
                                              ? ht(t, e, r, s, u, c)
                                              : (function (t, e, r, n, a, s, u) {
                                                    switch (r) {
                                                        case "[object DataView]":
                                                            if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1
                                                            ;(t = t.buffer), (e = e.buffer)
                                                        case "[object ArrayBuffer]":
                                                            return !(t.byteLength != e.byteLength || !s(new N(t), new N(e)))
                                                        case "[object Boolean]":
                                                        case "[object Date]":
                                                        case "[object Number]":
                                                            return St(+t, +e)
                                                        case "[object Error]":
                                                            return t.name == e.name && t.message == e.message
                                                        case "[object RegExp]":
                                                        case "[object String]":
                                                            return t == e + ""
                                                        case o:
                                                            var c = O
                                                        case i:
                                                            var l = 1 & n
                                                            if ((c || (c = w), t.size != e.size && !l)) return !1
                                                            var f = u.get(t)
                                                            if (f) return f == e
                                                            ;(n |= 2), u.set(t, e)
                                                            var p = ht(c(t), c(e), n, a, s, u)
                                                            return u.delete(t), p
                                                        case "[object Symbol]":
                                                            if (et) return et.call(t) == et.call(e)
                                                    }
                                                    return !1
                                                })(t, e, p, r, s, u, c)
                                      )
                                  if (!(1 & r)) {
                                      var b = h && C.call(t, "__wrapped__"),
                                          m = y && C.call(e, "__wrapped__")
                                      if (b || m) {
                                          var v = b ? t.value() : t,
                                              S = m ? e.value() : e
                                          return c || (c = new it()), u(v, S, r, s, c)
                                      }
                                  }
                                  if (!g) return !1
                                  return (
                                      c || (c = new it()),
                                      (function (t, e, r, n, o, a) {
                                          var i = 1 & r,
                                              s = yt(t),
                                              u = s.length,
                                              c = yt(e).length
                                          if (u != c && !i) return !1
                                          var l = u
                                          for (; l--; ) {
                                              var f = s[l]
                                              if (!(i ? f in e : C.call(e, f))) return !1
                                          }
                                          var p = a.get(t)
                                          if (p && a.get(e)) return p == e
                                          var d = !0
                                          a.set(t, e), a.set(e, t)
                                          var h = i
                                          for (; ++l < u; ) {
                                              f = s[l]
                                              var y = t[f],
                                                  g = e[f]
                                              if (n) var b = i ? n(g, y, f, e, t, a) : n(y, g, f, t, e, a)
                                              if (!(void 0 === b ? y === g || o(y, g, r, n, a) : b)) {
                                                  d = !1
                                                  break
                                              }
                                              h || (h = "constructor" == f)
                                          }
                                          if (d && !h) {
                                              var m = t.constructor,
                                                  v = e.constructor
                                              m == v ||
                                                  !("constructor" in t) ||
                                                  !("constructor" in e) ||
                                                  ("function" == typeof m && m instanceof m && "function" == typeof v && v instanceof v) ||
                                                  (d = !1)
                                          }
                                          return a.delete(t), a.delete(e), d
                                      })(t, e, r, s, u, c)
                                  )
                              })(t, e, r, s, ft, u))
                    )
                }
                function pt(t) {
                    return (
                        !(
                            !_t(t) ||
                            (function (t) {
                                return !!k && k in t
                            })(t)
                        ) && (xt(t) ? M : s).test(wt(t))
                    )
                }
                function dt(t) {
                    if (((r = (e = t) && e.constructor), (n = ("function" == typeof r && r.prototype) || R), e !== n)) return q(t)
                    var e,
                        r,
                        n,
                        o = []
                    for (var a in Object(t)) C.call(t, a) && "constructor" != a && o.push(a)
                    return o
                }
                function ht(t, e, r, n, o, a) {
                    var i = 1 & r,
                        s = t.length,
                        u = e.length
                    if (s != u && !(i && u > s)) return !1
                    var c = a.get(t)
                    if (c && a.get(e)) return c == e
                    var l = -1,
                        f = !0,
                        p = 2 & r ? new at() : void 0
                    for (a.set(t, e), a.set(e, t); ++l < s; ) {
                        var d = t[l],
                            h = e[l]
                        if (n) var y = i ? n(h, d, l, e, t, a) : n(d, h, l, t, e, a)
                        if (void 0 !== y) {
                            if (y) continue
                            f = !1
                            break
                        }
                        if (p) {
                            if (
                                !v(e, function (t, e) {
                                    if (((i = e), !p.has(i) && (d === t || o(d, t, r, n, a)))) return p.push(e)
                                    var i
                                })
                            ) {
                                f = !1
                                break
                            }
                        } else if (d !== h && !o(d, h, r, n, a)) {
                            f = !1
                            break
                        }
                    }
                    return a.delete(t), a.delete(e), f
                }
                function yt(t) {
                    return (function (t, e, r) {
                        var n = e(t)
                        return Dt(t)
                            ? n
                            : (function (t, e) {
                                  for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r]
                                  return t
                              })(n, r(t))
                    })(t, kt, mt)
                }
                function gt(t, e) {
                    var r,
                        n,
                        o = t.__data__
                    return ("string" == (n = typeof (r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r)
                        ? o["string" == typeof e ? "string" : "hash"]
                        : o.map
                }
                function bt(t, e) {
                    var r = (function (t, e) {
                        return null == t ? void 0 : t[e]
                    })(t, e)
                    return pt(r) ? r : void 0
                }
                ;(rt.prototype.clear = function () {
                    ;(this.__data__ = V ? V(null) : {}), (this.size = 0)
                }),
                    (rt.prototype.delete = function (t) {
                        var e = this.has(t) && delete this.__data__[t]
                        return (this.size -= e ? 1 : 0), e
                    }),
                    (rt.prototype.get = function (t) {
                        var e = this.__data__
                        if (V) {
                            var r = e[t]
                            return "__lodash_hash_undefined__" === r ? void 0 : r
                        }
                        return C.call(e, t) ? e[t] : void 0
                    }),
                    (rt.prototype.has = function (t) {
                        var e = this.__data__
                        return V ? void 0 !== e[t] : C.call(e, t)
                    }),
                    (rt.prototype.set = function (t, e) {
                        var r = this.__data__
                        return (this.size += this.has(t) ? 0 : 1), (r[t] = V && void 0 === e ? "__lodash_hash_undefined__" : e), this
                    }),
                    (nt.prototype.clear = function () {
                        ;(this.__data__ = []), (this.size = 0)
                    }),
                    (nt.prototype.delete = function (t) {
                        var e = this.__data__,
                            r = ut(e, t)
                        return !(r < 0) && (r == e.length - 1 ? e.pop() : A.call(e, r, 1), --this.size, !0)
                    }),
                    (nt.prototype.get = function (t) {
                        var e = this.__data__,
                            r = ut(e, t)
                        return r < 0 ? void 0 : e[r][1]
                    }),
                    (nt.prototype.has = function (t) {
                        return ut(this.__data__, t) > -1
                    }),
                    (nt.prototype.set = function (t, e) {
                        var r = this.__data__,
                            n = ut(r, t)
                        return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this
                    }),
                    (ot.prototype.clear = function () {
                        ;(this.size = 0), (this.__data__ = { hash: new rt(), map: new (X || nt)(), string: new rt() })
                    }),
                    (ot.prototype.delete = function (t) {
                        var e = gt(this, t).delete(t)
                        return (this.size -= e ? 1 : 0), e
                    }),
                    (ot.prototype.get = function (t) {
                        return gt(this, t).get(t)
                    }),
                    (ot.prototype.has = function (t) {
                        return gt(this, t).has(t)
                    }),
                    (ot.prototype.set = function (t, e) {
                        var r = gt(this, t),
                            n = r.size
                        return r.set(t, e), (this.size += r.size == n ? 0 : 1), this
                    }),
                    (at.prototype.add = at.prototype.push = function (t) {
                        return this.__data__.set(t, "__lodash_hash_undefined__"), this
                    }),
                    (at.prototype.has = function (t) {
                        return this.__data__.has(t)
                    }),
                    (it.prototype.clear = function () {
                        ;(this.__data__ = new nt()), (this.size = 0)
                    }),
                    (it.prototype.delete = function (t) {
                        var e = this.__data__,
                            r = e.delete(t)
                        return (this.size = e.size), r
                    }),
                    (it.prototype.get = function (t) {
                        return this.__data__.get(t)
                    }),
                    (it.prototype.has = function (t) {
                        return this.__data__.has(t)
                    }),
                    (it.prototype.set = function (t, e) {
                        var r = this.__data__
                        if (r instanceof nt) {
                            var n = r.__data__
                            if (!X || n.length < 199) return n.push([t, e]), (this.size = ++r.size), this
                            r = this.__data__ = new ot(n)
                        }
                        return r.set(t, e), (this.size = r.size), this
                    })
                var mt = I
                        ? function (t) {
                              return null == t
                                  ? []
                                  : ((t = Object(t)),
                                    (function (t, e) {
                                        for (var r = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++r < n; ) {
                                            var i = t[r]
                                            e(i, r, t) && (a[o++] = i)
                                        }
                                        return a
                                    })(I(t), function (e) {
                                        return L.call(t, e)
                                    }))
                          }
                        : function () {
                              return []
                          },
                    vt = ct
                function Ot(t, e) {
                    return !!(e = null == e ? 9007199254740991 : e) && ("number" == typeof t || u.test(t)) && t > -1 && t % 1 == 0 && t < e
                }
                function wt(t) {
                    if (null != t) {
                        try {
                            return z.call(t)
                        } catch (t) {}
                        try {
                            return t + ""
                        } catch (t) {}
                    }
                    return ""
                }
                function St(t, e) {
                    return t === e || (t != t && e != e)
                }
                ;((U && "[object DataView]" != vt(new U(new ArrayBuffer(1)))) ||
                    (X && vt(new X()) != o) ||
                    (Y && "[object Promise]" != vt(Y.resolve())) ||
                    (F && vt(new F()) != i) ||
                    (G && "[object WeakMap]" != vt(new G()))) &&
                    (vt = function (t) {
                        var e = ct(t),
                            r = e == a ? t.constructor : void 0,
                            n = r ? wt(r) : ""
                        if (n)
                            switch (n) {
                                case $:
                                    return "[object DataView]"
                                case K:
                                    return o
                                case J:
                                    return "[object Promise]"
                                case Q:
                                    return i
                                case Z:
                                    return "[object WeakMap]"
                            }
                        return e
                    })
                var jt = lt(
                        (function () {
                            return arguments
                        })()
                    )
                        ? lt
                        : function (t) {
                              return zt(t) && C.call(t, "callee") && !L.call(t, "callee")
                          },
                    Dt = Array.isArray
                var Pt =
                    B ||
                    function () {
                        return !1
                    }
                function xt(t) {
                    if (!_t(t)) return !1
                    var e = ct(t)
                    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
                }
                function Rt(t) {
                    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
                }
                function _t(t) {
                    var e = typeof t
                    return null != t && ("object" == e || "function" == e)
                }
                function zt(t) {
                    return null != t && "object" == typeof t
                }
                var Ct = m
                    ? (function (t) {
                          return function (e) {
                              return t(e)
                          }
                      })(m)
                    : function (t) {
                          return zt(t) && Rt(t.length) && !!c[ct(t)]
                      }
                function kt(t) {
                    return null != (e = t) && Rt(e.length) && !xt(e) ? st(t) : dt(t)
                    var e
                }
                r.exports = function (t, e) {
                    return ft(t, e)
                }
            }.call(this, r(17), r(18)(t)))
        },
        function (t, e, r) {
            "use strict"
            r.r(e),
                r.d(e, "getBreakpointFromWidth", function () {
                    return o
                }),
                r.d(e, "getColsFromBreakpoint", function () {
                    return a
                }),
                r.d(e, "findOrGenerateResponsiveLayout", function () {
                    return i
                }),
                r.d(e, "sortBreakpoints", function () {
                    return s
                })
            var n = r(1)
            function o(t, e) {
                for (var r = s(t), n = r[0], o = 1, a = r.length; o < a; o++) {
                    var i = r[o]
                    e > t[i] && (n = i)
                }
                return n
            }
            function a(t, e) {
                if (!e[t]) throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + t + " is missing!")
                return e[t]
            }
            function i(t, e, r, o, a, i) {
                if (t[r]) return Object(n.cloneLayout)(t[r])
                for (var u = t[o], c = s(e), l = c.slice(c.indexOf(r)), f = 0, p = l.length; f < p; f++) {
                    var d = l[f]
                    if (t[d]) {
                        u = t[d]
                        break
                    }
                }
                return (u = Object(n.cloneLayout)(u || [])), Object(n.compact)(Object(n.correctBounds)(u, { cols: a }), i, a)
            }
            function s(t) {
                return Object.keys(t).sort(function (e, r) {
                    return t[e] - t[r]
                })
            }
        },
        function (t, r) {
            t.exports = e
        },
        function (t, e, r) {
            var n
            /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
                "use strict"
                var r = {}.hasOwnProperty
                function o() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var n = arguments[e]
                        if (n) {
                            var a = typeof n
                            if ("string" === a || "number" === a) t.push(n)
                            else if (Array.isArray(n) && n.length) {
                                var i = o.apply(null, n)
                                i && t.push(i)
                            } else if ("object" === a) for (var s in n) r.call(n, s) && n[s] && t.push(s)
                        }
                    }
                    return t.join(" ")
                }
                t.exports
                    ? ((o.default = o), (t.exports = o))
                    : void 0 ===
                          (n = function () {
                              return o
                          }.apply(e, [])) || (t.exports = n)
            })()
        },
        function (t, e, r) {
            "use strict"
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.findInArray = function (t, e) {
                    for (var r = 0, n = t.length; r < n; r++) if (e.apply(e, [t[r], r, t])) return t[r]
                }),
                (e.isFunction = function (t) {
                    return "function" == typeof t || "[object Function]" === Object.prototype.toString.call(t)
                }),
                (e.isNum = function (t) {
                    return "number" == typeof t && !isNaN(t)
                }),
                (e.int = function (t) {
                    return parseInt(t, 10)
                }),
                (e.dontSetMe = function (t, e, r) {
                    if (t[e]) return new Error("Invalid prop ".concat(e, " passed to ").concat(r, " - do not set this, set it on the child."))
                })
        },
        function (t, e, r) {
            "use strict"
            var n = r(22),
                o = n.default,
                a = n.DraggableCore
            ;(t.exports = o), (t.exports.default = o), (t.exports.DraggableCore = a)
        },
        function (t, e, r) {
            "use strict"
            function n(t) {
                return (n =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                          })(t)
            }
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.matchesSelector = f),
                (e.matchesSelectorAndParentsTo = function (t, e, r) {
                    var n = t
                    do {
                        if (f(n, e)) return !0
                        if (n === r) return !1
                        n = n.parentNode
                    } while (n)
                    return !1
                }),
                (e.addEvent = function (t, e, r, n) {
                    if (!t) return
                    var o = u({ capture: !0 }, n)
                    t.addEventListener ? t.addEventListener(e, r, o) : t.attachEvent ? t.attachEvent("on" + e, r) : (t["on" + e] = r)
                }),
                (e.removeEvent = function (t, e, r, n) {
                    if (!t) return
                    var o = u({ capture: !0 }, n)
                    t.removeEventListener ? t.removeEventListener(e, r, o) : t.detachEvent ? t.detachEvent("on" + e, r) : (t["on" + e] = null)
                }),
                (e.outerHeight = function (t) {
                    var e = t.clientHeight,
                        r = t.ownerDocument.defaultView.getComputedStyle(t)
                    return (e += (0, o.int)(r.borderTopWidth)), (e += (0, o.int)(r.borderBottomWidth))
                }),
                (e.outerWidth = function (t) {
                    var e = t.clientWidth,
                        r = t.ownerDocument.defaultView.getComputedStyle(t)
                    return (e += (0, o.int)(r.borderLeftWidth)), (e += (0, o.int)(r.borderRightWidth))
                }),
                (e.innerHeight = function (t) {
                    var e = t.clientHeight,
                        r = t.ownerDocument.defaultView.getComputedStyle(t)
                    return (e -= (0, o.int)(r.paddingTop)), (e -= (0, o.int)(r.paddingBottom))
                }),
                (e.innerWidth = function (t) {
                    var e = t.clientWidth,
                        r = t.ownerDocument.defaultView.getComputedStyle(t)
                    return (e -= (0, o.int)(r.paddingLeft)), (e -= (0, o.int)(r.paddingRight))
                }),
                (e.offsetXYFromParent = function (t, e, r) {
                    var n = e === e.ownerDocument.body ? { left: 0, top: 0 } : e.getBoundingClientRect(),
                        o = (t.clientX + e.scrollLeft - n.left) / r,
                        a = (t.clientY + e.scrollTop - n.top) / r
                    return { x: o, y: a }
                }),
                (e.createCSSTransform = function (t, e) {
                    var r = p(t, e, "px")
                    return c({}, (0, a.browserPrefixToKey)("transform", a.default), r)
                }),
                (e.createSVGTransform = function (t, e) {
                    return p(t, e, "")
                }),
                (e.getTranslation = p),
                (e.getTouch = function (t, e) {
                    return (
                        (t.targetTouches &&
                            (0, o.findInArray)(t.targetTouches, function (t) {
                                return e === t.identifier
                            })) ||
                        (t.changedTouches &&
                            (0, o.findInArray)(t.changedTouches, function (t) {
                                return e === t.identifier
                            }))
                    )
                }),
                (e.getTouchIdentifier = function (t) {
                    if (t.targetTouches && t.targetTouches[0]) return t.targetTouches[0].identifier
                    if (t.changedTouches && t.changedTouches[0]) return t.changedTouches[0].identifier
                }),
                (e.addUserSelectStyles = function (t) {
                    if (!t) return
                    var e = t.getElementById("react-draggable-style-el")
                    e ||
                        (((e = t.createElement("style")).type = "text/css"),
                        (e.id = "react-draggable-style-el"),
                        (e.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
                        (e.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
                        t.getElementsByTagName("head")[0].appendChild(e))
                    t.body && d(t.body, "react-draggable-transparent-selection")
                }),
                (e.removeUserSelectStyles = function (t) {
                    if (!t) return
                    try {
                        if ((t.body && h(t.body, "react-draggable-transparent-selection"), t.selection)) t.selection.empty()
                        else {
                            var e = (t.defaultView || window).getSelection()
                            e && "Caret" !== e.type && e.removeAllRanges()
                        }
                    } catch (t) {}
                }),
                (e.addClassName = d),
                (e.removeClassName = h)
            var o = r(7),
                a = (function (t) {
                    if (t && t.__esModule) return t
                    if (null === t || ("object" !== n(t) && "function" != typeof t)) return { default: t }
                    var e = i()
                    if (e && e.has(t)) return e.get(t)
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor
                    for (var a in t)
                        if (Object.prototype.hasOwnProperty.call(t, a)) {
                            var s = o ? Object.getOwnPropertyDescriptor(t, a) : null
                            s && (s.get || s.set) ? Object.defineProperty(r, a, s) : (r[a] = t[a])
                        }
                    ;(r.default = t), e && e.set(t, r)
                    return r
                })(r(23))
            function i() {
                if ("function" != typeof WeakMap) return null
                var t = new WeakMap()
                return (
                    (i = function () {
                        return t
                    }),
                    t
                )
            }
            function s(t, e) {
                var r = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? s(Object(r), !0).forEach(function (e) {
                              c(t, e, r[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : s(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                          })
                }
                return t
            }
            function c(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            var l = ""
            function f(t, e) {
                return (
                    l ||
                        (l = (0, o.findInArray)(
                            ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
                            function (e) {
                                return (0, o.isFunction)(t[e])
                            }
                        )),
                    !!(0, o.isFunction)(t[l]) && t[l](e)
                )
            }
            function p(t, e, r) {
                var n = t.x,
                    o = t.y,
                    a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")")
                if (e) {
                    var i = "".concat("string" == typeof e.x ? e.x : e.x + r),
                        s = "".concat("string" == typeof e.y ? e.y : e.y + r)
                    a = "translate(".concat(i, ", ").concat(s, ")") + a
                }
                return a
            }
            function d(t, e) {
                t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e))
            }
            function h(t, e) {
                t.classList ? t.classList.remove(e) : (t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), ""))
            }
        },
        function (t, e, r) {
            "use strict"
            r.r(e),
                r.d(e, "default", function () {
                    return $
                })
            var n = r(2),
                o = r.n(n),
                a = r(3),
                i = r.n(a),
                s = r(6),
                u = r.n(s),
                c = r(1)
            function l(t) {
                var e = t.margin,
                    r = t.containerPadding,
                    n = t.containerWidth,
                    o = t.cols
                return (n - e[0] * (o - 1) - 2 * r[0]) / o
            }
            function f(t, e, r) {
                return Number.isFinite(t) ? Math.round(e * t + Math.max(0, t - 1) * r) : t
            }
            function p(t, e, r, n, o, a) {
                var i = t.margin,
                    s = t.containerPadding,
                    u = t.rowHeight,
                    c = l(t),
                    p = {}
                return (
                    a && a.resizing
                        ? ((p.width = Math.round(a.resizing.width)), (p.height = Math.round(a.resizing.height)))
                        : ((p.width = f(n, c, i[0])), (p.height = f(o, u, i[1]))),
                    a && a.dragging
                        ? ((p.top = Math.round(a.dragging.top)), (p.left = Math.round(a.dragging.left)))
                        : ((p.top = Math.round((u + i[1]) * r + s[1])), (p.left = Math.round((c + i[0]) * e + s[0]))),
                    p
                )
            }
            function d(t, e, r, n, o) {
                var a = t.margin,
                    i = t.cols,
                    s = t.rowHeight,
                    u = t.maxRows,
                    c = l(t),
                    f = Math.round((r - a[0]) / (c + a[0])),
                    p = Math.round((e - a[1]) / (s + a[1]))
                return { x: (f = h(f, 0, i - n)), y: (p = h(p, 0, u - o)) }
            }
            function h(t, e, r) {
                return Math.max(Math.min(t, r), e)
            }
            var y = r(5),
                g = r.n(y),
                b = r(0),
                m = r.n(b),
                v = r(8),
                O = r(15),
                w = m.a.arrayOf(m.a.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
                S = m.a.oneOfType([m.a.node, m.a.func]),
                j = {
                    className: m.a.string,
                    style: m.a.object,
                    width: m.a.number,
                    autoSize: m.a.bool,
                    cols: m.a.number,
                    draggableCancel: m.a.string,
                    draggableHandle: m.a.string,
                    verticalCompact: function (t) {
                        t.verticalCompact, 0
                    },
                    compactType: m.a.oneOf(["vertical", "horizontal"]),
                    layout: function (t) {
                        var e = t.layout
                        void 0 !== e && r(1).validateLayout(e, "layout")
                    },
                    margin: m.a.arrayOf(m.a.number),
                    containerPadding: m.a.arrayOf(m.a.number),
                    rowHeight: m.a.number,
                    maxRows: m.a.number,
                    isBounded: m.a.bool,
                    isDraggable: m.a.bool,
                    isResizable: m.a.bool,
                    preventCollision: m.a.bool,
                    useCSSTransforms: m.a.bool,
                    transformScale: m.a.number,
                    isDroppable: m.a.bool,
                    resizeHandles: w,
                    resizeHandle: S,
                    onLayoutChange: m.a.func,
                    onDragStart: m.a.func,
                    onDrag: m.a.func,
                    onDragStop: m.a.func,
                    onResizeStart: m.a.func,
                    onResize: m.a.func,
                    onResizeStop: m.a.func,
                    onDrop: m.a.func,
                    droppingItem: m.a.shape({ i: m.a.string.isRequired, w: m.a.number.isRequired, h: m.a.number.isRequired }),
                    children: function (t, e) {
                        var r = t[e],
                            n = {}
                        o.a.Children.forEach(r, function (t) {
                            if (n[t.key]) throw new Error('Duplicate child key "' + t.key + '" found! This will cause problems in ReactGridLayout.')
                            n[t.key] = !0
                        })
                    },
                    innerRef: m.a.any,
                }
            function D(t) {
                return (D =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                          })(t)
            }
            function P(t, e) {
                var r = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function x(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? P(Object(r), !0).forEach(function (e) {
                              T(t, e, r[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : P(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                          })
                }
                return t
            }
            function R(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            function _(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r]
                    ;(n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            function z(t, e) {
                return (z =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t
                    })(t, e)
            }
            function C(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1
                    if (Reflect.construct.sham) return !1
                    if ("function" == typeof Proxy) return !0
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                })()
                return function () {
                    var r,
                        n = M(t)
                    if (e) {
                        var o = M(this).constructor
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments)
                    return k(this, r)
                }
            }
            function k(t, e) {
                return !e || ("object" !== D(e) && "function" != typeof e) ? E(t) : e
            }
            function E(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return t
            }
            function M(t) {
                return (M = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
            }
            function T(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            var H = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                    ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && z(t, e)
                })(i, t)
                var e,
                    r,
                    n,
                    a = C(i)
                function i() {
                    var t
                    R(this, i)
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n]
                    return (
                        T(E((t = a.call.apply(a, [this].concat(r)))), "state", { resizing: null, dragging: null, className: "" }),
                        T(E(t), "currentNode", void 0),
                        T(E(t), "onDragStart", function (e, r) {
                            var n = r.node,
                                o = t.props.onDragStart
                            if (o) {
                                var a = { top: 0, left: 0 },
                                    i = n.offsetParent
                                if (i) {
                                    var s = i.getBoundingClientRect(),
                                        u = n.getBoundingClientRect(),
                                        c = u.left / t.props.transformScale,
                                        l = s.left / t.props.transformScale,
                                        f = u.top / t.props.transformScale,
                                        p = s.top / t.props.transformScale
                                    ;(a.left = c - l + i.scrollLeft), (a.top = f - p + i.scrollTop), t.setState({ dragging: a })
                                    var h = d(t.getPositionParams(), a.top, a.left, t.props.w, t.props.h),
                                        y = h.x,
                                        g = h.y
                                    return o.call(E(t), t.props.i, y, g, { e: e, node: n, newPosition: a })
                                }
                            }
                        }),
                        T(E(t), "onDrag", function (e, r) {
                            var n = r.node,
                                o = r.deltaX,
                                a = r.deltaY,
                                i = t.props,
                                s = i.onDrag,
                                u = i.transformScale
                            if (s) {
                                if (((o /= u), (a /= u), !t.state.dragging)) throw new Error("onDrag called before onDragStart.")
                                var c = t.state.dragging.top + a,
                                    p = t.state.dragging.left + o,
                                    y = t.props,
                                    g = y.isBounded,
                                    b = y.i,
                                    m = y.w,
                                    v = y.h,
                                    O = y.containerWidth,
                                    w = t.getPositionParams()
                                if (g) {
                                    var S = n.offsetParent
                                    if (S) {
                                        var j = t.props,
                                            D = j.margin,
                                            P = j.rowHeight
                                        ;(c = h(c, 0, S.clientHeight - f(v, P, D[1]))), (p = h(p, 0, O - f(m, l(w), D[0])))
                                    }
                                }
                                var x = { top: c, left: p }
                                t.setState({ dragging: x })
                                var R = d(w, c, p, m, v),
                                    _ = R.x,
                                    z = R.y
                                return s.call(E(t), b, _, z, { e: e, node: n, newPosition: x })
                            }
                        }),
                        T(E(t), "onDragStop", function (e, r) {
                            var n = r.node,
                                o = t.props.onDragStop
                            if (o) {
                                if (!t.state.dragging) throw new Error("onDragEnd called before onDragStart.")
                                var a = t.props,
                                    i = a.w,
                                    s = a.h,
                                    u = a.i,
                                    c = t.state.dragging,
                                    l = c.left,
                                    f = c.top,
                                    p = { top: f, left: l }
                                t.setState({ dragging: null })
                                var h = d(t.getPositionParams(), f, l, i, s),
                                    y = h.x,
                                    g = h.y
                                return o.call(E(t), u, y, g, { e: e, node: n, newPosition: p })
                            }
                        }),
                        T(E(t), "onResizeStop", function (e, r) {
                            t.onResizeHandler(e, r, "onResizeStop")
                        }),
                        T(E(t), "onResizeStart", function (e, r) {
                            t.onResizeHandler(e, r, "onResizeStart")
                        }),
                        T(E(t), "onResize", function (e, r) {
                            t.onResizeHandler(e, r, "onResize")
                        }),
                        t
                    )
                }
                return (
                    (e = i),
                    (r = [
                        {
                            key: "shouldComponentUpdate",
                            value: function (t, e) {
                                if (this.props.children !== t.children) return !0
                                if (this.props.droppingPosition !== t.droppingPosition) return !0
                                var r = p(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state),
                                    n = p(this.getPositionParams(t), t.x, t.y, t.w, t.h, e)
                                return !Object(c.fastPositionEqual)(r, n) || this.props.useCSSTransforms !== t.useCSSTransforms
                            },
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.moveDroppingItem({})
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (t) {
                                this.moveDroppingItem(t)
                            },
                        },
                        {
                            key: "moveDroppingItem",
                            value: function (t) {
                                var e = this.props.droppingPosition
                                if (e) {
                                    var r = t.droppingPosition || { left: 0, top: 0 },
                                        n = this.state.dragging
                                    this.currentNode || (this.currentNode = g.a.findDOMNode(this))
                                    var o = (n && e.left !== r.left) || e.top !== r.top
                                    if (n) {
                                        if (o) {
                                            var a = e.left - n.left,
                                                i = e.top - n.top
                                            this.onDrag(e.e, { node: this.currentNode, deltaX: a, deltaY: i })
                                        }
                                    } else this.onDragStart(e.e, { node: this.currentNode, deltaX: e.left, deltaY: e.top })
                                }
                            },
                        },
                        {
                            key: "getPositionParams",
                            value: function () {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props
                                return {
                                    cols: t.cols,
                                    containerPadding: t.containerPadding,
                                    containerWidth: t.containerWidth,
                                    margin: t.margin,
                                    maxRows: t.maxRows,
                                    rowHeight: t.rowHeight,
                                }
                            },
                        },
                        {
                            key: "createStyle",
                            value: function (t) {
                                var e,
                                    r = this.props,
                                    n = r.usePercentages,
                                    o = r.containerWidth
                                return (
                                    r.useCSSTransforms
                                        ? (e = Object(c.setTransform)(t))
                                        : ((e = Object(c.setTopLeft)(t)),
                                          n && ((e.left = Object(c.perc)(t.left / o)), (e.width = Object(c.perc)(t.width / o)))),
                                    e
                                )
                            },
                        },
                        {
                            key: "mixinDraggable",
                            value: function (t, e) {
                                return o.a.createElement(
                                    v.DraggableCore,
                                    {
                                        disabled: !e,
                                        onStart: this.onDragStart,
                                        onDrag: this.onDrag,
                                        onStop: this.onDragStop,
                                        handle: this.props.handle,
                                        cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
                                        scale: this.props.transformScale,
                                    },
                                    t
                                )
                            },
                        },
                        {
                            key: "mixinResizable",
                            value: function (t, e, r) {
                                var n = this.props,
                                    a = n.cols,
                                    i = n.x,
                                    s = n.minW,
                                    u = n.minH,
                                    c = n.maxW,
                                    l = n.maxH,
                                    f = n.transformScale,
                                    d = n.resizeHandles,
                                    h = n.resizeHandle,
                                    y = this.getPositionParams(),
                                    g = p(y, 0, 0, a - i, 0).width,
                                    b = p(y, 0, 0, s, u),
                                    m = p(y, 0, 0, c, l),
                                    v = [b.width, b.height],
                                    w = [Math.min(m.width, g), Math.min(m.height, 1 / 0)]
                                return o.a.createElement(
                                    O.Resizable,
                                    {
                                        draggableOpts: { disabled: !r },
                                        className: r ? void 0 : "react-resizable-hide",
                                        width: e.width,
                                        height: e.height,
                                        minConstraints: v,
                                        maxConstraints: w,
                                        onResizeStop: this.onResizeStop,
                                        onResizeStart: this.onResizeStart,
                                        onResize: this.onResize,
                                        transformScale: f,
                                        resizeHandles: d,
                                        handle: h,
                                    },
                                    t
                                )
                            },
                        },
                        {
                            key: "onResizeHandler",
                            value: function (t, e, r) {
                                var n = e.node,
                                    o = e.size,
                                    a = this.props[r]
                                if (a) {
                                    var i = this.props,
                                        s = i.cols,
                                        u = i.x,
                                        c = i.y,
                                        f = i.i,
                                        p = i.maxH,
                                        d = i.minH,
                                        y = this.props,
                                        g = y.minW,
                                        b = y.maxW,
                                        m = (function (t, e, r, n, o) {
                                            var a = t.margin,
                                                i = t.maxRows,
                                                s = t.cols,
                                                u = t.rowHeight,
                                                c = l(t),
                                                f = Math.round((e + a[0]) / (c + a[0])),
                                                p = Math.round((r + a[1]) / (u + a[1]))
                                            return { w: (f = h(f, 0, s - n)), h: (p = h(p, 0, i - o)) }
                                        })(this.getPositionParams(), o.width, o.height, u, c),
                                        v = m.w,
                                        O = m.h
                                    ;(v = h(v, (g = Math.max(g, 1)), (b = Math.min(b, s - u)))),
                                        (O = h(O, d, p)),
                                        this.setState({ resizing: "onResizeStop" === r ? null : o }),
                                        a.call(this, f, v, O, { e: t, node: n, size: o })
                                }
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    e = t.x,
                                    r = t.y,
                                    n = t.w,
                                    a = t.h,
                                    i = t.isDraggable,
                                    s = t.isResizable,
                                    c = t.droppingPosition,
                                    l = t.useCSSTransforms,
                                    f = p(this.getPositionParams(), e, r, n, a, this.state),
                                    d = o.a.Children.only(this.props.children),
                                    h = o.a.cloneElement(d, {
                                        className: u()("react-grid-item", d.props.className, this.props.className, {
                                            "static": this.props.static,
                                            "resizing": Boolean(this.state.resizing),
                                            "react-draggable": i,
                                            "react-draggable-dragging": Boolean(this.state.dragging),
                                            "dropping": Boolean(c),
                                            "cssTransforms": l,
                                        }),
                                        style: x(x(x({}, this.props.style), d.props.style), this.createStyle(f)),
                                    })
                                return (h = this.mixinResizable(h, f, s)), (h = this.mixinDraggable(h, i))
                            },
                        },
                    ]) && _(e.prototype, r),
                    n && _(e, n),
                    i
                )
            })(o.a.Component)
            function N(t) {
                return (N =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                          })(t)
            }
            function L(t, e) {
                var r = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function A(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? L(Object(r), !0).forEach(function (e) {
                              G(t, e, r[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : L(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                          })
                }
                return t
            }
            function W(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return I(t)
                    })(t) ||
                    (function (t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    })(t) ||
                    (function (t, e) {
                        if (!t) return
                        if ("string" == typeof t) return I(t, e)
                        var r = Object.prototype.toString.call(t).slice(8, -1)
                        "Object" === r && t.constructor && (r = t.constructor.name)
                        if ("Map" === r || "Set" === r) return Array.from(t)
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return I(t, e)
                    })(t) ||
                    (function () {
                        throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        )
                    })()
                )
            }
            function I(t, e) {
                ;(null == e || e > t.length) && (e = t.length)
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
                return n
            }
            function B(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r]
                    ;(n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            function q(t, e) {
                return (q =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t
                    })(t, e)
            }
            function U(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1
                    if (Reflect.construct.sham) return !1
                    if ("function" == typeof Proxy) return !0
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                })()
                return function () {
                    var r,
                        n = F(t)
                    if (e) {
                        var o = F(this).constructor
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments)
                    return X(this, r)
                }
            }
            function X(t, e) {
                return !e || ("object" !== N(e) && "function" != typeof e) ? Y(t) : e
            }
            function Y(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return t
            }
            function F(t) {
                return (F = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
            }
            function G(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            T(H, "propTypes", {
                children: m.a.element,
                cols: m.a.number.isRequired,
                containerWidth: m.a.number.isRequired,
                rowHeight: m.a.number.isRequired,
                margin: m.a.array.isRequired,
                maxRows: m.a.number.isRequired,
                containerPadding: m.a.array.isRequired,
                x: m.a.number.isRequired,
                y: m.a.number.isRequired,
                w: m.a.number.isRequired,
                h: m.a.number.isRequired,
                minW: function (t, e) {
                    var r = t[e]
                    return "number" != typeof r
                        ? new Error("minWidth not Number")
                        : r > t.w || r > t.maxW
                        ? new Error("minWidth larger than item width/maxWidth")
                        : void 0
                },
                maxW: function (t, e) {
                    var r = t[e]
                    return "number" != typeof r
                        ? new Error("maxWidth not Number")
                        : r < t.w || r < t.minW
                        ? new Error("maxWidth smaller than item width/minWidth")
                        : void 0
                },
                minH: function (t, e) {
                    var r = t[e]
                    return "number" != typeof r
                        ? new Error("minHeight not Number")
                        : r > t.h || r > t.maxH
                        ? new Error("minHeight larger than item height/maxHeight")
                        : void 0
                },
                maxH: function (t, e) {
                    var r = t[e]
                    return "number" != typeof r
                        ? new Error("maxHeight not Number")
                        : r < t.h || r < t.minH
                        ? new Error("maxHeight smaller than item height/minHeight")
                        : void 0
                },
                i: m.a.string.isRequired,
                resizeHandles: w,
                resizeHandle: S,
                onDragStop: m.a.func,
                onDragStart: m.a.func,
                onDrag: m.a.func,
                onResizeStop: m.a.func,
                onResizeStart: m.a.func,
                onResize: m.a.func,
                isDraggable: m.a.bool.isRequired,
                isResizable: m.a.bool.isRequired,
                isBounded: m.a.bool.isRequired,
                static: m.a.bool,
                useCSSTransforms: m.a.bool.isRequired,
                transformScale: m.a.number,
                className: m.a.string,
                handle: m.a.string,
                cancel: m.a.string,
                droppingPosition: m.a.shape({ e: m.a.object.isRequired, left: m.a.number.isRequired, top: m.a.number.isRequired }),
            }),
                T(H, "defaultProps", { className: "", cancel: "", handle: "", minH: 1, minW: 1, maxH: 1 / 0, maxW: 1 / 0, transformScale: 1 })
            var V = !1
            try {
                V = /firefox/i.test(navigator.userAgent)
            } catch (t) {}
            var $ = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                    ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && q(t, e)
                })(s, t)
                var e,
                    r,
                    n,
                    a = U(s)
                function s(t, e) {
                    var r
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        })(this, s),
                        G(Y((r = a.call(this, t, e))), "state", {
                            activeDrag: null,
                            layout: Object(c.synchronizeLayoutWithChildren)(r.props.layout, r.props.children, r.props.cols, Object(c.compactType)(r.props)),
                            mounted: !1,
                            oldDragItem: null,
                            oldLayout: null,
                            oldResizeItem: null,
                            droppingDOMNode: null,
                            children: [],
                        }),
                        G(Y(r), "dragEnterCounter", 0),
                        G(Y(r), "onDragOver", function (t) {
                            if (V && -1 === t.nativeEvent.target.className.indexOf("react-grid-layout")) return t.preventDefault(), !1
                            var e = r.props,
                                n = e.droppingItem,
                                a = e.margin,
                                i = e.cols,
                                s = e.rowHeight,
                                u = e.maxRows,
                                c = e.width,
                                l = e.containerPadding,
                                f = r.state.layout,
                                p = t.nativeEvent,
                                h = p.layerX,
                                y = p.layerY,
                                g = { left: h, top: y, e: t }
                            if (r.state.droppingDOMNode) {
                                if (r.state.droppingPosition) {
                                    var b = r.state.droppingPosition,
                                        m = b.left,
                                        v = b.top
                                    ;(m != h || v != y) && r.setState({ droppingPosition: g })
                                }
                            } else {
                                var O = d({ cols: i, margin: a, maxRows: u, rowHeight: s, containerWidth: c, containerPadding: l || a }, y, h, n.w, n.h)
                                r.setState({
                                    droppingDOMNode: o.a.createElement("div", { key: n.i }),
                                    droppingPosition: g,
                                    layout: [].concat(W(f), [A(A({}, n), {}, { x: O.x, y: O.y, static: !1, isDraggable: !0 })]),
                                })
                            }
                            t.stopPropagation(), t.preventDefault()
                        }),
                        G(Y(r), "removeDroppingPlaceholder", function () {
                            var t = r.props,
                                e = t.droppingItem,
                                n = t.cols,
                                o = r.state.layout,
                                a = Object(c.compact)(
                                    o.filter(function (t) {
                                        return t.i !== e.i
                                    }),
                                    Object(c.compactType)(r.props),
                                    n
                                )
                            r.setState({ layout: a, droppingDOMNode: null, activeDrag: null, droppingPosition: void 0 })
                        }),
                        G(Y(r), "onDragLeave", function () {
                            r.dragEnterCounter--, 0 === r.dragEnterCounter && r.removeDroppingPlaceholder()
                        }),
                        G(Y(r), "onDragEnter", function () {
                            r.dragEnterCounter++
                        }),
                        G(Y(r), "onDrop", function (t) {
                            var e = r.props.droppingItem,
                                n = r.state.layout,
                                o = n.find(function (t) {
                                    return t.i === e.i
                                })
                            ;(r.dragEnterCounter = 0), r.removeDroppingPlaceholder(), r.props.onDrop(n, o, t)
                        }),
                        Object(c.autoBindHandlers)(Y(r), ["onDragStart", "onDrag", "onDragStop", "onResizeStart", "onResize", "onResizeStop"]),
                        r
                    )
                }
                return (
                    (e = s),
                    (n = [
                        {
                            key: "getDerivedStateFromProps",
                            value: function (t, e) {
                                var r
                                return e.activeDrag
                                    ? null
                                    : (i()(t.layout, e.propsLayout) && t.compactType === e.compactType
                                          ? Object(c.childrenEqual)(t.children, e.children) || (r = e.layout)
                                          : (r = t.layout),
                                      r
                                          ? {
                                                layout: Object(c.synchronizeLayoutWithChildren)(r, t.children, t.cols, Object(c.compactType)(t)),
                                                compactType: t.compactType,
                                                children: t.children,
                                                propsLayout: t.layout,
                                            }
                                          : null)
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.setState({ mounted: !0 }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout)
                            },
                        },
                        {
                            key: "shouldComponentUpdate",
                            value: function (t, e) {
                                return (
                                    this.props.children !== t.children ||
                                    !Object(c.fastRGLPropsEqual)(this.props, t, i.a) ||
                                    this.state.activeDrag !== e.activeDrag ||
                                    this.state.mounted !== e.mounted ||
                                    this.state.droppingPosition !== e.droppingPosition
                                )
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (t, e) {
                                if (!this.state.activeDrag) {
                                    var r = this.state.layout,
                                        n = e.layout
                                    this.onLayoutMaybeChanged(r, n)
                                }
                            },
                        },
                        {
                            key: "containerHeight",
                            value: function () {
                                if (this.props.autoSize) {
                                    var t = Object(c.bottom)(this.state.layout),
                                        e = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1]
                                    return t * this.props.rowHeight + (t - 1) * this.props.margin[1] + 2 * e + "px"
                                }
                            },
                        },
                        {
                            key: "onDragStart",
                            value: function (t, e, r, n) {
                                var o = n.e,
                                    a = n.node,
                                    i = this.state.layout,
                                    s = Object(c.getLayoutItem)(i, t)
                                if (s)
                                    return (
                                        this.setState({ oldDragItem: Object(c.cloneLayoutItem)(s), oldLayout: this.state.layout }),
                                        this.props.onDragStart(i, s, s, null, o, a)
                                    )
                            },
                        },
                        {
                            key: "onDrag",
                            value: function (t, e, r, n) {
                                var o = n.e,
                                    a = n.node,
                                    i = this.state.oldDragItem,
                                    s = this.state.layout,
                                    u = this.props.cols,
                                    l = Object(c.getLayoutItem)(s, t)
                                if (l) {
                                    var f = { w: l.w, h: l.h, x: l.x, y: l.y, placeholder: !0, i: t }
                                    ;(s = Object(c.moveElement)(s, l, e, r, !0, this.props.preventCollision, Object(c.compactType)(this.props), u)),
                                        this.props.onDrag(s, i, l, f, o, a),
                                        this.setState({ layout: Object(c.compact)(s, Object(c.compactType)(this.props), u), activeDrag: f })
                                }
                            },
                        },
                        {
                            key: "onDragStop",
                            value: function (t, e, r, n) {
                                var o = n.e,
                                    a = n.node
                                if (this.state.activeDrag) {
                                    var i = this.state.oldDragItem,
                                        s = this.state.layout,
                                        u = this.props,
                                        l = u.cols,
                                        f = u.preventCollision,
                                        p = Object(c.getLayoutItem)(s, t)
                                    if (p) {
                                        ;(s = Object(c.moveElement)(s, p, e, r, !0, f, Object(c.compactType)(this.props), l)),
                                            this.props.onDragStop(s, i, p, null, o, a)
                                        var d = Object(c.compact)(s, Object(c.compactType)(this.props), l),
                                            h = this.state.oldLayout
                                        this.setState({ activeDrag: null, layout: d, oldDragItem: null, oldLayout: null }), this.onLayoutMaybeChanged(d, h)
                                    }
                                }
                            },
                        },
                        {
                            key: "onLayoutMaybeChanged",
                            value: function (t, e) {
                                e || (e = this.state.layout), i()(e, t) || this.props.onLayoutChange(t)
                            },
                        },
                        {
                            key: "onResizeStart",
                            value: function (t, e, r, n) {
                                var o = n.e,
                                    a = n.node,
                                    i = this.state.layout,
                                    s = Object(c.getLayoutItem)(i, t)
                                s &&
                                    (this.setState({ oldResizeItem: Object(c.cloneLayoutItem)(s), oldLayout: this.state.layout }),
                                    this.props.onResizeStart(i, s, s, null, o, a))
                            },
                        },
                        {
                            key: "onResize",
                            value: function (t, e, r, n) {
                                var o = n.e,
                                    a = n.node,
                                    i = this.state,
                                    s = i.layout,
                                    u = i.oldResizeItem,
                                    l = this.props,
                                    f = l.cols,
                                    p = l.preventCollision,
                                    d = Object(c.getLayoutItem)(s, t)
                                if (d) {
                                    var h
                                    if (p) {
                                        var y = Object(c.getAllCollisions)(s, A(A({}, d), {}, { w: e, h: r })).filter(function (t) {
                                            return t.i !== d.i
                                        })
                                        if ((h = y.length > 0)) {
                                            var g = 1 / 0,
                                                b = 1 / 0
                                            y.forEach(function (t) {
                                                t.x > d.x && (g = Math.min(g, t.x)), t.y > d.y && (b = Math.min(b, t.y))
                                            }),
                                                Number.isFinite(g) && (d.w = g - d.x),
                                                Number.isFinite(b) && (d.h = b - d.y)
                                        }
                                    }
                                    h || ((d.w = e), (d.h = r))
                                    var m = { w: d.w, h: d.h, x: d.x, y: d.y, static: !0, i: t }
                                    this.props.onResize(s, u, d, m, o, a),
                                        this.setState({ layout: Object(c.compact)(s, Object(c.compactType)(this.props), f), activeDrag: m })
                                }
                            },
                        },
                        {
                            key: "onResizeStop",
                            value: function (t, e, r, n) {
                                var o = n.e,
                                    a = n.node,
                                    i = this.state,
                                    s = i.layout,
                                    u = i.oldResizeItem,
                                    l = this.props.cols,
                                    f = Object(c.getLayoutItem)(s, t)
                                this.props.onResizeStop(s, u, f, null, o, a)
                                var p = Object(c.compact)(s, Object(c.compactType)(this.props), l),
                                    d = this.state.oldLayout
                                this.setState({ activeDrag: null, layout: p, oldResizeItem: null, oldLayout: null }), this.onLayoutMaybeChanged(p, d)
                            },
                        },
                        {
                            key: "placeholder",
                            value: function () {
                                var t = this.state.activeDrag
                                if (!t) return null
                                var e = this.props,
                                    r = e.width,
                                    n = e.cols,
                                    a = e.margin,
                                    i = e.containerPadding,
                                    s = e.rowHeight,
                                    u = e.maxRows,
                                    c = e.useCSSTransforms,
                                    l = e.transformScale
                                return o.a.createElement(
                                    H,
                                    {
                                        w: t.w,
                                        h: t.h,
                                        x: t.x,
                                        y: t.y,
                                        i: t.i,
                                        className: "react-grid-placeholder",
                                        containerWidth: r,
                                        cols: n,
                                        margin: a,
                                        containerPadding: i || a,
                                        maxRows: u,
                                        rowHeight: s,
                                        isDraggable: !1,
                                        isResizable: !1,
                                        isBounded: !1,
                                        useCSSTransforms: c,
                                        transformScale: l,
                                    },
                                    o.a.createElement("div", null)
                                )
                            },
                        },
                        {
                            key: "processGridItem",
                            value: function (t, e) {
                                if (t && t.key) {
                                    var r = Object(c.getLayoutItem)(this.state.layout, String(t.key))
                                    if (!r) return null
                                    var n = this.props,
                                        a = n.width,
                                        i = n.cols,
                                        s = n.margin,
                                        u = n.containerPadding,
                                        l = n.rowHeight,
                                        f = n.maxRows,
                                        p = n.isDraggable,
                                        d = n.isResizable,
                                        h = n.isBounded,
                                        y = n.useCSSTransforms,
                                        g = n.transformScale,
                                        b = n.draggableCancel,
                                        m = n.draggableHandle,
                                        v = n.resizeHandles,
                                        O = n.resizeHandle,
                                        w = this.state,
                                        S = w.mounted,
                                        j = w.droppingPosition,
                                        D = "boolean" == typeof r.isDraggable ? r.isDraggable : !r.static && p,
                                        P = "boolean" == typeof r.isResizable ? r.isResizable : !r.static && d,
                                        x = r.resizeHandles || v,
                                        R = D && h && !1 !== r.isBounded
                                    return o.a.createElement(
                                        H,
                                        {
                                            containerWidth: a,
                                            cols: i,
                                            margin: s,
                                            containerPadding: u || s,
                                            maxRows: f,
                                            rowHeight: l,
                                            cancel: b,
                                            handle: m,
                                            onDragStop: this.onDragStop,
                                            onDragStart: this.onDragStart,
                                            onDrag: this.onDrag,
                                            onResizeStart: this.onResizeStart,
                                            onResize: this.onResize,
                                            onResizeStop: this.onResizeStop,
                                            isDraggable: D,
                                            isResizable: P,
                                            isBounded: R,
                                            useCSSTransforms: y && S,
                                            usePercentages: !S,
                                            transformScale: g,
                                            w: r.w,
                                            h: r.h,
                                            x: r.x,
                                            y: r.y,
                                            i: r.i,
                                            minH: r.minH,
                                            minW: r.minW,
                                            maxH: r.maxH,
                                            maxW: r.maxW,
                                            static: r.static,
                                            droppingPosition: e ? j : void 0,
                                            resizeHandles: x,
                                            resizeHandle: O,
                                        },
                                        t
                                    )
                                }
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this,
                                    e = this.props,
                                    r = e.className,
                                    n = e.style,
                                    a = e.isDroppable,
                                    i = e.innerRef,
                                    s = u()("react-grid-layout", r),
                                    l = A({ height: this.containerHeight() }, n)
                                return o.a.createElement(
                                    "div",
                                    {
                                        ref: i,
                                        className: s,
                                        style: l,
                                        onDrop: a ? this.onDrop : c.noop,
                                        onDragLeave: a ? this.onDragLeave : c.noop,
                                        onDragEnter: a ? this.onDragEnter : c.noop,
                                        onDragOver: a ? this.onDragOver : c.noop,
                                    },
                                    o.a.Children.map(this.props.children, function (e) {
                                        return t.processGridItem(e)
                                    }),
                                    a && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0),
                                    this.placeholder()
                                )
                            },
                        },
                    ]) && B(e.prototype, r),
                    n && B(e, n),
                    s
                )
            })(o.a.Component)
            G($, "displayName", "ReactGridLayout"),
                G($, "propTypes", j),
                G($, "defaultProps", {
                    autoSize: !0,
                    cols: 12,
                    className: "",
                    style: {},
                    draggableHandle: "",
                    draggableCancel: "",
                    containerPadding: null,
                    rowHeight: 150,
                    maxRows: 1 / 0,
                    layout: [],
                    margin: [10, 10],
                    isBounded: !1,
                    isDraggable: !0,
                    isResizable: !0,
                    isDroppable: !1,
                    useCSSTransforms: !0,
                    transformScale: 1,
                    verticalCompact: !0,
                    compactType: "vertical",
                    preventCollision: !1,
                    droppingItem: { i: "__dropping-elem__", h: 1, w: 1 },
                    resizeHandles: ["se"],
                    onLayoutChange: c.noop,
                    onDragStart: c.noop,
                    onDrag: c.noop,
                    onDragStop: c.noop,
                    onResizeStart: c.noop,
                    onResize: c.noop,
                    onResizeStop: c.noop,
                    onDrop: c.noop,
                })
        },
        function (t, e, r) {
            "use strict"
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.getBoundPosition = function (t, e, r) {
                    if (!t.props.bounds) return [e, r]
                    var i = t.props.bounds
                    i =
                        "string" == typeof i
                            ? i
                            : (function (t) {
                                  return { left: t.left, top: t.top, right: t.right, bottom: t.bottom }
                              })(i)
                    var s = a(t)
                    if ("string" == typeof i) {
                        var u,
                            c = s.ownerDocument,
                            l = c.defaultView
                        if (!((u = "parent" === i ? s.parentNode : c.querySelector(i)) instanceof l.HTMLElement))
                            throw new Error('Bounds selector "' + i + '" could not find an element.')
                        var f = l.getComputedStyle(s),
                            p = l.getComputedStyle(u)
                        i = {
                            left: -s.offsetLeft + (0, n.int)(p.paddingLeft) + (0, n.int)(f.marginLeft),
                            top: -s.offsetTop + (0, n.int)(p.paddingTop) + (0, n.int)(f.marginTop),
                            right: (0, o.innerWidth)(u) - (0, o.outerWidth)(s) - s.offsetLeft + (0, n.int)(p.paddingRight) - (0, n.int)(f.marginRight),
                            bottom: (0, o.innerHeight)(u) - (0, o.outerHeight)(s) - s.offsetTop + (0, n.int)(p.paddingBottom) - (0, n.int)(f.marginBottom),
                        }
                    }
                    ;(0, n.isNum)(i.right) && (e = Math.min(e, i.right))
                    ;(0, n.isNum)(i.bottom) && (r = Math.min(r, i.bottom))
                    ;(0, n.isNum)(i.left) && (e = Math.max(e, i.left))
                    ;(0, n.isNum)(i.top) && (r = Math.max(r, i.top))
                    return [e, r]
                }),
                (e.snapToGrid = function (t, e, r) {
                    var n = Math.round(e / t[0]) * t[0],
                        o = Math.round(r / t[1]) * t[1]
                    return [n, o]
                }),
                (e.canDragX = function (t) {
                    return "both" === t.props.axis || "x" === t.props.axis
                }),
                (e.canDragY = function (t) {
                    return "both" === t.props.axis || "y" === t.props.axis
                }),
                (e.getControlPosition = function (t, e, r) {
                    var n = "number" == typeof e ? (0, o.getTouch)(t, e) : null
                    if ("number" == typeof e && !n) return null
                    var i = a(r),
                        s = r.props.offsetParent || i.offsetParent || i.ownerDocument.body
                    return (0, o.offsetXYFromParent)(n || t, s, r.props.scale)
                }),
                (e.createCoreData = function (t, e, r) {
                    var o = t.state,
                        i = !(0, n.isNum)(o.lastX),
                        s = a(t)
                    return i
                        ? { node: s, deltaX: 0, deltaY: 0, lastX: e, lastY: r, x: e, y: r }
                        : { node: s, deltaX: e - o.lastX, deltaY: r - o.lastY, lastX: o.lastX, lastY: o.lastY, x: e, y: r }
                }),
                (e.createDraggableData = function (t, e) {
                    var r = t.props.scale
                    return {
                        node: e.node,
                        x: t.state.x + e.deltaX / r,
                        y: t.state.y + e.deltaY / r,
                        deltaX: e.deltaX / r,
                        deltaY: e.deltaY / r,
                        lastX: t.state.x,
                        lastY: t.state.y,
                    }
                })
            var n = r(7),
                o = r(9)
            function a(t) {
                var e = t.findDOMNode()
                if (!e) throw new Error("<DraggableCore>: Unmounted during event!")
                return e
            }
        },
        function (t, e, r) {
            "use strict"
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.default = function () {
                    void 0
                })
        },
        function (t, e, r) {
            "use strict"
            ;(e.__esModule = !0), (e.default = void 0)
            var n,
                o = (n = r(2)) && n.__esModule ? n : { default: n },
                a = r(8),
                i = r(25),
                s = r(14)
            function u() {
                return (u =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e]
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    }).apply(this, arguments)
            }
            function c(t, e) {
                var r = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? c(Object(r), !0).forEach(function (e) {
                              p(t, e, r[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : c(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                          })
                }
                return t
            }
            function f(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return t
            }
            function p(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            var d = (function (t) {
                var e, r
                function n() {
                    for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o]
                    return p(f((e = t.call.apply(t, [this].concat(n)) || this)), "state", void 0), p(f(e), "lastHandleRect", null), p(f(e), "slack", null), e
                }
                ;(r = t), ((e = n).prototype = Object.create(r.prototype)), (e.prototype.constructor = e), (e.__proto__ = r)
                var s = n.prototype
                return (
                    (s.componentWillUnmount = function () {
                        this.resetData()
                    }),
                    (s.lockAspectRatio = function (t, e, r) {
                        return [(t = (e = t / r) * r), e]
                    }),
                    (s.resetData = function () {
                        this.lastHandleRect = this.slack = null
                    }),
                    (s.runConstraints = function (t, e) {
                        var r = [this.props.minConstraints, this.props.maxConstraints],
                            n = r[0],
                            o = r[1]
                        if (!n && !o) return [t, e]
                        if (this.props.lockAspectRatio)
                            if (e === this.props.height) {
                                var a = this.props.width / this.props.height
                                t = (e = t / a) * a
                            } else {
                                var i = this.props.height / this.props.width
                                e = (t = e / i) * i
                            }
                        var s = t,
                            u = e,
                            c = this.slack || [0, 0],
                            l = c[0],
                            f = c[1]
                        return (
                            (t += l),
                            (e += f),
                            n && ((t = Math.max(n[0], t)), (e = Math.max(n[1], e))),
                            o && ((t = Math.min(o[0], t)), (e = Math.min(o[1], e))),
                            (this.slack = [l + (s - t), f + (u - e)]),
                            [t, e]
                        )
                    }),
                    (s.resizeHandler = function (t, e) {
                        var r = this
                        return function (n, o) {
                            var a = o.node,
                                i = o.deltaX,
                                s = o.deltaY
                            "onResizeStart" === t && r.resetData()
                            var u = ("both" === r.props.axis || "x" === r.props.axis) && "n" !== e && "s" !== e,
                                c = ("both" === r.props.axis || "y" === r.props.axis) && "e" !== e && "w" !== e
                            if (u || c) {
                                var l = e[0],
                                    f = e[e.length - 1],
                                    p = a.getBoundingClientRect()
                                if (null != r.lastHandleRect) {
                                    if ("w" === f) i += p.left - r.lastHandleRect.left
                                    if ("n" === l) s += p.top - r.lastHandleRect.top
                                }
                                ;(r.lastHandleRect = p), "w" === f && (i = -i), "n" === l && (s = -s)
                                var d = r.props.width + (u ? i / r.props.transformScale : 0),
                                    h = r.props.height + (c ? s / r.props.transformScale : 0),
                                    y = r.runConstraints(d, h)
                                ;(d = y[0]), (h = y[1])
                                var g = d !== r.props.width || h !== r.props.height,
                                    b = "function" == typeof r.props[t] ? r.props[t] : null
                                b &&
                                    !("onResize" === t && !g) &&
                                    ("function" == typeof n.persist && n.persist(), b(n, { node: a, size: { width: d, height: h }, handle: e })),
                                    "onResizeStop" === t && r.resetData()
                            }
                        }
                    }),
                    (s.renderResizeHandle = function (t) {
                        var e = this.props.handle
                        return e
                            ? "function" == typeof e
                                ? e(t)
                                : e
                            : o.default.createElement("span", { className: "react-resizable-handle react-resizable-handle-" + t })
                    }),
                    (s.render = function () {
                        var t = this,
                            e = this.props,
                            r = e.children,
                            n = e.className,
                            s = e.draggableOpts,
                            c =
                                (e.width,
                                e.height,
                                e.handle,
                                e.handleSize,
                                e.lockAspectRatio,
                                e.axis,
                                e.minConstraints,
                                e.maxConstraints,
                                e.onResize,
                                e.onResizeStop,
                                e.onResizeStart,
                                e.resizeHandles),
                            f =
                                (e.transformScale,
                                (function (t, e) {
                                    if (null == t) return {}
                                    var r,
                                        n,
                                        o = {},
                                        a = Object.keys(t)
                                    for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (o[r] = t[r])
                                    return o
                                })(e, [
                                    "children",
                                    "className",
                                    "draggableOpts",
                                    "width",
                                    "height",
                                    "handle",
                                    "handleSize",
                                    "lockAspectRatio",
                                    "axis",
                                    "minConstraints",
                                    "maxConstraints",
                                    "onResize",
                                    "onResizeStop",
                                    "onResizeStart",
                                    "resizeHandles",
                                    "transformScale",
                                ]))
                        return (0, i.cloneElement)(
                            r,
                            l(
                                l({}, f),
                                {},
                                {
                                    className: (n ? n + " " : "") + "react-resizable",
                                    children: [].concat(
                                        r.props.children,
                                        c.map(function (e) {
                                            return o.default.createElement(
                                                a.DraggableCore,
                                                u({}, s, {
                                                    key: "resizableHandle-" + e,
                                                    onStop: t.resizeHandler("onResizeStop", e),
                                                    onStart: t.resizeHandler("onResizeStart", e),
                                                    onDrag: t.resizeHandler("onResize", e),
                                                }),
                                                t.renderResizeHandle(e)
                                            )
                                        })
                                    ),
                                }
                            )
                        )
                    }),
                    n
                )
            })(o.default.Component)
            ;(e.default = d),
                p(d, "propTypes", s.resizableProps),
                p(d, "defaultProps", {
                    handleSize: [20, 20],
                    lockAspectRatio: !1,
                    axis: "both",
                    minConstraints: [20, 20],
                    maxConstraints: [1 / 0, 1 / 0],
                    resizeHandles: ["se"],
                    transformScale: 1,
                })
        },
        function (t, e, r) {
            "use strict"
            ;(e.__esModule = !0), (e.resizableProps = void 0)
            var n,
                o = (n = r(0)) && n.__esModule ? n : { default: n }
            r(8)
            var a = {
                axis: o.default.oneOf(["both", "x", "y", "none"]),
                className: o.default.string,
                children: o.default.element.isRequired,
                draggableOpts: o.default.shape({
                    allowAnyClick: o.default.bool,
                    cancel: o.default.string,
                    children: o.default.node,
                    disabled: o.default.bool,
                    enableUserSelectHack: o.default.bool,
                    offsetParent: o.default.node,
                    grid: o.default.arrayOf(o.default.number),
                    handle: o.default.string,
                    nodeRef: o.default.object,
                    onStart: o.default.func,
                    onDrag: o.default.func,
                    onStop: o.default.func,
                    onMouseDown: o.default.func,
                    scale: o.default.number,
                }),
                height: o.default.number.isRequired,
                handle: o.default.oneOfType([o.default.node, o.default.func]),
                handleSize: o.default.arrayOf(o.default.number),
                lockAspectRatio: o.default.bool,
                maxConstraints: o.default.arrayOf(o.default.number),
                minConstraints: o.default.arrayOf(o.default.number),
                onResizeStop: o.default.func,
                onResizeStart: o.default.func,
                onResize: o.default.func,
                resizeHandles: o.default.arrayOf(o.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
                transformScale: o.default.number,
                width: o.default.number.isRequired,
            }
            e.resizableProps = a
        },
        function (t, e, r) {
            "use strict"
            ;(t.exports = function () {
                throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")
            }),
                (t.exports.Resizable = r(13).default),
                (t.exports.ResizableBox = r(26).default)
        },
        function (t, e, r) {
            ;(t.exports = r(10).default),
                (t.exports.utils = r(1)),
                (t.exports.Responsive = r(27).default),
                (t.exports.Responsive.utils = r(4)),
                (t.exports.WidthProvider = r(28).default)
        },
        function (t, e) {
            var r
            r = (function () {
                return this
            })()
            try {
                r = r || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (r = window)
            }
            t.exports = r
        },
        function (t, e) {
            t.exports = function (t) {
                return (
                    t.webpackPolyfill ||
                        ((t.deprecate = function () {}),
                        (t.paths = []),
                        t.children || (t.children = []),
                        Object.defineProperty(t, "loaded", {
                            enumerable: !0,
                            get: function () {
                                return t.l
                            },
                        }),
                        Object.defineProperty(t, "id", {
                            enumerable: !0,
                            get: function () {
                                return t.i
                            },
                        }),
                        (t.webpackPolyfill = 1)),
                    t
                )
            }
        },
        function (t, e) {
            t.exports = function (t, e, r) {
                return (
                    t === e ||
                    (t.className === e.className &&
                        r(t.style, e.style) &&
                        t.width === e.width &&
                        t.autoSize === e.autoSize &&
                        t.cols === e.cols &&
                        t.draggableCancel === e.draggableCancel &&
                        t.draggableHandle === e.draggableHandle &&
                        r(t.verticalCompact, e.verticalCompact) &&
                        r(t.compactType, e.compactType) &&
                        r(t.layout, e.layout) &&
                        r(t.margin, e.margin) &&
                        r(t.containerPadding, e.containerPadding) &&
                        t.rowHeight === e.rowHeight &&
                        t.maxRows === e.maxRows &&
                        t.isBounded === e.isBounded &&
                        t.isDraggable === e.isDraggable &&
                        t.isResizable === e.isResizable &&
                        t.preventCollision === e.preventCollision &&
                        t.useCSSTransforms === e.useCSSTransforms &&
                        t.transformScale === e.transformScale &&
                        t.isDroppable === e.isDroppable &&
                        r(t.resizeHandles, e.resizeHandles) &&
                        t.onLayoutChange === e.onLayoutChange &&
                        t.onDragStart === e.onDragStart &&
                        t.onDrag === e.onDrag &&
                        t.onDragStop === e.onDragStop &&
                        t.onResizeStart === e.onResizeStart &&
                        t.onResize === e.onResize &&
                        t.onResizeStop === e.onResizeStop &&
                        t.onDrop === e.onDrop &&
                        r(t.droppingItem, e.droppingItem) &&
                        r(t.innerRef, e.innerRef))
                )
            }
        },
        function (t, e, r) {
            "use strict"
            var n = r(21)
            function o() {}
            function a() {}
            ;(a.resetWarningCache = o),
                (t.exports = function () {
                    function t(t, e, r, o, a, i) {
                        if (i !== n) {
                            var s = new Error(
                                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                            )
                            throw ((s.name = "Invariant Violation"), s)
                        }
                    }
                    function e() {
                        return t
                    }
                    t.isRequired = t
                    var r = {
                        array: t,
                        bool: t,
                        func: t,
                        number: t,
                        object: t,
                        string: t,
                        symbol: t,
                        any: t,
                        arrayOf: e,
                        element: t,
                        elementType: t,
                        instanceOf: e,
                        node: t,
                        objectOf: e,
                        oneOf: e,
                        oneOfType: e,
                        shape: e,
                        exact: e,
                        checkPropTypes: a,
                        resetWarningCache: o,
                    }
                    return (r.PropTypes = r), r
                })
        },
        function (t, e, r) {
            "use strict"
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        function (t, e, r) {
            "use strict"
            Object.defineProperty(e, "__esModule", { value: !0 }),
                Object.defineProperty(e, "DraggableCore", {
                    enumerable: !0,
                    get: function () {
                        return l.default
                    },
                }),
                (e.default = void 0)
            var n = (function (t) {
                    if (t && t.__esModule) return t
                    if (null === t || ("object" !== h(t) && "function" != typeof t)) return { default: t }
                    var e = d()
                    if (e && e.has(t)) return e.get(t)
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(t, o) : null
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = t[o])
                        }
                    ;(r.default = t), e && e.set(t, r)
                    return r
                })(r(2)),
                o = p(r(0)),
                a = p(r(5)),
                i = p(r(6)),
                s = r(9),
                u = r(11),
                c = r(7),
                l = p(r(24)),
                f = p(r(12))
            function p(t) {
                return t && t.__esModule ? t : { default: t }
            }
            function d() {
                if ("function" != typeof WeakMap) return null
                var t = new WeakMap()
                return (
                    (d = function () {
                        return t
                    }),
                    t
                )
            }
            function h(t) {
                return (h =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                          })(t)
            }
            function y() {
                return (y =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e]
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    }).apply(this, arguments)
            }
            function g(t, e) {
                if (null == t) return {}
                var r,
                    n,
                    o = (function (t, e) {
                        if (null == t) return {}
                        var r,
                            n,
                            o = {},
                            a = Object.keys(t)
                        for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (o[r] = t[r])
                        return o
                    })(t, e)
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t)
                    for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]))
                }
                return o
            }
            function b(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t
                    })(t) ||
                    (function (t, e) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0
                        try {
                            for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
                        } catch (t) {
                            ;(o = !0), (a = t)
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return r
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return
                        if ("string" == typeof t) return m(t, e)
                        var r = Object.prototype.toString.call(t).slice(8, -1)
                        "Object" === r && t.constructor && (r = t.constructor.name)
                        if ("Map" === r || "Set" === r) return Array.from(t)
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(t, e)
                    })(t, e) ||
                    (function () {
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        )
                    })()
                )
            }
            function m(t, e) {
                ;(null == e || e > t.length) && (e = t.length)
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
                return n
            }
            function v(t, e) {
                var r = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function O(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? v(Object(r), !0).forEach(function (e) {
                              _(t, e, r[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : v(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                          })
                }
                return t
            }
            function w(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r]
                    ;(n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            function S(t, e, r) {
                return e && w(t.prototype, e), r && w(t, r), t
            }
            function j(t, e) {
                return (j =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t
                    })(t, e)
            }
            function D(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1
                    if (Reflect.construct.sham) return !1
                    if ("function" == typeof Proxy) return !0
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                })()
                return function () {
                    var r,
                        n = R(t)
                    if (e) {
                        var o = R(this).constructor
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments)
                    return P(this, r)
                }
            }
            function P(t, e) {
                return !e || ("object" !== h(e) && "function" != typeof e) ? x(t) : e
            }
            function x(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return t
            }
            function R(t) {
                return (R = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
            }
            function _(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            var z = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                    ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && j(t, e)
                })(r, t)
                var e = D(r)
                function r(t) {
                    var n
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        })(this, r),
                        _(x((n = e.call(this, t))), "onDragStart", function (t, e) {
                            if (((0, f.default)("Draggable: onDragStart: %j", e), !1 === n.props.onStart(t, (0, u.createDraggableData)(x(n), e)))) return !1
                            n.setState({ dragging: !0, dragged: !0 })
                        }),
                        _(x(n), "onDrag", function (t, e) {
                            if (!n.state.dragging) return !1
                            ;(0, f.default)("Draggable: onDrag: %j", e)
                            var r = (0, u.createDraggableData)(x(n), e),
                                o = { x: r.x, y: r.y }
                            if (n.props.bounds) {
                                var a = o.x,
                                    i = o.y
                                ;(o.x += n.state.slackX), (o.y += n.state.slackY)
                                var s = b((0, u.getBoundPosition)(x(n), o.x, o.y), 2),
                                    c = s[0],
                                    l = s[1]
                                ;(o.x = c),
                                    (o.y = l),
                                    (o.slackX = n.state.slackX + (a - o.x)),
                                    (o.slackY = n.state.slackY + (i - o.y)),
                                    (r.x = o.x),
                                    (r.y = o.y),
                                    (r.deltaX = o.x - n.state.x),
                                    (r.deltaY = o.y - n.state.y)
                            }
                            if (!1 === n.props.onDrag(t, r)) return !1
                            n.setState(o)
                        }),
                        _(x(n), "onDragStop", function (t, e) {
                            if (!n.state.dragging) return !1
                            if (!1 === n.props.onStop(t, (0, u.createDraggableData)(x(n), e))) return !1
                            ;(0, f.default)("Draggable: onDragStop: %j", e)
                            var r = { dragging: !1, slackX: 0, slackY: 0 }
                            if (Boolean(n.props.position)) {
                                var o = n.props.position,
                                    a = o.x,
                                    i = o.y
                                ;(r.x = a), (r.y = i)
                            }
                            n.setState(r)
                        }),
                        (n.state = {
                            dragging: !1,
                            dragged: !1,
                            x: t.position ? t.position.x : t.defaultPosition.x,
                            y: t.position ? t.position.y : t.defaultPosition.y,
                            prevPropsPosition: O({}, t.position),
                            slackX: 0,
                            slackY: 0,
                            isElementSVG: !1,
                        }),
                        !t.position ||
                            t.onDrag ||
                            t.onStop ||
                            console.warn(
                                "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."
                            ),
                        n
                    )
                }
                return (
                    S(r, null, [
                        {
                            key: "getDerivedStateFromProps",
                            value: function (t, e) {
                                var r = t.position,
                                    n = e.prevPropsPosition
                                return !r || (n && r.x === n.x && r.y === n.y)
                                    ? null
                                    : ((0, f.default)("Draggable: getDerivedStateFromProps %j", { position: r, prevPropsPosition: n }),
                                      { x: r.x, y: r.y, prevPropsPosition: O({}, r) })
                            },
                        },
                    ]),
                    S(r, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                void 0 !== window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 })
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this.setState({ dragging: !1 })
                            },
                        },
                        {
                            key: "findDOMNode",
                            value: function () {
                                return this.props.nodeRef ? this.props.nodeRef.current : a.default.findDOMNode(this)
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t,
                                    e = this.props,
                                    r = (e.axis, e.bounds, e.children),
                                    o = e.defaultPosition,
                                    a = e.defaultClassName,
                                    c = e.defaultClassNameDragging,
                                    f = e.defaultClassNameDragged,
                                    p = e.position,
                                    d = e.positionOffset,
                                    h =
                                        (e.scale,
                                        g(e, [
                                            "axis",
                                            "bounds",
                                            "children",
                                            "defaultPosition",
                                            "defaultClassName",
                                            "defaultClassNameDragging",
                                            "defaultClassNameDragged",
                                            "position",
                                            "positionOffset",
                                            "scale",
                                        ])),
                                    b = {},
                                    m = null,
                                    v = !Boolean(p) || this.state.dragging,
                                    w = p || o,
                                    S = { x: (0, u.canDragX)(this) && v ? this.state.x : w.x, y: (0, u.canDragY)(this) && v ? this.state.y : w.y }
                                this.state.isElementSVG ? (m = (0, s.createSVGTransform)(S, d)) : (b = (0, s.createCSSTransform)(S, d))
                                var j = (0, i.default)(r.props.className || "", a, (_((t = {}), c, this.state.dragging), _(t, f, this.state.dragged), t))
                                return n.createElement(
                                    l.default,
                                    y({}, h, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
                                    n.cloneElement(n.Children.only(r), { className: j, style: O(O({}, r.props.style), b), transform: m })
                                )
                            },
                        },
                    ]),
                    r
                )
            })(n.Component)
            ;(e.default = z),
                _(z, "displayName", "Draggable"),
                _(
                    z,
                    "propTypes",
                    O(
                        O({}, l.default.propTypes),
                        {},
                        {
                            axis: o.default.oneOf(["both", "x", "y", "none"]),
                            bounds: o.default.oneOfType([
                                o.default.shape({ left: o.default.number, right: o.default.number, top: o.default.number, bottom: o.default.number }),
                                o.default.string,
                                o.default.oneOf([!1]),
                            ]),
                            defaultClassName: o.default.string,
                            defaultClassNameDragging: o.default.string,
                            defaultClassNameDragged: o.default.string,
                            defaultPosition: o.default.shape({ x: o.default.number, y: o.default.number }),
                            positionOffset: o.default.shape({
                                x: o.default.oneOfType([o.default.number, o.default.string]),
                                y: o.default.oneOfType([o.default.number, o.default.string]),
                            }),
                            position: o.default.shape({ x: o.default.number, y: o.default.number }),
                            className: c.dontSetMe,
                            style: c.dontSetMe,
                            transform: c.dontSetMe,
                        }
                    )
                ),
                _(
                    z,
                    "defaultProps",
                    O(
                        O({}, l.default.defaultProps),
                        {},
                        {
                            axis: "both",
                            bounds: !1,
                            defaultClassName: "react-draggable",
                            defaultClassNameDragging: "react-draggable-dragging",
                            defaultClassNameDragged: "react-draggable-dragged",
                            defaultPosition: { x: 0, y: 0 },
                            position: null,
                            scale: 1,
                        }
                    )
                )
        },
        function (t, e, r) {
            "use strict"
            Object.defineProperty(e, "__esModule", { value: !0 }),
                (e.getPrefix = o),
                (e.browserPrefixToKey = a),
                (e.browserPrefixToStyle = function (t, e) {
                    return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t
                }),
                (e.default = void 0)
            var n = ["Moz", "Webkit", "O", "ms"]
            function o() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform"
                if ("undefined" == typeof window || void 0 === window.document) return ""
                var e = window.document.documentElement.style
                if (t in e) return ""
                for (var r = 0; r < n.length; r++) if (a(t, n[r]) in e) return n[r]
                return ""
            }
            function a(t, e) {
                return e
                    ? "".concat(e).concat(
                          (function (t) {
                              for (var e = "", r = !0, n = 0; n < t.length; n++)
                                  r ? ((e += t[n].toUpperCase()), (r = !1)) : "-" === t[n] ? (r = !0) : (e += t[n])
                              return e
                          })(t)
                      )
                    : t
            }
            var i = o()
            e.default = i
        },
        function (t, e, r) {
            "use strict"
            Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0)
            var n = (function (t) {
                    if (t && t.__esModule) return t
                    if (null === t || ("object" !== p(t) && "function" != typeof t)) return { default: t }
                    var e = f()
                    if (e && e.has(t)) return e.get(t)
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(t, o) : null
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = t[o])
                        }
                    ;(r.default = t), e && e.set(t, r)
                    return r
                })(r(2)),
                o = l(r(0)),
                a = l(r(5)),
                i = r(9),
                s = r(11),
                u = r(7),
                c = l(r(12))
            function l(t) {
                return t && t.__esModule ? t : { default: t }
            }
            function f() {
                if ("function" != typeof WeakMap) return null
                var t = new WeakMap()
                return (
                    (f = function () {
                        return t
                    }),
                    t
                )
            }
            function p(t) {
                return (p =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                          })(t)
            }
            function d(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t
                    })(t) ||
                    (function (t, e) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return
                        var r = [],
                            n = !0,
                            o = !1,
                            a = void 0
                        try {
                            for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
                        } catch (t) {
                            ;(o = !0), (a = t)
                        } finally {
                            try {
                                n || null == s.return || s.return()
                            } finally {
                                if (o) throw a
                            }
                        }
                        return r
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return
                        if ("string" == typeof t) return h(t, e)
                        var r = Object.prototype.toString.call(t).slice(8, -1)
                        "Object" === r && t.constructor && (r = t.constructor.name)
                        if ("Map" === r || "Set" === r) return Array.from(t)
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(t, e)
                    })(t, e) ||
                    (function () {
                        throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        )
                    })()
                )
            }
            function h(t, e) {
                ;(null == e || e > t.length) && (e = t.length)
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r]
                return n
            }
            function y(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            function g(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r]
                    ;(n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            function b(t, e) {
                return (b =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t
                    })(t, e)
            }
            function m(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1
                    if (Reflect.construct.sham) return !1
                    if ("function" == typeof Proxy) return !0
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                })()
                return function () {
                    var r,
                        n = w(t)
                    if (e) {
                        var o = w(this).constructor
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments)
                    return v(this, r)
                }
            }
            function v(t, e) {
                return !e || ("object" !== p(e) && "function" != typeof e) ? O(t) : e
            }
            function O(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return t
            }
            function w(t) {
                return (w = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
            }
            function S(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            var j = { start: "touchstart", move: "touchmove", stop: "touchend" },
                D = { start: "mousedown", move: "mousemove", stop: "mouseup" },
                P = D,
                x = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                        ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && b(t, e)
                    })(l, t)
                    var e,
                        r,
                        o,
                        u = m(l)
                    function l() {
                        var t
                        y(this, l)
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n]
                        return (
                            S(O((t = u.call.apply(u, [this].concat(r)))), "state", { dragging: !1, lastX: NaN, lastY: NaN, touchIdentifier: null }),
                            S(O(t), "mounted", !1),
                            S(O(t), "handleDragStart", function (e) {
                                if ((t.props.onMouseDown(e), !t.props.allowAnyClick && "number" == typeof e.button && 0 !== e.button)) return !1
                                var r = t.findDOMNode()
                                if (!r || !r.ownerDocument || !r.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!")
                                var n = r.ownerDocument
                                if (
                                    !(
                                        t.props.disabled ||
                                        !(e.target instanceof n.defaultView.Node) ||
                                        (t.props.handle && !(0, i.matchesSelectorAndParentsTo)(e.target, t.props.handle, r)) ||
                                        (t.props.cancel && (0, i.matchesSelectorAndParentsTo)(e.target, t.props.cancel, r))
                                    )
                                ) {
                                    "touchstart" === e.type && e.preventDefault()
                                    var o = (0, i.getTouchIdentifier)(e)
                                    t.setState({ touchIdentifier: o })
                                    var a = (0, s.getControlPosition)(e, o, O(t))
                                    if (null != a) {
                                        var u = a.x,
                                            l = a.y,
                                            f = (0, s.createCoreData)(O(t), u, l)
                                        ;(0, c.default)("DraggableCore: handleDragStart: %j", f),
                                            (0, c.default)("calling", t.props.onStart),
                                            !1 !== t.props.onStart(e, f) &&
                                                !1 !== t.mounted &&
                                                (t.props.enableUserSelectHack && (0, i.addUserSelectStyles)(n),
                                                t.setState({ dragging: !0, lastX: u, lastY: l }),
                                                (0, i.addEvent)(n, P.move, t.handleDrag),
                                                (0, i.addEvent)(n, P.stop, t.handleDragStop))
                                    }
                                }
                            }),
                            S(O(t), "handleDrag", function (e) {
                                var r = (0, s.getControlPosition)(e, t.state.touchIdentifier, O(t))
                                if (null != r) {
                                    var n = r.x,
                                        o = r.y
                                    if (Array.isArray(t.props.grid)) {
                                        var a = n - t.state.lastX,
                                            i = o - t.state.lastY,
                                            u = d((0, s.snapToGrid)(t.props.grid, a, i), 2)
                                        if (((a = u[0]), (i = u[1]), !a && !i)) return
                                        ;(n = t.state.lastX + a), (o = t.state.lastY + i)
                                    }
                                    var l = (0, s.createCoreData)(O(t), n, o)
                                    if (((0, c.default)("DraggableCore: handleDrag: %j", l), !1 !== t.props.onDrag(e, l) && !1 !== t.mounted))
                                        t.setState({ lastX: n, lastY: o })
                                    else
                                        try {
                                            t.handleDragStop(new MouseEvent("mouseup"))
                                        } catch (e) {
                                            var f = document.createEvent("MouseEvents")
                                            f.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(f)
                                        }
                                }
                            }),
                            S(O(t), "handleDragStop", function (e) {
                                if (t.state.dragging) {
                                    var r = (0, s.getControlPosition)(e, t.state.touchIdentifier, O(t))
                                    if (null != r) {
                                        var n = r.x,
                                            o = r.y,
                                            a = (0, s.createCoreData)(O(t), n, o)
                                        if (!1 === t.props.onStop(e, a) || !1 === t.mounted) return !1
                                        var u = t.findDOMNode()
                                        u && t.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(u.ownerDocument),
                                            (0, c.default)("DraggableCore: handleDragStop: %j", a),
                                            t.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                                            u &&
                                                ((0, c.default)("DraggableCore: Removing handlers"),
                                                (0, i.removeEvent)(u.ownerDocument, P.move, t.handleDrag),
                                                (0, i.removeEvent)(u.ownerDocument, P.stop, t.handleDragStop))
                                    }
                                }
                            }),
                            S(O(t), "onMouseDown", function (e) {
                                return (P = D), t.handleDragStart(e)
                            }),
                            S(O(t), "onMouseUp", function (e) {
                                return (P = D), t.handleDragStop(e)
                            }),
                            S(O(t), "onTouchStart", function (e) {
                                return (P = j), t.handleDragStart(e)
                            }),
                            S(O(t), "onTouchEnd", function (e) {
                                return (P = j), t.handleDragStop(e)
                            }),
                            t
                        )
                    }
                    return (
                        (e = l),
                        (r = [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    this.mounted = !0
                                    var t = this.findDOMNode()
                                    t && (0, i.addEvent)(t, j.start, this.onTouchStart, { passive: !1 })
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.mounted = !1
                                    var t = this.findDOMNode()
                                    if (t) {
                                        var e = t.ownerDocument
                                        ;(0, i.removeEvent)(e, D.move, this.handleDrag),
                                            (0, i.removeEvent)(e, j.move, this.handleDrag),
                                            (0, i.removeEvent)(e, D.stop, this.handleDragStop),
                                            (0, i.removeEvent)(e, j.stop, this.handleDragStop),
                                            (0, i.removeEvent)(t, j.start, this.onTouchStart, { passive: !1 }),
                                            this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(e)
                                    }
                                },
                            },
                            {
                                key: "findDOMNode",
                                value: function () {
                                    return this.props.nodeRef ? this.props.nodeRef.current : a.default.findDOMNode(this)
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return n.cloneElement(n.Children.only(this.props.children), {
                                        onMouseDown: this.onMouseDown,
                                        onMouseUp: this.onMouseUp,
                                        onTouchEnd: this.onTouchEnd,
                                    })
                                },
                            },
                        ]) && g(e.prototype, r),
                        o && g(e, o),
                        l
                    )
                })(n.Component)
            ;(e.default = x),
                S(x, "displayName", "DraggableCore"),
                S(x, "propTypes", {
                    allowAnyClick: o.default.bool,
                    disabled: o.default.bool,
                    enableUserSelectHack: o.default.bool,
                    offsetParent: function (t, e) {
                        if (t[e] && 1 !== t[e].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.")
                    },
                    grid: o.default.arrayOf(o.default.number),
                    handle: o.default.string,
                    cancel: o.default.string,
                    nodeRef: o.default.object,
                    onStart: o.default.func,
                    onDrag: o.default.func,
                    onStop: o.default.func,
                    onMouseDown: o.default.func,
                    scale: o.default.number,
                    className: u.dontSetMe,
                    style: u.dontSetMe,
                    transform: u.dontSetMe,
                }),
                S(x, "defaultProps", {
                    allowAnyClick: !1,
                    cancel: null,
                    disabled: !1,
                    enableUserSelectHack: !0,
                    offsetParent: null,
                    handle: null,
                    grid: null,
                    transform: null,
                    onStart: function () {},
                    onDrag: function () {},
                    onStop: function () {},
                    onMouseDown: function () {},
                    scale: 1,
                })
        },
        function (t, e, r) {
            "use strict"
            ;(e.__esModule = !0),
                (e.cloneElement = function (t, e) {
                    e.style && t.props.style && (e.style = i(i({}, t.props.style), e.style))
                    e.className && t.props.className && (e.className = t.props.className + " " + e.className)
                    return o.default.cloneElement(t, e)
                })
            var n,
                o = (n = r(2)) && n.__esModule ? n : { default: n }
            function a(t, e) {
                var r = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? a(Object(r), !0).forEach(function (e) {
                              s(t, e, r[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : a(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                          })
                }
                return t
            }
            function s(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
        },
        function (t, e, r) {
            "use strict"
            ;(e.__esModule = !0), (e.default = void 0)
            var n = (function (t) {
                    if (t && t.__esModule) return t
                    if (null === t || ("object" != typeof t && "function" != typeof t)) return { default: t }
                    var e = u()
                    if (e && e.has(t)) return e.get(t)
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(t, o) : null
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : (r[o] = t[o])
                        }
                    ;(r.default = t), e && e.set(t, r)
                    return r
                })(r(2)),
                o = s(r(0)),
                a = s(r(13)),
                i = r(14)
            function s(t) {
                return t && t.__esModule ? t : { default: t }
            }
            function u() {
                if ("function" != typeof WeakMap) return null
                var t = new WeakMap()
                return (
                    (u = function () {
                        return t
                    }),
                    t
                )
            }
            function c() {
                return (c =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e]
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    }).apply(this, arguments)
            }
            function l(t, e) {
                var r = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? l(Object(r), !0).forEach(function (e) {
                              d(t, e, r[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : l(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                          })
                }
                return t
            }
            function p(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return t
            }
            function d(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            var h = (function (t) {
                var e, r
                function o() {
                    for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o]
                    return (
                        d(p((e = t.call.apply(t, [this].concat(n)) || this)), "state", {
                            width: e.props.width,
                            height: e.props.height,
                            propsWidth: e.props.width,
                            propsHeight: e.props.height,
                        }),
                        d(p(e), "onResize", function (t, r) {
                            var n = r.size
                            e.props.onResize
                                ? (t.persist && t.persist(),
                                  e.setState(n, function () {
                                      return e.props.onResize && e.props.onResize(t, r)
                                  }))
                                : e.setState(n)
                        }),
                        e
                    )
                }
                return (
                    (r = t),
                    ((e = o).prototype = Object.create(r.prototype)),
                    (e.prototype.constructor = e),
                    (e.__proto__ = r),
                    (o.getDerivedStateFromProps = function (t, e) {
                        return e.propsWidth !== t.width || e.propsHeight !== t.height
                            ? { width: t.width, height: t.height, propsWidth: t.width, propsHeight: t.height }
                            : null
                    }),
                    (o.prototype.render = function () {
                        var t = this.props,
                            e = t.handle,
                            r = t.handleSize,
                            o = (t.onResize, t.onResizeStart),
                            i = t.onResizeStop,
                            s = t.draggableOpts,
                            u = t.minConstraints,
                            l = t.maxConstraints,
                            p = t.lockAspectRatio,
                            d = t.axis,
                            h = (t.width, t.height, t.resizeHandles),
                            y = t.style,
                            g = t.transformScale,
                            b = (function (t, e) {
                                if (null == t) return {}
                                var r,
                                    n,
                                    o = {},
                                    a = Object.keys(t)
                                for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (o[r] = t[r])
                                return o
                            })(t, [
                                "handle",
                                "handleSize",
                                "onResize",
                                "onResizeStart",
                                "onResizeStop",
                                "draggableOpts",
                                "minConstraints",
                                "maxConstraints",
                                "lockAspectRatio",
                                "axis",
                                "width",
                                "height",
                                "resizeHandles",
                                "style",
                                "transformScale",
                            ])
                        return n.createElement(
                            a.default,
                            {
                                axis: d,
                                draggableOpts: s,
                                handle: e,
                                handleSize: r,
                                height: this.state.height,
                                lockAspectRatio: p,
                                maxConstraints: l,
                                minConstraints: u,
                                onResizeStart: o,
                                onResize: this.onResize,
                                onResizeStop: i,
                                resizeHandles: h,
                                transformScale: g,
                                width: this.state.width,
                            },
                            n.createElement("div", c({}, b, { style: f(f({}, y), {}, { width: this.state.width + "px", height: this.state.height + "px" }) }))
                        )
                    }),
                    o
                )
            })(n.Component)
            ;(e.default = h), d(h, "propTypes", f(f({}, i.resizableProps), {}, { children: o.default.element }))
        },
        function (t, e, r) {
            "use strict"
            r.r(e),
                r.d(e, "default", function () {
                    return x
                })
            var n = r(2),
                o = r(0),
                a = r.n(o),
                i = r(3),
                s = r.n(i),
                u = r(1),
                c = r(4),
                l = r(10)
            function f(t) {
                return (f =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                          })(t)
            }
            function p() {
                return (p =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e]
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    }).apply(this, arguments)
            }
            function d(t, e) {
                if (null == t) return {}
                var r,
                    n,
                    o = (function (t, e) {
                        if (null == t) return {}
                        var r,
                            n,
                            o = {},
                            a = Object.keys(t)
                        for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (o[r] = t[r])
                        return o
                    })(t, e)
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t)
                    for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]))
                }
                return o
            }
            function h(t, e) {
                var r = Object.keys(t)
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t)
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        })),
                        r.push.apply(r, n)
                }
                return r
            }
            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {}
                    e % 2
                        ? h(Object(r), !0).forEach(function (e) {
                              j(t, e, r[e])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : h(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                          })
                }
                return t
            }
            function g(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            function b(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r]
                    ;(n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            function m(t, e) {
                return (m =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t
                    })(t, e)
            }
            function v(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1
                    if (Reflect.construct.sham) return !1
                    if ("function" == typeof Proxy) return !0
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                })()
                return function () {
                    var r,
                        n = S(t)
                    if (e) {
                        var o = S(this).constructor
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments)
                    return O(this, r)
                }
            }
            function O(t, e) {
                return !e || ("object" !== f(e) && "function" != typeof e) ? w(t) : e
            }
            function w(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return t
            }
            function S(t) {
                return (S = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
            }
            function j(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            var D = function (t) {
                return Object.prototype.toString.call(t)
            }
            function P(t, e) {
                return null == t ? null : Array.isArray(t) ? t : t[e]
            }
            var x = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                    ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && m(t, e)
                })(i, t)
                var e,
                    r,
                    o,
                    a = v(i)
                function i() {
                    var t
                    g(this, i)
                    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n]
                    return (
                        j(w((t = a.call.apply(a, [this].concat(r)))), "state", t.generateInitialState()),
                        j(w(t), "onLayoutChange", function (e) {
                            t.props.onLayoutChange(e, y(y({}, t.props.layouts), {}, j({}, t.state.breakpoint, e)))
                        }),
                        t
                    )
                }
                return (
                    (e = i),
                    (o = [
                        {
                            key: "getDerivedStateFromProps",
                            value: function (t, e) {
                                if (!s()(t.layouts, e.layouts)) {
                                    var r = e.breakpoint,
                                        n = e.cols
                                    return {
                                        layout: Object(c.findOrGenerateResponsiveLayout)(t.layouts, t.breakpoints, r, r, n, t.compactType),
                                        layouts: t.layouts,
                                    }
                                }
                                return null
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "generateInitialState",
                            value: function () {
                                var t = this.props,
                                    e = t.width,
                                    r = t.breakpoints,
                                    n = t.layouts,
                                    o = t.cols,
                                    a = Object(c.getBreakpointFromWidth)(r, e),
                                    i = Object(c.getColsFromBreakpoint)(a, o),
                                    s = !1 === this.props.verticalCompact ? null : this.props.compactType
                                return { layout: Object(c.findOrGenerateResponsiveLayout)(n, r, a, a, i, s), breakpoint: a, cols: i }
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (t) {
                                ;(this.props.width == t.width &&
                                    this.props.breakpoint === t.breakpoint &&
                                    s()(this.props.breakpoints, t.breakpoints) &&
                                    s()(this.props.cols, t.cols)) ||
                                    this.onWidthChange(t)
                            },
                        },
                        {
                            key: "onWidthChange",
                            value: function (t) {
                                var e = this.props,
                                    r = e.breakpoints,
                                    n = e.cols,
                                    o = e.layouts,
                                    a = e.compactType,
                                    i = this.props.breakpoint || Object(c.getBreakpointFromWidth)(this.props.breakpoints, this.props.width),
                                    s = this.state.breakpoint,
                                    l = Object(c.getColsFromBreakpoint)(i, n),
                                    f = y({}, o)
                                if (s !== i || t.breakpoints !== r || t.cols !== n) {
                                    s in f || (f[s] = Object(u.cloneLayout)(this.state.layout))
                                    var p = Object(c.findOrGenerateResponsiveLayout)(f, r, i, s, l, a)
                                    ;(p = Object(u.synchronizeLayoutWithChildren)(p, this.props.children, l, a)),
                                        (f[i] = p),
                                        this.props.onLayoutChange(p, f),
                                        this.props.onBreakpointChange(i, l),
                                        this.setState({ breakpoint: i, layout: p, cols: l })
                                }
                                var d = P(this.props.margin, i),
                                    h = P(this.props.containerPadding, i)
                                this.props.onWidthChange(this.props.width, d, l, h)
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    e = (t.breakpoint, t.breakpoints, t.cols, t.layouts, t.margin),
                                    r = t.containerPadding,
                                    o =
                                        (t.onBreakpointChange,
                                        t.onLayoutChange,
                                        t.onWidthChange,
                                        d(t, [
                                            "breakpoint",
                                            "breakpoints",
                                            "cols",
                                            "layouts",
                                            "margin",
                                            "containerPadding",
                                            "onBreakpointChange",
                                            "onLayoutChange",
                                            "onWidthChange",
                                        ]))
                                return n.createElement(
                                    l.default,
                                    p({}, o, {
                                        margin: P(e, this.state.breakpoint),
                                        containerPadding: P(r, this.state.breakpoint),
                                        onLayoutChange: this.onLayoutChange,
                                        layout: this.state.layout,
                                        cols: this.state.cols,
                                    })
                                )
                            },
                        },
                    ]) && b(e.prototype, r),
                    o && b(e, o),
                    i
                )
            })(n.Component)
            j(x, "propTypes", {
                breakpoint: a.a.string,
                breakpoints: a.a.object,
                cols: a.a.object,
                margin: a.a.oneOfType([a.a.array, a.a.object]),
                containerPadding: a.a.oneOfType([a.a.array, a.a.object]),
                layouts: function (t, e) {
                    if ("[object Object]" !== D(t[e])) throw new Error("Layout property must be an object. Received: " + D(t[e]))
                    Object.keys(t[e]).forEach(function (e) {
                        if (!(e in t.breakpoints)) throw new Error("Each key in layouts must align with a key in breakpoints.")
                        Object(u.validateLayout)(t.layouts[e], "layouts." + e)
                    })
                },
                width: a.a.number.isRequired,
                onBreakpointChange: a.a.func,
                onLayoutChange: a.a.func,
                onWidthChange: a.a.func,
            }),
                j(x, "defaultProps", {
                    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
                    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
                    layouts: {},
                    margin: [10, 10],
                    containerPadding: { lg: null, md: null, sm: null, xs: null, xxs: null },
                    onBreakpointChange: u.noop,
                    onLayoutChange: u.noop,
                    onWidthChange: u.noop,
                })
        },
        function (t, e, r) {
            "use strict"
            r.r(e),
                r.d(e, "default", function () {
                    return v
                })
            var n = r(2),
                o = r(0),
                a = r.n(o),
                i = r(5),
                s = r.n(i)
            function u(t) {
                return (u =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                          })(t)
            }
            function c() {
                return (c =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e]
                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                        return t
                    }).apply(this, arguments)
            }
            function l(t, e) {
                if (null == t) return {}
                var r,
                    n,
                    o = (function (t, e) {
                        if (null == t) return {}
                        var r,
                            n,
                            o = {},
                            a = Object.keys(t)
                        for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (o[r] = t[r])
                        return o
                    })(t, e)
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t)
                    for (n = 0; n < a.length; n++) (r = a[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]))
                }
                return o
            }
            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            function p(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r]
                    ;(n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            function d(t, e) {
                return (d =
                    Object.setPrototypeOf ||
                    function (t, e) {
                        return (t.__proto__ = e), t
                    })(t, e)
            }
            function h(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1
                    if (Reflect.construct.sham) return !1
                    if ("function" == typeof Proxy) return !0
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0
                    } catch (t) {
                        return !1
                    }
                })()
                return function () {
                    var r,
                        n = b(t)
                    if (e) {
                        var o = b(this).constructor
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments)
                    return y(this, r)
                }
            }
            function y(t, e) {
                return !e || ("object" !== u(e) && "function" != typeof e) ? g(t) : e
            }
            function g(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                return t
            }
            function b(t) {
                return (b = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (t) {
                          return t.__proto__ || Object.getPrototypeOf(t)
                      })(t)
            }
            function m(t, e, r) {
                return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t
            }
            function v(t) {
                var e, r
                return (
                    (r = e = (function (e) {
                        !(function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function")
                            ;(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && d(t, e)
                        })(u, e)
                        var r,
                            o,
                            a,
                            i = h(u)
                        function u() {
                            var t
                            f(this, u)
                            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n]
                            return (
                                m(g((t = i.call.apply(i, [this].concat(r)))), "state", { width: 1280 }),
                                m(g(t), "mounted", !1),
                                m(g(t), "onWindowResize", function () {
                                    if (t.mounted) {
                                        var e = s.a.findDOMNode(g(t))
                                        e instanceof HTMLElement && t.setState({ width: e.offsetWidth })
                                    }
                                }),
                                t
                            )
                        }
                        return (
                            (r = u),
                            (o = [
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        ;(this.mounted = !0), window.addEventListener("resize", this.onWindowResize), this.onWindowResize()
                                    },
                                },
                                {
                                    key: "componentWillUnmount",
                                    value: function () {
                                        ;(this.mounted = !1), window.removeEventListener("resize", this.onWindowResize)
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this.props,
                                            r = e.measureBeforeMount,
                                            o = l(e, ["measureBeforeMount"])
                                        return r && !this.mounted
                                            ? n.createElement("div", { className: this.props.className, style: this.props.style })
                                            : n.createElement(t, c({}, o, this.state))
                                    },
                                },
                            ]) && p(r.prototype, o),
                            a && p(r, a),
                            u
                        )
                    })(n.Component)),
                    m(e, "defaultProps", { measureBeforeMount: !1 }),
                    m(e, "propTypes", { measureBeforeMount: a.a.bool }),
                    r
                )
            }
        },
    ])
})
//# sourceMappingURL=react-grid-layout.min.js.map