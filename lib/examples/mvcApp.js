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
  body.mount(view);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm12Y0FwcC5qcyJdLCJuYW1lcyI6WyJtdmNBcHAiLCJtb2RlbCIsIk1vZGVsIiwidmlldyIsImNvbnRyb2xsZXIiLCJhc3NpZ25NZXRob2RzIiwiY3JlYXRlTWV0aG9kcyIsImJvZHkiLCJCb2R5IiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFQb0I7QUFTTCxTQUFTQSxNQUFULEdBQWtCO0FBQy9CLE1BQU1DLEtBQUssR0FBRyxJQUFJQyxpQkFBSixFQUFkO0FBQUEsTUFDTUMsSUFBSSxHQUVGLG9CQUFDLGdCQUFELE9BSFI7O0FBT0FDLHlCQUFXQyxhQUFYLENBQXlCQyx5QkFBekIsRUFBd0NMLEtBQXhDLEVBQStDRSxJQUEvQzs7QUFFQSxNQUFNSSxJQUFJLEdBQUcsSUFBSUMsVUFBSixFQUFiO0FBRUFELEVBQUFBLElBQUksQ0FBQ0UsS0FBTCxDQUFXTixJQUFYO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgeyBCb2R5IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IFZpZXcgZnJvbSBcIi4vbXZjQXBwL3ZpZXdcIjtcbmltcG9ydCBNb2RlbCBmcm9tIFwiLi9tdmNBcHAvbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcC9jb250cm9sbGVyXCI7XG5pbXBvcnQgY3JlYXRlTWV0aG9kcyBmcm9tIFwiLi9tdmNBcHAvY29udHJvbGxlci9jcmVhdGVNZXRob2RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG12Y0FwcCgpIHtcbiAgY29uc3QgbW9kZWwgPSBuZXcgTW9kZWwoKSxcbiAgICAgICAgdmlldyA9XG5cbiAgICAgICAgICA8VmlldyAvPlxuXG4gICAgICAgIDtcblxuICBjb250cm9sbGVyLmFzc2lnbk1ldGhvZHMoY3JlYXRlTWV0aG9kcywgbW9kZWwsIHZpZXcpO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG4gIGJvZHkubW91bnQodmlldyk7XG59XG4iXX0=