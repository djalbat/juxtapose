"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Model;
    }
});
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Model = /*#__PURE__*/ function() {
    function Model() {
        _classCallCheck(this, Model);
        this.password = null;
    }
    _createClass(Model, [
        {
            key: "setPassword",
            value: function setPassword(password) {
                this.password = password;
            }
        },
        {
            key: "resetPassword",
            value: function resetPassword() {
                this.password = null;
            }
        }
    ]);
    return Model;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL21vZGVsLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIk1vZGVsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInJlc2V0UGFzc3dvcmQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsc0JBQU47YUFBTUE7OEJBQUFBO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUk7O2lCQUZIRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZRCxRQUFRLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQTtZQUNsQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsSUFBSSxDQUFDRixRQUFRLEdBQUcsSUFBSTtZQUN0Qjs7O1dBWG1CRCJ9