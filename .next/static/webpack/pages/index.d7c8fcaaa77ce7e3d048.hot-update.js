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
  } //完成


  function setLslime(id, index) {
    list.forEach(function (item) {
      console.log(item);
    }); // let checkobx = document.getElementById("checkobx");
    // console.log(item,index);
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
      lineNumber: 58,
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
      lineNumber: 59,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u6B63\u5728\u8FDB\u884C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
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
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          size: "md",
          colorScheme: "green",
          id: "checkobx",
          isInvalid: true,
          onClick: function onClick() {
            return setLslime(item, index);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
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
          lineNumber: 68,
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
          lineNumber: 69,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u5DF2\u7ECF\u5B8C\u6210"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb2xpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJsaXN0Iiwic2V0TGlzdCIsImFkZERhdGEiLCJ2YWx1ZSIsImxpQ2xpY2siLCJlIiwic3BsaWNlIiwic2V0Q291blRpbnAiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRMc2xpbWUiLCJpZCIsImluZGV4IiwiZm9yRWFjaCIsIml0ZW0iLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBOztBQWlCQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ05DLEtBRE07QUFBQSxNQUNDQyxRQUREOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVSRyxJQUZRO0FBQUEsTUFFRkMsT0FGRSxrQkFHYjs7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLFFBQUlBLEtBQUosRUFBVztBQUNQSixjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FFLGFBQU8sNEhBQ0FELElBREEsSUFFSEcsS0FGRyxHQUFQO0FBSUg7QUFDSixHQVJELENBSmEsQ0FhYjs7O0FBQ0EsV0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDaEJMLFFBQUksQ0FBQ00sTUFBTCxDQUFZRCxDQUFaLEVBQWUsQ0FBZjtBQUNKSixXQUFPLENBQUMsaUhBQUlELElBQUwsRUFBUDtBQUNDOztBQUFBLEdBakJZLENBa0JiOztBQUNBLFdBQVNPLFdBQVQsQ0FBcUJGLENBQXJCLEVBQXVCO0FBQ25CLFFBQUlHLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQVFMLENB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ZDdjOGZjYWFhNzdjZTdlM2QwNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgJy4vaW5kZXguY3NzJ1xyXG5pbXBvcnQge1xyXG4gICAgVGhlbWVQcm92aWRlcixcclxuICAgIEVkaXRhYmxlLCBFZGl0YWJsZVByZXZpZXcsIEVkaXRhYmxlSW5wdXQsXHJcbiAgICBNb2RhbCxcclxuICAgIE1vZGFsT3ZlcmxheSxcclxuICAgIE1vZGFsQ29udGVudCxcclxuICAgIE1vZGFsSGVhZGVyLFxyXG4gICAgTW9kYWxGb290ZXIsXHJcbiAgICBNb2RhbEJvZHksXHJcbiAgICBNb2RhbENsb3NlQnV0dG9uLFxyXG4gICAgdXNlRGlzY2xvc3VyZSxcclxuICAgIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsXHJcbiAgICBJbnB1dCxcclxuICAgIENoZWNrYm94LFxyXG4gICAgQnV0dG9uLFxyXG5cdFx0Qm94LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFwiXCIpOyBcclxuXHRcdGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIC8v5aKe5Yqg6aG16Z2i5YaF5a65XHJcbiAgICBjb25zdCBhZGREYXRhID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHNldENvdW50KFwiXCIpO1xyXG4gICAgICAgICAgICBzZXRMaXN0KFtcclxuICAgICAgICAgICAgICAgIC4uLmxpc3QsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICBdKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5Yig6ZmkXHJcbiAgICBmdW5jdGlvbiBsaUNsaWNrKGUpIHtcclxuICAgICAgICBsaXN0LnNwbGljZShlLCAxKTtcclxuXHRcdFx0XHRzZXRMaXN0KFsuLi5saXN0XSk7XHJcbiAgICB9O1xyXG4gICAgLy/kv67mlLlcclxuICAgIGZ1bmN0aW9uIHNldENvdW5UaW5wKGUpe1xyXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIitlKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgbGlzdFtlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBzZXRMaXN0KFsuLi5saXN0XSk7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlPVwiXCI7XHJcbiAgICAgICAgfVxyXG5cdFx0XHR9XHJcblx0XHRcdC8v5a6M5oiQXHJcblx0XHRcdGZ1bmN0aW9uIHNldExzbGltZShpZCxpbmRleCkge1xyXG5cdFx0XHRcdGxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gbGV0IGNoZWNrb2J4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGVja29ieFwiKTtcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhpdGVtLGluZGV4KTtcclxuXHRcdFx0fVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIkFwcFwiIHc9XCI4MCVcIj5cclxuXHRcdFx0XHQ8SW5wdXQgZXJyb3JCb3JkZXJDb2xvcj1cInJlZC4zMDBcIiB2YWx1ZT17Y291bnR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q291bnQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG5cdFx0XHRcdDxCdXR0b24gdmFyaWFudENvbG9yPVwidGVhbFwiIHNpemU9XCJ4c1wiIG9uQ2xpY2s9eygpID0+IGFkZERhdGEoY291bnQpfT7mt7vliqA8L0J1dHRvbj5cclxuXHRcdFx0XHQ8aDE+5q2j5Zyo6L+b6KGMPC9oMT5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdGxpc3QubWFwKChpdGVtLCBpbmRleCkgPT5cclxuXHRcdFx0XHRcdFx0XHRcdDxCb3gga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PElucHV0IGlkPXtcImlucHV0XCIraW5kZXh9IHBsYWNlaG9sZGVyPXtpdGVtfSBzaXplPVwic21cIiB3PVwiMjAlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3ggc2l6ZT1cIm1kXCIgY29sb3JTY2hlbWU9XCJncmVlblwiIGlkPXtcImNoZWNrb2J4XCJ9IGlzSW52YWxpZCBvbkNsaWNrPXsgKCkgPT4gc2V0THNsaW1lKGl0ZW0saW5kZXgpfSA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9DaGVja2JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGg9XCIxLjc1cmVtXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gc2V0Q291blRpbnAoaW5kZXgpfT7kv67mlLk8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGg9XCIxLjc1cmVtXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KGUpID0+IGxpQ2xpY2soaW5kZXgpfT7liKDpmaQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxoMT7lt7Lnu4/lrozmiJA8L2gxPlxyXG5cdFx0XHRcdFx0ey8qIDxCb3gga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0PENoZWNrYm94IHNpemU9XCJtZFwiIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBpc0ludmFsaWQgPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2l0ZW19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2hlY2tib3g+XHJcblx0XHRcdFx0XHQ8L0JveD4gKi99XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=