webpackHotUpdate_N_E("pages/index",{

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

var _jsxFileName = "D:\\test\\pages\\index.js";



function Index(_ref) {
  var children = _ref.children;

  function constructor(props) {
    // super(props);
    this.state = {
      list: []
    };
  }

  ;

  function addData() {// var templist = this.state.list;
    // console.log(templist);
    // templist.push(this.refs.title.value);//这个数据的返回值索引值
    // //把值赋值给了list
    // this.setState({
    //     list: templist
    // })
  }

  ;

  function handleLogoutClick() {
    console.log(this.list);
  }

  ;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "input_bot",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
          placeholder: "Basic usage",
          className: "input_ls",
          ref: "title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          colorScheme: "blue",
          onClick: addData(),
          children: "\u6309\u94AE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\u6B63\u5728\u8FDB\u884C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        id: "adc",
        children: this.state.list.map(function (value, key) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "vas",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
              defaultValue: value,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["EditablePreview"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 20
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["EditableInput"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 20
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              className: "bot",
              onClick: this.handleLogoutClick,
              children: "\u5220\u9664"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\u5DF2\u7ECF\u5B8C\u6210"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
} // const Index = () => (
//     <div>
//         <p>1</p>
//     </div>
// )


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGlsZHJlbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJhZGREYXRhIiwiaGFuZGxlTG9nb3V0Q2xpY2siLCJjb25zb2xlIiwibG9nIiwibWFwIiwidmFsdWUiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBUUEsU0FBU0EsS0FBVCxPQUE2QjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFDekIsV0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDeEI7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsVUFBSSxFQUFFO0FBREcsS0FBYjtBQUdIOztBQUFBOztBQUNELFdBQVNDLE9BQVQsR0FBbUIsQ0FDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOztBQUFBOztBQUNELFdBQVNDLGlCQUFULEdBQTZCO0FBQ3pCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSixJQUFqQjtBQUNIOztBQUFBO0FBQ0Qsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDJCQUNBLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRSxxRUFBQyxxREFBRDtBQUFPLHFCQUFXLEVBQUMsYUFBbkI7QUFBaUMsbUJBQVMsRUFBQyxVQUEzQztBQUFzRCxhQUFHLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLHNEQUFEO0FBQVEscUJBQVcsRUFBQyxNQUFwQjtBQUEyQixpQkFBTyxFQUFFQyxPQUFPLEVBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQUcsVUFBRSxFQUFDLEtBQU47QUFBQSxrQkFFRSxLQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JLLEdBQWhCLENBQW9CLFVBQVVDLEtBQVYsRUFBaUJDLEdBQWpCLEVBQXNCO0FBQ3hDLDhCQUNBO0FBQUcscUJBQVMsRUFBQyxLQUFiO0FBQUEsb0NBQ0UscUVBQUMsd0RBQUQ7QUFBVSwwQkFBWSxFQUFFRCxLQUF4QjtBQUFBLHNDQUNHLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREgsZUFFRyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUtFLHFFQUFDLHNEQUFEO0FBQVEsdUJBQVMsRUFBQyxLQUFsQjtBQUF3QixxQkFBTyxFQUFFLEtBQUtKLGlCQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRjtBQUFBLGFBQXdCSyxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBO0FBU0QsU0FWRDtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkgsQyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQW5EU1osSztBQW9ETUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2I2MjkxMjE5Yjc1MjgzNTI5MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIFRoZW1lUHJvdmlkZXIsXHJcbiAgICBFZGl0YWJsZSxcclxuICAgIEVkaXRhYmxlUHJldmlldyxcclxuICAgIEVkaXRhYmxlSW5wdXQsXHJcbiAgICBJbnB1dCxcclxuICAgIEJ1dHRvblxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuZnVuY3Rpb24gSW5kZXgoeyBjaGlsZHJlbiB9KSB7XHJcbiAgICBmdW5jdGlvbiBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIC8vIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsaXN0OiBbXVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBhZGREYXRhKCkge1xyXG4gICAgICAgIC8vIHZhciB0ZW1wbGlzdCA9IHRoaXMuc3RhdGUubGlzdDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wbGlzdCk7XHJcbiAgICAgICAgLy8gdGVtcGxpc3QucHVzaCh0aGlzLnJlZnMudGl0bGUudmFsdWUpOy8v6L+Z5Liq5pWw5o2u55qE6L+U5Zue5YC857Si5byV5YC8XHJcbiAgICAgICAgLy8gLy/miorlgLzotYvlgLznu5nkuoZsaXN0XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgLy8gICAgIGxpc3Q6IHRlbXBsaXN0XHJcbiAgICAgICAgLy8gfSlcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVMb2dvdXRDbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICA8VGhlbWVQcm92aWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfYm90XCI+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkJhc2ljIHVzYWdlXCIgY2xhc3NOYW1lPVwiaW5wdXRfbHNcIiByZWY9XCJ0aXRsZVwiIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9XCJibHVlXCIgb25DbGljaz17YWRkRGF0YSgpfSA+5oyJ6ZKuPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxoMT7mraPlnKjov5vooYw8L2gxPlxyXG4gICAgICAgICAgPHAgaWQ9XCJhZGNcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5saXN0Lm1hcChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmFzXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgPEVkaXRhYmxlIGRlZmF1bHRWYWx1ZT17dmFsdWV9PlxyXG4gICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlUHJldmlldz48L0VkaXRhYmxlUHJldmlldz5cclxuICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZUlucHV0PjwvRWRpdGFibGVJbnB1dD5cclxuICAgICAgICAgICAgICAgIDwvRWRpdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJvdFwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9nb3V0Q2xpY2t9PuWIoOmZpDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8aDE+5bey57uP5a6M5oiQPC9oMT5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgICAgPHA+MTwvcD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyApXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==