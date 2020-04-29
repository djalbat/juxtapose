"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _constants = require("../../../constants");

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
      var html = "";
      this.html(html);
    }
  }, {
    key: "showValidationError",
    value: function showValidationError(validationError) {
      var _this2 = this;

      var html = validationError; ///

      this.html(html);

      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(function () {
        _this2.timemout = null;

        _this2.clearValidationError();
      }, _constants.TIMEOUT_DELAY);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      return {
        showValidationError: this.showValidationError.bind(this)
      };
    }
  }]);

  return ValidationError;
}(_easy.Element);

exports["default"] = ValidationError;

_defineProperty(ValidationError, "tagName", "p");

_defineProperty(ValidationError, "defaultProperties", {
  className: "validation error"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb25FcnJvci5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uRXJyb3IiLCJzZWxlY3RvciIsInRpbWVvdXQiLCJodG1sIiwidmFsaWRhdGlvbkVycm9yIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInRpbWVtb3V0IiwiY2xlYXJWYWxpZGF0aW9uRXJyb3IiLCJUSU1FT1VUX0RFTEFZIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsImJpbmQiLCJFbGVtZW50IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7QUFDbkIsMkJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDcEIseUZBQU1BLFFBQU47QUFFQSxVQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUhvQjtBQUlyQjs7OzsyQ0FFc0I7QUFDckIsVUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFFQSxXQUFLQSxJQUFMLENBQVVBLElBQVY7QUFDRDs7O3dDQUVtQkMsZSxFQUFpQjtBQUFBOztBQUNuQyxVQUFNRCxJQUFJLEdBQUdDLGVBQWIsQ0FEbUMsQ0FDTDs7QUFFOUIsV0FBS0QsSUFBTCxDQUFVQSxJQUFWOztBQUVBLFVBQUksS0FBS0QsT0FBTCxLQUFpQixJQUFyQixFQUEyQjtBQUN6QkcsUUFBQUEsWUFBWSxDQUFDLEtBQUtILE9BQU4sQ0FBWjtBQUNEOztBQUVELFdBQUtBLE9BQUwsR0FBZUksVUFBVSxDQUFDLFlBQU07QUFDOUIsUUFBQSxNQUFJLENBQUNDLFFBQUwsR0FBZ0IsSUFBaEI7O0FBRUEsUUFBQSxNQUFJLENBQUNDLG9CQUFMO0FBQ0QsT0FKd0IsRUFJdEJDLHdCQUpzQixDQUF6QjtBQUtEOzs7b0NBRWU7QUFDZCxhQUFRO0FBQ05DLFFBQUFBLG1CQUFtQixFQUFFLEtBQUtBLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QjtBQURmLE9BQVI7QUFHRDs7OztFQWpDMENDLGE7Ozs7Z0JBQXhCWixlLGFBbUNGLEc7O2dCQW5DRUEsZSx1QkFxQ1E7QUFDekJhLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IFRJTUVPVVRfREVMQVkgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gIH1cblxuICBjbGVhclZhbGlkYXRpb25FcnJvcigpIHtcbiAgICBjb25zdCBodG1sID0gXCJcIjtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgY29uc3QgaHRtbCA9IHZhbGlkYXRpb25FcnJvcjsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG5cbiAgICBpZiAodGhpcy50aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGltZW1vdXQgPSBudWxsO1xuXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9yKCk7XG4gICAgfSwgVElNRU9VVF9ERUxBWSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgc2hvd1ZhbGlkYXRpb25FcnJvcjogdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2YWxpZGF0aW9uIGVycm9yXCJcbiAgfTtcbn1cbiJdfQ==