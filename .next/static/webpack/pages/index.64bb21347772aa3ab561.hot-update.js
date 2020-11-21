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

  function addData() {
    var templist = this.state.list;
    console.log(templist);
    templist.push(this.refs.title.value); //这个数据的返回值索引值
    //把值赋值给了list

    this.setState({
      list: templist
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjaGlsZHJlbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImxpc3QiLCJhZGREYXRhIiwidGVtcGxpc3QiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInJlZnMiLCJ0aXRsZSIsInZhbHVlIiwic2V0U3RhdGUiLCJoYW5kbGVMb2dvdXRDbGljayIsIm1hcCIsImtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFPQSxTQUFTQSxLQUFULE9BQTZCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUN6QixXQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUN4QjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNUQyxVQUFJLEVBQUU7QUFERyxLQUFiO0FBR0g7O0FBQUE7O0FBQ0QsV0FBU0MsT0FBVCxHQUFtQjtBQUNmLFFBQUlDLFFBQVEsR0FBRyxLQUFLSCxLQUFMLENBQVdDLElBQTFCO0FBQ0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFaO0FBQ0FBLFlBQVEsQ0FBQ0csSUFBVCxDQUFjLEtBQUtDLElBQUwsQ0FBVUMsS0FBVixDQUFnQkMsS0FBOUIsRUFIZSxDQUdzQjtBQUNyQzs7QUFDQSxTQUFLQyxRQUFMLENBQWM7QUFDVlQsVUFBSSxFQUFFRTtBQURJLEtBQWQ7QUFHSDs7QUFBQTs7QUFDRCxXQUFTUSxpQkFBVCxHQUE2QjtBQUN6QlAsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0osSUFBakI7QUFDSDs7QUFBQTtBQUNELHNCQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQSwyQkFDQSxxRUFBQyw2REFBRDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0UscUVBQUMscURBQUQ7QUFBTyxxQkFBVyxFQUFDLGFBQW5CO0FBQWlDLG1CQUFTLEVBQUMsVUFBM0M7QUFBc0QsYUFBRyxFQUFDO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxNQUFEO0FBQVEscUJBQVcsRUFBQyxNQUFwQjtBQUEyQixpQkFBTyxFQUFFLEtBQUtDLE9BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQUcsVUFBRSxFQUFDLEtBQU47QUFBQSxrQkFFRSxLQUFLRixLQUFMLENBQVdDLElBQVgsQ0FBZ0JXLEdBQWhCLENBQW9CLFVBQVVILEtBQVYsRUFBaUJJLEdBQWpCLEVBQXNCO0FBQ3hDLDhCQUNBO0FBQUcscUJBQVMsRUFBQyxLQUFiO0FBQUEsb0NBQ0UscUVBQUMsd0RBQUQ7QUFBVSwwQkFBWSxFQUFFSixLQUF4QjtBQUFBLHNDQUNHLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREgsZUFFRyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUtFLHFFQUFDLE1BQUQ7QUFBUSx1QkFBUyxFQUFDLEtBQWxCO0FBQXdCLHFCQUFPLEVBQUUsS0FBS0UsaUJBQUwsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBTEY7QUFBQSxhQUF3QkUsR0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQTtBQVNELFNBVkQ7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMkJILEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7S0FuRFNqQixLO0FBb0RNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NGJiMjEzNDc3NzJhYTNhYjU2MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgVGhlbWVQcm92aWRlcixcclxuICAgIEVkaXRhYmxlLFxyXG4gICAgRWRpdGFibGVQcmV2aWV3LFxyXG4gICAgRWRpdGFibGVJbnB1dCxcclxuICAgIElucHV0XHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5mdW5jdGlvbiBJbmRleCh7IGNoaWxkcmVuIH0pIHtcclxuICAgIGZ1bmN0aW9uIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgLy8gc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxpc3Q6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGFkZERhdGEoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsaXN0ID0gdGhpcy5zdGF0ZS5saXN0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBsaXN0KTtcclxuICAgICAgICB0ZW1wbGlzdC5wdXNoKHRoaXMucmVmcy50aXRsZS52YWx1ZSk7Ly/ov5nkuKrmlbDmja7nmoTov5Tlm57lgLzntKLlvJXlgLxcclxuICAgICAgICAvL+aKiuWAvOi1i+WAvOe7meS6hmxpc3RcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbGlzdDogdGVtcGxpc3RcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUxvZ291dENsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgIDxUaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dF9ib3RcIj5cclxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQmFzaWMgdXNhZ2VcIiBjbGFzc05hbWU9XCJpbnB1dF9sc1wiIHJlZj1cInRpdGxlXCIgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvclNjaGVtZT1cImJsdWVcIiBvbkNsaWNrPXt0aGlzLmFkZERhdGF9ID7mjInpkq48L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgxPuato+WcqOi/m+ihjDwvaDE+XHJcbiAgICAgICAgICA8cCBpZD1cImFkY1wiPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmxpc3QubWFwKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2YXNcIiBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICA8RWRpdGFibGUgZGVmYXVsdFZhbHVlPXt2YWx1ZX0+XHJcbiAgICAgICAgICAgICAgICAgICA8RWRpdGFibGVQcmV2aWV3PjwvRWRpdGFibGVQcmV2aWV3PlxyXG4gICAgICAgICAgICAgICAgICAgPEVkaXRhYmxlSW5wdXQ+PC9FZGl0YWJsZUlucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9FZGl0YWJsZT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYm90XCIgb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXRDbGljaygpfT7liKDpmaQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPGgxPuW3sue7j+WujOaIkDwvaDE+XHJcbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXHJcbi8vICAgICA8ZGl2PlxyXG4vLyAgICAgICAgIDxwPjE8L3A+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gKVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=