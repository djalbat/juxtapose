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
var ValidationErrorParagraph = /*#__PURE__*/ function(Element1) {
    _inherits(ValidationErrorParagraph, Element1);
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
                var html = "";
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IFRJTUVPVVRfREVMQVkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRG9tRWxlbWVudCwgdGltZW91dCkge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JEb21FbGVtZW50KTtcblxuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gIH1cblxuICBjbGVhclZhbGlkYXRpb25FcnJvcigpIHtcbiAgICBjb25zdCBodG1sID0gXCJcIjtcblxuICAgIHRoaXMuaHRtbChodG1sKTtcbiAgfVxuXG4gIHNob3dWYWxpZGF0aW9uRXJyb3IodmFsaWRhdGlvbkVycm9yKSB7XG4gICAgY29uc3QgaHRtbCA9IHZhbGlkYXRpb25FcnJvcjsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG5cbiAgICBpZiAodGhpcy50aW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudGltZW1vdXQgPSBudWxsO1xuXG4gICAgICB0aGlzLmNsZWFyVmFsaWRhdGlvbkVycm9yKCk7XG4gICAgfSwgVElNRU9VVF9ERUxBWSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgc2hvd1ZhbGlkYXRpb25FcnJvcjogdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2YWxpZGF0aW9uIGVycm9yXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgdGltZW91dCA9IG51bGwsXG4gICAgICAgICAgdmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIHRpbWVvdXQpO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25FcnJvclBhcmFncmFwaDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQVk7Ozs7O0lBRVksS0FBTTtJQUVBLFVBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFMUIsd0JBQXdCO2NBQXhCLHdCQUF3QjthQUF4Qix3QkFBd0IsQ0FDL0Isb0JBQW9CLEVBQUUsT0FBTzs4QkFEdEIsd0JBQXdCOztpRUFBeEIsd0JBQXdCLGFBRW5DLG9CQUFvQjtjQUVyQixPQUFPLEdBQUcsT0FBTzs7O2lCQUpMLHdCQUF3Qjs7WUFPM0MsR0FBb0IsR0FBcEIsb0JBQW9COzRCQUFwQixvQkFBb0I7b0JBQ1osSUFBSTtxQkFFTCxJQUFJLENBQUMsSUFBSTs7OztZQUdoQixHQUFtQixHQUFuQixtQkFBbUI7NEJBQW5CLG1CQUFtQixDQUFDLGVBQWU7b0JBQzNCLElBQUksR0FBRyxlQUFlLENBQUUsQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO3FCQUU1QixJQUFJLENBQUMsSUFBSTt5QkFFTCxPQUFPLEtBQUssSUFBSTtvQkFDdkIsWUFBWSxNQUFNLE9BQU87O3FCQUd0QixPQUFPLEdBQUcsVUFBVTt5QkFDbEIsUUFBUSxHQUFHLElBQUk7eUJBRWYsb0JBQW9COytCQTNCRCxVQUFpQjs7OztZQStCN0MsR0FBYSxHQUFiLGFBQWE7NEJBQWIsYUFBYTs7b0JBRVQsbUJBQW1CLE9BQU8sbUJBQW1CLENBQUMsSUFBSTs7Ozs7O1lBVS9DLEdBQVMsR0FBVCxTQUFTOzRCQUFULFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVTtvQkFDMUIsT0FBTyxHQUFHLElBQUksRUFDZCx3QkFBd0IsR0EvQ1YsS0FBTSxTQStDZSxTQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPO3VCQUV0RSx3QkFBd0I7Ozs7V0E3Q2Qsd0JBQXdCO21CQUpyQixLQUFNO2dCQUlULHdCQUF3QixHQW1DcEMsT0FBTyxJQUFHLENBQUc7Z0JBbkNELHdCQUF3QixHQXFDcEMsaUJBQWlCO0lBQ3RCLFNBQVMsR0FBRSxnQkFBa0I7O2tCQXRDWix3QkFBd0IifQ==