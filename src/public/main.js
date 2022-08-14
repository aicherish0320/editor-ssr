/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/index.js":
/*!*****************************!*\
  !*** ./src/assets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lego_components_dist_lego_components_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lego-components/dist/lego-components.css */ \"./node_modules/lego-components/dist/lego-components.css\");\n/* harmony import */ var _js_check_channel_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/check-channel/index */ \"./src/assets/js/check-channel/index.js\");\n/* harmony import */ var _js_check_channel_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_check_channel_index__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_bind_events_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/bind-events/index */ \"./src/assets/js/bind-events/index.js\");\n/**\r\n * 静态资源 入口文件 将会被 webpack 打包\r\n */\n\n\n\nconsole.log('Hello Aicherish Good!!! >>> ');\n\n//# sourceURL=webpack://editor-ssr/./src/assets/index.js?");

/***/ }),

/***/ "./src/assets/js/bind-events/index.js":
/*!********************************************!*\
  !*** ./src/assets/js/bind-events/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jumpTo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jumpTo */ \"./src/assets/js/bind-events/jumpTo.js\");\n\nconst {\n  EVENT_INFO_LIST = []\n} = window;\n\nfunction bindEvent() {\n  EVENT_INFO_LIST.forEach((eventInfo = {}) => {\n    const {\n      id,\n      actionType,\n      url\n    } = eventInfo;\n    if (!actionType || !url) return;\n    const elemId = `component-${id}`;\n    const elem = document.getElementById(elemId);\n    elem.addEventListener('click', () => {\n      if (actionType === 'to') {\n        (0,_jumpTo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url);\n      }\n    });\n  });\n}\n\nbindEvent();\n\n//# sourceURL=webpack://editor-ssr/./src/assets/js/bind-events/index.js?");

/***/ }),

/***/ "./src/assets/js/bind-events/jumpTo.js":
/*!*********************************************!*\
  !*** ./src/assets/js/bind-events/jumpTo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getUrlWithQuery(url, querystring) {\n  if (!querystring) {\n    return url;\n  } // hash\n\n\n  const [urlWithoutHash, hash = ''] = url.split('#'); // 当前页面有 url 参数\n\n  let urlWithQuery = '';\n\n  if (urlWithoutHash.indexOf('?') < 0) {\n    // 目标 url 无参数\n    urlWithQuery = `${urlWithoutHash}?${querystring}`;\n  } else {\n    // 目标 url 有参数\n    urlWithQuery = `${urlWithoutHash}&${querystring}`;\n  } // 拼接 hash\n\n\n  if (hash) return `${urlWithQuery}#${hash}`;\n  return urlWithQuery;\n}\n\nfunction jumpTo(url = '') {\n  if (!url) return;\n  const {\n    search\n  } = location;\n  const querystring = search.slice(1);\n  const targetUrl = getUrlWithQuery(url, querystring);\n  location.href = targetUrl;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jumpTo);\n\n//# sourceURL=webpack://editor-ssr/./src/assets/js/bind-events/jumpTo.js?");

/***/ }),

/***/ "./src/assets/js/check-channel/index.js":
/*!**********************************************!*\
  !*** ./src/assets/js/check-channel/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * check channel\r\n */\nconst {\n  getChannel\n} = __webpack_require__(/*! ../utils */ \"./src/assets/js/utils.js\");\n\nconst channel = getChannel();\n\nfunction checkChannel() {\n  if (channel) return;\n  return window.alert('no channel');\n}\n\ncheckChannel();\n\n//# sourceURL=webpack://editor-ssr/./src/assets/js/check-channel/index.js?");

/***/ }),

/***/ "./src/assets/js/utils.js":
/*!********************************!*\
  !*** ./src/assets/js/utils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getChannel\": () => (/* binding */ getChannel),\n/* harmony export */   \"getRegStr\": () => (/* binding */ getRegStr),\n/* harmony export */   \"getWorkId\": () => (/* binding */ getWorkId)\n/* harmony export */ });\nfunction getRegStr(str, reg) {\n  if (!str) return '';\n  const arr = str.match(reg) || [];\n  return arr[1] || '';\n}\nfunction getChannel() {\n  const {\n    location\n  } = window;\n  const channel = getRegStr(location.search, /channel=(\\w+)/);\n  return channel;\n}\nfunction getWorkId() {\n  const {\n    location\n  } = window;\n  const id = getRegStr(location.pathname, /\\/(\\w+)?-\\w+/);\n  return id;\n}\n\n//# sourceURL=webpack://editor-ssr/./src/assets/js/utils.js?");

/***/ }),

/***/ "./node_modules/lego-components/dist/lego-components.css":
/*!***************************************************************!*\
  !*** ./node_modules/lego-components/dist/lego-components.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://editor-ssr/./node_modules/lego-components/dist/lego-components.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/index.js");
/******/ 	
/******/ })()
;