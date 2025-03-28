( () => {
    var t = {
        353: function(t) {
            t.exports = function() {
                "use strict";
                var t = 1e3
                  , e = 6e4
                  , n = 36e5
                  , r = "millisecond"
                  , i = "second"
                  , o = "minute"
                  , a = "hour"
                  , s = "day"
                  , c = "week"
                  , l = "month"
                  , u = "quarter"
                  , d = "year"
                  , p = "date"
                  , f = "Invalid Date"
                  , m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/
                  , h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
                  , g = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ordinal: function(t) {
                        var e = ["th", "st", "nd", "rd"]
                          , n = t % 100;
                        return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]"
                    }
                }
                  , y = function(t, e, n) {
                    var r = String(t);
                    return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t
                }
                  , _ = {
                    s: y,
                    z: function(t) {
                        var e = -t.utcOffset()
                          , n = Math.abs(e)
                          , r = Math.floor(n / 60)
                          , i = n % 60;
                        return (e <= 0 ? "+" : "-") + y(r, 2, "0") + ":" + y(i, 2, "0")
                    },
                    m: function t(e, n) {
                        if (e.date() < n.date())
                            return -t(n, e);
                        var r = 12 * (n.year() - e.year()) + (n.month() - e.month())
                          , i = e.clone().add(r, l)
                          , o = n - i < 0
                          , a = e.clone().add(r + (o ? -1 : 1), l);
                        return +(-(r + (n - i) / (o ? i - a : a - i)) || 0)
                    },
                    a: function(t) {
                        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
                    },
                    p: function(t) {
                        return {
                            M: l,
                            y: d,
                            w: c,
                            d: s,
                            D: p,
                            h: a,
                            m: o,
                            s: i,
                            ms: r,
                            Q: u
                        }[t] || String(t || "").toLowerCase().replace(/s$/, "")
                    },
                    u: function(t) {
                        return void 0 === t
                    }
                }
                  , b = "en"
                  , v = {};
                v[b] = g;
                var w = "$isDayjsObject"
                  , T = function(t) {
                    return t instanceof x || !(!t || !t[w])
                }
                  , A = function t(e, n, r) {
                    var i;
                    if (!e)
                        return b;
                    if ("string" == typeof e) {
                        var o = e.toLowerCase();
                        v[o] && (i = o),
                        n && (v[o] = n,
                        i = o);
                        var a = e.split("-");
                        if (!i && a.length > 1)
                            return t(a[0])
                    } else {
                        var s = e.name;
                        v[s] = e,
                        i = s
                    }
                    return !r && i && (b = i),
                    i || !r && b
                }
                  , S = function(t, e) {
                    if (T(t))
                        return t.clone();
                    var n = "object" == typeof e ? e : {};
                    return n.date = t,
                    n.args = arguments,
                    new x(n)
                }
                  , $ = _;
                $.l = A,
                $.i = T,
                $.w = function(t, e) {
                    return S(t, {
                        locale: e.$L,
                        utc: e.$u,
                        x: e.$x,
                        $offset: e.$offset
                    })
                }
                ;
                var x = function() {
                    function g(t) {
                        this.$L = A(t.locale, null, !0),
                        this.parse(t),
                        this.$x = this.$x || t.x || {},
                        this[w] = !0
                    }
                    var y = g.prototype;
                    return y.parse = function(t) {
                        this.$d = function(t) {
                            var e = t.date
                              , n = t.utc;
                            if (null === e)
                                return new Date(NaN);
                            if ($.u(e))
                                return new Date;
                            if (e instanceof Date)
                                return new Date(e);
                            if ("string" == typeof e && !/Z$/i.test(e)) {
                                var r = e.match(m);
                                if (r) {
                                    var i = r[2] - 1 || 0
                                      , o = (r[7] || "0").substring(0, 3);
                                    return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o)) : new Date(r[1],i,r[3] || 1,r[4] || 0,r[5] || 0,r[6] || 0,o)
                                }
                            }
                            return new Date(e)
                        }(t),
                        this.init()
                    }
                    ,
                    y.init = function() {
                        var t = this.$d;
                        this.$y = t.getFullYear(),
                        this.$M = t.getMonth(),
                        this.$D = t.getDate(),
                        this.$W = t.getDay(),
                        this.$H = t.getHours(),
                        this.$m = t.getMinutes(),
                        this.$s = t.getSeconds(),
                        this.$ms = t.getMilliseconds()
                    }
                    ,
                    y.$utils = function() {
                        return $
                    }
                    ,
                    y.isValid = function() {
                        return !(this.$d.toString() === f)
                    }
                    ,
                    y.isSame = function(t, e) {
                        var n = S(t);
                        return this.startOf(e) <= n && n <= this.endOf(e)
                    }
                    ,
                    y.isAfter = function(t, e) {
                        return S(t) < this.startOf(e)
                    }
                    ,
                    y.isBefore = function(t, e) {
                        return this.endOf(e) < S(t)
                    }
                    ,
                    y.$g = function(t, e, n) {
                        return $.u(t) ? this[e] : this.set(n, t)
                    }
                    ,
                    y.unix = function() {
                        return Math.floor(this.valueOf() / 1e3)
                    }
                    ,
                    y.valueOf = function() {
                        return this.$d.getTime()
                    }
                    ,
                    y.startOf = function(t, e) {
                        var n = this
                          , r = !!$.u(e) || e
                          , u = $.p(t)
                          , f = function(t, e) {
                            var i = $.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y,e,t), n);
                            return r ? i : i.endOf(s)
                        }
                          , m = function(t, e) {
                            return $.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n)
                        }
                          , h = this.$W
                          , g = this.$M
                          , y = this.$D
                          , _ = "set" + (this.$u ? "UTC" : "");
                        switch (u) {
                        case d:
                            return r ? f(1, 0) : f(31, 11);
                        case l:
                            return r ? f(1, g) : f(0, g + 1);
                        case c:
                            var b = this.$locale().weekStart || 0
                              , v = (h < b ? h + 7 : h) - b;
                            return f(r ? y - v : y + (6 - v), g);
                        case s:
                        case p:
                            return m(_ + "Hours", 0);
                        case a:
                            return m(_ + "Minutes", 1);
                        case o:
                            return m(_ + "Seconds", 2);
                        case i:
                            return m(_ + "Milliseconds", 3);
                        default:
                            return this.clone()
                        }
                    }
                    ,
                    y.endOf = function(t) {
                        return this.startOf(t, !1)
                    }
                    ,
                    y.$set = function(t, e) {
                        var n, c = $.p(t), u = "set" + (this.$u ? "UTC" : ""), f = (n = {},
                        n[s] = u + "Date",
                        n[p] = u + "Date",
                        n[l] = u + "Month",
                        n[d] = u + "FullYear",
                        n[a] = u + "Hours",
                        n[o] = u + "Minutes",
                        n[i] = u + "Seconds",
                        n[r] = u + "Milliseconds",
                        n)[c], m = c === s ? this.$D + (e - this.$W) : e;
                        if (c === l || c === d) {
                            var h = this.clone().set(p, 1);
                            h.$d[f](m),
                            h.init(),
                            this.$d = h.set(p, Math.min(this.$D, h.daysInMonth())).$d
                        } else
                            f && this.$d[f](m);
                        return this.init(),
                        this
                    }
                    ,
                    y.set = function(t, e) {
                        return this.clone().$set(t, e)
                    }
                    ,
                    y.get = function(t) {
                        return this[$.p(t)]()
                    }
                    ,
                    y.add = function(r, u) {
                        var p, f = this;
                        r = Number(r);
                        var m = $.p(u)
                          , h = function(t) {
                            var e = S(f);
                            return $.w(e.date(e.date() + Math.round(t * r)), f)
                        };
                        if (m === l)
                            return this.set(l, this.$M + r);
                        if (m === d)
                            return this.set(d, this.$y + r);
                        if (m === s)
                            return h(1);
                        if (m === c)
                            return h(7);
                        var g = (p = {},
                        p[o] = e,
                        p[a] = n,
                        p[i] = t,
                        p)[m] || 1
                          , y = this.$d.getTime() + r * g;
                        return $.w(y, this)
                    }
                    ,
                    y.subtract = function(t, e) {
                        return this.add(-1 * t, e)
                    }
                    ,
                    y.format = function(t) {
                        var e = this
                          , n = this.$locale();
                        if (!this.isValid())
                            return n.invalidDate || f;
                        var r = t || "YYYY-MM-DDTHH:mm:ssZ"
                          , i = $.z(this)
                          , o = this.$H
                          , a = this.$m
                          , s = this.$M
                          , c = n.weekdays
                          , l = n.months
                          , u = n.meridiem
                          , d = function(t, n, i, o) {
                            return t && (t[n] || t(e, r)) || i[n].slice(0, o)
                        }
                          , p = function(t) {
                            return $.s(o % 12 || 12, t, "0")
                        }
                          , m = u || function(t, e, n) {
                            var r = t < 12 ? "AM" : "PM";
                            return n ? r.toLowerCase() : r
                        }
                        ;
                        return r.replace(h, (function(t, r) {
                            return r || function(t) {
                                switch (t) {
                                case "YY":
                                    return String(e.$y).slice(-2);
                                case "YYYY":
                                    return $.s(e.$y, 4, "0");
                                case "M":
                                    return s + 1;
                                case "MM":
                                    return $.s(s + 1, 2, "0");
                                case "MMM":
                                    return d(n.monthsShort, s, l, 3);
                                case "MMMM":
                                    return d(l, s);
                                case "D":
                                    return e.$D;
                                case "DD":
                                    return $.s(e.$D, 2, "0");
                                case "d":
                                    return String(e.$W);
                                case "dd":
                                    return d(n.weekdaysMin, e.$W, c, 2);
                                case "ddd":
                                    return d(n.weekdaysShort, e.$W, c, 3);
                                case "dddd":
                                    return c[e.$W];
                                case "H":
                                    return String(o);
                                case "HH":
                                    return $.s(o, 2, "0");
                                case "h":
                                    return p(1);
                                case "hh":
                                    return p(2);
                                case "a":
                                    return m(o, a, !0);
                                case "A":
                                    return m(o, a, !1);
                                case "m":
                                    return String(a);
                                case "mm":
                                    return $.s(a, 2, "0");
                                case "s":
                                    return String(e.$s);
                                case "ss":
                                    return $.s(e.$s, 2, "0");
                                case "SSS":
                                    return $.s(e.$ms, 3, "0");
                                case "Z":
                                    return i
                                }
                                return null
                            }(t) || i.replace(":", "")
                        }
                        ))
                    }
                    ,
                    y.utcOffset = function() {
                        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                    }
                    ,
                    y.diff = function(r, p, f) {
                        var m, h = this, g = $.p(p), y = S(r), _ = (y.utcOffset() - this.utcOffset()) * e, b = this - y, v = function() {
                            return $.m(h, y)
                        };
                        switch (g) {
                        case d:
                            m = v() / 12;
                            break;
                        case l:
                            m = v();
                            break;
                        case u:
                            m = v() / 3;
                            break;
                        case c:
                            m = (b - _) / 6048e5;
                            break;
                        case s:
                            m = (b - _) / 864e5;
                            break;
                        case a:
                            m = b / n;
                            break;
                        case o:
                            m = b / e;
                            break;
                        case i:
                            m = b / t;
                            break;
                        default:
                            m = b
                        }
                        return f ? m : $.a(m)
                    }
                    ,
                    y.daysInMonth = function() {
                        return this.endOf(l).$D
                    }
                    ,
                    y.$locale = function() {
                        return v[this.$L]
                    }
                    ,
                    y.locale = function(t, e) {
                        if (!t)
                            return this.$L;
                        var n = this.clone()
                          , r = A(t, e, !0);
                        return r && (n.$L = r),
                        n
                    }
                    ,
                    y.clone = function() {
                        return $.w(this.$d, this)
                    }
                    ,
                    y.toDate = function() {
                        return new Date(this.valueOf())
                    }
                    ,
                    y.toJSON = function() {
                        return this.isValid() ? this.toISOString() : null
                    }
                    ,
                    y.toISOString = function() {
                        return this.$d.toISOString()
                    }
                    ,
                    y.toString = function() {
                        return this.$d.toUTCString()
                    }
                    ,
                    g
                }()
                  , E = x.prototype;
                return S.prototype = E,
                [["$ms", r], ["$s", i], ["$m", o], ["$H", a], ["$W", s], ["$M", l], ["$y", d], ["$D", p]].forEach((function(t) {
                    E[t[1]] = function(e) {
                        return this.$g(e, t[0], t[1])
                    }
                }
                )),
                S.extend = function(t, e) {
                    return t.$i || (t(e, x, S),
                    t.$i = !0),
                    S
                }
                ,
                S.locale = A,
                S.isDayjs = T,
                S.unix = function(t) {
                    return S(1e3 * t)
                }
                ,
                S.en = v[b],
                S.Ls = v,
                S.p = {},
                S
            }()
        },
        522: function(t) {
            t.exports = function() {
                "use strict";
                var t, e, n = 1e3, r = 6e4, i = 36e5, o = 864e5, a = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, s = 31536e6, c = 2628e6, l = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, u = {
                    years: s,
                    months: c,
                    days: o,
                    hours: i,
                    minutes: r,
                    seconds: n,
                    milliseconds: 1,
                    weeks: 6048e5
                }, d = function(t) {
                    return t instanceof _
                }, p = function(t, e, n) {
                    return new _(t,n,e.$l)
                }, f = function(t) {
                    return e.p(t) + "s"
                }, m = function(t) {
                    return t < 0
                }, h = function(t) {
                    return m(t) ? Math.ceil(t) : Math.floor(t)
                }, g = function(t) {
                    return Math.abs(t)
                }, y = function(t, e) {
                    return t ? m(t) ? {
                        negative: !0,
                        format: "" + g(t) + e
                    } : {
                        negative: !1,
                        format: "" + t + e
                    } : {
                        negative: !1,
                        format: ""
                    }
                }, _ = function() {
                    function m(t, e, n) {
                        var r = this;
                        if (this.$d = {},
                        this.$l = n,
                        void 0 === t && (this.$ms = 0,
                        this.parseFromMilliseconds()),
                        e)
                            return p(t * u[f(e)], this);
                        if ("number" == typeof t)
                            return this.$ms = t,
                            this.parseFromMilliseconds(),
                            this;
                        if ("object" == typeof t)
                            return Object.keys(t).forEach((function(e) {
                                r.$d[f(e)] = t[e]
                            }
                            )),
                            this.calMilliseconds(),
                            this;
                        if ("string" == typeof t) {
                            var i = t.match(l);
                            if (i) {
                                var o = i.slice(2).map((function(t) {
                                    return null != t ? Number(t) : 0
                                }
                                ));
                                return this.$d.years = o[0],
                                this.$d.months = o[1],
                                this.$d.weeks = o[2],
                                this.$d.days = o[3],
                                this.$d.hours = o[4],
                                this.$d.minutes = o[5],
                                this.$d.seconds = o[6],
                                this.calMilliseconds(),
                                this
                            }
                        }
                        return this
                    }
                    var g = m.prototype;
                    return g.calMilliseconds = function() {
                        var t = this;
                        this.$ms = Object.keys(this.$d).reduce((function(e, n) {
                            return e + (t.$d[n] || 0) * u[n]
                        }
                        ), 0)
                    }
                    ,
                    g.parseFromMilliseconds = function() {
                        var t = this.$ms;
                        this.$d.years = h(t / s),
                        t %= s,
                        this.$d.months = h(t / c),
                        t %= c,
                        this.$d.days = h(t / o),
                        t %= o,
                        this.$d.hours = h(t / i),
                        t %= i,
                        this.$d.minutes = h(t / r),
                        t %= r,
                        this.$d.seconds = h(t / n),
                        t %= n,
                        this.$d.milliseconds = t
                    }
                    ,
                    g.toISOString = function() {
                        var t = y(this.$d.years, "Y")
                          , e = y(this.$d.months, "M")
                          , n = +this.$d.days || 0;
                        this.$d.weeks && (n += 7 * this.$d.weeks);
                        var r = y(n, "D")
                          , i = y(this.$d.hours, "H")
                          , o = y(this.$d.minutes, "M")
                          , a = this.$d.seconds || 0;
                        this.$d.milliseconds && (a += this.$d.milliseconds / 1e3,
                        a = Math.round(1e3 * a) / 1e3);
                        var s = y(a, "S")
                          , c = t.negative || e.negative || r.negative || i.negative || o.negative || s.negative
                          , l = i.format || o.format || s.format ? "T" : ""
                          , u = (c ? "-" : "") + "P" + t.format + e.format + r.format + l + i.format + o.format + s.format;
                        return "P" === u || "-P" === u ? "P0D" : u
                    }
                    ,
                    g.toJSON = function() {
                        return this.toISOString()
                    }
                    ,
                    g.format = function(t) {
                        var n = t || "YYYY-MM-DDTHH:mm:ss"
                          , r = {
                            Y: this.$d.years,
                            YY: e.s(this.$d.years, 2, "0"),
                            YYYY: e.s(this.$d.years, 4, "0"),
                            M: this.$d.months,
                            MM: e.s(this.$d.months, 2, "0"),
                            D: this.$d.days,
                            DD: e.s(this.$d.days, 2, "0"),
                            H: this.$d.hours,
                            HH: e.s(this.$d.hours, 2, "0"),
                            m: this.$d.minutes,
                            mm: e.s(this.$d.minutes, 2, "0"),
                            s: this.$d.seconds,
                            ss: e.s(this.$d.seconds, 2, "0"),
                            SSS: e.s(this.$d.milliseconds, 3, "0")
                        };
                        return n.replace(a, (function(t, e) {
                            return e || String(r[t])
                        }
                        ))
                    }
                    ,
                    g.as = function(t) {
                        return this.$ms / u[f(t)]
                    }
                    ,
                    g.get = function(t) {
                        var e = this.$ms
                          , n = f(t);
                        return "milliseconds" === n ? e %= 1e3 : e = "weeks" === n ? h(e / u[n]) : this.$d[n],
                        e || 0
                    }
                    ,
                    g.add = function(t, e, n) {
                        var r;
                        return r = e ? t * u[f(e)] : d(t) ? t.$ms : p(t, this).$ms,
                        p(this.$ms + r * (n ? -1 : 1), this)
                    }
                    ,
                    g.subtract = function(t, e) {
                        return this.add(t, e, !0)
                    }
                    ,
                    g.locale = function(t) {
                        var e = this.clone();
                        return e.$l = t,
                        e
                    }
                    ,
                    g.clone = function() {
                        return p(this.$ms, this)
                    }
                    ,
                    g.humanize = function(e) {
                        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!e)
                    }
                    ,
                    g.valueOf = function() {
                        return this.asMilliseconds()
                    }
                    ,
                    g.milliseconds = function() {
                        return this.get("milliseconds")
                    }
                    ,
                    g.asMilliseconds = function() {
                        return this.as("milliseconds")
                    }
                    ,
                    g.seconds = function() {
                        return this.get("seconds")
                    }
                    ,
                    g.asSeconds = function() {
                        return this.as("seconds")
                    }
                    ,
                    g.minutes = function() {
                        return this.get("minutes")
                    }
                    ,
                    g.asMinutes = function() {
                        return this.as("minutes")
                    }
                    ,
                    g.hours = function() {
                        return this.get("hours")
                    }
                    ,
                    g.asHours = function() {
                        return this.as("hours")
                    }
                    ,
                    g.days = function() {
                        return this.get("days")
                    }
                    ,
                    g.asDays = function() {
                        return this.as("days")
                    }
                    ,
                    g.weeks = function() {
                        return this.get("weeks")
                    }
                    ,
                    g.asWeeks = function() {
                        return this.as("weeks")
                    }
                    ,
                    g.months = function() {
                        return this.get("months")
                    }
                    ,
                    g.asMonths = function() {
                        return this.as("months")
                    }
                    ,
                    g.years = function() {
                        return this.get("years")
                    }
                    ,
                    g.asYears = function() {
                        return this.as("years")
                    }
                    ,
                    m
                }(), b = function(t, e, n) {
                    return t.add(e.years() * n, "y").add(e.months() * n, "M").add(e.days() * n, "d").add(e.hours() * n, "h").add(e.minutes() * n, "m").add(e.seconds() * n, "s").add(e.milliseconds() * n, "ms")
                };
                return function(n, r, i) {
                    t = i,
                    e = i().$utils(),
                    i.duration = function(t, e) {
                        var n = i.locale();
                        return p(t, {
                            $l: n
                        }, e)
                    }
                    ,
                    i.isDuration = d;
                    var o = r.prototype.add
                      , a = r.prototype.subtract;
                    r.prototype.add = function(t, e) {
                        return d(t) ? b(this, t, 1) : o.bind(this)(t, e)
                    }
                    ,
                    r.prototype.subtract = function(t, e) {
                        return d(t) ? b(this, t, -1) : a.bind(this)(t, e)
                    }
                }
            }()
        },
        569: function(t) {
            t.exports = function() {
                "use strict";
                var t = {
                    year: 0,
                    month: 1,
                    day: 2,
                    hour: 3,
                    minute: 4,
                    second: 5
                }
                  , e = {};
                return function(n, r, i) {
                    var o, a = function(t, n, r) {
                        void 0 === r && (r = {});
                        var i = new Date(t)
                          , o = function(t, n) {
                            void 0 === n && (n = {});
                            var r = n.timeZoneName || "short"
                              , i = t + "|" + r
                              , o = e[i];
                            return o || (o = new Intl.DateTimeFormat("en-US",{
                                hour12: !1,
                                timeZone: t,
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                                timeZoneName: r
                            }),
                            e[i] = o),
                            o
                        }(n, r);
                        return o.formatToParts(i)
                    }, s = function(e, n) {
                        for (var r = a(e, n), o = [], s = 0; s < r.length; s += 1) {
                            var c = r[s]
                              , l = c.type
                              , u = c.value
                              , d = t[l];
                            d >= 0 && (o[d] = parseInt(u, 10))
                        }
                        var p = o[3]
                          , f = 24 === p ? 0 : p
                          , m = o[0] + "-" + o[1] + "-" + o[2] + " " + f + ":" + o[4] + ":" + o[5] + ":000"
                          , h = +e;
                        return (i.utc(m).valueOf() - (h -= h % 1e3)) / 6e4
                    }, c = r.prototype;
                    c.tz = function(t, e) {
                        void 0 === t && (t = o);
                        var n = this.utcOffset()
                          , r = this.toDate()
                          , a = r.toLocaleString("en-US", {
                            timeZone: t
                        })
                          , s = Math.round((r - new Date(a)) / 1e3 / 60)
                          , c = i(a, {
                            locale: this.$L
                        }).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r.getTimezoneOffset() / 15) - s, !0);
                        if (e) {
                            var l = c.utcOffset();
                            c = c.add(n - l, "minute")
                        }
                        return c.$x.$timezone = t,
                        c
                    }
                    ,
                    c.offsetName = function(t) {
                        var e = this.$x.$timezone || i.tz.guess()
                          , n = a(this.valueOf(), e, {
                            timeZoneName: t
                        }).find((function(t) {
                            return "timezonename" === t.type.toLowerCase()
                        }
                        ));
                        return n && n.value
                    }
                    ;
                    var l = c.startOf;
                    c.startOf = function(t, e) {
                        if (!this.$x || !this.$x.$timezone)
                            return l.call(this, t, e);
                        var n = i(this.format("YYYY-MM-DD HH:mm:ss:SSS"), {
                            locale: this.$L
                        });
                        return l.call(n, t, e).tz(this.$x.$timezone, !0)
                    }
                    ,
                    i.tz = function(t, e, n) {
                        var r = n && e
                          , a = n || e || o
                          , c = s(+i(), a);
                        if ("string" != typeof t)
                            return i(t).tz(a);
                        var l = function(t, e, n) {
                            var r = t - 60 * e * 1e3
                              , i = s(r, n);
                            if (e === i)
                                return [r, e];
                            var o = s(r -= 60 * (i - e) * 1e3, n);
                            return i === o ? [r, i] : [t - 60 * Math.min(i, o) * 1e3, Math.max(i, o)]
                        }(i.utc(t, r).valueOf(), c, a)
                          , u = l[0]
                          , d = l[1]
                          , p = i(u).utcOffset(d);
                        return p.$x.$timezone = a,
                        p
                    }
                    ,
                    i.tz.guess = function() {
                        return Intl.DateTimeFormat().resolvedOptions().timeZone
                    }
                    ,
                    i.tz.setDefault = function(t) {
                        o = t
                    }
                }
            }()
        },
        826: function(t) {
            t.exports = function() {
                "use strict";
                var t = "minute"
                  , e = /[+-]\d\d(?::?\d\d)?/g
                  , n = /([+-]|\d\d)/g;
                return function(r, i, o) {
                    var a = i.prototype;
                    o.utc = function(t) {
                        return new i({
                            date: t,
                            utc: !0,
                            args: arguments
                        })
                    }
                    ,
                    a.utc = function(e) {
                        var n = o(this.toDate(), {
                            locale: this.$L,
                            utc: !0
                        });
                        return e ? n.add(this.utcOffset(), t) : n
                    }
                    ,
                    a.local = function() {
                        return o(this.toDate(), {
                            locale: this.$L,
                            utc: !1
                        })
                    }
                    ;
                    var s = a.parse;
                    a.parse = function(t) {
                        t.utc && (this.$u = !0),
                        this.$utils().u(t.$offset) || (this.$offset = t.$offset),
                        s.call(this, t)
                    }
                    ;
                    var c = a.init;
                    a.init = function() {
                        if (this.$u) {
                            var t = this.$d;
                            this.$y = t.getUTCFullYear(),
                            this.$M = t.getUTCMonth(),
                            this.$D = t.getUTCDate(),
                            this.$W = t.getUTCDay(),
                            this.$H = t.getUTCHours(),
                            this.$m = t.getUTCMinutes(),
                            this.$s = t.getUTCSeconds(),
                            this.$ms = t.getUTCMilliseconds()
                        } else
                            c.call(this)
                    }
                    ;
                    var l = a.utcOffset;
                    a.utcOffset = function(r, i) {
                        var o = this.$utils().u;
                        if (o(r))
                            return this.$u ? 0 : o(this.$offset) ? l.call(this) : this.$offset;
                        if ("string" == typeof r && (r = function(t) {
                            void 0 === t && (t = "");
                            var r = t.match(e);
                            if (!r)
                                return null;
                            var i = ("" + r[0]).match(n) || ["-", 0, 0]
                              , o = i[0]
                              , a = 60 * +i[1] + +i[2];
                            return 0 === a ? 0 : "+" === o ? a : -a
                        }(r),
                        null === r))
                            return this;
                        var a = Math.abs(r) <= 16 ? 60 * r : r
                          , s = this;
                        if (i)
                            return s.$offset = a,
                            s.$u = 0 === r,
                            s;
                        if (0 !== r) {
                            var c = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
                            (s = this.local().add(a + c, t)).$offset = a,
                            s.$x.$localOffset = c
                        } else
                            s = this.utc();
                        return s
                    }
                    ;
                    var u = a.format;
                    a.format = function(t) {
                        var e = t || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
                        return u.call(this, e)
                    }
                    ,
                    a.valueOf = function() {
                        var t = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
                        return this.$d.valueOf() - 6e4 * t
                    }
                    ,
                    a.isUTC = function() {
                        return !!this.$u
                    }
                    ,
                    a.toISOString = function() {
                        return this.toDate().toISOString()
                    }
                    ,
                    a.toString = function() {
                        return this.toDate().toUTCString()
                    }
                    ;
                    var d = a.toDate;
                    a.toDate = function(t) {
                        return "s" === t && this.$offset ? o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d.call(this)
                    }
                    ;
                    var p = a.diff;
                    a.diff = function(t, e, n) {
                        if (t && this.$u === t.$u)
                            return p.call(this, t, e, n);
                        var r = this.local()
                          , i = o(t).local();
                        return p.call(r, i, e, n)
                    }
                }
            }()
        },
        838: function(t) {
            t.exports = function() {
                "use strict";
                const {entries: t, setPrototypeOf: e, isFrozen: n, getPrototypeOf: r, getOwnPropertyDescriptor: i} = Object;
                let {freeze: o, seal: a, create: s} = Object
                  , {apply: c, construct: l} = "undefined" != typeof Reflect && Reflect;
                o || (o = function(t) {
                    return t
                }
                ),
                a || (a = function(t) {
                    return t
                }
                ),
                c || (c = function(t, e, n) {
                    return t.apply(e, n)
                }
                ),
                l || (l = function(t, e) {
                    return new t(...e)
                }
                );
                const u = T(Array.prototype.forEach)
                  , d = T(Array.prototype.pop)
                  , p = T(Array.prototype.push)
                  , f = T(String.prototype.toLowerCase)
                  , m = T(String.prototype.toString)
                  , h = T(String.prototype.match)
                  , g = T(String.prototype.replace)
                  , y = T(String.prototype.indexOf)
                  , _ = T(String.prototype.trim)
                  , b = T(Object.prototype.hasOwnProperty)
                  , v = T(RegExp.prototype.test)
                  , w = A(TypeError);
                function T(t) {
                    return function(e) {
                        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                            r[i - 1] = arguments[i];
                        return c(t, e, r)
                    }
                }
                function A(t) {
                    return function() {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        return l(t, n)
                    }
                }
                function S(t, r) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
                    e && e(t, null);
                    let o = r.length;
                    for (; o--; ) {
                        let e = r[o];
                        if ("string" == typeof e) {
                            const t = i(e);
                            t !== e && (n(r) || (r[o] = t),
                            e = t)
                        }
                        t[e] = !0
                    }
                    return t
                }
                function $(t) {
                    for (let e = 0; e < t.length; e++)
                        b(t, e) || (t[e] = null);
                    return t
                }
                function x(e) {
                    const n = s(null);
                    for (const [r,i] of t(e))
                        b(e, r) && (Array.isArray(i) ? n[r] = $(i) : i && "object" == typeof i && i.constructor === Object ? n[r] = x(i) : n[r] = i);
                    return n
                }
                function E(t, e) {
                    for (; null !== t; ) {
                        const n = i(t, e);
                        if (n) {
                            if (n.get)
                                return T(n.get);
                            if ("function" == typeof n.value)
                                return T(n.value)
                        }
                        t = r(t)
                    }
                    function n() {
                        return null
                    }
                    return n
                }
                const k = o(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"])
                  , N = o(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"])
                  , M = o(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"])
                  , D = o(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"])
                  , C = o(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"])
                  , O = o(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"])
                  , L = o(["#text"])
                  , R = o(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"])
                  , I = o(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"])
                  , z = o(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"])
                  , H = o(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"])
                  , U = a(/\{\{[\w\W]*|[\w\W]*\}\}/gm)
                  , P = a(/<%[\w\W]*|[\w\W]*%>/gm)
                  , F = a(/\${[\w\W]*}/gm)
                  , Y = a(/^data-[\-\w.\u00B7-\uFFFF]/)
                  , j = a(/^aria-[\-\w]+$/)
                  , W = a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i)
                  , B = a(/^(?:\w+script|data):/i)
                  , G = a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g)
                  , q = a(/^html$/i)
                  , Z = a(/^[a-z][.\w]*(-[.\w]+)+$/i);
                var X = Object.freeze({
                    __proto__: null,
                    MUSTACHE_EXPR: U,
                    ERB_EXPR: P,
                    TMPLIT_EXPR: F,
                    DATA_ATTR: Y,
                    ARIA_ATTR: j,
                    IS_ALLOWED_URI: W,
                    IS_SCRIPT_OR_DATA: B,
                    ATTR_WHITESPACE: G,
                    DOCTYPE_NAME: q,
                    CUSTOM_ELEMENT: Z
                });
                const V = {
                    element: 1,
                    attribute: 2,
                    text: 3,
                    cdataSection: 4,
                    entityReference: 5,
                    entityNode: 6,
                    progressingInstruction: 7,
                    comment: 8,
                    document: 9,
                    documentType: 10,
                    documentFragment: 11,
                    notation: 12
                }
                  , J = function() {
                    return "undefined" == typeof window ? null : window
                }
                  , K = function(t, e) {
                    if ("object" != typeof t || "function" != typeof t.createPolicy)
                        return null;
                    let n = null;
                    const r = "data-tt-policy-suffix";
                    e && e.hasAttribute(r) && (n = e.getAttribute(r));
                    const i = "dompurify" + (n ? "#" + n : "");
                    try {
                        return t.createPolicy(i, {
                            createHTML: t => t,
                            createScriptURL: t => t
                        })
                    } catch (t) {
                        return console.warn("TrustedTypes policy " + i + " could not be created."),
                        null
                    }
                };
                function Q() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J();
                    const n = t => Q(t);
                    if (n.version = "3.1.5",
                    n.removed = [],
                    !e || !e.document || e.document.nodeType !== V.document)
                        return n.isSupported = !1,
                        n;
                    let {document: r} = e;
                    const i = r
                      , a = i.currentScript
                      , {DocumentFragment: c, HTMLTemplateElement: l, Node: T, Element: A, NodeFilter: $, NamedNodeMap: U=e.NamedNodeMap || e.MozNamedAttrMap, HTMLFormElement: P, DOMParser: F, trustedTypes: Y} = e
                      , j = A.prototype
                      , B = E(j, "cloneNode")
                      , G = E(j, "nextSibling")
                      , Z = E(j, "childNodes")
                      , tt = E(j, "parentNode");
                    if ("function" == typeof l) {
                        const t = r.createElement("template");
                        t.content && t.content.ownerDocument && (r = t.content.ownerDocument)
                    }
                    let et, nt = "";
                    const {implementation: rt, createNodeIterator: it, createDocumentFragment: ot, getElementsByTagName: at} = r
                      , {importNode: st} = i;
                    let ct = {};
                    n.isSupported = "function" == typeof t && "function" == typeof tt && rt && void 0 !== rt.createHTMLDocument;
                    const {MUSTACHE_EXPR: lt, ERB_EXPR: ut, TMPLIT_EXPR: dt, DATA_ATTR: pt, ARIA_ATTR: ft, IS_SCRIPT_OR_DATA: mt, ATTR_WHITESPACE: ht, CUSTOM_ELEMENT: gt} = X;
                    let {IS_ALLOWED_URI: yt} = X
                      , _t = null;
                    const bt = S({}, [...k, ...N, ...M, ...C, ...L]);
                    let vt = null;
                    const wt = S({}, [...R, ...I, ...z, ...H]);
                    let Tt = Object.seal(s(null, {
                        tagNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        attributeNameCheck: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: null
                        },
                        allowCustomizedBuiltInElements: {
                            writable: !0,
                            configurable: !1,
                            enumerable: !0,
                            value: !1
                        }
                    }))
                      , At = null
                      , St = null
                      , $t = !0
                      , xt = !0
                      , Et = !1
                      , kt = !0
                      , Nt = !1
                      , Mt = !0
                      , Dt = !1
                      , Ct = !1
                      , Ot = !1
                      , Lt = !1
                      , Rt = !1
                      , It = !1
                      , zt = !0
                      , Ht = !1;
                    const Ut = "user-content-";
                    let Pt = !0
                      , Ft = !1
                      , Yt = {}
                      , jt = null;
                    const Wt = S({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
                    let Bt = null;
                    const Gt = S({}, ["audio", "video", "img", "source", "image", "track"]);
                    let qt = null;
                    const Zt = S({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"])
                      , Xt = "http://www.w3.org/1998/Math/MathML"
                      , Vt = "http://www.w3.org/2000/svg"
                      , Jt = "http://www.w3.org/1999/xhtml";
                    let Kt = Jt
                      , Qt = !1
                      , te = null;
                    const ee = S({}, [Xt, Vt, Jt], m);
                    let ne = null;
                    const re = ["application/xhtml+xml", "text/html"]
                      , ie = "text/html";
                    let oe = null
                      , ae = null;
                    const se = r.createElement("form")
                      , ce = function(t) {
                        return t instanceof RegExp || t instanceof Function
                    }
                      , le = function() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!ae || ae !== t) {
                            if (t && "object" == typeof t || (t = {}),
                            t = x(t),
                            ne = -1 === re.indexOf(t.PARSER_MEDIA_TYPE) ? ie : t.PARSER_MEDIA_TYPE,
                            oe = "application/xhtml+xml" === ne ? m : f,
                            _t = b(t, "ALLOWED_TAGS") ? S({}, t.ALLOWED_TAGS, oe) : bt,
                            vt = b(t, "ALLOWED_ATTR") ? S({}, t.ALLOWED_ATTR, oe) : wt,
                            te = b(t, "ALLOWED_NAMESPACES") ? S({}, t.ALLOWED_NAMESPACES, m) : ee,
                            qt = b(t, "ADD_URI_SAFE_ATTR") ? S(x(Zt), t.ADD_URI_SAFE_ATTR, oe) : Zt,
                            Bt = b(t, "ADD_DATA_URI_TAGS") ? S(x(Gt), t.ADD_DATA_URI_TAGS, oe) : Gt,
                            jt = b(t, "FORBID_CONTENTS") ? S({}, t.FORBID_CONTENTS, oe) : Wt,
                            At = b(t, "FORBID_TAGS") ? S({}, t.FORBID_TAGS, oe) : {},
                            St = b(t, "FORBID_ATTR") ? S({}, t.FORBID_ATTR, oe) : {},
                            Yt = !!b(t, "USE_PROFILES") && t.USE_PROFILES,
                            $t = !1 !== t.ALLOW_ARIA_ATTR,
                            xt = !1 !== t.ALLOW_DATA_ATTR,
                            Et = t.ALLOW_UNKNOWN_PROTOCOLS || !1,
                            kt = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR,
                            Nt = t.SAFE_FOR_TEMPLATES || !1,
                            Mt = !1 !== t.SAFE_FOR_XML,
                            Dt = t.WHOLE_DOCUMENT || !1,
                            Lt = t.RETURN_DOM || !1,
                            Rt = t.RETURN_DOM_FRAGMENT || !1,
                            It = t.RETURN_TRUSTED_TYPE || !1,
                            Ot = t.FORCE_BODY || !1,
                            zt = !1 !== t.SANITIZE_DOM,
                            Ht = t.SANITIZE_NAMED_PROPS || !1,
                            Pt = !1 !== t.KEEP_CONTENT,
                            Ft = t.IN_PLACE || !1,
                            yt = t.ALLOWED_URI_REGEXP || W,
                            Kt = t.NAMESPACE || Jt,
                            Tt = t.CUSTOM_ELEMENT_HANDLING || {},
                            t.CUSTOM_ELEMENT_HANDLING && ce(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Tt.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                            t.CUSTOM_ELEMENT_HANDLING && ce(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Tt.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                            t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Tt.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                            Nt && (xt = !1),
                            Rt && (Lt = !0),
                            Yt && (_t = S({}, L),
                            vt = [],
                            !0 === Yt.html && (S(_t, k),
                            S(vt, R)),
                            !0 === Yt.svg && (S(_t, N),
                            S(vt, I),
                            S(vt, H)),
                            !0 === Yt.svgFilters && (S(_t, M),
                            S(vt, I),
                            S(vt, H)),
                            !0 === Yt.mathMl && (S(_t, C),
                            S(vt, z),
                            S(vt, H))),
                            t.ADD_TAGS && (_t === bt && (_t = x(_t)),
                            S(_t, t.ADD_TAGS, oe)),
                            t.ADD_ATTR && (vt === wt && (vt = x(vt)),
                            S(vt, t.ADD_ATTR, oe)),
                            t.ADD_URI_SAFE_ATTR && S(qt, t.ADD_URI_SAFE_ATTR, oe),
                            t.FORBID_CONTENTS && (jt === Wt && (jt = x(jt)),
                            S(jt, t.FORBID_CONTENTS, oe)),
                            Pt && (_t["#text"] = !0),
                            Dt && S(_t, ["html", "head", "body"]),
                            _t.table && (S(_t, ["tbody"]),
                            delete At.tbody),
                            t.TRUSTED_TYPES_POLICY) {
                                if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML)
                                    throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                                if ("function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL)
                                    throw w('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                                et = t.TRUSTED_TYPES_POLICY,
                                nt = et.createHTML("")
                            } else
                                void 0 === et && (et = K(Y, a)),
                                null !== et && "string" == typeof nt && (nt = et.createHTML(""));
                            o && o(t),
                            ae = t
                        }
                    }
                      , ue = S({}, ["mi", "mo", "mn", "ms", "mtext"])
                      , de = S({}, ["foreignobject", "annotation-xml"])
                      , pe = S({}, ["title", "style", "font", "a", "script"])
                      , fe = S({}, [...N, ...M, ...D])
                      , me = S({}, [...C, ...O])
                      , he = function(t) {
                        let e = tt(t);
                        e && e.tagName || (e = {
                            namespaceURI: Kt,
                            tagName: "template"
                        });
                        const n = f(t.tagName)
                          , r = f(e.tagName);
                        return !!te[t.namespaceURI] && (t.namespaceURI === Vt ? e.namespaceURI === Jt ? "svg" === n : e.namespaceURI === Xt ? "svg" === n && ("annotation-xml" === r || ue[r]) : Boolean(fe[n]) : t.namespaceURI === Xt ? e.namespaceURI === Jt ? "math" === n : e.namespaceURI === Vt ? "math" === n && de[r] : Boolean(me[n]) : t.namespaceURI === Jt ? !(e.namespaceURI === Vt && !de[r]) && !(e.namespaceURI === Xt && !ue[r]) && !me[n] && (pe[n] || !fe[n]) : !("application/xhtml+xml" !== ne || !te[t.namespaceURI]))
                    }
                      , ge = function(t) {
                        p(n.removed, {
                            element: t
                        });
                        try {
                            t.parentNode.removeChild(t)
                        } catch (e) {
                            t.remove()
                        }
                    }
                      , ye = function(t, e) {
                        try {
                            p(n.removed, {
                                attribute: e.getAttributeNode(t),
                                from: e
                            })
                        } catch (t) {
                            p(n.removed, {
                                attribute: null,
                                from: e
                            })
                        }
                        if (e.removeAttribute(t),
                        "is" === t && !vt[t])
                            if (Lt || Rt)
                                try {
                                    ge(e)
                                } catch (t) {}
                            else
                                try {
                                    e.setAttribute(t, "")
                                } catch (t) {}
                    }
                      , _e = function(t) {
                        let e = null
                          , n = null;
                        if (Ot)
                            t = "<remove></remove>" + t;
                        else {
                            const e = h(t, /^[\r\n\t ]+/);
                            n = e && e[0]
                        }
                        "application/xhtml+xml" === ne && Kt === Jt && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
                        const i = et ? et.createHTML(t) : t;
                        if (Kt === Jt)
                            try {
                                e = (new F).parseFromString(i, ne)
                            } catch (t) {}
                        if (!e || !e.documentElement) {
                            e = rt.createDocument(Kt, "template", null);
                            try {
                                e.documentElement.innerHTML = Qt ? nt : i
                            } catch (t) {}
                        }
                        const o = e.body || e.documentElement;
                        return t && n && o.insertBefore(r.createTextNode(n), o.childNodes[0] || null),
                        Kt === Jt ? at.call(e, Dt ? "html" : "body")[0] : Dt ? e.documentElement : o
                    }
                      , be = function(t) {
                        return it.call(t.ownerDocument || t, t, $.SHOW_ELEMENT | $.SHOW_COMMENT | $.SHOW_TEXT | $.SHOW_PROCESSING_INSTRUCTION | $.SHOW_CDATA_SECTION, null)
                    }
                      , ve = function(t) {
                        return t instanceof P && ("string" != typeof t.nodeName || "string" != typeof t.textContent || "function" != typeof t.removeChild || !(t.attributes instanceof U) || "function" != typeof t.removeAttribute || "function" != typeof t.setAttribute || "string" != typeof t.namespaceURI || "function" != typeof t.insertBefore || "function" != typeof t.hasChildNodes)
                    }
                      , we = function(t) {
                        return "function" == typeof T && t instanceof T
                    }
                      , Te = function(t, e, r) {
                        ct[t] && u(ct[t], (t => {
                            t.call(n, e, r, ae)
                        }
                        ))
                    }
                      , Ae = function(t) {
                        let e = null;
                        if (Te("beforeSanitizeElements", t, null),
                        ve(t))
                            return ge(t),
                            !0;
                        const r = oe(t.nodeName);
                        if (Te("uponSanitizeElement", t, {
                            tagName: r,
                            allowedTags: _t
                        }),
                        t.hasChildNodes() && !we(t.firstElementChild) && v(/<[/\w]/g, t.innerHTML) && v(/<[/\w]/g, t.textContent))
                            return ge(t),
                            !0;
                        if (t.nodeType === V.progressingInstruction)
                            return ge(t),
                            !0;
                        if (Mt && t.nodeType === V.comment && v(/<[/\w]/g, t.data))
                            return ge(t),
                            !0;
                        if (!_t[r] || At[r]) {
                            if (!At[r] && $e(r)) {
                                if (Tt.tagNameCheck instanceof RegExp && v(Tt.tagNameCheck, r))
                                    return !1;
                                if (Tt.tagNameCheck instanceof Function && Tt.tagNameCheck(r))
                                    return !1
                            }
                            if (Pt && !jt[r]) {
                                const e = tt(t) || t.parentNode
                                  , n = Z(t) || t.childNodes;
                                if (n && e)
                                    for (let r = n.length - 1; r >= 0; --r) {
                                        const i = B(n[r], !0);
                                        i.__removalCount = (t.__removalCount || 0) + 1,
                                        e.insertBefore(i, G(t))
                                    }
                            }
                            return ge(t),
                            !0
                        }
                        return t instanceof A && !he(t) ? (ge(t),
                        !0) : "noscript" !== r && "noembed" !== r && "noframes" !== r || !v(/<\/no(script|embed|frames)/i, t.innerHTML) ? (Nt && t.nodeType === V.text && (e = t.textContent,
                        u([lt, ut, dt], (t => {
                            e = g(e, t, " ")
                        }
                        )),
                        t.textContent !== e && (p(n.removed, {
                            element: t.cloneNode()
                        }),
                        t.textContent = e)),
                        Te("afterSanitizeElements", t, null),
                        !1) : (ge(t),
                        !0)
                    }
                      , Se = function(t, e, n) {
                        if (zt && ("id" === e || "name" === e) && (n in r || n in se))
                            return !1;
                        if (xt && !St[e] && v(pt, e))
                            ;
                        else if ($t && v(ft, e))
                            ;
                        else if (!vt[e] || St[e]) {
                            if (!($e(t) && (Tt.tagNameCheck instanceof RegExp && v(Tt.tagNameCheck, t) || Tt.tagNameCheck instanceof Function && Tt.tagNameCheck(t)) && (Tt.attributeNameCheck instanceof RegExp && v(Tt.attributeNameCheck, e) || Tt.attributeNameCheck instanceof Function && Tt.attributeNameCheck(e)) || "is" === e && Tt.allowCustomizedBuiltInElements && (Tt.tagNameCheck instanceof RegExp && v(Tt.tagNameCheck, n) || Tt.tagNameCheck instanceof Function && Tt.tagNameCheck(n))))
                                return !1
                        } else if (qt[e])
                            ;
                        else if (v(yt, g(n, ht, "")))
                            ;
                        else if ("src" !== e && "xlink:href" !== e && "href" !== e || "script" === t || 0 !== y(n, "data:") || !Bt[t])
                            if (Et && !v(mt, g(n, ht, "")))
                                ;
                            else if (n)
                                return !1;
                        return !0
                    }
                      , $e = function(t) {
                        return "annotation-xml" !== t && h(t, gt)
                    }
                      , xe = function(t) {
                        Te("beforeSanitizeAttributes", t, null);
                        const {attributes: e} = t;
                        if (!e)
                            return;
                        const r = {
                            attrName: "",
                            attrValue: "",
                            keepAttr: !0,
                            allowedAttributes: vt
                        };
                        let i = e.length;
                        for (; i--; ) {
                            const o = e[i]
                              , {name: a, namespaceURI: s, value: c} = o
                              , l = oe(a);
                            let p = "value" === a ? c : _(c);
                            if (r.attrName = l,
                            r.attrValue = p,
                            r.keepAttr = !0,
                            r.forceKeepAttr = void 0,
                            Te("uponSanitizeAttribute", t, r),
                            p = r.attrValue,
                            r.forceKeepAttr)
                                continue;
                            if (ye(a, t),
                            !r.keepAttr)
                                continue;
                            if (!kt && v(/\/>/i, p)) {
                                ye(a, t);
                                continue
                            }
                            if (Mt && v(/((--!?|])>)|<\/(style|title)/i, p)) {
                                ye(a, t);
                                continue
                            }
                            Nt && u([lt, ut, dt], (t => {
                                p = g(p, t, " ")
                            }
                            ));
                            const f = oe(t.nodeName);
                            if (Se(f, l, p)) {
                                if (!Ht || "id" !== l && "name" !== l || (ye(a, t),
                                p = Ut + p),
                                et && "object" == typeof Y && "function" == typeof Y.getAttributeType)
                                    if (s)
                                        ;
                                    else
                                        switch (Y.getAttributeType(f, l)) {
                                        case "TrustedHTML":
                                            p = et.createHTML(p);
                                            break;
                                        case "TrustedScriptURL":
                                            p = et.createScriptURL(p)
                                        }
                                try {
                                    s ? t.setAttributeNS(s, a, p) : t.setAttribute(a, p),
                                    ve(t) ? ge(t) : d(n.removed)
                                } catch (t) {}
                            }
                        }
                        Te("afterSanitizeAttributes", t, null)
                    }
                      , Ee = function t(e) {
                        let n = null;
                        const r = be(e);
                        for (Te("beforeSanitizeShadowDOM", e, null); n = r.nextNode(); )
                            Te("uponSanitizeShadowNode", n, null),
                            Ae(n) || (n.content instanceof c && t(n.content),
                            xe(n));
                        Te("afterSanitizeShadowDOM", e, null)
                    };
                    return n.sanitize = function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , r = null
                          , o = null
                          , a = null
                          , s = null;
                        if (Qt = !t,
                        Qt && (t = "\x3c!--\x3e"),
                        "string" != typeof t && !we(t)) {
                            if ("function" != typeof t.toString)
                                throw w("toString is not a function");
                            if ("string" != typeof (t = t.toString()))
                                throw w("dirty is not a string, aborting")
                        }
                        if (!n.isSupported)
                            return t;
                        if (Ct || le(e),
                        n.removed = [],
                        "string" == typeof t && (Ft = !1),
                        Ft) {
                            if (t.nodeName) {
                                const e = oe(t.nodeName);
                                if (!_t[e] || At[e])
                                    throw w("root node is forbidden and cannot be sanitized in-place")
                            }
                        } else if (t instanceof T)
                            r = _e("\x3c!----\x3e"),
                            o = r.ownerDocument.importNode(t, !0),
                            o.nodeType === V.element && "BODY" === o.nodeName || "HTML" === o.nodeName ? r = o : r.appendChild(o);
                        else {
                            if (!Lt && !Nt && !Dt && -1 === t.indexOf("<"))
                                return et && It ? et.createHTML(t) : t;
                            if (r = _e(t),
                            !r)
                                return Lt ? null : It ? nt : ""
                        }
                        r && Ot && ge(r.firstChild);
                        const l = be(Ft ? t : r);
                        for (; a = l.nextNode(); )
                            Ae(a) || (a.content instanceof c && Ee(a.content),
                            xe(a));
                        if (Ft)
                            return t;
                        if (Lt) {
                            if (Rt)
                                for (s = ot.call(r.ownerDocument); r.firstChild; )
                                    s.appendChild(r.firstChild);
                            else
                                s = r;
                            return (vt.shadowroot || vt.shadowrootmode) && (s = st.call(i, s, !0)),
                            s
                        }
                        let d = Dt ? r.outerHTML : r.innerHTML;
                        return Dt && _t["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && v(q, r.ownerDocument.doctype.name) && (d = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + d),
                        Nt && u([lt, ut, dt], (t => {
                            d = g(d, t, " ")
                        }
                        )),
                        et && It ? et.createHTML(d) : d
                    }
                    ,
                    n.setConfig = function() {
                        le(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}),
                        Ct = !0
                    }
                    ,
                    n.clearConfig = function() {
                        ae = null,
                        Ct = !1
                    }
                    ,
                    n.isValidAttribute = function(t, e, n) {
                        ae || le({});
                        const r = oe(t)
                          , i = oe(e);
                        return Se(r, i, n)
                    }
                    ,
                    n.addHook = function(t, e) {
                        "function" == typeof e && (ct[t] = ct[t] || [],
                        p(ct[t], e))
                    }
                    ,
                    n.removeHook = function(t) {
                        if (ct[t])
                            return d(ct[t])
                    }
                    ,
                    n.removeHooks = function(t) {
                        ct[t] && (ct[t] = [])
                    }
                    ,
                    n.removeAllHooks = function() {
                        ct = {}
                    }
                    ,
                    n
                }
                return Q()
            }()
        }
    }
      , e = {};
    function n(r) {
        var i = e[r];
        if (void 0 !== i)
            return i.exports;
        var o = e[r] = {
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n),
        o.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }),
        e
    }
    ,
    n.d = (t, e) => {
        for (var r in e)
            n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
    }
    ,
    n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e),
    ( () => {
        "use strict";
        var t = n(353)
          , e = n.n(t)
          , r = n(826)
          , i = n.n(r)
          , o = n(522)
          , a = n.n(o)
          , s = n(569)
          , c = n.n(s);
        e().extend(i()),
        e().extend(a()),
        e().extend(c());
        const l = e()
          , u = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
          , d = function(t) {
            const e = (t || "").split(":");
            return 2 == e.length ? {
                hour: e[0],
                minute: e[1]
            } : null
        }
          , p = function(t) {
            const e = (t || "").split(":");
            if (e.length >= 2) {
                return {
                    hours: parseInt(e[0], 10),
                    minutes: parseInt(e[1], 10)
                }
            }
            return null
        }
          , f = function(t, e) {
            const n = p(t)
              , r = p(e)
              , i = n.minutes + 60 * n.hours
              , o = r.minutes + 60 * r.hours;
            return i === o ? 0 : i > o ? 1 : -1
        }
          , m = function(t, e, n) {
            var r = new Date;
            r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
            var i = "expires=" + r.toUTCString();
            document.cookie = t + "=" + e + ";" + i + ";path=/"
        }
          , h = function(t) {
            for (var e = t + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (var i = n[r]; " " == i.charAt(0); )
                    i = i.substring(1);
                if (0 == i.indexOf(e))
                    return i.substring(e.length, i.length)
            }
            return ""
        }
          , g = function(t, e) {
            let n;
            if ("ON" === t.isAlwaysAvailable)
                return "online";
            var r;
            r = e.timezone,
            n = /\d/.test(r) ? l().utcOffset(function(t) {
                const e = t.split(":");
                let n, r;
                return 2 === e.length ? (n = parseInt(e[0]),
                r = parseInt(e[1])) : (n = parseInt(e[0]),
                r = 0),
                -1 !== t.indexOf("-") ? -(60 * Math.abs(n) + r) : 60 * n + r
            }(e.timezone)) : l(l()).tz(e.timezone);
            const i = u[n.get("day")]
              , o = t.daysOfWeekWorking[i];
            if ("OFF" === o.isWorkingOnDay)
                return t.dayOffsText;
            for (let r = 0; r < o.workHours.length; r++) {
                const i = n.get("hour") + ":" + n.get("minute")
                  , c = o.workHours[r].startTime
                  , u = o.workHours[r].endTime;
                if (-1 === f(i, c)) {
                    const r = p(c)
                      , i = (a = {
                        hour: r.hours,
                        minute: r.minutes
                    },
                    s = {
                        hour: n.get("hour"),
                        minute: n.get("minute")
                    },
                    1e3 * (3600 * (a.hour - s.hour) + 60 * (a.minute - s.minute)))
                      , o = l.duration(i)
                      , u = d(e.options.display.time_symbols)
                      , f = ` ${o.get("hours")}${u.hour}:${o.get("minutes")}${u.minute} `;
                    return t.willBeBackText.replace(/\[njwa_time_work\]/gi, f)
                }
                if (0 === f(i, c) || 0 === f(i, u))
                    return "online";
                if (1 === f(i, c) && -1 === f(i, u))
                    return "online"
            }
            var a, s;
            return t.dayOffsText
        }
          , y = function(t, e, n) {
            if ("ON" == e.enabledFacebook || "ON" == e.enabledGoogle) {
                var r = t.href
                  , i = r.indexOf("phone=") + 6
                  , o = r.indexOf("&text=");
                -1 === o && (o = r.length);
                var a = r.substring(i, o)
                  , s = "NinjaTeam WhatsApp"
                  , c = "Phone Number: " + a
                  , l = document.title;
                if ("ON" === e.enabledFacebook && "undefined" != typeof fbq && fbq("trackCustom", "NinjaTeam WhatsApp", {
                    accountId: n.accountId,
                    label: l
                }),
                "ON" === e.enabledGoogle) {
                    if ("undefined" != typeof gtag)
                        "ON" === e.enabledGoogleGA4 ? gtag("event", "NinjaTeam WhatsApp", {
                            number: a,
                            title: l,
                            url: window.location.href
                        }) : gtag("event", c, {
                            event_category: s,
                            event_label: l
                        });
                    else if ("undefined" != typeof ga && void 0 !== ga.getAll) {
                        ga.getAll()[0].send("event", s, c, l)
                    } else
                        "undefined" != typeof __gaTracker && __gaTracker("send", "event", s, c, l);
                    "undefined" != typeof dataLayer && (dataLayer.push({
                        event: "NinjaTeam WhatsApp",
                        number: a,
                        title: l,
                        url: window.location.href,
                        event_category: s,
                        event_label: l,
                        event_action: c
                    }),
                    dataLayer.push({
                        event: "ninjateam_whatsapp_event",
                        number: a,
                        title: l,
                        url: window.location.href,
                        event_category: s,
                        event_label: l,
                        event_action: c
                    }))
                }
            }
        };
        var _ = n(838)
          , b = n.n(_);
        void 0 === String.prototype.njtReplaceAll && (String.prototype.njtReplaceAll = function(t, e) {
            return this.replace(new RegExp(t,"g"), ( () => e))
        }
        );
        const v = (T = !1,
        w = navigator.userAgent || navigator.vendor || window.opera,
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(w) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(w.substr(0, 4))) && (T = !0),
        T);
        var w, T;
        const A = function(t, e) {
            let n = ""
              , r = t.predefinedText;
            if (r = r.njtReplaceAll(/\[njwa_page_title\]/gi, encodeURIComponent(document.title)),
            r = r.njtReplaceAll(/\[njwa_page_url\]/gi, window.location.href),
            r = r.njtReplaceAll(/\n/gi, "%0A"),
            -1 !== t.number.indexOf("chat.whatsapp.com"))
                n += t.number;
            else {
                let i = e.urlSettings[v ? "onMobile" : "onDesktop"];
                if (i || (i = "api"),
                "protocol" === i)
                    return "whatsapp://send?phone=" + t.number.replace(/[^0-9]/gi, "");
                n += "https://" + i + ".whatsapp.com/send?phone=",
                n += t.number.replace(/[^0-9]/gi, ""),
                n += t.predefinedText ? "&text=" + r : ""
            }
            return n
        };
        window.njtWhatsApp = {
            createButton: function(t, e) {
                const n = Object.assign({}, e)
                  , r = n.info
                  , i = g(r, n);
                let o = "";
                o += "round" == n.styles.type ? " wa__r_button" : " wa__sq_button",
                o += "online" == i ? " wa__stt_online" : " wa__stt_offline",
                o += n.avatar ? " wa__btn_w_img" : " wa__btn_w_icon",
                o += n.name ? "" : " wa__button_text_only";
                let a = A(r, n);
                const s = document.createElement("div");
                s.setAttribute("class", n.avatar ? "wa__cs_img" : "wa__btn_icon"),
                s.appendChild(( () => {
                    if (n.avatar) {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__cs_img_wrap"),
                        t.setAttribute("style", `background: url(${n.avatar}) center center no-repeat; background-size: cover`),
                        t
                    }
                    {
                        const t = document.createElement("img");
                        return t.setAttribute("alt", "img"),
                        t.setAttribute("src", n.defaultAvatar),
                        t
                    }
                }
                )());
                const c = document.createElement("div");
                c.setAttribute("class", "wa__btn_txt"),
                c.appendChild(n.name ? ( () => {
                    const t = document.createElement("div");
                    return t.className = "wa__cs_info",
                    t.appendChild(( () => {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__cs_name"),
                        t.setAttribute("style", "online" == i ? `color: ${"#fff" == n.styles.textColor || "#ffffff" == n.styles.textColor ? "#d5f0d9" : n.styles.textColor}; opacity: ${"#fff" == n.styles.textColor || "#ffffff" == n.styles.textColor ? 1 : .8}` : ""),
                        t.innerHTML = b().sanitize(n.name),
                        t
                    }
                    )()),
                    t.appendChild(( () => {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__cs_status"),
                        t.innerHTML = "online" === i ? b().sanitize(n.i18n.online) : b().sanitize(n.i18n.offline),
                        t
                    }
                    )()),
                    t
                }
                )() : document.createTextNode("")),
                c.appendChild(( () => {
                    const t = document.createElement("div");
                    return t.setAttribute("class", "wa__btn_title"),
                    t.setAttribute("style", "online" == i ? "color: " + n.styles.textColor : ""),
                    t.innerHTML = b().sanitize(n.styles.label),
                    t
                }
                )()),
                c.appendChild(( () => {
                    if ("online" != i) {
                        const t = document.createElement("div");
                        return t.setAttribute("class", "wa__btn_status"),
                        t.innerHTML = b().sanitize(i),
                        t
                    }
                    return document.createTextNode("")
                }
                )());
                const l = document.createElement("div");
                l.setAttribute("class", "nta-wa-gdpr"),
                l.appendChild(( () => {
                    const t = document.createElement("input");
                    t.setAttribute("id", "nta-wa-gdpr"),
                    t.setAttribute("type", "checkbox"),
                    t.setAttribute("value", "accept"),
                    t.onchange = function(t) {
                        if (t.target.checked && (m("nta-wa-gdpr", "accept", 30),
                        "" != h("nta-wa-gdpr"))) {
                            const t = document.querySelectorAll(".nta-wa-gdpr");
                            l.style.opacity = 0,
                            setTimeout(( () => {
                                t.forEach((t => t.style.display = "none"))
                            }
                            ), 400);
                            document.querySelectorAll(".wa__popup_content_item").forEach((t => t.classList.remove("pointer-disable")))
                        }
                    }
                    ;
                    const e = document.createElement("span");
                    e.appendChild(t),
                    e.appendChild(( () => {
                        const t = document.createElement("span");
                        return t.innerHTML = b().sanitize(n.options.styles.gdprContent.njtReplaceAll(/\r\n\r\n/gm, "<br/>")),
                        t
                    }
                    )());
                    const r = document.createElement("label");
                    return r.setAttribute("for", "nta-wa-gdpr"),
                    r.appendChild(e),
                    r
                }
                )());
                const u = document.createElement("a");
                u.setAttribute("target", "ON" == n.urlSettings.openInNewTab ? "_blank" : "_self"),
                u.setAttribute("href", a),
                u.setAttribute("rel", "nofollow noopener noreferrer"),
                u.setAttribute("class", "wa__button" + o),
                u.onclick = function(t) {
                    if (n.gdprStatus && !h("nta-wa-gdpr"))
                        return t.preventDefault(),
                        l.style.background = "red",
                        void (l.style.color = "#fff");
                    y(this, {
                        enabledFacebook: n.options.analytics.enabledFacebook,
                        enabledGoogle: n.options.analytics.enabledGoogle,
                        enabledGoogleGA4: n.options.analytics.enabledGoogleGA4
                    }, r)
                }
                ,
                "online" == i && (u.style.backgroundColor = n.styles.backgroundColor),
                u.appendChild(s),
                u.appendChild(c),
                t.appendChild(u),
                n.gdprStatus && "accept" != h("nta-wa-gdpr") && t.appendChild(l),
                t._isWaButton = !0
            },
            createWidget: function(t, e) {
                const n = Object.assign({
                    accounts: [],
                    timezone: "",
                    defaultAvatar: "",
                    gdprStatus: !1,
                    options: {
                        display: {},
                        styles: {},
                        analytics: {}
                    },
                    urlSettings: {}
                }, e);
                if ("OFF" == n.options.display.showOnDesktop && !v)
                    return;
                if ("OFF" == n.options.display.showOnMobile && v)
                    return;
                const r = n.options.styles;
                t.classList.add("wa__widget_container");
                const i = document.createElement("div");
                i.setAttribute("class", "wa__btn_popup_txt"),
                i.appendChild(( () => {
                    const t = document.createElement("span");
                    return t.innerHTML = b().sanitize(r.btnLabel),
                    t
                }
                )()),
                i.style.display = "ON" == r.isShowBtnLabel ? "block" : "none",
                i.style.left = "left" == r.btnPosition ? "100%" : "unset",
                i.style.right = "right" == r.btnPosition ? "100%" : "unset",
                i.style.marginRight = "right" == r.btnPosition ? "7px" : "0px",
                i.style.marginLeft = "left" == r.btnPosition ? "7px" : "0px",
                i.style.width = r.btnLabelWidth + "px";
                const o = document.createElement("div");
                o.setAttribute("class", "wa__btn_popup_icon"),
                o.style.background = r.backgroundColor;
                const a = document.createElement("div");
                a.setAttribute("class", "wa__btn_popup"),
                a.onclick = function(t) {
                    const e = function(t, e) {
                        if ("simple" === e.options.styles.widgetType && 1 === e.accounts.length) {
                            const t = A(e.accounts[0], e);
                            return e.urlSettings.openInNewTab ? window.open(t) : location.href = t,
                            !0
                        }
                        return !1
                    }(0, n);
                    if (e)
                        return;
                    let r, i;
                    const o = document.querySelector(".wa__popup_chat_box")
                      , a = document.querySelector(".wa__btn_popup");
                    o.classList.contains("wa__active") ? (o.classList.remove("wa__active"),
                    a.classList.remove("wa__active"),
                    clearTimeout(i),
                    o.classList.contains("wa__lauch") && (r = setTimeout((function() {
                        o.classList.remove("wa__pending"),
                        o.classList.remove("wa__lauch")
                    }
                    ), 400))) : (o.classList.add("wa__pending"),
                    o.classList.add("wa__active"),
                    a.classList.add("wa__active"),
                    clearTimeout(r),
                    o.classList.contains("wa__lauch") || (i = setTimeout((function() {
                        o.classList.add("wa__lauch")
                    }
                    ), 100)))
                }
                ,
                a.appendChild(i),
                a.appendChild(o),
                a.style.left = "left" == r.btnPosition ? parseInt(r.btnLeftDistance) + "px" : "unset",
                a.style.right = "right" == r.btnPosition ? parseInt(r.btnRightDistance) + "px" : "unset",
                a.style.bottom = parseInt(r.btnBottomDistance) + "px",
                t.appendChild(a);
                const s = document.createElement("div");
                s.setAttribute("class", "wa__popup_heading"),
                s.style.background = r.backgroundColor,
                s.append(( () => {
                    const t = document.createElement("div");
                    return t.className = "wa__popup_title",
                    t.innerHTML = b().sanitize(r.title),
                    t.style.color = r.textColor,
                    t.style.fontSize = r.titleSize + "px",
                    t
                }
                )()),
                s.append(( () => {
                    const t = document.createElement("div");
                    return t.className = "wa__popup_intro",
                    t.innerHTML = b().sanitize(r.description.njtReplaceAll(/\r\n\r\n/gm, "<br/>")),
                    t.style = "#fff" == r.textColor || "#ffffff" == r.textColor ? "color: #D9EBC6" : "color: " + r.textColor + "; opacity: 0.8",
                    t.style.fontSize = r.descriptionTextSize + "px",
                    t
                }
                )());
                const c = document.createElement("div");
                c.className = "nta-wa-gdpr",
                c.appendChild(( () => {
                    const t = document.createElement("input");
                    t.setAttribute("id", "nta-wa-gdpr"),
                    t.setAttribute("type", "checkbox"),
                    t.setAttribute("value", "accept"),
                    t.onchange = function(t) {
                        if (t.target.checked && (m("nta-wa-gdpr", "accept", 30),
                        "" != h("nta-wa-gdpr"))) {
                            const t = document.querySelectorAll(".nta-wa-gdpr");
                            c.style.opacity = 0,
                            setTimeout(( () => {
                                t.forEach((t => t.style.display = "none"))
                            }
                            ), 400);
                            document.querySelectorAll(".wa__popup_content_item").forEach((t => t.classList.remove("pointer-disable")))
                        }
                    }
                    ;
                    const e = document.createElement("span");
                    e.appendChild(t),
                    e.appendChild(( () => {
                        const t = document.createElement("span");
                        return t.innerHTML = b().sanitize(n.options.styles.gdprContent.njtReplaceAll(/\r\n\r\n/gm, "<br/>")),
                        t
                    }
                    )());
                    const r = document.createElement("label");
                    return r.setAttribute("for", "nta-wa-gdpr"),
                    r.appendChild(e),
                    r
                }
                )());
                const l = document.createElement("div");
                l.className = "wa__popup_content wa__popup_content_left",
                l.appendChild(( () => {
                    const t = document.createElement("div");
                    return t.className = "wa__popup_notice",
                    t.innerHTML = b().sanitize(r.responseText.njtReplaceAll(/\r\n\r\n/gm, "<br/>")),
                    t.style.fontSize = r.regularTextSize + "px",
                    t
                }
                )()),
                l.appendChild("ON" == r.isShowGDPR && 1 == n.gdprStatus && "accept" != h("nta-wa-gdpr") ? c : document.createTextNode("")),
                l.appendChild(( () => {
                    const t = document.createElement("div");
                    var e;
                    return t.className = "wa__popup_content_list",
                    t.onclick = function() {
                        "" == h("nta-wa-gdpr") && (c.style.background = "red",
                        c.style.color = "#fff")
                    }
                    ,
                    e = t,
                    n.accounts.forEach((t => {
                        const i = g(t, n);
                        let o = A(t, n);
                        const a = document.createElement("div");
                        a.className = "wa__popup_avatar" + (t.avatar ? "" : " nta-default-avt"),
                        a.appendChild(( () => {
                            if (t.avatar) {
                                const e = document.createElement("div");
                                return e.className = "wa__cs_img_wrap",
                                e.style = `background: url(${t.avatar}) center center no-repeat; background-size: cover;`,
                                e
                            }
                            return document.createRange().createContextualFragment(n.defaultAvatar)
                        }
                        )());
                        const s = document.createElement("div");
                        s.className = "wa__popup_content_item" + (n.gdprStatus ? " pointer-disable" : ""),
                        s.appendChild(( () => {
                            const e = document.createElement("a");
                            return e.setAttribute("target", "ON" == n.urlSettings.openInNewTab ? "_blank" : "_self"),
                            e.setAttribute("href", o),
                            e.setAttribute("rel", "nofollow noopener noreferrer"),
                            e.className = "wa__stt" + ("online" === i ? " wa__stt_online" : " wa__stt_offline"),
                            e.onclick = function() {
                                y(this, {
                                    enabledFacebook: n.options.analytics.enabledFacebook,
                                    enabledGoogle: n.options.analytics.enabledGoogle,
                                    enabledGoogleGA4: n.options.analytics.enabledGoogleGA4
                                }, t)
                            }
                            ,
                            e.appendChild(a),
                            e.appendChild(( () => {
                                const e = document.createElement("div");
                                e.className = "wa__popup_txt";
                                let n = "";
                                return n += `<div class="wa__member_name" style='font-size:${r.accountNameSize}px'>${t.accountName}</div>`,
                                n += `<div class="wa__member_duty" style='font-size:${r.regularTextSize}px'>${t.title}</div>`,
                                n += "online" != i ? `<div class="wa__member_status">${i}</div>` : "",
                                e.innerHTML = b().sanitize(n),
                                e
                            }
                            )()),
                            e
                        }
                        )()),
                        e.appendChild(s)
                    }
                    )),
                    t
                }
                )());
                var u = '<a target="_blank" href="https://ninjateam.org/whatsapp-chat-wordpress/"><svg role="img" aria-label="NinjaTeam WhatsApp for WordPress" class="wa__popup_icon-ninja" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve"><g> <path class="st0" fill="#a9a9a9" d="M286.3,67C238,67,194,85.3,160.8,115.2l0-0.1l-13.2-27.8L84.9,49.2l8.5,66.4l27.1,21.1l-31.8-19.9l-60,8.9   l40.2,46.1l48.9,0.3C105.6,197,98.7,225,98.7,254.6c0,103.6,84,187.6,187.6,187.6s187.6-84,187.6-187.6S389.9,67,286.3,67z    M285.8,346.3c-111,0-171.9-63.2-171.9-92.5s62.2-91.5,171.9-91.5c109.5,0,172.8,62.1,172.8,91.5   C458.6,283.2,398.4,346.3,285.8,346.3z"/> <ellipse fill="#a9a9a9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -77.6656 328.6796)" class="st1" cx="357.9" cy="258.1" rx="20.6" ry="20.6"/> <ellipse fill="#a9a9a9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -119.8129 226.9269)" class="st1" cx="214" cy="258.1" rx="20.6" ry="20.6"/></g></svg></a>'
                  , d = '<div class="wa__popup_powered_content">' + u + '<span class="wa__popup_tooltiptext"><svg class="wa__popup_icon-tooltip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36"><path fill="#FFAC33" d="M32.938 15.651C32.792 15.26 32.418 15 32 15H19.925L26.89 1.458c.219-.426.106-.947-.271-1.243C26.437.071 26.218 0 26 0c-.233 0-.466.082-.653.243L18 6.588 3.347 19.243c-.316.273-.43.714-.284 1.105S3.582 21 4 21h12.075L9.11 34.542c-.219.426-.106.947.271 1.243.182.144.401.215.619.215.233 0 .466-.082.653-.243L18 29.412l14.653-12.655c.317-.273.43-.714.285-1.106z"/></svg> Powered by <span class="wa__popup_tooltiptext-ninja">NinjaTeam</span></span></div>'
                  , p = '<span class="wa__popup_tooltiptext_mb"> POWERED BY' + u + '<span class="wa__popup_tooltiptext-ninja-mb">NINJATEAM</span></span>';
                "ON" === r.isShowPoweredBy && l.appendChild(( () => {
                    const t = document.createElement("div");
                    return t.className = v ? "wa__popup_powered_mb" : "wa__popup_powered",
                    t.innerHTML = v ? b().sanitize(p) : b().sanitize(d),
                    t
                }
                )()),
                "ON" === r.isShowScroll && (l.style.maxHeight = parseInt(r.scrollHeight) + "px",
                l.style.overflow = "auto");
                const f = document.createElement("div");
                f.className = "wa__popup_chat_box",
                f.appendChild(s),
                f.style.left = "left" == r.btnPosition ? parseInt(r.btnLeftDistance) + "px" : "unset",
                f.style.right = "right" == r.btnPosition ? parseInt(r.btnRightDistance) + "px" : "unset",
                f.style.bottom = parseInt(r.btnBottomDistance) + 72 + "px",
                f.appendChild(l),
                t.appendChild(f)
            },
            ready: function(t) {
                return (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? t() : document.addEventListener("DOMContentLoaded", t)
            }
        }
    }
    )()
}
)();
