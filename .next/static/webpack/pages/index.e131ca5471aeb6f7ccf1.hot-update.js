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


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      list = _useState2[0],
      setList = _useState2[1]; //增加页面内容


  function addData(value) {
    setList([].concat(Object(D_test_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(list), [value]));
    console.log(list);
  } //删除页面内容。


  function addbutton(e) {
    list.splice(e, 1);
    console.log(list, e);
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
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        colorScheme: "blue",
        onClick: function onClick() {
          return addData(count);
        },
        children: "\u6309\u94AE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "\u6B63\u5728\u8FDB\u884C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: list.map(function (value, key) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "vas",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Editable"], {
              defaultValue: value,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["EditablePreview"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["EditableInput"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
              className: "bot",
              onClick: function onClick() {
                return addbutton(key);
              },
              children: "\u5220\u9664"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 37
            }, this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 33
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "\u5DF2\u7ECF\u5B8C\u6210"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, this);
} // const Index = () => (
//     <div>
//         <p>1</p>
//     </div>
// )


_s(Index, "P1SfvBGVh3KpWELQfOZgHgxkgCg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsImxpc3QiLCJzZXRMaXN0IiwiYWRkRGF0YSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImFkZGJ1dHRvbiIsImUiLCJzcGxpY2UiLCJ0YXJnZXQiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7O0FBUUEsU0FBU0EsS0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDQ0Msc0RBQVEsRUFEVDtBQUFBLE1BQ2xCQyxLQURrQjtBQUFBLE1BQ1hDLFFBRFcsaUJBRXpCOzs7QUFGeUIsbUJBR0RGLHNEQUFRLENBQUMsRUFBRCxDQUhQO0FBQUEsTUFHbEJHLElBSGtCO0FBQUEsTUFHWkMsT0FIWSxrQkFJekI7OztBQUNBLFdBQVNDLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQ3BCRixXQUFPLDJIQUNBRCxJQURBLElBRUhHLEtBRkcsR0FBUDtBQUlBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBWjtBQUNILEdBWHdCLENBWXpCOzs7QUFDQSxXQUFTTSxTQUFULENBQW1CQyxDQUFuQixFQUFzQjtBQUNsQlAsUUFBSSxDQUFDUSxNQUFMLENBQVlELENBQVosRUFBZSxDQUFmO0FBQ0FILFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaLEVBQWlCTyxDQUFqQjtBQUNIOztBQUNELHNCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSwyQkFDSSxxRUFBQyw2REFBRDtBQUFBLDhCQUNJLHFFQUFDLHFEQUFEO0FBQU8sbUJBQVcsRUFBQyxhQUFuQjtBQUFpQyxpQkFBUyxFQUFDLFVBQTNDO0FBQXNELGdCQUFRLEVBQUUsa0JBQUNKLEtBQUQ7QUFBQSxpQkFBV0osUUFBUSxDQUFDSSxLQUFLLENBQUNNLE1BQU4sQ0FBYU4sS0FBZCxDQUFuQjtBQUFBO0FBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLHNEQUFEO0FBQVEsbUJBQVcsRUFBQyxNQUFwQjtBQUEyQixlQUFPLEVBQUU7QUFBQSxpQkFBTUQsT0FBTyxDQUFDSixLQUFELENBQWI7QUFBQSxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUEsa0JBRVFFLElBQUksQ0FBQ1UsR0FBTCxDQUFTLFVBQVVQLEtBQVYsRUFBaUJRLEdBQWpCLEVBQXNCO0FBQzNCLDhCQUNJO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0kscUVBQUMsd0RBQUQ7QUFBVSwwQkFBWSxFQUFFUixLQUF4QjtBQUFBLHNDQUNJLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUtJLHFFQUFDLHNEQUFEO0FBQVEsdUJBQVMsRUFBQyxLQUFsQjtBQUF3QixxQkFBTyxFQUFFO0FBQUEsdUJBQU1HLFNBQVMsQ0FBQ0ssR0FBRCxDQUFmO0FBQUEsZUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEo7QUFBQSxhQUEwQkEsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQVNILFNBVkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFtQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUJILEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0EvQ1NoQixLOztLQUFBQSxLO0FBZ0RNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMTMxY2E1NDcxYWViNmY3Y2NmMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsXHJcbiAgICBFZGl0YWJsZVByZXZpZXcsXHJcbiAgICBFZGl0YWJsZUlucHV0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBCdXR0b25cclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmZ1bmN0aW9uIEluZGV4KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY291bnQsIHNldENvdW50KVxyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy/lop7liqDpobXpnaLlhoXlrrlcclxuICAgIGZ1bmN0aW9uIGFkZERhdGEodmFsdWUpIHtcclxuICAgICAgICBzZXRMaXN0KFtcclxuICAgICAgICAgICAgLi4ubGlzdCxcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICBdKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxpc3QpXHJcbiAgICB9XHJcbiAgICAvL+WIoOmZpOmhtemdouWGheWuueOAglxyXG4gICAgZnVuY3Rpb24gYWRkYnV0dG9uKGUpIHtcclxuICAgICAgICBsaXN0LnNwbGljZShlLCAxKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhsaXN0LGUpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQmFzaWMgdXNhZ2VcIiBjbGFzc05hbWU9XCJpbnB1dF9sc1wiIG9uQ2hhbmdlPXsodmFsdWUpID0+IHNldENvdW50KHZhbHVlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCIgb25DbGljaz17KCkgPT4gYWRkRGF0YShjb3VudCl9PuaMiemSrjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGgxPuato+WcqOi/m+ihjDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5tYXAoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2YXNcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZSBkZWZhdWx0VmFsdWU9e3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZVByZXZpZXc+PC9FZGl0YWJsZVByZXZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVJbnB1dD48L0VkaXRhYmxlSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRWRpdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYm90XCIgb25DbGljaz17KCkgPT4gYWRkYnV0dG9uKGtleSl9PuWIoOmZpDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPuW3sue7j+WujOaIkDwvaDE+XHJcbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIDxwPjE8L3A+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gKVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=