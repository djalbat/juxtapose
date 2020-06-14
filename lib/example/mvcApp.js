"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mvcApp;

require("../index");

var _easy = require("easy");

var _view = _interopRequireDefault(require("./mvcApp/view"));

var _model = _interopRequireDefault(require("./mvcApp/model"));

var _controller = _interopRequireDefault(require("./mvcApp/controller"));

var _createMethods = _interopRequireDefault(require("./mvcApp/controller/createMethods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
function mvcApp() {
  var model = new _model["default"](),
      view = /*#__PURE__*/React.createElement(_view["default"], null);

  _controller["default"].assignMethods(_createMethods["default"], model, view);

  var body = new _easy.Body();
  body.mount(view);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm12Y0FwcC5qcyJdLCJuYW1lcyI6WyJtdmNBcHAiLCJtb2RlbCIsIk1vZGVsIiwidmlldyIsImNvbnRyb2xsZXIiLCJhc3NpZ25NZXRob2RzIiwiY3JlYXRlTWV0aG9kcyIsImJvZHkiLCJCb2R5IiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFQb0I7QUFTTCxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxpQkFBSixFQUFkO0FBQUEsTUFDTUMsSUFBSSxnQkFFRixvQkFBQyxnQkFBRCxPQUhSOztBQU9BQyx5QkFBV0MsYUFBWCxDQUF5QkMseUJBQXpCLEVBQXdDTCxLQUF4QyxFQUErQ0UsSUFBL0M7O0FBRUEsTUFBTUksSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUVBRCxFQUFBQSxJQUFJLENBQUNFLEtBQUwsQ0FBV04sSUFBWDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL212Y0FwcC92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwL21vZGVsXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9tdmNBcHAvY29udHJvbGxlclwiO1xuaW1wb3J0IGNyZWF0ZU1ldGhvZHMgZnJvbSBcIi4vbXZjQXBwL2NvbnRyb2xsZXIvY3JlYXRlTWV0aG9kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtdmNBcHAoKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcgLz5cblxuICAgICAgICA7XG5cbiAgY29udHJvbGxlci5hc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIG1vZGVsLCB2aWV3KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xufVxuIl19