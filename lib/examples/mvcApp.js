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
      view = React.createElement(_view["default"], null);

  _controller["default"].assignMethods(_createMethods["default"], model, view);

  var body = new _easy.Body();
  body.prepend(view);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm12Y0FwcC5qcyJdLCJuYW1lcyI6WyJtdmNBcHAiLCJtb2RlbCIsIk1vZGVsIiwidmlldyIsImNvbnRyb2xsZXIiLCJhc3NpZ25NZXRob2RzIiwiY3JlYXRlTWV0aG9kcyIsImJvZHkiLCJCb2R5IiwicHJlcGVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQVBvQjtBQVNMLFNBQVNBLE1BQVQsR0FBa0I7QUFDL0IsTUFBTUMsS0FBSyxHQUFHLElBQUlDLGlCQUFKLEVBQWQ7QUFBQSxNQUNNQyxJQUFJLEdBRUYsb0JBQUMsZ0JBQUQsT0FIUjs7QUFPQUMseUJBQVdDLGFBQVgsQ0FBeUJDLHlCQUF6QixFQUF3Q0wsS0FBeEMsRUFBK0NFLElBQS9DOztBQUVBLE1BQU1JLElBQUksR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFFQUQsRUFBQUEsSUFBSSxDQUFDRSxPQUFMLENBQWFOLElBQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tdmNBcHAvdmlld1wiO1xuaW1wb3J0IE1vZGVsIGZyb20gXCIuL212Y0FwcC9tb2RlbFwiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4vbXZjQXBwL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBjcmVhdGVNZXRob2RzIGZyb20gXCIuL212Y0FwcC9jb250cm9sbGVyL2NyZWF0ZU1ldGhvZHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXZjQXBwKCkge1xuICBjb25zdCBtb2RlbCA9IG5ldyBNb2RlbCgpLFxuICAgICAgICB2aWV3ID1cblxuICAgICAgICAgIDxWaWV3IC8+XG5cbiAgICAgICAgO1xuXG4gIGNvbnRyb2xsZXIuYXNzaWduTWV0aG9kcyhjcmVhdGVNZXRob2RzLCBtb2RlbCwgdmlldyk7XG5cbiAgY29uc3QgYm9keSA9IG5ldyBCb2R5KCk7XG5cbiAgYm9keS5wcmVwZW5kKHZpZXcpO1xufVxuIl19