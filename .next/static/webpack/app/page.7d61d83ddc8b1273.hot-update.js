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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_MovieLandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/MovieLandingPage */ \"(app-pages-browser)/./src/Components/MovieLandingPage.jsx\");\n/* harmony import */ var _Components_Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Carousel */ \"(app-pages-browser)/./src/Components/Carousel.jsx\");\n/* harmony import */ var _Components_MovieSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/MovieSkeleton */ \"(app-pages-browser)/./src/Components/MovieSkeleton.jsx\");\n/* harmony import */ var _Components_MoveCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/Components/MoveCategory */ \"(app-pages-browser)/./src/Components/MoveCategory.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [movies, setMovies] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        popular: [],\n        topRated: [],\n        upcoming: [],\n        nowPlaying: [],\n        discover: []\n    });\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // Track loading state\n    const fetchData = async ()=>{\n        try {\n            // Fetching popular movies\n            const popularResponse = await fetch(\"https://api.themoviedb.org/3/movie/popular?api_key=4c1eef5a8d388386187a3426bc2345be\");\n            const popularData = await popularResponse.json();\n            // Fetching top-rated movies\n            const topRatedResponse = await fetch(\"https://api.themoviedb.org/3/movie/top_rated?api_key=4c1eef5a8d388386187a3426bc2345be\");\n            const topRatedData = await topRatedResponse.json();\n            // Fetching upcoming movies\n            const upcomingResponse = await fetch(\"https://api.themoviedb.org/3/movie/upcoming?api_key=4c1eef5a8d388386187a3426bc2345be\");\n            const upcomingData = await upcomingResponse.json();\n            // Fetching now playing movies\n            const nowPlayingResponse = await fetch(\"https://api.themoviedb.org/3/movie/now_playing?api_key=4c1eef5a8d388386187a3426bc2345be\");\n            const nowPlayingData = await nowPlayingResponse.json();\n            // Fetching discover movies\n            const discoverResponse = await fetch(\"https://api.themoviedb.org/3/movie/now_playing?api_key=4c1eef5a8d388386187a3426bc2345be\");\n            const discoverData = await discoverResponse.json();\n            // Set the state with the fetched movie categories\n            setMovies({\n                popular: popularData.results,\n                topRated: topRatedData.results,\n                upcoming: upcomingData.results,\n                nowPlaying: nowPlayingData.results,\n                discover: discoverData.results\n            });\n            setLoading(false); // Set loading to false once data is fetched\n        } catch (error) {\n            console.error(\"Error fetching movie data:\", error);\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Home.useEffect\": ()=>{\n            fetchData();\n        }\n    }[\"Home.useEffect\"], []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MovieLandingPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 py-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MoveCategory__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        props: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 78,\n                        columnNumber: 3\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MovieSkeleton__WEBPACK_IMPORTED_MODULE_4__.MovieSkeleton, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                        movies: movies.popular\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 82,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 py-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold text-white mb-5\",\n                        children: \"Now Playing\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MovieSkeleton__WEBPACK_IMPORTED_MODULE_4__.MovieSkeleton, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 90,\n                        columnNumber: 6\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                        movies: movies.nowPlaying\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 py-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold text-white mb-5\",\n                        children: \"Top Rated\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MovieSkeleton__WEBPACK_IMPORTED_MODULE_4__.MovieSkeleton, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 99,\n                        columnNumber: 6\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                        movies: movies.topRated\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 py-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold text-white mb-5\",\n                        children: \"Upcoming\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MovieSkeleton__WEBPACK_IMPORTED_MODULE_4__.MovieSkeleton, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 109,\n                        columnNumber: 6\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                        movies: movies.upcoming\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto px-4 py-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-3xl font-bold text-white mb-5\",\n                        children: \"Discover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_MovieSkeleton__WEBPACK_IMPORTED_MODULE_4__.MovieSkeleton, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 119,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                        movies: movies.discover\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ranja\\\\OneDrive\\\\Desktop\\\\moviesite\\\\src\\\\app\\\\page.js\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"ikzlyNjM5qmkHtK62M3x7dH2eV0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MERBQVFBO3dCQUFDSSxRQUFRQSxPQUFPTSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0M7R0FwSHdCUDtLQUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxyYW5qYVxcT25lRHJpdmVcXERlc2t0b3BcXG1vdmllc2l0ZVxcc3JjXFxhcHBcXHBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gXCJAL0NvbXBvbmVudHMvTW92aWVMYW5kaW5nUGFnZVwiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwiQC9Db21wb25lbnRzL0Nhcm91c2VsXCI7XG5pbXBvcnQgeyBNb3ZpZVNrZWxldG9uIH0gZnJvbSBcIkAvQ29tcG9uZW50cy9Nb3ZpZVNrZWxldG9uXCI7XG5pbXBvcnQgTW92ZUNhdGVnb3J5IGZyb20gXCJAL0NvbXBvbmVudHMvTW92ZUNhdGVnb3J5XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21vdmllcywgc2V0TW92aWVzXSA9IHVzZVN0YXRlKHtcbiAgICBwb3B1bGFyOiBbXSxcbiAgICB0b3BSYXRlZDogW10sXG4gICAgdXBjb21pbmc6IFtdLFxuICAgIG5vd1BsYXlpbmc6IFtdLFxuICAgIGRpc2NvdmVyOiBbXSxcbiAgfSk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7IC8vIFRyYWNrIGxvYWRpbmcgc3RhdGVcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEZldGNoaW5nIHBvcHVsYXIgbW92aWVzXG4gICAgICBjb25zdCBwb3B1bGFyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgXCJodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL21vdmllL3BvcHVsYXI/YXBpX2tleT00YzFlZWY1YThkMzg4Mzg2MTg3YTM0MjZiYzIzNDViZVwiXG4gICAgICApO1xuICAgICAgY29uc3QgcG9wdWxhckRhdGEgPSBhd2FpdCBwb3B1bGFyUmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAvLyBGZXRjaGluZyB0b3AtcmF0ZWQgbW92aWVzXG4gICAgICBjb25zdCB0b3BSYXRlZFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS90b3BfcmF0ZWQ/YXBpX2tleT00YzFlZWY1YThkMzg4Mzg2MTg3YTM0MjZiYzIzNDViZVwiXG4gICAgICApO1xuICAgICAgY29uc3QgdG9wUmF0ZWREYXRhID0gYXdhaXQgdG9wUmF0ZWRSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIC8vIEZldGNoaW5nIHVwY29taW5nIG1vdmllc1xuICAgICAgY29uc3QgdXBjb21pbmdSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvdXBjb21pbmc/YXBpX2tleT00YzFlZWY1YThkMzg4Mzg2MTg3YTM0MjZiYzIzNDViZVwiXG4gICAgICApO1xuICAgICAgY29uc3QgdXBjb21pbmdEYXRhID0gYXdhaXQgdXBjb21pbmdSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIC8vIEZldGNoaW5nIG5vdyBwbGF5aW5nIG1vdmllc1xuICAgICAgY29uc3Qgbm93UGxheWluZ1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9ub3dfcGxheWluZz9hcGlfa2V5PTRjMWVlZjVhOGQzODgzODYxODdhMzQyNmJjMjM0NWJlXCJcbiAgICAgICk7XG4gICAgICBjb25zdCBub3dQbGF5aW5nRGF0YSA9IGF3YWl0IG5vd1BsYXlpbmdSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIC8vIEZldGNoaW5nIGRpc2NvdmVyIG1vdmllc1xuICAgICAgY29uc3QgZGlzY292ZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvbW92aWUvbm93X3BsYXlpbmc/YXBpX2tleT00YzFlZWY1YThkMzg4Mzg2MTg3YTM0MjZiYzIzNDViZVwiXG4gICAgICApO1xuICAgICAgY29uc3QgZGlzY292ZXJEYXRhID0gYXdhaXQgZGlzY292ZXJSZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIC8vIFNldCB0aGUgc3RhdGUgd2l0aCB0aGUgZmV0Y2hlZCBtb3ZpZSBjYXRlZ29yaWVzXG4gICAgICBzZXRNb3ZpZXMoe1xuICAgICAgICBwb3B1bGFyOiBwb3B1bGFyRGF0YS5yZXN1bHRzLFxuICAgICAgICB0b3BSYXRlZDogdG9wUmF0ZWREYXRhLnJlc3VsdHMsXG4gICAgICAgIHVwY29taW5nOiB1cGNvbWluZ0RhdGEucmVzdWx0cyxcbiAgICAgICAgbm93UGxheWluZzogbm93UGxheWluZ0RhdGEucmVzdWx0cyxcbiAgICAgICAgZGlzY292ZXI6IGRpc2NvdmVyRGF0YS5yZXN1bHRzLFxuICAgICAgfSk7XG5cbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyAvLyBTZXQgbG9hZGluZyB0byBmYWxzZSBvbmNlIGRhdGEgaXMgZmV0Y2hlZFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbW92aWUgZGF0YTpcIiwgZXJyb3IpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGFuZGluZ1BhZ2UgLz5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTEwXCI+XG4gIDxNb3ZlQ2F0ZWdvcnkgcHJvcHMvPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPE1vdmllU2tlbGV0b24vPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDYXJvdXNlbCBtb3ZpZXM9e21vdmllcy5wb3B1bGFyfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00IHB5LTEwXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBtYi01XCI+Tm93IFBsYXlpbmc8L2gyPlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgPE1vdmllU2tlbGV0b24vPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDYXJvdXNlbCBtb3ZpZXM9e21vdmllcy5ub3dQbGF5aW5nfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS0xMFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNVwiPlRvcCBSYXRlZDwvaDI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICA8TW92aWVTa2VsZXRvbi8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENhcm91c2VsIG1vdmllcz17bW92aWVzLnRvcFJhdGVkfSAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS0xMFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNVwiPlVwY29taW5nPC9oMj5cbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgIDxNb3ZpZVNrZWxldG9uLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q2Fyb3VzZWwgbW92aWVzPXttb3ZpZXMudXBjb21pbmd9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTQgcHktMTBcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIG1iLTVcIj5EaXNjb3ZlcjwvaDI+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgICAgPE1vdmllU2tlbGV0b24vPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxDYXJvdXNlbCBtb3ZpZXM9e21vdmllcy5kaXNjb3Zlcn0gLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMYW5kaW5nUGFnZSIsIkNhcm91c2VsIiwiTW92aWVTa2VsZXRvbiIsIk1vdmVDYXRlZ29yeSIsIkhvbWUiLCJtb3ZpZXMiLCJzZXRNb3ZpZXMiLCJwb3B1bGFyIiwidG9wUmF0ZWQiLCJ1cGNvbWluZyIsIm5vd1BsYXlpbmciLCJkaXNjb3ZlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hEYXRhIiwicG9wdWxhclJlc3BvbnNlIiwiZmV0Y2giLCJwb3B1bGFyRGF0YSIsImpzb24iLCJ0b3BSYXRlZFJlc3BvbnNlIiwidG9wUmF0ZWREYXRhIiwidXBjb21pbmdSZXNwb25zZSIsInVwY29taW5nRGF0YSIsIm5vd1BsYXlpbmdSZXNwb25zZSIsIm5vd1BsYXlpbmdEYXRhIiwiZGlzY292ZXJSZXNwb25zZSIsImRpc2NvdmVyRGF0YSIsInJlc3VsdHMiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9wcyIsImgyIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});