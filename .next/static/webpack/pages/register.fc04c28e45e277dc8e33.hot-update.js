"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/rupeshmaharjan/Desktop/Project/nextjs/nextjs-chat-tutorial-main/pages/register.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar demo = {\n  username: 'adam_la_morre',\n  first_name: 'Adam',\n  last_name: 'La Morre',\n  secret: 'pass1234',\n  custom_json: {\n    high_score: 2000\n  }\n};\nvar __N_SSP = true;\nfunction Register(_ref) {\n  _s();\n\n  var chat_key = _ref.chat_key;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      firstName = _useState2[0],\n      setFirstName = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      lastName = _useState3[0],\n      setLastName = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      secret = _useState4[0],\n      setSecret = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      confirmSecret = _useState5[0],\n      setConfirmSecret = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      misMatch = _useState6[0],\n      setMisMatch = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      error = _useState7[0],\n      setError = _useState7[1];\n\n  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault();\n\n    if (secret !== confirmSecret) {\n      setMisMatch(true);\n      return;\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post('https://api.chatengine.io/users/', {\n      username: username,\n      first_name: firstName,\n      last_name: lastName,\n      secret: secret\n    }, {\n      headers: {\n        'PRIVATE-KEY': chat_key\n      }\n    }).then(function (r) {\n      return router.push('/');\n    })[\"catch\"](function (err) {\n      return setError(true);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    className: \"background\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"auth-reg-container\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"form\", {\n        className: \"auth-form\",\n        onSubmit: onSubmit,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"auth-title\",\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"input-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n            placeholder: \"Username\",\n            className: \"text-input\",\n            onChange: function onChange(e) {\n              return setUsername(e.target.value);\n            },\n            required: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"input-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n            placeholder: \"First Name\",\n            className: \"text-input\",\n            onChange: function onChange(e) {\n              return setFirstName(e.target.value);\n            },\n            required: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"input-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n            placeholder: \"Last Name\",\n            className: \"text-input\",\n            onChange: function onChange(e) {\n              return setLastName(e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"input-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n            placeholder: \"Password\",\n            className: \"text-input\",\n            onChange: function onChange(e) {\n              return setSecret(e.target.value);\n            },\n            onFocus: function onFocus() {\n              return setMisMatch(false);\n            },\n            required: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          className: \"input-container\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"input\", {\n            placeholder: \"Confirm Password\",\n            className: \"text-input\",\n            onChange: function onChange(e) {\n              return setConfirmSecret(e.target.value);\n            },\n            onFocus: function onFocus() {\n              return setMisMatch(false);\n            },\n            required: true\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 87,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          className: \"error\",\n          children: \"Error during registration\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 21\n        }, this), misMatch && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n          className: \"error\",\n          children: \"Password MisMatch\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 24\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          className: \"submit-button\",\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Register, \"JukgFjT1vqNCe/mVIgzb9uDUt+M=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = Register;\n\nvar _c;\n\n$RefreshReg$(_c, \"Register\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBT1AsZ0JBQWdCLENBQUNPLENBQUMsQ0FBQ1EsTUFBRixDQUFTQyxLQUFWLENBQXZCO0FBQUEsYUFIWjtBQUlFLG1CQUFPLEVBQUU7QUFBQSxxQkFBTWQsV0FBVyxDQUFDLEtBQUQsQ0FBakI7QUFBQSxhQUpYO0FBS0Usb0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQ0YsRUEyQ0dDLEtBQUssaUJBQUk7QUFBRyxtQkFBUyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0NaLEVBNENHRixRQUFRLGlCQUFJO0FBQUcsbUJBQVMsRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVDZixlQTZDRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUMsZUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBN0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF1REQ7O0dBM0Z1QlY7VUFTUFI7OztLQVRPUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWdpc3Rlci5qcz8wZWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcblxuY29uc3QgZGVtbyA9IHtcbiAgdXNlcm5hbWU6ICdhZGFtX2xhX21vcnJlJyxcbiAgZmlyc3RfbmFtZTogJ0FkYW0nLFxuICBsYXN0X25hbWU6ICdMYSBNb3JyZScsXG4gIHNlY3JldDogJ3Bhc3MxMjM0JyxcbiAgY3VzdG9tX2pzb246IHsgaGlnaF9zY29yZTogMjAwMCB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoeyBjaGF0X2tleSB9KSB7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZmlyc3ROYW1lLCBzZXRGaXJzdE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlY3JldCwgc2V0U2VjcmV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2NvbmZpcm1TZWNyZXQsIHNldENvbmZpcm1TZWNyZXRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbWlzTWF0Y2gsIHNldE1pc01hdGNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChzZWNyZXQgIT09IGNvbmZpcm1TZWNyZXQpIHtcbiAgICAgIHNldE1pc01hdGNoKHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBheGlvc1xuICAgICAgLnBvc3QoXG4gICAgICAgICdodHRwczovL2FwaS5jaGF0ZW5naW5lLmlvL3VzZXJzLycsXG4gICAgICAgIHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgICAgbGFzdF9uYW1lOiBsYXN0TmFtZSxcbiAgICAgICAgICBzZWNyZXQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnUFJJVkFURS1LRVknOiBjaGF0X2tleSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAudGhlbigocikgPT4gcm91dGVyLnB1c2goJy8nKSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBzZXRFcnJvcih0cnVlKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JhY2tncm91bmQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2F1dGgtcmVnLWNvbnRhaW5lcic+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nYXV0aC1mb3JtJyBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhdXRoLXRpdGxlJz5SZWdpc3RlcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1jb250YWluZXInPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWlucHV0J1xuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0ZpcnN0IE5hbWUnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1pbnB1dCdcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nTGFzdCBOYW1lJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtaW5wdXQnXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtY29udGFpbmVyJz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1pbnB1dCdcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWNyZXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRNaXNNYXRjaChmYWxzZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1jb250YWluZXInPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdDb25maXJtIFBhc3N3b3JkJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtaW5wdXQnXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29uZmlybVNlY3JldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIG9uRm9jdXM9eygpID0+IHNldE1pc01hdGNoKGZhbHNlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT0nZXJyb3InPkVycm9yIGR1cmluZyByZWdpc3RyYXRpb248L3A+fVxuICAgICAgICAgIHttaXNNYXRjaCAmJiA8cCBjbGFzc05hbWU9J2Vycm9yJz5QYXNzd29yZCBNaXNNYXRjaDwvcD59XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nc3VibWl0LWJ1dHRvbic+XG4gICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY2hhdF9rZXkgPSBwcm9jZXNzLmVudi5DSEFUX0tFWTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBjaGF0X2tleSB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiZGVtbyIsInVzZXJuYW1lIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInNlY3JldCIsImN1c3RvbV9qc29uIiwiaGlnaF9zY29yZSIsIlJlZ2lzdGVyIiwiY2hhdF9rZXkiLCJzZXRVc2VybmFtZSIsImZpcnN0TmFtZSIsInNldEZpcnN0TmFtZSIsImxhc3ROYW1lIiwic2V0TGFzdE5hbWUiLCJzZXRTZWNyZXQiLCJjb25maXJtU2VjcmV0Iiwic2V0Q29uZmlybVNlY3JldCIsIm1pc01hdGNoIiwic2V0TWlzTWF0Y2giLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyIiwicHVzaCIsImVyciIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/register.js\n");

/***/ })

});