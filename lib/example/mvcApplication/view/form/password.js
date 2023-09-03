"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PasswordForm;
    }
});
var _easy = require("easy");
var _controller = /*#__PURE__*/ _interop_require_default(require("../../controller"));
var _password = /*#__PURE__*/ _interop_require_default(require("../input/password"));
var _validationError = /*#__PURE__*/ _interop_require_default(require("../paragraph/validationError"));
var _constants = require("../../constants");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var PasswordForm = /*#__PURE__*/ function(Element) {
    _inherits(PasswordForm, Element);
    var _super = _create_super(PasswordForm);
    function PasswordForm() {
        _class_call_check(this, PasswordForm);
        return _super.apply(this, arguments);
    }
    _create_class(PasswordForm, [
        {
            key: "validateAndSubmitForm",
            value: function validateAndSubmitForm() {
                var passwordValid = this.validateForm();
                if (!passwordValid) {
                    this.showValidationError("The password is invalid");
                } else {
                    this.submitForm();
                }
            }
        },
        {
            key: "validateForm",
            value: function validateForm() {
                var password = this.getPassword(), passwordValid = isPasswordValid(password);
                return passwordValid;
            }
        },
        {
            key: "submitForm",
            value: function submitForm() {
                var password = this.getPassword();
                _controller.default.setPassword(password);
                this.clearPassword();
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var _this = this;
                return [
                    /*#__PURE__*/ React.createElement(_password.default, null),
                    /*#__PURE__*/ React.createElement(_validationError.default, null),
                    /*#__PURE__*/ React.createElement(_easy.Button, {
                        className: "submit",
                        onClick: function(event, element) {
                            event.preventDefault();
                            _this.validateAndSubmitForm();
                        }
                    }, "Submit")
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
            }
        }
    ]);
    return PasswordForm;
}(_wrap_native_super(_easy.Element));
_define_property(PasswordForm, "tagName", "form");
_define_property(PasswordForm, "defaultProperties", {
    className: "password"
});
function isPasswordValid(password) {
    var passwordValid = password !== _constants.EMPTY_STRING;
    return passwordValid;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvZm9ybS9wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuLi9pbnB1dC9wYXNzd29yZFwiO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBmcm9tIFwiLi4vcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkRm9ybSBleHRlbmRzIEVsZW1lbnQge1xuICB2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHRoaXMudmFsaWRhdGVGb3JtKCk7XG5cbiAgICBpZiAoIXBhc3N3b3JkVmFsaWQpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcihcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCksXG4gICAgICAgICAgcGFzc3dvcmRWYWxpZCA9IGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCk7XG5cbiAgICBjb250cm9sbGVyLnNldFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIHRoaXMuY2xlYXJQYXNzd29yZCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPixcbiAgICAgIDxWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggLz4sXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRTdWJtaXRGb3JtKCk7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJmb3JtXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwYXNzd29yZFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwYXNzd29yZFZhbGlkO1xufVxuIl0sIm5hbWVzIjpbIlBhc3N3b3JkRm9ybSIsInZhbGlkYXRlQW5kU3VibWl0Rm9ybSIsInBhc3N3b3JkVmFsaWQiLCJ2YWxpZGF0ZUZvcm0iLCJzaG93VmFsaWRhdGlvbkVycm9yIiwic3VibWl0Rm9ybSIsInBhc3N3b3JkIiwiZ2V0UGFzc3dvcmQiLCJpc1Bhc3N3b3JkVmFsaWQiLCJjb250cm9sbGVyIiwic2V0UGFzc3dvcmQiLCJjbGVhclBhc3N3b3JkIiwiY2hpbGRFbGVtZW50cyIsIlBhc3N3b3JkSW5wdXQiLCJWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGgiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJlbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O29CQVJXO2lFQUVUOytEQUNHO3NFQUNXO3lCQUVSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLDZCQXlEbEIsQUF6RFk7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxZQUFZO2dCQUV2QyxJQUFJLENBQUNELGVBQWU7b0JBQ2xCLElBQUksQ0FBQ0UsbUJBQW1CLENBQUM7Z0JBQzNCLE9BQU87b0JBQ0wsSUFBSSxDQUFDQyxVQUFVO2dCQUNqQjtZQUNGOzs7WUFFQUYsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1HLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCTCxnQkFBZ0JNLGdCQUFnQkY7Z0JBRXRDLE9BQU9KO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVc7Z0JBRWpDRSxtQkFBVSxDQUFDQyxXQUFXLENBQUNKO2dCQUV2QixJQUFJLENBQUNLLGFBQWE7WUFDcEI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7O2dCQUNFLE9BQU87a0NBRUwsb0JBQUNDLGlCQUFhO2tDQUNkLG9CQUFDQyx3QkFBd0I7a0NBQ3pCLG9CQUFDQyxZQUFNO3dCQUFDQyxXQUFVO3dCQUNWQyxTQUFTLFNBQUNDLE9BQU9DOzRCQUVmRCxNQUFNRSxjQUFjOzRCQUVwQixNQUFLbkIscUJBQXFCO3dCQUU1Qjt1QkFDUDtpQkFJRjtZQUNIOzs7WUFFQW9CLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUNDLGFBQWE7WUFDcEI7OztXQWhEbUJ0QjtxQkFBcUJ1QixhQUFPO0FBa0QvQyxpQkFsRG1CdkIsY0FrRFp3QixXQUFVO0FBRWpCLGlCQXBEbUJ4QixjQW9EWnlCLHFCQUFvQjtJQUN6QlQsV0FBVztBQUNiO0FBR0YsU0FBU1IsZ0JBQWdCRixRQUFRO0lBQy9CLElBQU1KLGdCQUFpQkksYUFBYW9CLHVCQUFZO0lBRWhELE9BQU94QjtBQUNUIn0=