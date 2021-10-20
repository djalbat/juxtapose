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
var PasswordInput = /*#__PURE__*/ function(InputElement) {
    _inherits(PasswordInput, InputElement);
    function PasswordInput() {
        _classCallCheck(this, PasswordInput);
        return _possibleConstructorReturn(this, _getPrototypeOf(PasswordInput).apply(this, arguments));
    }
    _createClass(PasswordInput, [
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
_defineProperty(PasswordInput, "tagName", "input");
_defineProperty(PasswordInput, "defaultProperties", {
    type: "password"
});
exports.default = PasswordInput;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvaW5wdXQvcGFzc3dvcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IElucHV0RWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhc3N3b3JkID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkO1xuICB9XG5cbiAgY2xlYXJQYXNzd29yZCgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB2YWx1ZSA9IHBhc3N3b3JkOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBnZXRQYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBjbGVhclBhc3N3b3JkID0gdGhpcy5jbGVhclBhc3N3b3JkLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBhc3N3b3JkLFxuICAgICAgY2xlYXJQYXNzd29yZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwicGFzc3dvcmRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBhc3N3b3JkSW5wdXQiLCJnZXRQYXNzd29yZCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJwYXNzd29yZCIsImNsZWFyUGFzc3dvcmQiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFaUIsR0FBTSxDQUFOLEtBQU07QUFFTixHQUFpQixDQUFqQixVQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFekJBLGFBQWEsaUJBQW5CLFFBQVE7Y0FBRkEsYUFBYTthQUFiQSxhQUFhOzhCQUFiQSxhQUFhO2dFQUFiQSxhQUFhOztpQkFBYkEsYUFBYTs7WUFDaENDLEdBQVcsRUFBWEEsQ0FBVzttQkFBWEEsUUFBUSxDQUFSQSxXQUFXLEdBQUcsQ0FBQztnQkFDYixHQUFLLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFFBQVEsR0FBR0YsS0FBSyxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFM0IsTUFBTSxDQUFDRSxRQUFRO1lBQ2pCLENBQUM7OztZQUVEQyxHQUFhLEVBQWJBLENBQWE7bUJBQWJBLFFBQVEsQ0FBUkEsYUFBYSxHQUFHLENBQUM7Z0JBQ2YsR0FBSyxDQUFDRCxRQUFRLEdBWFcsVUFBaUIsZUFZcENGLEtBQUssR0FBR0UsUUFBUSxDQUFFLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFM0IsSUFBSSxDQUFDRSxRQUFRLENBQUNKLEtBQUs7WUFDckIsQ0FBQzs7O1lBRURLLEdBQWEsRUFBYkEsQ0FBYTttQkFBYkEsUUFBUSxDQUFSQSxhQUFhLEdBQUcsQ0FBQztnQkFDaEIsR0FBSyxDQUFDTixXQUFXLEdBQUcsSUFBSSxDQUFDQSxXQUFXLENBQUNPLElBQUksQ0FBQyxJQUFJLEdBQzNDSCxhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUNHLElBQUksQ0FBQyxJQUFJO2dCQUU5QyxNQUFNLENBQUUsQ0FBQztvQkFDUFAsV0FBVyxFQUFYQSxXQUFXO29CQUNYSSxhQUFhLEVBQWJBLGFBQWE7Z0JBQ2YsQ0FBQztZQUNILENBQUM7OztXQXZCa0JMLGFBQWE7RUFKTCxLQUFNO2dCQUlkQSxhQUFhLEVBeUJ6QlMsQ0FBTyxVQUFHLENBQU87Z0JBekJMVCxhQUFhLEVBMkJ6QlUsQ0FBaUIsb0JBQUcsQ0FBQztJQUMxQkMsSUFBSSxFQUFFLENBQVU7QUFDbEIsQ0FBQztrQkE3QmtCWCxhQUFhIn0=