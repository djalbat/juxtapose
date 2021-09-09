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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uLmpzIl0sIm5hbWVzIjpbIkJvZHkiLCJWaWV3IiwiTW9kZWwiLCJjb250cm9sbGVyIiwibXZjQXBwbGljYXRpb24iLCJtb2RlbCIsInZpZXciLCJPYmplY3QiLCJhc3NpZ24iLCJzZXRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiLCJib2R5IiwibW91bnQiLCJwYXNzd29yZCIsInNob3dNZXNzYWdlIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O2tCQVVZLGNBQWM7O0FBTmpCLEdBQU0sQ0FBTixLQUFNO0FBRVYsR0FBdUIsQ0FBdkIsS0FBdUI7QUFDdEIsR0FBd0IsQ0FBeEIsTUFBd0I7QUFDbkIsR0FBNkIsQ0FBN0IsV0FBNkI7Ozs7OztTQUU1QixjQUFjLEdBQUcsQ0FBQztRQWlCL0IsV0FBVyxHQUFwQixRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUTtRQUUxQixJQUFJLENBQUMsV0FBVyxFQUFDLDBCQUE0QjtJQUMvQyxDQUFDO1FBRVEsYUFBYSxHQUF0QixRQUFRLENBQUMsYUFBYSxHQUFHLENBQUM7UUFDeEIsS0FBSyxDQUFDLGFBQWE7UUFFbkIsSUFBSSxDQUFDLFdBQVcsRUFBQyw0QkFBOEI7SUFDakQsQ0FBQztJQTFCRCxHQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FKRCxNQUF3QixZQUtsQyxJQUFJLHFDQU5LLEtBQXVCO0lBWXRDLE1BQU0sQ0FBQyxNQUFNLENBVlEsV0FBNkIsVUFVeEIsQ0FBQztRQUN6QixXQUFXLEVBQVgsV0FBVztRQUNYLGFBQWEsRUFBYixhQUFhO0lBQ2YsQ0FBQztJQUVELEdBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQW5CRyxLQUFNO0lBcUJ6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7QUFhakIsQ0FBQyJ9