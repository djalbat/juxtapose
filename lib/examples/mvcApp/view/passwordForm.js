"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _controller = _interopRequireDefault(require("../controller"));

var _passwordInput = _interopRequireDefault(require("./passwordInput"));

var _validationError = _interopRequireDefault(require("./validationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var PasswordForm = /*#__PURE__*/function (_Element) {
  _inherits(PasswordForm, _Element);

  function PasswordForm() {
    _classCallCheck(this, PasswordForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(PasswordForm).apply(this, arguments));
  }

  _createClass(PasswordForm, [{
    key: "validateAndSubmitForm",
    value: function validateAndSubmitForm() {
      var passwordValid = this.validateForm();

      if (!passwordValid) {
        this.showValidationError("The password is invalid");
      } else {
        this.submitForm();
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var password = this.getPassword(),
          passwordValid = isPasswordValid(password);
      return passwordValid;
    }
  }, {
    key: "submitForm",
    value: function submitForm() {
      var password = this.getPassword();

      _controller["default"].setPassword(password);

      this.clearPassword();
    }
  }, {
    key: "childElements",
    value: function childElements() {
      var _this = this;

      return [React.createElement(_passwordInput["default"], null), React.createElement(_validationError["default"], null), React.createElement(_easy.Button, {
        className: "submit",
        onClick: function onClick(mouseButton, event, targetElement) {
          event.preventDefault();

          _this.validateAndSubmitForm();
        }
      }, "Submit")];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var passwordForm = _easy.Element.fromProperties(PasswordForm, properties);

      passwordForm.initialise();
      return passwordForm;
    }
  }]);

  return PasswordForm;
}(_easy.Element);

exports["default"] = PasswordForm;

_defineProperty(PasswordForm, "tagName", "form");

_defineProperty(PasswordForm, "defaultProperties", {
  className: "password"
});

function isPasswordValid(password) {
  var passwordValid = password !== ""; ///

  return passwordValid;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkRm9ybS5qcyJdLCJuYW1lcyI6WyJQYXNzd29yZEZvcm0iLCJwYXNzd29yZFZhbGlkIiwidmFsaWRhdGVGb3JtIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsInN1Ym1pdEZvcm0iLCJwYXNzd29yZCIsImdldFBhc3N3b3JkIiwiaXNQYXNzd29yZFZhbGlkIiwiY29udHJvbGxlciIsInNldFBhc3N3b3JkIiwiY2xlYXJQYXNzd29yZCIsIm1vdXNlQnV0dG9uIiwiZXZlbnQiLCJ0YXJnZXRFbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0iLCJhc3NpZ25Db250ZXh0IiwicHJvcGVydGllcyIsInBhc3N3b3JkRm9ybSIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsWTs7Ozs7Ozs7Ozs7NENBQ0s7QUFDdEIsVUFBTUMsYUFBYSxHQUFHLEtBQUtDLFlBQUwsRUFBdEI7O0FBRUEsVUFBSSxDQUFDRCxhQUFMLEVBQW9CO0FBQ2xCLGFBQUtFLG1CQUFMLENBQXlCLHlCQUF6QjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtDLFVBQUw7QUFDRDtBQUNGOzs7bUNBRWM7QUFDYixVQUFNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLFVBQ01MLGFBQWEsR0FBR00sZUFBZSxDQUFDRixRQUFELENBRHJDO0FBR0EsYUFBT0osYUFBUDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNSSxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQUFqQjs7QUFFQUUsNkJBQVdDLFdBQVgsQ0FBdUJKLFFBQXZCOztBQUVBLFdBQUtLLGFBQUw7QUFDRDs7O29DQUVlO0FBQUE7O0FBQ2QsYUFBTyxDQUVMLG9CQUFDLHlCQUFELE9BRkssRUFHTCxvQkFBQywyQkFBRCxPQUhLLEVBSUwsb0JBQUMsWUFBRDtBQUFRLFFBQUEsU0FBUyxFQUFDLFFBQWxCO0FBQ1EsUUFBQSxPQUFPLEVBQUUsaUJBQUNDLFdBQUQsRUFBY0MsS0FBZCxFQUFxQkMsYUFBckIsRUFBdUM7QUFFOUNELFVBQUFBLEtBQUssQ0FBQ0UsY0FBTjs7QUFFQSxVQUFBLEtBQUksQ0FBQ0MscUJBQUw7QUFFRDtBQVBULGtCQUpLLENBQVA7QUFpQkQ7OztpQ0FFWTtBQUNYLFdBQUtDLGFBQUw7QUFDRDs7O21DQVFxQkMsVSxFQUFZO0FBQ2hDLFVBQU1DLFlBQVksR0FBR0MsY0FBUUMsY0FBUixDQUF1QnBCLFlBQXZCLEVBQXFDaUIsVUFBckMsQ0FBckI7O0FBRUFDLE1BQUFBLFlBQVksQ0FBQ0csVUFBYjtBQUVBLGFBQU9ILFlBQVA7QUFDRDs7OztFQTlEdUNDLGE7Ozs7Z0JBQXJCbkIsWSxhQWtERixNOztnQkFsREVBLFksdUJBb0RRO0FBQ3pCc0IsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7QUFhN0IsU0FBU2YsZUFBVCxDQUF5QkYsUUFBekIsRUFBbUM7QUFDakMsTUFBTUosYUFBYSxHQUFJSSxRQUFRLEtBQUssRUFBcEMsQ0FEaUMsQ0FDUzs7QUFFMUMsU0FBT0osYUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi9wYXNzd29yZElucHV0XCI7XG5pbXBvcnQgVmFsaWRhdGlvbkVycm9yIGZyb20gXCIuL3ZhbGlkYXRpb25FcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZEZvcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdmFsaWRhdGVBbmRTdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB0aGlzLnZhbGlkYXRlRm9ybSgpO1xuXG4gICAgaWYgKCFwYXNzd29yZFZhbGlkKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IoXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpLFxuICAgICAgICAgIHBhc3N3b3JkVmFsaWQgPSBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG4gIH1cblxuICBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpO1xuXG4gICAgY29udHJvbGxlci5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB0aGlzLmNsZWFyUGFzc3dvcmQoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkSW5wdXQgLz4sXG4gICAgICA8VmFsaWRhdGlvbkVycm9yLz4sXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhtb3VzZUJ1dHRvbiwgZXZlbnQsIHRhcmdldEVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpO1xuXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZm9ybVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFzc3dvcmRcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgcGFzc3dvcmRGb3JtID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXNzd29yZEZvcm0sIHByb3BlcnRpZXMpO1xuXG4gICAgcGFzc3dvcmRGb3JtLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBwYXNzd29yZEZvcm07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNQYXNzd29yZFZhbGlkKHBhc3N3b3JkKSB7XG4gIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSAocGFzc3dvcmQgIT09IFwiXCIpOyAgLy8vXG5cbiAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG59XG4iXX0=