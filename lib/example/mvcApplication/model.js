"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
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
exports.default = Model;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL21vZGVsLmpzIl0sIm5hbWVzIjpbIk1vZGVsIiwiY29uc3RydWN0b3IiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwicmVzZXRQYXNzd29yZCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVMsS0FBSyxpQkFBWCxRQUFRO2FBQUYsS0FBSzs4QkFBTCxLQUFLO1FBRXRCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSTs7aUJBRkgsS0FBSzs7WUFLeEIsR0FBVyxHQUFYLFdBQVc7bUJBQVgsUUFBUSxDQUFSLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRO1lBQzFCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUk7WUFDdEIsQ0FBQzs7O1dBWGtCLEtBQUs7O2tCQUFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxuXG4gIHNldFBhc3N3b3JkKHBhc3N3b3JkKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gbnVsbDtcbiAgfVxufVxuIl19