"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return mvcApplication;
    }
});
require("../index");
var _easy = require("easy");
var _view = /*#__PURE__*/ _interop_require_default(require("./mvcApplication/view"));
var _model = /*#__PURE__*/ _interop_require_default(require("./mvcApplication/model"));
var _controller = /*#__PURE__*/ _interop_require_default(require("./mvcApplication/controller"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function mvcApplication() {
    var model = new _model.default(), view = /*#__PURE__*/ React.createElement(_view.default, null);
    Object.assign(_controller.default, {
        setPassword: setPassword,
        resetPassword: resetPassword
    });
    var body = new _easy.Body();
    body.mount(view);
    function setPassword(password) {
        model.setPassword(password);
        view.showMessage("The password has been set.");
    }
    function resetPassword() {
        model.resetPassword();
        view.showMessage("The password has been reset.");
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL212Y0FwcGxpY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgXCIuLi9pbmRleFwiOyAgLy8vXG5cbmltcG9ydCB7IEJvZHkgfSBmcm9tIFwiZWFzeVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9tdmNBcHBsaWNhdGlvbi92aWV3XCI7XG5pbXBvcnQgTW9kZWwgZnJvbSBcIi4vbXZjQXBwbGljYXRpb24vbW9kZWxcIjtcbmltcG9ydCBjb250cm9sbGVyIGZyb20gXCIuL212Y0FwcGxpY2F0aW9uL2NvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbXZjQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IG1vZGVsID0gbmV3IE1vZGVsKCksXG4gICAgICAgIHZpZXcgPVxuXG4gICAgICAgICAgPFZpZXcvPlxuXG4gICAgICAgIDtcblxuICBPYmplY3QuYXNzaWduKGNvbnRyb2xsZXIsIHtcbiAgICBzZXRQYXNzd29yZCxcbiAgICByZXNldFBhc3N3b3JkXG4gIH0pO1xuXG4gIGNvbnN0IGJvZHkgPSBuZXcgQm9keSgpO1xuXG4gIGJvZHkubW91bnQodmlldyk7XG5cbiAgZnVuY3Rpb24gc2V0UGFzc3dvcmQocGFzc3dvcmQpIHtcbiAgICBtb2RlbC5zZXRQYXNzd29yZChwYXNzd29yZCk7XG5cbiAgICB2aWV3LnNob3dNZXNzYWdlKFwiVGhlIHBhc3N3b3JkIGhhcyBiZWVuIHNldC5cIik7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFBhc3N3b3JkKCkge1xuICAgIG1vZGVsLnJlc2V0UGFzc3dvcmQoKTtcblxuICAgIHZpZXcuc2hvd01lc3NhZ2UoXCJUaGUgcGFzc3dvcmQgaGFzIGJlZW4gcmVzZXQuXCIpO1xuICB9XG59XG4iXSwibmFtZXMiOlsibXZjQXBwbGljYXRpb24iLCJtb2RlbCIsIk1vZGVsIiwidmlldyIsIlZpZXciLCJPYmplY3QiLCJhc3NpZ24iLCJjb250cm9sbGVyIiwic2V0UGFzc3dvcmQiLCJyZXNldFBhc3N3b3JkIiwiYm9keSIsIkJvZHkiLCJtb3VudCIsInBhc3N3b3JkIiwic2hvd01lc3NhZ2UiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7O1FBUmpCO29CQUVjOzJEQUVKOzREQUNDO2lFQUNLOzs7Ozs7QUFFUixTQUFTQTtJQUN0QixJQUFNQyxRQUFRLElBQUlDLGNBQUssSUFDakJDLHFCQUVFLG9CQUFDQyxhQUFJO0lBSWJDLE9BQU9DLE1BQU0sQ0FBQ0MsbUJBQVUsRUFBRTtRQUN4QkMsYUFBQUE7UUFDQUMsZUFBQUE7SUFDRjtJQUVBLElBQU1DLE9BQU8sSUFBSUMsVUFBSTtJQUVyQkQsS0FBS0UsS0FBSyxDQUFDVDtJQUVYLFNBQVNLLFlBQVlLLFFBQVE7UUFDM0JaLE1BQU1PLFdBQVcsQ0FBQ0s7UUFFbEJWLEtBQUtXLFdBQVcsQ0FBQztJQUNuQjtJQUVBLFNBQVNMO1FBQ1BSLE1BQU1RLGFBQWE7UUFFbkJOLEtBQUtXLFdBQVcsQ0FBQztJQUNuQjtBQUNGIn0=