/**
 * Copyright (c) 2023 The Nuevodevel Team. All rights reserved.
 * VTT Thumbnails plugin for video.js
 * Version 2.7.0
 */
import videojs from "video.js";
const defaults = {
    align: "vertical",
    timeTooltip: !0,
    width: 160,
    height: 90,
    basePath: "",
    src: "",
    responsive: !1,
    mediaqueries: {
      tiny: 0.5,
      small: 0.75,
      medium: 1,
      large: 1.25,
      xlarge: 1.5,
    },
  },
  onPlayerReady = (e, t) => {
    defaults.basePath = "";
    var i, s, r, o, n, a, d, l, h, u, c, v, f, m;
    if (t) {
      if (t.basePath) defaults.basePath = t.basePath;
      if (t.width && t.height) {
        defaults.width = t.width;
        defaults.height = t.height;
      }
      if (t.src)
        e.on("ready", function () {
          e.trigger("medialoaded", { xml: t.src });
        });
    }
    r = t;
    function p(e) {
      var t, i, s;
      if (-1 === (i = e.indexOf("#")))
        return { src: e, w: 0, h: 0, x: 0, y: 0 };
      t = e.substring(0, i);
      if ("xywh=" !== (s = e.substring(i + 1)).substring(0, 5))
        return { src: defaults.basePath + t, w: 0, h: 0, x: 0, y: 0 };
      var r = s.substring(5).split(",");
      return {
        src: defaults.basePath + t,
        w: parseInt(r[2], 10),
        h: parseInt(r[3], 10),
        x: parseInt(r[0], 10),
        y: parseInt(r[1], 10),
      };
    }
    function g(e) {
      const t = e.split("."),
        i = t[0].split(":");
      return {
        milliseconds: parseInt(t[1], 10) || 0,
        seconds: parseInt(i.pop(), 10) || 0,
        minutes: parseInt(i.pop(), 10) || 0,
        hours: parseInt(i.pop(), 10) || 0,
      };
    }
    function y(e) {
      const t = g(e);
      return parseInt(
        3600 * t.hours + 60 * t.minutes + t.seconds + t.milliseconds / 1e3,
        10
      );
    }
    function w(e) {
      fetch(e)
        .then((e) => e.text())
        .then((e) => {
          if (e.length > 0) {
            var t = j(e);
            if (t.length > 0) {
              m = t;
              b();
            }
          }
        });
    }
    function j(e) {
      var t = [];
      e.split(/[\r\n][\r\n]/i).forEach(function (e) {
        if (
          e.match(
            /([0-9]{2}:)?([0-9]{2}:)?[0-9]{2}(.[0-9]{3})?( ?--> ?)([0-9]{2}:)?([0-9]{2}:)?[0-9]{2}(.[0-9]{3})?[\r\n]{1}.*/gi
          )
        ) {
          const i = e.split(/[\r\n]/i),
            s = i[0].split(/ ?--> ?/i),
            r = s[0],
            o = s[1],
            n = i[1];
          t.push({ startTime: y(r), endTime: y(o), text: n });
        }
      });
      return t;
    }
    e.on("medialoaded", function (t, s) {
      m = [];
      d = e.controlBar.progressControl;
      (l = e.el_.querySelector(".vjs-progress-holder")).removeEventListener(
        "touchstart",
        _
      );
      l.removeEventListener("mousemove", u);
      l.removeEventListener("mouseleave", v);
      l.removeEventListener("mousedown", S);
      e.sprite = !1;
      var r = document.querySelector(".vtt_canvas");
      if (r) r.parentNode.removeChild(r);
      var o = e.el_.querySelector(".vjs-thumb-tooltip");
      if (o) o.parentNode.removeChild(o);
      var n = document.querySelector(".vjs-thumb-image");
      if (n) n.parentNode.removeChild(n);
      var a = e.el_.querySelector(".vjs-thumbnail-holder");
      if (a) a.parentNode.removeChild(a);
      if (s && s.xml) w(s.xml);
      else {
        d = e.controlBar.progressControl;
        l = e.el_.querySelector(".vjs-progress-holder");
        var h = e.textTracks().length;
        if (0 === h) {
          if (i) videojs.dom.addClass("div", "vjs-hidden");
          return;
        }
        for (var c = !1, p = 0; p < h; ) {
          if ("metadata" === e.textTracks()[p].kind) {
            if (void 0 === (f = e.textTracks()[p]).src) return;
            if (f.src) {
              w(f.src);
              return;
            }
            f.mode = "hidden";
            c = !0;
            (f = e.textTracks()[p]).mode = "showing";
            if (null == f.cues) {
              f.mode = "hidden";
              return;
            }
            var g = f && f.cues.length;
            break;
          }
          p++;
        }
        if (!0 !== c) {
          if (i) videojs.dom.addClass("div", "vjs-hidden");
          return;
        }
        if ((g = (f = e.textTracks()[p]) && f.cues.length) < 1) return;
        p = 0;
        e.sprite = !0;
        for (; p < g; ) p++;
        m = f && f.cues;
        b();
      }
    });
    function b() {
      (i = document.createElement("div")).className = "vjs-thumbnail-holder";
      (o = document.createElement("canvas")).className = "vtt_canvas";
      o.style.position = "absolute";
      o.style.left = "0";
      o.style.top = "0";
      i.appendChild(o);
      (c = document.createElement("div")).className = "vjs-thumb-tooltip";
      (s = document.createElement("img")).className = "vjs-thumb-image";
      s.style.visibility = "hidden";
      s.style.left = "-500px";
      s.style.top = "-500px";
      document.body.appendChild(s);
      i.appendChild(c);
      var t = p(m[0].text),
        r = new Image();
      if (t.src) r.src = t.src;
      d.el().appendChild(i);
      if (e.shadowSlide) {
        if (!e.el_.querySelector(".vjs-thumb-poster")) {
          (a = document.createElement("div")).className = "vjs-thumb-poster";
          n = document.createElement("canvas");
          a.appendChild(n);
          e.el_.insertBefore(a, e.el_.querySelector(".vjs-poster"));
        }
      }
      h = e.duration();
      e.on("durationchange", function (t) {
        h = e.duration();
      });
      e.on("loadedmetadata", function (t) {
        h = e.duration();
      });
      var f = d.el_
        .querySelector(".vjs-play-progress")
        .querySelector(".vjs-time-tooltip");
      if (f) videojs.dom.addClass(f, "vjs-abs-hidden");
      var g = d.el().querySelector(".vjs-mouse-display");
      if (g) g.style.opacity = 0;
      var y = !1,
        w = Object.defineProperty({}, "passive", {
          get: function () {
            y = !0;
            return !0;
          },
        });
      window.addEventListener("testPassive", null, w);
      window.removeEventListener("testPassive", null, w);
      l.addEventListener("mousemove", u);
      l.addEventListener("mouseleave", v);
      l.addEventListener("mousedown", S);
      l.addEventListener("touchstart", _, y ? { passive: !1 } : !1);
    }
    function x(e, t) {
      e = e < 0 ? 0 : e;
      let i = Math.floor(e % 60),
        s = Math.floor((e / 60) % 60),
        r = Math.floor(e / 3600);
      const o = Math.floor((t / 60) % 60),
        n = Math.floor(t / 3600);
      if (isNaN(e) || e === 1 / 0) r = s = i = "-";
      return (
        (r = r > 0 || n > 0 ? r + ":" : "") +
        (s = ((r || o >= 10) && s < 10 ? "0" + s : s) + ":") +
        (i = i < 10 ? "0" + i : i)
      );
    }
    function E() {
      L(!1);
      i.classList.remove("vjs-thumb-show");
      if (e.shadowSlide) {
        a.removeAttribute("style");
        n.width = 0;
        n.height = 0;
      }
    }
    v = function (e) {
      L(!1);
      if (!0 !== videojs.holderdown) i.classList.remove("vjs-thumb-show");
    };
    function L(e) {
      if (e) d.el().setAttribute("style", "z-index:22");
      else d.el().removeAttribute("style");
    }
    function q() {
      videojs.holderdown = !1;
      document.removeEventListener("mousemove", u);
      document.removeEventListener("mouseup", q);
      E();
    }
    function S(e) {
      L(!0);
      videojs.holderdown = !0;
      document.addEventListener("mousemove", u);
      document.addEventListener("mouseup", q);
      u(e);
    }
    function C() {
      l.removeEventListener("touchmove", u);
      l.removeEventListener("touchend", C);
      E();
    }
    function _(e) {
      videojs.holderdown = !1;
      u(e);
      l.addEventListener("touchmove", u);
      l.addEventListener("touchend", C);
    }
    o = null;
    u = function (t) {
      L(!0);
      t.preventDefault();
      h = e.duration();
      var l = d.el().querySelector(".vjs-progress-holder"),
        u = d.el().querySelector(".vjs-play-progress"),
        c = l.getBoundingClientRect(),
        v = null;
      if (t.pageX) v = t.pageX;
      else if (t.changedTouches)
        v = t.changedTouches[0].pageX || t.touches[0].clientX;
      var f = v - c.left;
      if (0 === f && videojs.holderdown && u.offsetWidth > 0);
      if (f < 0) f = 0;
      if (f > l.offsetWidth) f = l.offsetWidth;
      if (r.timeTooltip) {
        var g = (f / l.offsetWidth) * h,
          y = i.querySelector(".vjs-thumb-tooltip");
        if (y) y.innerHTML = x(g, h);
      }
      for (var w = m.length, j = 0, b = !1; j < w; ) {
        var E = m[j];
        if (E.startTime <= g && E.endTime >= g) {
          b = !0;
          var q = p(E.text);
          break;
        }
        j++;
      }
      if (q) {
        q.iw = q.w;
        q.ih = q.h;
        if (q)
          if (!0 === b) {
            i.classList.remove("vjs-thumb-hidden");
            var S = !1,
              C = q.src.replace(/\.\.\//g, "");
            if (s.src.indexOf(C) < 0) {
              s.src = q.src;
              S = !0;
            }
            if (0 === q.w) {
              q.w = r.width;
              s.style.width = q.w + "px";
            }
            if (0 === q.h) {
              q.h = r.height;
              s.style.height = q.h + "px";
            }
            var _ = 1;
            if (r.responsive && r.mediaqueries) {
              var I = e.el_.offsetWidth;
              if (I <= 320) _ = r.mediaqueries.tiny;
              if (I > 320 && I <= 540) _ = r.mediaqueries.small;
              if (I > 540 && I <= 1080) _ = r.mediaqueries.medium;
              if (I > 1080 && I <= 1600) _ = r.mediaqueries.large;
              if (I > 1600) _ = r.mediaqueries.xlarge;
            }
            var T = q.w * _,
              N = q.h * _;
            if (i.style.width !== T || i.style.height !== N) {
              i.style.width = T + "px";
              i.style.height = N + "px";
            }
            var P = o.getContext("2d");
            if (S)
              s.onload = function () {
                o.width = T;
                o.height = N;
                q.x = 0;
                q.y = 0;
                P.drawImage(s, q.x, q.y, q.w, q.h, 0, 0, o.width, o.height);
              };
            else if (q.iw > 0 && q.ih > 0) {
              o.width = T;
              o.height = N;
              P.fillRect(0, 0, T, N);
              P.drawImage(s, q.x, q.y, q.w, q.h, 0, 0, o.width, o.height);
            }
            var k = T / 2,
              W = d.el().offsetWidth,
              M = e.el_.querySelector(".vjs-progress-holder").offsetLeft,
              R = k - M;
            if (f + k + M > W) f = W - T;
            else if (f < R) f = 0;
            else f -= R;
            i.style.left = parseInt(f, 10) + "px";
            i.classList.add("vjs-thumb-show");
            if (videojs.holderdown && e.shadowSlide) {
              if (!e.el_.querySelector(".vjs-thumb-poster")) {
                (a = document.createElement("div")).className =
                  "vjs-thumb-poster";
                n = document.createElement("canvas");
                a.appendChild(n);
                e.el_.insertBefore(a, e.el_.querySelector(".vjs-poster"));
              }
              var B = n.getContext("2d");
              n.width = e.el_.offsetWidth;
              n.height = e.el_.offsetHeight;
              a.style.width = n.width + "px";
              a.style.height = n.height + "px";
              B.clearRect(0, 0, n.width, n.height);
              B.drawImage(s, q.x, q.y, q.w, q.h, 0, 0, n.width, n.height);
            }
          } else i.classList.add("vjs-thumb-hidden");
      }
    };
  },
  thumbnails = function (e) {
    this.ready(() => {
      let t = [];
      try {
        t = videojs.obj.merge(defaults, e);
      } catch (i) {
        t = videojs.mergeOptions(defaults, e);
      }
      onPlayerReady(this, t);
    });
  };
if ("undefined" != typeof window) {
  (videojs.registerPlugin || videojs.plugin)("thumbnails", thumbnails);
}
thumbnails.VERSION = "2.4.0";
export default thumbnails;
