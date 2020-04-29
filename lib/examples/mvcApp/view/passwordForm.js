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
        onClick: function onClick(event, element) {
          event.preventDefault();

          _this.validateAndSubmitForm();
        }
      }, "Submit")];
    }
  }, {
    key: "initialise",
    value: function initialise(properties) {
      this.assignContext();
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var passwordForm = _easy.Element.fromClass(Class, properties);

      passwordForm.initialise(properties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkRm9ybS5qcyJdLCJuYW1lcyI6WyJQYXNzd29yZEZvcm0iLCJwYXNzd29yZFZhbGlkIiwidmFsaWRhdGVGb3JtIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsInN1Ym1pdEZvcm0iLCJwYXNzd29yZCIsImdldFBhc3N3b3JkIiwiaXNQYXNzd29yZFZhbGlkIiwiY29udHJvbGxlciIsInNldFBhc3N3b3JkIiwiY2xlYXJQYXNzd29yZCIsImV2ZW50IiwiZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVBbmRTdWJtaXRGb3JtIiwicHJvcGVydGllcyIsImFzc2lnbkNvbnRleHQiLCJDbGFzcyIsInBhc3N3b3JkRm9ybSIsIkVsZW1lbnQiLCJmcm9tQ2xhc3MiLCJpbml0aWFsaXNlIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFk7Ozs7Ozs7Ozs7OzRDQUNLO0FBQ3RCLFVBQU1DLGFBQWEsR0FBRyxLQUFLQyxZQUFMLEVBQXRCOztBQUVBLFVBQUksQ0FBQ0QsYUFBTCxFQUFvQjtBQUNsQixhQUFLRSxtQkFBTCxDQUF5Qix5QkFBekI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQyxVQUFMO0FBQ0Q7QUFDRjs7O21DQUVjO0FBQ2IsVUFBTUMsUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFBakI7QUFBQSxVQUNNTCxhQUFhLEdBQUdNLGVBQWUsQ0FBQ0YsUUFBRCxDQURyQztBQUdBLGFBQU9KLGFBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsVUFBTUksUUFBUSxHQUFHLEtBQUtDLFdBQUwsRUFBakI7O0FBRUFFLDZCQUFXQyxXQUFYLENBQXVCSixRQUF2Qjs7QUFFQSxXQUFLSyxhQUFMO0FBQ0Q7OztvQ0FFZTtBQUFBOztBQUNkLGFBQU8sQ0FFTCxvQkFBQyx5QkFBRCxPQUZLLEVBR0wsb0JBQUMsMkJBQUQsT0FISyxFQUlMLG9CQUFDLFlBQUQ7QUFBUSxRQUFBLFNBQVMsRUFBQyxRQUFsQjtBQUNRLFFBQUEsT0FBTyxFQUFFLGlCQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFFM0JELFVBQUFBLEtBQUssQ0FBQ0UsY0FBTjs7QUFFQSxVQUFBLEtBQUksQ0FBQ0MscUJBQUw7QUFFRDtBQVBULGtCQUpLLENBQVA7QUFpQkQ7OzsrQkFFVUMsVSxFQUFZO0FBQ3JCLFdBQUtDLGFBQUw7QUFDRDs7OzhCQVFnQkMsSyxFQUFPRixVLEVBQVk7QUFDbEMsVUFBTUcsWUFBWSxHQUFHQyxjQUFRQyxTQUFSLENBQWtCSCxLQUFsQixFQUF5QkYsVUFBekIsQ0FBckI7O0FBRUFHLE1BQUFBLFlBQVksQ0FBQ0csVUFBYixDQUF3Qk4sVUFBeEI7QUFFQSxhQUFPRyxZQUFQO0FBQ0Q7Ozs7RUE5RHVDQyxhOzs7O2dCQUFyQm5CLFksYUFrREYsTTs7Z0JBbERFQSxZLHVCQW9EUTtBQUN6QnNCLEVBQUFBLFNBQVMsRUFBRTtBQURjLEM7O0FBYTdCLFNBQVNmLGVBQVQsQ0FBeUJGLFFBQXpCLEVBQW1DO0FBQ2pDLE1BQU1KLGFBQWEsR0FBSUksUUFBUSxLQUFLLEVBQXBDLENBRGlDLENBQ1M7O0FBRTFDLFNBQU9KLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50LCBCdXR0b24gfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlclwiO1xuaW1wb3J0IFBhc3N3b3JkSW5wdXQgZnJvbSBcIi4vcGFzc3dvcmRJbnB1dFwiO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvciBmcm9tIFwiLi92YWxpZGF0aW9uRXJyb3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRGb3JtIGV4dGVuZHMgRWxlbWVudCB7XG4gIHZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZFZhbGlkID0gdGhpcy52YWxpZGF0ZUZvcm0oKTtcblxuICAgIGlmICghcGFzc3dvcmRWYWxpZCkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yKFwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKSxcbiAgICAgICAgICBwYXNzd29yZFZhbGlkID0gaXNQYXNzd29yZFZhbGlkKHBhc3N3b3JkKTtcblxuICAgIHJldHVybiBwYXNzd29yZFZhbGlkO1xuICB9XG5cbiAgc3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKTtcblxuICAgIGNvbnRyb2xsZXIuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdGhpcy5jbGVhclBhc3N3b3JkKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZElucHV0IC8+LFxuICAgICAgPFZhbGlkYXRpb25FcnJvci8+LFxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpO1xuXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UocHJvcGVydGllcykge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImZvcm1cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInBhc3N3b3JkXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgcGFzc3dvcmRGb3JtID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMpO1xuXG4gICAgcGFzc3dvcmRGb3JtLmluaXRpYWxpc2UocHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gcGFzc3dvcmRGb3JtO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSBcIlwiKTsgIC8vL1xuXG4gIHJldHVybiBwYXNzd29yZFZhbGlkO1xufVxuIl19