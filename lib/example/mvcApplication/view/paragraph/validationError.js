"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ValidationErrorParagraph;
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
var ValidationErrorParagraph = /*#__PURE__*/ function(Element) {
    _inherits(ValidationErrorParagraph, Element);
    var _super = _create_super(ValidationErrorParagraph);
    function ValidationErrorParagraph(selector, timeout) {
        _class_call_check(this, ValidationErrorParagraph);
        var _this;
        _this = _super.call(this, selector);
        _this.timeout = timeout;
        return _this;
    }
    _create_class(ValidationErrorParagraph, [
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
                var _this = this;
                var html = validationError; ///
                this.html(html);
                if (this.timeout !== null) {
                    clearTimeout(this.timeout);
                }
                this.timeout = setTimeout(function() {
                    _this.timemout = null;
                    _this.clearValidationError();
                }, _constants.ERROR_DELAY);
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
}(_wrap_native_super(_easy.Element));
_define_property(ValidationErrorParagraph, "tagName", "p");
_define_property(ValidationErrorParagraph, "defaultProperties", {
    className: "validation error"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgRVJST1JfREVMQVkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgdGltZW91dCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gIH1cblxuICBjbGVhclZhbGlkYXRpb25FcnJvcigpIHtcbiAgICBjb25zdCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcih2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICBjb25zdCBodG1sID0gdmFsaWRhdGlvbkVycm9yOyAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcblxuICAgIGlmICh0aGlzLnRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50aW1lbW91dCA9IG51bGw7XG5cbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICB9LCBFUlJPUl9ERUxBWSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgc2hvd1ZhbGlkYXRpb25FcnJvcjogdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2YWxpZGF0aW9uIGVycm9yXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdGltZW91dCA9IG51bGwsXG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHRpbWVvdXQpO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25FcnJvclBhcmFncmFwaDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhbGlkYXRpb25FcnJvclBhcmFncmFwaCIsInNlbGVjdG9yIiwidGltZW91dCIsImNsZWFyVmFsaWRhdGlvbkVycm9yIiwiaHRtbCIsIkVNUFRZX1NUUklORyIsInNob3dWYWxpZGF0aW9uRXJyb3IiLCJ2YWxpZGF0aW9uRXJyb3IiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidGltZW1vdXQiLCJFUlJPUl9ERUxBWSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiZnJvbUNsYXNzIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwidmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7b0JBSkc7eUJBRWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQUEsQUFBTUEseUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBLHlCQUNQQyxRQUFRLEVBQUVDLE9BQU87Z0NBRFZGOztrQ0FFWEM7UUFFTixNQUFLQyxPQUFPLEdBQUdBOzs7a0JBSkVGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLE9BQU9DLHVCQUFZO2dCQUV6QixJQUFJLENBQUNELElBQUksQ0FBQ0E7WUFDWjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0JDLGVBQWU7O2dCQUNqQyxJQUFNSCxPQUFPRyxpQkFBaUIsR0FBRztnQkFFakMsSUFBSSxDQUFDSCxJQUFJLENBQUNBO2dCQUVWLElBQUksSUFBSSxDQUFDRixPQUFPLEtBQUssTUFBTTtvQkFDekJNLGFBQWEsSUFBSSxDQUFDTixPQUFPO2dCQUMzQjtnQkFFQSxJQUFJLENBQUNBLE9BQU8sR0FBR08sV0FBVztvQkFDeEIsTUFBS0MsUUFBUSxHQUFHO29CQUVoQixNQUFLUCxvQkFBb0I7Z0JBQzNCLEdBQUdRLHNCQUFXO1lBQ2hCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQVE7b0JBQ05OLHFCQUFxQixJQUFJLENBQUNBLG1CQUFtQixDQUFDTyxJQUFJLENBQUMsSUFBSTtnQkFDekQ7WUFDRjs7OztZQVFPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVQyxLQUFLLEVBQUVDLFVBQVU7Z0JBQ2hDLElBQU1kLFVBQVUsTUFDVmUsMkJBQTJCQyxhQUFPLENBQUNKLFNBQVMsQ0FBQ0MsT0FBT0MsWUFBWWQ7Z0JBRXRFLE9BQU9lO1lBQ1Q7OztXQTlDbUJqQjtxQkFBaUNrQixhQUFPO0FBbUMzRCxpQkFuQ21CbEIsMEJBbUNabUIsV0FBVTtBQUVqQixpQkFyQ21CbkIsMEJBcUNab0IscUJBQW9CO0lBQ3pCQyxXQUFXO0FBQ2IifQ==