"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/Components/StarRating.jsx":
/*!***************************************!*\
  !*** ./src/Components/StarRating.jsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StarRating = (param)=>{\n    let { rating } = param;\n    const normalizedRating = Math.round(rating / 2);\n    const stars = Array.from({\n        length: 5\n    }, (_, index)=>index < normalizedRating);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-3 flex space-x-1\",\n        children: stars.map((filled, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \"h-3 w-3 \".concat(filled ? 'text-yellow-400' : 'text-gray-400'),\n                viewBox: \"0 0 24 24\",\n                fill: \"currentColor\",\n                stroke: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    fillRule: \"evenodd\",\n                    d: \"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\",\n                    clipRule: \"evenodd\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\StarRating.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\StarRating.jsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\StarRating.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_c = StarRating;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);\nvar _c;\n$RefreshReg$(_c, \"StarRating\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL1N0YXJSYXRpbmcuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLGFBQWE7UUFBQyxFQUFFQyxNQUFNLEVBQUU7SUFDNUIsTUFBTUMsbUJBQW1CQyxLQUFLQyxLQUFLLENBQUNILFNBQVM7SUFDN0MsTUFBTUksUUFBUUMsTUFBTUMsSUFBSSxDQUFDO1FBQUVDLFFBQVE7SUFBRSxHQUFHLENBQUNDLEdBQUdDLFFBQVVBLFFBQVFSO0lBRTlELHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVO2tCQUNaUCxNQUFNUSxHQUFHLENBQUMsQ0FBQ0MsUUFBUUosc0JBQ2xCLDhEQUFDSztnQkFFQ0MsT0FBTTtnQkFDTkosV0FBVyxXQUF3RCxPQUE3Q0UsU0FBUyxvQkFBb0I7Z0JBQ25ERyxTQUFRO2dCQUNSQyxNQUFLO2dCQUNMQyxRQUFPOzBCQUVQLDRFQUFDQztvQkFDQ0MsVUFBUztvQkFDVEMsR0FBRTtvQkFDRkMsVUFBUzs7Ozs7O2VBVk5iOzs7Ozs7Ozs7O0FBZ0JmO0tBeEJNVjtBQTBCTixpRUFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxyYW5qYVxcT25lRHJpdmVcXERlc2t0b3BcXG1vdmllc2l0ZVxcc3JjXFxDb21wb25lbnRzXFxTdGFyUmF0aW5nLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBTdGFyUmF0aW5nID0gKHsgcmF0aW5nIH0pID0+IHtcclxuICBjb25zdCBub3JtYWxpemVkUmF0aW5nID0gTWF0aC5yb3VuZChyYXRpbmcgLyAyKTtcclxuICBjb25zdCBzdGFycyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUgfSwgKF8sIGluZGV4KSA9PiBpbmRleCA8IG5vcm1hbGl6ZWRSYXRpbmcpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIGZsZXggc3BhY2UteC0xXCI+XHJcbiAgICAgIHtzdGFycy5tYXAoKGZpbGxlZCwgaW5kZXgpID0+IChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BoLTMgdy0zICR7ZmlsbGVkID8gJ3RleHQteWVsbG93LTQwMCcgOiAndGV4dC1ncmF5LTQwMCd9YH1cclxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgIGQ9XCJNMTIgMTcuMjdMMTguMTggMjFsLTEuNjQtNy4wM0wyMiA5LjI0bC03LjE5LS42MUwxMiAyIDkuMTkgOC42MyAyIDkuMjRsNS40NiA0LjczTDUuODIgMjF6XCJcclxuICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0YXJSYXRpbmc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN0YXJSYXRpbmciLCJyYXRpbmciLCJub3JtYWxpemVkUmF0aW5nIiwiTWF0aCIsInJvdW5kIiwic3RhcnMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJmaWxsZWQiLCJzdmciLCJ4bWxucyIsInZpZXdCb3giLCJmaWxsIiwic3Ryb2tlIiwicGF0aCIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/StarRating.jsx\n"));

/***/ })

});