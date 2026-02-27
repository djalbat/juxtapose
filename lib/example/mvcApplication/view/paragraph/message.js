"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MessageParagraph;
    }
});
const _easy = require("easy");
class MessageParagraph extends _easy.Element {
    showMessage(message) {
        const html = message; ///
        this.html(html);
    }
    parentContext() {
        const showMessage = this.showMessage.bind(this);
        return {
            showMessage
        };
    }
    static tagName = "p";
    static defaultProperties = {
        className: "message"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL21lc3NhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlUGFyYWdyYXBoIGV4dGVuZHMgRWxlbWVudCB7XG4gIHNob3dNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBodG1sID0gbWVzc2FnZTsgLy8vXG5cbiAgICB0aGlzLmh0bWwoaHRtbCk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuXHQgIGNvbnN0IHNob3dNZXNzYWdlID0gdGhpcy5zaG93TWVzc2FnZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93TWVzc2FnZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInBcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcIm1lc3NhZ2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIk1lc3NhZ2VQYXJhZ3JhcGgiLCJFbGVtZW50Iiwic2hvd01lc3NhZ2UiLCJtZXNzYWdlIiwiaHRtbCIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3NCQUZHO0FBRVQsTUFBTUEseUJBQXlCQyxhQUFPO0lBQ25EQyxZQUFZQyxPQUFPLEVBQUU7UUFDbkIsTUFBTUMsT0FBT0QsU0FBUyxHQUFHO1FBRXpCLElBQUksQ0FBQ0MsSUFBSSxDQUFDQTtJQUNaO0lBRUFDLGdCQUFnQjtRQUNmLE1BQU1ILGNBQWMsSUFBSSxDQUFDQSxXQUFXLENBQUNJLElBQUksQ0FBQyxJQUFJO1FBRTdDLE9BQVE7WUFDTko7UUFDRjtJQUNGO0lBRUEsT0FBT0ssVUFBVSxJQUFJO0lBRXJCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7QUFDSiJ9