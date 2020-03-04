'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy');

var controller = require('../controller'),
    PasswordInput = require('./passwordInput'),
    ValidationError = require('./validationError');

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
        this.showValidationError('The password is invalid');
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

Object.assign(PasswordForm, {
  tagName: 'form',
  defaultProperties: {
    className: 'password'
  }
});
module.exports = PasswordForm;

function isPasswordValid(password) {
  var passwordValid = password !== ''; ///

  return passwordValid;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkRm9ybS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsImNvbnRyb2xsZXIiLCJQYXNzd29yZElucHV0IiwiVmFsaWRhdGlvbkVycm9yIiwiRWxlbWVudCIsIkJ1dHRvbiIsIlBhc3N3b3JkRm9ybSIsInBhc3N3b3JkVmFsaWQiLCJ2YWxpZGF0ZUZvcm0iLCJzaG93VmFsaWRhdGlvbkVycm9yIiwic3VibWl0Rm9ybSIsInBhc3N3b3JkIiwiZ2V0UGFzc3dvcmQiLCJpc1Bhc3N3b3JkVmFsaWQiLCJzZXRQYXNzd29yZCIsImNsZWFyUGFzc3dvcmQiLCJtb3VzZUJ1dHRvbiIsImV2ZW50IiwidGFyZ2V0RWxlbWVudCIsInZhbGlkYXRlQW5kU3VibWl0Rm9ybSIsInByZXZlbnREZWZhdWx0IiwiYXNzaWduQ29udGV4dCIsInByb3BlcnRpZXMiLCJwYXNzd29yZEZvcm0iLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUVBLElBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDLGVBQUQsQ0FBMUI7QUFBQSxJQUNNRSxhQUFhLEdBQUdGLE9BQU8sQ0FBQyxpQkFBRCxDQUQ3QjtBQUFBLElBRU1HLGVBQWUsR0FBR0gsT0FBTyxDQUFDLG1CQUFELENBRi9COztJQUlRSSxPLEdBQW9CTCxJLENBQXBCSyxPO0lBQVNDLE0sR0FBV04sSSxDQUFYTSxNOztJQUVYQyxZOzs7Ozs7Ozs7Ozs0Q0FDb0I7QUFDdEIsVUFBTUMsYUFBYSxHQUFHLEtBQUtDLFlBQUwsRUFBdEI7O0FBRUEsVUFBSSxDQUFDRCxhQUFMLEVBQW9CO0FBQ2xCLGFBQUtFLG1CQUFMLENBQXlCLHlCQUF6QjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtDLFVBQUw7QUFDRDtBQUNGOzs7bUNBRWM7QUFDYixVQUFNQyxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLFVBQ01MLGFBQWEsR0FBR00sZUFBZSxDQUFDRixRQUFELENBRHJDO0FBR0EsYUFBT0osYUFBUDtBQUNEOzs7aUNBRVk7QUFDWCxVQUFNSSxRQUFRLEdBQUcsS0FBS0MsV0FBTCxFQUFqQjtBQUVBWCxNQUFBQSxVQUFVLENBQUNhLFdBQVgsQ0FBdUJILFFBQXZCO0FBRUEsV0FBS0ksYUFBTDtBQUNEOzs7b0NBRWU7QUFBQTs7QUFDZCxhQUFPLENBRUwsb0JBQUMsYUFBRCxPQUZLLEVBR0wsb0JBQUMsZUFBRCxPQUhLLEVBSUwsb0JBQUMsTUFBRDtBQUFRLFFBQUEsU0FBUyxFQUFDLFFBQWxCO0FBQ1EsUUFBQSxPQUFPLEVBQUUsaUJBQUNDLFdBQUQsRUFBY0MsS0FBZCxFQUFxQkMsYUFBckIsRUFBdUM7QUFDOUMsVUFBQSxLQUFJLENBQUNDLHFCQUFMOztBQUVBRixVQUFBQSxLQUFLLENBQUNHLGNBQU47QUFDRDtBQUxULGtCQUpLLENBQVA7QUFlRDs7O2lDQUVZO0FBQ1gsV0FBS0MsYUFBTDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBTUMsWUFBWSxHQUFHbkIsT0FBTyxDQUFDb0IsY0FBUixDQUF1QmxCLFlBQXZCLEVBQXFDZ0IsVUFBckMsQ0FBckI7QUFFQUMsTUFBQUEsWUFBWSxDQUFDRSxVQUFiO0FBRUEsYUFBT0YsWUFBUDtBQUNEOzs7O0VBdER3Qm5CLE87O0FBeUQzQnNCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjckIsWUFBZCxFQUE0QjtBQUMxQnNCLEVBQUFBLE9BQU8sRUFBRSxNQURpQjtBQUUxQkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRk8sQ0FBNUI7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCMUIsWUFBakI7O0FBRUEsU0FBU08sZUFBVCxDQUF5QkYsUUFBekIsRUFBbUM7QUFDakMsTUFBTUosYUFBYSxHQUFJSSxRQUFRLEtBQUssRUFBcEMsQ0FEaUMsQ0FDUzs7QUFFMUMsU0FBT0osYUFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCBjb250cm9sbGVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcicpLFxuICAgICAgUGFzc3dvcmRJbnB1dCA9IHJlcXVpcmUoJy4vcGFzc3dvcmRJbnB1dCcpLFxuICAgICAgVmFsaWRhdGlvbkVycm9yID0gcmVxdWlyZSgnLi92YWxpZGF0aW9uRXJyb3InKTtcblxuY29uc3QgeyBFbGVtZW50LCBCdXR0b24gfSA9IGVhc3k7XG5cbmNsYXNzIFBhc3N3b3JkRm9ybSBleHRlbmRzIEVsZW1lbnQge1xuICB2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHRoaXMudmFsaWRhdGVGb3JtKCk7XG5cbiAgICBpZiAoIXBhc3N3b3JkVmFsaWQpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcignVGhlIHBhc3N3b3JkIGlzIGludmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpLFxuICAgICAgICAgIHBhc3N3b3JkVmFsaWQgPSBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG4gIH1cblxuICBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpO1xuXG4gICAgY29udHJvbGxlci5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB0aGlzLmNsZWFyUGFzc3dvcmQoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkSW5wdXQgLz4sXG4gICAgICA8VmFsaWRhdGlvbkVycm9yLz4sXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhtb3VzZUJ1dHRvbiwgZXZlbnQsIHRhcmdldEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpO1xuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgcGFzc3dvcmRGb3JtID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXNzd29yZEZvcm0sIHByb3BlcnRpZXMpO1xuXG4gICAgcGFzc3dvcmRGb3JtLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBwYXNzd29yZEZvcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQYXNzd29yZEZvcm0sIHtcbiAgdGFnTmFtZTogJ2Zvcm0nLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3Bhc3N3b3JkJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzd29yZEZvcm07XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSAnJyk7ICAvLy9cblxuICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbn1cbiJdfQ==