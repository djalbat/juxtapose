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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

///
function mvcApp() {
  var model = new _model["default"](),
      view = /*#__PURE__*/React.createElement(_view["default"], null);
  Object.assign(_controller["default"], {
    setPassword: setPassword,
    resetPassword: resetPassword
  });
  var body = new _easy.Body();
  body.mount(view);

  function setPassword(password) {
    model.setPassword(password);
    view.showMessage("The password has been set.");
  }

  function resetPassword() {
    model.resetPassword();
    view.showMessage("The password has been reset.");
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm12Y0FwcC5qcyJdLCJuYW1lcyI6WyJtdmNBcHAiLCJtb2RlbCIsIk1vZGVsIiwidmlldyIsIk9iamVjdCIsImFzc2lnbiIsImNvbnRyb2xsZXIiLCJzZXRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJib2R5IiwiQm9keSIsIm1vdW50IiwicGFzc3dvcmQiLCJzaG93TWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQU5vQjtBQVFMLFNBQVNBLE1BQVQsR0FBa0I7QUFDL0IsTUFBTUMsS0FBSyxHQUFHLElBQUlDLGlCQUFKLEVBQWQ7QUFBQSxNQUNNQyxJQUFJLGdCQUVGLG9CQUFDLGdCQUFELE9BSFI7QUFPQUMsRUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNDLHNCQUFkLEVBQTBCO0FBQ3hCQyxJQUFBQSxXQUFXLEVBQVhBLFdBRHdCO0FBRXhCQyxJQUFBQSxhQUFhLEVBQWJBO0FBRndCLEdBQTFCO0FBS0EsTUFBTUMsSUFBSSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUVBRCxFQUFBQSxJQUFJLENBQUNFLEtBQUwsQ0FBV1IsSUFBWDs7QUFFQSxXQUFTSSxXQUFULENBQXFCSyxRQUFyQixFQUErQjtBQUM3QlgsSUFBQUEsS0FBSyxDQUFDTSxXQUFOLENBQWtCSyxRQUFsQjtBQUVBVCxJQUFBQSxJQUFJLENBQUNVLFdBQUwsQ0FBaUIsNEJBQWpCO0FBQ0Q7O0FBRUQsV0FBU0wsYUFBVCxHQUF5QjtBQUN2QlAsSUFBQUEsS0FBSyxDQUFDTyxhQUFOO0FBRUFMLElBQUFBLElBQUksQ0FBQ1UsV0FBTCxDQUFpQiw4QkFBakI7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBWaWV3IGZyb20gXCIuL212Y0FwcC92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwL21vZGVsXCI7XG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi9tdmNBcHAvY29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtdmNBcHAoKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcgLz5cblxuICAgICAgICA7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCB7XG4gICAgc2V0UGFzc3dvcmQsXG4gICAgcmVzZXRQYXNzd29yZFxuICB9KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGZ1bmN0aW9uIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgbW9kZWwuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiBzZXQuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcbiAgICBtb2RlbC5yZXNldFBhc3N3b3JkKCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0LlwiKTtcbiAgfVxufVxuIl19