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


var _jsxFileName = "D:\\test\\pages\\index.js",
    _s = $RefreshSig$();

 // import './index.css'



function Index(_ref) {
  _s();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      count = _useState[0],
      setCount = _useState[1]; // console.log(count, setCount)


  var list = ["4864684"];

  function addData() {
    list.push(count.value);
    console.log(list);
    setState({
      updater: list
    }, [count.value]);
  }

  function addbutt(e) {
    console.log('删除！', e);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "App",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        placeholder: "Basic usage",
        className: "input_ls",
        ref: setCount
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        colorScheme: "blue",
        onClick: function onClick() {
          return addData(count);
        },
        children: "\u6309\u94AE"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\u6B63\u5728\u8FDB\u884C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: updater.map(function (value, key) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "vas",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
              defaultValue: value,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["EditablePreview"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 41
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["EditableInput"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 37
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              className: "bot",
              onClick: addbutt(key),
              children: "\u5220\u9664"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 37
            }, this)]
          }, key, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 33
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "\u5DF2\u7ECF\u5B8C\u6210"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
} // const Index = () => (
//     <div>
//         <p>1</p>
//     </div>
// )


_s(Index, "07zuxD/gcoLzpVXBXRATxcpBEFY=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY291bnQiLCJzZXRDb3VudCIsImxpc3QiLCJhZGREYXRhIiwicHVzaCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwidXBkYXRlciIsImFkZGJ1dHQiLCJlIiwibWFwIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7QUFRQSxTQUFTQSxLQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUNDQyxzREFBUSxFQURUO0FBQUEsTUFDbEJDLEtBRGtCO0FBQUEsTUFDWEMsUUFEVyxpQkFFekI7OztBQUNBLE1BQUlDLElBQUksR0FBRyxDQUNQLFNBRE8sQ0FBWDs7QUFHQSxXQUFTQyxPQUFULEdBQW1CO0FBQ2ZELFFBQUksQ0FBQ0UsSUFBTCxDQUFVSixLQUFLLENBQUNLLEtBQWhCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0FNLFlBQVEsQ0FBQztBQUNMQyxhQUFPLEVBQUNQO0FBREgsS0FBRCxFQUVOLENBQUNGLEtBQUssQ0FBQ0ssS0FBUCxDQUZNLENBQVI7QUFHSDs7QUFDRCxXQUFTSyxPQUFULENBQWlCQyxDQUFqQixFQUFvQjtBQUNoQkwsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFrQkksQ0FBbEI7QUFDSDs7QUFDRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUEsMkJBQ0kscUVBQUMsNkRBQUQ7QUFBQSw4QkFDSSxxRUFBQyxxREFBRDtBQUFPLG1CQUFXLEVBQUMsYUFBbkI7QUFBaUMsaUJBQVMsRUFBQyxVQUEzQztBQUFzRCxXQUFHLEVBQUVWO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLHNEQUFEO0FBQVEsbUJBQVcsRUFBQyxNQUFwQjtBQUEyQixlQUFPLEVBQUU7QUFBQSxpQkFBTUUsT0FBTyxDQUFDSCxLQUFELENBQWI7QUFBQSxTQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUEsa0JBRVFTLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQVVQLEtBQVYsRUFBaUJRLEdBQWpCLEVBQXNCO0FBQzlCLDhCQUNJO0FBQUsscUJBQVMsRUFBQyxLQUFmO0FBQUEsb0NBQ0kscUVBQUMsd0RBQUQ7QUFBVSwwQkFBWSxFQUFFUixLQUF4QjtBQUFBLHNDQUNJLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQUtJLHFFQUFDLHNEQUFEO0FBQVEsdUJBQVMsRUFBQyxLQUFsQjtBQUF3QixxQkFBTyxFQUFFSyxPQUFPLENBQUNHLEdBQUQsQ0FBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEo7QUFBQSxhQUEwQkEsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESjtBQVNILFNBVkQ7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkosZUFtQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUJILEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7R0E5Q1NoQixLOztLQUFBQSxLO0FBK0NNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZjMxZTNiMDY0NzA1N2Y3YjVlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsXHJcbiAgICBFZGl0YWJsZVByZXZpZXcsXHJcbiAgICBFZGl0YWJsZUlucHV0LFxyXG4gICAgSW5wdXQsXHJcbiAgICBCdXR0b25cclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmZ1bmN0aW9uIEluZGV4KHsgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgpO1xyXG4gICAgLy8gY29uc29sZS5sb2coY291bnQsIHNldENvdW50KVxyXG4gICAgbGV0IGxpc3QgPSBbXHJcbiAgICAgICAgXCI0ODY0Njg0XCJcclxuICAgIF1cclxuICAgIGZ1bmN0aW9uIGFkZERhdGEoKSB7XHJcbiAgICAgICAgbGlzdC5wdXNoKGNvdW50LnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhsaXN0KTtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVwZGF0ZXI6bGlzdFxyXG4gICAgICAgIH0sW2NvdW50LnZhbHVlXSlcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFkZGJ1dHQoZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfliKDpmaTvvIEnLGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICA8VGhlbWVQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkJhc2ljIHVzYWdlXCIgY2xhc3NOYW1lPVwiaW5wdXRfbHNcIiByZWY9e3NldENvdW50fS8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPVwiYmx1ZVwiIG9uQ2xpY2s9eygpID0+IGFkZERhdGEoY291bnQpfT7mjInpkq48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxoMT7mraPlnKjov5vooYw8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZXIubWFwKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFzXCIga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGUgZGVmYXVsdFZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVQcmV2aWV3PjwvRWRpdGFibGVQcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlSW5wdXQ+PC9FZGl0YWJsZUlucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0VkaXRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJvdFwiIG9uQ2xpY2s9e2FkZGJ1dHQoa2V5KX0+5Yig6ZmkPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDE+5bey57uP5a6M5oiQPC9oMT5cclxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcclxuLy8gICAgIDxkaXY+XHJcbi8vICAgICAgICAgPHA+MTwvcD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyApXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==