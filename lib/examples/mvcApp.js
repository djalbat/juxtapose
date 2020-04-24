"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mvcApp;

require("../juxtapose");

var _easy = require("easy");

var _view = _interopRequireDefault(require("./mvcApp/view"));

var _model = _interopRequireDefault(require("./mvcApp/model"));

var _controller = _interopRequireDefault(require("./mvcApp/controller"));

var _createMethods = _interopRequireDefault(require("./mvcApp/controller/createMethods"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function mvcApp() {
  var model = new _model["default"](),
      view = React.createElement(_view["default"], null);

  _controller["default"].assignMethods(_createMethods["default"], model, view);

  var body = new _easy.Body();
  body.prepend(view);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm12Y0FwcC5qcyJdLCJuYW1lcyI6WyJtdmNBcHAiLCJtb2RlbCIsIk1vZGVsIiwidmlldyIsImNvbnRyb2xsZXIiLCJhc3NpZ25NZXRob2RzIiwiY3JlYXRlTWV0aG9kcyIsImJvZHkiLCJCb2R5IiwicHJlcGVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFDL0IsTUFBTUMsS0FBSyxHQUFHLElBQUlDLGlCQUFKLEVBQWQ7QUFBQSxNQUNNQyxJQUFJLEdBRUYsb0JBQUMsZ0JBQUQsT0FIUjs7QUFPQUMseUJBQVdDLGFBQVgsQ0FBeUJDLHlCQUF6QixFQUF3Q0wsS0FBeEMsRUFBK0NFLElBQS9DOztBQUVBLE1BQU1JLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFFQUQsRUFBQUEsSUFBSSxDQUFDRSxPQUFMLENBQWFOLElBQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9qdXh0YXBvc2VcIjtcblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL212Y0FwcC92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwL21vZGVsXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9tdmNBcHAvY29udHJvbGxlclwiO1xuaW1wb3J0IGNyZWF0ZU1ldGhvZHMgZnJvbSBcIi4vbXZjQXBwL2NvbnRyb2xsZXIvY3JlYXRlTWV0aG9kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtdmNBcHAoKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcgLz5cblxuICAgICAgICA7XG5cbiAgY29udHJvbGxlci5hc3NpZ25NZXRob2RzKGNyZWF0ZU1ldGhvZHMsIG1vZGVsLCB2aWV3KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5LnByZXBlbmQodmlldyk7XG59XG4iXX0=