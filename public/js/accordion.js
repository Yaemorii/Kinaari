!function(e) {
    var n = {};
    function r(t) {
        if (n[t])
            return n[t].exports;
        var d = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(d.exports, d, d.exports, r),
        d.l = !0,
        d.exports
    }
    r.m = e,
    r.c = n,
    r.d = function(e, n, t) {
        r.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(e, n) {
        if (1 & n && (e = r(e)),
        8 & n)
            return e;
        if (4 & n && "object" == typeof e && e && e.__esModule)
            return e;
        var t = Object.create(null);
        if (r.r(t),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }),
        2 & n && "string" != typeof e)
            for (var d in e)
                r.d(t, d, function(n) {
                    return e[n]
                }
                .bind(null, d));
        return t
    }
    ,
    r.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(n, "a", n),
        n
    }
    ,
    r.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    r.p = "",
    r(r.s = 0)
}([function(e, n) {
    class r extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
            return {
                selectors: {
                    wrapper: ".jeg-elementor-kit.jkit-accordion",
                    cards: ".card-wrapper",
                    card_header: ".card-header"
                }
            }
        }
        getDefaultElements() {
            const e = this.getSettings("selectors");
            return {
                $wrapper: this.$element.find(e.wrapper),
                $cards: this.$element.find(e.cards),
                $card_header: this.$element.find(e.card_header)
            }
        }
        bindEvents() {
            this.onClick()
        }
        onClick() {
            const e = this;
            this.elements.$card_header.on("click", (function(n) {
                n.preventDefault();
                const r = jQuery(this).parent();
                r.hasClass("expand") ? (r.find(".card-expand").slideUp(),
                r.removeClass("expand")) : (e.elements.$wrapper.find(".card-expand").slideUp(),
                e.elements.$wrapper.find(".card-wrapper").removeClass("expand"),
                r.addClass("expand"),
                r.find(".card-expand").slideDown())
            }
            ))
        }
    }
    jQuery(window).on("elementor/frontend/init", ( () => {
        elementorFrontend.hooks.addAction("frontend/element_ready/jkit_accordion.default", (e => {
            elementorFrontend.elementsHandler.addHandler(r, {
                $element: e
            })
        }
        ))
    }
    ))
}
]);
