webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");



var _jsxFileName = "D:\\test\\pages\\index.js",
    _s = $RefreshSig$();

 // import './index.css'



function Index(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      count = _useState[0],
      setCount = _useState[1]; // console.log(count, setCount)


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(['456123']),
      list = _useState2[0],
      setList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(list),
      button = _useState3[0],
      setbutton = _useState3[1];

  function addData(value) {
    setList([].concat(Object(D_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list), [value]));
    console.log(list);
  }

  function addbutton(e) {
    var _console;

    setbutton([].concat(Object(D_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(button), [e]));

    (_console = console).log.apply(_console, ['删除！'].concat(Object(D_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(button), [e])); // list.splice(e,index, 1);

  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "App",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "Basic usage",
        className: "input_ls",
        onChange: function onChange(value) {
          return setCount(value.target.value);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        colorScheme: "blue",
        onClick: function onClick() {
          return addData(count);
        },
        children: "\u6309\u94AE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "\u6B63\u5728\u8FDB\u884C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: list.map(function (value, key) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "vas",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Editable"], {
              defaultValue: value,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["EditablePreview"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["EditableInput"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              className: "bot",
              onClick: function onClick(value) {
                return addbutton(key);
              },
              children: "\u5220\u9664"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 37
            }, this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 33
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "\u5DF2\u7ECF\u5B8C\u6210"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
} // const Index = () => (
//     <div>
//         <p>1</p>
//     </div>
// )


_s(Index, "VAQsbwijB1h69ksdsQNlOe24oPU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsImxpc3QiLCJzZXRMaXN0IiwiYnV0dG9uIiwic2V0YnV0dG9uIiwiYWRkRGF0YSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFkZGJ1dHRvbiIsImUiLCJ0YXJnZXQiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7O0FBUUEsU0FBU0EsS0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDQ0Msc0RBQVEsRUFEVDtBQUFBLE1BQ2xCQyxLQURrQjtBQUFBLE1BQ1hDLFFBRFcsaUJBRXpCOzs7QUFGeUIsbUJBR0RGLHNEQUFRLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FIUDtBQUFBLE1BR2xCRyxJQUhrQjtBQUFBLE1BR1pDLE9BSFk7O0FBQUEsbUJBSUdKLHNEQUFRLENBQUNHLElBQUQsQ0FKWDtBQUFBLE1BSWxCRSxNQUprQjtBQUFBLE1BSVZDLFNBSlU7O0FBS3pCLFdBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3BCSixXQUFPLDJIQUNBRCxJQURBLElBRUhLLEtBRkcsR0FBUDtBQUlBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVAsSUFBWjtBQUNIOztBQUNELFdBQVNRLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCO0FBQUE7O0FBQ2xCTixhQUFTLDJIQUNGRCxNQURFLElBRUxPLENBRkssR0FBVDs7QUFJQSxnQkFBQUgsT0FBTyxFQUFDQyxHQUFSLGtCQUFZLEtBQVoseUhBQXFCTCxNQUFyQixJQUE0Qk8sQ0FBNUIsSUFMa0IsQ0FNbEI7O0FBQ0g7O0FBQ0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDJCQUNJLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0kscUVBQUMscURBQUQ7QUFBTyxtQkFBVyxFQUFDLGFBQW5CO0FBQWlDLGlCQUFTLEVBQUMsVUFBM0M7QUFBc0QsZ0JBQVEsRUFBRSxrQkFBQ0osS0FBRDtBQUFBLGlCQUFXTixRQUFRLENBQUNNLEtBQUssQ0FBQ0ssTUFBTixDQUFhTCxLQUFkLENBQW5CO0FBQUE7QUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUkscUVBQUMsc0RBQUQ7QUFBUSxtQkFBVyxFQUFDLE1BQXBCO0FBQTJCLGVBQU8sRUFBRTtBQUFBLGlCQUFNRCxPQUFPLENBQUNOLEtBQUQsQ0FBYjtBQUFBLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUk7QUFBQSxrQkFFUUUsSUFBSSxDQUFDVyxHQUFMLENBQVMsVUFBVU4sS0FBVixFQUFpQk8sR0FBakIsRUFBc0I7QUFDM0IsOEJBQ0k7QUFBSyxxQkFBUyxFQUFDLEtBQWY7QUFBQSxvQ0FDSSxxRUFBQyx3REFBRDtBQUFVLDBCQUFZLEVBQUVQLEtBQXhCO0FBQUEsc0NBQ0kscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixlQUVJLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBS0kscUVBQUMsc0RBQUQ7QUFBUSx1QkFBUyxFQUFDLEtBQWxCO0FBQXdCLHFCQUFPLEVBQUUsaUJBQUNBLEtBQUQ7QUFBQSx1QkFBV0csU0FBUyxDQUFDSSxHQUFELENBQXBCO0FBQUEsZUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEo7QUFBQSxhQUEwQkEsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQVNILFNBVkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFtQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUJILEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0FsRFNqQixLOztLQUFBQSxLO0FBbURNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMTc5ODAxNDhjNGI1MzE1MTBjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsXHJcbiAgICBFZGl0YWJsZVByZXZpZXcsXHJcbiAgICBFZGl0YWJsZUlucHV0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBCdXR0b25cclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmZ1bmN0aW9uIEluZGV4KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY291bnQsIHNldENvdW50KVxyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoWyc0NTYxMjMnXSk7XHJcbiAgICBjb25zdCBbYnV0dG9uLCBzZXRidXR0b25dID0gdXNlU3RhdGUobGlzdCk7XHJcbiAgICBmdW5jdGlvbiBhZGREYXRhKHZhbHVlKSB7XHJcbiAgICAgICAgc2V0TGlzdChbXHJcbiAgICAgICAgICAgIC4uLmxpc3QsXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgXSlcclxuICAgICAgICBjb25zb2xlLmxvZyhsaXN0KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWRkYnV0dG9uKGUpIHtcclxuICAgICAgICBzZXRidXR0b24oW1xyXG4gICAgICAgICAgICAuLi5idXR0b24sXHJcbiAgICAgICAgICAgIGVcclxuICAgICAgICBdKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCfliKDpmaTvvIEnLC4uLmJ1dHRvbixlKTtcclxuICAgICAgICAvLyBsaXN0LnNwbGljZShlLGluZGV4LCAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCYXNpYyB1c2FnZVwiIGNsYXNzTmFtZT1cImlucHV0X2xzXCIgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0Q291bnQodmFsdWUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBvbkNsaWNrPXsoKSA9PiBhZGREYXRhKGNvdW50KX0+5oyJ6ZKuPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aDE+5q2j5Zyo6L+b6KGMPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0Lm1hcChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhc1wiIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlIGRlZmF1bHRWYWx1ZT17dmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlUHJldmlldz48L0VkaXRhYmxlUHJldmlldz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZUlucHV0PjwvRWRpdGFibGVJbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9FZGl0YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJib3RcIiBvbkNsaWNrPXsodmFsdWUpID0+IGFkZGJ1dHRvbihrZXkpfT7liKDpmaQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMT7lt7Lnu4/lrozmiJA8L2gxPlxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbi8vIGNvbnN0IEluZGV4ID0gKCkgPT4gKFxyXG4vLyAgICAgPGRpdj5cclxuLy8gICAgICAgICA8cD4xPC9wPlxyXG4vLyAgICAgPC9kaXY+XHJcbi8vIClcclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9