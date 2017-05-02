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

  function ResetPasswordButton(selector) {
    _classCallCheck(this, ResetPasswordButton);

    var _this = _possibleConstructorReturn(this, (ResetPasswordButton.__proto__ || Object.getPrototypeOf(ResetPasswordButton)).call(this, selector));

    _this.onClick(_this.clickHandler);
    return _this;
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
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(ResetPasswordButton, properties);
    }
  }]);

  return ResetPasswordButton;
}(Element);

Object.assign(ResetPasswordButton, {
  tagName: 'button'
});

module.exports = ResetPasswordButton;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2VzNi9leGFtcGxlcy9tdmNBcHAvdmlldy9yZXNldFBhc3N3b3JkQnV0dG9uLmpzIl0sIm5hbWVzIjpbImVhc3kiLCJyZXF1aXJlIiwiY29udHJvbGxlciIsIkVsZW1lbnQiLCJSZXNldFBhc3N3b3JkQnV0dG9uIiwic2VsZWN0b3IiLCJvbkNsaWNrIiwiY2xpY2tIYW5kbGVyIiwicmVzZXRQYXNzd29yZCIsInByb3BlcnRpZXMiLCJmcm9tUHJvcGVydGllcyIsIk9iamVjdCIsImFzc2lnbiIsInRhZ05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiOztBQUVBLElBQU1DLGFBQWFELFFBQVEsZUFBUixDQUFuQjs7SUFFUUUsTyxHQUFZSCxJLENBQVpHLE87O0lBRUZDLG1COzs7QUFDSiwrQkFBWUMsUUFBWixFQUFzQjtBQUFBOztBQUFBLDBJQUNkQSxRQURjOztBQUdwQixVQUFLQyxPQUFMLENBQWEsTUFBS0MsWUFBbEI7QUFIb0I7QUFJckI7Ozs7bUNBRWM7QUFDYkwsaUJBQVdNLGFBQVg7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxnQkFBUDtBQUNEOzs7bUNBRXFCQyxVLEVBQVk7QUFDaEMsYUFBT04sUUFBUU8sY0FBUixDQUF1Qk4sbUJBQXZCLEVBQTRDSyxVQUE1QyxDQUFQO0FBQ0Q7Ozs7RUFqQitCTixPOztBQW9CbENRLE9BQU9DLE1BQVAsQ0FBY1IsbUJBQWQsRUFBbUM7QUFDakNTLFdBQVM7QUFEd0IsQ0FBbkM7O0FBSUFDLE9BQU9DLE9BQVAsR0FBaUJYLG1CQUFqQiIsImZpbGUiOiJyZXNldFBhc3N3b3JkQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCBjb250cm9sbGVyID0gcmVxdWlyZSgnLi4vY29udHJvbGxlcicpO1xuXG5jb25zdCB7IEVsZW1lbnQgfSA9IGVhc3k7XG5cbmNsYXNzIFJlc2V0UGFzc3dvcmRCdXR0b24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLm9uQ2xpY2sodGhpcy5jbGlja0hhbmRsZXIpO1xuICB9XG5cbiAgY2xpY2tIYW5kbGVyKCkge1xuICAgIGNvbnRyb2xsZXIucmVzZXRQYXNzd29yZCgpO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gJ1Jlc2V0IHBhc3N3b3JkJztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoUmVzZXRQYXNzd29yZEJ1dHRvbiwgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihSZXNldFBhc3N3b3JkQnV0dG9uLCB7XG4gIHRhZ05hbWU6ICdidXR0b24nXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZXNldFBhc3N3b3JkQnV0dG9uO1xuIl19