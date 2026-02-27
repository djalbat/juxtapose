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
const _easy = require("easy");
const _constants = require("../../constants");
class ValidationErrorParagraph extends _easy.Element {
    constructor(selector, timeout){
        super(selector);
        this.timeout = timeout;
    }
    clearValidationError() {
        const html = _constants.EMPTY_STRING;
        this.html(html);
    }
    showValidationError(validationError) {
        const html = validationError; ///
        this.html(html);
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(()=>{
            this.timemout = null;
            this.clearValidationError();
        }, _constants.ERROR_DELAY);
    }
    parentContext() {
        return {
            showValidationError: this.showValidationError.bind(this)
        };
    }
    static tagName = "p";
    static defaultProperties = {
        className: "validation error"
    };
    static fromClass(Class, properties, ...remainingArguments) {
        const timeout = null, validationErrorParagraph = _easy.Element.fromClass(Class, properties, timeout, ...remainingArguments);
        return validationErrorParagraph;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgRVJST1JfREVMQVkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgdGltZW91dCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gIH1cblxuICBjbGVhclZhbGlkYXRpb25FcnJvcigpIHtcbiAgICBjb25zdCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcih2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICBjb25zdCBodG1sID0gdmFsaWRhdGlvbkVycm9yOyAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcblxuICAgIGlmICh0aGlzLnRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50aW1lbW91dCA9IG51bGw7XG5cbiAgICAgIHRoaXMuY2xlYXJWYWxpZGF0aW9uRXJyb3IoKTtcbiAgICB9LCBFUlJPUl9ERUxBWSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIHJldHVybiAoe1xuICAgICAgc2hvd1ZhbGlkYXRpb25FcnJvcjogdGhpcy5zaG93VmFsaWRhdGlvbkVycm9yLmJpbmQodGhpcylcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJwXCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2YWxpZGF0aW9uIGVycm9yXCJcbiAgfTtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB0aW1lb3V0ID0gbnVsbCxcbiAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGggPSBFbGVtZW50LmZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcywgdGltZW91dCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGgiLCJFbGVtZW50Iiwic2VsZWN0b3IiLCJ0aW1lb3V0IiwiY2xlYXJWYWxpZGF0aW9uRXJyb3IiLCJodG1sIiwiRU1QVFlfU1RSSU5HIiwic2hvd1ZhbGlkYXRpb25FcnJvciIsInZhbGlkYXRpb25FcnJvciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ0aW1lbW91dCIsIkVSUk9SX0RFTEFZIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7c0JBSkc7MkJBRWtCO0FBRTNCLE1BQU1BLGlDQUFpQ0MsYUFBTztJQUMzRCxZQUFZQyxRQUFRLEVBQUVDLE9BQU8sQ0FBRTtRQUM3QixLQUFLLENBQUNEO1FBRU4sSUFBSSxDQUFDQyxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLHVCQUF1QjtRQUNyQixNQUFNQyxPQUFPQyx1QkFBWTtRQUV6QixJQUFJLENBQUNELElBQUksQ0FBQ0E7SUFDWjtJQUVBRSxvQkFBb0JDLGVBQWUsRUFBRTtRQUNuQyxNQUFNSCxPQUFPRyxpQkFBaUIsR0FBRztRQUVqQyxJQUFJLENBQUNILElBQUksQ0FBQ0E7UUFFVixJQUFJLElBQUksQ0FBQ0YsT0FBTyxLQUFLLE1BQU07WUFDekJNLGFBQWEsSUFBSSxDQUFDTixPQUFPO1FBQzNCO1FBRUEsSUFBSSxDQUFDQSxPQUFPLEdBQUdPLFdBQVc7WUFDeEIsSUFBSSxDQUFDQyxRQUFRLEdBQUc7WUFFaEIsSUFBSSxDQUFDUCxvQkFBb0I7UUFDM0IsR0FBR1Esc0JBQVc7SUFDaEI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBUTtZQUNOTixxQkFBcUIsSUFBSSxDQUFDQSxtQkFBbUIsQ0FBQ08sSUFBSSxDQUFDLElBQUk7UUFDekQ7SUFDRjtJQUVBLE9BQU9DLFVBQVUsSUFBSTtJQUVyQixPQUFPQyxvQkFBb0I7UUFDekJDLFdBQVc7SUFDYixFQUFFO0lBRUYsT0FBT0MsVUFBVUMsS0FBSyxFQUFFQyxVQUFVLEVBQUUsR0FBR0Msa0JBQWtCLEVBQUU7UUFDekQsTUFBTWxCLFVBQVUsTUFDVm1CLDJCQUEyQnJCLGFBQU8sQ0FBQ2lCLFNBQVMsQ0FBQ0MsT0FBT0MsWUFBWWpCLFlBQVlrQjtRQUVsRixPQUFPQztJQUNUO0FBQ0YifQ==