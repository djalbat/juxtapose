'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Controller = function () {
  function Controller() {
    _classCallCheck(this, Controller);
  }

  _createClass(Controller, [{
    key: 'assignMethods',
    value: function assignMethods(createMethods, model, view) {
      var methods = createMethods(model, view);

      Object.assign(this, methods);
    }
  }]);

  return Controller;
}();

var controller = new Controller();

module.exports = controller;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9tdmNBcHAvY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiY3JlYXRlTWV0aG9kcyIsIm1vZGVsIiwidmlldyIsIm1ldGhvZHMiLCJPYmplY3QiLCJhc3NpZ24iLCJjb250cm9sbGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxVOzs7Ozs7O2tDQUNVQyxhLEVBQWVDLEssRUFBT0MsSSxFQUFNO0FBQ3hDLFVBQU1DLFVBQVVILGNBQWNDLEtBQWQsRUFBcUJDLElBQXJCLENBQWhCOztBQUVBRSxhQUFPQyxNQUFQLENBQWMsSUFBZCxFQUFvQkYsT0FBcEI7QUFDRDs7Ozs7O0FBR0gsSUFBTUcsYUFBYSxJQUFJUCxVQUFKLEVBQW5COztBQUVBUSxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQiIsImZpbGUiOiJjb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBDb250cm9sbGVyIHtcbiAgYXNzaWduTWV0aG9kcyhjcmVhdGVNZXRob2RzLCBtb2RlbCwgdmlldykge1xuICAgIGNvbnN0IG1ldGhvZHMgPSBjcmVhdGVNZXRob2RzKG1vZGVsLCB2aWV3KTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgbWV0aG9kcyk7XG4gIH1cbn1cblxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gY29udHJvbGxlcjtcbiJdfQ==