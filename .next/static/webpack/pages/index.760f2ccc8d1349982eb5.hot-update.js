webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/todolist.js":
/*!***************************!*\
  !*** ./pages/todolist.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var D_React_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");



var _jsxFileName = "D:\\React\\pages\\todolist.js",
    _s = $RefreshSig$();


 // import "./todolist.css"



function Index() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      list = _useState2[0],
      setList = _useState2[1]; //增加页面内容


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


  var isRed = true;

  function setLslime(e, index) {
    console.log(e, index);

    if (isRed === true) {
      isRed = true;
    } else {
      isRed = false;
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    className: "App",
    w: "80%",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      errorBorderColor: "red.300",
      value: count,
      onChange: function onChange(e) {
        return setCount(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variantColor: "teal",
      size: "xs",
      onClick: function onClick() {
        return addData(count);
      },
      children: "\u6DFB\u52A0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      className: "jsx-3284112164",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {
        className: "jsx-3284112164"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }, this), list.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Input"], {
          id: "input" + index,
          placeholder: item,
          size: "sm",
          w: "20%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
          size: "md",
          colorScheme: "green",
          id: "checkobx",
          isInline: isRed,
          onClick: function onClick() {
            return setLslime(isRed, index);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "jsx-3284112164" + " " + ([isRed ? "done" : ""] || false),
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          h: "1.75rem",
          size: "sm",
          onClick: function onClick() {
            return setCounTinp(index);
          },
          children: "\u4FEE\u6539"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          h: "1.75rem",
          size: "sm",
          onClick: function onClick(e) {
            return liClick(index);
          },
          children: "\u5220\u9664"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3284112164",
      children: ".done{-webkit-text-decoration:line-through;text-decoration:line-through;color:#ccc;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFxccGFnZXNcXHRvZG9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFTSxBQUdzQyxrRUFDbEIsV0FDYiIsImZpbGUiOiJEOlxcUmVhY3RcXHBhZ2VzXFx0b2RvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3RvZG9saXN0LmNzc1wiXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsIEVkaXRhYmxlUHJldmlldywgRWRpdGFibGVJbnB1dCxcclxuICAgIE1vZGFsLFxyXG4gICAgTW9kYWxPdmVybGF5LFxyXG4gICAgTW9kYWxDb250ZW50LFxyXG4gICAgTW9kYWxIZWFkZXIsXHJcbiAgICBNb2RhbEZvb3RlcixcclxuICAgIE1vZGFsQm9keSxcclxuICAgIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgICB1c2VEaXNjbG9zdXJlLFxyXG4gICAgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCxcclxuICAgIElucHV0LFxyXG4gICAgQ2hlY2tib3gsXHJcbiAgICBCdXR0b24sXHJcblx0XHRCb3gsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoXCJcIik7IFxyXG5cdFx0Y29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy/lop7liqDpobXpnaLlhoXlrrlcclxuICAgIGNvbnN0IGFkZERhdGEgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0Q291bnQoXCJcIik7XHJcbiAgICAgICAgICAgIHNldExpc3QoW1xyXG4gICAgICAgICAgICAgICAgLi4ubGlzdCxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/liKDpmaRcclxuICAgIGZ1bmN0aW9uIGxpQ2xpY2soZSkge1xyXG4gICAgICAgIGxpc3Quc3BsaWNlKGUsIDEpO1xyXG5cdFx0XHRcdHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgIH07XHJcbiAgICAvL+S/ruaUuVxyXG4gICAgZnVuY3Rpb24gc2V0Q291blRpbnAoZSl7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiK2UpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsaXN0W2VdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWU9XCJcIjtcclxuICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly/lrozmiJBcclxuXHRcdFx0bGV0IGlzUmVkID0gdHJ1ZTtcclxuXHRcdFx0ZnVuY3Rpb24gc2V0THNsaW1lKGUsaW5kZXgpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlLGluZGV4KTtcclxuXHRcdFx0XHRpZiAoaXNSZWQgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdGlzUmVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGlzUmVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiQXBwXCIgdz1cIjgwJVwiPlxyXG5cdFx0XHRcdDxJbnB1dCBlcnJvckJvcmRlckNvbG9yPVwicmVkLjMwMFwiIHZhbHVlPXtjb3VudH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3VudChlLnRhcmdldC52YWx1ZSl9IC8+XHJcblx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJ0ZWFsXCIgc2l6ZT1cInhzXCIgb25DbGljaz17KCkgPT4gYWRkRGF0YShjb3VudCl9Pua3u+WKoDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxoMT48YnI+PC9icj48L2gxPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXQgaWQ9e1wiaW5wdXRcIitpbmRleH0gcGxhY2Vob2xkZXI9e2l0ZW19IHNpemU9XCJzbVwiIHc9XCIyMCVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveCBzaXplPVwibWRcIiBjb2xvclNjaGVtZT1cImdyZWVuXCIgaWQ9e1wiY2hlY2tvYnhcIn0gaXNJbmxpbmU9e2lzUmVkfSBvbkNsaWNrPXsgKCkgPT4gc2V0THNsaW1lKGlzUmVkLGluZGV4KX0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbaXNSZWQ/XCJkb25lXCI6XCJcIl19PntpdGVtfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NoZWNrYm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VuVGlucChpbmRleCl9PuS/ruaUuTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoZSkgPT4gbGlDbGljayhpbmRleCl9PuWIoOmZpDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+XHJcblx0XHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0XHRcdC5kb25le1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2NjYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YH1cclxuXHRcdFx0XHRcdDwvc3R5bGU+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdfQ== */\n/*@ sourceURL=D:\\\\React\\\\pages\\\\todolist.js */"
    }, void 0, false, void 0, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 9
  }, this);
}

_s(Index, "q7ODWd8vouu7qfqGGgYZqmDef2k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb2xpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJsaXN0Iiwic2V0TGlzdCIsImFkZERhdGEiLCJ2YWx1ZSIsImxpQ2xpY2siLCJlIiwic3BsaWNlIiwic2V0Q291blRpbnAiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpc1JlZCIsInNldExzbGltZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7O0FBaUJBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDTkMsS0FETTtBQUFBLE1BQ0NDLFFBREQ7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVJHLElBRlE7QUFBQSxNQUVGQyxPQUZFLGtCQUdiOzs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDdkIsUUFBSUEsS0FBSixFQUFXO0FBQ1BKLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUUsYUFBTyw0SEFDQUQsSUFEQSxJQUVIRyxLQUZHLEdBQVA7QUFJSDtBQUNKLEdBUkQsQ0FKYSxDQWFiOzs7QUFDQSxXQUFTQyxPQUFULENBQWlCQyxDQUFqQixFQUFvQjtBQUNoQkwsUUFBSSxDQUFDTSxNQUFMLENBQVlELENBQVosRUFBZSxDQUFmO0FBQ0pKLFdBQU8sQ0FBQyxpSEFBSUQsSUFBTCxFQUFQO0FBQ0M7O0FBQUEsR0FqQlksQ0FrQmI7O0FBQ0EsV0FBU08sV0FBVCxDQUFxQkYsQ0FBckIsRUFBdUI7QUFDbkIsUUFBSUcsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBUUwsQ0FBaEMs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QUFULENBTEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEyQkg7O0dBakVRakIsSzs7S0FBQUEsSztBQWtFTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzYwZjJjY2M4ZDEzNDk5ODJlYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3RvZG9saXN0LmNzc1wiXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsIEVkaXRhYmxlUHJldmlldywgRWRpdGFibGVJbnB1dCxcclxuICAgIE1vZGFsLFxyXG4gICAgTW9kYWxPdmVybGF5LFxyXG4gICAgTW9kYWxDb250ZW50LFxyXG4gICAgTW9kYWxIZWFkZXIsXHJcbiAgICBNb2RhbEZvb3RlcixcclxuICAgIE1vZGFsQm9keSxcclxuICAgIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgICB1c2VEaXNjbG9zdXJlLFxyXG4gICAgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCxcclxuICAgIElucHV0LFxyXG4gICAgQ2hlY2tib3gsXHJcbiAgICBCdXR0b24sXHJcblx0XHRCb3gsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoXCJcIik7IFxyXG5cdFx0Y29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy/lop7liqDpobXpnaLlhoXlrrlcclxuICAgIGNvbnN0IGFkZERhdGEgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0Q291bnQoXCJcIik7XHJcbiAgICAgICAgICAgIHNldExpc3QoW1xyXG4gICAgICAgICAgICAgICAgLi4ubGlzdCxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/liKDpmaRcclxuICAgIGZ1bmN0aW9uIGxpQ2xpY2soZSkge1xyXG4gICAgICAgIGxpc3Quc3BsaWNlKGUsIDEpO1xyXG5cdFx0XHRcdHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgIH07XHJcbiAgICAvL+S/ruaUuVxyXG4gICAgZnVuY3Rpb24gc2V0Q291blRpbnAoZSl7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiK2UpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsaXN0W2VdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWU9XCJcIjtcclxuICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly/lrozmiJBcclxuXHRcdFx0bGV0IGlzUmVkID0gdHJ1ZTtcclxuXHRcdFx0ZnVuY3Rpb24gc2V0THNsaW1lKGUsaW5kZXgpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhlLGluZGV4KTtcclxuXHRcdFx0XHRpZiAoaXNSZWQgPT09IHRydWUpIHtcclxuXHRcdFx0XHRcdGlzUmVkID0gdHJ1ZTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGlzUmVkID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiQXBwXCIgdz1cIjgwJVwiPlxyXG5cdFx0XHRcdDxJbnB1dCBlcnJvckJvcmRlckNvbG9yPVwicmVkLjMwMFwiIHZhbHVlPXtjb3VudH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3VudChlLnRhcmdldC52YWx1ZSl9IC8+XHJcblx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJ0ZWFsXCIgc2l6ZT1cInhzXCIgb25DbGljaz17KCkgPT4gYWRkRGF0YShjb3VudCl9Pua3u+WKoDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxoMT48YnI+PC9icj48L2gxPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXQgaWQ9e1wiaW5wdXRcIitpbmRleH0gcGxhY2Vob2xkZXI9e2l0ZW19IHNpemU9XCJzbVwiIHc9XCIyMCVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveCBzaXplPVwibWRcIiBjb2xvclNjaGVtZT1cImdyZWVuXCIgaWQ9e1wiY2hlY2tvYnhcIn0gaXNJbmxpbmU9e2lzUmVkfSBvbkNsaWNrPXsgKCkgPT4gc2V0THNsaW1lKGlzUmVkLGluZGV4KX0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbaXNSZWQ/XCJkb25lXCI6XCJcIl19PntpdGVtfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NoZWNrYm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VuVGlucChpbmRleCl9PuS/ruaUuTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoZSkgPT4gbGlDbGljayhpbmRleCl9PuWIoOmZpDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+XHJcblx0XHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0XHRcdC5kb25le1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2NjYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YH1cclxuXHRcdFx0XHRcdDwvc3R5bGU+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=