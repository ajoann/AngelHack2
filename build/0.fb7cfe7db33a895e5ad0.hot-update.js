webpackHotUpdate(0,{

/***/ 223:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./frontend/components/body.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactD3Library = __webpack_require__(/*! react-d3-library */ 454);\n\nvar _reactD3Library2 = _interopRequireDefault(_reactD3Library);\n\nvar _diagram = __webpack_require__(/*! ./diagram */ 224);\n\nvar _diagram2 = _interopRequireDefault(_diagram);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar RD3Component = _reactD3Library2.default.Component;\nconsole.log('node', _diagram2.default);\n\nvar Body = function (_React$Component) {\n  _inherits(Body, _React$Component);\n\n  function Body(props) {\n    _classCallCheck(this, Body);\n\n    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));\n\n    _this.state = {\n      d3: ''\n    };\n    return _this;\n  }\n\n  _createClass(Body, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.setState({ d3: _diagram2.default });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(RD3Component, { data: this.state.d3 })\n      );\n    }\n  }]);\n\n  return Body;\n}(_react2.default.Component);\n\nexports.default = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvYm9keS5qcz9mYmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmQzIGZyb20gJ3JlYWN0LWQzLWxpYnJhcnknO1xuaW1wb3J0IG5vZGUgZnJvbSAnLi9kaWFncmFtJztcbmNvbnN0IFJEM0NvbXBvbmVudCA9IHJkMy5Db21wb25lbnQ7XG5jb25zb2xlLmxvZygnbm9kZScsIG5vZGUpO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpO1xuICB0aGlzLnN0YXRlID0ge1xuICAgIGQzOiAnJ1xuICB9XG59XG5cbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgIHRoaXMuc2V0U3RhdGUoe2QzOiBub2RlfSk7XG4gfVxuXG4gcmVuZGVyKCkge1xuICAgcmV0dXJuIChcbiAgICAgPGRpdj5cbiAgICAgICA8UkQzQ29tcG9uZW50IGRhdGE9e3RoaXMuc3RhdGUuZDN9IC8+XG4gICAgIDwvZGl2PlxuICAgKVxuIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL2JvZHkuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQWxCQTtBQUNBO0FBb0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///223\n");

/***/ })

})