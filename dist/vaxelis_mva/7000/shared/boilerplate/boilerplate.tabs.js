/* dist/boilerplate.tabs.js v1.0.1 Sun Oct 18 2020 16:17:40 GMT-0400 (Eastern Daylight Time) */
var iva_tabs = function (i) {
  var t = function () {
    i("[data-tab-id]").hammer().bind("tap", function (t) {
      var a = i(this).attr("data-tab-id");
      i("[data-tab]").attr("data-tab", a);
    });
  },
      a = {};

  return a.init = function () {
    t();
  }, a;
}(jQuery);

jQuery(document).ready(function () {
  iva_tabs.init();
});