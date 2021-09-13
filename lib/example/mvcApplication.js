"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mvcApplication;
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
    var model = new _model.default(), view = /*#__PURE__*/ React.createElement(_view.default, null);
    Object.assign(_controller.default, {
        setPassword: setPassword,
        resetPassword: resetPassword
    });
    var body = new _easy.Body();
    body.mount(view);
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkJvZHkiLCJWaWV3IiwiTW9kZWwiLCJjb250cm9sbGVyIiwibXZjQXBwbGljYXRpb24iLCJtb2RlbCIsInZpZXciLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJib2R5IiwibW91bnQiLCJwYXNzd29yZCIsInNob3dNZXNzYWdlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O2tCQVVZLGNBQWM7O0FBTmpCLEdBQU0sQ0FBTixLQUFNO0FBRVYsR0FBdUIsQ0FBdkIsS0FBdUI7QUFDdEIsR0FBd0IsQ0FBeEIsTUFBd0I7QUFDbkIsR0FBNkIsQ0FBN0IsV0FBNkI7Ozs7OztTQUU1QixjQUFjLEdBQUcsQ0FBQztRQWlCL0IsV0FBVyxHQUFwQixRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUTtRQUUxQixJQUFJLENBQUMsV0FBVyxFQUFDLDBCQUE0QjtJQUMvQyxDQUFDO1FBRVEsYUFBYSxHQUF0QixRQUFRLENBQUMsYUFBYSxHQUFHLENBQUM7UUFDeEIsS0FBSyxDQUFDLGFBQWE7UUFFbkIsSUFBSSxDQUFDLFdBQVcsRUFBQyw0QkFBOEI7SUFDakQsQ0FBQztJQTFCRCxHQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FKRCxNQUF3QixZQUtsQyxJQUFJLHFDQU5LLEtBQXVCO0lBWXRDLE1BQU0sQ0FBQyxNQUFNLENBVlEsV0FBNkIsVUFVeEIsQ0FBQztRQUN6QixXQUFXLEVBQVgsV0FBVztRQUNYLGFBQWEsRUFBYixhQUFhO0lBQ2YsQ0FBQztJQUVELEdBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQW5CRyxLQUFNO0lBcUJ6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7QUFhakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXZjQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcgLz5cblxuICAgICAgICA7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCB7XG4gICAgc2V0UGFzc3dvcmQsXG4gICAgcmVzZXRQYXNzd29yZFxuICB9KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGZ1bmN0aW9uIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgbW9kZWwuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiBzZXQuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcbiAgICBtb2RlbC5yZXNldFBhc3N3b3JkKCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0LlwiKTtcbiAgfVxufVxuIl19