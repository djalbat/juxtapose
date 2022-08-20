"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return mvcApplication;
    }
});
require("../index");
var _easy = require("easy");
var _view = /*#__PURE__*/ _interopRequireDefault(require("./mvcApplication/view"));
var _model = /*#__PURE__*/ _interopRequireDefault(require("./mvcApplication/model"));
var _controller = /*#__PURE__*/ _interopRequireDefault(require("./mvcApplication/controller"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function mvcApplication() {
    var setPassword = function setPassword(password) {
        model.setPassword(password);
        view.showMessage("The password has been set.");
    };
    var resetPassword = function resetPassword() {
        model.resetPassword();
        view.showMessage("The password has been reset.");
    };
    var model = new _model.default(), view = /*#__PURE__*/ React.createElement(_view.default, null);
    Object.assign(_controller.default, {
        setPassword: setPassword,
        resetPassword: resetPassword
    });
    var body = new _easy.Body();
    body.mount(view);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXZjQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcvPlxuXG4gICAgICAgIDtcblxuICBPYmplY3QuYXNzaWduKGNvbnRyb2xsZXIsIHtcbiAgICBzZXRQYXNzd29yZCxcbiAgICByZXNldFBhc3N3b3JkXG4gIH0pO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG4gIGJvZHkubW91bnQodmlldyk7XG5cbiAgZnVuY3Rpb24gc2V0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICBtb2RlbC5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHNldC5cIik7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFBhc3N3b3JkKCkge1xuICAgIG1vZGVsLnJlc2V0UGFzc3dvcmQoKTtcblxuICAgIHZpZXcuc2hvd01lc3NhZ2UoXCJUaGUgcGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQuXCIpO1xuICB9XG59XG4iXSwibmFtZXMiOlsibXZjQXBwbGljYXRpb24iLCJzZXRQYXNzd29yZCIsInBhc3N3b3JkIiwibW9kZWwiLCJ2aWV3Iiwic2hvd01lc3NhZ2UiLCJyZXNldFBhc3N3b3JkIiwiTW9kZWwiLCJWaWV3IiwiT2JqZWN0IiwiYXNzaWduIiwiY29udHJvbGxlciIsImJvZHkiLCJCb2R5IiwibW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFVYixTQTRCQzs7O2VBNUJ1QkEsY0FBYzs7O1FBUi9CLFVBQVU7b0JBRUksTUFBTTt5REFFVix1QkFBdUI7MERBQ3RCLHdCQUF3QjsrREFDbkIsNkJBQTZCOzs7Ozs7QUFFckMsU0FBU0EsY0FBYyxHQUFHO1FBaUI5QkMsV0FBVyxHQUFwQixTQUFTQSxXQUFXLENBQUNDLFFBQVEsRUFBRTtRQUM3QkMsS0FBSyxDQUFDRixXQUFXLENBQUNDLFFBQVEsQ0FBQyxDQUFDO1FBRTVCRSxJQUFJLENBQUNDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0tBQ2hEO1FBRVFDLGFBQWEsR0FBdEIsU0FBU0EsYUFBYSxHQUFHO1FBQ3ZCSCxLQUFLLENBQUNHLGFBQWEsRUFBRSxDQUFDO1FBRXRCRixJQUFJLENBQUNDLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0tBQ2xEO0lBMUJELElBQU1GLEtBQUssR0FBRyxJQUFJSSxNQUFLLFFBQUEsRUFBRSxFQUNuQkgsSUFBSSxpQkFFRixvQkFBQ0ksS0FBSSxRQUFBLE9BQUUsQUFFUjtJQUVQQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsV0FBVSxRQUFBLEVBQUU7UUFDeEJWLFdBQVcsRUFBWEEsV0FBVztRQUNYSyxhQUFhLEVBQWJBLGFBQWE7S0FDZCxDQUFDLENBQUM7SUFFSCxJQUFNTSxJQUFJLEdBQUcsSUFBSUMsS0FBSSxLQUFBLEVBQUUsQUFBQztJQUV4QkQsSUFBSSxDQUFDRSxLQUFLLENBQUNWLElBQUksQ0FBQyxDQUFDO0NBYWxCIn0=