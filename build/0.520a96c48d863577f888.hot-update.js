webpackHotUpdate(0,{

/***/ 223:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./frontend/components/body.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactD3Library = __webpack_require__(/*! react-d3-library */ 452);\n\nvar _reactD3Library2 = _interopRequireDefault(_reactD3Library);\n\nvar _diagram = __webpack_require__(/*! ./diagram */ 585);\n\nvar _diagram2 = _interopRequireDefault(_diagram);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RD3Component = _reactD3Library2.default.Component;\n\nvar Body = function (_React$Component) {\n  _inherits(Body, _React$Component);\n\n  function Body() {\n    _classCallCheck(this, Body);\n\n    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));\n  }\n\n  _createClass(Body, [{\n    key: 'getInitialState',\n    value: function getInitialState() {\n      return { d3: '' };\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.setState({ d3: _diagram2.default });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(RD3Component, { data: this.state.d3 })\n      );\n    }\n  }]);\n\n  return Body;\n}(_react2.default.Component);\n\nexports.default = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvYm9keS5qcz9mYmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmQzIGZyb20gJ3JlYWN0LWQzLWxpYnJhcnknO1xuaW1wb3J0IG5vZGUgZnJvbSAnLi9kaWFncmFtJztcbmNvbnN0IFJEM0NvbXBvbmVudCA9IHJkMy5Db21wb25lbnQ7XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgcmV0dXJuIHtkMzogJyd9XG4gfVxuXG4gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICB0aGlzLnNldFN0YXRlKHtkMzogbm9kZX0pO1xuIH1cblxuIHJlbmRlcigpIHtcbiAgIHJldHVybiAoXG4gICAgIDxkaXY+XG4gICAgICAgPFJEM0NvbXBvbmVudCBkYXRhPXt0aGlzLnN0YXRlLmQzfSAvPlxuICAgICA8L2Rpdj5cbiAgIClcbiB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9ib2R5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQWZBO0FBQ0E7QUFpQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///223\n");

/***/ }),

/***/ 585:
/* no static exports found */
/* all exports used */
/*!****************************************!*\
  !*** ./frontend/components/diagram.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _d = __webpack_require__(/*! d3 */ 586);\n\nvar _d2 = _interopRequireDefault(_d);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar node = document.createElement('div');\n\nvar width = 960,\n    height = 500;\n\nvar svg = _d2.default.select(node).append(\"svg\").attr(\"width\", width).attr(\"height\", height);\n\nvar defs = svg.append(\"defs\");\n\ndefs.append(\"clipPath\").attr(\"id\", \"circle1\").append(\"circle\").attr(\"cx\", 350).attr(\"cy\", 200).attr(\"r\", 180);\n\ndefs.append(\"clipPath\").attr(\"id\", \"circle2\").append(\"circle\").attr(\"cx\", 550).attr(\"cy\", 200).attr(\"r\", 180);\n\nmodule.exports = node;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvZGlhZ3JhbS5qcz9iMDg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkMyBmcm9tICdkMyc7XG52YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG52YXIgd2lkdGggPSA5NjAsXG4gICAgaGVpZ2h0ID0gNTAwO1xuXG52YXIgc3ZnID0gZDMuc2VsZWN0KG5vZGUpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcblxudmFyIGRlZnMgPSBzdmcuYXBwZW5kKFwiZGVmc1wiKTtcblxuIGRlZnMuYXBwZW5kKFwiY2xpcFBhdGhcIilcbiAgICAuYXR0cihcImlkXCIsIFwiY2lyY2xlMVwiKVxuICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJjeFwiLCAzNTApXG4gICAgLmF0dHIoXCJjeVwiLCAyMDApXG4gICAgLmF0dHIoXCJyXCIsIDE4MCk7XG5cbmRlZnMuYXBwZW5kKFwiY2xpcFBhdGhcIilcbiAgICAuYXR0cihcImlkXCIsIFwiY2lyY2xlMlwiKVxuICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJjeFwiLCA1NTApXG4gICAgLmF0dHIoXCJjeVwiLCAyMDApXG4gICAgLmF0dHIoXCJyXCIsIDE4MCk7XG5cbiBtb2R1bGUuZXhwb3J0cyA9IG5vZGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL2RpYWdyYW0uanMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///585\n");

/***/ }),

/***/ 586:
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** ./~/d3/build/d3.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {


/***/ })

})