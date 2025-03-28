!function(e) {
    var t = {};
    function r(n) {
        if (t[n])
            return t[n].exports;
        var i = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r),
        i.l = !0,
        i.exports
    }
    r.m = e,
    r.c = t,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
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
    r.t = function(e, t) {
        if (1 & t && (e = r(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                r.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = 0)
}([function(e, t) {
    class r extends elementorModules.frontend.handlers.Base {
        getDefaultSettings() {
            return {
                selectors: {
                    wrapper: ".jeg-elementor-kit.jkit-portfolio-gallery",
                    row_items: ".row-item",
                    gallery_items: ".gallery-items",
                    image_items: ".image-item"
                }
            }
        }
        getDefaultElements() {
            const e = this.getSettings("selectors");
            return {
                $wrapper: this.$element.find(e.wrapper),
                $row_items: this.$element.find(e.row_items),
                $gallery_items: this.$element.find(e.gallery_items),
                $image_items: this.$element.find(e.image_items)
            }
        }
        bindEvents() {
            this.onRenderInit(),
            this.onClickHover()
        }
        onRenderInit() {
            const e = this.elements.$row_items
              , t = this.elements.$image_items;
            jQuery(e.get().reverse()).each((function() {
                jQuery(this).hasClass("current-item") && (e.removeClass("current-item"),
                jQuery(this).addClass("current-item"))
            }
            )),
            jQuery(t.get().reverse()).each((function() {
                jQuery(this).hasClass("current-item") && (t.removeClass("current-item"),
                jQuery(this).addClass("current-item"))
            }
            ))
        }
        onClickHover() {
            const e = this
              , t = e.elements.$wrapper
              , r = e.elements.$row_items;
            t.hasClass("on-click") && r.each((function() {
                jQuery(this).on({
                    click: function() {
                        r.removeClass("current-item"),
                        jQuery(this).addClass("current-item"),
                        e.onShowImage(jQuery(this).data("tab"))
                    }
                })
            }
            )),
            t.hasClass("on-hover") && r.each((function() {
                jQuery(this).on({
                    mouseenter: function() {
                        r.removeClass("current-item"),
                        jQuery(this).addClass("current-item"),
                        e.onShowImage(jQuery(this).data("tab"))
                    }
                })
            }
            ))
        }
        onShowImage(e) {
            this.elements.$image_items.removeClass("current-item"),
            this.elements.$gallery_items.find("#" + e).addClass("current-item")
        }
    }
    jQuery(window).on("elementor/frontend/init", ( () => {
        elementorFrontend.hooks.addAction("frontend/element_ready/jkit_portfolio_gallery.default", (e => {
            elementorFrontend.elementsHandler.addHandler(r, {
                $element: e
            })
        }
        ))
    }
    ))
}
]);
