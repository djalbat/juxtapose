'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);

    this.password = null;
  }

  _createClass(Model, [{
    key: "setPassword",
    value: function setPassword(password) {
      this.password = password;
    }
  }, {
    key: "resetPassword",
    value: function resetPassword() {
      this.password = null;
    }
  }]);

  return Model;
}();

module.exports = Model;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsLmpzIl0sIm5hbWVzIjpbIk1vZGVsIiwicGFzc3dvcmQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7SUFFTUEsSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBS0MsUUFBTCxHQUFnQixJQUFoQjtBQUNEOzs7O2dDQUVXQSxRLEVBQVU7QUFDcEIsV0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7O29DQUVlO0FBQ2QsV0FBS0EsUUFBTCxHQUFnQixJQUFoQjtBQUNEOzs7Ozs7QUFHSEMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSCxLQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZGVsO1xuIl19