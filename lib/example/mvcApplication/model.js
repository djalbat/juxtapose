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
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Model = /*#__PURE__*/ function() {
    function Model() {
        _class_call_check(this, Model);
        this.password = null;
    }
    _create_class(Model, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xuICB9XG5cbiAgc2V0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKCkge1xuICAgIHRoaXMucGFzc3dvcmQgPSBudWxsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTW9kZWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicmVzZXRQYXNzd29yZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxzQkFBTjthQUFNQTtnQ0FBQUE7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUc7O2tCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZRCxRQUFRO2dCQUNsQixJQUFJLENBQUNBLFFBQVEsR0FBR0E7WUFDbEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDRixRQUFRLEdBQUc7WUFDbEI7OztXQVhtQkQifQ==