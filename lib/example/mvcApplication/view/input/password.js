"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PasswordInput;
    }
});
var _easy = require("easy");
var _constants = require("../../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var PasswordInput = /*#__PURE__*/ function(InputElement) {
    _inherits(PasswordInput, InputElement);
    function PasswordInput() {
        _class_call_check(this, PasswordInput);
        return _call_super(this, PasswordInput, arguments);
    }
    _create_class(PasswordInput, [
        {
            key: "getPassword",
            value: function getPassword() {
                var value = this.getValue(), password = value; ///
                return password;
            }
        },
        {
            key: "clearPassword",
            value: function clearPassword() {
                var password = _constants.EMPTY_STRING, value = password; ///
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getPassword = this.getPassword.bind(this), clearPassword = this.clearPassword.bind(this);
                return {
                    getPassword: getPassword,
                    clearPassword: clearPassword
                };
            }
        }
    ]);
    return PasswordInput;
}(_easy.InputElement);
_define_property(PasswordInput, "tagName", "input");
_define_property(PasswordInput, "defaultProperties", {
    type: "password"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvaW5wdXQvcGFzc3dvcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IElucHV0RWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhc3N3b3JkID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkO1xuICB9XG5cbiAgY2xlYXJQYXNzd29yZCgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB2YWx1ZSA9IHBhc3N3b3JkOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBnZXRQYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBjbGVhclBhc3N3b3JkID0gdGhpcy5jbGVhclBhc3N3b3JkLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBhc3N3b3JkLFxuICAgICAgY2xlYXJQYXNzd29yZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwicGFzc3dvcmRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBhc3N3b3JkSW5wdXQiLCJnZXRQYXNzd29yZCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJwYXNzd29yZCIsImNsZWFyUGFzc3dvcmQiLCJFTVBUWV9TVFJJTkciLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiSW5wdXRFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7b0JBSlE7eUJBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEsOEJBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2lDQUFBQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxXQUFXRixPQUFPLEdBQUc7Z0JBRTNCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUQsV0FBV0UsdUJBQVksRUFDdkJKLFFBQVFFLFVBQVUsR0FBRztnQkFFM0IsSUFBSSxDQUFDRyxRQUFRLENBQUNMO1lBQ2hCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNDLElBQU1QLGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNRLElBQUksQ0FBQyxJQUFJLEdBQzNDSixnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhLENBQUNJLElBQUksQ0FBQyxJQUFJO2dCQUU5QyxPQUFRO29CQUNOUixhQUFBQTtvQkFDQUksZUFBQUE7Z0JBQ0Y7WUFDRjs7O1dBdkJtQkw7RUFBc0JVLGtCQUFZO0FBeUJyRCxpQkF6Qm1CVixlQXlCWlcsV0FBVTtBQUVqQixpQkEzQm1CWCxlQTJCWlkscUJBQW9CO0lBQ3pCQyxNQUFNO0FBQ1IifQ==