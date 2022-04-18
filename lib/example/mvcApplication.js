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
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXZjQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcgLz5cblxuICAgICAgICA7XG5cbiAgT2JqZWN0LmFzc2lnbihjb250cm9sbGVyLCB7XG4gICAgc2V0UGFzc3dvcmQsXG4gICAgcmVzZXRQYXNzd29yZFxuICB9KTtcblxuICBjb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuICBib2R5Lm1vdW50KHZpZXcpO1xuXG4gIGZ1bmN0aW9uIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgbW9kZWwuc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xuXG4gICAgdmlldy5zaG93TWVzc2FnZShcIlRoZSBwYXNzd29yZCBoYXMgYmVlbiBzZXQuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRQYXNzd29yZCgpIHtcbiAgICBtb2RlbC5yZXNldFBhc3N3b3JkKCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHJlc2V0LlwiKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm12Y0FwcGxpY2F0aW9uIiwic2V0UGFzc3dvcmQiLCJwYXNzd29yZCIsIm1vZGVsIiwidmlldyIsInNob3dNZXNzYWdlIiwicmVzZXRQYXNzd29yZCIsIk1vZGVsIiwiVmlldyIsIk9iamVjdCIsImFzc2lnbiIsImNvbnRyb2xsZXIiLCJib2R5IiwiQm9keSIsIm1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7a0JBVVdBLGNBQWM7UUFSL0IsVUFBVTtBQUVJLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtBQUVWLElBQUEsS0FBdUIsa0NBQXZCLHVCQUF1QixFQUFBO0FBQ3RCLElBQUEsTUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBQ25CLElBQUEsV0FBNkIsa0NBQTdCLDZCQUE2QixFQUFBO0FBRXJDLFNBQVNBLGNBQWMsR0FBRztRQWlCOUJDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxDQUFDQyxRQUFRLEVBQUU7UUFDN0JDLEtBQUssQ0FBQ0YsV0FBVyxDQUFDQyxRQUFRLENBQUMsQ0FBQztRQUU1QkUsSUFBSSxDQUFDQyxXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FBQztLQUNoRDtRQUVRQyxhQUFhLEdBQXRCLFNBQVNBLGFBQWEsR0FBRztRQUN2QkgsS0FBSyxDQUFDRyxhQUFhLEVBQUUsQ0FBQztRQUV0QkYsSUFBSSxDQUFDQyxXQUFXLENBQUMsOEJBQThCLENBQUMsQ0FBQztLQUNsRDtJQTFCRCxJQUFNRixLQUFLLEdBQUcsSUFBSUksTUFBSyxRQUFBLEVBQUUsRUFDbkJILElBQUksaUJBRUYsb0JBQUNJLEtBQUksUUFBQSxPQUFHLEFBRVQ7SUFFUEMsTUFBTSxDQUFDQyxNQUFNLENBQUNDLFdBQVUsUUFBQSxFQUFFO1FBQ3hCVixXQUFXLEVBQVhBLFdBQVc7UUFDWEssYUFBYSxFQUFiQSxhQUFhO0tBQ2QsQ0FBQyxDQUFDO0lBRUgsSUFBTU0sSUFBSSxHQUFHLElBQUlDLEtBQUksS0FBQSxFQUFFLEFBQUM7SUFFeEJELElBQUksQ0FBQ0UsS0FBSyxDQUFDVixJQUFJLENBQUMsQ0FBQztDQWFsQiJ9