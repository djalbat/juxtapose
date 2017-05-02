'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var Message = require('./view/message'),
    PasswordForm = require('./view/passwordForm'),
    ResetPasswordButton = require('./view/resetPasswordButton');

var Element = easy.Element;

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'childElements',
    value: function childElements() {
      return [React.createElement(PasswordForm, null), React.createElement(ResetPasswordButton, null), React.createElement(Message, null)];
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      this.assignContext();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return Element.fromProperties(View, properties);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlcy9tdmNBcHAvdmlldy5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIk1lc3NhZ2UiLCJQYXNzd29yZEZvcm0iLCJSZXNldFBhc3N3b3JkQnV0dG9uIiwiRWxlbWVudCIsIlZpZXciLCJhc3NpZ25Db250ZXh0IiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7QUFFQSxJQUFNQyxVQUFVRCxRQUFRLGdCQUFSLENBQWhCO0FBQUEsSUFDTUUsZUFBZUYsUUFBUSxxQkFBUixDQURyQjtBQUFBLElBRU1HLHNCQUFzQkgsUUFBUSw0QkFBUixDQUY1Qjs7SUFJUUksTyxHQUFZTCxJLENBQVpLLE87O0lBRUZDLEk7Ozs7Ozs7Ozs7O29DQUNZO0FBQ2QsYUFBTyxDQUVMLG9CQUFDLFlBQUQsT0FGSyxFQUdMLG9CQUFDLG1CQUFELE9BSEssRUFJTCxvQkFBQyxPQUFELE9BSkssQ0FBUDtBQU9EOzs7b0NBRWU7QUFDZCxXQUFLQyxhQUFMO0FBQ0Q7OzttQ0FFcUJDLFUsRUFBWTtBQUNoQyxhQUFPSCxRQUFRSSxjQUFSLENBQXVCSCxJQUF2QixFQUE2QkUsVUFBN0IsQ0FBUDtBQUNEOzs7O0VBakJnQkgsTzs7QUFvQm5CSyxPQUFPQyxNQUFQLENBQWNMLElBQWQsRUFBb0I7QUFDbEJNLFdBQVMsS0FEUztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQlYsSUFBakIiLCJmaWxlIjoidmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZWFzeSA9IHJlcXVpcmUoJ2Vhc3knKTtcblxuY29uc3QgTWVzc2FnZSA9IHJlcXVpcmUoJy4vdmlldy9tZXNzYWdlJyksXG4gICAgICBQYXNzd29yZEZvcm0gPSByZXF1aXJlKCcuL3ZpZXcvcGFzc3dvcmRGb3JtJyksXG4gICAgICBSZXNldFBhc3N3b3JkQnV0dG9uID0gcmVxdWlyZSgnLi92aWV3L3Jlc2V0UGFzc3dvcmRCdXR0b24nKTtcblxuY29uc3QgeyBFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuKFtcblxuICAgICAgPFBhc3N3b3JkRm9ybSAvPixcbiAgICAgIDxSZXNldFBhc3N3b3JkQnV0dG9uIC8+LFxuICAgICAgPE1lc3NhZ2UgLz5cblxuICAgIF0pO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVmlldywgcHJvcGVydGllcyk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaWV3LCB7XG4gIHRhZ05hbWU6ICdkaXYnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZXc7XG4iXX0=