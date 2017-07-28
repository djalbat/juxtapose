'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var controller = require('../controller');

var Element = easy.Element;

var ResetPasswordButton = function (_Element) {
  _inherits(ResetPasswordButton, _Element);

  function ResetPasswordButton() {
    _classCallCheck(this, ResetPasswordButton);

    return _possibleConstructorReturn(this, (ResetPasswordButton.__proto__ || Object.getPrototypeOf(ResetPasswordButton)).apply(this, arguments));
  }

  _createClass(ResetPasswordButton, [{
    key: 'clickHandler',
    value: function clickHandler() {
      controller.resetPassword();
    }
  }, {
    key: 'childElements',
    value: function childElements() {
      return 'Reset password';
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.onClick(this.clickHandler);
    }
  }], [{
    key: 'fromProperties',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9tdmNBcHAvdmlldy9yZXNldFBhc3N3b3JkQnV0dG9uLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiY29udHJvbGxlciIsIkVsZW1lbnQiLCJSZXNldFBhc3N3b3JkQnV0dG9uIiwicmVzZXRQYXNzd29yZCIsIm9uQ2xpY2siLCJjbGlja0hhbmRsZXIiLCJwcm9wZXJ0aWVzIiwicmVzZXRQYXNzd29yZEJ1dHRvbiIsImZyb21Qcm9wZXJ0aWVzIiwiaW5pdGlhbGlzZSIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsT0FBT0MsUUFBUSxNQUFSLENBQWI7O0FBRUEsSUFBTUMsYUFBYUQsUUFBUSxlQUFSLENBQW5COztJQUVRRSxPLEdBQVlILEksQ0FBWkcsTzs7SUFFRkMsbUI7Ozs7Ozs7Ozs7O21DQUNXO0FBQ2JGLGlCQUFXRyxhQUFYO0FBQ0Q7OztvQ0FFZTtBQUNkLGFBQU8sZ0JBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsV0FBS0MsT0FBTCxDQUFhLEtBQUtDLFlBQWxCO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUNoQyxVQUFNQyxzQkFBc0JOLFFBQVFPLGNBQVIsQ0FBdUJOLG1CQUF2QixFQUE0Q0ksVUFBNUMsQ0FBNUI7O0FBRUFDLDBCQUFvQkUsVUFBcEI7O0FBRUEsYUFBT0YsbUJBQVA7QUFDRDs7OztFQW5CK0JOLE87O0FBc0JsQ1MsT0FBT0MsTUFBUCxDQUFjVCxtQkFBZCxFQUFtQztBQUNqQ1UsV0FBUyxRQUR3QjtBQUVqQ0MscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGYyxDQUFuQzs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQmQsbUJBQWpCIiwiZmlsZSI6InJlc2V0UGFzc3dvcmRCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9jb250cm9sbGVyJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeTtcblxuY2xhc3MgUmVzZXRQYXNzd29yZEJ1dHRvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjbGlja0hhbmRsZXIoKSB7XG4gICAgY29udHJvbGxlci5yZXNldFBhc3N3b3JkKCk7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAnUmVzZXQgcGFzc3dvcmQnO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCByZXNldFBhc3N3b3JkQnV0dG9uID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhSZXNldFBhc3N3b3JkQnV0dG9uLCBwcm9wZXJ0aWVzKTtcblxuICAgIHJlc2V0UGFzc3dvcmRCdXR0b24uaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIHJlc2V0UGFzc3dvcmRCdXR0b247XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZXNldFBhc3N3b3JkQnV0dG9uLCB7XG4gIHRhZ05hbWU6ICdidXR0b24nLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3Jlc2V0UGFzc3dvcmQnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlc2V0UGFzc3dvcmRCdXR0b247XG4iXX0=