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

  function ValidationError(selectorOrDomElement) {
    var _this;

    _classCallCheck(this, ValidationError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ValidationError).call(this, selectorOrDomElement));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRpb25FcnJvci5qcyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uRXJyb3IiLCJzZWxlY3Rvck9yRG9tRWxlbWVudCIsInRpbWVvdXQiLCJodG1sIiwidmFsaWRhdGlvbkVycm9yIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInRpbWVtb3V0IiwiY2xlYXJWYWxpZGF0aW9uRXJyb3IiLCJUSU1FT1VUX0RFTEFZIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsImJpbmQiLCJFbGVtZW50IiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxlOzs7QUFDbkIsMkJBQVlDLG9CQUFaLEVBQWtDO0FBQUE7O0FBQUE7O0FBQ2hDLHlGQUFNQSxvQkFBTjtBQUVBLFVBQUtDLE9BQUwsR0FBZSxJQUFmO0FBSGdDO0FBSWpDOzs7OzJDQUVzQjtBQUNyQixVQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUVBLFdBQUtBLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7d0NBRW1CQyxlLEVBQWlCO0FBQUE7O0FBQ25DLFVBQU1ELElBQUksR0FBR0MsZUFBYixDQURtQyxDQUNMOztBQUU5QixXQUFLRCxJQUFMLENBQVVBLElBQVY7O0FBRUEsVUFBSSxLQUFLRCxPQUFMLEtBQWlCLElBQXJCLEVBQTJCO0FBQ3pCRyxRQUFBQSxZQUFZLENBQUMsS0FBS0gsT0FBTixDQUFaO0FBQ0Q7O0FBRUQsV0FBS0EsT0FBTCxHQUFlSSxVQUFVLENBQUMsWUFBTTtBQUM5QixRQUFBLE1BQUksQ0FBQ0MsUUFBTCxHQUFnQixJQUFoQjs7QUFFQSxRQUFBLE1BQUksQ0FBQ0Msb0JBQUw7QUFDRCxPQUp3QixFQUl0QkMsd0JBSnNCLENBQXpCO0FBS0Q7OztvQ0FFZTtBQUNkLGFBQVE7QUFDTkMsUUFBQUEsbUJBQW1CLEVBQUUsS0FBS0EsbUJBQUwsQ0FBeUJDLElBQXpCLENBQThCLElBQTlCO0FBRGYsT0FBUjtBQUdEOzs7O0VBakMwQ0MsYTs7OztnQkFBeEJaLGUsYUFtQ0YsRzs7Z0JBbkNFQSxlLHVCQXFDUTtBQUN6QmEsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgVElNRU9VVF9ERUxBWSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yT3JEb21FbGVtZW50KSB7XG4gICAgc3VwZXIoc2VsZWN0b3JPckRvbUVsZW1lbnQpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgfVxuXG4gIGNsZWFyVmFsaWRhdGlvbkVycm9yKCkge1xuICAgIGNvbnN0IGh0bWwgPSBcIlwiO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcih2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICBjb25zdCBodG1sID0gdmFsaWRhdGlvbkVycm9yOyAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcblxuICAgIGlmICh0aGlzLnRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50aW1lbW91dCA9IG51bGw7XG5cbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICB9LCBUSU1FT1VUX0RFTEFZKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93VmFsaWRhdGlvbkVycm9yOiB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInBcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZhbGlkYXRpb24gZXJyb3JcIlxuICB9O1xufVxuIl19