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

var controller = require('../controller');

var Element = easy.Element;

var ResetPasswordButton = /*#__PURE__*/function (_Element) {
  _inherits(ResetPasswordButton, _Element);

  function ResetPasswordButton() {
    _classCallCheck(this, ResetPasswordButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(ResetPasswordButton).apply(this, arguments));
  }

  _createClass(ResetPasswordButton, [{
    key: "clickHandler",
    value: function clickHandler() {
      controller.resetPassword();
    }
  }, {
    key: "childElements",
    value: function childElements() {
      return 'Reset password';
    }
  }, {
    key: "initialise",
    value: function initialise() {
      this.onClick(this.clickHandler);
    }
  }], [{
    key: "fromProperties",
    value: function fromProperties(properties) {
      var resetPasswordButton = Element.fromProperties(ResetPasswordButton, properties);
      resetPasswordButton.initialise();
      return resetPasswordButton;
    }
  }]);

  return ResetPasswordButton;
}(Element);

Object.assign(ResetPasswordButton, {
  tagName: 'button',
  defaultProperties: {
    className: 'resetPassword'
  }
});
module.exports = ResetPasswordButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0UGFzc3dvcmRCdXR0b24uanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJjb250cm9sbGVyIiwiRWxlbWVudCIsIlJlc2V0UGFzc3dvcmRCdXR0b24iLCJyZXNldFBhc3N3b3JkIiwib25DbGljayIsImNsaWNrSGFuZGxlciIsInByb3BlcnRpZXMiLCJyZXNldFBhc3N3b3JkQnV0dG9uIiwiZnJvbVByb3BlcnRpZXMiLCJpbml0aWFsaXNlIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQyxlQUFELENBQTFCOztJQUVRRSxPLEdBQVlILEksQ0FBWkcsTzs7SUFFRkMsbUI7Ozs7Ozs7Ozs7O21DQUNXO0FBQ2JGLE1BQUFBLFVBQVUsQ0FBQ0csYUFBWDtBQUNEOzs7b0NBRWU7QUFDZCxhQUFPLGdCQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUtDLE9BQUwsQ0FBYSxLQUFLQyxZQUFsQjtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsVUFBTUMsbUJBQW1CLEdBQUdOLE9BQU8sQ0FBQ08sY0FBUixDQUF1Qk4sbUJBQXZCLEVBQTRDSSxVQUE1QyxDQUE1QjtBQUVBQyxNQUFBQSxtQkFBbUIsQ0FBQ0UsVUFBcEI7QUFFQSxhQUFPRixtQkFBUDtBQUNEOzs7O0VBbkIrQk4sTzs7QUFzQmxDUyxNQUFNLENBQUNDLE1BQVAsQ0FBY1QsbUJBQWQsRUFBbUM7QUFDakNVLEVBQUFBLE9BQU8sRUFBRSxRQUR3QjtBQUVqQ0MsRUFBQUEsaUJBQWlCLEVBQUU7QUFDakJDLElBQUFBLFNBQVMsRUFBRTtBQURNO0FBRmMsQ0FBbkM7QUFPQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZCxtQkFBakIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVyJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgUmVzZXRQYXNzd29yZEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjbGlja0hhbmRsZXIoKSB7XG4gICAgY29udHJvbGxlci5yZXNldFBhc3N3b3JkKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAnUmVzZXQgcGFzc3dvcmQnO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCByZXNldFBhc3N3b3JkQnV0dG9uID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhSZXNldFBhc3N3b3JkQnV0dG9uLCBwcm9wZXJ0aWVzKTtcblxuICAgIHJlc2V0UGFzc3dvcmRCdXR0b24uaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHJlc2V0UGFzc3dvcmRCdXR0b247XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZXNldFBhc3N3b3JkQnV0dG9uLCB7XG4gIHRhZ05hbWU6ICdidXR0b24nLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3Jlc2V0UGFzc3dvcmQnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc2V0UGFzc3dvcmRCdXR0b247XG4iXX0=