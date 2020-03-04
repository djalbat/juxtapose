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
  tagName: 'p',
  defaultProperties: {
    className: 'message'
  }
});
module.exports = Message;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJFbGVtZW50IiwiTWVzc2FnZSIsIm1lc3NhZ2UiLCJodG1sIiwic2hvd01lc3NhZ2UiLCJiaW5kIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7SUFFUUMsTyxHQUFZRixJLENBQVpFLE87O0lBRUZDLE87Ozs7Ozs7Ozs7O2dDQUNRQyxPLEVBQVM7QUFDbkIsVUFBTUMsSUFBSSxHQUFHRCxPQUFiLENBRG1CLENBQ0c7O0FBRXRCLFdBQUtDLElBQUwsQ0FBVUEsSUFBVjtBQUNEOzs7b0NBRWU7QUFDZixVQUFNQyxXQUFXLEdBQUcsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBcEI7QUFFQyxhQUFRO0FBQ05ELFFBQUFBLFdBQVcsRUFBWEE7QUFETSxPQUFSO0FBR0Q7OzttQ0FFcUJFLFUsRUFBWTtBQUFFLGFBQU9OLE9BQU8sQ0FBQ08sY0FBUixDQUF1Qk4sT0FBdkIsRUFBZ0NLLFVBQWhDLENBQVA7QUFBcUQ7Ozs7RUFmckVOLE87O0FBa0J0QlEsTUFBTSxDQUFDQyxNQUFQLENBQWNSLE9BQWQsRUFBdUI7QUFDckJTLEVBQUFBLE9BQU8sRUFBRSxHQURZO0FBRXJCQyxFQUFBQSxpQkFBaUIsRUFBRTtBQUNqQkMsSUFBQUEsU0FBUyxFQUFFO0FBRE07QUFGRSxDQUF2QjtBQU9BQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJiLE9BQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgc2hvd01lc3NhZ2UobWVzc2FnZSkge1xuICAgIGNvbnN0IGh0bWwgPSBtZXNzYWdlOyAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG5cdCAgY29uc3Qgc2hvd01lc3NhZ2UgPSB0aGlzLnNob3dNZXNzYWdlLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIHNob3dNZXNzYWdlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykgeyByZXR1cm4gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNZXNzYWdlLCBwcm9wZXJ0aWVzKTsgfVxufVxuXG5PYmplY3QuYXNzaWduKE1lc3NhZ2UsIHtcbiAgdGFnTmFtZTogJ3AnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ21lc3NhZ2UnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2U7XG4iXX0=