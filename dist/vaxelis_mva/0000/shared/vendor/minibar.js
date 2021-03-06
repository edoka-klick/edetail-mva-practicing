/* dist/minibar.js v0.5.1 Fri Feb 19 2021 14:52:59 GMT-0500 (Eastern Standard Time) */

/*
MiniBar 0.5.1
http://mobius.ovh/

Released under the MIT license
*/
var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.arrayIteratorImpl = function (w) {
  var n = 0;
  return function () {
    return n < w.length ? {
      done: !1,
      value: w[n++]
    } : {
      done: !0
    };
  };
};

$jscomp.arrayIterator = function (w) {
  return {
    next: $jscomp.arrayIteratorImpl(w)
  };
};

$jscomp.makeIterator = function (w) {
  var n = "undefined" != typeof Symbol && Symbol.iterator && w[Symbol.iterator];
  return n ? n.call(w) : $jscomp.arrayIterator(w);
};

(function (w) {
  var n = window,
      p = document,
      H = p.body,
      J = {
    x: "left",
    y: "top"
  },
      x = {
    x: "width",
    y: "height"
  },
      u = {
    x: "scrollLeft",
    y: "scrollTop"
  },
      z = {
    x: "scrollWidth",
    y: "scrollHeight"
  },
      K = {
    x: "offsetWidth",
    y: "offsetHeight"
  },
      E = {
    x: "pageX",
    y: "pageY"
  },
      C = function (a, b) {
    for (var c = Object(a), d = 1; d < arguments.length; d++) {
      var f = arguments[d];
      if (null != f) for (var g in f) Object.prototype.hasOwnProperty.call(f, g) && (c[g] = f[g]);
    }

    return c;
  },
      e = {
    css: function (a, b) {
      var c = a && a.style,
          d = "[object Object]" === Object.prototype.toString.call(b);

      if (c) {
        if (!b) return n.getComputedStyle(a);
        d && y(b, function (f, g) {
          f in c || (f = "-webkit-" + f);
          c[f] = g + ("string" == typeof g ? "" : "opacity" === f ? "" : "px");
        });
      }
    },
    rect: function (a) {
      a = a.getBoundingClientRect();
      var b = p.documentElement || H.parentNode || H,
          c = void 0 !== n.pageXOffset ? n.pageXOffset : b.scrollLeft;
      b = void 0 !== n.pageYOffset ? n.pageYOffset : b.scrollTop;
      return {
        x: a.left + c,
        y: a.top + b,
        x2: a.left + a.width + c,
        y2: a.top + a.height + b,
        height: Math.round(a.height),
        width: Math.round(a.width)
      };
    },
    classList: {
      contains: function (a, b) {
        if (a) return a.classList ? a.classList.contains(b) : !!a.className && !!a.className.match(new RegExp("(\\s|^)" + b + "(\\s|$)"));
      },
      add: function (a, b) {
        e.classList.contains(a, b) || (a.classList ? a.classList.add(b) : a.className = a.className.trim() + " " + b);
      },
      remove: function (a, b) {
        e.classList.contains(a, b) && (a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\s)" + b.split(" ").join("|") + "(\\s|$)", "gi"), " "));
      },
      toggle: function (a, b, c) {
        (c = this.contains(a, b) ? !0 !== c && "remove" : !1 !== c && "add") && this[c](a, b);
      }
    },
    on: function (a, b, c) {
      a.addEventListener(b, c, !1);
    },
    off: function (a, b, c) {
      a.removeEventListener(b, c);
    },
    isCollection: function (a) {
      return Array.isArray(a) || a instanceof HTMLCollection || a instanceof NodeList;
    },
    scrollWidth: function () {
      var a = 0,
          b = p.createElement("div");
      return b.style.cssText = "width: 100; height: 100; overflow: scroll; position: absolute; top: -9999;", p.body.appendChild(b), a = b.offsetWidth - b.clientWidth, p.body.removeChild(b), a;
    }
  },
      y = function (a, b, c) {
    if ("[object Object]" === Object.prototype.toString.call(a)) for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, d, a[d]);else {
      d = 0;

      for (var f = a.length; d < f; d++) b.call(c, d, a[d]);
    }
  },
      L = function (a, b, c) {
    var d;
    return function () {
      var f = this,
          g = arguments,
          h = c && !d;
      clearTimeout(d);
      d = setTimeout(function () {
        d = null;
        c || a.apply(f, g);
      }, b);
      h && a.apply(f, g);
    };
  },
      D = n.requestAnimationFrame || function () {
    var a = 0;
    return n.webkitRequestAnimationFrame || n.mozRequestAnimationFrame || function (b) {
      var c,
          d = new Date().getTime();
      return c = Math.max(0, 16 - (d - a)), a = d + c, setTimeout(function () {
        b(d + c);
      }, c);
    };
  }(),
      A;

  (A = n.cancelAnimationFrame) || (clearTimeout(void 0), A = void 0);
  var F = A;

  A = function (a, b) {
    this.container = "string" === typeof a ? p.querySelector(a) : a;
    this.config = {
      barType: "default",
      minBarSize: 10,
      alwaysShowBars: !1,
      horizontalMouseScroll: !1,
      scrollX: !0,
      scrollY: !0,
      navButtons: !1,
      scrollAmount: 10,
      mutationObserver: {
        attributes: !1,
        childList: !0,
        subtree: !0
      },
      onInit: function () {},
      onUpdate: function () {},
      onStart: function () {},
      onScroll: function () {},
      onEnd: function () {},
      classes: {
        container: "mb-container",
        content: "mb-content",
        track: "mb-track",
        bar: "mb-bar",
        visible: "mb-visible",
        progress: "mb-progress",
        hover: "mb-hover",
        scrolling: "mb-scrolling",
        textarea: "mb-textarea",
        wrapper: "mb-wrapper",
        nav: "mb-nav",
        btn: "mb-button",
        btns: "mb-buttons",
        increase: "mb-increase",
        decrease: "mb-decrease",
        item: "mb-item",
        itemVisible: "mb-item-visible",
        itemPartial: "mb-item-partial",
        itemHidden: "mb-item-hidden"
      }
    };
    b ? this.config = C({}, this.config, b) : n.MiniBarOptions && (this.config = C({}, this.config, n.MiniBarOptions));
    this.css = n.getComputedStyle(this.container);
    this.size = e.scrollWidth();
    this.textarea = "textarea" === this.container.nodeName.toLowerCase();
    this.bars = {
      x: {},
      y: {}
    };
    this.tracks = {
      x: {},
      y: {}
    };
    this.lastY = this.lastX = 0;
    this.scrollDirection = {
      x: 0,
      y: 0
    };
    this.events = {};

    for (var c = "scroll mouseenter mousedown mousemove mouseup wheel".split(" "), d = 0; d < c.length; d++) this.events[c[d]] = this["_" + c[d]].bind(this);

    this.events.update = this.update.bind(this);
    this.events.debounce = L(this.events.update, 50);
    this.init();
  };

  var r = A.prototype;

  r.init = function () {
    var a = this,
        b = a.config,
        c = a.events;

    if (!a.initialised) {
      if (a.textarea) a.content = a.container, a.container = p.createElement("div"), e.classList.add(a.container, b.classes.textarea), a.wrapper = p.createElement("div"), e.classList.add(a.wrapper, b.classes.wrapper), a.container.appendChild(a.wrapper), a.content.parentNode.insertBefore(a.container, a.content), a.content.addEventListener("input", function (h) {
        a.update();
      });else for (a.content = p.createElement("div"); a.container.firstChild;) a.content.appendChild(a.container.firstChild);
      e.classList.add(a.container, b.classes.container);
      e.classList.add(a.content, b.classes.content);
      b.alwaysShowBars && e.classList.add(a.container, b.classes.visible);
      y(a.tracks, function (h, l) {
        a.bars[h].node = p.createElement("div");
        l.node = p.createElement("div");
        e.classList.add(l.node, b.classes.track);
        e.classList.add(l.node, b.classes.track + "-" + h);
        e.classList.add(a.bars[h].node, b.classes.bar);
        l.node.appendChild(a.bars[h].node);

        if (b.navButtons) {
          var k = p.createElement("button"),
              m = p.createElement("button"),
              t = p.createElement("div"),
              q = b.scrollAmount;
          k.className = b.classes.btn + " " + b.classes.decrease;
          m.className = b.classes.btn + " " + b.classes.increase;
          t.className = b.classes.btns + " " + b.classes.btns + "-" + h;
          t.appendChild(k);
          t.appendChild(l.node);
          t.appendChild(m);
          a.container.appendChild(t);
          e.classList.add(a.container, b.classes.nav);
          e.on(t, "mousedown", function (v) {
            var B = v.target;
            F(a.frame);

            if (B === m || B === k) {
              var G = a.content[u[h]],
                  I = function (M) {
                switch (a.content[u[h]] = G, B) {
                  case k:
                    G -= q;
                    break;

                  case m:
                    G += q;
                }

                a.frame = D(I);
              };

              I();
            }
          });
          e.on(t, "mouseup", function (v) {
            v = v.target;
            var B = 5 * q;
            F(a.frame);
            v !== m && v !== k || a.scrollBy(v === k ? -B : B, h);
          });
        } else a.container.appendChild(l.node);

        "progress" === b.barType && e.classList.add(l.node, b.classes.progress);
        e.on(l.node, "mousedown", c.mousedown);
        e.on(l.node, "mouseenter", function (v) {
          e.classList.add(a.container, b.classes.hover + "-" + h);
        });
        e.on(l.node, "mouseleave", function (v) {
          a.down || e.classList.remove(a.container, b.classes.hover + "-" + h);
        });
      });
      a.textarea ? a.wrapper.appendChild(a.content) : a.container.appendChild(a.content);
      "static" === a.css.position && (a.manualPosition = !0, a.container.style.position = "relative");

      if (b.observableItems) {
        var d = this.getItems();

        if (d.length && "IntersectionObserver" in window) {
          a.items = d;

          for (var f = [], g = 0; 1 > g; g += .01) f.push(g);

          g = function (h, l) {
            h.forEach(function (k) {
              var m = k.target,
                  t = k.intersectionRatio;
              k = k.isIntersecting;
              var q = !k && 0 >= t,
                  v = k && 0 < t && 1 > t;
              e.classList.toggle(m, b.classes.itemVisible, k && 1 <= t);
              e.classList.toggle(m, b.classes.itemPartial, v);
              e.classList.toggle(m, b.classes.itemHidden, q);
            });
          };

          this.intersectionObserver = new IntersectionObserver(g, {
            root: null,
            rootMargin: "0px",
            threshold: f
          });
          y(d, function (h, l) {
            a.intersectionObserver.observe(l);
          });
        }
      }

      a.update();
      e.on(a.content, "scroll", c.scroll);
      e.on(a.container, "mouseenter", c.mouseenter);
      if (b.horizontalMouseScroll) e.on(a.content, "wheel", c.wheel);
      e.on(n, "resize", c.debounce);
      e.on(p, "DOMContentLoaded", c.update);
      e.on(n, "load", c.update);
      "MutationObserver" in window && (g = function (h, l) {
        if (a.intersectionObserver) for (var k = $jscomp.makeIterator(h), m = k.next(); !m.done; m = k.next()) if (m = m.value, "childList" == m.type) {
          for (var t = $jscomp.makeIterator(m.addedNodes), q = t.next(); !q.done; q = t.next()) q = q.value, a.intersectionObserver.observe(q);

          m = $jscomp.makeIterator(m.removedNodes);

          for (q = m.next(); !q.done; q = m.next()) q = q.value, a.intersectionObserver.unobserve(q);
        }
        a.intersectionObserver && (a.items = a.getItems());
        a.update();
      }, this.mutationObserver = new MutationObserver(g), this.mutationObserver.observe(this.content, this.config.mutationObserver));
      a.initialised = !0;
      setTimeout(function () {
        a.config.onInit.call(a, a.getData());
      }, 10);
    }
  };

  r.getItems = function () {
    var a = this.config,
        b;
    "string" === typeof a.observableItems && (b = this.content.querySelectorAll(a.observableItems));
    if (a.observableItems instanceof HTMLCollection || a.observableItems instanceof NodeList) b = [].slice.call(a.observableItems);
    return b;
  };

  r.getData = function (a) {
    a = this.content;
    return {
      scrollTop: a.scrollTop,
      scrollLeft: a.scrollLeft,
      scrollHeight: a.scrollHeight,
      scrollWidth: a.scrollWidth,
      offsetWidth: a.offsetWidth,
      offsetHeight: a.offsetHeight,
      containerRect: this.rect,
      barSize: this.size
    };
  };

  r.scrollTo = function (a, b) {
    void 0 === b && (b = "y");
    var c = this.getData(),
        d;
    "string" === typeof a ? "start" === a ? d = -c[u[b]] : "end" === a && (d = c[z[b]] - c[K[b]] - c[u[b]]) : d = a - c[u[b]];
    this.scrollBy(d, b);
  };

  r.scrollBy = function (a, b, c, d) {
    void 0 === b && (b = "y");
    if (0 === c) this.content[u[b]] += a;else {
      void 0 === c && (c = 250);

      d = d || function (k, m, t, q) {
        k /= q;
        return -t * k * (k - 2) + m;
      };

      var f = this,
          g = Date.now(),
          h = f.content[u[b]],
          l = function () {
        var k = Date.now() - g;
        k > c ? (F(f.frame), f.content[u[b]] = Math.ceil(h + a)) : (f.content[u[b]] = Math.ceil(d(k, h, a, c)), f.frame = D(l));
      };

      f.frame = l();
    }
  };

  r.scrollToTop = function () {
    this.scrollTo(0);
  };

  r.scrollToBottom = function () {
    var a = this.getData();
    this.scrollTo(a.scrollHeight - a.offsetHeight);
  };

  r.update = function () {
    var a = this,
        b = a.config,
        c = a.content,
        d = a.size;
    a.rect = e.rect(a.container);
    a.scrollTop = c.scrollTop;
    a.scrollLeft = c.scrollLeft;
    a.scrollHeight = c.scrollHeight;
    a.scrollWidth = c.scrollWidth;
    a.offsetWidth = c.offsetWidth;
    a.offsetHeight = c.offsetHeight;
    a.clientWidth = c.clientWidth;
    a.clientHeight = c.clientHeight;
    var f = a.scrollWidth > a.offsetWidth && !a.textarea,
        g = a.scrollHeight > a.offsetHeight;
    e.classList.toggle(a.container, "mb-scroll-x", f && b.scrollX && !b.hideBars);
    e.classList.toggle(a.container, "mb-scroll-y", g && b.scrollY && !b.hideBars);
    e.css(c, {
      overflowX: f ? "auto" : "",
      overflowY: g ? "auto" : "",
      marginBottom: f ? -d : "",
      paddingBottom: f ? d : "",
      marginRight: g ? -d : "",
      paddingRight: g && !b.hideBars ? d : ""
    });
    a.scrollX = f;
    a.scrollY = g;
    y(a.tracks, function (h, l) {
      C(l, e.rect(l.node));
      C(a.bars[h], e.rect(a.bars[h].node));
    });
    a.updateBars();
    a.wrapperPadding = 0;
    a.textarea && (b = e.css(a.wrapper), a.wrapperPadding = parseInt(b.paddingTop, 10) + parseInt(b.paddingBottom, 10), !a.down && a.content.selectionStart >= a.content.value.length && (a.content.scrollTop = a.scrollToBottom()));
    this.config.onUpdate.call(this, this.getData());
  };

  r.updateBar = function (a) {
    var b = this,
        c = {},
        d = b.config,
        f = b.tracks[a][x[a]],
        g = b.rect[x[a]] - b.wrapperPadding,
        h = f / b[z[a]],
        l = b.content[u[a]] / (b[z[a]] - g);
    "progress" === d.barType ? c[x[a]] = Math.floor(f * l) : (c[x[a]] = Math.max(Math.floor(h * g), d.minBarSize), c[J[a]] = Math.floor((f - c[x[a]]) * l));
    D(function () {
      e.css(b.bars[a].node, c);
    });
  };

  r.updateBars = function () {
    y(this.bars, function (a, b) {
      this.updateBar(a);
    }, this);
  };

  r.destroy = function () {
    var a = this.config,
        b = this.container;

    if (this.initialised) {
      e.off(b, "mouseenter", this.events.mouseenter);
      e.off(n, "resize", this.events.debounce);
      e.classList.remove(b, a.classes.visible);
      e.classList.remove(b, a.classes.container);
      e.classList.remove(b, a.classes.nav);

      for (y(this.tracks, function (c, d) {
        b.removeChild(a.navButtons ? d.node.parentNode : d.node);
        e.classList.remove(b, "mb-scroll-" + c);
      }); this.content.firstChild;) b.appendChild(this.content.firstChild);

      b.removeChild(this.content);
      this.manualPosition && (b.style.position = "");
      this.bars = {
        x: {},
        y: {}
      };
      this.tracks = {
        x: {},
        y: {}
      };
      this.content = null;
      this.mutationObserver && (this.mutationObserver.disconnect(), this.mutationObserver = !1);
      a.observableItems && (this.intersectionObserver && (this.intersectionObserver.disconnect(), this.intersectionObserver = !1), y(this.items, function (c, d) {
        var f = d.node || d;
        e.classList.remove(f, a.classes.item);
        e.classList.remove(f, a.classes.itemVisible);
        e.classList.remove(f, a.classes.itemPartial);
        e.classList.remove(f, a.classes.itemHidden);
      }));
      this.initialised = !1;
    }
  };

  r._scroll = function (a) {
    a = this.getData(!0);
    a.scrollLeft > this.lastX ? this.scrollDirection.x = 1 : a.scrollLeft < this.lastX && (this.scrollDirection.x = -1);
    a.scrollTop > this.lastY ? this.scrollDirection.y = 1 : a.scrollTop < this.lastY && (this.scrollDirection.y = -1);
    this.updateBars();
    this.config.onScroll.call(this, a);
    this.lastX = a.scrollLeft;
    this.lastY = a.scrollTop;
  };

  r._wheel = function (a) {
    a.preventDefault();
    this.scrollBy(100 * a.deltaY, "x");
  };

  r._mouseenter = function (a) {
    this.updateBars();
  };

  r._mousedown = function (a) {
    a.preventDefault();
    var b = this.config,
        c = a.target === this["progress" === b.barType ? "tracks" : "bars"].x.node ? "x" : "y";
    if (e.classList.contains(a.target, "mb-track")) return c = a.target === this.tracks.x.node ? "x" : "y", b = this.tracks[c], this.scrollTo((a[E[c]] - b[c]) / b[x[c]] * (this.content[z[c]] - this.rect[x[c]]), c);
    this.down = !0;
    this.currentAxis = c;
    this.update();
    e.classList.add(this.container, b.classes.visible);
    e.classList.add(this.container, b.classes.scrolling + "-" + c);
    "progress" === b.barType ? (this.origin = {
      x: a.pageX - this.tracks[c].x,
      y: a.pageY - this.tracks[c].y
    }, this._mousemove(a)) : this.origin = {
      x: a.pageX - this.bars[c].x,
      y: a.pageY - this.bars[c].y
    };
    e.on(p, "mousemove", this.events.mousemove);
    e.on(p, "mouseup", this.events.mouseup);
  };

  r._mousemove = function (a) {
    a.preventDefault();
    var b = this,
        c = this.origin,
        d = this.currentAxis,
        f = b.tracks[d],
        g = "progress" === b.config.barType;
    a = (g ? a[E[d]] - f[d] : a[E[d]] - c[d] - f[d]) / f[x[d]];
    var h = g ? a * (b.content[z[d]] - b.rect[x[d]]) : a * b[z[d]];
    D(function () {
      b.content[u[d]] = h;
    });
  };

  r._mouseup = function (a) {
    var b = this.config,
        c = this.events;
    e.classList.toggle(this.container, b.classes.visible, b.alwaysShowBars);
    e.classList.remove(this.container, b.classes.scrolling + "-" + this.currentAxis);
    e.classList.contains(a.target, b.classes.bar) || (e.classList.remove(this.container, b.classes.hover + "-x"), e.classList.remove(this.container, b.classes.hover + "-y"));
    this.currentAxis = null;
    this.down = !1;
    e.off(p, "mousemove", c.mousemove);
    e.off(p, "mouseup", c.mouseup);
  };

  w.MiniBar = A;
})(this);