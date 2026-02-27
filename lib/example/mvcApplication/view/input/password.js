"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PasswordInput;
    }
});
const _easy = require("easy");
const _constants = require("../../constants");
class PasswordInput extends _easy.InputElement {
    getPassword() {
        const value = this.getValue(), password = value; ///
        return password;
    }
    clearPassword() {
        const password = _constants.EMPTY_STRING, value = password; ///
        this.setValue(value);
    }
    parentContext() {
        const getPassword = this.getPassword.bind(this), clearPassword = this.clearPassword.bind(this);
        return {
            getPassword,
            clearPassword
        };
    }
    static tagName = "input";
    static defaultProperties = {
        type: "password"
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvaW5wdXQvcGFzc3dvcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IElucHV0RWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRJbnB1dCBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIGdldFBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIHBhc3N3b3JkID0gdmFsdWU7IC8vL1xuXG4gICAgcmV0dXJuIHBhc3N3b3JkO1xuICB9XG5cbiAgY2xlYXJQYXNzd29yZCgpIHtcbiAgICBjb25zdCBwYXNzd29yZCA9IEVNUFRZX1NUUklORyxcbiAgICAgICAgICB2YWx1ZSA9IHBhc3N3b3JkOyAvLy9cblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcblx0ICBjb25zdCBnZXRQYXNzd29yZCA9IHRoaXMuZ2V0UGFzc3dvcmQuYmluZCh0aGlzKSxcblx0XHRcdFx0ICBjbGVhclBhc3N3b3JkID0gdGhpcy5jbGVhclBhc3N3b3JkLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldFBhc3N3b3JkLFxuICAgICAgY2xlYXJQYXNzd29yZFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImlucHV0XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIHR5cGU6IFwicGFzc3dvcmRcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIlBhc3N3b3JkSW5wdXQiLCJJbnB1dEVsZW1lbnQiLCJnZXRQYXNzd29yZCIsInZhbHVlIiwiZ2V0VmFsdWUiLCJwYXNzd29yZCIsImNsZWFyUGFzc3dvcmQiLCJFTVBUWV9TVFJJTkciLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwidHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztzQkFKUTsyQkFFQTtBQUVkLE1BQU1BLHNCQUFzQkMsa0JBQVk7SUFDckRDLGNBQWM7UUFDWixNQUFNQyxRQUFRLElBQUksQ0FBQ0MsUUFBUSxJQUNyQkMsV0FBV0YsT0FBTyxHQUFHO1FBRTNCLE9BQU9FO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUQsV0FBV0UsdUJBQVksRUFDdkJKLFFBQVFFLFVBQVUsR0FBRztRQUUzQixJQUFJLENBQUNHLFFBQVEsQ0FBQ0w7SUFDaEI7SUFFQU0sZ0JBQWdCO1FBQ2YsTUFBTVAsY0FBYyxJQUFJLENBQUNBLFdBQVcsQ0FBQ1EsSUFBSSxDQUFDLElBQUksR0FDM0NKLGdCQUFnQixJQUFJLENBQUNBLGFBQWEsQ0FBQ0ksSUFBSSxDQUFDLElBQUk7UUFFOUMsT0FBUTtZQUNOUjtZQUNBSTtRQUNGO0lBQ0Y7SUFFQSxPQUFPSyxVQUFVLFFBQVE7SUFFekIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxNQUFNO0lBQ1IsRUFBRTtBQUNKIn0=