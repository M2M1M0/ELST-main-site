/**
 * Copyright (c) 2022 The Nuevodevel Team. All rights reserved.
 * vRoll Ads Plugin Video.js 7/8
 * Version 2.5.0
 */
/*eslint no-inner-declarations: "off"*/ import videojs from "video.js";
function vrollInit(e, t) {
  var i,
    r = [],
    n = !1,
    o = !1,
    l = !1,
    s = !1,
    f = !1,
    a = !1,
    d = !1,
    u = !1,
    c = "undefined",
    v = -1,
    p = 0,
    m = 0,
    y = e.$(".vjs-tech");
  videojs.isAd = !1;
  var h,
    g = videojs.dom,
    j = e.el(),
    b = 0.1,
    k = videojs.browser,
    T = null,
    S = null,
    C = [],
    A = null,
    _ = null,
    I = null,
    x = null;
  videojs.vrollplugin = !0;
  function O(e) {
    return e;
  }
  function q(e) {
    return "[object Array]" === Object.prototype.toString.call(e);
  }
  var P = function (e, t) {
      var i = document.createElement(e);
      if (void 0 !== t) if ("" !== t) i.className = t;
      return i;
    },
    E = function (t) {
      return e.localize(t);
    };
  function N() {
    if (e.duration() === 1 / 0) return !0;
    else if ("8" === k.IOS_VERSION && 0 === e.duration()) return !0;
    return !1;
  }
  var M = !0;
  if (!q(t)) {
    var w = t;
    if (w.src)
      if (w.src.length > 5) {
        if (w.offset) {
          if (w.offset.indexOf("%") > -1) if (N()) M = !1;
        } else w.offset = 0;
        if (M) (t = [])[0] = w;
      }
  }
  if (q(t))
    for (var B = 0, H = 0; H < t.length; H++) {
      var L = t[H];
      if (L.src && "undefined" !== L.offset) {
        L.loaded = !1;
        B = 0;
        try {
          B = r[H].offset.indexOf("%");
        } catch (e) {
          O(e);
        }
        if (B > 0 && N()) B = 1;
        else r.push(L);
      }
    }
  e.ready(function () {
    _ = e.el_.querySelector(".vjs-loading-spinner");
    var t = e.el_.querySelector(".vjs-big-play-button");
    S = e.el_.querySelector(".vjs-replay-button");
    if (r.length > 0) {
      i = P("a", "vast-blocker vjs-hidden");
      e.el_.appendChild(i);
      var k = function (e) {
          var t = e.el().querySelector(".vjs-tech"),
            i = {
              ended: e.ended(),
              src: e.currentSrc(),
              currentTime: e.currentTime(),
              type: e.currentType(),
              currentSource: e.currentSource(),
              playing: !e.paused(),
              suppressedTracks: M(e),
            };
          if (i.ended) i.currentTime = e.duration();
          if (t) i.style = t.getAttribute("style");
          return i;
        },
        M = function (e) {
          var t = e.remoteTextTracks ? e.remoteTextTracks() : [];
          if (t && q(t.tracks_)) t = t.tracks_;
          if (!q(t)) t = [];
          var i = [];
          t.forEach(function (e) {
            i.push({ track: e, mode: e.mode });
            e.mode = "disabled";
          });
          return i;
        },
        w = function () {
          I.suppressedTracks.forEach(function (e) {
            e.track.mode = e.mode;
          });
        },
        B = function (e) {
          var t = e.el().querySelector(".vjs-tech");
          if ("style" in I) t.setAttribute("style", I.style || "");
          e.one("contentloadedmetadata", w);
          var i = function () {
            if (N()) H();
            else {
              H();
              e.currentTime(I.currentTime);
            }
          };
          t.poster = "";
          e.src(I.currentSource);
          e.load();
          w();
          i();
        },
        H = function () {
          var t = e.play();
          if (void 0 !== t)
            t.then(function () {}).catch(function () {
              e.muted(!0);
              e.play();
            });
        };
      e.vroll.reset = function () {
        a = !1;
        s = !1;
        g.removeClass(j, "vjs-ad-playing");
        e.one("playing", function () {
          for (var e = 0; e < r.length; e++) r[e].loaded = !1;
        });
      };
      if (0 === parseInt(r[0].offset, 10))
        if (e.offline) e.isPreroll = !1;
        else {
          e.isPreroll = !0;
          if (!0 !== u) {
            u = !0;
            m = e.volume();
            e.volume(0);
          }
          e.one("play", function () {
            if (e.isPreroll) {
              var t = e.el_.querySelector(".vjs-poster");
              T = P("div", "vjs-black-poster");
              j.insertBefore(T, t.nextSibling);
              e.isPreroll = !1;
            }
          });
        }
      e.on("loadedmetadata", function () {
        if (!e.isOffline) {
          if (!a) {
            a = !0;
            if (!0 !== o) var q = e.duration();
            if (r.length > 0 && !0 !== f) {
              f = !0;
              for (var M = 0; M < r.length; M++) {
                r[M].method = "";
                if (!o) {
                  var w = 0;
                  try {
                    w = r[M].offset.indexOf("%", 0);
                  } catch (e) {
                    O(e);
                  }
                  if (w > 0) {
                    var H = parseInt(r[M].offset, 10);
                    if (100 === H || "end" === r[M].offset) {
                      r[M].method = "postroll";
                      r[M].offset = "end";
                      C.push(r[M]);
                    } else r[M].offset = q * (H / 100);
                  } else r[M].offset = parseInt(r[M].offset, 10);
                }
              }
            }
            if (r.length > 0) {
              e.on("timeupdate", function () {
                var t = videojs.dom.hasClass(j, "vjs-has-started"),
                  i = N();
                if (t && !0 !== l && !0 !== e.isOffline && !0 !== i)
                  G(e.currentTime());
              });
              var L = function () {
                if (l) {
                  clearTimeout(p);
                  d = !1;
                } else {
                  G((b += 0.5));
                  p = setTimeout(L, 500);
                }
              };
              if (N()) {
                e.on("pause", function () {
                  clearTimeout(p);
                  d = !1;
                });
                e.on("playing", function () {
                  if (
                    videojs.dom.hasClass(j, "vjs-has-started") &&
                    !0 !== n &&
                    r.length > 0 &&
                    !0 !== e.isOffline &&
                    !0 !== d
                  ) {
                    d = !0;
                    p = setTimeout(L, 500);
                  }
                });
              }
              var z = function () {
                  g.addClass(S, "vjs-hidden");
                },
                D = function (t) {
                  if (null !== C) {
                    if (!I) I = k(e);
                    e.off("ended", D);
                    _.setAttribute("style", "display:none !important");
                    for (var i = 0; i < C.length; i++)
                      if (!0 !== C[i].loaded) {
                        if (!I) I = k(e);
                        R();
                        return;
                      }
                  }
                  C = null;
                  e.off("ended", D);
                  setTimeout(function () {
                    g.removeClass(S, "vjs-hidden");
                  }, 500);
                };
              e.on("ended", D);
              e.one("play", z);
              var R = function () {
                for (var t = !1, i = 0; i < C.length; i++)
                  if (!0 !== C[i].loaded && !0 !== t) {
                    $(C[i]);
                    t = !0;
                    return;
                  }
                if (!0 !== t) {
                  V();
                  B(e, I);
                }
              };
              function V() {
                e.off("timeupdate", Z);
                e.off("error", Y);
                e.off("error", Y);
                e.off("ended", X);
                n = !1;
                s = !1;
                l = !1;
                U(".vast-blocker");
                U(".vast-skip-button");
                setTimeout(function () {
                  _.removeAttribute("style");
                }, 500);
                g.addClass(j, "vjs-has-started");
                y.poster = "";
                g.removeClass(j, "vjs-ad-playing");
                videojs.isAd = !1;
              }
              var $ = function (t) {
                  n = !0;
                  t.loaded = !0;
                  c = t;
                  e.off("ended", X);
                  e.off("ended", D);
                  l = !0;
                  videojs.isAd = !0;
                  g.addClass(j, "vjs-ad-playing");
                  s = !0;
                  e.on("error", Y);
                  var i = { src: t.src, type: t.type };
                  e.src(i);
                  _.setAttribute("style", "display:none !important");
                  e.play();
                  e.one("play", function () {
                    ee();
                  });
                },
                F = function (t, i) {
                  n = !0;
                  t.loaded = !0;
                  c = t;
                  s = !0;
                  var r = { src: t.src, type: t.type };
                  if (!I) I = k(e);
                  _.setAttribute("style", "display:none !important");
                  e.on("error", Y);
                  e.src(r);
                  if (!e.paused()) {
                    ee();
                    var o = e.play();
                    if (void 0 !== o)
                      o.then(function () {}).catch(function (e) {});
                  } else {
                    if (e.ended()) e.play();
                    e.one("play", function () {
                      ee();
                    });
                  }
                };
              if (e.isPreroll) {
                if (!0 !== u) {
                  u = !0;
                  m = e.volume();
                  e.volume(0);
                }
                if (!0 !== N()) F(r[0]);
              }
              var G = function (t) {
                if (!n && !l) {
                  var i = t;
                  if (null == x) x = e.muted();
                  if (i > 0)
                    e.el_.querySelector(".vjs-poster").removeAttribute("style");
                  for (var o = 0; o < r.length; o++) {
                    var s = r[o];
                    if (i >= s.offset)
                      if (!0 !== n && !0 !== r[o].loaded) {
                        videojs.log.level("off");
                        F(s);
                      }
                  }
                }
              };
              i.onclick = function () {
                e.trigger("vroll", { id: c.id, action: "clicked" });
              };
              var J = function () {
                return e.paused();
              };
              function K() {
                U(".vast-skip-button");
                A = null;
                v = -1;
                var t = c.offset;
                c.loaded = !0;
                e.isPreroll = !1;
                var i = !1;
                g.addClass(j, "vjs-has-started");
                for (var o = 0; o < r.length; o++) {
                  if (r[o].offset === t && !0 !== r[o].loaded) {
                    e.off("timeupdate", Z);
                    e.off("error", Y);
                    n = !0;
                    l = !0;
                    r[o].loaded = !0;
                    videojs.isAd = !0;
                    g.addClass(j, "vjs-ad-playing");
                    s = !0;
                    F(r[o], !0);
                    i = !0;
                  }
                  if (i) break;
                }
                if (!0 !== i) {
                  V();
                  B(e, I);
                  I = null;
                }
              }
              function Q(e) {
                e = e > 0 ? e : 0;
                if (v > -1) {
                  var t = Math.ceil(v - e);
                  g.removeClass(A, "vjs-hidden");
                  if (t > 0) {
                    var i = E("Skip Ad in %%TIME%%");
                    h.innerHTML = i.replace("%%TIME%%", t);
                  } else if ("vast-skip-button enabled" !== A.className) {
                    A.className = "vast-skip-button enabled";
                    A.innerHTML = E("Skip Ad");
                  }
                }
              }
              function U(t) {
                var i = e.el_.querySelectorAll(t);
                if (i)
                  for (var r = 0; r < i.length; r++)
                    i[r].parentNode.removeChild(i[r]);
              }
              function W() {
                U(".vast-skip-button");
                (A = P("div", "vast-skip-button vjs-hidden")).id =
                  "adSkipButton";
                A.ariaDisabled = "false";
                A.tabIndex = "0";
                h = P("p", "vast-skip-button-text");
                A.appendChild(h);
                e.el_.appendChild(A);
                A.onclick = function (e) {
                  t(e);
                };
                function t(t) {
                  t.stopPropagation();
                  if ((" " + A.className + " ").indexOf(" enabled ") >= 0) {
                    e.trigger("vroll", { id: c.id, action: "skipped" });
                    if ("postroll" === c.method) R();
                    else K();
                  }
                }
              }
              function X() {
                if (n) {
                  e.trigger("vroll", { id: c.id, action: "completed" });
                  if ("postroll" === c.method) R();
                  else K();
                }
              }
              function Y() {
                if (n) {
                  e.trigger("vroll", { id: c.id, action: "error" });
                  if ("postroll" === c.method) R();
                  else K();
                  s = !1;
                }
              }
              function Z() {
                if (n) {
                  if (!J()) Q(e.currentTime(), e.duration());
                }
              }
              function ee() {
                e.one("ended", X);
                e.on("timeupdate", Z);
                if (c.offset > 0) g.addClass(t, "vjs-hidden");
                if (c.skip >= 0) v = parseInt(c.skip, 10);
                else v = -1;
                if (v > -1) W();
                g.addClass(j, "vjs-ad-playing");
                g.addClass(t, "vjs-hidden");
                if (T) {
                  j.removeChild(T);
                  T = null;
                  e.volume(m);
                }
                e.el_.querySelector(".vjs-poster").removeAttribute("style");
                i.className = "vast-blocker";
                if (void 0 !== c.href) {
                  i.removeAttribute("style");
                  i.href = c.href;
                  i.target = "_blank";
                } else i.style.pointerEvents = "none";
                l = !0;
                if (n && s) {
                  e.trigger("vroll", { id: c.id, action: "start" });
                  s = !1;
                }
              }
            }
          }
        } else a = !1;
      });
    }
  });
}
var vroll = function (e) {
  this.ready(function () {
    vrollInit(this, e);
  });
};
if ("undefined" !== typeof window) {
  (videojs.registerPlugin || videojs.plugin)("vroll", vroll);
}
export default vroll;
