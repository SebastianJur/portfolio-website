"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"f3fd0b88fc83\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/NTIxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImYzZmQwYjg4ZmM4M1wiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/transitionProvider.jsx":
/*!***********************************************!*\
  !*** ./src/components/transitionProvider.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"(app-pages-browser)/./src/components/navbar.jsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst TransitionProvider = (param)=>{\n    let { children } = param;\n    _s();\n    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n        mode: \"wait\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    className: \"h-screen w-screen fixed bg-black rounded-b-[100px] z-40\",\n                    animate: {\n                        height: \"0vh\"\n                    },\n                    exit: {\n                        height: \"140vh\"\n                    },\n                    transition: {\n                        duration: 0.5,\n                        ease: \"easeOut\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Github\\\\portfolio-website\\\\src\\\\components\\\\transitionProvider.jsx\",\n                    lineNumber: 17,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    className: \"fixed m-auto top-0 bottom-0 left-0 right-0\",\n                    animate: {\n                        height: \"0vh\"\n                    },\n                    exit: {\n                        height: \"140vh\"\n                    },\n                    transition: {\n                        duration: 0.5,\n                        ease: \"easeOut\"\n                    },\n                    children: pathName\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Github\\\\portfolio-website\\\\src\\\\components\\\\transitionProvider.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    className: \"h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-40\",\n                    initial: {\n                        height: \"140vh\"\n                    },\n                    animate: {\n                        height: \"0vh\",\n                        transition: {\n                            delay: 0.5\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Github\\\\portfolio-website\\\\src\\\\components\\\\transitionProvider.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-24\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Github\\\\portfolio-website\\\\src\\\\components\\\\transitionProvider.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 6\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Github\\\\portfolio-website\\\\src\\\\components\\\\transitionProvider.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[calc(100vh-6rem)]\",\n                    children: [\n                        children,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Github\\\\portfolio-website\\\\src\\\\components\\\\transitionProvider.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, pathName, true, {\n            fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Github\\\\portfolio-website\\\\src\\\\components\\\\transitionProvider.jsx\",\n            lineNumber: 13,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\admin\\\\Desktop\\\\Github\\\\portfolio-website\\\\src\\\\components\\\\transitionProvider.jsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n};\n_s(TransitionProvider, \"28xf+Q/MMfpBebWfp+J7Y3ZZbws=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = TransitionProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransitionProvider);\nvar _c;\n$RefreshReg$(_c, \"TransitionProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RyYW5zaXRpb25Qcm92aWRlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFZ0Q7QUFDbEI7QUFDUztBQUNPO0FBRTlDLE1BQU1JLHFCQUFxQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDdkMsTUFBTUMsV0FBV0gsNERBQVdBO0lBRTVCLHFCQUNDLDhEQUFDSCwwREFBZUE7UUFBQ08sTUFBSztrQkFDckIsNEVBQUNDO1lBRUFDLFdBQVU7OzhCQUVWLDhEQUFDUCxpREFBTUEsQ0FBQ00sR0FBRztvQkFDVkMsV0FBVTtvQkFDVkMsU0FBUzt3QkFBRUMsUUFBUTtvQkFBTTtvQkFDekJDLE1BQU07d0JBQUVELFFBQVE7b0JBQVE7b0JBQ3hCRSxZQUFZO3dCQUFFQyxVQUFVO3dCQUFLQyxNQUFNO29CQUFVOzs7Ozs7OEJBRTlDLDhEQUFDYixpREFBTUEsQ0FBQ00sR0FBRztvQkFDVkMsV0FBVTtvQkFDVkMsU0FBUzt3QkFBRUMsUUFBUTtvQkFBTTtvQkFDekJDLE1BQU07d0JBQUVELFFBQVE7b0JBQVE7b0JBQ3hCRSxZQUFZO3dCQUFFQyxVQUFVO3dCQUFLQyxNQUFNO29CQUFVOzhCQUU3QlQ7Ozs7Ozs4QkFFakIsOERBQUNKLGlEQUFNQSxDQUFDTSxHQUFHO29CQUNWQyxXQUFVO29CQUNWTyxTQUFTO3dCQUFFTCxRQUFRO29CQUFRO29CQUMzQkQsU0FBUzt3QkFBRUMsUUFBUTt3QkFBT0UsWUFBVzs0QkFBQ0ksT0FBTTt3QkFBRztvQkFBRTs7Ozs7OzhCQUVsRCw4REFBQ1Q7b0JBQUlDLFdBQVU7OEJBQ2QsNEVBQUNSLCtDQUFNQTs7Ozs7Ozs7Ozs4QkFFUiw4REFBQ087b0JBQUlDLFdBQVU7O3dCQUF3Qko7d0JBQVM7Ozs7Ozs7O1dBekIzQ0M7Ozs7Ozs7Ozs7QUE2QlQ7R0FuQ01GOztRQUNZRCx3REFBV0E7OztLQUR2QkM7QUFxQ04sK0RBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy90cmFuc2l0aW9uUHJvdmlkZXIuanN4Pzc3NWUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5cclxuY29uc3QgVHJhbnNpdGlvblByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG5cdGNvbnN0IHBhdGhOYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxBbmltYXRlUHJlc2VuY2UgbW9kZT0nd2FpdCc+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRrZXk9e3BhdGhOYW1lfVxyXG5cdFx0XHRcdGNsYXNzTmFtZT0ndy1zY3JlZW4gaC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYiBmcm9tLWJsdWUtMTAwIHRvLXJlZC0xMDAnXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPSdoLXNjcmVlbiB3LXNjcmVlbiBmaXhlZCBiZy1ibGFjayByb3VuZGVkLWItWzEwMHB4XSB6LTQwJ1xyXG5cdFx0XHRcdFx0YW5pbWF0ZT17eyBoZWlnaHQ6ICcwdmgnIH19XHJcblx0XHRcdFx0XHRleGl0PXt7IGhlaWdodDogJzE0MHZoJyB9fVxyXG5cdFx0XHRcdFx0dHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41LCBlYXNlOiAnZWFzZU91dCcgfX1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdDxtb3Rpb24uZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2ZpeGVkIG0tYXV0byB0b3AtMCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCdcclxuXHRcdFx0XHRcdGFuaW1hdGU9e3sgaGVpZ2h0OiAnMHZoJyB9fVxyXG5cdFx0XHRcdFx0ZXhpdD17eyBoZWlnaHQ6ICcxNDB2aCcgfX1cclxuXHRcdFx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZWFzZTogJ2Vhc2VPdXQnIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhdGhOYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG5cdFx0XHRcdDxtb3Rpb24uZGl2XHJcblx0XHRcdFx0XHRjbGFzc05hbWU9J2gtc2NyZWVuIHctc2NyZWVuIGZpeGVkIGJnLWJsYWNrIHJvdW5kZWQtdC1bMTAwcHhdIGJvdHRvbS0wIHotNDAnXHJcblx0XHRcdFx0XHRpbml0aWFsPXt7IGhlaWdodDogJzE0MHZoJyB9fVxyXG5cdFx0XHRcdFx0YW5pbWF0ZT17eyBoZWlnaHQ6ICcwdmgnLCB0cmFuc2l0aW9uOntkZWxheTowLjV9IH19XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naC0yNCc+XHJcblx0XHRcdFx0XHQ8TmF2YmFyIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2gtW2NhbGMoMTAwdmgtNnJlbSldJz57Y2hpbGRyZW59IDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uUHJvdmlkZXI7XHJcbiJdLCJuYW1lcyI6WyJBbmltYXRlUHJlc2VuY2UiLCJOYXZiYXIiLCJtb3Rpb24iLCJ1c2VQYXRobmFtZSIsIlRyYW5zaXRpb25Qcm92aWRlciIsImNoaWxkcmVuIiwicGF0aE5hbWUiLCJtb2RlIiwiZGl2IiwiY2xhc3NOYW1lIiwiYW5pbWF0ZSIsImhlaWdodCIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiaW5pdGlhbCIsImRlbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/transitionProvider.jsx\n"));

/***/ })

});