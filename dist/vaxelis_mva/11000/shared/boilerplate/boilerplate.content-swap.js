/* dist/boilerplate.content-swap.js v1.0.2 Sun Oct 18 2020 16:17:43 GMT-0400 (Eastern Daylight Time) */
var iva_content_swap = function (e) {
  var a = function () {
    var a = e(this).parent().find("[data-swap-tile]").index(e(this)),
        t = e(this).parent().find("[data-swap-tile]").length - 1;
    if (1 == t && void 0 !== e(this).parent().attr("data-swap-toggle")) e(this).removeClass("is-active"), a == t ? (e(this).prev().addClass("is-active"), e("[data-swap-view-all]").removeAttr("data-swap-active")) : e(this).next().addClass("is-active");else {
      if (a == t) return;
      e("[data-swap-nohide]").length || e(this).removeClass("is-active"), e(this).next().addClass("is-active");
    }
    var i = e("[data-swap-container] [data-swap-tile]:last-child.is-active").length;
    e("[data-swap-container]").length == i && 0 < e("[data-swap-view-all]").length && e("[data-swap-view-all]").attr("data-swap-active", "");
  },
      t = function () {
    e("[data-swap-container]").each(function (a, t) {
      e(this).find("[data-swap-tile]").index(e(this).find(".is-active")) != e(this).find("[data-swap-tile]").length - 1 && e(this).find(".is-active").removeClass("is-active").next().addClass("is-active");
    }), e(this).attr("data-swap-active", "");
  },
      i = {};

  return i.init = function () {
    e("[data-swap-tile]").hammer().on("tap", a), e("[data-swap-view-all]").hammer().on("tap", t);
  }, i;
}(jQuery);

!function (a) {
  a(document).ready(function () {
    iva_content_swap.init(a);
  });
}(jQuery);