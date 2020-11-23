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


  function setLslime(item, index) {
    var listMtop;
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
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u6B63\u5728\u8FDB\u884C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          size: "md",
          colorScheme: "green",
          isInvalid: true,
          onClick: function onClick() {
            return setLslime(item, index);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
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
          lineNumber: 65,
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
          lineNumber: 66,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u5DF2\u7ECF\u5B8C\u6210"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb2xpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJsaXN0Iiwic2V0TGlzdCIsImFkZERhdGEiLCJ2YWx1ZSIsImxpQ2xpY2siLCJlIiwic3BsaWNlIiwic2V0Q291blRpbnAiLCJpbnB1dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzZXRMc2xpbWUiLCJpdGVtIiwiaW5kZXgiLCJsaXN0TXRvcCIsInRhcmdldCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7QUFpQkEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNOQyxLQURNO0FBQUEsTUFDQ0MsUUFERDs7QUFBQSxtQkFFU0Ysc0RBQVEsQ0FBQyxFQUFELENBRmpCO0FBQUEsTUFFUkcsSUFGUTtBQUFBLE1BRUZDLE9BRkUsa0JBSWI7OztBQUNBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUN2QixRQUFJQSxLQUFKLEVBQVc7QUFDUEosY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNBRSxhQUFPLDRIQUNBRCxJQURBLElBRUhHLEtBRkcsR0FBUDtBQUlIO0FBQ0osR0FSRCxDQUxhLENBY2I7OztBQUNBLFdBQVNDLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ2hCTCxRQUFJLENBQUNNLE1BQUwsQ0FBWUQsQ0FBWixFQUFlLENBQWY7QUFDSkosV0FBTyxDQUFDLGlIQUFJRCxJQUFMLEVBQVA7QUFDQzs7QUFBQSxHQWxCWSxDQW1CYjs7QUFDQSxXQUFTTyxXQUFULENBQXFCRixDQUFyQixFQUF1QjtBQUNuQixRQUFJRyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUFRTCxDQUFoQyxDQUFaO0FBQ0EsUUFBSUYsS0FBSyxHQUFHSyxLQUFLLENBQUNMLEtBQWxCOztBQUNBLFFBQUlBLEtBQUosRUFBVztBQUNQSCxVQUFJLENBQUNLLENBQUQsQ0FBSixHQUFVRixLQUFWO0FBQ0FGLGFBQU8sQ0FBQyxpSEFBSUQsSUFBTCxFQUFQO0FBQ0FRLFdBQUssQ0FBQ0wsS0FBTixHQUFZLEVBQVo7QUFDSDtBQUNMLEdBNUJhLENBNkJkOzs7QUFDQSxXQUFTUSxTQUFULENBQW1CQyxJQUFuQixFQUF3QkMsS0FBeEIsRUFBK0I7QUFDOUIsUUFBSUMsUUFBSjtBQUNBOztBQUNBLHNCQUNJLHFFQUFDLG1EQUFEO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBcUIsS0FBQyxFQUFDLEtBQXZCO0FBQUEsNEJBQ0oscUVBQUMscURBQUQ7QUFBTyxzQkFBZ0IsRUFBQyxTQUF4QjtBQUFrQyxXQUFLLEVBQUVoQixLQUF6QztBQUFnRCxjQUFRLEVBQUUsa0JBQUNPLENBQUQ7QUFBQSxlQUFPTixRQUFRLENBQUNNLENBQUMsQ0FBQ1UsTUFBRixDQUFTWixLQUFWLENBQWY7QUFBQTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREksZUFFSixxRUFBQyxzREFBRDtBQUFRLGtCQUFZLEVBQUMsTUFBckI7QUFBNEIsVUFBSSxFQUFDLElBQWpDO0FBQXNDLGFBQU8sRUFBRTtBQUFBLGVBQU1ELE9BQU8sQ0FBQ0osS0FBRCxDQUFiO0FBQUEsT0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSSxlQUdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEksRUFLRkUsSUFBSSxDQUFDZ0IsR0FBTCxDQUFTLFVBQUNKLElBQUQsRUFBT0MsS0FBUDtBQUFBLDBCQUNQLHFFQUFDLG1EQUFEO0FBQUEsZ0NBQ0UscUVBQUMscURBQUQ7QUFBTyxZQUFFLEVBQUUsVUFBUUEsS0FBbkI7QUFBMEIscUJBQVcsRUFBRUQsSUFBdkM7QUFBNkMsY0FBSSxFQUFDLElBQWxEO0FBQXVELFdBQUMsRUFBQztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBVSxjQUFJLEVBQUMsSUFBZjtBQUFvQixxQkFBVyxFQUFDLE9BQWhDO0FBQXdDLG1CQUFTLE1BQWpEO0FBQWtELGlCQUFPLEVBQUc7QUFBQSxtQkFBTUQsU0FBUyxDQUFDQyxJQUFELEVBQU1DLEtBQU4sQ0FBZjtBQUFBLFdBQTVEO0FBQUEsaUNBQ0M7QUFBQSxzQkFBT0Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFLHFFQUFDLHNEQUFEO0FBQVEsV0FBQyxFQUFDLFNBQVY7QUFBb0IsY0FBSSxFQUFDLElBQXpCO0FBQThCLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUwsV0FBVyxDQUFDTSxLQUFELENBQWpCO0FBQUEsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEYsZUFNRSxxRUFBQyxzREFBRDtBQUFRLFdBQUMsRUFBQyxTQUFWO0FBQW9CLGNBQUksRUFBQyxJQUF6QjtBQUE4QixpQkFBTyxFQUFFLGlCQUFDUixDQUFEO0FBQUEsbUJBQU9ELE9BQU8sQ0FBQ1MsS0FBRCxDQUFkO0FBQUEsV0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQSxTQUFVQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVQsQ0FMRSxlQWdCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZCSDs7R0E5RFFqQixLOztLQUFBQSxLO0FBK0RNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZDMyZmU5NWQyNmRkYWU5NTEwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsIEVkaXRhYmxlUHJldmlldywgRWRpdGFibGVJbnB1dCxcclxuICAgIE1vZGFsLFxyXG4gICAgTW9kYWxPdmVybGF5LFxyXG4gICAgTW9kYWxDb250ZW50LFxyXG4gICAgTW9kYWxIZWFkZXIsXHJcbiAgICBNb2RhbEZvb3RlcixcclxuICAgIE1vZGFsQm9keSxcclxuICAgIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgICB1c2VEaXNjbG9zdXJlLFxyXG4gICAgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCxcclxuICAgIElucHV0LFxyXG4gICAgQ2hlY2tib3gsXHJcbiAgICBCdXR0b24sXHJcblx0XHRCb3gsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoXCJcIik7IFxyXG5cdFx0Y29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cdFx0XHJcbiAgICAvL+WinuWKoOmhtemdouWGheWuuVxyXG4gICAgY29uc3QgYWRkRGF0YSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBzZXRDb3VudChcIlwiKTtcclxuICAgICAgICAgICAgc2V0TGlzdChbXHJcbiAgICAgICAgICAgICAgICAuLi5saXN0LFxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIoOmZpFxyXG4gICAgZnVuY3Rpb24gbGlDbGljayhlKSB7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoZSwgMSk7XHJcblx0XHRcdFx0c2V0TGlzdChbLi4ubGlzdF0pO1xyXG4gICAgfTtcclxuICAgIC8v5L+u5pS5XHJcbiAgICBmdW5jdGlvbiBzZXRDb3VuVGlucChlKXtcclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0XCIrZSk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxpc3RbZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgc2V0TGlzdChbLi4ubGlzdF0pO1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZT1cIlwiO1xyXG4gICAgICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvL+WujOaIkFxyXG5cdFx0XHRmdW5jdGlvbiBzZXRMc2xpbWUoaXRlbSxpbmRleCkge1xyXG5cdFx0XHRcdGxldCBsaXN0TXRvcFxyXG5cdFx0XHR9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiQXBwXCIgdz1cIjgwJVwiPlxyXG5cdFx0XHRcdDxJbnB1dCBlcnJvckJvcmRlckNvbG9yPVwicmVkLjMwMFwiIHZhbHVlPXtjb3VudH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3VudChlLnRhcmdldC52YWx1ZSl9IC8+XHJcblx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJ0ZWFsXCIgc2l6ZT1cInhzXCIgb25DbGljaz17KCkgPT4gYWRkRGF0YShjb3VudCl9Pua3u+WKoDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxoMT7mraPlnKjov5vooYw8L2gxPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXQgaWQ9e1wiaW5wdXRcIitpbmRleH0gcGxhY2Vob2xkZXI9e2l0ZW19IHNpemU9XCJzbVwiIHc9XCIyMCVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveCBzaXplPVwibWRcIiBjb2xvclNjaGVtZT1cImdyZWVuXCIgaXNJbnZhbGlkIG9uQ2xpY2s9eyAoKSA9PiBzZXRMc2xpbWUoaXRlbSxpbmRleCl9ID5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NoZWNrYm94PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoKSA9PiBzZXRDb3VuVGlucChpbmRleCl9PuS/ruaUuTwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b24gaD1cIjEuNzVyZW1cIiBzaXplPVwic21cIiBvbkNsaWNrPXsoZSkgPT4gbGlDbGljayhpbmRleCl9PuWIoOmZpDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0PGgxPuW3sue7j+WujOaIkDwvaDE+XHJcblx0XHRcdFx0ey8qIHtcclxuXHRcdFx0XHRcdGxpc3RNdG9wLm1hcCgoaXRlbSxpbmRleCkgPT5cclxuXHRcdFx0XHRcdFx0PEJveCBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHQ8Q2hlY2tib3ggc2l6ZT1cIm1kXCIgY29sb3JTY2hlbWU9XCJncmVlblwiIGlzSW52YWxpZCBvbkNsaWNrPXsoZSkgPT4gc2V0bFRzbGltKGUudGFyZ2V0LnBhcmVudE5vZGUub3V0ZXJUZXh0KX0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2l0ZW19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2hlY2tib3g+XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH0gKi99XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=