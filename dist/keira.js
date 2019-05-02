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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: Controller, View, Form, Modal, InputText, InputBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/controller */ \"./src/controller.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Controller\", function() { return _src_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _src_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/view */ \"./src/view.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return _src_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _src_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/form */ \"./src/form.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return _src_form__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _src_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/modal */ \"./src/modal.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Modal\", function() { return _src_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _src_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/input */ \"./src/input.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InputText\", function() { return _src_input__WEBPACK_IMPORTED_MODULE_4__[\"InputText\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InputBase\", function() { return _src_input__WEBPACK_IMPORTED_MODULE_4__[\"InputBase\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar _default = function _default() {\n  _classCallCheck(this, _default);\n};\n\n\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _input_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/base */ \"./src/input/base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_View) {\n  _inherits(_default, _View);\n\n  function _default(C) {\n    var _this;\n\n    _classCallCheck(this, _default);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, C));\n    _this.elements = [];\n    _this.validators = [];\n    return _this;\n  }\n\n  _createClass(_default, [{\n    key: \"append\",\n    value: function append(element) {\n      if (element instanceof _input_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n        this.elements.push(element);\n      }\n\n      this.container.append(element);\n    }\n  }, {\n    key: \"add_validator\",\n    value: function add_validator(validator) {\n      this.validators.push(validator);\n    }\n  }, {\n    key: \"is_valid_form\",\n    value: function is_valid_form(extra_context) {\n      var promises = [];\n      var values = this.get_values();\n      var v_clone = [];\n      this.validators.forEach(function (validator) {\n        return v_clone.push(validator);\n      });\n      v_clone.reverse();\n\n      var v_func = function v_func(validator) {\n        if (!validator) return Promise.resolve(false);\n        return validators.is_valid(values, extra_context).then(function (resp) {\n          if (!!resp) return Promise.resolve(true);\n          var next_validator = v_clone.pop();\n          return v_func(next_validator);\n        });\n      };\n\n      return v_func(v_clone.pop());\n    }\n  }, {\n    key: \"is_valid\",\n    value: function is_valid(extra_context) {\n      var _this2 = this;\n\n      var promises = [];\n      this.elements.forEach(function (element) {\n        promises.push(element.is_valid(extra_context));\n      });\n      return Promise.all(promises).then(function (data) {\n        var args = Array.prototype.slice.call(data);\n        var res = args.indexOf(false) < 0;\n        if (res) return Promise.resolve(false);\n        return _this2.is_valid_form(extra_context);\n      });\n    }\n  }, {\n    key: \"set_values\",\n    value: function set_values(values) {\n      this.elements.forEach(function (element) {\n        var name = element.get_name();\n\n        if (values.hasOwnProperty(name)) {\n          element.set_value(values[name]);\n        }\n      });\n    }\n  }, {\n    key: \"get_values\",\n    value: function get_values() {\n      var values = {};\n      this.elements.forEach(function (element) {\n        var name = element.get_name();\n        var value = element.get_value();\n        values[name] = value;\n      });\n      return values;\n    }\n  }]);\n\n  return _default;\n}(_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/form.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: InputText, InputBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _input_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input/text */ \"./src/input/text.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InputText\", function() { return _input_text__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _input_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input/base */ \"./src/input/base.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InputBase\", function() { return _input_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/input/base.js":
/*!***************************!*\
  !*** ./src/input/base.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ \"./src/view.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_View) {\n  _inherits(_default, _View);\n\n  function _default(name) {\n    var _this;\n\n    _classCallCheck(this, _default);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this));\n    _this.validators = [];\n    _this.name = name;\n    _this.label = null;\n    _this.help = null;\n    _this.input = null;\n    _this.label_text = '';\n    _this.help_text = '';\n    _this.container = CE('div', 'form-group');\n    return _this;\n  }\n\n  _createClass(_default, [{\n    key: \"set_label\",\n    value: function set_label(text) {\n      this.label_text = text;\n\n      if (!!this.label) {\n        this.label.innerText = this.label_text;\n      }\n    }\n  }, {\n    key: \"is_valid\",\n    value: function is_valid(extra_context) {\n      var _this2 = this;\n\n      return new Promise(function (res, rej) {\n        var promises = [];\n\n        var value = _this2.get_value();\n\n        _this2.validators.forEach(function (validator) {\n          promises.push(validator.is_valid(value, extra_context));\n        });\n\n        Promise.all(promises).then(function (data) {\n          var args = Array.prototype.slice.call(data);\n          var resp = args.indexOf(false) < 0;\n          res(resp);\n        }, rej);\n      });\n    }\n  }, {\n    key: \"set_help\",\n    value: function set_help(text) {\n      this.help_text = text;\n\n      if (!!this.help) {\n        this.help.innerText = this.help_text;\n      }\n    }\n  }, {\n    key: \"make\",\n    value: function make() {\n      var group = this.container;\n      this.label = this.make_label(this.label_text);\n      group.append(this.label);\n      this.input = this.make_input(this.name);\n      group.append(this.input);\n      this.help = this.make_help(this.help_text);\n      group.append(this.help);\n      return Promise.resolve();\n    }\n  }, {\n    key: \"make_label\",\n    value: function make_label(text) {\n      var label = CE('label');\n      label.innerText = !!text ? text : '';\n      return label;\n    }\n  }, {\n    key: \"make_input\",\n    value: function make_input(name) {\n      var input = CE('input', 'form-control');\n      input.name = name;\n      return input;\n    }\n  }, {\n    key: \"make_help\",\n    value: function make_help(text) {\n      var small = CE('small', 'form-text text-muted');\n      small.innerText = !!text ? text : '';\n      return small;\n    }\n  }]);\n\n  return _default;\n}(_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/input/base.js?");

/***/ }),

/***/ "./src/input/text.js":
/*!***************************!*\
  !*** ./src/input/text.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/input/base.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar _default =\n/*#__PURE__*/\nfunction (_Base) {\n  _inherits(_default, _Base);\n\n  function _default() {\n    _classCallCheck(this, _default);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(_default).apply(this, arguments));\n  }\n\n  _createClass(_default, [{\n    key: \"make_input\",\n    value: function make_input(name) {\n      var input = _get(_getPrototypeOf(_default.prototype), \"make_input\", this).call(this, name);\n\n      input.type = 'text';\n      return input;\n    }\n  }]);\n\n  return _default;\n}(_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./src/input/text.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar View = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\nvar _default =\n/*#__PURE__*/\nfunction (_View) {\n  _inherits(_default, _View);\n\n  function _default(C) {\n    var _this;\n\n    _classCallCheck(this, _default);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, C));\n    _this.titleText = null;\n    _this.header = null;\n    _this.body = null;\n    _this.footer = null;\n    return _this;\n  }\n\n  _createClass(_default, [{\n    key: \"set_title\",\n    value: function set_title(title) {\n      this.titleText = title;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      this.container = CE('div', 'modal');\n      var dialog = CE('div', 'modal-dialog');\n      this.container.append(dialog);\n      var content = CE('div', 'modal-content');\n      dialog.append(content);\n      this.header = CE('div', 'modal-header');\n      content.append(this.header);\n      this.body = CE('div', 'modal-body');\n      content.append(this.body);\n      this.footer = CE('div', 'modal-footer');\n      content.append(this.footer);\n      return this.make().then(function () {\n        if (!!_this2.titleText) {\n          var title = CE('h5', 'modal-title');\n\n          _this2.header.append(title);\n\n          title.innerText = _this2.titleText;\n          var button = CE('button');\n\n          _this2.header.append(button);\n\n          button.ariaLabel = 'Close';\n          button.click = _this2.remove.bind(_this2);\n        }\n      });\n    }\n  }, {\n    key: \"show\",\n    value: function show() {\n      this.container.display = 'block';\n    }\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.container.display = 'none';\n    }\n  }]);\n\n  return _default;\n}(View);\n\n\n\n//# sourceURL=webpack:///./src/modal.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _default; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nwindow.CE = function (tag, clas, attrs) {\n  var element = document.createElement(tag);\n\n  if (_typeof(clas) == 'object') {\n    attrs = clas;\n    clas = null;\n  }\n\n  if (!!clas) element.className = clas;\n\n  if (!!attrs) {\n    for (var attr in attrs) {\n      element.setAttribute(attr, attrs[attr]);\n    }\n  }\n\n  return element;\n};\n\nvar _default =\n/*#__PURE__*/\nfunction () {\n  function _default(C) {\n    _classCallCheck(this, _default);\n\n    this.C = C;\n    this.container = CE('div');\n  }\n\n  _createClass(_default, [{\n    key: \"make\",\n    value: function make() {\n      return Promise.resolve();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.make();\n    }\n  }, {\n    key: \"toString\",\n    value: function toString() {\n      return this.container.innerHTML;\n    }\n  }, {\n    key: \"remove\",\n    value: function remove() {\n      this.container.remove();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return this.make();\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });