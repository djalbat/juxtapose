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
