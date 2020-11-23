webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/haveFinished.js":
/*!*******************************!*\
  !*** ./pages/haveFinished.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");



var _jsxFileName = "D:\\React\\pages\\haveFinished.js",
    _s = $RefreshSig$();

 // import './index.css'



function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      listMtop = _useState[0],
      setLslime = _useState[1];

  console.log(listMtop); //增加页面内容

  var addData = function addData(value) {
    if (value) {
      setCount("");
      setList([].concat(Object(D_React_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list), [value]));
    }
  }; //删除


  function liClick(e) {
    list.splice(e, 1);
    setList(Object(D_React_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list));
  }

  ; //修改

  function setCounTinp(e) {
    var input = document.getElementById("input" + e);
    var value = input.value;

    if (value) {
      list[e] = value;
      setList(Object(D_React_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list));
      input.value = "";
    }
  } //完成
  // function setLslime(item,index) {
  // }


  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "App",
    w: "80%",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u5DF2\u7ECF\u5B8C\u6210"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s(Index, "6ElZh27zyAcJZ7HdL5Sie+1oLZQ=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolist */ "./pages/todolist.js");
/* harmony import */ var _haveFinished__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./haveFinished */ "./pages/haveFinished.js");

var _jsxFileName = "D:\\React\\pages\\index.js";
 // import './index.css'





function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["theme"],
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["CSSReset"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_todolist__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("haveFinis", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGF2ZUZpbmlzaGVkLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInVzZVN0YXRlIiwibGlzdE10b3AiLCJzZXRMc2xpbWUiLCJjb25zb2xlIiwibG9nIiwiYWRkRGF0YSIsInZhbHVlIiwic2V0Q291bnQiLCJzZXRMaXN0IiwibGlzdCIsImxpQ2xpY2siLCJlIiwic3BsaWNlIiwic2V0Q291blRpbnAiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0aGVtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7QUFNQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBQ2lCQyxzREFBUSxDQUFDLEVBQUQsQ0FEekI7QUFBQSxNQUNOQyxRQURNO0FBQUEsTUFDSUMsU0FESjs7QUFFYkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILFFBQVosRUFGYSxDQUdiOztBQUNBLE1BQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN2QixRQUFJQSxLQUFKLEVBQVc7QUFDUEMsY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBQyxhQUFPLDRIQUNBQyxJQURBLElBRUhILEtBRkcsR0FBUDtBQUlIO0FBQ0osR0FSRCxDQUphLENBYWI7OztBQUNBLFdBQVNJLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ2hCRixRQUFJLENBQUNHLE1BQUwsQ0FBWUQsQ0FBWixFQUFlLENBQWY7QUFDQUgsV0FBTyxDQUFDLGlIQUFJQyxJQUFMLEVBQVA7QUFDSDs7QUFBQSxHQWpCWSxDQWtCYjs7QUFDQSxXQUFTSSxXQUFULENBQXFCRixDQUFyQixFQUF3QjtBQUNwQixRQUFJRyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUFVTCxDQUFsQyxDQUFaO0FBQ0EsUUFBSUwsS0FBSyxHQUFHUSxLQUFLLENBQUNSLEtBQWxCOztBQUNBLFFBQUlBLEtBQUosRUFBVztBQUNQRyxVQUFJLENBQUNFLENBQUQsQ0FBSixHQUFVTCxLQUFWO0FBQ0FFLGFBQU8sQ0FBQyxpSEFBSUMsSUFBTCxFQUFQO0FBQ0FLLFdBQUssQ0FBQ1IsS0FBTixHQUFjLEVBQWQ7QUFDSDtBQUNKLEdBM0JZLENBNEJiO0FBQ0E7QUFFQTs7O0FBQ0Esc0JBQ0kscUVBQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixLQUFDLEVBQUMsS0FBdkI7QUFBQSwyQkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztHQTlDUVAsSzs7S0FBQUEsSztBQStDTUEsb0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDdERBOztBQUNBO0FBS0E7QUFDQTs7QUFDQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2Isc0JBQ0kscUVBQUMsNkRBQUQ7QUFBZSxTQUFLLEVBQUVrQixxREFBdEI7QUFBQSw0QkFDSSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDs7S0FSUWxCLEs7QUFTTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjRhMDYyYjQ3MDA1OGMyZjc2YmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgJy4vaW5kZXguY3NzJ1xyXG5pbXBvcnQge1xyXG4gICAgSW5wdXQsXHJcbiAgICBDaGVja2JveCxcclxuICAgIEJ1dHRvbixcclxuICAgIEJveFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCBbbGlzdE10b3AsIHNldExzbGltZV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0TXRvcClcclxuICAgIC8v5aKe5Yqg6aG16Z2i5YaF5a65XHJcbiAgICBjb25zdCBhZGREYXRhID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldENvdW50KFwiXCIpO1xyXG4gICAgICAgICAgICBzZXRMaXN0KFtcclxuICAgICAgICAgICAgICAgIC4uLmxpc3QsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5Yig6ZmkXHJcbiAgICBmdW5jdGlvbiBsaUNsaWNrKGUpIHtcclxuICAgICAgICBsaXN0LnNwbGljZShlLCAxKTtcclxuICAgICAgICBzZXRMaXN0KFsuLi5saXN0XSk7XHJcbiAgICB9O1xyXG4gICAgLy/kv67mlLlcclxuICAgIGZ1bmN0aW9uIHNldENvdW5UaW5wKGUpIHtcclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIgKyBlKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgbGlzdFtlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBzZXRMaXN0KFsuLi5saXN0XSk7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WujOaIkFxyXG4gICAgLy8gZnVuY3Rpb24gc2V0THNsaW1lKGl0ZW0saW5kZXgpIHtcclxuXHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiQXBwXCIgdz1cIjgwJVwiPlxyXG4gICAgICAgICAgICA8aDE+5bey57uP5a6M5oiQPC9oMT5cclxuICAgICAgICAgICAgey8qIHtcclxuXHRcdFx0XHRcdGxpc3RNdG9wLm1hcCgoaXRlbSxpbmRleCkgPT5cclxuXHRcdFx0XHRcdFx0PEJveCBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3ggc2l6ZT1cIm1kXCIgY29sb3JTY2hlbWU9XCJncmVlblwiIGlzSW52YWxpZCBvbkNsaWNrPXsoZSkgPT4gc2V0bFRzbGltKGUudGFyZ2V0LnBhcmVudE5vZGUub3V0ZXJUZXh0KX0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2l0ZW19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2hlY2tib3g+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0gKi99XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgQ1NTUmVzZXQsXHJcbiAgICB0aGVtZVxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IFRvZG9saXN0IGZyb20gJy4vdG9kb2xpc3QnXHJcbmltcG9ydCBoYXZlRmluaXMgZnJvbSAnLi9oYXZlRmluaXNoZWQnXHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICA8Q1NTUmVzZXQvPlxyXG4gICAgICAgICAgICA8VG9kb2xpc3QvPlxyXG4gICAgICAgICAgICA8aGF2ZUZpbmlzLz5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==