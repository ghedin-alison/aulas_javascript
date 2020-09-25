/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dobrar.js":
/*!*******************!*\
  !*** ./dobrar.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return dobrar; });\nfunction dobrar(num) {\n  return num * 2;\n}\n\n//# sourceURL=webpack:///./dobrar.js?");

/***/ }),

/***/ "./funcoes.js":
/*!********************!*\
  !*** ./funcoes.js ***!
  \********************/
/*! exports provided: default, metade, MEUPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return quadrado; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"metade\", function() { return metade; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEUPI\", function() { return MEUPI; });\n//funcao default\nfunction quadrado(num) {\n  return Math.pow(num, 2);\n} //funcao usual\n\nfunction metade(num) {\n  return num / 2;\n} //constante\n\nvar MEUPI = 3.141516;\n\n//# sourceURL=webpack:///./funcoes.js?");

/***/ }),

/***/ "./helper.js":
/*!*******************!*\
  !*** ./helper.js ***!
  \*******************/
/*! exports provided: soma, subtracao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"soma\", function() { return soma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtracao\", function() { return subtracao; });\nfunction soma(num1, num2) {\n  return num1 + num2;\n}\nfunction subtracao(num1, num2) {\n  return num1 - num2;\n}\n\n//# sourceURL=webpack:///./helper.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./helper.js\");\n/* harmony import */ var _dobrar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dobrar */ \"./dobrar.js\");\n/* harmony import */ var _funcoes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcoes */ \"./funcoes.js\");\n\n //declarado como export defaul, não é necessário utilizar chaves\n\n\n\nconsole.log(Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"soma\"])(5, 12));\nconsole.log(Object(_helper__WEBPACK_IMPORTED_MODULE_0__[\"subtracao\"])(15, 12));\nconsole.log(Object(_dobrar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(12));\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(12));\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_2__[\"metade\"])(12));\nconsole.log(Object(_funcoes__WEBPACK_IMPORTED_MODULE_2__[\"metade\"])(12 * _funcoes__WEBPACK_IMPORTED_MODULE_2__[\"MEUPI\"]));\nconsole.log(_helper__WEBPACK_IMPORTED_MODULE_0__[\"subtracao\"](90, 45));\n\n//# sourceURL=webpack:///./main.js?");

/***/ })

/******/ });