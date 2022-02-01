(()=>{var __webpack_modules__={"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/()=>{eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  // progressbar\n  var fullHeight, innerHeight;\n  var progressBar = document.querySelector('.progressbar-line');\n  window.addEventListener('scroll', fillProgressLine);\n  window.addEventListener('resize', fillProgressLine);\n\n  function fillProgressLine() {\n    fullHeight = document.body.scrollHeight;\n    innerHeight = window.innerHeight;\n    progressBar.style.width = scrollY * 100 / (fullHeight - innerHeight) + '%';\n  }\n\n  fillProgressLine(); // menu\n\n  document.querySelector('#menu').addEventListener('click', function () {\n    document.querySelector('#menu-active').classList.toggle('menu_active');\n  }); // accordion\n\n  var accordions = document.querySelectorAll('.accordion__item');\n\n  var _iterator = _createForOfIteratorHelper(accordions),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      item = _step.value;\n      item.addEventListener('click', function () {\n        if (this.classList.contains('active')) {\n          this.classList.remove('active');\n        } else {\n          var _iterator2 = _createForOfIteratorHelper(accordions),\n              _step2;\n\n          try {\n            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n              el = _step2.value;\n              el.classList.remove('active');\n            }\n          } catch (err) {\n            _iterator2.e(err);\n          } finally {\n            _iterator2.f();\n          }\n\n          this.classList.add('active');\n        }\n      });\n    } // progressbar accordion\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var progressbar = document.querySelector('#progressbar');\n  var item1 = document.querySelector('#accordionItem_1');\n  var item2 = document.querySelector('#accordionItem_2');\n  var item3 = document.querySelector('#accordionItem_3');\n  item1.addEventListener('click', function () {\n    progressbar.style.height = \"33%\";\n  });\n  item2.addEventListener('click', function () {\n    progressbar.style.height = \"66%\";\n  });\n  item3.addEventListener('click', function () {\n    progressbar.style.height = \"100%\";\n  });\n  var mediaQuery = window.matchMedia('(max-width: 769px)');\n\n  if (mediaQuery.matches) {\n    item1.addEventListener('click', function () {\n      progressbar.style.width = \"33%\";\n    });\n    item2.addEventListener('click', function () {\n      progressbar.style.width = \"66%\";\n    });\n    item3.addEventListener('click', function () {\n      progressbar.style.width = \"100%\";\n    });\n  } // tabs for progressbar accordion\n\n\n  document.querySelectorAll('.accordion__item').forEach(function (tabs) {\n    tabs.addEventListener('click', function (event) {\n      var path = event.currentTarget.dataset.path;\n      document.querySelectorAll('.experience__numbers-start').forEach(function (tabContent) {\n        tabContent.classList.remove('experience__numbers-start_active');\n      });\n      document.querySelector(\"[data-target=\\\"\".concat(path, \"\\\"]\")).classList.add('experience__numbers-start_active');\n    });\n  }); // animation\n\n  var tl = gsap.timeline();\n  tl.from('.visual__sun', {\n    duration: 2.5,\n    rotate: -360,\n    scale: 0.6\n  }).from('#vector1', {\n    duration: .1,\n    opacity: 0\n  }).from('#vector1', {\n    duration: 1,\n    strokeDasharray: \"0 800\"\n  }, \"-=.3\").from('#vector2', {\n    duration: .1,\n    opacity: 0\n  }).from('#vector2', {\n    duration: .5,\n    strokeDasharray: \"0 140\"\n  }, \"-=.1\");\n});\n\n//# sourceURL=webpack://06_bundlers/./src/js/main.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/main.js"]()})();