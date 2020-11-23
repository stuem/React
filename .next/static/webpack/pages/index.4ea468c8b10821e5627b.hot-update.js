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
    setlTslim(Object(D_React_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(listms));
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
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u6B63\u5728\u8FDB\u884C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
          lineNumber: 59,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          size: "md",
          colorScheme: "green",
          isInvalid: true,
          onClick: function onClick(e) {
            return setlTslim(e.target.parentNode.outerText);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 12
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
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
          lineNumber: 63,
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
          lineNumber: 64,
          columnNumber: 11
        }, _this)]
      }, index, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
      children: "\u5DF2\u7ECF\u5B8C\u6210"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }, this), listms.map(function (item, index) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          size: "md",
          colorScheme: "green",
          isInvalid: true,
          onClick: function onClick(e) {
            return setlTslim(e.target.parentNode.outerText);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
            children: item
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 9
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 8
        }, _this)
      }, index, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdG9kb2xpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJsaXN0Iiwic2V0TGlzdCIsImxpc3RtcyIsInNldGxUc2xpbSIsImNvbnNvbGUiLCJsb2ciLCJhZGREYXRhIiwidmFsdWUiLCJsaUNsaWNrIiwiZSIsInNwbGljZSIsInNldENvdW5UaW5wIiwiaW5wdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGFyZ2V0IiwibWFwIiwiaXRlbSIsImluZGV4IiwicGFyZW50Tm9kZSIsIm91dGVyVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTs7QUFpQkEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEVBQUQsQ0FEckI7QUFBQSxNQUNOQyxLQURNO0FBQUEsTUFDQ0MsUUFERDs7QUFBQSxtQkFFV0Ysc0RBQVEsQ0FBQyxFQUFELENBRm5CO0FBQUEsTUFFTkcsSUFGTTtBQUFBLE1BRUFDLE9BRkE7O0FBQUEsbUJBR2VKLHNEQUFRLENBQUMsRUFBRCxDQUh2QjtBQUFBLE1BR05LLE1BSE07QUFBQSxNQUdFQyxTQUhGOztBQUliQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsTUFBWixFQUphLENBS2I7O0FBQ0EsTUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ3ZCLFFBQUlBLEtBQUosRUFBVztBQUNQUixjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FFLGFBQU8sNEhBQ0FELElBREEsSUFFSE8sS0FGRyxHQUFQO0FBSUg7QUFDSixHQVJELENBTmEsQ0FlYjs7O0FBQ0EsV0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDaEJULFFBQUksQ0FBQ1UsTUFBTCxDQUFZRCxDQUFaLEVBQWUsQ0FBZjtBQUNKUixXQUFPLENBQUMsaUhBQUlE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RUFBQyxJQUFmO0FBQW9CLHFCQUFXLEVBQUMsT0FBaEM7QUFBd0MsbUJBQVMsTUFBakQ7QUFBa0QsaUJBQU8sRUFBRSxpQkFBQ1QsQ0FBRDtBQUFBLG1CQUFPTixTQUFTLENBQUNNLENBQUMsQ0FBQ00sTUFBRixDQUFTSSxVQUFULENBQW9CQyxTQUFyQixDQUFoQjtBQUFBLFdBQTNEO0FBQUEsaUNBQ0M7QUFBQSxzQkFBT0g7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURELFNBQVVDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUEsS0FBWCxDQWxCRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZCSDs7R0E1RFF0QixLOztLQUFBQSxLO0FBNkRNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40ZWE0NjhjOGIxMDgyMWU1NjI3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnXHJcbmltcG9ydCB7XHJcbiAgICBUaGVtZVByb3ZpZGVyLFxyXG4gICAgRWRpdGFibGUsIEVkaXRhYmxlUHJldmlldywgRWRpdGFibGVJbnB1dCxcclxuICAgIE1vZGFsLFxyXG4gICAgTW9kYWxPdmVybGF5LFxyXG4gICAgTW9kYWxDb250ZW50LFxyXG4gICAgTW9kYWxIZWFkZXIsXHJcbiAgICBNb2RhbEZvb3RlcixcclxuICAgIE1vZGFsQm9keSxcclxuICAgIE1vZGFsQ2xvc2VCdXR0b24sXHJcbiAgICB1c2VEaXNjbG9zdXJlLFxyXG4gICAgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCxcclxuICAgIElucHV0LFxyXG4gICAgQ2hlY2tib3gsXHJcbiAgICBCdXR0b24sXHJcblx0XHRCb3gsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5mdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoXCJcIik7IFxyXG4gICAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xpc3Rtcywgc2V0bFRzbGltXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnNvbGUubG9nKGxpc3Rtcyk7XHJcbiAgICAvL+WinuWKoOmhtemdouWGheWuuVxyXG4gICAgY29uc3QgYWRkRGF0YSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBzZXRDb3VudChcIlwiKTtcclxuICAgICAgICAgICAgc2V0TGlzdChbXHJcbiAgICAgICAgICAgICAgICAuLi5saXN0LFxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+WIoOmZpFxyXG4gICAgZnVuY3Rpb24gbGlDbGljayhlKSB7XHJcbiAgICAgICAgbGlzdC5zcGxpY2UoZSwgMSk7XHJcblx0XHRcdFx0c2V0TGlzdChbLi4ubGlzdF0pO1xyXG5cdFx0XHRcdHNldGxUc2xpbShbLi4ubGlzdG1zXSk7XHJcbiAgICB9O1xyXG4gICAgLy/kv67mlLlcclxuICAgIGZ1bmN0aW9uIHNldENvdW5UaW5wKGUpe1xyXG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIitlKTtcclxuICAgICAgICB2YXIgdmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgbGlzdFtlXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBzZXRMaXN0KFsuLi5saXN0XSk7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlPVwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwiQXBwXCIgdz1cIjgwJVwiPlxyXG5cdFx0XHRcdDxJbnB1dCBlcnJvckJvcmRlckNvbG9yPVwicmVkLjMwMFwiIHZhbHVlPXtjb3VudH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRDb3VudChlLnRhcmdldC52YWx1ZSl9IC8+XHJcblx0XHRcdFx0PEJ1dHRvbiB2YXJpYW50Q29sb3I9XCJ0ZWFsXCIgc2l6ZT1cInhzXCIgb25DbGljaz17KCkgPT4gYWRkRGF0YShjb3VudCl9Pua3u+WKoDwvQnV0dG9uPlxyXG5cdFx0XHRcdDxoMT7mraPlnKjov5vooYw8L2gxPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJveCBrZXk9e2luZGV4fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8SW5wdXQgaWQ9e1wiaW5wdXRcIitpbmRleH0gcGxhY2Vob2xkZXI9e2l0ZW19IHNpemU9XCJzbVwiIHc9XCIyMCVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDaGVja2JveCBzaXplPVwibWRcIiBjb2xvclNjaGVtZT1cImdyZWVuXCIgaXNJbnZhbGlkIG9uQ2xpY2s9eyhlKSA9PiBzZXRsVHNsaW0oZS50YXJnZXQucGFyZW50Tm9kZS5vdXRlclRleHQpfSA+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57aXRlbX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9DaGVja2JveD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGg9XCIxLjc1cmVtXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KCkgPT4gc2V0Q291blRpbnAoaW5kZXgpfT7kv67mlLk8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGg9XCIxLjc1cmVtXCIgc2l6ZT1cInNtXCIgb25DbGljaz17KGUpID0+IGxpQ2xpY2soaW5kZXgpfT7liKDpmaQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdDxoMT7lt7Lnu4/lrozmiJA8L2gxPlxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGxpc3Rtcy5tYXAoKGl0ZW0saW5kZXgpID0+XHJcblx0XHRcdFx0XHRcdDxCb3gga2V5PXtpbmRleH0+XHJcblx0XHRcdFx0XHRcdFx0PENoZWNrYm94IHNpemU9XCJtZFwiIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIiBpc0ludmFsaWQgb25DbGljaz17KGUpID0+IHNldGxUc2xpbShlLnRhcmdldC5wYXJlbnROb2RlLm91dGVyVGV4dCl9ID5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntpdGVtfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L0NoZWNrYm94PlxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdClcclxuXHRcdFx0XHR9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=