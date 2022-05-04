/* dist/boilerplate.modal.js v1.0.2 Sun Oct 18 2020 16:17:43 GMT-0400 (Eastern Daylight Time) */
var iva_modals = function (m) {
  var d,
      a = function () {
    m("[data-modal-trigger-open]").each(function () {
      var a = m(this).attr("data-modal-target");
      m(a).addClass("modal-hidden");
    });
  },
      e = function () {
    m("[data-modal-trigger-open]").hammer().on("tap", function (a) {
      var e;
      m(this).hasClass("disable") || (s(), r(this), e = m(m(this).attr("data-modal-target")).attr("data-modal-group-container"), v(e)), m(this).hasClass("disable-swipe") && m("body").addClass("swipe-disabled");
    });
  },
      o = function () {
    m("[data-modal-trigger-close]").hammer().on("tap", function (a) {
      s(), c();
    }), m(window).on("close-modal", function (a) {
      s(), c();
    });
  },
      t = function () {
    m(document).on("touchend", ".prev, .next", function (a) {
      var e,
          d,
          o,
          t,
          i = m(this).parent().eq(0).attr("data-modal-group-container"),
          l = m("[data-modal-group]"),
          n = (l = i ? l.filter('[data-modal-group-container="' + i + '"]') : l.filter(":not([data-modal-group-container])")).filter(".modal-visible"),
          s = l.index(n),
          r = m(this).hasClass("next");
      c(), r ? (d = m(l[e = s + 1]), m(".modal-group-btn.active").removeClass("active").addClass("inactive"), m(".modal-group-btn:eq(" + e + ")").removeClass("inactive").addClass("active"), n.removeClass("modal-visible").addClass("modal-hidden"), d.removeClass("modal-hidden").addClass("modal-visible")) : (t = m(l[o = s - 1]), m(".modal-group-btn.active").removeClass("active").addClass("inactive"), m(".modal-group-btn:eq(" + o + ")").removeClass("inactive").addClass("active"), n.removeClass("modal-visible").addClass("modal-hidden"), t.removeClass("modal-hidden").addClass("modal-visible")), v(i);
    });
  },
      v = function (a) {
    var e = m("[data-modal-group]"),
        d = (e = a ? e.filter('[data-modal-group-container="' + a + '"]') : e.filter(":not([data-modal-group-container])")).length;
    if (!(1 < d)) return !1;
    var o = e.filter(".modal-visible"),
        t = e.index(o),
        i = t + 1 === d;
    0 === t || o.append('<div class="prev"></div>'), i || o.append('<div class="next"></div>'), l();
  },
      l = function () {
    var a = m("[data-modal-group][data-enable-pagination]").length;
    if (a <= 1) return !1;

    for (var e = m(".modal-visible").index("[data-modal-group][data-enable-pagination]"), d = '<ul class="pagination-container">', o = 0; o < a; o++) d += o == e ? '<li class="is-active"></li>' : "<li></li>";

    d += "</ul>", m(".modal-visible").append(d);
  },
      c = function (a) {
    m(".next").remove(), m(".prev").remove(), m(".pagination-container").remove();
  },
      c = function (a) {
    m(".next").remove(), m(".prev").remove(), m(".pagination-container").remove();
  },
      i = function () {
    m("[data-update-modal-trigger]").hammer().on("tap", n);
  },
      n = function () {
    var a = m(this).data("update-modal-trigger"),
        e = m(this).data("update-modal-trigger-target");
    e && m(a).data("modal-target", e);
  },
      s = function () {
    m(".modal-overlay").removeClass("active"), m("body").removeClass("swipe-disabled"), m(".modal-visible").addClass("modal-hidden").removeClass("modal-visible"), m("body").removeClass("modal-active").removeClass("references-active"), null != d && m("body").removeClass(d), 0 < m(".modal-group-btn").length && m(".modal-group-btn").removeClass("inactive").removeClass("active"), m(window).trigger("modal-closed");
  },
      r = function (a) {
    m(window).trigger("modal-opened"), m(".modal-overlay").addClass("active"), m("body").addClass("modal-active"), null != m(a).data("modal-active-classname") && (d = "" + m(a).data("modal-active-classname"), m("body").addClass(d)), m(a).hasClass("modal-group-btn") && (m(".modal-group-btn").addClass("inactive"), m(a).removeClass("inactive").addClass("active")), m(a).hasClass("references") && m("body").addClass("references-active");
    var e = m(a).data("modal-target");
    m(e).removeClass("modal-hidden").addClass("modal-visible");
  },
      u = {};

  return u.init = function () {
    a(), i(), e(), o(), t();
  }, u;
}(jQuery);

jQuery(document).ready(function () {
  iva_modals.init();
});