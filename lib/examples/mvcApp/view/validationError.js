'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Element = easy.Element;


var TIMEOUT_DELAY = 1000;

var ValidationError = function (_Element) {
  _inherits(ValidationError, _Element);

  function ValidationError(selector) {
    _classCallCheck(this, ValidationError);

    var _this = _possibleConstructorReturn(this, (ValidationError.__proto__ || Object.getPrototypeOf(ValidationError)).call(this, selector));

    _this.timeout = null;
    return _this;
  }

  _createClass(ValidationError, [{
    key: 'clearValidationError',
    value: function clearValidationError() {
      var html = '';

      this.html(html);
    }
  }, {
    key: 'showValidationError',
    value: function showValidationError(validationError) {
      var html = validationError; ///

      this.html(html);

      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(function () {
        this.timemout = null;

        this.clearValidationError();
      }.bind(this), TIMEOUT_DELAY);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      return {
        showValidationError: this.showValidationError.bind(this)
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(ValidationError, properties);
    }
  }]);

  return ValidationError;
}(Element);

Object.assign(ValidationError, {
  tagName: 'p',
  defaultProperties: {
    className: 'validation error'
  }
});

module.exports = ValidationError;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9tdmNBcHAvdmlldy92YWxpZGF0aW9uRXJyb3IuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiVElNRU9VVF9ERUxBWSIsIlZhbGlkYXRpb25FcnJvciIsInNlbGVjdG9yIiwidGltZW91dCIsImh0bWwiLCJ2YWxpZGF0aW9uRXJyb3IiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGltZW1vdXQiLCJjbGVhclZhbGlkYXRpb25FcnJvciIsImJpbmQiLCJzaG93VmFsaWRhdGlvbkVycm9yIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87OztBQUVSLElBQU1DLGdCQUFnQixJQUF0Qjs7SUFFTUMsZTs7O0FBQ0osMkJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQSxrSUFDZEEsUUFEYzs7QUFHcEIsVUFBS0MsT0FBTCxHQUFlLElBQWY7QUFIb0I7QUFJckI7Ozs7MkNBRXNCO0FBQ3JCLFVBQU1DLE9BQU8sRUFBYjs7QUFFQSxXQUFLQSxJQUFMLENBQVVBLElBQVY7QUFDRDs7O3dDQUVtQkMsZSxFQUFpQjtBQUNuQyxVQUFNRCxPQUFPQyxlQUFiLENBRG1DLENBQ0w7O0FBRTlCLFdBQUtELElBQUwsQ0FBVUEsSUFBVjs7QUFFQSxVQUFJLEtBQUtELE9BQUwsS0FBaUIsSUFBckIsRUFBMkI7QUFDekJHLHFCQUFhLEtBQUtILE9BQWxCO0FBQ0Q7O0FBRUQsV0FBS0EsT0FBTCxHQUFlSSxXQUFXLFlBQVc7QUFDbkMsYUFBS0MsUUFBTCxHQUFnQixJQUFoQjs7QUFFQSxhQUFLQyxvQkFBTDtBQUNELE9BSnlCLENBSXhCQyxJQUp3QixDQUluQixJQUptQixDQUFYLEVBSURWLGFBSkMsQ0FBZjtBQUtEOzs7b0NBRWU7QUFDZCxhQUFRO0FBQ05XLDZCQUFxQixLQUFLQSxtQkFBTCxDQUF5QkQsSUFBekIsQ0FBOEIsSUFBOUI7QUFEZixPQUFSO0FBR0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUNoQyxhQUFPYixRQUFRYyxjQUFSLENBQXVCWixlQUF2QixFQUF3Q1csVUFBeEMsQ0FBUDtBQUNEOzs7O0VBckMyQmIsTzs7QUF3QzlCZSxPQUFPQyxNQUFQLENBQWNkLGVBQWQsRUFBK0I7QUFDN0JlLFdBQVMsR0FEb0I7QUFFN0JDLHFCQUFtQjtBQUNqQkMsZUFBVztBQURNO0FBRlUsQ0FBL0I7O0FBT0FDLE9BQU9DLE9BQVAsR0FBaUJuQixlQUFqQiIsImZpbGUiOiJ2YWxpZGF0aW9uRXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY29uc3QgVElNRU9VVF9ERUxBWSA9IDEwMDA7XG5cbmNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gIH1cblxuICBjbGVhclZhbGlkYXRpb25FcnJvcigpIHtcbiAgICBjb25zdCBodG1sID0gJyc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcikge1xuICAgIGNvbnN0IGh0bWwgPSB2YWxpZGF0aW9uRXJyb3I7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuXG4gICAgaWYgKHRoaXMudGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudGltZW1vdXQgPSBudWxsO1xuXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9yKCk7XG4gICAgfS5iaW5kKHRoaXMpLCBUSU1FT1VUX0RFTEFZKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93VmFsaWRhdGlvbkVycm9yOiB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWYWxpZGF0aW9uRXJyb3IsIHByb3BlcnRpZXMpO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmFsaWRhdGlvbkVycm9yLCB7XG4gIHRhZ05hbWU6ICdwJyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2YWxpZGF0aW9uIGVycm9yJ1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWYWxpZGF0aW9uRXJyb3I7XG4iXX0=