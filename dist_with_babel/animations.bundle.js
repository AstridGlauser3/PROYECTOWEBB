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

/***/ "./src/je.js":
/*!*******************!*\
  !*** ./src/je.js ***!
  \*******************/
/***/ (() => {

eval("function reveal() {\n  var reveals = document.querySelectorAll(\".reveal\");\n  for (var i = 0; i < reveals.length; i++) {\n    var windowHeight = window.innerHeight;\n    var elementTop = reveals[i].getBoundingClientRect().top;\n    var elementVisible = 150;\n    if (elementTop < windowHeight - elementVisible) {\n      reveals[i].classList.add(\"active\");\n    } else {\n      reveals[i].classList.remove(\"active\");\n    }\n  }\n}\nwindow.addEventListener(\"scroll\", reveal);\nfunction zoom() {\n  var zooms = document.querySelectorAll(\".zoom\");\n  for (var i = 0; i < zooms.length; i++) {\n    var windowHeight = window.innerHeight;\n    var elementTop = zooms[i].getBoundingClientRect().top;\n    var elementVisible = 150;\n    if (elementTop < windowHeight - elementVisible) {\n      zooms[i].classList.add(\"active\");\n    } else {\n      zooms[i].classList.remove(\"active\");\n    }\n  }\n}\nwindow.addEventListener(\"scroll\", zoom);\n\n//# sourceURL=webpack://webpacklab/./src/je.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/je.js"]();
/******/ 	
/******/ })()
;