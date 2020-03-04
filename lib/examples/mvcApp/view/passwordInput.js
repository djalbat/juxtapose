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
      var password = '',
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

Object.assign(PasswordInput, {
  tagName: 'input',
  defaultProperties: {
    type: 'password'
  }
});
module.exports = PasswordInput;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkSW5wdXQuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJJbnB1dEVsZW1lbnQiLCJQYXNzd29yZElucHV0IiwidmFsdWUiLCJnZXRWYWx1ZSIsInBhc3N3b3JkIiwic2V0VmFsdWUiLCJnZXRQYXNzd29yZCIsImJpbmQiLCJjbGVhclBhc3N3b3JkIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidHlwZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0lBRVFDLFksR0FBaUJGLEksQ0FBakJFLFk7O0lBRUZDLGE7Ozs7Ozs7Ozs7O2tDQUNVO0FBQ1osVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsRUFBZDtBQUFBLFVBQ01DLFFBQVEsR0FBR0YsS0FEakIsQ0FEWSxDQUVZOztBQUV4QixhQUFPRSxRQUFQO0FBQ0Q7OztvQ0FFZTtBQUNkLFVBQU1BLFFBQVEsR0FBRyxFQUFqQjtBQUFBLFVBQ01GLEtBQUssR0FBR0UsUUFEZCxDQURjLENBRVU7O0FBRXhCLFdBQUtDLFFBQUwsQ0FBY0gsS0FBZDtBQUNEOzs7b0NBRWU7QUFDZixVQUFNSSxXQUFXLEdBQUcsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBcEI7QUFBQSxVQUNHQyxhQUFhLEdBQUcsS0FBS0EsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FEbkI7QUFHQyxhQUFRO0FBQ05ELFFBQUFBLFdBQVcsRUFBWEEsV0FETTtBQUVORSxRQUFBQSxhQUFhLEVBQWJBO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCQyxVLEVBQVk7QUFBRSxhQUFPVCxZQUFZLENBQUNVLGNBQWIsQ0FBNEJULGFBQTVCLEVBQTJDUSxVQUEzQyxDQUFQO0FBQWdFOzs7O0VBekIxRVQsWTs7QUE0QjVCVyxNQUFNLENBQUNDLE1BQVAsQ0FBY1gsYUFBZCxFQUE2QjtBQUMzQlksRUFBQUEsT0FBTyxFQUFFLE9BRGtCO0FBRTNCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsSUFBSSxFQUFFO0FBRFc7QUFGUSxDQUE3QjtBQU9BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJoQixhQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgeyBJbnB1dEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFBhc3N3b3JkSW5wdXQgZXh0ZW5kcyBJbnB1dEVsZW1lbnQge1xuICBnZXRQYXNzd29yZCgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKSxcbiAgICAgICAgICBwYXNzd29yZCA9IHZhbHVlOyAvLy9cblxuICAgIHJldHVybiBwYXNzd29yZDtcbiAgfVxuXG4gIGNsZWFyUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSAnJyxcbiAgICAgICAgICB2YWx1ZSA9IHBhc3N3b3JkOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBnZXRQYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBjbGVhclBhc3N3b3JkID0gdGhpcy5jbGVhclBhc3N3b3JkLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBhc3N3b3JkLFxuICAgICAgY2xlYXJQYXNzd29yZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXNzd29yZElucHV0LCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKFBhc3N3b3JkSW5wdXQsIHtcbiAgdGFnTmFtZTogJ2lucHV0JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICB0eXBlOiAncGFzc3dvcmQnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhc3N3b3JkSW5wdXQ7XG4iXX0=