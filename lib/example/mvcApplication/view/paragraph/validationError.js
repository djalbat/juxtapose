"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
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
var ValidationErrorParagraph = /*#__PURE__*/ function(Element) {
    _inherits(ValidationErrorParagraph, Element);
    function ValidationErrorParagraph(selectorOrDomElement, timeout) {
        _classCallCheck(this, ValidationErrorParagraph);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(ValidationErrorParagraph).call(this, selectorOrDomElement));
        _this.timeout = timeout;
        return _this;
    }
    _createClass(ValidationErrorParagraph, [
        {
            key: "clearValidationError",
            value: function clearValidationError() {
                var html = _constants.EMPTY_STRING;
                this.html(html);
            }
        },
        {
            key: "showValidationError",
            value: function showValidationError(validationError) {
                var html = validationError; ///
                this.html(html);
                if (this.timeout !== null) {
                    clearTimeout(this.timeout);
                }
                this.timeout = setTimeout((function() {
                    this.timemout = null;
                    this.clearValidationError();
                }).bind(this), _constants.TIMEOUT_DELAY);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                return {
                    showValidationError: this.showValidationError.bind(this)
                };
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var timeout = null, validationErrorParagraph = _easy.Element.fromClass(Class, properties, timeout);
                return validationErrorParagraph;
            }
        }
    ]);
    return ValidationErrorParagraph;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(ValidationErrorParagraph, "tagName", "p");
_defineProperty(ValidationErrorParagraph, "defaultProperties", {
    className: "validation error"
});
exports.default = ValidationErrorParagraph;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvci5qcyJdLCJuYW1lcyI6WyJFbGVtZW50IiwiRU1QVFlfU1RSSU5HIiwiVElNRU9VVF9ERUxBWSIsIlZhbGlkYXRpb25FcnJvclBhcmFncmFwaCIsImNvbnN0cnVjdG9yIiwic2VsZWN0b3JPckRvbUVsZW1lbnQiLCJ0aW1lb3V0IiwiY2xlYXJWYWxpZGF0aW9uRXJyb3IiLCJodG1sIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsInZhbGlkYXRpb25FcnJvciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ0aW1lbW91dCIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVZLEdBQU0sQ0FBTixLQUFNO0FBRWMsR0FBaUIsQ0FBakIsVUFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV4Qyx3QkFBd0IsaUJBQTlCLFFBQVE7Y0FBRix3QkFBd0I7YUFBeEIsd0JBQXdCLENBQy9CLG9CQUFvQixFQUFFLE9BQU87OEJBRHRCLHdCQUF3Qjs7aUVBQXhCLHdCQUF3QixhQUVuQyxvQkFBb0I7Y0FFckIsT0FBTyxHQUFHLE9BQU87OztpQkFKTCx3QkFBd0I7O1lBTzNDLEdBQW9CLEdBQXBCLG9CQUFvQjttQkFBcEIsUUFBUSxDQUFSLG9CQUFvQixHQUFHLENBQUM7Z0JBQ3RCLEdBQUssQ0FBQyxJQUFJLEdBVjhCLFVBQWlCO2dCQVl6RCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDaEIsQ0FBQzs7O1lBRUQsR0FBbUIsR0FBbkIsbUJBQW1CO21CQUFuQixRQUFRLENBQVIsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7Z0JBQ3BDLEdBQUssQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFakMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUVkLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO29CQUMxQixZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU87Z0JBQzNCLENBQUM7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLEVBQUMsUUFDOUIsR0FEb0MsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJO29CQUVwQixJQUFJLENBQUMsb0JBQW9CO2dCQUMzQixDQUFDLGNBNUJ1QyxVQUFpQjtZQTZCM0QsQ0FBQzs7O1lBRUQsR0FBYSxHQUFiLGFBQWE7bUJBQWIsUUFBUSxDQUFSLGFBQWEsR0FBRyxDQUFDO2dCQUNmLE1BQU0sQ0FBRSxDQUFDO29CQUNQLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSTtnQkFDekQsQ0FBQztZQUNILENBQUM7Ozs7WUFRTSxHQUFTLEdBQVQsU0FBUzttQkFBaEIsUUFBUSxDQUFELFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUM7Z0JBQ25DLEdBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxFQUNkLHdCQUF3QixHQS9DVixLQUFNLFNBK0NlLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU87Z0JBRTdFLE1BQU0sQ0FBQyx3QkFBd0I7WUFDakMsQ0FBQzs7O1dBOUNrQix3QkFBd0I7bUJBSnJCLEtBQU07Z0JBSVQsd0JBQXdCLEdBbUNwQyxPQUFPLElBQUcsQ0FBRztnQkFuQ0Qsd0JBQXdCLEdBcUNwQyxpQkFBaUIsR0FBRyxDQUFDO0lBQzFCLFNBQVMsR0FBRSxnQkFBa0I7QUFDL0IsQ0FBQztrQkF2Q2tCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IHsgRU1QVFlfU1RSSU5HLCBUSU1FT1VUX0RFTEFZIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRvbUVsZW1lbnQsIHRpbWVvdXQpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICB9XG5cbiAgY2xlYXJWYWxpZGF0aW9uRXJyb3IoKSB7XG4gICAgY29uc3QgaHRtbCA9IEVNUFRZX1NUUklORztcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgY29uc3QgaHRtbCA9IHZhbGlkYXRpb25FcnJvcjsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG5cbiAgICBpZiAodGhpcy50aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGltZW1vdXQgPSBudWxsO1xuXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9yKCk7XG4gICAgfSwgVElNRU9VVF9ERUxBWSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgc2hvd1ZhbGlkYXRpb25FcnJvcjogdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2YWxpZGF0aW9uIGVycm9yXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdGltZW91dCA9IG51bGwsXG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHRpbWVvdXQpO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25FcnJvclBhcmFncmFwaDtcbiAgfVxufVxuIl19