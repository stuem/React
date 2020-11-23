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


  var def = false;

  function setLslime(e, index) {
    console.log(e, index);

    if (def === false) {
      def = true;
    } else {
      def = false;
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
          defaultIsChecked: def,
          onClick: function onClick() {
            return setLslime(def, index);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            className: "jsx-3284112164" + " " + ([def ? "done" : ""] || false),
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
      children: ".done{-webkit-text-decoration:line-through;text-decoration:line-through;color:#ccc;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFxccGFnZXNcXHRvZG9saXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJFTSxBQUdzQyxrRUFDbEIsV0FDYiIsImZpbGUiOiJEOlxcUmVhY3RcXHBhZ2VzXFx0b2RvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgXCIuL3RvZG9saXN0LmNzc1wiXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsIEVkaXRhYmxlUHJldmlldywgRWRpdGFibGVJbnB1dCxcclxuICAgIE1vZGFsLFxyXG4gICAgTW9kYWxPdmVybGF5LFxyXG4gICAgTW9kYWxDb250ZW50LFxyXG4gICAgTW9kYWxIZWFkZXIsXHJcbiAgICBNb2RhbEZvb3RlcixcclxuICAgIE1vZGFsQm9keSxcclxuICAgIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgICB1c2VEaXNjbG9zdXJlLFxyXG4gICAgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCxcclxuICAgIElucHV0LFxyXG4gICAgQ2hlY2tib3gsXHJcbiAgICBCdXR0b24sXHJcblx0XHRCb3gsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoXCJcIik7IFxyXG5cdFx0Y29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgLy/lop7liqDpobXpnaLlhoXlrrlcclxuICAgIGNvbnN0IGFkZERhdGEgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0Q291bnQoXCJcIik7XHJcbiAgICAgICAgICAgIHNldExpc3QoW1xyXG4gICAgICAgICAgICAgICAgLi4ubGlzdCxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/liKDpmaRcclxuICAgIGZ1bmN0aW9uIGxpQ2xpY2soZSkge1xyXG4gICAgICAgIGxpc3Quc3BsaWNlKGUsIDEpO1xyXG5cdFx0XHRcdHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgIH07XHJcbiAgICAvL+S/ruaUuVxyXG4gICAgZnVuY3Rpb24gc2V0Q291blRpbnAoZSl7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiK2UpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsaXN0W2VdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWU9XCJcIjtcclxuICAgICAgICB9XHJcblx0XHRcdH1cclxuXHRcdFx0Ly/lrozmiJBcclxuXHRcdFx0bGV0IGRlZiA9IGZhbHNlO1xyXG5cdFx0XHRmdW5jdGlvbiBzZXRMc2xpbWUoZSxpbmRleCkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUsaW5kZXgpO1xyXG5cdFx0XHRcdGlmIChkZWYgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGRlZiA9IHRydWU7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRkZWYgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJBcHBcIiB3PVwiODAlXCI+XHJcblx0XHRcdFx0PElucHV0IGVycm9yQm9yZGVyQ29sb3I9XCJyZWQuMzAwXCIgdmFsdWU9e2NvdW50fSBvbkNoYW5nZT17KGUpID0+IHNldENvdW50KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnRDb2xvcj1cInRlYWxcIiBzaXplPVwieHNcIiBvbkNsaWNrPXsoKSA9PiBhZGREYXRhKGNvdW50KX0+5re75YqgPC9CdXR0b24+XHJcblx0XHRcdFx0PGgxPjxicj48L2JyPjwvaDE+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dCBpZD17XCJpbnB1dFwiK2luZGV4fSBwbGFjZWhvbGRlcj17aXRlbX0gc2l6ZT1cInNtXCIgdz1cIjIwJVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94IHNpemU9XCJtZFwiIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBpZD17XCJjaGVja29ieFwifSBkZWZhdWx0SXNDaGVja2VkPXtkZWZ9IG9uQ2xpY2s9eyAoKSA9PiBzZXRMc2xpbWUoZGVmLGluZGV4KX0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtbZGVmP1wiZG9uZVwiOlwiXCJdfT57aXRlbX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9DaGVja2JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGg9XCIxLjc1cmVtXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gc2V0Q291blRpbnAoaW5kZXgpfT7kv67mlLk8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGg9XCIxLjc1cmVtXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KGUpID0+IGxpQ2xpY2soaW5kZXgpfT7liKDpmaQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxzdHlsZSBnbG9iYWwganN4PlxyXG5cdFx0XHRcdFx0e2BcclxuXHRcdFx0XHRcdFx0XHQuZG9uZXtcclxuXHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6ICNjY2M7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGB9XHJcblx0XHRcdFx0XHQ8L3N0eWxlPlxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXX0= */\n/*@ sourceURL=D:\\\\React\\\\pages\\\\todolist.js */"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb2xpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJsaXN0Iiwic2V0TGlzdCIsImFkZERhdGEiLCJ2YWx1ZSIsImxpQ2xpY2siLCJlIiwic3BsaWNlIiwic2V0Q291blRpbnAiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJkZWYiLCJzZXRMc2xpbWUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQWlCQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ05DLEtBRE07QUFBQSxNQUNDQyxRQUREOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVSRyxJQUZRO0FBQUEsTUFFRkMsT0FGRSxrQkFHYjs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLFFBQUlBLEtBQUosRUFBVztBQUNQSixjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FFLGFBQU8sNEhBQ0FELElBREEsSUFFSEcsS0FGRyxHQUFQO0FBSUg7QUFDSixHQVJELENBSmEsQ0FhYjs7O0FBQ0EsV0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDaEJMLFFBQUksQ0FBQ00sTUFBTCxDQUFZRCxDQUFaLEVBQWUsQ0FBZjtBQUNKSixXQUFPLENBQUMsaUhBQUlELElBQUwsRUFBUDtBQUNDOztBQUFBLEdBakJZLENBa0JiOztBQUNBLFdBQVNPLFdBQVQsQ0FBcUJGLENBQXJCLEVBQXVCO0FBQ25CLFFBQUlHLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQVFMLENBQWhDLENB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QVQsQ0FMRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTJCSDs7R0FqRVFqQixLOztLQUFBQSxLO0FBa0VNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44Y2E1ZWExZWVkY2U0MTI1NWY0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCBcIi4vdG9kb2xpc3QuY3NzXCJcclxuaW1wb3J0IHtcclxuICAgIFRoZW1lUHJvdmlkZXIsXHJcbiAgICBFZGl0YWJsZSwgRWRpdGFibGVQcmV2aWV3LCBFZGl0YWJsZUlucHV0LFxyXG4gICAgTW9kYWwsXHJcbiAgICBNb2RhbE92ZXJsYXksXHJcbiAgICBNb2RhbENvbnRlbnQsXHJcbiAgICBNb2RhbEhlYWRlcixcclxuICAgIE1vZGFsRm9vdGVyLFxyXG4gICAgTW9kYWxCb2R5LFxyXG4gICAgTW9kYWxDbG9zZUJ1dHRvbixcclxuICAgIHVzZURpc2Nsb3N1cmUsXHJcbiAgICBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLFxyXG4gICAgSW5wdXQsXHJcbiAgICBDaGVja2JveCxcclxuICAgIEJ1dHRvbixcclxuXHRcdEJveCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmZ1bmN0aW9uIEluZGV4KCkge1xyXG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZShcIlwiKTsgXHJcblx0XHRjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICAvL+WinuWKoOmhtemdouWGheWuuVxyXG4gICAgY29uc3QgYWRkRGF0YSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBzZXRDb3VudChcIlwiKTtcclxuICAgICAgICAgICAgc2V0TGlzdChbXHJcbiAgICAgICAgICAgICAgICAuLi5saXN0LFxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIoOmZpFxyXG4gICAgZnVuY3Rpb24gbGlDbGljayhlKSB7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoZSwgMSk7XHJcblx0XHRcdFx0c2V0TGlzdChbLi4ubGlzdF0pO1xyXG4gICAgfTtcclxuICAgIC8v5L+u5pS5XHJcbiAgICBmdW5jdGlvbiBzZXRDb3VuVGlucChlKXtcclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIrZSk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxpc3RbZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2V0TGlzdChbLi4ubGlzdF0pO1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZT1cIlwiO1xyXG4gICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvL+WujOaIkFxyXG5cdFx0XHRsZXQgZGVmID0gZmFsc2U7XHJcblx0XHRcdGZ1bmN0aW9uIHNldExzbGltZShlLGluZGV4KSB7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZSxpbmRleCk7XHJcblx0XHRcdFx0aWYgKGRlZiA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0ZGVmID0gdHJ1ZTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGRlZiA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIkFwcFwiIHc9XCI4MCVcIj5cclxuXHRcdFx0XHQ8SW5wdXQgZXJyb3JCb3JkZXJDb2xvcj1cInJlZC4zMDBcIiB2YWx1ZT17Y291bnR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q291bnQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cdFx0XHRcdDxCdXR0b24gdmFyaWFudENvbG9yPVwidGVhbFwiIHNpemU9XCJ4c1wiIG9uQ2xpY2s9eygpID0+IGFkZERhdGEoY291bnQpfT7mt7vliqA8L0J1dHRvbj5cclxuXHRcdFx0XHQ8aDE+PGJyPjwvYnI+PC9oMT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCb3gga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0IGlkPXtcImlucHV0XCIraW5kZXh9IHBsYWNlaG9sZGVyPXtpdGVtfSBzaXplPVwic21cIiB3PVwiMjAlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3ggc2l6ZT1cIm1kXCIgY29sb3JTY2hlbWU9XCJncmVlblwiIGlkPXtcImNoZWNrb2J4XCJ9IGRlZmF1bHRJc0NoZWNrZWQ9e2RlZn0gb25DbGljaz17ICgpID0+IHNldExzbGltZShkZWYsaW5kZXgpfSA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1tkZWY/XCJkb25lXCI6XCJcIl19PntpdGVtfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NoZWNrYm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VuVGlucChpbmRleCl9PuS/ruaUuTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoZSkgPT4gbGlDbGljayhpbmRleCl9PuWIoOmZpDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+XHJcblx0XHRcdFx0XHR7YFxyXG5cdFx0XHRcdFx0XHRcdC5kb25le1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogI2NjYztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YH1cclxuXHRcdFx0XHRcdDwvc3R5bGU+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=