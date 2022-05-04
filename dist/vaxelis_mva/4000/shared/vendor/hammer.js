/* dist/hammer.js v2.0.9 Sun Oct 18 2020 16:17:47 GMT-0400 (Eastern Daylight Time) */
!function (s, a, l) {
  "use strict";

  var o,
      h = ["", "webkit", "Moz", "MS", "ms", "o"],
      t = a.createElement("div"),
      i = "function",
      u = Math.round,
      p = Math.abs,
      f = Date.now;

  function c(t, e, i) {
    return setTimeout(g(t, i), e);
  }

  function n(t, e, i) {
    return Array.isArray(t) && (d(t, i[e], i), 1);
  }

  function d(t, e, i) {
    var n;
    if (t) if (t.forEach) t.forEach(e, i);else if (t.length !== l) for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;else for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t);
  }

  function e(n, t, e) {
    var r = "DEPRECATED METHOD: " + t + "\n" + e + " AT \n";
    return function () {
      var t = new Error("get-stack-trace"),
          e = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
          i = s.console && (s.console.warn || s.console.log);
      return i && i.call(s.console, r, e), n.apply(this, arguments);
    };
  }

  o = "function" != typeof Object.assign ? function (t) {
    if (t === l || null === t) throw new TypeError("Cannot convert undefined or null to object");

    for (var e = Object(t), i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      if (n !== l && null !== n) for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
    }

    return e;
  } : Object.assign;
  var r = e(function (t, e, i) {
    for (var n = Object.keys(e), r = 0; r < n.length;) (!i || i && t[n[r]] === l) && (t[n[r]] = e[n[r]]), r++;

    return t;
  }, "extend", "Use `assign`."),
      v = e(function (t, e) {
    return r(t, e, !0);
  }, "merge", "Use `assign`.");

  function m(t, e, i) {
    var n = e.prototype,
        r = t.prototype = Object.create(n);
    r.constructor = t, r._super = n, i && o(r, i);
  }

  function g(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }

  function T(t, e) {
    return typeof t == i ? t.apply(e && e[0] || l, e) : t;
  }

  function y(t, e) {
    return t === l ? e : t;
  }

  function E(e, t, i) {
    d(C(t), function (t) {
      e.addEventListener(t, i, !1);
    });
  }

  function I(e, t, i) {
    d(C(t), function (t) {
      e.removeEventListener(t, i, !1);
    });
  }

  function A(t, e) {
    for (; t;) {
      if (t == e) return !0;
      t = t.parentNode;
    }

    return !1;
  }

  function _(t, e) {
    return -1 < t.indexOf(e);
  }

  function C(t) {
    return t.trim().split(/\s+/g);
  }

  function S(t, e, i) {
    if (t.indexOf && !i) return t.indexOf(e);

    for (var n = 0; n < t.length;) {
      if (i && t[n][i] == e || !i && t[n] === e) return n;
      n++;
    }

    return -1;
  }

  function b(t) {
    return Array.prototype.slice.call(t, 0);
  }

  function P(t, i, e) {
    for (var n = [], r = [], s = 0; s < t.length;) {
      var o = i ? t[s][i] : t[s];
      S(r, o) < 0 && n.push(t[s]), r[s] = o, s++;
    }

    return e && (n = i ? n.sort(function (t, e) {
      return t[i] > e[i];
    }) : n.sort()), n;
  }

  function D(t, e) {
    for (var i, n, r = e[0].toUpperCase() + e.slice(1), s = 0; s < h.length;) {
      if ((n = (i = h[s]) ? i + r : e) in t) return n;
      s++;
    }

    return l;
  }

  var x = 1;

  function w(t) {
    var e = t.ownerDocument || t;
    return e.defaultView || e.parentWindow || s;
  }

  var O = ("ontouchstart" in s),
      R = D(s, "PointerEvent") !== l,
      M = O && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
      z = "touch",
      N = "mouse",
      X = 25,
      Y = 1,
      F = 4,
      W = 8,
      q = 1,
      k = 2,
      H = 4,
      L = 8,
      U = 16,
      V = k | H,
      j = L | U,
      G = V | j,
      Z = ["x", "y"],
      B = ["clientX", "clientY"];

  function $(e, t) {
    var i = this;
    this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function (t) {
      T(e.options.enable, [e]) && i.handler(t);
    }, this.init();
  }

  function J(t, e, i) {
    var n = i.pointers.length,
        r = i.changedPointers.length,
        s = e & Y && n - r == 0,
        o = e & (F | W) && n - r == 0;
    i.isFirst = !!s, i.isFinal = !!o, s && (t.session = {}), i.eventType = e, function (t, e) {
      var i = t.session,
          n = e.pointers,
          r = n.length;
      i.firstInput || (i.firstInput = K(e));
      1 < r && !i.firstMultiple ? i.firstMultiple = K(e) : 1 === r && (i.firstMultiple = !1);
      var s = i.firstInput,
          o = i.firstMultiple,
          a = o ? o.center : s.center,
          h = e.center = Q(n);
      e.timeStamp = f(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = nt(a, h), e.distance = it(a, h), function (t, e) {
        var i = e.center,
            n = t.offsetDelta || {},
            r = t.prevDelta || {},
            s = t.prevInput || {};
        e.eventType !== Y && s.eventType !== F || (r = t.prevDelta = {
          x: s.deltaX || 0,
          y: s.deltaY || 0
        }, n = t.offsetDelta = {
          x: i.x,
          y: i.y
        });
        e.deltaX = r.x + (i.x - n.x), e.deltaY = r.y + (i.y - n.y);
      }(i, e), e.offsetDirection = et(e.deltaX, e.deltaY);
      var u = tt(e.deltaTime, e.deltaX, e.deltaY);
      e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = p(u.x) > p(u.y) ? u.x : u.y, e.scale = o ? function (t, e) {
        return it(e[0], e[1], B) / it(t[0], t[1], B);
      }(o.pointers, n) : 1, e.rotation = o ? function (t, e) {
        return nt(e[1], e[0], B) + nt(t[1], t[0], B);
      }(o.pointers, n) : 0, e.maxPointers = !i.prevInput || e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers, function (t, e) {
        var i,
            n,
            r,
            s,
            o = t.lastInterval || e,
            a = e.timeStamp - o.timeStamp;
        {
          var h, u, c;
          e.eventType != W && (X < a || o.velocity === l) ? (h = e.deltaX - o.deltaX, u = e.deltaY - o.deltaY, c = tt(a, h, u), n = c.x, r = c.y, i = p(c.x) > p(c.y) ? c.x : c.y, s = et(h, u), t.lastInterval = e) : (i = o.velocity, n = o.velocityX, r = o.velocityY, s = o.direction);
        }
        e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = s;
      }(i, e);
      var c = t.element;
      A(e.srcEvent.target, c) && (c = e.srcEvent.target);
      e.target = c;
    }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i;
  }

  function K(t) {
    for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
      clientX: u(t.pointers[i].clientX),
      clientY: u(t.pointers[i].clientY)
    }, i++;

    return {
      timeStamp: f(),
      pointers: e,
      center: Q(e),
      deltaX: t.deltaX,
      deltaY: t.deltaY
    };
  }

  function Q(t) {
    var e = t.length;
    if (1 === e) return {
      x: u(t[0].clientX),
      y: u(t[0].clientY)
    };

    for (var i = 0, n = 0, r = 0; r < e;) i += t[r].clientX, n += t[r].clientY, r++;

    return {
      x: u(i / e),
      y: u(n / e)
    };
  }

  function tt(t, e, i) {
    return {
      x: e / t || 0,
      y: i / t || 0
    };
  }

  function et(t, e) {
    return t === e ? q : p(t) >= p(e) ? t < 0 ? k : H : e < 0 ? L : U;
  }

  function it(t, e, i) {
    var n = e[(i = i || Z)[0]] - t[i[0]],
        r = e[i[1]] - t[i[1]];
    return Math.sqrt(n * n + r * r);
  }

  function nt(t, e, i) {
    var n = e[(i = i || Z)[0]] - t[i[0]],
        r = e[i[1]] - t[i[1]];
    return 180 * Math.atan2(r, n) / Math.PI;
  }

  $.prototype = {
    handler: function () {},
    init: function () {
      this.evEl && E(this.element, this.evEl, this.domHandler), this.evTarget && E(this.target, this.evTarget, this.domHandler), this.evWin && E(w(this.element), this.evWin, this.domHandler);
    },
    destroy: function () {
      this.evEl && I(this.element, this.evEl, this.domHandler), this.evTarget && I(this.target, this.evTarget, this.domHandler), this.evWin && I(w(this.element), this.evWin, this.domHandler);
    }
  };
  var rt = {
    mousedown: Y,
    mousemove: 2,
    mouseup: F
  },
      st = "mousedown",
      ot = "mousemove mouseup";

  function at() {
    this.evEl = st, this.evWin = ot, this.pressed = !1, $.apply(this, arguments);
  }

  m(at, $, {
    handler: function (t) {
      var e = rt[t.type];
      e & Y && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = F), this.pressed && (e & F && (this.pressed = !1), this.callback(this.manager, e, {
        pointers: [t],
        changedPointers: [t],
        pointerType: N,
        srcEvent: t
      }));
    }
  });
  var ht = {
    pointerdown: Y,
    pointermove: 2,
    pointerup: F,
    pointercancel: W,
    pointerout: W
  },
      ut = {
    2: z,
    3: "pen",
    4: N,
    5: "kinect"
  },
      ct = "pointerdown",
      lt = "pointermove pointerup pointercancel";

  function pt() {
    this.evEl = ct, this.evWin = lt, $.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
  }

  s.MSPointerEvent && !s.PointerEvent && (ct = "MSPointerDown", lt = "MSPointerMove MSPointerUp MSPointerCancel"), m(pt, $, {
    handler: function (t) {
      var e = this.store,
          i = !1,
          n = t.type.toLowerCase().replace("ms", ""),
          r = ht[n],
          s = ut[t.pointerType] || t.pointerType,
          o = s == z,
          a = S(e, t.pointerId, "pointerId");
      r & Y && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : r & (F | W) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, r, {
        pointers: e,
        changedPointers: [t],
        pointerType: s,
        srcEvent: t
      }), i && e.splice(a, 1));
    }
  });
  var ft = {
    touchstart: Y,
    touchmove: 2,
    touchend: F,
    touchcancel: W
  };

  function dt() {
    this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, $.apply(this, arguments);
  }

  m(dt, $, {
    handler: function (t) {
      var e,
          i = ft[t.type];
      i === Y && (this.started = !0), this.started && (e = function (t, e) {
        var i = b(t.touches),
            n = b(t.changedTouches);
        e & (F | W) && (i = P(i.concat(n), "identifier", !0));
        return [i, n];
      }.call(this, t, i), i & (F | W) && e[0].length - e[1].length == 0 && (this.started = !1), this.callback(this.manager, i, {
        pointers: e[0],
        changedPointers: e[1],
        pointerType: z,
        srcEvent: t
      }));
    }
  });
  var vt = {
    touchstart: Y,
    touchmove: 2,
    touchend: F,
    touchcancel: W
  },
      mt = "touchstart touchmove touchend touchcancel";

  function gt() {
    this.evTarget = mt, this.targetIds = {}, $.apply(this, arguments);
  }

  m(gt, $, {
    handler: function (t) {
      var e = vt[t.type],
          i = function (t, e) {
        var i = b(t.touches),
            n = this.targetIds;
        if (e & (2 | Y) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
        var r,
            s,
            o = b(t.changedTouches),
            a = [],
            h = this.target;
        if (s = i.filter(function (t) {
          return A(t.target, h);
        }), e === Y) for (r = 0; r < s.length;) n[s[r].identifier] = !0, r++;
        r = 0;

        for (; r < o.length;) n[o[r].identifier] && a.push(o[r]), e & (F | W) && delete n[o[r].identifier], r++;

        return a.length ? [P(s.concat(a), "identifier", !0), a] : void 0;
      }.call(this, t, e);

      i && this.callback(this.manager, e, {
        pointers: i[0],
        changedPointers: i[1],
        pointerType: z,
        srcEvent: t
      });
    }
  });
  var Tt = 2500;

  function yt() {
    $.apply(this, arguments);
    var t = g(this.handler, this);
    this.touch = new gt(this.manager, t), this.mouse = new at(this.manager, t), this.primaryTouch = null, this.lastTouches = [];
  }

  function Et(t) {
    var e,
        i,
        n = t.changedPointers[0];
    n.identifier === this.primaryTouch && (e = {
      x: n.clientX,
      y: n.clientY
    }, this.lastTouches.push(e), i = this.lastTouches, setTimeout(function () {
      var t = i.indexOf(e);
      -1 < t && i.splice(t, 1);
    }, Tt));
  }

  m(yt, $, {
    handler: function (t, e, i) {
      var n = i.pointerType == z,
          r = i.pointerType == N;

      if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
        if (n) (function (t, e) {
          t & Y ? (this.primaryTouch = e.changedPointers[0].identifier, Et.call(this, e)) : t & (F | W) && Et.call(this, e);
        }).call(this, e, i);else if (r && function (t) {
          for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var r = this.lastTouches[n],
                s = Math.abs(e - r.x),
                o = Math.abs(i - r.y);
            if (s <= 25 && o <= 25) return !0;
          }

          return !1;
        }.call(this, i)) return;
        this.callback(t, e, i);
      }
    },
    destroy: function () {
      this.touch.destroy(), this.mouse.destroy();
    }
  });

  var It = D(t.style, "touchAction"),
      At = It !== l,
      _t = "compute",
      Ct = "manipulation",
      St = "none",
      bt = "pan-x",
      Pt = "pan-y",
      Dt = function () {
    if (!At) return !1;
    var e = {},
        i = s.CSS && s.CSS.supports;
    return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (t) {
      e[t] = !i || s.CSS.supports("touch-action", t);
    }), e;
  }();

  function xt(t, e) {
    this.manager = t, this.set(e);
  }

  xt.prototype = {
    set: function (t) {
      t == _t && (t = this.compute()), At && this.manager.element.style && Dt[t] && (this.manager.element.style[It] = t), this.actions = t.toLowerCase().trim();
    },
    update: function () {
      this.set(this.manager.options.touchAction);
    },
    compute: function () {
      var e = [];
      return d(this.manager.recognizers, function (t) {
        T(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
      }), function (t) {
        if (_(t, St)) return St;

        var e = _(t, bt),
            i = _(t, Pt);

        if (e && i) return St;
        if (e || i) return e ? bt : Pt;
        if (_(t, Ct)) return Ct;
        return "auto";
      }(e.join(" "));
    },
    preventDefaults: function (t) {
      var e = t.srcEvent,
          i = t.offsetDirection;
      if (this.manager.session.prevented) e.preventDefault();else {
        var n = this.actions,
            r = _(n, St) && !Dt[St],
            s = _(n, Pt) && !Dt[Pt],
            o = _(n, bt) && !Dt[bt];

        if (r) {
          var a = 1 === t.pointers.length,
              h = t.distance < 2,
              u = t.deltaTime < 250;
          if (a && h && u) return;
        }

        if (!o || !s) return r || s && i & V || o && i & j ? this.preventSrc(e) : void 0;
      }
    },
    preventSrc: function (t) {
      this.manager.session.prevented = !0, t.preventDefault();
    }
  };
  var wt = 1;

  function Ot(t) {
    this.options = o({}, this.defaults, t || {}), this.id = x++, this.manager = null, this.options.enable = y(this.options.enable, !0), this.state = wt, this.simultaneous = {}, this.requireFail = [];
  }

  function Rt(t) {
    return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : "";
  }

  function Mt(t) {
    return t == U ? "down" : t == L ? "up" : t == k ? "left" : t == H ? "right" : "";
  }

  function zt(t, e) {
    var i = e.manager;
    return i ? i.get(t) : t;
  }

  function Nt() {
    Ot.apply(this, arguments);
  }

  function Xt() {
    Nt.apply(this, arguments), this.pX = null, this.pY = null;
  }

  function Yt() {
    Nt.apply(this, arguments);
  }

  function Ft() {
    Ot.apply(this, arguments), this._timer = null, this._input = null;
  }

  function Wt() {
    Nt.apply(this, arguments);
  }

  function qt() {
    Nt.apply(this, arguments);
  }

  function kt() {
    Ot.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
  }

  function Ht(t, e) {
    return (e = e || {}).recognizers = y(e.recognizers, Ht.defaults.preset), new Lt(t, e);
  }

  Ot.prototype = {
    defaults: {},
    set: function (t) {
      return o(this.options, t), this.manager && this.manager.touchAction.update(), this;
    },
    recognizeWith: function (t) {
      if (n(t, "recognizeWith", this)) return this;
      var e = this.simultaneous;
      return e[(t = zt(t, this)).id] || (e[t.id] = t).recognizeWith(this), this;
    },
    dropRecognizeWith: function (t) {
      return n(t, "dropRecognizeWith", this) || (t = zt(t, this), delete this.simultaneous[t.id]), this;
    },
    requireFailure: function (t) {
      if (n(t, "requireFailure", this)) return this;
      var e = this.requireFail;
      return -1 === S(e, t = zt(t, this)) && (e.push(t), t.requireFailure(this)), this;
    },
    dropRequireFailure: function (t) {
      if (n(t, "dropRequireFailure", this)) return this;
      t = zt(t, this);
      var e = S(this.requireFail, t);
      return -1 < e && this.requireFail.splice(e, 1), this;
    },
    hasRequireFailures: function () {
      return 0 < this.requireFail.length;
    },
    canRecognizeWith: function (t) {
      return !!this.simultaneous[t.id];
    },
    emit: function (e) {
      var i = this,
          t = this.state;

      function n(t) {
        i.manager.emit(t, e);
      }

      t < 8 && n(i.options.event + Rt(t)), n(i.options.event), e.additionalEvent && n(e.additionalEvent), 8 <= t && n(i.options.event + Rt(t));
    },
    tryEmit: function (t) {
      if (this.canEmit()) return this.emit(t);
      this.state = 32;
    },
    canEmit: function () {
      for (var t = 0; t < this.requireFail.length;) {
        if (!(this.requireFail[t].state & (32 | wt))) return !1;
        t++;
      }

      return !0;
    },
    recognize: function (t) {
      var e = o({}, t);
      if (!T(this.options.enable, [this, e])) return this.reset(), void (this.state = 32);
      56 & this.state && (this.state = wt), this.state = this.process(e), 30 & this.state && this.tryEmit(e);
    },
    process: function (t) {},
    getTouchAction: function () {},
    reset: function () {}
  }, m(Nt, Ot, {
    defaults: {
      pointers: 1
    },
    attrTest: function (t) {
      var e = this.options.pointers;
      return 0 === e || t.pointers.length === e;
    },
    process: function (t) {
      var e = this.state,
          i = t.eventType,
          n = 6 & e,
          r = this.attrTest(t);
      return n && (i & W || !r) ? 16 | e : n || r ? i & F ? 8 | e : 2 & e ? 4 | e : 2 : 32;
    }
  }), m(Xt, Nt, {
    defaults: {
      event: "pan",
      threshold: 10,
      pointers: 1,
      direction: G
    },
    getTouchAction: function () {
      var t = this.options.direction,
          e = [];
      return t & V && e.push(Pt), t & j && e.push(bt), e;
    },
    directionTest: function (t) {
      var e = this.options,
          i = !0,
          n = t.distance,
          r = t.direction,
          s = t.deltaX,
          o = t.deltaY;
      return r & e.direction || (n = e.direction & V ? (r = 0 === s ? q : s < 0 ? k : H, i = s != this.pX, Math.abs(t.deltaX)) : (r = 0 === o ? q : o < 0 ? L : U, i = o != this.pY, Math.abs(t.deltaY))), t.direction = r, i && n > e.threshold && r & e.direction;
    },
    attrTest: function (t) {
      return Nt.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t));
    },
    emit: function (t) {
      this.pX = t.deltaX, this.pY = t.deltaY;
      var e = Mt(t.direction);
      e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
    }
  }), m(Yt, Nt, {
    defaults: {
      event: "pinch",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [St];
    },
    attrTest: function (t) {
      return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state);
    },
    emit: function (t) {
      var e;
      1 !== t.scale && (e = t.scale < 1 ? "in" : "out", t.additionalEvent = this.options.event + e), this._super.emit.call(this, t);
    }
  }), m(Ft, Ot, {
    defaults: {
      event: "press",
      pointers: 1,
      time: 251,
      threshold: 9
    },
    getTouchAction: function () {
      return ["auto"];
    },
    process: function (t) {
      var e = this.options,
          i = t.pointers.length === e.pointers,
          n = t.distance < e.threshold,
          r = t.deltaTime > e.time;
      if (this._input = t, !n || !i || t.eventType & (F | W) && !r) this.reset();else if (t.eventType & Y) this.reset(), this._timer = c(function () {
        this.state = 8, this.tryEmit();
      }, e.time, this);else if (t.eventType & F) return 8;
      return 32;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function (t) {
      8 === this.state && (t && t.eventType & F ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)));
    }
  }), m(Wt, Nt, {
    defaults: {
      event: "rotate",
      threshold: 0,
      pointers: 2
    },
    getTouchAction: function () {
      return [St];
    },
    attrTest: function (t) {
      return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state);
    }
  }), m(qt, Nt, {
    defaults: {
      event: "swipe",
      threshold: 10,
      velocity: .3,
      direction: V | j,
      pointers: 1
    },
    getTouchAction: function () {
      return Xt.prototype.getTouchAction.call(this);
    },
    attrTest: function (t) {
      var e,
          i = this.options.direction;
      return i & (V | j) ? e = t.overallVelocity : i & V ? e = t.overallVelocityX : i & j && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && p(e) > this.options.velocity && t.eventType & F;
    },
    emit: function (t) {
      var e = Mt(t.offsetDirection);
      e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t);
    }
  }), m(kt, Ot, {
    defaults: {
      event: "tap",
      pointers: 1,
      taps: 1,
      interval: 300,
      time: 250,
      threshold: 9,
      posThreshold: 10
    },
    getTouchAction: function () {
      return [Ct];
    },
    process: function (t) {
      var e = this.options,
          i = t.pointers.length === e.pointers,
          n = t.distance < e.threshold,
          r = t.deltaTime < e.time;
      if (this.reset(), t.eventType & Y && 0 === this.count) return this.failTimeout();

      if (n && r && i) {
        if (t.eventType != F) return this.failTimeout();
        var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
            o = !this.pCenter || it(this.pCenter, t.center) < e.posThreshold;
        if (this.pTime = t.timeStamp, this.pCenter = t.center, o && s ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = c(function () {
          this.state = 8, this.tryEmit();
        }, e.interval, this), 2) : 8;
      }

      return 32;
    },
    failTimeout: function () {
      return this._timer = c(function () {
        this.state = 32;
      }, this.options.interval, this), 32;
    },
    reset: function () {
      clearTimeout(this._timer);
    },
    emit: function () {
      8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
    }
  }), Ht.VERSION = "2.0.8", Ht.defaults = {
    domEvents: !1,
    touchAction: _t,
    enable: !0,
    inputTarget: null,
    inputClass: null,
    preset: [[Wt, {
      enable: !1
    }], [Yt, {
      enable: !1
    }, ["rotate"]], [qt, {
      direction: V
    }], [Xt, {
      direction: V
    }, ["swipe"]], [kt], [kt, {
      event: "doubletap",
      taps: 2
    }, ["tap"]], [Ft]],
    cssProps: {
      userSelect: "none",
      touchSelect: "none",
      touchCallout: "none",
      contentZooming: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    }
  };

  function Lt(t, e) {
    var i, n;
    this.options = o({}, Ht.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = (n = (i = this).options.inputClass, new (n || (R ? pt : M ? gt : O ? yt : at))(i, J)), this.touchAction = new xt(this, this.options.touchAction), Ut(this, !0), d(this.options.recognizers, function (t) {
      var e = this.add(new t[0](t[1]));
      t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
    }, this);
  }

  function Ut(i, n) {
    var r,
        s = i.element;
    s.style && (d(i.options.cssProps, function (t, e) {
      r = D(s.style, e), n ? (i.oldCssProps[r] = s.style[r], s.style[r] = t) : s.style[r] = i.oldCssProps[r] || "";
    }), n || (i.oldCssProps = {}));
  }

  Lt.prototype = {
    set: function (t) {
      return o(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this;
    },
    stop: function (t) {
      this.session.stopped = t ? 2 : 1;
    },
    recognize: function (t) {
      var e,
          i = this.session;

      if (!i.stopped) {
        this.touchAction.preventDefaults(t);
        var n = this.recognizers,
            r = i.curRecognizer;
        (!r || r && 8 & r.state) && (r = i.curRecognizer = null);

        for (var s = 0; s < n.length;) e = n[s], 2 === i.stopped || r && e != r && !e.canRecognizeWith(r) ? e.reset() : e.recognize(t), !r && 14 & e.state && (r = i.curRecognizer = e), s++;
      }
    },
    get: function (t) {
      if (t instanceof Ot) return t;

      for (var e = this.recognizers, i = 0; i < e.length; i++) if (e[i].options.event == t) return e[i];

      return null;
    },
    add: function (t) {
      if (n(t, "add", this)) return this;
      var e = this.get(t.options.event);
      return e && this.remove(e), this.recognizers.push(t), (t.manager = this).touchAction.update(), t;
    },
    remove: function (t) {
      return n(t, "remove", this) || !(t = this.get(t)) || -1 !== (i = S(e = this.recognizers, t)) && (e.splice(i, 1), this.touchAction.update()), this;
      var e, i;
    },
    on: function (t, e) {
      if (t !== l && e !== l) {
        var i = this.handlers;
        return d(C(t), function (t) {
          i[t] = i[t] || [], i[t].push(e);
        }), this;
      }
    },
    off: function (t, e) {
      if (t !== l) {
        var i = this.handlers;
        return d(C(t), function (t) {
          e ? i[t] && i[t].splice(S(i[t], e), 1) : delete i[t];
        }), this;
      }
    },
    emit: function (t, e) {
      var i, n, r;
      this.options.domEvents && (i = t, n = e, (r = a.createEvent("Event")).initEvent(i, !0, !0), (r.gesture = n).target.dispatchEvent(r));
      var s = this.handlers[t] && this.handlers[t].slice();

      if (s && s.length) {
        e.type = t, e.preventDefault = function () {
          e.srcEvent.preventDefault();
        };

        for (var o = 0; o < s.length;) s[o](e), o++;
      }
    },
    destroy: function () {
      this.element && Ut(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
    }
  }, o(Ht, {
    INPUT_START: Y,
    INPUT_MOVE: 2,
    INPUT_END: F,
    INPUT_CANCEL: W,
    STATE_POSSIBLE: wt,
    STATE_BEGAN: 2,
    STATE_CHANGED: 4,
    STATE_ENDED: 8,
    STATE_RECOGNIZED: 8,
    STATE_CANCELLED: 16,
    STATE_FAILED: 32,
    DIRECTION_NONE: q,
    DIRECTION_LEFT: k,
    DIRECTION_RIGHT: H,
    DIRECTION_UP: L,
    DIRECTION_DOWN: U,
    DIRECTION_HORIZONTAL: V,
    DIRECTION_VERTICAL: j,
    DIRECTION_ALL: G,
    Manager: Lt,
    Input: $,
    TouchAction: xt,
    TouchInput: gt,
    MouseInput: at,
    PointerEventInput: pt,
    TouchMouseInput: yt,
    SingleTouchInput: dt,
    Recognizer: Ot,
    AttrRecognizer: Nt,
    Tap: kt,
    Pan: Xt,
    Swipe: qt,
    Pinch: Yt,
    Rotate: Wt,
    Press: Ft,
    on: E,
    off: I,
    each: d,
    merge: v,
    extend: r,
    assign: o,
    inherit: m,
    bindFn: g,
    prefixed: D
  }), (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = Ht, "function" == typeof define && define.amd ? define(function () {
    return Ht;
  }) : "undefined" != typeof module && module.exports ? module.exports = Ht : s.Hammer = Ht;
}(window, document);