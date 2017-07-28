'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var controller = require('../controller'),
    PasswordInput = require('./passwordInput'),
    ValidationError = require('./validationError');

var Element = easy.Element,
    Button = easy.Button;

var PasswordForm = function (_Element) {
  _inherits(PasswordForm, _Element);

  function PasswordForm() {
    _classCallCheck(this, PasswordForm);

    return _possibleConstructorReturn(this, (PasswordForm.__proto__ || Object.getPrototypeOf(PasswordForm)).apply(this, arguments));
  }

  _createClass(PasswordForm, [{
    key: 'validateAndSubmitForm',
    value: function validateAndSubmitForm() {
      var passwordValid = this.validateForm();

      if (!passwordValid) {
        this.showValidationError('The password is invalid');
      } else {
        this.submitForm();
      }
    }
  }, {
    key: 'validateForm',
    value: function validateForm() {
      var password = this.getPassword(),
          passwordValid = isPasswordValid(password);

      return passwordValid;
    }
  }, {
    key: 'submitForm',
    value: function submitForm() {
      var password = this.getPassword();

      controller.setPassword(password);

      this.clearPassword();
    }
  }, {
    key: 'childElements',
    value: function childElements() {
      var _this2 = this;

      return [React.createElement(PasswordInput, null), React.createElement(ValidationError, null), React.createElement(
        Button,
        { className: 'submit',
          onClick: function onClick(mouseButton, event, targetElement) {
            _this2.validateAndSubmitForm();

            event.preventDefault();
          }
        },
        'Submit'
      )];
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();
    }
  }], [{
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9tdmNBcHAvdmlldy9wYXNzd29yZEZvcm0uanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJjb250cm9sbGVyIiwiUGFzc3dvcmRJbnB1dCIsIlZhbGlkYXRpb25FcnJvciIsIkVsZW1lbnQiLCJCdXR0b24iLCJQYXNzd29yZEZvcm0iLCJwYXNzd29yZFZhbGlkIiwidmFsaWRhdGVGb3JtIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsInN1Ym1pdEZvcm0iLCJwYXNzd29yZCIsImdldFBhc3N3b3JkIiwiaXNQYXNzd29yZFZhbGlkIiwic2V0UGFzc3dvcmQiLCJjbGVhclBhc3N3b3JkIiwibW91c2VCdXR0b24iLCJldmVudCIsInRhcmdldEVsZW1lbnQiLCJ2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImFzc2lnbkNvbnRleHQiLCJwcm9wZXJ0aWVzIiwicGFzc3dvcmRGb3JtIiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxnQkFBZ0JGLFFBQVEsaUJBQVIsQ0FEdEI7QUFBQSxJQUVNRyxrQkFBa0JILFFBQVEsbUJBQVIsQ0FGeEI7O0lBSVFJLE8sR0FBb0JMLEksQ0FBcEJLLE87SUFBU0MsTSxHQUFXTixJLENBQVhNLE07O0lBRVhDLFk7Ozs7Ozs7Ozs7OzRDQUNvQjtBQUN0QixVQUFNQyxnQkFBZ0IsS0FBS0MsWUFBTCxFQUF0Qjs7QUFFQSxVQUFJLENBQUNELGFBQUwsRUFBb0I7QUFDbEIsYUFBS0UsbUJBQUwsQ0FBeUIseUJBQXpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0MsVUFBTDtBQUNEO0FBQ0Y7OzttQ0FFYztBQUNiLFVBQU1DLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLFVBQ01MLGdCQUFnQk0sZ0JBQWdCRixRQUFoQixDQUR0Qjs7QUFHQSxhQUFPSixhQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1JLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjs7QUFFQVgsaUJBQVdhLFdBQVgsQ0FBdUJILFFBQXZCOztBQUVBLFdBQUtJLGFBQUw7QUFDRDs7O29DQUVlO0FBQUE7O0FBQ2QsYUFBTyxDQUVMLG9CQUFDLGFBQUQsT0FGSyxFQUdMLG9CQUFDLGVBQUQsT0FISyxFQUlMO0FBQUMsY0FBRDtBQUFBLFVBQVEsV0FBVSxRQUFsQjtBQUNRLG1CQUFTLGlCQUFDQyxXQUFELEVBQWNDLEtBQWQsRUFBcUJDLGFBQXJCLEVBQXVDO0FBQzlDLG1CQUFLQyxxQkFBTDs7QUFFQUYsa0JBQU1HLGNBQU47QUFDRDtBQUxUO0FBQUE7QUFBQSxPQUpLLENBQVA7QUFlRDs7O2lDQUVZO0FBQ1gsV0FBS0MsYUFBTDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBTUMsZUFBZW5CLFFBQVFvQixjQUFSLENBQXVCbEIsWUFBdkIsRUFBcUNnQixVQUFyQyxDQUFyQjs7QUFFQUMsbUJBQWFFLFVBQWI7O0FBRUEsYUFBT0YsWUFBUDtBQUNEOzs7O0VBdER3Qm5CLE87O0FBeUQzQnNCLE9BQU9DLE1BQVAsQ0FBY3JCLFlBQWQsRUFBNEI7QUFDMUJzQixXQUFTLE1BRGlCO0FBRTFCQyxxQkFBbUI7QUFDakJDLGVBQVc7QUFETTtBQUZPLENBQTVCOztBQU9BQyxPQUFPQyxPQUFQLEdBQWlCMUIsWUFBakI7O0FBRUEsU0FBU08sZUFBVCxDQUF5QkYsUUFBekIsRUFBbUM7QUFDakMsTUFBTUosZ0JBQWlCSSxhQUFhLEVBQXBDLENBRGlDLENBQ1M7O0FBRTFDLFNBQU9KLGFBQVA7QUFDRCIsImZpbGUiOiJwYXNzd29yZEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVyJyksXG4gICAgICBQYXNzd29yZElucHV0ID0gcmVxdWlyZSgnLi9wYXNzd29yZElucHV0JyksXG4gICAgICBWYWxpZGF0aW9uRXJyb3IgPSByZXF1aXJlKCcuL3ZhbGlkYXRpb25FcnJvcicpO1xuXG5jb25zdCB7IEVsZW1lbnQsIEJ1dHRvbiB9ID0gZWFzeTtcblxuY2xhc3MgUGFzc3dvcmRGb3JtIGV4dGVuZHMgRWxlbWVudCB7XG4gIHZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZFZhbGlkID0gdGhpcy52YWxpZGF0ZUZvcm0oKTtcblxuICAgIGlmICghcGFzc3dvcmRWYWxpZCkge1xuICAgICAgdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yKCdUaGUgcGFzc3dvcmQgaXMgaW52YWxpZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCksXG4gICAgICAgICAgcGFzc3dvcmRWYWxpZCA9IGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCk7XG5cbiAgICBjb250cm9sbGVyLnNldFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIHRoaXMuY2xlYXJQYXNzd29yZCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPixcbiAgICAgIDxWYWxpZGF0aW9uRXJyb3IvPixcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KG1vdXNlQnV0dG9uLCBldmVudCwgdGFyZ2V0RWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRTdWJtaXRGb3JtKCk7XG5cbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgPlxuICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgcGFzc3dvcmRGb3JtID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXNzd29yZEZvcm0sIHByb3BlcnRpZXMpO1xuXG4gICAgcGFzc3dvcmRGb3JtLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBwYXNzd29yZEZvcm07XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQYXNzd29yZEZvcm0sIHtcbiAgdGFnTmFtZTogJ2Zvcm0nLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3Bhc3N3b3JkJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzd29yZEZvcm07XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSAnJyk7ICAvLy9cblxuICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbn1cbiJdfQ==