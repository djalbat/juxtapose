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
var _controller = /*#__PURE__*/ _interopRequireDefault(require("../../controller"));
var _password = /*#__PURE__*/ _interopRequireDefault(require("../input/password"));
var _validationError = /*#__PURE__*/ _interopRequireDefault(require("../paragraph/validationError"));
var _constants = require("../../constants");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var PasswordForm = /*#__PURE__*/ function(Element) {
    _inherits(PasswordForm, Element);
    var _super = _createSuper(PasswordForm);
    function PasswordForm() {
        _classCallCheck(this, PasswordForm);
        return _super.apply(this, arguments);
    }
    _createClass(PasswordForm, [
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
}(_wrapNativeSuper(_easy.Element));
_defineProperty(PasswordForm, "tagName", "form");
_defineProperty(PasswordForm, "defaultProperties", {
    className: "password"
});
function isPasswordValid(password) {
    var passwordValid = password !== _constants.EMPTY_STRING;
    return passwordValid;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvZm9ybS9wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuLi9pbnB1dC9wYXNzd29yZFwiO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBmcm9tIFwiLi4vcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkRm9ybSBleHRlbmRzIEVsZW1lbnQge1xuICB2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHRoaXMudmFsaWRhdGVGb3JtKCk7XG5cbiAgICBpZiAoIXBhc3N3b3JkVmFsaWQpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcihcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCksXG4gICAgICAgICAgcGFzc3dvcmRWYWxpZCA9IGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCk7XG5cbiAgICBjb250cm9sbGVyLnNldFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIHRoaXMuY2xlYXJQYXNzd29yZCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPixcbiAgICAgIDxWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggLz4sXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRTdWJtaXRGb3JtKCk7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJmb3JtXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwYXNzd29yZFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwYXNzd29yZFZhbGlkO1xufVxuIl0sIm5hbWVzIjpbIlBhc3N3b3JkRm9ybSIsInZhbGlkYXRlQW5kU3VibWl0Rm9ybSIsInBhc3N3b3JkVmFsaWQiLCJ2YWxpZGF0ZUZvcm0iLCJzaG93VmFsaWRhdGlvbkVycm9yIiwic3VibWl0Rm9ybSIsInBhc3N3b3JkIiwiZ2V0UGFzc3dvcmQiLCJpc1Bhc3N3b3JkVmFsaWQiLCJjb250cm9sbGVyIiwic2V0UGFzc3dvcmQiLCJjbGVhclBhc3N3b3JkIiwiY2hpbGRFbGVtZW50cyIsIlBhc3N3b3JkSW5wdXQiLCJWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGgiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiZXZlbnQiLCJlbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVVRQSxZQUFZOzs7b0JBUkQsTUFBTTsrREFFZixrQkFBa0I7NkRBQ2YsbUJBQW1CO29FQUNSLDhCQUE4Qjt5QkFFdEMsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFBLEFBQU1BLFlBQVksaUJBeUQ5QixBQXpEWTs7O2FBQU1BLFlBQVk7Ozs7OztZQUMvQkMsR0FBcUIsRUFBckJBLHVCQUFxQjttQkFBckJBLFNBQUFBLHFCQUFxQixHQUFHO2dCQUN0QixJQUFNQyxhQUFhLEdBQUcsSUFBSSxDQUFDQyxZQUFZLEVBQUUsQUFBQztnQkFFMUMsSUFBSSxDQUFDRCxhQUFhLEVBQUU7b0JBQ2xCLElBQUksQ0FBQ0UsbUJBQW1CLENBQUMseUJBQXlCLENBQUMsQ0FBQztpQkFDckQsTUFBTTtvQkFDTCxJQUFJLENBQUNDLFVBQVUsRUFBRSxDQUFDO2lCQUNuQjthQUNGOzs7WUFFREYsR0FBWSxFQUFaQSxjQUFZO21CQUFaQSxTQUFBQSxZQUFZLEdBQUc7Z0JBQ2IsSUFBTUcsUUFBUSxHQUFHLElBQUksQ0FBQ0MsV0FBVyxFQUFFLEVBQzdCTCxhQUFhLEdBQUdNLGVBQWUsQ0FBQ0YsUUFBUSxDQUFDLEFBQUM7Z0JBRWhELE9BQU9KLGFBQWEsQ0FBQzthQUN0Qjs7O1lBRURHLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLElBQU1DLFFBQVEsR0FBRyxJQUFJLENBQUNDLFdBQVcsRUFBRSxBQUFDO2dCQUVwQ0UsV0FBVSxRQUFBLENBQUNDLFdBQVcsQ0FBQ0osUUFBUSxDQUFDLENBQUM7Z0JBRWpDLElBQUksQ0FBQ0ssYUFBYSxFQUFFLENBQUM7YUFDdEI7OztZQUVEQyxHQUFhLEVBQWJBLGVBQWE7bUJBQWJBLFNBQUFBLGFBQWEsR0FBRzs7Z0JBQ2QsT0FBTztrQ0FFTCxvQkFBQ0MsU0FBYSxRQUFBLE9BQUc7a0NBQ2pCLG9CQUFDQyxnQkFBd0IsUUFBQSxPQUFHO2tDQUM1QixvQkFBQ0MsS0FBTSxPQUFBO3dCQUFDQyxTQUFTLEVBQUMsUUFBUTt3QkFDbEJDLE9BQU8sRUFBRSxTQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBSzs0QkFFM0JELEtBQUssQ0FBQ0UsY0FBYyxFQUFFLENBQUM7NEJBRXZCLE1BQUtuQixxQkFBcUIsRUFBRSxDQUFDO3lCQUU5Qjt1QkFDUixRQUVELENBQVM7aUJBRVYsQ0FBRTthQUNKOzs7WUFFRG9CLEdBQVUsRUFBVkEsWUFBVTttQkFBVkEsU0FBQUEsVUFBVSxHQUFHO2dCQUNYLElBQUksQ0FBQ0MsYUFBYSxFQUFFLENBQUM7YUFDdEI7Ozs7Q0FPRixrQkF2RHlDQyxLQUFPLFFBQUEsRUF1RGhEO0FBTEMsZ0JBbERtQnZCLFlBQVksRUFrRHhCd0IsU0FBTyxFQUFHLE1BQU0sQ0FBQztBQUV4QixnQkFwRG1CeEIsWUFBWSxFQW9EeEJ5QixtQkFBaUIsRUFBRztJQUN6QlQsU0FBUyxFQUFFLFVBQVU7Q0FDdEIsQ0FBQztBQUdKLFNBQVNSLGVBQWUsQ0FBQ0YsUUFBUSxFQUFFO0lBQ2pDLElBQU1KLGFBQWEsR0FBSUksUUFBUSxLQUFLb0IsVUFBWSxhQUFBLEFBQUMsQUFBQztJQUVsRCxPQUFPeEIsYUFBYSxDQUFDO0NBQ3RCIn0=