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

var easy = require("easy");

var Element = easy.Element;

var Message = /*#__PURE__*/function (_Element) {
  _inherits(Message, _Element);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, _getPrototypeOf(Message).apply(this, arguments));
  }

  _createClass(Message, [{
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
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      return Element.fromProperties(Message, properties);
    }
  }]);

  return Message;
}(Element);

Object.assign(Message, {
  tagName: "p",
  defaultProperties: {
    className: "message"
  }
});
module.exports = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiTWVzc2FnZSIsIm1lc3NhZ2UiLCJodG1sIiwic2hvd01lc3NhZ2UiLCJiaW5kIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLE87Ozs7Ozs7Ozs7O2dDQUNRQyxPLEVBQVM7QUFDbkIsVUFBTUMsSUFBSSxHQUFHRCxPQUFiLENBRG1CLENBQ0c7O0FBRXRCLFdBQUtDLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7b0NBRWU7QUFDZixVQUFNQyxXQUFXLEdBQUcsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBcEI7QUFFQyxhQUFRO0FBQ05ELFFBQUFBLFdBQVcsRUFBWEE7QUFETSxPQUFSO0FBR0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9OLE9BQU8sQ0FBQ08sY0FBUixDQUF1Qk4sT0FBdkIsRUFBZ0NLLFVBQWhDLENBQVA7QUFBcUQ7Ozs7RUFmckVOLE87O0FBa0J0QlEsTUFBTSxDQUFDQyxNQUFQLENBQWNSLE9BQWQsRUFBdUI7QUFDckJTLEVBQUFBLE9BQU8sRUFBRSxHQURZO0FBRXJCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFGRSxDQUF2QjtBQU9BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLE9BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKFwiZWFzeVwiKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3dNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBodG1sID0gbWVzc2FnZTsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IHNob3dNZXNzYWdlID0gdGhpcy5zaG93TWVzc2FnZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWVzc2FnZSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihNZXNzYWdlLCB7XG4gIHRhZ05hbWU6IFwicFwiLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogXCJtZXNzYWdlXCJcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZTtcbiJdfQ==