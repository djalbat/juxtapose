"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

var _controller = _interopRequireDefault(require("../controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ResetPasswordButton = /*#__PURE__*/function (_Element) {
  _inherits(ResetPasswordButton, _Element);

  var _super = _createSuper(ResetPasswordButton);

  function ResetPasswordButton() {
    _classCallCheck(this, ResetPasswordButton);

    return _super.apply(this, arguments);
  }

  _createClass(ResetPasswordButton, [{
    key: "clickHandler",
    value: function clickHandler() {
      _controller["default"].resetPassword();
    }
  }, {
    key: "childElements",
    value: function childElements() {
      return "Reset password";
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.onClick(this.clickHandler);
    }
  }], [{
    key: "fromClass",
    value: function fromClass(Class, properties) {
      var resetPasswordButton = _easy.Element.fromClass(Class, properties);

      resetPasswordButton.initialise();
      return resetPasswordButton;
    }
  }]);

  return ResetPasswordButton;
}(_easy.Element);

exports["default"] = ResetPasswordButton;

_defineProperty(ResetPasswordButton, "tagName", "button");

_defineProperty(ResetPasswordButton, "defaultProperties", {
  className: "resetPassword"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0UGFzc3dvcmRCdXR0b24uanMiXSwibmFtZXMiOlsiUmVzZXRQYXNzd29yZEJ1dHRvbiIsImNvbnRyb2xsZXIiLCJyZXNldFBhc3N3b3JkIiwib25DbGljayIsImNsaWNrSGFuZGxlciIsIkNsYXNzIiwicHJvcGVydGllcyIsInJlc2V0UGFzc3dvcmRCdXR0b24iLCJFbGVtZW50IiwiZnJvbUNsYXNzIiwiaW5pdGlhbGlzZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsbUI7Ozs7Ozs7Ozs7Ozs7bUNBQ0o7QUFDYkMsNkJBQVdDLGFBQVg7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxnQkFBUDtBQUNEOzs7aUNBRVk7QUFDWCxXQUFLQyxPQUFMLENBQWEsS0FBS0MsWUFBbEI7QUFDRDs7OzhCQVFnQkMsSyxFQUFPQyxVLEVBQVk7QUFDbEMsVUFBTUMsbUJBQW1CLEdBQUdDLGNBQVFDLFNBQVIsQ0FBa0JKLEtBQWxCLEVBQXlCQyxVQUF6QixDQUE1Qjs7QUFFQUMsTUFBQUEsbUJBQW1CLENBQUNHLFVBQXBCO0FBRUEsYUFBT0gsbUJBQVA7QUFDRDs7OztFQXpCOENDLGE7Ozs7Z0JBQTVCUixtQixhQWFGLFE7O2dCQWJFQSxtQix1QkFlUTtBQUN6QlcsRUFBQUEsU0FBUyxFQUFFO0FBRGMsQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzZXRQYXNzd29yZEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjbGlja0hhbmRsZXIoKSB7XG4gICAgY29udHJvbGxlci5yZXNldFBhc3N3b3JkKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiBcIlJlc2V0IHBhc3N3b3JkXCI7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMub25DbGljayh0aGlzLmNsaWNrSGFuZGxlcik7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiYnV0dG9uXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJyZXNldFBhc3N3b3JkXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgcmVzZXRQYXNzd29yZEJ1dHRvbiA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKTtcblxuICAgIHJlc2V0UGFzc3dvcmRCdXR0b24uaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHJlc2V0UGFzc3dvcmRCdXR0b247XG4gIH1cbn1cbiJdfQ==