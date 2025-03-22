/*! elementor - v3.27.0 - 16-02-2025 */
"use strict";
(self.webpackChunkelementorFrontend = self.webpackChunkelementorFrontend || []).push([[212], {
    5362: (e, t, r) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0,
        r(4846),
        r(6211);
        class TextEditor extends elementorModules.frontend.handlers.Base {
            getDefaultSettings() {
                return {
                    selectors: {
                        paragraph: "p:first"
                    },
                    classes: {
                        dropCap: "elementor-drop-cap",
                        dropCapLetter: "elementor-drop-cap-letter"
                    }
                }
            }
            getDefaultElements() {
                const e = this.getSettings("selectors")
                  , t = this.getSettings("classes")
                  , r = jQuery("<span>", {
                    class: t.dropCap
                })
                  , p = jQuery("<span>", {
                    class: t.dropCapLetter
                });
                return r.append(p),
                {
                    $paragraph: this.$element.find(e.paragraph),
                    $dropCap: r,
                    $dropCapLetter: p
                }
            }
            wrapDropCap() {
                if (!this.getElementSettings("drop_cap"))
                    return void (this.dropCapLetter && (this.elements.$dropCap.remove(),
                    this.elements.$paragraph.prepend(this.dropCapLetter),
                    this.dropCapLetter = ""));
                const e = this.elements.$paragraph;
                if (!e.length)
                    return;
                const t = e.html().replace(/&nbsp;/g, " ")
                  , r = t.match(/^ *([^ ] ?)/);
                if (!r)
                    return;
                const p = r[1]
                  , s = p.trim();
                if ("<" === s)
                    return;
                this.dropCapLetter = p,
                this.elements.$dropCapLetter.text(s);
                const a = t.slice(p.length).replace(/^ */, (e => new Array(e.length + 1).join("&nbsp;")));
                e.html(a).prepend(this.elements.$dropCap)
            }
            onInit() {
                super.onInit(...arguments),
                this.wrapDropCap()
            }
            onElementChange(e) {
                "drop_cap" === e && this.wrapDropCap()
            }
        }
        t.default = TextEditor
    }
}]);
