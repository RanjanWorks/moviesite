"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movie/[id]/page",{

/***/ "(app-pages-browser)/./src/Components/StarRating.jsx":
/*!***************************************!*\
  !*** ./src/Components/StarRating.jsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst StarRating = (param)=>{\n    let { rating } = param;\n    // Normalize rating to a 5-star scale\n    const normalizedRating = Math.round(rating / 2);\n    const stars = Array.from({\n        length: 5\n    }, (_, index)=>index < normalizedRating);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-3 flex space-x-1\",\n        children: stars.map((filled, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                xmlns: \"http://www.w3.org/2000/svg\",\n                className: \"h-3 w-3 \".concat(filled ? 'text-yellow-400' : 'text-gray-400'),\n                viewBox: \"0 0 24 24\",\n                fill: \"currentColor\",\n                stroke: \"currentColor\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    fillRule: \"evenodd\",\n                    d: \"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\",\n                    clipRule: \"evenodd\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\StarRating.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\StarRating.jsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\StarRating.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n_c = StarRating;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StarRating);\nvar _c;\n$RefreshReg$(_c, \"StarRating\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL1N0YXJSYXRpbmcuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLGFBQWE7UUFBQyxFQUFFQyxNQUFNLEVBQUU7SUFDNUIscUNBQXFDO0lBQ3JDLE1BQU1DLG1CQUFtQkMsS0FBS0MsS0FBSyxDQUFDSCxTQUFTO0lBQzdDLE1BQU1JLFFBQVFDLE1BQU1DLElBQUksQ0FBQztRQUFFQyxRQUFRO0lBQUUsR0FBRyxDQUFDQyxHQUFHQyxRQUFVQSxRQUFRUjtJQUU5RCxxQkFDRSw4REFBQ1M7UUFBSUMsV0FBVTtrQkFDWlAsTUFBTVEsR0FBRyxDQUFDLENBQUNDLFFBQVFKLHNCQUNsQiw4REFBQ0s7Z0JBRUNDLE9BQU07Z0JBQ05KLFdBQVcsV0FBd0QsT0FBN0NFLFNBQVMsb0JBQW9CO2dCQUNuREcsU0FBUTtnQkFDUkMsTUFBSztnQkFDTEMsUUFBTzswQkFFUCw0RUFBQ0M7b0JBQ0NDLFVBQVM7b0JBQ1RDLEdBQUU7b0JBQ0ZDLFVBQVM7Ozs7OztlQVZOYjs7Ozs7Ozs7OztBQWdCZjtLQXpCTVY7QUEyQk4saUVBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmFuamFcXE9uZURyaXZlXFxEZXNrdG9wXFxtb3ZpZXNpdGVcXHNyY1xcQ29tcG9uZW50c1xcU3RhclJhdGluZy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU3RhclJhdGluZyA9ICh7IHJhdGluZyB9KSA9PiB7XHJcbiAgLy8gTm9ybWFsaXplIHJhdGluZyB0byBhIDUtc3RhciBzY2FsZVxyXG4gIGNvbnN0IG5vcm1hbGl6ZWRSYXRpbmcgPSBNYXRoLnJvdW5kKHJhdGluZyAvIDIpO1xyXG4gIGNvbnN0IHN0YXJzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaW5kZXgpID0+IGluZGV4IDwgbm9ybWFsaXplZFJhdGluZyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgZmxleCBzcGFjZS14LTFcIj5cclxuICAgICAge3N0YXJzLm1hcCgoZmlsbGVkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17YGgtMyB3LTMgJHtmaWxsZWQgPyAndGV4dC15ZWxsb3ctNDAwJyA6ICd0ZXh0LWdyYXktNDAwJ31gfVxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgZD1cIk0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXpcIlxyXG4gICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RhclJhdGluZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3RhclJhdGluZyIsInJhdGluZyIsIm5vcm1hbGl6ZWRSYXRpbmciLCJNYXRoIiwicm91bmQiLCJzdGFycyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImZpbGxlZCIsInN2ZyIsInhtbG5zIiwidmlld0JveCIsImZpbGwiLCJzdHJva2UiLCJwYXRoIiwiZmlsbFJ1bGUiLCJkIiwiY2xpcFJ1bGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/StarRating.jsx\n"));

/***/ })

});