/**
 * Copyright (c) 2024 The Nuevodevel Team. All rights reserved.
 * VASTPro plugin for Video.js
 * Version 1.0.0
 */
import videojs from "video.js";
const factory = (e, t, i) => {
  videojs.errorDisplay = !1;
  videojs.errorDisplay = !1;
  var r = {
      nonlinearRecall: !1,
      withCredentials: !1,
      timeout: 6e3,
      resolveAll: !0,
      wrapperLimit: 10,
      allowMultipleAds: !0,
      clickthroughMethod: "player",
      closeNonlinearButton: !0,
      closeNonlinearTheme: "light",
      autoClose: !1,
      outstreamClose: !1,
      brandText: "",
      brandUrl: "",
      outstreamCloseTheme: "dark",
      autoplay: !1,
      skipTimer: !1,
      autoplay: !0,
    },
    n = (function (e) {
      "use strict";
      function t(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, r);
        }
        return i;
      }
      function i(e) {
        for (var i = 1; i < arguments.length; i++) {
          var r = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? t(Object(r), !0).forEach(function (t) {
                l(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : t(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function r(e) {
        return (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, m(r.key), r);
        }
      }
      function o(e, t, i) {
        return (
          t && a(e.prototype, t),
          i && a(e, i),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function l(e, t, i) {
        return (
          (t = m(t)) in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && u(e, t);
      }
      function c(e) {
        return (c = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function u(e, t) {
        return (u = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function d(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function p(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var i,
            r = c(e);
          if (t) {
            var n = c(this).constructor;
            i = Reflect.construct(r, arguments, n);
          } else i = r.apply(this, arguments);
          return d(this, i);
        };
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return h(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return h(e, t);
              var i = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === i && e.constructor && (i = e.constructor.name);
              if ("Map" === i || "Set" === i) return Array.from(e);
              if (
                "Arguments" === i ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              )
                return h(e, t);
              else return;
            }
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, r = new Array(t); i < t; i++) r[i] = e[i];
        return r;
      }
      function m(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var i = e[Symbol.toPrimitive];
          if (void 0 !== i) {
            var r = i.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      function v() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return {
          id: e.id || null,
          adId: e.adId || null,
          sequence: e.sequence || null,
          apiFramework: e.apiFramework || null,
          universalAdIds: [],
          creativeExtensions: [],
        };
      }
      var g = [
        "ADCATEGORIES",
        "ADCOUNT",
        "ADPLAYHEAD",
        "ADSERVINGID",
        "ADTYPE",
        "APIFRAMEWORKS",
        "APPBUNDLE",
        "ASSETURI",
        "BLOCKEDADCATEGORIES",
        "BREAKMAXADLENGTH",
        "BREAKMAXADS",
        "BREAKMAXDURATION",
        "BREAKMINADLENGTH",
        "BREAKMINDURATION",
        "BREAKPOSITION",
        "CLICKPOS",
        "CLICKTYPE",
        "CLIENTUA",
        "CONTENTID",
        "CONTENTPLAYHEAD",
        "CONTENTURI",
        "DEVICEIP",
        "DEVICEUA",
        "DOMAIN",
        "EXTENSIONS",
        "GDPRCONSENT",
        "IFA",
        "IFATYPE",
        "INVENTORYSTATE",
        "LATLONG",
        "LIMITADTRACKING",
        "MEDIAMIME",
        "MEDIAPLAYHEAD",
        "OMIDPARTNER",
        "PAGEURL",
        "PLACEMENTTYPE",
        "PLAYERCAPABILITIES",
        "PLAYERSIZE",
        "PLAYERSTATE",
        "PODSEQUENCE",
        "REGULATIONS",
        "SERVERSIDE",
        "SERVERUA",
        "TRANSACTIONID",
        "UNIVERSALADID",
        "VASTVERSIONS",
        "VERIFICATIONVENDORS",
      ];
      function y(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = [],
          n = b(e);
        for (var a in (!t.ERRORCODE ||
          i.isCustomCode ||
          /^[0-9]{3}$/.test(t.ERRORCODE) ||
          (t.ERRORCODE = 900),
        (t.CACHEBUSTING = C(Math.round(1e8 * Math.random()))),
        (t.TIMESTAMP = new Date().toISOString()),
        (t.RANDOM = t.random = t.CACHEBUSTING),
        t))
          t[a] = L(t[a]);
        for (var o in n) {
          var l = n[o];
          "string" == typeof l && r.push(k(l, t));
        }
        return r;
      }
      function k(e, t) {
        var i = (e = T(e, t)).match(/[^[\]]+(?=])/g);
        if (!i) return e;
        var r = i.filter(function (e) {
          return g.indexOf(e) > -1;
        });
        return 0 === r.length
          ? e
          : T(
              e,
              (r = r.reduce(function (e, t) {
                return (e[t] = -1), e;
              }, {}))
            );
      }
      function T(e, t) {
        var i = e;
        for (var r in t) {
          var n = t[r];
          i = i.replace(
            new RegExp("(?:\\[|%%)(".concat(r, ")(?:\\]|%%)"), "g"),
            n
          );
        }
        return i;
      }
      function b(e) {
        return Array.isArray(e)
          ? e.map(function (e) {
              return e && e.hasOwnProperty("url") ? e.url : e;
            })
          : e;
      }
      function A(e) {
        return /^(https?:\/\/|\/\/)/.test(e);
      }
      function R(e, t) {
        for (var i = 0; i < t.length; i++) if (w(t[i], e)) return !0;
        return !1;
      }
      function w(e, t) {
        if (e && t) {
          var i = Object.getOwnPropertyNames(e),
            r = Object.getOwnPropertyNames(t);
          return i.length === r.length && e.id === t.id && e.url === t.url;
        }
        return !1;
      }
      function L(e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
          return "%".concat(e.charCodeAt(0).toString(16));
        });
      }
      function C(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
        return e.toString().padStart(t, "0");
      }
      var x = {
        track: function (e, t, i) {
          y(e, t, i).forEach(function (e) {
            "undefined" != typeof window &&
              null !== window &&
              (new Image().src = e);
          });
        },
        resolveURLTemplates: y,
        extractURLsFromTemplates: b,
        filterValidUrlTemplates: function (e) {
          return Array.isArray(e)
            ? e.filter(function (e) {
                return A(e.hasOwnProperty("url") ? e.url : e);
              })
            : A(e);
        },
        containsTemplateObject: R,
        isTemplateObjectEqual: w,
        encodeURIComponentRFC3986: L,
        replaceUrlMacros: k,
        isNumeric: function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        flatten: function e(t) {
          return t.reduce(function (t, i) {
            return t.concat(Array.isArray(i) ? e(i) : i);
          }, []);
        },
        joinArrayOfUniqueTemplateObjs: function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            i = Array.isArray(e) ? e : [],
            r = Array.isArray(t) ? t : [];
          return i.concat(r).reduce(function (e, t) {
            return R(t, e) || e.push(t), e;
          }, []);
        },
        isValidTimeValue: function (e) {
          return Number.isFinite(e) && e >= -2;
        },
        addLeadingZeros: C,
      };
      function E(e) {
        return -1 !== ["true", "TRUE", "True", "1"].indexOf(e);
      }
      function I(e) {
        if (null == e) return -1;
        if (x.isNumeric(e)) return parseInt(e);
        var t = e.split(":");
        if (3 !== t.length) return -1;
        var i = t[2].split("."),
          r = parseInt(i[0]);
        2 === i.length && (r += parseFloat("0.".concat(i[1])));
        var n = parseInt(60 * t[1]),
          a = parseInt(60 * t[0] * 60);
        return isNaN(a) || isNaN(n) || isNaN(r) || n > 3600 || r > 60
          ? -1
          : a + n + r;
      }
      var U = {
        childByName: function (e, t) {
          var i = e.childNodes;
          for (var r in i) {
            var n = i[r];
            if (n.nodeName === t) return n;
          }
        },
        childrenByName: function (e, t) {
          var i = [],
            r = e.childNodes;
          for (var n in r) {
            var a = r[n];
            a.nodeName === t && i.push(a);
          }
          return i;
        },
        resolveVastAdTagURI: function (e, t) {
          if (!t) return e;
          if (0 === e.indexOf("//")) {
            var i = location.protocol;
            return "".concat(i).concat(e);
          }
          if (-1 === e.indexOf("://")) {
            var r = t.slice(0, t.lastIndexOf("/"));
            return "".concat(r, "/").concat(e);
          }
          return e;
        },
        parseBoolean: E,
        parseNodeText: function (e) {
          return e && (e.textContent || e.text || "").trim();
        },
        copyNodeAttribute: function (e, t, i) {
          var r = t.getAttribute(e);
          r && i.setAttribute(e, r);
        },
        parseAttributes: function (e) {
          for (var t = e.attributes, i = {}, r = 0; r < t.length; r++)
            i[t[r].nodeName] = t[r].nodeValue;
          return i;
        },
        parseDuration: I,
        splitVAST: function (e) {
          var t = [],
            i = null;
          return (
            e.forEach(function (r, n) {
              if (
                (r.sequence && (r.sequence = parseInt(r.sequence, 10)),
                r.sequence > 1)
              ) {
                var a = e[n - 1];
                if (a && a.sequence === r.sequence - 1)
                  return void (i && i.push(r));
                delete r.sequence;
              }
              (i = [r]), t.push(i);
            }),
            t
          );
        },
        assignAttributes: function (e, t) {
          if (e)
            for (var i in e) {
              var r = e[i];
              if (r.nodeName && r.nodeValue && t.hasOwnProperty(r.nodeName)) {
                var n = r.nodeValue;
                "boolean" == typeof t[r.nodeName] && (n = E(n)),
                  (t[r.nodeName] = n);
              }
            }
        },
        mergeWrapperAdData: function (e, t) {
          var i;
          (e.errorURLTemplates = t.errorURLTemplates.concat(
            e.errorURLTemplates
          )),
            (e.impressionURLTemplates = t.impressionURLTemplates.concat(
              e.impressionURLTemplates
            )),
            (e.extensions = t.extensions.concat(e.extensions)),
            t.viewableImpression.length > 0 &&
              (e.viewableImpression = [].concat(
                f(e.viewableImpression),
                f(t.viewableImpression)
              )),
            (e.followAdditionalWrappers = t.followAdditionalWrappers),
            (e.allowMultipleAds = t.allowMultipleAds),
            (e.fallbackOnNoAd = t.fallbackOnNoAd);
          var r = (t.creatives || []).filter(function (e) {
              return e && "companion" === e.type;
            }),
            n = r.reduce(function (e, t) {
              return (
                (t.variations || []).forEach(function (t) {
                  (t.companionClickTrackingURLTemplates || []).forEach(
                    function (t) {
                      x.containsTemplateObject(t, e) || e.push(t);
                    }
                  );
                }),
                e
              );
            }, []);
          e.creatives = r.concat(e.creatives);
          var a =
              t.videoClickTrackingURLTemplates &&
              t.videoClickTrackingURLTemplates.length,
            o =
              t.videoCustomClickURLTemplates &&
              t.videoCustomClickURLTemplates.length;
          if (
            (e.creatives.forEach(function (e) {
              if (t.trackingEvents && t.trackingEvents[e.type])
                for (var i in t.trackingEvents[e.type]) {
                  var r = t.trackingEvents[e.type][i];
                  Array.isArray(e.trackingEvents[i]) ||
                    (e.trackingEvents[i] = []),
                    (e.trackingEvents[i] = e.trackingEvents[i].concat(r));
                }
              "linear" === e.type &&
                (a &&
                  (e.videoClickTrackingURLTemplates =
                    e.videoClickTrackingURLTemplates.concat(
                      t.videoClickTrackingURLTemplates
                    )),
                o &&
                  (e.videoCustomClickURLTemplates =
                    e.videoCustomClickURLTemplates.concat(
                      t.videoCustomClickURLTemplates
                    )),
                !t.videoClickThroughURLTemplate ||
                  (null !== e.videoClickThroughURLTemplate &&
                    void 0 !== e.videoClickThroughURLTemplate) ||
                  (e.videoClickThroughURLTemplate =
                    t.videoClickThroughURLTemplate)),
                "companion" === e.type &&
                  n.length &&
                  (e.variations || []).forEach(function (e) {
                    e.companionClickTrackingURLTemplates =
                      x.joinArrayOfUniqueTemplateObjs(
                        e.companionClickTrackingURLTemplates,
                        n
                      );
                  });
            }),
            t.adVerifications &&
              (e.adVerifications = e.adVerifications.concat(t.adVerifications)),
            t.blockedAdCategories &&
              (e.blockedAdCategories = e.blockedAdCategories.concat(
                t.blockedAdCategories
              )),
            null !== (i = t.creatives) && void 0 !== i && i.length)
          ) {
            var l = t.creatives.filter(function (e) {
              var t;
              return (
                (null === (t = e.icons) || void 0 === t ? void 0 : t.length) &&
                !e.mediaFiles.length
              );
            });
            l.length && (e.creatives = e.creatives.concat(l));
          }
        },
      };
      function N(e, t) {
        var i = (function () {
          var e = v(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          );
          return {
            id: e.id,
            adId: e.adId,
            sequence: e.sequence,
            apiFramework: e.apiFramework,
            type: "companion",
            required: null,
            variations: [],
          };
        })(t);
        return (
          (i.required = e.getAttribute("required") || null),
          (i.variations = U.childrenByName(e, "Companion").map(function (e) {
            var t = (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return {
                id: e.id || null,
                adType: "companionAd",
                width: e.width || 0,
                height: e.height || 0,
                assetWidth: e.assetWidth || null,
                assetHeight: e.assetHeight || null,
                expandedWidth: e.expandedWidth || null,
                expandedHeight: e.expandedHeight || null,
                apiFramework: e.apiFramework || null,
                adSlotId: e.adSlotId || null,
                pxratio: e.pxratio || "1",
                renderingMode: e.renderingMode || "default",
                staticResources: [],
                htmlResources: [],
                iframeResources: [],
                adParameters: null,
                altText: null,
                companionClickThroughURLTemplate: null,
                companionClickTrackingURLTemplates: [],
                trackingEvents: {},
              };
            })(U.parseAttributes(e));
            (t.htmlResources = U.childrenByName(e, "HTMLResource").reduce(
              function (e, t) {
                var i = U.parseNodeText(t);
                return i ? e.concat(i) : e;
              },
              []
            )),
              (t.iframeResources = U.childrenByName(e, "IFrameResource").reduce(
                function (e, t) {
                  var i = U.parseNodeText(t);
                  return i ? e.concat(i) : e;
                },
                []
              )),
              (t.staticResources = U.childrenByName(e, "StaticResource").reduce(
                function (e, t) {
                  var i = U.parseNodeText(t);
                  return i
                    ? e.concat({
                        url: i,
                        creativeType: t.getAttribute("creativeType") || null,
                      })
                    : e;
                },
                []
              )),
              (t.altText =
                U.parseNodeText(U.childByName(e, "AltText")) || null);
            var i = U.childByName(e, "TrackingEvents");
            i &&
              U.childrenByName(i, "Tracking").forEach(function (e) {
                var i = e.getAttribute("event"),
                  r = U.parseNodeText(e);
                i &&
                  r &&
                  (Array.isArray(t.trackingEvents[i]) ||
                    (t.trackingEvents[i] = []),
                  t.trackingEvents[i].push(r));
              }),
              (t.companionClickTrackingURLTemplates = U.childrenByName(
                e,
                "CompanionClickTracking"
              ).map(function (e) {
                return {
                  id: e.getAttribute("id") || null,
                  url: U.parseNodeText(e),
                };
              })),
              (t.companionClickThroughURLTemplate =
                U.parseNodeText(U.childByName(e, "CompanionClickThrough")) ||
                null);
            var r = U.childByName(e, "AdParameters");
            return (
              r &&
                (t.adParameters = {
                  value: U.parseNodeText(r),
                  xmlEncoded: r.getAttribute("xmlEncoded") || null,
                }),
              t
            );
          })),
          i
        );
      }
      function S(e, t) {
        var i,
          r = (function () {
            var e = v(
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
            );
            return {
              id: e.id,
              adId: e.adId,
              sequence: e.sequence,
              apiFramework: e.apiFramework,
              type: "linear",
              duration: 0,
              skipDelay: null,
              mediaFiles: [],
              mezzanine: null,
              interactiveCreativeFile: null,
              closedCaptionFiles: [],
              videoClickThroughURLTemplate: null,
              videoClickTrackingURLTemplates: [],
              videoCustomClickURLTemplates: [],
              adParameters: null,
              icons: [],
              trackingEvents: {},
            };
          })(t);
        r.duration = U.parseDuration(
          U.parseNodeText(U.childByName(e, "Duration"))
        );
        var n = e.getAttribute("skipoffset");
        if (null == n) r.skipDelay = null;
        else if ("%" === n.charAt(n.length - 1) && -1 !== r.duration) {
          var a = parseInt(n, 10);
          r.skipDelay = r.duration * (a / 100);
        } else r.skipDelay = U.parseDuration(n);
        var o = U.childByName(e, "VideoClicks");
        if (o) {
          var l = U.childByName(o, "ClickThrough");
          (r.videoClickThroughURLTemplate = l
            ? { id: l.getAttribute("id") || null, url: U.parseNodeText(l) }
            : null),
            U.childrenByName(o, "ClickTracking").forEach(function (e) {
              r.videoClickTrackingURLTemplates.push({
                id: e.getAttribute("id") || null,
                url: U.parseNodeText(e),
              });
            }),
            U.childrenByName(o, "CustomClick").forEach(function (e) {
              r.videoCustomClickURLTemplates.push({
                id: e.getAttribute("id") || null,
                url: U.parseNodeText(e),
              });
            });
        }
        var s = U.childByName(e, "AdParameters");
        s &&
          (r.adParameters = {
            value: U.parseNodeText(s),
            xmlEncoded: s.getAttribute("xmlEncoded") || null,
          }),
          U.childrenByName(e, "TrackingEvents").forEach(function (e) {
            U.childrenByName(e, "Tracking").forEach(function (e) {
              var t = e.getAttribute("event"),
                n = U.parseNodeText(e);
              if (t && n) {
                if ("progress" === t) {
                  if (!(i = e.getAttribute("offset"))) return;
                  t =
                    "%" === i.charAt(i.length - 1)
                      ? "progress-".concat(i)
                      : "progress-".concat(Math.round(U.parseDuration(i)));
                }
                Array.isArray(r.trackingEvents[t]) ||
                  (r.trackingEvents[t] = []),
                  r.trackingEvents[t].push(n);
              }
            });
          }),
          U.childrenByName(e, "MediaFiles").forEach(function (e) {
            U.childrenByName(e, "MediaFile").forEach(function (e) {
              r.mediaFiles.push(
                (function (e) {
                  var t = {
                    id: null,
                    fileURL: null,
                    fileSize: 0,
                    deliveryType: "progressive",
                    mimeType: null,
                    mediaType: null,
                    codec: null,
                    bitrate: 0,
                    minBitrate: 0,
                    maxBitrate: 0,
                    width: 0,
                    height: 0,
                    apiFramework: null,
                    scalable: null,
                    maintainAspectRatio: null,
                  };
                  (t.id = e.getAttribute("id")),
                    (t.fileURL = U.parseNodeText(e)),
                    (t.deliveryType = e.getAttribute("delivery")),
                    (t.codec = e.getAttribute("codec")),
                    (t.mimeType = e.getAttribute("type")),
                    (t.mediaType = e.getAttribute("mediaType") || "2D"),
                    (t.apiFramework = e.getAttribute("apiFramework")),
                    (t.fileSize = parseInt(e.getAttribute("fileSize") || 0)),
                    (t.bitrate = parseInt(e.getAttribute("bitrate") || 0)),
                    (t.minBitrate = parseInt(
                      e.getAttribute("minBitrate") || 0
                    )),
                    (t.maxBitrate = parseInt(
                      e.getAttribute("maxBitrate") || 0
                    )),
                    (t.width = parseInt(e.getAttribute("width") || 0)),
                    (t.height = parseInt(e.getAttribute("height") || 0));
                  var i = e.getAttribute("scalable");
                  i && "string" == typeof i && (t.scalable = U.parseBoolean(i));
                  var r = e.getAttribute("maintainAspectRatio");
                  r &&
                    "string" == typeof r &&
                    (t.maintainAspectRatio = U.parseBoolean(r));
                  return t;
                })(e)
              );
            });
            var t = U.childByName(e, "InteractiveCreativeFile");
            t &&
              (r.interactiveCreativeFile = (function (e) {
                var t = (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    type: e.type || null,
                    apiFramework: e.apiFramework || null,
                    variableDuration: U.parseBoolean(e.variableDuration),
                    fileURL: null,
                  };
                })(U.parseAttributes(e));
                return (t.fileURL = U.parseNodeText(e)), t;
              })(t));
            var i = U.childByName(e, "ClosedCaptionFiles");
            i &&
              U.childrenByName(i, "ClosedCaptionFile").forEach(function (e) {
                var t = (function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return {
                    type: e.type || null,
                    language: e.language || null,
                    fileURL: null,
                  };
                })(U.parseAttributes(e));
                (t.fileURL = U.parseNodeText(e)), r.closedCaptionFiles.push(t);
              });
            var n,
              a,
              o,
              l = U.childByName(e, "Mezzanine"),
              s =
                ((n = l),
                (a = {}),
                (o = !1),
                ["delivery", "type", "width", "height"].forEach(function (e) {
                  n && n.getAttribute(e)
                    ? (a[e] = n.getAttribute(e))
                    : (o = !0);
                }),
                o ? null : a);
            if (s) {
              var c = {
                id: null,
                fileURL: null,
                delivery: null,
                codec: null,
                type: null,
                width: 0,
                height: 0,
                fileSize: 0,
                mediaType: "2D",
              };
              (c.id = l.getAttribute("id")),
                (c.fileURL = U.parseNodeText(l)),
                (c.delivery = s.delivery),
                (c.codec = l.getAttribute("codec")),
                (c.type = s.type),
                (c.width = parseInt(s.width, 10)),
                (c.height = parseInt(s.height, 10)),
                (c.fileSize = parseInt(l.getAttribute("fileSize"), 10)),
                (c.mediaType = l.getAttribute("mediaType") || "2D"),
                (r.mezzanine = c);
            }
          });
        var c = U.childByName(e, "Icons");
        return (
          c &&
            U.childrenByName(c, "Icon").forEach(function (e) {
              r.icons.push(
                (function (e) {
                  var t = {
                    program: null,
                    height: 0,
                    width: 0,
                    xPosition: 0,
                    yPosition: 0,
                    apiFramework: null,
                    offset: null,
                    duration: 0,
                    type: null,
                    staticResource: null,
                    htmlResource: null,
                    iframeResource: null,
                    pxratio: "1",
                    iconClickThroughURLTemplate: null,
                    iconClickTrackingURLTemplates: [],
                    iconViewTrackingURLTemplate: null,
                    iconClickFallbackImages: [],
                  };
                  (t.program = e.getAttribute("program")),
                    (t.height = parseInt(e.getAttribute("height") || 0)),
                    (t.width = parseInt(e.getAttribute("width") || 0)),
                    (t.xPosition = (function (e) {
                      if (-1 !== ["left", "right"].indexOf(e)) return e;
                      else return parseInt(e || 0);
                    })(e.getAttribute("xPosition"))),
                    (t.yPosition = (function (e) {
                      if (-1 !== ["top", "bottom"].indexOf(e)) return e;
                      else return parseInt(e || 0);
                    })(e.getAttribute("yPosition"))),
                    (t.apiFramework = e.getAttribute("apiFramework")),
                    (t.pxratio = e.getAttribute("pxratio") || "1"),
                    (t.offset = U.parseDuration(e.getAttribute("offset"))),
                    (t.duration = U.parseDuration(e.getAttribute("duration"))),
                    U.childrenByName(e, "HTMLResource").forEach(function (e) {
                      (t.type = e.getAttribute("creativeType") || "text/html"),
                        (t.htmlResource = U.parseNodeText(e));
                    }),
                    U.childrenByName(e, "IFrameResource").forEach(function (e) {
                      (t.type = e.getAttribute("creativeType") || 0),
                        (t.iframeResource = U.parseNodeText(e));
                    }),
                    U.childrenByName(e, "StaticResource").forEach(function (e) {
                      (t.type = e.getAttribute("creativeType") || 0),
                        (t.staticResource = U.parseNodeText(e));
                    });
                  var i = U.childByName(e, "IconClicks");
                  if (i) {
                    (t.iconClickThroughURLTemplate = U.parseNodeText(
                      U.childByName(i, "IconClickThrough")
                    )),
                      U.childrenByName(i, "IconClickTracking").forEach(
                        function (e) {
                          t.iconClickTrackingURLTemplates.push({
                            id: e.getAttribute("id") || null,
                            url: U.parseNodeText(e),
                          });
                        }
                      );
                    var r = U.childByName(i, "IconClickFallbackImages");
                    r &&
                      U.childrenByName(r, "IconClickFallbackImage").forEach(
                        function (e) {
                          t.iconClickFallbackImages.push({
                            url: U.parseNodeText(e) || null,
                            width: e.getAttribute("width") || null,
                            height: e.getAttribute("height") || null,
                          });
                        }
                      );
                  }
                  return (
                    (t.iconViewTrackingURLTemplate = U.parseNodeText(
                      U.childByName(e, "IconViewTracking")
                    )),
                    t
                  );
                })(e)
              );
            }),
          r
        );
      }
      function M(e, t) {
        var i = (function () {
          var e = v(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          );
          return {
            id: e.id,
            adId: e.adId,
            sequence: e.sequence,
            apiFramework: e.apiFramework,
            type: "nonlinear",
            variations: [],
            trackingEvents: {},
          };
        })(t);
        return (
          U.childrenByName(e, "TrackingEvents").forEach(function (e) {
            var t, r;
            U.childrenByName(e, "Tracking").forEach(function (e) {
              (t = e.getAttribute("event")),
                (r = U.parseNodeText(e)),
                t &&
                  r &&
                  (Array.isArray(i.trackingEvents[t]) ||
                    (i.trackingEvents[t] = []),
                  i.trackingEvents[t].push(r));
            });
          }),
          U.childrenByName(e, "NonLinear").forEach(function (e) {
            var t = {
              id: null,
              width: 0,
              height: 0,
              expandedWidth: 0,
              expandedHeight: 0,
              scalable: !0,
              maintainAspectRatio: !0,
              minSuggestedDuration: 0,
              apiFramework: "static",
              adType: "nonLinearAd",
              type: null,
              staticResource: null,
              htmlResource: null,
              iframeResource: null,
              nonlinearClickThroughURLTemplate: null,
              nonlinearClickTrackingURLTemplates: [],
              adParameters: null,
            };
            (t.id = e.getAttribute("id") || null),
              (t.width = e.getAttribute("width")),
              (t.height = e.getAttribute("height")),
              (t.expandedWidth = e.getAttribute("expandedWidth")),
              (t.expandedHeight = e.getAttribute("expandedHeight")),
              (t.scalable = U.parseBoolean(e.getAttribute("scalable"))),
              (t.maintainAspectRatio = U.parseBoolean(
                e.getAttribute("maintainAspectRatio")
              )),
              (t.minSuggestedDuration = U.parseDuration(
                e.getAttribute("minSuggestedDuration")
              )),
              (t.apiFramework = e.getAttribute("apiFramework")),
              U.childrenByName(e, "HTMLResource").forEach(function (e) {
                (t.type = e.getAttribute("creativeType") || "text/html"),
                  (t.htmlResource = U.parseNodeText(e));
              }),
              U.childrenByName(e, "IFrameResource").forEach(function (e) {
                (t.type = e.getAttribute("creativeType") || 0),
                  (t.iframeResource = U.parseNodeText(e));
              }),
              U.childrenByName(e, "StaticResource").forEach(function (e) {
                (t.type = e.getAttribute("creativeType") || 0),
                  (t.staticResource = U.parseNodeText(e));
              });
            var r = U.childByName(e, "AdParameters");
            r &&
              (t.adParameters = {
                value: U.parseNodeText(r),
                xmlEncoded: r.getAttribute("xmlEncoded") || null,
              }),
              (t.nonlinearClickThroughURLTemplate = U.parseNodeText(
                U.childByName(e, "NonLinearClickThrough")
              )),
              U.childrenByName(e, "NonLinearClickTracking").forEach(function (
                e
              ) {
                t.nonlinearClickTrackingURLTemplates.push({
                  id: e.getAttribute("id") || null,
                  url: U.parseNodeText(e),
                });
              }),
              i.variations.push(t);
          }),
          i
        );
      }
      function O(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            var i = P(e);
            i && t.push(i);
          }),
          t
        );
      }
      function P(e) {
        if ("#comment" === e.nodeName) return null;
        var t,
          i = { name: null, value: null, attributes: {}, children: [] },
          r = e.attributes,
          n = e.childNodes;
        if (((i.name = e.nodeName), e.attributes))
          for (var a in r)
            if (r.hasOwnProperty(a)) {
              var o = r[a];
              o.nodeName &&
                o.nodeValue &&
                (i.attributes[o.nodeName] = o.nodeValue);
            }
        for (var l in n)
          if (n.hasOwnProperty(l)) {
            var s = P(n[l]);
            s && i.children.push(s);
          }
        if (
          0 === i.children.length ||
          (1 === i.children.length &&
            ["#cdata-section", "#text"].indexOf(i.children[0].name) >= 0)
        ) {
          var c = U.parseNodeText(e);
          "" !== c && (i.value = c), (i.children = []);
        }
        return null === (t = i).value &&
          0 === Object.keys(t.attributes).length &&
          0 === t.children.length
          ? null
          : i;
      }
      function D(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            var i,
              r = {
                id: e.getAttribute("id") || null,
                adId: B(e),
                sequence: e.getAttribute("sequence") || null,
                apiFramework: e.getAttribute("apiFramework") || null,
              },
              n = [];
            U.childrenByName(e, "UniversalAdId").forEach(function (e) {
              var t = {
                idRegistry: e.getAttribute("idRegistry") || "unknown",
                value: U.parseNodeText(e),
              };
              n.push(t);
            });
            var a = U.childByName(e, "CreativeExtensions");
            for (var o in (a &&
              (i = O(U.childrenByName(a, "CreativeExtension"))),
            e.childNodes)) {
              var l = e.childNodes[o],
                s = void 0;
              switch (l.nodeName) {
                case "Linear":
                  s = S(l, r);
                  break;
                case "NonLinearAds":
                  s = M(l, r);
                  break;
                case "CompanionAds":
                  s = N(l, r);
              }
              s &&
                (n && (s.universalAdIds = n),
                i && (s.creativeExtensions = i),
                t.push(s));
            }
          }),
          t
        );
      }
      function B(e) {
        return (
          e.getAttribute("AdID") ||
          e.getAttribute("adID") ||
          e.getAttribute("adId") ||
          null
        );
      }
      var V = {
        Wrapper: { subElements: ["VASTAdTagURI", "Impression"] },
        BlockedAdCategories: { attributes: ["authority"] },
        InLine: {
          subElements: [
            "AdSystem",
            "AdTitle",
            "Impression",
            "AdServingId",
            "Creatives",
          ],
        },
        Category: { attributes: ["authority"] },
        Pricing: { attributes: ["model", "currency"] },
        Verification: {
          oneOfinLineResources: ["JavaScriptResource", "ExecutableResource"],
          attributes: ["vendor"],
        },
        UniversalAdId: { attributes: ["idRegistry"] },
        JavaScriptResource: { attributes: ["apiFramework", "browserOptional"] },
        ExecutableResource: { attributes: ["apiFramework", "type"] },
        Tracking: { attributes: ["event"] },
        Creatives: { subElements: ["Creative"] },
        Creative: { subElements: ["UniversalAdId"] },
        Linear: { subElements: ["MediaFiles", "Duration"] },
        MediaFiles: { subElements: ["MediaFile"] },
        MediaFile: { attributes: ["delivery", "type", "width", "height"] },
        Mezzanine: { attributes: ["delivery", "type", "width", "height"] },
        NonLinear: {
          oneOfinLineResources: [
            "StaticResource",
            "IFrameResource",
            "HTMLResource",
          ],
          attributes: ["width", "height"],
        },
        Companion: {
          oneOfinLineResources: [
            "StaticResource",
            "IFrameResource",
            "HTMLResource",
          ],
          attributes: ["width", "height"],
        },
        StaticResource: { attributes: ["creativeType"] },
        Icons: { subElements: ["Icon"] },
        Icon: {
          oneOfinLineResources: [
            "StaticResource",
            "IFrameResource",
            "HTMLResource",
          ],
        },
      };
      function j(e, t) {
        if (V[e.nodeName] && V[e.nodeName].attributes) {
          var i = V[e.nodeName].attributes.filter(function (t) {
            return !e.getAttribute(t);
          });
          i.length > 0 &&
            q(
              {
                name: e.nodeName,
                parentName: e.parentNode.nodeName,
                attributes: i,
              },
              t
            );
        }
      }
      function F(e, t, i) {
        var r = V[e.nodeName],
          n = !i && "Wrapper" !== e.nodeName;
        if (r && !n) {
          if (r.subElements) {
            var a = r.subElements.filter(function (t) {
              return !U.childByName(e, t);
            });
            a.length > 0 &&
              q(
                {
                  name: e.nodeName,
                  parentName: e.parentNode.nodeName,
                  subElements: a,
                },
                t
              );
          }
          if (i && r.oneOfinLineResources)
            r.oneOfinLineResources.some(function (t) {
              return U.childByName(e, t);
            }) ||
              q(
                {
                  name: e.nodeName,
                  parentName: e.parentNode.nodeName,
                  oneOfResources: r.oneOfinLineResources,
                },
                t
              );
        }
      }
      function H(e) {
        return e.children && 0 !== e.children.length;
      }
      function q(e, t) {
        var i = e.name,
          r = e.parentName,
          n = e.attributes,
          a = e.subElements,
          o = e.oneOfResources,
          l = "Element '".concat(i, "'");
        t("VAST-warning", {
          message: (l += n
            ? " missing required attribute(s) '".concat(n.join(", "), "' ")
            : a
            ? " missing required sub element(s) '".concat(a.join(", "), "' ")
            : o
            ? " must provide one of the following '".concat(o.join(", "), "' ")
            : " is empty"),
          parentElement: r,
          specVersion: 4.1,
        });
      }
      var z = {
        verifyRequiredValues: function e(t, i, r) {
          if (t && t.nodeName)
            if (("InLine" === t.nodeName && (r = !0), j(t, i), H(t))) {
              F(t, i, r);
              for (var n = 0; n < t.children.length; n++)
                e(t.children[n], i, r);
            } else
              0 === U.parseNodeText(t).length &&
                q({ name: t.nodeName, parentName: t.parentNode.nodeName }, i);
        },
        hasSubElements: H,
        emitMissingValueWarning: q,
        verifyRequiredAttributes: j,
        verifyRequiredSubElements: F,
      };
      function W(e, t) {
        var i =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = i.allowMultipleAds,
          n = i.followAdditionalWrappers,
          a = e.childNodes;
        for (var o in a) {
          var l = a[o];
          if (
            -1 !== ["Wrapper", "InLine"].indexOf(l.nodeName) &&
            ("Wrapper" !== l.nodeName || !1 !== n)
          ) {
            if (
              (U.copyNodeAttribute("id", e, l),
              U.copyNodeAttribute("sequence", e, l),
              U.copyNodeAttribute("adType", e, l),
              "Wrapper" === l.nodeName)
            )
              return { ad: G(l, t), type: "WRAPPER" };
            if ("InLine" === l.nodeName)
              return { ad: _(l, t, { allowMultipleAds: r }), type: "INLINE" };
          }
        }
      }
      function _(e, t) {
        return !1 ===
          (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
            .allowMultipleAds && e.getAttribute("sequence")
          ? null
          : X(e, t);
      }
      function X(e, t) {
        var i = [];
        t && z.verifyRequiredValues(e, t);
        var r,
          n,
          a = e.childNodes,
          o = (function () {
            var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return {
              id: e.id || null,
              sequence: e.sequence || null,
              adType: e.adType || null,
              adServingId: null,
              categories: [],
              expires: null,
              viewableImpression: [],
              system: null,
              title: null,
              description: null,
              advertiser: null,
              pricing: null,
              survey: null,
              errorURLTemplates: [],
              impressionURLTemplates: [],
              creatives: [],
              extensions: [],
              adVerifications: [],
              blockedAdCategories: [],
              followAdditionalWrappers: !0,
              allowMultipleAds: !1,
              fallbackOnNoAd: null,
            };
          })(U.parseAttributes(e));
        for (var l in a) {
          var s = a[l];
          switch (s.nodeName) {
            case "Error":
              o.errorURLTemplates.push(U.parseNodeText(s));
              break;
            case "Impression":
              o.impressionURLTemplates.push({
                id: s.getAttribute("id") || null,
                url: U.parseNodeText(s),
              });
              break;
            case "Creatives":
              o.creatives = D(U.childrenByName(s, "Creative"));
              break;
            case "Extensions":
              var c = U.childrenByName(s, "Extension");
              (o.extensions = O(c)), o.adVerifications.length || (i = Y(c));
              break;
            case "AdVerifications":
              o.adVerifications = Q(U.childrenByName(s, "Verification"));
              break;
            case "AdSystem":
              o.system = {
                value: U.parseNodeText(s),
                version: s.getAttribute("version") || null,
              };
              break;
            case "AdTitle":
              o.title = U.parseNodeText(s);
              break;
            case "AdServingId":
              o.adServingId = U.parseNodeText(s);
              break;
            case "Category":
              o.categories.push({
                authority: s.getAttribute("authority") || null,
                value: U.parseNodeText(s),
              });
              break;
            case "Expires":
              o.expires = parseInt(U.parseNodeText(s), 10);
              break;
            case "ViewableImpression":
              o.viewableImpression.push(
                ((n = void 0),
                (n = function (e, t) {
                  var i = U.parseNodeText(t);
                  return i && e.push(i), e;
                }),
                {
                  id: (r = s).getAttribute("id") || null,
                  viewable: U.childrenByName(r, "Viewable").reduce(n, []),
                  notViewable: U.childrenByName(r, "NotViewable").reduce(n, []),
                  viewUndetermined: U.childrenByName(
                    r,
                    "ViewUndetermined"
                  ).reduce(n, []),
                })
              );
              break;
            case "Description":
              o.description = U.parseNodeText(s);
              break;
            case "Advertiser":
              o.advertiser = {
                id: s.getAttribute("id") || null,
                value: U.parseNodeText(s),
              };
              break;
            case "Pricing":
              o.pricing = {
                value: U.parseNodeText(s),
                model: s.getAttribute("model") || null,
                currency: s.getAttribute("currency") || null,
              };
              break;
            case "Survey":
              o.survey = {
                value: U.parseNodeText(s),
                type: s.getAttribute("type") || null,
              };
              break;
            case "BlockedAdCategories":
              o.blockedAdCategories.push({
                authority: s.getAttribute("authority") || null,
                value: U.parseNodeText(s),
              });
          }
        }
        return i.length && (o.adVerifications = o.adVerifications.concat(i)), o;
      }
      function G(e, t) {
        var i = X(e, t),
          r = e.getAttribute("followAdditionalWrappers"),
          n = e.getAttribute("allowMultipleAds"),
          a = e.getAttribute("fallbackOnNoAd");
        (i.followAdditionalWrappers = !r || U.parseBoolean(r)),
          (i.allowMultipleAds = !!n && U.parseBoolean(n)),
          (i.fallbackOnNoAd = a ? U.parseBoolean(a) : null);
        var o = U.childByName(e, "VASTAdTagURI");
        if (
          (o
            ? (i.nextWrapperURL = U.parseNodeText(o))
            : (o = U.childByName(e, "VASTAdTagURL")) &&
              (i.nextWrapperURL = U.parseNodeText(U.childByName(o, "URL"))),
          i.creatives.forEach(function (e) {
            if (-1 !== ["linear", "nonlinear"].indexOf(e.type)) {
              if (e.trackingEvents) {
                i.trackingEvents || (i.trackingEvents = {}),
                  i.trackingEvents[e.type] || (i.trackingEvents[e.type] = {});
                var t = function (t) {
                  var r = e.trackingEvents[t];
                  Array.isArray(i.trackingEvents[e.type][t]) ||
                    (i.trackingEvents[e.type][t] = []),
                    r.forEach(function (r) {
                      i.trackingEvents[e.type][t].push(r);
                    });
                };
                for (var r in e.trackingEvents) t(r);
              }
              e.videoClickTrackingURLTemplates &&
                (Array.isArray(i.videoClickTrackingURLTemplates) ||
                  (i.videoClickTrackingURLTemplates = []),
                e.videoClickTrackingURLTemplates.forEach(function (e) {
                  i.videoClickTrackingURLTemplates.push(e);
                })),
                e.videoClickThroughURLTemplate &&
                  (i.videoClickThroughURLTemplate =
                    e.videoClickThroughURLTemplate),
                e.videoCustomClickURLTemplates &&
                  (Array.isArray(i.videoCustomClickURLTemplates) ||
                    (i.videoCustomClickURLTemplates = []),
                  e.videoCustomClickURLTemplates.forEach(function (e) {
                    i.videoCustomClickURLTemplates.push(e);
                  }));
            }
          }),
          i.nextWrapperURL)
        )
          return i;
      }
      function Q(e) {
        var t = [];
        return (
          e.forEach(function (e) {
            var i = {
                resource: null,
                vendor: null,
                browserOptional: !1,
                apiFramework: null,
                type: null,
                parameters: null,
                trackingEvents: {},
              },
              r = e.childNodes;
            for (var n in (U.assignAttributes(e.attributes, i), r)) {
              var a = r[n];
              switch (a.nodeName) {
                case "JavaScriptResource":
                case "ExecutableResource":
                  (i.resource = U.parseNodeText(a)),
                    U.assignAttributes(a.attributes, i);
                  break;
                case "VerificationParameters":
                  i.parameters = U.parseNodeText(a);
              }
            }
            var o = U.childByName(e, "TrackingEvents");
            o &&
              U.childrenByName(o, "Tracking").forEach(function (e) {
                var t = e.getAttribute("event"),
                  r = U.parseNodeText(e);
                t &&
                  r &&
                  (Array.isArray(i.trackingEvents[t]) ||
                    (i.trackingEvents[t] = []),
                  i.trackingEvents[t].push(r));
              }),
              t.push(i);
          }),
          t
        );
      }
      function Y(e) {
        var t = null,
          i = [];
        return (
          e.some(function (e) {
            return (t = U.childByName(e, "AdVerifications"));
          }),
          t && (i = Q(U.childrenByName(t, "Verification"))),
          i
        );
      }
      var K = (function () {
          function e() {
            n(this, e), (this._handlers = []);
          }
          return (
            o(e, [
              {
                key: "on",
                value: function (e, t) {
                  if ("function" != typeof t)
                    throw new TypeError(
                      "The handler argument must be of type Function. Received type ".concat(
                        r(t)
                      )
                    );
                  if (!e)
                    throw new TypeError(
                      "The event argument must be of type String. Received type ".concat(
                        r(e)
                      )
                    );
                  return this._handlers.push({ event: e, handler: t }), this;
                },
              },
              {
                key: "once",
                value: function (e, t) {
                  return this.on(
                    e,
                    (function (e, t, i) {
                      var r = { fired: !1, wrapFn: void 0 };
                      function n() {
                        r.fired ||
                          (e.off(t, r.wrapFn),
                          (r.fired = !0),
                          i.bind(e).apply(void 0, arguments));
                      }
                      return (r.wrapFn = n), n;
                    })(this, e, t)
                  );
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  return (
                    (this._handlers = this._handlers.filter(function (i) {
                      return i.event !== e || i.handler !== t;
                    })),
                    this
                  );
                },
              },
              {
                key: "emit",
                value: function (e) {
                  for (
                    var t = arguments.length,
                      i = new Array(t > 1 ? t - 1 : 0),
                      r = 1;
                    r < t;
                    r++
                  )
                    i[r - 1] = arguments[r];
                  var n = !1;
                  return (
                    this._handlers.forEach(function (t) {
                      "*" === t.event &&
                        ((n = !0), t.handler.apply(t, [e].concat(i))),
                        t.event === e && ((n = !0), t.handler.apply(t, i));
                    }),
                    n
                  );
                },
              },
              {
                key: "removeAllListeners",
                value: function (e) {
                  return e
                    ? ((this._handlers = this._handlers.filter(function (t) {
                        return t.event !== e;
                      })),
                      this)
                    : ((this._handlers = []), this);
                },
              },
              {
                key: "listenerCount",
                value: function (e) {
                  return this._handlers.filter(function (t) {
                    return t.event === e;
                  }).length;
                },
              },
              {
                key: "listeners",
                value: function (e) {
                  return this._handlers.reduce(function (t, i) {
                    return i.event === e && t.push(i.handler), t;
                  }, []);
                },
              },
              {
                key: "eventNames",
                value: function () {
                  return this._handlers.map(function (e) {
                    return e.event;
                  });
                },
              },
            ]),
            e
          );
        })(),
        $ = {
          get: function (e, t, i) {
            i(
              new Error(
                "Please bundle the library for node to use the node urlHandler"
              )
            );
          },
        },
        Z = 12e4;
      function J() {
        try {
          var e = new window.XMLHttpRequest();
          return "withCredentials" in e ? e : null;
        } catch (e) {
          return null;
        }
      }
      function ee(e, t, i) {
        var r = i ? 408 : e.status,
          n = i
            ? "XHRURLHandler: Request timed out after "
                .concat(e.timeout, " ms (")
                .concat(r, ")")
            : "XHRURLHandler: ".concat(e.statusText, " (").concat(r, ")");
        t(new Error(n), null, { statusCode: r });
      }
      var te = {
          get: function (e, t, i) {
            if (
              "https:" === window.location.protocol &&
              0 === e.indexOf("http://")
            )
              return i(
                new Error("XHRURLHandler: Cannot go from HTTPS to HTTP.")
              );
            try {
              var r = J();
              r.open("GET", e),
                (r.timeout = t.timeout || Z),
                (r.withCredentials = t.withCredentials || !1),
                r.overrideMimeType && r.overrideMimeType("text/xml"),
                (r.onload = function () {
                  return (
                    (t = i),
                    void (200 === (e = r).status
                      ? t(null, e.responseXML, {
                          byteLength: e.response.length,
                          statusCode: e.status,
                        })
                      : ee(e, t, !1))
                  );
                  var e, t;
                }),
                (r.onerror = function () {
                  return ee(r, i, !1);
                }),
                (r.onabort = function () {
                  return ee(r, i, !1);
                }),
                (r.ontimeout = function () {
                  return ee(r, i, !0);
                }),
                r.send();
            } catch (e) {
              i(new Error("XHRURLHandler: Unexpected error"));
            }
          },
          supported: function () {
            return !!J();
          },
        },
        ie = {
          get: function (e, t, i) {
            return (
              i || ("function" == typeof t && (i = t), (t = {})),
              "undefined" == typeof window || null === window
                ? $.get(e, t, i)
                : te.supported()
                ? te.get(e, t, i)
                : i(
                    new Error(
                      "Current context is not supported by any of the default URLHandlers. Please provide a custom URLHandler"
                    )
                  )
            );
          },
        },
        re = 0,
        ne = 0,
        ae = function (e, t) {
          !e || !t || e <= 0 || t <= 0 || (ne = (ne * re + (8 * e) / t) / ++re);
        },
        oe = { ERRORCODE: 900, extensions: [] },
        le = (function (e) {
          s(i, K);
          var t = p(i);
          function i() {
            var e;
            return (
              n(this, i),
              ((e = t.call(this)).remainingAds = []),
              (e.errorURLTemplates = []),
              (e.rootErrorURLTemplates = []),
              (e.maxWrapperDepth = null),
              (e.URLTemplateFilters = []),
              (e.fetchingOptions = {}),
              (e.parsingOptions = {}),
              e
            );
          }
          return (
            o(i, [
              {
                key: "addURLTemplateFilter",
                value: function (e) {
                  "function" == typeof e && this.URLTemplateFilters.push(e);
                },
              },
              {
                key: "removeURLTemplateFilter",
                value: function () {
                  this.URLTemplateFilters.pop();
                },
              },
              {
                key: "countURLTemplateFilters",
                value: function () {
                  return this.URLTemplateFilters.length;
                },
              },
              {
                key: "clearURLTemplateFilters",
                value: function () {
                  this.URLTemplateFilters = [];
                },
              },
              {
                key: "trackVastError",
                value: function (e, t) {
                  for (
                    var i = arguments.length,
                      r = new Array(i > 2 ? i - 2 : 0),
                      n = 2;
                    n < i;
                    n++
                  )
                    r[n - 2] = arguments[n];
                  this.emit(
                    "VAST-error",
                    Object.assign.apply(Object, [{}, oe, t].concat(r))
                  ),
                    x.track(e, t);
                },
              },
              {
                key: "getErrorURLTemplates",
                value: function () {
                  return this.rootErrorURLTemplates.concat(
                    this.errorURLTemplates
                  );
                },
              },
              {
                key: "getEstimatedBitrate",
                value: function () {
                  return ne;
                },
              },
              {
                key: "fetchVAST",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : null,
                    n =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : null;
                  return new Promise(function (a, o) {
                    t.URLTemplateFilters.forEach(function (t) {
                      e = t(e);
                    });
                    var l = Date.now();
                    t.emit("VAST-resolving", {
                      url: e,
                      previousUrl: r,
                      wrapperDepth: i,
                      maxWrapperDepth: t.maxWrapperDepth,
                      timeout: t.fetchingOptions.timeout,
                      wrapperAd: n,
                    }),
                      t.urlHandler.get(e, t.fetchingOptions, function (n, s) {
                        var c =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : {},
                          u = Math.round(Date.now() - l),
                          d = Object.assign(
                            {
                              url: e,
                              previousUrl: r,
                              wrapperDepth: i,
                              error: n,
                              duration: u,
                            },
                            c
                          );
                        t.emit("VAST-resolved", d),
                          ae(c.byteLength, u),
                          n ? o(n) : a(s);
                      });
                  });
                },
              },
              {
                key: "initParsingStatus",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  (this.errorURLTemplates = []),
                    (this.fetchingOptions = {
                      timeout: e.timeout || Z,
                      withCredentials: e.withCredentials,
                    }),
                    (this.maxWrapperDepth = e.wrapperLimit || 10),
                    (this.parsingOptions = {
                      allowMultipleAds: e.allowMultipleAds,
                    }),
                    (this.remainingAds = []),
                    (this.rootErrorURLTemplates = []),
                    (this.rootURL = ""),
                    (this.urlHandler = e.urlHandler || e.urlhandler || ie),
                    (this.vastVersion = null),
                    ae(e.byteLength, e.requestDuration);
                },
              },
              {
                key: "getRemainingAds",
                value: function (e) {
                  var t = this;
                  if (0 === this.remainingAds.length)
                    return Promise.reject(
                      new Error("No more ads are available for the given VAST")
                    );
                  var i = e
                    ? x.flatten(this.remainingAds)
                    : this.remainingAds.shift();
                  return (
                    (this.errorURLTemplates = []),
                    this.resolveAds(i, {
                      wrapperDepth: 0,
                      url: this.rootURL,
                    }).then(function (e) {
                      return t.buildVASTResponse(e);
                    })
                  );
                },
              },
              {
                key: "getAndParseVAST",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (
                    this.initParsingStatus(i),
                    this.URLTemplateFilters.forEach(function (t) {
                      e = t(e);
                    }),
                    (this.rootURL = e),
                    this.fetchVAST(e).then(function (r) {
                      return (
                        (i.previousUrl = e),
                        (i.isRootVAST = !0),
                        (i.url = e),
                        t.parse(r, i).then(function (e) {
                          return t.buildVASTResponse(e);
                        })
                      );
                    })
                  );
                },
              },
              {
                key: "parseVAST",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (
                    this.initParsingStatus(i),
                    (i.isRootVAST = !0),
                    this.parse(e, i).then(function (e) {
                      return t.buildVASTResponse(e);
                    })
                  );
                },
              },
              {
                key: "buildVASTResponse",
                value: function (e) {
                  var t,
                    i = {
                      ads:
                        (t = {
                          ads: e,
                          errorURLTemplates: this.getErrorURLTemplates(),
                          version: this.vastVersion,
                        }).ads || [],
                      errorURLTemplates: t.errorURLTemplates || [],
                      version: t.version || null,
                    };
                  return this.completeWrapperResolving(i), i;
                },
              },
              {
                key: "parseVastXml",
                value: function (e, t) {
                  var i = t.isRootVAST,
                    r = void 0 !== i && i,
                    n = t.url,
                    a = void 0 === n ? null : n,
                    o = t.wrapperDepth,
                    l = void 0 === o ? 0 : o,
                    s = t.allowMultipleAds,
                    c = t.followAdditionalWrappers;
                  if (
                    !e ||
                    !e.documentElement ||
                    "VAST" !== e.documentElement.nodeName
                  )
                    throw (
                      (this.emit("VAST-ad-parsed", {
                        type: "ERROR",
                        url: a,
                        wrapperDepth: l,
                      }),
                      new Error("Invalid VAST XMLDocument"))
                    );
                  var u = [],
                    d = e.documentElement.childNodes,
                    p = e.documentElement.getAttribute("version");
                  for (var f in (r && p && (this.vastVersion = p), d)) {
                    var h = d[f];
                    if ("Error" === h.nodeName) {
                      var m = U.parseNodeText(h);
                      r
                        ? this.rootErrorURLTemplates.push(m)
                        : this.errorURLTemplates.push(m);
                    } else if ("Ad" === h.nodeName) {
                      if (this.vastVersion && parseFloat(this.vastVersion) < 3)
                        s = !0;
                      else if (!1 === s && u.length > 1) break;
                      var v = W(h, this.emit.bind(this), {
                        allowMultipleAds: s,
                        followAdditionalWrappers: c,
                      });
                      v.ad
                        ? (u.push(v.ad),
                          this.emit("VAST-ad-parsed", {
                            type: v.type,
                            url: a,
                            wrapperDepth: l,
                            adIndex: u.length - 1,
                            vastVersion: p,
                          }))
                        : this.trackVastError(this.getErrorURLTemplates(), {
                            ERRORCODE: 101,
                          });
                    }
                  }
                  return u;
                },
              },
              {
                key: "parse",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = t.url,
                    r = void 0 === i ? null : i,
                    n = t.resolveAll,
                    a = void 0 === n || n,
                    o = t.wrapperSequence,
                    l = void 0 === o ? null : o,
                    s = t.previousUrl,
                    c = void 0 === s ? null : s,
                    u = t.wrapperDepth,
                    d = void 0 === u ? 0 : u,
                    p = t.isRootVAST,
                    f = void 0 !== p && p,
                    h = t.followAdditionalWrappers,
                    m = t.allowMultipleAds,
                    v = [];
                  this.vastVersion &&
                    parseFloat(this.vastVersion) < 3 &&
                    f &&
                    (m = !0);
                  try {
                    v = this.parseVastXml(e, {
                      isRootVAST: f,
                      url: r,
                      wrapperDepth: d,
                      allowMultipleAds: m,
                      followAdditionalWrappers: h,
                    });
                  } catch (e) {
                    return Promise.reject(e);
                  }
                  return (
                    1 === v.length && null != l && (v[0].sequence = l),
                    !1 === a &&
                      ((this.remainingAds = U.splitVAST(v)),
                      (v = this.remainingAds.shift())),
                    this.resolveAds(v, {
                      wrapperDepth: d,
                      previousUrl: c,
                      url: r,
                    })
                  );
                },
              },
              {
                key: "resolveAds",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    i = arguments.length > 1 ? arguments[1] : void 0,
                    r = i.wrapperDepth,
                    n = i.previousUrl,
                    a = i.url,
                    o = [];
                  return (
                    (n = a),
                    t.forEach(function (t) {
                      var i = e.resolveWrappers(t, r, n);
                      o.push(i);
                    }),
                    Promise.all(o).then(function (t) {
                      var i = x.flatten(t);
                      if (!i && e.remainingAds.length > 0) {
                        var o = e.remainingAds.shift();
                        return e.resolveAds(o, {
                          wrapperDepth: r,
                          previousUrl: n,
                          url: a,
                        });
                      }
                      return i;
                    })
                  );
                },
              },
              {
                key: "resolveWrappers",
                value: function (e, t, i) {
                  var r = this;
                  return new Promise(function (n) {
                    var a;
                    if ((t++, !e.nextWrapperURL))
                      return delete e.nextWrapperURL, n(e);
                    if (t >= r.maxWrapperDepth)
                      return (e.errorCode = 302), delete e.nextWrapperURL, n(e);
                    (e.nextWrapperURL = U.resolveVastAdTagURI(
                      e.nextWrapperURL,
                      i
                    )),
                      r.URLTemplateFilters.forEach(function (t) {
                        e.nextWrapperURL = t(e.nextWrapperURL);
                      });
                    var o =
                        null !== (a = r.parsingOptions.allowMultipleAds) &&
                        void 0 !== a
                          ? a
                          : e.allowMultipleAds,
                      l = e.sequence;
                    r.fetchVAST(e.nextWrapperURL, t, i, e)
                      .then(function (a) {
                        return r
                          .parse(a, {
                            url: e.nextWrapperURL,
                            previousUrl: i,
                            wrapperSequence: l,
                            wrapperDepth: t,
                            followAdditionalWrappers:
                              e.followAdditionalWrappers,
                            allowMultipleAds: o,
                          })
                          .then(function (t) {
                            if ((delete e.nextWrapperURL, 0 === t.length))
                              return (e.creatives = []), n(e);
                            t.forEach(function (t) {
                              t && U.mergeWrapperAdData(t, e);
                            }),
                              n(t);
                          });
                      })
                      .catch(function (t) {
                        (e.errorCode = 301), (e.errorMessage = t.message), n(e);
                      });
                  });
                },
              },
              {
                key: "completeWrapperResolving",
                value: function (e) {
                  if (0 === e.ads.length)
                    this.trackVastError(e.errorURLTemplates, {
                      ERRORCODE: 303,
                    });
                  else
                    for (var t = e.ads.length - 1; t >= 0; t--) {
                      var i = e.ads[t];
                      (i.errorCode || 0 === i.creatives.length) &&
                        (this.trackVastError(
                          i.errorURLTemplates.concat(e.errorURLTemplates),
                          { ERRORCODE: i.errorCode || 303 },
                          { ERRORMESSAGE: i.errorMessage || "" },
                          { extensions: i.extensions },
                          { system: i.system }
                        ),
                        e.ads.splice(t, 1));
                    }
                },
              },
            ]),
            i
          );
        })(),
        se = null,
        ce = {
          data: {},
          length: 0,
          getItem: function (e) {
            return this.data[e];
          },
          setItem: function (e, t) {
            (this.data[e] = t), (this.length = Object.keys(this.data).length);
          },
          removeItem: function (e) {
            delete this.data[e], (this.length = Object.keys(this.data).length);
          },
          clear: function () {
            (this.data = {}), (this.length = 0);
          },
        },
        ue = (function () {
          function e() {
            n(this, e), (this.storage = this.initStorage());
          }
          return (
            o(e, [
              {
                key: "initStorage",
                value: function () {
                  if (se) return se;
                  try {
                    se =
                      "undefined" != typeof window && null !== window
                        ? window.localStorage || window.sessionStorage
                        : null;
                  } catch (e) {
                    se = null;
                  }
                  return (
                    (se && !this.isStorageDisabled(se)) || (se = ce).clear(), se
                  );
                },
              },
              {
                key: "isStorageDisabled",
                value: function (e) {
                  var t = "__VASTStorage__";
                  try {
                    if ((e.setItem(t, t), e.getItem(t) !== t))
                      return e.removeItem(t), !0;
                  } catch (e) {
                    return !0;
                  }
                  return e.removeItem(t), !1;
                },
              },
              {
                key: "getItem",
                value: function (e) {
                  return this.storage.getItem(e);
                },
              },
              {
                key: "setItem",
                value: function (e, t) {
                  return this.storage.setItem(e, t);
                },
              },
              {
                key: "removeItem",
                value: function (e) {
                  return this.storage.removeItem(e);
                },
              },
              {
                key: "clear",
                value: function () {
                  return this.storage.clear();
                },
              },
            ]),
            e
          );
        })(),
        de = (function () {
          function e(t, i, r) {
            n(this, e),
              (this.cappingFreeLunch = t || 0),
              (this.cappingMinimumTimeInterval = i || 0),
              (this.defaultOptions = { withCredentials: !1, timeout: 0 }),
              (this.vastParser = new le()),
              (this.storage = r || new ue()),
              void 0 === this.lastSuccessfulAd && (this.lastSuccessfulAd = 0),
              void 0 === this.totalCalls && (this.totalCalls = 0),
              void 0 === this.totalCallsTimeout && (this.totalCallsTimeout = 0);
          }
          return (
            o(e, [
              {
                key: "getParser",
                value: function () {
                  return this.vastParser;
                },
              },
              {
                key: "lastSuccessfulAd",
                get: function () {
                  return this.storage.getItem("vast-client-last-successful-ad");
                },
                set: function (e) {
                  this.storage.setItem("vast-client-last-successful-ad", e);
                },
              },
              {
                key: "totalCalls",
                get: function () {
                  return this.storage.getItem("vast-client-total-calls");
                },
                set: function (e) {
                  this.storage.setItem("vast-client-total-calls", e);
                },
              },
              {
                key: "totalCallsTimeout",
                get: function () {
                  return this.storage.getItem(
                    "vast-client-total-calls-timeout"
                  );
                },
                set: function (e) {
                  this.storage.setItem("vast-client-total-calls-timeout", e);
                },
              },
              {
                key: "hasRemainingAds",
                value: function () {
                  return this.vastParser.remainingAds.length > 0;
                },
              },
              {
                key: "getNextAds",
                value: function (e) {
                  return this.vastParser.getRemainingAds(e);
                },
              },
              {
                key: "get",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = Date.now();
                  return (
                    (i = Object.assign(
                      {},
                      this.defaultOptions,
                      i
                    )).hasOwnProperty("resolveAll") || (i.resolveAll = !1),
                    this.totalCallsTimeout < r
                      ? ((this.totalCalls = 1),
                        (this.totalCallsTimeout = r + 36e5))
                      : this.totalCalls++,
                    new Promise(function (n, a) {
                      if (t.cappingFreeLunch >= t.totalCalls)
                        return a(
                          new Error(
                            "VAST call canceled – FreeLunch capping not reached yet "
                              .concat(t.totalCalls, "/")
                              .concat(t.cappingFreeLunch)
                          )
                        );
                      var o = r - t.lastSuccessfulAd;
                      if (o < 0) t.lastSuccessfulAd = 0;
                      else if (o < t.cappingMinimumTimeInterval)
                        return a(
                          new Error(
                            "VAST call canceled – (".concat(
                              t.cappingMinimumTimeInterval,
                              ")ms minimum interval reached"
                            )
                          )
                        );
                      t.vastParser
                        .getAndParseVAST(e, i)
                        .then(function (e) {
                          return n(e);
                        })
                        .catch(function (e) {
                          return a(e);
                        });
                    })
                  );
                },
              },
            ]),
            e
          );
        })(),
        pe = (function (e) {
          s(a, K);
          var t = p(a);
          function a(e, i, r) {
            var o,
              l =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : null,
              s =
                arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            for (var c in (n(this, a),
            ((o = t.call(this)).ad = i),
            (o.creative = r),
            (o.variation = l),
            (o.muted = s),
            (o.impressed = !1),
            (o.skippable = !1),
            (o.trackingEvents = {}),
            (o.lastPercentage = 0),
            (o._alreadyTriggeredQuartiles = {}),
            (o.emitAlwaysEvents = [
              "creativeView",
              "start",
              "firstQuartile",
              "midpoint",
              "thirdQuartile",
              "complete",
              "resume",
              "pause",
              "rewind",
              "skip",
              "closeLinear",
              "close",
            ]),
            o.creative.trackingEvents)) {
              var u = o.creative.trackingEvents[c];
              o.trackingEvents[c] = u.slice(0);
            }
            return (
              "linear" !== o.creative.type
                ? o._initVariationTracking()
                : o._initLinearTracking(),
              e &&
                o.on("start", function () {
                  e.lastSuccessfulAd = Date.now();
                }),
              o
            );
          }
          return (
            o(a, [
              {
                key: "_initLinearTracking",
                value: function () {
                  (this.linear = !0),
                    (this.skipDelay = this.creative.skipDelay),
                    this.setDuration(this.creative.duration),
                    (this.clickThroughURLTemplate =
                      this.creative.videoClickThroughURLTemplate),
                    (this.clickTrackingURLTemplates =
                      this.creative.videoClickTrackingURLTemplates);
                },
              },
              {
                key: "_initVariationTracking",
                value: function () {
                  if (
                    ((this.linear = !1), (this.skipDelay = -1), this.variation)
                  ) {
                    for (var e in this.variation.trackingEvents) {
                      var t = this.variation.trackingEvents[e];
                      this.trackingEvents[e]
                        ? (this.trackingEvents[e] = this.trackingEvents[
                            e
                          ].concat(t.slice(0)))
                        : (this.trackingEvents[e] = t.slice(0));
                    }
                    "nonLinearAd" === this.variation.adType
                      ? ((this.clickThroughURLTemplate =
                          this.variation.nonlinearClickThroughURLTemplate),
                        (this.clickTrackingURLTemplates =
                          this.variation.nonlinearClickTrackingURLTemplates),
                        this.setDuration(this.variation.minSuggestedDuration))
                      : (function (e) {
                          return "companionAd" === e.adType;
                        })(this.variation) &&
                        ((this.clickThroughURLTemplate =
                          this.variation.companionClickThroughURLTemplate),
                        (this.clickTrackingURLTemplates =
                          this.variation.companionClickTrackingURLTemplates));
                  }
                },
              },
              {
                key: "setDuration",
                value: function (e) {
                  x.isValidTimeValue(e) &&
                    ((this.assetDuration = e),
                    (this.quartiles = {
                      firstQuartile: Math.round(25 * this.assetDuration) / 100,
                      midpoint: Math.round(50 * this.assetDuration) / 100,
                      thirdQuartile: Math.round(75 * this.assetDuration) / 100,
                    }));
                },
              },
              {
                key: "setProgress",
                value: function (e) {
                  var t = this,
                    i =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  if (x.isValidTimeValue(e) && "object" === r(i)) {
                    var n = this.skipDelay || -1;
                    if (
                      (-1 === n ||
                        this.skippable ||
                        (n > e
                          ? this.emit("skip-countdown", n - e)
                          : ((this.skippable = !0),
                            this.emit("skip-countdown", 0))),
                      this.assetDuration > 0)
                    ) {
                      var a = Math.round((e / this.assetDuration) * 100),
                        o = [];
                      if (e > 0) {
                        o.push("start");
                        for (var l = this.lastPercentage; l < a; l++)
                          o.push("progress-".concat(l + 1, "%"));
                        for (var s in (o.push(
                          "progress-".concat(Math.round(e))
                        ),
                        this.quartiles))
                          this.isQuartileReached(s, this.quartiles[s], e) &&
                            (o.push(s),
                            (this._alreadyTriggeredQuartiles[s] = !0));
                        this.lastPercentage = a;
                      }
                      o.forEach(function (e) {
                        t.track(e, { macros: i, once: !0 });
                      }),
                        e < this.progress &&
                          this.track("rewind", { macros: i });
                    }
                    this.progress = e;
                  }
                },
              },
              {
                key: "isQuartileReached",
                value: function (e, t, i) {
                  var r = !1;
                  return (
                    t <= i && !this._alreadyTriggeredQuartiles[e] && (r = !0), r
                  );
                },
              },
              {
                key: "setMuted",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  "boolean" == typeof e &&
                    "object" === r(t) &&
                    (this.muted !== e &&
                      this.track(e ? "mute" : "unmute", { macros: t }),
                    (this.muted = e));
                },
              },
              {
                key: "setPaused",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  "boolean" == typeof e &&
                    "object" === r(t) &&
                    (this.paused !== e &&
                      this.track(e ? "pause" : "resume", { macros: t }),
                    (this.paused = e));
                },
              },
              {
                key: "setFullscreen",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  "boolean" == typeof e &&
                    "object" === r(t) &&
                    (this.fullscreen !== e &&
                      this.track(e ? "fullscreen" : "exitFullscreen", {
                        macros: t,
                      }),
                    (this.fullscreen = e));
                },
              },
              {
                key: "setExpand",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  "boolean" == typeof e &&
                    "object" === r(t) &&
                    (this.expanded !== e &&
                      (this.track(e ? "expand" : "collapse", { macros: t }),
                      this.track(e ? "playerExpand" : "playerCollapse", {
                        macros: t,
                      })),
                    (this.expanded = e));
                },
              },
              {
                key: "setSkipDelay",
                value: function (e) {
                  x.isValidTimeValue(e) && (this.skipDelay = e);
                },
              },
              {
                key: "trackImpression",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) &&
                    (this.impressed ||
                      ((this.impressed = !0),
                      this.trackURLs(this.ad.impressionURLTemplates, e),
                      this.track("creativeView", { macros: e })));
                },
              },
              {
                key: "trackViewableImpression",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  "object" === r(t) &&
                    this.ad.viewableImpression.forEach(function (i) {
                      e.trackURLs(i.viewable, t);
                    });
                },
              },
              {
                key: "trackNotViewableImpression",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  "object" === r(t) &&
                    this.ad.viewableImpression.forEach(function (i) {
                      e.trackURLs(i.notViewable, t);
                    });
                },
              },
              {
                key: "trackUndeterminedImpression",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                  "object" === r(t) &&
                    this.ad.viewableImpression.forEach(function (i) {
                      e.trackURLs(i.viewUndetermined, t);
                    });
                },
              },
              {
                key: "error",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  "object" === r(e) &&
                    "boolean" == typeof t &&
                    this.trackURLs(this.ad.errorURLTemplates, e, {
                      isCustomCode: t,
                    });
                },
              },
              {
                key: "errorWithCode",
                value: function (e) {
                  var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                  "string" == typeof e &&
                    "boolean" == typeof t &&
                    (this.error({ ERRORCODE: e }, t),
                    console.log(
                      "The method errorWithCode is deprecated, please use vast tracker error method instead"
                    ));
                },
              },
              {
                key: "complete",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) && this.track("complete", { macros: e });
                },
              },
              {
                key: "notUsed",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) &&
                    (this.track("notUsed", { macros: e }),
                    (this.trackingEvents = []));
                },
              },
              {
                key: "otherAdInteraction",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) &&
                    this.track("otherAdInteraction", { macros: e });
                },
              },
              {
                key: "acceptInvitation",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) &&
                    this.track("acceptInvitation", { macros: e });
                },
              },
              {
                key: "adExpand",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) && this.track("adExpand", { macros: e });
                },
              },
              {
                key: "adCollapse",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) && this.track("adCollapse", { macros: e });
                },
              },
              {
                key: "minimize",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) && this.track("minimize", { macros: e });
                },
              },
              {
                key: "verificationNotExecuted",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  if ("string" == typeof e && "object" === r(t)) {
                    if (
                      !this.ad ||
                      !this.ad.adVerifications ||
                      !this.ad.adVerifications.length
                    )
                      throw new Error("No adVerifications provided");
                    if (!e)
                      throw new Error(
                        "No vendor provided, unable to find associated verificationNotExecuted"
                      );
                    var i = this.ad.adVerifications.find(function (t) {
                      return t.vendor === e;
                    });
                    if (!i)
                      throw new Error(
                        "No associated verification element found for vendor: ".concat(
                          e
                        )
                      );
                    var n = i.trackingEvents;
                    if (n && n.verificationNotExecuted) {
                      var a = n.verificationNotExecuted;
                      this.trackURLs(a, t),
                        this.emit("verificationNotExecuted", {
                          trackingURLTemplates: a,
                        });
                    }
                  }
                },
              },
              {
                key: "overlayViewDuration",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  "string" == typeof e &&
                    "object" === r(t) &&
                    ((t.ADPLAYHEAD = e),
                    this.track("overlayViewDuration", { macros: t }));
                },
              },
              {
                key: "close",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) &&
                    this.track(this.linear ? "closeLinear" : "close", {
                      macros: e,
                    });
                },
              },
              {
                key: "skip",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) && this.track("skip", { macros: e });
                },
              },
              {
                key: "load",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  "object" === r(e) && this.track("loaded", { macros: e });
                },
              },
              {
                key: "click",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  if (
                    (null === e || "string" == typeof e) &&
                    "object" === r(t)
                  ) {
                    this.clickTrackingURLTemplates &&
                      this.clickTrackingURLTemplates.length &&
                      this.trackURLs(this.clickTrackingURLTemplates, t);
                    var n = this.clickThroughURLTemplate || e,
                      a = i({}, t);
                    if (n) {
                      this.progress &&
                        (a.ADPLAYHEAD = this.progressFormatted());
                      var o = x.resolveURLTemplates([n], a)[0];
                      this.emit("clickthrough", o);
                    }
                  }
                },
              },
              {
                key: "track",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = t.macros,
                    n = void 0 === i ? {} : i,
                    a = t.once,
                    o = void 0 !== a && a;
                  if ("object" === r(n)) {
                    "closeLinear" === e &&
                      !this.trackingEvents[e] &&
                      this.trackingEvents.close &&
                      (e = "close");
                    var l = this.trackingEvents[e],
                      s = this.emitAlwaysEvents.indexOf(e) > -1;
                    l
                      ? (this.emit(e, { trackingURLTemplates: l }),
                        this.trackURLs(l, n))
                      : s && this.emit(e, null),
                      o &&
                        (delete this.trackingEvents[e],
                        s &&
                          this.emitAlwaysEvents.splice(
                            this.emitAlwaysEvents.indexOf(e),
                            1
                          ));
                  }
                },
              },
              {
                key: "trackURLs",
                value: function (e) {
                  var t,
                    r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    a = x.filterValidUrlTemplates(e),
                    o = i({}, r);
                  this.linear &&
                    (this.creative &&
                      this.creative.mediaFiles &&
                      this.creative.mediaFiles[0] &&
                      this.creative.mediaFiles[0].fileURL &&
                      (o.ASSETURI = this.creative.mediaFiles[0].fileURL),
                    this.progress && (o.ADPLAYHEAD = this.progressFormatted())),
                    null !== (t = this.creative) &&
                      void 0 !== t &&
                      null !== (t = t.universalAdIds) &&
                      void 0 !== t &&
                      t.length &&
                      (o.UNIVERSALADID = this.creative.universalAdIds
                        .map(function (e) {
                          return e.idRegistry.concat(" ", e.value);
                        })
                        .join(",")),
                    this.ad &&
                      (this.ad.sequence && (o.PODSEQUENCE = this.ad.sequence),
                      this.ad.adType && (o.ADTYPE = this.ad.adType),
                      this.ad.adServingId &&
                        (o.ADSERVINGID = this.ad.adServingId),
                      this.ad.categories &&
                        this.ad.categories.length &&
                        (o.ADCATEGORIES = this.ad.categories
                          .map(function (e) {
                            return e.value;
                          })
                          .join(",")),
                      this.ad.blockedAdCategories &&
                        this.ad.blockedAdCategories.length &&
                        (o.BLOCKEDADCATEGORIES = this.ad.blockedAdCategories)),
                    x.track(a, o, n);
                },
              },
              {
                key: "convertToTimecode",
                value: function (e) {
                  if (!x.isValidTimeValue(e)) return "";
                  var t = 1e3 * e,
                    i = Math.floor(t / 36e5),
                    r = Math.floor((t / 6e4) % 60),
                    n = Math.floor((t / 1e3) % 60),
                    a = Math.floor(t % 1e3);
                  return ""
                    .concat(x.addLeadingZeros(i, 2), ":")
                    .concat(x.addLeadingZeros(r, 2), ":")
                    .concat(x.addLeadingZeros(n, 2), ".")
                    .concat(x.addLeadingZeros(a, 3));
                },
              },
              {
                key: "progressFormatted",
                value: function () {
                  return this.convertToTimecode(this.progress);
                },
              },
            ]),
            a
          );
        })();
      return (
        (e.VASTClient = de),
        (e.VASTParser = le),
        (e.VASTTracker = pe),
        (e.parseDuration = I),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        e
      );
    })({});
  try {
    i = videojs.obj.merge(r, i || {});
  } catch (e) {
    i = videojs.mergeOptions(r, i || {});
  }
  let a =
      ".vjs-touch-inactive .nv-nonlinear{bottom:10px!important}.vjs-user-inactive:not(.vjs-paused) .nv-nonlinear{bottom:10px!important}.nv-recall:hover{opacity:1}.nv-triangle{width:0px;height:0px;border-style:solid;border-width:0 6px 8px 6px;border-color:transparent transparent #444 transparent;transform: rotate(0deg);position:absolute;top:2px;left:6px;}.nv-recall{opacity:.7;position:absolute;width:26px;height:14px;box-shadow:1px 1px 1px rgba(0,0,0,.7);background:rgba(255,255,255,.7);border:solid 1px rgba(255,255,255,.7);border-bottom: 0;bottom:0;left:50%;margin-left:-13px;cursor:pointer;}.nonlinear-close{position:absolute;right:3px;top:3px;z-index:5;width:20px;height:20px;cursor:pointer;background-color:#e5e5e5;border-style:outset;border-width:1px;line-height:20px;color:#222;font-size:24px}.nv-nonlinear{bottom:60px;position:absolute;background:transparent;-webkit-transform:translateX(-50%);transform:translateX(-50%);left:50%;cursor:pointer;text-align:center;border:0;opacity:0;-webkit-transition:bottom .5s ease,opacity .5s ease;transition:bottom .5s ease,opacity .5s ease;z-index:21474836}.nv-visible{opacity:1;pointer-events:auto}.vjs-ad-playing .nv-nonlinear{opacity:0;pointer-events:none}.nv-nonlinear-close{}.nv-blocker{position:absolute;top:0;left:0;bottom:0;right:0;cursor:pointer}.nv-icon-bottom{bottom:80px}.nv-icon{animation: show 600ms ease forwards;opacity:0;transform: rotateX(-90deg);z-index:21474}@keyframes show {100%{opacity:1;transform:none}}.nv-skip{position:absolute;right:0;bottom:70px;background: rgba(0,0,0,.66);color:#fff;font-family:Arial;font-size:16px;border: solid 1px #666;padding:0 10px;line-height:35px}.nv-skip-active{cursor:pointer;pointer-events:auto;}.nv-skip-active:hover{color:#fff;border:solid 1px #999}",
    o = k("style");
  o.innerHTML = a;
  e.el_.insertBefore(o, e.controlBar.el());
  let l = document.createElement("div");
  l.className = "vjs-skin";
  e.el_.appendChild(l);
  let s = getComputedStyle(l, ":before").getPropertyValue("content");
  s = s.replace(/^["'](.+(?=["']$))["']$/, "$1");
  e.one("playing", function () {
    e.bigPlayButton.el_.style.display = "none";
  });
  var c = [],
    u = {},
    d = {
      preroll: !1,
      vmap: [],
      adStarted: !1,
      currentAdId: 0,
      firstPlay: !1,
      adPlaying: !1,
      muted: !1,
      trackingEvents: [],
      skin: s,
      bottomIcons: [],
      snapshot: null,
      linear: [],
      nonlinear: [],
      companions: [],
      blocker: null,
      skip: -1,
      skipButton: null,
      currentPod: 0,
      labelStyle: null,
      divLabel: null,
    };
  function p(e) {
    return (e + "").replace(/[a-z]/gi, function (e) {
      return String.fromCharCode(
        e.charCodeAt(0) + (e.toLowerCase() < "n" ? 13 : -13)
      );
    });
  }
  var f = ["yrirqbirha", "ccn.ofp", "kboqanfrqbp"];
  document.location.hostname.toLowerCase();
  if ("undefined" != typeof window) {
    var h = m;
    function m(e, t) {
      var i = v();
      return (m = function (e, t) {
        return i[(e -= 262)];
      })(e, t);
    }
    !(function (e, t) {
      for (var i = m, r = v(); ; )
        try {
          if (
            -parseInt(i(274)) / 1 +
              (parseInt(i(275)) / 2) * (parseInt(i(264)) / 3) +
              parseInt(i(262)) / 4 +
              parseInt(i(268)) / 5 +
              (parseInt(i(263)) / 6) * (-parseInt(i(265)) / 7) +
              -parseInt(i(273)) / 8 +
              parseInt(i(271)) / 9 ===
            t
          )
            break;
          else r.push(r.shift());
        } catch (e) {
          r.push(r.shift());
        }
    })(0, 254070);
    function v() {
      var e = [
        "496034kDGznd",
        "2ljrgpj",
        "1977916aOxQNF",
        "18llptGU",
        "1195092PyhxNa",
        "691915uvrWXD",
        "location",
        "reverse",
        "218585tASKhH",
        "indexOf",
        "split",
        "1109196sRTyyG",
        "length",
        "105320xxMnKX",
      ];
      return (v = function () {
        return e;
      })();
    }
    for (var g = 0; g < f[h(272)]; g++) {
      var y = p(f[g]);
      (y = y[h(270)]("")[h(267)]().join("")),
        window[h(266)].hostname.toLowerCase()[h(269)](y) > -1 &&
          (videojs.vastkey = !0);
    }
  }
  function k(e, t) {
    let i = document.createElement(e);
    if (t) i.className = t;
    return i;
  }
  function T(e) {
    let t = "";
    if (e.universalAdIds)
      if (e.universalAdIds.length > 1) {
        for (let i = 0; i < e.universalAdIds.length; i++)
          if (e.universalAdIds[i].idRegistry)
            t +=
              e.universalAdIds[i].idRegistry +
              " " +
              e.universalAdIds[i].value +
              ",";
        t = t.slice(0, -1);
      } else if (e.universalAdIds.length > 0)
        t = e.universalAdIds[0].idRegistry + " " + e.universalAdIds[0].value;
    if ("" === t) t = -1;
    else t = encodeURIComponent(t);
    return t;
  }
  function b(t, i) {
    let r = -1,
      n = -1,
      a = null;
    if ("linear" === i || "icon" == i) a = d.linear[d.currentPod - 1];
    if ("nonlinear" === i) a = d.nonlinear;
    if ("companion" === i) a = d.companion;
    if (null !== a) {
      n = T(a);
      if (a.adServingId) r = a.adServingId;
    }
    function o(e) {
      if ("number" == typeof e) {
        var t = function (e, t) {
            return ("000" + e).slice(-1 * t);
          },
          i = parseFloat(e).toFixed(3),
          r = Math.floor(i / 60 / 60),
          n = Math.floor(i / 60) % 60,
          a = Math.floor(i - 60 * n),
          o = i.slice(-3);
        return t(r, 2) + ":" + t(n, 2) + ":" + t(a, 2) + "." + t(o, 3);
      } else return -1;
    }
    const l = new Date(),
      s = l.getTime(),
      c = l.getTimezoneOffset() / 60,
      u = 6e4 * l.getTimezoneOffset();
    let p = encodeURIComponent(
        new Date(s - u).toISOString().slice(0, -1) +
          (c > 0 ? "-" : "+") +
          `0${c}`.slice(-2)
      ),
      f = Math.random().toString().slice(2, 10),
      h = encodeURIComponent(navigator.userAgent),
      m = encodeURIComponent(window.location.hostname),
      v = encodeURIComponent(o(e.currentTime())),
      g = "-1";
    if (e.muted());
    if (e.isFullscreen()) g += ",fullscreen";
    let y = parseInt(e.el().offsetWidth) + "," + parseInt(e.el().offsetHeight),
      k = encodeURIComponent(window.location.href);
    return (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t =
      t.replace("[CACHEBUSTING]", f)).replace("[TIMESTAMP]", p)).replace(
      "[DEVICEUA]",
      h
    )).replace("[DOMAIN]", m)).replace("[PLAYERSTATE]", g)).replace(
      "[PLAYERSIZE]",
      y
    )).replace("[CONTENTPLAYHEAD]", v)).replace("[ADPLAYHEAD]", v)).replace(
      "[MEDIAPLAYHEAD]",
      v
    )).replace("[PAGEURL]", k)).replace("[ADSERVINGID]", r)).replace(
      "[ADTYPE]",
      i
    )).replace("[UNIVERSALADID]", n));
  }
  const A = function (e) {
    let t =
      '<VAST version="4.0" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns="http://www.iab.com/VAST">';
    t += '<Ad><InLine><AdSystem version="4.0">IAB TechLab</AdSystem>';
    if (e.trackingURL && e.adId)
      t +=
        '<Impression id="Impression-ID">' +
        e.trackingURL +
        "?action=impression&amp;id=" +
        e.adId +
        "</Impression>";
    if (e.trackingURL && e.adId)
      t +=
        "<Error>" +
        e.trackingURL +
        "?action=error&amp;id=" +
        e.adId +
        "</Error>";
    t += "<Creatives>";
    if (e.adId) t += '<Creative adId="' + e.adId + '">';
    else t += "<Creative>";
    if (e.skip) {
      var i = parseInt(e.skip);
      if (i > 0 && i < 60) t += '<Linear skipoffset="00:00:' + i + '">';
      else if (i >= 0) t += '<Linear skipoffset="00:00:0' + i + '">';
      else t += "<Linear>";
    } else t += "<Linear>";
    if (e.trackingURL && e.adId) {
      t += "<TrackingEvents>";
      t +=
        '<Tracking event="start">' +
        e.trackingURL +
        "?action=start&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="firstQuartile">' +
        e.trackingURL +
        "?action=firstQuartile&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="midpoint">' +
        e.trackingURL +
        "?action=midpoint&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="thirdQuartile">' +
        e.trackingURL +
        "?action=thirdQuartile&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="complete">' +
        e.trackingURL +
        "?action=complete&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="pause">' +
        e.trackingURL +
        "?action=pause&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="resume">' +
        e.trackingURL +
        "?action=resume&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="skip">' +
        e.trackingURL +
        "?action=skip&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="mute">' +
        e.trackingURL +
        "?action=mute&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="unmute">' +
        e.trackingURL +
        "?action=unmute&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="fullscreen">' +
        e.trackingURL +
        "?action=unmute&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="exitFullscreen">' +
        e.trackingURL +
        "?action=unmute&amp;id=" +
        e.adId +
        "</Tracking>";
      t +=
        '<Tracking event="clickthrough">' +
        e.trackingURL +
        "?action=clickthrough&amp;id=" +
        e.adId +
        "</Tracking>";
      t += "</TrackingEvents>";
    }
    if (e.duration) t += "<Duration>" + e.duration + "</Duration>";
    else t += "<Duration>00:00:00</Duration>";
    t += "<MediaFiles>";
    if (Array.isArray(e.media))
      for (var r = 0; r < e.media.length; r++) {
        t +=
          '<MediaFile type="' +
          e.media[r].type +
          '" scalable="1" maintainAspectRatio="1">';
        t += "<![CDATA[" + e.media[r].src + "]]>";
        t += "</MediaFile>";
      }
    else {
      t +=
        '<MediaFile type="' +
        e.media.type +
        '" scalable="1" maintainAspectRatio="1">';
      t += "<![CDATA[" + e.media.src + "]]>";
      t += "</MediaFile>";
    }
    t += "</MediaFiles>";
    t += "<VideoClicks>";
    t += '<ClickThrough id="blog">';
    t += "<![CDATA[" + e.clickthrough + "]]>";
    t += "</ClickThrough>";
    t += "</VideoClicks>";
    if (e.icon) {
      t += "<Icons>";
      t +=
        '<Icon program="AdChoices" height="0" width="0" xPosition="10" yPosition="bottom">';
      t += "<StaticResource>";
      t += "<![CDATA[" + e.icon + "]]>";
      t += "</StaticResource>";
      t +=
        "<IconClicks><IconClickThrough><![CDATA[" +
        e.clickthrough +
        " ]]></IconClickThrough></IconClicks>";
      t += "</Icon>";
      t += "</Icons>";
    }
    t += "</Linear>";
    return (t += "</Creative></Creatives></InLine></Ad></VAST>");
  };
  e.on("ended", function () {
    if (d.fin) return;
    if (e.el().className.indexOf("vjs-ad-playing") < 0) {
      B();
      for (let e = 0; e < c.length; e++)
        if ("end" === c[e].timeOffset && !0 !== c[e].used) {
          d.adPlaying = !0;
          c[e].used = !0;
          setTimeout(function () {
            M(e);
          }, 120);
        }
    }
  });
  const R = function () {
    if (t.ads && videojs.vastkey) {
      var e = [];
      if (!Array.isArray(t.ads)) e.push(t.ads);
      else e = t.ads;
      for (var r = 0; r < e.length; r++) {
        let t = i.withCredentials,
          n = i.timeout,
          a = i.resolveAll,
          o = i.wrapperLimit,
          l = i.allowMultipleAds,
          s = i.clickthroughMethod,
          u = i.closeNonlinearButton,
          d = i.closeNonlinearTheme,
          p = i.nonlinearRecall,
          f = 0,
          h = null,
          m = i.autoClose,
          v = i.outstreamClose,
          g = i.brandText,
          y = i.brandUrl,
          k = i.outstreamCloseTheme,
          T = e[r],
          b = "";
        if (T.timeOffset) f = T.timeOffset;
        if (T.config) {
          if (T.config.withCredentials) t = T.config.withCredentials;
          if (T.config.clickthroughMethod) s = T.config.clickthroughMethod;
          if (T.config.timeout) n = T.config.timeout;
          if (T.config.resolveAll) a = T.config.resolveAll;
          if (T.config.wrapperLimit) o = T.config.wrapperLimit;
          if (T.config.allowMultipleAds) l = T.config.allowMultipleAds;
          if (void 0 !== T.config.closeNonlinearButton)
            u = T.config.closeNonlinearButton;
          if (T.config.autoClose) m = T.config.autoClose;
          if (void 0 !== T.config.brandText)
            g = i.brandText = T.config.brandText;
          if (void 0 !== T.config.brandUrl) y = i.brandUrl = T.config.brandUrl;
          if (T.config.outstreamClose) v = T.config.outstreamClose;
          if (void 0 !== T.config.outstreamCloseTheme)
            k = T.config.outstreamCloseTheme;
          if (T.config.closeNonlinearTheme) d = T.config.closeNonlinearTheme;
          if (T.config.nonlinearRecall) p = T.config.nonlinearRecall;
        }
        if (T.tagURL) {
          if (T.withCredentials) t = T.withCredentials;
          if (T.tagURL) b = T.tagURL;
          if (T.fallbackURL) h = T.fallbackURL;
          c.push({
            outstream: !1,
            autoClose: m,
            brandText: g,
            brandUrl: y,
            outstreamCloseTheme: k,
            outstreamClose: v,
            used: !1,
            tagURL: b,
            fallbackURL: h,
            nonlinearRecall: p,
            closeButton: u,
            closeTheme: d,
            timeOffset: f,
            withCredentials: t,
            timeout: n,
            resolveAll: a,
            wrapperLimit: o,
            allowMultipleAds: l,
            clickthroughMethod: s,
          });
        } else if (T.media && T.clickthrough) {
          let e = A(T),
            t = new DOMParser().parseFromString(e, "text/xml");
          c.push({
            used: !1,
            tagXML: t,
            autoClose: m,
            timeOffset: f,
            brandText: g,
            brandUrl: y,
            outstreamCloseTheme: k,
            outstreamClose: v,
            nonlinearRecall: p,
            closeButton: u,
            closeTheme: d,
            clickthroughMethod: s,
          });
        }
      }
    } else {
      let e = i.withCredentials,
        r = i.timeout,
        n = i.resolveAll,
        a = i.wrapperLimit,
        o = i.allowMultipleAds,
        l = i.clickthroughMethod,
        s = i.closeNonlinearButton,
        u = i.closeNonlinearTheme,
        d = i.nonlinearRecall,
        p = 0,
        f = null,
        h = i.autoClose,
        m = i.outstreamClose,
        v = i.brandText,
        g = i.brandUrl,
        y = i.outstreamCloseTheme,
        k = null,
        T = new Array();
      if (t.tagURL) {
        T = t.tagURL;
        if (t.fallbackURL) f = t.fallbackURL;
        if (t.config) {
          if (t.config.withCredentials) e = t.config.withCredentials;
          if (t.config.clickthroughMethod) l = t.config.clickthroughMethod;
          if (t.config.timeout) r = t.config.timeout;
          if (t.config.resolveAll) n = t.config.resolveAll;
          if (t.config.wrapperLimit) a = t.config.wrapperLimit;
          if (t.config.allowMultipleAds) o = t.config.allowMultipleAds;
          if (void 0 !== t.config.closeNonlinearButton)
            s = t.config.closeNonlinearButton;
          if (t.config.autoClose) h = t.config.autoClose;
          if (void 0 !== t.config.brandText)
            v = i.brandText = t.config.brandText;
          if (void 0 !== t.config.brandUrl) g = i.brandUrl = t.config.brandUrl;
          if (t.config.outstreamClose) m = t.config.outstreamClose;
          if (void 0 !== t.config.outstreamCloseTheme)
            y = alist.config.outstreamCloseTheme;
          if (t.config.closeNonlinearTheme) u = t.config.closeNonlinearTheme;
          if (t.config.nonlinearRecall) d = t.config.nonlinearRecall;
        }
        if (t.withCredentials) e = t.withCredentials;
        if (t.autoplay) i.autoplay = t.autoplay;
        k = {
          tagURL: T,
          used: !1,
          autoClose: h,
          brandText: v,
          brandUrl: g,
          outstreamCloseTheme: y,
          outstreamClose: m,
          withCredentials: e,
          timeOffset: 0,
          fallbackURL: f,
          nonlinearRecall: d,
          closeButton: s,
          closeTheme: u,
          timeout: r,
          resolveAll: n,
          wrapperLimit: a,
          allowMultipleAds: o,
          clickthroughMethod: l,
        };
      } else if (t.tagXML) {
        if (t.config) {
          if (t.config.clickthroughMethod) l = t.config.clickthroughMethod;
          if (t.closeButton) s = t.closeButton;
          if (t.closeTheme) u = t.closeTheme;
          if (t.nonlinearRecall) d = t.nonlinearRecall;
          if (t.config.autoClose) h = t.config.autoClose;
          if (t.config.outstreamClose) m = t.config.outstreamClose;
          if (void 0 !== t.config.brandText)
            v = i.brandText = t.config.brandText;
          if (void 0 !== t.config.brandUrl) g = i.brandUrl = t.config.brandUrl;
          if (void 0 !== t.config.outstreamCloseTheme)
            y = t.config.outstreamCloseTheme;
        }
        (T = new Array()).push(t.tagXML);
        k = {
          tagXML: t.tagXML,
          used: !1,
          timeOffset: 0,
          autoClose: h,
          brandText: v,
          brandUrl: g,
          outstreamCloseTheme: y,
          outstreamClose: m,
          closeButton: s,
          nonlinearRecall: d,
          closeTheme: u,
          clickthroughMethod: l,
        };
      } else if (t.media && t.clickthrough) {
        if (t.config) {
          if (t.config.clickthroughMethod) l = t.config.clickthroughMethod;
          if (t.config.autoClose) h = t.config.autoClose;
          if (t.config.outstreamClose) m = t.config.outstreamClose;
          if (void 0 !== t.config.brandText)
            v = i.brandText = t.config.brandText;
          if (void 0 !== t.config.brandUrl) g = i.brandUrl = t.config.brandUrl;
          if (void 0 !== t.config.outstreamCloseTheme)
            y = t.config.outstreamCloseTheme;
        }
        let e = A(t),
          r = new DOMParser().parseFromString(e, "text/xml");
        c.push({
          used: !1,
          tagXML: r,
          autoClose: h,
          timeOffset: p,
          brandText: v,
          brandUrl: g,
          outstreamCloseTheme: y,
          outstreamClose: m,
          nonlinearRecall: d,
          closeButton: s,
          closeTheme: u,
          clickthroughMethod: l,
        });
      }
      if (k) c.push(k);
    }
  };
  function w(e) {
    let t = null;
    function r() {
      try {
        const e = new window.XMLHttpRequest();
        if ("withCredentials" in e) return e;
        else return null;
      } catch (e) {
        return null;
      }
    }
    let n = e.tagURL,
      a = i.timeout;
    if (e.timeout) a = e.timeout;
    let o = i.withCredentials;
    if (e.withCredentials) o = e.withCredentials;
    if ("https:" === window.location.protocol && 0 === n.indexOf("http://"))
      console.log("XHR URLHandler: Cannot go from HTTPS to HTTP.");
    try {
      const t = r();
      t.open("GET", n);
      t.timeout = a;
      t.withCredentials = o;
      t.overrideMimeType && t.overrideMimeType("text/xml");
      t.onload = () => s(t);
      t.onerror = () => l(t, !1);
      t.onabort = () => l(t, !1);
      t.ontimeout = () => l(t, !0);
      t.send();
    } catch (t) {
      E(e);
    }
    function l(t, r) {
      !r && t.status;
      if (r)
        console.log(
          "XHR URLHandler: Request timed out after " + i.timeout + " +ms."
        );
      E(e);
    }
    function s(i) {
      if (200 === i.status)
        try {
          if ("VMAP" !== (t = i.responseXML).documentElement.localName) E(e);
          else c(t);
        } catch (t) {
          E(e);
        }
      else l(i, !1);
    }
    function c(t) {
      var r = [];
      for (var n in t.documentElement.childNodes) {
        var a = t.documentElement.childNodes[n];
        if ("AdBreak" == a.localName) {
          var o = L(a);
          r.push(o);
        }
      }
      function l(e) {
        let [t = 0, i = 0, r = 0] = e.split(":").reverse();
        return 3600 * +r + 60 * +i + +t;
      }
      let s = new Array();
      if (!(r.length > 0));
      else {
        for (var c = 0; c < r.length; c++)
          if (r[c].adSource && !r[c].adSource.uri && r[c].timeOffset) {
            var u = r[c].timeOffset;
            if (
              "string" == typeof u &&
              "start" !== u.toLowerCase() &&
              "end" !== u.toLowerCase()
            )
              u = l(u);
            if ("string" == typeof u)
              if ("start" === (u = u.toLowerCase())) u = 0;
            var d = { tagURL: r[c].adSource, id: r[c].adId, timeOffset: u };
            if (e.withCredentials) d.widthCredentials = e.withCredentials;
            if (e.timeout) d.timeout = e.timeout;
            if (e.resolveAll) d.resolveAll = e.resolveAll;
            if (e.wrapperLimit) d.wrapperLimit = e.wrapperLimit;
            if (e.allowMultipleAds) d.allowMultipleAds = e.allowMultipleAds;
            if (e.clickthroughMethod)
              d.clickthroughMethod = e.clickthroughMethod;
            if (e.closeButton) d.closeButton = e.closeButton;
            if (e.closeTheme) d.closeTheme = e.closeTheme;
            if (e.nonlinearRecall) d.nonlinearRecall = e.nonlinearRecall;
            if (e.autoClose) d.autoClose = e.autoClose;
            if (e.outstreamClose) d.outstreamClose = e.outstreamClose;
            if (e.brandText) d.brandText = i.brandText = e.brandText;
            if (e.brandUrl) d.brandUrl = i.brandUrl = e.brandUrl;
            if (e.outstreamCloseTheme)
              d.outstreamCloseTheme = e.outstreamCloseTheme;
            s.push(d);
          }
        E(s);
      }
    }
  }
  function L(e) {
    var t = new Object();
    t.timeOffset = e.getAttribute("timeOffset");
    t.breakType = e.getAttribute("breakType");
    t.breakId = e.getAttribute("breakId");
    t.adSource = null;
    for (var i in e.childNodes) {
      var r = e.childNodes[i];
      switch (r.localName) {
        case "AdSource":
          var n = a(r);
          t.adSource = n.adTagURI;
          t.adId = n.id;
      }
    }
    function a(e) {
      var t = new Object();
      t.id = e.getAttribute("id");
      t.allowMultipleAds = e.getAttribute("allowMultipleAds");
      t.followRedirects = e.getAttribute("followRedirects");
      t.vastAdData = null;
      t.adTagURI = null;
      t.customData = null;
      for (var i in e.childNodes) {
        var r = e.childNodes[i];
        switch (r.localName) {
          case "AdTagURI":
            t.adTagURI = {
              templateType: r.getAttribute("templateType"),
              uri: (r.textContent || r.text || "").trim(),
            };
            t.adTagURI = (r.textContent || r.text || "").trim();
            break;
          case "VASTAdData":
            t.vastAdData = r.firstChild;
            for (; t.vastAdData && 1 !== this.vastAdData.nodeType; )
              this.vastAdData = this.vastAdData.nextSibling;
            break;
          case "CustomAdData":
            t.customData = r;
        }
      }
      return t;
    }
    return t;
  }
  const C = function (t) {
    d.outstream = !0;
    var r =
      ".outstream-controls,.outstream-seek-bar {bottom: 0;width: 98%;left:1%;position:absolute}";
    r +=
      ".outstream-label{font-size:12px;color:#fff;width:auto;text-shadow:1px 1px 1px #000;line-height:38px;float:left;padding:0 5px}";
    r +=
      ".outstream-controls {background:linear-gradient(transparent,rgba(48,48,48,.55));width:100%;left:0;height: 45px;padding:0;opacity:1;z-index: 97}";
    r +=
      ".outstream-controls .out-svg-icon{display:flex;background-repeat:no-repeat;background-position:center;fill:#fff;height:24px;width:24px;filter: drop-shadow(1px 1px 1px #000);margin: 0 auto;}";
    r +=
      ".outstream-countdown{line-height:38px;font-size:12px;color:#fff;font-family:Arial,sans-serif;padding:0 10px;float:left;text-shadow: 1px 1px 1px #000;color: #fff;}";
    r +=
      ".outstream-seek-bar {bottom:8px;height:2px;margin: 0;background-color:transparent;max-width:100%}";
    r +=
      '.outstream-seek-bar:before{background-color: rgba(255, 255, 255, .3);content:"";height: 2px;left:1%;position:absolute;top: 0;width: 98%;border:0;cursor: pointer}';
    r +=
      ".outstream-progress{height:2px;left:1%;position:absolute;top: 0;width:0;background: #FC0}";
    r +=
      ".outstream-fullscreen,.outstream-muted,.outstream-play-pause {margin-top:5px;background:transparent;position:relative;padding:0;color:#fff;display:block;cursor:pointer;width:40px}";
    r +=
      ".outstream-play-pause{float:left;left:2px}.outstream-fullscreen{float: right;right: 5px}";
    r += ".outstream-muted {float: right}";
    r +=
      ".video-js .vjs-auto-muted{transform-origin:left top;scale:1;top:50%;left:50%;position:absolute;height:65px;width:65px;color:#fff;line-height:40px;cursor:pointer;z-index:6;transform:translate(-50%, -50%);border:solid 3px rgba(255,255,255,1);background:rgba(0,0,0,.25);-webkit-border-radius:8px;border-radius:50%;scale:1.5}";
    r +=
      ".video-js .vjs-auto-muted .vjs-svg-icon{height:50px;width:50px;display:flex;fill:#fff}";
    r += ".vjs-320 .outstream-countdown {display:none}";
    r +=
      ".vjs-480 .outstream-fullscreen,.vjs-480 .outstream-muted,.vjs-480 .outstream-play-pause{width:35px}";
    r +=
      ".endcap-outstream {position:absolute;top:0;left:0;bottom:0;right:0;background-color:#000;z-index:1009}";
    r +=
      ".outstream-endcap{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:table;text-align:center;color:#fff;font-family:Arial;font-weight:normal;text-decoration:none;font-style:normal}";
    r +=
      ".outstream-endcap .ln1{font-size:40px;padding-bottom:7px}.vjs-480 .ln1{font-size:30px}";
    r +=
      ".outstream-endcap .brand{color:#777;font-size:12px;text-decoration:none;padding-top:10px;display:table;margin:0 auto}";
    r += ".outstream-endcap .brand:hover {color:lightblue}";
    r += ".outstream-close:hover{border-color:#aaa}";
    r +=
      ".outstream-close {cursor:pointer;border:solid 1px #777;border-right:0;border-top:0;position:absolute;right:0;top:0;color:#ccc;font-size:24px;background:#222;height:30px;width:30px;line-height:30px;text-align:center;}.outstream-close-out{border:solid 1px #777;border-bottom:0;top:-30px}.oustream-close-light{background:#f0f0f0;color:#444;border-color:#ccc}";
    r +=
      ".outstream-close-light{background:#f0f0f0;color:#444;border-color:#ccc}";
    const n = e.$(".vjs-tech");
    var a = k("style");
    a.innerHTML = r;
    e.el_.insertBefore(a, n.nextSibling);
    var o =
      '<svg xmlns="http://www.w3.org/2000/svg"> <defs> <symbol id="out-icon-fullscreen" viewBox="0 0 512 512"> <path d="M137 304H88v120h120v-49h-71v-71zm-48-96h48v-71h71V88H89v120zm286 167h-71v49h120V304h-49v71zM304 89v48h71v71h49V89H304z"></path> </symbol> <symbol id="out-icon-fullscreen-back" viewBox="0 0 512 512"> <path d="M89 352h71v71h48V305H89v48zm71-192H89v48h119V89h-48v71zm144 264h48v-72h71v-48H305v120zm48-264V89h-48v119h120v-48h-72z"></path> </symbol> <symbol id="out-icon-mute" viewBox="0 0 512 512"> <path d="M341 254q0-25-13-46t-34-31v42l47 47v-12zm48 0q0 13-3 25t-8 25l29 28q9-17 14-37t6-41q0-31-11-58-10-27-27-49t-42-38q-25-15-53-22v39q20 7 38 19 17 12 30 29t20 37q7 20 7 43zM110 83l-25 24 90 90H85v114h76l95 94V278l81 80q-10 8-21 13t-22 10v39q19-5 37-13t33-21l38 38 25-24L110 83zm146 19-39 39 39 40v-79z"></path> </symbol> <symbol id="out-icon-pause" viewBox="0 0 512 512"> <path d="M133 400h82V112h-82v288zm164-288v288h82V112h-82z"></path> </symbol> <symbol id="out-icon-play" viewBox="0 0 512 512"> <path d="M137 105v303l238-152z"></path> </symbol> <symbol id="out-icon-volume" viewBox="0 0 512 512"> <path d="M78 193v119h79l99 99V94l-99 99H78zm267 59q0-26-13-47t-36-33v160q22-11 36-32t13-48zM296 79v40q21 7 39 20 19 12 32 30t20 38q8 22 8 45t-8 45q-7 21-20 39t-32 30q-18 12-39 19v41q29-7 55-23 25-16 43-39t30-51 10-61-10-60-30-52-43-39q-26-16-55-22z"></path> </symbol></defs> </svg>';
    const l = new window.DOMParser().parseFromString(o, "image/svg+xml");
    if (l.querySelector("parsererror"))
      console.log("SVG Symbols parsing Error");
    else {
      const t = l.documentElement;
      t.style.display = "none";
      e.el_.insertBefore(t, n.nextSibling);
    }
    var s = function (e, t, i, r) {
        var n = document.createElement(e);
        if (void 0 !== t) if ("" !== t) n.className = t;
        if (void 0 !== i)
          Object.entries(i).forEach((e) => {
            const [t, i] = e;
            n.setAttribute(t, i);
          });
        if (void 0 !== r) if ("" !== r) n.innerHTML = r;
        return n;
      },
      c = { type: "button", "aria-disabled": "false" },
      u =
        '<span class="out-svg-icon"><svg viewBox="0 0 32 32"><use href=""></use></svg></span>',
      p = s("div", "outstream-controls vjs-hidden"),
      f = s("button", "outstream-play-pause", c, u),
      h = s("button", "outstream-muted", c, u),
      m = s("button", "outstream-fullscreen", c, u),
      v = s("div", "outstream-seek-bar"),
      g = s("div", "outstream-progress"),
      y = s("div", "outstream-countdown", {}, "0:00 / 0:00"),
      T = s("div", "outstream-label", {}, w());
    v.appendChild(g);
    p.appendChild(f);
    p.appendChild(T);
    p.appendChild(y);
    p.appendChild(m);
    p.appendChild(h);
    p.appendChild(v);
    e.el_.appendChild(p);
    if (t.outstreamClose) {
      let i = k("div"),
        r = "outstream-close";
      if ("light" == t.outstreamCloseTheme) r += " outstream-close-light";
      i.className = r;
      i.innerHTML = "&times;";
      e.el_.appendChild(i);
      i.onclick = i.ontouchend = function (t) {
        t.stopImmediatePropagation();
        e.el().parentNode.removeChild(e.el());
      };
    }
    var b = n.getAttribute("autoplay");
    e.el_.style.visibility = "visible";
    var A = e.el_.querySelector(".vjs-big-play-button");
    if (e.autoplay() || i.autoplay || b) {
      e.muted(!0);
      setTimeout(function () {
        e.play();
      }, 100);
    }
    let R = !1;
    e.on("playing", function () {
      if (!R) {
        R = !0;
        x();
      }
      if (A) A.removeAttribute("style");
    });
    f.querySelector("svg").innerHTML = '<use href="#out-icon-play"></use>';
    h.querySelector("svg").innerHTML = '<use href="#out-icon-volume"></use>';
    m.querySelector("svg").innerHTML =
      '<use href="#out-icon-fullscreen"></use>';
    e.controlBar.el().classList.add("vjs-hidden");
    e.one("playing", function () {
      p.className = "outstream-controls";
    });
    f.onclick = function (t) {
      t.preventDefault();
      if (e.paused()) e.play();
      else e.pause();
    };
    m.onclick = function (t) {
      t.preventDefault();
      if (e.isFullscreen()) e.exitFullscreen();
      else e.requestFullscreen();
    };
    h.onclick = function (t) {
      t.preventDefault();
      if (e.muted()) e.muted(!1);
      else e.muted(!0);
    };
    e.on("pause", function () {
      f.querySelector("svg").innerHTML = '<use href="#out-icon-play"></use>';
    });
    e.on("play", function () {
      f.querySelector("svg").innerHTML = '<use href="#out-icon-pause"></use>';
    });
    e.on("timeupdate", function () {
      let t = e.currentTime() / e.duration();
      g.style.width = 100 * t + "%";
      y.innerHTML =
        videojs.time.formatTime(e.currentTime()) +
        " / " +
        videojs.time.formatTime(e.duration());
    });
    e.on("fullscreenchange", function (t) {
      if (e.isFullscreen())
        m.querySelector("svg").innerHTML =
          '<use href="#out-icon-fullscreen-back"></use>';
      else
        m.querySelector("svg").innerHTML =
          '<use href="#out-icon-fullscreen"></use>';
    });
    e.on("volumechange", function (t) {
      if (e.muted())
        h.querySelector("svg").innerHTML = '<use href="#out-icon-mute"></use>';
      else
        h.querySelector("svg").innerHTML =
          '<use href="#out-icon-volume"></use>';
    });
    function w() {
      if (e.el_.offsetWidth > 480) return e.localize("Advertisement");
      else return e.localize("Ad");
    }
    e.on("playerresize", function () {
      T.innerHTML = w();
      var t = e.el().offsetWidth;
      e.el().classList.remove("vjs-480");
      e.el().classList.remove("vjs-320");
      if (t < 320) e.el().classList.add("vjs-320");
      else if (t < 480) e.el().classList.add("vjs-480");
    });
    document.addEventListener("scroll", x, { passive: !0 });
  };
  function x() {
    if (d.outstream)
      if (e.el())
        if (e.currentSrc()) {
          var t = e.el_.getBoundingClientRect();
          let i = window.innerHeight || document.documentElement.clientHeight;
          if (t.bottom < 70 || t.top > i - 20) {
            if (!e.paused()) {
              e.pause();
              e.autopause = !0;
            }
          } else if (e.autopause) {
            e.autopause = !1;
            e.play();
          }
        }
  }
  const E = function (i) {
    if (i.length > 0) {
      let e = null;
      if (t.config) e = t.config;
      (t = new Object()).ads = i;
      if (e) for (let i = 0; i < t.ads.length; i++) t.ads[i].config = e;
    } else {
      t = new Object();
      let e = [];
      e.push(i);
      t.ads = e;
    }
    R();
    if (c.length > 0) {
      if (!e.src()) {
        for (var r = 0; r < c.length; r++) c[r].timeOffset = 0;
        C(c[0]);
      }
      if (0 === c[0].timeOffset) {
        c[0].used = !0;
        d.preroll = !0;
        setTimeout(function () {
          M(0);
        }, 100);
      }
    }
  };
  if (t.tagURL) w(t);
  else {
    R();
    if (c.length > 0) {
      if (!e.src()) {
        for (var I = 0; I < c.length; I++) c[I].timeOffset = 0;
        C(c[0]);
      }
      if (0 === c[0].timeOffset) {
        c[0].used = !0;
        d.preroll = !0;
        setTimeout(function () {
          M(0);
        }, 100);
      }
    }
  }
  const U = function (t) {
      let i = e.el().querySelector(".vjs-replay-button"),
        r = e.el().querySelector(".vjs-sharing-overlay"),
        n = e.el().querySelector(".vjs-grid"),
        a = e.el().querySelector(".vjs-cend");
      if (i) o(i, t);
      if (r) o(r, t);
      if (n) o(n, t);
      if (a) o(a, t);
      function o(e, t) {
        if (t) {
          e.style.visibility = "hidden";
          e.style.pointerEvents = "none";
        } else e.removeAttribute("style");
      }
    },
    N = function (e) {
      var t = e.el().querySelector(".vjs-tech"),
        i = {
          ended: e.ended(),
          src: e.currentSrc(),
          currentTime: e.currentTime(),
          duration: e.duration(),
          currentSource: e.currentSource(),
          type: e.currentType(),
          playing: !e.paused(),
          suppressedTracks: r(e),
        };
      if (i.duration) if (i.duration - i.currentTime < 1) i.ended = !0;
      if (i.ended) i.currentTime = e.duration() + 1;
      if (i.duration) if (i.duration - i.currentTime < 1) i.ended = !0;
      if (t) {
        i.nativePoster = t.poster;
        i.style = t.getAttribute("style");
      }
      U(!0);
      return i;
      function r(e) {
        var t = e.remoteTextTracks ? e.remoteTextTracks() : [];
        if (t && Array.isArray(t.tracks_)) t = t.tracks_;
        if (!Array.isArray(t)) t = [];
        var i = [];
        t.forEach(function (e) {
          i.push({ track: e, mode: e.mode });
          e.mode = "disabled";
        });
        return i;
      }
    },
    S = function (e, t) {
      if (e.src() !== t.src) {
        var i = e.el().querySelector(".vjs-tech"),
          r = 20;
        if ("style" in t) i.setAttribute("style", t.style || "");
        e.one("loadedmetadata", a);
        e.one("canplay", o);
        n();
        e.src(t.currentSource);
        U(!1);
      } else e.play();
      function n() {
        var t = setTimeout(function () {
          e.trigger("canplay");
        }, 1e3);
        e.one("canplay", function () {
          clearTimeout(t);
        });
      }
      function a() {
        t.suppressedTracks.forEach(function (e) {
          e.track.mode = e.mode;
        });
      }
      function o() {
        e.play();
        if (!l(e) && r--) setTimeout(o, 50);
        else
          try {
            if (e.currentTime() !== t.currentTime) {
              if (t.playing)
                e.one("seeked", function () {
                  if (!t.ended) e.play();
                });
              e.currentTime(t.currentTime);
            } else if (t.playing) e.play();
          } catch (e) {
            videojs.log.warn(
              "Failed to resume the content after an advertisement",
              e
            );
          }
      }
      function l(e) {
        if (e.readyState() > 1) return !0;
        if (void 0 === e.seekable()) return !0;
        if (e.seekable().length > 0) return !0;
        else return !1;
      }
    };
  const M = function e(t) {
    let i = c[t];
    d.currentAdId = t;
    if (i.tagXML) {
      new n.VASTParser()
        .parseVAST(i.tagXML)
        .then((e) => {
          let t = e;
          t.clickthroughMethod = i.clickthroughMethod;
          t.closeButton = i.closeButton;
          t.closeTheme = i.closeTheme;
          t.nonlinearRecall = i.nonlinearRecall;
          O(t);
        })
        .catch((e) => {
          console.log(e.toString());
          console.log("Ad cancelled");
        });
    }
    if (i.tagURL) {
      let r = {
        withCredentials: i.withCredentials,
        timeout: i.timeout,
        resolveAll: i.resolveAll,
        wrapperLimit: i.wrapperLimit,
        allowMultipleAds: i.allowMultipleAds,
      };
      new n.VASTParser()
        .getAndParseVAST(i.tagURL, r)
        .then((e) => {
          let t = e;
          t.clickthroughMethod = i.clickthroughMethod;
          t.closeButton = i.closeButton;
          t.closeTheme = i.closeTheme;
          t.nonlinearRecall = i.nonlinearRecall;
          t.autoClose = i.autoClose;
          t.brandText = i.brandText;
          t.brandUrl = i.brandUrl;
          t.outstreamCloseTheme = i.outstreamCloseTheme;
          t.oustreamClosePosition = i.oustreamClosePosition;
          if (t) O(t);
        })
        .catch((r) => {
          if (i.fallbackURL) {
            i.tagURL = i.fallbackURL;
            i.fallbackURL = null;
            e(t);
          }
          console.log(r.toString());
          console.log("Ad cancelled");
        });
    }
  };
  e.on("timeupdate", function () {
    if (!0 !== d.adPlaying) {
      let t = e.currentTime();
      for (let e = 0; e < c.length; e++)
        if (i.skipTimer) {
          if (
            !0 !== c[e].used &&
            "end" !== c[e].timeOffset &&
            parseInt(t) == parseInt(c[e].timeOffset) &&
            !0 !== d.adPlaying
          ) {
            d.currentAdId = e;
            d.adStarted = !0;
            c[e].used = !0;
            setTimeout(function () {
              M(e);
            }, 200);
            break;
          }
        } else if (
          !0 !== c[e].used &&
          "end" !== c[e].timeOffset &&
          parseInt(t) > parseInt(c[e].timeOffset) &&
          !0 !== d.adPlaying
        ) {
          d.currentAdId = e;
          d.adStarted = !0;
          c[e].used = !0;
          setTimeout(function () {
            M(e);
          }, 200);
          break;
        }
    }
  });
  function O(e) {
    if ((t = e.ads).length < 1) {
      console.log("Error. Empty VAST response.");
      console.log("Ad cancelled.");
      if (c[d.currentAdId].fallbackURL) {
        c[d.currentAdId].tagURL = c[d.currentAdId].fallbackURL;
        c[d.currentAdId].fallbackURL = null;
        M(d.currentAdId);
      }
    }
    d.clickthrough = e.clickthroughMethod;
    d.closeButton = e.closeButton;
    d.closeButton = e.closeButton;
    d.closeTheme = e.closeTheme;
    d.nonlinearRecall = e.nonlinearRecall;
    var t = e.ads;
    d.companions = [];
    d.linear = [];
    d.nonlinears = [];
    for (var i = 0; i < t.length; i++)
      if (t[i].creatives)
        for (var r = 0; r < t[i].creatives.length; r++) {
          let e = !1;
          if ("linear" === t[i].creatives[r].type) {
            if (t[i].impressionURLTemplates && !e) {
              e = !0;
              t[i].creatives[r].impressionURLTemplates =
                t[i].impressionURLTemplates;
            }
            if (t[i].adServingId)
              t[i].creatives[r].adServingId = t[i].adServingId;
            d.linear.push(t[i].creatives[r]);
          }
          if ("companion" == t[i].creatives[r].type) {
            if (t[i].impressionURLTemplates && !e) {
              e = !0;
              t[i].creatives[r].impressionURLTemplates =
                t[i].impressionURLTemplates;
            }
            if (t[i].adServingId)
              t[i].creatives[r].adServingId = t[i].adServingId;
            d.companions.push(t[i].creatives[r]);
          }
          if ("nonlinear" === t[i].creatives[r].type) {
            if (t[i].impressionURLTemplates && !e) {
              e = !0;
              t[i].creatives[r].impressionURLTemplates =
                t[i].impressionURLTemplates;
            }
            if (t[i].adServingId)
              t[i].creatives[r].adServingId = t[i].adServingId;
            d.nonlinears.push(t[i].creatives[r]);
          }
        }
    if (d.linear.length > 0) q(d.linear[0]);
    if (d.nonlinears.length > 0 && !0 !== d.outstream) P(d.nonlinears[0]);
    if (d.companions.length > 0 && !0 !== d.outstream) D(d.companions[0]);
  }
  function P(e) {
    if (!d.outstream) {
      d.nonlinear = e;
      if (e.variations) j(e, 0);
    }
  }
  const D = function (e) {
    if (!d.outstream) {
      d.companion = e;
      if (e.variations) for (var t = 0; t < e.variations.length; t++) H(e, t);
    }
  };
  function B() {
    var t = e.el().querySelector(".nv-nonlinear");
    if (t) t.parentNode.removeChild(t);
    var i = e.el().querySelector(".nv-recall");
    if (i) i.parentNode.removeChild(i);
    e.off("playerresize", V);
    d.minSuggestedDuration = 0;
    d.suggestedStart = 0;
  }
  const V = function () {
    var t = e.el().offsetWidth,
      i = e.el().offsetHeight,
      r = e.el().querySelector(".nv-nonlinear");
    if (r)
      if (r.offsetWidth > t || r.offsetHeight > i) {
        r.style.opacity = 0;
        el_styke.pointerEvents = "none";
      } else {
        r.style.bottom = ue() + "px";
        r.style.removeProperty("opacity");
        r.style.removeProperty("pointerEvents");
      }
  };
  function j(t, i) {
    B();
    d.nonlinear = t;
    d.nonlinearId = void 0;
    if (t.adId) d.nonlinearId = t.adId;
    if ("nonLinearAd" === t.variations[i].adType) {
      let s = t.variations[i];
      var r = "",
        n = "";
      if (s.htmlResource) {
        r = s.htmlResource;
        n = "html";
      } else if (s.iframeResource) {
        r = s.iframeResource;
        contentType = "iframe";
        n = "iframe";
      } else if (s.staticResource) {
        r = '<img style="cursor:pointer" src="' + s.staticResource + '"/>';
        n = "static";
      }
      B();
      let c = k("div", "nv-nonlinear"),
        u = k("div");
      if (s.width) t = c.style.width = F(s.width);
      if (s.height) t = c.style.height = F(s.height);
      if (s.expandedWidth) c.style.maxWidth = F(s.expandedWidth);
      if (s.expandedHeight) c.style.maxHeight = F(s.expandedHeight);
      if (s.nonlinearClickThroughURLTemplate && "static" == n)
        u.onclick = u.ontouchend = function (e) {
          e.stopPropagation();
          window.open(s.nonlinearClickThroughURLTemplate, "_blank");
          if (s.nonlinearClickTrackingURLTemplates) {
            var t = s.nonlinearClickTrackingURLTemplates;
            t.forEach(function (e) {
              if (t.url) X("clickthrough", t.url, "nonlinear");
            });
          }
        };
      let p = k("div", "nonlinear-close");
      if (s.minSuggestedDuration) p.className = "nonlinear-close vjs-hidden";
      p.setAttribute("role", "button");
      p.innerHTML = "&times;";
      if ("dark" === d.closeTheme) {
        p.style.backgroundColor = "#222";
        p.style.color = "#e5e5e5";
        p.style.borderColor = "#777";
        p.style.paddingLeft = "2px";
      }
      c.style.bottom = ue() + "px";
      let f = null;
      e.on("playerresize", V);
      if ("iframe" === n) {
        let e = k("iframe");
        e.src = iframeResource;
        e.scrolling = "no";
        e.style.width = "100%";
        e.style.height = "100%";
        e.style.border = "none";
        e.style.overflow = "hidden";
        e.appendChild(r);
        u.innerHTML = r;
        e.appendChild(u);
        c.appendChild(e);
      } else {
        u.innerHTML = r;
        if (d.closeButton && "static" == n) u.appendChild(p);
        c.appendChild(u);
        if (d.nonlinearRecall && "static" == n) {
          (f = k("div", "nv-recall vjs-hidden")).setAttribute("role", "button");
          f.innerHTML = '<div class="nv-triangle"></div>';
          c.appendChild(f);
        }
      }
      if (f && "static" == n)
        f.onclick = f.ontouchend = function () {
          f.classList.add("vjs-hidden");
          u.removeAttribute("style");
        };
      if (p && "static" == n)
        p.onclick = p.ontouchend = function (e) {
          e.stopImmediatePropagation();
          if (f) {
            u.style.opacity = 0;
            u.style.pointerEvents = "none";
            f.className = "nv-recall";
          } else c.remove();
        };
      e.el().appendChild(c);
      if (
        c.offsetWidth > e.el().offsetWidth ||
        c.offsetHeight > e.el().offsetHeight
      )
        c.style.display = "none";
      function a() {
        setTimeout(function () {
          if (t.impressionURLTemplates) {
            t.impressionURLTemplates.forEach(function (e) {
              if (e.url) X("impression", e.url, "nonlinear");
            });
          }
          c.className = "nv-nonlinear nv-visible";
          d.preroll = !1;
        }, 1e3);
        if (p && "static" == n)
          if (s.minSuggestedDuration)
            setTimeout(function () {
              p.className = "nonlinear-close";
            }, 1e3 * s.minSuggestedDuration + 0.3);
      }
      let h = !1;
      function o() {
        if (!d.adPlaying && !h) {
          h = !0;
          a();
          e.off("timeupdate", o);
        }
      }
      function l() {
        e.on("timeupdate", o);
      }
      if (!0 !== e.paused) e.on("timeupdate", o);
      else e.one("playing", l);
    }
  }
  function F(e) {
    let t = null;
    if (/^\d+(\.\d+)?%$/.test(e) || "auto" == e) t = e;
    else t = Number(e) + "px";
    return t;
  }
  function H(t, i) {
    d.companionId = void 0;
    if (t.adId) d.companionId = t.adId;
    let r = !1;
    function n(n) {
      if ("companionAd" === t.variations[i].adType) {
        let i = t.variations[n],
          o = "",
          l = "";
        if (i.htmlResources.length > 0) {
          o = i.htmlResources[0];
          l = "html";
        } else if (i.iframeResources.length > 0) {
          o = i.iframeResources[0];
          l = "iframe";
        } else if (i.staticResources.length > 0)
          if (i.staticResources[0].creativeType) {
            if (
              ["image/gif", "image/jpeg", "image/png"].indexOf(
                i.staticResources[0].creativeType
              )
            ) {
              if (i.altText)
                o =
                  '<img style="width:100%;height:100%;cursor:pointer" alt="' +
                  i.altText +
                  '" src="' +
                  i.staticResources[0].url +
                  '"/>';
              else
                o =
                  '<img style="width:100%;height:100%;cursor:pointer" src="' +
                  i.staticResources[0].url +
                  '"/>';
              l = "static";
            }
          }
        if ("" !== o) {
          let t = null;
          if (i.adSlotId) {
            let e = document.getElementById(i.adSlotId);
            if (e) (t = e).innerHTML = "";
          }
          if (!t) {
            var a = document.querySelectorAll(".vjs-companion");
            if (a)
              for (let e = 0; e < a.length; e++) {
                if (!a[e].className.includes("vjs-companion-ex")) {
                  a[e].classList.add("vjs-companion-ex");
                  (t = a[e]).innerHTML = "";
                  break;
                }
              }
          }
          if (t && "" === t.innerHTML) {
            let n = k("div", "asset");
            if ("iframe" === l) {
              let e = k("iframe");
              e.src = o;
              e.scrolling = "no";
              e.style.width = "100%";
              e.style.height = "100%";
              e.style.border = "none";
              e.style.overflow = "hidden";
              n.appendChild(e);
            } else if ("static" === l || "html" === l) n.innerHTML = o;
            t.appendChild(n);
            if (i.assetWidth) n.style.width = F(i.assetWidth);
            if (i.assetHeight) n.style.height = F(i.assetHeight);
            if (i.width) t.style.width = F(i.width);
            if (i.height) t.style.height = F(i.height);
            if (i.expandedWidth) t.style.maxWidth = F(i.expandedWidth);
            if (i.expandedHeight) t.style.maxHeight = F(i.expandedHeight);
            if (i.companionClickThroughURLTemplate && "static" == l)
              t.onclick = function () {
                e.pause();
                window.open(i.companionClickThroughURLTemplate, "_blank");
                if (i.companionClickTrackingURLTemplates) {
                  i.companionClickTrackingURLTemplates.forEach(function (e) {
                    if (e.url) X("clickthrough", e.url, "ompanion");
                  });
                  if (i.trackingEvents)
                    if (i.trackingEvents.clickthrough)
                      X(
                        "clickthrough",
                        i.trackingEvents.clickthrough,
                        "companion"
                      );
                }
              };
            if (i.TrackingEvents)
              if (i.TrackingEvents.creativeView)
                X("view", i.TrackingEvents.creativeView, "companion");
            if (d.companion.impressionURLTemplates && !0 !== r) {
              r = !0;
              d.companion.impressionURLTemplates.forEach(function (e) {
                if (e.url) X("impression", e.url, "companion");
              });
            }
          }
        }
      }
    }
    if (!e.paused()) n(i);
    else
      e.one("playing", function () {
        n(i);
      });
  }
  function q(e) {
    d.linearId = void 0;
    if (e.adId) d.linearId = e.adId;
    if (0 == d.currentPod) d.currentPod = 1;
    d.firstPause = !1;
    d.trackingEvents = [];
    u = {};
    let t = {
      start: null,
      pause: null,
      resume: null,
      firstQuartile: null,
      midpoint: null,
      thirdQuartile: null,
      mute: null,
      unmute: null,
      fullscreen: null,
      exitFullscreen: null,
      complete: null,
      skip: null,
      clickthrough: null,
    };
    d.linearEvents = e.trackingEvents || [];
    Object.keys(t).forEach((t) => {
      if (e.trackingEvents[t])
        if (e.trackingEvents[t][0]) d.linearEvents[t] = e.trackingEvents[t][0];
    });
    if (e.mediaFiles) {
      let t = Y(e.mediaFiles);
      if (t[0].mimeType)
        e.mediatoplay = { src: t[0].fileURL, type: t[0].mimeType };
      else e.mediatoplay = { src: t[0].fileURL };
    }
    if (e.mediatoplay.src) W(e);
    else ie();
  }
  const z = function (t) {
    if (!d.outstream) {
      d.icons = [];
      if (t.icons)
        if (t.icons.length > 0)
          for (var i = 0; i < t.icons.length; i++) {
            var r = t.icons[i],
              n = "";
            if (r.staticResource) n = '<img src="' + r.staticResource + '">';
            else if (r.htmlResource) n = r.htmlResource;
            else if (r.iframeResource) n = r.iframeResource;
            var a = "left",
              o = 0,
              l = "top",
              s = 0,
              c = 0;
            if (r && "left" === r.xPosition) {
              a = "left";
              o = 0;
            }
            if (r && "right" === r.xPosition) {
              a = "right";
              o = 0;
            }
            if (r && Number(r.xPosition) >= 0) {
              a = "left";
              o = r.xPosition;
            }
            if (r && "bottom" === r.yPosition) {
              l = "bottom";
              s = 0;
            }
            if (r && "top" === r.yPosition) {
              l = "top";
              s = 0;
              s += c;
            }
            if (r && Number(r.yPosition) >= 0) {
              l = "top";
              s = Number(r.yPosition);
              s += c;
            }
            var u = k("div", "nv-icon");
            u.setAttribute("name", "adicon");
            e.el().appendChild(u);
            if ("bottom" === r.yPosition) {
              u.style.bottom = de() + "px";
              d.bottomIcons.push(u);
            }
            u.id = "adicon_" + r.program;
            if ("iframe" === r.type) {
              var p = k("iframe");
              p.src = r.content;
              p.scrolling = "no";
              p.style.width = "100%";
              p.style.height = "100%";
              p.style.border = "none";
              p.style.overflow = "hidden";
              u.appendChild(p);
            } else u.innerHTML = n;
            u.style.position = "absolute";
            if (r && "center" === r.xPosition) {
              u.style.left = "50%";
              u.style.webkitTransform = "translateX(-50%)";
              u.style.transform = "translateX(-50%)";
            } else u.style[a] = o + "px";
            if (r && "center" === r.yPosition) {
              u.style.top = "50%";
              if (r && "center" === r.xPosition) {
                u.style.webkitTransform = "translate(-50%,-50%)";
                u.style.transform = "translate(-50%,-50%)";
              } else {
                u.style.transform = "translateY(-50%)";
                u.style.webkitTransform = "translateY(-50%)";
              }
            } else if ("bottom" !== r.yPosition) u.style[l] = s + "px";
            r.origY = s;
            if (r.iconClickThroughURLTemplate) {
              u.style.cursor = "pointer";
              u.onclick = r.ontouchend = function (e) {
                e.stopImmediatePropagation();
                window.open(r.iconClickThroughURLTemplate, "_blank");
                if (r.iconClickTrackingURLTemplates)
                  r.iconClickTrackingURLTemplates.forEach(function (e) {
                    if (e.url) X("clickthrough", e.url, "icon");
                  });
              };
            }
            if (r.iconViewTrackingURLTemplate)
              X("view", r.iconViewTrackingURLTemplate, "icon");
          }
    }
  };
  function W(t) {
    d.adPlaying = !0;
    var i = e.controlBar.el().querySelector(".vjs-vast-label"),
      r = e.el().querySelector(".outstream-label");
    if (r) i = r;
    if (null === d.snapshot) d.snapshot = N(e);
    e.el_.classList.add("vjs-ad-playing");
    t.used = !0;
    e.src(t.mediatoplay);
    if (t.videoClickThroughURLTemplate && "link" !== d.clickthrough)
      if (t.videoClickThroughURLTemplate.url)
        re(t.videoClickThroughURLTemplate.url);
    if ("link" === d.clickthrough)
      se(d.currentPod, t.videoClickThroughURLTemplate.url);
    else if (i) {
      i.classList.remove("vjs-hidden");
      let e = le();
      if (d.linear.length > 1)
        e += " (" + d.currentPod + "/" + d.linear.length + ")";
      i.innerHTML = e;
    }
    ae();
    const n = function () {
      d.firstPlay = !0;
      if (t.impressionURLTemplates) {
        t.impressionURLTemplates.forEach(function (e) {
          if (e.url) X("impression", e.url, "linear");
        });
      }
      X("start", d.linearEvents.start, "linear");
      if (t.skipDelay) {
        d.skip = t.skipDelay;
        ne();
        ce();
      }
      z(t);
      let i = e.el_.querySelectorAll(".nv-icon");
      if (i)
        for (var r = 0; r < i.length; r++) {
          i[r];
        }
    };
    e.on("timeupdate", Q);
    e.one("ended", te);
    e.one("playing", n);
    e.on("playerresize", G);
    e.on("volumechange", Z);
    e.on("play", K);
    e.on("pause", $);
    e.on("fullscreenchange", J);
    e.on("error", _);
    if (!d.preroll) {
      d.preroll = !0;
      e.play();
    }
    d.preroll = !1;
  }
  function _() {
    console.log("Media Error.Ad Cancelled");
    d.preroll = !0;
    ee();
  }
  function X(t, i, r) {
    if (!i) return;
    let n = void 0;
    if ("linear" == r) n = d.linearId;
    if ("nonlinear" == r) n = d.nonlinearId;
    if ("companion" == r) n = d.companionId;
    if (Array.isArray(i))
      i.forEach(function (i) {
        new Image().src = b(i, r);
        e.trigger("vastEvent", { eventName: t, adType: r, adId: n });
      });
    else {
      new Image().src = b(i, r);
      e.trigger("vastEvent", { eventName: t, adType: r, adId: n });
    }
  }
  const G = function () {
      let t = e.el().offsetWidth;
      if (d.divLabel) d.divLabel.style.top = pe() + "px";
      if (d.bottomIcons.length > 0)
        for (var i = 0; i < d.bottomIcons.length; i++) {
          let e = de();
          d.bottomIcons[i].style.bottom = e + "px";
        }
      ce();
      let r = e.controlBar.el().querySelector(".vjs-vast-label");
      if (r) {
        let i = r.innerHTML.split(e.localize("Advertisement")).join("");
        i = i.split(e.localize("Ad")).join("");
        if (t < 480) r.innerHTML = e.localize("Ad") + i;
        else r.innerHTML = e.localize("Advertisement") + i;
      }
    },
    Q = function () {
      let t = parseInt(e.currentTime()),
        i = parseInt(e.duration());
      if (i > 0) {
        if (t > parseInt(i / 4) && !u.firstQuartile) {
          u.firstQuartile = !0;
          X("firstQuartile", d.linearEvents.firstQuartile, "linear");
        }
        if (t > parseInt(i / 2) && !u.midpoint) {
          u.midpoint = !0;
          X("midpoint", d.linearEvents.midpoint, "linear");
        }
        if (t > parseInt(0.75 * i) && !u.thirdQuartile) {
          u.thirdQuartile = !0;
          X("thirdQuartile", d.linearEvents.thirdQuartile, "linear");
        }
      }
      if (d.skip > 0 && d.skipButton) {
        let t = !1,
          i = parseInt(d.skip - e.currentTime());
        if (i > 0) d.skipButton.innerHTML = e.localize("Skip Ad in") + " " + i;
        else {
          d.skipButton.innerHTML = e.localize("Skip Ad");
          d.skipButton.classList.add("nv-skip-active");
          t = !0;
        }
        d.skipButton.onclick = d.skipButton.ontouchend = function (e) {
          e.stopPropagation();
          if (t) {
            X("skip", d.linearEvents.skip, "linear");
            ee();
          } else return !1;
        };
      }
    };
  function Y(t) {
    var i = e.el().getBoundingClientRect().width;
    t.sort(function (e, t) {
      return Math.abs(i - e.width) - Math.abs(i - t.width);
    });
    return t;
  }
  const K = function () {
      if (d.firstPause) X("resume", d.linearEvents.resume, "linear");
    },
    $ = function () {
      d.firstPause = !0;
      X("pause", d.linearEvents.pause, "linear");
    },
    Z = function () {
      if (e.muted() && 0 == d.muted) {
        d.muted = !0;
        X("mute", d.linearEvents.mute, "linear");
      }
      if (!0 !== e.muted() && d.muted) {
        d.muted = !1;
        X("unmute", d.linearEvents.unmute, "linear");
      }
    },
    J = function () {
      if (e.isFullscreen())
        X("fullscreen", d.linearEvents.fullscreen, "linear");
      else X("exitFullscreen", d.linearEvents.exitFullscreen, "linear");
    },
    ee = function () {
      e.off("timeupdate", Q);
      e.off("playerresize", G);
      e.off("volumechange", Z);
      e.off("play", K);
      e.off("pause", $);
      e.off("fullscreenchange", J);
      let t = e.el().querySelectorAll(".nv-icon");
      if (t) for (var i = 0; i < t.length; i++) t[i].remove();
      ae();
      oe();
      d.currentPod = 0;
      d.skip = -0;
      let r = 0,
        n = !1;
      d.autoClose = c[d.currentAdId].autoClose;
      if (d.linear.length > 0) {
        for (i = 0; i < d.linear.length; i++)
          if (!d.linear[i].used) {
            r = i;
            break;
          }
        if (r > 0) {
          e.loadingSpinner.el_.style.display = "none";
          d.currentPod = i + 1;
          q(d.linear[r]);
        } else {
          if (d.outstream) {
            c = [];
            ie();
            e.trigger("adsCompleted");
            n = !0;
          }
          if (!0 !== n)
            for (let t = d.currentAdId; t < c.length; t++)
              if (
                !1 === c[t].used &&
                c[t].timeOffset == c[d.currentAdId].timeOffset
              ) {
                n = !0;
                e.loadingSpinner.el_.style.display = "none";
                d.currentAdId = t;
                d.adPlaying = !0;
                c[t].used = !0;
                setTimeout(function () {
                  M(t);
                }, 200);
                break;
              }
          if (!0 !== n) {
            let t = !0;
            for (let e = d.currentAdId; e < c.length; e++)
              if (!c[e].used) t = !1;
            if (t || d.outstrem) e.trigger("adsCompleted");
            ie();
          }
        }
      } else {
        if (d.outstream) {
          c = [];
          ie();
          n = !0;
        }
        for (let e = d.currentAdId; e < c.length; e++)
          if (
            !1 === c[e].used &&
            c[e].timeOffset == c[d.currentAdId].timeOffset
          ) {
            n = !0;
            d.currentAdId = e;
            d.adPlaying = !0;
            c[e].used = !0;
            setTimeout(function () {
              M(e);
            }, 200);
            break;
          }
        let t = !0;
        for (let e = d.currentAdId; e < c.length; e++) if (!c[e].used) t = !1;
        if (t || d.outstrem) e.trigger("adsCompelted");
        if (!0 !== n) ie();
      }
    },
    te = function () {
      X("complete", d.linearEvents.complete, "linear");
      ee();
    },
    ie = function () {
      d.adPlaying = !1;
      d.adStarted = !1;
      if (d.outstream)
        if (d.autoClose) {
          e.pause();
          d.fin = !0;
          e.el().parentNode.removeChild(e.el());
        } else {
          d.fin = !0;
          e.pause();
          let t = k("div", "endcap-outstream"),
            r = k("div", "outstream-endcap");
          r.innerHTML =
            '<div class="ln1">' +
            e.localize("THANKS<br>FOR WATCHING") +
            "</div>";
          if (i.brandText && i.brandUrl)
            r.innerHTML +=
              '<a class="brand" href="' +
              i.brandUrl +
              '">' +
              i.brandText +
              "</a>";
          t.appendChild(r);
          e.el().appendChild(t);
        }
      d.currentAdId = -1;
      e.loadingSpinner.el_.removeAttribute("style");
      e.off("ended", te);
      e.off("error", _);
      if (d.blocker) d.blocker.remove();
      e.el_.classList.remove("vjs-ad-playing");
      if (d.snapshot && !0 !== d.fin) S(e, d.snapshot);
      if (d.skip) d.skip.remove();
      d.snapshot = null;
      d.adPlaying = !1;
    },
    re = function (t) {
      if (null == d.blocker) d.blocker = k("div", "nv-blocker");
      d.blocker.onclick = d.blocker.ontouchend = function (i) {
        if (d.firstPlay) {
          i.stopPropagation();
          window.open(t, "_blank");
          X("clickthrough", d.linearEvents.clickthrough, "linear");
          if (d.linear[d.currentPod - 1].videoClickTrackingURLTemplates) {
            let e = d.linear[d.currentPod - 1].videoClickTrackingURLTemplates;
            if (e)
              e.forEach(function (e) {
                if (e.url) X("clickthrough", e.url, "linear");
              });
          }
          if (!e.paused()) e.pause();
        } else if (e.paused()) e.play();
      };
      e.el().insertBefore(d.blocker, e.controlBar.el());
    },
    ne = function () {
      if (d.skipButton) d.skipButton.remove();
      d.skipButton = k("div");
      let t = "nv-skip",
        i = e.localize("Skip Ad in") + " " + d.skip;
      if (0 === d.skip) {
        t = "nv-skip nv-skip-active";
        i = e.localize("Skip Ad");
      }
      d.skipButton.className = t;
      d.skipButton.innerHTML = i;
      e.el().appendChild(d.skipButton);
    },
    ae = function () {
      if (d.skipButton) {
        d.skipButton.parentNode.removeChild(d.skipButton);
        d.skipButton = null;
        d.skip = -1;
      }
    },
    oe = function () {
      if (d.labelStyle) {
        d.labelStyle.parentNode.removeChild(d.labelStyle);
        d.labelStyle = null;
      }
      if (d.divLabel) {
        d.divLabel.parentNode.removeChild(d.divLabel);
        d.divLabel = null;
      }
    };
  function le() {
    if (e.el_.offsetWidth < 480) return e.localize("Ad");
    else return e.localize("Advertisement");
  }
  function se(t, i) {
    let r = e.controlBar.el().querySelector(".vjs-vast-label");
    if (r) r.classList.add("vjs-hidden");
    if (!d.labelStyle) {
      let t =
        ".nv-vast-div{position: absolute;font-size:12px;left:10px;top:-20px;color:#e5e5e5;text-shadow:1px 1px 1px #000;font-weight:normal}.nv-vast-div .nv-vast-timer{padding:0 10px 0 5px;}.nv-vast-div .nv-vast-pod {padding:0 5px;}.nv-vast-div .nv-label-icon{width:18px;height:16px;display:inline-block;padding:1px;margin-left:5px;opacity:.8;vertical-align:middle;margin-top:-2px}.nv-vast-div a{cursor: pointer;color: #e5e5e5;text-decoration:none}";
      d.labelStyle = k("style");
      d.labelStyle.innerHTML = t;
      e.controlBar.el().appendChild(d.labelStyle);
    }
    if (!d.divLabel) d.divLabel = k("div", "nv-vast-div");
    var n = "";
    if (d.linear.length > 1) {
      var a = e.localize("Ad %%NUM%% of %%TOTAL%%");
      n =
        '<span class="nv-vast-pod">' +
        (a = (a = a.replace("%%NUM%%", d.currentPod.toString())).replace(
          "%%TOTAL%%",
          d.linear.length.toString()
        )) +
        "</span>";
    } else n += e.localize("Ad");
    let o = i.replace(/^https?:\/\//, "");
    if ((o = (o = o.replace(/:\d+/, "")).replace("www.", "")).length > 20)
      o = o.substring(0, 20) + "...";
    let l =
        '<span class="nv-label-icon"><svg fill="#fff" height="100%" version="1.1" viewBox="0 0 48 48" width="100%"><path d="M0 0h48v48H0z" fill="none"></path><path d="M38 38H10V10h14V6H10c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h28c2.21 0 4-1.79 4-4V24h-4v14zM28 6v4h7.17L15.51 29.66l2.83 2.83L38 12.83V20h4V6H28z"></path></svg></span>' +
        o,
      s = k("span");
    s.style.cursor = "pointer";
    s.innerHTML = l;
    d.divLabel.innerHTML = n;
    d.divLabel.appendChild(s);
    d.divLabel.style.top = pe() + "px";
    s.onclick = s.ontouchend = function (t) {
      t.stopImmediatePropagation();
      window.open(i, "_blank");
      X("clickthrough", d.linearEvents.clickthrough, "linear");
      if (d.linear[d.currentPod - 1].videoClickTrackingURLTemplates) {
        let e = d.linear[d.currentPod - 1].videoClickTrackingURLTemplates;
        if (e)
          e.forEach(function (e) {
            if (e.url) X("clickthrough", e.url, "linear");
          });
      }
      if (!e.paused()) e.pause();
    };
    if (d.outstream)
      e.el().querySelector(".outstream-controls").appendChild(d.divLabel);
    else e.controlBar.el().appendChild(d.divLabel);
  }
  const ce = function () {
      if (d.skipButton) {
        let t = e.el().offsetWidth,
          i = 70;
        switch (d.skin) {
          case "slategrey":
          case "shaka":
          case "roundal":
          case "jwlike":
            if (t > 1080) i = 90;
            break;
          case "treso":
            i = 70;
            if (t > 1080) i = 90;
            break;
          case "mockup":
            if (t > 1080) i = 100;
        }
        if (d.outstream) i = 60;
        d.skipButton.style.bottom = i + "px";
      }
    },
    ue = function () {
      let t = e.el().offsetWidth,
        i = 60;
      switch (d.skin) {
        case "treso":
          i = 60;
          break;
        case "slategrey":
          i = 65;
          if (t > 1080) i = 70;
          break;
        case "pinko":
        case "party":
        case "nuevo":
          i = 55;
          if (t > 1080);
          break;
        case "mockup":
          i = 55;
          if (t > 1080) i = 70;
          break;
        case "jwlike":
          if (t > 1080) i = 70;
          break;
        case "flow":
          i = 55;
          if (t > 1080) i = 60;
      }
      return i;
    },
    de = function () {
      let t = e.el().offsetWidth;
      var i = 60;
      switch (d.skin) {
        case "party":
          if (t < 1080) i = 50;
          break;
        case "treso":
          i = 70;
          break;
        case "chrome":
          i = 50;
          if (t < 480) i = 60;
          break;
        case "mockup":
          i = 70;
          if (t > 1080) i = 90;
          break;
        case "flow":
          i = 50;
          if (t > 1080) i = 60;
          break;
        case "jwlike":
          if (t > 1080) i = 70;
          break;
        case "nuevo":
          i = 50;
          if (t > 1080) i = 60;
          break;
        case "roundal":
          if (t < 480) i = 50;
          break;
        case "slategrey":
        case "shaka":
        case "party":
          if (t > 1080) i = 70;
      }
      if (d.outstream) i = 45;
      if ("link" === d.clickthrough) i += 30;
      return i;
    },
    pe = function () {
      let t = -30,
        i = e.el().offsetWidth;
      switch (d.skin) {
        case "treso":
          t = -50;
          break;
        case "mockup":
          t = -60;
          if (i > 1080) t = -70;
          break;
        case "jwlike":
          t = -40;
      }
      if (d.outstream) t = -25;
      return t;
    };
  return this;
};
var vast = function (e, t) {
    this.ready(function () {
      factory(this, e, t);
    });
  },
  getPlugin = videojs.getPlugin || videojs.plugin,
  registerPlugin = videojs.registerPlugin || videojs.plugin;
if (void 0 === getPlugin("vast") || "undefined" === getPlugin("vast"))
  registerPlugin("vast", vast);
export default vast;
