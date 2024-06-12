/**
 * Copyright (c) 2024 The Nuevodevel Team. All rights reserved.
 * Nuevo Plugin for Video.js
 * Version 12.0.0
 */
/* eslint-disable */ import videojs from "video.js";
const nuevodef = {
  dvrMin: 300,
  zoomMenu: !0,
  rate: 1,
  pipButton: !0,
  ccButton: !0,
  relatedMenu: !0,
  settingsButton: !0,
  automuteButton: !1,
  filtersMenu: !1,
  downloadButton: !1,
  rateMenu: !0,
  hdicon: !0,
  shareMenu: !0,
  zoomInfo: !0,
  chapterMarkers: !0,
  contextMenu: !0,
  contextLink: !0,
  timetooltip: !1,
  captionsSettings: "undefined",
  mousedisplay: !0,
  related: {},
  logoposition: "LT",
  logooffsetX: 10,
  logooffsetY: 10,
  logourl: "",
  url: "",
  title: "",
  description: "",
  embed: "",
  endAction: "",
  pubid: "",
  limit: 0,
  limitmessage: "Watch full video on",
  resume: !1,
  video_id: "",
  playlistID: "undefined",
  playlistMaxH: "undefined",
  playlistUI: !0,
  playlistShow: !0,
  playlistAutoHide: !0,
  playlist: !1,
  currentSlide: "",
  infoIcon: "",
  target: "_blank",
  buttonRewind: !0,
  metatitle: "",
  metasubtitle: "",
  qualityMenu: !1,
  captionsSize: 1.25,
  tooltips: !0,
  singlePlay: !1,
  rewindforward: 10,
  snapshot: !1,
  snapshotType: "jpg",
  snapshotWatermark: "",
  slideWidth: 160,
  slideHeight: 90,
  slideType: "vertical",
  ghostThumb: !1,
  minhd: 1080,
  liveReconnect: !1,
  paused: !1,
  controlbar: !0,
  touchRewindForward: !0,
  touchControls: !0,
  iosFullscreen: "native",
  androidLock: !1,
  playsinline: !0,
  chapters: !1,
  log: !1,
};
var browser = videojs.browser;
function lint(e) {
  return e;
}
if (browser.IS_ANDROID) {
  videojs.options.html5.nativeAudioTracks = !1;
  videojs.options.html5.nativeTextTracks = !1;
  try {
    videojs.options.vhs.overrideNative = !0;
  } catch (e) {
    lint(e);
  }
}
if ("undefined" != typeof window) {
  if (browser.IS_IPAD && "MediaSource" in window)
    videojs.options.html5.nativeTextTracks = !1;
  if ("MediaSource" in window)
    try {
      videojs.options.vhs.overrideNative = !0;
    } catch (e) {
      lint(e);
    }
}
var vjs_skins = [
  "nuevo",
  "treso",
  "chrome",
  "flow",
  "jwlike",
  "mockup",
  "party",
  "pinko",
  "roundal",
  "shaka",
  "slategrey",
];
if ("undefined" != typeof window)
  if (document.body) {
    var skin_el = document.createElement("div"),
      doc = document.body;
    doc.appendChild(skin_el);
    skin_el.className = "vjs-skin";
    var skn = guessSkin(skin_el);
    if ("" !== skn) {
      videojs.skin = skn;
      setSkin(skn);
      doc.removeChild(skin_el);
    } else
      setTimeout(function () {
        if ("" !== (skn = guessSkin(skin_el))) {
          videojs.skin = skn;
          setSkin(skn);
          doc.removeChild(skin_el);
        }
      }, 50);
  }
function guessSkin(e) {
  var i = getComputedStyle(e, ":before").getPropertyValue("content");
  i = i.replace(/^["'](.+(?=["']$))["']$/, "$1");
  if (vjs_skins.includes(i)) return i;
  else return "";
}
function videojsSkin(e) {
  setSkin(e);
  videojs.skin = e;
}
function setSkin(e) {
  var i = "progressControl",
    t = "playToggle",
    s = "liveDisplay",
    n = "seekToLive",
    a = "currentTimeDisplay",
    o = "timeDivider",
    l = "durationDisplay",
    r = "customControlSpacer",
    d = "volumePanel",
    v = "chaptersButton",
    f = "descriptionsButton",
    c = "subsCapsButton",
    u = "audioTrackButton",
    p = "pictureInPictureToggle",
    h = "fullscreenToggle",
    m = null;
  if ("treso" === e)
    m = { children: [i, t, s, n, a, l, d, r, v, f, c, u, p, h] };
  else if ("chrome" === e)
    m = { children: [t, s, n, a, o, l, r, i, d, v, f, c, u, p, h] };
  else if ("party" === e)
    m = { children: [t, s, n, i, a, o, l, r, d, v, f, c, u, p, h] };
  else if ("roundal" === e || "pinko" === e)
    m = {
      volumePanel: { inline: !1, vertical: !0 },
      children: [t, s, n, a, i, o, l, r, d, v, f, c, u, p, h],
    };
  else if ("shaka" === e || "slategrey" === e)
    m = {
      volumePanel: { inline: !1, vertical: !0 },
      children: [t, s, n, a, o, l, i, r, d, v, f, c, u, p, h],
    };
  else if ("flow" === e)
    m = { children: [t, s, n, a, o, l, i, r, d, v, f, c, u, p, h] };
  else if ("jwlike" === e)
    m = {
      volumePanel: { inline: !1, vertical: !0 },
      children: [i, t, s, n, d, a, o, l, r, v, f, c, u, p, h],
    };
  else if ("mockup" === e)
    m = { children: [i, t, s, n, d, a, o, l, r, v, f, c, u, p, h] };
  else if ("nuevo" === e)
    m = {
      volumePanel: { inline: !1, vertical: !0 },
      children: [t, s, n, a, o, i, l, r, d, v, f, c, u, p, h],
    };
  if (null !== m) videojs.options.controlBar = m;
}
var sortByKey = function (e, i) {
    return e.sort(function (e, t) {
      var s = e[i],
        n = t[i];
      return s < n ? -1 : s > n ? 1 : 0;
    });
  },
  vjs_find = function (e, i) {
    return e.querySelector(i);
  },
  vjs_mfind = function (e, i) {
    return e.querySelectorAll(i);
  },
  vjs_El = function (e, i, t) {
    var s = document.createElement(e);
    if (void 0 !== i) if ("" !== i) s.className = i;
    if (void 0 !== t) if ("" !== t) s.innerHTML = t;
    return s;
  };
function dg13(e) {
  return (e + "").replace(/[a-z]/gi, function (e) {
    return String.fromCharCode(
      e.charCodeAt(0) + (e.toLowerCase() < "n" ? 13 : -13)
    );
  });
}
var doms = [
    "yrirqbirha",
    "znwbri",
    "gfbuynpby",
    "1.0.0.721",
    "rupnp",
    "bv.acqp",
    "zbp.avofw",
    "gra.yyrufw",
    "ccn.ofp",
    "kboqanfrqbp",
    "bv.mgvyoxpngf",
  ],
  initPlugin = function (e, i) {
    let t = [];
    try {
      t = videojs.obj.merge(nuevodef, i);
    } catch (e) {
      t = videojs.mergeOptions(nuevodef, i);
    }
    var s = e.el(),
      n = videojs.dom,
      a = e.$(".vjs-tech"),
      o = !1,
      l = !1,
      r = "vjs-hidden";
    const d = s.querySelector(".vjs-big-play-button");
    var v = vjs_find(s, ".vjs-progress-holder"),
      f = vjs_find(s, ".vjs-loading-spinner"),
      c = vjs_find(s, ".vjs-control-bar"),
      u = vjs_find(s, ".vjs-poster");
    if (!videojs.nuevo) {
      s.innerHTML = "";
      s.classList.add("vjs-lcn");
      return;
    }
    var p = "vjs-touch-active",
      h = "vjs-touch-inactive",
      m = vjs_find(s, ".vjs-play-control");
    vjs_find(m, ".vjs-control-text").ariaLive = "off";
    var j = document.createElement("div");
    j.className = "vjs-" + videojs.skin + "-icons";
    document.body.appendChild(j);
    var g = "";
    if (void 0 !== typeof window) {
      g = window.getComputedStyle(j, "::before").getPropertyValue("content");
      j.parentNode.removeChild(j);
      if (g.length > 10) {
        g = (g = g.replaceAll("\\", "")).replace(/(^"|"$)/g, "");
        const e = new window.DOMParser().parseFromString(g, "image/svg+xml");
        if (e.querySelector("parsererror"))
          console.log("SVG Symbols parsing Error");
        else {
          const i = e.documentElement;
          i.style.display = "none";
          s.insertBefore(i, a.nextSibling);
          videojs.svgIcons = !0;
        }
      }
    }
    function b(e, i) {
      if (e) {
        var t = e.querySelector(".vjs-svg-icon");
        if (t) {
          var s = t.querySelector("use");
          if (s) s.setAttribute("href", "#vjs-icon-" + i);
        }
      }
    }
    t.skin = "";
    if (videojs.skin) t.skin = videojs.skin;
    var y = vjs_El("div", "vjs-skin-" + t.skin);
    s.appendChild(y);
    var _ = function (i) {
        return e.localize(i);
      },
      C = parseInt(t.rewindforward, 10);
    if (5 !== C && 10 !== C && 20 !== C && 30 !== C) t.rewindforward = 10;
    if (!1 === t.log) videojs.log.level("off");
    var w,
      k,
      x,
      T,
      E = 0,
      L = 0,
      I = 0,
      M = 0,
      S = 1;
    e.shadowSlide = t.ghostThumb;
    if (!e.el_.querySelector(".vjs-b-p-b")) {
      document.addEventListener("pointermove", et);
      e.on("dispose", function () {
        window.removeEventListener("touchstart", it);
        document.removeEventListener("pointermove", et);
        e.$(".vjs-tech").removeEventListener("touchstart", vt);
      });
      window.addEventListener("touchstart", it, { passive: !0 });
      var H = function () {
        if (o) return !0;
        if (matchMedia("(pointer:fine)").matches) {
          tt(!0);
          return !0;
        }
        return !1;
      };
      H();
      if (t.playsinline) a.setAttribute("playsinline", "true");
      var B,
        q,
        N,
        P,
        D,
        A = [],
        W = !1,
        z = !1;
      if (videojs.dispose) {
        e.qualities = [];
        e.qualityIndex = -1;
        if (
          "pseudo" === t.iosFullscreen &&
          videojs.browser.IS_IOS &&
          videojs.browser.IOS_VERSION > 9 &&
          !e.el_.ownerDocument.querySelector(".bc-iframe")
        ) {
          e.tech_.el_.setAttribute("playsinline", "playsinline");
          e.tech_.supportsFullScreen = function () {
            return !1;
          };
        }
        e.on("fullscreenchange", function () {
          if (videojs.browser.IS_ANDROID && t.androidLock)
            if ("undefined" != typeof window)
              if (e.isFullscreen())
                window.screen.orientation.lock("landscape-primary");
              else window.screen.orientation.lock("any");
        });
        if (t.touchControls) {
          var R = vjs_El("div", "vjs-touch-nav");
          s.insertBefore(R, d);
          var O = e.addChild("button", {
            el: n.createEl(
              "button",
              { className: "vjs-big-button vjs-b-p-b" },
              {
                type: "button",
                "aria-label": _("Play"),
                "aria-disabled": "false",
                tabindex: "0",
              }
            ),
          });
          s.insertBefore(R, d);
          O.el_.innerHTML = ot("play", _("Play"));
          R.appendChild(O.el_);
          O.el_.ontouchend = function (i) {
            i.stopImmediatePropagation();
            dt();
            if (e.paused()) e.play();
            else e.pause();
          };
          d.ontouchend = u.ontouchend = function (e) {
            e.stopImmediatePropagation();
            if (!0 !== W) n.addClass(s, h);
          };
        }
        if (t.touchRewindForward && t.touchControls) {
          var F = e.addChild("button", {
            el: n.createEl(
              "button",
              {
                className:
                  "vjs-big-button vjs-b-r-b vjs-b-r-b-" + t.rewindforward,
              },
              { type: "button", title: _("Rewind"), "aria-disabled": "false" }
            ),
          });
          F.el_.innerHTML = ot("rewind" + t.rewindforward, _("Rewnid"));
          R.insertBefore(F.el_, O.el_);
          var U = e.addChild("button", {
            el: n.createEl(
              "button",
              {
                className:
                  "vjs-big-button vjs-b-f-b vjs-b-f-b-" + t.rewindforward,
              },
              { type: "button", title: _("Forward"), "aria-disabled": "false" }
            ),
          });
          U.el_.innerHTML = ot("forward" + t.rewindforward, _("Forward"));
          R.appendChild(U.el_);
          U.el_.ontouchend = function (i) {
            i.stopImmediatePropagation();
            dt();
            e.forward();
          };
          F.el_.ontouchend = function (i) {
            i.stopImmediatePropagation();
            dt();
            e.rewind();
          };
        }
        var $ = e.options_.inactivityTimeout,
          X = 4e3;
        if (e.options_.inactivityTouchTimeout)
          X = e.options_.inactivityTouchTimeout;
        c.addEventListener("touchstart", dt, { passive: !0 });
        c.addEventListener("touchmove", dt, { passive: !0 });
        e.on("dispose", function () {
          c.removeEventListener("touchstart", dt);
          c.removeEventListener("touchmove", dt);
        });
        e.resetTech = function () {
          e.$(".vjs-tech").addEventListener("touchstart", vt, { passive: !0 });
          e.on("chromecastConnected", function () {
            e.$(".vjs-tech").removeEventListener("touchstart", vt);
          });
          e.on("chromecastDisconnected", function () {
            setTimeout(function () {
              e.$(".vjs-tech").addEventListener("touchstart", vt, {
                passive: !0,
              });
            }, 200);
          });
        };
        e.$(".vjs-tech").addEventListener("enterpictureinpicture", () => {
          rt();
        });
        e.on("dispose", function () {
          e.$(".vjs-tech").removeEventListener("touchstart", vt);
          e.$(".vjs-tech").removeEventListener("enterpictureinpicture", rt);
        });
        e.resetTech();
        e.setQuality = function (i, t) {
          if (e.qualities.length)
            if ("boolean" == typeof t) {
              e.qualities[i].enabled = t;
              if (e.tech_.vhs) {
                e.tech_.vhs.representations()[i].enabled(t);
              }
            }
        };
        if (!0 !== t.controlbar) n.addClass(s, "vjs-controls-none");
        e.video_id = function () {
          for (var i = e.currentSources(), s = 0; s < i.length; s++)
            if (void 0 !== i[s].video_id) {
              t.video_id = i[s].video_id;
              break;
            }
          return t.video_id || "";
        };
        e.video_title = function () {
          for (var i = e.currentSources(), s = 0; s < i.length; s++)
            if (void 0 !== i[s].title) {
              t.title = i[s].title;
              break;
            }
          return t.title || "";
        };
        e.textTracksStyle = function (i) {
          if (e.textTrackSettings) {
            var t = e.textTrackSettings,
              s = t.getValues(),
              n = e.captionsSettings;
            t.setDefaults();
            var a = [];
            for (const [e] of Object.entries(s))
              if (i[e]) a[e] = i[e];
              else a[e] = s[e];
            for (const [e] of Object.entries(n)) if (i[e]) a[e] = i[e];
            for (const [e] of Object.entries(i)) a[e] = i[e];
            e.captionsSettings = a;
            t.setValues(e.captionsSettings);
            t.updateDisplay();
          }
        };
        e.captionsSettings = { backgroundOpacity: "0", edgeStyle: "raised" };
        e.textTracksStyle(e.captionsSettings);
        if (!0 !== t.ccButton) {
          var Y = vjs_find(c, ".vjs-subs-caps-button");
          if (Y) n.addClass(Y, "vjs-abs-hidden");
        }
        e.forward = function () {
          var i = e.duration(),
            s = e.currentTime();
          if (i > 0) {
            var n = s + t.rewindforward;
            if (n > i) e.currentTime(i);
            else e.currentTime(n);
          }
          e.trigger("forward", { oldTime: s, newTime: n });
        };
        e.rewind = function () {
          if (e.duration() > 0) {
            var i = e.currentTime(),
              s = i - t.rewindforward;
            if (s < 0) s = 0;
            e.currentTime(s);
            e.trigger("rewind", { oldTime: i, newTime: s });
          }
        };
        e.related = function () {
          if (
            t.settingsButton &&
            t.related.length > 1 &&
            t.relatedMenu &&
            !0 !== e.seeking()
          ) {
            ft(B, !1);
            ft(N, !1);
            ut("");
            ft(q, !0);
            kt();
            e.trigger("related");
            e.pause();
          }
        };
        e.snapshot = function () {
          var e = s.querySelector("video"),
            i = e.videoWidth,
            n = e.videoHeight,
            a = n / i,
            o = document.getElementById("snap");
          if (o) o.parentNode.removeChild(o);
          var l = document.createElement("canvas");
          l.id = "snap";
          l.style.position = "absolute";
          l.style.left = "-10000px";
          document.body.appendChild(l);
          var r,
            d = l.getContext("2d");
          if (
            browser.IS_ANDROID ||
            browser.IS_IPAD ||
            browser.IS_IPHONE ||
            browser.IS_IPOD
          )
            if (i > 640) {
              n = parseInt(640 * a, 10);
              i = 640;
            }
          l.width = i;
          l.height = n;
          d.fillRect(0, 0, i, n);
          d.drawImage(e, 0, 0, i, n);
          if ("" !== t.snapshotWatermark)
            if (t.snapshotWatermark.length > 2) {
              var v = t.snapshotWatermark;
              if (i < 641) d.font = "16px verdana";
              else d.font = "24px verdana";
              var f = d.measureText(v).width;
              d.globalAlpha = 0.5;
              d.fillStyle = "white";
              d.fillText(v, i - f - 10, n - 20);
              d.fillStyle = "black";
              d.fillText(v, i - f - 10 + 2, n - 20 + 2);
            }
          var c = "snapshot.jpg";
          r = l.toDataURL("image/jpeg", 0.9);
          if ("png" === t.snapshotType) {
            c = "snapshot.png";
            r = l.toDataURL("image/png");
          }
          var u = document.createElement("a");
          u.href = r;
          u.download = c;
          document.body.appendChild(u);
          setTimeout(function () {
            u.click();
          }, 200);
        };
        e.on("filters", function () {
          ft(B, !1);
          ft(q, !1);
          rt();
        });
        e.share = function () {
          if (t.settingsButton && t.shareMenu && !0 !== e.seeking()) {
            ft(q, !1);
            ft(N, !1);
            ut("");
            e.trigger("share");
            var i = t.url || "N/A",
              n = t.embed || "N/A";
            vjs_find(s, ".embed-code").value = n;
            vjs_find(s, ".perma").value = i;
            ft(B, !0);
            e.pause();
          }
        };
        if (!0 !== t.contextMenu && "default" !== t.contextMenu)
          s.oncontextmenu = function (e) {
            e.preventDefault();
          };
        var K = vjs_find(s, ".vjs-custom-control-spacer");
        if (K) K.innerHTML = "";
        var Q = e.addChild("button", {
          el: n.createEl(
            "button",
            { className: "vjs-replay-button" },
            { type: "button", title: _("Replay"), "aria-disabled": "false" }
          ),
        });
        s.insertBefore(Q.el_, d);
        Q.el_.innerHTML = ot("big-replay", _("Replay"));
        Q.el_.onclick = Q.el_.ontouchend = function (i) {
          i.preventDefault();
          i.stopImmediatePropagation();
          e.currentTime(0);
          e.play();
          e.trigger("replay");
        };
        var V = vjs_find(s, ".vjs-picture-in-picture-control");
        if (!0 !== t.pipButton) a.disablePictureInPicture = !0;
        var Z = e.controlBar.el().lastChild;
        if ((document.pictureInPictureEnabled && t.pipButton) || V)
          Z = e.controlBar.getChild("pictureInPictureToggle").el_;
        var G = e.controlBar.addChild("button", {
            el: n.createEl(
              "div",
              {
                className:
                  "vjs-quality-button vjs-menu-button vjs-control vjs-button vjs-hidden",
              },
              {
                tabindex: 0,
                role: "button",
                type: "button",
                "aria-live": "off",
                "aria-haspopup": "true",
                "aria-disabled": "false",
                "aria-expanded": "false",
                "aria-label": _("Quality menu"),
              }
            ),
          }),
          J = e.controlBar.addChild("button", {
            el: n.createEl(
              "button",
              {
                className:
                  "vjs-control vjs-button vjs-cog-button vjs-cog-menu-button vjs-hidden",
              },
              {
                tabindex: 0,
                role: "button",
                type: "button",
                "aria-haspopup": "true",
                "aria-live": "off",
                "aria-disabled": "false",
                "aria-expanded": "false",
                "aria-label": _("Settings menu"),
              }
            ),
          });
        c.insertBefore(G.el_, Z);
        c.insertBefore(J.el_, Z);
        D = J.el_;
        if (t.snapshot) {
          var ee = e.controlBar.addChild("button", {
            el: n.createEl(
              "button",
              { className: "vjs-snap-control vjs-control vjs-button" },
              { type: "button" }
            ),
          });
          ee.el_.innerHTML = ot("snapshot", _("Sanpshot"));
          e.controlBar.el_.insertBefore(ee.el_, J.el_);
          ee.el_.onclick = ee.el_.ontouchend = function (i) {
            i.preventDefault();
            i.stopImmediatePropagation();
            e.snapshot();
          };
        }
        if (t.controlbar) {
          var ie = n.createEl("div", { className: "vjs-bg-bar" });
          s.insertBefore(ie, c);
        }
        P = G.el_;
        var te =
          '<span class="quality-span vjs-no-pointer"></span><span class="vjs-control-text" aria-live="polite">' +
          _("Quality") +
          '</span><div class="vjs-menu"><ul class="vjs-menu-content vjs-qlist" role="menu"></ul></div>';
        P.innerHTML = te;
        if (t.buttonForward) {
          if (t.buttonRewind) ct(!0);
          var se = "vjs-forward-control",
            ne = e.controlBar.addChild("button", {
              el: n.createEl(
                "button",
                {
                  className:
                    se +
                    " vjs-control vjs-button vjs-forward-" +
                    t.rewindforward,
                },
                {
                  title: _("Forward"),
                  type: "button",
                  "aria-disabled": "false",
                }
              ),
            });
          ne.el_.innerHTML = ot("forward" + t.rewindforward, _("Forward"));
          if ("party" === t.skin && t.buttonRewind)
            e.controlBar.el_.insertBefore(
              ne.el_,
              vjs_find(s, ".vjs-rewind-control").nextSibling
            );
          else
            e.controlBar.el_.insertBefore(
              ne.el_,
              e.controlBar.getChild("playToggle").el_.nextSibling
            );
          ne.el_.onclick = ne.el_.ontouchend = function (i) {
            i.preventDefault();
            i.stopImmediatePropagation();
            e.forward();
          };
        } else if (t.buttonRewind) ct();
        var ae = n.createEl("div", { className: "vjs-vast-label" });
        ae.innerHTML = _("Advertisement");
        var oe = "playToggle";
        if ("party" === t.skin) oe = "progressControl";
        if ("treso" === t.skin) oe = "volumePanel";
        c.insertBefore(ae, e.controlBar.getChild(oe).el_.nextSibling);
        if (t.theaterButton) {
          var le = e.controlBar.addChild("button", {
              el: n.createEl(
                "button",
                {
                  className:
                    "vjs-control vjs-button vjs-control-button vjs-mode-control",
                },
                {
                  type: "button",
                  "aria-live": "polite",
                  "aria-disabled": "false",
                }
              ),
            }),
            re = _("Theater mode"),
            de = _("Exit theater mode"),
            ve = document.createElement("span");
          ve.ariaHidden = "true";
          ve.className = "vjs-icon-placeholder";
          ve.setAttribute("data-id", "expand");
          var fe = document.createElement("span");
          fe.ariaLive = "polite";
          fe.className = "vjs-control-text";
          le.el_.appendChild(ve);
          le.el_.appendChild(fe);
          fe.innerHTML = re;
          fe.setAttribute("data-id", "expand-back");
          c.insertBefore(le.el_, e.controlBar.getChild("fullscreenToggle").el_);
          var ce = le.el_;
          if ("large" === t.theaterButton) {
            n.addClass(ce, "vjs-mode");
            fe.innerHTML = de;
          }
          ce.onclick = ce.ontouchend = function (i) {
            i.preventDefault();
            i.stopImmediatePropagation();
            if (n.hasClass(ce, "vjs-mode")) {
              n.removeClass(ce, "vjs-mode");
              fe.innerHTML = re;
              b(le.el_, "expand");
              e.trigger("mode", "normal");
            } else {
              n.addClass(ce, "vjs-mode");
              e.trigger("mode", "large");
              fe.innerHTML = de;
              b(le.el_, "expand-back");
            }
          };
        }
        var ue = vjs_El("div", "vjs-menu-settings"),
          pe = vjs_El("div", "vjs-menu-div vjs-settings-div");
        ue.appendChild(pe);
        var he = vjs_El("div", "vjs-submenu vjs-settings-home");
        pe.appendChild(he);
        he.innerHTML =
          '<div class="vjs-menu-title">' + _("Settings") + "</div>";
        var me = vjs_El("ul", "vjs-menu-content vjs-settings-list");
        he.appendChild(me);
        me.role = "menu";
        me.tabIndex = "-1";
        D.innerHTML =
          '<span aria-hidden="true" class="vjs-icon-placeholder" data-id="settings"></span><span class="vjs-hd vjs-hidden">HD</span><span class="vjs-control-text" aria-live="polite">' +
          _("Settings") +
          "</span>";
        D.appendChild(ue);
        if (t.downloadButton) {
          var je = e.controlBar.addChild("button", {
            el: videojs.dom.createEl(
              "button",
              {
                className: "vjs-download-control vjs-control vjs-button",
                title: _("Download"),
              },
              { type: "button", "aria-disabled": "false" }
            ),
          });
          c.insertBefore(je.el_, e.controlBar.getChild("fullscreenToggle").el_);
          je.el_.innerHTML = ot("download", _("Download"));
          je.el_.onclick = je.el_.ontouchend = function (i) {
            i.preventDefault();
            i.stopImmediatePropagation();
            var t = e.video_id();
            e.trigger("downloadVideo", { source: e.currentSrc(), id: t });
          };
        }
        mt();
        vjs_mfind(s, ".vjs-control").forEach((e) => {
          ht(e);
        });
        c.querySelectorAll(".vjs-button").forEach((e) => {
          ht(e);
        });
        e.on("playerresize", function () {
          jt();
        });
        e.on("dispose", function () {
          window.removeEventListener("click", gt);
          window.removeEventListener("touchstart", bt);
          if (window.parent) {
            window.parent.removeEventListener("click", gt);
            window.parent.removeEventListener("touchstart", bt);
          }
          l = !0;
        });
        window.addEventListener("click", gt);
        window.addEventListener("touchstart", bt);
        if (window.parent)
          try {
            window.parent.addEventListener("click", gt);
            window.parent.addEventListener("touchstart", bt);
          } catch (e) {
            lint(e);
          }
        v.addEventListener("touchend", function (e) {
          rt(e);
        });
        e.on("durationchange", function () {
          if (e.duration() === 1 / 0 || e.duration() >= 4294967296)
            if (e.seekable().length > 0) {
              if (
                e.seekable().end(e.seekable.length - 1) -
                  e.seekable().start(0) >
                t.dvrMin
              )
                e.el_.classList.add("vjs-liveui");
            }
        });
        if ("" === t.title) t.title = t.metatitle = document.title;
        if ("" === t.infoText) t.infoText = t.metatitle;
        if (!t.timetooltip) {
          var ge = vjs_find(s, ".vjs-play-progress"),
            be = vjs_find(ge, ".vjs-time-tooltip");
          if (ge && be) n.addClass(be, "vjs-abs-hidden");
        }
        try {
          if (!t.mousedisplay)
            n.addClass(vjs_find(s, ".vjs-mouse-display"), "vjs-abs-hidden");
        } catch (e) {
          lint(e);
        }
        if (t.logocontrolbar) {
          var ye = vjs_El("img");
          ye.src = t.logocontrolbar;
          ye.onload = function () {
            if (this.height > 0) {
              var i = vjs_El("div", "vjs-logo-bar");
              if ("" !== t.logourl) {
                var s = vjs_El("a");
                s.href = t.logourl;
                s.target = t.target;
                if (t.logotitle) s.title = t.logotitle;
                s.appendChild(ye);
                i.appendChild(s);
              } else i.appendChild(ye);
              c.insertBefore(i, e.controlBar.getChild("fullscreenToggle").el_);
            }
          };
        }
        if (t.contextMenu && "default" !== t.contextMenu) {
          var _e = vjs_El("div", "vjs-context-menu vjs-hidden"),
            Ce = vjs_El("ul"),
            we = vjs_El("li", "cplay", _("Play")),
            ke = vjs_El("li", "cmute", _("Mute")),
            xe = vjs_El("li", "cfull", _("Fullscreen")),
            Te = vjs_El("li", "curi vjs-hidden", _("Copy video URL"));
          Ce.append(we, ke, xe, Te);
          var Ee = null;
          if (void 0 !== t.contextUrl && void 0 !== t.contextText)
            if (t.contextIcon)
              Ee = vjs_El(
                "li",
                "link",
                '<a target="' +
                  t.target +
                  '" href="' +
                  t.contextUrl +
                  '"><img src="' +
                  t.contextIcon +
                  '">' +
                  t.contextText +
                  "</a>"
              );
            else
              Ee = vjs_El(
                "li",
                "link",
                '<a target="' +
                  t.target +
                  '" href="' +
                  t.contextUrl +
                  '">' +
                  t.contextText +
                  "</a>"
              );
          else if (t.contextLink)
            Ee = vjs_El(
              "li",
              "link",
              '<a target="_blank" href="//www.nuevodevel.com/nuevo/">&copy; Nuevo v.12.0.0</a>'
            );
          if (Ee) Ce.appendChild(Ee);
          _e.appendChild(Ce);
          s.appendChild(_e);
          we.onclick = function () {
            if (e.paused()) e.play();
            else e.pause();
          };
          ke.onclick = function () {
            if (e.muted()) e.muted(!1);
            else e.muted(!0);
          };
          xe.onclick = function () {
            if (e.isFullscreen()) e.exitFullscreen();
            else e.requestFullscreen();
          };
          Te.onclick = function () {
            if (
              navigator &&
              navigator.clipboard &&
              navigator.clipboard.writeText
            )
              navigator.clipboard.writeText(t.url);
          };
          function Le() {
            n.addClass(_e, r);
            window.removeEventListener("scroll", Le);
            window.removeEventListener("mouseup", Le);
          }
          e.on("dispose", function () {
            window.removeEventListener("scroll", Le);
            window.removeEventListener("mouseup", Le);
            window.removeEventListener("mousedown", Le);
          });
          s.oncontextmenu = function (i) {
            i.preventDefault();
            if (Te && "" === t.url) n.addClass(Te, r);
            else n.removeClass(Te, r);
            if (e.paused()) we.innerHTML = "Play";
            else we.innerHTML = "Pause";
            if (e.muted()) ke.innerHTML = "Unmute";
            else ke.innerHTML = "Mute";
            if (e.isFullscreen()) xe.innerHTML = "Exit Fullscreen";
            else xe.innerHTML = "Fullscreen";
            n.removeClass(_e, r);
            var a = _e.offsetWidth,
              o = _e.offsetHeight,
              l = null,
              d = null;
            if (i.clientY) l = i.clientY;
            if (i.clientX) d = i.clientX;
            if (null !== l && null !== d) {
              var v = s.getBoundingClientRect(),
                f = l - v.top,
                c = d - v.left;
              if (f + o > s.offsetHeight) f = s.offsetTop + s.offsetHeight - o;
              if (c + a > s.offsetWidth) c = s.offsetWidth - a;
              _e.style.top = f + "px";
              _e.style.left = c + "px";
              window.addEventListener("scroll", Le);
              window.addEventListener("mouseup", Le);
            }
          };
        }
        if (t.logo) {
          var Ie = vjs_El("img");
          Ie.src = t.logo;
          Ie.onload = function () {
            if (this.height > 0) {
              var e = vjs_El("div", "vjs-logo");
              if (t.logomin) e.className = "vjs-logo vjs-logo-min";
              s.appendChild(e);
              var i = t.logooffsetX,
                n = t.logooffsetY;
              if ("RT" === t.logoposition) {
                e.style.right = i + "px";
                e.style.top = n + "px";
              } else if ("LB" === t.logoposition) {
                e.style.left = i + "px";
                e.className += " vjs-logo-bottom";
              } else {
                e.style.left = i + "px";
                e.style.top = n + "px";
              }
              if ("" !== t.logourl) {
                var a = vjs_El("a");
                a.href = t.logourl;
                a.target = t.target;
                if (t.logotitle) a.title = t.logotitle;
                a.appendChild(Ie);
                e.appendChild(a);
              } else e.appendChild(Ie);
            }
          };
        }
        if ("treso" === t.skin) {
          var Me = vjs_find(s, ".vjs-current-time"),
            Se = vjs_find(s, ".vjs-duration");
          c.removeChild(Me);
          var He = vjs_find(s, ".vjs-progress-control");
          He.insertBefore(Me, He.childNodes[0]);
          c.removeChild(Se);
          He.appendChild(Se);
        }
        e.resetNuevo = function () {
          var i,
            a,
            o = [],
            l = [];
          yt();
          xt();
          if (e.options_.sources.length > 0) l = o = e.options_.sources;
          vjs_find(P, ".vjs-menu .vjs-menu-content").innerHTML = "";
          n.addClass(P, r);
          if (o.length < 2) return o[0];
          if (o.length > 1) {
            var d = 0,
              v = 0,
              f = [],
              c = [],
              u = [],
              p = "",
              h = 0,
              m = 0,
              j = 0,
              g = 0,
              b = !1;
            for (d = 0; d < o.length; d++) if (o[d].res || o[d].label) v++;
            if (o.length >= 1) {
              t.dash = !1;
              t.hls = !1;
              var y = "MediaSource" in window,
                C = browser.IOS;
              for (h = 0; h < l.length; h++) {
                var w = "";
                try {
                  w = l[h].type;
                } catch (e) {
                  lint(e);
                }
                if (void 0 !== w) {
                  if (
                    -1 !== w.indexOf("x-mpegURL") ||
                    -1 !== w.indexOf("apple")
                  ) {
                    if (y || C) return l[h];
                    f[m] = l[h];
                    m++;
                  }
                  if (-1 !== w.indexOf("dash")) if (y) return l[h];
                }
                if (l[h].res && l[h].label) {
                  if (!0 !== b) {
                    b = !0;
                    a = {
                      res: l[h].res,
                      type: l[h].type,
                      src: l[h].src,
                      label: l[h].label,
                    };
                  }
                  var k = l[h].type;
                  if (void 0 === k) k = "";
                  if (
                    -1 !== k.indexOf("mpeg") ||
                    -1 !== k.indexOf("apple") ||
                    -1 !== k.indexOf("dash")
                  );
                  else {
                    u[j] = l[h];
                    j++;
                  }
                }
              }
            }
            var x = [];
            if (f.length > 0 && (y || C)) return;
            if (c.length > 0 && y) return;
            if (v < 2) return;
            x = (x = u).sort(Et);
            var T = "",
              E = " vjs-checked";
            T = ' class="vjs-menu-item item-quality"';
            E = ' class="vjs-menu-item item-quality vjs-checked"';
            for (h = 0; h < x.length; h++) {
              var L = x[h].res,
                I = parseInt(L, 10),
                S = "";
              if (t.hdicon && I > t.minhd - 1) {
                var H = "HD";
                if (I > 1079 && t.minhd < 1080) H = "FullHD";
                if (I > 2159) H = "4K";
                S = '<i class="vjs-hd-icon">' + H + "</i>";
              }
              var B =
                'tabindex="0" role="menuitemradio" aria-live="off" aria-disabled="false" aria-label="' +
                _("Set quality to " + x[h].label) +
                '" ';
              if (x[h].default) {
                i = x[h];
                p +=
                  "<li " +
                  B +
                  E +
                  ' data-height="' +
                  h +
                  '">' +
                  x[h].label +
                  S +
                  "</li>";
              } else
                p +=
                  "<li " +
                  B +
                  T +
                  ' data-height="' +
                  h +
                  '">' +
                  x[h].label +
                  S +
                  "</li>";
              g++;
            }
            if (g > 1) {
              M = g;
              if (t.qualityMenu) {
                Ot();
                var q = vjs_find(s, ".vjs-menu-quality .vjs-menu-content");
                q.innerHTML = q.innerHTML + p;
                n.removeClass(vjs_find(s, ".vjs-extend-quality"), r);
                n.removeClass(D, r);
              } else {
                var N = vjs_find(P, ".vjs-menu"),
                  A = vjs_find(N, ".vjs-menu-title");
                if (A) N.removeChild(A);
                var W = vjs_El("div", "vjs-menu-title", _("Quality"));
                N.prepend(W);
                vjs_find(P, ".vjs-menu .vjs-menu-content").innerHTML = p;
                n.removeClass(P, r);
              }
              xt();
              var R = vjs_mfind(s, ".item-quality");
              xt();
              var O = function (i) {
                for (var s, a = 0; a < R.length; a++) {
                  n.removeClass(R[a], "vjs-checked");
                  if (R[a] === i.target) s = a;
                }
                n.addClass(R[s], "vjs-checked");
                var o = i.target.getAttribute("data-height");
                Tt(x[o].res, x[o].label);
                var l = e.video_id();
                e.trigger("resolutionchange", { id: l, res: x[o].res });
                var r = x[o];
                Mt();
                var d = e.remoteTextTracks ? e.remoteTextTracks() : [];
                if (d && Array.isArray(d.tracks_)) d = d.tracks_;
                var v = [];
                d.forEach(function (e) {
                  if (e.kind && e.src) {
                    var i = { kind: e.kind, src: e.src, mode: e.mode };
                    if (e.srclang) i.srclang = e.srclang;
                    if (e.language) i.srclang = e.language;
                    if (e.label) i.label = e.label;
                    v.push(i);
                  }
                });
                Nt();
                $(r);
                t.chapters = !1;
                e.one("loadeddata", function () {
                  if (v.length > 0) e.loadTracks(v);
                });
              };
              for (h = 0; h < R.length; h++) {
                var F = R[h];
                F.onclick = function (e) {
                  e.preventDefault();
                  e.stopPropagation();
                  O(e);
                };
                var U = !1;
                F.addEventListener(
                  "touchstart",
                  function () {
                    U = !1;
                  },
                  { passive: !0 }
                );
                F.addEventListener(
                  "touchmove",
                  function () {
                    U = !0;
                  },
                  { passive: !0 }
                );
                F.ontouchend = function (e) {
                  e.stopPropagation();
                  if (!U) O(e);
                };
              }
              wt();
              if (void 0 !== i || void 0 !== a)
                if (void 0 !== i && i !== a) {
                  Tt(i.res, i.label);
                  e.src(i);
                  return i;
                } else if (void 0 !== a) {
                  Tt(a.res, a.label);
                  return a;
                }
              function $(i) {
                z = !0;
                var s = e.currentTime(),
                  n = e.paused();
                e.src(i);
                e.load();
                if (s > 0) e.currentTime(s);
                if (n) e.pause();
                else e.play();
                if (1 !== t.rate) e.setRate(t.rate);
              }
            }
          }
        };
        e.on("loadeddata", function () {
          if (n.hasClass(s, "vjs-ad-playing") || n.hasClass(s, "vjs-dai"))
            return !1;
          qt();
          if (!z) {
            if (
              t.startTime ||
              e.options_.startTime ||
              e.$(".vjs-tech").getAttribute("startTime")
            ) {
              var i = e.$(".vjs-tech").getAttribute("startTime") || 0;
              if (t.startTime) i = t.startTime;
              if (e.options_.startTime) i = e.options_.startTime;
              t.startTime = i;
              if (i > 5 && i < e.duration() - 5) {
                f.style.opacity = 0;
                e.currentTime(i);
              }
            } else St();
            qt();
            if (e.isAudio()) {
              n.addClass(s, "vjs-audio");
              t.is_audio = !0;
            }
            var a = vjs_mfind(s, ".vjs-menu-button-popup");
            for (ni = 0; ni < a.length; ni++) {
              a[ni].onclick = a[ni].ontouchend = function (e) {
                o(e);
              };
              a[ni].onmousemove = function (e) {
                var i =
                  vjs_find(e.target, ".vjs-menu") ||
                  vjs_find(e.target.parentNode, ".vjs-menu");
                if (i)
                  if (n.hasClass(i, "vjs-lock-showing"));
                  else {
                    var t =
                      e.target.querySelector(".vjs-control-text") ||
                      e.target.parentNode.querySelector(".vjs-control-text");
                    if (t) t.removeAttribute("style");
                  }
              };
              function o(e) {
                s.querySelectorAll(".vjs-control-text").forEach((e) => {
                  e.removeAttribute("style");
                });
                var i = vjs_find(e.target, ".vjs-control-text");
                if ("true" === e.target.getAttribute("aria-expanded"))
                  i.style.opacity = "0";
                else i.removeAttribute("style");
                var a =
                  vjs_find(e.target, ".vjs-menu") ||
                  vjs_find(e.target.parentNode, ".vjs-menu");
                if (a) if (!n.hasClass(a, "vjs-lock-showing")) ut(e.target);
                var o =
                    vjs_find(e.target, ".vjs-menu-content") ||
                    vjs_find(e.target.parentNode, ".vjs-menu-content"),
                  l = 0;
                if ("shaka" === t.skin || "treso" === t.skin) l = 10;
                if ("roundal" === t.skin || "mockup" === t.skin) l = 5;
                var r = s.offsetHeight - c.offsetHeight - 15;
                if (s.offsetWidth < 480) r = s.offsetHeight - 8;
                else r -= l;
                if (n.hasClass(s, "vjs-cast-fixed") && o)
                  o.style.maxHeight = "none";
                else o.style.maxHeight = r + "px";
              }
            }
            Dt();
            M = 0;
            e.qualityIndex = -1;
            e.off("mediachange");
            e.qualities = [];
            e.one("playing", d);
            e.one("levelsLoaded", d);
            e.on("dashlevelChange", function () {
              e.trigger("mediachange");
            });
          } else z = !1;
          function l() {
            if (e.tech_.vhs) {
              e.qualities = [];
              var i = e.tech_.vhs.representations();
              if (i.length > 0)
                for (ni = 0; ni < i.length; ni++) {
                  var t = i[ni],
                    s = "vjs_" + ni,
                    n = {
                      id: s,
                      index: s,
                      label: s,
                      width: t.width,
                      height: t.height,
                      bandwidth: t.bandwidth,
                      bitrate: t.bandwidth,
                      enabled: !1,
                    };
                  n.enabled = r.bind(this, ni);
                  e.qualities.push(n);
                }
            }
          }
          function r(i, t) {
            if (e.qualities) {
              var s = e.tech_.vhs.representations();
              if ("boolean" == typeof t) {
                e.qualities[i].enabled = t;
                s[i].enabled(t);
              }
              return e.qualities[i].enabled;
            }
            return !1;
          }
          function d() {
            l();
            e.on("mediachange", function () {
              if (e.tech_.vhs) {
                var i = e.tech_.vhs,
                  t = i.representations(),
                  s = i.playlists.media();
                if (s) {
                  for (
                    var n = s.attributes.BANDWIDTH,
                      a = s.attributes.HEIGHT,
                      o = 0;
                    o < t.length;
                    o++
                  ) {
                    if (n === t[o].bandwidth) {
                      e.qualityIndex = o;
                      break;
                    }
                    if (a === t[o].height) {
                      e.qualityIndex = o;
                      break;
                    }
                  }
                  e.trigger("qualityChange");
                }
              }
            });
            if (e.qualities.length > 0) {
              Ot();
              M = e.qualities.length;
              setTimeout(function () {
                e.trigger("mediachange");
              }, 500);
              It(e.qualities);
            }
          }
        });
        if (t.timetooltip) {
          var Be = vjs_find(s, ".vjs-play-progress"),
            qe = vjs_find(Be, ".vjs-time-tooltip");
          if (qe) qe.className = "vjs-time-tooltip";
        }
        if (t.mousedisplay) {
          var Ne = vjs_find(s, ".vjs-mouse-display");
          if (Ne) Ne.className = "vjs-mouse-display";
        }
        var Pe = vjs_find(s, ".vjs-info");
        if (Pe) s.removeChild(Pe);
        e.audioInfo = function () {
          if (t.audioInfo && (t.audioInfo.artist || t.audioInfo.title))
            return t.audioInfo;
          else return !1;
        };
        Ht();
        Bt();
        if (e.options_.sources.length > 0) {
          e.resetNuevo(!1);
          qt();
          Dt();
        }
        e.on("ratechange", function () {
          var i = e.playbackRate();
          s.querySelectorAll(".vjs-speed").forEach((e) => {
            var t = Number(e.innerHTML.replace("x", ""));
            n.removeClass(e, "vjs-checked");
            if (i === t) n.addClass(e, "vjs-checked");
          });
          if ("1" === i) i = _("Normal");
          vjs_find(s, ".vjs-extend-speed span").innerHTML = i + "x";
        });
        e.setRate = function (i) {
          if (parseFloat(i) > 0) {
            e.trigger("ratechanged", { oldRate: e.playbackRate(), newRate: i });
            e.playbackRate(i);
            t.rate = i;
          }
        };
        e.setSource = function (i) {
          e.changeSource(i);
        };
        e.changeSource = function (i) {
          Nt();
          if (!n.hasClass(s, "vjs-ad-playing") && !n.hasClass(s, "vjs-dai"))
            if (!e.adPlaying) {
              e.item = i;
              t.chapters = !1;
              if (i) {
                if ("string" == typeof i) i = { sources: [{ src: i }] };
                if (i.src) i = { sources: [i] };
                if (i.source) {
                  i.sources = [];
                  i.sources.push(i.source);
                }
                if (i.sources) {
                  var a = 1;
                  if (e.paused()) a = 2;
                  e.pause();
                  e.changeSrc(i);
                  if (1 === a) e.play();
                  e.trigger("sourceChanged");
                }
              }
            }
        };
        e.changeSrc = function (i) {
          if (!n.hasClass(s, "vjs-ad-playing") && !n.hasClass(s, "vjs-dai")) {
            e.item = i;
            t.url =
              t.video_id =
              t.infoTitle =
              t.infoDescription =
              t.metatitle =
              t.metasubtitle =
              t.audioInfo =
              t.infoUrl =
                null;
            t.title = t.url = t.description = t.slideImage = "";
            if (i) {
              if ("string" == typeof i) i = { sources: [{ src: i }] };
              if (i.src) i = { sources: [i] };
              if (i.source) {
                i.sources = [];
                i.sources.push(i.source);
              }
              if (i.sources) {
                t.rate = 1;
                e.setRate(1);
                e.trigger("medialoaded");
                t.video_id = void 0;
                if (i.video_id) t.video_id = i.video_id;
                if (i.audioInfo) t.audioInfo = i.audioInfo;
                if (i.slideImage) t.slideImage = i.slideImage;
                if (i.slideWidth) t.slideWidth = i.slideWidth;
                if (i.slideHeight) t.slideHeight = i.slideHeight;
                if (void 0 !== i.title) t.metatitle = t.title = i.title;
                if (void 0 !== i.description)
                  t.description = i.infoDescription = i.description;
                if (void 0 !== i.embed) t.embed = i.embed;
                if (void 0 !== i.infoTitle) t.infoTitle = i.infoTitle;
                if (void 0 !== i.infoDescription)
                  t.infoDescription = i.infoDescription;
                if (void 0 !== i.infoUrl) t.infoUrl = i.infoUrl;
                if (void 0 !== i.infoIcon) t.infoIcon = i.infoIcon;
                if (void 0 !== i.url) t.url = i.url;
                i.sources.forEach((e) => {
                  if (i.title) {
                    e.title = i.title;
                    e.metaTitle = i.title;
                  }
                  if (i.metatitle) e.metaTitle = i.metatitle;
                  if (i.metaTitle) e.metaTitle = i.metaTitle;
                  if (i.metasubtitle) e.metaSubtitle = i.metasubtitle;
                  if (i.metaSubtitle) e.metaSubtitle = i.metaSubtitle;
                  if (i.metaThumbnail) e.metaThumbnail = i.metaThumbnail;
                });
                e.captions = null;
                if (void 0 !== i.tracks) {
                  var a = i.tracks;
                  a.forEach((e) => {
                    if (void 0 !== e.src && "captions" === e.kind) {
                      if (e.default) e.mode = "showing";
                      e.language = e.srclang;
                    }
                  });
                  if (a.length > 0) e.captions = a;
                }
                if (void 0 !== i.poster) e.poster(i.poster);
                setTimeout(function () {
                  t.firstplay = !0;
                }, 200);
                t.currentSlide = "";
                e.options_.sources = i.sources;
                var o = e.resetNuevo(!0, i);
                e.src(o);
                e.trigger("newSource");
                Bt();
                Ht();
                zt();
                if (i.thumbnails)
                  e.trigger("nuevothumbs", { src: i.thumbnails.src });
                else e.trigger("nuevothumbs");
                if (void 0 !== i.track) {
                  i.tracks = [];
                  i.tracks.push(i.track);
                }
                if (void 0 !== i.tracks)
                  if (i.tracks.length > 0)
                    e.one("loadeddata", function () {
                      Nt();
                      for (
                        var i = [], t = e.item.tracks, s = 0;
                        s < t.length;
                        s++
                      )
                        if (void 0 !== t[s].src) {
                          if (
                            t[s].default &&
                            ("captions" === t[s].kind ||
                              "subtitles" === t[s].kind)
                          )
                            e.currentTrack = t[s].src;
                          if (t[s].src)
                            if ("metadata" === t[s].kind)
                              e.trigger("medialoaded", { xml: t[s].src });
                            else {
                              i[s] = e.addRemoteTextTrack(t[s], !1);
                              i[s].addEventListener("load", function () {
                                if ("chapters" === this.kind) Dt();
                              });
                            }
                        }
                    });
              }
            }
          }
        };
        e.loadTracks = function (i) {
          Nt();
          var t,
            s = [];
          if (!Array.isArray(i)) (t = [])[0] = i;
          else t = i;
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            if (a.kind && a.src)
              if ("metadata" === a.kind)
                e.trigger("medialoaded", { xml: a.src });
              else {
                s[n] = e.addRemoteTextTrack(a, !1);
                s[n].addEventListener("load", function () {
                  if ("captions" === this.kind || "subtitles" === this.kind)
                    if (this.default) this.track.mode = "showing";
                  if ("chapters" === this.kind) Dt();
                });
              }
          }
        };
        e.newPlaylist = function (i) {
          for (
            var t = s.className,
              n = vjs_find(e.playlistParent, ".vjs-vlist ul"),
              a = vjs_mfind(n, ".vjs-item"),
              o = 0;
            o < a.length;
            o++
          ) {
            a[o].onclick = null;
            a[o].ontouchend = null;
            n.removeChild(a[o]);
          }
          n.innerHTML = "";
          for (var l = 0; l < i.length; l++) {
            var r = At(i[l], l);
            n.appendChild(r);
          }
          e.playlist.currentItem(0);
          e.pause();
          e.changeSrc(i[0]);
          if (t.indexOf("vjs-has-started") > -1)
            e.one("canplay", function () {
              e.play();
            });
        };
        e.removeFromPlaylist = function (i) {
          if (t.playlist && t.playlistUI) {
            var s = vjs_find(e.playlistParent, ".vjs-vlist ul"),
              n = s.childNodes[i];
            s.removeChild(n);
            for (var a = 0; a < s.childNodes.length; a++)
              s.childNodes[a].setAttribute("data-id", a);
          }
        };
        e.addToPlaylist = function (i, n, a) {
          if (t.playlist && t.playlistUI) {
            var o,
              l = vjs_find(e.playlistParent, ".vjs-vlist ul"),
              r = l.childNodes.length;
            if ("number" == typeof a && "string" == typeof n) {
              if ("after" === n) {
                o = At(i, a + 1);
                l.insertBefore(o, l.childNodes[a].nextSibling);
              } else if ("before" === n) {
                o = At(i, a);
                l.insertBefore(o, l.childNodes[a]);
              }
              for (var d = 0; d < l.childNodes.length; d++)
                l.childNodes[d].setAttribute("data-id", d);
            } else {
              if (r > 0) o = At(i, r - 1);
              else o = At(i, 0);
              if (r > 1 && e.playlistParent === s)
                l.insertBefore(o, l.childNodes[r - 2].nextSibling);
              else l.appendChild(o);
            }
          }
        };
        e.on("playlistready", function () {
          if (t.playlistRepeat) e.playlist.repeat(!0);
          Wt();
        });
        var De = vjs_find(v, ".vjs-play-progress");
        v.addEventListener("mousedown", Ft, !1);
        v.addEventListener("touchstart", Ft, { passive: !0 });
        if (localStorage && localStorage.volume && !0 !== e.muted())
          if (localStorage.volume > 0) e.volume(localStorage.volume);
        var Ae = !1;
        if (
          t.settingsButton &&
          (t.relatedMenu ||
            t.shareMenu ||
            t.rateMenu ||
            t.zoomMenu ||
            t.filtersMenu)
        ) {
          Ae = !0;
          t.menus = !0;
          n.removeClass(vjs_find(s, ".vjs-cog-menu-button"), r);
        } else {
          t.menus = !1;
          n.addClass(vjs_find(s, ".vjs-cog-menu-button"), "vjs-abs-hidden");
        }
        if (Ae) {
          var We = "",
            ze = !1,
            Re = !1;
          if (t.shareMenu)
            We +=
              '<li class="vjs-settings-item vjs-share-button" tabindex="0" aria-label="' +
              _("Open sharing container") +
              '" role="menuitem" aria-disabled="false">' +
              _("Share") +
              '<span><span data-id="share" class="vjs-icon-placeholder vjs-share-icon"></span></span></li>';
          if (t.relatedMenu && t.related.length > 1)
            We +=
              '<li class="vjs-settings-item vjs-related-button" tabindex="0" aria-label="' +
              _("Open related container") +
              '" role="menuitem" aria-disabled="false">' +
              _("Related") +
              '<span><span data-id="related" class="vjs-icon-placeholder vjs-related-icon"></span></span></li>';
          if (t.zoomMenu) {
            We =
              We +
              '<li class="vjs-settings-item vjs-extend-zoom vjs-menu-forward" tabindex="0" aria-label="' +
              _("Open zoom container") +
              '" role="menuitem" aria-disabled="false">' +
              _("Zoom") +
              '<span class="zoom-label">100%</span></li>';
            Re = vjs_El(
              "div",
              "vjs-submenu vjs-zoom-menu vjs-sub-menu vjs-hidden",
              '<div class="vjs-settings-back vjs-return">' +
                _("Zoom") +
                '</div><div tabindex="0" aria-label="Zoom" class="vjs-zoom-slider" role="slider" aria-live="polite" aria-valuemin="0" aria-valuemax="500" aria-valuetext="0%"><div class="vjs-zoom-back"></div><div class="vjs-zoom-level"></div></div><div role="button" tabindex="0" aria-disabled="false" aria-label="' +
                _("Zoom reset") +
                '" class="vjs-zoom-reset">' +
                _("Reset") +
                "</div>"
            );
          }
          if (t.rateMenu) {
            We =
              We +
              '<li aria-disabled="false" class="vjs-settings-item vjs-extend-speed vjs-menu-forward" tabindex="0" aria-label="' +
              _("Open media speed menu") +
              '" role="menuitem" aria-disabled="false">' +
              _("Speed") +
              "<span>" +
              _("Normal") +
              "</span></li>";
            ze = vjs_El("div", "vjs-submenu vjs-menu-speed vjs-hidden");
            var Oe =
                '<div class="vjs-settings-back">' +
                _("Speed") +
                '</div><ul class="vjs-menu-content vjs-sub-menu">',
              Fe = [0.5, 1, 1.25, 1.5, 2];
            if (e.playbackRates().length > 0) Fe = e.playbackRates();
            e.playbackRates(Fe);
            Fe.forEach((e) => {
              var i = "vjs-speed";
              if (1 === e) i = "vjs-speed vjs-checked";
              Oe +=
                '<li aria-label="' +
                _("Set Speed ") +
                e +
                '" tabindex="0" role="menuitemradio" class="vjs-menu-item ' +
                i +
                '">' +
                e +
                "x</li>";
            });
            ze = vjs_El(
              "div",
              "vjs-submenu vjs-menu-speed vjs-hidden",
              (Oe += "</ul>")
            );
          }
          var Ue = vjs_find(s, ".vjs-settings-list");
          if ("" !== We) {
            Ue.innerHTML = We + Ue.innerHTML;
            if (ze) pe.appendChild(ze);
            if (Re) pe.appendChild(Re);
            n.removeClass(D, r);
            var $e = function (i) {
              var t = i.target.innerHTML;
              t = t.replace("x", "");
              e.setRate(t);
              ut("");
            };
            setTimeout(function () {
              vjs_mfind(s, ".vjs-speed").forEach((e) => {
                var i = !1;
                e.addEventListener(
                  "touchstart",
                  function () {
                    i = !1;
                  },
                  { passive: !0 }
                );
                e.onclick = function (e) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  if (!i) $e(e);
                };
                e.ontouchend = function (e) {
                  e.preventDefault();
                  e.stopImmediatePropagation();
                  if (!i) $e(e);
                };
                e.addEventListener(
                  "touchmove",
                  function () {
                    i = !0;
                  },
                  { passive: !0 }
                );
              });
            }, 200);
          }
          if (t.related.length > 1 && t.relatedMenu) {
            var Xe = t.related.length;
            q = vjs_El("div");
            var Ye = vjs_El("p");
            Ye.tabIndex = "0";
            Ye.innerHTML = _("Related");
            q.appendChild(Ye);
            Ye.addEventListener("click", function (e) {
              e.preventDefault();
              e.stopImmediatePropagation();
            });
            var Ke =
                '<div tabindex="0" role="button" aria-label="Previous related" aria-disabled="false" class="vjs-arrow vjs-arrow-prev vjs-disabled"><div class="vjs-prev"></div></div><div role="button" tabindex="0" aria-label="Next related" aria-disabled="false" class="vjs-arrow vjs-arrow-next"><div class="vjs-next"></div></div>',
              Qe = vjs_El("div", "vjs-related");
            q.innerHTML = q.innerHTML + Ke;
            q.className = "vjs-grid vjs-hidden";
            q.ariaLabel = "Related dialog";
            q.ariaHidden = "true";
            var Ve = vjs_El("div", "vjs-close-btn");
            Ve.role = "button";
            Ve.tabIndex = "0";
            Ve.ariaDisabled = "false";
            Ve.ariaLabel = _("Close related");
            Ve.innerHTML =
              '<span class="vjs-icon-placeholder" aria-hidden="true" data-id="close"></span>';
            Qe.tabindex = "-1";
            var Ze = s.offsetWidth,
              Ge = 0.8 * Ze;
            if (!0 !== H()) Ge = 0.9 * Ze;
            q.appendChild(Ve);
            q.appendChild(Qe);
            s.appendChild(q);
            var Je = vjs_find(q, ".vjs-arrow-prev"),
              ei = vjs_find(q, ".vjs-arrow-next");
            Je.onkeydown =
              ei.onkeydown =
              Ve.onkeydown =
                function (e) {
                  if (13 === e.which) e.target.click();
                };
            var ii = parseInt(vjs_find(s, ".vjs-prev").offsetWidth, 10) + 5;
            if (Je) Je.style.left = parseInt(Qe.style.left, 10) - ii + "px";
            if (ei) ei.style.left = Ge + parseInt(Qe.style.left, 10) + "px";
            var ti = vjs_El("div", "rel-block rel-anim");
            Qe.appendChild(ti);
            var si = t.related;
            E = 1;
            for (var ni = 0; ni < Xe; ni++) {
              var ai = vjs_El("div", "rel-parent"),
                oi = vjs_El("div", "rel-item");
              ai.appendChild(oi);
              ti.appendChild(ai);
              oi.innerHTML =
                '<a class="rel-url" target="' +
                t.target +
                '" href="' +
                si[ni].url +
                '" alt="' +
                si[ni].title +
                '"><span class="rel-bg" style="background-image:url(' +
                si[ni].thumb +
                ');"></span><label>' +
                si[ni].title +
                "</label><i>" +
                si[ni].duration +
                "</i></a>";
            }
            if (Xe < 7 && H()) {
              if (Je) n.addClass(Je, r);
              if (ei) n.addClass(ei, r);
            }
            var li = function (e) {
              e.stopPropagation();
              if (!n.hasClass(ei, "vjs-disabled")) {
                var i = Qe.offsetWidth;
                E++;
                n.removeClass(ei, "vjs-disabled");
                var t = (E - 1) * i;
                ti.style.left = "-" + t + "px";
                if (E === I) n.addClass(ei, "vjs-disabled");
                n.removeClass(Je, "vjs-disabled");
              }
            };
            if (ei)
              ei.onclick = function (e) {
                li(e);
              };
            var ri = function (e) {
              e.stopPropagation();
              if (!n.hasClass(Je, "vjs-disabled")) {
                var i = Qe.offsetWidth,
                  t = ((E -= 1) - 1) * i;
                vjs_find(s, ".rel-block").style.left = "-" + t + "px";
                if (Je && ei) {
                  if (1 === E) n.addClass(Je, "vjs-disabled");
                  n.removeClass(ei, "vjs-disabled");
                }
              }
            };
            if (Je)
              Je.onclick = function (e) {
                ri(e);
              };
            var di = vjs_find(s, ".vjs-related-button");
            di.onclick =
              di.ontouchend =
              di.onkeydown =
                function (i) {
                  i.preventDefault();
                  i.stopPropagation();
                  if ("keydown" === i.type) {
                    if (13 === i.which) {
                      e.related();
                      q.children[0].focus();
                    }
                  } else {
                    e.related();
                    q.children[0].focus();
                  }
                };
            q.onclick = function () {
              n.addClass(q, r);
              e.play();
            };
          }
          if (t.shareMenu) {
            (B = vjs_El("div", "vjs-sharing-overlay vjs-hidden")).ariaLabel =
              "Sharing Dialog";
            B.ariaHidden = "true";
            var vi = vjs_El("div", "vjs-sharing-container"),
              fi = vjs_El("div", "vjs-sharing-body"),
              ci = vjs_El("div", "vjs-close-btn vjs-share-close");
            ci.tabIndex = "0";
            ci.ariaLive = "polite";
            ci.ariaDisabled = "false";
            ci.ariaLabel = "Close share container";
            ci.innerHTML =
              '<span class="vjs-icon-placeholder" aria-hidden="true" data-id="close"></span>';
            ci.onkeydown = function (e) {
              if (13 === e.which) e.target.click();
            };
            var ui = vjs_El("p");
            ui.innerHTML = _("Share");
            ui.tabIndex = "0";
            ui.ariaLive = "polite";
            ui.ariaLabel = "Share section";
            ui.onclick = function (e) {
              e.preventDefault();
              e.stopPropagation();
            };
            var pi =
              '<div class="vjs-inputs-body"><h2>' +
              _("Link") +
              '</h2><input  aria-live="polite" aria-label="Copy video link" type="text" readonly class="perma"><h2 class="embd">' +
              _("Embed") +
              '</h2><input aria-label="Copy video embed code" aria-live="polite" class="embed-code embd" readonly type="text"></div>';
            pi +=
              '<div class="vjs-inputs-body"><h2>' + _("Social") + "</h2></div>";
            pi +=
              '<div class="vjs-share-block"><i title="Facebook" id="share_facebook" class="vjs-share-icon vjs-facebook-square" role="button" aria-live="polite" tabindex="0"><span class="vjs-icon-placeholder" data-id="facebook" aria-hidden="true"></span></i>';
            pi +=
              '<i title="Twitter" id="share_twitter" class="vjs-share-icon nv vjs-twitter-square" role="button" aria-live="polite" tabindex="0"><span class="vjs-icon-placeholder" data-id="twitter" aria-hidden="true"></span></i>';
            pi +=
              '<i title="Pinterest" id="share_pinterest" class="vjs-share-icon nv vjs-pinterest-square" role="button" aria-live="polite" tabindex="0"><span class="vjs-icon-placeholder" data-id="pinterest" aria-hidden="true"></span></i>';
            pi +=
              '<i title="LinkedIn" id="share_linkedin" class="vjs-share-icon nv vjs-linkedin-square" role="button" aria-live="polite" tabindex="0"><span class="vjs-icon-placeholder" data-id="linkedin" aria-hidden="true"></span></i></div>';
            fi.innerHTML = pi;
            vi.appendChild(fi);
            B.appendChild(ui);
            B.appendChild(vi);
            B.appendChild(ci);
            var hi = t.url || document.location.href,
              mi = !1;
            s.appendChild(B);
            var ji = vjs_find(s, ".vjs-share-button");
            ji.onclick =
              ji.ontouchend =
              ji.onkeydown =
                function (i) {
                  i.preventDefault();
                  i.stopPropagation();
                  if ("keydown" === i.type) {
                    if (13 === i.which) {
                      e.share();
                      ui.focus();
                    }
                  } else e.share();
                };
            var gi = function (i) {
                i.stopPropagation();
                var s,
                  n = t.title || t.metatitle || document.title,
                  a = encodeURIComponent(hi);
                n = encodeURIComponent(n);
                switch (i.target.id.split("_")[1]) {
                  case "facebook":
                    s =
                      "//www.facebook.com/sharer/sharer.php?u=" + a + "&t=" + n;
                    break;
                  case "twitter":
                    s = "//twitter.com/intent/tweet?url=" + a + "&text=" + n;
                    break;
                  case "pinterest":
                    if (e.poster())
                      s =
                        "//pinterest.com/pin/create/button/?media=" +
                        encodeURIComponent(e.poster()) +
                        "&url=" +
                        a +
                        "&description=" +
                        n;
                    break;
                  case "linkedin":
                    s =
                      "//www.linkedin.com/shareArticle?mini=true&url=" +
                      a +
                      "&ttitle=" +
                      n;
                }
                if ("" !== s)
                  window.open(
                    s,
                    "Share",
                    "height=450,width=550,modal=yes,alwaysRaised=yes,personalbar=0,toolbar=0,scrollbars=0,resizable=0"
                  );
              },
              bi = s.querySelectorAll(".vjs-share-icon");
            for (ni = 0; ni < bi.length; ni++)
              bi[ni].onclick = bi[ni].onkeydown = function (e) {
                if ("keydown" === e.type) {
                  if (13 === e.which) gi(e);
                } else gi(e);
              };
            vjs_find(B, ".embed-code").onclick = function (e) {
              e.stopImmediatePropagation();
              this.select();
            };
            vjs_find(B, ".perma").onclick = function (e) {
              e.stopImmediatePropagation();
              this.select();
            };
            B.onclick = function () {
              n.addClass(B, r);
              if (!0 !== mi) e.play();
            };
          }
          if (t.zoomMenu) {
            var yi,
              _i,
              Ci,
              wi = e.$(".vjs-tech");
            if (t.zoomInfo) {
              var ki = vjs_El("div", "vjs-zoom-parent vjs-hidden"),
                xi = vjs_El("div", "vjs-reset-zoom");
              xi.innerHTML = "100%";
              ki.appendChild(xi);
              var Ti = vjs_El(
                  "div",
                  "vjs-reset-center",
                  '<span data-id="center" aria-hidden="true" class="vjs-icon-placeholder"></span>'
                ),
                Ei = vjs_El(
                  "div",
                  "vjs-reset-cancel",
                  '<span data-id="cancel" aria-hidden="true" class="vjs-icon-placeholder"></span>'
                ),
                Li = vjs_El(
                  "div",
                  "vjs-reset-info",
                  '<span data-id="help" aria-hidden="true" class="vjs-icon-placeholder"></span>'
                );
              ki.appendChild(Ti);
              ki.appendChild(Ei);
              ki.appendChild(Li);
              var Ii = _("Drag zoomed area using your mouse."),
                Mi = _("Use ZOOM slider or mouse wheel to ZOOM in video."),
                Si = _("ZOOM HELP"),
                Hi = vjs_El("div", "vjs-zoom-help vjs-hidden");
              if (t.zoomWheel)
                Hi.innerHTML =
                  '<div class="zoom-close">x</div><div>' +
                  Si +
                  "</div>" +
                  Mi +
                  "<div>" +
                  Ii +
                  "</div>";
              else
                Hi.innerHTML =
                  '<div class="zoom-close">x</div><div>' +
                  Si +
                  "</div>" +
                  Ii +
                  "</div>";
              ki.appendChild(Li);
              Li.onclick = function (e) {
                Bi(e);
              };
              function Bi(e) {
                e.preventDefault();
                if (n.hasClass(Hi, r)) n.removeClass(Hi, r);
              }
              vjs_find(Hi, ".zoom-close").onclick = function () {
                n.addClass(Hi, r);
              };
              s.appendChild(Hi);
              Ei.onmouseup = function () {
                Yt();
              };
              Ti.onmouseup = function (e) {
                Xt(e);
              };
              s.appendChild(ki);
            }
            var qi = vjs_find(s, ".vjs-zoom-reset");
            if (qi)
              qi.onmouseup = function () {
                Yt();
              };
            if (!s.hasAttribute("tabIndex")) s.tabIndex = "-1";
            if (t.zoomWheel && !0 !== browser.TOUCH_ENABLED) {
              wi.addEventListener("mousewheel", Ni, { passive: !0 });
              wi.addEventListener("DOMMouseScroll", Ni, { passive: !0 });
              function Ni(e) {
                e.preventDefault();
                e.stopPropagation();
                var i = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
                if ((S = (100 * S + 20 * i) / 100) < 1) S = 1;
                if (S > 5) S = 5;
                if (1 === S) {
                  Yt();
                  if (t.zoomInfo) n.addClass(ki, r);
                } else {
                  if (t.zoomInfo) n.removeClass(ki, r);
                  Vt(wi, S);
                }
                var a = vjs_find(s, ".vjs-zoom-menu");
                if (!0 !== n.hasClass(a, r)) {
                  var o = ((S - 1) / 4) * 100;
                  vjs_find(s, ".vjs-zoom-level").style.height = o + "%";
                }
                _t(100 * S);
                return !1;
              }
            }
            function Pi(e) {
              if (S > 1) {
                e.preventDefault();
                e.stopPropagation();
                yi = !0;
                Ci = [wi.offsetLeft - e.clientX, wi.offsetTop - e.clientY];
                wi.style.pointerEvents = "none";
                document.addEventListener("mouseup", Ai, !0);
                document.addEventListener("mousemove", Di, !0);
              }
            }
            function Di(e) {
              e.preventDefault();
              if (yi) {
                var i = (_i = { x: e.clientX, y: e.clientY }).x + Ci[0],
                  t = _i.y + Ci[1],
                  n = (s.offsetWidth / 2) * (S - 1),
                  a = (s.offsetHeight / 2) * (S - 1);
                if (i > n) i = n;
                if (i < -1 * n) i = -1 * n;
                if (t > a) t = a;
                if (t < -1 * a) t = -1 * a;
                wi.style.left = i + "px";
                wi.style.top = t + "px";
              }
            }
            function Ai() {
              wi.style.pointerEvents = "auto";
              yi = !1;
              document.removeEventListener("mouseup", Ai, !0);
              document.removeEventListener("mousemove", Di, !0);
            }
            wi.onmousedown = function (e) {
              Pi(e);
            };
            var Wi = vjs_find(s, ".vjs-zoom-slider");
            function zi(i, t) {
              wi.style.pointerEvents = "auto";
              var a = vjs_find(s, ".vjs-zoom-parent"),
                o = i.pageY,
                l = t.offsetHeight,
                d = o - Zt(t);
              if (d > l) d = l;
              if (d < 0) d = 0;
              var v = parseInt(100 - (d / l) * 100, 10);
              if (v < 0) v = 0;
              if (v > 100) v = 100;
              try {
                vjs_find(s, ".vjs-zoom-level").style.height = v + "%";
              } catch (i) {
                lint(i);
              }
              try {
                vjs_find(s, ".zoom-thumb").style.height = v + "%";
              } catch (i) {
                lint(i);
              }
              var f = 1 + (4 * v) / 100;
              S = f;
              Wi.setAttribute("aria-valuetext", 100 * f + "%");
              Vt(e.$(".vjs-tech"), f);
              _t(100 * f);
              if (f > 1) {
                videojs.options.blockKeys = !0;
                n.removeClass(a, r);
              } else {
                Yt();
                videojs.options.blockKeys = !1;
                n.addClass(a, r);
              }
            }
            Wi.onclick = function (e) {
              e.stopImmediatePropagation();
            };
            Wi.onmousedown = function (e) {
              Ri(e);
            };
            function Ri(e) {
              e.stopImmediatePropagation();
              var i = Wi;
              zi(e, i);
              document.addEventListener("mousemove", t, !1);
              document.addEventListener("mouseup", s, !1);
              function t(e) {
                zi(e, i);
              }
              function s() {
                document.removeEventListener("mouseup", s);
                document.removeEventListener("mousemove", t);
              }
            }
          }
          Ue.onkeydown = function (e) {
            var i = e.which;
            if (40 === i || 38 === i || 13 === i || 39 === i || 27 === i) {
              e.preventDefault();
              e.stopImmediatePropagation();
              if (40 === i) nt(Ue);
              if (38 === i) at(Ue);
              if (13 === i) e.target.click();
              if (39 === i && n.hasClass(e.target, "vjs-menu-forward"))
                e.target.click();
              if (27 === i) D.click();
            }
          };
          if (vjs_find(s, ".vjs-extend-speed")) {
            var Oi = vjs_find(s, ".vjs-menu-speed"),
              Fi = vjs_find(Oi, ".vjs-menu-content");
            Fi.onkeydown = function (e) {
              let i = e.which;
              if (40 === i || 38 === i || 27 === i || 37 === i || 13 === i) {
                e.preventDefault();
                e.stopImmediatePropagation();
                if (40 === i) nt(Fi);
                if (38 === i) at(Fi);
                if (27 === i || 37 === i)
                  vjs_find(Oi, ".vjs-settings-back").click();
                if (13 === i) {
                  var t = st(Fi);
                  Fi.children[t].click();
                }
              }
            };
          }
          var Ui = vjs_find(s, ".vjs-zoom-menu");
          if (Ui) {
            Ui.onkeydown = function (e) {
              if (27 === e.which || 37 === e.which) {
                e.preventDefault();
                e.stopImmediatePropagation();
                vjs_find(Ui, ".vjs-settings-back").click();
              }
            };
            var $i = vjs_find(Ui, ".vjs-zoom-reset");
            $i.onkeydown = function (e) {
              if (13 === e.which) {
                e.preventDefault();
                e.stopImmediatePropagation();
                Yt();
                $i.click();
              }
            };
          }
          wt();
          Ct();
          xt();
          e.trigger("menusReady");
        }
        var Xi,
          Yi,
          Ki = !1;
        e.on("timeupdate", function () {
          if (n.hasClass(s, "vjs-ad-playing") || n.hasClass(s, "vjs-dai"))
            return !1;
          var i = e.duration();
          if (0 !== i && i !== 1 / 0) {
            var a = e.video_id(),
              o = e.currentTime();
            if (
              t.limit &&
              (t.limiturl || "" !== t.url) &&
              parseInt(e.duration(), 10) > 0
            ) {
              if (t.startTime)
                if (Number(t.startTime) > 0 && Number(t.limit) > 0)
                  t.limit = Number(t.startTime) + Number(t.limit);
              if (o > t.limit) {
                e.pause();
                if (!0 !== Ki) {
                  if (!t.limiturl) t.limiturl = t.url;
                  Ki = !0;
                  var l = vjs_El("div", "vjs-limit-overlay"),
                    r = vjs_El("a", "vjs-limit");
                  r.href = t.limiturl;
                  r.target = t.target;
                  r.style.textDecoration = "none";
                  l.appendChild(r);
                  if (t.limitimage) {
                    vjs_El("img").src = t.limitimage;
                    r.innerHTML = '<img src="' + t.limitimage + '" />';
                  } else {
                    var d = vjs_El("span");
                    d.innerHTML =
                      t.limitmessage + "<span>" + t.limiturl + "</span>";
                    r.appendChild(d);
                  }
                  s.appendChild(l);
                }
              }
            }
            if (null !== a)
              if (t.resume && void 0 !== a) {
                o = parseFloat(o);
                var v = String("vjs_resume-" + a);
                if (o > 5 && o < i - 20) {
                  localStorage.removeItem(v);
                  Qt(v, o);
                }
                if (o > i - 10) localStorage.removeItem(v);
              }
          }
        });
        e.on("volumechange", function () {
          if (e.volume() > 0) Qt("volume", e.volume());
        });
        e.on("seeked", function () {
          if (n.hasClass(s, "vjs-ad-playing") || n.hasClass(s, "vjs-dai"))
            return !1;
        });
        e.on("ended", function () {
          if (
            !(
              n.hasClass(s, "vjs-ad-playing") ||
              n.hasClass(s, "vjs-dai") ||
              n.hasClass(s, "vjs-up-next")
            )
          ) {
            var i = !0;
            if (t.playlist) {
              i = !1;
              if (
                e.playlist.currentIndex() === e.playlist.lastIndex() &&
                !0 !== e.playlist.repeat()
              )
                i = !0;
            }
            if (i) {
              var a = e.video_id();
              if (t.resume && null != a)
                try {
                  localStorage.removeItem(String("vjs_resume-" + a));
                } catch (e) {
                  lint(e);
                }
              if (t.customEnd) {
                var o = vjs_El("div", "vjs-cend"),
                  l = vjs_El("div", "cend-inner");
                o.appendChild(l);
                l.innerHTML = t.customEnd;
                n.addClass(Q.el_, r);
                e.el().appendChild(o);
                e.one("play", function () {
                  e.el().removeChild(o);
                });
              } else if ("" !== t.endAction) {
                if (t.settingsButton && "share" === t.endAction && t.shareMenu)
                  e.share();
                else if (
                  t.settingsButton &&
                  "related" === t.endAction &&
                  t.relatedMenu &&
                  q
                )
                  e.related();
              } else n.removeClass(Q.el_, r);
            }
          }
        });
        e.on("playing", function () {
          if (n.hasClass(s, "vjs-ad-playing") || n.hasClass(s, "vjs-dai"))
            return !1;
          if (q) ft(q, !1);
          if (B) ft(B, !1);
          n.removeClass(f, r);
          n.removeClass(f, "vjs-abs-hidden");
          if (
            (e.remoteTextTracks ? e.remoteTextTracks() : []).length < 1 &&
            browser.IS_IOS
          )
            n.addClass(vjs_find(s, ".vjs-subs-caps-button"), r);
        });
        e.on("userinactive", function () {
          e.textTrackSettings.updateDisplay();
        });
        e.on("useractive", function () {
          e.textTrackSettings.updateDisplay();
        });
        e.reconnect = function () {
          var i = e.currentSource();
          e.poster("");
          e.src(i);
          e.play();
        };
        Xi = function () {
          clearTimeout(Yi);
          Yi = setTimeout(function () {
            e.userActive(!1);
          }, 100);
        };
        e.on("mouseleave", function () {
          Xi();
        });
        e.one("canplay", function () {
          if (e.$(".vjs-tech").autoplay)
            setTimeout(function () {
              if (e.paused()) {
                e.muted(!0);
                e.play();
                var i = null;
                if (t.automuteButton) {
                  i = vjs_El("button", "vjs-auto-mute");
                  if (videojs.svgIcons)
                    i.innerHTML =
                      '<span class="vjs-svg-icon"><svg viewBox="0 0 32 32"><use href="#vjs-icon-mute"></use></svg></span><span class="unmute-txt">' +
                      _("Unmute") +
                      "</span>";
                  i.type = "button";
                  i.title = "Unmute";
                  s.appendChild(i);
                  i.onclick = i.ontouchend = function (t) {
                    t.preventDefault();
                    t.stopPropagation();
                    e.muted(!1);
                    s.removeChild(i);
                  };
                  e.on("volumechange", function () {
                    if (!0 !== e.muted()) s.removeChild(i);
                  });
                }
              }
            }, 500);
        });
        e.on("play", function () {
          var i = vjs_find(s, ".vjs-picture-in-picture-control");
          if (!0 !== t.pipButton && i) i.parentNode.removeChild(i);
          if (n.hasClass(s, "vjs-ad-playing") || n.hasClass(s, "vjs-dai"))
            return !1;
          n.hasClass(s, "vjs-live");
          if (t.singlePlay) {
            var a = vjs_mfind(document, "video");
            if (a.length > 1)
              for (var o = 0; o < a.length; o++) {
                var l = e.$(".vjs-tech");
                if (a[o] !== l) a[o].pause();
              }
          }
          t.currentSlide = "";
          zt();
          f.style.opacity = 1;
          if (!W) {
            mt();
            W = !0;
            if (!0 !== e.isAudio()) n.addClass(u, "vjs-no-pointer");
          }
        });
        if (t.mirrorButton) {
          e.controlBar.mirrorButton = e.controlBar.addChild("button", {
            el: n.createEl(
              "button",
              {
                text: "Mirror view",
                className: "vjs-mirror-button vjs-control vjs-button",
              },
              {
                role: "button",
                "aria-live": "polite",
                "aria-disabled": "false",
              }
            ),
          });
          e.controlBar.mirrorButton.el_.innerHTML = ot(
            "mirror1",
            _("Mirror View")
          );
          e.controlBar.el_.insertBefore(e.controlBar.mirrorButton.el_, J.el_);
          var Qi = function (i) {
            var t = "rotateY(0)";
            if (n.hasClass(i.target, "vjs-mirrored")) {
              n.removeClass(i.target, "vjs-mirrored");
              b(i.target, "mirror1");
            } else {
              n.addClass(i.target, "vjs-mirrored");
              t = "rotateY(180deg)";
              b(i.target, "mirror2");
            }
            var s = e.$(".vjs-tech");
            s.style.transform = t;
            s.style.webkitTransform = t;
            s.style.msTransform = t;
          };
          e.controlBar.mirrorButton.el_.onclick =
            e.controlBar.mirrorButton.el_.ontouchend = function (e) {
              e.preventDefault();
              e.stopPropagation();
              Qi(e);
            };
        }
        if (!0 !== videojs.nuevo) s.parentNode.removeChild(s);
        if (videojs.svgIcons) {
          function Vi() {
            s.querySelectorAll(".vjs-icon-placeholder").forEach(function (e) {
              if (e.getAttribute("data-id")) {
                let i = e.getAttribute("data-id").trim();
                const t = "http://www.w3.org/2000/svg",
                  s = document.createElementNS(t, "svg");
                s.setAttributeNS(null, "viewBox", "0 0 32 32");
                const n = document.createElementNS(t, "use");
                s.appendChild(n);
                n.setAttributeNS(null, "href", "#vjs-icon-" + i);
                e.appendChild(s);
                videojs.dom.addClass(e, "vjs-svg-icon");
              }
            });
          }
          let i = {
            "vjs-big-play-button": "big-play",
            "vjs-picture-in-picture-control": "pip",
            "vjs-fullscreen-control": "fullscreen",
            "vjs-play-control": "play",
            "vjs-chapters-button": "chapters",
            "vjs-descriptions-button": "descriptions",
            "vjs-subs-caps-button": "captions",
            "vjs-audio-button": "audio",
          };
          for (var Zi in i)
            if (i.hasOwnProperty(Zi)) {
              let e = vjs_find(s, "." + Zi);
              if (e) {
                let t = e.querySelector(".vjs-icon-placeholder");
                if (t) t.setAttribute("data-id", i[Zi]);
              }
            }
          Gi(!0);
          Vi();
          e.on("pause", function () {
            b(vjs_find(c, ".vjs-play-control"), "play");
            b(vjs_find(s, ".vjs-b-p-b"), "play");
          });
          e.on("play", function () {
            b(vjs_find(c, ".vjs-play-control"), "pause");
            b(vjs_find(s, ".vjs-b-p-b"), "pause");
          });
          e.on("ended", function () {
            b(vjs_find(c, ".vjs-play-control"), "replay");
          });
          e.$(".vjs-tech").addEventListener("enterpictureinpicture", () => {
            b(vjs_find(c, ".vjs-picture-in-picture-control"), "pip-full");
          });
          e.$(".vjs-tech").addEventListener("leavepictureinpicture", () => {
            b(vjs_find(c, ".vjs-picture-in-picture-control"), "pip");
          });
          e.on("volumechange", function () {
            Gi();
          });
          e.on("fullscreenchange", function (i) {
            let t = vjs_find(c, ".vjs-fullscreen-control");
            if (e.isFullscreen()) b(t, "fullscreen-back");
            else b(t, "fullscreen");
          });
          function Gi(i) {
            let t = e.volume(),
              s = vjs_find(c, ".vjs-mute-control");
            var n = "mute";
            if (e.muted()) n = "mute";
            else {
              if (t > 0) n = "volume1";
              if (t > 0.25) n = "volume2";
              if (t > 0.75) n = "volume3";
            }
            if (i)
              s.querySelector(".vjs-icon-placeholder").setAttribute(
                "data-id",
                n
              );
            else b(s, n);
          }
        }
        s.style.visibility = "visible";
        e.trigger("nuevoReady");
      } else s.innerHTML = "";
    }
    function Ji(e) {
      return e.touches[0].pageX || null;
    }
    function et(e) {
      if ("mouse" === e.pointerType) {
        o = !0;
        s.classList.remove(h);
        s.classList.remove(p);
        tt(!1);
      }
    }
    function it() {
      s.classList.remove("vjs-has-mouse");
      tt(!0);
    }
    function tt(e) {
      var i = vjs_find(s, ".vjs-rewind-control"),
        a = vjs_find(s, ".vjs-forward-control"),
        o = vjs_find(s, ".vjs-extend-zoom"),
        l = vjs_find(s, ".vjs-related"),
        d = vjs_find(s, ".vjs-grid"),
        v = null,
        f = null;
      if (d) {
        v = vjs_find(d, ".vjs-arrow-prev");
        f = vjs_find(d, ".vjs-arrow-next");
      }
      if (e) {
        s.classList.remove("vjs-has-mouse");
        if (i)
          if (t.touchRewindForward && t.touchControls) n.addClass(i, r);
          else i.setAttribute("style", "display:block!important");
        if (a)
          if (t.touchRewindForward && t.touchControls) n.addClass(a, r);
          else a.setAttribute("style", "display:block!important");
        if (o) n.addClass(o, r);
        if (l) n.addClass(l, "vjs-scroll");
        if (v) n.addClass(v, r);
        if (f) n.addClass(f, r);
      } else {
        s.classList.add("vjs-has-mouse");
        if (i) n.removeClass(i, r);
        if (a) n.removeClass(a, r);
        if (o) n.removeClass(o, r);
        if (l) {
          n.removeClass(l, r);
          n.removeClass(l, "vjs-scroll");
        }
        if (v) n.removeClass(v, r);
        if (f) n.removeClass(f, r);
      }
    }
    function st(e) {
      for (var i = document.activeElement, t = 0; t < e.children.length; t++)
        if (e.children[t] === i) return t;
      return 0;
    }
    function nt(e) {
      let i = st(e);
      if (i < e.children.length) e.children[i + 1].focus();
    }
    function at(e) {
      let i = st(e);
      if (i > 0) e.children[i - 1].focus();
    }
    function ot(e, i) {
      return (
        '<span class="vjs-icon-placeholder" aria-hidden="true" data-id="' +
        e +
        '"></span><span class="vjs-control-text" aria-live="polite">' +
        i +
        "</span>"
      );
    }
    function lt() {
      if (s.className.includes(p)) rt();
      else {
        if (document.pictureInPictureElement) return;
        n.removeClass(s, h);
        n.addClass(s, p);
        n.removeClass(s, "vjs-user-inactive");
        n.addClass(s, "vjs-user-active");
        ut("");
        dt();
      }
    }
    function rt() {
      clearTimeout(e.touchtimer);
      n.removeClass(s, p);
      n.addClass(s, h);
      n.removeClass(s, "vjs-user-active");
      n.addClass(s, "vjs-user-inactive");
    }
    function dt() {
      clearTimeout(e.touchtimer);
      e.userActive(!1);
      e.touchtimer = setTimeout(rt, X);
    }
    function vt(i) {
      e.options_.inactivityTimeout = X;
      lt();
    }
    function ft(e, i) {
      if (e)
        if (i) {
          n.removeClass(e, r);
          e.ariaHidden = "false";
        } else {
          n.addClass(e, r);
          e.ariaHidden = "true";
        }
    }
    function ct(i) {
      var s = "vjs-rewind-control";
      if (i) s = "vjs-rewind-control vjs-rewind-first";
      var a = e.controlBar.addChild("button", {
        el: n.createEl(
          "button",
          {
            className:
              s + " vjs-control vjs-button vjs-rewind-" + t.rewindforward,
          },
          { title: _("Rewind"), type: "button", "aria-disabled": "false" }
        ),
      });
      a.el_.innerHTML = ot("rewind" + t.rewindforward, _("Rewind"));
      if (i)
        if ("party" === t.skin)
          c.insertBefore(
            a.el_,
            e.controlBar.getChild("playToggle").el_.nextSibling
          );
        else c.insertBefore(a.el_, e.controlBar.getChild("playToggle").el_);
      else
        e.controlBar.el_.insertBefore(
          a.el_,
          e.controlBar.getChild("playToggle").el_.nextSibling
        );
      a.el_.onclick = a.el_.ontouchend = function (i) {
        i.preventDefault();
        i.stopImmediatePropagation();
        e.rewind();
      };
    }
    function ut(i) {
      if (!e.isDisposed())
        if (!l) {
          if (!i) i = vjs_find(s, ".vjs-play-control");
          if (n.hasClass(i, "vjs-cast")) return !1;
          var t = i.className;
          if ("string" == typeof t || t instanceof String) {
            if (t.indexOf("vjs-settings-item") > -1) return;
            if (t.indexOf("vjs-quality-button") < 0) {
              var a = vjs_find(P, ".vjs-menu");
              if (n.hasClass(a, "vjs-lock-showing"))
                n.removeClass(a, "vjs-lock-showing");
            }
            if (t.indexOf("vjs-chapters-button") < 0)
              e.controlBar.getChild("chaptersButton").unpressButton();
            if (t.indexOf("vjs-descriptions-button") < 0)
              e.controlBar.getChild("descriptionsButton").unpressButton();
            if (t.indexOf("vjs-subs-caps-button") < 0)
              e.controlBar.getChild("subsCapsButton").unpressButton();
            if (t.indexOf("vjs-audio-button") < 0)
              e.controlBar.getChild("audioTrackButton").unpressButton();
            if (
              t.indexOf("vjs-cog-button") < 0 &&
              t.indexOf("vjs-extend-speed") < 0
            ) {
              pt();
              n.removeClass(D, "vjs-cog-active");
            }
          }
        }
    }
    function pt() {
      for (
        var e = he, i = vjs_mfind(s, ".vjs-submenu"), t = 0;
        t < i.length;
        t++
      ) {
        n.addClass(i[t], r);
        if (i[t] === e) n.removeClass(e, r);
      }
      n.removeClass(ue, "vjs-lock-showing");
      n.addClass(ue, r);
      D.ariaExpanded = "false";
    }
    function ht(e) {
      if (e.title) {
        e.onmouseover = function () {
          e.tmptitle = e.title;
          e.title = "";
        };
        e.onmouseleave = function () {
          e.title = e.tmptitle;
        };
      }
    }
    function mt() {
      var i = e.el_.offsetWidth;
      [
        "vjs-1600",
        "vjs-1080",
        "vjs-920",
        "vjs-600",
        "vjs-640",
        "vjs-480",
        "vjs-360",
      ].forEach((e) => {
        n.removeClass(s, e);
      });
      if (i < 360) {
        n.addClass(s, "vjs-360");
        n.addClass(s, "vjs-480");
      } else if (i < 480) n.addClass(s, "vjs-480");
      else if (i < 640) {
        n.addClass(s, "vjs-640");
        if (i < 600) n.addClass(s, "vjs-600");
      } else if (i < 920) n.addClass(s, "vjs-920");
      else if (i < 1080) {
        n.addClass(s, "vjs-920");
        n.addClass(s, "vjs-1080");
      } else {
        n.addClass(s, "vjs-920");
        n.addClass(s, "vjs-1080");
        n.addClass(s, "vjs-1600");
      }
    }
    function jt() {
      mt();
      kt();
      xt();
      ut("");
    }
    function gt(i) {
      e.options_.innactivityTimeout = $;
      i.stopImmediatePropagation();
      ut(i.target);
    }
    function bt(e) {
      if (!s.contains(e.target)) rt();
    }
    function yt() {
      var e = 0,
        i = vjs_mfind(s, ".item-quality");
      if (Array.isArray(i))
        i.forEach((e) => {
          e.onclick = null;
        });
      var t = vjs_mfind(s, ".item-quality");
      for (e = 0; e < t.length; e++) t[e].parentNode.removeChild(t[e]);
      var a = vjs_find(s, ".vjs-extend-quality");
      if (a) n.addClass(a, r);
      vjs_find(P, ".vjs-menu .vjs-menu-content").innerHTML = "";
      n.addClass(P, r);
    }
    function _t(e) {
      try {
        vjs_find(s, ".vjs-reset-zoom").innerHTML = parseInt(e, 10) + "%";
        vjs_find(s, ".zoom-label").innerHTML = parseInt(e, 10) + "%";
      } catch (e) {
        lint(e);
      }
    }
    function Ct() {
      var e = vjs_find(s, ".vjs-menu-speed"),
        i = vjs_find(s, ".vjs-zoom-menu"),
        t = vjs_find(s, ".vjs-menu-quality"),
        a = s.querySelector(".vjs-settings-list"),
        o = function (s, a, o) {
          n.addClass(he, r);
          n.removeClass(a, r);
          setTimeout(function () {
            if (e)
              if (e === a) vjs_find(e, ".vjs-menu-content").children[0].focus();
            if (i)
              if (i !== a) n.addClass(i, r);
              else vjs_find(i, ".vjs-zoom-slider").focus();
            if (t) if (t !== a) n.addClass(t, r);
            pe.style.width = A[o].width + "px";
            pe.style.height = A[o].height + "px";
          }, 10);
        },
        l = function (s) {
          if (i) n.addClass(i, r);
          if (e) n.addClass(e, r);
          if (t) n.addClass(t, r);
          n.removeClass(he, r);
          pe.style.width = A.cogMenu.width + "px";
          pe.style.height = A.cogMenu.height + "px";
          _t(100 * S);
          setTimeout(function () {
            a.children[0].focus();
          }, 100);
        };
      if (e) {
        var d = vjs_find(s, ".vjs-extend-speed");
        d.onclick = d.ontouchend = function (i) {
          i.preventDefault();
          i.stopImmediatePropagation();
          o(i, e, "speedMenu");
        };
        var v = vjs_find(e, ".vjs-settings-back");
        v.onclick = v.ontouchend = function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          l(e);
        };
      }
      if (i) {
        var f = vjs_find(s, ".vjs-extend-zoom");
        f.onclick = f.ontouchend = function (e) {
          e.stopPropagation();
          o(e, i, "zoomMenu");
        };
        vjs_find(i, ".vjs-settings-back").onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          l(e);
        };
      }
      var c = function (t) {
        if (!vjs_find(s, ".vjs-tech-chromecast")) {
          xt();
          if (i) n.addClass(i, r);
          if (e) n.addClass(e, r);
          if (!0 !== n.hasClass(ue, "vjs-lock-showing")) {
            t.target.ariaExpanded = "true";
            ut(t.target);
            n.addClass(ue, "vjs-lock-showing");
            vjs_find(D, ".vjs-control-text").style.opacity = 0;
            n.addClass(t.target, "vjs-cog-active");
            n.removeClass(ue, r);
            n.removeClass(he, r);
            pe.style.width = A.cogMenu.width + "px";
            pe.style.height = A.cogMenu.height + "px";
            _t(100 * S);
            setTimeout(function () {
              a.children[0].focus();
            }, 100);
          } else {
            pt();
            n.removeClass(t.target, "vjs-cog-active");
          }
        }
      };
      D.onclick = D.ontouchend = function (e) {
        e.preventDefault();
        e.stopPropagation();
        c(e);
      };
      D.onkeydown = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (13 === e.which) c(e);
      };
      D.onmouseover = function () {
        if (!0 !== n.hasClass(ue, "vjs-lock-showing"))
          vjs_find(D, ".vjs-control-text").removeAttribute("style");
      };
    }
    function wt() {
      var e = P,
        i = vjs_find(e, ".vjs-menu"),
        a = vjs_find(i, ".vjs-menu-content");
      if (M > 1) {
        var o = function (i) {
          if (n.hasClass(i.target, "vjs-quality-button")) {
            if (n.hasClass(i.target, "vjs-cast")) return !1;
            var o,
              l = vjs_find(i.target, ".vjs-control-text"),
              r = vjs_find(e, ".vjs-menu");
            switch (t.skin) {
              case "treso":
                o = 25;
                break;
              case "jwlike":
              case "shaka":
              case "roundal":
                o = 15;
                break;
              case "pinko":
              case "flow":
                o = 10;
                break;
              case "mockup":
                o = 20;
                break;
              default:
                o = 5;
            }
            if (n.hasClass(r, "vjs-lock-showing")) {
              i.target.ariaExpanded = "false";
              n.removeClass(r, "vjs-lock-showing");
              if (l) l.removeAttribute("style");
            } else {
              ut(i.target);
              var d = s.offsetHeight - c.offsetHeight - 30 - o;
              if (s.offsetWidth < 480) d = s.offsetHeight - 40;
              if (!n.hasClass(s, "vjs-casting")) a.style.maxHeight = d + "px";
              n.addClass(r, "vjs-lock-showing");
              i.target.ariaExpanded = "true";
              l.style.opacity = "0";
              var v = vjs_find(r, "ul");
              setTimeout(function () {
                v.children[0].focus();
              }, 100);
            }
          }
        };
        e.onclick = e.ontouchend = function (e) {
          e.stopPropagation();
          o(e);
        };
        e.onkeydown = function (e) {
          if (13 === e.which) o(e);
        };
        e.onmouseover = function (e) {
          var i = vjs_find(e.target, ".vjs-menu");
          if (i)
            if (!0 !== n.hasClass(i, "vjs-lock-showing")) {
              var t = vjs_find(e.target, ".vjs-control-text");
              if (t) t.removeAttribute("style");
            }
        };
      }
      var l = vjs_find(s, ".vjs-menu-quality"),
        d = function (e, i, t) {
          n.addClass(he, r);
          n.removeClass(i, r);
          if (Re) if (Re !== i) n.addClass(Re, r);
          if (l) if (l !== i) n.addClass(l, r);
          pe.style.width = A[t].width + "px";
          pe.style.height = A[t].height + "px";
          vjs_find(l, ".vjs-menu-content").children[0].focus();
        },
        v = function (e) {
          if (Re) n.addClass(Re, r);
          if (ze) n.addClass(ze, r);
          if (l) n.addClass(l, r);
          n.removeClass(he, r);
          pe.style.width = A.cogMenu.width + "px";
          pe.style.height = A.cogMenu.height + "px";
          _t(100 * S);
        };
      if (l && t.qualityMenu) {
        n.removeClass(vjs_find(s, ".vjs-cog-menu-button"), r);
        l.onclick = function (e) {
          e.stopPropagation();
        };
        var f = vjs_find(s, ".vjs-extend-quality");
        f.onclick = f.ontouchend = function (e) {
          e.preventDefault();
          e.stopPropagation();
          d(e, l, "qualityMenu");
        };
        var u = vjs_find(l, ".vjs-settings-back");
        u.onclick = u.ontouchend = function (e) {
          e.preventDefault();
          e.stopPropagation();
          v(e);
        };
      }
    }
    function kt() {
      if (!0 === t.menus) {
        var e = t.related.length,
          i = 0.8,
          a = 800;
        if (vjs_find(s, ".rel-block")) {
          n.removeClass(vjs_find(s, ".rel-block"), "rel-anim");
          var o = s.offsetWidth,
            l = o * i;
          if (l > a) l = a;
          var r = parseInt(vjs_find(s, ".vjs-related").style.maxWidth, 10);
          if (isNaN(r)) r = 0;
          if (parseInt(r, 10) < 100) r = a;
          if (l > r) l = r;
          var d = vjs_find(s, ".vjs-related");
          if (a < r) d.style.maxWidth = a + "px";
          else d.style.maxWidth = "800px";
          d.style.width = 100 * i + "%";
          var v = 3,
            f = 2;
          if (e < 5 && 3 !== e) v = 2;
          if (e < 4) f = 1;
          if (l < 480) {
            v = 2;
            f = 1;
          }
          var c = (l / v) * 0.5625,
            u = l / v,
            p = Math.ceil(e / 6);
          if (E > p) E = p;
          I = p;
          if (2 === v && 2 === f) I = Math.ceil(e / 4);
          if (2 === v && 1 === f) I = Math.ceil(e / 2);
          var h = c * f;
          d.style.height = h + "px";
          var m = o / 2 - l / 2;
          d.style.top = 0.55 * s.offsetHeight - h / 2 + "px";
          d.style.left = o / 2 - l / 2 + "px";
          var j = vjs_find(s, ".vjs-arrow-prev"),
            g = vjs_find(s, ".vjs-arrow-next");
          if (H() && j && g) {
            var b = parseInt(vjs_find(s, ".vjs-prev").offsetWidth + 5, 10);
            j.style.left = m - b + "px";
            g.style.left = l + m + "px";
            n.removeClass(g, "vjs-disabled");
            n.removeClass(j, "vjs-disabled");
            if (E === I) n.addClass(g, "vjs-disabled");
            if (1 === E) n.addClass(j, "vjs-disabled");
          }
          if (E > 1) {
            var y = d.offsetWidth,
              _ = (E - 1) * y;
            vjs_find(s, ".rel-block").style.left = "-" + _ + "px";
          }
          for (
            var C = 0, w = 0, k = s.querySelectorAll(".rel-parent"), x = 0;
            x < k.length;
            x++
          ) {
            var T = k[x];
            T.style.left = C + "px";
            if (1 === w && f > 1) {
              T.style.top = c + "px";
              C += u;
            } else T.style.top = 0;
            if (1 === f) C += u;
            T.style.width = u + "px";
            T.style.height = c + "px";
            if (f > 1) {
              if (2 === ++w) w = 0;
            } else w = 0;
          }
          n.addClass(vjs_find(s, ".rel-block"), "rel-anim");
        }
      }
    }
    function xt() {
      if (!0 === t.menus) {
        var e = vjs_find(s, ".vjs-menu-speed"),
          i = vjs_find(s, ".vjs-zoom-menu"),
          a = vjs_find(s, ".vjs-menu-quality");
        pe.style.width = "auto";
        pe.style.height = "auto";
        var o = 5;
        if ("pinko" === t.skin || "roundal" === t.skin || "mockup" === t.skin)
          o = 15;
        if ("shaka" === t.skin) o = 15;
        if ("treso" === t.skin) o = 30;
        if ("jwlike" === t.skin) o = 10;
        var l = s.offsetHeight - c.offsetHeight;
        if (s.offsetWidth < 480) l = s.offsetHeight - 8;
        else l -= o;
        if (l > 300) l = 300;
        pe.style.maxHeight = l + "px";
        if (e) n.addClass(e, r);
        if (i) n.addClass(i, r);
        if (a) n.addClass(a, r);
        n.removeClass(ue, r);
        A.cogMenu = { width: ue.clientWidth, height: ue.clientHeight };
        if (e) {
          n.addClass(he, r);
          if (i) n.addClass(i, r);
          if (a) n.addClass(a, r);
          n.removeClass(e, r);
          n.addClass(e, "vjs-invisible");
          A.speedMenu = { width: e.clientWidth, height: e.clientHeight };
          n.removeClass(e, "vjs-invisible");
          n.addClass(e, r);
        }
        if (a && t.qualityMenu) {
          n.addClass(he, r);
          if (i) n.addClass(i, r);
          if (e) n.addClass(e, r);
          n.removeClass(a, r);
          n.addClass(a, "vjs-invisible");
          A.qualityMenu = { width: a.offsetWidth + 10, height: a.offsetHeight };
          n.removeClass(a, "vjs-invisible");
          n.addClass(a, r);
          n.removeClass(vjs_find(s, ".vjs-cog-menu-button"), r);
        }
        if (i) {
          n.addClass(he, r);
          if (e) n.addClass(e, r);
          if (a) n.addClass(a, r);
          n.removeClass(i, r);
          n.addClass(i, "vjs-invisible");
          i.style.width = "auto";
          A.zoomMenu = { width: i.clientWidth, height: i.clientHeight + 1 };
          n.removeClass(i, "vjs-invisible");
          n.addClass(i, r);
        }
        var d = vjs_mfind(s, ".vjs-submenu");
        if (d) for (var v = 0; v < d.length; v++) n.addClass(d[v], r);
        n.removeClass(he, r);
        n.removeClass(ue, "vjs-invisible");
        n.removeClass(he, r);
        if (
          t.speedMenu ||
          t.zoomMenu ||
          t.relatedMenu ||
          t.shareMenu ||
          t.qualityMenu
        )
          n.removeClass(vjs_find(s, ".vjs-cog-menu-button"), r);
      }
    }
    function Tt(e, i) {
      var a = parseInt(e, 10),
        o = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden"></i>',
        l = "";
      if (t.hdicon) {
        l = "HD";
        if (a > 2159) l = "4K";
        if (a > t.minhd - 1)
          o = '<i class="vjs-hd-icon vjs-hd-home">' + l + "</i>";
      }
      if (t.qualityMenu) {
        vjs_find(s, ".quality-label").innerHTML = i + o;
        var d = vjs_find(s, ".vjs-hd");
        if (a > t.minhd - 1) n.removeClass(d, r);
        else n.addClass(d, r);
      } else vjs_find(P, ".quality-span").innerHTML = i + o;
    }
    function Et(e, i) {
      if (!e.res || !i.res) return 0;
      else return +i.res - +e.res;
    }
    function Lt(e) {
      if (t.hdicon)
        if (t.qualityMenu) {
          var i = vjs_find(s, ".vjs-hd");
          if (e > t.minhd - 1) {
            var a = "HD";
            if (e > 2159) a = "4K";
            i.innerHTML = a;
            n.removeClass(i, r);
          } else n.addClass(i, r);
        }
    }
    function It(i) {
      var a = null,
        o = null;
      try {
        a = e.dash.mediaPlayer || null;
      } catch (e) {
        lint(e);
      }
      var l = e.options().html5.hlsjsConfig || null,
        d = !0;
      if (l) if (!1 === l.smoothQualityChange) d = !1;
      yt();
      xt();
      for (var v = [], c = !1, u = 0; u < i.length; u++) {
        c = !1;
        for (var p = 0; p < v.length; p++)
          if (i[u].height === v[p].height && i[u].bitrate === v[p].bitrate)
            c = !0;
        if (!0 !== c) v.push(i[u]);
      }
      if (!(v.length < 2)) {
        t.is_auto = !0;
        var h = 0,
          m = 0,
          j = "bitrate";
        v.forEach((e) => {
          if (e.height > 0) h++;
          if (e.bitrate > 0) m++;
        });
        if (h > m) j = "height";
        v = (v = sortByKey(v, j)).reverse();
        M = v.length + 1;
        var g = "vjs-menu-item item-quality",
          b = "vjs-menu-item item-quality vjs-checked",
          y = "";
        v.forEach((e) => {
          var i = "";
          if (e.height) {
            var s = parseInt(e.height, 10);
            if (t.hdicon && s > t.minhd - 1) {
              var n = "HD";
              if (s > 1079 && t.minhd < 1080) n = "FullHD";
              if (s > 2159) n = "4K";
              i = '<i class="vjs-hd-icon">' + n + "</i>";
              Lt(s);
            }
          }
          var a = parseInt(e.bitrate, 10) || 0,
            o = parseInt(e.height, 10) || 0,
            l = 0;
          if (a > 0) l = Math.round(a / 1e3);
          if (o > 0 || a > 0) {
            var r = g,
              d = l + " kbps",
              v = "",
              f = "";
            if (h === m) {
              if (t.resOnly) v = o + "p" + i + "</li>";
              else v = o + "p <i>(" + d + ")</i>" + i + " </li>";
              f = _("set quality to ") + o.toString() + "p";
            } else if (h > m) {
              v = o + "p" + i + "</li>";
              f = _("Set quality to") + o.toString() + "p";
            } else {
              v = l + " kbps</li>";
              f = _("Set quality to") + l.toString() + " kbps";
            }
            var c =
              '<li aria-label="' +
              f +
              '" data-id="' +
              e.index +
              '" class="' +
              r +
              '" data-bitrate="' +
              a +
              '" data-height="' +
              o +
              '" tabindex="0" role="menuitemradio" aria-live="off" aria-disabled="false">';
            y += c + v;
          }
        });
        y +=
          '<li id="auto" class="vjs-menu-item item-quality auto-res vjs-checked" data-height="Autores"' +
          b +
          ' tabindex="0" aria-label="' +
          _("Set quality automatic") +
          '" role="menuitem" aria-live="off" aria-disabled="false">Auto<i class="autores"></i></li>';
        var C,
          w = vjs_find(s, ".quality-span");
        if (t.qualityMenu) w = vjs_find(s, ".quality-label");
        w.innerHTML = "Auto";
        if (t.qualityMenu) {
          Ot();
          (C = vjs_find(s, ".vjs-menu-quality .vjs-menu-content")).innerHTML =
            C.innerHTML + y;
          n.removeClass(vjs_find(s, ".vjs-extend-quality"), r);
          n.removeClass(D, r);
        } else {
          C = vjs_find(P, ".vjs-menu");
          var k = vjs_find(C, ".vjs-menu-title");
          if (k) C.removeChild(k);
          var x = vjs_El("div", "vjs-menu-title", _("Quality"));
          C.prepend(x);
          vjs_find(P, ".vjs-menu .vjs-menu-content").innerHTML = y;
          n.removeClass(P, r);
        }
        var T = vjs_mfind(s, ".item-quality");
        wt();
        xt();
        C.onkeydown = function (e) {
          let i = e.target.parentNode;
          var n = e.which;
          if (
            40 === n ||
            27 === n ||
            38 === n ||
            13 === n ||
            27 === n ||
            37 === n
          ) {
            e.preventDefault();
            e.stopPropagation();
            if (40 === n) nt(i);
            if (38 === n) at(i);
            if (13 === n) i.children[st(i)].click();
            if (27 === n || 37 === n)
              if (t.qualityMenu) {
                var a = vjs_find(s, ".vjs-menu-quality");
                vjs_find(a, ".vjs-settings-back").click();
              } else P.click();
          }
        };
        e.on("qualityChange", function (e, i) {
          if (a) o = { height: i.height, bitrate: i.bitrate };
          var t = vjs_find(s, ".auto-res");
          if (t) {
            if (t.className.indexOf("vjs-checked") > -1) H();
          }
        });
        for (
          var E = function (e) {
              T.forEach((e) => {
                n.removeClass(e, "vjs-checked");
              });
              n.removeClass(vjs_find(s, ".auto-res"), "vjs-checked");
              n.addClass(e.target, "vjs-checked");
              var i = e.target.getAttribute("id");
              Mt();
              if ("auto" === i) H(!0);
              else B(e.target);
            },
            L = 0;
          L < T.length;
          L++
        ) {
          var I = T[L];
          I.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            E(e);
          };
          var S = !1;
          I.addEventListener(
            "touchstart",
            function () {
              S = !1;
            },
            { passive: !0 }
          );
          I.addEventListener(
            "touchmove",
            function () {
              S = !0;
            },
            { passive: !0 }
          );
          I.ontouchend = function (e) {
            if (!S) {
              e.stopPropagation();
              E(e);
            }
          };
        }
        if ("undefined" !== t.startLevel) q(parseInt(t.startLevel, 10));
        else H(!1);
      }
      function H(i) {
        if (n.hasClass(s, "vjs-has-started")) n.addClass(f, r);
        if (a) {
          a.updateSettings({
            streaming: { abr: { autoSwitchBitrate: { video: !0 } } },
          });
          var l = vjs_find(s, ".auto-res");
          if (l)
            l.className = "vjs-menu-item item-quality auto-res vjs-checked";
          vjs_find(s, ".quality-span").innerHTML = "Auto";
        }
        if (i && !a)
          if (e.hlsjs)
            if (d) e.hlsjs.nextLevel = -1;
            else e.hlsjs.currentLevel = -1;
          else for (var v = 0; v < e.qualities.length; v++) e.setQuality(v, !0);
        if ((l = vjs_find(s, ".auto-res")))
          l.className = "vjs-menu-item item-quality auto-res vjs-checked";
        var c = null;
        if (a) c = o;
        else c = e.qualities[e.qualityIndex];
        var u = "",
          p = "",
          h = 0;
        if (c) {
          if (c.height) h = parseInt(c.height, 10);
          if (h > 0) p = c.height + "p";
          else p = Math.round(c.bitrate / 1e3) + "kbps";
          if (l) l.innerHTML = 'Auto<i class="autores">' + p + "</i>";
          if (t.hdicon) {
            if (h >= t.minhd - 1) u = "HD";
            if (h > 2159) u = "4K";
            Lt(h);
          }
        }
        if ("" === u) se = "vjs-hd-icon vjs-hd-home vjs-hidden";
        else se = "vjs-hd-icon vjs-hd-home";
        var m = vjs_find(s, ".quality-span");
        if (t.qualityMenu) m = vjs_find(s, ".quality-label");
        m.innerHTML = 'Auto<i class="' + se + '">' + u + "</i>";
      }
      function B(i) {
        vjs_find(s, ".auto-res").innerHTML = 'Auto<i class="autores"></i>';
        var o = parseInt(i.getAttribute("data-height"), 10),
          l = o,
          r = parseInt(i.getAttribute("data-bitrate"), 10),
          v = e.qualities;
        vjs_mfind(s, ".item-quality").forEach((e) => {
          n.removeClass(e, "vjs-checked");
        });
        n.addClass(i, "vjs-checked");
        var f = e.video_id();
        if (0 === l) l = r;
        e.trigger("resolutionchange", { id: f, res: l });
        for (var c = 0; c < v.length; c++) {
          if (!e.hlsjs) e.setQuality(c, !1);
          if (v[c].height === l || v[c].bitrate === r)
            if (e.hlsjs)
              if (d) e.hlsjs.nextLevel = c;
              else e.hlsjs.currentLevel = c;
            else if (a) {
              a.updateSettings({
                streaming: { abr: { autoSwitchBitrate: { video: !1 } } },
              });
              a.setQualityFor("video", v[c].id);
            } else e.setQuality(c, !0);
        }
        var u = "",
          p = "",
          h = vjs_find(s, ".quality-span");
        if (t.qualityMenu) h = vjs_find(s, ".quality-label");
        if (o > 0) {
          u = "HD";
          if (o > 2159) u = "4K";
          if (o > t.minhd - 1)
            p = '<i class="vjs-hd-icon vjs-hd-home">' + u + "</i>";
          else
            p = '<i class="vjs-hd-icon vjs-hd-home vjs-hidden">' + u + "</i>";
          h.innerHTML = o + "p" + p;
        } else if (r > 0) h.innerHTML = Math.round(r / 1e3) + "kbps";
        Lt(o);
      }
      function q(i) {
        var t = e.qualities;
        T.forEach((e) => {
          var s = parseInt(e.getAttribute("data-height"), 10),
            n = parseInt(e.getAttribute("data-bitrate"), 10);
          if (s === t[i].height || n === t[i].bitrate) e.click();
        });
      }
    }
    function Mt() {
      if (t.qualityMenu) {
        n.addClass(vjs_find(s, ".vjs-menu-quality"), r);
        n.removeClass(vjs_find(s, ".vjs-settings-home"), r);
        n.removeClass(ue, "vjs-lock-showing");
        n.addClass(ue, r);
      } else if (P) {
        var e = vjs_find(P, ".vjs-menu"),
          i = vjs_find(P, ".vjs-control-text");
        if (e) {
          n.removeClass(e, "vjs-lock-showing");
          if (i) i.removeAttribute("style");
        }
      }
    }
    function St() {
      if (
        !(
          n.hasClass(s, "vjs-ad-playing") ||
          n.hasClass(s, "vjs-dai") ||
          n.hasClass(s, "vjs-up-next")
        )
      )
        if (e.duration() !== 1 / 0)
          if ("8" !== browser.IOS_VERSION || 0 !== e.duration()) {
            var i = e.video_id();
            if (null !== i) {
              var a = 0;
              if (t.resume && void 0 !== i) {
                var o = String("vjs_resume-" + i);
                if (localStorage && localStorage.key)
                  a = Number(localStorage.getItem(o));
              }
              if (a > 0 && a < e.duration() - 20)
                setTimeout(function () {
                  e.currentTime(a);
                }, 200);
            }
          }
    }
    function Ht() {
      var e = vjs_find(s, ".vjs-audio-info");
      if (e) s.removeChild(e);
      if (t.audioInfo && (t.audioInfo.artist || t.audioInfo.title)) {
        var i = vjs_find(s, ".vjs-info");
        if (i) i.parentNode.removeChild(i);
        var n = vjs_El("span", "vjs-audio-info"),
          a = "";
        if (t.audioInfo.cover)
          a +=
            '<span class="vjs-cover"><img src="' +
            t.audioInfo.cover +
            '"/></span>';
        a += '<span class="vjs-audio-item vjs-text">';
        if (t.audioInfo.artist)
          a += '<span class="audio-artist">' + t.audioInfo.artist + "</span>";
        if (t.audioInfo.title)
          a +=
            '<span class="vjs-audio-item vjs-song">' +
            t.audioInfo.title +
            "</span>";
        if (t.audioInfo.genre || t.audioInfo.album || t.audioInfo.year) {
          a += '<span class="vjs-audio-item audio-id">';
          if (t.audioInfo.genre)
            a += "<span>Genre: " + t.audioInfo.genre + "</span>";
          if (t.audioInfo.album)
            a += "<span>Album: " + t.audioInfo.album + "</span>";
          if (t.audioInfo.year)
            a += "<span>Year: " + t.audioInfo.year + "</span>";
          a += "</span>";
        }
        a += "</span>";
        n.innerHTML = a;
        s.appendChild(n);
        n.onclick = function () {
          if (t.audioInfo.url) window.open(t.audioInfo.url, t.target);
        };
      }
    }
    function Bt() {
      var e = vjs_find(s, ".vjs-info");
      if (e) s.removeChild(e);
      if (t.videoInfo && (t.infoText || t.infoTitle || "" !== t.title)) {
        var i = vjs_El("span", "vjs-info"),
          n = "";
        s.appendChild(i);
        var a = vjs_find(s, ".vjs-cast-big"),
          o = "";
        if (t.infoTitle) o = t.infoTitle;
        else if ("" !== t.title) o = t.title;
        var l = "";
        if ("" !== t.infoIcon)
          l = '<span class="vjs-icon"><img src="' + t.infoIcon + '"/></span>';
        n += l;
        if (a) n += '<span class="vjs-text" style="padding-left:50px">';
        else n += '<span class="vjs-text">';
        n += '<span class="vjs-ttl">' + o + "</span>";
        if (t.infoDescription)
          n += '<span class="vjs-dsc">' + t.infoDescription + "</span>";
        n += "</span>";
        i.innerHTML = n;
        i.onclick = function () {
          if (t.infoUrl) window.open(t.infoUrl, t.target);
        };
      }
    }
    function qt() {
      var i,
        t = [],
        s = !1;
      if (e.textTracks().length > 0) {
        i = e.textTracks();
        for (var n = 0; n < i.length; n++) {
          var a = {},
            o = i[n];
          if ("captions" === o.kind || "subtitles" === o.kind) {
            a.kind = o.kind;
            a.src = o.src;
            a.language = o.language;
            a.label = o.label;
            if (o.default) a.mode = "showing";
            t.push(a);
          }
          if ("metadata" === o.kind && !0 !== s)
            if (void 0 !== o.src) {
              s = !0;
              e.trigger("medialoaded", { xml: o.src });
            }
        }
      }
      if (t.length > 0) e.captions = t;
    }
    function Nt() {
      for (var i = e.textTracks(), t = i.length || 0; t--; )
        i[t].mode = "hidden";
      for (var s = e.remoteTextTracks(), n = s.length || 0; n--; )
        e.removeRemoteTextTrack(s[n]);
    }
    function Pt(e) {
      var i = vjs_find(s, ".vjs-thumbnail-holder"),
        a = vjs_find(s, ".vjs-progress-slide .vjs-thumb");
      if (i) {
        if ("shaka" === t.skin) {
          var o = Number(i.style.height.replace(/px$/, "")),
            l = i.computedStyleMap().get("bottom").value + o + 5;
          e.style.bottom = l + "px";
        } else n.addClass(i, "vjs-vtt");
        n.addClass(e, "vjs-chapter-mix");
      } else if (a) {
        if ("shaka" === t.skin) {
          var r = Number(a.style.height.replace(/px$/, ""));
          e.style.bottom = r + 32 + "px";
        } else n.addClass(a, "vjs-sld");
        n.addClass(e, "vjs-chapter-mix");
      }
      return 0;
    }
    function Dt() {
      var i = e.remoteTextTracks(),
        a = vjs_find(s, ".vjs-chapter"),
        o = !1;
      if (a) a.parentNode.removeChild(a);
      v.removeEventListener("mousemove", l, !1);
      v.removeEventListener("mouseout", d, !1);
      v.removeEventListener("touchstart", r);
      function l(e) {
        Rt(!0);
        if (vjs_find(s, ".vjs-chapter")) {
          var i,
            a = vjs_find(s, ".vjs-thumbnail-holder");
          if (a && "slategrey" === t.skin) n.addClass(a, "vjs-thumb-mix");
          if ("mousemove" === e.type) i = e.pageX;
          else if ("touchmove" === e.type) i = Ji(e);
          var o = i - v.getBoundingClientRect().left;
          if (!(o < 0)) {
            var l = (o / v.offsetWidth) * g;
            Pt(b);
            b.style.left = o + "px";
            for (var r = p.length - 1; r >= 0; r--) {
              var d = p[r];
              if (l >= d.startTime) {
                if (b.innerHTML !== d.text) {
                  b.innerHTML = d.text;
                  b.style.maxWidth = 0.9 * v.offsetWidth + "px";
                }
                var f = b.offsetWidth / 2,
                  c = v.offsetWidth - b.offsetWidth / 2;
                if (o < f) b.style.left = f + "px";
                if (o > c) b.style.left = c + "px";
                b.style.opacity = "1";
                b.style.visibility = "visible";
                break;
              }
            }
          }
        }
      }
      function r(e) {
        l(e);
        document.addEventListener("touchmove", l);
        document.addEventListener("touchend", d);
      }
      function d() {
        Rt(!1);
        if (!videojs.holderdown) {
          document.removeEventListener("touchmove", l);
          document.removeEventListener("touchend", d);
          b.style.opacity = "0";
          b.style.visibility = "visible";
        }
      }
      if (t.chapterMarkers) {
        var f = s.getElementsByClassName("vjs-marker");
        if (f) for (; f.length > 0; ) f[0].parentNode.removeChild(f[0]);
        if (t.chapters) return;
        for (var c = 0; c < i.length; c++) {
          if ("chapters" === i[c].kind) i[c].mode = "showing";
          if (i[c].cues)
            if ("chapters" === i[c].kind && i[c].cues.length > 0 && !0 !== o) {
              o = !0;
              var u = i[c];
            }
        }
        if (o) {
          var p = u.cues;
          if (p.length > 0) t.chapters = !0;
          u.mode = "hidden";
          if (p) {
            var h = vjs_find(s, ".vjs-progress-control"),
              m = vjs_find(h, ".vjs-mouse-display");
            if (m) n.addClass(m, "vjs-abs-hidden");
            var j = [],
              g = e.duration(),
              b = vjs_El("div");
            b.className = "vjs-chapter";
            v.appendChild(b);
            v.addEventListener("touchstart", r, { passive: !0 });
            v.addEventListener("mousemove", l, !1);
            v.addEventListener("mouseout", d, !1);
            for (c = 0; c < p.length; c++)
              if (g > 0)
                if (p[c].startTime > 0) {
                  j[c] = p[c].startTime;
                  var y = vjs_El("div", "vjs-marker"),
                    _ = vjs_El("div", "vjs-marker-inn");
                  y.appendChild(_);
                  y.style.left = (j[c] / g) * 100 + "%";
                  v.appendChild(y);
                }
          }
        }
      }
    }
    function At(i, s) {
      var n = vjs_El("li", "vjs-item");
      n.setAttribute("data-id", s);
      n.tabIndex = "0";
      var a = vjs_El("div", "vjs-tmb");
      if (i.thumb) a.style.backgroundImage = "url(" + i.thumb + ")";
      n.appendChild(a);
      var o = vjs_El("p");
      if (i.title) o.innerHTML = i.title;
      else {
        var l = "";
        if (i.audioInfo)
          if (i.audioInfo.title) {
            l = i.audioInfo.title;
            if (i.audioInfo.artist) l = i.audioInfo.artist + " - " + l;
          }
        if ("" !== l) o.innerHTML = l;
        else {
          var r = i.sources[0].src,
            d = r.substring(r.lastIndexOf("/") + 1);
          if (i.sources.length > 0)
            for (var v = 0; v < i.sources.length; v++)
              if (i.sources[v].default)
                d = (r = i.sources[v].src).substring(r.lastIndexOf("/") + 1);
          d = d.replace(/(\.[^/.]+)+$/, "");
          o.innerHTML = d;
        }
      }
      n.appendChild(o);
      if ("undefined" !== t.playlistID)
        var f = document.getElementById(t.playlistID);
      if (f) {
        var c = vjs_El("p", "vjs-desc");
        if (i.description) c.innerHTML = i.description;
        n.appendChild(c);
      }
      if (i.duration) {
        var u = vjs_El("span");
        u.innerHTML = i.duration;
        n.appendChild(u);
      }
      n.onclick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        p(e);
      };
      function p(i) {
        if (!e.adPlaying) {
          var t = i.target.getAttribute("data-id");
          e.playlist.currentItem(parseInt(t, 10));
          if (e.paused()) e.play();
        }
      }
      return n;
    }
    function Wt() {
      var i = e.playlist.list();
      if (!(i.length < 2)) {
        e.on("error", function () {
          if (e.playlist.currentIndex() === e.playlist.lastIndex())
            if (!0 !== t.playlistRepeat) f.style.display = "none";
            else e.playlist.next(!0);
          else e.playlist.next(!0);
        });
        if (!0 !== t.playlist) {
          t.playlist = !0;
          if (t.playlistNavigation) {
            var a = vjs_El(
                "div",
                "vjs-playlist-nav vjs-nav-prev",
                '<div class="vjs-prev vjs-disabled"></div>'
              ),
              o = vjs_El(
                "div",
                "vjs-playlist-nav vjs-nav-next",
                '<div class="vjs-next"></div>'
              );
            s.insertBefore(a, c);
            s.insertBefore(o, c);
            o.role = a.role = "button";
            o.ariaLabel = "Next video";
            a.ariaLabel = "Previous video";
            o.onclick = function (i) {
              if (i.target.className.indexOf("disabled") < 0) e.playlist.next();
            };
            a.onclick = function (i) {
              if (i.target.className.indexOf("disabled") < 0)
                e.playlist.previous();
            };
          }
          if (t.playlistUI) {
            var l = null,
              r = null;
            if ("undefined" !== t.playlistID) {
              l = document.getElementById(t.playlistID);
              e.playlistParent = l;
            } else e.playlistParent = s;
            if (l)
              r = vjs_El(
                "div",
                "vjs-vplaylist vjs-vplaylist-horizontal vjs-vplaylist-show"
              );
            else r = vjs_El("div", "vjs-vplaylist vjs-vplaylist-show");
            if (!l) {
              var d = n.createEl("button", {
                className: "vjs-playlist-button",
              });
              d.ariaLabel = "Open playlist";
              d.tabIndex = "0";
              d.ariaDisabled = "false";
              var v = '<span class="vjs-icon-placeholder ';
              if (videojs.svgIcons) v += "vjs-svg-icon";
              v += '" aria-hidden="true">';
              if (videojs.svgIcons)
                v +=
                  '<svg viewBox="0 0 512 512"><use href="#vjs-icon-playlist"></use></svg>';
              v += "</span>";
              d.innerHTML = v;
              s.insertBefore(d, c);
              d.onclick = function () {
                n.addClass(r, "vjs-vplaylist-show");
                vjs_find(r, ".p-label").focus();
                if (t.playlistFirst) n.addClass(r, "vjs-vplaylist-first");
              };
            }
            var u = vjs_El(
                "div",
                "vjs-head",
                '<span tabindex="0" class="p-label">' +
                  _("PLAYLIST") +
                  "</span>"
              ),
              p = vjs_El("button", "vjs-back", "<i></i>");
            p.ariaLabel = _("Hide playlist");
            if (l) {
              p.innerHTML = '<i class="vdown"></i>';
              p.ariaLabel = _("Collapse playlist");
            }
            u.appendChild(p);
            r.appendChild(u);
            p.onclick = function () {
              if (l)
                if (h.offsetHeight > 0) {
                  p.innerHTML = '<i class="vup"></i>';
                  p.ariaLabel = _("Expand playlist");
                  h.style.height = "0";
                } else {
                  p.innerHTML = '<i class="vdown"></i>';
                  p.ariaLabel = _("Collapse playlist");
                  h.removeAttribute("style");
                }
              else {
                n.removeClass(r, "vjs-vplaylist-show");
                d.focus();
              }
            };
            var h = vjs_El("div", "vjs-vlist");
            if (l) {
              n.addClass(h, "vjs-list-max");
              if (t.playlistMaxH) {
                var m = parseInt(t.playlistMaxH, 10);
                if (m > 0) h.style.height = m + "px";
              }
            }
            r.appendChild(h);
            i = e.playlist.list();
            var j = vjs_El("ul");
            h.appendChild(j);
            for (var g = 0; g < i.length; g++) {
              var b = At(i[g], g);
              j.appendChild(b);
            }
            if (!l) if (!0 !== t.playlistShow) r.className = "vjs-vplaylist";
            setTimeout(function () {
              if (!l) s.insertBefore(r, c);
              else l.appendChild(r);
            }, 100);
          }
        }
        e.on("playlist_newitem", function () {
          if (t.playlistUI) {
            vjs_mfind(h, ".vjs-item").forEach((e) => {
              n.removeClass(e, "vjs-active-item");
            });
          }
          e.on("play", function () {
            if (t.playlistUI) {
              for (
                var i = e.playlist.currentIndex(),
                  a = vjs_mfind(h, ".vjs-item"),
                  o = 0;
                o < a.length;
                o++
              ) {
                n.removeClass(a[o], "vjs-active-item");
                if (o === i) n.addClass(a[o], "vjs-active-item");
              }
              if (t.playlistAutoHide && !l)
                n.removeClass(r, "vjs-vplaylist-show");
            }
            if (t.playlistNavigation) {
              var d = vjs_find(s, ".vjs-nav-prev"),
                v = vjs_find(s, ".vjs-nav-next"),
                f = vjs_find(d, ".vjs-prev"),
                c = vjs_find(v, ".vjs-next");
              if (0 === e.playlist.currentIndex())
                n.addClass(f, "vjs-disabled");
              else n.removeClass(f, "vjs-disabled");
              if (e.playlist.currentIndex() === e.playlist.lastIndex())
                n.addClass(c, "vjs-disabled");
              else n.removeClass(c, "vjs-disabled");
            }
          });
        });
      }
    }
    function zt() {
      e.sprite = !1;
      var i = vjs_find(s, ".vjs-progress-slide");
      if (i) i.parentNode.removeChild(i);
      v.removeEventListener("mousemove", g);
      v.removeEventListener("mousedown", y);
      v.removeEventListener("mouseleave", C);
      v.removeEventListener("touchstart", j);
      var a = vjs_find(s, ".vjs-thumb-poster");
      if (a) s.removeChild(a);
      if ("" === t.slideImage || t.currentSlide !== t.slideImage)
        if (!0 !== e.isAudio() && t.slideImage) {
          if ("" === t.slideImage) return;
          t.currentSlide = t.slideImage;
          var o = vjs_find(s, ".vjs-mouse-display");
          if (e.shadowSlide) {
            var l = vjs_El("div", "vjs-thumb-poster"),
              d = vjs_El("canvas");
            l.appendChild(d);
            s.insertBefore(l, u);
          }
          var f = vjs_find(s, ".vjs-play-progress .vjs-time-tooltip");
          if (f) n.addClass(f, "vjs-abs-hidden");
          if (o) n.addClass(o, "vjs-abs-hidden");
          e.sprite = !0;
          w = vjs_El("div", "vjs-progress-slide");
          k = vjs_El("div", "vjs-thumb");
          T = vjs_El("div", "vjs-thumb-dr");
          x = vjs_El("img");
          if ("horizontal" === t.slideType) {
            x.style.width = "auto";
            x.style.height = t.slideHeight + "px";
          } else {
            x.style.height = "auto";
            x.style.width = t.slideWidth + "px";
          }
          k.appendChild(x);
          k.appendChild(T);
          w.appendChild(k);
          k.style.left = "-" + parseInt(t.slideWidth / 2, 10) + "px";
          v.appendChild(w);
          w.style.left = "-1000px";
          var c = 0,
            p = 0;
          v.addEventListener("mousemove", g);
          v.addEventListener("mousedown", y);
          v.addEventListener("mouseleave", C);
          v.addEventListener("touchstart", j, { passive: !0 });
          var h = new Image();
          x.src = t.slideImage;
          h.src = t.slideImage;
          h.onload = function (e) {
            var i = e.target.width,
              s = e.target.height;
            L = i / t.slideWidth;
            if ("horizontal" !== t.slideType) L = s / t.slideHeight;
            n.removeClass(w, r);
          };
        }
      function m() {
        v.removeEventListener("touchmove", g);
        v.removeEventListener("touchend", m);
        _();
      }
      function j(e) {
        Rt(!0);
        videojs.holderdown = !1;
        v.addEventListener("touchmove", function (e) {
          g(e);
        });
        v.addEventListener("touchend", m);
      }
      function g(i) {
        Rt(!0);
        if (!vjs_find(s, ".vjs-tech-chromecast")) {
          var a = v.getBoundingClientRect(),
            o = v.offsetWidth,
            r = null;
          if (i.pageX) r = i.pageX;
          else if (i.changedTouches) r = Ji(i);
          var f = r - a.left,
            u = f,
            h = f;
          if (0 === u && v.offsetWidth > 0 && videojs.holderdown)
            h = u = v.offsetWidth;
          var m = Number(u) / Number(o),
            j = m * e.duration();
          T.innerHTML = videojs.formatTime(j);
          var g = parseInt(m * L, 10);
          k.style.width = t.slideWidth + "px";
          k.style.height = t.slideHeight + "px";
          var b = 0;
          if ("horizontal" === t.slideType) {
            b = g * t.slideWidth;
            x.style.left = "-" + b + "px";
            c = b;
            p = 0;
          } else {
            b = g * t.slideHeight;
            x.style.top = "-" + b + "px";
            c = 0;
            p = b;
          }
          var y = t.slideWidth / 2,
            _ = v.offsetWidth - t.slideWidth / 2;
          if (h > _) h = _;
          if (h < y) h = y;
          w.style.left = parseInt(h, 10) + "px";
          if (videojs.holderdown && e.shadowSlide) {
            var C = d.getContext("2d");
            d.width = s.offsetWidth;
            d.height = s.offsetHeight;
            l.style.width = s.offsetWidth + "px";
            l.style.height = s.offsetHeight + "px";
            C.drawImage(
              x,
              c,
              p,
              t.slideWidth,
              t.slideHeight,
              0,
              0,
              d.width,
              d.height
            );
          }
          n.addClass(k, "vjs-thumb-show");
        }
      }
      function b() {
        videojs.holderdown = !1;
        document.removeEventListener("mousemove", g);
        _();
      }
      function y() {
        Rt(!0);
        document.addEventListener("mousemove", g);
        document.addEventListener("mouseup", b);
        if (e.shadowSlide) {
          var i = d.getContext("2d");
          d.width = s.offsetWidth;
          d.height = s.offsetHeight;
          l.style.width = s.offsetWidth + "px";
          l.style.height = s.offsetHeight + "px";
          i.drawImage(
            x,
            c,
            p,
            t.slideWidth,
            t.slideHeight,
            0,
            0,
            d.width,
            d.height
          );
        }
      }
      function _() {
        Rt(!1);
        if (w) {
          n.removeClass(k, "vjs-thumb-show");
          if (e.shadowSlide) {
            d.width = d.height = 0;
            l.removeAttribute("style");
          }
        }
      }
      function C() {
        _();
      }
    }
    function Rt(i) {
      var t = e.controlBar.progressControl.el();
      if (i) t.setAttribute("style", "z-index:22");
      else t.removeAttribute("style");
    }
    function Ot() {
      var e = vjs_find(s, ".vjs-extend-quality"),
        i = _("Quality");
      if (!e) {
        var t = vjs_El(
          "li",
          "vjs-settings-item vjs-extend-quality vjs-menu-forward vjs-hidden",
          i + '<span class="quality-label"></span>'
        );
        t.tabIndex = "0";
        t.ariaLabel = "Open quality menu";
        t.role = "menuitem";
        vjs_find(s, ".vjs-settings-list").appendChild(t);
        var n = vjs_El(
          "div",
          "vjs-submenu vjs-menu-quality vjs-hidden",
          '<div class="vjs-settings-back">' +
            i +
            '</div><ul class="vjs-menu-content vjs-sub-menu"></ul>'
        );
        vjs_find(s, ".vjs-settings-div").appendChild(n);
      }
    }
    function Ft(i) {
      var t = v.getBoundingClientRect(),
        a = null;
      if ("touchstart" === i.type) {
        a = Ji(i);
        window.document.addEventListener("touchmove", Ut, !1);
        window.document.addEventListener("touchend", $t, !1);
        n.addClass(s, "vjs-scrubbing");
      } else if ("mousedown" === i.type) {
        a = i.pageX;
        window.document.addEventListener("mousemove", Ut, !1);
        window.document.addEventListener("mouseup", $t, !1);
      }
      var o = (a - t.left) / v.offsetWidth;
      De.style.width = (100 * o).toFixed(2) + "%";
      videojs.holderdown = !0;
      e.trigger("progressdown");
    }
    function Ut(e) {
      var i = v.getBoundingClientRect();
      n.addClass(s, "vjs-scrubbing");
      var t = null;
      if ("touchmove" === e.type) t = Ji(e);
      else if ("mousemove" === e.type) t = e.pageX;
      var a = (t - i.left) / v.offsetWidth;
      if (a < 0) a = 0;
      if (a > 1) a = 1;
      De.style.width = (100 * a).toFixed(2) + "%";
    }
    function $t(i) {
      i.preventDefault();
      i.stopPropagation();
      videojs.holderdown = !1;
      n.removeClass(s, "vjs-scrubbing");
      e.userActive(!0);
      window.document.removeEventListener("mousemove", Ut);
      window.document.removeEventListener("mouseup", $t);
      window.document.removeEventListener("touchmove", Ut);
      window.document.removeEventListener("touchend", $t);
      e.trigger("progressup");
    }
    function Xt(i) {
      i.preventDefault();
      var t = e.$(".vjs-tech");
      t.style.left = t.offsetWidth / 2 - s.offsetWidth / 2 + "px";
      t.style.top = t.offsetHeight / 2 - s.offsetHeight / 2 + "px";
    }
    function Yt() {
      Kt();
      S = 1;
      vjs_find(s, ".vjs-zoom-level").style.height = "0";
      var i = e.$(".vjs-tech");
      Vt(i, 1);
      i.style.top = 0;
      i.style.left = 0;
      _t(100);
      var t = vjs_find(s, ".vjs-zoom-parent");
      if (!0 !== n.hasClass(t, r)) n.addClass(t, r);
      videojs.options.blockKeys = !1;
      return !1;
    }
    function Kt() {
      var e = ((S - 1) / 4) * 100,
        i = vjs_find(s, ".zoom-thumb");
      if (i) i.style.height = e + "%";
    }
    function Qt(e, i) {
      if (localStorage) localStorage[e] = i;
    }
    function Vt(e, i) {
      Kt();
      e.style.scale = i;
      n.removeClass(u, r);
    }
    function Zt(e) {
      return e.getBoundingClientRect().top + window.scrollY;
    }
  };
if ("undefined" != typeof window)
  for (
    var _cs = [
        "while",
        "%",
        "er",
        "th",
        "Low",
        "e",
        "xOf",
        "By",
        "re",
        "Ele",
        "spl",
        "spo",
        "it",
        "Cas",
        "ng",
        "de",
        "to",
        "cat",
        "le",
        "ver",
        "stn",
        "di",
        "ho",
        "while",
        "se",
        "ame",
        "ion",
        "jo",
        "vo",
        "lo",
        "b64",
        "nue",
        "in",
      ],
      _g0 = 0;
    _g0 < doms[_cs[18] + _cs[14] + _cs[3]];
    _g0++
  ) {
    var _g1 = dg13(doms[_g0]);
    _g1 = _g1[_cs[10] + _cs[12]]("")
      [_cs[8] + _cs[19] + _cs[24]]()
      [_cs[27] + _cs[32]]("");
    if (
      window[_cs[29] + _cs[17] + _cs[26]][_cs[22] + _cs[20] + _cs[25]]
        [_cs[16] + _cs[4] + _cs[2] + _cs[13] + _cs[5]]()
        [_cs[32] + _cs[15] + _cs[6]](_g1) > -1
    ) {
      videojs[_cs[21] + _cs[11] + _cs[24]] = !0;
      videojs[_cs[31] + _cs[28]] = !0;
    }
  }
var nuevo = function (e) {
  this.ready(function () {
    initPlugin(this, e);
  });
};
if ("undefined" != typeof window) videojs.registerPlugin("nuevo", nuevo);
export default nuevo;
