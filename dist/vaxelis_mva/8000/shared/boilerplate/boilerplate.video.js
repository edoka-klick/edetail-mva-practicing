/* dist/boilerplate.video.js v1.0.2 Sun Oct 18 2020 16:17:40 GMT-0400 (Eastern Daylight Time) */
var iva_video_player = function (n) {
  var e = function (e) {
    var i;
    n("video").length && (i = n("video").get(0), null != n(this).data("video-replay") && (i.currentTime = 0), i.play());
  },
      i = function (e) {
    n("video").length && n("video").get(0).pause();
  },
      o = {};

  return o.init = function () {
    n("[data-video-trigger]").hammer().on("tap", e), n(window).on("modal-closed", i);
  }, o;
}(jQuery);

!function (e) {
  e(document).ready(function () {
    iva_video_player.init(e);
  });
}(jQuery);