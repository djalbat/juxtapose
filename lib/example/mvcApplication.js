"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
require("../index");
var _easy = require("easy");
var _view = _interopRequireDefault(require("./mvcApplication/view"));
var _model = _interopRequireDefault(require("./mvcApplication/model"));
var _controller = _interopRequireDefault(require("./mvcApplication/controller"));
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
    var model = new _model.default(), view = React.createElement(_view.default, null);
    Object.assign(_controller.default, {
        setPassword: setPassword,
        resetPassword: resetPassword
    });
    var body = new _easy.Body();
    body.mount(view);
}
exports.default = mvcApplication;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXZjQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcgLz5cblxuICAgICAgICA7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCB7XG4gICAgc2V0UGFzc3dvcmQsXG4gICAgcmVzZXRQYXNzd29yZFxuICB9KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGZ1bmN0aW9uIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgbW9kZWwuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiBzZXQuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcbiAgICBtb2RlbC5yZXNldFBhc3N3b3JkKCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0LlwiKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBSUEsS0FBQTtJQUVBLEtBQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTs7Ozs7O1NBRUEsY0FBQTtRQWlCQSxXQUFBLFlBQUEsV0FBQSxDQUFBLFFBQUE7QUFDQSxhQUFBLENBQUEsV0FBQSxDQUFBLFFBQUE7QUFFQSxZQUFBLENBQUEsV0FBQSxFQUFBLDBCQUFBOztRQUdBLGFBQUEsWUFBQSxhQUFBO0FBQ0EsYUFBQSxDQUFBLGFBQUE7QUFFQSxZQUFBLENBQUEsV0FBQSxFQUFBLDRCQUFBOztRQXpCQSxLQUFBLE9BSkEsTUFBQSxZQUtBLElBQUEsdUJBTkEsS0FBQTtBQVlBLFVBQUEsQ0FBQSxNQUFBLENBVkEsV0FBQTtBQVdBLG1CQUFBLEVBQUEsV0FBQTtBQUNBLHFCQUFBLEVBQUEsYUFBQTs7UUFHQSxJQUFBLE9BbkJBLEtBQUE7QUFxQkEsUUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBOztrQkFmQSxjQUFBIn0=