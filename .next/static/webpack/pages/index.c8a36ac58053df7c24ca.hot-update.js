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
  var _this = this;

  var children = _ref.children;

  function constructor(props) {
    // super(props);
    this.state = {
      list: []
    };
  }

  ;

  addData = function addData() {
    var templist = _this.state.list;
    console.log(templist);
    templist.push(_this.refs.title.value); //这个数据的返回值索引值
    //把值赋值给了list

    _this.setState({
      list: templist
    });
  };

  handleLogoutClick = function handleLogoutClick() {
    console.log(_this.list);
  };

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
          lineNumber: 32,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          colorScheme: "blue",
          onClick: this.addData,
          children: "\u6309\u94AE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\u6B63\u5728\u8FDB\u884C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
                lineNumber: 42,
                columnNumber: 20
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["EditableInput"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 20
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              className: "bot",
              onClick: this.handleLogoutClick(),
              children: "\u5220\u9664"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\u5DF2\u7ECF\u5B8C\u6210"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGlsZHJlbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJhZGREYXRhIiwidGVtcGxpc3QiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInJlZnMiLCJ0aXRsZSIsInZhbHVlIiwic2V0U3RhdGUiLCJoYW5kbGVMb2dvdXRDbGljayIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFPQSxTQUFTQSxLQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUN6QixXQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUN4QjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUU7QUFERyxLQUFiO0FBR0g7O0FBQUE7O0FBQ0RDLFNBQU8sR0FBRyxtQkFBTTtBQUNaLFFBQUlDLFFBQVEsR0FBRyxLQUFJLENBQUNILEtBQUwsQ0FBV0MsSUFBMUI7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFFBQVo7QUFDQUEsWUFBUSxDQUFDRyxJQUFULENBQWMsS0FBSSxDQUFDQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLEtBQTlCLEVBSFksQ0FHeUI7QUFDckM7O0FBQ0EsU0FBSSxDQUFDQyxRQUFMLENBQWM7QUFDVlQsVUFBSSxFQUFFRTtBQURJLEtBQWQ7QUFHSCxHQVJEOztBQVNBUSxtQkFBaUIsR0FBRyw2QkFBTTtBQUN0QlAsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBSSxDQUFDSixJQUFqQjtBQUNILEdBRkQ7O0FBR0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDJCQUNBLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRSxxRUFBQyxxREFBRDtBQUFPLHFCQUFXLEVBQUMsYUFBbkI7QUFBaUMsbUJBQVMsRUFBQyxVQUEzQztBQUFzRCxhQUFHLEVBQUM7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLHFFQUFDLE1BQUQ7QUFBUSxxQkFBVyxFQUFDLE1BQXBCO0FBQTJCLGlCQUFPLEVBQUUsS0FBS0MsT0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBRyxVQUFFLEVBQUMsS0FBTjtBQUFBLGtCQUVFLEtBQUtGLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQlcsR0FBaEIsQ0FBb0IsVUFBVUgsS0FBVixFQUFpQkksR0FBakIsRUFBc0I7QUFDeEMsOEJBQ0E7QUFBRyxxQkFBUyxFQUFDLEtBQWI7QUFBQSxvQ0FDRSxxRUFBQyx3REFBRDtBQUFVLDBCQUFZLEVBQUVKLEtBQXhCO0FBQUEsc0NBQ0cscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESCxlQUVHLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBS0UscUVBQUMsTUFBRDtBQUFRLHVCQUFTLEVBQUMsS0FBbEI7QUFBd0IscUJBQU8sRUFBRSxLQUFLRSxpQkFBTCxFQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRjtBQUFBLGFBQXdCRSxHQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURBO0FBU0QsU0FWRDtBQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQXFCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkgsQyxDQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztLQW5EU2pCLEs7QUFvRE1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM4YTM2YWM1ODA1M2RmN2MyNGNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsXHJcbiAgICBFZGl0YWJsZVByZXZpZXcsXHJcbiAgICBFZGl0YWJsZUlucHV0LFxyXG4gICAgSW5wdXRcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmZ1bmN0aW9uIEluZGV4KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgZnVuY3Rpb24gY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICAvLyBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgYWRkRGF0YSA9ICgpID0+IHtcclxuICAgICAgICB2YXIgdGVtcGxpc3QgPSB0aGlzLnN0YXRlLmxpc3Q7XHJcbiAgICAgICAgY29uc29sZS5sb2codGVtcGxpc3QpO1xyXG4gICAgICAgIHRlbXBsaXN0LnB1c2godGhpcy5yZWZzLnRpdGxlLnZhbHVlKTsvL+i/meS4quaVsOaNrueahOi/lOWbnuWAvOe0ouW8leWAvFxyXG4gICAgICAgIC8v5oqK5YC86LWL5YC857uZ5LqGbGlzdFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBsaXN0OiB0ZW1wbGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgaGFuZGxlTG9nb3V0Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgPFRoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X2JvdFwiPlxyXG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCYXNpYyB1c2FnZVwiIGNsYXNzTmFtZT1cImlucHV0X2xzXCIgcmVmPVwidGl0bGVcIiAvPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG9uQ2xpY2s9e3RoaXMuYWRkRGF0YX0gPuaMiemSrjwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDE+5q2j5Zyo6L+b6KGMPC9oMT5cclxuICAgICAgICAgIDxwIGlkPVwiYWRjXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUubGlzdC5tYXAoZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZhc1wiIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgIDxFZGl0YWJsZSBkZWZhdWx0VmFsdWU9e3ZhbHVlfT5cclxuICAgICAgICAgICAgICAgICAgIDxFZGl0YWJsZVByZXZpZXc+PC9FZGl0YWJsZVByZXZpZXc+XHJcbiAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVJbnB1dD48L0VkaXRhYmxlSW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L0VkaXRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJib3RcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ291dENsaWNrKCl9PuWIoOmZpDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8aDE+5bey57uP5a6M5oiQPC9oMT5cclxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgICAgPHA+MTwvcD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyApXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==