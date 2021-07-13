/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/event */ \"./src/page/event.js\");\n\n\n//# sourceURL=webpack://webpack-number/./src/index.js?");

/***/ }),

/***/ "./src/page/event.js":
/*!***************************!*\
  !*** ./src/page/event.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_getNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/getNumber */ \"./src/util/getNumber.js\");\n/* harmony import */ var _page_rederPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page/rederPage */ \"./src/page/rederPage.js\");\n\r\n\r\nconst n = new _util_getNumber__WEBPACK_IMPORTED_MODULE_0__.default();\r\nn.callback = function(number,isPrime){\r\n    (0,_page_rederPage__WEBPACK_IMPORTED_MODULE_1__.default)(number)\r\n}\r\nn.start()\r\nlet start = true;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (window.onclick = function(){\r\n    if(start){\r\n        n.stop();\r\n        start = false;\r\n    }else{\r\n        n.start()\r\n        start = true;\r\n    }\r\n});\n\n//# sourceURL=webpack://webpack-number/./src/page/event.js?");

/***/ }),

/***/ "./src/page/rederPage.js":
/*!*******************************!*\
  !*** ./src/page/rederPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _util_isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isPrime */ \"./src/util/isPrime.js\");\n/* harmony import */ var _util_rederColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/rederColor */ \"./src/util/rederColor.js\");\n\r\n\r\n\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(number){\r\n    const container = document.querySelector('#divContainer');\r\n    const center = document.querySelector('#divCenter');\r\n    const spanNumber = document.createElement('span');\r\n    const newCenter = document.createElement('div');\r\n    newCenter.className = 'center'\r\n    const body = document.querySelector('body')\r\n    spanNumber.innerText = number;\r\n    center.innerText = number;\r\n    newCenter.innerText = number;\r\n    let color = (0,_util_rederColor__WEBPACK_IMPORTED_MODULE_1__.default)()\r\n    if((0,_util_isPrime__WEBPACK_IMPORTED_MODULE_0__.default)(number)){\r\n        spanNumber.style.color = color;\r\n        newCenter.style.color = color;\r\n    }\r\n    container.appendChild(spanNumber);\r\n    body.appendChild(newCenter);\r\n    getComputedStyle(center).left;\r\n    newCenter.style.transform = `translate(${(0,_util_rederColor__WEBPACK_IMPORTED_MODULE_1__.transformX)()}px,${(0,_util_rederColor__WEBPACK_IMPORTED_MODULE_1__.transformY)()}px)`;\r\n    newCenter.style.opacity = 0;\r\n}\n\n//# sourceURL=webpack://webpack-number/./src/page/rederPage.js?");

/***/ }),

/***/ "./src/util/getNumber.js":
/*!*******************************!*\
  !*** ./src/util/getNumber.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getNumber)\n/* harmony export */ });\n/* harmony import */ var _isPrime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPrime */ \"./src/util/isPrime.js\");\n\r\nclass getNumber {\r\n    constructor(duration = 500) {\r\n        this.duration = duration;\r\n        this.number = 1;\r\n        this.callback = null;\r\n        this.timer = null;\r\n    }\r\n    start() {\r\n        this.timer = setInterval(() => {\r\n            this.callback && this.callback(this.number, (0,_isPrime__WEBPACK_IMPORTED_MODULE_0__.default)(this.number));\r\n            this.number++;\r\n        }, this.duration)\r\n    }\r\n    stop() {\r\n        clearInterval(this.timer);\r\n        this.timer = null;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-number/./src/util/getNumber.js?");

/***/ }),

/***/ "./src/util/isPrime.js":
/*!*****************************!*\
  !*** ./src/util/isPrime.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(number) {\r\n    if (number < 2) {\r\n        return false\r\n    }\r\n    for (let i = 2; i < number - 1; i++) {\r\n        if (number % i === 0) {\r\n            return false;\r\n        }\r\n    }\r\n    return true;\r\n}\n\n//# sourceURL=webpack://webpack-number/./src/util/isPrime.js?");

/***/ }),

/***/ "./src/util/rederColor.js":
/*!********************************!*\
  !*** ./src/util/rederColor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"transformY\": () => (/* binding */ transformY),\n/* harmony export */   \"transformX\": () => (/* binding */ transformX),\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst color = [\"#f26395\", \"#62efab\", \"#ef7658\", \"#ffe868\", \"#80e3f7\", \"#d781f9\"];\r\nconst min = 0, max = color.length;\r\nlet transformY = () => Math.floor(Math.random() * (250 + 150)  -150);\r\nlet transformX = () => Math.floor(Math.random() * (250 + 350)  -350);\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n    const random = Math.floor(Math.random() * (6 - 1) + 1);\r\n    return color[random]\r\n}\r\n\n\n//# sourceURL=webpack://webpack-number/./src/util/rederColor.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;