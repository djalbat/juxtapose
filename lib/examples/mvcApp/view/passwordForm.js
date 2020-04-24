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

var controller = require("../controller"),
    PasswordInput = require("./passwordInput"),
    ValidationError = require("./validationError");

var Element = easy.Element,
    Button = easy.Button;

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
      controller.setPassword(password);
      this.clearPassword();
    }
  }, {
    key: "childElements",
    value: function childElements() {
      var _this = this;

      return [React.createElement(PasswordInput, null), React.createElement(ValidationError, null), React.createElement(Button, {
        className: "submit",
        onClick: function onClick(mouseButton, event, targetElement) {
          _this.validateAndSubmitForm();

          event.preventDefault();
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
      var passwordForm = Element.fromProperties(PasswordForm, properties);
      passwordForm.initialise();
      return passwordForm;
    }
  }]);

  return PasswordForm;
}(Element);

_defineProperty(PasswordForm, "tagName", "form");

_defineProperty(PasswordForm, "defaultProperties", {
  className: "password"
});

module.exports = PasswordForm;

function isPasswordValid(password) {
  var passwordValid = password !== ""; ///

  return passwordValid;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkRm9ybS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImNvbnRyb2xsZXIiLCJQYXNzd29yZElucHV0IiwiVmFsaWRhdGlvbkVycm9yIiwiRWxlbWVudCIsIkJ1dHRvbiIsIlBhc3N3b3JkRm9ybSIsInBhc3N3b3JkVmFsaWQiLCJ2YWxpZGF0ZUZvcm0iLCJzaG93VmFsaWRhdGlvbkVycm9yIiwic3VibWl0Rm9ybSIsInBhc3N3b3JkIiwiZ2V0UGFzc3dvcmQiLCJpc1Bhc3N3b3JkVmFsaWQiLCJzZXRQYXNzd29yZCIsImNsZWFyUGFzc3dvcmQiLCJtb3VzZUJ1dHRvbiIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsInZhbGlkYXRlQW5kU3VibWl0Rm9ybSIsInByZXZlbnREZWZhdWx0IiwiYXNzaWduQ29udGV4dCIsInByb3BlcnRpZXMiLCJwYXNzd29yZEZvcm0iLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBRUEsSUFBTUMsVUFBVSxHQUFHRCxPQUFPLENBQUMsZUFBRCxDQUExQjtBQUFBLElBQ01FLGFBQWEsR0FBR0YsT0FBTyxDQUFDLGlCQUFELENBRDdCO0FBQUEsSUFFTUcsZUFBZSxHQUFHSCxPQUFPLENBQUMsbUJBQUQsQ0FGL0I7O0lBSVFJLE8sR0FBb0JMLEksQ0FBcEJLLE87SUFBU0MsTSxHQUFXTixJLENBQVhNLE07O0lBRVhDLFk7Ozs7Ozs7Ozs7OzRDQUNvQjtBQUN0QixVQUFNQyxhQUFhLEdBQUcsS0FBS0MsWUFBTCxFQUF0Qjs7QUFFQSxVQUFJLENBQUNELGFBQUwsRUFBb0I7QUFDbEIsYUFBS0UsbUJBQUwsQ0FBeUIseUJBQXpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0MsVUFBTDtBQUNEO0FBQ0Y7OzttQ0FFYztBQUNiLFVBQU1DLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBQWpCO0FBQUEsVUFDTUwsYUFBYSxHQUFHTSxlQUFlLENBQUNGLFFBQUQsQ0FEckM7QUFHQSxhQUFPSixhQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1JLFFBQVEsR0FBRyxLQUFLQyxXQUFMLEVBQWpCO0FBRUFYLE1BQUFBLFVBQVUsQ0FBQ2EsV0FBWCxDQUF1QkgsUUFBdkI7QUFFQSxXQUFLSSxhQUFMO0FBQ0Q7OztvQ0FFZTtBQUFBOztBQUNkLGFBQU8sQ0FFTCxvQkFBQyxhQUFELE9BRkssRUFHTCxvQkFBQyxlQUFELE9BSEssRUFJTCxvQkFBQyxNQUFEO0FBQVEsUUFBQSxTQUFTLEVBQUMsUUFBbEI7QUFDUSxRQUFBLE9BQU8sRUFBRSxpQkFBQ0MsV0FBRCxFQUFjQyxLQUFkLEVBQXFCQyxhQUFyQixFQUF1QztBQUM5QyxVQUFBLEtBQUksQ0FBQ0MscUJBQUw7O0FBRUFGLFVBQUFBLEtBQUssQ0FBQ0csY0FBTjtBQUNEO0FBTFQsa0JBSkssQ0FBUDtBQWVEOzs7aUNBRVk7QUFDWCxXQUFLQyxhQUFMO0FBQ0Q7OzttQ0FRcUJDLFUsRUFBWTtBQUNoQyxVQUFNQyxZQUFZLEdBQUduQixPQUFPLENBQUNvQixjQUFSLENBQXVCbEIsWUFBdkIsRUFBcUNnQixVQUFyQyxDQUFyQjtBQUVBQyxNQUFBQSxZQUFZLENBQUNFLFVBQWI7QUFFQSxhQUFPRixZQUFQO0FBQ0Q7Ozs7RUE1RHdCbkIsTzs7Z0JBQXJCRSxZLGFBZ0RhLE07O2dCQWhEYkEsWSx1QkFrRHVCO0FBQ3pCb0IsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQzs7QUFhN0JDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRCLFlBQWpCOztBQUVBLFNBQVNPLGVBQVQsQ0FBeUJGLFFBQXpCLEVBQW1DO0FBQ2pDLE1BQU1KLGFBQWEsR0FBSUksUUFBUSxLQUFLLEVBQXBDLENBRGlDLENBQ1M7O0FBRTFDLFNBQU9KLGFBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZShcImVhc3lcIik7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi4vY29udHJvbGxlclwiKSxcbiAgICAgIFBhc3N3b3JkSW5wdXQgPSByZXF1aXJlKFwiLi9wYXNzd29yZElucHV0XCIpLFxuICAgICAgVmFsaWRhdGlvbkVycm9yID0gcmVxdWlyZShcIi4vdmFsaWRhdGlvbkVycm9yXCIpO1xuXG5jb25zdCB7IEVsZW1lbnQsIEJ1dHRvbiB9ID0gZWFzeTtcblxuY2xhc3MgUGFzc3dvcmRGb3JtIGV4dGVuZHMgRWxlbWVudCB7XG4gIHZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZFZhbGlkID0gdGhpcy52YWxpZGF0ZUZvcm0oKTtcblxuICAgIGlmICghcGFzc3dvcmRWYWxpZCkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yKFwiVGhlIHBhc3N3b3JkIGlzIGludmFsaWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKSxcbiAgICAgICAgICBwYXNzd29yZFZhbGlkID0gaXNQYXNzd29yZFZhbGlkKHBhc3N3b3JkKTtcblxuICAgIHJldHVybiBwYXNzd29yZFZhbGlkO1xuICB9XG5cbiAgc3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKTtcblxuICAgIGNvbnRyb2xsZXIuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdGhpcy5jbGVhclBhc3N3b3JkKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZElucHV0IC8+LFxuICAgICAgPFZhbGlkYXRpb25FcnJvci8+LFxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsobW91c2VCdXR0b24sIGV2ZW50LCB0YXJnZXRFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKTtcblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZm9ybVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFzc3dvcmRcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgcGFzc3dvcmRGb3JtID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXNzd29yZEZvcm0sIHByb3BlcnRpZXMpO1xuXG4gICAgcGFzc3dvcmRGb3JtLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBwYXNzd29yZEZvcm07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzd29yZEZvcm07XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSBcIlwiKTsgIC8vL1xuXG4gIHJldHVybiBwYXNzd29yZFZhbGlkO1xufVxuIl19