'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var easy = require('easy');

var Message = require('./view/message'),
    PasswordForm = require('./view/passwordForm'),
    ResetPasswordButton = require('./view/resetPasswordButton');

var Element = easy.Element;

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _getPrototypeOf(View).apply(this, arguments));
  }

  _createClass(View, [{
    key: "childElements",
    value: function childElements() {
      return [React.createElement(PasswordForm, null), React.createElement(ResetPasswordButton, null), React.createElement(Message, null)];
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.assignContext();
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var view = Element.fromProperties(View, properties);
      view.initialise();
      return view;
    }
  }]);

  return View;
}(Element);

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});
module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJNZXNzYWdlIiwiUGFzc3dvcmRGb3JtIiwiUmVzZXRQYXNzd29yZEJ1dHRvbiIsIkVsZW1lbnQiLCJWaWV3IiwiYXNzaWduQ29udGV4dCIsInByb3BlcnRpZXMiLCJ2aWV3IiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFFQSxJQUFNQyxPQUFPLEdBQUdELE9BQU8sQ0FBQyxnQkFBRCxDQUF2QjtBQUFBLElBQ01FLFlBQVksR0FBR0YsT0FBTyxDQUFDLHFCQUFELENBRDVCO0FBQUEsSUFFTUcsbUJBQW1CLEdBQUdILE9BQU8sQ0FBQyw0QkFBRCxDQUZuQzs7SUFJUUksTyxHQUFZTCxJLENBQVpLLE87O0lBRUZDLEk7Ozs7Ozs7Ozs7O29DQUNZO0FBQ2QsYUFBTyxDQUVMLG9CQUFDLFlBQUQsT0FGSyxFQUdMLG9CQUFDLG1CQUFELE9BSEssRUFJTCxvQkFBQyxPQUFELE9BSkssQ0FBUDtBQU9EOzs7aUNBRVk7QUFDWCxXQUFLQyxhQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUNoQyxVQUFNQyxJQUFJLEdBQUdKLE9BQU8sQ0FBQ0ssY0FBUixDQUF1QkosSUFBdkIsRUFBNkJFLFVBQTdCLENBQWI7QUFFQUMsTUFBQUEsSUFBSSxDQUFDRSxVQUFMO0FBRUEsYUFBT0YsSUFBUDtBQUNEOzs7O0VBckJnQkosTzs7QUF3Qm5CTyxNQUFNLENBQUNDLE1BQVAsQ0FBY1AsSUFBZCxFQUFvQjtBQUNsQlEsRUFBQUEsT0FBTyxFQUFFLEtBRFM7QUFFbEJDLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxTQUFTLEVBQUU7QUFETTtBQUZELENBQXBCO0FBT0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlosSUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IE1lc3NhZ2UgPSByZXF1aXJlKCcuL3ZpZXcvbWVzc2FnZScpLFxuICAgICAgUGFzc3dvcmRGb3JtID0gcmVxdWlyZSgnLi92aWV3L3Bhc3N3b3JkRm9ybScpLFxuICAgICAgUmVzZXRQYXNzd29yZEJ1dHRvbiA9IHJlcXVpcmUoJy4vdmlldy9yZXNldFBhc3N3b3JkQnV0dG9uJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybihbXG5cbiAgICAgIDxQYXNzd29yZEZvcm0gLz4sXG4gICAgICA8UmVzZXRQYXNzd29yZEJ1dHRvbiAvPixcbiAgICAgIDxNZXNzYWdlIC8+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlldztcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFZpZXcsIHtcbiAgdGFnTmFtZTogJ2RpdicsXG4gIGRlZmF1bHRQcm9wZXJ0aWVzOiB7XG4gICAgY2xhc3NOYW1lOiAndmlldydcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmlldztcbiJdfQ==