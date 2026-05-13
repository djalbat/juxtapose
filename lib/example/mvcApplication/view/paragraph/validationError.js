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
            this.timeout = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uL3ZpZXcvcGFyYWdyYXBoL3ZhbGlkYXRpb25FcnJvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJlYXN5XCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORywgRVJST1JfREVMQVkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRpb25FcnJvclBhcmFncmFwaCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihzZWxlY3RvciwgdGltZW91dCkge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcblxuICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gIH1cblxuICBjbGVhclZhbGlkYXRpb25FcnJvcigpIHtcbiAgICBjb25zdCBodG1sID0gRU1QVFlfU1RSSU5HO1xuXG4gICAgdGhpcy5odG1sKGh0bWwpO1xuICB9XG5cbiAgc2hvd1ZhbGlkYXRpb25FcnJvcih2YWxpZGF0aW9uRXJyb3IpIHtcbiAgICBjb25zdCBodG1sID0gdmFsaWRhdGlvbkVycm9yOyAvLy9cblxuICAgIHRoaXMuaHRtbChodG1sKTtcblxuICAgIGlmICh0aGlzLnRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcblxuICAgICAgdGhpcy5jbGVhclZhbGlkYXRpb25FcnJvcigpO1xuICAgIH0sIEVSUk9SX0RFTEFZKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgcmV0dXJuICh7XG4gICAgICBzaG93VmFsaWRhdGlvbkVycm9yOiB0aGlzLnNob3dWYWxpZGF0aW9uRXJyb3IuYmluZCh0aGlzKVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcInBcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZhbGlkYXRpb24gZXJyb3JcIlxuICB9O1xuXG4gIHN0YXRpYyBmcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHRpbWVvdXQgPSBudWxsLFxuICAgICAgICAgIHZhbGlkYXRpb25FcnJvclBhcmFncmFwaCA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCB0aW1lb3V0LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHZhbGlkYXRpb25FcnJvclBhcmFncmFwaDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhbGlkYXRpb25FcnJvclBhcmFncmFwaCIsIkVsZW1lbnQiLCJzZWxlY3RvciIsInRpbWVvdXQiLCJjbGVhclZhbGlkYXRpb25FcnJvciIsImh0bWwiLCJFTVBUWV9TVFJJTkciLCJzaG93VmFsaWRhdGlvbkVycm9yIiwidmFsaWRhdGlvbkVycm9yIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIkVSUk9SX0RFTEFZIiwicGFyZW50Q29udGV4dCIsImJpbmQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJ2YWxpZGF0aW9uRXJyb3JQYXJhZ3JhcGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7c0JBSkc7MkJBRWtCO0FBRTNCLE1BQU1BLGlDQUFpQ0MsYUFBTztJQUMzRCxZQUFZQyxRQUFRLEVBQUVDLE9BQU8sQ0FBRTtRQUM3QixLQUFLLENBQUNEO1FBRU4sSUFBSSxDQUFDQyxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLHVCQUF1QjtRQUNyQixNQUFNQyxPQUFPQyx1QkFBWTtRQUV6QixJQUFJLENBQUNELElBQUksQ0FBQ0E7SUFDWjtJQUVBRSxvQkFBb0JDLGVBQWUsRUFBRTtRQUNuQyxNQUFNSCxPQUFPRyxpQkFBaUIsR0FBRztRQUVqQyxJQUFJLENBQUNILElBQUksQ0FBQ0E7UUFFVixJQUFJLElBQUksQ0FBQ0YsT0FBTyxLQUFLLE1BQU07WUFDekJNLGFBQWEsSUFBSSxDQUFDTixPQUFPO1FBQzNCO1FBRUEsSUFBSSxDQUFDQSxPQUFPLEdBQUdPLFdBQVc7WUFDeEIsSUFBSSxDQUFDUCxPQUFPLEdBQUc7WUFFZixJQUFJLENBQUNDLG9CQUFvQjtRQUMzQixHQUFHTyxzQkFBVztJQUNoQjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFRO1lBQ05MLHFCQUFxQixJQUFJLENBQUNBLG1CQUFtQixDQUFDTSxJQUFJLENBQUMsSUFBSTtRQUN6RDtJQUNGO0lBRUEsT0FBT0MsVUFBVSxJQUFJO0lBRXJCLE9BQU9DLG9CQUFvQjtRQUN6QkMsV0FBVztJQUNiLEVBQUU7SUFFRixPQUFPQyxVQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRSxHQUFHQyxrQkFBa0IsRUFBRTtRQUN6RCxNQUFNakIsVUFBVSxNQUNWa0IsMkJBQTJCcEIsYUFBTyxDQUFDZ0IsU0FBUyxDQUFDQyxPQUFPQyxZQUFZaEIsWUFBWWlCO1FBRWxGLE9BQU9DO0lBQ1Q7QUFDRiJ9