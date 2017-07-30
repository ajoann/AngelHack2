webpackHotUpdate(0,{

/***/ 223:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./frontend/components/body.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactD3Library = __webpack_require__(/*! react-d3-library */ 454);\n\nvar _reactD3Library2 = _interopRequireDefault(_reactD3Library);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BarChart = _reactD3Library2.default.BarChart;\nvar barData = [{\n  \"name\": \"Series A\",\n  \"values\": [{ \"x\": 1, \"y\": 150 }, { \"x\": 2, \"y\": 290 }, { \"x\": 3, \"y\": -25 }]\n}, {\n  \"name\": \"Series B\",\n  \"values\": [{ \"x\": 1, \"y\": 9 }, { \"x\": 2, \"y\": 49 }, { \"x\": 3, \"y\": -20 }]\n}, {\n  \"name\": \"Series C\",\n  \"values\": [{ \"x\": 1, \"y\": 14 }, { \"x\": 2, \"y\": 77 }, { \"x\": 3, \"y\": -70 }]\n}];\n\nvar Body = function (_React$Component) {\n  _inherits(Body, _React$Component);\n\n  function Body() {\n    _classCallCheck(this, Body);\n\n    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));\n  }\n\n  _createClass(Body, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        'asdasdasdasdasda',\n        _react2.default.createElement(BarChart, {\n          data: [{\n            \"name\": \"Series A\",\n            \"values\": [{ \"x\": 1, \"y\": 150 }, { \"x\": 2, \"y\": 290 }, { \"x\": 3, \"y\": -25 }]\n          }, {\n            \"name\": \"Series B\",\n            \"values\": [{ \"x\": 1, \"y\": 9 }, { \"x\": 2, \"y\": 49 }, { \"x\": 3, \"y\": -20 }]\n          }, {\n            \"name\": \"Series C\",\n            \"values\": [{ \"x\": 1, \"y\": 14 }, { \"x\": 2, \"y\": 77 }, { \"x\": 3, \"y\": -70 }]\n          }],\n          width: 500,\n          height: 300,\n          title: 'Bar Chart',\n          xAxisLabel: 'Value',\n          yAxisLabel: 'Label'\n        })\n      );\n    }\n  }]);\n\n  return Body;\n}(_react2.default.Component);\n\nexports.default = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvYm9keS5qcz9mYmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmQzIGZyb20gJ3JlYWN0LWQzLWxpYnJhcnknO1xudmFyIEJhckNoYXJ0ID0gcmQzLkJhckNoYXJ0XG52YXIgYmFyRGF0YSA9IFtcbiAge1xuICAgIFwibmFtZVwiOiBcIlNlcmllcyBBXCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgeyBcInhcIjogMSwgXCJ5XCI6ICAxNTB9LFxuICAgICAgeyBcInhcIjogMiwgXCJ5XCI6IDI5MH0sXG4gICAgICB7IFwieFwiOiAzLCBcInlcIjogLTI1fSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTZXJpZXMgQlwiLFxuICAgIFwidmFsdWVzXCI6IFtcbiAgICAgIHsgXCJ4XCI6IDEsIFwieVwiOiAgOX0sXG4gICAgICB7IFwieFwiOiAyLCBcInlcIjogNDl9LFxuICAgICAgeyBcInhcIjogMywgXCJ5XCI6IC0yMH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2VyaWVzIENcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7IFwieFwiOiAxLCBcInlcIjogIDE0fSxcbiAgICAgIHsgXCJ4XCI6IDIsIFwieVwiOiA3N30sXG4gICAgICB7IFwieFwiOiAzLCBcInlcIjogLTcwfSxcbiAgICBdXG4gIH1cbl07XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICAoXG4gICAgICA8ZGl2PlxuICAgICAgICBhc2Rhc2Rhc2Rhc2Rhc2RhXG4gICAgXHQ8QmFyQ2hhcnRcbiAgICAgIGRhdGE9e1tcbiAgICAgICAge1xuICAgICAgICAgIFwibmFtZVwiOiBcIlNlcmllcyBBXCIsXG4gICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgeyBcInhcIjogMSwgXCJ5XCI6ICAxNTB9LFxuICAgICAgICAgICAgeyBcInhcIjogMiwgXCJ5XCI6IDI5MH0sXG4gICAgICAgICAgICB7IFwieFwiOiAzLCBcInlcIjogLTI1fSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcIm5hbWVcIjogXCJTZXJpZXMgQlwiLFxuICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHsgXCJ4XCI6IDEsIFwieVwiOiAgOX0sXG4gICAgICAgICAgICB7IFwieFwiOiAyLCBcInlcIjogNDl9LFxuICAgICAgICAgICAgeyBcInhcIjogMywgXCJ5XCI6IC0yMH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJuYW1lXCI6IFwiU2VyaWVzIENcIixcbiAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7IFwieFwiOiAxLCBcInlcIjogIDE0fSxcbiAgICAgICAgICAgIHsgXCJ4XCI6IDIsIFwieVwiOiA3N30sXG4gICAgICAgICAgICB7IFwieFwiOiAzLCBcInlcIjogLTcwfSxcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF19XG4gICAgICB3aWR0aD17NTAwfVxuICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICB0aXRsZT1cIkJhciBDaGFydFwiXG4gICAgICB4QXhpc0xhYmVsPVwiVmFsdWVcIlxuICAgICAgeUF4aXNMYWJlbD1cIkxhYmVsXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICl9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9ib2R5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVNBO0FBQ0E7QUFGQTtBQVNBO0FBQ0E7QUFGQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0JBO0FBRkE7QUFvQ0E7Ozs7QUF2Q0E7QUFDQTtBQXlDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///223\n");

/***/ })

})