"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PasswordForm;
    }
});
const _easy = require("easy");
const _controller = /*#__PURE__*/ _interop_require_default(require("../../controller"));
const _password = /*#__PURE__*/ _interop_require_default(require("../input/password"));
const _validationError = /*#__PURE__*/ _interop_require_default(require("../paragraph/validationError"));
const _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PasswordForm extends _easy.Element {
    validateAndSubmitForm() {
        const passwordValid = this.validateForm();
        if (!passwordValid) {
            this.showValidationError("The password is invalid");
        } else {
            this.submitForm();
        }
    }
    validateForm() {
        const password = this.getPassword(), passwordValid = isPasswordValid(password);
        return passwordValid;
    }
    submitForm() {
        const password = this.getPassword();
        _controller.default.setPassword(password);
        this.clearPassword();
    }
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_password.default, null),
            /*#__PURE__*/ React.createElement(_validationError.default, null),
            /*#__PURE__*/ React.createElement(_easy.Button, {
                className: "submit",
                onClick: (event, element)=>{
                    event.preventDefault();
                    this.validateAndSubmitForm();
                }
            }, "Submit")
        ];
    }
    initialise() {
        this.assignContext();
    }
    static tagName = "form";
    static defaultProperties = {
        className: "password"
    };
}
function isPasswordValid(password) {
    const passwordValid = password !== _constants.EMPTY_STRING;
    return passwordValid;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvZm9ybS9wYXNzd29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgQnV0dG9uIH0gZnJvbSBcImVhc3lcIjtcblxuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4uLy4uL2NvbnRyb2xsZXJcIjtcbmltcG9ydCBQYXNzd29yZElucHV0IGZyb20gXCIuLi9pbnB1dC9wYXNzd29yZFwiO1xuaW1wb3J0IFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBmcm9tIFwiLi4vcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvclwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkRm9ybSBleHRlbmRzIEVsZW1lbnQge1xuICB2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmRWYWxpZCA9IHRoaXMudmFsaWRhdGVGb3JtKCk7XG5cbiAgICBpZiAoIXBhc3N3b3JkVmFsaWQpIHtcbiAgICAgIHRoaXMuc2hvd1ZhbGlkYXRpb25FcnJvcihcIlRoZSBwYXNzd29yZCBpcyBpbnZhbGlkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1Ym1pdEZvcm0oKTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCksXG4gICAgICAgICAgcGFzc3dvcmRWYWxpZCA9IGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCk7XG5cbiAgICByZXR1cm4gcGFzc3dvcmRWYWxpZDtcbiAgfVxuXG4gIHN1Ym1pdEZvcm0oKSB7XG4gICAgY29uc3QgcGFzc3dvcmQgPSB0aGlzLmdldFBhc3N3b3JkKCk7XG5cbiAgICBjb250cm9sbGVyLnNldFBhc3N3b3JkKHBhc3N3b3JkKTtcblxuICAgIHRoaXMuY2xlYXJQYXNzd29yZCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4oW1xuXG4gICAgICA8UGFzc3dvcmRJbnB1dCAvPixcbiAgICAgIDxWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggLz4sXG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCwgZWxlbWVudCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRTdWJtaXRGb3JtKCk7XG5cbiAgICAgICAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgU3VibWl0XG4gICAgICA8L0J1dHRvbj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJmb3JtXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJwYXNzd29yZFwiXG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzUGFzc3dvcmRWYWxpZChwYXNzd29yZCkge1xuICBjb25zdCBwYXNzd29yZFZhbGlkID0gKHBhc3N3b3JkICE9PSBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBwYXNzd29yZFZhbGlkO1xufVxuIl0sIm5hbWVzIjpbIlBhc3N3b3JkRm9ybSIsIkVsZW1lbnQiLCJ2YWxpZGF0ZUFuZFN1Ym1pdEZvcm0iLCJwYXNzd29yZFZhbGlkIiwidmFsaWRhdGVGb3JtIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsInN1Ym1pdEZvcm0iLCJwYXNzd29yZCIsImdldFBhc3N3b3JkIiwiaXNQYXNzd29yZFZhbGlkIiwiY29udHJvbGxlciIsInNldFBhc3N3b3JkIiwiY2xlYXJQYXNzd29yZCIsImNoaWxkRWxlbWVudHMiLCJQYXNzd29yZElucHV0IiwiVmFsaWRhdGlvbkVycm9yUGFyYWdyYXBoIiwiQnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsImV2ZW50IiwiZWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBcUJBOzs7c0JBUlc7bUVBRVQ7aUVBQ0c7d0VBQ1c7MkJBRVI7Ozs7OztBQUVkLE1BQU1BLHFCQUFxQkMsYUFBTztJQUMvQ0Msd0JBQXdCO1FBQ3RCLE1BQU1DLGdCQUFnQixJQUFJLENBQUNDLFlBQVk7UUFFdkMsSUFBSSxDQUFDRCxlQUFlO1lBQ2xCLElBQUksQ0FBQ0UsbUJBQW1CLENBQUM7UUFDM0IsT0FBTztZQUNMLElBQUksQ0FBQ0MsVUFBVTtRQUNqQjtJQUNGO0lBRUFGLGVBQWU7UUFDYixNQUFNRyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkwsZ0JBQWdCTSxnQkFBZ0JGO1FBRXRDLE9BQU9KO0lBQ1Q7SUFFQUcsYUFBYTtRQUNYLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXO1FBRWpDRSxtQkFBVSxDQUFDQyxXQUFXLENBQUNKO1FBRXZCLElBQUksQ0FBQ0ssYUFBYTtJQUNwQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPOzBCQUVMLG9CQUFDQyxpQkFBYTswQkFDZCxvQkFBQ0Msd0JBQXdCOzBCQUN6QixvQkFBQ0MsWUFBTTtnQkFBQ0MsV0FBVTtnQkFDVkMsU0FBUyxDQUFDQyxPQUFPQztvQkFFZkQsTUFBTUUsY0FBYztvQkFFcEIsSUFBSSxDQUFDbkIscUJBQXFCO2dCQUU1QjtlQUNQO1NBSUY7SUFDSDtJQUVBb0IsYUFBYTtRQUNYLElBQUksQ0FBQ0MsYUFBYTtJQUNwQjtJQUVBLE9BQU9DLFVBQVUsT0FBTztJQUV4QixPQUFPQyxvQkFBb0I7UUFDekJSLFdBQVc7SUFDYixFQUFFO0FBQ0o7QUFFQSxTQUFTUixnQkFBZ0JGLFFBQVE7SUFDL0IsTUFBTUosZ0JBQWlCSSxhQUFhbUIsdUJBQVk7SUFFaEQsT0FBT3ZCO0FBQ1QifQ==