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

/***/ "(app-pages-browser)/./src/Components/MovieSkeleton.jsx":
/*!******************************************!*\
  !*** ./src/Components/MovieSkeleton.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MovieSkeleton: () => (/* binding */ MovieSkeleton)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"(app-pages-browser)/./node_modules/swiper/swiper-react.mjs\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"(app-pages-browser)/./node_modules/swiper/swiper.css\");\n/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/skeleton */ \"(app-pages-browser)/./src/Components/ui/skeleton.jsx\");\n/* __next_internal_client_entry_do_not_use__ MovieSkeleton auto */ \n\n\n\n\nfunction MovieSkeleton(param) {\n    let { numbers } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n        spaceBetween: 10,\n        slidesPerView: 5,\n        breakpoints: {\n            320: {\n                slidesPerView: 3\n            },\n            640: {\n                slidesPerView: 4\n            },\n            768: {\n                slidesPerView: 5\n            },\n            1024: {\n                slidesPerView: 6\n            }\n        },\n        children: Array.from({\n            length: 6\n        }).map((_, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_4__.Skeleton, {\n                    className: \"border border-zinc-800 rounded-md p-2 hover:bg-zinc-900 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg cursor-pointer\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\MovieSkeleton.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 10\n                }, this)\n            }, i, false, {\n                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\MovieSkeleton.jsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\MovieSkeleton.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = MovieSkeleton;\nvar _c;\n$RefreshReg$(_c, \"MovieSkeleton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL01vdmllU2tlbGV0b24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQytCO0FBQ29CO0FBQy9CO0FBQ3FCO0FBRWxDLFNBQVNJLGNBQWMsS0FBVztRQUFYLEVBQUVDLE9BQU8sRUFBRSxHQUFYO0lBQzVCLHFCQUNFLDhEQUFDSixnREFBTUE7UUFDTEssY0FBYztRQUNkQyxlQUFlO1FBQ2ZDLGFBQWE7WUFDWCxLQUFLO2dCQUFFRCxlQUFlO1lBQUU7WUFDeEIsS0FBSztnQkFBRUEsZUFBZTtZQUFFO1lBQ3hCLEtBQUs7Z0JBQUVBLGVBQWU7WUFBRTtZQUN4QixNQUFNO2dCQUFFQSxlQUFlO1lBQUU7UUFDM0I7a0JBR0NFLE1BQU1DLElBQUksQ0FBQztZQUFDQyxRQUFPO1FBQUMsR0FBR0MsR0FBRyxDQUFDLENBQUNDLEdBQUdDLGtCQUM5Qiw4REFBQ1oscURBQVdBOzBCQUNYLDRFQUFDQyxrREFBUUE7b0JBQUNZLFdBQVU7Ozs7OztlQURIRDs7Ozs7Ozs7OztBQU0xQjtLQXBCZ0JWIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXHJhbmphXFxPbmVEcml2ZVxcRGVza3RvcFxcbW92aWVzaXRlXFxzcmNcXENvbXBvbmVudHNcXE1vdmllU2tlbGV0b24uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcclxuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xyXG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCIuL3VpL3NrZWxldG9uXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTW92aWVTa2VsZXRvbih7IG51bWJlcnMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3dpcGVyXHJcbiAgICAgIHNwYWNlQmV0d2Vlbj17MTB9XHJcbiAgICAgIHNsaWRlc1BlclZpZXc9ezV9XHJcbiAgICAgIGJyZWFrcG9pbnRzPXt7XHJcbiAgICAgICAgMzIwOiB7IHNsaWRlc1BlclZpZXc6IDMgfSxcclxuICAgICAgICA2NDA6IHsgc2xpZGVzUGVyVmlldzogNCB9LFxyXG4gICAgICAgIDc2ODogeyBzbGlkZXNQZXJWaWV3OiA1IH0sXHJcbiAgICAgICAgMTAyNDogeyBzbGlkZXNQZXJWaWV3OiA2IH0sXHJcbiAgICAgIH19XHJcblxyXG4gICAgPlxyXG4gICAgICB7QXJyYXkuZnJvbSh7bGVuZ3RoOjZ9KS5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpfT5cclxuICAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItemluYy04MDAgcm91bmRlZC1tZCBwLTIgaG92ZXI6YmctemluYy05MDAgbWF4LXcteHMgc206bWF4LXctc20gbWQ6bWF4LXctbWQgbGc6bWF4LXctbGcgY3Vyc29yLXBvaW50ZXJcIj48L1NrZWxldG9uPlxyXG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Td2lwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlNrZWxldG9uIiwiTW92aWVTa2VsZXRvbiIsIm51bWJlcnMiLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwiYnJlYWtwb2ludHMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/MovieSkeleton.jsx\n"));

/***/ })

});