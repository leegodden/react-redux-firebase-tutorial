(this["webpackJsonpreact-redux-firebase-ecommerce"] = this["webpackJsonpreact-redux-firebase-ecommerce"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/styles/styles.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n/********************************************************/\n/* DEFAULT STYLES§\n/********************************************************/\nhtml {\n  font-size: 10px; }\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0; }\n\nhtml,\nbody,\n#root,\n.App {\n  height: 100%; }\n\n*,\n::before,\n::after {\n  box-sizing: border-box; }\n\nbody {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 1.8rem;\n  font-weight: 400;\n  line-height: 1; }\n\na {\n  text-decoration: none;\n  cursor: pointer; }\n\n.main {\n  width: 100%;\n  height: calc(100% - 20px);\n  max-width: 1450px;\n  padding: 0 10px;\n  margin: 0 auto; }\n\n/********************************************************/\n/* HEADER STYLES\n/********************************************************/\n.header {\n  height: 6.5rem;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); }\n\n.wrap {\n  position: relative;\n  height: 100%;\n  max-width: 1450px;\n  margin: 0 auto; }\n\n.logo {\n  width: 13rem;\n  position: absolute;\n  top: 50%;\n  left: 10px;\n  transform: translateY(-50%); }\n\nimg {\n  display: block;\n  width: 100%;\n  margin: 0; }\n\n.homepage {\n  height: 100%; }\n\n/********************************************************/\n/* DIRECTORY PAGE \n/********************************************************/\n.directory {\n  height: 100%; }\n  .directory .wrap {\n    display: inline-block;\n    width: 100%;\n    height: 100%; }\n    .directory .wrap .item {\n      position: relative;\n      width: 50%;\n      height: 100%;\n      float: left;\n      background-position: center;\n      background-repeat: no-repeat;\n      background-size: cover; }\n      .directory .wrap .item::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-color: rgba(0, 0, 0, 0.3);\n        width: 100%;\n        height: 100%;\n        z-index: 1; }\n      .directory .wrap .item a {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        z-index: 2;\n        font-size: 2rem;\n        line-height: 1;\n        font-weight: 400;\n        text-transform: uppercase;\n        background: rgba(255, 255, 255, 0.9);\n        padding: 10px 15px;\n        border: 1px solid black; }\n        .directory .wrap .item a:hover {\n          background: rgba(223, 216, 216, 0.9);\n          opacity: 85%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/Header */ "./src/components/header/Header.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Home */ "./src/pages/Home.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/leegodden/Desktop/dev/react-redux-firebase-ecommerce/src/App.js";





function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/shopMens.jpg":
/*!*********************************!*\
  !*** ./src/assets/shopMens.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/shopMens.19190d05.jpg";

/***/ }),

/***/ "./src/assets/shopWomens.jpg":
/*!***********************************!*\
  !*** ./src/assets/shopWomens.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/shopWomens.c9c60ae5.jpg";

/***/ }),

/***/ "./src/components/directory/Directory.js":
/*!***********************************************!*\
  !*** ./src/components/directory/Directory.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_shopMens_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../assets/shopMens.jpg */ "./src/assets/shopMens.jpg");
/* harmony import */ var _assets_shopMens_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_shopMens_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_shopWomens_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/shopWomens.jpg */ "./src/assets/shopWomens.jpg");
/* harmony import */ var _assets_shopWomens_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_shopWomens_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/leegodden/Desktop/dev/react-redux-firebase-ecommerce/src/components/directory/Directory.js";





const Directory = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "directory",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    style: {
      backgroundImage: `url(${_assets_shopWomens_jpg__WEBPACK_IMPORTED_MODULE_2___default.a})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Shop Womens")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "item",
    style: {
      backgroundImage: `url(${_assets_shopMens_jpg__WEBPACK_IMPORTED_MODULE_1___default.a})`
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "Shop Mens"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Directory);

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_logo_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/leegodden/Desktop/dev/react-redux-firebase-ecommerce/src/components/header/Header.js";




const Header = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_logo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "simpletut logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/Users/leegodden/Desktop/dev/react-redux-firebase-ecommerce/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }
})), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_directory_Directory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/directory/Directory */ "./src/components/directory/Directory.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/leegodden/Desktop/dev/react-redux-firebase-ecommerce/src/pages/Home.js";




const Home = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "homepage",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_directory_Directory__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/styles.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/leegodden/Desktop/dev/react-redux-firebase-ecommerce/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/leegodden/Desktop/dev/react-redux-firebase-ecommerce/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/leegodden/Desktop/dev/react-redux-firebase-ecommerce/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map