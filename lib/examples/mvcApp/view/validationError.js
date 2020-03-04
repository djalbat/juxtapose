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

var Element = easy.Element;
var TIMEOUT_DELAY = 1000;

var ValidationError = /*#__PURE__*/function (_Element) {
  _inherits(ValidationError, _Element);

  function ValidationError(selector) {
    var _this;

    _classCallCheck(this, ValidationError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValidationError).call(this, selector));
    _this.timeout = null;
    return _this;
  }

  _createClass(ValidationError, [{
    key: "clearValidationError",
    value: function clearValidationError() {
      var html = '';
      this.html(html);
    }
  }, {
    key: "showValidationError",
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
    key: "parentContext",
    value: function parentContext() {
      return {
        showValidationError: this.showValidationError.bind(this)
      };
    }
  }], [{
    key: "fromProperties",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb25FcnJvci5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIkVsZW1lbnQiLCJUSU1FT1VUX0RFTEFZIiwiVmFsaWRhdGlvbkVycm9yIiwic2VsZWN0b3IiLCJ0aW1lb3V0IiwiaHRtbCIsInZhbGlkYXRpb25FcnJvciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ0aW1lbW91dCIsImNsZWFyVmFsaWRhdGlvbkVycm9yIiwiYmluZCIsInNob3dWYWxpZGF0aW9uRXJyb3IiLCJwcm9wZXJ0aWVzIiwiZnJvbVByb3BlcnRpZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztJQUVRQyxPLEdBQVlGLEksQ0FBWkUsTztBQUVSLElBQU1DLGFBQWEsR0FBRyxJQUF0Qjs7SUFFTUMsZTs7O0FBQ0osMkJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDcEIseUZBQU1BLFFBQU47QUFFQSxVQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUhvQjtBQUlyQjs7OzsyQ0FFc0I7QUFDckIsVUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQSxXQUFLQSxJQUFMLENBQVVBLElBQVY7QUFDRDs7O3dDQUVtQkMsZSxFQUFpQjtBQUNuQyxVQUFNRCxJQUFJLEdBQUdDLGVBQWIsQ0FEbUMsQ0FDTDs7QUFFOUIsV0FBS0QsSUFBTCxDQUFVQSxJQUFWOztBQUVBLFVBQUksS0FBS0QsT0FBTCxLQUFpQixJQUFyQixFQUEyQjtBQUN6QkcsUUFBQUEsWUFBWSxDQUFDLEtBQUtILE9BQU4sQ0FBWjtBQUNEOztBQUVELFdBQUtBLE9BQUwsR0FBZUksVUFBVSxDQUFDLFlBQVc7QUFDbkMsYUFBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUVBLGFBQUtDLG9CQUFMO0FBQ0QsT0FKeUIsQ0FJeEJDLElBSndCLENBSW5CLElBSm1CLENBQUQsRUFJWFYsYUFKVyxDQUF6QjtBQUtEOzs7b0NBRWU7QUFDZCxhQUFRO0FBQ05XLFFBQUFBLG1CQUFtQixFQUFFLEtBQUtBLG1CQUFMLENBQXlCRCxJQUF6QixDQUE4QixJQUE5QjtBQURmLE9BQVI7QUFHRDs7O21DQUVxQkUsVSxFQUFZO0FBQUUsYUFBT2IsT0FBTyxDQUFDYyxjQUFSLENBQXVCWixlQUF2QixFQUF3Q1csVUFBeEMsQ0FBUDtBQUE2RDs7OztFQW5DckViLE87O0FBc0M5QmUsTUFBTSxDQUFDQyxNQUFQLENBQWNkLGVBQWQsRUFBK0I7QUFDN0JlLEVBQUFBLE9BQU8sRUFBRSxHQURvQjtBQUU3QkMsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRlUsQ0FBL0I7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbkIsZUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY29uc3QgVElNRU9VVF9ERUxBWSA9IDEwMDA7XG5cbmNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gIH1cblxuICBjbGVhclZhbGlkYXRpb25FcnJvcigpIHtcbiAgICBjb25zdCBodG1sID0gJyc7XG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBzaG93VmFsaWRhdGlvbkVycm9yKHZhbGlkYXRpb25FcnJvcikge1xuICAgIGNvbnN0IGh0bWwgPSB2YWxpZGF0aW9uRXJyb3I7IC8vL1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuXG4gICAgaWYgKHRoaXMudGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMudGltZW1vdXQgPSBudWxsO1xuXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9yKCk7XG4gICAgfS5iaW5kKHRoaXMpLCBUSU1FT1VUX0RFTEFZKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93VmFsaWRhdGlvbkVycm9yOiB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmFsaWRhdGlvbkVycm9yLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFZhbGlkYXRpb25FcnJvciwge1xuICB0YWdOYW1lOiAncCcsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmFsaWRhdGlvbiBlcnJvcidcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmFsaWRhdGlvbkVycm9yO1xuIl19