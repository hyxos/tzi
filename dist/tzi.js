(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: elements, colors, hexColors, animals, Tau */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexColors\", function() { return hexColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animals\", function() { return animals; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tau\", function() { return Tau; });\nconst elements = ['wood', 'fire', 'earth', 'metal', 'water']\nconst colors = [\"green\", \"red\", \"yellow\", \"gray\", \"blue\"]\nconst hexColors = [\"#53B236\", \"#92140C\", \"#EFAA18\", \"#A397A2\", \"#336699\"]\nconst animals = ['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'rooster', 'dog', 'pig']\nconst Tau = Math.PI * 2\n\n//# sourceURL=webpack:///./src/constants.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: mod, polarity, seniority, elementOrder, element, color, hexColor, order, animal, name, urlName, numberString, fileString, opposite, duo, isTrine, isSquare, isUnity, isDiverse, trines, squares, isKind, yin, yang, tau, column, row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mod\", function() { return mod; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"polarity\", function() { return polarity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"seniority\", function() { return seniority; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elementOrder\", function() { return elementOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexColor\", function() { return hexColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"order\", function() { return order; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"animal\", function() { return animal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return name; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlName\", function() { return urlName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numberString\", function() { return numberString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fileString\", function() { return fileString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"opposite\", function() { return opposite; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"duo\", function() { return duo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isTrine\", function() { return isTrine; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isSquare\", function() { return isSquare; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isUnity\", function() { return isUnity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDiverse\", function() { return isDiverse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trines\", function() { return trines; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"squares\", function() { return squares; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isKind\", function() { return isKind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yin\", function() { return yin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yang\", function() { return yang; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tau\", function() { return tau; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"column\", function() { return column; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"row\", function() { return row; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\nconst { abs, ceil, floor } = Math\n\nconst mod = n => i => i % n\n\nconst polarity = n => abs(mod(2)(n))\n\nconst seniority = n => {\n  let i = mod(60)(n)\n  if (i !== 0) return i\n  else return n >= 0 ? 60 : -60\n}\n\nconst elementOrder = n => {\n  let i = mod(10)(seniority(n))\n  if (n >= 0 && i !==0) return ceil(i / 2)\n  else if (n >= 0 && i === 0) return 5\n  else if (n < 1 && i !== 0) return floor(i / 2)\n  else return -5\n}\n\nconst element = n => _constants__WEBPACK_IMPORTED_MODULE_0__[\"elements\"][abs(elementOrder(n)) - 1]\n\nconst color = n => _constants__WEBPACK_IMPORTED_MODULE_0__[\"colors\"][abs(elementOrder(n)) - 1]\n\nconst hexColor = n => _constants__WEBPACK_IMPORTED_MODULE_0__[\"hexColors\"][abs(elementOrder(n)) - 1]\n\nconst order = n => {\n  let i = mod(12)(seniority(n))\n  if (i !== 0) return i\n  else return n >= 0 ? 12 : -12\n\n}\nconst animal = n => _constants__WEBPACK_IMPORTED_MODULE_0__[\"animals\"][abs(order(n)) - 1]\n\nconst name = n => element(n) + \" \" + animal(n)\n\nconst urlName = n => element(n) + \"-\" + animal(n)\n\n// export const parseName\n\nconst numberString = n => {\n  let i = seniority(n)\n  if (n > 0) return i < 10 ? \"0\" + String(i) : String(i)\n  else return i > -10 ? \"N0\" + String(abs(i)) : \"N\" + String(abs(i))\n}\n\nconst fileString = n => {\n  if (n > 0 && n <= 60) return numberString(n) + \"_\" + element(n) + \"_\" + animal(n) \n  else if (n < 0 && n >= -60) return numberString(n) + \"_\" + element(n) + \"_\" + animal(n)\n  else if (n > 60 || n < -60) return numberString(n) + \"_\" + element(n) + \"_\" + animal(n) + \"_\" + String(abs(n))\n}\n\nconst opposite = (n, mod) => {\n  let c = n > 0\n  if (c) return mod === 12 ? order(order(n) + 6) : seniority(n + 30)\n  else return mod === 12 ? order(order(n) - 6) : seniority(n - 30)\n\n}\n\nconst duo = n => {\n  let p = polarity(n)\n  let c = n > 0\n  if (p && c) return seniority(n + 1)\n  else if (p && !c) return seniority(n - 1)\n  else if (!p && !c) return seniority(n + 1)\n  else return seniority(n - 1) \n}\n\nconst isTrine = (i, n) => {\n  let iAbs = abs(order(i))\n  let nAbs = abs(order(n))\n  let prev = iAbs - 4 > 0 ? iAbs - 4 : iAbs + 8\n  let post = order(iAbs + 4)\n  return nAbs === prev || nAbs === post\n}\n\nconst isSquare = (i, n) => {\n  let iAbs = abs(order(i))\n  let nAbs = abs(order(n))\n  let prev = iAbs - 3 > 0 ? iAbs - 3 : iAbs + 9\n  let post = order(iAbs + 3)\n  return nAbs === prev || nAbs === post || nAbs === opposite(iAbs, 12)\n}\n\nconst isUnity = (i, n) => elementOrder(i) === elementOrder(n)\n\nconst isDiverse = (i, n) => elementOrder(i) !== elementOrder(n)\n\nconst trines = n => Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"rangeArray\"])(1, 60).filter(i => isTrine(i, n))\n\nconst squares = n => Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"rangeArray\"])(1, 60).filter(i => isSquare(i, n))\n\nconst isKind = (i, n) => Math.abs(order(i)) === Math.abs(order(n))\n\nconst yin = n => !Boolean(polarity(n))\n\nconst yang = n => Boolean(polarity(n))\n\nconst tau = n => order(n) !== 12 ? (order(n) * _constants__WEBPACK_IMPORTED_MODULE_0__[\"Tau\"]) / 12 : 0\n\nconst column = n => {\n  n = abs(order(n))\n  if (n === 1 || n === 4 || n === 7 || n === 10) return 1\n  else if (n === 2 || n === 5 || n === 8 || n === 11) return 3\n  else return 2\n}\n\nconst row = n => {\n  n = abs(order(n))\n  if (n === 1 || n === 5 || n === 9) return 1\n  else if (n === 2 || n === 6 || n === 10) return 2\n  else if (n === 3 || n === 7 || n === 11) return 3\n  else return 4\n}\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: rangeArray, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rangeArray\", function() { return rangeArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\nconst rangeArray = (min, max) => [...Array(max - min + 1).keys()].map(num => num + min)\nconst shuffle = arr => {\n  for (let i = arr.length - 1; i > 0; i--) {\n      const j = Math.floor(Math.random() * (i + 1));\n      [arr[i], arr[j]] = [arr[j], arr[i]];\n  }\n  return arr\n}\n\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Tzi, mod, polarity, seniority, elementOrder, element, color, hexColor, order, animal, name, urlName, numberString, fileString, opposite, duo, isTrine, isSquare, isUnity, isDiverse, trines, squares, isKind, yin, yang, tau, column, row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tzi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tzi */ \"./src/tzi.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Tzi\", function() { return _tzi__WEBPACK_IMPORTED_MODULE_0__[\"Tzi\"]; });\n\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mod\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"mod\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"polarity\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"polarity\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"seniority\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"seniority\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"elementOrder\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"elementOrder\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"element\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"color\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hexColor\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"hexColor\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"order\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"order\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"animal\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"animal\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"name\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"name\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"urlName\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"urlName\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"numberString\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"numberString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fileString\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"fileString\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"opposite\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"opposite\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"duo\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"duo\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isTrine\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"isTrine\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isSquare\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"isSquare\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isUnity\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"isUnity\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isDiverse\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"isDiverse\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"trines\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"trines\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"squares\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"squares\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isKind\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"isKind\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"yin\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"yin\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"yang\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"yang\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tau\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"tau\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"column\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"column\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"row\", function() { return _functions__WEBPACK_IMPORTED_MODULE_1__[\"row\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/svgGenerator.js":
/*!*****************************!*\
  !*** ./src/svgGenerator.js ***!
  \*****************************/
/*! exports provided: genGlyph, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genGlyph\", function() { return genGlyph; });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\nconst svgWrapper = \n({\n  id, \n  content, \n  contentFill=\"none\",\n  boxFill=\"none\",\n  stroke=\"none\", \n  strokeWidth=1,\n  viewBox=\"-60 -60 120 120\",\n  dimensions=[100, 100],\n  anchor=[-60, -60],\n  className=\"\"\n}) =>\n`<svg id=\"${id}\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"${viewBox}\" width=\"${dimensions[0]}\" height=\"${dimensions[1]}\">\n  <rect class=\"box\" x=\"${anchor[0]}\" y=\"${anchor[1]}\" width=\"100%\" height=\"100%\" stroke=\"${stroke}\" stroke-width=\"${strokeWidth}\" fill=\"${boxFill}\"/>\n  <g class=\"${className}\" fill=\"${contentFill}\">\n    ${content}\n  </g>\n</svg>`\n\nconst bar = ({id, x, y, rx, w, h}) =>  \n  `<rect id=\"${id}\" x=\"${x}\" y=\"${y}\" rx=\"${rx}\" width=\"${w}\" height=\"${h}\" />`\nconst bw = 14 // bar width\nconst bh = 100 // bar height\nconst rx = 4 // bar radius\nconst ba = -50 // bar anchor\nconst b1 = -45 // bar1 index\nconst b2 = -7 // bar2 index\nconst b3 = 31 // bar3 index\nconst vb1 = bar({id: \"vb1\", x: b1, y: ba, rx, w: bw, h: bh })\nconst vb2 = bar({id: \"vb2\", x: b2, y: ba, rx, w: bw, h: bh })\nconst vb3 = bar({id: \"vb3\", x: b3, y: ba, rx, w: bw, h: bh })\nconst hb1 = bar({id: \"hb1\", x: ba, y: b1, rx, w: bh, h: bw })\nconst hb2 = bar({id: \"hb2\", x: ba, y: b2, rx, w: bh, h: bw })\nconst hb3 = bar({id: \"hb3\", x: ba, y: b3, rx, w: bh, h: bw })\n\nconst circle = ({id, cx, cy, r}) => \n  `<circle id=\"${id}\" cx=\"${cx}\" cy=\"${cy}\" r=\"${r}\" />`\nconst f = 19\nconst r = 7\n\nconst dc1r1 = circle({id: \"dc1r1\", cx: -f, cy: -f, r})\nconst dc2r1 = circle({id: \"dc2r1\", cx: f, cy: -f, r})\nconst dc1r2 = circle({id: \"dc1r2\", cx: -f, cy: f, r})\nconst dc2r2 = circle({id: \"dc2r2\", cx: f, cy: f, r})\n\nconst genbars = n => {\n  let c = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"column\"])(n)\n  let r = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"row\"])(n)\n  let bars = ''\n  switch(c) {\n    case 1:\n      bars += vb2\n      break\n    case 2:\n      bars += vb1 + '\\n  ' + vb3\n      break\n    case 3:\n      bars +=  vb1 + '\\n  ' + vb2 + '\\n  ' + vb3\n      break\n  }\n  switch(r) {\n    case 2:\n      bars += hb2\n      break\n    case 3:\n      bars += hb1 + '\\n  ' + hb3\n      break\n    case 4:\n      bars += hb1 + '\\n  ' + hb2 + '\\n  ' + hb3\n      break\n  }\n  return bars\n}\n\nconst genDots = n => {\n  let e = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"elementOrder\"])(n)\n  let dots = ''\n  switch(e) {\n    case 1:\n      dots += dc1r1 + '\\n  ' + dc1r2\n      break\n    case 2:\n      dots += dc1r1 + '\\n  ' + dc2r1\n      break\n    case 4:\n      dots += dc2r1 + '\\n  ' + dc2r2  \n      break\n    case 5:\n      dots += dc1r2 + '\\n  ' + dc2r2\n      break\n  }\n  return dots\n}\n\nconst genGlyph = n => {\n  let className = \"glyph\"\n  if (!Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"polarity\"])(n)) return svgWrapper({\n    id: Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"urlName\"])(n),\n    content: genbars(n) + '\\n  ' + genDots(n),\n    boxFill: Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"hexColor\"])(n),\n    contentFill: \"white\",\n    className\n  })\n  else return svgWrapper({\n    id: Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"urlName\"])(n),\n    content: genbars(n) + '\\n  ' + genDots(n),\n    contentFill: Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"hexColor\"])(n),\n    className\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (genGlyph);\n\n//# sourceURL=webpack:///./src/svgGenerator.js?");

/***/ }),

/***/ "./src/tzi.js":
/*!********************!*\
  !*** ./src/tzi.js ***!
  \********************/
/*! exports provided: Tzi, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tzi\", function() { return Tzi; });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/constants.js\");\n/* harmony import */ var _svgGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgGenerator */ \"./src/svgGenerator.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n\n\n\n\n\n\n\n\nclass Tzi {\n  static get elements() { return _constants__WEBPACK_IMPORTED_MODULE_1__[\"elements\"] }\n  static get animals() { return _constants__WEBPACK_IMPORTED_MODULE_1__[\"animals\"] }\n  static get range() { return range }\n  static get Tau() { return _constants__WEBPACK_IMPORTED_MODULE_1__[\"Tau\"] }\n  static get deck() { return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"rangeArray\"])(1,60).map(i => new Tzi(i)) }\n  static get shuffle() { return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__[\"shuffle\"])(Tzi.rangeArray(1,60).map(i => new Tzi(i)) )}\n  static get rangeArray() { return _helpers__WEBPACK_IMPORTED_MODULE_3__[\"rangeArray\"] }\n  static get deal() { return }\n  constructor(int) {\n    this.name = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"name\"])(int)\n    this.urlName = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"urlName\"])(int)\n    this.numberString = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"numberString\"])(int)\n    this.fileString = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"fileString\"])(int)\n    this.natural = int\n    this.seniority = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"seniority\"])(int)\n    this.elementOrder = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"elementOrder\"])(int)\n    this.element = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"element\"])(int)\n    this.order = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"order\"])(int)\n    this.animal = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"animal\"])(int)\n    this.polarity = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"polarity\"])(int)\n    this.opposite = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"opposite\"])(int)\n    this.duo = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"duo\"])(int)\n    this.yin = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"yin\"])(int)\n    this.yang = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"yang\"])(int)\n    this.tau = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"tau\"])(int)\n    this.trines = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"trines\"])(int)\n    this.squares = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"squares\"])(int)\n    this.column = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"column\"])(int)\n    this.row = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"row\"])(int)\n    this.color = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"color\"])(int)\n    this.hexColor = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"hexColor\"])(int)\n    this.glyph = Object(_svgGenerator__WEBPACK_IMPORTED_MODULE_2__[\"genGlyph\"])(int)\n  }\n\n  cleanInput(input) {\n    return input instanceof Tzi ? input.seniority : input\n  }\n\n  isTrine(tzi) {\n    let n = this.cleanInput(tzi)\n    if (Array.isArray(n)) return n.reduce((p, i) => \n                                    p === false \n                                    ? false\n                                    : Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"isTrine\"])(this.seniority, this.cleanInput(i)))\n    else return Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"isTrine\"])(this.seniority, n)\n  }\n\n  isSquare(tzi) {\n    let n = tzi instanceof Tzi ? tzi.seniority : tzi\n    return Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"isSquare\"])(this.seniority, n)\n  }\n\n  isKind(tzi) {\n    let n = tzi instanceof Tzi ? tzi.order : tzi\n    return Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"isKind\"])(this.order, n)\n  }\n\n  isUnity(tzi) {\n    let n = this.cleanInput(tzi)\n    if (Array.isArray(n)) return n.reduce((p, i) => \n                                    p === false \n                                    ? false\n                                    : Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"isUnity\"])(this.seniority, this.cleanInput(i)))\n    else return Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"isUnity\"])(this.seniority, n)\n  }\n  isDiverse(tzi) {\n    let n = this.cleanInput(tzi)\n    if (Array.isArray(n)) return n.reduce((p, i) => \n                                    p === false \n                                    ? false\n                                    : Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"isDiverse\"])(this.seniority, this.cleanInput(i)))\n    else return Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"isDiverse\"])(this.seniority, n)\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tzi);\n\n//# sourceURL=webpack:///./src/tzi.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });
});