/* dist/jquery.hammer.js v2.0.1 Sun Oct 18 2020 16:17:44 GMT-0400 (Eastern Daylight Time) */
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer);
}(function (n, a) {
  var r;
  n.fn.hammer = function (r) {
    return this.each(function () {
      var e, t;
      e = r, (t = n(this)).data("hammer") || t.data("hammer", new a(t[0], e));
    });
  }, a.Manager.prototype.emit = (r = a.Manager.prototype.emit, function (e, t) {
    r.call(this, e, t), n(this.element).trigger({
      type: e,
      gesture: t
    });
  });
});