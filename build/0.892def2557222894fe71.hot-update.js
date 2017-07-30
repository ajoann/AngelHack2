webpackHotUpdate(0,{

/***/ 223:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./frontend/components/body.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactD3Library = __webpack_require__(/*! react-d3-library */ 454);\n\nvar _reactD3Library2 = _interopRequireDefault(_reactD3Library);\n\nvar _diagram = __webpack_require__(/*! ./diagram */ 224);\n\nvar _diagram2 = _interopRequireDefault(_diagram);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// const RD3Component = rd3.Component;\nvar BarChart = _reactD3Library2.default.BarChart;\n\nvar barData = [{\n  \"name\": \"Series A\",\n  \"values\": [{ \"x\": 1, \"y\": 91 }, { \"x\": 2, \"y\": 290 }, { \"x\": 3, \"y\": -25 }]\n}, {\n  \"name\": \"Series B\",\n  \"values\": [{ \"x\": 1, \"y\": 9 }, { \"x\": 2, \"y\": 49 }, { \"x\": 3, \"y\": -20 }]\n}, {\n  \"name\": \"Series C\",\n  \"values\": [{ \"x\": 1, \"y\": 14 }, { \"x\": 2, \"y\": 77 }, { \"x\": 3, \"y\": -70 }]\n}];\n\nconsole.log('node', _diagram2.default);\n\nvar Body = function (_React$Component) {\n  _inherits(Body, _React$Component);\n\n  function Body(props) {\n    _classCallCheck(this, Body);\n\n    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));\n\n    _this.state = {\n      d3: ''\n    };\n    return _this;\n  }\n\n  _createClass(Body, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.setState({ d3: _diagram2.default });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(BarChart, {\n          data: barData,\n          width: 500,\n          height: 300,\n          title: 'Bar Chart',\n          xAxisLabel: 'Value',\n          yAxisLabel: 'Label'\n        })\n      );\n    }\n  }]);\n\n  return Body;\n}(_react2.default.Component);\n\nexports.default = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvYm9keS5qcz9mYmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmQzIGZyb20gJ3JlYWN0LWQzLWxpYnJhcnknO1xuaW1wb3J0IG5vZGUgZnJvbSAnLi9kaWFncmFtJztcbi8vIGNvbnN0IFJEM0NvbXBvbmVudCA9IHJkMy5Db21wb25lbnQ7XG5jb25zdCBCYXJDaGFydCA9IHJkMy5CYXJDaGFydFxuXG52YXIgYmFyRGF0YSA9IFtcbiAge1xuICAgIFwibmFtZVwiOiBcIlNlcmllcyBBXCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgeyBcInhcIjogMSwgXCJ5XCI6ICA5MX0sXG4gICAgICB7IFwieFwiOiAyLCBcInlcIjogMjkwfSxcbiAgICAgIHsgXCJ4XCI6IDMsIFwieVwiOiAtMjV9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlNlcmllcyBCXCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgeyBcInhcIjogMSwgXCJ5XCI6ICA5fSxcbiAgICAgIHsgXCJ4XCI6IDIsIFwieVwiOiA0OX0sXG4gICAgICB7IFwieFwiOiAzLCBcInlcIjogLTIwfSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTZXJpZXMgQ1wiLFxuICAgIFwidmFsdWVzXCI6IFtcbiAgICAgIHsgXCJ4XCI6IDEsIFwieVwiOiAgMTR9LFxuICAgICAgeyBcInhcIjogMiwgXCJ5XCI6IDc3fSxcbiAgICAgIHsgXCJ4XCI6IDMsIFwieVwiOiAtNzB9LFxuICAgIF1cbiAgfVxuXTtcblxuY29uc29sZS5sb2coJ25vZGUnLCBub2RlKTtcblxuY2xhc3MgQm9keSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5jb25zdHJ1Y3Rvcihwcm9wcyl7XG4gIHN1cGVyKHByb3BzKTtcbiAgdGhpcy5zdGF0ZSA9IHtcbiAgICBkMzogJydcbiAgfVxufVxuXG4gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICB0aGlzLnNldFN0YXRlKHtkMzogbm9kZX0pO1xuIH1cblxuIHJlbmRlcigpIHtcbiAgIHJldHVybiAoXG4gICAgIDxkaXY+XG4gICAgICAgPEJhckNoYXJ0XG4gICAgICBkYXRhPXtiYXJEYXRhfVxuICAgICAgd2lkdGg9ezUwMH1cbiAgICAgIGhlaWdodD17MzAwfVxuICAgICAgdGl0bGU9XCJCYXIgQ2hhcnRcIlxuICAgICAgeEF4aXNMYWJlbD1cIlZhbHVlXCJcbiAgICAgIHlBeGlzTGFiZWw9XCJMYWJlbFwiXG4gICAgICAvPlxuICAgICAgIHsvKiA8UkQzQ29tcG9uZW50IGRhdGE9e3RoaXMuc3RhdGUuZDN9IC8+ICovfVxuICAgICA8L2Rpdj5cbiAgIClcbiB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9ib2R5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBRkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBS0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVlBOzs7O0FBMUJBO0FBQ0E7QUE0QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///223\n");

/***/ })

})