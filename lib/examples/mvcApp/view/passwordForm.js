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
    key: 'parentContext',
    value: function parentContext() {
      this.assignContext();
    }
  }, {
    key: 'childElements',
    value: function childElements() {
      var _this2 = this;

      return [React.createElement(PasswordInput, null), React.createElement(ValidationError, null), React.createElement(
        Button,
        { className: 'submit',
          onClick: function onClick() {
            var preventDefault = true;

            _this2.validateAndSubmitForm();

            return preventDefault;
          }
        },
        'Submit'
      )];
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(PasswordForm, properties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9tdmNBcHAvdmlldy9wYXNzd29yZEZvcm0uanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJjb250cm9sbGVyIiwiUGFzc3dvcmRJbnB1dCIsIlZhbGlkYXRpb25FcnJvciIsIkVsZW1lbnQiLCJCdXR0b24iLCJQYXNzd29yZEZvcm0iLCJwYXNzd29yZFZhbGlkIiwidmFsaWRhdGVGb3JtIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsInN1Ym1pdEZvcm0iLCJwYXNzd29yZCIsImdldFBhc3N3b3JkIiwiaXNQYXNzd29yZFZhbGlkIiwic2V0UGFzc3dvcmQiLCJjbGVhclBhc3N3b3JkIiwiYXNzaWduQ29udGV4dCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGVBbmRTdWJtaXRGb3JtIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxhQUFhRCxRQUFRLGVBQVIsQ0FBbkI7QUFBQSxJQUNNRSxnQkFBZ0JGLFFBQVEsaUJBQVIsQ0FEdEI7QUFBQSxJQUVNRyxrQkFBa0JILFFBQVEsbUJBQVIsQ0FGeEI7O0lBSVFJLE8sR0FBb0JMLEksQ0FBcEJLLE87SUFBU0MsTSxHQUFXTixJLENBQVhNLE07O0lBRVhDLFk7Ozs7Ozs7Ozs7OzRDQUNvQjtBQUN0QixVQUFNQyxnQkFBZ0IsS0FBS0MsWUFBTCxFQUF0Qjs7QUFFQSxVQUFJLENBQUNELGFBQUwsRUFBb0I7QUFDbEIsYUFBS0UsbUJBQUwsQ0FBeUIseUJBQXpCO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0MsVUFBTDtBQUNEO0FBQ0Y7OzttQ0FFYztBQUNiLFVBQU1DLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjtBQUFBLFVBQ01MLGdCQUFnQk0sZ0JBQWdCRixRQUFoQixDQUR0Qjs7QUFHQSxhQUFPSixhQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1JLFdBQVcsS0FBS0MsV0FBTCxFQUFqQjs7QUFFQVgsaUJBQVdhLFdBQVgsQ0FBdUJILFFBQXZCOztBQUVBLFdBQUtJLGFBQUw7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0MsYUFBTDtBQUNEOzs7b0NBRWU7QUFBQTs7QUFDZCxhQUFPLENBRUwsb0JBQUMsYUFBRCxPQUZLLEVBR0wsb0JBQUMsZUFBRCxPQUhLLEVBSUw7QUFBQyxjQUFEO0FBQUEsVUFBUSxXQUFVLFFBQWxCO0FBQ1EsbUJBQVMsbUJBQU07QUFDYixnQkFBTUMsaUJBQWlCLElBQXZCOztBQUVBLG1CQUFLQyxxQkFBTDs7QUFFQSxtQkFBT0QsY0FBUDtBQUNEO0FBUFQ7QUFBQTtBQUFBLE9BSkssQ0FBUDtBQWlCRDs7O21DQUVxQkUsVSxFQUFZO0FBQ2hDLGFBQU9mLFFBQVFnQixjQUFSLENBQXVCZCxZQUF2QixFQUFxQ2EsVUFBckMsQ0FBUDtBQUNEOzs7O0VBcER3QmYsTzs7QUF1RDNCaUIsT0FBT0MsTUFBUCxDQUFjaEIsWUFBZCxFQUE0QjtBQUMxQmlCLFdBQVMsTUFEaUI7QUFFMUJDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRk8sQ0FBNUI7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJyQixZQUFqQjs7QUFFQSxTQUFTTyxlQUFULENBQXlCRixRQUF6QixFQUFtQztBQUNqQyxNQUFNSixnQkFBaUJJLGFBQWEsRUFBcEMsQ0FEaUMsQ0FDUzs7QUFFMUMsU0FBT0osYUFBUDtBQUNEIiwiZmlsZSI6InBhc3N3b3JkRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgY29udHJvbGxlciA9IHJlcXVpcmUoJy4uL2NvbnRyb2xsZXInKSxcbiAgICAgIFBhc3N3b3JkSW5wdXQgPSByZXF1aXJlKCcuL3Bhc3N3b3JkSW5wdXQnKSxcbiAgICAgIFZhbGlkYXRpb25FcnJvciA9IHJlcXVpcmUoJy4vdmFsaWRhdGlvbkVycm9yJyk7XG5cbmNvbnN0IHsgRWxlbWVudCwgQnV0dG9uIH0gPSBlYXN5O1xuXG5jbGFzcyBQYXNzd29yZEZvcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdmFsaWRhdGVBbmRTdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB0aGlzLnZhbGlkYXRlRm9ybSgpO1xuXG4gICAgaWYgKCFwYXNzd29yZFZhbGlkKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IoJ1RoZSBwYXNzd29yZCBpcyBpbnZhbGlkJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3VibWl0Rm9ybSgpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKSxcbiAgICAgICAgICBwYXNzd29yZFZhbGlkID0gaXNQYXNzd29yZFZhbGlkKHBhc3N3b3JkKTtcblxuICAgIHJldHVybiBwYXNzd29yZFZhbGlkO1xuICB9XG5cbiAgc3VibWl0Rm9ybSgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQoKTtcblxuICAgIGNvbnRyb2xsZXIuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdGhpcy5jbGVhclBhc3N3b3JkKCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPixcbiAgICAgIDxWYWxpZGF0aW9uRXJyb3IvPixcbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZXZlbnREZWZhdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRTdWJtaXRGb3JtKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmVudERlZmF1bHQ7XG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICBTdWJtaXRcbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgXSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFBhc3N3b3JkRm9ybSwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihQYXNzd29yZEZvcm0sIHtcbiAgdGFnTmFtZTogJ2Zvcm0nLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3Bhc3N3b3JkJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzd29yZEZvcm07XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSAnJyk7ICAvLy9cblxuICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbn1cbiJdfQ==