'use strict';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNyZWF0ZU1ldGhvZHMiLCJtb2RlbCIsInZpZXciLCJtZXRob2RzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udHJvbGxlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztJQUVNQSxVOzs7Ozs7O2tDQUNVQyxhLEVBQWVDLEssRUFBT0MsSSxFQUFNO0FBQ3hDLFVBQU1DLE9BQU8sR0FBR0gsYUFBYSxDQUFDQyxLQUFELEVBQVFDLElBQVIsQ0FBN0I7QUFFQUUsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWMsSUFBZCxFQUFvQkYsT0FBcEI7QUFDRDs7Ozs7O0FBR0gsSUFBTUcsVUFBVSxHQUFHLElBQUlQLFVBQUosRUFBbkI7QUFFQVEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCRixVQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGFzc2lnbk1ldGhvZHMoY3JlYXRlTWV0aG9kcywgbW9kZWwsIHZpZXcpIHtcbiAgICBjb25zdCBtZXRob2RzID0gY3JlYXRlTWV0aG9kcyhtb2RlbCwgdmlldyk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG1ldGhvZHMpO1xuICB9XG59XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRyb2xsZXI7XG4iXX0=