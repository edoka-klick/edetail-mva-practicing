/* dist/boilerplate.hotlink.js v1.2.0 Wed Feb 03 2021 09:59:58 GMT-0500 (Eastern Standard Time) */
!function (r) {
  function a(t) {
    var a,
        e,
        n,
        i,
        o = r(this),
        d = new CustomEvent("hotlink-clicked", {
      detail: {
        element: o[0]
      }
    });
    window.dispatchEvent(d), "function" == typeof s.tapBefore && s.tapBefore(t, o), "function" == typeof s.tap ? s.tap(t, o) : (e = void 0 !== (a = o).attr(p.data_attr_presentation) ? a.attr(p.data_attr_presentation) : iva_presentation_name, n = a.attr(p.data_attr_slide), i = -1 < n.search(p.pathway_ext) ? n : e + "_" + n + "." + p.pathway_ext, console.log("Slide Path:", i), console.log("Presentation Name:", e), com.veeva.clm.gotoSlide(i, e)), "function" == typeof s.tapAfter && s.tapAfter(t, o);
  }

  var s, p, t;
  r.hotlink = (s = {}, p = {
    data_attr_slide: "data-slide",
    data_attr_presentation: "data-presentation",
    pathway_ext: "zip"
  }, (t = {}).bindEvents = function (t) {
    r(t = t || "body").find("[" + p.data_attr_slide + "]").hammer().off("tap", a), r(t).find("[" + p.data_attr_slide + "]").hammer().bind("tap", a);
  }, t.init = function () {
    this.bindEvents();
  }, t.setHooks = function (t) {
    s = t || {};
  }, t);
}(jQuery), jQuery.hotlink.init();