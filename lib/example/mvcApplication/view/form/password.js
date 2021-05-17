"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _controller = _interopRequireDefault(require("../../controller"));
var _password = _interopRequireDefault(require("../input/password"));
var _validationError = _interopRequireDefault(require("../paragraph/validationError"));
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
var PasswordForm = /*#__PURE__*/ function(Element1) {
    _inherits(PasswordForm, Element1);
    function PasswordForm() {
        _classCallCheck(this, PasswordForm);
        return _possibleConstructorReturn(this, _getPrototypeOf(PasswordForm).apply(this, arguments));
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
                return [
                    /*#__PURE__*/ React.createElement(_password.default, null),
                    /*#__PURE__*/ React.createElement(_validationError.default, null),
                    /*#__PURE__*/ React.createElement(_easy.Button, {
                        className: "submit",
                        onClick: (function(event, element) {
                            event.preventDefault();
                            this.validateAndSubmitForm();
                        }).bind(this)
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
exports.default = PasswordForm;
function isPasswordValid(password) {
    var passwordValid = password !== ""; ///
    return passwordValid;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvZm9ybS9wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuLi9pbnB1dC9wYXNzd29yZFwiO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBmcm9tIFwiLi4vcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZEZvcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdmFsaWRhdGVBbmRTdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB0aGlzLnZhbGlkYXRlRm9ybSgpO1xuXG4gICAgaWYgKCFwYXNzd29yZFZhbGlkKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IoXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpLFxuICAgICAgICAgIHBhc3N3b3JkVmFsaWQgPSBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG4gIH1cblxuICBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpO1xuXG4gICAgY29udHJvbGxlci5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB0aGlzLmNsZWFyUGFzc3dvcmQoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkSW5wdXQgLz4sXG4gICAgICA8VmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIC8+LFxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpO1xuXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZm9ybVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFzc3dvcmRcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpIHtcbiAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IChwYXNzd29yZCAhPT0gXCJcIik7ICAvLy9cblxuICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztJQUVvQixLQUFNO0lBRWYsV0FBa0I7SUFDZixTQUFtQjtJQUNSLGdCQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFOUMsWUFBWTtjQUFaLFlBQVk7YUFBWixZQUFZOzhCQUFaLFlBQVk7Z0VBQVosWUFBWTs7aUJBQVosWUFBWTs7WUFDL0IsR0FBcUIsR0FBckIscUJBQXFCOzRCQUFyQixxQkFBcUI7b0JBQ2IsYUFBYSxRQUFRLFlBQVk7cUJBRWxDLGFBQWE7eUJBQ1gsbUJBQW1CLEVBQUMsdUJBQXlCOzt5QkFFN0MsVUFBVTs7Ozs7WUFJbkIsR0FBWSxHQUFaLFlBQVk7NEJBQVosWUFBWTtvQkFDSixRQUFRLFFBQVEsV0FBVyxJQUMzQixhQUFhLEdBQUcsZUFBZSxDQUFDLFFBQVE7dUJBRXZDLGFBQWE7Ozs7WUFHdEIsR0FBVSxHQUFWLFVBQVU7NEJBQVYsVUFBVTtvQkFDRixRQUFRLFFBQVEsV0FBVztnQkF2QmQsV0FBa0IsU0F5QjFCLFdBQVcsQ0FBQyxRQUFRO3FCQUUxQixhQUFhOzs7O1lBR3BCLEdBQWEsR0FBYixhQUFhOzRCQUFiLGFBQWE7O3NEQTdCVyxTQUFtQjtzREFDUixnQkFBOEI7c0RBSm5DLEtBQU07d0JBcUN4QixTQUFTLEdBQUMsTUFBUTt3QkFDbEIsT0FBTyxZQUFHLEtBQUssRUFBRSxPQUFPOzRCQUV0QixLQUFLLENBQUMsY0FBYztpQ0FFZixxQkFBcUI7O3dCQUduQyxNQUVEOzs7OztZQUtKLEdBQVUsR0FBVixVQUFVOzRCQUFWLFVBQVU7cUJBQ0gsYUFBYTs7OztXQS9DRCxZQUFZO21CQU5ELEtBQU07Z0JBTWpCLFlBQVksR0FrRHhCLE9BQU8sSUFBRyxJQUFNO2dCQWxESixZQUFZLEdBb0R4QixpQkFBaUI7SUFDdEIsU0FBUyxHQUFFLFFBQVU7O2tCQXJESixZQUFZO1NBeUR4QixlQUFlLENBQUMsUUFBUTtRQUN6QixhQUFhLEdBQUksUUFBUSxRQUFXLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztXQUV0QyxhQUFhIn0=