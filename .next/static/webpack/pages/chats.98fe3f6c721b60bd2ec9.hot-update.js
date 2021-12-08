"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chats",{

/***/ "./pages/chats.js":
/*!************************!*\
  !*** ./pages/chats.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Chats; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/rupeshmaharjan/Desktop/Project/nextjs/nextjs-chat-tutorial-main/pages/chats.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar ChatEngine = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-chat-engine_dist_index_modern_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")).then(function (module) {\n    return module.ChatEngine;\n  });\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")];\n    },\n    modules: [\"chats.js -> \" + 'react-chat-engine']\n  }\n});\n_c2 = ChatEngine;\nvar MessageFormSocial = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-chat-engine_dist_index_modern_js\").then(__webpack_require__.bind(__webpack_require__, /*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")).then(function (module) {\n    return module.MessageFormSocial;\n  });\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-chat-engine */ \"./node_modules/react-chat-engine/dist/index.modern.js\")];\n    },\n    modules: [\"chats.js -> \" + 'react-chat-engine']\n  }\n});\n_c4 = MessageFormSocial;\nfunction Chats() {\n  _s();\n\n  var _this = this;\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context),\n      username = _useContext.username,\n      secret = _useContext.secret;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      showChat = _useState[0],\n      setShowChat = _useState[1];\n\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (typeof document !== null) {\n      setShowChat(true);\n    }\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (username.length === 0 || secret.length === 0) router.push('/');\n  });\n  if (!showChat) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 25\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"button\", {\n      style: {\n        \"float\": 'right'\n      },\n      children: \"Log out\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"background\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"shadow\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(ChatEngine, {\n          height: \"calc(100vh-200px)\",\n          projectID: \"dec6079b-895c-44a9-bd37-935439bccb9b\",\n          userName: username,\n          userSecret: secret,\n          renderNewMessageForm: function renderNewMessageForm() {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(MessageFormSocial, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 41\n            }, _this);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Chats, \"gQ5m4oMHq+GSYj2OIN+DW4vEenQ=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c5 = Chats;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"ChatEngine$dynamic\");\n$RefreshReg$(_c2, \"ChatEngine\");\n$RefreshReg$(_c3, \"MessageFormSocial$dynamic\");\n$RefreshReg$(_c4, \"MessageFormSocial\");\n$RefreshReg$(_c5, \"Chats\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGF0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNTyxVQUFVLEdBQUdELG1EQUFPLE1BQUM7QUFBQSxTQUN6QixtT0FBNEJFLElBQTVCLENBQWlDLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNGLFVBQW5CO0FBQUEsR0FBakMsQ0FEeUI7QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUNqQixnRkFEaUI7QUFBQTtBQUFBLCtCQUNqQixtQkFEaUI7QUFBQTtBQUFBLEVBQTFCO01BQU1BO0FBSU4sSUFBTUcsaUJBQWlCLEdBQUdKLG1EQUFPLE9BQUM7QUFBQSxTQUNoQyxtT0FBNEJFLElBQTVCLENBQWlDLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNDLGlCQUFuQjtBQUFBLEdBQWpDLENBRGdDO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FDeEIsZ0ZBRHdCO0FBQUE7QUFBQSwrQkFDeEIsbUJBRHdCO0FBQUE7QUFBQSxFQUFqQztNQUFNQTtBQUlTLFNBQVNDLEtBQVQsR0FBaUI7QUFBQTs7QUFBQTs7QUFDOUIsb0JBQTZCVixpREFBVSxDQUFDRyw2Q0FBRCxDQUF2QztBQUFBLE1BQVFRLFFBQVIsZUFBUUEsUUFBUjtBQUFBLE1BQWtCQyxNQUFsQixlQUFrQkEsTUFBbEI7O0FBQ0Esa0JBQWdDViwrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7QUFBQSxNQUFPVyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLE1BQU0sR0FBR1gsa0VBQVMsRUFBeEI7QUFFQUgsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxPQUFPZSxRQUFQLEtBQW9CLElBQXhCLEVBQThCO0FBQzVCRixNQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0Q7QUFDRixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFiLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlVLFFBQVEsQ0FBQ00sTUFBVCxLQUFvQixDQUFwQixJQUF5QkwsTUFBTSxDQUFDSyxNQUFQLEtBQWtCLENBQS9DLEVBQWtERixNQUFNLENBQUNHLElBQVAsQ0FBWSxHQUFaO0FBQ25ELEdBRlEsQ0FBVDtBQUlBLE1BQUksQ0FBQ0wsUUFBTCxFQUFlLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVmLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUSxXQUFLLEVBQUU7QUFBRSxpQkFBTztBQUFULE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUssZUFBUyxFQUFDLFlBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLCtCQUNFLDhEQUFDLFVBQUQ7QUFDRSxnQkFBTSxFQUFDLG1CQURUO0FBRUUsbUJBQVMsRUFBQyxzQ0FGWjtBQUdFLGtCQUFRLEVBQUVGLFFBSFo7QUFJRSxvQkFBVSxFQUFFQyxNQUpkO0FBS0UsOEJBQW9CLEVBQUU7QUFBQSxnQ0FBTSw4REFBQyxpQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFOO0FBQUE7QUFMeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkY7QUFBQSxrQkFERjtBQWdCRDs7R0FqQ3VCRjtVQUdQTjs7O01BSE9NIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYXRzLmpzP2FhYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5cbmNvbnN0IENoYXRFbmdpbmUgPSBkeW5hbWljKCgpID0+XG4gIGltcG9ydCgncmVhY3QtY2hhdC1lbmdpbmUnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5DaGF0RW5naW5lKVxuKTtcblxuY29uc3QgTWVzc2FnZUZvcm1Tb2NpYWwgPSBkeW5hbWljKCgpID0+XG4gIGltcG9ydCgncmVhY3QtY2hhdC1lbmdpbmUnKS50aGVuKChtb2R1bGUpID0+IG1vZHVsZS5NZXNzYWdlRm9ybVNvY2lhbClcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRzKCkge1xuICBjb25zdCB7IHVzZXJuYW1lLCBzZWNyZXQgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IFtzaG93Q2hhdCwgc2V0U2hvd0NoYXRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHNldFNob3dDaGF0KHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHVzZXJuYW1lLmxlbmd0aCA9PT0gMCB8fCBzZWNyZXQubGVuZ3RoID09PSAwKSByb3V0ZXIucHVzaCgnLycpO1xuICB9KTtcblxuICBpZiAoIXNob3dDaGF0KSByZXR1cm4gPGRpdiAvPjtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19PkxvZyBvdXQ8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiYWNrZ3JvdW5kJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NoYWRvdyc+XG4gICAgICAgICAgPENoYXRFbmdpbmVcbiAgICAgICAgICAgIGhlaWdodD0nY2FsYygxMDB2aC0yMDBweCknXG4gICAgICAgICAgICBwcm9qZWN0SUQ9J2RlYzYwNzliLTg5NWMtNDRhOS1iZDM3LTkzNTQzOWJjY2I5YidcbiAgICAgICAgICAgIHVzZXJOYW1lPXt1c2VybmFtZX1cbiAgICAgICAgICAgIHVzZXJTZWNyZXQ9e3NlY3JldH1cbiAgICAgICAgICAgIHJlbmRlck5ld01lc3NhZ2VGb3JtPXsoKSA9PiA8TWVzc2FnZUZvcm1Tb2NpYWwgLz59XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJkeW5hbWljIiwiQ2hhdEVuZ2luZSIsInRoZW4iLCJtb2R1bGUiLCJNZXNzYWdlRm9ybVNvY2lhbCIsIkNoYXRzIiwidXNlcm5hbWUiLCJzZWNyZXQiLCJzaG93Q2hhdCIsInNldFNob3dDaGF0Iiwicm91dGVyIiwiZG9jdW1lbnQiLCJsZW5ndGgiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chats.js\n");

/***/ })

});