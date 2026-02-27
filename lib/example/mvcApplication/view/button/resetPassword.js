"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ResetPasswordButton;
    }
});
const _easy = require("easy");
const _controller = /*#__PURE__*/ _interop_require_default(require("../../controller"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ResetPasswordButton extends _easy.Element {
    clickHandler = (event, element)=>{
        _controller.default.resetPassword();
    };
    didMount() {
        this.onClick(this.clickHandler, this);
    }
    willMount() {
        this.offClick(this.clickHandler, this);
    }
    childElements() {
        return "Reset password";
    }
    static tagName = "button";
    static defaultProperties = {
        className: "reset-password"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvYnV0dG9uL3Jlc2V0UGFzc3dvcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgY29udHJvbGxlciBmcm9tIFwiLi4vLi4vY29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNldFBhc3N3b3JkQnV0dG9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNsaWNrSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnRyb2xsZXIucmVzZXRQYXNzd29yZCgpO1xuICB9XG5cbiAgZGlkTW91bnQoKSB7XG4gICAgdGhpcy5vbkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIHdpbGxNb3VudCgpIHtcbiAgICB0aGlzLm9mZkNsaWNrKHRoaXMuY2xpY2tIYW5kbGVyLCB0aGlzKTtcbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIFwiUmVzZXQgcGFzc3dvcmRcIjtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJidXR0b25cIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJlc2V0LXBhc3N3b3JkXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJSZXNldFBhc3N3b3JkQnV0dG9uIiwiRWxlbWVudCIsImNsaWNrSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNvbnRyb2xsZXIiLCJyZXNldFBhc3N3b3JkIiwiZGlkTW91bnQiLCJvbkNsaWNrIiwid2lsbE1vdW50Iiwib2ZmQ2xpY2siLCJjaGlsZEVsZW1lbnRzIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3NCQUpHO21FQUVEOzs7Ozs7QUFFUixNQUFNQSw0QkFBNEJDLGFBQU87SUFDdERDLGVBQWUsQ0FBQ0MsT0FBT0M7UUFDckJDLG1CQUFVLENBQUNDLGFBQWE7SUFDMUIsRUFBQztJQUVEQyxXQUFXO1FBQ1QsSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxDQUFDTixZQUFZLEVBQUUsSUFBSTtJQUN0QztJQUVBTyxZQUFZO1FBQ1YsSUFBSSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDUixZQUFZLEVBQUUsSUFBSTtJQUN2QztJQUVBUyxnQkFBZ0I7UUFDZCxPQUFPO0lBQ1Q7SUFFQSxPQUFPQyxVQUFVLFNBQVM7SUFFMUIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKIn0=