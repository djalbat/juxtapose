"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
var _default = controller;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImNyZWF0ZU1ldGhvZHMiLCJtb2RlbCIsInZpZXciLCJtZXRob2RzIiwiT2JqZWN0IiwiYXNzaWduIiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVTs7Ozs7OztrQ0FDVUMsYSxFQUFlQyxLLEVBQU9DLEksRUFBTTtBQUN4QyxVQUFNQyxPQUFPLEdBQUdILGFBQWEsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLENBQTdCO0FBRUFFLE1BQUFBLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLElBQWQsRUFBb0JGLE9BQXBCO0FBQ0Q7Ozs7OztBQUdILElBQU1HLFVBQVUsR0FBRyxJQUFJUCxVQUFKLEVBQW5CO2VBRWVPLFUiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgQ29udHJvbGxlciB7XG4gIGFzc2lnbk1ldGhvZHMoY3JlYXRlTWV0aG9kcywgbW9kZWwsIHZpZXcpIHtcbiAgICBjb25zdCBtZXRob2RzID0gY3JlYXRlTWV0aG9kcyhtb2RlbCwgdmlldyk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIG1ldGhvZHMpO1xuICB9XG59XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyOyJdfQ==