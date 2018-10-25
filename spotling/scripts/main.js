!function () {
    function e(t, n, r) {
        function i(c, a) {
            if (!n[c]) {
                if (!t[c]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(c, !0);
                    if (o) return o(c, !0);
                    var s = new Error("Cannot find module '" + c + "'");
                    throw s.code = "MODULE_NOT_FOUND", s
                }
                var u = n[c] = {exports: {}};
                t[c][0].call(u.exports, function (e) {
                    var n = t[c][1][e];
                    return i(n || e)
                }, u, u.exports, e, t, n, r)
            }
            return n[c].exports
        }

        for (var o = "function" == typeof require && require, c = 0; c < r.length; c++) i(r[c]);
        return i
    }

    return e
}()({
    1: [function (e, t, n) {
        "use strict";

        function r(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        }

        function i(e, t, n, r) {
            $(window).scroll(function () {
                $(window).width() > 1025 ? e.animate({
                    width: t,
                    height: n
                }, 1e3) : $(window).width() > 768 && e.animate({width: t, height: n}, 1e3)
            })
        }

        var o = document.querySelectorAll(".btn"), c = document.querySelectorAll(".btn--burger"),
            a = document.querySelector(".wrapper"), l = document.querySelector(".page-header__main-menu");
        $(function () {
            var e = document.querySelector(".persons-list"), t = $(".person-info__list"), n = 0, r = function (t) {
                if (!t.classList.contains("persons-list__item--active")) {
                    var n = e.querySelector(".persons-list__item--active");
                    n.classList.remove("persons-list__item--active"), t.classList.add("persons-list__item--active")
                }
            };
            t.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                fade: !0,
                responsive: [{breakpoint: 768, settings: {arrows: !1}}]
            }), t.on("afterChange", function (i) {
                n = t.slick("slickCurrentSlide"), r(e.querySelectorAll(".persons-list__item")[n])
            });
            var i = function (e) {
                var t = parseInt(e.getAttribute("href"));
                $(".person-info__list").slick("slickGoTo", t)
            }, o = function (e) {
                if (e.target.closest(".persons-list__item")) {
                    e.preventDefault();
                    var t = e.target.closest(".persons-list__item");
                    r(t), i(t)
                }
            };
            e.addEventListener("click", o)
        }), $(window).scroll(function () {
            $(this).scrollTop() > 30 && i($(".preview-event__laser"), 312, 376), $(this).scrollTop() > 600 && i($(".think__laser"), 822, 633), $(this).scrollTop() > 55 && $(window).width() < 1025 ? document.querySelector(".page-header__navs-mobile").classList.add("page-header__navs-mobile--active") : document.querySelector(".page-header__navs-mobile").classList.remove("page-header__navs-mobile--active")
        }), [].concat(r(c)).map(function (e) {
            e.addEventListener("click", function (e) {
                l.classList.toggle("page-header__main-menu--active-mobile"), a.classList.toggle("wrapper--overlay"), [].concat(r(o)).map(function (e) {
                    e.classList.toggle("burger--active")
                })
            })
        });
        var s = document.querySelectorAll('a[href*="#"]');
        [].concat(r(s)).map(function (e) {
            e.addEventListener("click", function (t) {
                t.preventDefault();
                var n = e.getAttribute("href");
                document.querySelector("" + n).scrollIntoView({behavior: "smooth", block: "start"})
            })
        });
        var u = function () {
            var e = document.querySelectorAll(".buy-ticket__num"), t = document.querySelectorAll(".buy-ticket__value"),
                n = document.querySelectorAll(".buy-ticket__plus-qty"),
                i = document.querySelectorAll(".buy-ticket__minus-qty");
            [].concat(r(n)).map(function (n) {
                n.onclick = function () {
                    [].concat(r(e)).map(function (e) {
                        var t = Number(e.innerHTML);
                        e.innerHTML = ++t, Number(e.innerHTML) >= 2 && [].concat(r(i)).map(function (e) {
                            e.removeAttribute("disabled")
                        })
                    }), [].concat(r(t)).map(function (e) {
                        var t = Number(e.innerHTML);
                        e.innerHTML = t += 500
                    })
                }
            }), [].concat(r(i)).map(function (n) {
                n.onclick = function () {
                    [].concat(r(e)).map(function (e) {
                        var t = Number(e.innerHTML);
                        Number(e.innerHTML) > 1 && (e.innerHTML = --t), 1 == Number(e.innerHTML) && [].concat(r(i)).map(function (e) {
                            e.setAttribute("disabled", !0)
                        })
                    }), [].concat(r(t)).map(function (e) {
                        var t = Number(e.innerHTML);
                        e.innerHTML = t -= 500
                    })
                }
            })
        };
        u();
        var m = document.querySelector(".popup"), d = document.querySelectorAll(".btn--pay-ticket"),
            p = document.querySelector(".popup__close"), f = function () {
                m.classList.toggle("popup--show")
            }, v = function (e) {
                e.target === m && f()
            };
        [].concat(r(d)).map(function (e) {
            e.addEventListener("click", f)
        }), p.addEventListener("click", f), window.addEventListener("click", v)
    }, {}]
}, {}, [1]);
//# sourceMappingURL=main.js.map
