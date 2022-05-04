/* dist/sketch.scroll.js v0.0.1 Thu Feb 18 2021 22:17:30 GMT-0500 (Eastern Standard Time) */
"use strict";

var iva_scroll = function () {
  function n() {
    document.querySelectorAll("[data-scrollable]").forEach(n => {
      var t, e;
      e = (t = n).getAttribute("data-sketch-id"), (n = document.createElement("div")).setAttribute("data-scrollable-sketch-id", e), a(t, n), i && o.push(new MiniBar(n, {
        scrollX: !1,
        alwaysShowBars: !0
      }));
    }), o.length && window.addEventListener("state-changed", function () {
      t();
    });
  }

  var i = !0,
      o = [],
      a = function (n, t) {
    n.parentNode.appendChild(t), t.appendChild(n);
  },
      t = function () {
    o.forEach(n => {
      n.scrollTo(0, "y");
    });
  },
      e = {
    init: function () {
      "function" != typeof MiniBar && (i = !1, console.error("MiniBar dependency not found -- scroll functionality is disabled! Ensure the MiniBar library is loaded.")), n();
    },
    scrollToTop: function () {
      t();
    }
  };

  return e;
}();

document.addEventListener("DOMContentLoaded", function () {
  iva_scroll.init();
});