"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _controller = _interopRequireDefault(require("../../controller"));
var _password = _interopRequireDefault(require("../input/password"));
var _validationError = _interopRequireDefault(require("../paragraph/validationError"));
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
var PasswordForm = /*#__PURE__*/ function(Element) {
    _inherits(PasswordForm, Element);
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
    var passwordValid = password !== _constants.EMPTY_STRING;
    return passwordValid;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvZm9ybS9wYXNzd29yZC5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiQnV0dG9uIiwiY29udHJvbGxlciIsIlBhc3N3b3JkSW5wdXQiLCJWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGgiLCJFTVBUWV9TVFJJTkciLCJQYXNzd29yZEZvcm0iLCJ2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0iLCJwYXNzd29yZFZhbGlkIiwidmFsaWRhdGVGb3JtIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsInN1Ym1pdEZvcm0iLCJwYXNzd29yZCIsImdldFBhc3N3b3JkIiwiaXNQYXNzd29yZFZhbGlkIiwic2V0UGFzc3dvcmQiLCJjbGVhclBhc3N3b3JkIiwiY2hpbGRFbGVtZW50cyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJldmVudCIsImVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVvQixHQUFNLENBQU4sS0FBTTtBQUVmLEdBQWtCLENBQWxCLFdBQWtCO0FBQ2YsR0FBbUIsQ0FBbkIsU0FBbUI7QUFDUixHQUE4QixDQUE5QixnQkFBOEI7QUFFdEMsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXpCLFlBQVksaUJBQWxCLFFBQVE7Y0FBRixZQUFZO2FBQVosWUFBWTs4QkFBWixZQUFZO2dFQUFaLFlBQVk7O2lCQUFaLFlBQVk7O1lBQy9CLEdBQXFCLEdBQXJCLHFCQUFxQjttQkFBckIsUUFBUSxDQUFSLHFCQUFxQixHQUFHLENBQUM7Z0JBQ3ZCLEdBQUssQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVk7Z0JBRXZDLEVBQUUsR0FBRyxhQUFhLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLG1CQUFtQixFQUFDLHVCQUF5QjtnQkFDcEQsQ0FBQyxNQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLFVBQVU7Z0JBQ2pCLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFZLEdBQVosWUFBWTttQkFBWixRQUFRLENBQVIsWUFBWSxHQUFHLENBQUM7Z0JBQ2QsR0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUMzQixhQUFhLEdBQUcsZUFBZSxDQUFDLFFBQVE7Z0JBRTlDLE1BQU0sQ0FBQyxhQUFhO1lBQ3RCLENBQUM7OztZQUVELEdBQVUsR0FBVixVQUFVO21CQUFWLFFBQVEsQ0FBUixVQUFVLEdBQUcsQ0FBQztnQkFDWixHQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXO2dCQXpCZCxXQUFrQixTQTJCMUIsV0FBVyxDQUFDLFFBQVE7Z0JBRS9CLElBQUksQ0FBQyxhQUFhO1lBQ3BCLENBQUM7OztZQUVELEdBQWEsR0FBYixhQUFhO21CQUFiLFFBQVEsQ0FBUixhQUFhLEdBQUcsQ0FBQztnQkFDZixNQUFNLENBQUMsQ0FBQztzREFoQ2MsU0FBbUI7c0RBQ1IsZ0JBQThCO3NEQUpuQyxLQUFNO3dCQXVDeEIsU0FBUyxHQUFDLE1BQVE7d0JBQ2xCLE9BQU8sR0FBRSxRQUFRLENBQVAsS0FBSyxFQUFFLE9BQU8sRUFBSyxDQUFDOzRCQUU1QixLQUFLLENBQUMsY0FBYzs0QkFFcEIsSUFBSSxDQUFDLHFCQUFxQjt3QkFFNUIsQ0FBQzt3QkFDUixNQUVEO2dCQUVGLENBQUM7WUFDSCxDQUFDOzs7WUFFRCxHQUFVLEdBQVYsVUFBVTttQkFBVixRQUFRLENBQVIsVUFBVSxHQUFHLENBQUM7Z0JBQ1osSUFBSSxDQUFDLGFBQWE7WUFDcEIsQ0FBQzs7O1dBaERrQixZQUFZO21CQVJELEtBQU07Z0JBUWpCLFlBQVksR0FrRHhCLE9BQU8sSUFBRyxJQUFNO2dCQWxESixZQUFZLEdBb0R4QixpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxRQUFVO0FBQ3ZCLENBQUM7a0JBdERrQixZQUFZO1NBeUR4QixlQUFlLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEMsR0FBSyxDQUFDLGFBQWEsR0FBSSxRQUFRLEtBNURKLFVBQWlCO0lBOEQ1QyxNQUFNLENBQUMsYUFBYTtBQUN0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQsIEJ1dHRvbiB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuLi8uLi9jb250cm9sbGVyXCI7XG5pbXBvcnQgUGFzc3dvcmRJbnB1dCBmcm9tIFwiLi4vaW5wdXQvcGFzc3dvcmRcIjtcbmltcG9ydCBWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggZnJvbSBcIi4uL3BhcmFncmFwaC92YWxpZGF0aW9uRXJyb3JcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZEZvcm0gZXh0ZW5kcyBFbGVtZW50IHtcbiAgdmFsaWRhdGVBbmRTdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkVmFsaWQgPSB0aGlzLnZhbGlkYXRlRm9ybSgpO1xuXG4gICAgaWYgKCFwYXNzd29yZFZhbGlkKSB7XG4gICAgICB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IoXCJUaGUgcGFzc3dvcmQgaXMgaW52YWxpZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJtaXRGb3JtKCk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpLFxuICAgICAgICAgIHBhc3N3b3JkVmFsaWQgPSBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkVmFsaWQ7XG4gIH1cblxuICBzdWJtaXRGb3JtKCkge1xuICAgIGNvbnN0IHBhc3N3b3JkID0gdGhpcy5nZXRQYXNzd29yZCgpO1xuXG4gICAgY29udHJvbGxlci5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB0aGlzLmNsZWFyUGFzc3dvcmQoKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkSW5wdXQgLz4sXG4gICAgICA8VmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIC8+LFxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQsIGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlQW5kU3VibWl0Rm9ybSgpO1xuXG4gICAgICAgICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIFN1Ym1pdFxuICAgICAgPC9CdXR0b24+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZm9ybVwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwicGFzc3dvcmRcIlxuICB9O1xufVxuXG5mdW5jdGlvbiBpc1Bhc3N3b3JkVmFsaWQocGFzc3dvcmQpIHtcbiAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IChwYXNzd29yZCAhPT0gRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbn1cbiJdfQ==