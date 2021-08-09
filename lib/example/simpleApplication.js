"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = simpleApplication;
require("../index");
var _easy = require("easy");
function simpleApplication() {
    var body = new _easy.Body();
    body.mount(/*#__PURE__*/ React.createElement("p", null, "A simple application."));
}
