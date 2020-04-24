"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var easy = require("easy");

var Message = require("./view/message"),
    PasswordForm = require("./view/passwordForm"),
    ResetPasswordButton = require("./view/resetPasswordButton");

var Element = easy.Element;

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: "childElements",
    value: function childElements() {
      return [React.createElement(PasswordForm, null), React.createElement(ResetPasswordButton, null), React.createElement(Message, null)];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var view = Element.fromProperties(View, properties);
      view.initialise();
      return view;
    }
  }]);

  return View;
}(Element);

_defineProperty(View, "tagName", "div");

_defineProperty(View, "defaultProperties", {
  className: "view"
});

module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJNZXNzYWdlIiwiUGFzc3dvcmRGb3JtIiwiUmVzZXRQYXNzd29yZEJ1dHRvbiIsIkVsZW1lbnQiLCJWaWV3IiwiYXNzaWduQ29udGV4dCIsInByb3BlcnRpZXMiLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUVBLElBQU1DLE9BQU8sR0FBR0QsT0FBTyxDQUFDLGdCQUFELENBQXZCO0FBQUEsSUFDTUUsWUFBWSxHQUFHRixPQUFPLENBQUMscUJBQUQsQ0FENUI7QUFBQSxJQUVNRyxtQkFBbUIsR0FBR0gsT0FBTyxDQUFDLDRCQUFELENBRm5DOztJQUlRSSxPLEdBQVlMLEksQ0FBWkssTzs7SUFFRkMsSTs7Ozs7Ozs7Ozs7b0NBQ1k7QUFDZCxhQUFPLENBRUwsb0JBQUMsWUFBRCxPQUZLLEVBR0wsb0JBQUMsbUJBQUQsT0FISyxFQUlMLG9CQUFDLE9BQUQsT0FKSyxDQUFQO0FBT0Q7OztpQ0FFWTtBQUNYLFdBQUtDLGFBQUw7QUFDRDs7O21DQVFxQkMsVSxFQUFZO0FBQ2hDLFVBQU1DLElBQUksR0FBR0osT0FBTyxDQUFDSyxjQUFSLENBQXVCSixJQUF2QixFQUE2QkUsVUFBN0IsQ0FBYjtBQUVBQyxNQUFBQSxJQUFJLENBQUNFLFVBQUw7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozs7RUEzQmdCSixPOztnQkFBYkMsSSxhQWVhLEs7O2dCQWZiQSxJLHVCQWlCdUI7QUFDekJNLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O0FBYTdCQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJSLElBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKFwiZWFzeVwiKTtcblxuY29uc3QgTWVzc2FnZSA9IHJlcXVpcmUoXCIuL3ZpZXcvbWVzc2FnZVwiKSxcbiAgICAgIFBhc3N3b3JkRm9ybSA9IHJlcXVpcmUoXCIuL3ZpZXcvcGFzc3dvcmRGb3JtXCIpLFxuICAgICAgUmVzZXRQYXNzd29yZEJ1dHRvbiA9IHJlcXVpcmUoXCIuL3ZpZXcvcmVzZXRQYXNzd29yZEJ1dHRvblwiKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkRm9ybSAvPixcbiAgICAgIDxSZXNldFBhc3N3b3JkQnV0dG9uIC8+LFxuICAgICAgPE1lc3NhZ2UgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdmlldyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG5cbiAgICB2aWV3LmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiB2aWV3O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==