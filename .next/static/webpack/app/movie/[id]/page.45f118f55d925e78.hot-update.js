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

/***/ "(app-pages-browser)/./src/Components/Card.jsx":
/*!*********************************!*\
  !*** ./src/Components/Card.jsx ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _StarRating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StarRating */ \"(app-pages-browser)/./src/Components/StarRating.jsx\");\n/* harmony import */ var _barrel_optimize_names_MdOutlineCancel_react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MdOutlineCancel!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.mjs\");\n\n\n\n\n\n\nconst Card = (param)=>{\n    let { movie, onRemoveFromWatchlist, cancel } = param;\n    if (!movie || !movie.poster_path) return null; // Exclude movies without an image\n    const { title = \"No Title\", poster_path, release_date = \"N/A\", vote_average = 2, id, first_air_date = \"\", name = \"No Name\" } = movie;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: \"/movie/\".concat(id),\n        passHref: true,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border border-zinc-800 rounded-md p-1 hover:bg-zinc-900 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg cursor-pointer\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            className: \"h-auto w-full rounded-md\",\n                            src: \"https://image.tmdb.org/t/p/w500/\".concat(poster_path),\n                            alt: title,\n                            width: 500,\n                            height: 750,\n                            layout: \"intrinsic\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined),\n                        cancel == true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>onRemoveFromWatchlist(id),\n                            className: \" hidden hover:visible absolute top-2 right-2 bg-zinc-900/50 p-2 rounded-full text-white hover:bg-zinc-950 z-50 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdOutlineCancel_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdOutlineCancel, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n                                lineNumber: 38,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined) : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-white my-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-base sm:text-lg lg:text-xl overflow-hidden text-ellipsis whitespace-nowrap\",\n                            title: title,\n                            children: title === \"No Title\" ? name : title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xs text-slate-300\",\n                            children: release_date !== \"N/A\" ? release_date.split(\"-\")[0] : first_air_date\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_StarRating__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            rating: vote_average\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, undefined),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\Components\\\\Card.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Card;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9Db21wb25lbnRzL0NhcmQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBQ0U7QUFDTztBQUNXO0FBRWpELE1BQU1LLE9BQU87UUFBQyxFQUFFQyxLQUFLLEVBQUVDLHFCQUFxQixFQUFFQyxNQUFNLEVBQUU7SUFDcEQsSUFBSSxDQUFDRixTQUFTLENBQUNBLE1BQU1HLFdBQVcsRUFBRSxPQUFPLE1BQU0sa0NBQWtDO0lBRWpGLE1BQU0sRUFDSkMsUUFBUSxVQUFVLEVBQ2xCRCxXQUFXLEVBQ1hFLGVBQWUsS0FBSyxFQUNwQkMsZUFBZSxDQUFDLEVBQ2hCQyxFQUFFLEVBQ0ZDLGlCQUFpQixFQUFFLEVBQ25CQyxPQUFPLFNBQVMsRUFDakIsR0FBR1Q7SUFFSixxQkFDRSw4REFBQ0wsaURBQUlBO1FBQUNlLE1BQU0sVUFBYSxPQUFISDtRQUFNSSxRQUFRO2tCQUNsQyw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ2pCLGtEQUFLQTs0QkFDSmlCLFdBQVU7NEJBQ1ZDLEtBQUssbUNBQStDLE9BQVpYOzRCQUN4Q1ksS0FBS1g7NEJBQ0xZLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLFFBQU87Ozs7Ozt3QkFHUmhCLFVBQVUscUJBQ1QsOERBQUNpQjs0QkFDQ0MsU0FBUyxJQUFNbkIsc0JBQXNCTTs0QkFDckNNLFdBQVU7c0NBRVYsNEVBQUNmLGtHQUFlQTs7Ozs7Ozs7O3dDQUdsQjs7Ozs7Ozs4QkFHSiw4REFBQ2M7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDUTs0QkFDQ1IsV0FBVTs0QkFDVlQsT0FBT0E7c0NBRU5BLFVBQVUsYUFBYUssT0FBT0w7Ozs7OztzQ0FFakMsOERBQUNrQjs0QkFBRVQsV0FBVTtzQ0FDVlIsaUJBQWlCLFFBQ2RBLGFBQWFrQixLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FDMUJmOzs7Ozs7c0NBRU4sOERBQUNYLG1EQUFVQTs0QkFBQzJCLFFBQVFsQjs7Ozs7O3dCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlDO0tBdERNUDtBQXdETixpRUFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxyYW5qYVxcT25lRHJpdmVcXERlc2t0b3BcXG1vdmllc2l0ZVxcc3JjXFxDb21wb25lbnRzXFxDYXJkLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBTdGFyUmF0aW5nIGZyb20gXCIuL1N0YXJSYXRpbmdcIjtcclxuaW1wb3J0IHsgTWRPdXRsaW5lQ2FuY2VsIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG5jb25zdCBDYXJkID0gKHsgbW92aWUsIG9uUmVtb3ZlRnJvbVdhdGNobGlzdCwgY2FuY2VsIH0pID0+IHtcclxuICBpZiAoIW1vdmllIHx8ICFtb3ZpZS5wb3N0ZXJfcGF0aCkgcmV0dXJuIG51bGw7IC8vIEV4Y2x1ZGUgbW92aWVzIHdpdGhvdXQgYW4gaW1hZ2VcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGUgPSBcIk5vIFRpdGxlXCIsXHJcbiAgICBwb3N0ZXJfcGF0aCxcclxuICAgIHJlbGVhc2VfZGF0ZSA9IFwiTi9BXCIsXHJcbiAgICB2b3RlX2F2ZXJhZ2UgPSAyLFxyXG4gICAgaWQsXHJcbiAgICBmaXJzdF9haXJfZGF0ZSA9IFwiXCIsXHJcbiAgICBuYW1lID0gXCJObyBOYW1lXCIsXHJcbiAgfSA9IG1vdmllO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9tb3ZpZS8ke2lkfWB9IHBhc3NIcmVmPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItemluYy04MDAgcm91bmRlZC1tZCBwLTEgaG92ZXI6YmctemluYy05MDAgbWF4LXcteHMgc206bWF4LXctc20gbWQ6bWF4LXctbWQgbGc6bWF4LXctbGcgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1hdXRvIHctZnVsbCByb3VuZGVkLW1kXCJcclxuICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke3Bvc3Rlcl9wYXRofWB9XHJcbiAgICAgICAgICAgIGFsdD17dGl0bGV9XHJcbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NzUwfVxyXG4gICAgICAgICAgICBsYXlvdXQ9XCJpbnRyaW5zaWNcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICB7Y2FuY2VsID09IHRydWUgPyAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZUZyb21XYXRjaGxpc3QoaWQpfSAvLyBDYWxsIHRoZSByZW1vdmUgZnVuY3Rpb25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgaGlkZGVuIGhvdmVyOnZpc2libGUgYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiBiZy16aW5jLTkwMC81MCBwLTIgcm91bmRlZC1mdWxsIHRleHQtd2hpdGUgaG92ZXI6YmctemluYy05NTAgei01MCBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1kT3V0bGluZUNhbmNlbCAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG15LTJcIj5cclxuICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2Ugc206dGV4dC1sZyBsZzp0ZXh0LXhsIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzIHdoaXRlc3BhY2Utbm93cmFwXCJcclxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7dGl0bGUgPT09IFwiTm8gVGl0bGVcIiA/IG5hbWUgOiB0aXRsZX1cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtc2xhdGUtMzAwXCI+XHJcbiAgICAgICAgICAgIHtyZWxlYXNlX2RhdGUgIT09IFwiTi9BXCJcclxuICAgICAgICAgICAgICA/IHJlbGVhc2VfZGF0ZS5zcGxpdChcIi1cIilbMF1cclxuICAgICAgICAgICAgICA6IGZpcnN0X2Fpcl9kYXRlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPFN0YXJSYXRpbmcgcmF0aW5nPXt2b3RlX2F2ZXJhZ2V9IC8+IHsvKiBVc2UgU3RhclJhdGluZyBjb21wb25lbnQgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiSW1hZ2UiLCJTdGFyUmF0aW5nIiwiTWRPdXRsaW5lQ2FuY2VsIiwiQ2FyZCIsIm1vdmllIiwib25SZW1vdmVGcm9tV2F0Y2hsaXN0IiwiY2FuY2VsIiwicG9zdGVyX3BhdGgiLCJ0aXRsZSIsInJlbGVhc2VfZGF0ZSIsInZvdGVfYXZlcmFnZSIsImlkIiwiZmlyc3RfYWlyX2RhdGUiLCJuYW1lIiwiaHJlZiIsInBhc3NIcmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJwIiwic3BsaXQiLCJyYXRpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/Components/Card.jsx\n"));

/***/ })

});