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

var controller = require("../controller");

var Element = easy.Element;

var ResetPasswordButton = /*#__PURE__*/function (_Element) {
  _inherits(ResetPasswordButton, _Element);

  function ResetPasswordButton() {
    _classCallCheck(this, ResetPasswordButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResetPasswordButton).apply(this, arguments));
  }

  _createClass(ResetPasswordButton, [{
    key: "clickHandler",
    value: function clickHandler() {
      controller.resetPassword();
    }
  }, {
    key: "childElements",
    value: function childElements() {
      return "Reset password";
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.onClick(this.clickHandler);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var resetPasswordButton = Element.fromProperties(ResetPasswordButton, properties);
      resetPasswordButton.initialise();
      return resetPasswordButton;
    }
  }]);

  return ResetPasswordButton;
}(Element);

_defineProperty(ResetPasswordButton, "tagName", "button");

_defineProperty(ResetPasswordButton, "defaultProperties", {
  className: "resetPassword"
});

module.exports = ResetPasswordButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0UGFzc3dvcmRCdXR0b24uanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJjb250cm9sbGVyIiwiRWxlbWVudCIsIlJlc2V0UGFzc3dvcmRCdXR0b24iLCJyZXNldFBhc3N3b3JkIiwib25DbGljayIsImNsaWNrSGFuZGxlciIsInByb3BlcnRpZXMiLCJyZXNldFBhc3N3b3JkQnV0dG9uIiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUVBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7O0lBRVFFLE8sR0FBWUgsSSxDQUFaRyxPOztJQUVGQyxtQjs7Ozs7Ozs7Ozs7bUNBQ1c7QUFDYkYsTUFBQUEsVUFBVSxDQUFDRyxhQUFYO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sZ0JBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS0MsT0FBTCxDQUFhLEtBQUtDLFlBQWxCO0FBQ0Q7OzttQ0FRcUJDLFUsRUFBWTtBQUNoQyxVQUFNQyxtQkFBbUIsR0FBR04sT0FBTyxDQUFDTyxjQUFSLENBQXVCTixtQkFBdkIsRUFBNENJLFVBQTVDLENBQTVCO0FBRUFDLE1BQUFBLG1CQUFtQixDQUFDRSxVQUFwQjtBQUVBLGFBQU9GLG1CQUFQO0FBQ0Q7Ozs7RUF6QitCTixPOztnQkFBNUJDLG1CLGFBYWEsUTs7Z0JBYmJBLG1CLHVCQWV1QjtBQUN6QlEsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7QUFhN0JDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlYsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKFwiZWFzeVwiKTtcblxuY29uc3QgY29udHJvbGxlciA9IHJlcXVpcmUoXCIuLi9jb250cm9sbGVyXCIpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFJlc2V0UGFzc3dvcmRCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY2xpY2tIYW5kbGVyKCkge1xuICAgIGNvbnRyb2xsZXIucmVzZXRQYXNzd29yZCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gXCJSZXNldCBwYXNzd29yZFwiO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImJ1dHRvblwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicmVzZXRQYXNzd29yZFwiXG4gIH07XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCByZXNldFBhc3N3b3JkQnV0dG9uID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhSZXNldFBhc3N3b3JkQnV0dG9uLCBwcm9wZXJ0aWVzKTtcblxuICAgIHJlc2V0UGFzc3dvcmRCdXR0b24uaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHJlc2V0UGFzc3dvcmRCdXR0b247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXNldFBhc3N3b3JkQnV0dG9uO1xuIl19