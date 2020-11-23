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
      setList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      listms = _useState3[0],
      setlTslim = _useState3[1];

  console.log(listms); //增加页面内容

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
      lineNumber: 52,
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
      lineNumber: 53,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u6B63\u5728\u8FDB\u884C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
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
          lineNumber: 58,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          size: "md",
          colorScheme: "green",
          isInvalid: true,
          onClick: function onClick(e) {
            return setlTslim(e.parentNode.outerText);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
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
          lineNumber: 62,
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
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u5DF2\u7ECF\u5B8C\u6210"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, this);
}

_s(Index, "8holUeaMn2a8Taga8U5Ahyggez4=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb2xpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJsaXN0Iiwic2V0TGlzdCIsImxpc3RtcyIsInNldGxUc2xpbSIsImNvbnNvbGUiLCJsb2ciLCJhZGREYXRhIiwidmFsdWUiLCJsaUNsaWNrIiwiZSIsInNwbGljZSIsInNldENvdW5UaW5wIiwiaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImluZGV4IiwicGFyZW50Tm9kZSIsIm91dGVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7QUFpQkEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNOQyxLQURNO0FBQUEsTUFDQ0MsUUFERDs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxFQUFELENBRm5CO0FBQUEsTUFFTkcsSUFGTTtBQUFBLE1BRUFDLE9BRkE7O0FBQUEsbUJBR2VKLHNEQUFRLENBQUMsRUFBRCxDQUh2QjtBQUFBLE1BR05LLE1BSE07QUFBQSxNQUdFQyxTQUhGOztBQUliQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWixFQUphLENBS2I7O0FBQ0EsTUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLFFBQUlBLEtBQUosRUFBVztBQUNQUixjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FFLGFBQU8sNEhBQ0FELElBREEsSUFFSE8sS0FGRyxHQUFQO0FBSUg7QUFDSixHQVJELENBTmEsQ0FlYjs7O0FBQ0EsV0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDaEJULFFBQUksQ0FBQ1UsTUFBTCxDQUFZRCxDQUFaLEVBQWUsQ0FBZjtBQUNBUixXQUFPLENBQUMsaUhBQUlELElBQUwsRUFBUDtBQUNIOztBQUFBLEdBbkJZLENBb0JiOztBQUNBLFdBQVNXLFdBQVQsQ0FBcUJGLENBQXJCLEVBQXVCO0FBQ25CLFFBQUlHLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQVFMLENBQWhDLENBQVo7QUFDQSxRQUFJRixLQUFLLEdBQUdLLEtBQUssQ0FBQ0wsS0FBbEI7O0FBQ0EsUUFBSUEsS0FBSixFQUFXO0FBQ1BQLFVBQUksQ0FBQ1MsQ0FBRCxDQUFKLEdBQVVGLEtBQVY7QUFDQU4sYUFBTyxDQUFDLGlIQUFJRCxJQUFMLEVBQVA7QUFDQVksV0FBSyxDQUFDTCxLQUFOLEdBQVksRUFBWjtBQUNIO0FBQ0Y7O0FBQ0gsc0JBQ0kscUVBQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFxQixLQUFDLEVBQUMsS0FBdkI7QUFBQSw0QkFDSixxRUFBQyxxREFBRDtBQUFPLHNCQUFnQixFQUFDLFNBQXhCO0FBQWtDLFdBQUssRUFBRVQsS0FBekM7QUFBZ0QsY0FBUSxFQUFFLGtCQUFDVyxDQUFEO0FBQUEsZUFBT1YsUUFBUSxDQUFDVSxDQUFDLENBQUNNLE1BQUYsQ0FBU1IsS0FBVixDQUFmO0FBQUE7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURJLGVBRUoscUVBQUMsc0RBQUQ7QUFBUSxrQkFBWSxFQUFDLE1BQXJCO0FBQTRCLFVBQUksRUFBQyxJQUFqQztBQUFzQyxhQUFPLEVBQUU7QUFBQSxlQUFNRCxPQUFPLENBQUNSLEtBQUQsQ0FBYjtBQUFBLE9BQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkksZUFHSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhJLEVBS0ZFLElBQUksQ0FBQ2dCLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSwwQkFDUCxxRUFBQyxtREFBRDtBQUFBLGdDQUNFLHFFQUFDLHFEQUFEO0FBQU8sWUFBRSxFQUFFLFVBQVFBLEtBQW5CO0FBQTBCLHFCQUFXLEVBQUVELElBQXZDO0FBQTZDLGNBQUksRUFBQyxJQUFsRDtBQUF1RCxXQUFDLEVBQUM7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLHdEQUFEO0FBQVUsY0FBSSxFQUFDLElBQWY7QUFBb0IscUJBQVcsRUFBQyxPQUFoQztBQUF3QyxtQkFBUyxNQUFqRDtBQUFrRCxpQkFBTyxFQUFFLGlCQUFDUixDQUFEO0FBQUEsbUJBQU9OLFNBQVMsQ0FBQ00sQ0FBQyxDQUFDVSxVQUFGLENBQWFDLFNBQWQsQ0FBaEI7QUFBQSxXQUEzRDtBQUFBLGlDQUNDO0FBQUEsc0JBQU9IO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFLRSxxRUFBQyxzREFBRDtBQUFRLFdBQUMsRUFBQyxTQUFWO0FBQW9CLGNBQUksRUFBQyxJQUF6QjtBQUE4QixpQkFBTyxFQUFFO0FBQUEsbUJBQU1OLFdBQVcsQ0FBQ08sS0FBRCxDQUFqQjtBQUFBLFdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUUscUVBQUMsc0RBQUQ7QUFBUSxXQUFDLEVBQUMsU0FBVjtBQUFvQixjQUFJLEVBQUMsSUFBekI7QUFBOEIsaUJBQU8sRUFBRSxpQkFBQ1QsQ0FBRDtBQUFBLG1CQUFPRCxPQUFPLENBQUNVLEtBQUQsQ0FBZDtBQUFBLFdBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUEsU0FBVUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRE87QUFBQSxLQUFULENBTEUsZUFnQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Qkg7O0dBM0RRdEIsSzs7S0FBQUEsSztBQTRETUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2VmZDllOThjMDNhYTkyMmFiZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgJy4vaW5kZXguY3NzJ1xyXG5pbXBvcnQge1xyXG4gICAgVGhlbWVQcm92aWRlcixcclxuICAgIEVkaXRhYmxlLCBFZGl0YWJsZVByZXZpZXcsIEVkaXRhYmxlSW5wdXQsXHJcbiAgICBNb2RhbCxcclxuICAgIE1vZGFsT3ZlcmxheSxcclxuICAgIE1vZGFsQ29udGVudCxcclxuICAgIE1vZGFsSGVhZGVyLFxyXG4gICAgTW9kYWxGb290ZXIsXHJcbiAgICBNb2RhbEJvZHksXHJcbiAgICBNb2RhbENsb3NlQnV0dG9uLFxyXG4gICAgdXNlRGlzY2xvc3VyZSxcclxuICAgIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsXHJcbiAgICBJbnB1dCxcclxuICAgIENoZWNrYm94LFxyXG4gICAgQnV0dG9uLFxyXG5cdFx0Qm94LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKFwiXCIpOyBcclxuICAgIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsaXN0bXMsIHNldGxUc2xpbV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0bXMpO1xyXG4gICAgLy/lop7liqDpobXpnaLlhoXlrrlcclxuICAgIGNvbnN0IGFkZERhdGEgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgc2V0Q291bnQoXCJcIik7XHJcbiAgICAgICAgICAgIHNldExpc3QoW1xyXG4gICAgICAgICAgICAgICAgLi4ubGlzdCxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIF0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy/liKDpmaRcclxuICAgIGZ1bmN0aW9uIGxpQ2xpY2soZSkge1xyXG4gICAgICAgIGxpc3Quc3BsaWNlKGUsIDEpO1xyXG4gICAgICAgIHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgIH07XHJcbiAgICAvL+S/ruaUuVxyXG4gICAgZnVuY3Rpb24gc2V0Q291blRpbnAoZSl7XHJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiK2UpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsaXN0W2VdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHNldExpc3QoWy4uLmxpc3RdKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWU9XCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJBcHBcIiB3PVwiODAlXCI+XHJcblx0XHRcdFx0PElucHV0IGVycm9yQm9yZGVyQ29sb3I9XCJyZWQuMzAwXCIgdmFsdWU9e2NvdW50fSBvbkNoYW5nZT17KGUpID0+IHNldENvdW50KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuXHRcdFx0XHQ8QnV0dG9uIHZhcmlhbnRDb2xvcj1cInRlYWxcIiBzaXplPVwieHNcIiBvbkNsaWNrPXsoKSA9PiBhZGREYXRhKGNvdW50KX0+5re75YqgPC9CdXR0b24+XHJcblx0XHRcdFx0PGgxPuato+WcqOi/m+ihjDwvaDE+XHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Qm94IGtleT17aW5kZXh9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJbnB1dCBpZD17XCJpbnB1dFwiK2luZGV4fSBwbGFjZWhvbGRlcj17aXRlbX0gc2l6ZT1cInNtXCIgdz1cIjIwJVwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PENoZWNrYm94IHNpemU9XCJtZFwiIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBpc0ludmFsaWQgb25DbGljaz17KGUpID0+IHNldGxUc2xpbShlLnBhcmVudE5vZGUub3V0ZXJUZXh0KX0gPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2l0ZW19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQ2hlY2tib3g+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBoPVwiMS43NXJlbVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eygpID0+IHNldENvdW5UaW5wKGluZGV4KX0+5L+u5pS5PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBoPVwiMS43NXJlbVwiIHNpemU9XCJzbVwiIG9uQ2xpY2s9eyhlKSA9PiBsaUNsaWNrKGluZGV4KX0+5Yig6ZmkPC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQ8aDE+5bey57uP5a6M5oiQPC9oMT5cclxuXHRcdFx0XHR7Lyoge1xyXG5cdFx0XHRcdFx0bGlzdG1zLm1hcCgoaXRlbSxpbmRleCkgPT5cclxuXHRcdFx0XHRcdDxCb3gga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdDxDaGVja2JveCBzaXplPVwibWRcIiBjb2xvclNjaGVtZT1cImdyZWVuXCIgaXNJbnZhbGlkIG9uQ2xpY2s9eyhlKSA9PiBzZXRsVHNsaW0oZSl9ID5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvQ2hlY2tib3g+XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9ICovfVxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiXSwic291cmNlUm9vdCI6IiJ9