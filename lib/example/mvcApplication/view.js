"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return View;
    }
});
const _easy = require("easy");
const _password = /*#__PURE__*/ _interop_require_default(require("./view/form/password"));
const _message = /*#__PURE__*/ _interop_require_default(require("./view/paragraph/message"));
const _resetPassword = /*#__PURE__*/ _interop_require_default(require("./view/button/resetPassword"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class View extends _easy.Element {
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_password.default, null),
            /*#__PURE__*/ React.createElement(_resetPassword.default, null),
            /*#__PURE__*/ React.createElement(_message.default, null)
        ];
    }
    initialise() {
        this.assignContext();
    }
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgUGFzc3dvcmRGb3JtIGZyb20gXCIuL3ZpZXcvZm9ybS9wYXNzd29yZFwiO1xuaW1wb3J0IE1lc3NhZ2VQYXJhZ3JhcGggZnJvbSBcIi4vdmlldy9wYXJhZ3JhcGgvbWVzc2FnZVwiO1xuaW1wb3J0IFJlc2V0UGFzc3dvcmRCdXR0b24gZnJvbSBcIi4vdmlldy9idXR0b24vcmVzZXRQYXNzd29yZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkRm9ybS8+LFxuICAgICAgPFJlc2V0UGFzc3dvcmRCdXR0b24vPixcbiAgICAgIDxNZXNzYWdlUGFyYWdyYXBoLz5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlZpZXciLCJFbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsIlBhc3N3b3JkRm9ybSIsIlJlc2V0UGFzc3dvcmRCdXR0b24iLCJNZXNzYWdlUGFyYWdyYXBoIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBcUJBOzs7c0JBTkc7aUVBRUM7Z0VBQ0k7c0VBQ0c7Ozs7OztBQUVqQixNQUFNQSxhQUFhQyxhQUFPO0lBQ3ZDQyxnQkFBZ0I7UUFDZCxPQUFPOzBCQUVMLG9CQUFDQyxpQkFBWTswQkFDYixvQkFBQ0Msc0JBQW1COzBCQUNwQixvQkFBQ0MsZ0JBQWdCO1NBRWxCO0lBQ0g7SUFFQUMsYUFBYTtRQUNYLElBQUksQ0FBQ0MsYUFBYTtJQUNwQjtJQUVBLE9BQU9DLFVBQVUsTUFBTTtJQUV2QixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0FBQ0oifQ==