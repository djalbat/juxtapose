"use strict";
var _mvcApplication = _interopRequireDefault(require("./example/mvcApplication"));
var _simpleApplication = _interopRequireDefault(require("./example/simpleApplication"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
Object.assign(window, {
    mvcApplication: _mvcApplication.default,
    simpleApplication: _simpleApplication.default
});
