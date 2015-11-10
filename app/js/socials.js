// //  twitter
// !function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0],
//     p = /^http:/.test(d.location) ? 'http' : 'https';
//   if (!d.getElementById(id)) {
//     js = d.createElement(s);
//     js.id = id;
//     js.src = p + '://platform.twitter.com/widgets.js';
//     fjs.parentNode.insertBefore(js, fjs);
//   }
// }(document, 'script', 'twitter-wjs');
//
// //  VK
// document.write(VK.Share.button(false, {
//   type: "custom",
//   text: "<img src=\"http://vk.com/images/share_32_2x.png\" width=\"32\" height=\"32\" style=\"position:absolute; left:99999px;\"/>"
// }));
//
// //  facebook
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "//connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.5";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));

// "use strict";
//
// function addRed(t, e) {
//   $("[type=radio]").removeAttr("checked");
//   for (var a in app.objPos) t == app.objPos[a].left && e == app.objPos[a].top && $("[data-pos = " + a + "]").attr("checked", "checked")
// }
//
// function startModulesAfterUpload(t) {
//   var e = app.picture.width - app.watermark.width,
//     a = app.picture.height - app.watermark.height,
//     n = app.picture.width / 2 - app.watermark.width / 2,
//     i = app.picture.height / 2 - app.watermark.height / 2;
//   app.objPos = {
//     "top-left": {
//       left: 0,
//       top: 0
//     },
//     "top-middle": {
//       left: n,
//       top: 0
//     },
//     "top-right": {
//       left: e,
//       top: 0
//     },
//     "middle-left": {
//       left: 0,
//       top: i
//     },
//     "middle-middle": {
//       left: n,
//       top: i
//     },
//     "middle-right": {
//       left: e,
//       top: i
//     },
//     "bottom-left": {
//       left: 0,
//       top: a
//     },
//     "bottom-middle": {
//       left: n,
//       top: a
//     },
//     "bottom-right": {
//       left: e,
//       top: a
//     }
//   }, $(".radio_position").draga({
//     container: app.imgConteiner,
//     inputPush: "#" + t
//   }), $("#watermark").hasClass("buttons") && ($(".settings__btn-reset, .settings__btn-download").addClass("js-form__btn"), multiplyElem.init(), opacity.init(), drag.init(), $(".ui-slider-handle").css({
//     cursor: "pointer"
//   }))
// }
//
// function onLoad() {
//   var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   t.setAttribute("width", window.innerWidth), t.setAttribute("height", scrollHeight), document.querySelector("#bg").appendChild(t);
//   var e = (window.innerWidth + scrollHeight) / 20;
//   numPointsX = Math.ceil(window.innerWidth / e) + 1, numPointsY = Math.ceil(scrollHeight / e) + 1, unitWidth = Math.ceil(window.innerWidth / (numPointsX - 1)), unitHeight = Math.ceil(scrollHeight / (numPointsY - 1)), points = [];
//   for (var a = 0; numPointsY > a; a++)
//     for (var n = 0; numPointsX > n; n++) points.push({
//       x: unitWidth * n,
//       y: unitHeight * a,
//       originX: unitWidth * n,
//       originY: unitHeight * a
//     });
//   randomize();
//   for (var i = 0; i < points.length; i++)
//     if (points[i].originX != unitWidth * (numPointsX - 1) && points[i].originY != unitHeight * (numPointsY - 1))
//       for (var o = points[i].x, r = points[i].y, p = points[i + 1].x, s = points[i + 1].y, c = points[i + numPointsX].x, l = points[i + numPointsX].y, d = points[i + numPointsX + 1].x, u = points[i + numPointsX + 1].y, m = Math.floor(2 * Math.random()), h = 0; 2 > h; h++) {
//         var g = document.createElementNS(t.namespaceURI, "polygon");
//         0 == m ? 0 == h ? (g.point1 = i, g.point2 = i + numPointsX, g.point3 = i + numPointsX + 1, g.setAttribute("points", o + "," + r + " " + c + "," + l + " " + d + "," + u)) : 1 == h && (g.point1 = i, g.point2 = i + 1, g.point3 = i + numPointsX + 1, g.setAttribute("points", o + "," + r + " " + p + "," + s + " " + d + "," + u)) : 1 == m && (0 == h ? (g.point1 = i, g.point2 = i + numPointsX, g.point3 = i + 1, g.setAttribute("points", o + "," + r + " " + c + "," + l + " " + p + "," + s)) : 1 == h && (g.point1 = i + numPointsX, g.point2 = i + 1, g.point3 = i + numPointsX + 1, g.setAttribute("points", c + "," + l + " " + p + "," + s + " " + d + "," + u))), g.setAttribute("fill", "rgba(0,0,0," + Math.random() / 3 + ")"), t.appendChild(g)
//       }
//     refresh()
// }
//
// function randomize() {
//   for (var t = 0; t < points.length; t++) 0 != points[t].originX && points[t].originX != unitWidth * (numPointsX - 1) && (points[t].x = points[t].originX + Math.random() * unitWidth - unitWidth / 2), 0 != points[t].originY && points[t].originY != unitHeight * (numPointsY - 1) && (points[t].y = points[t].originY + Math.random() * unitHeight - unitHeight / 2)
// }
//
// function refresh() {
//   randomize();
//   for (var t = 0; t < document.querySelector("#bg svg").childNodes.length; t++) {
//     var e = document.querySelector("#bg svg").childNodes[t];
//     e.childNodes[0]
//   }
// }
//
// function onResize() {
//   document.querySelector("#bg svg").remove(), onLoad()
// }
// var app = {
//   UPLOAD_DIR: "uploads/",
//   FILE_MAX_SIZE: 1e6,
//   URL_UPLOAD_REQUEST: "php/upload.php",
//   URL_WATERMARK_REQUEST: "php/watermark.php",
//   URL_IMGSAVE_REQUEST: "php/imgsave.php",
//   FILENAME_RESULT: "result.png",
//   CONTAINER: {
//     width: 650,
//     height: 538
//   },
//   LANGS: {
//     ru: 0,
//     en: 1
//   },
//   CLASSES_BLOCKING_AT_PRELOADER: ".settings__input-hide, .settings__btn-download, .settings__btn-reset",
//   imgConteiner: ".main-img-container",
//   flag: !0,
//   uiSliderVal: 80,
//   currentLang: "ru",
//   picture: {
//     url: "",
//     filename: "",
//     width: 0,
//     height: 0,
//     container: {}
//   },
//   watermark: {
//     url: "",
//     filename: "",
//     width: 0,
//     height: 0,
//     coordx: 0,
//     coordy: 0,
//     marginx: 0,
//     marginy: 0,
//     opacity: .8,
//     mode: "notile",
//     container: {}
//   },
//   objPos: {
//     "top-left": {},
//     "top-middle": {},
//     "top-right": {},
//     "middle-left": {},
//     "middle-middle": {},
//     "middle-right": {},
//     "bottom-left": {},
//     "bottom-middle": {},
//     "bottom-right": {}
//   },
//   showMessage: function(t) {
//     Toast({
//       text: t,
//       time: 4e3,
//       type: "fixedTop"
//     }).show()
//   }
// };
// app.picture.container = app.CONTAINER, app.watermark.container = app.picture;
// var opacity = function() {
//   var t = function() {
//       e()
//     },
//     e = function() {
//       a(), n(), $("#watermark").hasClass("buttons") && $(".slider").removeClass("not_work"), $("form").on("reset", function(t) {
//         t.preventDefault(), app.uiSliderVal = 80, a(), n()
//       })
//     },
//     a = function() {
//       $(".draggable").css({
//         opacity: app.uiSliderVal / 100
//       })
//     },
//     n = function() {
//       $(".ui-slider").slider({
//         range: "min",
//         min: 1,
//         max: 100,
//         value: app.uiSliderVal,
//         slide: function(t, e) {
//           return app.uiSliderVal = e.value, app.watermark.opacity = e.value / 100, $(".draggable").removeClass("transition"), $("#watermark").hasClass("buttons") ? void $(".draggable").css({
//             opacity: app.uiSliderVal / 100
//           }) : !1
//         }
//       })
//     };
//   return {
//     init: t
//   }
// }();
// $.fn.draga = function(t) {
//   $("[data-pos]").off("click"), $(".coordinates__input").off("change keyup input click blur"), $(".coordinates__input_loc").off("click mousedown"), t = {
//     container: t.container || ".main-img-container",
//     inputPush: t.inputPush
//   };
//   var e = this,
//     a = t.inputPush,
//     n = 0,
//     i = 0;
//   "#watermark" === a && ($(".location").css({
//     opacity: 1
//   }), $("#watermark").addClass("buttons")), $(t.container).css({
//     width: app.picture.width + "px",
//     height: app.picture.height + "px"
//   });
//   var o = function() {
//       var t = function() {
//           a()
//         },
//         a = function() {
//           p(), $(".settings__position-btn_many").on("click", function() {
//             r()
//           }), $(".settings__position-btn_one").on("click", function() {
//             p()
//           })
//         },
//         o = function() {
//           $("[data-pos]").on("click", function() {
//             $(".draggable").addClass("transition"), $("[type=radio]").removeAttr("checked"), $(this).attr("checked", "checked");
//             var t = $(this).data("pos");
//             n = Math.round(app.objPos[t].left), i = Math.round(app.objPos[t].top), e.css(app.objPos[t]), $(".posX").val(n), $(".posY").val(i)
//           })
//         },
//         r = function() {
//           $("[data-pos]").off("click"), $("[type=radio]").removeAttr("checked").removeClass("click"), $(".radio__label").css({
//             cursor: "default"
//           })
//         },
//         p = function() {
//           e.css(app.objPos["top-left"]), $("[type=radio]").removeAttr("checked").addClass("click"), $(".radio__label").css({
//             cursor: "pointer"
//           }), o(), $("[data-pos=top-left]").attr("checked", "checked"), $(".posX").val("0"), $(".posY").val("0")
//         };
//       return {
//         init: t
//       }
//     }(),
//     r = function() {
//       var t, a, n, i, o, r, p, s = app.picture.width - app.watermark.width,
//         c = app.picture.height - app.watermark.height,
//         l = 2 * Math.floor(app.picture.width / app.watermark.width),
//         d = 2 * Math.floor(app.picture.height / app.watermark.height),
//         u = "one",
//         m = function() {
//           h()
//         },
//         h = function() {
//           u = "one", g(), $(".settings__position-btn").css({
//             opacity: 1,
//             cursor: "pointer"
//           }), $(".settings__position-btn_many").on("click", function() {
//             u = "many", _(), g()
//           }), $(".settings__position-btn_one").on("click", function() {
//             u = "one", b(), g()
//           })
//         },
//         g = function() {
//           $(".generator__img-wrap").on("mousedown", ".appendedImg", function() {
//             $(".coordinates__input").blur()
//           }), $(".coordinates__input_loc").off("click mousedown mouseup mouseleave"), $(".coordinates__input").off("focus change keyup input click blur"), $(".posX").val(0), $(".posY").val(0), $("#watermark").css({
//             "margin-right": 0,
//             "margin-bottom": 0
//           }), $(".marginX").css({
//             width: 0
//           }), $(".marginY").css({
//             height: 0
//           }), "one" === u ? ($(".coordinates__input_loc").on("click", function() {
//             p = $(this), w()
//           }).addClass("js-hover"), $(".coordinates__input").css({
//             cursor: "pointer"
//           }), k(), v()) : "many" === u && ($(".coordinates__input_loc").on("click", function() {
//             p = $(this), f()
//           }), k(), v())
//         },
//         f = function() {
//           function t(t) {
//             if (a.hasClass("posX")) {
//               a.val(n + t);
//               var e = parseInt($(".posX").val(), 10);
//               $(".marginX").css({
//                 width: n + t + "px"
//               }), $(".appendedImg:not(.lastW), #watermark").css({
//                 "margin-right": n + t + "px"
//               }), $(".lastW").css({
//                 "margin-right": "0"
//               });
//               var i = app.watermark.width * l - app.watermark.width;
//               o = parseInt($(".repeatBlock").css("left").slice(0, -2), 10), $(".containmentForWatermarks").css({
//                 width: 2 * i + app.picture.width + (l - 1) * e * 2 + "px",
//                 left: -i - (l - 1) * e + "px"
//               }), $(".repeatBlock").css({
//                 width: l * app.watermark.width + (l - 1) * e + "px"
//               }), 1 === t ? $(".repeatBlock").css({
//                 left: o + (l - 1) + "px"
//               }) : -1 === t && (0 >= o && (o = l - 1), $(".repeatBlock").css({
//                 left: o - (l - 1) + "px"
//               }))
//             } else if (a.hasClass("posY")) {
//               a.val(n + t);
//               var r = parseInt($(".posY").val(), 10);
//               $(".marginY").css({
//                 height: n + t + "px"
//               }), $(".appendedImg:not(.lastT), #watermark").css({
//                 "margin-bottom": n + t + "px"
//               }), $(".lastT").css({
//                 "margin-bottom": "0"
//               });
//               var p = app.watermark.height * d - app.watermark.height,
//                 s = parseInt($(".repeatBlock").css("top").slice(0, -2), 10);
//               $(".containmentForWatermarks").css({
//                 height: 2 * p + app.picture.height + (d - 1) * r * 2 + "px",
//                 top: -p - (d - 1) * r + "px"
//               }), $(".repeatBlock").css({
//                 height: d * app.watermark.height + (d - 1) * r + "px"
//               }), 1 === t ? $(".repeatBlock").css({
//                 top: s + (d - 1) + "px"
//               }) : -1 === t && (0 >= s && (s = d - 1), $(".repeatBlock").css({
//                 top: s - (d - 1) + "px"
//               }))
//             }
//           }
//           var e = "coordinates__input_loc-up",
//             a = p.siblings(".coordinates__input"),
//             n = parseInt(a.val(), 10);
//           parseInt($(".repeatBlock").css("width").slice(0, -2), 10), parseInt($(".repeatBlock").css("height").slice(0, -2), 10), parseInt($(".posX").val(), 10);
//           if (p.hasClass(e)) t(1);
//           else {
//             if (0 === n) return !1;
//             t(-1)
//           }
//         },
//         v = function() {
//           var t;
//           $(".coordinates__input").on("focus", function() {
//             var e = $(this);
//             "many" === u && (o = parseInt($(".repeatBlock").css("left").slice(0, -2), 10), r = parseInt($(".repeatBlock").css("top").slice(0, -2), 10), t = e.val()), e.val("").removeAttr("readonly")
//           }).on("change keyup input click", function() {
//             var a = $(this);
//             if (this.value.match(/[^0-9]/g) && (this.value = this.value.replace(/[^0-9]/g, "")), "one" === u && ($(".draggable").addClass("transition"), a.hasClass("posX") && $(".posX").val() > s ? $(".posX").val(s) : a.hasClass("posY") && $(".posY").val() > c && $(".posY").val(c), e.css({
//                 left: $(".posX").val() + "px",
//                 top: $(".posY").val() + "px"
//               }), x()), "many" === u) {
//               a.hasClass("posX") && $(".posX").val() > 200 ? $(".posX").val(200) : a.hasClass("posY") && $(".posY").val() > 200 && $(".posY").val(200), $(".appendedImg, #watermark").css({
//                 "margin-right": $(".posX").val() + "px",
//                 "margin-bottom": $(".posY").val() + "px"
//               }), $(".lastT").css({
//                 "margin-bottom": "0"
//               }), $(".lastW").css({
//                 "margin-right": "0"
//               }), $(".marginX").css({
//                 width: $(".posX").val() + "px"
//               }), $(".marginY").css({
//                 height: $(".posY").val() + "px"
//               });
//               var n = parseInt($(".posX").val(), 10),
//                 i = parseInt($(".posY").val(), 10),
//                 p = app.watermark.width * l - app.watermark.width,
//                 m = app.watermark.height * d - app.watermark.height;
//               if ($(".containmentForWatermarks").css({
//                   width: 2 * p + app.picture.width + (l - 1) * n * 2 + "px",
//                   left: -p - (l - 1) * n + "px",
//                   height: 2 * m + app.picture.height + (d - 1) * i * 2 + "px",
//                   top: -m - (d - 1) * i + "px"
//                 }), $(".repeatBlock").css({
//                   width: l * app.watermark.width + (l - 1) * n + "px",
//                   height: d * app.watermark.height + (d - 1) * i + "px"
//                 }), a.hasClass("posX") && "" !== a.val()) {
//                 var h = parseInt($(".repeatBlock").css("left").slice(0, -2), 10);
//                 0 >= h ? $(".repeatBlock").css({
//                   left: "0px"
//                 }) : $(".repeatBlock").css({
//                   left: -(-o - (l - 1) * (a.val() - t)) + "px"
//                 })
//               } else if (a.hasClass("posY") && "" !== a.val()) {
//                 var g = parseInt($(".repeatBlock").css("top").slice(0, -2), 10);
//                 0 >= g ? $(".repeatBlock").css({
//                   top: "0px"
//                 }) : $(".repeatBlock").css({
//                   top: -(-r - (d - 1) * (a.val() - t)) + "px"
//                 })
//               }
//             }
//           }).on("blur", function() {
//             var t = $(this);
//             if ("" === t.val())
//               if ("one" === u) {
//                 var a = parseInt(e.css("left").slice(0, -2), 10),
//                   n = parseInt(e.css("top").slice(0, -2), 10);
//                 $(".posX").val(a), $(".posY").val(n), e.css({
//                   left: $(".posX").val() + "px",
//                   top: $(".posY").val() + "px"
//                 }), x()
//               } else if ("many" === u) {
//               var i = parseInt(e.css("margin-right").slice(0, -2), 10),
//                 o = parseInt(e.css("margin-bottom").slice(0, -2), 10);
//               $(".posX").val(i), $(".posY").val(o)
//             }
//           })
//         },
//         w = function() {
//           function t(t) {
//             n.hasClass("posX") ? (i > s - 1 && (i = s - 1), n.val(i + t), e.css({
//               left: i + t
//             })) : (i > c - 1 && (i = c - 1), n.val(i + t), e.css({
//               top: i + t
//             }))
//           }
//           var a = "coordinates__input_loc-up",
//             n = p.siblings(".coordinates__input"),
//             i = parseInt(n.val(), 10);
//           p.hasClass(a) ? t(1) : (1 > i && (i = 1), t(-1)), x()
//         },
//         k = function() {
//           var t = !1,
//             e = "";
//           $(".coordinates__input_loc").on("mousedown", function() {
//             p = $(this), t = !0, e = setInterval(function() {
//               t && ("one" === u ? w() : "many" === u && f())
//             }, 120)
//           }).on("mouseup", function() {
//             t = !1, clearInterval(e)
//           }).on("mouseleave", function() {
//             t = !1, clearInterval(e)
//           })
//         },
//         _ = function() {
//           var t = '<div class="margins marginX"></div><div class="margins marginY"></div>';
//           $(".radio").prepend(t)
//         },
//         b = function() {
//           $(".margins").remove()
//         },
//         x = function() {
//           t = e.css("left"), n = e.css("top"), a = parseInt(t.substring(0, t.length - 2), 10) || 0, i = parseInt(n.substring(0, n.length - 2), 10) || 0, addRed(a, i)
//         };
//       return {
//         init: m
//       }
//     }();
//   $("#watermark").hasClass("buttons") && (o.init(), r.init(), $("form").on("reset", function(t) {
//     t.preventDefault(), app.flag === !1 && (app.watermark.mode = "notile", app.flag = !0, $("#watermark, .appendedImg").removeClass("repeatElem").unwrap().unwrap().css({
//       top: 0,
//       left: 0
//     }), $(".appendedImg").remove(), $("#watermark").draggable({
//       disabled: !1
//     }), $(".settings__position-btn").removeClass("btn-active"), $(".settings__position-btn_one").addClass("btn-active")), $(".margins").remove(), o.init(), r.init(), $(".draggable").css({
//       "margin-right": "0px",
//       "margin-bottom": "0px"
//     }), app.watermark.marginx = 0, app.watermark.marginy = 0
//   }))
// };
// var drag = function() {
//     var t = function() {
//         e()
//       },
//       e = function() {
//         a()
//       },
//       a = function() {
//         var t, e, a, n;
//         $(".draggable").draggable({
//           drag: function() {
//             $("[type=radio]").removeAttr("checked"), $(".draggable").removeClass("transition"), $("form").on("reset", function(t) {
//               t.preventDefault(), $(".draggable").addClass("transition")
//             }), t = $(this).css("left"), e = $(this).css("top"), a = parseInt(t.slice(0, -2), 10), n = parseInt(e.substring(0, e.length - 2), 10), $(".posX").val(a), $(".posY").val(n), addRed(a, n)
//           },
//           containment: app.imgConteiner
//         })
//       };
//     return {
//       init: t
//     }
//   }(),
//   multiplyElem = function() {
//     var t, e, a, n, i, o, r, p = $(".draggable"),
//       s = function() {
//         c()
//       },
//       c = function() {
//         f(), $(".settings__position-btn_many").on("click", function() {
//           l()
//         }), $(".settings__position-btn_one").on("click", function() {
//           d()
//         })
//       },
//       l = function() {
//         if ($("#watermark").hasClass("buttons") && app.flag === !0) {
//           app.watermark.mode = "tile", app.flag = !1, p.wrap('<div class="repeatBlock"></div>').addClass("repeatElem").css({
//             left: 0,
//             top: 0
//           }), $("#watermark").draggable({
//             disabled: !0
//           }), $(".settings__position-btn").removeClass("btn-active"), $(".settings__position-btn_many").addClass("btn-active");
//           var t = 2 * Math.floor(app.picture.width / app.watermark.width),
//             e = 2 * Math.floor(app.picture.height / app.watermark.height),
//             a = app.watermark.width * t - app.watermark.width,
//             n = app.watermark.height * e - app.watermark.height;
//           $(".repeatBlock").wrap('<div class="containmentForWatermarks"></div>').css({
//             width: app.watermark.width * t + "px",
//             height: app.watermark.height * e + "px",
//             left: a + "px",
//             top: n + "px"
//           }), $(".containmentForWatermarks").css({
//             width: 2 * a + app.picture.width + "px",
//             height: 2 * n + app.picture.height + "px",
//             left: -a + "px",
//             top: -n + "px"
//           }), u(), h()
//         }
//       },
//       d = function() {
//         app.flag === !1 && (app.watermark.mode = "notile", g())
//       },
//       u = function() {
//         t = $(".repeatBlock").width(), e = $(".repeatBlock").height(), r = t * e, n = (t - app.picture.width) / 2, i = (e - app.picture.height) / 2, o = app.watermark.width * app.watermark.height;
//         var p = Math.floor($(".repeatBlock").width() / app.watermark.width);
//         a = Math.floor(r / o);
//         for (var s = 0; a - 2 >= s; s++) $(".repeatBlock").append('<img src="' + app.watermark.url + '" class="draggable appendedImg">');
//         $(".draggable:nth-child(" + p + "n)").addClass("lastW"), $(".draggable:gt(" + -(p + 1) + ")").addClass("lastT"), $(".draggable").css({
//           opacity: app.uiSliderVal / 100
//         })
//       },
//       m = function() {
//         $(".appendedImg").remove()
//       },
//       h = function() {
//         o = app.watermark.width * app.watermark.height, $(".repeatBlock").draggable({
//           drag: function() {
//             $(".draggable").css({
//               opacity: app.uiSliderVal / 100
//             })
//           },
//           containment: ".containmentForWatermarks"
//         })
//       },
//       g = function() {
//         app.flag = !0, $("#watermark, .appendedImg").removeClass("repeatElem").unwrap().unwrap().css({
//           top: 0,
//           left: 0
//         }), $(".posX").text(0), $(".posY").text(0), m(), $("#watermark").draggable({
//           disabled: !1
//         }), $(".settings__position-btn").removeClass("btn-active"), $(".settings__position-btn_one").addClass("btn-active"), $(".draggable").css({
//           "margin-right": "0px",
//           "margin-bottom": "0px"
//         }), app.watermark.marginx = 0, app.watermark.marginy = 0
//       },
//       f = function() {
//         $("div").is(".repeatBlock") && g()
//       };
//     return {
//       init: s
//     }
//   }(),
//   addArrows = function() {
//     var t = '<div class="noselect coordinates__input_loc coordinates__input_loc-up"></div><div class="noselect coordinates__input_loc coordinates__input_loc-bottom"></div>',
//       e = function() {
//         a()
//       },
//       a = function() {
//         $(".coordinates__block").append(t)
//       };
//     return {
//       init: e
//     }
//   }(),
//   addInputs = function() {
//     var t = function() {
//         e()
//       },
//       e = function() {
//         a()
//       },
//       a = function() {
//         $(".location").prepend('<div class="radio"></div>');
//         for (var t in app.objPos) {
//           var e = '<input type="radio" id="' + t + '" name="radio" class="radio_button" data-pos="' + t + '"><label class="radio__label" for="' + t + '"></label>';
//           $(".radio").append(e)
//         }
//       };
//     return {
//       init: t
//     }
//   }();
// $(document).ready(function() {
//   opacity.init(), addInputs.init(), addArrows.init(), picModule.init(), sharingModule.init(), $("form").on("submit", function(t) {
//     t.preventDefault()
//   }), Toast.init();
//   var t = ["#f2e4f5", "#e1f8fb", "#f9ecdc", "#d8faf2", "#9daff3", "#f25c5c", "#f9d568", "#f9924e"],
//     e = t[Math.floor(t.length * Math.random())];
//   $("html").css({
//     background: e
//   })
// });
// var picModule = function() {
//     var t = function() {
//         e()
//       },
//       e = function() {
//         $(".settings__btn-download").on("click", a)
//       },
//       a = function(t) {
//         return t.preventDefault(), "tile" === app.watermark.mode ? (app.watermark.coordx = parseInt($(".containmentForWatermarks").css("left").slice(0, -2), 10) + parseInt($(".repeatBlock").css("left").slice(0, -2), 10), app.watermark.coordy = parseInt($(".containmentForWatermarks").css("top").slice(0, -2), 10) + parseInt($(".repeatBlock").css("top").slice(0, -2), 10), app.watermark.marginx = parseInt($(".posX").val(), 10), app.watermark.marginy = parseInt($(".posY").val(), 10)) : (app.watermark.coordx = parseInt($(".posX").val(), 10), app.watermark.coordy = parseInt($(".posY").val(), 10)), preloader.start(), $.ajax({
//           url: app.URL_WATERMARK_REQUEST,
//           type: "POST",
//           data: {
//             imgmain: app.picture.filename,
//             imgwmark: app.watermark.filename,
//             uploaddir: app.UPLOAD_DIR,
//             coordx: app.watermark.coordx,
//             coordy: app.watermark.coordy,
//             marginx: app.watermark.marginx,
//             marginy: app.watermark.marginy,
//             opacity: app.watermark.opacity,
//             mode: app.watermark.mode
//           }
//         }).done(function(t) {
//           console.log(t), n(encodeURIComponent(t)), preloader.stop()
//         }).fail(function(t) {
//           var e = "Ошибка: сервер не справился";
//           Toast({
//             text: e,
//             time: 4e3,
//             type: "fixedTop"
//           }).show(), console.log(e), preloader.stop()
//         }), !0
//       },
//       n = function(t) {
//         var e = app.URL_IMGSAVE_REQUEST + "?fname=" + t;
//         window.open(e, "_self")
//       };
//     return {
//       init: t
//     }
//   }(),
//   translate = function() {
//     function t(t) {
//       var e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
//       return e ? decodeURIComponent(e[1]) : void 0
//     }
//
//     function e(t, e, a) {
//       a = a || {};
//       var n = a.expires;
//       if ("number" == typeof n && n) {
//         var i = new Date;
//         i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), n = a.expires = i
//       }
//       n && n.toUTCString && (a.expires = n.toUTCString()), e = encodeURIComponent(e);
//       var o = t + "=" + e;
//       for (var r in a) {
//         o += "; " + r;
//         var p = a[r];
//         p !== !0 && (o += "=" + p)
//       }
//       document.cookie = o
//     }
//     var a = [],
//       n = [],
//       i = function() {
//         a = $("[data-lang]"), n = $(".icons__language-item"), o(), r(t("lang"))
//       },
//       o = function() {
//         $(".icons__language-link").on("click", function(t) {
//           t.preventDefault(), r(this.getAttribute("href"))
//         })
//       },
//       r = function(t) {
//         t && t !== app.currentLang && (n.removeClass("active"), $("#" + t).addClass("active"), a.each(function() {
//           var e = $(this),
//             a = e.data("lang"); - 1 != $.inArray(e.text(), a) && e.text(a[app.LANGS[t]])
//         }), app.currentLang = t, e("lang", t, {
//           expires: 30,
//           path: ""
//         }))
//       };
//     return {
//       init: i,
//       changeLang: r
//     }
//   }();
// $(document).ready(function() {
//   translate.init()
// });
// var preloader = function() {
//   var t = {},
//     e = [],
//     a = function() {
//       n(), e = $(app.CLASSES_BLOCKING_AT_PRELOADER)
//     },
//     n = function() {
//       t = $(".cssload-container")
//     },
//     i = function() {
//       e.attr("disabled", "disabled"), t.css({
//         display: "block"
//       })
//     },
//     o = function() {
//       t.css({
//         display: "none"
//       }), e.removeAttr("disabled"), app.picture.url ? $("#formwrap-watermark").css({
//         opacity: "1"
//       }) : ($("#input-watermark").attr("disabled", "disabled"), $("#formwrap-watermark").css({
//         opacity: "0.5"
//       })), app.picture.url && app.watermark.url ? ($(".settings__btn-reset").css({
//         opacity: "1"
//       }), $(".settings__btn-download").css({
//         opacity: "1"
//       })) : ($(".settings__btn-reset").attr("disabled", "disabled"), $(".settings__btn-reset").css({
//         opacity: "0.5"
//       }), $(".settings__btn-download").attr("disabled", "disabled"), $(".settings__btn-download").css({
//         opacity: "0.5"
//       }))
//     };
//   return {
//     init: a,
//     start: i,
//     stop: o
//   }
// }();
// $(document).ready(function() {
//   preloader.init()
// }), $(document).ready(function() {
//   $(".settings__input-hide").on("change", function(t) {
//     if (t.preventDefault(), !this.files[0]) return void console.log("Не выбран файл для загрузки");
//     var e = this,
//       a = this.dataset.img,
//       n = this.dataset.fakeinput,
//       i = new FormData;
//     preloader.start(), i.append(0, this.files[0]), i.append("uploadDir", app.UPLOAD_DIR), i.append("maxSize", app.FILE_MAX_SIZE), i.append("maxWidth", app[a].container.width), i.append("maxHeight", app[a].container.height), $.ajax({
//       url: app.URL_UPLOAD_REQUEST,
//       type: "POST",
//       dataType: "json",
//       data: i,
//       processData: !1,
//       contentType: !1
//     }).fail(function(t) {
//       var e = "Ошибка: сервер не ответил, попробуйте попозже";
//       app.showMessage(e), console.log(e), preloader.stop()
//     }).done(function(t) {
//       if ("OK" === t.status) {
//         if ($("#" + n).text(t.filename), app[a].url = t.url, app[a].filename = t.filename, app[a].width = t.width, app[a].height = t.height, "input-picture" === e.id && (app.picture.width < app.watermark.width || app.picture.height < app.watermark.height)) {
//           $("#watermark").attr("src", ""), $("#input-watermark").val("");
//           var i = $("#fakeinput-watermark");
//           i.text(i.data("lang")[app.LANGS[app.currentLang]]), app.watermark.url = "", app.watermark.width = 0, app.watermark.height = 0;
//           var o = "Водяной знак удален, т.к. его размеры превышают размеры основной картинки";
//           app.showMessage(o), console.log(o)
//         }
//         $("#" + a).attr("src", ""), startModulesAfterUpload(a), $("#" + a).attr("src", t.url + "?" + (new Date).getTime())
//       } else app.showMessage(t.text);
//       console.log(t.text), preloader.stop()
//     })
//   })
// });
// var sharingModule = function() {
//     var t = window.location.href,
//       e = document.title,
//       a = document.getElementsByName("description")[0].getAttribute("content"),
//       n = t + "/img/watermark-screenshot1.jpg",
//       i = 626,
//       o = 436,
//       r = screen.availWidth / 2 - i / 2,
//       p = screen.availHeight / 2 - o / 2,
//       s = function() {
//         c()
//       },
//       c = function(t) {
//         $(".icons__share-link").on("click", l)
//       },
//       l = function(i) {
//         i.preventDefault(), "tw" == $(this).attr("id") && m(t, e), "vk" == $(this).attr("id") && d(t, e, n, a), "fb" == $(this).attr("id") && u(t, e, n, a)
//       },
//       d = function(t, e, a, n) {
//         var i = "http://vkontakte.ru/share.php?";
//         i += "url=" + encodeURIComponent(t), i += "&title=" + encodeURIComponent(e), i += "&description=" + encodeURIComponent(n), i += "&image=" + encodeURIComponent(a), i += "&noparse=true", h(i)
//       },
//       u = function(t, e, a, n) {
//         var i = "http://www.facebook.com/sharer.php?s=100";
//         i += "&p[title]=" + encodeURIComponent(e), i += "&p[summary]=" + encodeURIComponent(n), i += "&p[url]=" + encodeURIComponent(t), i += "&p[images][0]=" + encodeURIComponent(a), h(i)
//       },
//       m = function(t, e) {
//         var a = "http://twitter.com/timeline/home?";
//         a += "status=" + encodeURIComponent(e), a += "%20" + encodeURIComponent(t), h(a)
//       },
//       h = function(t) {
//         window.open(t, "", "toolbar=0,status=0,width=" + i + ",height=" + o + "left=" + r + ", top=" + p)
//       };
//     return {
//       init: s
//     }
//   }(),
//   refreshDuration = 1e4,
//   refreshTimeout, numPointsX, numPointsY, unitWidth, unitHeight, points, scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
// $(window).resize(function() {
//   scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight), $("body").css({
//     height: scrollHeight + "px"
//   }), onResize()
// }), window.onload = onLoad, window.onresize = onResize;
