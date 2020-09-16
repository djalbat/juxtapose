"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _easy = require("easy");

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

var MessageParagraph = /*#__PURE__*/function (_Element) {
  _inherits(MessageParagraph, _Element);

  var _super = _createSuper(MessageParagraph);

  function MessageParagraph() {
    _classCallCheck(this, MessageParagraph);

    return _super.apply(this, arguments);
  }

  _createClass(MessageParagraph, [{
    key: "showMessage",
    value: function showMessage(message) {
      var html = message; ///

      this.html(html);
    }
  }, {
    key: "parentContext",
    value: function parentContext() {
      var showMessage = this.showMessage.bind(this);
      return {
        showMessage: showMessage
      };
    }
  }]);

  return MessageParagraph;
}(_easy.Element);

exports["default"] = MessageParagraph;

_defineProperty(MessageParagraph, "tagName", "p");

_defineProperty(MessageParagraph, "defaultProperties", {
  className: "message"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiTWVzc2FnZVBhcmFncmFwaCIsIm1lc3NhZ2UiLCJodG1sIiwic2hvd01lc3NhZ2UiLCJiaW5kIiwiRWxlbWVudCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLGdCOzs7Ozs7Ozs7Ozs7O2dDQUNQQyxPLEVBQVM7QUFDbkIsVUFBTUMsSUFBSSxHQUFHRCxPQUFiLENBRG1CLENBQ0c7O0FBRXRCLFdBQUtDLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7b0NBRWU7QUFDZixVQUFNQyxXQUFXLEdBQUcsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBcEI7QUFFQyxhQUFRO0FBQ05ELFFBQUFBLFdBQVcsRUFBWEE7QUFETSxPQUFSO0FBR0Q7Ozs7RUFiMkNFLGE7Ozs7Z0JBQXpCTCxnQixhQWVGLEc7O2dCQWZFQSxnQix1QkFpQlE7QUFDekJNLEVBQUFBLFNBQVMsRUFBRTtBQURjLEMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lc3NhZ2VQYXJhZ3JhcGggZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2hvd01lc3NhZ2UobWVzc2FnZSkge1xuICAgIGNvbnN0IGh0bWwgPSBtZXNzYWdlOyAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3Qgc2hvd01lc3NhZ2UgPSB0aGlzLnNob3dNZXNzYWdlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dNZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwicFwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwibWVzc2FnZVwiXG4gIH07XG59XG4iXX0=