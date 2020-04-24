"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: "assignMethods",
    value: function assignMethods(createMethods, model, view) {
      var methods = createMethods(model, view);
      Object.assign(this, methods);
    }
  }]);

  return Controller;
}();

var controller = new Controller();
module.exports = controller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNyZWF0ZU1ldGhvZHMiLCJtb2RlbCIsInZpZXciLCJtZXRob2RzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udHJvbGxlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxVOzs7Ozs7O2tDQUNVQyxhLEVBQWVDLEssRUFBT0MsSSxFQUFNO0FBQ3hDLFVBQU1DLE9BQU8sR0FBR0gsYUFBYSxDQUFDQyxLQUFELEVBQVFDLElBQVIsQ0FBN0I7QUFFQUUsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQkYsT0FBcEI7QUFDRDs7Ozs7O0FBR0gsSUFBTUcsVUFBVSxHQUFHLElBQUlQLFVBQUosRUFBbkI7QUFFQVEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRixVQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgYXNzaWduTWV0aG9kcyhjcmVhdGVNZXRob2RzLCBtb2RlbCwgdmlldykge1xuICAgIGNvbnN0IG1ldGhvZHMgPSBjcmVhdGVNZXRob2RzKG1vZGVsLCB2aWV3KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgbWV0aG9kcyk7XG4gIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udHJvbGxlcjtcbiJdfQ==