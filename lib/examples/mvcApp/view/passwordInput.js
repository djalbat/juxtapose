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

var InputElement = easy.InputElement;

var PasswordInput = /*#__PURE__*/function (_InputElement) {
  _inherits(PasswordInput, _InputElement);

  function PasswordInput() {
    _classCallCheck(this, PasswordInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(PasswordInput).apply(this, arguments));
  }

  _createClass(PasswordInput, [{
    key: "getPassword",
    value: function getPassword() {
      var value = this.getValue(),
          password = value; ///

      return password;
    }
  }, {
    key: "clearPassword",
    value: function clearPassword() {
      var password = "",
          value = password; ///

      this.setValue(value);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var getPassword = this.getPassword.bind(this),
          clearPassword = this.clearPassword.bind(this);
      return {
        getPassword: getPassword,
        clearPassword: clearPassword
      };
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return InputElement.fromProperties(PasswordInput, properties);
    }
  }]);

  return PasswordInput;
}(InputElement);

_defineProperty(PasswordInput, "tagName", "input");

_defineProperty(PasswordInput, "defaultProperties", {
  type: "password"
});

module.exports = PasswordInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkSW5wdXQuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJQYXNzd29yZElucHV0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhc3N3b3JkIiwic2V0VmFsdWUiLCJnZXRQYXNzd29yZCIsImJpbmQiLCJjbGVhclBhc3N3b3JkIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwidHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsYTs7Ozs7Ozs7Ozs7a0NBQ1U7QUFDWixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsUUFBTCxFQUFkO0FBQUEsVUFDTUMsUUFBUSxHQUFHRixLQURqQixDQURZLENBRVk7O0FBRXhCLGFBQU9FLFFBQVA7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUEsUUFBUSxHQUFHLEVBQWpCO0FBQUEsVUFDTUYsS0FBSyxHQUFHRSxRQURkLENBRGMsQ0FFVTs7QUFFeEIsV0FBS0MsUUFBTCxDQUFjSCxLQUFkO0FBQ0Q7OztvQ0FFZTtBQUNmLFVBQU1JLFdBQVcsR0FBRyxLQUFLQSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFwQjtBQUFBLFVBQ0dDLGFBQWEsR0FBRyxLQUFLQSxhQUFMLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQURuQjtBQUdDLGFBQVE7QUFDTkQsUUFBQUEsV0FBVyxFQUFYQSxXQURNO0FBRU5FLFFBQUFBLGFBQWEsRUFBYkE7QUFGTSxPQUFSO0FBSUQ7OzttQ0FRcUJDLFUsRUFBWTtBQUFFLGFBQU9ULFlBQVksQ0FBQ1UsY0FBYixDQUE0QlQsYUFBNUIsRUFBMkNRLFVBQTNDLENBQVA7QUFBZ0U7Ozs7RUEvQjFFVCxZOztnQkFBdEJDLGEsYUF5QmEsTzs7Z0JBekJiQSxhLHVCQTJCdUI7QUFDekJVLEVBQUFBLElBQUksRUFBRTtBQURtQixDOztBQU83QkMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCWixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZShcImVhc3lcIik7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBQYXNzd29yZElucHV0IGV4dGVuZHMgSW5wdXRFbGVtZW50IHtcbiAgZ2V0UGFzc3dvcmQoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgcGFzc3dvcmQgPSB2YWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gcGFzc3dvcmQ7XG4gIH1cblxuICBjbGVhclBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gXCJcIixcbiAgICAgICAgICB2YWx1ZSA9IHBhc3N3b3JkOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBnZXRQYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBjbGVhclBhc3N3b3JkID0gdGhpcy5jbGVhclBhc3N3b3JkLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBhc3N3b3JkLFxuICAgICAgY2xlYXJQYXNzd29yZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwicGFzc3dvcmRcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7IHJldHVybiBJbnB1dEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUGFzc3dvcmRJbnB1dCwgcHJvcGVydGllcyk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQYXNzd29yZElucHV0O1xuIl19