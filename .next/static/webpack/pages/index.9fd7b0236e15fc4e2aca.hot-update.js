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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");



var _jsxFileName = "D:\\React\\pages\\todolist.js",
    _s = $RefreshSig$();

 // import './index.css'



function Index() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
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
  }

  var def = false; //完成

  function setLslime(id, index) {
    def = true;
    console.log(true); // let checkobx = document.getElementById("checkobx");
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    className: "App",
    w: "80%",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      errorBorderColor: "red.300",
      value: count,
      onChange: function onChange(e) {
        return setCount(e.target.value);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      variantColor: "teal",
      size: "xs",
      onClick: function onClick() {
        return addData(count);
      },
      children: "\u6DFB\u52A0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u6B63\u5728\u8FDB\u884C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 5
    }, this), list.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Input"], {
          id: "input" + index,
          placeholder: item,
          size: "sm",
          w: "20%"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          size: "md",
          colorScheme: "green",
          id: "checkobx",
          defaultIsChecked: def,
          onClick: function onClick() {
            return setLslime(item, index);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          h: "1.75rem",
          size: "sm",
          onClick: function onClick() {
            return setCounTinp(index);
          },
          children: "\u4FEE\u6539"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          h: "1.75rem",
          size: "sm",
          onClick: function onClick(e) {
            return liClick(index);
          },
          children: "\u5220\u9664"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u5DF2\u7ECF\u5B8C\u6210"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb2xpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJsaXN0Iiwic2V0TGlzdCIsImFkZERhdGEiLCJ2YWx1ZSIsImxpQ2xpY2siLCJlIiwic3BsaWNlIiwic2V0Q291blRpbnAiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkZWYiLCJzZXRMc2xpbWUiLCJpZCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7O0FBaUJBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDYUMsc0RBQVEsQ0FBQyxFQUFELENBRHJCO0FBQUEsTUFDTkMsS0FETTtBQUFBLE1BQ0NDLFFBREQ7O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsRUFBRCxDQUZqQjtBQUFBLE1BRVJHLElBRlE7QUFBQSxNQUVGQyxPQUZFLGtCQUdiOzs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDdkIsUUFBSUEsS0FBSixFQUFXO0FBQ1BKLGNBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUUsYUFBTyw0SEFDQUQsSUFEQSxJQUVIRyxLQUZHLEdBQVA7QUFJSDtBQUNKLEdBUkQsQ0FKYSxDQWFiOzs7QUFDQSxXQUFTQyxPQUFULENBQWlCQyxDQUFqQixFQUFvQjtBQUNoQkwsUUFBSSxDQUFDTSxNQUFMLENBQVlELENBQVosRUFBZSxDQUFmO0FBQ0pKLFdBQU8sQ0FBQyxpSEFBSUQsSUFBTCxFQUFQO0FBQ0M7O0FBQUEsR0FqQlksQ0FrQmI7O0FBQ0EsV0FBU08sV0FBVCxDQUFxQkYsQ0FBckIsRUFBdUI7QUFDbkIsUUFBSUcsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBUUwsQ0FBaEMs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MTVmYzRlMmFjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsIEVkaXRhYmxlUHJldmlldywgRWRpdGFibGVJbnB1dCxcclxuICAgIE1vZGFsLFxyXG4gICAgTW9kYWxPdmVybGF5LFxyXG4gICAgTW9kYWxDb250ZW50LFxyXG4gICAgTW9kYWxIZWFkZXIsXHJcbiAgICBNb2RhbEZvb3RlcixcclxuICAgIE1vZGFsQm9keSxcclxuICAgIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgICB1c2VEaXNjbG9zdXJlLFxyXG4gICAgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCxcclxuICAgIElucHV0LFxyXG4gICAgQ2hlY2tib3gsXHJcbiAgICBCdXR0b24sXHJcblx0XHRCb3gsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoXCJcIik7IFxyXG5cdFx0Y29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy/lop7liqDpobXpnaLlhoXlrrlcclxuICAgIGNvbnN0IGFkZERhdGEgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0Q291bnQoXCJcIik7XHJcbiAgICAgICAgICAgIHNldExpc3QoW1xyXG4gICAgICAgICAgICAgICAgLi4ubGlzdCxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/liKDpmaRcclxuICAgIGZ1bmN0aW9uIGxpQ2xpY2soZSkge1xyXG4gICAgICAgIGxpc3Quc3BsaWNlKGUsIDEpO1xyXG5cdFx0XHRcdHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgIH07XHJcbiAgICAvL+S/ruaUuVxyXG4gICAgZnVuY3Rpb24gc2V0Q291blRpbnAoZSl7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiK2UpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsaXN0W2VdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWU9XCJcIjtcclxuICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGRlZiA9IGZhbHNlO1xyXG5cdFx0XHQvL+WujOaIkFxyXG5cdFx0XHRmdW5jdGlvbiBzZXRMc2xpbWUoaWQsaW5kZXgpIHtcclxuXHRcdFx0XHRkZWYgPSB0cnVlO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRydWUpO1xyXG5cdFx0XHRcdC8vIGxldCBjaGVja29ieCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hlY2tvYnhcIik7XHJcblx0XHRcdH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJBcHBcIiB3PVwiODAlXCI+XHJcblx0XHRcdFx0PElucHV0IGVycm9yQm9yZGVyQ29sb3I9XCJyZWQuMzAwXCIgdmFsdWU9e2NvdW50fSBvbkNoYW5nZT17KGUpID0+IHNldENvdW50KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnRDb2xvcj1cInRlYWxcIiBzaXplPVwieHNcIiBvbkNsaWNrPXsoKSA9PiBhZGREYXRhKGNvdW50KX0+5re75YqgPC9CdXR0b24+XHJcblx0XHRcdFx0PGgxPuato+WcqOi/m+ihjDwvaDE+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dCBpZD17XCJpbnB1dFwiK2luZGV4fSBwbGFjZWhvbGRlcj17aXRlbX0gc2l6ZT1cInNtXCIgdz1cIjIwJVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94IHNpemU9XCJtZFwiIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBpZD17XCJjaGVja29ieFwifSBkZWZhdWx0SXNDaGVja2VkPXtkZWZ9IG9uQ2xpY2s9eyAoKSA9PiBzZXRMc2xpbWUoaXRlbSxpbmRleCl9ID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NoZWNrYm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VuVGlucChpbmRleCl9PuS/ruaUuTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoZSkgPT4gbGlDbGljayhpbmRleCl9PuWIoOmZpDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGgxPuW3sue7j+WujOaIkDwvaDE+XHJcblx0XHRcdFx0XHR7LyogPEJveCBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3ggc2l6ZT1cIm1kXCIgY29sb3JTY2hlbWU9XCJncmVlblwiIGlzSW52YWxpZCA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9DaGVja2JveD5cclxuXHRcdFx0XHRcdDwvQm94PiAqL31cclxuICAgICAgPC9Cb3g+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==