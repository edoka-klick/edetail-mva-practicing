/* dist/boilerplate.modal-forced.js v1.0.2 Sun Oct 18 2020 16:17:43 GMT-0400 (Eastern Daylight Time) */
var iva_forced_modals = function (e) {
  var i = [],
      t = function () {
    a() || e("[data-modal-open-on-load]").each(function () {
      e(this).trigger("tap");
    });
  },
      a = function () {
    if (null == localStorage.getItem("visited-slides")) return !1;
    var t = localStorage.getItem("visited-slides").split(",");
    return 0 <= jQuery.inArray(e("body").data("slideid").toString(), t);
  },
      o = function () {
    var t = e("body").data("slideid").toString();
    null == localStorage.getItem("visited-slides") ? i.push(t) : (i = localStorage.getItem("visited-slides").split(","), jQuery.inArray(t, i) < 0 && i.push(t)), localStorage.setItem("visited-slides", i);
  },
      r = {};

  return r.init = function () {
    t(), o();
  }, r;
}(jQuery);

jQuery(document).ready(function () {
  iva_forced_modals.init();
});