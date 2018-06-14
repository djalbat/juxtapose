'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var PasswordInput = function (_InputElement) {
  _inherits(PasswordInput, _InputElement);

  function PasswordInput() {
    _classCallCheck(this, PasswordInput);

    return _possibleConstructorReturn(this, (PasswordInput.__proto__ || Object.getPrototypeOf(PasswordInput)).apply(this, arguments));
  }

  _createClass(PasswordInput, [{
    key: 'getPassword',
    value: function getPassword() {
      var value = this.getValue(),
          password = value; ///

      return password;
    }
  }, {
    key: 'clearPassword',
    value: function clearPassword() {
      var password = '',
          value = password; ///

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var getPassword = this.getPassword.bind(this),
          clearPassword = this.clearPassword.bind(this);

      return {
        getPassword: getPassword,
        clearPassword: clearPassword
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(PasswordInput, properties);
    }
  }]);

  return PasswordInput;
}(InputElement);

Object.assign(PasswordInput, {
  tagName: 'input',
  defaultProperties: {
    type: 'password'
  }
});

module.exports = PasswordInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9tdmNBcHAvdmlldy9wYXNzd29yZElucHV0LmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiSW5wdXRFbGVtZW50IiwiUGFzc3dvcmRJbnB1dCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJwYXNzd29yZCIsInNldFZhbHVlIiwiZ2V0UGFzc3dvcmQiLCJiaW5kIiwiY2xlYXJQYXNzd29yZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsInR5cGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztJQUVRQyxZLEdBQWlCRixJLENBQWpCRSxZOztJQUVGQyxhOzs7Ozs7Ozs7OztrQ0FDVTtBQUNaLFVBQU1DLFFBQVEsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsV0FBV0YsS0FEakIsQ0FEWSxDQUVZOztBQUV4QixhQUFPRSxRQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1BLFdBQVcsRUFBakI7QUFBQSxVQUNNRixRQUFRRSxRQURkLENBRGMsQ0FFVTs7QUFFeEIsV0FBS0MsUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1JLGNBQWMsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBcEI7QUFBQSxVQUNHQyxnQkFBZ0IsS0FBS0EsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FEbkI7O0FBR0MsYUFBUTtBQUNORCxnQ0FETTtBQUVORTtBQUZNLE9BQVI7QUFJRDs7O21DQUVxQkMsVSxFQUFZO0FBQUUsYUFBT1QsYUFBYVUsY0FBYixDQUE0QlQsYUFBNUIsRUFBMkNRLFVBQTNDLENBQVA7QUFBZ0U7Ozs7RUF6QjFFVCxZOztBQTRCNUJXLE9BQU9DLE1BQVAsQ0FBY1gsYUFBZCxFQUE2QjtBQUMzQlksV0FBUyxPQURrQjtBQUUzQkMscUJBQW1CO0FBQ2pCQyxVQUFNO0FBRFc7QUFGUSxDQUE3Qjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmhCLGFBQWpCIiwiZmlsZSI6InBhc3N3b3JkSW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBQYXNzd29yZElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0UGFzc3dvcmQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcGFzc3dvcmQgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcGFzc3dvcmQ7XG4gIH1cblxuICBjbGVhclBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gJycsXG4gICAgICAgICAgdmFsdWUgPSBwYXNzd29yZDsgLy8vXG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3QgZ2V0UGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkLmJpbmQodGhpcyksXG5cdFx0XHRcdCAgY2xlYXJQYXNzd29yZCA9IHRoaXMuY2xlYXJQYXNzd29yZC5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBnZXRQYXNzd29yZCxcbiAgICAgIGNsZWFyUGFzc3dvcmRcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFzc3dvcmRJbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihQYXNzd29yZElucHV0LCB7XG4gIHRhZ05hbWU6ICdpbnB1dCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgdHlwZTogJ3Bhc3N3b3JkJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzd29yZElucHV0O1xuIl19