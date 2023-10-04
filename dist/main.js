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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --icon-bgc: rgb(255, 255, 255);\n  --light-gray: hsl(217, 16%, 45%);\n  --blue-text: hsl(229, 64%, 46%);\n  --dark-grey: hsl(229, 25%, 31%);\n}\n\nbody {\n  height: 100vh;\n  font-family: \"Barlow Semi Condensed\", sans-serif;\n  background: linear-gradient(hsl(214, 47%, 23%), hwb(238 8% 78%));\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  position: relative;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n  margin-top: 2rem;\n  padding: 1rem;\n  margin-inline: auto;\n  border: 2px solid var(--light-gray);\n  border-radius: 15px;\n  color: var(--icon-bgc);\n  text-transform: uppercase;\n}\n.heading__title {\n  display: flex;\n  flex-direction: column;\n  line-height: 0.8;\n  font-size: 1.3rem;\n}\n.heading__score {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 5rem;\n  border-radius: 6px;\n  background-color: var(--icon-bgc);\n  padding: 0.5rem;\n}\n.heading__score--title {\n  font-size: 0.7rem;\n  letter-spacing: 1px;\n  color: var(--blue-text);\n}\n.heading__score--value {\n  font-size: 2.3rem;\n  font-weight: 800;\n  line-height: 0.8;\n  color: var(--dark-grey);\n}\n\n.game-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  height: 33vh;\n  margin: 0 auto;\n}\n\n.triangle {\n  scale: 0.8;\n}\n\n.game-container__item-border {\n  width: 7rem;\n  height: 7rem;\n  border: 17px solid;\n  border-radius: 50%;\n  cursor: pointer;\n}\n.game-container__item-border .icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 5rem;\n  height: 5rem;\n  margin-bottom: 1rem;\n  background-color: var(--icon-bgc);\n  border-radius: 50%;\n  box-shadow: 0px -5px 0px hsl(0, 0%, 82%);\n}\n.game-container__item-border--rock {\n  position: absolute;\n  bottom: 0;\n}\n.game-container__item-border--paper {\n  position: absolute;\n  top: -2rem;\n  left: 1rem;\n}\n.game-container__item-border--scissors {\n  position: absolute;\n  right: 1rem;\n  top: -2rem;\n}\n\n.rules-container {\n  width: 100%;\n}\n.rules-container__open-btn {\n  position: absolute;\n  bottom: 4rem;\n  right: 50%;\n  transform: translate(50%);\n  padding: 0.5rem 2rem;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  border: 1px solid var(--icon-bgc);\n  border-radius: 5px;\n  color: var(--icon-bgc);\n  background-color: transparent;\n  cursor: pointer;\n}\n.rules-container__background {\n  display: flex;\n  align-items: center;\n}\n.rules-container__rules-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  border-radius: 0px;\n  margin: 0 auto;\n  background-color: var(--icon-bgc);\n}\n.rules-container__rules-img {\n  position: absolute;\n  top: 50%;\n  transform: translate(0%, -50%);\n  padding-block: 1.5rem;\n}\n.rules-container__close-btn {\n  position: absolute;\n  bottom: 4rem;\n  left: 50%;\n  transform: translate(-50%);\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n.rules-container__rules-flex {\n  display: flex;\n  justify-content: space-between;\n  padding: 1.5rem;\n}\n.rules-container__rules-title {\n  font-size: 1.9rem;\n  position: absolute;\n  top: 4rem;\n  left: 50%;\n  transform: translate(-50%);\n  font-weight: bold;\n  text-transform: uppercase;\n  color: var(--dark-grey);\n}\n\n.game-round {\n  margin: 0 auto;\n  display: grid;\n  width: 90%;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  align-items: start;\n  justify-items: center;\n}\n.game-round__grid-one {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n.game-round__grid-two {\n  grid-column: 1/3;\n  grid-row: span 2;\n}\n.game-round__grid-three {\n  grid-column: 2/3;\n  grid-row: 1/2;\n}\n.game-round__grid-one, .game-round__grid-three {\n  max-height: 160px;\n  display: grid;\n  gap: 1rem;\n  grid-template-rows: 1fr 1fr;\n  align-items: center;\n  justify-items: center;\n}\n.game-round__grid-one .gamme-round__title, .game-round__grid-three .gamme-round__title {\n  padding-top: 1rem;\n}\n.game-round__title {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-weight: bold;\n  color: var(--icon-bgc);\n  grid-row: 2/3;\n  font-size: 0.8rem;\n}\n.game-round__btn {\n  padding: 0.8rem 2.5rem;\n  font-size: 0.7rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  border: none;\n  border-radius: 5px;\n  color: var(--dark-grey);\n  cursor: pointer;\n  transition: color 0.3s;\n}\n.game-round__btn:hover {\n  color: hsl(349, 70%, 56%);\n}\n.game-round__result-name {\n  display: flex;\n  justify-content: center;\n  height: 2.5rem;\n  margin-bottom: 1rem;\n  font-size: 2.5rem;\n  text-transform: uppercase;\n  color: var(--icon-bgc);\n}\n\n.img {\n  display: flex;\n  justify-content: center;\n}\n\n.background-active {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  backdrop-filter: blur(2px);\n  background-color: rgba(0, 0, 0, 0.329);\n}\n\n.inactive {\n  display: none;\n}\n\n.zIndex-active {\n  z-index: -10;\n}\n\n.computer-icon-bg {\n  width: 7rem;\n  height: 7rem;\n  margin: 0;\n  border-radius: 50%;\n  background-color: hsl(229, 50%, 20%);\n}\n\n.win-bg {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 7rem;\n  border-radius: 50%;\n  transition: box-shadow 0.5s ease-out 1s;\n  box-shadow: 0 0 0 40px rgba(255, 255, 255, 0.034), 0 0 0 80px rgba(255, 255, 255, 0.027), 0 0 0 120px rgba(255, 255, 255, 0.014);\n}\n\n@media (min-width: 400px) {\n  .game-container__item-border {\n    width: 8rem;\n    height: 8rem;\n  }\n  .game-container__item-border .icon {\n    width: 6rem;\n    height: 6rem;\n  }\n  .game-container__item-border--paper, .game-container__item-border--scissors {\n    top: -1rem;\n  }\n  .game-container__item-border--rock {\n    bottom: 1rem;\n  }\n  .computer-icon-bg {\n    width: 8rem;\n    height: 8rem;\n  }\n}\n@media (min-width: 750px) {\n  .heading {\n    width: 40%;\n  }\n  .heading__title {\n    font-size: 2rem;\n  }\n  .heading__score--value {\n    font-size: 2.8rem;\n  }\n  .game-container {\n    width: 30rem;\n  }\n  .triangle {\n    scale: 1;\n  }\n  .game-container__item-border {\n    width: 11rem;\n    height: 11rem;\n    border: 25px solid;\n  }\n  .game-container__item-border .icon {\n    width: 8rem;\n    height: 8rem;\n    box-shadow: 0px -8px 0px hsl(0, 0%, 82%);\n  }\n  .game-container__item-border--rock {\n    bottom: 0;\n  }\n  .game-container__item-border--paper {\n    top: -2rem;\n    left: 1rem;\n  }\n  .game-container__item-border--scissors {\n    right: 1rem;\n    top: -2rem;\n  }\n  .computer-icon-bg {\n    width: 11rem;\n    height: 11rem;\n  }\n  .rules-container__rules-content {\n    position: relative;\n    width: 40%;\n    height: 40%;\n    border-radius: 10px;\n  }\n  .rules-container__close-btn {\n    position: relative;\n    bottom: auto;\n    left: auto;\n    transform: translate(0);\n  }\n  .rules-container__rules-title {\n    position: relative;\n    top: auto;\n    left: auto;\n    transform: translate(0);\n  }\n}\n@media (min-width: 1000px) and (max-height: 850px) {\n  .game-container__item-border {\n    width: 8rem;\n    height: 8rem;\n    border: 17px solid;\n  }\n  .game-container__item-border .icon {\n    width: 6rem;\n    height: 6rem;\n    box-shadow: 0px -5px 0px hsl(0, 0%, 82%);\n  }\n  .game-container__item-border--paper {\n    top: -3rem;\n    left: 3rem;\n  }\n  .game-container__item-border--scissors {\n    right: 3rem;\n    top: -3rem;\n  }\n  .triangle {\n    scale: 0.8;\n  }\n  .computer-icon-bg {\n    width: 8rem;\n    height: 8rem;\n  }\n}\n.paper-border-color {\n  border-color: hsl(230, 89%, 65%);\n  box-shadow: 0px 8px 1px hsl(230, 89%, 62%);\n}\n\n.rock-border-color {\n  border-color: hsl(349, 70%, 56%);\n  box-shadow: 0px 8px 1px hsl(349, 71%, 52%);\n}\n\n.scissors-border-color {\n  border-color: hsl(40, 84%, 53%);\n  box-shadow: 0px 8px 1px hsl(39, 89%, 49%);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _views_iconsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/iconsView */ \"./src/views/iconsView.js\");\n/* harmony import */ var _views_rulesView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/rulesView */ \"./src/views/rulesView.js\");\n/* harmony import */ var _views_battleScreenView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/battleScreenView */ \"./src/views/battleScreenView.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_views_iconsView__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n_views_rulesView__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayRules();\r\nlet value = 0;\r\nconst gameLogic = async () => {\r\n\tconst score = document.getElementById(\"score\");\r\n\tconst player = document.getElementById(\"player-icon-src\").src;\r\n\tconst computer = document.getElementById(\"computer-icon-src\").src;\r\n\tconst roundResult = document.getElementById(\"game-result\");\r\n\tconst playerIcon = document.querySelector(\".player-icon-highlight\");\r\n\tconst computerIcon = document.querySelector(\".computer-icon-highlight\");\r\n\r\n\tif (player === computer) roundResult.textContent = \"draw\";\r\n\r\n\tif (\r\n\t\t(player.includes(\"paper\") && computer.includes(\"rock\")) ||\r\n\t\t(player.includes(\"rock\") && computer.includes(\"scissors\")) ||\r\n\t\t(player.includes(\"scissors\") && computer.includes(\"paper\"))\r\n\t) {\r\n\t\troundResult.textContent = \"you win\";\r\n\t\tvalue += 1;\r\n\t\t_views_battleScreenView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].winnerHighlight(playerIcon);\r\n\t}\r\n\r\n\tif (\r\n\t\t(player.includes(\"paper\") && computer.includes(\"scissors\")) ||\r\n\t\t(player.includes(\"rock\") && computer.includes(\"paper\")) ||\r\n\t\t(player.includes(\"scissors\") && computer.includes(\"rock\"))\r\n\t) {\r\n\t\troundResult.textContent = \"you lose\";\r\n\t\tvalue -= 1;\r\n\t\t// value--;\r\n\t\t_views_battleScreenView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].winnerHighlight(computerIcon);\r\n\t}\r\n\tawait _views_battleScreenView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].showWinResult();\r\n\tscore.textContent = value;\r\n};\r\n\r\nconst game = () => {\r\n\tconst iconsArr = [\r\n\t\t...document.querySelectorAll(\".game-container__item-border\"),\r\n\t];\r\n\ticonsArr.forEach(icon => {\r\n\t\ticon.addEventListener(\"click\", async e => {\r\n\t\t\tconst target = e.target.closest(\".game-container__item-border\")\r\n\t\t\t\t.children[0].children[0].src;\r\n\t\t\t_views_battleScreenView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].startGame(target);\r\n\t\t\tawait _views_battleScreenView__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setComputerRandomIcon();\r\n\t\t\tgameLogic();\r\n\t\t});\r\n\t});\r\n};\r\n\r\ngame();\r\n\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/script.js?");

/***/ }),

/***/ "./src/views/battleScreenView.js":
/*!***************************************!*\
  !*** ./src/views/battleScreenView.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_paper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/paper.svg */ \"./src/assets/paper.svg\");\n/* harmony import */ var _assets_rock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/rock.svg */ \"./src/assets/rock.svg\");\n/* harmony import */ var _assets_scissors_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/scissors.svg */ \"./src/assets/scissors.svg\");\n\r\n\r\n\r\n\r\nfunction battleScreen() {\r\n\tlet playerIconSrc;\r\n\tconst battleContainer = document.querySelector(\".battle-container\");\r\n\r\n\tconst battleMarkup = () => {\r\n\t\tbattleContainer.innerHTML = `\r\n\t\t<div class=\"game-round\">\r\n\t\t\t<div class=\"game-round__grid-one\">\r\n\t\t\t\t<p class=\"game-round__title\">You picked</p>\r\n\t\t\t\t<div class=\"player-icon-highlight\" >\r\n\t\t\t\t\t<div class=\"game-container__item-border player-icon\" id=\"player-icon\">\r\n\t\t\t\t\t\t<div class=\"icon\"><img id=\"player-icon-src\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"inactive game-round__result-container game-round__grid-two\">\r\n\t\t\t\t<p class=\"game-round__result-name\" id=\"game-result\"></p>\r\n\t\t\t\t<button id=\"new-round-btn\" class=\"game-round__btn\">Play again</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"game-round__grid-three\">\r\n\t\t\t\t<p class=\"game-round__title\">The house picked</p>\r\n\t\t\t\t<div class=\"computer-icon-highlight\">\r\n\t\t\t\t\t<div class=\"computer-icon-bg computer-icon\" id=\"computer-icon\">\r\n\t\t\t\t\t\t<div class=\"icon\"><img id=\"computer-icon-src\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n    \r\n        `;\r\n\t};\r\n\r\n\tconst setIconSrc = iconSrc => {\r\n\t\tplayerIconSrc = document.getElementById(\"player-icon-src\");\r\n\t\tplayerIconSrc.src = iconSrc;\r\n\t};\r\n\tconst setPlayerBorderColor = target => {\r\n\t\tconst playerIconBorder = document.querySelector(\".player-icon\");\r\n\r\n\t\tif (target.includes(\"paper\")) {\r\n\t\t\tplayerIconBorder.classList.add(\"paper-border-color\");\r\n\t\t}\r\n\t\tif (target.includes(\"rock\")) {\r\n\t\t\tplayerIconBorder.classList.add(\"rock-border-color\");\r\n\t\t}\r\n\t\tif (target.includes(\"scissors\")) {\r\n\t\t\tplayerIconBorder.classList.add(\"scissors-border-color\");\r\n\t\t}\r\n\t};\r\n\r\n\tconst setComputerRandomIcon = () =>\r\n\t\tnew Promise(resolve => {\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\tconst number = Math.floor(Math.random() * 3) + 1;\r\n\t\t\t\tconst computerIconSrc = document.getElementById(\"computer-icon-src\");\r\n\t\t\t\tconst computerIconBorder = document.getElementById(\"computer-icon\");\r\n\t\t\t\tif (number === 1) {\r\n\t\t\t\t\tcomputerIconSrc.src = _assets_paper_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n\t\t\t\t\tcomputerIconBorder.classList.add(\"paper-border-color\");\r\n\t\t\t\t}\r\n\t\t\t\tif (number === 2) {\r\n\t\t\t\t\tcomputerIconSrc.src = _assets_rock_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n\t\t\t\t\tcomputerIconBorder.classList.add(\"rock-border-color\");\r\n\t\t\t\t}\r\n\t\t\t\tif (number === 3) {\r\n\t\t\t\t\tcomputerIconSrc.src = _assets_scissors_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n\t\t\t\t\tcomputerIconBorder.classList.add(\"scissors-border-color\");\r\n\t\t\t\t}\r\n\t\t\t\tcomputerIconBorder.classList.add(\"game-container__item-border\");\r\n\t\t\t\tcomputerIconBorder.classList.remove(\"computer-icon-bg\");\r\n\t\t\t\tresolve();\r\n\t\t\t}, 1000);\r\n\t\t});\r\n\tconst showWinResult = () =>\r\n\t\tnew Promise(resolve => {\r\n\t\t\tsetTimeout(() => {\r\n\t\t\t\tconst resultContainer = document.querySelector(\r\n\t\t\t\t\t\".game-round__result-container\"\r\n\t\t\t\t);\r\n\t\t\t\tconst gameContainer = document.querySelector(\".game-round\");\r\n\t\t\t\tresultContainer.style.display = \"block\";\r\n\t\t\t\tgameContainer.style.justifyContent = \"space-between\";\r\n\t\t\t\tresolve();\r\n\t\t\t}, 1000);\r\n\t\t});\r\n\r\n\tconst toggleGameContainer = () => {\r\n\t\tconst gameContainer = document.querySelector(\".game-container\");\r\n\t\tgameContainer.classList.toggle(\"inactive\");\r\n\t};\r\n\tconst winnerHighlight = winner => {\r\n\t\twinner.classList.add(\"win-bg\");\r\n\t};\r\n\r\n\tconst newRound = () => {\r\n\t\tconst newRoundBtn = document.getElementById(\"new-round-btn\");\r\n\t\tnewRoundBtn.addEventListener(\"click\", () => {\r\n\t\t\ttoggleGameContainer();\r\n\t\t\tbattleContainer.classList.add(\"inactive\");\r\n\t\t});\r\n\t};\r\n\tconst startGame = target => {\r\n\t\ttoggleGameContainer();\r\n\t\tbattleMarkup();\r\n\t\tsetIconSrc(target);\r\n\t\tsetPlayerBorderColor(target);\r\n\t\tnewRound();\r\n\t\tbattleContainer.classList.remove(\"inactive\");\r\n\t};\r\n\r\n\treturn {\r\n\t\tshowWinResult,\r\n\t\twinnerHighlight,\r\n\t\tstartGame,\r\n\t\tsetComputerRandomIcon,\r\n\t};\r\n}\r\nconst battle = battleScreen();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (battle);\r\n\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/views/battleScreenView.js?");

/***/ }),

/***/ "./src/views/iconsView.js":
/*!********************************!*\
  !*** ./src/views/iconsView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ iconsView)\n/* harmony export */ });\n/* harmony import */ var _assets_paper_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/paper.svg */ \"./src/assets/paper.svg\");\n/* harmony import */ var _assets_rock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/rock.svg */ \"./src/assets/rock.svg\");\n/* harmony import */ var _assets_scissors_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/scissors.svg */ \"./src/assets/scissors.svg\");\n/* harmony import */ var _assets_triangle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/triangle.svg */ \"./src/assets/triangle.svg\");\n\r\n\r\n\r\n\r\n\r\nfunction iconsView() {\r\n\tconst triangleImg = document.getElementById(\"triangleImg\");\r\n\tconst paperImg = document.getElementById(\"paperImg\");\r\n\tconst rockImg = document.getElementById(\"rockImg\");\r\n\tconst scissorsImg = document.getElementById(\"scissorsImg\");\r\n\ttriangleImg.src = _assets_triangle_svg__WEBPACK_IMPORTED_MODULE_3__;\r\n\tpaperImg.src = _assets_paper_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n\trockImg.src = _assets_rock_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n\tscissorsImg.src = _assets_scissors_svg__WEBPACK_IMPORTED_MODULE_2__;\r\n}\r\n\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/views/iconsView.js?");

/***/ }),

/***/ "./src/views/rulesView.js":
/*!********************************!*\
  !*** ./src/views/rulesView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_rulesImg_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/rulesImg.svg */ \"./src/assets/rulesImg.svg\");\n/* harmony import */ var _assets_iconClose_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/iconClose.svg */ \"./src/assets/iconClose.svg\");\n\r\n\r\n\r\nfunction rulesFn() {\r\n\tconst displayReulesMarkup = () => {\r\n\t\tconst rulesImage = document.getElementById(\"rules-image\");\r\n\t\trulesImage.innerHTML = `\r\n                <div class=\"rules-container__rules-flex\">\r\n                    <p class=\"rules-container__rules-title\">Rules</p>\r\n                    <button id=\"close-btn\" \r\n                    class=\"rules-container__close-btn\">\r\n                        <img id=\"close-btn-img\" alt=\"close button\">\r\n                    </button>\r\n                </div>\r\n                <div class=\"img\"><img id=\"rules\" class=\"rules-container__rules-img\" alt=\"\"></div>\r\n                `;\r\n\t};\r\n\tconst setImgSrc = () => {\r\n\t\tconst rulesTab = document.getElementById(\"rules\");\r\n\t\trulesTab.src = _assets_rulesImg_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n\t\tconst closeBtnImg = document.getElementById(\"close-btn-img\");\r\n\t\tcloseBtnImg.src = _assets_iconClose_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n\t};\r\n\t\r\n\tconst toggleZIndex = () => {\r\n\t\tconst gameContainer = document.querySelector(\".game-container\");\r\n\t\tgameContainer.classList.toggle(\"zIndex-active\");\r\n\t};\r\n\tconst toggleOverlay = () => {\r\n\t\tconst rulesBackground = document.getElementById(\"rules-background\");\r\n\t\trulesBackground.classList.toggle(\"background-active\");\r\n\t};\r\n\tconst closeRulesFunc = () => {\r\n\t\tconst rulesImage = document.getElementById(\"rules-image\");\r\n\t\trulesImage.innerHTML = \"\";\r\n\t\ttoggleOverlay();\r\n\t\ttoggleZIndex();\r\n\t};\r\n\tconst closeRulesWindow = () => {\r\n\t\tconst closeBtnImg = document.getElementById(\"close-btn-img\");\r\n\t\tcloseBtnImg.addEventListener(\"click\", closeRulesFunc);\r\n\t};\r\n\tconst displayRules = () => {\r\n\t\tconst openRulesBtn = document.getElementById(\"rules-btn\");\r\n\t\topenRulesBtn.addEventListener(\"click\", ()=> {\r\n\t\t\ttoggleZIndex();\r\n\t\t\tdisplayReulesMarkup();\r\n\t\t\tsetImgSrc();\r\n\t\t\ttoggleOverlay();\r\n\t\t\tcloseRulesWindow();\r\n\t\t});\r\n\t};\r\n\treturn {\r\n\t\tdisplayRules,\r\n\t};\r\n}\r\n\r\nconst rules = rulesFn();\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rules);\r\n\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/views/rulesView.js?");

/***/ }),

/***/ "./src/assets/iconClose.svg":
/*!**********************************!*\
  !*** ./src/assets/iconClose.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"iconClose.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/assets/iconClose.svg?");

/***/ }),

/***/ "./src/assets/paper.svg":
/*!******************************!*\
  !*** ./src/assets/paper.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"paper.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/assets/paper.svg?");

/***/ }),

/***/ "./src/assets/rock.svg":
/*!*****************************!*\
  !*** ./src/assets/rock.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"rock.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/assets/rock.svg?");

/***/ }),

/***/ "./src/assets/rulesImg.svg":
/*!*********************************!*\
  !*** ./src/assets/rulesImg.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"rulesImg.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/assets/rulesImg.svg?");

/***/ }),

/***/ "./src/assets/scissors.svg":
/*!*********************************!*\
  !*** ./src/assets/scissors.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"scissors.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/assets/scissors.svg?");

/***/ }),

/***/ "./src/assets/triangle.svg":
/*!*********************************!*\
  !*** ./src/assets/triangle.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"triangle.svg\";\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/assets/triangle.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;